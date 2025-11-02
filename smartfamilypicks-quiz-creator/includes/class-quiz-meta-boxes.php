<?php
/**
 * Quiz Meta Boxes
 *
 * @package SmartFamilyPicks_Quiz_Creator
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class SFP_Quiz_Meta_Boxes
 */
class SFP_Quiz_Meta_Boxes {

    /**
     * Instance of this class
     */
    private static $instance = null;

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
        add_action('add_meta_boxes', array($this, 'add_meta_boxes'));
        add_action('save_post_quiz', array($this, 'save_quiz_questions'), 10, 2);
    }

    /**
     * Add meta boxes
     */
    public function add_meta_boxes() {
        add_meta_box(
            'sfp_quiz_questions',
            __('Quiz Questions', 'smartfamilypicks-quiz'),
            array($this, 'render_questions_meta_box'),
            'quiz',
            'normal',
            'high'
        );

        add_meta_box(
            'sfp_quiz_settings',
            __('Quiz Settings', 'smartfamilypicks-quiz'),
            array($this, 'render_settings_meta_box'),
            'quiz',
            'side',
            'default'
        );
    }

    /**
     * Render quiz questions meta box
     */
    public function render_questions_meta_box($post) {
        wp_nonce_field('sfp_quiz_questions_nonce', 'sfp_quiz_questions_nonce_field');

        $questions = get_post_meta($post->ID, '_sfp_quiz_questions', true);
        if (!is_array($questions)) {
            $questions = array();
        }
        ?>
        <div id="sfp-quiz-questions-wrapper">
            <div id="sfp-quiz-questions-container">
                <?php
                if (!empty($questions)) {
                    foreach ($questions as $index => $question) {
                        $this->render_question_item($index, $question);
                    }
                }
                ?>
            </div>
            <button type="button" class="button button-secondary" id="sfp-add-question">
                <?php _e('Add Question', 'smartfamilypicks-quiz'); ?>
            </button>
        </div>

        <!-- Question Template (hidden) -->
        <script type="text/html" id="sfp-question-template">
            <?php $this->render_question_item('{{INDEX}}', array()); ?>
        </script>
        <?php
    }

    /**
     * Render individual question item
     */
    private function render_question_item($index, $question = array()) {
        $question_text = isset($question['question']) ? $question['question'] : '';
        $answers = isset($question['answers']) ? $question['answers'] : array('', '', '', '');
        $correct_answer = isset($question['correct_answer']) ? $question['correct_answer'] : 0;

        // Ensure we have at least 4 answer slots
        while (count($answers) < 4) {
            $answers[] = '';
        }
        ?>
        <div class="sfp-question-item" data-question-index="<?php echo esc_attr($index); ?>">
            <div class="sfp-question-header">
                <h4><?php printf(__('Question %s', 'smartfamilypicks-quiz'), '<span class="question-number">' . ($index + 1) . '</span>'); ?></h4>
                <button type="button" class="button-link-delete sfp-remove-question" title="<?php esc_attr_e('Remove Question', 'smartfamilypicks-quiz'); ?>">
                    <?php _e('Remove', 'smartfamilypicks-quiz'); ?>
                </button>
            </div>

            <div class="sfp-question-content">
                <p>
                    <label>
                        <strong><?php _e('Question Text:', 'smartfamilypicks-quiz'); ?></strong><br>
                        <textarea
                            name="sfp_questions[<?php echo esc_attr($index); ?>][question]"
                            class="large-text"
                            rows="3"
                            required
                        ><?php echo esc_textarea($question_text); ?></textarea>
                    </label>
                </p>

                <div class="sfp-answers-wrapper">
                    <strong><?php _e('Answer Options:', 'smartfamilypicks-quiz'); ?></strong>
                    <?php for ($i = 0; $i < 4; $i++) : ?>
                        <p class="sfp-answer-option">
                            <label>
                                <input
                                    type="radio"
                                    name="sfp_questions[<?php echo esc_attr($index); ?>][correct_answer]"
                                    value="<?php echo esc_attr($i); ?>"
                                    <?php checked($correct_answer, $i); ?>
                                    required
                                />
                                <span class="answer-label"><?php printf(__('Answer %d', 'smartfamilypicks-quiz'), $i + 1); ?></span>
                                <input
                                    type="text"
                                    name="sfp_questions[<?php echo esc_attr($index); ?>][answers][<?php echo esc_attr($i); ?>]"
                                    value="<?php echo esc_attr($answers[$i]); ?>"
                                    class="regular-text"
                                    placeholder="<?php printf(esc_attr__('Enter answer option %d', 'smartfamilypicks-quiz'), $i + 1); ?>"
                                    required
                                />
                            </label>
                        </p>
                    <?php endfor; ?>
                    <p class="description">
                        <?php _e('Select the radio button next to the correct answer.', 'smartfamilypicks-quiz'); ?>
                    </p>
                </div>
            </div>
        </div>
        <?php
    }

    /**
     * Render quiz settings meta box
     */
    public function render_settings_meta_box($post) {
        wp_nonce_field('sfp_quiz_settings_nonce', 'sfp_quiz_settings_nonce_field');

        $show_results = get_post_meta($post->ID, '_sfp_quiz_show_results', true);
        $pass_percentage = get_post_meta($post->ID, '_sfp_quiz_pass_percentage', true);
        $randomize_questions = get_post_meta($post->ID, '_sfp_quiz_randomize_questions', true);

        if (empty($pass_percentage)) {
            $pass_percentage = 70;
        }
        ?>
        <p>
            <label>
                <input
                    type="checkbox"
                    name="sfp_quiz_show_results"
                    value="1"
                    <?php checked($show_results, '1'); ?>
                />
                <?php _e('Show results immediately', 'smartfamilypicks-quiz'); ?>
            </label>
        </p>

        <p>
            <label>
                <input
                    type="checkbox"
                    name="sfp_quiz_randomize_questions"
                    value="1"
                    <?php checked($randomize_questions, '1'); ?>
                />
                <?php _e('Randomize question order', 'smartfamilypicks-quiz'); ?>
            </label>
        </p>

        <p>
            <label>
                <strong><?php _e('Pass Percentage:', 'smartfamilypicks-quiz'); ?></strong><br>
                <input
                    type="number"
                    name="sfp_quiz_pass_percentage"
                    value="<?php echo esc_attr($pass_percentage); ?>"
                    min="0"
                    max="100"
                    step="1"
                    class="small-text"
                />
                <span>%</span>
            </label>
        </p>

        <hr>

        <p class="sfp-shortcode-info">
            <strong><?php _e('Shortcode:', 'smartfamilypicks-quiz'); ?></strong><br>
            <code>[sfp_quiz id="<?php echo esc_attr($post->ID); ?>"]</code>
            <button type="button" class="button button-small sfp-copy-shortcode" data-shortcode='[sfp_quiz id="<?php echo esc_attr($post->ID); ?>"]'>
                <?php _e('Copy', 'smartfamilypicks-quiz'); ?>
            </button>
        </p>
        <?php
    }

    /**
     * Save quiz questions
     */
    public function save_quiz_questions($post_id, $post) {
        // Check nonce
        if (!isset($_POST['sfp_quiz_questions_nonce_field']) ||
            !wp_verify_nonce($_POST['sfp_quiz_questions_nonce_field'], 'sfp_quiz_questions_nonce')) {
            return;
        }

        // Check autosave
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        // Check permissions
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        // Save questions
        if (isset($_POST['sfp_questions']) && is_array($_POST['sfp_questions'])) {
            $questions = array();

            foreach ($_POST['sfp_questions'] as $question_data) {
                if (empty($question_data['question'])) {
                    continue;
                }

                $questions[] = array(
                    'question'       => sanitize_textarea_field($question_data['question']),
                    'answers'        => array_map('sanitize_text_field', $question_data['answers']),
                    'correct_answer' => absint($question_data['correct_answer']),
                );
            }

            update_post_meta($post_id, '_sfp_quiz_questions', $questions);
        } else {
            delete_post_meta($post_id, '_sfp_quiz_questions');
        }

        // Save settings
        if (isset($_POST['sfp_quiz_settings_nonce_field']) &&
            wp_verify_nonce($_POST['sfp_quiz_settings_nonce_field'], 'sfp_quiz_settings_nonce')) {

            update_post_meta($post_id, '_sfp_quiz_show_results', isset($_POST['sfp_quiz_show_results']) ? '1' : '0');
            update_post_meta($post_id, '_sfp_quiz_randomize_questions', isset($_POST['sfp_quiz_randomize_questions']) ? '1' : '0');

            if (isset($_POST['sfp_quiz_pass_percentage'])) {
                $pass_percentage = absint($_POST['sfp_quiz_pass_percentage']);
                $pass_percentage = max(0, min(100, $pass_percentage));
                update_post_meta($post_id, '_sfp_quiz_pass_percentage', $pass_percentage);
            }
        }
    }
}
