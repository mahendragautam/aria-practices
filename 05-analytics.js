/*
 * Smart Family Picks - Analytics & Click Tracking
 * WPCode: JavaScript Snippet Type
 * Location: Site Wide Footer
 *
 * Google Analytics 4 Setup:
 * Measurement ID: G-3P1DLWYSN1
 * Google Tag ID: GT-WF48RWXZ
 */

// Initialize Google Analytics 4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Configure GA4 with Measurement ID
gtag('config', 'G-3P1DLWYSN1');

// Configure Google Tag
gtag('config', 'GT-WF48RWXZ');

// Track card clicks
document.addEventListener('DOMContentLoaded', function() {
    // Track link card clicks
    document.querySelectorAll('.link-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            var title = this.querySelector('.card-title').textContent;
            var url = this.getAttribute('href');

            console.log('Card clicked:', title, url);

            // Send click event to Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'card_click', {
                    'event_category': 'Outbound Link',
                    'event_label': title,
                    'link_url': url,
                    'link_text': title
                });

                // Also track as outbound link
                gtag('event', 'click', {
                    'event_category': 'engagement',
                    'event_label': 'Card - ' + title,
                    'value': url
                });
            }
        });
    });

    // Track individual card types
    var cardTypes = {
        'card-shop': 'Daily Essentials',
        'card-quiz': 'Fun Quizzes',
        'card-health': 'Health & Wellness',
        'card-tools': 'Business Tools'
    };

    Object.keys(cardTypes).forEach(function(className) {
        var cards = document.querySelectorAll('.' + className);
        cards.forEach(function(card) {
            card.addEventListener('click', function() {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'category_click', {
                        'event_category': 'Card Category',
                        'event_label': cardTypes[className],
                        'card_type': className
                    });
                }
            });
        });
    });
});
