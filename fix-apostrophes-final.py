#!/usr/bin/env python3
"""
Fix ONLY the specific apostrophe issues that break Chapter 7+
- 'm' represents → "'m' represents"
- don't → don\\'t (escaped)
"""

import re

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

def fix_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Fix 1: 'm' represents → "'m' represents"
    content = re.sub(
        r"question: 'm' represents",
        r'''question: "'m' represents''',
        content
    )

    # Fix 2: don't → don\\'t (properly escaped for JavaScript)
    content = re.sub(
        r"don't",
        r"don\\'t",
        content
    )

    # Also fix other common contractions with proper escaping
    content = re.sub(r"can't", r"can\\'t", content)
    content = re.sub(r"won't", r"won\\'t", content)
    content = re.sub(r"doesn't", r"doesn\\'t", content)
    content = re.sub(r"isn't", r"isn\\'t", content)
    content = re.sub(r"aren't", r"aren\\'t", content)
    content = re.sub(r"wasn't", r"wasn\\'t", content)
    content = re.sub(r"weren't", r"weren\\'t", content)
    content = re.sub(r"hasn't", r"hasn\\'t", content)
    content = re.sub(r"haven't", r"haven\\'t", content)
    content = re.sub(r"hadn't", r"hadn\\'t", content)

    if content != original:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

print("=" * 60)
print("FIXING APOSTROPHE ISSUES IN CHAPTER 7+")
print("=" * 60)
print()

for filename in files:
    print(f"Processing {filename}...")
    if fix_file(filename):
        print(f"  ✅ Fixed apostrophes")
    else:
        print(f"  ℹ️  No changes needed")
    print()

print("=" * 60)
print("DONE! Testing with node -c...")
print("=" * 60)
