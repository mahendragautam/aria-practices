#!/usr/bin/env python3
import re
import sys

def check_answer_runs(pattern_str):
    """Check for runs of 3+ same answers"""
    pattern = [int(x) for x in pattern_str.split(',') if x.strip().isdigit()]
    issues = []
    
    i = 0
    while i < len(pattern):
        count = 1
        current = pattern[i]
        j = i + 1
        while j < len(pattern) and pattern[j] == current:
            count += 1
            j += 1
        
        if count >= 3:
            issues.append(f"Position {i+1}-{i+count}: {count} {current}s in a row")
        i = j if j > i + 1 else i + 1
    
    return issues

files = [
    'Science-questions.js',
    'math-questions.js', 
    'history-questions.js',
    'geography-questions.js',
    'english-questions.js',
    'health-questions.js',
    'environment-questions.js',
    'business-questions.js',
    'technology-questions.js',
    'parenting-questions.js'
]

for file in files:
    try:
        with open(file, 'r') as f:
            content = f.read()
        
        # Extract first 30 correct answers
        matches = re.findall(r'correct:\s*(\d+)', content)
        if matches:
            pattern_str = ','.join(matches[:30])
            issues = check_answer_runs(pattern_str)
            
            if issues:
                print(f"\n❌ {file}")
                print(f"   Pattern: {pattern_str}")
                for issue in issues:
                    print(f"   ⚠️  {issue}")
            else:
                print(f"✅ {file} - No runs of 3+")
    except FileNotFoundError:
        print(f"⚠️  {file} not found")

