#!/usr/bin/env python3
"""
Fix answer patterns and emoji diversity across ALL subject question files
Handles both quoted and unquoted JSON formats
"""
import re
import sys

# Zigzag pattern for unpredictability
ANSWER_PATTERN = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]

# Diverse emoji sets for each subject (30 unique pairs each)
EMOJI_SETS = {
    'science': [
        "🧬💉", "⚡🔋", "⚗️🧪", "🌍🌙", "🫀💓", "🌡️❄️", "💎✨", "☀️🌟",
        "🦴🩻", "🔊📢", "🧲🔗", "🌈🎨", "🔬🧫", "🪐🌌", "🌿🌱",
        "💧💦", "🔥🌋", "🌊🌀", "🧠💭", "🫁🫀", "🦷🦴", "👁️👀",
        "🌤️⛅", "❄️🌨️", "🌪️💨", "⚛️🔬", "🧪⚗️", "💊💉", "🔭🌠", "🌏🗺️"
    ],
    'math': [
        "➕➖", "✖️➗", "🔺📐", "💯🔢", "⭕🔵", "🔢💯", "📊📈", "🟦📏",
        "💰💵", "⏰🕐", "📏📐", "🎯🎲", "🧮💹", "📉📊", "∞➰",
        "🔶🔷", "⚖️⚗️", "🎰🃏", "📐🔺", "💱💲", "🔀🔁", "🎲🎯",
        "📈📊", "🧩🔢", "🔤🔡", "🎓📚", "✏️📝", "📌📍", "🗂️📋", "🧮🔢"
    ],
    'history': [
        "👑🏰", "⚔️🛡️", "📜🖋️", "🏛️🏺", "🗿🗽", "🎖️🏅", "🕰️⌛", "🗺️🧭",
        "📖📚", "🏺⚱️", "🎭🎪", "🚂🚢", "⚓🚢", "🏴🏳️", "🗝️🔐",
        "👨‍🌾🌾", "🏹🎯", "📯🎺", "🎨🖼️", "🏗️🏛️", "📿⛪", "🕌🛕",
        "🏯🏰", "⚒️🔨", "📜📄", "🖊️✒️", "🗞️📰", "🎖️🏆", "👔🎩", "🚀🛸"
    ],
    'geography': [
        "🌍🌎", "🏔️⛰️", "🌊🏖️", "🏜️🏝️", "🌲🌳", "🗻🏔️", "🏞️🌄", "🗾🗺️",
        "🧭🗺️", "🌐🗺️", "🏙️🌆", "🏘️🏡", "🌃🌉", "🌅🌄", "🌋🗻",
        "💧🌊", "🏖️🏝️", "🏕️⛺", "🎿🏂", "🚣🛶", "🏞️🏔️", "🗼🏯",
        "🌁🌫️", "🌤️⛅", "🌦️🌧️", "⚡🌩️", "🌈☀️", "❄️⛄", "🌸🌺", "🍂🍁"
    ],
    'english': [
        "📖📚", "✍️📝", "📜📄", "🖊️✒️", "💬💭", "📰🗞️", "📚📕", "📔📓",
        "🔤🔡", "📗📘", "📙📖", "📝✏️", "🖋️🖊️", "💌📧", "📬📭",
        "🗒️📋", "📄📃", "🏷️🔖", "🎭📖", "🗣️💬", "✉️📨", "📢📣",
        "🎤🎧", "📻📺", "🎬🎞️", "📸📷", "🖼️🎨", "🎵🎶", "🎼🎹", "📱💻"
    ],
    'health': [
        "💪🏋️", "🏃🚴", "🥗🥙", "💊💉", "🫀❤️", "🧘🤸", "😴💤", "🚴🏃",
        "🥤🧃", "🥛🍼", "🍎🍏", "🥦🥬", "🧠🧘", "🏥🩺", "💆🛀",
        "🧖🏊", "🤾⛹️", "🏐⚽", "🎾🏓", "🧗🏂", "🩹🩺", "🦷😁",
        "👓👁️", "👂🦻", "🫁🫀", "💪🦾", "🦵🦿", "🧬🔬", "💉🩸", "🧪⚗️"
    ],
    'environment': [
        "🌱🌿", "♻️🔄", "🌍🌏", "🌳🌲", "🐝🦋", "🌸🌺", "💧🌊", "☀️🌤️",
        "🌾🌿", "🏞️🌄", "🗻🏔️", "🌊🏖️", "🐠🐟", "🐢🐙", "🦜🦚",
        "🐘🦏", "🦁🐯", "🐼🐨", "🌵🌴", "🍃🌿", "🌬️💨", "⛰️🏔️",
        "🔥🌡️", "❄️🧊", "🌧️☔", "⚡🌩️", "🌈🌦️", "🌅🌄", "🌃🌆", "🏭🏗️"
    ],
    'business': [
        "💼👔", "💰💵", "📊📈", "🏢🏦", "💳💸", "📈📉", "🤝💼", "💡🔦",
        "📱💻", "🖥️⌨️", "📞☎️", "📧💌", "🗂️📋", "📝✍️", "🎯🎲",
        "📅🗓️", "⏰⏱️", "🏆🥇", "🎖️🏅", "📢📣", "🔔📯", "🚀🛸",
        "💹📊", "🏪🛍️", "🛒🏬", "📦📫", "🚚🚛", "✈️🌐", "🗺️🧭", "💎💍"
    ],
    'technology': [
        "💻🖥️", "📱📲", "⌨️🖱️", "🖨️📠", "💾💿", "📡🛰️", "🔌🔋", "💡🔦",
        "🤖🦾", "🚀🛸", "🔬🧬", "⚙️🔧", "🛠️🔨", "📊📈", "🌐💻",
        "🔒🔐", "🔑🗝️", "📧💌", "☁️💾", "🖼️📸", "🎮🕹️", "🎧🎤",
        "📹📷", "🎬🎞️", "📺📻", "⚡💡", "🧪⚗️", "🔭🌌", "🗂️📋", "💳💰"
    ],
    'parenting': [
        "👶🍼", "🧸🎀", "🎈🎂", "📚📖", "✏️🖍️", "🎨🖌️", "🧩🎲", "⚽🏀",
        "🏐🎾", "🚲🛴", "🎮🕹️", "📱💻", "🏫🎒", "🍎🥤", "🥗🍱",
        "😴🛌", "🛁🧼", "👕👗", "👞🥿", "🧦🧤", "🎵🎶", "🎤🎧",
        "📺📻", "🎬🍿", "🏃🤸", "🧘🏊", "🏕️⛺", "🏖️🏝️", "🎡🎢", "🎪🎭"
    ],
    'animals': [
        "🐘🦏", "🦅🦜", "🐬🐳", "🦁🐯", "🐼🐨", "🦒🦓", "🐧🦆", "🦋🐛",
        "🐝🐜", "🦈🐙", "🐢🐊", "🦎🐍", "🦉🦇", "🐺🦊", "🐻🐨",
        "🐰🐹", "🐭🐀", "🐴🦄", "🐮🐷", "🐔🐓", "🦃🦚", "🦢🦩",
        "🐸🦎", "🦗🦟", "🕷️🕸️", "🐌🦗", "🦞🦀", "🐠🐟", "🐡🦈", "🐙🦑"
    ],
    'movies': [
        "🎬🎥", "🎭🎪", "🍿🥤", "🎞️📽️", "📺📻", "🎤🎧", "🎵🎶", "🏆🥇",
        "⭐🌟", "🎨🖼️", "📸📷", "🎟️🎫", "🎪🎡", "🎢🎠", "🎰🃏",
        "👑💎", "🗡️⚔️", "🚀🛸", "👽🤖", "🦸🦹", "🧙🧚", "🧛🧟",
        "👻💀", "🐉🦖", "🦄🐴", "🏰🏛️", "🗼🌉", "🌃🌆", "💥⚡", "🔥💫"
    ],
    'sports': [
        "⚽🏀", "🏈🏐", "🎾🏓", "🏸🥅", "🏑🏒", "🥊🥋", "⛳🏌️", "🎿⛷️",
        "🏂🛷", "🏇🏇", "🚴🚵", "🏊🤽", "🤾🤺", "🏋️🤸", "🧘🧗",
        "🚣🛶", "🏄🏄", "⛹️🤾", "🥇🥈", "🥉🏆", "🏅🎖️", "🥎⚾",
        "🏉🏐", "🎯🎱", "🎳🏏", "🥍🏑", "🛹🛼", "🏹🎣", "🤿🏊", "⛸️🛼"
    ],
    'food-drinks': [
        "🍕🍔", "🍟🌭", "🍿🥨", "🍩🍪", "🍰🎂", "🧁🍮", "🍫🍬", "🍭🍡",
        "🍦🍨", "🥤🧃", "☕🍵", "🥛🍼", "🍺🍻", "🍷🍾", "🍹🍸",
        "🥗🥙", "🌮🌯", "🍝🍝", "🍜🍲", "🍱🍛", "🍣🍤", "🥟🥠",
        "🍞🥖", "🥐🥯", "🧀🥚", "🥓🍳", "🥞🧇", "🍎🍏", "🍊🍋", "🥑🥥"
    ],
    'art-literature': [
        "🎨🖌️", "🖼️🖍️", "📚📖", "✍️📝", "📜🖋️", "🎭🎪", "🎬🎞️", "🎵🎶",
        "🎼🎹", "🎸🎺", "🥁🎷", "🎻🪕", "📸📷", "🗿🏛️", "🏺⚱️",
        "💎💍", "👑👗", "🎨🌈", "✨💫", "🌟⭐", "📖📕", "📗📘",
        "📙📔", "📓📒", "🖊️✒️", "🖍️🖌️", "🎭🩰", "🎪🎡", "🎨🖼️", "📚📑"
    ]
}

def fix_file(filename, subject_key):
    """Fix answer patterns and emojis in a question file"""

    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"⚠️  {filename} not found, skipping...")
        return False

    # Get emoji set for this subject
    emoji_set = EMOJI_SETS.get(subject_key, EMOJI_SETS['science'])

    # Split into lines
    lines = content.split('\n')
    new_lines = []

    # Track position across entire file
    question_count = 0
    in_easy_section = False

    for i, line in enumerate(lines):
        # Detect easy section start - RESET COUNTER EACH TIME
        if re.search(r'easy\s*:', line) or re.search(r'"easy"\s*:', line):
            in_easy_section = True
            question_count = 0  # Reset for each easy section
            new_lines.append(line)
            continue

        # Detect section end (medium/hard)
        if re.search(r'(medium|hard)\s*:', line) or re.search(r'"(medium|hard)"\s*:', line):
            in_easy_section = False
            question_count = 0  # Reset counter when leaving easy

        # Fix answer pattern ONLY in easy sections
        if in_easy_section and ('"correct":' in line or 'correct:' in line):
            # Use zigzag pattern
            new_correct = ANSWER_PATTERN[question_count % 10]
            # Handle both quoted and unquoted
            line = re.sub(r'correct:\s*\d+', f'correct: {new_correct}', line)
            line = re.sub(r'"correct":\s*\d+', f'"correct": {new_correct}', line)
            question_count += 1

        # Fix emojis globally
        if '"emoji":' in line or 'emoji:' in line:
            # Calculate emoji index from total position in file
            emoji_matches_so_far = len([l for l in new_lines if '"emoji":' in l or 'emoji:' in l])
            if emoji_matches_so_far < len(emoji_set):
                new_emoji = emoji_set[emoji_matches_so_far]
                # Handle both quoted and unquoted
                line = re.sub(r'emoji:\s*["\'][^"\']+["\']', f'emoji: "{new_emoji}"', line)
                line = re.sub(r'"emoji":\s*"[^"]+"', f'"emoji": "{new_emoji}"', line)

        new_lines.append(line)

    # Write back
    with open(filename, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))

    return True

# Process ALL 15 subject files
subjects = {
    'Science-questions.js': 'science',
    'math-questions.js': 'math',
    'history-questions.js': 'history',
    'geography-questions.js': 'geography',
    'english-questions.js': 'english',
    'health-questions.js': 'health',
    'environment-questions.js': 'environment',
    'business-questions.js': 'business',
    'technology-questions.js': 'technology',
    'parenting-questions.js': 'parenting',
    'animals-questions.js': 'animals',
    'art-culture-questions.js': 'art-literature',
    'food-drinks-questions.js': 'food-drinks',
    'movies-tv-questions.js': 'movies',
    'sports-questions.js': 'sports'
}

print("🔧 Fixing ALL 15 subject files properly...\n")

for filename, subject_key in subjects.items():
    print(f"Processing {filename}...")
    if fix_file(filename, subject_key):
        print(f"✅ Fixed {filename}")
    print()

print("🎉 All 15 files processed!")
