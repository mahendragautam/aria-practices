const fs = require('fs');
const path = require('path');

// Validation results
const results = {
    riddleChapters: [],
    quizFiles: [],
    summary: {
        totalFiles: 0,
        totalQuestions: 0,
        filesWithIssues: 0,
        totalIssues: 0
    }
};

function validateQuestion(q, index, context) {
    const issues = [];

    // Check required fields
    if (!q.question || (typeof q.question === 'string' && q.question.trim() === '')) {
        issues.push(`Question ${index}: Missing or empty question text`);
    }

    if (!q.topic || (typeof q.topic === 'string' && q.topic.trim() === '')) {
        issues.push(`Question ${index}: Missing or empty topic`);
    }

    if (!q.emoji || (typeof q.emoji === 'string' && q.emoji.trim() === '')) {
        issues.push(`Question ${index}: Missing or empty emoji`);
    }

    // Check for both options (multiple choice) or answer (open-ended)
    if (q.options && Array.isArray(q.options)) {
        // Multiple choice question
        if (q.options.length < 2) {
            issues.push(`Question ${index}: Less than 2 options provided`);
        }

        // Check if all options are valid
        q.options.forEach((opt, i) => {
            if (opt === null || opt === undefined || (typeof opt === 'string' && opt.trim() === '')) {
                issues.push(`Question ${index}: Option ${i} is empty or invalid`);
            }
        });

        // Check correct answer index
        if (typeof q.correct !== 'number') {
            issues.push(`Question ${index}: 'correct' field is missing or not a number`);
        } else if (q.correct < 0 || q.correct >= q.options.length) {
            issues.push(`Question ${index}: 'correct' index ${q.correct} out of bounds (should be 0-${q.options.length - 1})`);
        }
    } else if (q.answer) {
        // Open-ended question - just check answer exists
        if (typeof q.answer !== 'string' || q.answer.trim() === '') {
            issues.push(`Question ${index}: 'answer' field is empty or invalid`);
        }
    } else {
        issues.push(`Question ${index}: Neither 'options' array nor 'answer' field found`);
    }

    return issues;
}

function findDuplicates(questions) {
    const questionMap = new Map();
    const duplicates = [];

    questions.forEach((q, index) => {
        const key = (q.question || '').trim().toLowerCase();
        if (key) {
            if (!questionMap.has(key)) {
                questionMap.set(key, []);
            }
            questionMap.get(key).push(index);
        }
    });

    questionMap.forEach((indices, question) => {
        if (indices.length > 1) {
            const preview = question.length > 60 ? question.substring(0, 60) + '...' : question;
            duplicates.push({
                question: preview,
                indices: indices,
                count: indices.length
            });
        }
    });

    return duplicates;
}

function validateRiddleChapter(filePath) {
    const fileName = path.basename(filePath);
    const fileResult = {
        file: fileName,
        path: filePath,
        issues: [],
        duplicates: [],
        totalQuestions: 0,
        status: 'OK'
    };

    try {
        // Load the file by evaluating it
        delete global.window;
        global.window = { riddlesQuestions: {} };

        const content = fs.readFileSync(filePath, 'utf8');
        eval(content);

        const chapterMatch = fileName.match(/Chapter[\s-]+(\d+)/i);
        const chapterNum = chapterMatch ? parseInt(chapterMatch[1]) : null;

        if (!chapterNum || !window.riddlesQuestions[chapterNum]) {
            fileResult.issues.push('Could not find riddle chapter data');
            fileResult.status = 'ERROR';
            return fileResult;
        }

        const riddleData = window.riddlesQuestions[chapterNum];
        const allQuestions = [];

        // Collect all questions
        ['easy', 'hard', 'expert', 'extreme'].forEach(difficulty => {
            if (Array.isArray(riddleData[difficulty])) {
                riddleData[difficulty].forEach((q, idx) => {
                    const globalIndex = allQuestions.length;
                    allQuestions.push(q);
                    const issues = validateQuestion(q, globalIndex, { difficulty, localIndex: idx });
                    fileResult.issues.push(...issues.map(iss => `[${difficulty}] ${iss}`));
                });
            }
        });

        fileResult.totalQuestions = allQuestions.length;
        fileResult.duplicates = findDuplicates(allQuestions);

        if (fileResult.issues.length > 0 || fileResult.duplicates.length > 0) {
            fileResult.status = 'ISSUES_FOUND';
        }

    } catch (e) {
        fileResult.issues.push(`Error: ${e.message}`);
        fileResult.status = 'ERROR';
    }

    return fileResult;
}

function validateQuizFile(filePath) {
    const fileName = path.basename(filePath);
    const fileResult = {
        file: fileName,
        path: filePath,
        issues: [],
        duplicates: [],
        totalQuestions: 0,
        status: 'OK'
    };

    try {
        // Load the file
        delete global.subjectQuestionBank;
        global.subjectQuestionBank = {};

        const content = fs.readFileSync(filePath, 'utf8');
        eval(content);

        // Get the subject name from filename
        const subjectMatch = fileName.match(/^(.+)-questions\.js$/);
        const subjectName = subjectMatch ? subjectMatch[1] : null;

        if (!subjectName || !subjectQuestionBank[subjectName]) {
            fileResult.issues.push('Could not find quiz data in subjectQuestionBank');
            fileResult.status = 'ERROR';
            return fileResult;
        }

        const quizData = subjectQuestionBank[subjectName];
        const allQuestions = [];

        // Collect all questions from all chapters and difficulties
        for (const chapter in quizData) {
            if (typeof quizData[chapter] === 'object') {
                for (const difficulty in quizData[chapter]) {
                    if (Array.isArray(quizData[chapter][difficulty])) {
                        quizData[chapter][difficulty].forEach((q, idx) => {
                            const globalIndex = allQuestions.length;
                            allQuestions.push(q);
                            const issues = validateQuestion(q, globalIndex, { chapter, difficulty, localIndex: idx });
                            fileResult.issues.push(...issues.map(iss => `[Ch${chapter}/${difficulty}] ${iss}`));
                        });
                    }
                }
            }
        }

        fileResult.totalQuestions = allQuestions.length;
        fileResult.duplicates = findDuplicates(allQuestions);

        if (fileResult.issues.length > 0 || fileResult.duplicates.length > 0) {
            fileResult.status = 'ISSUES_FOUND';
        }

    } catch (e) {
        fileResult.issues.push(`Error: ${e.message}`);
        fileResult.status = 'ERROR';
    }

    return fileResult;
}

// Main validation
console.log('='.repeat(100));
console.log('COMPREHENSIVE VALIDATION REPORT');
console.log('='.repeat(100));
console.log();

// Validate riddle chapters
console.log('RIDDLE CHAPTERS:');
console.log('-'.repeat(100));
const riddleDir = path.join(__dirname, 'riddles-chapters');
const riddleFiles = fs.readdirSync(riddleDir).filter(f => f.endsWith('.js')).sort();

riddleFiles.forEach(file => {
    const filePath = path.join(riddleDir, file);
    const result = validateRiddleChapter(filePath);
    results.riddleChapters.push(result);
    results.summary.totalFiles++;
    results.summary.totalQuestions += result.totalQuestions;

    const statusIcon = result.status === 'OK' ? '✓' : '✗';
    const statusColor = result.status === 'OK' ? '' : '';

    console.log(`${statusIcon} ${result.file.padEnd(40)} ${String(result.totalQuestions).padStart(4)} questions`);

    if (result.status !== 'OK') {
        results.summary.filesWithIssues++;
        if (result.issues.length > 0) {
            console.log(`   └─ ${result.issues.length} issues found`);
            results.summary.totalIssues += result.issues.length;
        }
        if (result.duplicates.length > 0) {
            console.log(`   └─ ${result.duplicates.length} duplicate questions`);
            results.summary.totalIssues += result.duplicates.length;
        }
    }
});

console.log();
console.log('QUIZ/SUBJECT FILES:');
console.log('-'.repeat(100));
const subjectsDir = path.join(__dirname, 'subjects');
const quizFiles = fs.readdirSync(subjectsDir).filter(f => f.endsWith('-questions.js')).sort();

quizFiles.forEach(file => {
    const filePath = path.join(subjectsDir, file);
    const result = validateQuizFile(filePath);
    results.quizFiles.push(result);
    results.summary.totalFiles++;
    results.summary.totalQuestions += result.totalQuestions;

    const statusIcon = result.status === 'OK' ? '✓' : '✗';

    console.log(`${statusIcon} ${result.file.padEnd(40)} ${String(result.totalQuestions).padStart(4)} questions`);

    if (result.status !== 'OK') {
        results.summary.filesWithIssues++;
        if (result.issues.length > 0) {
            console.log(`   └─ ${result.issues.length} issues found`);
            results.summary.totalIssues += result.issues.length;
        }
        if (result.duplicates.length > 0) {
            console.log(`   └─ ${result.duplicates.length} duplicate questions`);
            results.summary.totalIssues += result.duplicates.length;
        }
    }
});

// Detailed issues report
const allResults = [...results.riddleChapters, ...results.quizFiles];
const filesWithIssues = allResults.filter(r => r.status !== 'OK');

if (filesWithIssues.length > 0) {
    console.log();
    console.log('='.repeat(100));
    console.log('DETAILED ISSUES REPORT:');
    console.log('='.repeat(100));

    filesWithIssues.forEach(result => {
        console.log();
        console.log(`FILE: ${result.file}`);
        console.log('-'.repeat(100));

        if (result.issues.length > 0) {
            console.log(`\nIssues found (${result.issues.length}):`);
            result.issues.slice(0, 20).forEach(issue => {
                console.log(`  • ${issue}`);
            });
            if (result.issues.length > 20) {
                console.log(`  ... and ${result.issues.length - 20} more issues`);
            }
        }

        if (result.duplicates.length > 0) {
            console.log(`\nDuplicate questions (${result.duplicates.length}):`);
            result.duplicates.slice(0, 10).forEach(dup => {
                console.log(`  • "${dup.question}" - appears ${dup.count} times at indices: ${dup.indices.join(', ')}`);
            });
            if (result.duplicates.length > 10) {
                console.log(`  ... and ${result.duplicates.length - 10} more duplicates`);
            }
        }
    });
}

// Summary
console.log();
console.log('='.repeat(100));
console.log('SUMMARY:');
console.log('-'.repeat(100));
console.log(`Total files checked:      ${results.summary.totalFiles}`);
console.log(`Total questions:          ${results.summary.totalQuestions}`);
console.log(`Files with issues:        ${results.summary.filesWithIssues}`);
console.log(`Total issues found:       ${results.summary.totalIssues}`);
console.log();

if (results.summary.filesWithIssues === 0) {
    console.log('✓✓✓ ALL FILES ARE VALID! ✓✓✓');
} else {
    console.log(`⚠ ${results.summary.filesWithIssues} file(s) need attention`);
}

console.log('='.repeat(100));

// Write detailed JSON report
fs.writeFileSync('validation-report-detailed.json', JSON.stringify(results, null, 2));
console.log('\nDetailed JSON report saved to: validation-report-detailed.json');
