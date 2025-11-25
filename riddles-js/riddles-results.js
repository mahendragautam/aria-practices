/**
 * Riddles Results Module
 * =======================
 * Displays quiz results and stats
 */

// ===================================================
// RESULTS DISPLAY
// ===================================================

function showRiddleResults() {
    stopRiddleTimer();
    clearRiddleState();

    const timeTaken = Math.floor((Date.now() - riddleStartTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    // Calculate performance
    const percentage = (riddleScore / 10) * 100;
    let performance = '';
    let performanceEmoji = '';

    if (percentage === 100) {
        performance = 'Perfect!';
        performanceEmoji = '🏆';
    } else if (percentage >= 80) {
        performance = 'Excellent!';
        performanceEmoji = '⭐';
    } else if (percentage >= 60) {
        performance = 'Good Job!';
        performanceEmoji = '👍';
    } else if (percentage >= 40) {
        performance = 'Keep Practicing!';
        performanceEmoji = '💪';
    } else {
        performance = 'Try Again!';
        performanceEmoji = '📚';
    }

    document.querySelector('.riddles-page').innerHTML = `
        <div class="result-container">
            <h1 class="result-title">${performanceEmoji} ${performance} ${performanceEmoji}</h1>

            <div class="result-score-big">${riddleScore}/10</div>
            <div class="result-percentage">${percentage}%</div>

            <div class="result-stats">
                <div class="stat-item">
                    <div class="stat-icon">⏱️</div>
                    <div class="stat-label">Time</div>
                    <div class="stat-value">${minutes}:${seconds.toString().padStart(2, '0')}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">🎯</div>
                    <div class="stat-label">Level</div>
                    <div class="stat-value">${currentRiddleLevel.toUpperCase()}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">✅</div>
                    <div class="stat-label">Correct</div>
                    <div class="stat-value">${riddleScore}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">❌</div>
                    <div class="stat-label">Wrong</div>
                    <div class="stat-value">${10 - riddleScore}</div>
                </div>
            </div>

            <div class="result-buttons">
                <button class="retry-btn" onclick="retryRiddleQuiz()">🔄 Try Again</button>
                <button class="home-btn" onclick="showRiddlesHome()">🏠 Back to Riddles</button>
                <button class="main-home-btn" onclick="showHomePage()">🏡 Main Home</button>
            </div>
        </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function retryRiddleQuiz() {
    startRiddleQuiz(currentRiddleLevel);
}
