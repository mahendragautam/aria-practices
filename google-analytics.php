add_action('wp_footer', 'load_ga4_container', 1);
function load_ga4_container() {
    ?>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3P1DLWYSN1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3P1DLWYSN1');
    </script>
    <?php
}



add_action('wp_footer', 'quiz_site_tracking', 99);

function quiz_site_tracking() {
    ?>
    <script>
    (function() {
        'use strict';
        
        var answeredQuestions = 0;
        var trackedElements = new WeakSet();
        
        console.log('🎯 Dynamic quiz tracking initialized');
        
        function attachTopicTracking() {
            document.querySelectorAll('.subject-card, .topic-card, [data-topic]').forEach(function(card) {
                if (trackedElements.has(card)) return;
                trackedElements.add(card);
                
                card.addEventListener('click', function(e) {
                    var onclickAttr = this.getAttribute('onclick') || '';
                    var topicMatch = onclickAttr.match(/selectSubject\('([^']+)'\)/);
                    var topicName = topicMatch ? topicMatch[1] : null;
                    
                    if (!topicName) {
                        topicName = this.querySelector('h3, h2, .topic-title, .subject-title')?.textContent || 
                                   this.getAttribute('data-topic') || 
                                   this.getAttribute('data-subject') ||
                                   'Unknown Topic';
                    }
                    
                    topicName = topicName.charAt(0).toUpperCase() + topicName.slice(1);
                    
                    console.log('🎯 Topic selected:', topicName);
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'topic_select', {
                            'event_category': 'quiz_navigation',
                            'event_label': topicName.trim(),
                            'site': 'quiz.smartfamilypicks.com',
                            'page': 'homepage'
                        });
                    }
                });
            });
        }
        
        function attachChapterTracking() {
            document.querySelectorAll('.chapter-card, .chapter-item, [data-chapter]').forEach(function(chapter) {
                if (trackedElements.has(chapter)) return;
                trackedElements.add(chapter);
                
                chapter.addEventListener('click', function(e) {
                    var chapterName = this.textContent.trim() || 'Unknown Chapter';
                    var topicName = document.querySelector('h1, .subject-title, #subjectTitle, .topic-name')?.textContent || 'Unknown Topic';
                    
                    console.log('📚 Chapter selected:', chapterName, '| Topic:', topicName.trim());
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'chapter_select', {
                            'event_category': 'quiz_navigation',
                            'event_label': chapterName,
                            'topic': topicName.trim(),
                            'site': 'quiz.smartfamilypicks.com'
                        });
                    }
                });
            });
        }
        
        function attachLevelTracking() {
            document.querySelectorAll('.level-card, .difficulty-btn, [data-level]').forEach(function(card) {
                if (trackedElements.has(card)) return;
                trackedElements.add(card);
                
                card.addEventListener('click', function(e) {
                    var levelClass = this.className;
                    var level = 'unknown';
                    
                    if (levelClass.includes('level-easy')) level = 'easy';
                    else if (levelClass.includes('level-medium')) level = 'medium';
                    else if (levelClass.includes('level-hard')) level = 'hard';
                    else if (levelClass.includes('level-expert')) level = 'expert';
                    else if (levelClass.includes('level-extreme')) level = 'extreme';
                    else if (levelClass.includes('level-mixed')) level = 'mixed';
                    else level = this.getAttribute('data-level') || 'unknown';
                    
                    var chapterName = document.querySelector('.chapter-name, h1, h2, #levelTitle')?.textContent || 'Unknown';
                    var isTimerMode = this.textContent.includes('⏱') || this.textContent.includes('min');
                    var mode = isTimerMode ? 'Quick Pick' : 'Normal Level';
                    
                    console.log('⭐ Level selected:', level.toUpperCase(), '| Mode:', mode);
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'level_select', {
                            'event_category': 'quiz_navigation',
                            'event_label': level,
                            'chapter': chapterName.trim(),
                            'difficulty': level,
                            'mode': mode,
                            'site': 'quiz.smartfamilypicks.com'
                        });
                    }
                    
                    window.quizStartTime = Date.now();
                });
            });
        }
        
        function attachAnswerTracking() {
            var selectors = [
                '.answer-option',
                '.quiz-option', 
                '[class*="option"]',
                '[onclick*="answer"]',
                '[onclick*="select"]',
                'input[type="radio"][name*="question"]',
                '.choice',
                '.answer-choice'
            ];
            
            document.querySelectorAll(selectors.join(', ')).forEach(function(option) {
                if (trackedElements.has(option)) return;
                trackedElements.add(option);
                
                option.addEventListener('click', function(e) {
                    var questionContainer = this.closest('[class*="question"]') || 
                                          this.closest('[id*="question"]') ||
                                          this.closest('div');
                    
                    var questionNumber = questionContainer?.getAttribute('data-question-number') || 
                                       questionContainer?.id?.replace(/\D/g, '') ||
                                       (answeredQuestions + 1);
                    
                    var questionType = questionContainer?.getAttribute('data-type') || 'mcq';
                    
                    answeredQuestions++;
                    
                    console.log('✅ Question answered:', questionNumber);
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'question_answered', {
                            'event_category': 'quiz_progress',
                            'event_label': 'Question ' + questionNumber,
                            'question_number': questionNumber,
                            'question_type': questionType,
                            'site': 'quiz.smartfamilypicks.com'
                        });
                    }
                });
            });
        }
        
        function attachSubmitTracking() {
            var submitSelectors = [
                '.submit-quiz',
                '#submitQuiz',
                '.finish-quiz',
                '.next-button',
                '.check-answer',
                'button[class*="submit"]',
                'button[onclick*="submit"]',
                'button[onclick*="next"]'
            ];
            
            document.querySelectorAll(submitSelectors.join(', ')).forEach(function(btn) {
                if (trackedElements.has(btn)) return;
                trackedElements.add(btn);
                
                btn.addEventListener('click', function(e) {
                    var quizTitle = document.querySelector('.quiz-title, h1, h2')?.textContent || 'Quiz';
                    var totalQuestions = document.querySelectorAll('[class*="question"]').length || 'unknown';
                    var timeSpent = window.quizStartTime ? Math.round((Date.now() - window.quizStartTime) / 1000) : 0;
                    
                    console.log('📝 Quiz action:', this.textContent.trim());
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'quiz_submit', {
                            'event_category': 'quiz_engagement',
                            'event_label': quizTitle.trim(),
                            'questions_answered': answeredQuestions,
                            'total_questions': totalQuestions,
                            'time_spent_seconds': timeSpent,
                            'site': 'quiz.smartfamilypicks.com'
                        });
                    }
                });
            });
        }
        
        function attachResultsTracking() {
            var resultsSelectors = [
                '.results-page',
                '.quiz-results',
                '#resultsPage',
                '.result-container',
                '[class*="result"]',
                '.score-display'
            ];
            
            var resultsElement = document.querySelector(resultsSelectors.join(', '));
            
            if (resultsElement && resultsElement.offsetParent !== null && !trackedElements.has(resultsElement)) {
                trackedElements.add(resultsElement);
                
                setTimeout(function() {
                    var score = document.querySelector('.score-display, .quiz-score, .result-score, [data-score], [class*="score"]')?.textContent || 'unknown';
                    var percentage = document.querySelector('.percentage, .score-percent')?.textContent || score;
                    var quizTitle = document.querySelector('.quiz-title, h1, h2, .result-title')?.textContent || 'Quiz';
                    
                    quizTitle = quizTitle.replace('Quiz Complete!', '').replace(/[🎉🏆]/g, '').trim() || 'Quiz';
                    
                    console.log('🏆 Results viewed - Score:', score.trim());
                    
                    if (typeof gtag !== 'undefined' && score.trim() !== '') {
                        gtag('event', 'quiz_complete', {
                            'event_category': 'quiz_completion',
                            'event_label': quizTitle,
                            'score': score.trim(),
                            'percentage': percentage.trim(),
                            'site': 'quiz.smartfamilypicks.com'
                        });
                        
                        var percentNum = parseInt(percentage);
                        if (!isNaN(percentNum) && percentNum >= 60) {
                            gtag('event', 'conversion', {
                                'event_category': 'quiz_success',
                                'event_label': 'Passed - ' + quizTitle,
                                'value': percentNum
                            });
                            console.log('🎯 Conversion tracked - Score ≥ 60%');
                        }
                    }
                }, 800);
            }
        }
        
        function attachRetakeTracking() {
            var retakeSelectors = [
                '.retake-quiz',
                '.try-again',
                '#retakeQuiz',
                'button[class*="retake"]',
                'button[class*="restart"]',
                '.restart-button'
            ];
            
            document.querySelectorAll(retakeSelectors.join(', ')).forEach(function(btn) {
                if (trackedElements.has(btn)) return;
                trackedElements.add(btn);
                
                btn.addEventListener('click', function(e) {
                    var quizTitle = document.querySelector('.quiz-title, h1, h2')?.textContent || 'Quiz';
                    
                    console.log('🔄 Retake quiz');
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'quiz_retake', {
                            'event_category': 'quiz_engagement',
                            'event_label': quizTitle.trim(),
                            'site': 'quiz.smartfamilypicks.com'
                        });
                    }
                    
                    answeredQuestions = 0;
                });
            });
        }
        
        function attachShareTracking() {
            document.querySelectorAll('.share-results, .share-btn, [data-share], [class*="share"]').forEach(function(btn) {
                if (trackedElements.has(btn)) return;
                trackedElements.add(btn);
                
                btn.addEventListener('click', function(e) {
                    var platform = this.getAttribute('data-share') || 
                                  this.className.match(/share-(\w+)/)?.[1] ||
                                  this.textContent.toLowerCase().match(/(facebook|twitter|whatsapp|linkedin)/)?.[0] ||
                                  'unknown';
                    var score = document.querySelector('.quiz-score, .score-display')?.textContent || 'unknown';
                    
                    console.log('📤 Share results:', platform);
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'share_results', {
                            'event_category': 'social_engagement',
                            'event_label': platform.trim(),
                            'score': score,
                            'site': 'quiz.smartfamilypicks.com'
                        });
                    }
                });
            });
        }
        
        function initializeTracking() {
            attachTopicTracking();
            attachChapterTracking();
            attachLevelTracking();
            attachAnswerTracking();
            attachSubmitTracking();
            attachResultsTracking();
            attachRetakeTracking();
            attachShareTracking();
        }
        
        var observer = new MutationObserver(function(mutations) {
            initializeTracking();
        });
        
        if (document.body) {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeTracking);
        } else {
            initializeTracking();
        }
        
        setInterval(initializeTracking, 2000);
        
    })();
    </script>
    <?php
}
