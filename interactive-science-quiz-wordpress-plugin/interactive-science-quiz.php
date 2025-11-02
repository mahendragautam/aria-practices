<?php
/**
 * Plugin Name: Interactive Science Quiz
 * Plugin URI: https://example.com/interactive-science-quiz
 * Description: An interactive science quiz with 20 chapters, 5 levels each, and animated emojis
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: interactive-science-quiz
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class Interactive_Science_Quiz {

    public function __construct() {
        // Enqueue scripts and styles
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));

        // Register shortcode
        add_shortcode('science_quiz', array($this, 'render_quiz'));
    }

    public function enqueue_assets() {
        // Enqueue CSS
        wp_enqueue_style(
            'science-quiz-style',
            plugins_url('assets/css/quiz-style.css', __FILE__),
            array(),
            '1.0.0'
        );

        // Enqueue JavaScript
        wp_enqueue_script(
            'science-quiz-script',
            plugins_url('assets/js/quiz-script.js', __FILE__),
            array('jquery'),
            '1.0.0',
            true
        );

        // Localize script with questions data
        wp_localize_script(
            'science-quiz-script',
            'quizData',
            array(
                'questions' => $this->get_all_questions()
            )
        );
    }

    public function render_quiz() {
        ob_start();
        include plugin_dir_path(__FILE__) . 'templates/quiz-template.php';
        return ob_get_clean();
    }

    public function get_all_questions() {
        // Include questions data
        include plugin_dir_path(__FILE__) . 'data/questions-data.php';
        return isset($quiz_questions) ? $quiz_questions : array();
    }
}

// Initialize the plugin
new Interactive_Science_Quiz();
