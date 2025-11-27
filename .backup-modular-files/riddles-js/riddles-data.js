/**
 * Riddles Data Module
 * ==================
 * Loads all riddle chapters (1-20) from window.riddlesQuestions or subjectQuestionBank
 *
 * LOADING ORDER IN WPCODE:
 * 1. Chapter-1-Trick-Questions.js (Priority: 10)
 * 2. Chapter 2 - Puzzle Stories.js (Priority: 11)
 * 3. Chapter 3 - Number Riddles.js (Priority: 12)
 * ... (Priorities 10-29 for chapters 1-20)
 * 30. riddles-state.js (Priority: 30)
 * 31. riddles-timer.js (Priority: 31)
 * 32. riddles-storage.js (Priority: 32)
 * 33. riddles-navigation.js (Priority: 33)
 * 34. riddles-display.js (Priority: 34)
 * 35. THIS FILE - riddles-data.js (Priority: 35)
 * 36. riddles-logic.js (Priority: 36)
 * 37. riddles-results.js (Priority: 37)
 * 38. riddles-animations.js (Priority: 38)
 */

// Riddle chapters configuration
const riddleChapters = {
    1: { name: 'Trick Questions', emoji: '🤔' },
    2: { name: 'Puzzle Stories', emoji: '📖' },
    3: { name: 'Number Riddles', emoji: '🔢' },
    4: { name: 'Classic Riddles', emoji: '🎭' },
    5: { name: 'Brain Teasers', emoji: '🧠' },
    6: { name: 'Funny Riddles', emoji: '😂' },
    7: { name: 'Mystery Riddles', emoji: '🔍' },
    8: { name: 'Everyday Objects', emoji: '🏠' },
    9: { name: 'Lateral Thinking', emoji: '💭' },
    10: { name: 'Wordplay', emoji: '📝' },
    11: { name: 'Visual Riddles', emoji: '👁️' },
    12: { name: 'Pattern Recognition', emoji: '🔷' },
    13: { name: 'Short & Quick', emoji: '⚡' },
    14: { name: 'Long Story', emoji: '📚' },
    15: { name: 'Kids Riddles', emoji: '👶' },
    16: { name: 'Hardest Riddles', emoji: '🎯' },
    17: { name: 'Mixed Bag', emoji: '🎲' },
    18: { name: 'Animal Riddles', emoji: '🐾' },
    19: { name: 'Paradox Riddles', emoji: '♾️' },
    20: { name: 'Deduction Riddles', emoji: '🕵️' }
};

// Load riddles question bank (will be loaded from separate chapter files)
const riddleQuestionBank = {};

// Try to load each riddle chapter from window.riddlesQuestions OR subjectQuestionBank
// Supports both formats for compatibility
for (let i = 1; i <= 20; i++) {
    try {
        let chapterData = null;

        // Try window.riddlesQuestions[i] first (Chapter 1 format)
        if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[i]) {
            chapterData = window.riddlesQuestions[i];
        }
        // Fallback to subjectQuestionBank['riddles'][i] (Chapters 2-20 format)
        else if (typeof subjectQuestionBank !== 'undefined' &&
                 subjectQuestionBank['riddles'] &&
                 subjectQuestionBank['riddles'][i]) {
            chapterData = subjectQuestionBank['riddles'][i];
        }

        if (chapterData) {
            riddleQuestionBank[i] = chapterData;
            console.log(`✅ Riddles Chapter ${i} loaded:`, getRiddleCount(i), 'riddles');
        }
    } catch(e) {
        console.warn(`❌ Riddles Chapter ${i} not loaded:`, e);
    }
}

// Count total riddles per chapter
function getRiddleCount(chapter) {
    if (!riddleQuestionBank[chapter]) return 0;

    // Handle two possible formats:
    // Format 1 (Chapter 1): { easy: [...], medium: [...], hard: [...], expert: [...], extreme: [...] }
    // Format 2 (Chapters 2-20): array of objects with difficulty property

    if (Array.isArray(riddleQuestionBank[chapter])) {
        // Format 2: simple array
        return riddleQuestionBank[chapter].length;
    } else {
        // Format 1: object with difficulty levels
        let count = 0;
        const levels = ['easy', 'medium', 'hard', 'expert', 'extreme'];
        levels.forEach(level => {
            if (riddleQuestionBank[chapter][level]) {
                count += riddleQuestionBank[chapter][level].length;
            }
        });
        return count;
    }
}

// Get total riddles across all chapters
function getTotalRiddleCount() {
    let total = 0;
    for (let i = 1; i <= 20; i++) {
        total += getRiddleCount(i);
    }
    return total;
}

console.log('✅ Riddles Data module loaded');
console.log(`📊 Total riddles available: ${getTotalRiddleCount()}`);
