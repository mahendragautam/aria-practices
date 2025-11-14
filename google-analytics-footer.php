window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Configure GA4 with Measurement ID
gtag('config', 'G-3P1DLWYSN1');
// Configure Google Tag
gtag('config', 'GT-WF48RWXZ');

// Track card clicks
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.link-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            var title = this.querySelector('.card-title').textContent;
            var url = this.getAttribute('href');
            
            console.log('Card clicked:', title, url);
            
            if (typeof gtag !== 'undefined') {
                // Single consolidated event - ek matra event
                gtag('event', 'card_click', {
                    'event_category': 'engagement',
                    'event_label': title,
                    'link_url': url,
                    'card_type': this.className.split(' ').find(c => c.startsWith('card-'))
                });
            }
        });
    });
});
