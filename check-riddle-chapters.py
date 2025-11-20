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

# Find all chapter files
chapter_files = sorted(glob.glob("Chapter*.js") + glob.glob("Chapter*[!.js]"))

print("=" * 90)
print("RIDDLE CHAPTERS VERIFICATION")
print("=" * 90)

all_riddles = []
chapter_info = []

for filepath in chapter_files:
    try:
        # Extract chapter number from filename
        ch_match = re.search(r'Chapter[\s-]*(\d+)', filepath)
        if not ch_match:
            ch_match = re.search(r'Chapter[\s-]*(1)', filepath)  # Chapter-1-Trick
        
        if ch_match:
            ch_num = int(ch_match.group(1))
        else:
            print(f"⚠️  Cannot parse chapter number from: {filepath}")
            continue
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Detect format - is it JavaScript or plain text?
        is_js = filepath.endswith('.js')
        
        if is_js:
            # Extract riddles from JS format
            riddles = re.findall(r'["\']?riddle["\']?\s*:\s*["\']([^"\']+)["\']', content)
            emojis = re.findall(r'["\']?emoji["\']?\s*:\s*["\']([^"\']+)["\']', content)
            answers = re.findall(r'["\']?answer["\']?\s*:\s*["\']([^"\']+)["\']', content)
        else:
            # Try to parse plain text format
            riddles = re.findall(r'"riddle":\s*"([^"]+)"', content)
            emojis = re.findall(r'"emoji":\s*"([^"]+)"', content)
            answers = re.findall(r'"answer":\s*"([^"]+)"', content)
        
        all_riddles.extend([(r, ch_num) for r in riddles])
        
        # Check for issues
        status = "✅"
        issues = []
        
        if len(riddles) == 0:
            status = "❌"
            issues.append("NO RIDDLES FOUND")
        elif len(riddles) < 10:
            status = "⚠️ "
            issues.append(f"Only {len(riddles)} riddles")
        
        if len(riddles) != len(answers):
            status = "⚠️ "
            issues.append(f"Riddle/Answer mismatch: {len(riddles)}r/{len(answers)}a")
        
        if len(riddles) != len(emojis):
            status = "⚠️ "
            issues.append(f"Riddle/Emoji mismatch: {len(riddles)}r/{len(emojis)}e")
        
        # Check for duplicate riddles within chapter
        riddle_counts = Counter(riddles)
        dups_in_chapter = [r for r, c in riddle_counts.items() if c > 1]
        if dups_in_chapter:
            status = "⚠️ "
            issues.append(f"{len(dups_in_chapter)} duplicate riddles in chapter")
        
        # Check emoji uniqueness
        if emojis:
            emoji_counts = Counter(emojis)
            unique_emoji_pct = len(emoji_counts) / len(emojis) * 100
            if unique_emoji_pct < 80:
                status = "⚠️ "
                issues.append(f"Only {len(emoji_counts)}/{len(emojis)} unique emojis")
        
        chapter_info.append({
            'num': ch_num,
            'file': filepath,
            'riddles': len(riddles),
            'answers': len(answers),
            'emojis': len(emojis),
            'status': status,
            'issues': issues,
            'is_js': is_js
        })
        
    except Exception as e:
        print(f"❌ Error processing {filepath}: {e}")

# Sort by chapter number
chapter_info.sort(key=lambda x: x['num'])

print(f"\n📊 FOUND {len(chapter_info)} CHAPTER FILES\n")

# Display per-chapter info
print("📋 CHAPTER COMPLETENESS:")
for info in chapter_info:
    ch_num = info['num']
    status = info['status']
    riddles = info['riddles']
    answers = info['answers']
    emojis = info['emojis']
    file_type = "JS" if info['is_js'] else "TXT"
    
    if info['issues']:
        print(f"   {status} Ch {ch_num:2d} ({file_type}): {', '.join(info['issues'])}")
    else:
        print(f"   {status} Ch {ch_num:2d} ({file_type}): {riddles} riddles, {answers} answers, {emojis} emojis")

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

# Check for global duplicate riddles
print(f"\n🔍 DUPLICATE RIDDLES ACROSS CHAPTERS:")
riddle_locations = {}
for riddle_text, ch_num in all_riddles:
    if riddle_text not in riddle_locations:
        riddle_locations[riddle_text] = []
    riddle_locations[riddle_text].append(ch_num)

global_dups = {r: chs for r, chs in riddle_locations.items() if len(chs) > 1}

if global_dups:
    print(f"   ❌ FOUND {len(global_dups)} DUPLICATE RIDDLES:")
    for i, (riddle, chapters) in enumerate(list(global_dups.items())[:10]):
        riddle_short = riddle[:70] + "..." if len(riddle) > 70 else riddle
        print(f"      {i+1}. '{riddle_short}'")
        print(f"         Appears in chapters: {sorted(chapters)}")
    if len(global_dups) > 10:
        print(f"      ... and {len(global_dups) - 10} more duplicates")
else:
    print(f"   ✅ No duplicate riddles across chapters!")

# Summary
print(f"\n📈 SUMMARY:")
print(f"   Total chapters: {len(chapter_info)}")
print(f"   Total riddles: {len(all_riddles)}")
print(f"   Unique riddles: {len(riddle_locations)}")
print(f"   Duplicate riddles: {len(global_dups)}")
print(f"   Missing chapters: {len(missing)}")

if not global_dups and not missing and all(i['status'] == '✅' for i in chapter_info):
    print(f"\n🎉 ALL RIDDLE CHAPTERS PERFECT!")

