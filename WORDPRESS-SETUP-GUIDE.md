# WordPress Quiz Setup Guide
## Simple 3-Step Process

---

## Step 1: Upload Files to WPCode

### Upload 3 Separate Snippets:

#### Snippet A: Quiz CSS
```
WordPress → Code Snippets → WPCode → Add Snippet
Type: CSS Snippet
Name: Quiz App - CSS
Code: [Paste entire contents of quiz.css]
Location: Site Wide
Status: Active
```
Note the Snippet ID (e.g., 201)

---

#### Snippet B: Quiz JavaScript
```
WordPress → Code Snippets → WPCode → Add Snippet
Type: JavaScript Snippet
Name: Quiz App - Main JS
Code: [Paste entire contents of quiz-master-app.js]
Location: Site Wide
Status: Active
```
Note the Snippet ID (e.g., 202)

---

#### Snippet C: Science Questions (Already Done!)
```
Snippet ID: 204
Type: JavaScript
Name: Science Questions
Status: Active ✅
```

---

## Step 2: Create WordPress Page - Science Quiz

```
WordPress → Pages → Add New

Title: Science Quiz
URL: /science-quiz

Content (switch to Code/Text editor):
```

```html
<div class="main-container">
    <div class="quiz-header">
        <h1>🎓 Science Quiz</h1>
        <a href="/">🏠 Home</a>
    </div>

    <div class="home-page active">
        <!-- Chapter Selection -->
        <div class="chapter-selection">
            <h2 id="subjectTitle">🔬 Science 🔬</h2>
            <div class="chapter-grid" id="chapterGrid"></div>
            <button class="back-btn" onclick="showHomePage()">⬅️ Back</button>
        </div>

        <!-- Level Selection -->
        <div class="level-selection">
            <h2 id="levelTitle">Select Level</h2>
            <div class="level-grid">
                <button class="level-card level-easy" onclick="startQuiz('easy')">😊 Easy</button>
                <button class="level-card level-medium" onclick="startQuiz('medium')">🤔 Medium</button>
                <button class="level-card level-hard" onclick="startQuiz('hard')">😰 Hard</button>
                <button class="level-card level-expert" onclick="startQuiz('expert')">🧠 Expert</button>
                <button class="level-card level-extreme" onclick="startQuiz('extreme')">🔥 Extreme</button>
            </div>
            <button class="back-btn" onclick="showChapterSelection()">⬅️ Back</button>
        </div>

        <!-- Quiz Screen -->
        <div class="quiz-container">
            <div class="progress-container">
                <div class="progress-bar" id="progressBar"></div>
                <div class="progress-text" id="progressText">Question 1 of 10</div>
            </div>

            <div class="question-card">
                <h3 class="question-text" id="questionText"></h3>
                <div class="answer-options" id="answerOptions"></div>

                <!-- For Extreme level text input -->
                <div id="extremeInputContainer" style="display:none;">
                    <input type="text" id="extremeInput" class="extreme-input" placeholder="Type answer...">
                    <button id="submitBtn" onclick="submitExtremeAnswer()">Submit</button>
                    <button onclick="showExtremeAnswer()">Show Answer</button>
                    <div id="extremeAnswer" style="display:none;">
                        <strong>Answer:</strong> <span id="correctAnswer"></span>
                    </div>
                </div>

                <div id="feedbackMessage" class="feedback-message"></div>

                <div class="quiz-nav-buttons">
                    <button id="prevBtn" onclick="previousQuestion()" disabled>⬅️ Prev</button>
                    <button id="nextBtn" onclick="nextQuestion()" disabled>Next ➡️</button>
                </div>
            </div>

            <div id="pauseContainer">
                <button id="pauseBtn" onclick="pauseQuiz()">⏸️ Pause</button>
            </div>
        </div>

        <!-- Results Screen -->
        <div class="result-container">
            <div class="result-card">
                <h2 id="resultTitle"></h2>
                <div id="resultEmoji" class="result-emoji"></div>
                <div class="score-display">
                    <div id="scoreNumber" class="score-number"></div>
                    <div class="score-label">out of 10</div>
                </div>
                <div class="result-stats">
                    <div class="stat-item">
                        <span class="stat-label">Time:</span>
                        <span id="timeTaken" class="stat-value"></span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Accuracy:</span>
                        <span id="accuracy" class="stat-value"></span>
                    </div>
                </div>
                <div class="result-buttons">
                    <button onclick="retryQuiz()">🔄 Retry</button>
                    <button onclick="showHomePage()">🏠 Home</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>window.autoStartSubject = 'science';</script>
```

```
Rank Math SEO:
- Focus Keyword: science quiz
- Title: Science Quiz - Test Your Knowledge | Smart Family Picks
- Description: Play 100+ science quiz questions across multiple chapters

Publish!
```

---

## Step 3: Test

Visit: `yoursite.com/science-quiz`

**Expected Result:**
- ✅ Quiz header visible
- ✅ Science chapters displayed (Chapter 1, 2, 3...)
- ✅ Click chapter → Shows levels
- ✅ Click level → Starts quiz

---

## Troubleshooting

### If blank page:
1. Check WPCode snippets are ACTIVE
2. Check browser console (F12) for errors
3. Verify snippet IDs are correct

### If chapters don't load:
1. Check science-questions.js (ID 204) is active
2. Console should show: "🎯 SEO page detected, auto-starting subject: science"
3. Check `window.autoStartSubject = 'science';` is in page

### If styling is wrong:
1. Check quiz.css snippet is active
2. Check CSS snippet location is "Site Wide"

---

## Files Needed

From GitHub branch:
- quiz.css (1201 lines)
- quiz-master-app.js (1742 lines)
- science-questions.js (already uploaded - ID 204)

Download from:
https://github.com/mahendragautam/aria-practices/tree/claude/copy-website-files-011CV2QMwSP48vNixRLWQn4B

---

## Repeat for Other Subjects

For Math Quiz:
1. Upload math-questions.js to WPCode
2. Create page `/math-quiz`
3. Use same HTML structure
4. Change: `window.autoStartSubject = 'math';`

Same for all 10 subjects!
