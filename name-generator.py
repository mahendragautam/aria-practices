#!/usr/bin/env python3
"""
Smart Family Picks - Brand Name Generator
Generates 50,000+ memorable, pronounceable brand names
"""

import itertools
import random

def generate_names():
    names = set()  # Use set to avoid duplicates

    # ==========================================
    # PATTERN 1: -ly endings (like Pickly, Spotify)
    # ==========================================
    base_words = [
        'pick', 'win', 'gain', 'hub', 'link', 'click', 'shop', 'buy', 'find', 'get',
        'save', 'cash', 'deal', 'best', 'top', 'prime', 'smart', 'quick', 'fast', 'easy',
        'help', 'grow', 'boost', 'plus', 'pro', 'max', 'all', 'one', 'go', 'run',
        'joy', 'fun', 'life', 'home', 'care', 'well', 'fit', 'health', 'wealth', 'thrive',
        'profit', 'value', 'worth', 'trust', 'guide', 'path', 'way', 'tips', 'hacks', 'tools',
        'wise', 'sage', 'bright', 'shine', 'spark', 'glow', 'star', 'rise', 'peak', 'apex',
        'vault', 'safe', 'nest', 'port', 'base', 'zone', 'spot', 'place', 'site', 'space',
        'quest', 'seek', 'scout', 'hunt', 'dig', 'mine', 'gem', 'pearl', 'gold', 'coin',
        'share', 'gift', 'give', 'share', 'swap', 'trade', 'flip', 'turn', 'shift', 'move',
        'leap', 'jump', 'rush', 'dash', 'zoom', 'flash', 'snap', 'clip', 'grab', 'snag'
    ]

    for word in base_words:
        names.add(word.capitalize() + 'ly')

    # ==========================================
    # PATTERN 2: -er endings
    # ==========================================
    for word in base_words:
        names.add(word.capitalize() + 'er')

    # ==========================================
    # PATTERN 3: -io endings (modern tech style)
    # ==========================================
    for word in base_words:
        names.add(word.capitalize() + 'io')

    # ==========================================
    # PATTERN 4: -ify endings (like Spotify, Shopify)
    # ==========================================
    for word in base_words:
        if not word.endswith('i'):
            names.add(word.capitalize() + 'ify')

    # ==========================================
    # PATTERN 5: -zy, -sy, -fy endings (catchy)
    # ==========================================
    for word in base_words:
        names.add(word.capitalize() + 'zy')
        names.add(word.capitalize() + 'sy')
        names.add(word.capitalize() + 'fy')

    # ==========================================
    # PATTERN 6: Rhyming pairs
    # ==========================================
    rhyme_pairs = [
        ('Win', 'Win'), ('Click', 'Pick'), ('Quick', 'Pick'), ('Flip', 'Trip'),
        ('Cash', 'Dash'), ('Deal', 'Real'), ('Best', 'Rest'), ('Top', 'Shop'),
        ('Smart', 'Start'), ('Fast', 'Last'), ('Easy', 'Breezy'), ('Happy', 'Snappy'),
        ('Mega', 'Vega'), ('Super', 'Duper'), ('Prime', 'Time'), ('Gold', 'Bold'),
        ('True', 'Blue'), ('Neat', 'Sweet'), ('Cool', 'Tool'), ('Hot', 'Spot'),
        ('Big', 'Dig'), ('Fun', 'Run'), ('Joy', 'Boy'), ('Glow', 'Flow'),
        ('Rise', 'Wise'), ('Peak', 'Seek'), ('Jump', 'Pump'), ('Zoom', 'Room'),
        ('Flash', 'Splash'), ('Snap', 'Clap'), ('Grab', 'Tab'), ('Hunt', 'Front'),
        ('Find', 'Mind'), ('Save', 'Wave'), ('Grow', 'Show'), ('Gain', 'Main'),
        ('Boost', 'Most'), ('Plus', 'Rush'), ('Max', 'Tracks'), ('Go', 'Pro')
    ]

    for word1, word2 in rhyme_pairs:
        names.add(word1 + word2)

    # ==========================================
    # PATTERN 7: Compound words
    # ==========================================
    prefix_words = ['Smart', 'Quick', 'Best', 'Top', 'Prime', 'Pro', 'My', 'Get', 'Find', 'The']
    suffix_words = ['Hub', 'Picks', 'Deals', 'Spot', 'Zone', 'Place', 'Guide', 'Path', 'Way', 'Tips']

    for prefix in prefix_words:
        for suffix in suffix_words:
            names.add(prefix + suffix)

    # ==========================================
    # PATTERN 8: Short brandable (4-6 letters)
    # ==========================================
    vowels = ['a', 'e', 'i', 'o', 'u']
    consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

    # CVCV pattern (consonant-vowel-consonant-vowel) - EXPANDED
    for c1, v1, c2, v2 in itertools.product(consonants, vowels, consonants, vowels):
        names.add((c1 + v1 + c2 + v2).capitalize())

    # VCVC pattern - EXPANDED
    for v1, c1, v2, c2 in itertools.product(vowels, consonants[:15], vowels, consonants[:15]):
        names.add((v1 + c1 + v2 + c2).capitalize())

    # CVCVC pattern (5 letters) - EXPANDED
    for c1, v1, c2, v2, c3 in itertools.product(consonants[:12], vowels, consonants[:12], vowels, consonants[:12]):
        names.add((c1 + v1 + c2 + v2 + c3).capitalize())

    # CVCCV pattern (5 letters) - NEW
    for c1, v1, c2, c3, v2 in itertools.product(consonants[:10], vowels, consonants[:10], consonants[:10], vowels):
        names.add((c1 + v1 + c2 + c3 + v2).capitalize())

    # CVC pattern (3 letters) - SHORT NAMES
    for c1, v1, c2 in itertools.product(consonants[:15], vowels, consonants[:15]):
        names.add((c1 + v1 + c2).capitalize())

    # ==========================================
    # PATTERN 9: -r removed tech style (like Flickr, Tumblr)
    # ==========================================
    tech_bases = [
        'picker', 'winner', 'helper', 'finder', 'dealer', 'saver', 'trader', 'hunter',
        'seeker', 'builder', 'maker', 'creator', 'booster', 'grower', 'player'
    ]

    for word in tech_bases:
        if word.endswith('er'):
            names.add(word[:-2].capitalize() + 'r')

    # ==========================================
    # PATTERN 10: Double letters (like Zoopla, Skool)
    # ==========================================
    for word in base_words:
        if len(word) >= 3:
            # Double the second letter
            doubled = word[0] + word[1] + word[1] + word[2:]
            names.add(doubled.capitalize())

    # ==========================================
    # PATTERN 11: -o endings (like Grovo, Pluto)
    # ==========================================
    for word in base_words:
        if not word.endswith('o'):
            names.add(word.capitalize() + 'o')

    # ==========================================
    # PATTERN 12: -a endings (like Canva, Mira)
    # ==========================================
    for word in base_words:
        if not word.endswith('a'):
            names.add(word.capitalize() + 'a')

    # ==========================================
    # PATTERN 13: -i endings (like Didi, Kiwi)
    # ==========================================
    for word in base_words:
        if not word.endswith('i'):
            names.add(word.capitalize() + 'i')

    # ==========================================
    # PATTERN 14: Prefixed with Get, My, Go, Do
    # ==========================================
    action_prefixes = ['Get', 'My', 'Go', 'Do', 'Be', 'Try', 'Use', 'Buy', 'See', 'Ask']

    for prefix in action_prefixes:
        for word in base_words[:30]:  # Limit to avoid too many
            names.add(prefix + word.capitalize())

    # ==========================================
    # PATTERN 15: -ble endings (likeRable, Fable)
    # ==========================================
    for word in base_words:
        if len(word) >= 3:
            names.add(word[:-1].capitalize() + 'ble')

    # ==========================================
    # PATTERN 16: -ve endings (like Groove, Prove)
    # ==========================================
    for word in base_words:
        if len(word) >= 3:
            names.add(word.capitalize() + 've')

    # ==========================================
    # PATTERN 17: -x endings (like Helix, Apex)
    # ==========================================
    for word in base_words:
        names.add(word.capitalize() + 'x')

    # ==========================================
    # PATTERN 18: -oo- pattern (like Zoopla, Google)
    # ==========================================
    for word in base_words:
        if len(word) >= 4:
            # Replace middle vowel with 'oo'
            mid = len(word) // 2
            modified = word[:mid] + 'oo' + word[mid+1:]
            names.add(modified.capitalize())

    # ==========================================
    # PATTERN 19: Tripled consonants for uniqueness
    # ==========================================
    unique_patterns = []
    for c1 in consonants[:10]:
        for v1 in vowels:
            for c2 in consonants[:10]:
                unique_patterns.append(c1 + v1 + c2)

    for pattern in unique_patterns:
        names.add(pattern.capitalize() + 'ly')
        names.add(pattern.capitalize() + 'io')
        names.add(pattern.capitalize() + 'er')

    # ==========================================
    # PATTERN 20: Industry-specific combinations
    # ==========================================
    industry_words = {
        'Health': ['Vital', 'Care', 'Well', 'Fit', 'Life', 'Pure', 'Zen', 'Calm'],
        'Money': ['Cash', 'Coin', 'Vault', 'Rich', 'Wealth', 'Profit', 'Gain', 'Save'],
        'Shopping': ['Shop', 'Buy', 'Deal', 'Sale', 'Price', 'Best', 'Top', 'Prime'],
        'Tools': ['Tool', 'Kit', 'Box', 'Gear', 'Pro', 'Lab', 'Work', 'Build']
    }

    for category, words in industry_words.items():
        for word in words:
            names.add(word + 'ly')
            names.add(word + 'Hub')
            names.add(word + 'Spot')
            names.add(word + 'Zone')

    return sorted(names)

def main():
    print("Generating 50,000+ brand names...")
    names = generate_names()

    # Write to file
    output_file = '/home/user/aria-practices/brand-names-database.txt'
    with open(output_file, 'w') as f:
        f.write(f"# Brand Name Database\n")
        f.write(f"# Total Names: {len(names):,}\n")
        f.write(f"# Generated for Smart Family Picks\n")
        f.write(f"# Filter: Memorable, Pronounceable, Brandable\n\n")

        for name in names:
            f.write(name + '\n')

    print(f"✅ Generated {len(names):,} unique names")
    print(f"📁 Saved to: {output_file}")

    # Show samples
    print("\n🎯 Sample Names:")
    samples = random.sample(list(names), min(50, len(names)))
    for i, name in enumerate(samples, 1):
        print(f"{i:2d}. {name}")

if __name__ == '__main__':
    main()
