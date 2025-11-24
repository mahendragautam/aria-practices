/**
 * Riddles Master Module
 * ======================
 * Loads all riddles sub-modules in correct order
 *
 * USAGE:
 * Include this single file in your HTML after quiz files:
 * <script src="js/riddles-master.js"></script>
 *
 * This will automatically load all riddles modules:
 * - riddles-state.js - State variables & configuration
 * - riddles-timer.js - Timer functionality
 * - riddles-storage.js - LocalStorage management
 * - riddles-navigation.js - Screen navigation
 * - riddles-display.js - UI rendering
 * - riddles-logic.js - Game logic
 * - riddles-results.js - Results display
 * - riddles-animations.js - Animation effects
 */

(function() {
    'use strict';

    console.log('🎭 Loading Riddles Master Module...');

    // Base path for riddles modules
    const basePath = 'js/riddles/';

    // List of modules to load in order
    const modules = [
        'riddles-state.js',
        'riddles-timer.js',
        'riddles-storage.js',
        'riddles-navigation.js',
        'riddles-display.js',
        'riddles-logic.js',
        'riddles-results.js',
        'riddles-animations.js'
    ];

    // Load modules sequentially
    function loadModule(index) {
        if (index >= modules.length) {
            console.log('✅ All riddles modules loaded successfully!');
            console.log(`📊 Total riddles available: ${getTotalRiddleCount()}`);
            return;
        }

        const script = document.createElement('script');
        script.src = basePath + modules[index];
        script.onload = function() {
            console.log(`✅ Loaded: ${modules[index]}`);
            loadModule(index + 1);
        };
        script.onerror = function() {
            console.error(`❌ Failed to load: ${modules[index]}`);
            loadModule(index + 1); // Continue loading other modules
        };
        document.head.appendChild(script);
    }

    // Start loading from first module
    loadModule(0);
})();
