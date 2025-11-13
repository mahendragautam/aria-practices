<?php
/**
 * Smart Family Picks Hub - All-in-One WPCode Snippet
 *
 * Instructions:
 * 1. Go to WordPress Admin > Code Snippets > Add Snippet (WPCode Plugin)
 * 2. Choose "PHP Snippet" type
 * 3. Copy and paste this entire code
 * 4. Set "Auto Insert" to "Shortcode"
 * 5. Save and activate
 * 6. Use shortcode [smartfamilypicks] on any page
 *
 * Alternative: Set "Auto Insert" to "Site Wide Header/Footer" if you want it on a specific page template
 */

// Register the shortcode
add_shortcode('smartfamilypicks', 'smartfamilypicks_hub_shortcode');

function smartfamilypicks_hub_shortcode() {
    ob_start();
    ?>

    <!-- Smart Family Picks Hub CSS -->
    <style>
        /* Scoped styles for Smart Family Picks Hub */
        .sfp-hub-wrapper * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .sfp-hub-wrapper {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
            background-size: 400% 400%;
            animation: sfpGradientShift 15s ease infinite;
            display: flex;
            flex-direction: column;
            color: #333;
            padding: 0;
            margin: 0 -20px; /* Offset default WordPress container padding */
        }

        @keyframes sfpGradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* Header Styles */
        .sfp-hub-wrapper .sfp-header {
            padding: 2rem 1rem;
            text-align: center;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .sfp-hub-wrapper .sfp-logo-container {
            max-width: 200px;
            margin: 0 auto 1rem;
            padding: 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
        }

        .sfp-hub-wrapper .sfp-logo-container h1 {
            color: white;
            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: 1px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            margin: 0;
        }

        .sfp-hub-wrapper .sfp-logo-icon {
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }

        .sfp-hub-wrapper .sfp-tagline {
            color: #555;
            font-size: 1.1rem;
            margin-top: 0.5rem;
            font-weight: 300;
        }

        /* Main Content */
        .sfp-hub-wrapper .sfp-main {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1rem;
        }

        .sfp-hub-wrapper .sfp-links-container {
            max-width: 600px;
            width: 100%;
        }

        .sfp-hub-wrapper .sfp-intro-text {
            text-align: center;
            color: white;
            margin-bottom: 2.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .sfp-hub-wrapper .sfp-intro-text h2 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .sfp-hub-wrapper .sfp-intro-text p {
            font-size: 1.1rem;
            opacity: 0.95;
        }

        /* Link Cards */
        .sfp-hub-wrapper .sfp-link-card {
            background: rgba(255, 255, 255, 0.98);
            margin: 1.5rem 0;
            padding: 1.5rem 2rem;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .sfp-hub-wrapper .sfp-link-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .sfp-hub-wrapper .sfp-link-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
        }

        .sfp-hub-wrapper .sfp-link-card:hover::before {
            opacity: 1;
        }

        /* Icon Styles */
        .sfp-hub-wrapper .sfp-card-icon {
            font-size: 3rem;
            min-width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
            transition: transform 0.4s ease;
        }

        .sfp-hub-wrapper .sfp-link-card:hover .sfp-card-icon {
            transform: rotate(10deg) scale(1.1);
        }

        .sfp-hub-wrapper .sfp-card-shop .sfp-card-icon {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .sfp-hub-wrapper .sfp-card-quiz .sfp-card-icon {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .sfp-hub-wrapper .sfp-card-health .sfp-card-icon {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }

        .sfp-hub-wrapper .sfp-card-tools .sfp-card-icon {
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        /* Card Content */
        .sfp-hub-wrapper .sfp-card-content {
            flex: 1;
            text-align: left;
        }

        .sfp-hub-wrapper .sfp-card-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #333;
        }

        .sfp-hub-wrapper .sfp-card-description {
            font-size: 1rem;
            color: #666;
            line-height: 1.5;
        }

        .sfp-hub-wrapper .sfp-card-arrow {
            font-size: 1.5rem;
            color: #999;
            transition: transform 0.4s ease;
        }

        .sfp-hub-wrapper .sfp-link-card:hover .sfp-card-arrow {
            transform: translateX(10px);
            color: #667eea;
        }

        /* Footer Styles */
        .sfp-hub-wrapper .sfp-footer {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 2rem 1rem;
            text-align: center;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
        }

        .sfp-hub-wrapper .sfp-social-links {
            margin-bottom: 1.5rem;
        }

        .sfp-hub-wrapper .sfp-social-links a {
            display: inline-block;
            margin: 0 1rem;
            font-size: 1.8rem;
            color: #667eea;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .sfp-hub-wrapper .sfp-social-links a:hover {
            transform: translateY(-5px) scale(1.2);
            color: #764ba2;
        }

        .sfp-hub-wrapper .sfp-footer-text {
            color: #666;
            font-size: 0.9rem;
            margin-top: 1rem;
        }

        .sfp-hub-wrapper .sfp-footer-text p {
            margin: 0.5rem 0;
        }

        .sfp-hub-wrapper .sfp-footer-text a {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
        }

        .sfp-hub-wrapper .sfp-footer-text a:hover {
            text-decoration: underline;
        }

        /* Loading Animation */
        .sfp-hub-wrapper .sfp-link-card {
            animation: sfpFadeInUp 0.6s ease forwards;
            opacity: 0;
        }

        .sfp-hub-wrapper .sfp-link-card:nth-child(1) { animation-delay: 0.1s; }
        .sfp-hub-wrapper .sfp-link-card:nth-child(2) { animation-delay: 0.2s; }
        .sfp-hub-wrapper .sfp-link-card:nth-child(3) { animation-delay: 0.3s; }
        .sfp-hub-wrapper .sfp-link-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes sfpFadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .sfp-hub-wrapper .sfp-logo-container h1 {
                font-size: 1.5rem;
            }

            .sfp-hub-wrapper .sfp-logo-icon {
                font-size: 2.5rem;
            }

            .sfp-hub-wrapper .sfp-intro-text h2 {
                font-size: 1.6rem;
            }

            .sfp-hub-wrapper .sfp-intro-text p {
                font-size: 1rem;
            }

            .sfp-hub-wrapper .sfp-link-card {
                padding: 1.2rem 1.5rem;
                flex-direction: column;
                text-align: center;
            }

            .sfp-hub-wrapper .sfp-card-icon {
                font-size: 2.5rem;
                min-width: 70px;
                height: 70px;
            }

            .sfp-hub-wrapper .sfp-card-content {
                text-align: center;
            }

            .sfp-hub-wrapper .sfp-card-title {
                font-size: 1.3rem;
            }

            .sfp-hub-wrapper .sfp-card-description {
                font-size: 0.9rem;
            }

            .sfp-hub-wrapper .sfp-card-arrow {
                display: none;
            }

            .sfp-hub-wrapper .sfp-social-links a {
                margin: 0 0.8rem;
                font-size: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .sfp-hub-wrapper .sfp-header {
                padding: 1.5rem 1rem;
            }

            .sfp-hub-wrapper .sfp-logo-container {
                max-width: 180px;
                padding: 0.8rem;
            }

            .sfp-hub-wrapper .sfp-logo-container h1 {
                font-size: 1.3rem;
            }

            .sfp-hub-wrapper .sfp-tagline {
                font-size: 0.95rem;
            }

            .sfp-hub-wrapper .sfp-intro-text h2 {
                font-size: 1.4rem;
            }

            .sfp-hub-wrapper .sfp-link-card {
                margin: 1rem 0;
                padding: 1rem;
            }

            .sfp-hub-wrapper .sfp-card-icon {
                font-size: 2rem;
                min-width: 60px;
                height: 60px;
            }

            .sfp-hub-wrapper .sfp-card-title {
                font-size: 1.1rem;
            }

            .sfp-hub-wrapper .sfp-card-description {
                font-size: 0.85rem;
            }
        }
    </style>

    <!-- Smart Family Picks Hub HTML -->
    <div class="sfp-hub-wrapper">
        <!-- Header -->
        <header class="sfp-header">
            <div class="sfp-logo-container">
                <div class="sfp-logo-icon">🏠</div>
                <h1>Smart Family Picks</h1>
            </div>
            <p class="sfp-tagline">Your Trusted Resource Hub</p>
        </header>

        <!-- Main Content -->
        <main class="sfp-main">
            <div class="sfp-links-container">
                <div class="sfp-intro-text">
                    <h2>Welcome to Our Community!</h2>
                    <p>Explore our curated collection of resources</p>
                </div>

                <!-- Shop Link -->
                <a href="https://shop.smartfamilypicks.com"
                   class="sfp-link-card sfp-card-shop"
                   target="_blank"
                   rel="noopener">
                    <div class="sfp-card-icon">🛍️</div>
                    <div class="sfp-card-content">
                        <h3 class="sfp-card-title">Daily Essentials</h3>
                        <p class="sfp-card-description">Discover curated products for your everyday needs and home</p>
                    </div>
                    <span class="sfp-card-arrow">→</span>
                </a>

                <!-- Quiz Link -->
                <a href="https://quiz.smartfamilypicks.com"
                   class="sfp-link-card sfp-card-quiz"
                   target="_blank"
                   rel="noopener">
                    <div class="sfp-card-icon">🧠</div>
                    <div class="sfp-card-content">
                        <h3 class="sfp-card-title">Fun Quizzes</h3>
                        <p class="sfp-card-description">Test your knowledge with our interactive quiz platform</p>
                    </div>
                    <span class="sfp-card-arrow">→</span>
                </a>

                <!-- Health Link -->
                <a href="https://health.smartfamilypicks.com"
                   class="sfp-link-card sfp-card-health"
                   target="_blank"
                   rel="noopener">
                    <div class="sfp-card-icon">💪</div>
                    <div class="sfp-card-content">
                        <h3 class="sfp-card-title">Health & Wellness</h3>
                        <p class="sfp-card-description">Quality products and courses for your health journey</p>
                    </div>
                    <span class="sfp-card-arrow">→</span>
                </a>

                <!-- Tools Link -->
                <a href="https://tools.smartfamilypicks.com"
                   class="sfp-link-card sfp-card-tools"
                   target="_blank"
                   rel="noopener">
                    <div class="sfp-card-icon">🔧</div>
                    <div class="sfp-card-content">
                        <h3 class="sfp-card-title">Business Tools</h3>
                        <p class="sfp-card-description">Essential tools for hosting, SEO, and growing your business</p>
                    </div>
                    <span class="sfp-card-arrow">→</span>
                </a>
            </div>
        </main>

        <!-- Footer -->
        <footer class="sfp-footer">
            <div class="sfp-social-links">
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener" title="Facebook">📘</a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener" title="Twitter">🐦</a>
                <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener" title="Instagram">📷</a>
                <a href="mailto:contact@smartfamilypicks.com" title="Email">✉️</a>
            </div>
            <div class="sfp-footer-text">
                <p>&copy; 2025 Smart Family Picks. All rights reserved.</p>
                <p>Made with ❤️ for families everywhere</p>
            </div>
        </footer>
    </div>

    <!-- Google Analytics 4 (Optional - Add your tracking ID) -->
    <script>
        // Uncomment and add your GA4 Measurement ID
        /*
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
        */

        // Click tracking for analytics (if GA is enabled)
        document.querySelectorAll('.sfp-link-card').forEach(function(card) {
            card.addEventListener('click', function() {
                var title = this.querySelector('.sfp-card-title').textContent;
                var url = this.getAttribute('href');

                // If Google Analytics is loaded, track the event
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'Outbound Link',
                        'event_label': title,
                        'value': url
                    });
                }

                console.log('Card clicked:', title, url);
            });
        });
    </script>

    <?php
    return ob_get_clean();
}
