#!/usr/bin/env python3
import re

file = 'art-culture-questions.js'

with open(file, 'r') as f:
    content = f.read()

# Split by chapters
chapters = re.split(r'(\d+): \{', content)[1:]  # Skip first empty

print("Checking art-culture-questions.js easy sections:")
print("=" * 60)

for i in range(0, len(chapters), 2):
    if i+1 >= len(chapters):
        break
    
    chapter_num = chapters[i]
    chapter_content = chapters[i+1]
    
    # Extract easy section
    easy_match = re.search(r'easy: \[(.*?)\](?=\s*,\s*(?:hard|medium|extreme))', chapter_content, re.DOTALL)
    
    if easy_match:
        easy_section = easy_match.group(1)
        answers = re.findall(r'correct: (\d+)', easy_section)
        
        if answers:
            pattern = ','.join(answers[:10])
            expected = '0,1,0,1,1,0,1,0,0,1'
            
            if pattern == expected:
                print(f"✅ Chapter {chapter_num.strip()}: {pattern}")
            else:
                print(f"❌ Chapter {chapter_num.strip()}: {pattern} (expected {expected})")

