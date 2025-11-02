<?php
/**
 * Quiz Shortcode
 *
 * @package SmartFamilyPicks_Quiz_Creator
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class SFP_Quiz_Shortcode
 */
class SFP_Quiz_Shortcode {

    /**
     * Instance of this class
     */
    private static $instance = null;

    /**
     * Flag to track if assets need to be enqueued
     */
    private static $enqueue_assets = false;

    /**
     * Get the singleton instance
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor
     */
    private function __construct() {
        add_shortcode('sfp_quiz', array($this, 'render_quiz_shortcode'));
        add_action('wp_footer', array($this, 'enqueue_frontend_assets'));
    }

    /**
     * Render quiz shortcode
     */
    public function render_quiz_shortcode($atts) {
        $atts = shortcode_atts(
            array(
                'id' => 0,
            ),
            $atts,
            'sfp_quiz'
        );

        $quiz_id = absint($atts['id']);

        if (!$quiz_id) {
            return '<p class="sfp-quiz-error">' . __('Please specify a quiz ID.', 'smartfamilypicks-quiz') . '</p>';
        }

        $quiz = get_post($quiz_id);

        if (!$quiz || $quiz->post_type !== 'quiz' || $quiz->post_status !== 'publish') {
            return '<p class="sfp-quiz-error">' . __('Quiz not found.', 'smartfamilypicks-quiz') . '</p>';
        }

        // Set flag to enqueue assets
        self::$enqueue_assets = true;

        return $this->render_quiz($quiz);
    }

    /**
     * Render quiz HTML
     */
    private function render_quiz($quiz) {
        $quiz_id = $quiz->ID;
        $questions = get_post_meta($quiz_id, '_sfp_quiz_questions', true);
        $show_results = get_post_meta($quiz_id, '_sfp_quiz_show_results', true);
        $pass_percentage = get_post_meta($quiz_id, '_sfp_quiz_pass_percentage', true);
        $randomize_questions = get_post_meta($quiz_id, '_sfp_quiz_randomize_questions', true);

        if (!is_array($questions) || empty($questions)) {
            return '<p class="sfp-quiz-error">' . __('This quiz has no questions yet.', 'smartfamilypicks-quiz') . '</p>';
        }

        // Randomize questions if enabled
        if ($randomize_questions) {
            shuffle($questions);
        }

        ob_start();
        ?>
        <div class="sfp-quiz-container" data-quiz-id="<?php echo esc_attr($quiz_id); ?>" data-show-results="<?php echo esc_attr($show_results); ?>" data-pass-percentage="<?php echo esc_attr($pass_percentage); ?>">
            <div class="sfp-quiz-header">
                <h2 class="sfp-quiz-title"><?php echo esc_html($quiz->post_title); ?></h2>
                <?php if ($quiz->post_excerpt) : ?>
                    <div class="sfp-quiz-description">
                        <?php echo wpautop(esc_html($quiz->post_excerpt)); ?>
                    </div>
                <?php endif; ?>
            </div>

            <form class="sfp-quiz-form" data-quiz-id="<?php echo esc_attr($quiz_id); ?>">
                <?php foreach ($questions as $index => $question) : ?>
                    <div class="sfp-quiz-question" data-question-index="<?php echo esc_attr($index); ?>" data-correct-answer="<?php echo esc_attr($question['correct_answer']); ?>">
                        <h3 class="sfp-question-text">
                            <span class="sfp-question-number"><?php echo ($index + 1); ?>.</span>
                            <?php echo esc_html($question['question']); ?>
                        </h3>

                        <div class="sfp-answers">
                            <?php foreach ($question['answers'] as $answer_index => $answer) : ?>
                                <label class="sfp-answer-option">
                                    <input
                                        type="radio"
                                        name="question_<?php echo esc_attr($index); ?>"
                                        value="<?php echo esc_attr($answer_index); ?>"
                                        required
                                    />
                                    <span class="sfp-answer-text"><?php echo esc_html($answer); ?></span>
                                    <span class="sfp-answer-indicator"></span>
                                </label>
                            <?php endforeach; ?>
                        </div>

                        <div class="sfp-question-feedback" style="display: none;">
                            <p class="sfp-feedback-correct" style="display: none;">
                                <span class="sfp-icon">✓</span>
                                <?php _e('Correct!', 'smartfamilypicks-quiz'); ?>
                            </p>
                            <p class="sfp-feedback-incorrect" style="display: none;">
                                <span class="sfp-icon">✗</span>
                                <?php _e('Incorrect. The correct answer is highlighted.', 'smartfamilypicks-quiz'); ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>

                <div class="sfp-quiz-actions">
                    <button type="submit" class="sfp-quiz-submit">
                        <?php _e('Submit Quiz', 'smartfamilypicks-quiz'); ?>
                    </button>
                    <button type="button" class="sfp-quiz-reset" style="display: none;">
                        <?php _e('Try Again', 'smartfamilypicks-quiz'); ?>
                    </button>
                </div>

                <div class="sfp-quiz-results" style="display: none;">
                    <div class="sfp-results-content">
                        <h3><?php _e('Quiz Results', 'smartfamilypicks-quiz'); ?></h3>
                        <p class="sfp-score">
                            <?php _e('Your Score:', 'smartfamilypicks-quiz'); ?>
                            <span class="sfp-score-value"></span>
                        </p>
                        <p class="sfp-result-message"></p>
                    </div>
                </div>
            </form>
        </div>
        <?php
        return ob_get_clean();
    }

    /**
     * Enqueue frontend assets only when shortcode is used
     */
    public function enqueue_frontend_assets() {
        if (!self::$enqueue_assets) {
            return;
        }

        wp_enqueue_style(
            'sfp-quiz-style',
            SFP_QUIZ_PLUGIN_URL . 'public/css/quiz-style.css',
            array(),
            SFP_QUIZ_VERSION
        );

        wp_enqueue_script(
            'sfp-quiz-script',
            SFP_QUIZ_PLUGIN_URL . 'public/js/quiz-script.js',
            array('jquery'),
            SFP_QUIZ_VERSION,
            true
        );

        wp_localize_script(
            'sfp-quiz-script',
            'sfpQuiz',
            array(
                'ajaxUrl'           => admin_url('admin-ajax.php'),
                'nonce'             => wp_create_nonce('sfp_quiz_nonce'),
                'strings'           => array(
                    'submitQuiz'    => __('Submit Quiz', 'smartfamilypicks-quiz'),
                    'tryAgain'      => __('Try Again', 'smartfamilypicks-quiz'),
                    'allRequired'   => __('Please answer all questions before submitting.', 'smartfamilypicks-quiz'),
                    'passed'        => __('Congratulations! You passed the quiz!', 'smartfamilypicks-quiz'),
                    'failed'        => __('You did not pass this time. Keep learning!', 'smartfamilypicks-quiz'),
                    'score'         => __('Your Score:', 'smartfamilypicks-quiz'),
                ),
            )
        );
    }
}
