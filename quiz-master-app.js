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

// ===================================================
// STATE PERSISTENCE - Stay on Same Page on Refresh
// ===================================================

// Save quiz state to sessionStorage
function saveQuizState() {
    const state = {
        screen: getCurrentScreen(),
        subject: currentSubject,
        chapter: currentChapter,
        level: currentLevel,
        questionIndex: currentQuestionIndex,
        score: score,
        startTime: startTime,
        isTimedMode: isTimedMode,
        timeRemaining: timeRemaining,
        quizMode: quizMode,
        returnPage: returnPage,
        shuffledQuestions: shuffledQuestions,
        answered: answered,
        scrollPosition: window.scrollY // Save scroll position
    };

    try {
        sessionStorage.setItem('quizState', JSON.stringify(state));
        console.log('✅ Quiz state saved');
    } catch (e) {
        console.warn('⚠️ Could not save state:', e);
    }
}

// Get current active screen
function getCurrentScreen() {
    const screens = [
        'home-page', 'chapter-selection', 'level-selection',
        'quiz-container', 'result-container', 'timer-challenges-page',
        'timer-subject-level-selection', 'practice-mode-page',
        'riddles-page', 'dad-jokes-page'
    ];

    for (let screen of screens) {
        const element = document.querySelector(`.${screen}`);
        if (element && element.classList.contains('active')) {
            return screen;
        }
    }
    return 'home-page'; // Default
}

// Restore quiz state from sessionStorage
function restoreQuizState() {
    try {
        const savedState = sessionStorage.getItem('quizState');
        if (!savedState) {
            console.log('ℹ️ No saved state, showing home page');
            return false;
        }

        const state = JSON.parse(savedState);
        console.log('🔄 Restoring saved state:', state.screen);

        // Restore variables
        currentSubject = state.subject || 'science';
        currentChapter = state.chapter || 1;
        currentLevel = state.level || 'easy';
        currentQuestionIndex = state.questionIndex || 0;
        score = state.score || 0;
        startTime = state.startTime || Date.now();
        isTimedMode = state.isTimedMode || false;
        timeRemaining = state.timeRemaining || 0;
        quizMode = state.quizMode || 'normal';
        returnPage = state.returnPage || 'home';
        shuffledQuestions = state.shuffledQuestions || [];
        answered = state.answered || false;

        // Restore the correct screen
        switch(state.screen) {
            case 'quiz-container':
                if (shuffledQuestions.length > 0) {
                    // Resume quiz
                    if (isTimedMode && timeRemaining > 0) {
                        startTimer(); // Resume timer
                    }
                    displayQuestion();
                    showScreen('quiz-container', false); // Don't scroll on restore
                } else {
                    showHomePage();
                }
                break;

            case 'chapter-selection':
                const subjectData = subjects[currentSubject];
                if (subjectData) {
                    document.getElementById('subjectTitle').innerHTML = `${subjectData.emoji} ${subjectData.name} ${subjectData.emoji}`;
                }
                initializeChapters();
                showScreen('chapter-selection', false); // Don't scroll on restore
                break;

            case 'level-selection':
                document.getElementById('levelTitle').textContent = `Chapter ${currentChapter} - Select Difficulty Level`;
                showScreen('level-selection', false); // Don't scroll on restore
                break;

            case 'timer-challenges-page':
                initializeTimerSubjects();
                showScreen('timer-challenges-page', false); // Don't scroll on restore
                break;

            case 'timer-subject-level-selection':
                const timerSubjectData = subjects[currentSubject];
                if (timerSubjectData) {
                    document.getElementById('timerSubjectTitle').innerHTML = `${timerSubjectData.emoji} ${timerSubjectData.name} - Select Level`;
                }
                showScreen('timer-subject-level-selection', false); // Don't scroll on restore
                break;

            case 'practice-mode-page':
                showScreen('practice-mode-page', false); // Don't scroll on restore
                break;

            case 'result-container':
                showScreen('result-container', false); // Don't scroll on restore
                break;

            default:
                showHomePage();
        }

        // Restore scroll position after a short delay
        if (state.scrollPosition) {
            setTimeout(() => {
                window.scrollTo(0, state.scrollPosition);
            }, 100);
        }

        return true;
    } catch (e) {
        console.warn('⚠️ Could not restore state:', e);
        return false;
    }
}

// Clear quiz state (when user explicitly goes home)
function clearQuizState() {
    try {
        sessionStorage.removeItem('quizState');
        console.log('🗑️ Quiz state cleared');
    } catch (e) {
        console.warn('⚠️ Could not clear state:', e);
    }
}

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


// RESILIENT SUBJECT LOADING - Won't break if one file has error!
const subjectQuestionBank = {};

// Try to load each subject individually
// If one fails, others still work!
try { if (typeof scienceQuestions !== 'undefined') subjectQuestionBank.science = scienceQuestions; } catch(e) { console.warn('Science questions not loaded:', e); }
try { if (typeof mathQuestions !== 'undefined') subjectQuestionBank.math = mathQuestions; } catch(e) { console.warn('Math questions not loaded:', e); }
try { if (typeof historyQuestions !== 'undefined') subjectQuestionBank.history = historyQuestions; } catch(e) { console.warn('History questions not loaded:', e); }
try { if (typeof geographyQuestions !== 'undefined') subjectQuestionBank.geography = geographyQuestions; } catch(e) { console.warn('Geography questions not loaded:', e); }
try { if (typeof englishQuestions !== 'undefined') subjectQuestionBank.english = englishQuestions; } catch(e) { console.warn('English questions not loaded:', e); }
try { if (typeof healthQuestions !== 'undefined') subjectQuestionBank.health = healthQuestions; } catch(e) { console.warn('Health questions not loaded:', e); }
try { if (typeof environmentQuestions !== 'undefined') subjectQuestionBank.environment = environmentQuestions; } catch(e) { console.warn('Environment questions not loaded:', e); }
try { if (typeof businessQuestions !== 'undefined') subjectQuestionBank.business = businessQuestions; } catch(e) { console.warn('Business questions not loaded:', e); }
try { if (typeof technologyQuestions !== 'undefined') subjectQuestionBank.technology = technologyQuestions; } catch(e) { console.warn('Technology questions not loaded:', e); }
try { if (typeof parentingQuestions !== 'undefined') subjectQuestionBank.parenting = parentingQuestions; } catch(e) { console.warn('Parenting questions not loaded:', e); }

// Log loaded subjects
console.log('✅ Loaded subjects:', Object.keys(subjectQuestionBank).length + '/10');
if (Object.keys(subjectQuestionBank).length < 10) {
    console.warn('⚠️ Some subjects failed to load. Check browser console for details.');
}

// ===================================================
// APPLICATION FUNCTIONS START BELOW
// ===================================================
// Navigation functions
function showHomePage() {
    clearFallingEmojis(true); // Instant removal for button clicks
    stopTimer();
    clearQuizState(); // Clear saved state when going home
    showScreen('home-page');
}

function toggleSubjects() {
    const grid = document.getElementById('subjectGrid');
    const icon = document.getElementById('toggleIcon');
    const header = icon.closest('.section-header');

    if (grid.classList.contains('expanded')) {
        grid.classList.remove('expanded');
        icon.classList.add('collapsed');
        icon.textContent = '▶';
        if (header) header.style.marginBottom = '0'; // No gap when collapsed
    } else {
        grid.classList.add('expanded');
        icon.classList.remove('collapsed');
        icon.textContent = '▼';
        if (header) header.style.marginBottom = '10px'; // Add gap when expanded
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
    // CHECK IF SUBJECT IS LOADED!
    if (!subjectQuestionBank[subject]) {
        alert(`Sorry! ${subjects[subject].name} questions are not loaded yet.\n\n` +
              `Please check:\n` +
              `1. Is ${subject}-questions.js uploaded to WPCode?\n` +
              `2. Is the snippet ACTIVATED?\n` +
              `3. Check browser console (F12) for errors`);
        console.error(`❌ Subject "${subject}" not found in question bank!`);
        console.log('Available subjects:', Object.keys(subjectQuestionBank));
        return; // Don't navigate if subject not loaded
    }

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
    clearFallingEmojis(true); // Instant removal for button clicks
    stopTimer();

    // Check if subject is loaded
    if (!subjectQuestionBank[currentSubject]) {
        alert(`Subject "${currentSubject}" is not loaded. Please check if the question file is uploaded.`);
        return;
    }

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
        if (subjectQuestionBank[currentSubject][ch] && subjectQuestionBank[currentSubject][ch][level]) {
            allQuestions = allQuestions.concat(subjectQuestionBank[currentSubject][ch][level]);
        }
    }

    if (allQuestions.length === 0) {
        alert(`No questions found for ${level} level. Please check the question files.`);
        return;
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
    clearFallingEmojis(true); // Instant removal for button clicks
    stopTimer();

    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now();
    isTimedMode = timedMode;
    canPause = !timedMode; // Can only pause in practice mode
    isPaused = false;
    quizMode = mixType === 'levelwise' ? 'mixed-levelwise' : 'mixed-complete';
    returnPage = timedMode ? 'timer-challenges' : 'practice-mode';

    let allQuestions = [];

    if (mixType === 'levelwise') {
        // Collect questions from all subjects at the same level
        Object.keys(subjects).forEach(subject => {
            // Check if subject is loaded
            if (!subjectQuestionBank[subject]) return;

            for (let ch = 1; ch <= 20; ch++) {
                if (subjectQuestionBank[subject][ch] && subjectQuestionBank[subject][ch][level]) {
                    allQuestions = allQuestions.concat(subjectQuestionBank[subject][ch][level]);
                }
            }
        });
    } else {
        // Complete mix - all subjects, all chapters, all levels
        Object.keys(subjects).forEach(subject => {
            // Check if subject is loaded
            if (!subjectQuestionBank[subject]) return;

            for (let ch = 1; ch <= 20; ch++) {
                ['easy', 'medium', 'hard', 'expert', 'extreme'].forEach(lvl => {
                    if (subjectQuestionBank[subject][ch] && subjectQuestionBank[subject][ch][lvl]) {
                        allQuestions = allQuestions.concat(subjectQuestionBank[subject][ch][lvl]);
                    }
                });
            }
        });
    }

    if (allQuestions.length === 0) {
        alert(`No questions found. Please check if question files are loaded correctly.`);
        return;
    }

    // Shuffle and select 10 questions
    shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);

    // Setup timer if timed mode
    if (isTimedMode) {
        timeRemaining = mixType === 'complete' ? timeLimits.complete : timeLimits[level];
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
    clearFallingEmojis(true); // Instant removal for button clicks
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

    if (!subjectData) {
        console.warn(`Subject "${subject}" not found in question bank`);
        return chapters; // Return empty array
    }

    // Get all chapter numbers that exist in the question bank
    for (let chapterNum in subjectData) {
        if (subjectData.hasOwnProperty(chapterNum)) {
            chapters.push(parseInt(chapterNum));
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
    saveQuizState(); // Save state after chapter selection
}

function showChapterSelection() {
    clearFallingEmojis(true); // Instant removal for button clicks
    stopTimer();
    showScreen('chapter-selection');
}

function showLevelSelection() {
    clearFallingEmojis(true); // Instant removal for button clicks
    stopTimer();
    showScreen('level-selection');
}

function showScreen(screenClass, scrollToTop = true) {
    document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector(`.${screenClass}`).classList.add('active');

    // Smart scroll: Only scroll to top on forward navigation, not on back/restore
    if (scrollToTop) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Push to browser history ONLY if not restoring from history
    if (!isNavigatingHistory) {
        const state = {
            screen: screenClass,
            subject: currentSubject,
            chapter: currentChapter,
            mode: quizMode,
            returnPage: returnPage,
            scrollPosition: window.scrollY // Save current scroll position
        };
        history.pushState(state, '', `#${screenClass}`);
    }

    // Save state after screen change
    saveQuizState();
}

function startQuiz(level, timedMode = false) {
    clearFallingEmojis(true); // Instant removal for button clicks
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
    clearFallingEmojis(true); // Instant removal for button clicks
    currentQuestionIndex++;

    if (currentQuestionIndex < 10) {
        displayQuestion();
        saveQuizState(); // Save state after moving to next question
    } else {
        showResults();
    }
}

function previousQuestion() {
    // Go back to previous question
    clearFallingEmojis(true); // Instant removal for button clicks
    currentQuestionIndex--;

    if (currentQuestionIndex >= 0) {
        displayQuestion();
    }
}

function showResults() {
    clearFallingEmojis(true); // Instant removal for button clicks
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
    } else if (quizMode === 'mixed-levelwise' || quizMode === 'mixed-complete') {
        const mixType = quizMode === 'mixed-levelwise' ? 'levelwise' : 'complete';
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

function clearFallingEmojis(instant = true) {
    clearInterval(window.fallingInterval);

    const emojisToRemove = [...fallingEmojis]; // Copy array
    fallingEmojis = []; // Clear reference immediately

    // Instant removal - sudden disappearance like original backup
    emojisToRemove.forEach(emoji => {
        if (emoji && emoji.parentNode) {
            emoji.remove();
        }
    });
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
    console.log('🚀 Quiz app initializing...');

    // Try to restore previous state
    const restored = restoreQuizState();

    if (!restored) {
        // Fresh start - no saved state
        history.replaceState({screen: 'home-page'}, '', '#home-page');
        showHomePage();
    }

    // Always initialize chapters for home page
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

        // Save scroll position to restore after screen change
        const savedScrollPosition = event.state.scrollPosition || 0;

        // Navigate to the appropriate screen using proper functions
        switch(event.state.screen) {
            case 'home-page':
                clearFallingEmojis(true); // Instant removal for browser back button
                stopTimer();
                showScreen('home-page', false); // Don't scroll - stay at back button position
                // Restore scroll position after a short delay
                setTimeout(() => window.scrollTo(0, savedScrollPosition), 100);
                break;

            case 'chapter-selection':
                clearFallingEmojis(true); // Instant removal for browser back button
                stopTimer();
                const subjectData = subjects[currentSubject];
                if (subjectData) {
                    document.getElementById('subjectTitle').innerHTML = `${subjectData.emoji} ${subjectData.name} ${subjectData.emoji}`;
                }
                initializeChapters();
                showScreen('chapter-selection', false); // Don't scroll - stay at back button position
                setTimeout(() => window.scrollTo(0, savedScrollPosition), 100);
                break;

            case 'level-selection':
                clearFallingEmojis(true); // Instant removal for browser back button
                stopTimer();
                showScreen('level-selection', false); // Don't scroll - stay at back button position
                setTimeout(() => window.scrollTo(0, savedScrollPosition), 100);
                break;

            case 'timer-challenges-page':
                clearFallingEmojis(true); // Instant removal for browser back button
                stopTimer();
                initializeTimerSubjects();
                showScreen('timer-challenges-page', false); // Don't scroll - stay at back button position
                setTimeout(() => window.scrollTo(0, savedScrollPosition), 100);
                break;

            case 'timer-subject-level-selection':
                clearFallingEmojis(true); // Instant removal for browser back button
                stopTimer();
                const timerSubjectData = subjects[currentSubject];
                if (timerSubjectData) {
                    document.getElementById('timerSubjectTitle').innerHTML = `${timerSubjectData.emoji} ${timerSubjectData.name} - Select Level`;
                }
                showScreen('timer-subject-level-selection', false); // Don't scroll - stay at back button position
                setTimeout(() => window.scrollTo(0, savedScrollPosition), 100);
                break;

            case 'practice-mode-page':
                clearFallingEmojis(true); // Instant removal for browser back button
                stopTimer();
                showScreen('practice-mode-page', false); // Don't scroll - stay at back button position
                setTimeout(() => window.scrollTo(0, savedScrollPosition), 100);
                break;

            case 'riddles-page':
                clearFallingEmojis(true); // Instant removal for browser back button
                stopTimer();
                showScreen('riddles-page', false); // Don't scroll - stay at back button position
                setTimeout(() => window.scrollTo(0, savedScrollPosition), 100);
                break;

            case 'dad-jokes-page':
                clearFallingEmojis(true); // Instant removal for browser back button
                stopTimer();
                showScreen('dad-jokes-page', false); // Don't scroll - stay at back button position
                setTimeout(() => window.scrollTo(0, savedScrollPosition), 100);
                break;

            default:
                // For quiz-container, result-container, etc.
                clearFallingEmojis(true); // Instant removal for browser back button
                stopTimer();
                showScreen(event.state.screen, false); // Don't scroll - stay at back button position
                setTimeout(() => window.scrollTo(0, savedScrollPosition), 100);
        }
    } else {
        // If no state, go to home page
        clearFallingEmojis(true); // Instant removal for browser back button
        stopTimer();
        showScreen('home-page', false); // Don't scroll - stay at back button position
    }

    // Reset flag after navigation
    isNavigatingHistory = false;
});

// VISUAL INDICATOR for loaded/missing subjects
function updateSubjectCardStatus() {
    Object.keys(subjects).forEach(subjectKey => {
        const card = document.querySelector(`.subject-card[onclick*="${subjectKey}"]`);
        if (card) {
            if (!subjectQuestionBank[subjectKey]) {
                // Mark as unavailable
                card.style.opacity = '0.5';
                card.style.cursor = 'not-allowed';
                card.style.filter = 'grayscale(80%)';

                // Add badge
                if (!card.querySelector('.unavailable-badge')) {
                    const badge = document.createElement('div');
                    badge.className = 'unavailable-badge';
                    badge.textContent = '🚫 Not Loaded';
                    badge.style.cssText = 'position:absolute;top:5px;right:5px;background:#ff4444;color:white;padding:2px 6px;border-radius:4px;font-size:10px;';
                    card.style.position = 'relative';
                    card.appendChild(badge);
                }
            } else {
                // Mark as available
                card.style.opacity = '1';
                card.style.cursor = 'pointer';
                card.style.filter = 'none';
            }
        }
    });
}

// Call this after page loads
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateSubjectCardStatus, 100);

    // Intercept header AND footer home links to prevent page reload
    const homeLinks = document.querySelectorAll('.quiz-header a[href*="quiz.smartfamilypicks.com"], .quiz-footer a[href*="quiz.smartfamilypicks.com"]');
    homeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            showHomePage(); // Use JavaScript navigation
            return false;
        });
    });
});

// ===================================================
// LOADING PROGRESS BAR - DISABLED
// ===================================================
// Loading screen removed per user request
