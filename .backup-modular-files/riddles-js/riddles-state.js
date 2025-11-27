/**
 * Riddles State Module
 * =====================
 * Contains all state variables, constants, and data definitions
 * for the riddles application.
 */

// ===================================================
// RIDDLES STATE VARIABLES
// ===================================================

// Riddle state
let currentRiddleLevel = 'easy';
let currentRiddleIndex = 0;
let riddleScore = 0;
let riddleStartTime = 0;
let riddleAnswered = false;
let shuffledRiddles = [];
let riddleTimerMode = false;
let riddleReturnPage = 'home';

// Timer state for timed mode
let riddleTimeRemaining = 0;
let riddleTimerInterval = null;
let riddleIsPaused = false;
let riddleCanPause = true; // Timer challenges cannot pause

// Time limits for riddles (in seconds)
const riddleTimeLimits = {
    easy: 60,      // 1 minute
    hard: 120,     // 2 minutes
    expert: 150,   // 2.5 minutes
    extreme: 180,  // 3 minutes
    complete: 120  // 2 minutes for complete mix
};

// ===================================================
// RIDDLES CONFIGURATION
// ===================================================

// 4 Topics for riddles
const riddleTopics = {
    logic: { name: 'Logic', emoji: '🧠', color: '#667eea' },
    wordplay: { name: 'Wordplay', emoji: '📝', color: '#f093fb' },
    mystery: { name: 'Mystery', emoji: '🔍', color: '#4facfe' },
    lateral: { name: 'Lateral Thinking', emoji: '🎯', color: '#43e97b' }
};

// ===================================================
// RIDDLE CHAPTERS CONFIGURATION
// ===================================================

// Riddle chapters configuration (20 chapters)
const riddleChapters = {
    1: { name: 'Trick Questions', emoji: '🤔', topic: 'lateral' },
    2: { name: 'Puzzle Stories', emoji: '📖', topic: 'mystery' },
    3: { name: 'Number Riddles', emoji: '🔢', topic: 'logic' },
    4: { name: 'Classic Riddles', emoji: '🎭', topic: 'wordplay' },
    5: { name: 'Brain Teasers', emoji: '🧠', topic: 'logic' },
    6: { name: 'Funny Riddles', emoji: '😂', topic: 'wordplay' },
    7: { name: 'Mystery Riddles', emoji: '🔍', topic: 'mystery' },
    8: { name: 'Everyday Objects', emoji: '🏠', topic: 'wordplay' },
    9: { name: 'Lateral Thinking', emoji: '💭', topic: 'lateral' },
    10: { name: 'Wordplay', emoji: '📝', topic: 'wordplay' },
    11: { name: 'Visual Riddles', emoji: '👁️', topic: 'lateral' },
    12: { name: 'Pattern Recognition', emoji: '🔷', topic: 'logic' },
    13: { name: 'Short & Quick', emoji: '⚡', topic: 'wordplay' },
    14: { name: 'Long Story', emoji: '📚', topic: 'mystery' },
    15: { name: 'Kids Riddles', emoji: '👶', topic: 'wordplay' },
    16: { name: 'Hardest Riddles', emoji: '🎯', topic: 'logic' },
    17: { name: 'Mixed Bag', emoji: '🎲', topic: 'lateral' },
    18: { name: 'Animal Riddles', emoji: '🐾', topic: 'wordplay' },
    19: { name: 'Paradox Riddles', emoji: '♾️', topic: 'lateral' },
    20: { name: 'Deduction Riddles', emoji: '🕵️', topic: 'logic' }
};

// ===================================================
// RIDDLE QUESTION BANK LOADING
// ===================================================

// Load riddles question bank (will be loaded from separate chapter files)
const riddleQuestionBank = {};

// Try to load each riddle chapter individually
// If one fails, others still work!
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[1]) { riddleQuestionBank[1] = window.riddlesQuestions[1]; console.log('✅ Riddles Chapter 1 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 1 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[2]) { riddleQuestionBank[2] = window.riddlesQuestions[2]; console.log('✅ Riddles Chapter 2 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 2 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[3]) { riddleQuestionBank[3] = window.riddlesQuestions[3]; console.log('✅ Riddles Chapter 3 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 3 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[4]) { riddleQuestionBank[4] = window.riddlesQuestions[4]; console.log('✅ Riddles Chapter 4 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 4 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[5]) { riddleQuestionBank[5] = window.riddlesQuestions[5]; console.log('✅ Riddles Chapter 5 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 5 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[6]) { riddleQuestionBank[6] = window.riddlesQuestions[6]; console.log('✅ Riddles Chapter 6 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 6 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[7]) { riddleQuestionBank[7] = window.riddlesQuestions[7]; console.log('✅ Riddles Chapter 7 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 7 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[8]) { riddleQuestionBank[8] = window.riddlesQuestions[8]; console.log('✅ Riddles Chapter 8 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 8 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[9]) { riddleQuestionBank[9] = window.riddlesQuestions[9]; console.log('✅ Riddles Chapter 9 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 9 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[10]) { riddleQuestionBank[10] = window.riddlesQuestions[10]; console.log('✅ Riddles Chapter 10 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 10 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[11]) { riddleQuestionBank[11] = window.riddlesQuestions[11]; console.log('✅ Riddles Chapter 11 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 11 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[12]) { riddleQuestionBank[12] = window.riddlesQuestions[12]; console.log('✅ Riddles Chapter 12 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 12 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[13]) { riddleQuestionBank[13] = window.riddlesQuestions[13]; console.log('✅ Riddles Chapter 13 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 13 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[14]) { riddleQuestionBank[14] = window.riddlesQuestions[14]; console.log('✅ Riddles Chapter 14 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 14 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[15]) { riddleQuestionBank[15] = window.riddlesQuestions[15]; console.log('✅ Riddles Chapter 15 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 15 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[16]) { riddleQuestionBank[16] = window.riddlesQuestions[16]; console.log('✅ Riddles Chapter 16 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 16 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[17]) { riddleQuestionBank[17] = window.riddlesQuestions[17]; console.log('✅ Riddles Chapter 17 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 17 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[18]) { riddleQuestionBank[18] = window.riddlesQuestions[18]; console.log('✅ Riddles Chapter 18 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 18 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[19]) { riddleQuestionBank[19] = window.riddlesQuestions[19]; console.log('✅ Riddles Chapter 19 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 19 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[20]) { riddleQuestionBank[20] = window.riddlesQuestions[20]; console.log('✅ Riddles Chapter 20 loaded'); } } catch(e) { console.warn('❌ Riddles Chapter 20 not loaded:', e); }

// Count total riddles per chapter
function getRiddleCount(chapter) {
    if (!riddleQuestionBank[chapter]) return 0;
    let count = 0;
    const levels = ['easy', 'hard', 'expert', 'extreme'];
    levels.forEach(level => {
        if (riddleQuestionBank[chapter][level]) {
            count += riddleQuestionBank[chapter][level].length;
        }
    });
    return count;
}

// Get total riddles across all chapters
function getTotalRiddleCount() {
    let total = 0;
    for (let i = 1; i <= 20; i++) {
        total += getRiddleCount(i);
    }
    return total;
}

// Get riddle count by level across all chapters
function getRiddleCountByLevel(level) {
    let count = 0;
    for (let i = 1; i <= 20; i++) {
        if (riddleQuestionBank[i] && riddleQuestionBank[i][level]) {
            count += riddleQuestionBank[i][level].length;
        }
    }
    return count;
}
