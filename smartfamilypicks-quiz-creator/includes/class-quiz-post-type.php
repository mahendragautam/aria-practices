<?php
/**
 * Quiz Custom Post Type
 *
 * @package SmartFamilyPicks_Quiz_Creator
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class SFP_Quiz_Post_Type
 */
class SFP_Quiz_Post_Type {

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
        add_action('init', array($this, 'register_post_type'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_assets'));
    }

    /**
     * Register Quiz Custom Post Type
     */
    public static function register_post_type() {
        $labels = array(
            'name'                  => _x('Quizzes', 'Post type general name', 'smartfamilypicks-quiz'),
            'singular_name'         => _x('Quiz', 'Post type singular name', 'smartfamilypicks-quiz'),
            'menu_name'             => _x('Quizzes', 'Admin Menu text', 'smartfamilypicks-quiz'),
            'name_admin_bar'        => _x('Quiz', 'Add New on Toolbar', 'smartfamilypicks-quiz'),
            'add_new'               => __('Add New', 'smartfamilypicks-quiz'),
            'add_new_item'          => __('Add New Quiz', 'smartfamilypicks-quiz'),
            'new_item'              => __('New Quiz', 'smartfamilypicks-quiz'),
            'edit_item'             => __('Edit Quiz', 'smartfamilypicks-quiz'),
            'view_item'             => __('View Quiz', 'smartfamilypicks-quiz'),
            'all_items'             => __('All Quizzes', 'smartfamilypicks-quiz'),
            'search_items'          => __('Search Quizzes', 'smartfamilypicks-quiz'),
            'parent_item_colon'     => __('Parent Quizzes:', 'smartfamilypicks-quiz'),
            'not_found'             => __('No quizzes found.', 'smartfamilypicks-quiz'),
            'not_found_in_trash'    => __('No quizzes found in Trash.', 'smartfamilypicks-quiz'),
            'featured_image'        => _x('Quiz Cover Image', 'Overrides the "Featured Image" phrase', 'smartfamilypicks-quiz'),
            'set_featured_image'    => _x('Set cover image', 'Overrides the "Set featured image" phrase', 'smartfamilypicks-quiz'),
            'remove_featured_image' => _x('Remove cover image', 'Overrides the "Remove featured image" phrase', 'smartfamilypicks-quiz'),
            'use_featured_image'    => _x('Use as cover image', 'Overrides the "Use as featured image" phrase', 'smartfamilypicks-quiz'),
            'archives'              => _x('Quiz archives', 'The post type archive label', 'smartfamilypicks-quiz'),
            'insert_into_item'      => _x('Insert into quiz', 'Overrides the "Insert into post" phrase', 'smartfamilypicks-quiz'),
            'uploaded_to_this_item' => _x('Uploaded to this quiz', 'Overrides the "Uploaded to this post" phrase', 'smartfamilypicks-quiz'),
            'filter_items_list'     => _x('Filter quizzes list', 'Screen reader text for the filter links', 'smartfamilypicks-quiz'),
            'items_list_navigation' => _x('Quizzes list navigation', 'Screen reader text for the pagination', 'smartfamilypicks-quiz'),
            'items_list'            => _x('Quizzes list', 'Screen reader text for the items list', 'smartfamilypicks-quiz'),
        );

        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => array('slug' => 'quiz'),
            'capability_type'    => 'post',
            'has_archive'        => true,
            'hierarchical'       => false,
            'menu_position'      => 20,
            'menu_icon'          => 'dashicons-clipboard',
            'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
            'show_in_rest'       => true, // Enable Gutenberg editor
        );

        register_post_type('quiz', $args);
    }

    /**
     * Enqueue admin assets
     */
    public function enqueue_admin_assets($hook) {
        global $post_type;

        // Only load on quiz post type edit screen
        if (('post.php' === $hook || 'post-new.php' === $hook) && 'quiz' === $post_type) {
            wp_enqueue_style(
                'sfp-quiz-admin-style',
                SFP_QUIZ_PLUGIN_URL . 'admin/css/admin-style.css',
                array(),
                SFP_QUIZ_VERSION
            );

            wp_enqueue_script(
                'sfp-quiz-admin-script',
                SFP_QUIZ_PLUGIN_URL . 'admin/js/admin-script.js',
                array('jquery'),
                SFP_QUIZ_VERSION,
                true
            );

            // Localize script for translations and data
            wp_localize_script(
                'sfp-quiz-admin-script',
                'sfpQuizAdmin',
                array(
                    'confirmDelete' => __('Are you sure you want to delete this question?', 'smartfamilypicks-quiz'),
                    'addQuestion'   => __('Add Question', 'smartfamilypicks-quiz'),
                )
            );
        }
    }
}
