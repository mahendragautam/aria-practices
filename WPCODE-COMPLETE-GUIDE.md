# WPCode ma Kaam Garne Complete Guide 🎯

## ❌ Seedha Copy-Paste Gardaena!

`index.html` ma `<script src="file.js"></script>` xa, tara **WPCode ma file path kaam gardaina**.

---

## ✅ 3 Working Solutions

### **SOLUTION 1: All-in-One Snippet (EASIEST)** ⭐ RECOMMENDED

Sabai code **ekchoti** yeuta snippet ma!

#### Step 1: Create WPCode Snippet
1. WordPress Admin > **WPCode** > **Add Snippet**
2. Click "**Add Your Custom Code (New Snippet)**"
3. Name: `Quiz App - Complete`
4. Code Type: **JavaScript**

#### Step 2: Paste Code in This Order

```javascript
// ======================================
// PART 1: ALL QUESTION BANKS
// ======================================

// Science Questions
const scienceQuestions = {
    1: {
        easy: [
            {topic: 'Biology', emoji: '🧬💉', question: 'DNA stands for Deoxyribonucleic Acid.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'Light travels faster than sound.', options: ['True', 'False'], correct: 0},
            // ... copy ALL content from science-questions.js
        ],
        medium: [ /* ... */ ],
        hard: [],
        expert: [],
        extreme: []
    }
};

// Math Questions
const mathQuestions = {
    1: {
        easy: [
            {topic: 'Arithmetic', emoji: '➕➖', question: '2 + 2 equals 4.', options: ['True', 'False'], correct: 0},
            // ... copy ALL content from math-questions.js
        ],
        medium: [ /* ... */ ],
        hard: [],
        expert: [],
        extreme: []
    },
    2: { easy: [], medium: [], hard: [], expert: [], extreme: [] }
};

// History Questions
const historyQuestions = {
    1: {
        easy: [ /* ... copy from history-questions.js */ ],
        medium: [ /* ... */ ],
        hard: [ /* ... */ ],
        expert: [ /* ... */ ],
        extreme: [ /* ... */ ]
    }
};

// Geography Questions
const geographyQuestions = {
    1: {
        easy: [ /* ... copy from geography-questions.js */ ],
        medium: [ /* ... */ ],
        hard: [ /* ... */ ],
        expert: [ /* ... */ ],
        extreme: [ /* ... */ ]
    }
};

// English Questions
const englishQuestions = {
    1: {
        easy: [ /* ... copy from english-questions.js */ ],
        medium: [ /* ... */ ],
        hard: [ /* ... */ ],
        expert: [ /* ... */ ],
        extreme: [ /* ... */ ]
    }
};

// Health Questions
const healthQuestions = {
    1: {
        easy: [ /* ... copy from health-questions.js */ ],
        medium: [ /* ... */ ],
        hard: [ /* ... */ ],
        expert: [ /* ... */ ],
        extreme: [ /* ... */ ]
    }
};

// Environment Questions
const environmentQuestions = {
    1: {
        easy: [ /* ... copy from environment-questions.js */ ],
        medium: [ /* ... */ ],
        hard: [ /* ... */ ],
        expert: [ /* ... */ ],
        extreme: [ /* ... */ ]
    }
};

// Business Questions
const businessQuestions = {
    1: {
        easy: [ /* ... copy from business-questions.js */ ],
        medium: [ /* ... */ ],
        hard: [ /* ... */ ],
        expert: [ /* ... */ ],
        extreme: [ /* ... */ ]
    }
};

// Technology Questions
const technologyQuestions = {
    1: {
        easy: [ /* ... copy from technology-questions.js */ ],
        medium: [ /* ... */ ],
        hard: [ /* ... */ ],
        expert: [ /* ... */ ],
        extreme: [ /* ... */ ]
    }
};

// Parenting Questions
const parentingQuestions = {
    1: {
        easy: [ /* ... copy from parenting-questions.js */ ],
        medium: [ /* ... */ ],
        hard: [ /* ... */ ],
        expert: [ /* ... */ ],
        extreme: [ /* ... */ ]
    }
};

// ======================================
// PART 2: LINK ALL SUBJECTS
// ======================================
const subjectQuestionBank = {
    science: scienceQuestions,
    math: mathQuestions,
    history: historyQuestions,
    geography: geographyQuestions,
    english: englishQuestions,
    health: healthQuestions,
    environment: environmentQuestions,
    business: businessQuestions,
    technology: technologyQuestions,
    parenting: parentingQuestions
};

// ======================================
// PART 3: ALL APP FUNCTIONS
// ======================================
// ... copy REST OF script.js (all functions)
// Start from line ~60 in script.js where functions begin
// Everything after "const subjectQuestionBank = { ... };"
```

#### Step 3: Configure Snippet
- **Location**: Auto Insert > **Footer**
- **Device**: All Devices
- **Status**: **Active** ✓

#### Step 4: Save & Test
- Click **Save Snippet**
- Go to any page
- Quiz should work!

---

### **SOLUTION 2: Multiple Snippets (Clean Organization)**

Create **11 separate snippets** with priority order:

#### Snippet 1-10: Question Files

| # | Snippet Name | Priority | Code |
|---|--------------|----------|------|
| 1 | Quiz: Science Questions | **10** | `const scienceQuestions = { ... };` |
| 2 | Quiz: Math Questions | **11** | `const mathQuestions = { ... };` |
| 3 | Quiz: History Questions | **12** | `const historyQuestions = { ... };` |
| 4 | Quiz: Geography Questions | **13** | `const geographyQuestions = { ... };` |
| 5 | Quiz: English Questions | **14** | `const englishQuestions = { ... };` |
| 6 | Quiz: Health Questions | **15** | `const healthQuestions = { ... };` |
| 7 | Quiz: Environment Questions | **16** | `const environmentQuestions = { ... };` |
| 8 | Quiz: Business Questions | **17** | `const businessQuestions = { ... };` |
| 9 | Quiz: Technology Questions | **18** | `const technologyQuestions = { ... };` |
| 10 | Quiz: Parenting Questions | **19** | `const parentingQuestions = { ... };` |

**Each snippet:**
- Type: **JavaScript**
- Location: **Footer**
- Priority: **As shown above** (10-19)
- Status: **Active** ✓

#### Snippet 11: Master App (MUST BE LAST!)

- Name: `Quiz: Master App`
- Priority: **20** ← Higher number = loads last
- Code:
```javascript
const subjectQuestionBank = {
    science: scienceQuestions,
    math: mathQuestions,
    history: historyQuestions,
    geography: geographyQuestions,
    english: englishQuestions,
    health: healthQuestions,
    environment: environmentQuestions,
    business: businessQuestions,
    technology: technologyQuestions,
    parenting: parentingQuestions
};

// ... rest of script.js (all functions)
```

✅ **Benefits**:
- Easy to update individual subjects
- Clean code management
- Team collaboration friendly

---

### **SOLUTION 3: WordPress Media Upload**

Upload files and load them dynamically.

#### Step 1: Upload Files
1. Go to **Media** > **Add New**
2. Upload all 10 question files (.js)
3. Upload `script.js`
4. Copy URL of each file (right-click > Copy URL)

Example URLs:
- `/wp-content/uploads/2024/11/science-questions.js`
- `/wp-content/uploads/2024/11/math-questions.js`
- etc...

#### Step 2: Create WPCode Snippet
```javascript
// Type: JavaScript
// Location: Footer

(function() {
    const scriptFiles = [
        '/wp-content/uploads/2024/11/science-questions.js',
        '/wp-content/uploads/2024/11/math-questions.js',
        '/wp-content/uploads/2024/11/history-questions.js',
        '/wp-content/uploads/2024/11/geography-questions.js',
        '/wp-content/uploads/2024/11/english-questions.js',
        '/wp-content/uploads/2024/11/health-questions.js',
        '/wp-content/uploads/2024/11/environment-questions.js',
        '/wp-content/uploads/2024/11/business-questions.js',
        '/wp-content/uploads/2024/11/technology-questions.js',
        '/wp-content/uploads/2024/11/parenting-questions.js',
        '/wp-content/uploads/2024/11/script.js' // Master last!
    ];

    scriptFiles.forEach((src, index) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // Important: load in order!
        document.body.appendChild(script);
    });
})();
```

---

## 🎯 Which Solution to Choose?

### Choose **Solution 1** if:
- ✅ You want simplest setup
- ✅ One-time paste and forget
- ✅ Don't update questions often
- ⚠️ Cons: Large single snippet

### Choose **Solution 2** if:
- ✅ You update questions frequently
- ✅ Team collaboration
- ✅ Clean organization
- ✅ Update one subject at a time
- ⚠️ Cons: More snippets to manage

### Choose **Solution 3** if:
- ✅ You have FTP/file access
- ✅ Prefer file-based management
- ✅ Want smallest WPCode footprint
- ⚠️ Cons: Need file upload capability

---

## ✅ Testing Checklist

After setup:
- [ ] Quiz loads without errors
- [ ] All 10 subjects appear on home page
- [ ] Click each subject → chapters appear
- [ ] Click chapter → questions appear
- [ ] Answer questions → score shows
- [ ] Timer works
- [ ] Confetti appears on correct answers
- [ ] Back button works
- [ ] Restart quiz works

---

## 🐛 Common Problems & Fixes

### Problem 1: "scienceQuestions is not defined"
**Cause**: Master app loaded before question files
**Fix**: Check priority numbers (10-20) or move question code above master code

### Problem 2: No questions showing
**Cause**: Empty question arrays
**Fix**: Verify each subject has at least one chapter with questions

### Problem 3: Quiz not loading at all
**Cause**: JavaScript error in WPCode
**Fix**: Open browser console (F12) and check for errors

### Problem 4: Questions show but no emoji
**Cause**: WordPress stripping emoji
**Fix**: Add this to functions.php:
```php
remove_filter('the_content', 'convert_smilies');
remove_filter('comment_text', 'convert_smilies');
```

---

## 📝 File Reference

Your separated files on GitHub:
- **Branch**: `claude/quiz-app-separated-011CUp87H6zPkQj3xav4dsvH`
- **Files**:
  - `science-questions.js` (41 lines)
  - `math-questions.js` (48 lines)
  - `history-questions.js` (73 lines - COMPLETE!)
  - `geography-questions.js` (73 lines)
  - `english-questions.js` (73 lines)
  - `health-questions.js` (73 lines)
  - `environment-questions.js` (73 lines)
  - `business-questions.js` (73 lines)
  - `technology-questions.js` (73 lines)
  - `parenting-questions.js` (73 lines)
  - `script.js` (896 lines - Master app)

---

## 🚀 Quick Start: Copy This!

**For Solution 1 (All-in-One)**:

1. Open each file from GitHub
2. Copy content in order: science → math → history → ... → parenting
3. Then copy script.js linking code + functions
4. Paste all in one WPCode snippet
5. Activate!

**Demo structure**:
```javascript
// File 1: science-questions.js content (WITHOUT last 3 lines about module.exports)
const scienceQuestions = { ... };

// File 2: math-questions.js content (WITHOUT module.exports)
const mathQuestions = { ... };

// ... repeat for all 10 subjects

// File 11: script.js content (from line ~54 onwards)
const subjectQuestionBank = { ... };
// ... all functions
```

✅ **Yo 100% kaam garxa!**
