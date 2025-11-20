#!/usr/bin/env python3
"""
Comprehensive check for all chapters 1-20:
- Duplication
- Question originality  
- Emoji uniqueness
- Question completeness
"""
import re
from collections import Counter

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

print("=" * 80)
print("COMPREHENSIVE CHECK: CHAPTERS 1-20 - ALL 15 SUBJECTS")
print("=" * 80)

for filename, subject_name in files:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"\n{'='*80}")
        print(f"📚 {subject_name.upper()}")
        print(f"{'='*80}")
        
        # Extract all chapters
        chapter_pattern = r'(\d+)\s*:\s*\{(.*?)(?=\d+\s*:\s*\{|\Z)'
        chapters = re.findall(chapter_pattern, content, re.DOTALL)
        
        chapter_numbers = [int(ch[0]) for ch in chapters]
        max_chapter = max(chapter_numbers) if chapter_numbers else 0
        
        print(f"📊 Total chapters found: {len(chapters)} (Chapter 1-{max_chapter})")
        
        # Collect all questions and emojis
        all_questions = []
        all_emojis = []
        emoji_by_chapter = {}
        questions_by_chapter = {}
        
        for ch_num, ch_content in chapters:
            ch_num = int(ch_num)
            
            # Extract questions from this chapter
            questions = re.findall(r'["\']?question["\']?\s*:\s*["\']([^"\']+)["\']', ch_content)
            emojis = re.findall(r'["\']?emoji["\']?\s*:\s*["\']([^"\']+)["\']', ch_content)
            
            all_questions.extend(questions)
            all_emojis.extend(emojis)
            
            emoji_by_chapter[ch_num] = emojis
            questions_by_chapter[ch_num] = questions
        
        # Check for duplicate questions
        question_counts = Counter(all_questions)
        duplicates = {q: count for q, count in question_counts.items() if count > 1}
        
        if duplicates:
            print(f"\n⚠️  DUPLICATE QUESTIONS FOUND: {len(duplicates)}")
            for q, count in list(duplicates.items())[:3]:  # Show first 3
                print(f"   - '{q[:60]}...' appears {count} times")
            if len(duplicates) > 3:
                print(f"   ... and {len(duplicates) - 3} more duplicates")
        else:
            print(f"\n✅ NO DUPLICATE QUESTIONS - All {len(all_questions)} questions unique!")
        
        # Check emoji uniqueness
        emoji_counts = Counter(all_emojis)
        emoji_duplicates = {e: count for e, count in emoji_counts.items() if count > 1}
        
        if emoji_duplicates:
            print(f"\n⚠️  EMOJI REPETITIONS: {len(emoji_duplicates)} emojis used multiple times")
            for e, count in list(emoji_duplicates.items())[:5]:  # Show first 5
                print(f"   - {e} used {count} times")
            if len(emoji_duplicates) > 5:
                print(f"   ... and {len(emoji_duplicates) - 5} more repeated")
        else:
            print(f"\n✅ ALL EMOJIS UNIQUE - {len(all_emojis)} unique emoji pairs!")
        
        # Check question completeness per chapter
        print(f"\n📋 CHAPTER COMPLETENESS:")
        incomplete_chapters = []
        
        for ch_num in range(1, min(21, max_chapter + 1)):
            if ch_num not in questions_by_chapter:
                print(f"   ❌ Chapter {ch_num}: MISSING")
                incomplete_chapters.append(ch_num)
                continue
            
            q_count = len(questions_by_chapter[ch_num])
            e_count = len(emoji_by_chapter.get(ch_num, []))
            
            # Check if complete (should have questions)
            if q_count == 0:
                print(f"   ❌ Chapter {ch_num}: NO QUESTIONS")
                incomplete_chapters.append(ch_num)
            elif q_count < 10:
                print(f"   ⚠️  Chapter {ch_num}: {q_count} questions (less than 10)")
            elif e_count != q_count:
                print(f"   ⚠️  Chapter {ch_num}: {q_count} questions, {e_count} emojis (mismatch)")
            else:
                print(f"   ✅ Chapter {ch_num}: {q_count} questions, {e_count} emojis")
        
        # Summary for this subject
        print(f"\n📈 SUMMARY:")
        print(f"   Total questions: {len(all_questions)}")
        print(f"   Unique questions: {len(question_counts)}")
        print(f"   Duplicate questions: {len(duplicates)}")
        print(f"   Total emojis: {len(all_emojis)}")
        print(f"   Unique emojis: {len(emoji_counts)}")
        print(f"   Emoji repetitions: {len(emoji_duplicates)}")
        
        if not duplicates and not emoji_duplicates and not incomplete_chapters:
            print(f"   🎉 {subject_name.upper()} IS PERFECT!")
        
    except FileNotFoundError:
        print(f"\n❌ {subject_name}: FILE NOT FOUND - {filename}")
    except Exception as e:
        print(f"\n❌ {subject_name}: ERROR - {e}")

print("\n" + "=" * 80)
print("VERIFICATION COMPLETE")
print("=" * 80)

