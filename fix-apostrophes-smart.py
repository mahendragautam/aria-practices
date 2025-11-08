#!/usr/bin/env python3
"""
Smart apostrophe fixer - only changes strings that have apostrophes
Preserves all other content exactly as-is
"""

import re

def fix_string_with_apostrophe(line):
    """
    Fix lines with apostrophe issues
    Only changes strings containing apostrophes/smart quotes
    """
    # Patterns to look for apostrophes/contractions in strings
    # Common: 'm, 's, n't, 'll, 'd, 're, 've, child's, innovator's, etc.

    # Match: question: 'text...' or answer: 'text...'
    # But only if text contains apostrophe/smart quote

    # Check if line has problematic apostrophe pattern
    if ("question:" in line or "answer:" in line or "options:" in line):
        # Look for single-quoted strings with apostrophes inside
        # Pattern: 'text before apostrophe' or apostrophe more text'

        # Match question: 'anything with ' inside'
        pattern1 = r"(question:\s*)'([^']*)('s|'t|'m|'re|'ve|'d|'ll|'|')([^']*)'"
        if re.search(pattern1, line):
            # Replace outer single quotes with double quotes
            line = re.sub(
                r"(question:\s*)'((?:[^']|'s|'t|'m|'re|'ve|'d|'ll|'|')+?)'",
                r'\1"\2"',
                line
            )

        # Match answer: 'anything with ' inside'
        pattern2 = r"(answer:\s*)'([^']*)('s|'t|'m|'re|'ve|'d|'ll|'|')([^']*)'"
        if re.search(pattern2, line):
            line = re.sub(
                r"(answer:\s*)'((?:[^']|'s|'t|'m|'re|'ve|'d|'ll|'|')+?)'",
                r'\1"\2"',
                line
            )

        # Also handle in options arrays
        # ['text with ' inside', 'other']
        # Find and fix each array element
        def fix_option(match):
            content = match.group(1)
            # If contains apostrophe/contraction
            if any(x in content for x in ["'s", "'t", "'m", "'re", "'ve", "'d", "'ll", "'", "'"]):
                return f'"{content}"'
            return match.group(0)

        line = re.sub(r"'([^']*(?:'s|'t|'m|'re|'ve|'d|'ll|'|')[^']*)'", fix_option, line)

    # Fix double commas
    line = re.sub(r'},\s*,', '},', line)

    return line

def fix_file(filename):
    """Fix a single file"""
    print(f"Processing {filename}...")

    try:
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        fixed_lines = []
        changes = 0

        for i, line in enumerate(lines, 1):
            original = line
            fixed = fix_string_with_apostrophe(line)
            if fixed != original:
                changes += 1
                print(f"  Line {i}: Fixed apostrophe issue")
            fixed_lines.append(fixed)

        # Write back
        with open(filename, 'w', encoding='utf-8') as f:
            f.writelines(fixed_lines)

        print(f"  ✅ {changes} lines fixed")
        return True

    except Exception as e:
        print(f"  ❌ Error: {e}")
        return False

# Process files
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

print("=" * 60)
print("SMART APOSTROPHE FIXER")
print("=" * 60)
print()

for f in files:
    fix_file(f)
    print()

print("=" * 60)
print("DONE - Now verifying with node -c...")
print("=" * 60)
