/**
 * IMPROVED Quiz Master App - Resilient Version
 * ==============================================
 *
 * IMPROVEMENTS:
 * 1. Resilient subject loading - broken subjects don't break entire app
 * 2. Smooth emoji fadeout on back button
 * 3. Better error handling
 *
 * Replace lines 70-81 in quiz-master-app.js with this code
 */

// RESILIENT SUBJECT LOADING - Won't break if one file has error!
const subjectQuestionBank = {};

// Try to load each subject individually
// If one fails, others still work!
try { if (typeof scienceQuestions !== 'undefined') subjectQuestionBank.science = scienceQuestions; } catch(e) { console.warn('Science questions not loaded:', e); }
try { if (typeof mathQuestions !== 'undefined') subjectQuestionBank.math = mathQuestions; } catch(e) { console.warn('Math questions not loaded:', e); }
try { if (typeof historyQuestions !== 'undefined') subjectQuestionBank.history = historyQuestions; } catch(e) { console.warn('History questions not loaded:', e); }
try { if (typeof geographyQuestions !== 'undefined') subjectQuestionBank.geography = geographyQuestions; } catch(e) { console.warn('Geography questions not loaded:', e); }
try { if (typeof englishQuestions !== 'undefined') subjectQuestionBank.english = englishQuestions; } catch(e) { console.warn('English questions not loaded:', e); }
try { if (typeof healthQuestions !== 'undefined') subjectQuestionBank.health = healthQuestions; } catch(e) { console.warn('Health questions not loaded:', e); }
try { if (typeof environmentQuestions !== 'undefined') subjectQuestionBank.environment = environmentQuestions; } catch(e) { console.warn('Environment questions not loaded:', e); }
try { if (typeof businessQuestions !== 'undefined') subjectQuestionBank.business = businessQuestions; } catch(e) { console.warn('Business questions not loaded:', e); }
try { if (typeof technologyQuestions !== 'undefined') subjectQuestionBank.technology = technologyQuestions; } catch(e) { console.warn('Technology questions not loaded:', e); }
try { if (typeof parentingQuestions !== 'undefined') subjectQuestionBank.parenting = parentingQuestions; } catch(e) { console.warn('Parenting questions not loaded:', e); }

// Log loaded subjects
console.log('✅ Loaded subjects:', Object.keys(subjectQuestionBank).length + '/10');
if (Object.keys(subjectQuestionBank).length < 10) {
    console.warn('⚠️ Some subjects failed to load. Check browser console for details.');
}

/**
 * IMPROVED clearFallingEmojis - Smooth Fadeout
 * Replace the clearFallingEmojis function (around line 901)
 */
function clearFallingEmojis() {
    clearInterval(window.fallingInterval);

    // Smooth fadeout instead of instant removal
    fallingEmojis.forEach(emoji => {
        emoji.style.transition = 'opacity 0.5s ease-out';
        emoji.style.opacity = '0';
        setTimeout(() => emoji.remove(), 500); // Remove after fadeout
    });

    fallingEmojis = [];
}

/**
 * IMPROVED selectSubject - Check if subject exists before navigating
 * Replace selectSubject function (around line 123)
 */
function selectSubject(subject) {
    // CHECK IF SUBJECT IS LOADED!
    if (!subjectQuestionBank[subject]) {
        alert(`Sorry! ${subjects[subject].name} questions are not loaded yet.\n\n` +
              `Please check:\n` +
              `1. Is ${subject}-questions.js uploaded to WPCode?\n` +
              `2. Is the snippet ACTIVATED?\n` +
              `3. Check browser console (F12) for errors`);
        console.error(`❌ Subject "${subject}" not found in question bank!`);
        console.log('Available subjects:', Object.keys(subjectQuestionBank));
        return; // Don't navigate if subject not loaded
    }

    currentSubject = subject;
    quizMode = 'normal';
    returnPage = 'home';

    const subjectData = subjects[subject];
    document.getElementById('subjectTitle').innerHTML = `${subjectData.emoji} ${subjectData.name} ${subjectData.emoji}`;
    initializeChapters();
    showScreen('chapter-selection');
}

/**
 * IMPROVED getAvailableChapters - Safe chapter detection
 * Replace getAvailableChapters function (around line 311)
 */
function getAvailableChapters(subject) {
    const chapters = [];
    const subjectData = subjectQuestionBank[subject];

    if (!subjectData) {
        console.warn(`Subject "${subject}" not found in question bank`);
        return chapters; // Return empty array
    }

    // Get all chapter numbers that exist in the question bank
    for (let chapterNum in subjectData) {
        if (subjectData.hasOwnProperty(chapterNum)) {
            chapters.push(parseInt(chapterNum));
        }
    }

    // Sort chapters numerically
    chapters.sort((a, b) => a - b);
    return chapters;
}

/**
 * VISUAL INDICATOR for loaded/missing subjects
 * Add this to home page initialization
 */
function updateSubjectCardStatus() {
    Object.keys(subjects).forEach(subjectKey => {
        const card = document.querySelector(`.subject-card[onclick*="${subjectKey}"]`);
        if (card) {
            if (!subjectQuestionBank[subjectKey]) {
                // Mark as unavailable
                card.style.opacity = '0.5';
                card.style.cursor = 'not-allowed';
                card.style.filter = 'grayscale(80%)';

                // Add badge
                if (!card.querySelector('.unavailable-badge')) {
                    const badge = document.createElement('div');
                    badge.className = 'unavailable-badge';
                    badge.textContent = '🚫 Not Loaded';
                    badge.style.cssText = 'position:absolute;top:5px;right:5px;background:#ff4444;color:white;padding:2px 6px;border-radius:4px;font-size:10px;';
                    card.style.position = 'relative';
                    card.appendChild(badge);
                }
            } else {
                // Mark as available
                card.style.opacity = '1';
                card.style.cursor = 'pointer';
                card.style.filter = 'none';
            }
        }
    });
}

// Call this after page loads
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateSubjectCardStatus, 100);
});
