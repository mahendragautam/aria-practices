const fs = require('fs');

// Read the file
const filePath = '/home/user/aria-practices/subjects/movies-tv-questions.js';
const content = fs.readFileSync(filePath, 'utf8');

// Extract just the object part (remove the const declaration and export)
const objectStart = content.indexOf('{');
const objectEnd = content.lastIndexOf(';');
const objectContent = content.substring(objectStart, objectEnd);

// Evaluate the object
let moviesTVQuestions;
try {
    moviesTVQuestions = eval('(' + objectContent + ')');
} catch (e) {
    console.error('Error parsing:', e.message);
    process.exit(1);
}

// Collect all questions with their positions
const allQuestions = [];
let questionIndex = 0;

for (const level in moviesTVQuestions) {
    for (const difficulty in moviesTVQuestions[level]) {
        const questions = moviesTVQuestions[level][difficulty];
        questions.forEach((q, idx) => {
            allQuestions.push({
                level,
                difficulty,
                index: idx,
                globalIndex: questionIndex++,
                question: q.question,
                topic: q.topic,
                fullObject: JSON.stringify(q)
            });
        });
    }
}

// Find duplicates by question text
const questionMap = new Map();
allQuestions.forEach((item) => {
    if (!questionMap.has(item.question)) {
        questionMap.set(item.question, []);
    }
    questionMap.get(item.question).push(item);
});

// Find all duplicates
const duplicates = [];
questionMap.forEach((items, question) => {
    if (items.length > 1) {
        duplicates.push({ question, occurrences: items });
    }
});

console.log('Total questions:', allQuestions.length);
console.log('Duplicate questions found:', duplicates.length);
console.log('Total duplicate instances to remove:', duplicates.reduce((sum, d) => sum + (d.occurrences.length - 1), 0));
console.log('\nDuplicate details:');
duplicates.forEach((dup, idx) => {
    console.log(`\n${idx + 1}. Question: "${dup.question}"`);
    console.log(`   Appears ${dup.occurrences.length} times:`);
    dup.occurrences.forEach((occ, i) => {
        console.log(`   - Occurrence ${i + 1}: Level ${occ.level}, ${occ.difficulty}, index ${occ.index} (topic: "${occ.topic}")`);
    });
});
