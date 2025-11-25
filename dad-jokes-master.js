/**
 * WPCode Snippet: Dad Jokes Complete (Master + Logic Combined)
 * ============================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 15
 *
 * This SINGLE file:
 * 1. Loads all 5 category files
 * 2. Contains all game logic
 *
 * REQUIRES: 5 category files already uploaded to WPCode:
 * - dad-jokes-category-1.js (Priority: 5)
 * - dad-jokes-category-2.js (Priority: 5)
 * - dad-jokes-category-3.js (Priority: 5)
 * - dad-jokes-category-4.js (Priority: 5)
 * - dad-jokes-category-5.js (Priority: 5)
 *
 * COPY ALL CODE BELOW
 */

(function() {
    'use strict';

    console.log('😂 Loading Dad Jokes Complete Module...');

    // PART 1: LOAD CATEGORY FILES
    // ============================
    const categoryFiles = [
        'dad-jokes-js/dad-jokes-category-1.js',
        'dad-jokes-js/dad-jokes-category-2.js',
        'dad-jokes-js/dad-jokes-category-3.js',
        'dad-jokes-js/dad-jokes-category-4.js',
        'dad-jokes-js/dad-jokes-category-5.js'
    ];

    let filesLoaded = 0;
    const totalFiles = categoryFiles.length;

    function loadFile(index) {
        if (index >= categoryFiles.length) {
            console.log('✅ All category files loaded!');
            initializeDadJokes(); // Start game logic after files loaded
            return;
        }

        const script = document.createElement('script');
        script.src = categoryFiles[index];
        script.onload = function() {
            filesLoaded++;
            console.log(`✅ Loaded (${filesLoaded}/${totalFiles}): ${categoryFiles[index]}`);
            loadFile(index + 1);
        };
        script.onerror = function() {
            console.error(`❌ Failed to load: ${categoryFiles[index]}`);
            loadFile(index + 1); // Continue loading
        };
        document.head.appendChild(script);
    }

    // Start loading files
    loadFile(0);

    // PART 2: GAME LOGIC (Runs after files loaded)
    // =============================================
    function initializeDadJokes() {
        console.log('🎮 Initializing Dad Jokes game logic...');

        // Define categories
        window.dadJokesCategories = {
            5: { name: 'Random Mix', emoji: '🎲', key: 'random' },         // FIRST!
            1: { name: 'Classic Dad Jokes', emoji: '😂', key: 'classic' },
            2: { name: 'Tech/Geek Dad Jokes', emoji: '💻', key: 'tech' },
            3: { name: 'Parenting Dad Jokes', emoji: '👶', key: 'parenting' },
            4: { name: 'Work/Office Dad Jokes', emoji: '💼', key: 'work' }
        };

        // Dad jokes data storage
        window.dadJokesData = {};

        // Load categories from window.dadJokesQuestions
        try {
            if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[1]) {
                window.dadJokesData[1] = window.dadJokesQuestions[1];
                console.log('✅ Category 1 loaded:', window.dadJokesQuestions[1].length, 'jokes');
            }
        } catch(e) { console.warn('❌ Category 1 not loaded:', e); }

        try {
            if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[2]) {
                window.dadJokesData[2] = window.dadJokesQuestions[2];
                console.log('✅ Category 2 loaded:', window.dadJokesQuestions[2].length, 'jokes');
            }
        } catch(e) { console.warn('❌ Category 2 not loaded:', e); }

        try {
            if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[3]) {
                window.dadJokesData[3] = window.dadJokesQuestions[3];
                console.log('✅ Category 3 loaded:', window.dadJokesQuestions[3].length, 'jokes');
            }
        } catch(e) { console.warn('❌ Category 3 not loaded:', e); }

        try {
            if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[4]) {
                window.dadJokesData[4] = window.dadJokesQuestions[4];
                console.log('✅ Category 4 loaded:', window.dadJokesQuestions[4].length, 'jokes');
            }
        } catch(e) { console.warn('❌ Category 4 not loaded:', e); }

        try {
            if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[5]) {
                window.dadJokesData[5] = window.dadJokesQuestions[5];
                console.log('✅ Category 5 loaded:', window.dadJokesQuestions[5].length, 'jokes');
            }
        } catch(e) { console.warn('❌ Category 5 not loaded:', e); }

        // Count jokes per category
        window.getJokeCount = function(category) {
            if (category === 5) {
                let total = 0;
                for (let i = 1; i <= 4; i++) {
                    if (window.dadJokesData[i]) {
                        total += window.dadJokesData[i].length;
                    }
                }
                return total;
            }
            if (!window.dadJokesData[category]) return 0;
            return window.dadJokesData[category].length;
        };

        // Get total jokes
        window.getTotalJokesCount = function() {
            let total = 0;
            for (let i = 1; i <= 5; i++) {
                total += window.getJokeCount(i);
            }
            return total;
        };

        // State variables
        window.currentJokeCategory = 1;
        window.currentJokeSet = 0;
        window.shuffledJokes = [];
        window.jokesPerPage = 3;

        // Show home page
        window.showDadJokesHome = function() {
            document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelector('.dad-jokes-page').classList.add('active');

            document.querySelector('.dad-jokes-page').innerHTML = `
                <h1 class="title">😂 Dad Jokes 😂</h1>
                <p class="subtitle">Get ready to groan!</p>
                <h2 class="section-title">📚 Select Category</h2>
                <div class="joke-category-grid" id="jokeCategoryGrid"></div>
                <button class="back-button" onclick="showHomePage()">← Back to Home</button>
            `;
            displayJokeCategories();
        };

        // Display categories
        window.displayJokeCategories = function() {
            const grid = document.getElementById('jokeCategoryGrid');
            if (!grid) return;

            const colors = [
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
            ];

            const displayOrder = [5, 1, 2, 3, 4];
            let html = '';

            displayOrder.forEach((categoryNum, index) => {
                const category = window.dadJokesCategories[categoryNum];
                const count = window.getJokeCount(categoryNum);
                html += `
                    <div class="joke-category-card" style="background: ${colors[index]}" onclick="selectJokeCategory(${categoryNum})">
                        <div class="category-emoji">${category.emoji}</div>
                        <div class="category-name">${category.name}</div>
                        <div class="category-count">${count} jokes</div>
                    </div>
                `;
            });
            grid.innerHTML = html;
        };

        // Select category
        window.selectJokeCategory = function(categoryNum) {
            window.currentJokeCategory = categoryNum;
            startJokeSession();
        };

        // Start session
        window.startJokeSession = function() {
            let jokes = [];

            if (window.currentJokeCategory === 5) {
                for (let i = 1; i <= 4; i++) {
                    if (window.dadJokesData[i] && window.dadJokesData[i].length > 0) {
                        jokes = jokes.concat(window.dadJokesData[i]);
                    }
                }
            } else {
                jokes = window.dadJokesData[window.currentJokeCategory];
            }

            if (!jokes || jokes.length === 0) {
                alert('❌ No jokes available!\n\nCheck:\n1. Category files uploaded\n2. Files are ACTIVE\n3. Correct priority order');
                window.showDadJokesHome();
                return;
            }

            window.shuffledJokes = [...jokes].sort(() => Math.random() - 0.5);
            window.currentJokeSet = 0;
            displayJokeSet();
        };

        // Display joke set
        window.displayJokeSet = function() {
            document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelector('.dad-jokes-page').classList.add('active');

            const category = window.dadJokesCategories[window.currentJokeCategory];
            const startIndex = window.currentJokeSet * window.jokesPerPage;
            const endIndex = Math.min(startIndex + window.jokesPerPage, window.shuffledJokes.length);
            const jokesToShow = window.shuffledJokes.slice(startIndex, endIndex);

            if (startIndex >= window.shuffledJokes.length) {
                showJokesComplete();
                return;
            }

            let jokesHTML = '';
            jokesToShow.forEach((joke, index) => {
                const globalIndex = startIndex + index;
                jokesHTML += `
                    <div class="joke-card">
                        <div class="joke-number">Joke ${globalIndex + 1} of ${window.shuffledJokes.length}</div>
                        <div class="joke-setup">${joke.setup}</div>
                        <button class="show-answer-btn" onclick="toggleJokeAnswer(${index})" id="answerBtn${index}">
                            Show Answer 👇
                        </button>
                        <div class="joke-punchline" id="punchline${index}" style="display: none;">
                            ${joke.punchline}
                        </div>
                    </div>
                `;
            });

            const progress = Math.round((startIndex / window.shuffledJokes.length) * 100);

            document.querySelector('.dad-jokes-page').innerHTML = `
                <div class="jokes-header">
                    <h2 class="jokes-title">${category.emoji} ${category.name}</h2>
                    <div class="jokes-progress">Set ${window.currentJokeSet + 1} - Jokes ${startIndex + 1}-${endIndex} of ${window.shuffledJokes.length}</div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="jokes-container">${jokesHTML}</div>
                <div class="jokes-navigation">
                    ${window.currentJokeSet > 0 ? '<button class="prev-jokes-btn" onclick="previousJokeSet()">← Previous Set</button>' : ''}
                    <button class="next-jokes-btn" onclick="nextJokeSet()">Next Set →</button>
                </div>
                <button class="back-button" onclick="confirmQuitJokes()">← Quit</button>
            `;
        };

        // Toggle answer
        window.toggleJokeAnswer = function(index) {
            const punchlineEl = document.getElementById(`punchline${index}`);
            const btnEl = document.getElementById(`answerBtn${index}`);
            if (punchlineEl && btnEl) {
                if (punchlineEl.style.display === 'none') {
                    punchlineEl.style.display = 'block';
                    btnEl.textContent = 'Hide Answer 👆';
                    btnEl.classList.add('active');
                } else {
                    punchlineEl.style.display = 'none';
                    btnEl.textContent = 'Show Answer 👇';
                    btnEl.classList.remove('active');
                }
            }
        };

        // Next set
        window.nextJokeSet = function() {
            window.currentJokeSet++;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.displayJokeSet();
        };

        // Previous set
        window.previousJokeSet = function() {
            if (window.currentJokeSet > 0) {
                window.currentJokeSet--;
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.displayJokeSet();
            }
        };

        // Complete screen
        window.showJokesComplete = function() {
            document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelector('.dad-jokes-page').classList.add('active');

            const category = window.dadJokesCategories[window.currentJokeCategory];
            document.querySelector('.dad-jokes-page').innerHTML = `
                <div class="result-content">
                    <div class="result-title">All Jokes Complete! 🎉</div>
                    <div class="badge">😂</div>
                    <div class="badge-text">HOPE YOU LAUGHED!</div>
                    <div class="score-display">${window.shuffledJokes.length} jokes</div>
                    <div class="result-details">
                        <div><span>📚 Category:</span><span>${category.name}</span></div>
                        <div><span>😄 Total Jokes:</span><span>${window.shuffledJokes.length}</span></div>
                    </div>
                    <button class="restart-button" onclick="startJokeSession()">🔄 Replay</button>
                    <button class="restart-button" onclick="showDadJokesHome()">← Choose Category</button>
                    <button class="restart-button" onclick="showHomePage()">🏠 Home</button>
                </div>
            `;
        };

        // Quit confirmation
        window.confirmQuitJokes = function() {
            if (confirm('Are you sure you want to quit?')) {
                window.showDadJokesHome();
            }
        };

        // Entry point
        window.showDadJokes = function() {
            window.showDadJokesHome();
        };

        console.log('✅ Dad Jokes initialized! Total jokes:', window.getTotalJokesCount());
    }

})();
