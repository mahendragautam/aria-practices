/**
 * Riddles Navigation Module
 * ==========================
 * Handles all screen navigation and routing for riddles section
 */

// ===================================================
// NAVIGATION FUNCTIONS
// ===================================================

function showRiddlesHome() {
    stopRiddleTimer();
    clearRiddleState();

    // Hide all pages
    document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector('.riddles-page').classList.add('active');

    const totalRiddles = getTotalRiddleCount();

    document.querySelector('.riddles-page').innerHTML = `
        <h1 class="title">🎭 Riddles Challenge 🎭</h1>
        <p class="subtitle">Test your brain power!</p>

        <!-- Entry Cards -->
        <div class="riddle-entry-cards">
            <div class="riddle-entry-card timer-card" onclick="showRiddleTimerLevels()">
                <div class="entry-card-icon">⏱️</div>
                <div class="entry-card-title">Timer Challenge</div>
                <div class="entry-card-subtitle">All ${totalRiddles} Riddles Mix</div>
                <div class="entry-card-badge">♾️</div>
            </div>

            <div class="riddle-entry-card notimer-card" onclick="showRiddleNoTimerLevels()">
                <div class="entry-card-icon">♾️</div>
                <div class="entry-card-title">No Timer</div>
                <div class="entry-card-subtitle">All ${totalRiddles} Riddles Mix</div>
                <div class="entry-card-badge">Unlimited</div>
            </div>
        </div>

        <button class="back-button" onclick="showHomePage()">← Back to Home</button>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showRiddleTimerLevels() {
    riddleTimerMode = true;
    riddleReturnPage = 'riddles';
    showRiddleDifficultySelection();
}

function showRiddleNoTimerLevels() {
    riddleTimerMode = false;
    riddleReturnPage = 'riddles';
    showRiddleDifficultySelection();
}

function showRiddleDifficultySelection() {
    const modeText = riddleTimerMode ? 'Timer Challenge' : 'Practice Mode';
    const modeIcon = riddleTimerMode ? '⏱️' : '♾️';

    document.querySelector('.riddles-page').innerHTML = `
        <h1 class="title">${modeIcon} ${modeText} ${modeIcon}</h1>
        <p class="subtitle">Select Difficulty Level</p>

        <div class="level-grid">
            <div class="level-card level-easy" onclick="startRiddleQuiz('easy')">
                <div class="level-emoji">😊</div>
                <div class="level-name">Easy</div>
                <div class="level-info">${riddleTimerMode ? '⏱️ 1:00 min' : 'No Timer'}</div>
                <div class="level-count">${getRiddleCountByLevel('easy')} riddles</div>
            </div>

            <div class="level-card level-hard" onclick="startRiddleQuiz('hard')">
                <div class="level-emoji">😰</div>
                <div class="level-name">Hard</div>
                <div class="level-info">${riddleTimerMode ? '⏱️ 2:00 min' : 'No Timer'}</div>
                <div class="level-count">${getRiddleCountByLevel('hard')} riddles</div>
            </div>

            <div class="level-card level-expert" onclick="startRiddleQuiz('expert')">
                <div class="level-emoji">🧠</div>
                <div class="level-name">Expert</div>
                <div class="level-info">${riddleTimerMode ? '⏱️ 2:30 min' : 'No Timer'}</div>
                <div class="level-count">${getRiddleCountByLevel('expert')} riddles</div>
            </div>

            <div class="level-card level-extreme" onclick="startRiddleQuiz('extreme')">
                <div class="level-emoji">🔥</div>
                <div class="level-name">Extreme</div>
                <div class="level-info">${riddleTimerMode ? '⏱️ 3:00 min' : 'No Timer'}</div>
                <div class="level-count">${getRiddleCountByLevel('extreme')} riddles</div>
            </div>
        </div>

        <button class="back-button" onclick="showRiddlesHome()">← Back</button>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBackFromRiddleQuiz() {
    // If not on first question, go to previous question
    if (currentRiddleIndex > 0) {
        previousRiddle();
        return;
    }

    // If on first question, exit quiz
    stopRiddleTimer();
    clearRiddleState();
    showRiddlesHome();
}

function showRiddleQuizScreen() {
    document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector('.riddles-page').classList.add('active');
}
