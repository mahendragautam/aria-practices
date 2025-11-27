/**
 * Riddles Animations Module
 * ==========================
 * Handles emoji animations and visual effects for riddles
 * Note: Uses shared animation functions from quiz if available
 */

// ===================================================
// ANIMATION EFFECTS
// ===================================================

// Riddles can use the same animation functions as quiz
// If quiz animations are loaded, they will be used automatically
// This file is a placeholder for any riddle-specific animations

// Example: Riddle-specific celebration
function riddleCelebration() {
    if (typeof createCelebrationEmoji !== 'undefined') {
        const celebrationEmojis = ['🎉', '🎊', '⭐', '✨', '🌟', '🎯', '🧠'];
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const emoji = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
                createCelebrationEmoji(emoji);
            }, i * 200);
        }
    }
}

// Riddle-specific confetti effect
function riddleConfetti() {
    if (typeof createFallingEmojis !== 'undefined') {
        createFallingEmojis('correct');
        setTimeout(() => createFallingEmojis('correct'), 300);
        setTimeout(() => createFallingEmojis('correct'), 600);
    }
}
