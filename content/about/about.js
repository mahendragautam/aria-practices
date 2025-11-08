/**
 * About Page - Accordion Functionality
 */

(function () {
  'use strict';

  /**
   * Initialize accordion functionality
   */
  function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function (header) {
      // Add click event listener
      header.addEventListener('click', function () {
        const section = this.parentElement;
        const isActive = section.classList.contains('active');

        // Toggle the clicked section
        if (isActive) {
          section.classList.remove('active');
          this.setAttribute('aria-expanded', 'false');
        } else {
          section.classList.add('active');
          this.setAttribute('aria-expanded', 'true');
        }
      });

      // Add keyboard support (Enter and Space)
      header.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this.click();
        }
      });
    });
  }

  /**
   * Initialize when DOM is ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordion);
  } else {
    initAccordion();
  }
})();
