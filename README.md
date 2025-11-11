# Quiz Application - Subject Question Files

## 📁 Files in This Repository

This repository contains the complete quiz application with all subject question files.

### Quiz Core Files:
- `home-page.html` - Main quiz interface
- `quiz-master-app.js` - Main application logic (Priority: 20)
- `quiz.css` - Styling
- `quiz-header.html` - Header component
- `quiz-footer.html` - Footer component

### Subject Question Files:
1. `Science-questions.js` - 🔬 Science (Priority: 10)
2. `math-questions.js` - 🔢 Math (Priority: 11)
3. `history-questions.js` - 📜 History (Priority: 12)
4. `geography-questions.js` - 🌍 Geography (Priority: 13)
5. `english-questions.js` - 📖 English (Priority: 14)
6. `health-questions.js` - 💪 Health & Fitness (Priority: 15)
7. `environment-questions.js` - 🌱 Environment (Priority: 16)
8. `business-questions.js` - 💼 Business (Priority: 17)
9. `technology-questions.js` - 💻 Technology (Priority: 18)
10. `parenting-questions.js` - 👶 Parenting (Priority: 19)

---

## 🚨 IMPORTANT: Loading Order

### WPCode Snippet Setup

All JavaScript files MUST be loaded in this order:

```
Priority 10: Science-questions.js
Priority 11: math-questions.js
Priority 12: history-questions.js
Priority 13: geography-questions.js
Priority 14: english-questions.js
Priority 15: health-questions.js
Priority 16: environment-questions.js
Priority 17: business-questions.js
Priority 18: technology-questions.js
Priority 19: parenting-questions.js
Priority 20: quiz-master-app.js ⚠️ MUST BE LAST!
```

**Why?** The `quiz-master-app.js` expects all subject variables to be defined first:
- `scienceQuestions`
- `mathQuestions`
- `historyQuestions`
- etc.

If a subject JS file is not loaded (not added to WPCode or deactivated), that subject won't work when clicked!

---

## 🐛 Troubleshooting

### Problem: Some subjects don't work when clicked

**Symptom**: Click on Math/History/Geography etc. and nothing happens

**Cause**: The subject's JS file is not loaded in WordPress

**Solution**:
1. Check if the subject JS file is added as a WPCode snippet
2. Make sure it's **ACTIVATED** (toggle ON)
3. Verify Priority is correct (10-19, before master app)
4. Verify Location is set to **Footer**
5. Clear browser cache

### Diagnostic Tool

Use `check-loaded-subjects.js` to see which subjects are loaded:
1. Open quiz page
2. Press F12 (open browser console)
3. Copy-paste code from `check-loaded-subjects.js`
4. Press Enter
5. See report: ✅ Loaded vs ❌ Missing

---

## 📝 WPCode Configuration

For each JavaScript file:

1. **Type**: JavaScript
2. **Location**: Auto Insert > Footer
3. **Priority**: See table above
4. **Status**: ACTIVATED ✅
5. **Insert Method**: Auto Insert

---

## 🌐 WordPress Integration

### Method 1: WPCode Snippets (Recommended)
- Add each JS file as a separate snippet
- Set correct priority
- Activate all snippets

### Method 2: Theme Files
- Add all JS files to theme's `js` folder
- Enqueue in correct order using `wp_enqueue_script()`
- Set dependencies properly

---

## ✅ Complete Setup Checklist

- [ ] All 10 subject JS files added to WPCode
- [ ] quiz-master-app.js added with Priority 20
- [ ] All snippets ACTIVATED
- [ ] Priorities correctly set (10-19 for subjects)
- [ ] Location set to Footer for all
- [ ] Browser cache cleared
- [ ] Tested all subjects - they all work!

---

## 📖 Documentation Files

- `FIX-INSTRUCTIONS-NEPALI.md` - Complete fix guide in Nepali
- `check-loaded-subjects.js` - Diagnostic tool
- `README.md` - This file

---

## 🎯 Features

- 10 subjects with 20 chapters each
- 5 difficulty levels (Easy, Medium, Hard, Expert, Extreme)
- Timer challenges
- Practice mode
- Mixed quiz modes
- Progress tracking
- Beautiful UI with animations

---

## 📦 Repository Structure

```
aria-practices/
├── README.md
├── FIX-INSTRUCTIONS-NEPALI.md
├── check-loaded-subjects.js
├── home-page.html
├── quiz-master-app.js
├── quiz.css
├── quiz-header.html
├── quiz-footer.html
├── Science-questions.js
├── math-questions.js
├── history-questions.js
├── geography-questions.js
├── english-questions.js
├── health-questions.js
├── environment-questions.js
├── business-questions.js
├── technology-questions.js
└── parenting-questions.js
```

---

## 🔧 Technical Notes

### Global Variables
Each subject file defines a global variable:
```javascript
const scienceQuestions = { ... };
const mathQuestions = { ... };
// etc.
```

### Master App References
The master app references these in line 70-81:
```javascript
const subjectQuestionBank = {
    science: scienceQuestions,
    math: mathQuestions,
    // etc.
};
```

If a variable is undefined, that subject will fail silently!

---

**Happy Quizzing! 🎉**
