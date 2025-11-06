<?php
/**
 * Custom 404 Error Page Template
 *
 * This template replaces WordPress default 404 page with our beautiful quiz-themed design.
 *
 * Installation Instructions:
 * 1. Upload this file to your WordPress theme directory:
 *    /wp-content/themes/YOUR-THEME-NAME/404.php
 *
 * 2. If your theme already has a 404.php file, you can either:
 *    a) Replace it with this file (backup the original first!)
 *    b) Or merge the content below into your existing 404.php
 *
 * For child themes: Upload to /wp-content/themes/YOUR-CHILD-THEME-NAME/404.php
 */

get_header(); // Load theme header
?>

<div class="error-404-page active">
    <div class="error-404-container">
        <div class="error-404-content">
            <div class="error-404-emoji">🔍</div>
            <h1 class="error-404-title">404</h1>
            <h2 class="error-404-subtitle">Oops! Page Not Found</h2>
            <p class="error-404-description">
                The page you're looking for seems to have vanished into thin air!
                Maybe it's taking a quiz somewhere? 🤔
            </p>
            <div class="error-404-buttons">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="error-404-btn error-404-btn-primary">
                    🏠 Go Home
                </a>
                <a href="javascript:history.back()" class="error-404-btn error-404-btn-secondary">
                    ← Go Back
                </a>
            </div>
            <div class="error-404-suggestions">
                <h3>🎯 Try These Instead:</h3>
                <div class="error-404-links">
                    <a href="<?php echo esc_url(home_url('/#timer-challenges')); ?>" class="error-404-link">⏱️ Timer Challenges</a>
                    <a href="<?php echo esc_url(home_url('/#practice-mode')); ?>" class="error-404-link">🎯 Practice Mode</a>
                    <a href="<?php echo esc_url(home_url('/#home')); ?>" class="error-404-link">📚 Browse Subjects</a>
                </div>
            </div>
        </div>
        <div class="error-404-animation">
            <div class="floating-emoji">😵</div>
            <div class="floating-emoji">🤷</div>
            <div class="floating-emoji">📖</div>
            <div class="floating-emoji">🎓</div>
            <div class="floating-emoji">💭</div>
        </div>
    </div>
</div>

<?php
get_footer(); // Load theme footer
?>
