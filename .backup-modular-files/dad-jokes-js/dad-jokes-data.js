/**
 * Dad Jokes Data Module
 * ==================
 * Loads all dad joke categories from window.dadJokesQuestions
 *
 * LOADING ORDER IN WPCODE:
 * 1. Category-1-Classic-Dad-Jokes.js (Priority: 10)
 * 2. Category-2-Tech-Geek-Dad-Jokes.js (Priority: 11)
 * 3. Category-3-Parenting-Dad-Jokes.js (Priority: 12)
 * 4. Category-4-Work-Office-Dad-Jokes.js (Priority: 13)
 * 5. THIS FILE - dad-jokes-data.js (Priority: 14)
 * 6. dad-jokes-logic.js (Priority: 15)
 */

// Dad jokes categories configuration
// REORDERED: Random Mix (5) shown first!
const dadJokesCategories = {
    5: { name: 'Random Mix', emoji: '🎲', key: 'random' },         // FIRST!
    1: { name: 'Classic Dad Jokes', emoji: '😂', key: 'classic' },
    2: { name: 'Tech/Geek Dad Jokes', emoji: '💻', key: 'tech' },
    3: { name: 'Parenting Dad Jokes', emoji: '👶', key: 'parenting' },
    4: { name: 'Work/Office Dad Jokes', emoji: '💼', key: 'work' }
};

// Dad jokes question bank (will be loaded from separate category files)
const dadJokesData = {};

// Try to load each joke category individually from window.dadJokesQuestions
// (Each category file adds itself to window.dadJokesQuestions[X])
// If one fails, others still work!
try {
    if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[1]) {
        dadJokesData[1] = window.dadJokesQuestions[1];
        console.log('✅ Dad Jokes Category 1 loaded:', window.dadJokesQuestions[1].length, 'jokes');
    }
} catch(e) { console.warn('❌ Dad Jokes Category 1 not loaded:', e); }

try {
    if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[2]) {
        dadJokesData[2] = window.dadJokesQuestions[2];
        console.log('✅ Dad Jokes Category 2 loaded:', window.dadJokesQuestions[2].length, 'jokes');
    }
} catch(e) { console.warn('❌ Dad Jokes Category 2 not loaded:', e); }

try {
    if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[3]) {
        dadJokesData[3] = window.dadJokesQuestions[3];
        console.log('✅ Dad Jokes Category 3 loaded:', window.dadJokesQuestions[3].length, 'jokes');
    }
} catch(e) { console.warn('❌ Dad Jokes Category 3 not loaded:', e); }

try {
    if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[4]) {
        dadJokesData[4] = window.dadJokesQuestions[4];
        console.log('✅ Dad Jokes Category 4 loaded:', window.dadJokesQuestions[4].length, 'jokes');
    }
} catch(e) { console.warn('❌ Dad Jokes Category 4 not loaded:', e); }

// Note: Category 5 (Random Mix) is NOT loaded from a file
// It dynamically combines all jokes from categories 1-4 in the logic module

// Count jokes per category
function getJokeCount(category) {
    // Special handling for Random Mix (Category 5)
    if (category === 5) {
        // Count all jokes from categories 1-4
        let total = 0;
        for (let i = 1; i <= 4; i++) {
            if (dadJokesData[i]) {
                total += dadJokesData[i].length;
            }
        }
        return total;
    }

    if (!dadJokesData[category]) return 0;
    return dadJokesData[category].length;
}

// Get total jokes across all categories
function getTotalJokesCount() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        total += getJokeCount(i);
    }
    return total;
}

console.log('✅ Dad Jokes Data module loaded');
