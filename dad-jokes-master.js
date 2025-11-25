/**
 * Dad Jokes Master Module
 * ========================
 * Loads all dad jokes sub-modules in correct order
 *
 * USAGE:
 * Include this single file in your HTML after quiz files:
 * <script src="dad-jokes-master.js"></script>
 *
 * This will automatically load all dad jokes modules:
 * - dad-jokes-data.js - Joke data and categories
 * - dad-jokes-logic.js - Display logic, navigation, and features
 */

(function() {
    'use strict';

    console.log('😂 Loading Dad Jokes Master Module...');

    // Base path for dad jokes modules
    const basePath = 'dad-jokes-js/';

    // List of modules to load in order
    const modules = [
        'dad-jokes-data.js',
        'dad-jokes-logic.js'
    ];

    // Load modules sequentially
    function loadModule(index) {
        if (index >= modules.length) {
            console.log('✅ All dad jokes modules loaded successfully!');
            console.log(`😂 Total jokes available: ${getTotalJokesCount()}`);
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
