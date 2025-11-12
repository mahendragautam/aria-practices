# Simple WordPress Setup - 5 Minutes

---

## Step 1: Upload CSS

```
WordPress Dashboard
→ Code Snippets
→ WPCode
→ Add Snippet
→ Choose "CSS Snippet"

Name: Quiz CSS
Location: Site Wide

Copy entire quiz.css file and paste

→ Save Snippet
→ Activate
```

---

## Step 2: Upload JavaScript

```
WordPress Dashboard
→ Code Snippets
→ WPCode
→ Add Snippet
→ Choose "JavaScript Snippet"

Name: Quiz App
Location: Site Wide

Copy entire quiz-master-app.js file and paste

→ Save Snippet
→ Activate
```

---

## Step 3: Create Science Quiz Page

```
WordPress Dashboard
→ Pages
→ Add New

Title: Science Quiz
URL: /science-quiz
```

### Page Content (Text/Code editor mode):

```html
<div class="main-container">
    <div class="home-page active">
        <div class="chapter-selection">
            <h2 id="subjectTitle">🔬 Science 🔬</h2>
            <div class="chapter-grid" id="chapterGrid"></div>
        </div>

        <div class="level-selection">
            <h2 id="levelTitle">Select Level</h2>
            <div class="level-grid">
                <button class="level-card level-easy" onclick="startQuiz('easy')">😊 Easy</button>
                <button class="level-card level-medium" onclick="startQuiz('medium')">🤔 Medium</button>
                <button class="level-card level-hard" onclick="startQuiz('hard')">😰 Hard</button>
                <button class="level-card level-expert" onclick="startQuiz('expert')">🧠 Expert</button>
                <button class="level-card level-extreme" onclick="startQuiz('extreme')">🔥 Extreme</button>
            </div>
        </div>

        <div class="quiz-container">
            <div class="progress-container">
                <div class="progress-bar" id="progressBar"></div>
                <div class="progress-text" id="progressText"></div>
            </div>
            <div class="question-card">
                <h3 class="question-text" id="questionText"></h3>
                <div class="answer-options" id="answerOptions"></div>
                <div id="feedbackMessage" class="feedback-message"></div>
                <div class="quiz-nav-buttons">
                    <button id="nextBtn" onclick="nextQuestion()" disabled>Next ➡️</button>
                </div>
            </div>
        </div>

        <div class="result-container">
            <div class="result-card">
                <h2 id="resultTitle"></h2>
                <div id="scoreNumber" class="score-number"></div>
                <button onclick="showHomePage()">🏠 Home</button>
            </div>
        </div>
    </div>
</div>

<script>window.autoStartSubject = 'science';</script>
```

```
→ Publish
```

---

## Done! Test It

Visit: `yoursite.com/science-quiz`

Should show Science chapters!

---

## Repeat for Other Subjects

For Math Quiz:
1. Create page `/math-quiz`
2. Use same HTML above
3. Change last line: `window.autoStartSubject = 'math';`
4. Upload math-questions.js to WPCode first!

---

## Files to Download

From GitHub:
- quiz.css (1201 lines)
- quiz-master-app.js (1742 lines)

https://github.com/mahendragautam/aria-practices/tree/claude/copy-website-files-011CV2QMwSP48vNixRLWQn4B

---

## Troubleshooting

**Blank page?**
- Check CSS snippet is Active
- Check JS snippet is Active
- Check science questions (ID 204) is Active

**F12 → Console should show:**
```
🚀 Quiz app initializing...
✅ URL Router is active
🎯 SEO page detected, auto-starting subject: science
```

---

**That's it! 3 steps only!**
