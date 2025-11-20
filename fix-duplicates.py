#!/usr/bin/env python3
"""
Remove duplicate questions from quiz files while preserving structure
"""
import re
from collections import defaultdict

def fix_duplicates_in_file(filename):
    """Remove duplicate questions from a file"""
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"⚠️  {filename} not found")
        return False
    
    lines = content.split('\n')
    
    # Track questions we've seen
    seen_questions = {}  # question_text -> first chapter number
    
    # Track current position
    current_chapter = None
    in_question = False
    question_start_line = None
    question_text = None
    question_lines = []
    
    new_lines = []
    duplicates_removed = 0
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Detect chapter number
        ch_match = re.match(r'\s*["\']?(\d+)["\']?\s*:\s*\{', line)
        if ch_match:
            current_chapter = int(ch_match.group(1))
        
        # Detect question start
        if re.search(r'["\']?question["\']?\s*:', line):
            in_question = True
            question_start_line = i
            
            # Extract question text
            q_match = re.search(r'["\']?question["\']?\s*:\s*["\']([^"\']+)["\']', line)
            if q_match:
                question_text = q_match.group(1).strip()
        
        # If we're in a question, collect lines until we find the closing brace
        if in_question:
            question_lines.append(line)
            
            # Check if this is the end of the question object
            if re.search(r'^\s*\}', line):
                # End of question - check if it's a duplicate
                if question_text:
                    if question_text in seen_questions:
                        # Duplicate found - skip these lines
                        first_ch = seen_questions[question_text]
                        if current_chapter != first_ch:  # Only skip if in different chapter
                            duplicates_removed += 1
                            question_lines = []  # Clear without adding
                    else:
                        # First occurrence - keep it
                        seen_questions[question_text] = current_chapter
                        new_lines.extend(question_lines)
                        question_lines = []
                else:
                    # No question text found, keep it anyway
                    new_lines.extend(question_lines)
                    question_lines = []
                
                in_question = False
                question_text = None
                i += 1
                continue
        else:
            # Not in a question, just add the line
            new_lines.append(line)
        
        i += 1
    
    if duplicates_removed > 0:
        # Write back
        with open(filename, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"✅ {filename}: Removed {duplicates_removed} duplicate questions")
        return True
    else:
        print(f"✅ {filename}: No duplicates found")
        return False

# Fix specific files with known duplicates
files_to_fix = [
    'animals-questions.js',
    'art-culture-questions.js',
    'movies-tv-questions.js',
    'sports-questions.js',
    'food-drinks-questions.js',
    'Science-questions.js'
]

print("=" * 80)
print("REMOVING DUPLICATE QUESTIONS FROM QUIZ FILES")
print("=" * 80)

total_fixed = 0
for filename in files_to_fix:
    print(f"\nProcessing {filename}...")
    if fix_duplicates_in_file(filename):
        total_fixed += 1

print(f"\n{'=' * 80}")
print(f"✅ Fixed {total_fixed} files")
print("=" * 80)

