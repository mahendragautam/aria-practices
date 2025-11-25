/**
 * Riddles Data Module
 * ==================
 * Loads all riddle chapters (1-20)
 * Structure similar to quiz subjects
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

// Try to load each riddle chapter individually from window.riddlesQuestions
// (Each chapter file adds itself to window.riddlesQuestions[X])
// If one fails, others still work!
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[1]) { riddleQuestionBank[1] = window.riddlesQuestions[1]; console.log('✅ Riddles Chapter 1 loaded:', getRiddleCount(1), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 1 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[2]) { riddleQuestionBank[2] = window.riddlesQuestions[2]; console.log('✅ Riddles Chapter 2 loaded:', getRiddleCount(2), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 2 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[3]) { riddleQuestionBank[3] = window.riddlesQuestions[3]; console.log('✅ Riddles Chapter 3 loaded:', getRiddleCount(3), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 3 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[4]) { riddleQuestionBank[4] = window.riddlesQuestions[4]; console.log('✅ Riddles Chapter 4 loaded:', getRiddleCount(4), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 4 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[5]) { riddleQuestionBank[5] = window.riddlesQuestions[5]; console.log('✅ Riddles Chapter 5 loaded:', getRiddleCount(5), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 5 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[6]) { riddleQuestionBank[6] = window.riddlesQuestions[6]; console.log('✅ Riddles Chapter 6 loaded:', getRiddleCount(6), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 6 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[7]) { riddleQuestionBank[7] = window.riddlesQuestions[7]; console.log('✅ Riddles Chapter 7 loaded:', getRiddleCount(7), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 7 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[8]) { riddleQuestionBank[8] = window.riddlesQuestions[8]; console.log('✅ Riddles Chapter 8 loaded:', getRiddleCount(8), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 8 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[9]) { riddleQuestionBank[9] = window.riddlesQuestions[9]; console.log('✅ Riddles Chapter 9 loaded:', getRiddleCount(9), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 9 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[10]) { riddleQuestionBank[10] = window.riddlesQuestions[10]; console.log('✅ Riddles Chapter 10 loaded:', getRiddleCount(10), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 10 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[11]) { riddleQuestionBank[11] = window.riddlesQuestions[11]; console.log('✅ Riddles Chapter 11 loaded:', getRiddleCount(11), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 11 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[12]) { riddleQuestionBank[12] = window.riddlesQuestions[12]; console.log('✅ Riddles Chapter 12 loaded:', getRiddleCount(12), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 12 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[13]) { riddleQuestionBank[13] = window.riddlesQuestions[13]; console.log('✅ Riddles Chapter 13 loaded:', getRiddleCount(13), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 13 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[14]) { riddleQuestionBank[14] = window.riddlesQuestions[14]; console.log('✅ Riddles Chapter 14 loaded:', getRiddleCount(14), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 14 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[15]) { riddleQuestionBank[15] = window.riddlesQuestions[15]; console.log('✅ Riddles Chapter 15 loaded:', getRiddleCount(15), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 15 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[16]) { riddleQuestionBank[16] = window.riddlesQuestions[16]; console.log('✅ Riddles Chapter 16 loaded:', getRiddleCount(16), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 16 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[17]) { riddleQuestionBank[17] = window.riddlesQuestions[17]; console.log('✅ Riddles Chapter 17 loaded:', getRiddleCount(17), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 17 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[18]) { riddleQuestionBank[18] = window.riddlesQuestions[18]; console.log('✅ Riddles Chapter 18 loaded:', getRiddleCount(18), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 18 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[19]) { riddleQuestionBank[19] = window.riddlesQuestions[19]; console.log('✅ Riddles Chapter 19 loaded:', getRiddleCount(19), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 19 not loaded:', e); }
try { if (typeof window.riddlesQuestions !== 'undefined' && window.riddlesQuestions[20]) { riddleQuestionBank[20] = window.riddlesQuestions[20]; console.log('✅ Riddles Chapter 20 loaded:', getRiddleCount(20), 'riddles'); } } catch(e) { console.warn('❌ Riddles Chapter 20 not loaded:', e); }

// Count total riddles per chapter
function getRiddleCount(chapter) {
    if (!riddleQuestionBank[chapter]) return 0;
    let count = 0;
    const levels = ['easy', 'medium', 'hard', 'expert', 'extreme'];
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
