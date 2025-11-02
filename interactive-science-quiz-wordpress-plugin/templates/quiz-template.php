<div id="science-quiz-app">
    <!-- Welcome Screen -->
    <div id="welcome-screen" class="screen active">
        <div class="welcome-content">
            <h1 class="quiz-title">🔬 Science Quiz Challenge 🌟</h1>
            <p class="quiz-description">Test your knowledge across Biology, Physics, Chemistry, and Astronomy!</p>
            <div class="chapters-grid">
                <!-- Chapters will be dynamically generated here -->
            </div>
        </div>
    </div>

    <!-- Level Selection Screen -->
    <div id="level-screen" class="screen">
        <div class="level-content">
            <h2 class="chapter-title"></h2>
            <p class="level-description">Choose your difficulty level</p>
            <div class="levels-grid">
                <button class="level-btn" data-level="easy">
                    <span class="level-emoji">😊</span>
                    <span class="level-name">Easy</span>
                    <span class="level-desc">True/False (10 Questions)</span>
                </button>
                <button class="level-btn" data-level="medium">
                    <span class="level-emoji">🤔</span>
                    <span class="level-name">Medium</span>
                    <span class="level-desc">2 Options (10 Questions)</span>
                </button>
                <button class="level-btn" data-level="hard">
                    <span class="level-emoji">😰</span>
                    <span class="level-name">Hard</span>
                    <span class="level-desc">3 Options (10 Questions)</span>
                </button>
                <button class="level-btn" data-level="expert">
                    <span class="level-emoji">🤯</span>
                    <span class="level-name">Expert</span>
                    <span class="level-desc">4 Options (10 Questions)</span>
                </button>
                <button class="level-btn" data-level="extreme">
                    <span class="level-emoji">💀</span>
                    <span class="level-name">Extreme</span>
                    <span class="level-desc">Text Input (10 Questions)</span>
                </button>
            </div>
            <button class="back-btn">← Back to Chapters</button>
        </div>
    </div>

    <!-- Quiz Screen -->
    <div id="quiz-screen" class="screen">
        <div class="quiz-container">
            <!-- Progress Info -->
            <div class="progress-info">
                <span class="question-counter">0/10</span>
            </div>

            <!-- Progress Bar -->
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>

            <!-- Emoji Animation Container -->
            <div class="emoji-animation-container"></div>

            <!-- Question Area -->
            <div class="question-area">
                <div class="topic-badge"></div>
                <h3 class="question-text"></h3>
            </div>

            <!-- Falling Emoji Container -->
            <div id="falling-emoji-container"></div>

            <!-- Answer Options -->
            <div class="answers-grid"></div>

            <!-- Extreme Level Input -->
            <div class="extreme-input-container" style="display: none;">
                <input type="text" id="answer-input" class="answer-input" placeholder="Type your answer here">
                <button class="show-answer-btn">Show Answer</button>
                <div class="correct-answer-display"></div>
            </div>

            <!-- Navigation -->
            <div class="quiz-navigation">
                <button class="next-btn" style="display: none;">Next Question →</button>
            </div>
        </div>
    </div>

    <!-- Results Screen -->
    <div id="results-screen" class="screen">
        <div class="results-content">
            <div class="celebration-emojis"></div>
            <h2 class="results-title">Quiz Complete!</h2>
            <div class="badge-container">
                <div class="badge"></div>
            </div>
            <div class="results-stats">
                <div class="stat-item">
                    <span class="stat-label">Score</span>
                    <span class="stat-value score-value"></span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Level</span>
                    <span class="stat-value level-value"></span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Time Taken</span>
                    <span class="stat-value time-value"></span>
                </div>
            </div>
            <div class="results-buttons">
                <button class="retake-btn">🔄 Retake Quiz</button>
                <button class="home-btn">🏠 Back to Home</button>
            </div>
        </div>
    </div>
</div>
