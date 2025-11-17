#!/usr/bin/env python3
"""
Fix question files:
1. Make answers zigzag (not all correct: 0)
2. Diversify emojis per chapter
"""

import re

def fix_answer_pattern(content):
    """Make answer pattern zigzag instead of all same"""
    lines = content.split('\n')
    result = []
    question_count = 0
    in_easy = False
    in_chapter = False

    for line in lines:
        # Track when we're in easy level
        if 'easy: [' in line:
            in_easy = True
            question_count = 0
        elif 'medium: [' in line or 'hard: [' in line or 'expert: [' in line or 'extreme: [' in line:
            in_easy = False

        if 'correct:' in line and in_easy:
            # Zigzag pattern: 0,1,0,1,1,0,1,0,0,1
            patterns = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
            new_correct = patterns[question_count % 10]
            line = re.sub(r'correct:\s*\d+', f'correct: {new_correct}', line)
            question_count += 1

        result.append(line)

    return '\n'.join(result)

def diversify_emojis(content, subject):
    """Add variety to emojis based on subject"""

    emoji_sets = {
        'animals': [
            '🐘🦏', '🦅🦜', '🐬🐳', '🐊🦎', '🐝🦋',
            '🦁🐯', '🐧🦆', '🦈🐡', '🐍🐢', '🐻🐼',
            '🦒🦓', '🦉🦇', '🐙🦑', '🦘🦌', '🐺🦊',
            '🐵🦍', '🦩🦚', '🐠🐟', '🦂🕷️', '🐨🦥',
            '🦭🦦', '🐆🐅', '🦎🐉', '🐋🐚', '🦜🦢',
            '🐃🐄', '🐑🐐', '🐪🦙', '🦡🦫', '🦨🦔'
        ],
        'art': [
            '🎨🖌️', '🎭🎪', '📚📖', '🎬🎥', '🎵🎶',
            '🖼️🏛️', '📝✍️', '🎸🎹', '💃🕺', '🎤🎧',
            '📷📸', '🎻🎺', '🗿🏺', '🖊️📜', '🎪🎡',
            '🌟✨', '💎🏆', '🎯🎲', '🃏🎴', '🧩🎨',
            '🎼🎤', '🖋️📃', '🏺🗿', '🎭✨', '📖🖊️',
            '🎨🌈', '🎪🎠', '🎬📽️', '🎸🥁', '📸🎞️'
        ],
        'food': [
            '🍕🍔', '🍜🍲', '🍣🍱', '🥗🥙', '🍰🎂',
            '☕🍵', '🍷🍺', '🥐🥖', '🍝🍛', '🌮🌯',
            '🍦🍨', '🍓🍇', '🥩🍗', '🧀🥓', '🍫🍬',
            '🥑🍅', '🍌🍊', '🥤🧃', '🍪🧁', '🥟🥠',
            '🥯🥨', '🍿🥤', '🥘🍲', '🥧🍮', '🍩🧁',
            '🥞🧇', '🌭🥪', '🥗🥙', '🍱🍙', '🧆🫓'
        ],
        'movies': [
            '🎬🎥', '🎭🎪', '🏆🌟', '👑💍', '🦸🦹',
            '🚀🌌', '🧙🔮', '🦖🦕', '🕷️🕸️', '⚔️🛡️',
            '💎🏝️', '🐉⚡', '🤖🔧', '🏴‍☠️⚓', '👻👽',
            '🔫💥', '🎩🎪', '🌹💔', '🎸🎤', '🏃💨',
            '🎯🎲', '🎰🃏', '🏎️💨', '🚁✈️', '🦇🌃',
            '👮🔍', '💰💵', '🎭😂', '🎪🤡', '🎬📹'
        ],
        'sports': [
            '⚽🥅', '🏀🏈', '🎾🏐', '🏏🏑', '🏊🏄',
            '🚴🏃', '🥊🥋', '⛷️🏂', '🏋️💪', '🤸🤾',
            '🏇🐎', '🎯🏹', '🏓🎱', '🏌️⛳', '🤺🏆',
            '⚾🥎', '🏉🏒', '🧗🪂', '🤼🥇', '🏅🎖️',
            '🎿⛸️', '🛹🛼', '🥏🪀', '🏸🏓', '⛳🎯',
            '🤽🏊', '🚣🛶', '🧘🤸', '🏋️🤼', '🥋🥊'
        ]
    }

    emojis = emoji_sets.get(subject, emoji_sets['animals'])

    lines = content.split('\n')
    result = []
    emoji_index = 0

    for line in lines:
        if 'emoji:' in line:
            # Replace emoji with varied one
            new_emoji = emojis[emoji_index % len(emojis)]
            line = re.sub(r'emoji:\s*"[^"]*"', f'emoji: "{new_emoji}"', line)
            emoji_index += 1
        result.append(line)

    return '\n'.join(result)

def process_file(filename, subject):
    """Process a single question file"""
    print(f"Processing {filename}...")

    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix answer patterns
    content = fix_answer_pattern(content)

    # Diversify emojis
    content = diversify_emojis(content, subject)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✅ Fixed {filename}")

# Process all 5 files
files = [
    ('animals-questions.js', 'animals'),
    ('art-culture-questions.js', 'art'),
    ('food-drinks-questions.js', 'food'),
    ('movies-tv-questions.js', 'movies'),
    ('sports-questions.js', 'sports')
]

for filename, subject in files:
    try:
        process_file(filename, subject)
    except Exception as e:
        print(f"❌ Error processing {filename}: {e}")

print("\n🎉 All files processed!")
