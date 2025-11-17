#!/usr/bin/env python3
"""
Fix answer patterns and emoji diversity across ALL subject question files
"""
import re
import sys

# Zigzag pattern for unpredictability
ANSWER_PATTERN = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]

# Diverse emoji sets for each subject
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
    emoji_index = 0

    # Track which chapter we're in
    current_chapter = 0
    question_count = 0

    lines = content.split('\n')
    new_lines = []

    for line in lines:
        # Detect chapter number
        chapter_match = re.match(r'\s*["\']?(\d+)["\']?\s*:\s*{', line)
        if chapter_match:
            current_chapter = int(chapter_match.group(1))
            question_count = 0
            emoji_index = 0

        # Fix answer pattern in easy level
        if '"correct":' in line or 'correct:' in line:
            # Use zigzag pattern
            new_correct = ANSWER_PATTERN[question_count % 10]
            line = re.sub(r'(correct:\s*)\d+', f'\\g<1>{new_correct}', line)
            line = re.sub(r'("correct":\s*)\d+', f'\\g<1>{new_correct}', line)
            question_count += 1

        # Fix emoji diversity
        if '"emoji":' in line or 'emoji:' in line:
            # Replace with unique emoji from set
            if emoji_index < len(emoji_set):
                new_emoji = emoji_set[emoji_index]
                line = re.sub(r'(emoji:\s*["\'])([^"\']+)(["\'])', f'\\g<1>{new_emoji}\\g<3>', line)
                emoji_index += 1

        new_lines.append(line)

    # Write back
    with open(filename, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))

    return True

# Process all subject files
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
    'parenting-questions.js': 'parenting'
}

print("🔧 Fixing all subject files...\n")

for filename, subject_key in subjects.items():
    print(f"Processing {filename}...")
    if fix_file(filename, subject_key):
        print(f"✅ Fixed {filename}")
    print()

print("🎉 All files processed!")
