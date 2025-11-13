/*
 * Smart Family Picks - Analytics & Click Tracking
 * WPCode: JavaScript Snippet Type
 * Location: Site Wide Footer
 */

// Click tracking for analytics
document.addEventListener('DOMContentLoaded', function() {
    // Track link card clicks
    document.querySelectorAll('.link-card').forEach(function(card) {
        card.addEventListener('click', function() {
            var title = this.querySelector('.card-title').textContent;
            var url = this.getAttribute('href');

            console.log('Card clicked:', title, url);

            // If Google Analytics is loaded, track the event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Outbound Link',
                    'event_label': title,
                    'value': url
                });
            }
        });
    });
});

// Optional: Add Google Analytics 4
// Uncomment and add your Measurement ID
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 ID
*/
