#!/usr/bin/env python3
"""
Fix Apostrophe Syntax Errors in JavaScript Question Files
==========================================================
This script converts single-quoted strings containing apostrophes to double-quoted strings
"""

import re
import sys

files_to_fix = [
    'math-questions.js',
    'history-questions.js',
    'geography-questions.js',
    'business-questions.js',
    'parenting-questions.js'
]

def fix_apostrophes_in_line(line):
    """Fix apostrophes in question, answer, and option strings"""

    # Pattern 1: question: 'text with ' inside'
    # Look for question: followed by a string that contains an apostrophe
    def fix_question(match):
        content = match.group(1)
        # If content has apostrophes, switch to double quotes
        if "'" in content or ''' in content or ''' in content:
            # Escape any existing double quotes
            content_escaped = content.replace('"', '\\"')
            return f'question: "{content_escaped}"'
        return match.group(0)

    line = re.sub(r"question:\s*'([^']+(?:'[^']*)*)'", fix_question, line)

    # Pattern 2: answer: 'text with ' inside'
    def fix_answer(match):
        content = match.group(1)
        if "'" in content or ''' in content or ''' in content:
            content_escaped = content.replace('"', '\\"')
            return f'answer: "{content_escaped}"'
        return match.group(0)

    line = re.sub(r"answer:\s*'([^']+(?:'[^']*)*)'", fix_answer, line)

    # Pattern 3: Fix options array items with apostrophes
    # This is trickier - we need to fix individual option strings
    if "'s " in line or "n't" in line or "'" in line:
        # Fix common patterns in options
        # ['text with apostrophe's', ...] -> ["text with apostrophe's", ...]
        def fix_option(match):
            content = match.group(1)
            if "'" in content or ''' in content:
                content_escaped = content.replace('"', '\\"')
                return f'"{content_escaped}"'
            return match.group(0)

        # This regex is more careful - it looks for array items
        line = re.sub(r"'([^']*(?:'s|n't|'t|'m|'re|'ve|'d|'ll)[^']*)'", fix_option, line)

    # Fix double commas
    line = re.sub(r'},\s*,', '},', line)

    return line

print('=' * 60)
print('FIXING APOSTROPHE SYNTAX ERRORS')
print('=' * 60)
print()

fixed_count = 0
error_count = 0

for filename in files_to_fix:
    print(f'Processing: {filename}')

    try:
        # Read file
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        # Fix each line
        fixed_lines = []
        changes = 0
        for i, line in enumerate(lines, 1):
            original = line
            fixed = fix_apostrophes_in_line(line)
            if fixed != original:
                changes += 1
                print(f'  Line {i}: Fixed apostrophe issue')
            fixed_lines.append(fixed)

        # Write back
        with open(filename, 'w', encoding='utf-8') as f:
            f.writelines(fixed_lines)

        print(f'✅ Fixed {changes} lines in {filename}')
        fixed_count += 1

    except Exception as e:
        print(f'❌ Error fixing {filename}: {e}')
        error_count += 1

    print()

print('=' * 60)
print('SUMMARY:')
print(f'✅ Fixed: {fixed_count} files')
print(f'❌ Errors: {error_count} files')
print('=' * 60)
print()
print('Next: Run syntax checker (node -c filename.js) to verify')
