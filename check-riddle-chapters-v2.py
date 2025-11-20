#!/usr/bin/env python3
"""
Check riddle chapter files for:
- Completeness
- Duplicates
- Emoji uniqueness
- Structure
"""
import re
from collections import Counter
import glob
import os

# Find all chapter files (both .js and without extension)
all_files = []
for f in os.listdir('.'):
    if f.startswith('Chapter') and not f.endswith('.py'):
        all_files.append(f)

chapter_files = sorted(all_files)

print("=" * 90)
print("RIDDLE CHAPTERS VERIFICATION")
print("=" * 90)

all_questions = []
chapter_info = []

for filepath in chapter_files:
    try:
        # Extract chapter number from filename
        ch_match = re.search(r'[Cc]hapter[\s-]*(\d+)', filepath)
        if not ch_match:
            print(f"⚠️  Cannot parse chapter number from: {filepath}")
            continue
        
        ch_num = int(ch_match.group(1))
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract questions (riddle files use "question" field)
        questions = re.findall(r'["\']?question["\']?\s*:\s*["\']([^"\']+?)["\'](?=\s*,)', content, re.DOTALL)
        emojis = re.findall(r'["\']?emoji["\']?\s*:\s*["\']([^"\']+)["\']', content)
        
        # Count answers - both "correct" and "answer" fields
        correct_answers = re.findall(r'["\']?correct["\']?\s*:\s*\d+', content)
        text_answers = re.findall(r'["\']?answer["\']?\s*:\s*["\']', content)
        total_answers = len(correct_answers) + len(text_answers)
        
        all_questions.extend([(q, ch_num) for q in questions])
        
        # Check for issues
        status = "✅"
        issues = []
        
        if len(questions) == 0:
            status = "❌"
            issues.append("NO QUESTIONS FOUND")
        elif len(questions) < 10:
            status = "⚠️ "
            issues.append(f"Only {len(questions)} questions")
        elif len(questions) < 50:
            status = "⚠️ "
            issues.append(f"{len(questions)} questions (expected 100)")
        
        if len(questions) != total_answers and len(questions) > 0:
            status = "⚠️ "
            issues.append(f"Q/A mismatch: {len(questions)}q/{total_answers}a")
        
        if len(questions) != len(emojis) and len(questions) > 0:
            status = "⚠️ "
            issues.append(f"Q/E mismatch: {len(questions)}q/{len(emojis)}e")
        
        # Check for duplicate questions within chapter
        question_counts = Counter(questions)
        dups_in_chapter = [q for q, c in question_counts.items() if c > 1]
        if dups_in_chapter:
            status = "⚠️ "
            issues.append(f"{len(dups_in_chapter)} dup questions")
        
        # Check emoji uniqueness
        if emojis:
            emoji_counts = Counter(emojis)
            unique_emoji_pct = len(emoji_counts) / len(emojis) * 100
            if unique_emoji_pct < 80:
                status = "⚠️ "
                issues.append(f"Only {len(emoji_counts)}/{len(emojis)} unique emojis ({unique_emoji_pct:.0f}%)")
        
        chapter_info.append({
            'num': ch_num,
            'file': filepath,
            'questions': len(questions),
            'answers': total_answers,
            'emojis': len(emojis),
            'status': status,
            'issues': issues
        })
        
    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")
        import traceback
        traceback.print_exc()

# Sort by chapter number
chapter_info.sort(key=lambda x: x['num'])

print(f"\n📊 FOUND {len(chapter_info)} CHAPTER FILES\n")

# Display per-chapter info
print("📋 CHAPTER COMPLETENESS:")
for info in chapter_info:
    ch_num = info['num']
    status = info['status']
    questions = info['questions']
    answers = info['answers']
    emojis = info['emojis']
    
    if info['issues']:
        print(f"   {status} Ch {ch_num:2d}: {', '.join(info['issues'])}")
    else:
        print(f"   {status} Ch {ch_num:2d}: {questions} questions, {answers} answers, {emojis} emojis")

# Check for missing chapters
chapter_nums = [info['num'] for info in chapter_info]
missing = [i for i in range(1, 21) if i not in chapter_nums]
if missing:
    print(f"\n❌ MISSING CHAPTERS: {missing}")
else:
    print(f"\n✅ ALL CHAPTERS 1-20 PRESENT")

# Check for duplicate chapters
duplicates = [num for num in chapter_nums if chapter_nums.count(num) > 1]
if duplicates:
    print(f"⚠️  DUPLICATE CHAPTER NUMBERS: {set(duplicates)}")

# Check for global duplicate questions
print(f"\n🔍 DUPLICATE QUESTIONS ACROSS CHAPTERS:")
question_locations = {}
for question_text, ch_num in all_questions:
    # Normalize question for comparison
    q_norm = question_text.strip()
    if q_norm not in question_locations:
        question_locations[q_norm] = []
    question_locations[q_norm].append(ch_num)

global_dups = {q: chs for q, chs in question_locations.items() if len(chs) > 1}

if global_dups:
    print(f"   ❌ FOUND {len(global_dups)} DUPLICATE QUESTIONS:")
    for i, (question, chapters) in enumerate(list(global_dups.items())[:10]):
        question_short = question[:70] + "..." if len(question) > 70 else question
        print(f"      {i+1}. '{question_short}'")
        print(f"         Appears in chapters: {sorted(chapters)}")
    if len(global_dups) > 10:
        print(f"      ... and {len(global_dups) - 10} more duplicates")
else:
    print(f"   ✅ No duplicate questions across chapters!")

# Summary
print(f"\n📈 SUMMARY:")
print(f"   Total chapters: {len(chapter_info)}")
print(f"   Total questions: {len(all_questions)}")
print(f"   Unique questions: {len(question_locations)}")
print(f"   Duplicate questions: {len(global_dups)}")
print(f"   Missing chapters (1-20): {len(missing)}")

complete_chapters = [i for i in chapter_info if i['status'] == '✅']
print(f"   Complete chapters: {len(complete_chapters)}/{len(chapter_info)}")

if not global_dups and not missing and all(i['status'] == '✅' for i in chapter_info):
    print(f"\n🎉 ALL RIDDLE CHAPTERS PERFECT!")
else:
    print(f"\n⚠️  Some issues need attention")

