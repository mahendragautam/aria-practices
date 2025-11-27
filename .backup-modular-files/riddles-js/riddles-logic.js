/**
 * Riddles Logic Module
 * =====================
 * Core game logic for riddles - answer checking, navigation, quiz flow
 */

// ===================================================
// RIDDLE GAME LOGIC
// ===================================================

function startRiddleQuiz(level) {
    stopRiddleTimer();

    currentRiddleLevel = level;
    currentRiddleIndex = 0;
    riddleScore = 0;
    riddleStartTime = Date.now();
    riddleAnswered = false;
    riddleIsPaused = false;
    riddleCanPause = !riddleTimerMode;

    // Collect all riddles from all chapters at this level
    let allRiddles = [];
    for (let i = 1; i <= 20; i++) {
        if (riddleQuestionBank[i] && riddleQuestionBank[i][level]) {
            // Add chapter info to each riddle
            const chaptersRiddles = riddleQuestionBank[i][level].map(r => ({
                ...r,
                chapter: i
            }));
            allRiddles = allRiddles.concat(chaptersRiddles);
        }
    }

    if (allRiddles.length === 0) {
        alert(`No riddles available for ${level} level!`);
        showRiddlesHome();
        return;
    }

    // Shuffle and select 10 riddles
    shuffledRiddles = allRiddles.sort(() => Math.random() - 0.5).slice(0, 10);

    // Start timer if timed mode
    if (riddleTimerMode) {
        riddleTimeRemaining = riddleTimeLimits[level];
        startRiddleTimer();
    }

    showRiddleQuizScreen();
    displayRiddleQuestion();
}

function selectRiddleAnswer(selectedIndex) {
    if (riddleAnswered) return;

    riddleAnswered = true;
    const riddle = shuffledRiddles[currentRiddleIndex];
    const options = document.querySelectorAll('.answer-option');
    const feedback = document.getElementById('riddleFeedback');
    const nextBtn = document.getElementById('riddleNextBtn');

    options[selectedIndex].classList.add('selected');

    if (selectedIndex === riddle.correct) {
        // Correct answer
        options[selectedIndex].classList.add('correct');
        feedback.textContent = ['Excellent! 🌟', 'Perfect! ✨', 'Outstanding! 🎯', 'Brilliant! 💡', 'Superb! 🏆'][Math.floor(Math.random() * 5)];
        feedback.className = 'feedback-message feedback-correct';
        riddleScore++;

        // Animation effects
        if (typeof createFallingEmojis !== 'undefined') {
            createFallingEmojis('correct');
        }
    } else {
        // Wrong answer
        options[selectedIndex].classList.add('incorrect');
        options[riddle.correct].classList.add('correct');
        feedback.textContent = ['Try next time! 📚', 'Keep practicing! 💪', 'Review and learn! 🔍'][Math.floor(Math.random() * 3)];
        feedback.className = 'feedback-message feedback-incorrect';

        // Animation effects
        if (typeof createFallingEmojis !== 'undefined') {
            createFallingEmojis('incorrect');
        }
    }

    nextBtn.disabled = false;
}

function submitRiddleAnswer() {
    if (riddleAnswered) return;

    const input = document.getElementById('riddleInput');
    const userAnswer = input.value.trim();

    if (!userAnswer) {
        alert('Please type your answer first!');
        return;
    }

    riddleAnswered = true;
    const riddle = shuffledRiddles[currentRiddleIndex];
    const feedback = document.getElementById('riddleFeedback');
    const nextBtn = document.getElementById('riddleNextBtn');
    const submitBtn = document.getElementById('riddleSubmitBtn');
    const answerDiv = document.getElementById('riddleAnswerDiv');

    // Disable input
    input.disabled = true;
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.5';

    // Check answer (case-insensitive)
    const correctAnswer = riddle.answer.toLowerCase().trim();
    const isCorrect = userAnswer.toLowerCase() === correctAnswer;

    if (isCorrect) {
        input.style.borderColor = '#2ecc71';
        input.style.background = '#d4edda';
        feedback.textContent = ['Excellent! 🌟', 'Perfect! ✨', 'Outstanding! 🎯'][Math.floor(Math.random() * 3)];
        feedback.className = 'feedback-message feedback-correct';
        riddleScore++;

        if (typeof createFallingEmojis !== 'undefined') {
            createFallingEmojis('correct');
        }
    } else {
        input.style.borderColor = '#e74c3c';
        input.style.background = '#f8d7da';
        feedback.textContent = 'Not quite! 🤔';
        feedback.className = 'feedback-message feedback-incorrect';
        answerDiv.style.display = 'block';

        if (typeof createFallingEmojis !== 'undefined') {
            createFallingEmojis('incorrect');
        }
    }

    nextBtn.disabled = false;
}

function showRiddleAnswer() {
    const answerDiv = document.getElementById('riddleAnswerDiv');
    const input = document.getElementById('riddleInput');
    const submitBtn = document.getElementById('riddleSubmitBtn');
    const nextBtn = document.getElementById('riddleNextBtn');

    answerDiv.style.display = 'block';

    if (input) input.disabled = true;
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
    }

    if (typeof createFallingEmojis !== 'undefined') {
        createFallingEmojis('incorrect');
    }

    nextBtn.disabled = false;
}

function nextRiddle() {
    currentRiddleIndex++;

    if (currentRiddleIndex < 10) {
        displayRiddleQuestion();
    } else {
        showRiddleResults();
    }
}

function previousRiddle() {
    currentRiddleIndex--;

    if (currentRiddleIndex >= 0) {
        displayRiddleQuestion();
    }
}
