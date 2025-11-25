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
 * - Category-1-Classic-Dad-Jokes.js - Classic jokes data
 * - Category-2-Tech-Geek-Dad-Jokes.js - Tech jokes data
 * - Category-3-Parenting-Dad-Jokes.js - Parenting jokes data
 * - Category-4-Work-Office-Dad-Jokes.js - Work jokes data
 * - Category-5-Random-Mix-Dad-Jokes.js - Random mix data
 * - dad-jokes-data.js - Data loader and categories config
 * - dad-jokes-logic.js - Display logic, navigation, and features
 */

(function() {
    'use strict';

    console.log('😂 Loading Dad Jokes Master Module...');

    // Base path for dad jokes modules
    const basePath = 'dad-jokes-js/';

    // List of modules to load in order (joke data files FIRST!)
    const modules = [
        'Category-1-Classic-Dad-Jokes.js',
        'Category-2-Tech-Geek-Dad-Jokes.js',
        'Category-3-Parenting-Dad-Jokes.js',
        'Category-4-Work-Office-Dad-Jokes.js',
        'Category-5-Random-Mix-Dad-Jokes.js',
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
