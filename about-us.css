/**
 * About Us Page - Accordion Functionality
 * Handles collapsible sections with smooth animations
 */

// Initialize accordion functionality when DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to all section headers
    const sectionHeaders = document.querySelectorAll('.section-header');

    sectionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const content = section.querySelector('.section-content');

            if (content) {
                // Toggle active class
                this.classList.toggle('active');
                content.classList.toggle('active');
            }
        });
    });

    // Auto-open section if URL has hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        const section = document.getElementById(hash);
        if (section) {
            const header = section.querySelector('.section-header');
            const content = section.querySelector('.section-content');

            if (header && content) {
                // Open the section
                header.classList.add('active');
                content.classList.add('active');

                // Scroll to section after a small delay
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }
});

// Handle hash changes (when clicking nav links)
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);

    if (hash) {
        const section = document.getElementById(hash);
        if (section) {
            const header = section.querySelector('.section-header');
            const content = section.querySelector('.section-content');

            if (header && content && !content.classList.contains('active')) {
                // Open the section if it's not already open
                header.classList.add('active');
                content.classList.add('active');
            }
        }
    }
});
