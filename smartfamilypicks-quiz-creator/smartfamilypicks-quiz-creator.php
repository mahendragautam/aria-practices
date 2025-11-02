<?php
/**
 * Plugin Name: SmartFamilyPicks Quiz Creator
 * Plugin URI: https://smartfamilypicks.com/quiz-creator
 * Description: A powerful quiz creation plugin that allows you to create and publish quiz posts with multiple choice questions. Display quizzes anywhere using shortcodes.
 * Version: 1.0.0
 * Author: SmartFamilyPicks
 * Author URI: https://smartfamilypicks.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: smartfamilypicks-quiz
 * Domain Path: /languages
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('SFP_QUIZ_VERSION', '1.0.0');
define('SFP_QUIZ_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('SFP_QUIZ_PLUGIN_URL', plugin_dir_url(__FILE__));
define('SFP_QUIZ_PLUGIN_BASENAME', plugin_basename(__FILE__));

/**
 * Main SmartFamilyPicks Quiz Creator Class
 */
class SmartFamilyPicks_Quiz_Creator {

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
        $this->load_dependencies();
        $this->init_hooks();
        $this->init_components();
    }

    /**
     * Load required dependencies
     */
    private function load_dependencies() {
        require_once SFP_QUIZ_PLUGIN_DIR . 'includes/class-quiz-post-type.php';
        require_once SFP_QUIZ_PLUGIN_DIR . 'includes/class-quiz-meta-boxes.php';
        require_once SFP_QUIZ_PLUGIN_DIR . 'includes/class-quiz-shortcode.php';
    }

    /**
     * Initialize WordPress hooks
     */
    private function init_hooks() {
        // Activation and deactivation hooks
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));

        // Load text domain
        add_action('init', array($this, 'load_textdomain'));
    }

    /**
     * Initialize plugin components
     */
    private function init_components() {
        // Initialize custom post type
        SFP_Quiz_Post_Type::get_instance();

        // Initialize meta boxes
        SFP_Quiz_Meta_Boxes::get_instance();

        // Initialize shortcode
        SFP_Quiz_Shortcode::get_instance();
    }

    /**
     * Load plugin text domain for translations
     */
    public function load_textdomain() {
        load_plugin_textdomain('smartfamilypicks-quiz', false, dirname(SFP_QUIZ_PLUGIN_BASENAME) . '/languages');
    }

    /**
     * Plugin activation
     */
    public function activate() {
        // Register custom post type
        SFP_Quiz_Post_Type::register_post_type();

        // Flush rewrite rules
        flush_rewrite_rules();
    }

    /**
     * Plugin deactivation
     */
    public function deactivate() {
        // Flush rewrite rules
        flush_rewrite_rules();
    }
}

/**
 * Initialize the plugin
 */
function sfp_quiz_creator_init() {
    return SmartFamilyPicks_Quiz_Creator::get_instance();
}

// Start the plugin
sfp_quiz_creator_init();
