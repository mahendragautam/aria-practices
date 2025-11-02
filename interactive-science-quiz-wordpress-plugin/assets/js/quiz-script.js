(function($) {
    'use strict';

    // Quiz state
    let currentChapter = null;
    let currentLevel = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let startTime = null;
    let fallingEmojiInterval = null;
    let userAnswers = [];

    // Initialize quiz
    function initQuiz() {
        renderChapters();
        setupEventListeners();
    }

    // Render chapters on welcome screen
    function renderChapters() {
        const chaptersGrid = $('.chapters-grid');
        chaptersGrid.empty();

        if (typeof quizData === 'undefined' || !quizData.questions) {
            chaptersGrid.html('<p>No quiz data available</p>');
            return;
        }

        // Create chapter buttons
        Object.keys(quizData.questions).forEach((chapterKey, index) => {
            const chapter = quizData.questions[chapterKey];
            const chapterBtn = $('<button>')
                .addClass('chapter-card')
                .attr('data-chapter', chapterKey)
                .css('background-color', chapter.color)
                .html(`<div>${chapter.name}</div>`)
                .on('click', function() {
                    selectChapter(chapterKey);
                });

            chaptersGrid.append(chapterBtn);
        });
    }

    // Setup event listeners
    function setupEventListeners() {
        // Level selection
        $('.level-btn').on('click', function() {
            const level = $(this).data('level');
            startQuiz(level);
        });

        // Back to chapters
        $('.back-btn').on('click', function() {
            showScreen('welcome-screen');
        });

        // Next question
        $('.next-btn').on('click', function() {
            stopFallingEmojis();
            nextQuestion();
        });

        // Show answer button (Extreme level)
        $('.show-answer-btn').on('click', function() {
            showCorrectAnswer();
        });

        // Answer input (Extreme level)
        $('#answer-input').on('keypress', function(e) {
            if (e.which === 13) {
                checkExtremeAnswer();
            }
        });

        // Results buttons
        $('.retake-btn').on('click', function() {
            retakeQuiz();
        });

        $('.home-btn').on('click', function() {
            showScreen('welcome-screen');
        });
    }

    // Select chapter
    function selectChapter(chapterKey) {
        currentChapter = chapterKey;
        const chapter = quizData.questions[chapterKey];
        $('.chapter-title').text(chapter.name);
        showScreen('level-screen');
    }

    // Start quiz
    function startQuiz(level) {
        currentLevel = level;
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        startTime = Date.now();

        // Get questions for selected chapter and level
        const chapter = quizData.questions[currentChapter];
        currentQuestions = [...chapter.levels[level]];

        // Shuffle questions
        shuffleArray(currentQuestions);

        showScreen('quiz-screen');
        displayQuestion();
    }

    // Shuffle array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Display question
    function displayQuestion() {
        const question = currentQuestions[currentQuestionIndex];

        // Update progress
        updateProgress();

        // Display topic
        $('.topic-badge').text(question.topic);

        // Display question text
        $('.question-text').text(question.question);

        // Display animated emojis
        displayAnimatedEmojis(question.emoji);

        // Clear previous answers
        $('.answers-grid').empty();
        $('.extreme-input-container').hide();
        $('.next-btn').hide();
        $('.feedback-text').remove();

        // Display answers based on level
        if (currentLevel === 'extreme') {
            displayExtremeInput();
        } else {
            displayAnswerOptions(question);
        }
    }

    // Display animated emojis
    function displayAnimatedEmojis(emojiString) {
        const emojiContainer = $('.emoji-animation-container');
        emojiContainer.empty();

        const emojis = emojiString.split(/\s+/).filter(e => e.length > 0);
        emojis.forEach(emoji => {
            const emojiSpan = $('<span>')
                .addClass('animated-emoji')
                .text(emoji);
            emojiContainer.append(emojiSpan);
        });
    }

    // Display answer options
    function displayAnswerOptions(question) {
        const answersGrid = $('.answers-grid');

        question.options.forEach((option, index) => {
            const answerBtn = $('<button>')
                .addClass('answer-btn')
                .text(option)
                .on('click', function() {
                    selectAnswer(index);
                });
            answersGrid.append(answerBtn);
        });
    }

    // Display extreme input
    function displayExtremeInput() {
        $('.extreme-input-container').show();
        $('#answer-input').val('');
        $('.correct-answer-display').hide();
    }

    // Select answer
    function selectAnswer(selectedIndex) {
        const question = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;

        // Disable all buttons
        $('.answer-btn').addClass('disabled').off('click');

        // Mark selected answer
        $('.answer-btn').eq(selectedIndex).addClass(isCorrect ? 'correct' : 'wrong');

        // Mark correct answer if wrong selection
        if (!isCorrect) {
            $('.answer-btn').eq(question.correct).addClass('correct');
        }

        // Update score
        if (isCorrect) {
            score++;
        }

        // Store user answer
        userAnswers.push({
            questionIndex: currentQuestionIndex,
            selectedIndex: selectedIndex,
            isCorrect: isCorrect
        });

        // Show feedback
        showFeedback(isCorrect);

        // Start falling emojis
        startFallingEmojis(isCorrect, question.emoji);

        // Show next button
        $('.next-btn').show();
    }

    // Check extreme answer
    function checkExtremeAnswer() {
        const userAnswer = $('#answer-input').val().trim().toLowerCase();
        const question = currentQuestions[currentQuestionIndex];
        const correctAnswer = question.answer.toLowerCase();

        // Simple answer checking (can be improved)
        const isCorrect = userAnswer === correctAnswer ||
                         userAnswer.includes(correctAnswer) ||
                         correctAnswer.includes(userAnswer);

        if (isCorrect) {
            score++;
        }

        userAnswers.push({
            questionIndex: currentQuestionIndex,
            userAnswer: userAnswer,
            isCorrect: isCorrect
        });

        showFeedback(isCorrect);
        startFallingEmojis(isCorrect, question.emoji);
        $('.next-btn').show();
        $('#answer-input').prop('disabled', true);
    }

    // Show correct answer (Extreme level)
    function showCorrectAnswer() {
        const question = currentQuestions[currentQuestionIndex];
        $('.correct-answer-display')
            .text(`Correct Answer: ${question.answer}`)
            .show();
    }

    // Show feedback
    function showFeedback(isCorrect) {
        const feedbackMessages = {
            correct: [
                '🎉 Excellent!',
                '✨ Perfect!',
                '🌟 Amazing!',
                '💯 Outstanding!',
                '🎊 Brilliant!',
                '👏 Well done!',
                '🏆 Fantastic!',
                '⭐ Superb!'
            ],
            wrong: [
                '❌ Try next',
                '🔄 Keep trying',
                '💪 Don\'t give up',
                '📚 Keep learning',
                '🎯 Almost there',
                '🔍 Review this topic',
                '📖 Study more'
            ]
        };

        const messages = isCorrect ? feedbackMessages.correct : feedbackMessages.wrong;
        const message = messages[Math.floor(Math.random() * messages.length)];

        const feedbackText = $('<div>')
            .addClass('feedback-text')
            .addClass(isCorrect ? 'correct' : 'wrong')
            .text(message);

        $('.quiz-navigation').before(feedbackText);
    }

    // Start falling emojis
    function startFallingEmojis(isCorrect, questionEmoji) {
        // Check if mobile device
        if (window.innerWidth <= 1024) {
            return; // Don't show falling emojis on mobile/tablet
        }

        const container = $('#falling-emoji-container');
        container.empty();

        // Get emojis to use
        let emojisToUse = questionEmoji.split(/\s+/).filter(e => e.length > 0);

        // Add result-based emojis
        if (isCorrect) {
            emojisToUse.push('✅', '🎉', '⭐', '💯', '🏆');
        } else {
            emojisToUse.push('❌', '💭', '🤔', '📚');
        }

        // Create falling emojis
        fallingEmojiInterval = setInterval(() => {
            const emoji = emojisToUse[Math.floor(Math.random() * emojisToUse.length)];
            const startX = Math.random() * 150; // Within the 200px container
            const duration = 3 + Math.random() * 3; // 3-6 seconds

            const emojiElement = $('<div>')
                .addClass('falling-emoji')
                .text(emoji)
                .css({
                    left: startX + 'px',
                    top: '-50px',
                    animationDuration: duration + 's'
                });

            container.append(emojiElement);

            // Remove emoji after animation
            setTimeout(() => {
                emojiElement.remove();
            }, duration * 1000);
        }, 200); // New emoji every 200ms
    }

    // Stop falling emojis
    function stopFallingEmojis() {
        if (fallingEmojiInterval) {
            clearInterval(fallingEmojiInterval);
            fallingEmojiInterval = null;
        }
        $('#falling-emoji-container').empty();
    }

    // Update progress
    function updateProgress() {
        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        $('.progress-fill').css('width', progress + '%');
        $('.question-counter').text(`${currentQuestionIndex + 1}/10`);
    }

    // Next question
    function nextQuestion() {
        currentQuestionIndex++;

        if (currentQuestionIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }

    // Show results
    function showResults() {
        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - startTime) / 1000);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;

        // Calculate badge
        const badge = getBadge(score);

        // Update results display
        $('.score-value').text(`${score}/10`);
        $('.level-value').text(capitalizeFirstLetter(currentLevel));
        $('.time-value').text(`${minutes}m ${seconds}s`);

        // Display badge
        $('.badge').html(badge.emoji);

        // Display celebration emojis
        $('.celebration-emojis').html(badge.celebrationEmojis);

        showScreen('results-screen');
    }

    // Get badge based on score
    function getBadge(score) {
        if (score >= 8 && score <= 10) {
            return {
                text: 'Master',
                emoji: '🏆🌟',
                celebrationEmojis: '🎉🎊✨🏆⭐💯🌟🎯'
            };
        } else if (score >= 4 && score <= 7) {
            return {
                text: 'Good',
                emoji: '📚💪',
                celebrationEmojis: '👍📚💪🎯📖✏️'
            };
        } else {
            return {
                text: 'Beginner',
                emoji: '🌱📖',
                celebrationEmojis: '🌱📖🔍💭📚🎓'
            };
        }
    }

    // Retake quiz
    function retakeQuiz() {
        startQuiz(currentLevel);
    }

    // Show screen
    function showScreen(screenId) {
        $('.screen').removeClass('active');
        $('#' + screenId).addClass('active');
    }

    // Utility function
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Initialize when document is ready
    $(document).ready(function() {
        initQuiz();
    });

})(jQuery);
