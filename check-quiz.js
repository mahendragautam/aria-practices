/**
 * Script to check all quiz subject files for structural issues
 */

const fs = require('fs');
const path = require('path');

const subjectsDir = 'subjects';
const files = fs.readdirSync(subjectsDir).filter(f => f.endsWith('.js')).sort();

console.log(`\n${'='.repeat(80)}`);
console.log('CHECKING ALL QUIZ SUBJECT FILES');
console.log(`${'='.repeat(80)}\n`);

let totalIssues = 0;
const allIssues = [];

files.forEach(file => {
    const filePath = path.join(subjectsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    console.log(`\n📁 ${file}`);
    console.log('-'.repeat(80));

    const issues = [];

    // Count questions
    const totalQuestions = (content.match(/question:\s*"/g) || []).length;
    const correctAnswers = (content.match(/correct:\s*\d+/g) || []).length;
    const textAnswers = (content.match(/answer:\s*"/g) || []).length;
    const options = (content.match(/options:\s*\[/g) || []).length;

    console.log(`  Total Questions:       ${totalQuestions}`);
    console.log(`  Multiple Choice (MC):  ${correctAnswers} (with options)`);
    console.log(`  Text Answer:           ${textAnswers}`);
    console.log(`  Total Answered:        ${correctAnswers + textAnswers}`);

    // Check for mismatch
    const totalAnswered = correctAnswers + textAnswers;
    if (totalAnswered !== totalQuestions) {
        const missing = totalQuestions - totalAnswered;
        issues.push(`❌ Missing answers: ${missing} question(s) have no correct/answer field`);
    }

    if (options !== correctAnswers) {
        issues.push(`❌ Mismatch: ${correctAnswers} multiple choice questions but ${options} options arrays`);
    }

    // Check for out of bounds answer indices
    const questionBlocks = content.match(/\{\s*topic:[\s\S]*?correct:\s*\d+[\s\S]*?\}/g) || [];

    questionBlocks.forEach((block, idx) => {
        const optionsMatch = block.match(/options:\s*\[([\s\S]*?)\]/);
        const correctMatch = block.match(/correct:\s*(\d+)/);

        if (optionsMatch && correctMatch) {
            const optionsArray = optionsMatch[1];
            const optionItems = optionsArray.split(/,(?=\s*[\"\{])/).filter(o => o.trim());
            const correctIdx = parseInt(correctMatch[1]);

            if (correctIdx >= optionItems.length || correctIdx < 0) {
                issues.push(`❌ Question ${idx + 1}: correct index ${correctIdx} out of bounds (has ${optionItems.length} options)`);
            }
        } else if (!correctMatch) {
            issues.push(`❌ Question ${idx + 1}: Missing correct field`);
        } else if (!optionsMatch) {
            issues.push(`❌ Question ${idx + 1}: Missing options array`);
        }
    });

    // Check for duplicate questions
    const allQuestions = content.match(/question:\s*["`]([^"`]+)["`]/g) || [];
    const questionTexts = allQuestions.map(q =>
        q.replace(/question:\s*["`]/, '').replace(/["`]$/, '').trim()
    );
    const uniqueQuestions = new Set(questionTexts);

    if (uniqueQuestions.size !== questionTexts.length) {
        const duplicateCount = questionTexts.length - uniqueQuestions.size;
        issues.push(`⚠️  Found ${duplicateCount} duplicate question(s)`);
    }

    // Check for very short questions (potential issues)
    const shortQuestions = questionTexts.filter(q => q.length < 10);
    if (shortQuestions.length > 0) {
        issues.push(`⚠️  Found ${shortQuestions.length} very short question(s) (< 10 chars)`);
    }

    // Display issues
    if (issues.length > 0) {
        console.log('\n  Issues:');
        issues.forEach(issue => {
            console.log(`    ${issue}`);
            allIssues.push({ file, issue });
        });
        totalIssues += issues.length;
    } else {
        console.log('\n  ✅ No issues found');
    }
});

console.log(`\n${'='.repeat(80)}`);
console.log(`SUMMARY: ${totalIssues} total issue(s) found across ${files.length} quiz subjects`);
console.log(`${'='.repeat(80)}\n`);

if (totalIssues > 0) {
    console.log('DETAILED ISSUES:\n');
    allIssues.forEach(({ file, issue }) => {
        console.log(`${file}: ${issue}`);
    });
    console.log();
}

process.exit(totalIssues > 0 ? 1 : 0);
