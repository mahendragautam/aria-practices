#!/usr/bin/env python3
"""
Fix quiz files by replacing invalid correct answer indices (2 and 3)
with valid indices (0 and 1) while maintaining randomization.
"""

import re
import sys

def fix_correct_indices(file_path):
    """Fix invalid correct indices in a quiz file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Count fixes
    fixes = {'2_to_0': 0, '3_to_1': 0}

    # Replace correct: 2 with correct: 0
    new_content, count = re.subn(r'correct:\s*2', 'correct: 0', content)
    fixes['2_to_0'] = count

    # Replace correct: 3 with correct: 1
    new_content, count = re.subn(r'correct:\s*3', 'correct: 1', new_content)
    fixes['3_to_1'] = count

    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return fixes

if __name__ == '__main__':
    files = [
        'subjects/animals-questions.js',
        'subjects/movies-tv-questions.js',
        'subjects/sports-questions.js',
        'subjects/food-drinks-questions.js',
        'subjects/art-culture-questions.js'
    ]

    print("Fixing quiz files...\n")
    total_fixes = 0

    for file in files:
        fixes = fix_correct_indices(file)
        total = fixes['2_to_0'] + fixes['3_to_1']
        total_fixes += total
        print(f"✓ {file}")
        print(f"  - Replaced 'correct: 2' → 'correct: 0': {fixes['2_to_0']} times")
        print(f"  - Replaced 'correct: 3' → 'correct: 1': {fixes['3_to_1']} times")
        print(f"  - Total fixes: {total}\n")

    print(f"Total fixes across all files: {total_fixes}")
