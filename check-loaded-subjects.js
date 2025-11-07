/**
 * DIAGNOSTIC CODE - Check Which Subjects Are Loaded
 * ==================================================
 * Copy this code to Browser Console to check which subjects are loaded
 *
 * Instructions:
 * 1. Open your WordPress quiz page
 * 2. Press F12 to open browser console
 * 3. Paste this entire code and press Enter
 * 4. It will show you which subjects are LOADED ✅ and which are MISSING ❌
 */

console.log('='.repeat(60));
console.log('QUIZ SUBJECTS DIAGNOSTIC REPORT');
console.log('='.repeat(60));
console.log('');

const requiredSubjects = {
    'scienceQuestions': 'Science 🔬',
    'mathQuestions': 'Math 🔢',
    'historyQuestions': 'History 📜',
    'geographyQuestions': 'Geography 🌍',
    'englishQuestions': 'English 📖',
    'healthQuestions': 'Health 💪',
    'environmentQuestions': 'Environment 🌱',
    'businessQuestions': 'Business 💼',
    'technologyQuestions': 'Technology 💻',
    'parentingQuestions': 'Parenting 👶'
};

let loadedCount = 0;
let missingCount = 0;
const missingSubjects = [];

console.log('Checking all subjects...\n');

for (const [varName, displayName] of Object.entries(requiredSubjects)) {
    if (typeof window[varName] !== 'undefined' && window[varName] !== null) {
        console.log(`✅ LOADED: ${displayName}`);
        console.log(`   Variable: ${varName}`);
        console.log(`   Chapters: ${Object.keys(window[varName]).length}`);
        console.log('');
        loadedCount++;
    } else {
        console.log(`❌ MISSING: ${displayName}`);
        console.log(`   Variable: ${varName} is NOT defined!`);
        console.log(`   ACTION NEEDED: Add this JS file to WPCode`);
        console.log('');
        missingCount++;
        missingSubjects.push(displayName);
    }
}

console.log('='.repeat(60));
console.log('SUMMARY:');
console.log(`✅ Loaded: ${loadedCount}/10`);
console.log(`❌ Missing: ${missingCount}/10`);
console.log('='.repeat(60));

if (missingCount > 0) {
    console.log('');
    console.log('⚠️ MISSING SUBJECTS:');
    missingSubjects.forEach((subject, index) => {
        console.log(`   ${index + 1}. ${subject}`);
    });
    console.log('');
    console.log('📝 TO FIX:');
    console.log('   1. Go to WordPress Dashboard > Code Snippets (WPCode)');
    console.log('   2. Add each missing subject JS file as a new snippet');
    console.log('   3. Set Type: JavaScript');
    console.log('   4. Set Location: Auto Insert > Footer');
    console.log('   5. Set Priority: 10-19 (before quiz-master-app.js which is 20)');
    console.log('   6. Make sure snippet is ACTIVATED (toggle ON)');
    console.log('');
} else {
    console.log('');
    console.log('🎉 ALL SUBJECTS LOADED SUCCESSFULLY!');
    console.log('');
}

console.log('='.repeat(60));
