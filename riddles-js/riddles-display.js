/**
 * Riddles Display Module
 * =======================
 * Handles UI rendering and visual updates for riddles
 */

// ===================================================
// DISPLAY FUNCTIONS
// ===================================================

function displayRiddleQuestion() {
    riddleAnswered = false;
    const riddle = shuffledRiddles[currentRiddleIndex];

    if (!riddle) {
        console.error('No riddle found at index:', currentRiddleIndex);
        return;
    }

    // Get topic info
    const chapterInfo = riddleChapters[riddle.chapter] || {};
    const topicKey = chapterInfo.topic || 'logic';
    const topicInfo = riddleTopics[topicKey] || riddleTopics.logic;

    let html = '';

    // Topic badge (top-left)
    html += `<div class="topic-badge topic-${topicKey}" style="background: ${topicInfo.color}">
                ${topicInfo.emoji} ${topicInfo.name}
             </div>`;

    // Timer display (if timed mode)
    if (riddleTimerMode) {
        const minutes = Math.floor(riddleTimeRemaining / 60);
        const seconds = riddleTimeRemaining % 60;
        const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        const timeClass = riddleTimeRemaining <= 30 ? 'timer-warning' : '';

        html += `<div class="timer-container ${timeClass}">`;
        html += `<div class="timer-display">⏱️ <span id="riddleTimerDisplay">${timeDisplay}</span></div>`;
        if (riddleCanPause) {
            html += `<button class="timer-pause-btn" id="riddlePauseBtn" onclick="toggleRiddlePause()">
                        ${riddleIsPaused ? '▶️ Resume' : '⏸️ Pause'}
                     </button>`;
        }
        html += `</div>`;
    }

    // Question container
    html += `<div class="question-container">`;
    html += `<div class="question-emoji">${chapterInfo.emoji || '🤔'}</div>`;
    html += `<div class="question-text">${riddle.question}</div>`;
    html += `</div>`;

    // Progress info
    html += `<div class="progress-info">${currentRiddleIndex + 1}/10</div>`;

    // Progress bar
    html += `<div class="progress-bar-container">`;
    html += `<div class="progress-bar">`;
    html += `<div class="progress-fill" style="width: ${((currentRiddleIndex + 1) / 10) * 100}%"></div>`;
    html += `</div>`;
    html += `</div>`;

    // Feedback message
    html += `<div class="feedback-message" id="riddleFeedback"></div>`;

    // Answer input/options based on level
    if (currentRiddleLevel === 'extreme') {
        // Text input for extreme level
        html += `<input type="text" class="extreme-input" id="riddleInput" placeholder="Type your answer..." onkeypress="if(event.key==='Enter') submitRiddleAnswer()">`;

        // Buttons
        html += `<div class="extreme-buttons">`;
        html += `<button class="submit-answer-btn" id="riddleSubmitBtn" onclick="submitRiddleAnswer()">✓ Submit</button>`;
        html += `<button class="show-answer-btn" id="riddleShowBtn" onclick="showRiddleAnswer()">👁️ Show Answer</button>`;
        html += `</div>`;

        html += `<div class="extreme-answer" id="riddleAnswerDiv" style="display: none;"><strong>Answer:</strong> ${riddle.answer}</div>`;
    } else {
        // Multiple choice
        html += `<div class="answers-container">`;
        riddle.options.forEach((option, index) => {
            html += `<div class="answer-option" onclick="selectRiddleAnswer(${index})">${option}</div>`;
        });
        html += `</div>`;
    }

    // Navigation buttons
    html += `<div class="button-container">`;
    html += `<button class="quiz-back-button" onclick="goBackFromRiddleQuiz()">← Back</button>`;
    html += `<button class="next-button" id="riddleNextBtn" onclick="nextRiddle()" disabled>Next →</button>`;
    html += `</div>`;

    // Update page content
    document.querySelector('.riddles-page').innerHTML = html;

    // Save state
    saveRiddleState();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
