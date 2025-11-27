# WPCode Setup Instructions - COMPLETE GUIDE

## ⚠️ IMPORTANT: Common Mistakes to Avoid

### ❌ WRONG: Adding JavaScript in HTML Output
```
WPCode > Add Snippet > HTML Output → Paste riddles-master.js
Result: JavaScript code shows as TEXT on page! ❌
```

### ✅ CORRECT: Adding JavaScript as JavaScript Snippet
```
WPCode > Add Snippet > JavaScript Snippet → Paste riddles-master.js
Location: Footer
Result: JavaScript executes properly! ✅
```

---

## 📋 Step-by-Step: How to Add JavaScript Files

### For Each JavaScript File:

1. **Go to WPCode Dashboard**
   - WordPress Admin → WPCode → Snippets

2. **Add New Snippet**
   - Click "Add Snippet" button

3. **Select "JavaScript Snippet"** (NOT HTML!)
   - Type: **JavaScript Snippet**
   - Location: **Footer** (for all JS files)

4. **Paste the Code**
   - Copy ENTIRE file content from GitHub
   - Paste into code editor

5. **Set Priority** (if using modular approach)
   - See README files for correct priorities
   - Lower number = loads first

6. **Activate**
   - Toggle to "Active"
   - Click "Save"

---

## 🎯 OPTION 1: Monolithic (Easiest - 3 Files Only)

Load only these 3 files as **JavaScript Snippets** in WPCode:

| File | Type | Location | Priority | Description |
|------|------|----------|----------|-------------|
| `riddles-master.js` | JavaScript | Footer | 10 | Auto-loads all 29 riddles files |
| `dad-jokes-master.js` | JavaScript | Footer | 20 | Auto-loads all 6 dad-jokes files |
| `quiz-master-app.js` | JavaScript | Footer | 30 | Main quiz application |

**CSS Files (3 files):**
Add these as **CSS Snippets** or link in theme:
- `quiz-css/quiz-main.css`
- `riddles-css/riddles-master.css`
- `dad-jokes-css/dad-jokes.css`

---

## 🎯 OPTION 2: Modular (Advanced - 35 Files)

Load each file separately as **JavaScript Snippet**:

### Riddles (29 files):
See `riddles-js/README.md` for complete list
- 20 chapter files (Priorities 10-29)
- 9 logic modules (Priorities 30-38)

### Dad Jokes (6 files):
See `dad-jokes-js/README.md` for complete list
- 4 category files (Priorities 10-13)
- 2 logic files (Priorities 14-15)

### Quiz (1 file):
- `quiz-master-app.js` (Priority: 50)

---

## 🚨 CRITICAL: File Type in WPCode

### For .js Files:
```
✅ Type: JavaScript Snippet
✅ Location: Footer
✅ Device: All devices
❌ DO NOT use: HTML Output, PHP Snippet, or CSS Snippet for JS files
```

### For .css Files:
```
✅ Type: CSS Snippet
✅ Location: Site Wide Header
✅ Device: All devices
❌ DO NOT use: HTML Output or JavaScript Snippet for CSS files
```

### For .html Files (like home-page.html):
```
✅ Type: HTML Snippet or add in Page Editor
✅ Location: Shortcode or Manual
❌ DO NOT include <script> tags inside HTML files
   (Load JS separately via WPCode JavaScript Snippets)
```

---

## 🔍 How to Verify It's Working

### Check Console (F12 → Console):

**✅ Success Looks Like:**
```
🎭 Loading Riddles Master Module...
✅ Loaded: riddles-chapters/Chapter-1-Trick-Questions.js
✅ Loaded: riddles-chapters/Chapter 2 - Puzzle Stories.js
...
✅ All riddles files loaded successfully!
📂 Loaded 20 chapter files
⚙️ Loaded 9 logic modules
```

**❌ Error Looks Like:**
```
Uncaught SyntaxError: Unexpected token '{'
Uncaught SyntaxError: Invalid or unexpected token
Identifier 'riddlesQuestions' has already been declared
```
**Cause:** JavaScript added as HTML Output (wrong type!)

---

## 🐛 Troubleshooting

### Problem: JavaScript code visible as text on page
**Cause:** Added as "HTML Output" instead of "JavaScript Snippet"
**Fix:** Delete snippet, recreate as "JavaScript Snippet"

### Problem: Syntax errors in console
**Cause:** JavaScript added in wrong location or wrong type
**Fix:** Ensure Type = "JavaScript Snippet", Location = "Footer"

### Problem: Files not loading (404 errors)
**Cause:** Using old file paths or files not uploaded to server
**Fix:**
1. Download latest files from GitHub
2. Upload to WordPress Media Library or server
3. Update paths in code if needed

### Problem: "Identifier already declared" error
**Cause:** Same file loaded twice (once inline, once via WPCode)
**Fix:** Remove duplicate. Keep only WPCode JavaScript Snippet version

### Problem: riddles-master.js loads but chapter files fail
**Cause:** Chapter files not in correct location on server
**Fix:** Upload entire `riddles-chapters/` folder to server

---

## 📁 File Locations on Server

If using OPTION 2 (Monolithic), ensure these folders exist:

```
/wp-content/themes/YOUR-THEME/
├── riddles-chapters/      (20 chapter files)
├── riddles-js/            (9 module files)
├── dad-jokes-js/          (6 files)
├── riddles-master.js      (main loader)
├── dad-jokes-master.js    (main loader)
└── quiz-master-app.js     (main app)
```

Or adjust paths in master files accordingly.

---

## ✅ Final Checklist

Before going live, verify:

- [ ] All JS files added as **JavaScript Snippets** (NOT HTML!)
- [ ] All CSS files added as **CSS Snippets**
- [ ] Location set to **Footer** for all JS files
- [ ] Priorities set correctly (if using modular)
- [ ] All snippets are **Active**
- [ ] Console shows no syntax errors
- [ ] Riddles page loads correctly when clicked
- [ ] Dad Jokes page loads correctly when clicked
- [ ] Quiz functions work as expected

---

## 💡 Recommended Approach

**For Beginners:** Use OPTION 1 (Monolithic)
- Only 3 JavaScript files to manage
- Easier to set up
- Master files handle all loading automatically

**For Advanced Users:** Use OPTION 2 (Modular)
- Full control over each file
- Can enable/disable individual features
- Easier to update specific parts
- Better for large teams

---

## 📞 Need Help?

If issues persist:
1. Check console for specific error messages
2. Verify file paths match your server structure
3. Ensure all files uploaded to correct locations
4. Try OPTION 1 (Monolithic) if modular approach fails
5. Check that no duplicate files are loading

---

**Last Updated:** 2024
**Version:** 1.0
**Compatibility:** WordPress 5.0+, WPCode Plugin
