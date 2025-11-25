/**
 * Riddles Master Module
 * ======================
 * Loads ALL riddles files in correct order:
 * - 20 chapter files (riddles-chapters/)
 * - 9 logic modules (riddles-js/)
 *
 * USAGE:
 * Include this single file in your HTML after quiz files:
 * <script src="riddles-master.js"></script>
 *
 * This will automatically load:
 *
 * PART 1: Chapter Data Files (20 files)
 * - Chapter-1-Trick-Questions.js
 * - Chapter 2 - Puzzle Stories.js
 * - Chapter 3 - Number Riddles.js
 * - Chapter 4 - Classic Riddles.js
 * - Chapter 5 - Brain Teasers.js
 * - Chapter 6 - Funny Riddles.js
 * - Chapter 7 - Mystery Riddles.js
 * - Chapter 8 - Everyday Objects.js
 * - Chapter 9 - Lateral Thinking.js
 * - Chapter 10 - Wordplay.js
 * - Chapter 11 - Visual Riddles.js
 * - Chapter 12 - Pattern Recognition.js
 * - Chapter 13 - Short & Quick Riddles.js
 * - Chapter 14 - Long Story Riddles.js
 * - Chapter 15 - Kids Riddles.js
 * - Chapter 16 - Hardest Riddles.js
 * - Chapter 17 - Mixed Bag.js
 * - Chapter 18 - Animal Riddles.js
 * - Chapter 19 - Paradox Riddles.js
 * - Chapter 20 - Deduction Riddles.js
 *
 * PART 2: Logic Modules (9 files)
 * - riddles-state.js - State variables & configuration
 * - riddles-timer.js - Timer functionality
 * - riddles-storage.js - LocalStorage management
 * - riddles-navigation.js - Screen navigation
 * - riddles-display.js - UI rendering
 * - riddles-data.js - Data loader (reads chapter data)
 * - riddles-logic.js - Game logic
 * - riddles-results.js - Results display
 * - riddles-animations.js - Animation effects
 *
 * TOTAL: 29 files loaded automatically
 */

(function() {
    'use strict';

    console.log('🎭 Loading Riddles Master Module...');

    // Part 1: Chapter data files (load first!)
    const chapterFiles = [
        'riddles-chapters/Chapter-1-Trick-Questions.js',
        'riddles-chapters/Chapter 2 - Puzzle Stories.js',
        'riddles-chapters/Chapter 3 - Number Riddles.js',
        'riddles-chapters/Chapter 4 - Classic Riddles.js',
        'riddles-chapters/Chapter 5 - Brain Teasers.js',
        'riddles-chapters/Chapter 6 - Funny Riddles.js',
        'riddles-chapters/Chapter 7 - Mystery Riddles.js',
        'riddles-chapters/Chapter 8 - Everyday Objects.js',
        'riddles-chapters/Chapter 9 - Lateral Thinking.js',
        'riddles-chapters/Chapter 10 - Wordplay.js',
        'riddles-chapters/Chapter 11 - Visual Riddles.js',
        'riddles-chapters/Chapter 12 - Pattern Recognition.js',
        'riddles-chapters/Chapter 13 - Short & Quick Riddles.js',
        'riddles-chapters/Chapter 14 - Long Story Riddles.js',
        'riddles-chapters/Chapter 15 - Kids Riddles.js',
        'riddles-chapters/Chapter 16 - Hardest Riddles.js',
        'riddles-chapters/Chapter 17 - Mixed Bag.js',
        'riddles-chapters/Chapter 18 - Animal Riddles.js',
        'riddles-chapters/Chapter 19 - Paradox Riddles.js',
        'riddles-chapters/Chapter 20 - Deduction Riddles.js'
    ];

    // Part 2: Logic modules (load after chapters)
    const logicModules = [
        'riddles-js/riddles-state.js',
        'riddles-js/riddles-timer.js',
        'riddles-js/riddles-storage.js',
        'riddles-js/riddles-navigation.js',
        'riddles-js/riddles-display.js',
        'riddles-js/riddles-data.js',         // Reads data from chapters
        'riddles-js/riddles-logic.js',
        'riddles-js/riddles-results.js',
        'riddles-js/riddles-animations.js'
    ];

    // Combine all files in order
    const allFiles = [...chapterFiles, ...logicModules];

    // Load files sequentially
    function loadFile(index) {
        if (index >= allFiles.length) {
            console.log('✅ All riddles files loaded successfully!');
            console.log(`📂 Loaded ${chapterFiles.length} chapter files`);
            console.log(`⚙️ Loaded ${logicModules.length} logic modules`);
            if (typeof getTotalRiddleCount === 'function') {
                console.log(`📊 Total riddles available: ${getTotalRiddleCount()}`);
            }
            return;
        }

        const script = document.createElement('script');
        script.src = allFiles[index];
        script.onload = function() {
            console.log(`✅ Loaded: ${allFiles[index]}`);
            loadFile(index + 1);
        };
        script.onerror = function() {
            console.error(`❌ Failed to load: ${allFiles[index]}`);
            loadFile(index + 1); // Continue loading other files
        };
        document.head.appendChild(script);
    }

    // Start loading from first file
    loadFile(0);
})();
