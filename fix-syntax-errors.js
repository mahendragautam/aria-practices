#!/usr/bin/env node

/**
 * Fix Syntax Errors in Question Files
 * ===================================
 * This script fixes apostrophe issues in question strings
 */

const fs = require('fs');
const path = require('path');

const filesToFix = [
    'math-questions.js',
    'history-questions.js',
    'geography-questions.js',
    'business-questions.js',
    'parenting-questions.js'
];

function fixApostrophes(content) {
    // Fix apostrophes in question strings
    // Pattern: question: 'text with apostrophe's more text'
    // Replace with: question: "text with apostrophe's more text"

    let fixed = content;

    // Match question: '...' patterns and convert to question: "..."
    // This regex finds question strings with apostrophes
    fixed = fixed.replace(
        /question:\s*'([^']*'[^']*?)'/g,
        (match, p1) => {
            // If the captured group contains an apostrophe, use double quotes
            return `question: "${p1}"`;
        }
    );

    // Also fix answer strings with apostrophes
    fixed = fixed.replace(
        /answer:\s*'([^']*'[^']*?)'/g,
        (match, p1) => {
            return `answer: "${p1}"`;
        }
    );

    // Fix option strings with apostrophes
    fixed = fixed.replace(
        /(options:\s*\[)((?:[^[\]]*\[[^\]]*\][^[\]]*)*[^[\]]*)'([^']*'[^']*?)'/g,
        (match, prefix, middle, optionText) => {
            return `${prefix}${middle}"${optionText}"`;
        }
    );

    // Fix double commas
    fixed = fixed.replace(/},\s*,/g, '},');

    return fixed;
}

console.log('='.repeat(60));
console.log('FIXING SYNTAX ERRORS IN QUESTION FILES');
console.log('='.repeat(60));
console.log('');

let fixedCount = 0;
let errorCount = 0;

filesToFix.forEach(filename => {
    const filepath = path.join(__dirname, filename);

    console.log(`Processing: ${filename}`);

    try {
        // Read file
        let content = fs.readFileSync(filepath, 'utf8');

        // Fix apostrophes
        let fixed = fixApostrophes(content);

        // Write back
        fs.writeFileSync(filepath, fixed, 'utf8');

        console.log(`✅ Fixed: ${filename}`);
        fixedCount++;
    } catch (error) {
        console.log(`❌ Error fixing ${filename}: ${error.message}`);
        errorCount++;
    }

    console.log('');
});

console.log('='.repeat(60));
console.log('SUMMARY:');
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
console.log('='.repeat(60));
console.log('');
console.log('Next: Run syntax check to verify fixes');
