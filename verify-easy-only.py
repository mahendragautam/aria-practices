#!/usr/bin/env python3
import re

files = [
    ('Science-questions.js', 'science'),
    ('math-questions.js', 'math'), 
    ('history-questions.js', 'history'),
    ('geography-questions.js', 'geography'),
    ('english-questions.js', 'english'),
    ('health-questions.js', 'health'),
    ('environment-questions.js', 'environment'),
    ('business-questions.js', 'business'),
    ('technology-questions.js', 'technology'),
    ('parenting-questions.js', 'parenting'),
    ('animals-questions.js', 'animals'),
    ('art-culture-questions.js', 'art'),
    ('food-drinks-questions.js', 'food'),
    ('movies-tv-questions.js', 'movies'),
    ('sports-questions.js', 'sports')
]

print("=" * 70)
print("VERIFYING EASY SECTIONS ONLY - ALL 15 SUBJECTS")
print("=" * 70)

all_good = True

for file, name in files:
    try:
        with open(file, 'r') as f:
            content = f.read()
        
        # Extract easy sections only
        easy_sections = re.findall(r'easy\s*:\s*\[(.*?)\](?=\s*,\s*medium|\s*\})', content, re.DOTALL)
        
        if not easy_sections:
            print(f"⚠️  {file} - No easy section found")
            all_good = False
            continue
        
        easy_content = easy_sections[0]
        
        # Get answers from easy section
        answers = re.findall(r'correct[:\s]+"?(\d+)"?', easy_content)
        
        if not answers:
            print(f"⚠️  {file} - No answers in easy section")
            all_good = False
            continue
        
        pattern = [int(x) for x in answers[:30]]
        pattern_str = ','.join(str(x) for x in pattern[:20])  # Show first 20
        
        # Check for runs of 3+
        has_runs = False
        run_details = []
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
                run_details.append(f"{count}x{current}s at pos {i+1}")
            i = j if j > i + 1 else i + 1
        
        # Get unique emojis
        emojis = re.findall(r'emoji[:\s]+"([^"]+)"', easy_content)
        unique_count = len(set(emojis))
        total_count = len(emojis)
        
        if has_runs:
            print(f"❌ {file}")
            print(f"   Pattern: {pattern_str}... (first 20)")
            for detail in run_details:
                print(f"   ⚠️  {detail}")
            all_good = False
        else:
            print(f"✅ {file}")
            print(f"   Pattern: {pattern_str}... (first 20) - No runs!")
            print(f"   Emojis: {unique_count}/{total_count} unique")
        
    except FileNotFoundError:
        print(f"❌ {file} - NOT FOUND")
        all_good = False
    except Exception as e:
        print(f"❌ {file} - Error: {e}")
        all_good = False

print("\n" + "=" * 70)
if all_good:
    print("🎉 ALL 15 SUBJECTS VERIFIED - PERFECT!")
else:
    print("⚠️  Some issues found, see above")
print("=" * 70)

