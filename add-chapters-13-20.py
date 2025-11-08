#!/usr/bin/env python3
import subprocess
import re
import os

def get_chapters_13_20_from_git(filename):
    """Extract chapters 13-20 from git history commit 4ea5fb00"""
    try:
        result = subprocess.run(
            ['git', 'show', f'4ea5fb00:{filename}'],
            capture_output=True, text=True, check=True
        )
        content = result.stdout

        # Find start of chapter 13
        chapter_13_match = re.search(r'\n    13: \{[^\n]*\n', content)
        if not chapter_13_match:
            return None

        start_pos = chapter_13_match.start()

        # Find end (either chapter 21 or end of chapters object)
        chapter_21_match = re.search(r'\n    21: \{[^\n]*\n', content)
        if chapter_21_match:
            end_pos = chapter_21_match.start()
        else:
            # Find the closing of the chapters object
            end_match = re.search(r'\n\};?\s*$', content)
            if end_match:
                end_pos = end_match.start()
            else:
                return None

        chapters_13_20 = content[start_pos:end_pos]
        return chapters_13_20

    except subprocess.CalledProcessError:
        return None

def append_chapters_to_file(filename, chapters_content):
    """Append chapters 13-20 to existing file with chapters 1-12"""
    with open(filename, 'r') as f:
        content = f.read()

    # Find the last closing brace of chapter 12
    # Try pattern with comma first (most files)
    pattern1 = r'(\n        \]\n    \}),\s*\n\};?\s*$'
    match = re.search(pattern1, content)

    if match:
        # File already has comma, just insert chapters
        new_content = content[:match.end(1)] + ',\n    ' + chapters_content.lstrip('\n') + '\n};\n'
    else:
        # Try pattern with comma on separate line (business file)
        pattern2 = r'(\n        \]\n    \})\n,\s*\n\};?\s*$'
        match = re.search(pattern2, content)
        if match:
            # File has comma on separate line
            new_content = content[:match.end(1)] + ',\n    ' + chapters_content.lstrip('\n') + '\n};\n'
        else:
            # Try pattern without comma
            pattern3 = r'(\n        \]\n    \})\s*\n\};?\s*$'
            match = re.search(pattern3, content)
            if match:
                # Add comma before inserting chapters
                new_content = content[:match.end(1)] + ',\n    ' + chapters_content.lstrip('\n') + '\n};\n'
            else:
                print(f"⚠️  Could not find insertion point in {filename}")
                return False

    with open(filename, 'w') as f:
        f.write(new_content)

    return True

def main():
    files = [
        'Science-questions.js',
        'math-questions.js',
        'history-questions.js',
        'geography-questions.js',
        'english-questions.js',
        'health-questions.js',
        'environment-questions.js',
        'business-questions.js',
        'technology-questions.js',
        'parenting-questions.js'
    ]

    print("Extracting chapters 13-20 from git history...\n")

    for filename in files:
        print(f"Processing {filename}...")

        # Extract chapters from git
        chapters = get_chapters_13_20_from_git(filename)

        if chapters is None:
            print(f"  ❌ Failed to extract chapters from git")
            continue

        # Append to current file
        if append_chapters_to_file(filename, chapters):
            print(f"  ✅ Successfully added chapters 13-20")
        else:
            print(f"  ❌ Failed to append chapters")

    print("\n✨ Extraction complete!")

if __name__ == '__main__':
    main()
