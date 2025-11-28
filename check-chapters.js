/**
 * Script to check all chapter files for structural issues
 */

const fs = require('fs');
const path = require('path');

const chaptersDir = 'riddles-chapters';
const files = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.js')).sort();

console.log(`\n${'='.repeat(80)}`);
console.log('CHECKING ALL RIDDLE CHAPTERS');
console.log(`${'='.repeat(80)}\n`);

let totalIssues = 0;
const allIssues = [];

files.forEach(file => {
    const filePath = path.join(chaptersDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    console.log(`\n📁 ${file}`);
    console.log('-'.repeat(80));

    // Extract chapter number
    const chapterMatch = file.match(/Chapter[- ](\d+)/i);
    const chapterNum = chapterMatch ? chapterMatch[1] : 'Unknown';

    const issues = [];

    // Check for required levels
    const hasEasy = content.includes('easy: [');
    const hasHard = content.includes('hard: [');
    const hasExpert = content.includes('expert: [');
    const hasExtreme = content.includes('extreme: [');

    if (!hasEasy) issues.push('❌ Missing "easy" level');
    if (!hasHard) issues.push('❌ Missing "hard" level');
    if (!hasExpert) issues.push('❌ Missing "expert" level');
    if (!hasExtreme) issues.push('❌ Missing "extreme" level');

    // Count questions in each level
    const easyCount = (content.match(/easy: \[[\s\S]*?\],\s*hard:/)?.[0].match(/question:/g) || []).length;
    const hardCount = (content.match(/hard: \[[\s\S]*?\],\s*expert:/)?.[0].match(/question:/g) || []).length;
    const expertCount = (content.match(/expert: \[[\s\S]*?\],\s*extreme:/)?.[0].match(/question:/g) || []).length;
    const extremeCount = (content.match(/extreme: \[[\s\S]*?\]\s*\}/)?.[0].match(/question:/g) || []).length;

    console.log(`  Easy:    ${easyCount} questions`);
    console.log(`  Hard:    ${hardCount} questions`);
    console.log(`  Expert:  ${expertCount} questions`);
    console.log(`  Extreme: ${extremeCount} questions`);
    console.log(`  Total:   ${easyCount + hardCount + expertCount + extremeCount} questions`);

    // Check for "correct" vs "answer" fields
    const easySection = content.match(/easy: \[[\s\S]*?\],\s*hard:/)?.[0] || '';
    const hardSection = content.match(/hard: \[[\s\S]*?\],\s*expert:/)?.[0] || '';
    const expertSection = content.match(/expert: \[[\s\S]*?\],\s*extreme:/)?.[0] || '';
    const extremeSection = content.match(/extreme: \[[\s\S]*?\]\s*\}/)?.[0] || '';

    // Check for correct answer indices in multiple choice
    const easyCorrects = easySection.match(/correct:\s*(\d+)/g) || [];
    const hardCorrects = hardSection.match(/correct:\s*(\d+)/g) || [];
    const expertCorrects = expertSection.match(/correct:\s*(\d+)/g) || [];

    // Check extreme has text answers
    const extremeAnswers = extremeSection.match(/answer:\s*"[^"]+"/g) || [];

    if (easyCorrects.length !== easyCount && easyCount > 0) {
        issues.push(`❌ Easy level: Mismatch in correct answers (${easyCorrects.length} vs ${easyCount} questions)`);
    }
    if (hardCorrects.length !== hardCount && hardCount > 0) {
        issues.push(`❌ Hard level: Mismatch in correct answers (${hardCorrects.length} vs ${hardCount} questions)`);
    }
    if (expertCorrects.length !== expertCount && expertCount > 0) {
        issues.push(`❌ Expert level: Mismatch in correct answers (${expertCorrects.length} vs ${expertCount} questions)`);
    }
    if (extremeAnswers.length !== extremeCount && extremeCount > 0) {
        issues.push(`❌ Extreme level: Mismatch in text answers (${extremeAnswers.length} vs ${extremeCount} questions)`);
    }

    // Check for out of bounds correct indices
    const checkCorrectIndex = (section, levelName) => {
        const questions = section.match(/\{[\s\S]*?correct:\s*\d+[\s\S]*?\}/g) || [];
        questions.forEach((q, idx) => {
            const optionsMatch = q.match(/options:\s*\[([\s\S]*?)\]/);
            const correctMatch = q.match(/correct:\s*(\d+)/);

            if (optionsMatch && correctMatch) {
                const options = optionsMatch[1].split(',').filter(o => o.trim());
                const correctIdx = parseInt(correctMatch[1]);

                if (correctIdx >= options.length) {
                    issues.push(`❌ ${levelName} Q${idx + 1}: correct index ${correctIdx} out of bounds (has ${options.length} options)`);
                }
            }
        });
    };

    checkCorrectIndex(easySection, 'Easy');
    checkCorrectIndex(hardSection, 'Hard');
    checkCorrectIndex(expertSection, 'Expert');

    // Check for duplicate questions
    const allQuestions = content.match(/question:\s*"([^"]+)"/g) || [];
    const questionTexts = allQuestions.map(q => q.replace(/question:\s*"/, '').replace(/"$/, ''));
    const duplicates = questionTexts.filter((q, i) => questionTexts.indexOf(q) !== i);

    if (duplicates.length > 0) {
        issues.push(`⚠️  Found ${duplicates.length} potential duplicate question(s)`);
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
console.log(`SUMMARY: ${totalIssues} total issue(s) found across ${files.length} chapters`);
console.log(`${'='.repeat(80)}\n`);

if (totalIssues > 0) {
    console.log('DETAILED ISSUES:\n');
    allIssues.forEach(({ file, issue }) => {
        console.log(`${file}: ${issue}`);
    });
    console.log();
}

process.exit(totalIssues > 0 ? 1 : 0);
