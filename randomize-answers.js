#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function randomizeAnswers(filePath) {
  console.log(`\nProcessing: ${path.basename(filePath)}`);

  // Read the file
  let content = fs.readFileSync(filePath, 'utf8');

  // Count current distribution
  const currentDistribution = [0, 0, 0, 0];
  const correctMatches = content.match(/correct: [0-3]/g);
  if (correctMatches) {
    correctMatches.forEach(match => {
      const num = parseInt(match.split(': ')[1]);
      currentDistribution[num]++;
    });
  }

  console.log('Current distribution:', currentDistribution);

  // Replace each "correct: X" with a random number 0-3
  let questionCount = 0;
  const newDistribution = [0, 0, 0, 0];

  content = content.replace(/correct: [0-3]/g, () => {
    const randomCorrect = Math.floor(Math.random() * 4);
    newDistribution[randomCorrect]++;
    questionCount++;
    return `correct: ${randomCorrect}`;
  });

  // Write back to file
  fs.writeFileSync(filePath, content, 'utf8');

  console.log('New distribution:', newDistribution);
  console.log(`Randomized ${questionCount} questions`);

  return { questionCount, newDistribution };
}

// Process all 5 files
const files = [
  'subjects/animals-questions.js',
  'subjects/movies-tv-questions.js',
  'subjects/sports-questions.js',
  'subjects/food-drinks-questions.js',
  'subjects/art-culture-questions.js'
];

console.log('=== Randomizing Answer Patterns ===');

const results = {};
files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    results[file] = randomizeAnswers(fullPath);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('\n=== Summary ===');
Object.keys(results).forEach(file => {
  const { questionCount, newDistribution } = results[file];
  const percentages = newDistribution.map(count =>
    `${((count / questionCount) * 100).toFixed(1)}%`
  );
  console.log(`${path.basename(file)}: [${percentages.join(', ')}]`);
});

console.log('\nDone! All answer patterns have been randomized.');
