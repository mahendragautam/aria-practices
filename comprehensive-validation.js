const fs = require('fs');
const path = require('path');

// Validation results
const results = {
    riddleChapters: [],
    quizFiles: [],
    summary: {
        totalFiles: 0,
        filesWithIssues: 0,
        totalIssues: 0
    }
};

function validateQuestion(q, index, filePath, level = null, difficulty = null) {
    const issues = [];

    // Check required fields
    if (!q.question || q.question.trim() === '') {
        issues.push(`Question ${index}: Missing or empty question text`);
    }

    if (!q.topic || q.topic.trim() === '') {
        issues.push(`Question ${index}: Missing or empty topic`);
    }

    if (!q.emoji || q.emoji.trim() === '') {
        issues.push(`Question ${index}: Missing or empty emoji`);
    }

    if (!Array.isArray(q.options)) {
        issues.push(`Question ${index}: Options is not an array`);
    } else if (q.options.length < 2) {
        issues.push(`Question ${index}: Less than 2 options`);
    } else {
        // Check if all options are valid strings
        q.options.forEach((opt, i) => {
            if (!opt || (typeof opt === 'string' && opt.trim() === '')) {
                issues.push(`Question ${index}: Option ${i} is empty`);
            }
        });
    }

    if (typeof q.correct !== 'number') {
        issues.push(`Question ${index}: 'correct' is not a number`);
    } else if (Array.isArray(q.options) && (q.correct < 0 || q.correct >= q.options.length)) {
        issues.push(`Question ${index}: 'correct' index ${q.correct} is out of bounds (0-${q.options.length - 1})`);
    }

    // Check for duplicate fields (malformed structure)
    const keys = Object.keys(q);
    const uniqueKeys = new Set(keys);
    if (keys.length !== uniqueKeys.size) {
        issues.push(`Question ${index}: Contains duplicate keys`);
    }

    return issues;
}

function findDuplicateQuestions(questions, filePath) {
    const questionMap = new Map();
    const duplicates = [];

    questions.forEach((q, index) => {
        const key = q.question ? q.question.trim().toLowerCase() : '';
        if (key) {
            if (!questionMap.has(key)) {
                questionMap.set(key, []);
            }
            questionMap.get(key).push(index);
        }
    });

    questionMap.forEach((indices, question) => {
        if (indices.length > 1) {
            duplicates.push({
                question: question.substring(0, 80) + (question.length > 80 ? '...' : ''),
                indices: indices
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
        const content = fs.readFileSync(filePath, 'utf8');

        // Try to extract the object
        const match = content.match(/window\.riddlesQuestions\[\d+\]\s*=\s*({[\s\S]*?});?\s*$/m);
        if (!match) {
            fileResult.issues.push('Could not parse riddle chapter structure');
            fileResult.status = 'ERROR';
            return fileResult;
        }

        let riddleData;
        try {
            riddleData = eval('(' + match[1] + ')');
        } catch (e) {
            fileResult.issues.push(`Parse error: ${e.message}`);
            fileResult.status = 'ERROR';
            return fileResult;
        }

        // Collect all questions
        const allQuestions = [];
        for (const level in riddleData) {
            for (const difficulty in riddleData[level]) {
                const questions = riddleData[level][difficulty];
                if (Array.isArray(questions)) {
                    allQuestions.push(...questions);
                    questions.forEach((q, idx) => {
                        const issues = validateQuestion(q, allQuestions.length - questions.length + idx, filePath, level, difficulty);
                        fileResult.issues.push(...issues);
                    });
                }
            }
        }

        fileResult.totalQuestions = allQuestions.length;
        fileResult.duplicates = findDuplicateQuestions(allQuestions, filePath);

        if (fileResult.issues.length > 0 || fileResult.duplicates.length > 0) {
            fileResult.status = 'ISSUES_FOUND';
        }

    } catch (e) {
        fileResult.issues.push(`File read error: ${e.message}`);
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
        const content = fs.readFileSync(filePath, 'utf8');

        // Try to extract the object
        const constMatch = content.match(/const\s+\w+\s*=\s*({[\s\S]*?});?\s*(?:if\s*\(|$)/m);
        if (!constMatch) {
            fileResult.issues.push('Could not parse quiz file structure');
            fileResult.status = 'ERROR';
            return fileResult;
        }

        let quizData;
        try {
            quizData = eval('(' + constMatch[1] + ')');
        } catch (e) {
            fileResult.issues.push(`Parse error: ${e.message}`);
            fileResult.status = 'ERROR';
            return fileResult;
        }

        // Collect all questions
        const allQuestions = [];
        for (const level in quizData) {
            for (const difficulty in quizData[level]) {
                const questions = quizData[level][difficulty];
                if (Array.isArray(questions)) {
                    allQuestions.push(...questions);
                    questions.forEach((q, idx) => {
                        const issues = validateQuestion(q, allQuestions.length - questions.length + idx, filePath, level, difficulty);
                        fileResult.issues.push(...issues);
                    });
                }
            }
        }

        fileResult.totalQuestions = allQuestions.length;
        fileResult.duplicates = findDuplicateQuestions(allQuestions, filePath);

        if (fileResult.issues.length > 0 || fileResult.duplicates.length > 0) {
            fileResult.status = 'ISSUES_FOUND';
        }

    } catch (e) {
        fileResult.issues.push(`File read error: ${e.message}`);
        fileResult.status = 'ERROR';
    }

    return fileResult;
}

// Main validation
console.log('='.repeat(80));
console.log('COMPREHENSIVE VALIDATION REPORT');
console.log('='.repeat(80));
console.log();

// Validate riddle chapters
console.log('RIDDLE CHAPTERS:');
console.log('-'.repeat(80));
const riddleDir = path.join(__dirname, 'riddles-chapters');
const riddleFiles = fs.readdirSync(riddleDir).filter(f => f.endsWith('.js')).sort();

riddleFiles.forEach(file => {
    const filePath = path.join(riddleDir, file);
    const result = validateRiddleChapter(filePath);
    results.riddleChapters.push(result);
    results.summary.totalFiles++;

    if (result.status === 'OK') {
        console.log(`✓ ${result.file} (${result.totalQuestions} questions)`);
    } else {
        results.summary.filesWithIssues++;
        console.log(`✗ ${result.file} (${result.totalQuestions} questions) - ${result.status}`);
        if (result.issues.length > 0) {
            console.log(`  Issues: ${result.issues.length}`);
            results.summary.totalIssues += result.issues.length;
        }
        if (result.duplicates.length > 0) {
            console.log(`  Duplicates: ${result.duplicates.length}`);
            results.summary.totalIssues += result.duplicates.length;
        }
    }
});

console.log();
console.log('QUIZ/SUBJECT FILES:');
console.log('-'.repeat(80));
const subjectsDir = path.join(__dirname, 'subjects');
const quizFiles = fs.readdirSync(subjectsDir).filter(f => f.endsWith('-questions.js')).sort();

quizFiles.forEach(file => {
    const filePath = path.join(subjectsDir, file);
    const result = validateQuizFile(filePath);
    results.quizFiles.push(result);
    results.summary.totalFiles++;

    if (result.status === 'OK') {
        console.log(`✓ ${result.file} (${result.totalQuestions} questions)`);
    } else {
        results.summary.filesWithIssues++;
        console.log(`✗ ${result.file} (${result.totalQuestions} questions) - ${result.status}`);
        if (result.issues.length > 0) {
            console.log(`  Issues: ${result.issues.length}`);
            results.summary.totalIssues += result.issues.length;
        }
        if (result.duplicates.length > 0) {
            console.log(`  Duplicates: ${result.duplicates.length}`);
            results.summary.totalIssues += result.duplicates.length;
        }
    }
});

// Detailed issues report
console.log();
console.log('='.repeat(80));
console.log('DETAILED ISSUES REPORT:');
console.log('='.repeat(80));

const allResults = [...results.riddleChapters, ...results.quizFiles];
const filesWithIssues = allResults.filter(r => r.status !== 'OK');

if (filesWithIssues.length === 0) {
    console.log('\n✓ No issues found! All files are valid.\n');
} else {
    filesWithIssues.forEach(result => {
        console.log();
        console.log(`FILE: ${result.file}`);
        console.log('-'.repeat(80));

        if (result.issues.length > 0) {
            console.log('Issues:');
            result.issues.slice(0, 10).forEach(issue => {
                console.log(`  - ${issue}`);
            });
            if (result.issues.length > 10) {
                console.log(`  ... and ${result.issues.length - 10} more issues`);
            }
        }

        if (result.duplicates.length > 0) {
            console.log('Duplicate Questions:');
            result.duplicates.slice(0, 5).forEach(dup => {
                console.log(`  - "${dup.question}" appears at indices: ${dup.indices.join(', ')}`);
            });
            if (result.duplicates.length > 5) {
                console.log(`  ... and ${result.duplicates.length - 5} more duplicates`);
            }
        }
    });
}

// Summary
console.log();
console.log('='.repeat(80));
console.log('SUMMARY:');
console.log('-'.repeat(80));
console.log(`Total files checked: ${results.summary.totalFiles}`);
console.log(`Files with issues: ${results.summary.filesWithIssues}`);
console.log(`Total issues found: ${results.summary.totalIssues}`);
console.log('='.repeat(80));

// Write detailed report to file
fs.writeFileSync('validation-report.json', JSON.stringify(results, null, 2));
console.log('\nDetailed report saved to: validation-report.json');
