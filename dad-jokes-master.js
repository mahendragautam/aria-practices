/**
 * WPCode Snippet: Dad Jokes Complete - FINAL FIXED
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 15
 *
 * ✅ FIXES:
 * 1. Properly hides home page
 * 2. Shows only dad jokes page
 * 3. Clean page transitions
 * 4. No quiz interference
 *
 * REQUIRES: 5 category files in WPCode (Priority: 5)
 *
 * COPY ALL CODE BELOW
 */

(function() {
    'use strict';

    console.log('😂 Dad Jokes Module Loading...');

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeDadJokes);
    } else {
        initializeDadJokes();
    }

    function initializeDadJokes() {
        console.log('🎮 Initializing Dad Jokes...');

        // Define categories
        window.dadJokesCategories = {
            5: { name: 'Random Mix', emoji: '🎲', key: 'random' },
            1: { name: 'Classic Dad Jokes', emoji: '😂', key: 'classic' },
            2: { name: 'Tech/Geek Dad Jokes', emoji: '💻', key: 'tech' },
            3: { name: 'Parenting Dad Jokes', emoji: '👶', key: 'parenting' },
            4: { name: 'Work/Office Dad Jokes', emoji: '💼', key: 'work' }
        };

        // Dad jokes data storage
        window.dadJokesData = {};

        // Load categories from window.dadJokesQuestions
        for (let i = 1; i <= 4; i++) {
            try {
                if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[i]) {
                    window.dadJokesData[i] = window.dadJokesQuestions[i];
                    console.log(`✅ Category ${i}: ${window.dadJokesQuestions[i].length} jokes`);
                }
            } catch(e) {
                console.warn(`⚠️ Category ${i} not loaded`);
            }
        }

        // State variables
        window.currentJokeCategory = 1;
        window.currentJokeSet = 0;
        window.shuffledJokes = [];
        window.jokesPerPage = 3;

        // Helper: Get joke count
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

        // Helper: Switch to dad jokes page (FIXED)
        function switchToDadJokesPage() {
            // Hide ALL other pages
            const allPages = document.querySelectorAll(
                '.home-page, .chapter-selection, .level-selection, ' +
                '.quiz-container, .result-container, .timer-challenges-page, ' +
                '.timer-subject-level-selection, .practice-mode-page, .riddles-page'
            );
            allPages.forEach(page => page.classList.remove('active'));
            
            // Show ONLY dad jokes page
            const dadJokesPage = document.querySelector('.dad-jokes-page');
            if (dadJokesPage) {
                dadJokesPage.classList.add('active');
            }
        }

        // Show home page
        window.showDadJokesHome = function() {
            // Switch to dad jokes page (hides home)
            switchToDadJokesPage();

            const dadJokesPage = document.querySelector('.dad-jokes-page');
            if (!dadJokesPage) {
                console.error('❌ .dad-jokes-page not found in HTML!');
                return;
            }

            // Populate content
            dadJokesPage.innerHTML = `
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
                // Random mix - combine all categories
                for (let i = 1; i <= 4; i++) {
                    if (window.dadJokesData[i] && window.dadJokesData[i].length > 0) {
                        jokes = jokes.concat(window.dadJokesData[i]);
                    }
                }
            } else {
                jokes = window.dadJokesData[window.currentJokeCategory];
            }

            if (!jokes || jokes.length === 0) {
                alert('❌ No jokes available!\n\nCheck:\n1. Category files uploaded to WPCode\n2. Files are ACTIVE\n3. Priority: 5 for categories, 15 for this file');
                window.showDadJokesHome();
                return;
            }

            // Shuffle jokes
            window.shuffledJokes = [...jokes].sort(() => Math.random() - 0.5);
            window.currentJokeSet = 0;
            displayJokeSet();
        };

        // Display joke set
        window.displayJokeSet = function() {
            // Make sure we're on dad jokes page
            switchToDadJokesPage();

            const dadJokesPage = document.querySelector('.dad-jokes-page');
            if (!dadJokesPage) return;

            const category = window.dadJokesCategories[window.currentJokeCategory];
            const startIndex = window.currentJokeSet * window.jokesPerPage;
            const endIndex = Math.min(startIndex + window.jokesPerPage, window.shuffledJokes.length);
            const jokesToShow = window.shuffledJokes.slice(startIndex, endIndex);

            // Check if we've reached the end
            if (startIndex >= window.shuffledJokes.length) {
                showJokesComplete();
                return;
            }

            // Build jokes HTML
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

            // Update page content
            dadJokesPage.innerHTML = `
                <div class="jokes-header">
                    <h2 class="jokes-title">${category.emoji} ${category.name}</h2>
                    <div class="jokes-progress">Set ${window.currentJokeSet + 1} - Jokes ${startIndex + 1}-${endIndex} of ${window.shuffledJokes.length}</div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="jokes-container">${jokesHTML}</div>
                <div class="jokes-navigation">
                    ${window.currentJokeSet > 0 ? '<button class="prev-jokes-btn" onclick="previousJokeSet()">← Previous</button>' : ''}
                    <button class="next-jokes-btn" onclick="nextJokeSet()">Next →</button>
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
            switchToDadJokesPage();

            const dadJokesPage = document.querySelector('.dad-jokes-page');
            if (!dadJokesPage) return;

            const category = window.dadJokesCategories[window.currentJokeCategory];
            dadJokesPage.innerHTML = `
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

        // Entry point (called from home page button)
        window.showDadJokes = function() {
            window.showDadJokesHome();
        };

        console.log('✅ Dad Jokes initialized!');
    }

})();
