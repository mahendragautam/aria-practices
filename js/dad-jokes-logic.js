/**
 * Dad Jokes Logic Module
 * ==================
 * Handles dad joke display - 3 jokes at a time with show answer buttons
 * Updated to load from separate category files (like riddles)
 */

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
    const jokes = dadJokesData[currentJokeCategory];

    // Debug: Check if jokes loaded
    console.log('Category:', currentJokeCategory);
    console.log('Jokes:', jokes);
    console.log('All dadJokesData:', dadJokesData);

    if (!jokes || jokes.length === 0) {
        alert('❌ No jokes available for this category!\n\nPlease make sure:\n1. All joke snippet files are added to WPCode\n2. Snippets are ACTIVE (not disabled)\n3. Snippets load BEFORE this main file');
        showDadJokesHome();
        return;
    }

    // Shuffle jokes
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
    displayJokeSet();
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
