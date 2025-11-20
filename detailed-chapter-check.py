#!/usr/bin/env python3
import re
from collections import Counter

files = [
    ('Science-questions.js', 'Science'),
    ('animals-questions.js', 'Animals'),
    ('art-culture-questions.js', 'Art & Culture'),
    ('movies-tv-questions.js', 'Movies & TV'),
    ('sports-questions.js', 'Sports'),
    ('food-drinks-questions.js', 'Food & Drinks')
]

print("=" * 90)
print("DETAILED ISSUES REPORT - CHAPTERS 1-20")
print("=" * 90)

for filename, subject_name in files:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"\n{'='*90}")
        print(f"📚 {subject_name.upper()}")
        print(f"{'='*90}")
        
        # Try both quoted and unquoted chapter keys
        chapter_pattern = r'["\']?(\d+)["\']?\s*:\s*\{(.*?)(?=["\']?\d+["\']?\s*:\s*\{|\Z)'
        chapters = re.findall(chapter_pattern, content, re.DOTALL)
        
        if not chapters:
            print("⚠️  No chapters found - checking file structure...")
            continue
        
        chapter_numbers = sorted([int(ch[0]) for ch in chapters])
        max_ch = max(chapter_numbers)
        
        print(f"\n📊 STRUCTURE:")
        print(f"   Chapters found: {chapter_numbers}")
        print(f"   Total chapters: {len(chapters)}")
        
        # Check for missing chapters 1-20
        missing = [i for i in range(1, 21) if i not in chapter_numbers]
        if missing:
            print(f"   ❌ MISSING CHAPTERS: {missing}")
        
        # Check duplicates and emojis per chapter
        all_questions = []
        all_emojis = []
        
        print(f"\n📋 PER CHAPTER ANALYSIS:")
        for ch_num, ch_content in sorted(chapters, key=lambda x: int(x[0]))[:20]:
            ch_num_int = int(ch_num)
            
            questions = re.findall(r'["\']?question["\']?\s*:\s*["\']([^"\']+)["\']', ch_content)
            emojis = re.findall(r'["\']?emoji["\']?\s*:\s*["\']([^"\']+)["\']', ch_content)
            
            all_questions.extend([(q, ch_num_int) for q in questions])
            all_emojis.extend([(e, ch_num_int) for e in emojis])
            
            # Check for duplicates within this chapter
            q_counts = Counter(questions)
            ch_duplicates = [q for q, c in q_counts.items() if c > 1]
            
            e_counts = Counter(emojis)
            e_unique = len(e_counts)
            
            status = "✅"
            issues = []
            
            if len(questions) == 0:
                status = "❌"
                issues.append("NO QUESTIONS")
            elif len(questions) < 10:
                status = "⚠️ "
                issues.append(f"Only {len(questions)} questions")
            
            if len(questions) != len(emojis):
                status = "⚠️ "
                issues.append(f"Q/E mismatch: {len(questions)}q/{len(emojis)}e")
            
            if ch_duplicates:
                status = "⚠️ "
                issues.append(f"{len(ch_duplicates)} dup questions in chapter")
            
            if e_unique < len(emojis) * 0.8:  # Less than 80% unique
                status = "⚠️ "
                issues.append(f"Only {e_unique}/{len(emojis)} unique emojis")
            
            if issues:
                print(f"   {status} Ch {ch_num_int:2d}: {', '.join(issues)}")
            else:
                print(f"   {status} Ch {ch_num_int:2d}: {len(questions)}q, {e_unique} unique emojis")
        
        # Global duplicate check
        print(f"\n🔍 DUPLICATE QUESTIONS ACROSS ALL CHAPTERS:")
        q_text_with_chapters = {}
        for q_text, ch_num in all_questions:
            if q_text not in q_text_with_chapters:
                q_text_with_chapters[q_text] = []
            q_text_with_chapters[q_text].append(ch_num)
        
        duplicates = {q: chs for q, chs in q_text_with_chapters.items() if len(chs) > 1}
        
        if duplicates:
            print(f"   ❌ FOUND {len(duplicates)} DUPLICATE QUESTIONS:")
            for i, (q, chapters_list) in enumerate(list(duplicates.items())[:10]):
                q_short = q[:70] + "..." if len(q) > 70 else q
                print(f"      {i+1}. '{q_short}'")
                print(f"         Appears in chapters: {sorted(chapters_list)}")
            if len(duplicates) > 10:
                print(f"      ... and {len(duplicates) - 10} more duplicates")
        else:
            print(f"   ✅ No duplicate questions!")
        
        # Emoji reuse check
        print(f"\n🎨 EMOJI USAGE:")
        emoji_list = [e for e, _ in all_emojis]
        emoji_counts = Counter(emoji_list)
        total_emojis = len(emoji_list)
        unique_emojis = len(emoji_counts)
        
        print(f"   Total emoji uses: {total_emojis}")
        print(f"   Unique emojis: {unique_emojis}")
        
        if unique_emojis < total_emojis:
            repeated = {e: c for e, c in emoji_counts.items() if c > 1}
            print(f"   ⚠️  {len(repeated)} emojis repeated across chapters")
            print(f"   Most used emojis:")
            for e, count in list(emoji_counts.most_common(5)):
                print(f"      {e} - used {count} times")
        
    except FileNotFoundError:
        print(f"\n❌ {subject_name}: FILE NOT FOUND")
    except Exception as e:
        print(f"\n❌ {subject_name}: ERROR - {e}")
        import traceback
        traceback.print_exc()

