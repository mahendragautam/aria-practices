/**
 * WPCode Snippet #11: Master Quiz App
 * ====================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 20
 *
 * ⚠️ IMPORTANT: This must load AFTER all question snippets!
 * Make sure Priority is 20 (higher than all question snippets 10-19)
 *
 * COPY ALL CODE BELOW
 */

// Quiz state
let currentSubject = 'science';
let currentChapter = 1;
let currentLevel = 'easy';
let currentQuestionIndex = 0;
let score = 0;
let startTime = 0;
let answered = false;
let shuffledQuestions = [];
let fallingEmojis = [];
let quizMode = 'normal'; // 'normal', 'subject-timer', 'mixed-levelwise', 'mixed-complete'
let returnPage = 'home'; // Track where to return after quiz

// Timer state for Quick Pick mode
let isTimedMode = false;
let timeRemaining = 0;
let timerInterval = null;

// History navigation flag (prevent recursive pushState)
let isNavigatingHistory = false;
let isPaused = false;
let canPause = true; // Timer challenges cannot pause

// Time limits for Quick Pick (in seconds)
const timeLimits = {
    easy: 60,      // 1 minute
    medium: 90,    // 1.5 minutes
    hard: 120,     // 2 minutes
    expert: 150,   // 2.5 minutes
    extreme: 180,  // 3 minutes
    complete: 120  // 2 minutes for complete mix
};

// Subjects definition
const subjects = {
    science: { name: 'Science', emoji: '🔬' },
    math: { name: 'Math', emoji: '🔢' },
    history: { name: 'History', emoji: '📜' },
    geography: { name: 'Geography', emoji: '🌍' },
    english: { name: 'English', emoji: '📖' },
    health: { name: 'Health & Fitness', emoji: '💪' },
    environment: { name: 'Environment', emoji: '🌱' },
    business: { name: 'Business', emoji: '💼' },
    technology: { name: 'Technology', emoji: '💻' },
    parenting: { name: 'Parenting', emoji: '👶' }
};

// Chapter colors
const chapterColors = [
    '#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C',
    '#FFD700', '#FF69B4', '#87CEFA', '#90EE90', '#BA55D3',
    '#FFA07A', '#20B2AA', '#FF6347', '#4682B4', '#32CD32',
    '#FF1493', '#00CED1', '#FF4500', '#6A5ACD', '#FFB347'
];


const subjectQuestionBank = {
    science: scienceQuestions,        // From science-questions.js
    math: mathQuestions,              // From math-questions.js
    history: historyQuestions,        // From history-questions.js
    geography: geographyQuestions,    // From geography-questions.js
    english: englishQuestions,        // From english-questions.js
    health: healthQuestions,          // From health-questions.js
    environment: environmentQuestions,// From environment-questions.js
    business: businessQuestions,      // From business-questions.js
    technology: technologyQuestions,  // From technology-questions.js
    parenting: parentingQuestions     // From parenting-questions.js
};

// ===================================================
// APPLICATION FUNCTIONS START BELOW
// ===================================================
// Navigation functions
function showHomePage() {
    clearFallingEmojis();
    stopTimer();
    showScreen('home-page');
}

function toggleSubjects() {
    const grid = document.getElementById('subjectGrid');
    const icon = document.getElementById('toggleIcon');

    if (grid.classList.contains('expanded')) {
        grid.classList.remove('expanded');
        icon.classList.add('collapsed');
        icon.textContent = '▶';
    } else {
        grid.classList.add('expanded');
        icon.classList.remove('collapsed');
        icon.textContent = '▼';
    }
}

function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const arrow = document.getElementById(sectionId + 'Arrow');

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        arrow.classList.add('collapsed');
        arrow.textContent = '▶';
    } else {
        content.classList.add('expanded');
        arrow.classList.remove('collapsed');
        arrow.textContent = '▼';
    }
}

function selectSubject(subject) {
    currentSubject = subject;
    quizMode = 'normal';
    returnPage = 'home';

    // Keep subjects expanded - don't auto-collapse
    // User can manually collapse if needed

    const subjectData = subjects[subject];
    document.getElementById('subjectTitle').innerHTML = `${subjectData.emoji} ${subjectData.name} ${subjectData.emoji}`;
    initializeChapters();
    showScreen('chapter-selection');
}

function showTimerChallenges() {
    initializeTimerSubjects();
    showScreen('timer-challenges-page');
}

function showPracticeMode() {
    showScreen('practice-mode-page');
}

function showRiddles() {
    showScreen('riddles-page');
}

function showDadJokes() {
    showScreen('dad-jokes-page');
}

function selectTimerSubject(subject) {
    currentSubject = subject;
    quizMode = 'subject-timer';
    returnPage = 'timer-challenges';
    const subjectData = subjects[subject];
    document.getElementById('timerSubjectTitle').innerHTML = `${subjectData.emoji} ${subjectData.name} - Select Level`;
    showScreen('timer-subject-level-selection');
}

function startSubjectTimer(level) {
    // Combine all 20 chapters for this subject at this level
    clearFallingEmojis();
    stopTimer();

    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now();
    isTimedMode = true;
    canPause = false; // No pause for timer challenges
    isPaused = false;
    quizMode = 'subject-timer';
    returnPage = 'timer-challenges'; // Ensure returnPage is set

    console.log('=== startSubjectTimer DEBUG ===');
    console.log('Set returnPage to:', returnPage);
    console.log('Set quizMode to:', quizMode);
    console.log('================================');

    // Collect all questions from all 20 chapters for this subject and level
    let allQuestions = [];
    for (let ch = 1; ch <= 20; ch++) {
        allQuestions = allQuestions.concat(subjectQuestionBank[currentSubject][ch][level]);
    }

    // Shuffle questions
    shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);

    // Setup timer
    timeRemaining = timeLimits[level];
    startTimer();

    displayQuestion();
    showScreen('quiz-container');
}

function startMixedQuiz(level, mixType, timedMode) {
    clearFallingEmojis();
    stopTimer();

    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now();
    isTimedMode = timedMode;
    canPause = !timedMode; // Can only pause in practice mode
    isPaused = false;

    // Set quiz mode based on mix type
    if (mixType === 'levelwise') {
        quizMode = 'mixed-levelwise';
    } else if (mixType === 'complete') {
        quizMode = 'mixed-complete';
    } else if (mixType === 'allmix') {
        quizMode = 'mixed-allmix';
    }

    returnPage = timedMode ? 'timer-challenges' : 'practice-mode';

    let allQuestions = [];

    if (mixType === 'levelwise') {
        // Collect questions from all subjects at the same level
        Object.keys(subjects).forEach(subject => {
            for (let ch = 1; ch <= 20; ch++) {
                allQuestions = allQuestions.concat(subjectQuestionBank[subject][ch][level]);
            }
        });
    } else if (mixType === 'complete') {
        // Complete mix - all subjects, all chapters, SAME level only
        Object.keys(subjects).forEach(subject => {
            for (let ch = 1; ch <= 20; ch++) {
                allQuestions = allQuestions.concat(subjectQuestionBank[subject][ch][level]);
            }
        });
    } else if (mixType === 'allmix') {
        // All Levels Mix - all subjects, all chapters, ALL levels mixed
        Object.keys(subjects).forEach(subject => {
            for (let ch = 1; ch <= 20; ch++) {
                ['easy', 'medium', 'hard', 'expert', 'extreme'].forEach(lvl => {
                    allQuestions = allQuestions.concat(subjectQuestionBank[subject][ch][lvl]);
                });
            }
        });
    }

    // Shuffle and select 10 questions
    shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);

    // Setup timer if timed mode
    if (isTimedMode) {
        timeRemaining = (mixType === 'complete' || mixType === 'allmix') ? timeLimits.complete : timeLimits[level];
        startTimer();
    }

    displayQuestion();
    showScreen('quiz-container');
}

function goBackFromResult() {
    console.log('=== goBackFromResult DEBUG ===');
    console.log('returnPage:', returnPage);
    console.log('quizMode:', quizMode);
    console.log('==============================');

    if (returnPage === 'home') {
        if (quizMode === 'normal') {
            showLevelSelection();
        } else {
            showHomePage();
        }
    } else if (returnPage === 'timer-challenges') {
        // Always go back to Timer Challenges page
        console.log('Going back to Timer Challenges page');
        showTimerChallenges();
    } else if (returnPage === 'practice-mode') {
        // Always go back to Practice Mode page
        console.log('Going back to Practice Mode page');
        showPracticeMode();
    } else {
        showHomePage();
    }
}

function goBackFromQuiz() {
    // Handle back button during quiz (not from result)
    console.log('=== goBackFromQuiz DEBUG ===');
    console.log('returnPage:', returnPage);
    console.log('quizMode:', quizMode);
    console.log('currentQuestionIndex:', currentQuestionIndex);
    console.log('============================');

    // If not on first question, go to previous question
    if (currentQuestionIndex > 0) {
        console.log('Going to previous question');
        previousQuestion();
        return;
    }

    // If on first question (index 0), exit quiz
    clearFallingEmojis();
    stopTimer();

    if (returnPage === 'home') {
        if (quizMode === 'normal') {
            showLevelSelection();
        } else {
            showHomePage();
        }
    } else if (returnPage === 'timer-challenges') {
        // Go back to Timer Challenges page
        console.log('Going back to Timer Challenges from quiz');
        showTimerChallenges();
    } else if (returnPage === 'practice-mode') {
        // Go back to Practice Mode page
        console.log('Going back to Practice Mode from quiz');
        showPracticeMode();
    } else {
        showHomePage();
    }
}

// Get available chapters for current subject
function getAvailableChapters(subject) {
    const chapters = [];
    const subjectData = subjectQuestionBank[subject];

    if (subjectData) {
        // Get all chapter numbers that exist in the question bank
        for (let chapterNum in subjectData) {
            if (subjectData.hasOwnProperty(chapterNum)) {
                chapters.push(parseInt(chapterNum));
            }
        }
    }

    // Sort chapters numerically
    chapters.sort((a, b) => a - b);
    return chapters;
}

// Initialize chapters - DYNAMIC based on question bank
function initializeChapters() {
    const grid = document.getElementById('chapterGrid');
    grid.innerHTML = ''; // Clear existing

    // Get only chapters that have questions
    const availableChapters = getAvailableChapters(currentSubject);

    if (availableChapters.length === 0) {
        // No chapters available for this subject
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No chapters available yet. Check back soon!</div>';
        return;
    }

    // Display only available chapters
    availableChapters.forEach((chapterNum, index) => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        // Use color based on chapter number (not index)
        card.style.background = chapterColors[(chapterNum - 1) % chapterColors.length];
        card.textContent = `Chapter ${chapterNum}`;
        card.onclick = () => selectChapter(chapterNum);
        grid.appendChild(card);
    });
}

// Initialize timer subjects
function initializeTimerSubjects() {
    const grid = document.getElementById('timerSubjectGrid');
    grid.innerHTML = ''; // Clear existing
    Object.keys(subjects).forEach(subjectKey => {
        const subjectData = subjects[subjectKey];
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.onclick = () => selectTimerSubject(subjectKey);
        card.innerHTML = `
            <div class="subject-emoji">${subjectData.emoji}</div>
            <div class="subject-name">${subjectData.name}</div>
        `;
        grid.appendChild(card);
    });
}

function selectChapter(chapter) {
    currentChapter = chapter;
    document.getElementById('levelTitle').textContent = `Chapter ${chapter} - Select Difficulty Level`;
    showScreen('level-selection');
}

function showChapterSelection() {
    clearFallingEmojis();
    stopTimer();
    showScreen('chapter-selection');
}

function showLevelSelection() {
    clearFallingEmojis();
    stopTimer();
    showScreen('level-selection');
}

// Map screen classes to clean URL paths
function getUrlForScreen(screenClass) {
    const urlMap = {
        'home-page': '',  // Clean URL without hash
        'chapter-selection': 'chapters',
        'level-selection': 'levels',
        'quiz-container': `quiz-${currentLevel}`,  // Dynamic based on level
        'result-container': 'results',
        'timer-challenges-page': 'timer',
        'practice-mode-page': 'practice',
        'timer-subject-level-selection': 'timer-setup',
        'riddles-page': 'riddles',
        'dad-jokes-page': 'jokes'
    };

    return urlMap[screenClass] || screenClass;
}

// Map URL paths back to screen classes
function getScreenFromUrl(urlPath) {
    const screenMap = {
        '': 'home-page',
        'chapters': 'chapter-selection',
        'levels': 'level-selection',
        'quiz-easy': 'quiz-container',
        'quiz-medium': 'quiz-container',
        'quiz-hard': 'quiz-container',
        'quiz-extreme': 'quiz-container',
        'results': 'result-container',
        'timer': 'timer-challenges-page',
        'practice': 'practice-mode-page',
        'timer-setup': 'timer-subject-level-selection',
        'riddles': 'riddles-page',
        'jokes': 'dad-jokes-page'
    };

    return screenMap[urlPath] || null;
}

function showScreen(screenClass) {
    document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector(`.${screenClass}`).classList.add('active');

    // Push to browser history ONLY if not restoring from history
    if (!isNavigatingHistory) {
        const state = {
            screen: screenClass,
            subject: currentSubject,
            chapter: currentChapter,
            mode: quizMode,
            returnPage: returnPage,
            level: currentLevel
        };

        const urlPath = getUrlForScreen(screenClass);

        // Home page should have clean URL without hash
        if (urlPath === '') {
            history.pushState(state, '', window.location.pathname);
        } else {
            history.pushState(state, '', `#${urlPath}`);
        }
    }
}

function startQuiz(level, timedMode = false) {
    clearFallingEmojis();
    stopTimer(); // Clear any existing timer

    // Validate chapter and level exist AND have questions
    if (!subjectQuestionBank[currentSubject] ||
        !subjectQuestionBank[currentSubject][currentChapter] ||
        !subjectQuestionBank[currentSubject][currentChapter][level] ||
        subjectQuestionBank[currentSubject][currentChapter][level].length === 0) {
        alert(`Sorry! Questions for ${subjects[currentSubject].name} - Chapter ${currentChapter} - ${level.toUpperCase()} level are not available yet. Please try another chapter or level.`);
        return;
    }

    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now();
    isTimedMode = timedMode;
    canPause = !timedMode; // Quick Pick (timed mode) cannot pause, normal mode can
    isPaused = false;
    quizMode = 'normal';
    returnPage = 'home';

    // Setup timer for Quick Pick mode
    if (isTimedMode) {
        timeRemaining = timeLimits[level];
        startTimer();
    }

    // Shuffle questions
    const questions = [...subjectQuestionBank[currentSubject][currentChapter][level]];
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    showScreen('quiz-container');
    displayQuestion();
}

function displayQuestion() {
    answered = false;
    const question = shuffledQuestions[currentQuestionIndex];

    console.log('=== DISPLAY QUESTION DEBUG ===');
    console.log('Current Subject:', currentSubject);
    console.log('Question Topic:', question.topic);
    console.log('Question:', question.question);
    console.log('==============================');

    let html = '';

    // Topic badge on left - at the top with color class
    html += `<div class="topic-badge topic-${question.topic.toLowerCase()}">${question.topic}</div>`;

    // Timer display for Quick Pick mode
    if (isTimedMode) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        const timeClass = timeRemaining <= 30 ? 'timer-warning' : '';

        html += `<div class="timer-container ${timeClass}">`;
        html += `<div class="timer-display">⏱️ <span id="timerDisplay">${timeDisplay}</span></div>`;
        if (canPause) {
            html += `<button class="timer-pause-btn" id="pauseBtn" onclick="togglePause()">
                        ${isPaused ? '▶️ Resume' : '⏸️ Pause'}
                     </button>`;
        }
        html += `</div>`;
    }

    // Question container - centered
    html += `<div class="question-container">`;
    html += `<div class="question-emoji">${question.emoji}</div>`;
    html += `<div class="question-text">${question.question}</div>`;
    html += `</div>`;

    // Progress info above progress bar
    html += `<div class="progress-info">${currentQuestionIndex + 1}/10</div>`;

    // Progress bar
    html += `<div class="progress-bar-container">`;
    html += `<div class="progress-bar">`;
    html += `<div class="progress-fill" style="width: ${((currentQuestionIndex + 1) / 10) * 100}%"></div>`;
    html += `</div>`;
    html += `</div>`;

    // Feedback message
    html += `<div class="feedback-message" id="feedbackMessage"></div>`;

    if (currentLevel === 'extreme') {
        // Text input for extreme level
        html += `<input type="text" class="extreme-input" id="extremeInput" placeholder="Type your answer here..." onkeypress="if(event.key==='Enter') submitExtremeAnswer()">`;

        // Button group for Submit and Show Answer
        html += `<div class="extreme-buttons">`;
        html += `<button class="submit-answer-btn" id="submitBtn" onclick="submitExtremeAnswer()">✓ Submit Answer</button>`;
        html += `<button class="show-answer-btn" id="showBtn" onclick="showExtremeAnswer()">👁️ Show Answer</button>`;
        html += `</div>`;

        html += `<div class="extreme-answer" id="extremeAnswer" style="display: none;"><strong>Correct Answer:</strong> ${question.answer}</div>`;
    } else {
        // Multiple choice answers
        html += `<div class="answers-container">`;
        question.options.forEach((option, index) => {
            html += `<div class="answer-option" onclick="selectAnswer(${index})">${option}</div>`;
        });
        html += `</div>`;
    }

    // Button container with Back and Next (outside if/else - used for both question types)
    html += `<div class="button-container">`;
    html += `<button class="quiz-back-button" onclick="goBackFromQuiz()">← Back</button>`;
    html += `<button class="next-button" id="nextBtn" onclick="nextQuestion()" disabled>Next →</button>`;
    html += `</div>`;

    document.getElementById('quizContent').innerHTML = html;

    // Add floating background emojis
    addFloatingEmojis(question.emoji);
}

function selectAnswer(selectedIndex) {
    if (answered) return;

    answered = true;
    const question = shuffledQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.answer-option');
    const feedback = document.getElementById('feedbackMessage');
    const nextBtn = document.getElementById('nextBtn');

    options[selectedIndex].classList.add('selected');

    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        feedback.textContent = ['Excellent! 🌟', 'Perfect! ✨', 'Outstanding! 🎯', 'Brilliant! 💡', 'Superb! 🏆'][Math.floor(Math.random() * 5)];
        feedback.className = 'feedback-message feedback-correct';
        score++;
        // Correct answer bubble foam
        createFallingEmojis('correct');
        // Celebration emoji from left corner
        const celebrationEmojis = ['🎉', '🎊', '⭐', '✨', '🌟'];
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const emoji = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
                createCelebrationEmoji(emoji);
            }, i * 200);
        }
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        feedback.textContent = ['Try next 📚', 'Keep learning 📖', 'Review this topic 🔍', 'Study more 💪', 'Not quite ❌'][Math.floor(Math.random() * 5)];
        feedback.className = 'feedback-message feedback-incorrect';
        // Wrong answer bubble foam - colorful emojis
        createFallingEmojis('incorrect');
        // Celebration emoji from left corner (sad face for wrong answer)
        const sadEmojis = ['😢', '😞', '😔', '💭'];
        for (let i = 0; i < 2; i++) {
            setTimeout(() => {
                const emoji = sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
                createCelebrationEmoji(emoji);
            }, i * 300);
        }
    }

    nextBtn.disabled = false;
}

function submitExtremeAnswer() {
    if (answered) return;

    const input = document.getElementById('extremeInput');
    const userAnswer = input.value.trim();

    // Don't submit if empty
    if (!userAnswer) {
        alert('Please type your answer first!');
        return;
    }

    answered = true;
    const question = shuffledQuestions[currentQuestionIndex];
    const feedback = document.getElementById('feedbackMessage');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const answerDiv = document.getElementById('extremeAnswer');

    // Disable input and submit button
    input.disabled = true;
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.5';

    // Check answer (case-insensitive, trim spaces)
    const correctAnswer = question.answer.toLowerCase().trim();
    const isCorrect = userAnswer.toLowerCase() === correctAnswer;

    if (isCorrect) {
        // Correct answer
        input.style.borderColor = '#2ecc71';
        input.style.background = '#d4edda';
        feedback.textContent = ['Excellent! 🌟', 'Perfect! ✨', 'Outstanding! 🎯', 'Brilliant! 💡', 'Superb! 🏆'][Math.floor(Math.random() * 5)];
        feedback.className = 'feedback-message feedback-correct';
        score++;

        // Correct answer bubble foam
        createFallingEmojis('correct');
        // Celebration emoji from left corner
        const celebrationEmojis = ['🎉', '🎊', '⭐', '✨', '🌟'];
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const emoji = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
                createCelebrationEmoji(emoji);
            }, i * 200);
        }
    } else {
        // Wrong answer
        input.style.borderColor = '#e74c3c';
        input.style.background = '#f8d7da';
        feedback.textContent = ['Not quite! 🤔', 'Try again next time! 💪', 'Keep learning! 📚', 'Close! 📝'][Math.floor(Math.random() * 4)];
        feedback.className = 'feedback-message feedback-incorrect';

        // Wrong answer bubble foam - colorful emojis
        createFallingEmojis('incorrect');
        // Celebration emoji from left corner (sad face for wrong answer)
        const sadEmojis = ['😢', '😞', '😔', '💭'];
        for (let i = 0; i < 2; i++) {
            setTimeout(() => {
                const emoji = sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
                createCelebrationEmoji(emoji);
            }, i * 300);
        }

        // Show correct answer
        answerDiv.style.display = 'block';
    }

    // Enable Next button
    nextBtn.disabled = false;
}

function showExtremeAnswer() {
    const answerDiv = document.getElementById('extremeAnswer');
    const nextBtn = document.getElementById('nextBtn');
    const input = document.getElementById('extremeInput');
    const submitBtn = document.getElementById('submitBtn');

    // Show the answer
    answerDiv.style.display = 'block';

    // Disable input and buttons (answer revealed, no more submission)
    if (input) input.disabled = true;
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
    }

    // Wrong answer bubble foam effect - colorful emojis
    createFallingEmojis('incorrect');

    // Enable Next button
    nextBtn.disabled = false;
}

function nextQuestion() {
    clearFallingEmojis();
    currentQuestionIndex++;

    if (currentQuestionIndex < 10) {
        displayQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    // Go back to previous question
    clearFallingEmojis();
    currentQuestionIndex--;

    if (currentQuestionIndex >= 0) {
        displayQuestion();
    }
}

function showResults() {
    clearFallingEmojis();
    stopTimer();

    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    let badge, badgeText, badgeEmoji;

    if (score >= 8) {
        badge = '🏆🥇';
        badgeText = 'Outstanding Performance!';
        badgeEmoji = '🎉🌟⭐✨💫🏆🥇👏';
    } else if (score >= 4) {
        badge = '🥈📚';
        badgeText = 'Good Effort!';
        badgeEmoji = '👍📚💪🎯📖✅😊';
    } else {
        badge = '🥉📝';
        badgeText = 'Keep Learning!';
        badgeEmoji = '📝📚💭🔍📖💡🌱';
    }

    document.getElementById('resultBadge').textContent = badge;
    document.getElementById('badgeText').textContent = badgeText;
    document.getElementById('scoreDisplay').textContent = `${score}/10`;
    document.getElementById('timeTaken').textContent = `${minutes}m ${seconds}s`;
    document.getElementById('finalScore').textContent = `${score}/10 (${score * 10}%)`;
    document.getElementById('levelCompleted').textContent = `${currentLevel.toUpperCase()} - Chapter ${currentChapter}`;

    showScreen('result-container');

    // Celebration emojis
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const emoji = badgeEmoji[Math.floor(Math.random() * badgeEmoji.length)];
            createCelebrationEmoji(emoji);
        }, i * 100);
    }
}

function retakeQuiz() {
    // Retake quiz based on current mode
    if (quizMode === 'normal') {
        startQuiz(currentLevel, isTimedMode);
    } else if (quizMode === 'subject-timer') {
        startSubjectTimer(currentLevel);
    } else if (quizMode === 'mixed-levelwise' || quizMode === 'mixed-complete' || quizMode === 'mixed-allmix') {
        let mixType = 'levelwise';
        if (quizMode === 'mixed-levelwise') {
            mixType = 'levelwise';
        } else if (quizMode === 'mixed-complete') {
            mixType = 'complete';
        } else if (quizMode === 'mixed-allmix') {
            mixType = 'allmix';
        }
        const timedMode = returnPage === 'timer-challenges';
        startMixedQuiz(currentLevel, mixType, timedMode);
    }
}

// Timer functions for Quick Pick mode
function startTimer() {
    stopTimer(); // Clear any existing timer

    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeRemaining--;

            // Update timer display
            updateTimerDisplay();

            // Check if time is up
            if (timeRemaining <= 0) {
                handleTimeUp();
            }
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timerDisplay');
    if (timerElement) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Add warning class when time is low
        const timerContainer = document.querySelector('.timer-container');
        if (timerContainer) {
            if (timeRemaining <= 30) {
                timerContainer.classList.add('timer-warning');
            } else {
                timerContainer.classList.remove('timer-warning');
            }
        }
    }
}

function togglePause() {
    isPaused = !isPaused;

    // Update pause button text
    const pauseBtn = document.getElementById('pauseBtn');
    if (pauseBtn) {
        pauseBtn.textContent = isPaused ? '▶️ Resume' : '⏸️ Pause';
    }

    // Disable/enable answer selection when paused
    const answerOptions = document.querySelectorAll('.answer-option');
    const extremeInput = document.getElementById('extremeInput');
    const nextBtn = document.getElementById('nextBtn');

    if (isPaused) {
        // Disable interactions when paused
        answerOptions.forEach(option => option.style.pointerEvents = 'none');
        if (extremeInput) extremeInput.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
    } else {
        // Re-enable interactions when resumed
        answerOptions.forEach(option => option.style.pointerEvents = 'auto');
        if (extremeInput) extremeInput.disabled = false;
        if (nextBtn && answered) nextBtn.disabled = false;
    }
}

function handleTimeUp() {
    stopTimer();

    // Show time up message
    const feedbackMessage = document.getElementById('feedbackMessage');
    if (feedbackMessage) {
        feedbackMessage.textContent = '⏰ TIME UP!';
        feedbackMessage.className = 'feedback-message feedback-incorrect';
    }

    // Disable all interactions
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => option.style.pointerEvents = 'none');

    const extremeInput = document.getElementById('extremeInput');
    if (extremeInput) extremeInput.disabled = true;

    // Auto-show results after 2 seconds
    setTimeout(() => {
        showResults();
    }, 2000);
}

function createFallingEmojis(type) {
    // Working emojis - these display properly!
    const workingEmojis = {
        correct: ['⭐', '✨', '⚡', '❤️', '💙', '💚', '💛', '💜', '✅', '✔️', '☀️', '🌟', '💫', '🎉', '🎊', '🎈'],
        incorrect: ['💭', '🤔', '📚', '🔍', '💡', '🧠', '❓', '🤷', '📝', '📖']
    };

    // Get emojis based on answer type
    const emojisToUse = type === 'correct' ? workingEmojis.correct : workingEmojis.incorrect;

    // Fisher-Yates shuffle for true randomization
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Create a pool of emojis with better distribution
    let emojis = shuffleArray(emojisToUse);

    const interval = setInterval(() => {
        if (answered && fallingEmojis.length < 45) {  // HEAVY foam: 45 emojis at once!
            const emoji = document.createElement('span');
            emoji.className = 'falling-emoji';

            // ✅ DIRECT TEXT ASSIGNMENT - KEY FIX!
            const selectedEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.textContent = selectedEmoji;  // No HTML entities, no conversions!
            emoji.setAttribute('role', 'img');
            emoji.setAttribute('aria-label', 'celebration emoji');

            // Reshuffle frequently for maximum variety
            if (Math.random() > 0.5) {
                emojis = shuffleArray(emojis);
            }

            // Position outside quiz container on left, from back button to topic area
            emoji.style.left = (0.3 + Math.random() * 2) + '%';  // More horizontal spread
            emoji.style.top = (5 + Math.random() * 75) + '%';  // 5% to 80% vertical coverage
            emoji.style.animationDuration = (Math.random() * 1.2 + 1.3) + 's';  // 1.3-2.5s variation
            emoji.style.fontSize = (1 + Math.random() * 0.8) + 'em';  // 1-1.8em size variation
            emoji.style.display = 'inline-block';  // Ensure proper rendering
            document.body.appendChild(emoji);
            fallingEmojis.push(emoji);

            setTimeout(() => {
                emoji.remove();
                fallingEmojis = fallingEmojis.filter(e => e !== emoji);
            }, 2500);  // Match animation duration
        }
    }, 100);  // VERY fast interval - HEAVY FOAM EFFECT!

    // Store interval to clear later
    window.fallingInterval = interval;
}

function clearFallingEmojis() {
    clearInterval(window.fallingInterval);
    fallingEmojis.forEach(emoji => emoji.remove());
    fallingEmojis = [];
}

function createCelebrationEmoji(emoji) {
    const elem = document.createElement('div');
    elem.className = 'celebration-emoji';
    elem.textContent = emoji;
    // Start from left corner (0-15% from left)
    elem.style.left = Math.random() * 15 + '%';
    elem.style.bottom = '0';
    document.body.appendChild(elem);

    setTimeout(() => elem.remove(), 3000);
}

function addFloatingEmojis(emoji) {
    // Remove old floating emojis
    document.querySelectorAll('.floating-bg-emoji').forEach(e => e.remove());

    // Add new floating emojis
    const emojis = emoji.split('');
    for (let i = 0; i < 5; i++) {
        const elem = document.createElement('div');
        elem.className = 'floating-bg-emoji';
        elem.textContent = emojis[i % emojis.length];
        elem.style.left = Math.random() * 100 + '%';
        elem.style.top = Math.random() * 100 + '%';
        elem.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(elem);
    }
}

// Initialize on load
window.onload = function() {
    // Get current hash from URL
    const urlPath = window.location.hash.substring(1); // Remove '#'

    // Try to get screen from URL
    const screenClass = getScreenFromUrl(urlPath);

    if (screenClass) {
        // Valid URL found
        // Extract level from quiz URLs (quiz-easy, quiz-medium, etc)
        if (urlPath.startsWith('quiz-')) {
            const level = urlPath.replace('quiz-', '');
            if (['easy', 'medium', 'hard', 'extreme'].includes(level)) {
                currentLevel = level;
            }
        }

        if (screenClass === 'home-page') {
            history.replaceState({screen: 'home-page'}, '', window.location.pathname);
        } else {
            history.replaceState({screen: screenClass, level: currentLevel}, '', `#${urlPath}`);
        }
        showScreen(screenClass);
    } else {
        // Invalid or no hash - go to homepage with clean URL
        history.replaceState({screen: 'home-page'}, '', window.location.pathname);
        showScreen('home-page');
    }

    initializeChapters();
};

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    // Set flag to prevent recursive pushState
    isNavigatingHistory = true;

    if (event.state && event.state.screen) {
        // Restore state from history
        if (event.state.subject) currentSubject = event.state.subject;
        if (event.state.chapter) currentChapter = event.state.chapter;
        if (event.state.mode) quizMode = event.state.mode;
        if (event.state.returnPage) returnPage = event.state.returnPage;
        if (event.state.level) currentLevel = event.state.level;

        // Navigate to the appropriate screen using proper functions
        switch(event.state.screen) {
            case 'home-page':
                clearFallingEmojis();
                stopTimer();
                showScreen('home-page');
                break;

            case 'chapter-selection':
                clearFallingEmojis();
                stopTimer();
                const subjectData = subjects[currentSubject];
                if (subjectData) {
                    document.getElementById('subjectTitle').innerHTML = `${subjectData.emoji} ${subjectData.name} ${subjectData.emoji}`;
                }
                initializeChapters();
                showScreen('chapter-selection');
                break;

            case 'level-selection':
                clearFallingEmojis();
                stopTimer();
                showScreen('level-selection');
                break;

            case 'timer-challenges-page':
                clearFallingEmojis();
                stopTimer();
                initializeTimerSubjects();
                showScreen('timer-challenges-page');
                break;

            case 'timer-subject-level-selection':
                clearFallingEmojis();
                stopTimer();
                const timerSubjectData = subjects[currentSubject];
                if (timerSubjectData) {
                    document.getElementById('timerSubjectTitle').innerHTML = `${timerSubjectData.emoji} ${timerSubjectData.name} - Select Level`;
                }
                showScreen('timer-subject-level-selection');
                break;

            case 'practice-mode-page':
                clearFallingEmojis();
                stopTimer();
                showScreen('practice-mode-page');
                break;

            case 'riddles-page':
                clearFallingEmojis();
                stopTimer();
                showScreen('riddles-page');
                break;

            case 'dad-jokes-page':
                clearFallingEmojis();
                stopTimer();
                showScreen('dad-jokes-page');
                break;

            default:
                // For quiz-container, result-container, etc.
                showScreen(event.state.screen);
        }
    } else {
        // If no state, go to home page
        clearFallingEmojis();
        stopTimer();
        showScreen('home-page');
    }

    // Reset flag after navigation
    isNavigatingHistory = false;
});
