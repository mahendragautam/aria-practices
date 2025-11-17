#!/usr/bin/env python3
import re

files = [
    ('Science-questions.js', 'Science'),
    ('math-questions.js', 'Math'),
    ('history-questions.js', 'History'),
    ('geography-questions.js', 'Geography'),
    ('english-questions.js', 'English'),
    ('health-questions.js', 'Health'),
    ('environment-questions.js', 'Environment'),
    ('business-questions.js', 'Business'),
    ('technology-questions.js', 'Technology'),
    ('parenting-questions.js', 'Parenting'),
    ('animals-questions.js', 'Animals'),
    ('art-culture-questions.js', 'Art & Culture'),
    ('food-drinks-questions.js', 'Food & Drinks'),
    ('movies-tv-questions.js', 'Movies & TV'),
    ('sports-questions.js', 'Sports')
]

EXPECTED_PATTERN = '0,1,0,1,1,0,1,0,0,1'

print("=" * 70)
print("FINAL VERIFICATION - ALL 15 SUBJECTS")
print("=" * 70)

all_perfect = True

for filename, name in files:
    try:
        with open(filename, 'r') as f:
            content = f.read()
        
        # Find position of first easy section
        easy_pos = re.search(r'(?:easy|"easy")\s*:\s*\[', content)

        if not easy_pos:
            print(f"⚠️  {name:20s} - No easy section found")
            all_perfect = False
            continue

        # Get content starting from easy section
        content_from_easy = content[easy_pos.end():]

        # Find where section ends (at medium/hard/extreme or closing brace)
        section_end = re.search(r'(?:medium|hard|extreme|"medium"|"hard"|"extreme")\s*:', content_from_easy)
        if section_end:
            easy_section = content_from_easy[:section_end.start()]
        else:
            easy_section = content_from_easy[:5000]  # Take first 5000 chars

        # Get answers (handle both quoted and unquoted)
        answers = re.findall(r'["\']?correct["\']?\s*:\s*(\d+)', easy_section)
        
        if not answers or len(answers) < 10:
            print(f"⚠️  {name:20s} - Only {len(answers)} questions found")
            all_perfect = False
            continue
        
        # Check pattern
        pattern = ','.join(answers[:10])
        
        # Get emojis (handle both quoted and unquoted)
        emojis = re.findall(r'["\']?emoji["\']?\s*:\s*["\']([^"\']+)["\']', easy_section)
        unique_count = len(set(emojis[:10]))
        
        if pattern == EXPECTED_PATTERN and unique_count >= 9:
            print(f"✅ {name:20s} - Pattern ✓  Emojis: {unique_count}/10 unique")
        else:
            print(f"❌ {name:20s} - Pattern: {pattern}")
            if unique_count < 9:
                print(f"   ⚠️  Only {unique_count}/10 unique emojis")
            all_perfect = False
        
    except FileNotFoundError:
        print(f"❌ {name:20s} - FILE NOT FOUND")
        all_perfect = False
    except Exception as e:
        print(f"❌ {name:20s} - Error: {e}")
        all_perfect = False

print("=" * 70)
if all_perfect:
    print("🎉🎉🎉 ALL 15 SUBJECTS PERFECT! 🎉🎉🎉")
else:
    print("⚠️  Some issues remain")
print("=" * 70)

