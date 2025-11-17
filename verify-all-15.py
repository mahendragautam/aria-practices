#!/usr/bin/env python3
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
    'parenting-questions.js',
    'animals-questions.js',
    'art-culture-questions.js',
    'food-drinks-questions.js',
    'movies-tv-questions.js',
    'sports-questions.js'
]

print("=" * 60)
print("VERIFYING ALL 15 SUBJECTS")
print("=" * 60)

for file in files:
    try:
        with open(file, 'r') as f:
            content = f.read()
        
        # Get first 30 answers
        matches = re.findall(r'correct[:\s]+(\d+)', content)
        if matches:
            pattern = [int(x) for x in matches[:30]]
            pattern_str = ','.join(str(x) for x in pattern)
            
            # Check for runs of 3+
            has_runs = False
            i = 0
            while i < len(pattern):
                count = 1
                current = pattern[i]
                j = i + 1
                while j < len(pattern) and pattern[j] == current:
                    count += 1
                    j += 1
                if count >= 3:
                    has_runs = True
                    break
                i = j if j > i + 1 else i + 1
            
            # Get emoji count
            emojis = re.findall(r'emoji[:\s]+["\']([^"\']+)["\']', content)
            unique_emojis = len(set(emojis[:30]))
            
            if has_runs:
                print(f"❌ {file}")
                print(f"   Pattern: {pattern_str}")
                print(f"   Has runs of 3+ same answers!")
            else:
                print(f"✅ {file}")
                print(f"   Pattern: {pattern_str}")
                print(f"   Unique emojis in first 30: {unique_emojis}/30")
        else:
            print(f"⚠️  {file} - No answers found")
    except FileNotFoundError:
        print(f"❌ {file} - FILE NOT FOUND!")
    print()

