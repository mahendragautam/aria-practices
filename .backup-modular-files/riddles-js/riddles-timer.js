/**
 * Riddles Timer Module
 * =====================
 * Handles countdown timer functionality for timed riddle challenges
 */

// ===================================================
// TIMER FUNCTIONS
// ===================================================

function startRiddleTimer() {
    stopRiddleTimer(); // Clear any existing timer

    riddleTimerInterval = setInterval(() => {
        if (!riddleIsPaused && riddleTimeRemaining > 0) {
            riddleTimeRemaining--;
            updateRiddleTimerDisplay();

            // Time expired
            if (riddleTimeRemaining === 0) {
                riddleTimeExpired();
            }
        }
    }, 1000);
}

function stopRiddleTimer() {
    if (riddleTimerInterval) {
        clearInterval(riddleTimerInterval);
        riddleTimerInterval = null;
    }
}

function updateRiddleTimerDisplay() {
    const display = document.getElementById('riddleTimerDisplay');
    if (!display) return;

    const minutes = Math.floor(riddleTimeRemaining / 60);
    const seconds = riddleTimeRemaining % 60;
    display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Warning at 30 seconds - add warning class
    const timerContainer = display.closest('.timer-container');
    if (timerContainer) {
        if (riddleTimeRemaining <= 30) {
            timerContainer.classList.add('timer-warning');
        } else {
            timerContainer.classList.remove('timer-warning');
        }
    }
}

function toggleRiddlePause() {
    if (!riddleCanPause) return; // Can't pause timer challenges

    riddleIsPaused = !riddleIsPaused;

    const pauseBtn = document.getElementById('riddlePauseBtn');
    if (pauseBtn) {
        pauseBtn.textContent = riddleIsPaused ? '▶️ Resume' : '⏸️ Pause';
    }
}

function riddleTimeExpired() {
    stopRiddleTimer();
    alert('⏰ Time\'s up! Moving to results...');
    showRiddleResults();
}
