/**
 * SmartFamilyPicks Quiz Creator - Admin Scripts
 *
 * @package SmartFamilyPicks_Quiz_Creator
 */

(function($) {
    'use strict';

    let questionIndex = 0;

    $(document).ready(function() {
        initQuizAdmin();
    });

    /**
     * Initialize quiz admin functionality
     */
    function initQuizAdmin() {
        // Set initial question index based on existing questions
        questionIndex = $('.sfp-question-item').length;

        // Add question button
        $('#sfp-add-question').on('click', addQuestion);

        // Remove question buttons (delegated)
        $(document).on('click', '.sfp-remove-question', removeQuestion);

        // Copy shortcode button
        $(document).on('click', '.sfp-copy-shortcode', copyShortcode);

        // Update question numbers on load
        updateQuestionNumbers();

        // Validate form before submit
        $('form#post').on('submit', validateQuizForm);
    }

    /**
     * Add a new question
     */
    function addQuestion(e) {
        e.preventDefault();

        const template = $('#sfp-question-template').html();
        const questionHtml = template.replace(/\{\{INDEX\}\}/g, questionIndex);

        $('#sfp-quiz-questions-container').append(questionHtml);

        questionIndex++;
        updateQuestionNumbers();

        // Scroll to new question
        const $newQuestion = $('.sfp-question-item').last();
        $('html, body').animate({
            scrollTop: $newQuestion.offset().top - 100
        }, 500);
    }

    /**
     * Remove a question
     */
    function removeQuestion(e) {
        e.preventDefault();

        if (!confirm(sfpQuizAdmin.confirmDelete)) {
            return;
        }

        const $questionItem = $(this).closest('.sfp-question-item');

        $questionItem.addClass('sfp-removing');

        setTimeout(function() {
            $questionItem.slideUp(300, function() {
                $(this).remove();
                updateQuestionNumbers();
                reindexQuestions();
            });
        }, 100);
    }

    /**
     * Update question numbers
     */
    function updateQuestionNumbers() {
        $('.sfp-question-item').each(function(index) {
            $(this).find('.question-number').text(index + 1);
        });
    }

    /**
     * Reindex questions after removal
     */
    function reindexQuestions() {
        $('.sfp-question-item').each(function(index) {
            $(this).attr('data-question-index', index);

            // Update field names
            $(this).find('textarea').attr('name', 'sfp_questions[' + index + '][question]');

            $(this).find('input[type="radio"]').each(function() {
                $(this).attr('name', 'sfp_questions[' + index + '][correct_answer]');
            });

            $(this).find('input[type="text"]').each(function(answerIndex) {
                $(this).attr('name', 'sfp_questions[' + index + '][answers][' + answerIndex + ']');
            });
        });

        questionIndex = $('.sfp-question-item').length;
    }

    /**
     * Copy shortcode to clipboard
     */
    function copyShortcode(e) {
        e.preventDefault();

        const shortcode = $(this).data('shortcode');
        const $button = $(this);
        const originalText = $button.text();

        // Create temporary input element
        const $temp = $('<input>');
        $('body').append($temp);
        $temp.val(shortcode).select();

        try {
            document.execCommand('copy');
            $button.text('Copied!');

            setTimeout(function() {
                $button.text(originalText);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy shortcode:', err);
        }

        $temp.remove();
    }

    /**
     * Validate quiz form before submission
     */
    function validateQuizForm(e) {
        const $questions = $('.sfp-question-item');

        if ($questions.length === 0) {
            alert('Please add at least one question to the quiz.');
            e.preventDefault();
            return false;
        }

        let isValid = true;

        $questions.each(function() {
            const $question = $(this);
            const questionText = $question.find('textarea').val().trim();

            if (!questionText) {
                alert('Please fill in all question texts.');
                isValid = false;
                return false;
            }

            // Check if correct answer is selected
            const hasCorrectAnswer = $question.find('input[type="radio"]:checked').length > 0;

            if (!hasCorrectAnswer) {
                alert('Please select a correct answer for each question.');
                isValid = false;
                return false;
            }

            // Check if all answers are filled
            let allAnswersFilled = true;
            $question.find('input[type="text"]').each(function() {
                if (!$(this).val().trim()) {
                    allAnswersFilled = false;
                    return false;
                }
            });

            if (!allAnswersFilled) {
                alert('Please fill in all answer options for each question.');
                isValid = false;
                return false;
            }
        });

        if (!isValid) {
            e.preventDefault();
            return false;
        }

        return true;
    }

})(jQuery);
