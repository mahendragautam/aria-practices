/**
 * WPCode Snippet: Riddles Complete Logic - FINAL V4 (ALL FEATURES)
 * ==================================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 15
 *
 * ✅ COMPLETE FEATURE SET:
 * - State Persistence (sessionStorage)
 * - Browser Navigation (back/forward support)
 * - Collapsible Timer/No-Timer Sections
 * - Falling Emoji Animations (left corner)
 * - Background Bubble Foam
 * - Previous Question Navigation
 * - Pause Functionality
 * - Floating Background Emojis
 * - All Quiz-like Polish
 *
 * REQUIRES: 20 chapter files in WPCode (Priority: 5)
 */

(function() {
    'use strict';

    console.log('🎭 Riddles Module Loading (V4 - Full Features)...');
    
    // AGGRESSIVE emoji cleanup on ANY navigation
    function cleanupAllEmojis() {
        document.querySelectorAll('.falling-emoji, .floating-bg-emoji').forEach(e => {
            e.remove();
        });
        if (window.fallingRiddleEmojis) {
            window.fallingRiddleEmojis = [];
        }
        if (window.riddleFallingInterval) {
            clearInterval(window.riddleFallingInterval);
        }
    }
    
    // Listen for ALL clicks on navigation elements
    document.addEventListener('click', function(e) {
        const target = e.target;
        // If clicking on header/footer links or any navigation
        if (target.tagName === 'A' || 
            target.closest('header') || 
            target.closest('footer') ||
            target.closest('nav')) {
            // Clean up emojis
            setTimeout(cleanupAllEmojis, 100);
        }
    }, true);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeRiddles);
    } else {
        initializeRiddles();
    }

    function initializeRiddles() {
        console.log('🎮 Initializing Riddles with ALL features...');

        // Chapter definitions
        window.riddlesChapters = {
            1: { name: 'Trick Questions', emoji: '🤔' },
            2: { name: 'Puzzle Stories', emoji: '📖' },
            3: { name: 'Logic Puzzles', emoji: '🧩' },
            4: { name: 'Word Play', emoji: '🔤' },
            5: { name: 'Math Riddles', emoji: '🔢' },
            6: { name: 'Mystery Cases', emoji: '🔍' },
            7: { name: 'Brain Teasers', emoji: '🧠' },
            8: { name: 'Visual Puzzles', emoji: '👁️' },
            9: { name: 'Lateral Thinking', emoji: '💭' },
            10: { name: 'Classic Riddles', emoji: '📜' },
            11: { name: 'Science Riddles', emoji: '🔬' },
            12: { name: 'History Riddles', emoji: '🏛️' },
            13: { name: 'Nature Riddles', emoji: '🌿' },
            14: { name: 'Animal Riddles', emoji: '🦁' },
            15: { name: 'Food Riddles', emoji: '🍕' },
            16: { name: 'Travel Riddles', emoji: '✈️' },
            17: { name: 'Technology Riddles', emoji: '💻' },
            18: { name: 'Sports Riddles', emoji: '⚽' },
            19: { name: 'Music Riddles', emoji: '🎵' },
            20: { name: 'Movie Riddles', emoji: '🎬' }
        };

        // Level definitions (4 LEVELS ONLY)
        window.riddlesLevels = {
            easy: { name: 'Easy', emoji: '😊', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
            hard: { name: 'Hard', emoji: '😰', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
            expert: { name: 'Expert', emoji: '🤯', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
            extreme: { name: 'Extreme', emoji: '💀', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }
        };

        // Timer limits (in seconds) for each level
        const timeLimits = {
            easy: 60,      // 1 minute
            hard: 120,     // 2 minutes
            expert: 150,   // 2.5 minutes
            extreme: 180   // 3 minutes
        };

        // State variables
        window.currentRiddleChapter = 1;
        window.currentRiddleLevel = 'easy';
        window.currentRiddleIndex = 0;
        window.riddleScore = 0;
        window.shuffledRiddles = [];
        window.riddleAnswered = false;
        window.riddleTimerMode = false;
        window.riddleMixedMode = false;
        window.riddleStartTime = 0;
        window.riddleTimeRemaining = 0;
        window.riddleTimerInterval = null;
        window.riddlePaused = false;
        window.riddleCanPause = true;
        window.fallingRiddleEmojis = [];
        let isNavigatingHistory = false;

        // ===================================================
        // STATE PERSISTENCE
        // ===================================================

        function saveRiddleState() {
            const state = {
                screen: getCurrentRiddleScreen(),
                chapter: window.currentRiddleChapter,
                level: window.currentRiddleLevel,
                questionIndex: window.currentRiddleIndex,
                score: window.riddleScore,
                startTime: window.riddleStartTime,
                timerMode: window.riddleTimerMode,
                timeRemaining: window.riddleTimeRemaining,
                mixedMode: window.riddleMixedMode,
                shuffledRiddles: window.shuffledRiddles,
                answered: window.riddleAnswered,
                scrollPosition: window.scrollY
            };

            try {
                sessionStorage.setItem('riddleState', JSON.stringify(state));
                console.log('✅ Riddle state saved');
            } catch (e) {
                console.warn('⚠️ Could not save riddle state:', e);
            }
        }

        function getCurrentRiddleScreen() {
            const riddlesPage = document.querySelector('.riddles-page');
            if (!riddlesPage || !riddlesPage.classList.contains('active')) return null;

            if (document.querySelector('.riddles-page .quiz-container')) return 'riddle-quiz';
            if (document.querySelector('.riddles-page .result-container')) return 'riddle-results';
            if (document.querySelector('.riddles-page .riddle-level-grid')) return 'riddle-levels';
            return 'riddles-home';
        }

        function restoreRiddleState() {
            try {
                const savedState = sessionStorage.getItem('riddleState');
                if (!savedState) return false;

                const state = JSON.parse(savedState);
                console.log('🔄 Restoring riddle state:', state.screen);

                window.currentRiddleChapter = state.chapter || 1;
                window.currentRiddleLevel = state.level || 'easy';
                window.currentRiddleIndex = state.questionIndex || 0;
                window.riddleScore = state.score || 0;
                window.riddleStartTime = state.startTime || Date.now();
                window.riddleTimerMode = state.timerMode || false;
                window.riddleTimeRemaining = state.timeRemaining || 0;
                window.riddleMixedMode = state.mixedMode || false;
                window.shuffledRiddles = state.shuffledRiddles || [];
                window.riddleAnswered = state.answered || false;

                switch(state.screen) {
                    case 'riddle-quiz':
                        if (window.shuffledRiddles.length > 0) {
                            if (window.riddleTimerMode && window.riddleTimeRemaining > 0) {
                                startRiddleTimer();
                            }
                            displayRiddleQuestion();
                        }
                        break;
                    case 'riddle-levels':
                        showRiddleLevels();
                        break;
                    default:
                        window.showRiddlesHome();
                }

                if (state.scrollPosition) {
                    setTimeout(() => window.scrollTo(0, state.scrollPosition), 100);
                }

                return true;
            } catch (e) {
                console.warn('⚠️ Could not restore riddle state:', e);
                return false;
            }
        }

        function clearRiddleState() {
            try {
                sessionStorage.removeItem('riddleState');
                console.log('🗑️ Riddle state cleared');
            } catch (e) {
                console.warn('⚠️ Could not clear riddle state:', e);
            }
        }

        // ===================================================
        // HELPER FUNCTIONS
        // ===================================================

        function switchToRiddlesPage() {
            // Clean up all floating emojis from any previous state
            document.querySelectorAll('.falling-emoji, .floating-bg-emoji').forEach(e => e.remove());
            clearFallingRiddleEmojis();
            
            const allPages = document.querySelectorAll(
                '.home-page, .chapter-selection, .level-selection, ' +
                '.quiz-container, .result-container, .timer-challenges-page, ' +
                '.timer-subject-level-selection, .practice-mode-page, .dad-jokes-page'
            );
            allPages.forEach(page => page.classList.remove('active'));
            
            const riddlesPage = document.querySelector('.riddles-page');
            if (riddlesPage) {
                riddlesPage.classList.add('active');
            }

            if (!isNavigatingHistory) {
                const state = {
                    screen: 'riddles-page',
                    chapter: window.currentRiddleChapter,
                    level: window.currentRiddleLevel,
                    mode: window.riddleMixedMode ? 'mixed' : 'chapter'
                };
                history.pushState(state, '', '#riddles');
            }
        }

        window.getRiddleCount = function(chapter, level) {
            if (!window.riddlesQuestions || !window.riddlesQuestions[chapter]) return 0;
            if (!window.riddlesQuestions[chapter][level]) return 0;
            return window.riddlesQuestions[chapter][level].length;
        };

        function getTotalChapterRiddles(chapterNum) {
            let total = 0;
            ['easy', 'hard', 'expert', 'extreme'].forEach(level => {
                total += window.getRiddleCount(chapterNum, level);
            });
            return total;
        }

        function getAllRiddles() {
            let allRiddles = [];
            for (let chapter = 1; chapter <= 20; chapter++) {
                ['easy', 'hard', 'expert', 'extreme'].forEach(level => {
                    const riddles = window.riddlesQuestions?.[chapter]?.[level];
                    if (riddles && riddles.length > 0) {
                        allRiddles = allRiddles.concat(riddles);
                    }
                });
            }
            return allRiddles;
        }

        // ===================================================
        // ANIMATION FUNCTIONS
        // ===================================================

        function createFallingRiddleEmojis(type) {
            const workingEmojis = {
                correct: ['⭐', '✨', '⚡', '❤️', '💙', '💚', '💛', '💜', '✅', '✔️', '☀️', '🌟', '💫', '🎉', '🎊', '🎈'],
                incorrect: ['💭', '🤔', '📚', '🔍', '💡', '🧠', '❓', '🤷', '📝', '📖']
            };

            const emojisToUse = type === 'correct' ? workingEmojis.correct : workingEmojis.incorrect;

            function shuffleArray(array) {
                const shuffled = [...array];
                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
                return shuffled;
            }

            let emojis = shuffleArray(emojisToUse);

            const interval = setInterval(() => {
                if (window.riddleAnswered && window.fallingRiddleEmojis.length < 45) {
                    const emoji = document.createElement('span');
                    emoji.className = 'falling-emoji';

                    const selectedEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                    emoji.textContent = selectedEmoji;
                    emoji.setAttribute('role', 'img');
                    emoji.setAttribute('aria-label', 'celebration emoji');

                    if (Math.random() > 0.5) {
                        emojis = shuffleArray(emojis);
                    }

                    emoji.style.left = (0.3 + Math.random() * 2) + '%';
                    emoji.style.top = (5 + Math.random() * 75) + '%';
                    emoji.style.animationDuration = (Math.random() * 1.2 + 1.3) + 's';
                    emoji.style.fontSize = (1 + Math.random() * 0.8) + 'em';
                    emoji.style.display = 'inline-block';
                    document.body.appendChild(emoji);
                    window.fallingRiddleEmojis.push(emoji);

                    setTimeout(() => {
                        emoji.remove();
                        window.fallingRiddleEmojis = window.fallingRiddleEmojis.filter(e => e !== emoji);
                    }, 2500);
                }
            }, 100);

            window.riddleFallingInterval = interval;
        }

        function clearFallingRiddleEmojis() {
            clearInterval(window.riddleFallingInterval);
            const emojisToRemove = [...window.fallingRiddleEmojis];
            window.fallingRiddleEmojis = [];
            emojisToRemove.forEach(emoji => {
                if (emoji && emoji.parentNode) {
                    emoji.remove();
                }
            });
        }

        function addFloatingRiddleEmojis(emoji) {
            document.querySelectorAll('.floating-bg-emoji').forEach(e => e.remove());
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

        function createCelebrationEmoji(emoji) {
            const elem = document.createElement('div');
            elem.className = 'celebration-emoji';
            elem.textContent = emoji;
            elem.style.left = Math.random() * 15 + '%';
            elem.style.bottom = '0';
            document.body.appendChild(elem);
            setTimeout(() => elem.remove(), 3000);
        }

        // ===================================================
        // TIMER FUNCTIONS
        // ===================================================

        function startRiddleTimer() {
            stopRiddleTimer();
            window.riddleTimerInterval = setInterval(() => {
                if (!window.riddlePaused) {
                    window.riddleTimeRemaining--;
                    updateRiddleTimerDisplay();
                    if (window.riddleTimeRemaining <= 0) {
                        handleRiddleTimeUp();
                    }
                }
            }, 1000);
        }

        function stopRiddleTimer() {
            if (window.riddleTimerInterval) {
                clearInterval(window.riddleTimerInterval);
                window.riddleTimerInterval = null;
            }
        }

        function updateRiddleTimerDisplay() {
            const timerElement = document.getElementById('riddleTimerDisplay');
            if (timerElement) {
                const minutes = Math.floor(window.riddleTimeRemaining / 60);
                const seconds = window.riddleTimeRemaining % 60;
                timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

                const timerContainer = document.querySelector('.timer-container');
                if (timerContainer) {
                    if (window.riddleTimeRemaining <= 30) {
                        timerContainer.classList.add('timer-warning');
                    } else {
                        timerContainer.classList.remove('timer-warning');
                    }
                }
            }
        }

        function toggleRiddlePause() {
            window.riddlePaused = !window.riddlePaused;
            const pauseBtn = document.getElementById('riddlePauseBtn');
            if (pauseBtn) {
                pauseBtn.textContent = window.riddlePaused ? '▶️ Resume' : '⏸️ Pause';
            }

            const answerOptions = document.querySelectorAll('.riddle-option');
            const riddleInput = document.getElementById('riddleAnswer');
            const nextBtn = document.getElementById('riddleNextBtn');

            if (window.riddlePaused) {
                answerOptions.forEach(option => option.style.pointerEvents = 'none');
                if (riddleInput) riddleInput.disabled = true;
                if (nextBtn) nextBtn.disabled = true;
            } else {
                answerOptions.forEach(option => option.style.pointerEvents = 'auto');
                if (riddleInput) riddleInput.disabled = false;
                if (nextBtn && window.riddleAnswered) nextBtn.disabled = false;
            }
        }

        function handleRiddleTimeUp() {
            stopRiddleTimer();
            const feedbackMessage = document.getElementById('riddleFeedback');
            if (feedbackMessage) {
                feedbackMessage.textContent = '⏰ TIME UP!';
                feedbackMessage.className = 'riddle-feedback wrong';
            }

            const answerOptions = document.querySelectorAll('.riddle-option');
            answerOptions.forEach(option => option.style.pointerEvents = 'none');

            const riddleInput = document.getElementById('riddleAnswer');
            if (riddleInput) riddleInput.disabled = true;

            setTimeout(() => {
                showRiddleResults();
            }, 2000);
        }

        // ===================================================
        // MAIN ENTRY SCREEN
        // ===================================================

        window.showRiddlesHome = function() {
            switchToRiddlesPage();
            clearFallingRiddleEmojis();
            stopRiddleTimer();
            clearRiddleState();

            const riddlesPage = document.querySelector('.riddles-page');
            if (!riddlesPage) {
                console.error('❌ .riddles-page not found in HTML!');
                return;
            }

            const totalRiddles = getAllRiddles().length;

            const challengeCardsHTML = `
                <div class="riddle-entry-cards">
                    <div class="riddle-entry-card timer-card" onclick="startMixedChallenge(true)">
                        <div class="entry-card-icon">⏱️</div>
                        <div class="entry-card-title">Timer Challenge</div>
                        <div class="entry-card-subtitle">Race against time!</div>
                        <div class="entry-card-badge">All ${totalRiddles} Riddles Mix</div>
                    </div>

                    <div class="riddle-entry-card" onclick="startMixedChallenge(false)">
                        <div class="entry-card-icon">♾️</div>
                        <div class="entry-card-title">No Timer Challenge</div>
                        <div class="entry-card-subtitle">Take your time</div>
                        <div class="entry-card-badge">All ${totalRiddles} Riddles Mix</div>
                    </div>
                </div>
            `;

            let chaptersHTML = '';
            for (let i = 1; i <= 20; i++) {
                const chapter = window.riddlesChapters[i];
                if (!chapter) continue;

                const totalQuestions = getTotalChapterRiddles(i);

                chaptersHTML += `
                    <div class="riddle-chapter-card" onclick="selectRiddleChapter(${i})">
                        <div class="chapter-emoji">${chapter.emoji}</div>
                        <div class="chapter-name">${chapter.name}</div>
                        <div class="chapter-count">${totalQuestions}q</div>
                    </div>
                `;
            }

            riddlesPage.innerHTML = `
                <h1 class="title">🎭 Riddles 🎭</h1>
                <p class="subtitle">Challenge your brain!</p>
                
                ${challengeCardsHTML}
                
                <h2 class="section-title">📚 Browse by Chapter</h2>
                
                <div class="riddle-chapter-grid">${chaptersHTML}</div>
                
                <button class="back-button" onclick="returnToMainHome()">← Back to Home</button>
            `;

            saveRiddleState();
        };

        // Return to main quiz home (outside riddles)
        window.returnToMainHome = function() {
            clearFallingRiddleEmojis();
            stopRiddleTimer();
            clearRiddleState();
            
            // Hide riddles page
            const riddlesPage = document.querySelector('.riddles-page');
            if (riddlesPage) {
                riddlesPage.classList.remove('active');
            }
            
            // Show main home page
            const homePage = document.querySelector('.home-page');
            if (homePage) {
                homePage.classList.add('active');
            }
            
            // Call quiz's showHomePage if it exists
            if (typeof showHomePage === 'function') {
                showHomePage();
            }
        };

        // ===================================================
        // MIXED CHALLENGE (Timer + No Timer)
        // ===================================================

        window.startMixedChallenge = function(withTimer) {
            clearFallingRiddleEmojis();
            stopRiddleTimer();

            window.riddleMixedMode = true;
            window.riddleTimerMode = withTimer;
            window.riddleCanPause = !withTimer;

            const allRiddles = getAllRiddles();
            
            if (allRiddles.length === 0) {
                alert('❌ No riddles available!\n\nCheck:\n1. Chapter files uploaded to WPCode\n2. Files are ACTIVE\n3. Priority: 5 for chapters, 15 for this file');
                return;
            }

            window.shuffledRiddles = [...allRiddles].sort(() => Math.random() - 0.5);
            window.currentRiddleIndex = 0;
            window.riddleScore = 0;
            window.riddleStartTime = Date.now();
            window.riddlePaused = false;

            if (withTimer) {
                window.riddleTimeRemaining = 120; // 2 minutes for mixed
                startRiddleTimer();
            }

            displayRiddleQuestion();
            saveRiddleState();
        };

        // ===================================================
        // CHAPTER SELECTION
        // ===================================================

        window.selectRiddleChapter = function(chapterNum) {
            clearFallingRiddleEmojis();
            stopRiddleTimer();

            window.riddleMixedMode = false;
            window.currentRiddleChapter = chapterNum;
            showRiddleLevels();
        };

        // ===================================================
        // LEVEL SELECTION WITH COLLAPSIBLE SECTIONS
        // ===================================================

        function showRiddleLevels() {
            switchToRiddlesPage();

            const riddlesPage = document.querySelector('.riddles-page');
            if (!riddlesPage) return;

            const chapter = window.riddlesChapters[window.currentRiddleChapter];

            // Build Normal Level section
            let normalLevelsHTML = '';
            ['easy', 'hard', 'expert', 'extreme'].forEach(level => {
                const levelInfo = window.riddlesLevels[level];
                const count = window.getRiddleCount(window.currentRiddleChapter, level);

                normalLevelsHTML += `
                    <div class="riddle-level-card" style="background: ${levelInfo.color}" onclick="startChapterRiddles('${level}', false)">
                        <div class="level-emoji">${levelInfo.emoji}</div>
                        <div class="level-info">
                            <div class="level-name">${levelInfo.name}</div>
                            <div class="level-count">${count} riddles</div>
                        </div>
                    </div>
                `;
            });

            // Build Timer Challenge section
            let timerLevelsHTML = '';
            ['easy', 'hard', 'expert', 'extreme'].forEach(level => {
                const levelInfo = window.riddlesLevels[level];
                const count = window.getRiddleCount(window.currentRiddleChapter, level);
                const timeLimit = timeLimits[level];
                const minutes = Math.floor(timeLimit / 60);
                const seconds = timeLimit % 60;
                const timeDisplay = seconds > 0 ? `${minutes}:${seconds.toString().padStart(2, '0')} min` : `${minutes}:00 min`;

                timerLevelsHTML += `
                    <div class="riddle-level-card" style="background: ${levelInfo.color}" onclick="startChapterRiddles('${level}', true)">
                        <div class="level-emoji">${levelInfo.emoji}</div>
                        <div class="level-info">
                            <div class="level-name">${levelInfo.name}</div>
                            <div class="level-timer">⏱️ ${timeDisplay}</div>
                        </div>
                    </div>
                `;
            });

            riddlesPage.innerHTML = `
                <h1 class="title">${chapter.emoji} ${chapter.name}</h1>
                <p class="subtitle">Select difficulty level</p>
                
                <!-- Normal Level Section -->
                <div class="collapsible-header" onclick="toggleRiddleSection('normalLevel')">
                    <span class="section-title" style="margin: 0; color: white;">📊 Normal Level</span>
                    <span class="toggle-arrow" id="normalLevelArrow">▼</span>
                </div>
                <div id="normalLevel" class="collapsible-content expanded">
                    <p class="mode-description">Practice at your own pace – No time limit</p>
                    <div class="riddle-level-grid">${normalLevelsHTML}</div>
                </div>
                
                <!-- Timer Challenge Section -->
                <div class="collapsible-header" onclick="toggleRiddleSection('timerLevel')" style="margin-top: 20px;">
                    <span class="section-title" style="margin: 0; color: white;">⚡ Timer Challenge</span>
                    <span class="toggle-arrow" id="timerLevelArrow">▼</span>
                </div>
                <div id="timerLevel" class="collapsible-content expanded">
                    <p class="mode-description">Time-bound challenge – Beat the clock!</p>
                    <div class="riddle-level-grid">${timerLevelsHTML}</div>
                </div>
                
                <button class="back-button" onclick="showRiddlesHome()">← Back</button>
            `;

            saveRiddleState();
        }

        window.toggleRiddleSection = function(sectionId) {
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
        };

        // ===================================================
        // START CHAPTER RIDDLES
        // ===================================================

        function startChapterRiddles(level, timedMode) {
            clearFallingRiddleEmojis();
            stopRiddleTimer();

            window.currentRiddleLevel = level;
            window.riddleTimerMode = timedMode;
            window.riddleCanPause = !timedMode;
            window.riddlePaused = false;

            const riddles = window.riddlesQuestions?.[window.currentRiddleChapter]?.[window.currentRiddleLevel];

            if (!riddles || riddles.length === 0) {
                alert('❌ No riddles available for this level!');
                showRiddleLevels();
                return;
            }

            window.shuffledRiddles = [...riddles].sort(() => Math.random() - 0.5);
            window.currentRiddleIndex = 0;
            window.riddleScore = 0;
            window.riddleStartTime = Date.now();

            if (timedMode) {
                window.riddleTimeRemaining = timeLimits[level];
                startRiddleTimer();
            }

            displayRiddleQuestion();
            saveRiddleState();
        }

        window.startChapterRiddles = startChapterRiddles;

        // ===================================================
        // DISPLAY QUESTION
        // ===================================================

        function displayRiddleQuestion() {
            // Don't switch pages - stay on current
            // switchToRiddlesPage(); // REMOVED to prevent scroll
            window.riddleAnswered = false;

            const riddlesPage = document.querySelector('.riddles-page');
            if (!riddlesPage) return;

            if (window.currentRiddleIndex >= window.shuffledRiddles.length) {
                showRiddleResults();
                return;
            }

            const riddle = window.shuffledRiddles[window.currentRiddleIndex];

            // Get chapter info for topic badge
            const chapter = window.riddlesChapters[window.currentRiddleChapter];
            const chapterName = chapter ? chapter.name : 'Riddles';
            
            // Map chapter names to topic classes
            const topicClassMap = {
                'Trick Questions': 'topic-trick',
                'Story Riddles': 'topic-story',
                'Logic Puzzles': 'topic-logic',
                'Word Play': 'topic-word'
            };
            const topicClass = topicClassMap[chapterName] || 'topic-trick';

            let html = '';

            // Question card
            html += `<div class="riddle-card">`;
            
            // 3-column header: Topic | Timer | Empty
            html += `<div class="topic-header-grid">`;
            html += `<div class="topic-badge ${topicClass}">${chapterName}</div>`;
            
            // Timer in CENTER column (only if timer mode)
            if (window.riddleTimerMode) {
                const minutes = Math.floor(window.riddleTimeRemaining / 60);
                const seconds = window.riddleTimeRemaining % 60;
                const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                const timeClass = window.riddleTimeRemaining <= 30 ? 'timer-warning' : '';
                
                html += `<div class="timer-center ${timeClass}">`;
                html += `<span class="timer-display">⏱️ <span id="riddleTimerDisplay">${timeDisplay}</span></span>`;
                if (window.riddleCanPause) {
                    html += `<button class="timer-pause-btn" id="riddlePauseBtn" onclick="toggleRiddlePause()">${window.riddlePaused ? '▶️' : '⏸️'}</button>`;
                }
                html += `</div>`;
            } else {
                html += `<div></div>`; // Empty middle column
            }
            
            html += `<div></div>`; // Empty right column
            html += `</div>`; // Close topic-header-grid
            
            // Emoji BELOW header grid
            html += `<div class="riddle-emoji">${riddle.emoji || '🤔'}</div>`;
            html += `<div class="riddle-question">${riddle.question}</div>`;
            
            // Progress bar AFTER question, BEFORE answers
            const progress = Math.round(((window.currentRiddleIndex + 1) / window.shuffledRiddles.length) * 100);
            html += `<div class="progress-bar">`;
            html += `<div class="progress-fill" style="width: ${progress}%"></div>`;
            html += `</div>`;
            html += `<div class="progress-text">Question ${window.currentRiddleIndex + 1} of ${window.shuffledRiddles.length}</div>`;

            // Answer section
            if (riddle.answer) {
                // Extreme level - text input
                html += `<input type="text" id="riddleAnswer" class="riddle-text-input" placeholder="Type your answer..." onkeypress="if(event.key==='Enter') checkRiddleTextAnswer()">`;
                html += `<button class="riddle-submit-btn" onclick="checkRiddleTextAnswer()">Submit Answer</button>`;
            } else {
                // Multiple choice
                html += `<div class="riddle-options">`;
                riddle.options.forEach((option, index) => {
                    html += `<div class="riddle-option" onclick="checkRiddleAnswer(${index})">${option}</div>`;
                });
                html += `</div>`;
            }

            html += `<div id="riddleFeedback" class="riddle-feedback"></div>`;
            
            // Navigation INSIDE card (after feedback)
            html += `<div class="riddle-nav">`;
            html += `<button class="back-button" onclick="goBackFromRiddle()">← Back</button>`;
            html += `<div class="riddle-score">Score: <span id="riddleScoreDisplay">${window.riddleScore}</span></div>`;
            html += `<button class="next-button" id="riddleNextBtn" onclick="nextRiddle()" disabled>Next →</button>`;
            html += `</div>`;
            
            html += `</div>`; // Close riddle-card

            riddlesPage.innerHTML = html;
            
            // Scroll to question card (not header)
            setTimeout(() => {
                const riddleCard = document.querySelector('.riddle-card');
                if (riddleCard) {
                    riddleCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            
            addFloatingRiddleEmojis(riddle.emoji || '🤔');
            saveRiddleState();
        }

        // ===================================================
        // CHECK ANSWERS
        // ===================================================

        window.checkRiddleAnswer = function(selectedIndex) {
            if (window.riddleAnswered) return;

            window.riddleAnswered = true;
            const riddle = window.shuffledRiddles[window.currentRiddleIndex];
            const options = document.querySelectorAll('.riddle-option');
            const feedback = document.getElementById('riddleFeedback');
            const nextBtn = document.getElementById('riddleNextBtn');

            options[selectedIndex].classList.add('selected');

            if (selectedIndex === riddle.correct) {
                window.riddleScore++;
                options[selectedIndex].classList.add('correct');
                feedback.textContent = ['Excellent! 🌟', 'Perfect! ✨', 'Outstanding! 🎯', 'Brilliant! 💡', 'Superb! 🏆'][Math.floor(Math.random() * 5)];
                feedback.className = 'riddle-feedback correct';
                createFallingRiddleEmojis('correct');
                const celebrationEmojis = ['🎉', '🎊', '⭐', '✨', '🌟'];
                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        const emoji = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
                        createCelebrationEmoji(emoji);
                    }, i * 200);
                }
                
                // Update score display instantly
                updateScoreDisplay();
            } else {
                options[selectedIndex].classList.add('wrong');
                options[riddle.correct].classList.add('correct'); // SHOW correct answer
                feedback.textContent = ['Try next 📚', 'Keep learning 📖', 'Review this topic 🔍', 'Study more 💪', 'Not quite ❌'][Math.floor(Math.random() * 5)];
                feedback.className = 'riddle-feedback wrong';
                createFallingRiddleEmojis('incorrect');
            }

            options.forEach(opt => opt.style.pointerEvents = 'none');
            nextBtn.disabled = false;
            saveRiddleState();
        };

        // Update score display in real-time
        function updateScoreDisplay() {
            const scoreDisplay = document.getElementById('riddleScoreDisplay');
            if (scoreDisplay) {
                scoreDisplay.textContent = window.riddleScore;
            }
        }

        window.checkRiddleTextAnswer = function() {
            if (window.riddleAnswered) return;

            const input = document.getElementById('riddleAnswer');
            const userAnswer = input.value.trim().toLowerCase();

            if (!userAnswer) {
                alert('Please type your answer first!');
                return;
            }

            window.riddleAnswered = true;
            const riddle = window.shuffledRiddles[window.currentRiddleIndex];
            const feedback = document.getElementById('riddleFeedback');
            const nextBtn = document.getElementById('riddleNextBtn');

            input.disabled = true;

            const correctAnswer = riddle.answer.toLowerCase();
            const isCorrect = userAnswer === correctAnswer || userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer);

            if (isCorrect) {
                window.riddleScore++;
                input.style.borderColor = '#2ecc71';
                input.style.background = '#d4edda';
                feedback.innerHTML = `✅ Correct! Answer: ${riddle.answer}`;
                feedback.className = 'riddle-feedback correct';
                createFallingRiddleEmojis('correct');
                
                // Update score display instantly
                updateScoreDisplay();
            } else {
                input.style.borderColor = '#e74c3c';
                input.style.background = '#f8d7da';
                feedback.innerHTML = `❌ Wrong! Correct answer: ${riddle.answer}`;
                feedback.className = 'riddle-feedback wrong';
                createFallingRiddleEmojis('incorrect');
            }

            nextBtn.disabled = false;
            saveRiddleState();
        };

        // ===================================================
        // NAVIGATION
        // ===================================================

        window.nextRiddle = function() {
            clearFallingRiddleEmojis();
            window.currentRiddleIndex++;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            displayRiddleQuestion();
        };

        window.goBackFromRiddle = function() {
            if (window.currentRiddleIndex > 0) {
                // Previous question
                clearFallingRiddleEmojis();
                window.currentRiddleIndex--;
                displayRiddleQuestion();
                return;
            }

            // Exit quiz
            clearFallingRiddleEmojis();
            stopRiddleTimer();

            if (window.riddleMixedMode) {
                window.showRiddlesHome();
            } else {
                showRiddleLevels();
            }
        };

        window.confirmQuitRiddles = function() {
            if (confirm('Are you sure you want to quit?')) {
                clearFallingRiddleEmojis();
                stopRiddleTimer();
                
                if (window.riddleMixedMode) {
                    window.showRiddlesHome();
                } else {
                    showRiddleLevels();
                }
            }
        };

        // ===================================================
        // RESULTS
        // ===================================================

        function showRiddleResults() {
            clearFallingRiddleEmojis();
            stopRiddleTimer();

            const riddlesPage = document.querySelector('.riddles-page');
            if (!riddlesPage) return;

            const total = window.shuffledRiddles.length;
            const percentage = Math.round((window.riddleScore / total) * 100);
            const endTime = Date.now();
            const timeTaken = Math.floor((endTime - window.riddleStartTime) / 1000);
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;

            let badge = '🥉';
            let message = 'Keep trying!';
            let badgeEmoji = '📝📚💭🔍📖💡🌱';

            if (percentage >= 90) {
                badge = '🏆';
                message = 'Excellent!';
                badgeEmoji = '🎉🌟⭐✨💫🏆🥇👏';
            } else if (percentage >= 70) {
                badge = '🥇';
                message = 'Great job!';
                badgeEmoji = '👍📚💪🎯📖✅😊';
            } else if (percentage >= 50) {
                badge = '🥈';
                message = 'Good effort!';
                badgeEmoji = '👍📚💪🎯📖✅😊';
            }

            let modeDisplay = '';
            if (window.riddleMixedMode) {
                modeDisplay = `<div><span>🎭 Mode:</span><span>All Chapters Mix</span></div>`;
            } else {
                const chapter = window.riddlesChapters[window.currentRiddleChapter];
                const level = window.riddlesLevels[window.currentRiddleLevel];
                modeDisplay = `
                    <div><span>📚 Chapter:</span><span>${chapter.name}</span></div>
                    <div><span>⭐ Level:</span><span>${level.name}</span></div>
                `;
            }

            riddlesPage.innerHTML = `
                <div class="result-content">
                    <div class="result-title">Challenge Complete! 🎉</div>
                    <div class="badge">${badge}</div>
                    <div class="badge-text">${message}</div>
                    <div class="score-display">${window.riddleScore} / ${total}</div>
                    <div class="percentage">${percentage}%</div>
                    <div class="result-details">
                        ${modeDisplay}
                        <div><span>⏱️ Timer:</span><span>${window.riddleTimerMode ? 'Yes' : 'No'}</span></div>
                        <div><span>⏰ Time:</span><span>${minutes}m ${seconds}s</span></div>
                        <div><span>✅ Correct:</span><span>${window.riddleScore}</span></div>
                        <div><span>❌ Wrong:</span><span>${total - window.riddleScore}</span></div>
                    </div>
                    <button class="restart-button" onclick="retakeRiddles()">🔄 Retry</button>
                    <button class="restart-button" onclick="goBackFromResults()">← Back</button>
                    <button class="restart-button" onclick="returnToMainHome()">🏠 Home</button>
                </div>
            `;

            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const emoji = badgeEmoji[Math.floor(Math.random() * badgeEmoji.length)];
                    createCelebrationEmoji(emoji);
                }, i * 100);
            }

            saveRiddleState();
        }

        window.retakeRiddles = function() {
            if (window.riddleMixedMode) {
                window.startMixedChallenge(window.riddleTimerMode);
            } else {
                startChapterRiddles(window.currentRiddleLevel, window.riddleTimerMode);
            }
        };

        window.goBackFromResults = function() {
            if (window.riddleMixedMode) {
                window.showRiddlesHome();
            } else {
                showRiddleLevels();
            }
        };

        // ===================================================
        // BROWSER NAVIGATION
        // ===================================================

        window.addEventListener('popstate', function(event) {
            const riddlesPage = document.querySelector('.riddles-page');
            if (!riddlesPage || !riddlesPage.classList.contains('active')) return;

            isNavigatingHistory = true;

            if (event.state && event.state.screen === 'riddles-page') {
                if (event.state.chapter) window.currentRiddleChapter = event.state.chapter;
                if (event.state.level) window.currentRiddleLevel = event.state.level;
                
                const restored = restoreRiddleState();
                if (!restored) {
                    window.showRiddlesHome();
                }
            } else {
                clearFallingRiddleEmojis();
                stopRiddleTimer();
                window.showRiddlesHome();
            }

            isNavigatingHistory = false;
        });

        // ===================================================
        // ENTRY POINT
        // ===================================================

        window.showRiddles = function() {
            // Clean up any existing animations first
            clearFallingRiddleEmojis();
            stopRiddleTimer();
            
            const restored = restoreRiddleState();
            if (!restored) {
                window.showRiddlesHome();
            }
        };

        // Expose toggle functions globally
        window.toggleRiddlePause = toggleRiddlePause;
        
        // Global cleanup when navigating AWAY from riddles
        // Watch for any page changes and clean up emojis
        const observer = new MutationObserver(() => {
            const riddlesPage = document.querySelector('.riddles-page');
            if (riddlesPage && !riddlesPage.classList.contains('active')) {
                // Riddles page is not active, clean up
                document.querySelectorAll('.falling-emoji, .floating-bg-emoji').forEach(e => e.remove());
                clearFallingRiddleEmojis();
                stopRiddleTimer();
            }
        });
        
        // Observe the body for page changes
        observer.observe(document.body, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class']
        });

        console.log('✅ Riddles initialized with ALL features!');
    }

})();

// ============================================================================
// GLOBAL CLEANUP FOR HEADER/FOOTER NAVIGATION
// ============================================================================
// This function is called by header/footer links to clean up emojis
window.goToQuizHome = function() {
    console.log('🧹 Header/Footer cleanup triggered');
    
    // Remove all emoji elements from DOM
    document.querySelectorAll('.falling-emoji, .floating-bg-emoji').forEach(e => {
        e.remove();
    });
    
    // Clear riddles intervals and state
    if (window.fallingRiddleEmojis) {
        window.fallingRiddleEmojis = [];
    }
    if (window.riddleFallingInterval) {
        clearInterval(window.riddleFallingInterval);
    }
    if (typeof window.stopRiddleTimer === 'function') {
        window.stopRiddleTimer();
    }
    
    // Clear riddles state completely
    sessionStorage.removeItem('riddleState');
    
    // Hide ALL pages first
    document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show ONLY home page
    const homePage = document.querySelector('.home-page');
    if (homePage) {
        homePage.classList.add('active');
    }
    
    // Update browser history
    history.pushState({ screen: 'home' }, '', '#home');
};
