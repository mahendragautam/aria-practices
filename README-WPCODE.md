# WordPress WPCode Setup Guide

Complete guide for setting up the Quiz application in WordPress using WPCode plugin.

## 📋 Prerequisites

1. ✅ WordPress installed
2. ✅ WPCode plugin installed and activated
3. ✅ All files from production branch ready

---

## 🎯 Overview

Total snippets needed: **16-17 snippets**

| Category | Count | Priority Range |
|----------|-------|----------------|
| CSS Styles | 3 | 1-3 |
| HTML Header/Footer | 2 | 1, 100 |
| Main Quiz JS | 1 | 10 |
| Subject Questions | 10 | 11-20 |
| About Us (optional) | 2 | 21-22 |

---

## 📦 WPCode Snippets List

### 1. Quiz CSS Styles (Priority 1)

```
Name: Quiz CSS Styles
Type: HTML
Location: Site Wide Header
Priority: 1
Device: Show Everywhere
Status: ACTIVE ✅

Code:
<style>
/* Paste entire content of quiz.css here */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
}

/* ... rest of quiz.css ... */
</style>
```

---

### 2. Quiz Header (Priority 1)

```
Name: Quiz Header
Type: HTML
Location: Site Wide Header
Priority: 1
Device: Show Everywhere
Status: ACTIVE ✅

Code:
<!-- Paste entire content of quiz-header.html -->
<!-- Should have inline <style> tags, not <link> -->
<style>
/* Header CSS */
body {
  margin: 0 !important;
  padding: 0 !important;
}
/* ... */
</style>

<header class="quiz-header" role="banner">
  <div class="quiz-hero-section">
    <!-- ... header content ... -->
  </div>
</header>
```

---

### 3. About Us CSS (Priority 3)

```
Name: About Us CSS
Type: HTML
Location: Site Wide Header
Priority: 3
Device: Show Everywhere
Status: ACTIVE ✅

Code:
<style>
/* Paste entire content of about-us.css here */
.container {
    max-width: 1200px;
    margin: 0 auto;
    /* ... */
}
/* ... rest of about-us.css ... */
</style>
```

---

### 4. Quiz Master App (Priority 10)

```
Name: Quiz Master App
Type: JavaScript
Location: Auto Insert > Footer
Priority: 10
Device: Show Everywhere
Status: ACTIVE ✅

Code:
/* Paste entire content of quiz-master-app.js here */
/* DO NOT add <script> tags - just the JS code */

// Quiz state
let currentSubject = 'science';
let currentChapter = 1;
let currentLevel = 'easy';
/* ... rest of quiz-master-app.js ... */
```

**⚠️ IMPORTANT:**
- Type must be "JavaScript" (NOT HTML)
- Do NOT wrap in `<script>` tags
- Must load BEFORE subject questions

---

### 5-14. Subject Question Files (Priority 11-20)

Each subject needs its own snippet:

#### **Snippet 5: Science Questions**
```
Name: Science Questions
Type: JavaScript
Location: Auto Insert > Footer
Priority: 11
Device: Show Everywhere
Status: ACTIVE ✅

Code:
/* Paste entire content of Science-questions.js */
const scienceQuestions = {
    1: {
        easy: [
            /* ... */
        ]
    }
};
```

#### **Snippet 6: Math Questions**
```
Name: Math Questions
Type: JavaScript
Location: Auto Insert > Footer
Priority: 12
Status: ACTIVE ✅

Code:
/* Paste entire content of math-questions.js */
const mathQuestions = { /* ... */ };
```

#### **Snippet 7: History Questions**
```
Name: History Questions
Priority: 13
Code: const historyQuestions = { /* ... */ };
```

#### **Snippet 8: Geography Questions**
```
Name: Geography Questions
Priority: 14
Code: const geographyQuestions = { /* ... */ };
```

#### **Snippet 9: English Questions**
```
Name: English Questions
Priority: 15
Code: const englishQuestions = { /* ... */ };
```

#### **Snippet 10: Health Questions**
```
Name: Health Questions
Priority: 16
Code: const healthQuestions = { /* ... */ };
```

#### **Snippet 11: Environment Questions**
```
Name: Environment Questions
Priority: 17
Code: const environmentQuestions = { /* ... */ };
```

#### **Snippet 12: Business Questions**
```
Name: Business Questions
Priority: 18
Code: const businessQuestions = { /* ... */ };
```

#### **Snippet 13: Technology Questions**
```
Name: Technology Questions
Priority: 19
Code: const technologyQuestions = { /* ... */ };
```

#### **Snippet 14: Parenting Questions**
```
Name: Parenting Questions
Priority: 20
Code: const parentingQuestions = { /* ... */ };
```

---

### 15. About Us JS (Priority 21)

```
Name: About Us JS
Type: JavaScript
Location: Auto Insert > Footer
Priority: 21
Device: Show Everywhere
Status: ACTIVE ✅

Code:
/* Paste entire content of about-us.js */
document.addEventListener('DOMContentLoaded', function() {
    /* ... */
});
```

---

### 16. Quiz Footer (Priority 100)

```
Name: Quiz Footer
Type: HTML
Location: Auto Insert > Footer
Priority: 100
Device: Show Everywhere
Status: ACTIVE ✅

Code:
<!-- Paste entire content of quiz-footer.html -->
<!-- Should have inline <style> and <script>, not external links -->
<style>
/* Footer CSS */
.quiz-footer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* ... */
}
</style>

<footer class="quiz-footer" role="contentinfo">
  <!-- ... footer content ... -->
</footer>

<script>
/* Footer JS */
(function(){
  var el = document.getElementById('qm-year');
  if (el) el.textContent = new Date().getFullYear();
})();
</script>
```

---

## 📄 Page Content

### Quiz Home Page

```
1. WordPress Admin → Pages → Add New
2. Title: Quiz or Home
3. Content: Paste content of home-page.html
4. Publish
```

### About Us Page

```
1. WordPress Admin → Pages → Add New
2. Title: About Us
3. Content: Paste content of about-us.html
4. Publish
```

---

## ✅ Setup Checklist

### Step 1: Install WPCode Plugin
- [ ] WordPress Admin → Plugins → Add New
- [ ] Search "WPCode"
- [ ] Install and Activate

### Step 2: Create CSS Snippets (Header)
- [ ] Snippet 1: Quiz CSS Styles (Priority 1)
- [ ] Snippet 2: Quiz Header (Priority 1)
- [ ] Snippet 3: About Us CSS (Priority 3)

### Step 3: Create Main JS Snippet (Footer)
- [ ] Snippet 4: Quiz Master App (Priority 10)
- [ ] Verify Type = "JavaScript" (NOT HTML)
- [ ] Verify no `<script>` tags

### Step 4: Create Subject Snippets (Footer)
- [ ] Snippet 5: Science (Priority 11)
- [ ] Snippet 6: Math (Priority 12)
- [ ] Snippet 7: History (Priority 13)
- [ ] Snippet 8: Geography (Priority 14)
- [ ] Snippet 9: English (Priority 15)
- [ ] Snippet 10: Health (Priority 16)
- [ ] Snippet 11: Environment (Priority 17)
- [ ] Snippet 12: Business (Priority 18)
- [ ] Snippet 13: Technology (Priority 19)
- [ ] Snippet 14: Parenting (Priority 20)

### Step 5: Create Supporting Snippets
- [ ] Snippet 15: About Us JS (Priority 21)
- [ ] Snippet 16: Quiz Footer (Priority 100)

### Step 6: Verify All Snippets Active
- [ ] All toggles are GREEN (ON)
- [ ] Check each snippet status

### Step 7: Create Pages
- [ ] Create Quiz/Home page with home-page.html content
- [ ] Create About Us page with about-us.html content

### Step 8: Test
- [ ] Open test-all-subjects.html (if uploaded)
- [ ] Verify all 10 subjects loaded
- [ ] Test quiz functionality
- [ ] Test on mobile devices

---

## 🔍 Verification

### Test Subject Loading

Upload `test-all-subjects.html` to your site and visit it:

```
https://yoursite.com/test-all-subjects.html
```

Should show:
```
✅ Science - LOADED (20 chapters)
✅ Math - LOADED (20 chapters)
✅ History - LOADED (20 chapters)
... (all 10 subjects)

Success Rate: 100%
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: Subject Not Loaded

**Symptoms:**
```
❌ Math - MISSING
Variable "mathQuestions" is not defined!
```

**Solutions:**
1. Check snippet is ACTIVE (toggle ON)
2. Check Priority is correct (11-20)
3. Check variable name is exact: `const mathQuestions = {`
4. Check Location is "Footer"
5. Clear WordPress cache

---

### Issue 2: No Styles Applied

**Symptoms:**
- Page has no colors/styling
- Looks like plain HTML

**Solutions:**
1. Check "Quiz CSS Styles" snippet is ACTIVE
2. Check Priority is 1 (loads first)
3. Check Location is "Site Wide Header"
4. Check `<style>` tags are present
5. Check no syntax errors in CSS

---

### Issue 3: Quiz Not Starting

**Symptoms:**
- Clicking subject does nothing
- Console shows JS errors

**Solutions:**
1. Check "Quiz Master App" snippet is ACTIVE
2. Check Priority is 10 (before subjects)
3. Check Type is "JavaScript" (not HTML)
4. Check no `<script>` tags around code
5. Check all 10 subject snippets are active
6. Open browser console (F12) and check for errors

---

### Issue 4: Priority Conflicts

**Symptoms:**
- Things load in wrong order
- Features not working

**Solution:**
Verify priority order:
```
Header:
  1 - CSS Styles
  1 - Header HTML
  3 - About Us CSS

Footer:
  10 - Quiz Master App (MUST be first JS)
  11-20 - Subject Questions
  21 - About Us JS
  100 - Footer HTML (MUST be last)
```

---

### Issue 5: 404 Errors for CSS/JS Files

**Symptoms:**
```
GET https://yoursite.com/css/quiz-header.css 404 (Not Found)
GET https://yoursite.com/js/quiz-footer.js 404 (Not Found)
```

**Problem:**
HTML files have external links instead of inline code

**Solution:**
Make sure quiz-header.html and quiz-footer.html have **inline CSS/JS**, not external links:

❌ **Wrong:**
```html
<link rel="stylesheet" href="css/quiz-header.css">
```

✅ **Correct:**
```html
<style>
/* CSS content here */
.quiz-header { ... }
</style>
```

---

## 🚀 Performance Tips

### 1. Use Caching Plugin
- WP Super Cache
- W3 Total Cache
- WP Rocket

### 2. Minify CSS/JS (Optional)
Use online tools to minify before uploading:
- https://cssminifier.com/
- https://javascript-minifier.com/

### 3. Lazy Load (Optional)
Only for very large sites with traffic issues

---

## 📊 Snippet Priority Reference

| Priority | Snippet Name | Why This Order |
|----------|--------------|----------------|
| 1 | Quiz CSS Styles | Styles must load first |
| 1 | Quiz Header | Header at top of page |
| 3 | About Us CSS | After main styles |
| 10 | Quiz Master App | JS core must load before questions |
| 11-20 | Subject Questions | After core JS, before footer |
| 21 | About Us JS | After quiz JS |
| 100 | Quiz Footer | Footer at bottom, loads last |

---

## 🔄 Updating Snippets

When you make changes in development branch:

1. Edit modular files in development branch
2. Run `./build-combined.sh`
3. Copy combined files to production branch
4. Update corresponding WPCode snippet
5. Save snippet
6. Clear WordPress cache
7. Test changes

---

## 📞 Support

If you encounter issues:

1. Check browser console (F12) for errors
2. Use test-all-subjects.html for diagnostics
3. Verify all snippets are ACTIVE
4. Check priority order is correct
5. Clear all caches (browser + WordPress)

---

## 📚 Additional Documentation

- **README-DEVELOPMENT.md** - Development workflow
- **MODULAR-STRUCTURE.md** - Architecture details
- **TEMPLATE-MODULAR.html** - HTML structure example

---

**Last Updated:** 2025-01-11
**Quiz Version:** 2.0 (Modular)
