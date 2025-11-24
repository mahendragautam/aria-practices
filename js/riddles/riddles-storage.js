/**
 * Riddles Storage Module
 * =======================
 * Handles localStorage for saving and resuming riddle progress
 */

// ===================================================
// STORAGE FUNCTIONS
// ===================================================

function saveRiddleState() {
    const state = {
        level: currentRiddleLevel,
        index: currentRiddleIndex,
        score: riddleScore,
        timerMode: riddleTimerMode,
        timeRemaining: riddleTimeRemaining,
        questions: shuffledRiddles,
        startTime: riddleStartTime,
        returnPage: riddleReturnPage,
        timestamp: Date.now()
    };

    try {
        localStorage.setItem('riddleQuizState', JSON.stringify(state));
    } catch (e) {
        console.warn('Could not save riddle state:', e);
    }
}

function loadRiddleState() {
    try {
        const saved = localStorage.getItem('riddleQuizState');
        if (!saved) return false;

        const state = JSON.parse(saved);

        // Check if saved state is less than 1 hour old
        if (Date.now() - state.timestamp > 3600000) {
            clearRiddleState();
            return false;
        }

        // Restore state
        currentRiddleLevel = state.level;
        currentRiddleIndex = state.index;
        riddleScore = state.score;
        riddleTimerMode = state.timerMode;
        riddleTimeRemaining = state.timeRemaining;
        shuffledRiddles = state.questions;
        riddleStartTime = state.startTime;
        riddleReturnPage = state.returnPage || 'home';

        return true;
    } catch (e) {
        console.warn('Could not load riddle state:', e);
        return false;
    }
}

function clearRiddleState() {
    try {
        localStorage.removeItem('riddleQuizState');
    } catch (e) {
        console.warn('Could not clear riddle state:', e);
    }
}
