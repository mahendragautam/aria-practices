#!/bin/bash
# Fix syntax errors in all quiz files
# Only fixes quotes/apostrophes, preserves all content

echo "=== FIXING SYNTAX ERRORS ==="
echo ""

# Common patterns to fix:
# 1. question: 'text with ' inside' → question: "text with ' inside"
# 2. },,  → },

# Fix function
fix_file() {
    local file=$1
    echo "Fixing: $file"

    # Backup
    cp "$file" "$file.bak"

    # Fix apostrophes in question strings using perl
    perl -i -pe "s/question: '([^']*'[^']*?)'/question: \"\$1\"/g" "$file"

    # Fix apostrophes in answer strings
    perl -i -pe "s/answer: '([^']*'[^']*?)'/answer: \"\$1\"/g" "$file"

    # Fix double commas
    perl -i -pe 's/},\s*,/},/g' "$file"

    # Check syntax
    if node -c "$file" 2>/dev/null; then
        echo "  ✅ $file - OK"
        rm "$file.bak"
        return 0
    else
        echo "  ❌ $file - Still has errors"
        # Show first error
        node -c "$file" 2>&1 | head -3
        # Restore backup
        mv "$file.bak" "$file"
        return 1
    fi
}

# Process all files
files=(
    "Science-questions.js"
    "math-questions.js"
    "history-questions.js"
    "geography-questions.js"
    "english-questions.js"
    "health-questions.js"
    "environment-questions.js"
    "business-questions.js"
    "technology-questions.js"
    "parenting-questions.js"
)

success=0
failed=0

for file in "${files[@]}"; do
    if fix_file "$file"; then
        ((success++))
    else
        ((failed++))
    fi
    echo ""
done

echo "==================="
echo "✅ Fixed: $success/10"
echo "❌ Failed: $failed/10"
echo "==================="
