#!/usr/bin/env python3
"""
Remove duplicate questions from riddle files
"""
import re
import os
from collections import defaultdict

def fix_riddles_folder(folder_path):
    """Remove duplicate questions across all riddle chapter files"""
    
    # First pass: collect all questions and their locations
    all_questions = {}  # question_text -> (filename, line_number)
    files_content = {}
    
    files = [f for f in os.listdir(folder_path) if f.startswith('Chapter')]
    files.sort()
    
    print(f"Found {len(files)} riddle chapter files\n")
    
    # Read all files and track questions
    for filename in files:
        filepath = os.path.join(folder_path, filename)
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                files_content[filename] = content
        except:
            continue
        
        # Extract all questions
        questions = re.findall(r'["\']?question["\']?\s*:\s*["\']([^"\']+?)["\']', content, re.DOTALL)
        
        for q in questions:
            q_clean = q.strip()
            if q_clean not in all_questions:
                all_questions[q_clean] = filename
    
    print(f"Total unique questions found: {len(all_questions)}\n")
    
    # Second pass: remove duplicates from each file
    total_removed = 0
    
    for filename in files:
        filepath = os.path.join(folder_path, filename)
        content = files_content.get(filename, '')
        
        if not content:
            continue
        
        lines = content.split('\n')
        seen_in_this_file = set()
        new_lines = []
        
        in_question = False
        question_text = None
        question_lines = []
        duplicates_in_file = 0
        
        for line in lines:
            # Detect question start
            if re.search(r'["\']?question["\']?\s*:', line):
                in_question = True
                q_match = re.search(r'["\']?question["\']?\s*:\s*["\']([^"\']+?)["\']', line, re.DOTALL)
                if q_match:
                    question_text = q_match.group(1).strip()
            
            if in_question:
                question_lines.append(line)
                
                # Check for end of question object
                if re.search(r'^\s*[\}\],]', line):
                    # Check if duplicate
                    is_duplicate = False
                    
                    if question_text:
                        # Check if seen in this file
                        if question_text in seen_in_this_file:
                            is_duplicate = True
                            duplicates_in_file += 1
                        else:
                            # Check if first occurrence is in a different file
                            first_file = all_questions.get(question_text)
                            if first_file and first_file != filename:
                                is_duplicate = True
                                duplicates_in_file += 1
                            else:
                                seen_in_this_file.add(question_text)
                    
                    if not is_duplicate:
                        new_lines.extend(question_lines)
                    
                    question_lines = []
                    in_question = False
                    question_text = None
            else:
                new_lines.append(line)
        
        if duplicates_in_file > 0:
            # Write back
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write('\n'.join(new_lines))
            
            print(f"✅ {filename}: Removed {duplicates_in_file} duplicates")
            total_removed += duplicates_in_file
        else:
            print(f"✅ {filename}: No duplicates")
    
    return total_removed

print("=" * 80)
print("REMOVING DUPLICATE QUESTIONS FROM RIDDLE CHAPTERS")
print("=" * 80)

total = fix_riddles_folder('riddles')

print(f"\n{'=' * 80}")
print(f"✅ Total duplicates removed: {total}")
print("=" * 80)

