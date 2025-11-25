/**
 * Dad Jokes Master Module
 * ========================
 * Loads all dad jokes sub-modules in correct order
 *
 * USAGE:
 * Include this single file in your HTML after quiz files:
 * <script src="dad-jokes-master.js"></script>
 *
 * This will automatically load all dad jokes modules:
 * - Category-1-Classic-Dad-Jokes.js - Classic jokes data
 * - Category-2-Tech-Geek-Dad-Jokes.js - Tech jokes data
 * - Category-3-Parenting-Dad-Jokes.js - Parenting jokes data
 * - Category-4-Work-Office-Dad-Jokes.js - Work jokes data
 * - Category-5-Random-Mix-Dad-Jokes.js - Random mix data
 * - dad-jokes-data.js - Data loader and categories config
 * - dad-jokes-logic.js - Display logic, navigation, and features
 */

const dadJokesCategories = {
    5: { name: 'Random Mix', emoji: '🎲', key: 'random' },         // FIRST!
    1: { name: 'Classic Dad Jokes', emoji: '😂', key: 'classic' },
    2: { name: 'Tech/Geek Dad Jokes', emoji: '💻', key: 'tech' },
    3: { name: 'Parenting Dad Jokes', emoji: '👶', key: 'parenting' },
    4: { name: 'Work/Office Dad Jokes', emoji: '💼', key: 'work' }
};

// Dad jokes question bank (will be loaded from separate category files)
const dadJokesData = {};

// Try to load each joke category individually from window.dadJokesQuestions
// (Each category file adds itself to window.dadJokesQuestions[X])
// If one fails, others still work!
try {
    if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[1]) {
        dadJokesData[1] = window.dadJokesQuestions[1];
        console.log('✅ Dad Jokes Category 1 loaded:', window.dadJokesQuestions[1].length, 'jokes');
    }
} catch(e) { console.warn('❌ Dad Jokes Category 1 not loaded:', e); }

try {
    if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[2]) {
        dadJokesData[2] = window.dadJokesQuestions[2];
        console.log('✅ Dad Jokes Category 2 loaded:', window.dadJokesQuestions[2].length, 'jokes');
    }
} catch(e) { console.warn('❌ Dad Jokes Category 2 not loaded:', e); }

try {
    if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[3]) {
        dadJokesData[3] = window.dadJokesQuestions[3];
        console.log('✅ Dad Jokes Category 3 loaded:', window.dadJokesQuestions[3].length, 'jokes');
    }
} catch(e) { console.warn('❌ Dad Jokes Category 3 not loaded:', e); }

try {
    if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[4]) {
        dadJokesData[4] = window.dadJokesQuestions[4];
        console.log('✅ Dad Jokes Category 4 loaded:', window.dadJokesQuestions[4].length, 'jokes');
    }
} catch(e) { console.warn('❌ Dad Jokes Category 4 not loaded:', e); }

try {
    if (typeof window.dadJokesQuestions !== 'undefined' && window.dadJokesQuestions[5]) {
        dadJokesData[5] = window.dadJokesQuestions[5];
        console.log('✅ Dad Jokes Category 5 (Random Mix) loaded:', window.dadJokesQuestions[5].length, 'jokes');
    }
} catch(e) { console.warn('❌ Dad Jokes Category 5 not loaded:', e); }

// Count jokes per category
function getJokeCount(category) {
    // Special handling for Random Mix (Category 5)
    if (category === 5) {
        // Count all jokes from categories 1-4
        let total = 0;
        for (let i = 1; i <= 4; i++) {
            if (dadJokesData[i]) {
                total += dadJokesData[i].length;
            }
        }
        return total;
    }

    if (!dadJokesData[category]) return 0;
    return dadJokesData[category].length;
}

// Get total jokes across all categories
function getTotalJokesCount() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        total += getJokeCount(i);
    }
    return total;
}



// Dad jokes state variables
let currentJokeCategory = 1;
let currentJokeSet = 0;
let shuffledJokes = [];
let jokesPerPage = 3;

// Show dad jokes home page with category selection
function showDadJokesHome() {
    // Hide all pages first
    document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector('.dad-jokes-page').classList.add('active');

    const totalJokes = getTotalJokesCount();

    document.querySelector('.dad-jokes-page').innerHTML = `
        <h1 class="title">😂 Dad Jokes 😂</h1>
        <p class="subtitle">Get ready to groan!</p>

        <!-- Category Selection -->
        <h2 class="section-title">📚 Select Category</h2>
        <div class="joke-category-grid" id="jokeCategoryGrid"></div>

        <button class="back-button" onclick="showHomePage()">← Back to Home</button>
    `;

    displayJokeCategories();
}

// Display all joke categories
function displayJokeCategories() {
    const grid = document.getElementById('jokeCategoryGrid');
    if (!grid) return;

    let html = '';
    const colors = [
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',  // Random Mix - bright
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',  // Classic
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',  // Tech
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',  // Parenting
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'   // Work
    ];

    // Display in specific order: Random Mix (5) first, then 1,2,3,4
    const displayOrder = [5, 1, 2, 3, 4];

    displayOrder.forEach((categoryNum, index) => {
        const category = dadJokesCategories[categoryNum];
        const count = getJokeCount(categoryNum);

        html += `
            <div class="joke-category-card" style="background: ${colors[index]}" onclick="selectJokeCategory(${categoryNum})">
                <div class="category-emoji">${category.emoji}</div>
                <div class="category-name">${category.name}</div>
                <div class="category-count">${count} jokes</div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

// Select joke category and start playing
function selectJokeCategory(categoryNum) {
    currentJokeCategory = categoryNum;
    startJokeSession();
}

// Start joke session - shuffle jokes and show first set
function startJokeSession() {
    let jokes = [];

    // Special handling for Random Mix (Category 5)
    if (currentJokeCategory === 5) {
        // Combine all jokes from categories 1-4
        console.log('🎲 Random Mix: Combining all categories...');
        for (let i = 1; i <= 4; i++) {
            if (dadJokesData[i] && dadJokesData[i].length > 0) {
                jokes = jokes.concat(dadJokesData[i]);
                console.log(`  ✅ Added ${dadJokesData[i].length} jokes from Category ${i}`);
            }
        }
        console.log(`🎲 Random Mix: Total ${jokes.length} jokes combined`);
    } else {
        // Normal category - use its own jokes
        jokes = dadJokesData[currentJokeCategory];
        console.log('Category:', currentJokeCategory);
        console.log('Jokes:', jokes);
    }

    // Debug: Check all data
    console.log('All dadJokesData:', dadJokesData);

    if (!jokes || jokes.length === 0) {
        alert('❌ No jokes available for this category!\n\nPlease make sure:\n1. All joke snippet files are added to WPCode\n2. Snippets are ACTIVE (not disabled)\n3. Snippets load BEFORE this main file');
        showDadJokesHome();
        return;
    }

    // Shuffle jokes EVERY TIME (random on each session open)
    shuffledJokes = [...jokes].sort(() => Math.random() - 0.5);
    currentJokeSet = 0;

    displayJokeSet();
}

// Display current set of 3 jokes
function displayJokeSet() {
    // Hide all pages first
    document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector('.dad-jokes-page').classList.add('active');

    const category = dadJokesCategories[currentJokeCategory];
    const startIndex = currentJokeSet * jokesPerPage;
    const endIndex = Math.min(startIndex + jokesPerPage, shuffledJokes.length);
    const jokesToShow = shuffledJokes.slice(startIndex, endIndex);

    // Check if we've shown all jokes
    if (startIndex >= shuffledJokes.length) {
        showJokesComplete();
        return;
    }

    let jokesHTML = '';
    jokesToShow.forEach((joke, index) => {
        const globalIndex = startIndex + index;
        jokesHTML += `
            <div class="joke-card">
                <div class="joke-number">Joke ${globalIndex + 1} of ${shuffledJokes.length}</div>
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

    const progress = Math.round((startIndex / shuffledJokes.length) * 100);

    document.querySelector('.dad-jokes-page').innerHTML = `
        <div class="jokes-header">
            <h2 class="jokes-title">${category.emoji} ${category.name}</h2>
            <div class="jokes-progress">Set ${currentJokeSet + 1} - Jokes ${startIndex + 1}-${endIndex} of ${shuffledJokes.length}</div>
        </div>

        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
        </div>

        <div class="jokes-container">
            ${jokesHTML}
        </div>

        <div class="jokes-navigation">
            ${currentJokeSet > 0 ? '<button class="prev-jokes-btn" onclick="previousJokeSet()">← Previous Set</button>' : ''}
            <button class="next-jokes-btn" onclick="nextJokeSet()">Next Set →</button>
        </div>

        <button class="back-button" onclick="confirmQuitJokes()">← Quit</button>
    `;
}

// Toggle joke answer visibility
function toggleJokeAnswer(index) {
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
}

// Show next set of jokes
function nextJokeSet() {
    currentJokeSet++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    displayJokeSet();
}

// Show previous set of jokes
function previousJokeSet() {
    if (currentJokeSet > 0) {
        currentJokeSet--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        displayJokeSet();
    }
}

// Show jokes complete screen
function showJokesComplete() {
    // Hide all pages first
    document.querySelectorAll('.home-page, .chapter-selection, .level-selection, .quiz-container, .result-container, .timer-challenges-page, .timer-subject-level-selection, .practice-mode-page, .riddles-page, .dad-jokes-page').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector('.dad-jokes-page').classList.add('active');

    const category = dadJokesCategories[currentJokeCategory];

    document.querySelector('.dad-jokes-page').innerHTML = `
        <div class="result-content">
            <div class="result-title">All Jokes Complete! 🎉</div>
            <div class="badge">😂</div>
            <div class="badge-text">HOPE YOU LAUGHED!</div>
            <div class="score-display">${shuffledJokes.length} jokes</div>
            <div class="result-details">
                <div><span>📚 Category:</span><span>${category.name}</span></div>
                <div><span>😄 Total Jokes:</span><span>${shuffledJokes.length}</span></div>
            </div>
            <button class="restart-button" onclick="startJokeSession()">🔄 Replay</button>
            <button class="restart-button" onclick="showDadJokesHome()">← Choose Category</button>
            <button class="restart-button" onclick="showHomePage()">🏠 Home</button>
        </div>
    `;
}

// Confirm quit jokes
function confirmQuitJokes() {
    if (confirm('Are you sure you want to quit?')) {
        showDadJokesHome();
    }
}

// Update showDadJokes function
function showDadJokes() {
    showDadJokesHome();
}
