/**
 * SmartFamilyPicks Quiz Creator - Frontend Scripts
 *
 * @package SmartFamilyPicks_Quiz_Creator
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        initQuizzes();
    });

    /**
     * Initialize all quizzes on the page
     */
    function initQuizzes() {
        $('.sfp-quiz-form').each(function() {
            const $form = $(this);
            const $container = $form.closest('.sfp-quiz-container');

            // Submit quiz
            $form.on('submit', function(e) {
                e.preventDefault();
                submitQuiz($container);
            });

            // Reset quiz
            $container.find('.sfp-quiz-reset').on('click', function() {
                resetQuiz($container);
            });
        });
    }

    /**
     * Submit quiz
     */
    function submitQuiz($container) {
        const $form = $container.find('.sfp-quiz-form');
        const $questions = $form.find('.sfp-quiz-question');

        // Check if all questions are answered
        let allAnswered = true;
        $questions.each(function() {
            if ($(this).find('input[type="radio"]:checked').length === 0) {
                allAnswered = false;
                return false;
            }
        });

        if (!allAnswered) {
            alert(sfpQuiz.strings.allRequired);
            return;
        }

        // Add loading state
        $container.addClass('sfp-quiz-loading');

        // Calculate results
        let correctCount = 0;
        const totalQuestions = $questions.length;

        $questions.each(function() {
            const $question = $(this);
            const correctAnswer = parseInt($question.data('correct-answer'));
            const $selectedAnswer = $question.find('input[type="radio"]:checked');
            const selectedValue = parseInt($selectedAnswer.val());

            // Mark correct/incorrect
            const $selectedOption = $selectedAnswer.closest('.sfp-answer-option');

            if (selectedValue === correctAnswer) {
                correctCount++;
                $selectedOption.addClass('sfp-correct');

                // Show correct feedback
                $question.find('.sfp-feedback-correct').show();
            } else {
                $selectedOption.addClass('sfp-incorrect');

                // Highlight the correct answer
                $question.find('.sfp-answer-option').each(function(index) {
                    if (index === correctAnswer) {
                        $(this).addClass('sfp-correct');
                    }
                });

                // Show incorrect feedback
                $question.find('.sfp-feedback-incorrect').show();
            }

            // Show feedback
            $question.find('.sfp-question-feedback').show();
        });

        // Calculate score percentage
        const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
        const passPercentage = parseInt($container.data('pass-percentage')) || 70;
        const passed = scorePercentage >= passPercentage;

        // Show results
        const $results = $container.find('.sfp-quiz-results');
        $results.find('.sfp-score-value').text(correctCount + ' / ' + totalQuestions + ' (' + scorePercentage + '%)');

        if (passed) {
            $results.find('.sfp-result-message').text(sfpQuiz.strings.passed);
        } else {
            $results.find('.sfp-result-message').text(sfpQuiz.strings.failed);
        }

        $results.show();

        // Update UI
        $container.addClass('sfp-quiz-completed');
        $form.find('.sfp-quiz-submit').hide();
        $form.find('.sfp-quiz-reset').show();

        // Remove loading state
        $container.removeClass('sfp-quiz-loading');

        // Scroll to results
        $('html, body').animate({
            scrollTop: $results.offset().top - 100
        }, 500);
    }

    /**
     * Reset quiz
     */
    function resetQuiz($container) {
        const $form = $container.find('.sfp-quiz-form');

        // Reset form
        $form[0].reset();

        // Remove all result classes
        $form.find('.sfp-answer-option').removeClass('sfp-correct sfp-incorrect');
        $form.find('.sfp-question-feedback').hide();
        $form.find('.sfp-feedback-correct, .sfp-feedback-incorrect').hide();

        // Hide results
        $container.find('.sfp-quiz-results').hide();

        // Update UI
        $container.removeClass('sfp-quiz-completed');
        $form.find('.sfp-quiz-submit').show();
        $form.find('.sfp-quiz-reset').hide();

        // Scroll to top of quiz
        $('html, body').animate({
            scrollTop: $container.offset().top - 100
        }, 500);
    }

})(jQuery);
