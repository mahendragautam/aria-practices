<?php
/**
 * Smart Family Picks - Shortcode Integration (OPTIONAL)
 * WPCode: PHP Snippet Type
 * Auto Insert: Off (or Site Wide Footer)
 *
 * This file provides individual shortcodes for each component.
 * Use this ONLY if you want to control placement via shortcodes.
 *
 * Available Shortcodes:
 * [sfp_header] - Shows header
 * [sfp_main_content] - Shows main content with cards
 * [sfp_footer] - Shows footer
 * [sfp_full] - Shows everything (header + main + footer)
 */

// Header Shortcode
add_shortcode('sfp_header', 'sfp_header_shortcode');
function sfp_header_shortcode() {
    ob_start();
    ?>
    <header>
        <div class="logo-container">
            <div class="logo-icon">🏠</div>
            <h1>Smart Family Picks</h1>
        </div>
        <p class="tagline">Your Trusted Resource Hub</p>
    </header>
    <?php
    return ob_get_clean();
}

// Main Content Shortcode
add_shortcode('sfp_main_content', 'sfp_main_content_shortcode');
function sfp_main_content_shortcode() {
    ob_start();
    ?>
    <main>
        <div class="links-container">
            <div class="intro-text">
                <h2>Welcome to Our Community!</h2>
                <p>Explore our curated collection of resources</p>
            </div>

            <!-- Shop Link -->
            <a href="https://shop.smartfamilypicks.com"
               class="link-card card-shop"
               target="_blank"
               rel="noopener">
                <div class="card-icon">🛍️</div>
                <div class="card-content">
                    <h3 class="card-title">Daily Essentials</h3>
                    <p class="card-description">Discover curated products for your everyday needs and home</p>
                </div>
                <span class="card-arrow">→</span>
            </a>

            <!-- Quiz Link -->
            <a href="https://quiz.smartfamilypicks.com"
               class="link-card card-quiz"
               target="_blank"
               rel="noopener">
                <div class="card-icon">🧠</div>
                <div class="card-content">
                    <h3 class="card-title">Fun Quizzes</h3>
                    <p class="card-description">Test your knowledge with our interactive quiz platform</p>
                </div>
                <span class="card-arrow">→</span>
            </a>

            <!-- Health Link -->
            <a href="https://health.smartfamilypicks.com"
               class="link-card card-health"
               target="_blank"
               rel="noopener">
                <div class="card-icon">💪</div>
                <div class="card-content">
                    <h3 class="card-title">Health & Wellness</h3>
                    <p class="card-description">Quality products and courses for your health journey</p>
                </div>
                <span class="card-arrow">→</span>
            </a>

            <!-- Tools Link -->
            <a href="https://tools.smartfamilypicks.com"
               class="link-card card-tools"
               target="_blank"
               rel="noopener">
                <div class="card-icon">🔧</div>
                <div class="card-content">
                    <h3 class="card-title">Business Tools</h3>
                    <p class="card-description">Essential tools for hosting, SEO, and growing your business</p>
                </div>
                <span class="card-arrow">→</span>
            </a>
        </div>
    </main>
    <?php
    return ob_get_clean();
}

// Footer Shortcode
add_shortcode('sfp_footer', 'sfp_footer_shortcode');
function sfp_footer_shortcode() {
    ob_start();
    ?>
    <footer>
        <div class="social-links">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener" title="Facebook">📘</a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener" title="Twitter">🐦</a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener" title="Instagram">📷</a>
            <a href="mailto:contact@smartfamilypicks.com" title="Email">✉️</a>
        </div>
        <div class="footer-text">
            <p>&copy; 2025 Smart Family Picks. All rights reserved.</p>
            <p>Made with ❤️ for families everywhere</p>
        </div>
    </footer>
    <?php
    return ob_get_clean();
}

// Full Page Shortcode (All components)
add_shortcode('sfp_full', 'sfp_full_shortcode');
function sfp_full_shortcode() {
    ob_start();
    echo do_shortcode('[sfp_header]');
    echo do_shortcode('[sfp_main_content]');
    echo do_shortcode('[sfp_footer]');
    return ob_get_clean();
}
