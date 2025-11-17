#!/usr/bin/env python3
"""
Filter brand names database to only 5+ letter names
Output in Excel-friendly format (one column)
"""

# Read the full database
with open('/home/user/aria-practices/brand-names-database.txt', 'r') as f:
    all_names = f.readlines()

# Filter names with 5+ letters (skip comments)
filtered_names = []
for name in all_names:
    name = name.strip()
    if name and not name.startswith('#') and len(name) >= 5:
        filtered_names.append(name)

# Sort by length, then alphabetically
filtered_names = sorted(filtered_names, key=lambda x: (len(x), x.lower()))

# Write to Excel-ready file
output_file = '/home/user/aria-practices/EXCEL-READY-50K-NAMES.txt'
with open(output_file, 'w') as f:
    for name in filtered_names:
        f.write(name + '\n')

print(f"✅ Filtered {len(filtered_names):,} names (5+ letters)")
print(f"📁 Saved to: {output_file}")
print(f"\n🎯 Sample names (first 50):")
for i, name in enumerate(filtered_names[:50], 1):
    print(f"{i:3d}. {name}")

print(f"\n📊 Length distribution:")
from collections import Counter
lengths = Counter(len(name) for name in filtered_names)
for length in sorted(lengths.keys()):
    print(f"  {length} letters: {lengths[length]:,} names")
