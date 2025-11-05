# Question Bank Code Separation Guide

## Why Separate Code?

### Benefits:
✅ **Easy Maintenance** - Each subject in its own file
✅ **Team Collaboration** - Different people work on different subjects
✅ **Clean Organization** - No giant 60KB+ file
✅ **WordPress Friendly** - Add subjects incrementally
✅ **Scalability** - Add unlimited chapters per subject
✅ **No Chapter Limit** - Add 50, 100, 500 chapters - works!

---

## File Structure

```
📁 quiz-app/
├── index.html
├── styles.css
├── 📁 js/
│   ├── app.js (Master file - app logic only)
│   └── 📁 questions/
│       ├── science-questions.js      ← Science only
│       ├── math-questions.js         ← Math only
│       ├── history-questions.js      ← History only
│       ├── geography-questions.js    ← Geography only
│       ├── english-questions.js      ← English only
│       ├── health-questions.js       ← Health only
│       ├── environment-questions.js  ← Environment only
│       ├── business-questions.js     ← Business only
│       ├── technology-questions.js   ← Technology only
│       └── parenting-questions.js    ← Parenting only
```

---

## How to Create Question Files

### Example: science-questions.js

```javascript
// Science Question Bank
const scienceQuestions = {
    1: { // Chapter 1
        easy: [
            {topic: 'Biology', emoji: '🧬', question: 'DNA stands for Deoxyribonucleic Acid.', options: ['True', 'False'], correct: 0},
            // ... more questions
        ],
        medium: [...],
        hard: [...],
        expert: [...],
        extreme: [...]
    },
    2: { // Chapter 2
        easy: [...],
        medium: [...],
        hard: [...],
        expert: [...],
        extreme: [...]
    }
    // Add unlimited chapters! 3, 4, 5, ... 50, 100, etc!
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = scienceQuestions;
}
```

### Example: math-questions.js

```javascript
// Math Question Bank
const mathQuestions = {
    1: { // Chapter 1: Basic Arithmetic
        easy: [...],
        medium: [...],
        hard: [...],
        expert: [...],
        extreme: [...]
    },
    2: { // Chapter 2: Fractions
        // ...
    }
    // Add unlimited chapters!
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = mathQuestions;
}
```

---

## Master File (app.js)

### Simplified app.js:

```javascript
// ===================================
// QUIZ APP - MASTER FILE
// ===================================

// Quiz state variables
let currentSubject = 'science';
let currentChapter = 1;
let currentLevel = 'easy';
// ... other state variables

// Subjects definition
const subjects = {
    science: { name: 'Science', emoji: '🔬' },
    math: { name: 'Math', emoji: '🔢' },
    history: { name: 'History', emoji: '📜' },
    // ... other subjects
};

// ===================================
// QUESTION BANK - LINKED FROM SEPARATE FILES
// ===================================

const subjectQuestionBank = {
    science: scienceQuestions,      // ← Loaded from science-questions.js
    math: mathQuestions,            // ← Loaded from math-questions.js
    history: historyQuestions,      // ← Loaded from history-questions.js
    geography: geographyQuestions,  // ← Loaded from geography-questions.js
    english: englishQuestions,      // ← Loaded from english-questions.js
    health: healthQuestions,        // ← Loaded from health-questions.js
    environment: environmentQuestions, // ← Loaded from environment-questions.js
    business: businessQuestions,    // ← Loaded from business-questions.js
    technology: technologyQuestions,// ← Loaded from technology-questions.js
    parenting: parentingQuestions   // ← Loaded from parenting-questions.js
};

// ... rest of your app logic (functions, etc.)
function startQuiz(level, timedMode = false) { /* ... */ }
function displayQuestion() { /* ... */ }
// ... all other functions
```

---

## Loading Files in HTML

### Method 1: Regular HTML (index.html)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Quiz App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Quiz HTML here -->

    <!-- Load question banks FIRST -->
    <script src="js/questions/science-questions.js"></script>
    <script src="js/questions/math-questions.js"></script>
    <script src="js/questions/history-questions.js"></script>
    <script src="js/questions/geography-questions.js"></script>
    <script src="js/questions/english-questions.js"></script>
    <script src="js/questions/health-questions.js"></script>
    <script src="js/questions/environment-questions.js"></script>
    <script src="js/questions/business-questions.js"></script>
    <script src="js/questions/technology-questions.js"></script>
    <script src="js/questions/parenting-questions.js"></script>

    <!-- Load master app LAST -->
    <script src="js/app.js"></script>
</body>
</html>
```

---

## WordPress Integration (WPCode)

### Approach 1: Separate Snippets

Create 11 separate WPCode snippets:

1. **Snippet 1**: Science Questions
   - Type: JavaScript
   - Location: Footer
   - Code: Contents of `science-questions.js`

2. **Snippet 2**: Math Questions
   - Type: JavaScript
   - Location: Footer
   - Code: Contents of `math-questions.js`

3. **Snippet 3**: History Questions
   - Code: Contents of `history-questions.js`

... (one snippet per subject)

10. **Snippet 11**: Master App (LOAD LAST!)
    - Type: JavaScript
    - Location: Footer
    - Code: Contents of `app.js`

**IMPORTANT**: Set priorities so question banks load before app.js!

### Approach 2: Single Page Load

If you want everything on one page:

```html
<!-- In WordPress page editor -->
<div id="quiz-app">
    <!-- Quiz HTML -->
</div>

<script src="https://yoursite.com/wp-content/uploads/quiz/science-questions.js"></script>
<script src="https://yoursite.com/wp-content/uploads/quiz/math-questions.js"></script>
<!-- ... other question files -->
<script src="https://yoursite.com/wp-content/uploads/quiz/app.js"></script>
```

---

## How to Add New Questions

### Example: Add Chapter 5 to Science

Edit `science-questions.js`:

```javascript
const scienceQuestions = {
    1: { /* existing */ },
    2: { /* existing */ },
    3: { /* existing */ },
    4: { /* existing */ },
    5: { // ← NEW CHAPTER!
        easy: [
            {topic: 'Biology', emoji: '🧬', question: 'New question here...', options: ['True', 'False'], correct: 0},
            // Add 10 easy questions
        ],
        medium: [ /* 10 medium questions */ ],
        hard: [ /* 10 hard questions */ ],
        expert: [ /* 10 expert questions */ ],
        extreme: [ /* 10 extreme questions */ ]
    }
};
```

**Result**: Chapter 5 automatically appears in UI! No other code changes needed!

---

## No Chapter Limit!

### You can add UNLIMITED chapters:

```javascript
const scienceQuestions = {
    1: { /* ... */ },
    2: { /* ... */ },
    3: { /* ... */ },
    // ...
    50: { /* ... */ },    // ✅ Works!
    100: { /* ... */ },   // ✅ Works!
    500: { /* ... */ }    // ✅ Works!
};
```

The dynamic system automatically detects and displays all chapters!

---

## Team Collaboration Example

### Person 1: Science Expert
- Works on: `science-questions.js`
- Adds chapters 1-20 with detailed Biology/Physics/Chemistry questions

### Person 2: Math Expert
- Works on: `math-questions.js`
- Adds chapters 1-15 with Arithmetic/Algebra/Geometry questions

### Person 3: History Expert
- Works on: `history-questions.js`
- Adds chapters 1-10 with Ancient/Medieval/Modern history questions

### No Conflicts! Everyone works on their own file!

---

## Migration Steps (From Single File to Separated)

### Step 1: Create Question Files
- Create `science-questions.js` with science questions only
- Create `math-questions.js` with math questions only
- ... etc.

### Step 2: Simplify Master File
- Create `app.js` with only app logic
- Remove all question bank data
- Link to external question files

### Step 3: Update HTML
- Load question files BEFORE app.js
- Test each subject

### Step 4: Deploy
- Upload all files
- Test in WordPress
- Done!

---

## Best Practices

### 1. Consistent Format
All question files should follow the same structure:
```javascript
const [subject]Questions = {
    [chapterNumber]: {
        easy: [array of 10 questions],
        medium: [array of 10 questions],
        hard: [array of 10 questions],
        expert: [array of 10 questions],
        extreme: [array of 10 questions]
    }
};
```

### 2. Question Quality
- Easy: True/False (2 options)
- Medium: 2 options
- Hard: 3 options
- Expert: 4 options
- Extreme: Text answer

### 3. Load Order
```
1. science-questions.js  ← Load first
2. math-questions.js
3. ... other questions
4. app.js               ← Load LAST
```

### 4. Version Control
- Keep each subject file in separate git commits
- Easy to track changes per subject
- Easy to revert if needed

---

## Summary

✅ **Unlimited Chapters** - Add 50, 100, 500+ chapters
✅ **Separated Files** - One file per subject
✅ **Easy Maintenance** - Update one subject at a time
✅ **Team Friendly** - Multiple people can work simultaneously
✅ **WordPress Ready** - Add as separate WPCode snippets
✅ **Automatic Display** - New chapters appear automatically
✅ **Clean Code** - No more giant files

**Yo structure use garera ramro organization huncha!** 🎉
