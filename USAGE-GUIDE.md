# Complete Usage Guide 📚

## 🎯 Two Solutions Available

### **Solution 1: Multiple WPCode Snippets** (Recommended for Updates)
- ✅ Easy to update individual subjects
- ✅ Team collaboration friendly
- ✅ 11 separate snippets
- 📁 Files in: `/wpcode-snippets/`

### **Solution 2: Standalone HTML File** (Recommended for Testing)
- ✅ Single file, works immediately
- ✅ No external dependencies
- ✅ Perfect for local testing
- 📄 File: `standalone-quiz.html`

---

## 🚀 Solution 1: Multiple WPCode Snippets

### What You Get:
```
wpcode-snippets/
├── 01-science-questions.js     (Priority: 10)
├── 02-math-questions.js         (Priority: 11)
├── 03-history-questions.js      (Priority: 12)
├── 04-geography-questions.js    (Priority: 13)
├── 05-english-questions.js      (Priority: 14)
├── 06-health-questions.js       (Priority: 15)
├── 07-environment-questions.js  (Priority: 16)
├── 08-business-questions.js     (Priority: 17)
├── 09-technology-questions.js   (Priority: 18)
├── 10-parenting-questions.js    (Priority: 19)
└── 11-master-app.js            (Priority: 20) ← MUST BE LAST!
```

### Installation Steps:

**For Each File (1-11):**

1. Open the file (e.g., `01-science-questions.js`)
2. Copy **ALL content**
3. Go to **WordPress Admin > WPCode > Add Snippet**
4. Click "**Add Your Custom Code**"
5. Choose **JavaScript**
6. **Name**: Quiz - Science Questions (use appropriate name)
7. **Paste** the copied code
8. **Location**: Auto Insert > **Footer**
9. **Priority**: Use number from filename (01=10, 02=11, etc.)
10. **Activate** the snippet
11. Click **Save**

**Repeat for all 11 files!**

### Priority Reference:
```
File 01 → Priority 10 (Science)
File 02 → Priority 11 (Math)
File 03 → Priority 12 (History)
File 04 → Priority 13 (Geography)
File 05 → Priority 14 (English)
File 06 → Priority 15 (Health)
File 07 → Priority 16 (Environment)
File 08 → Priority 17 (Business)
File 09 → Priority 18 (Technology)
File 10 → Priority 19 (Parenting)
File 11 → Priority 20 (Master App) ← HIGHEST!
```

### ✅ Why This Method is Best for WordPress:

**1. Easy Updates**
Want to update Science questions?
- Edit only snippet #1
- Other subjects untouched
- No need to edit 158KB file!

**2. Incremental Development**
Add subjects one by one:
```
Week 1: Science + Math + Master
Week 2: Add History
Week 3: Add Geography
```

**3. Team Collaboration**
```
Team Member A: Manages Science
Team Member B: Manages Math
Team Member C: Manages History
→ No conflicts!
```

**4. Easy Debugging**
Problem with one subject?
- Disable that snippet only
- Other subjects keep working
- Fix and re-enable

### 📝 Updating Questions (Example):

To add Chapter 2 to Science:

1. Go to **WPCode > Snippets**
2. Find "**Quiz - Science Questions**"
3. Click **Edit**
4. Find: `// Add Chapter 2, 3, 4... unlimited chapters!`
5. Add before `};`:

```javascript
const scienceQuestions = {
    1: { /* existing chapter 1 */ },
    2: { // NEW!
        easy: [
            {topic: 'Biology', emoji: '🧬', question: '...', options: ['True', 'False'], correct: 0},
            // 9 more questions (10 total)
        ],
        medium: [ /* 10 questions */ ],
        hard: [ /* 10 questions */ ],
        expert: [ /* 10 questions */ ],
        extreme: [ /* 10 questions */ ]
    }
};
```

6. Save snippet
7. Done! Chapter 2 appears automatically!

---

## 📄 Solution 2: Standalone HTML File

### What You Get:
- **Single file**: `standalone-quiz.html` (158 KB)
- **Everything embedded**: HTML + CSS + JavaScript + All Questions
- **No dependencies**: Works offline
- **Just open and use**: Double-click to open in browser

### How to Use:

**Method 1: Local Testing**
```bash
# Just open the file!
1. Download standalone-quiz.html
2. Double-click to open in browser
3. Quiz works immediately!
```

**Method 2: WordPress Upload**
```bash
1. Upload standalone-quiz.html to WordPress Media
2. Get the URL: /wp-content/uploads/2024/11/standalone-quiz.html
3. Create a page with iframe:
   <iframe src="/wp-content/uploads/2024/11/standalone-quiz.html"
           width="100%" height="800px"
           frameborder="0"></iframe>
```

**Method 3: Host Anywhere**
```bash
# Upload to any web host
- GitHub Pages
- Netlify
- Vercel
- Your own hosting
→ Just upload and share the URL!
```

### ✅ Why This Method is Best for:

**1. Quick Testing**
- Test locally before WordPress deployment
- No setup needed
- Instant results

**2. Sharing/Demo**
- Send single file to client
- They can test immediately
- No installation required

**3. Backup**
- Keep as reference
- Offline access
- Version control friendly

**4. Non-WordPress Use**
- Plain HTML hosting
- GitHub Pages
- Any static host

### 📝 Updating Standalone File:

If you edit questions and want to rebuild:

```bash
# Re-run the creation script
# (Copy the bash command from earlier, or use the repository version)
```

Or manually:
1. Open `standalone-quiz.html` in text editor
2. Find the subject you want to update (search for "// SCIENCE QUESTIONS")
3. Edit the questions
4. Save file
5. Refresh browser

⚠️ **Note**: For frequent updates, use **Multiple Snippets** method instead!

---

## 📊 Comparison Table

| Feature | Multiple Snippets | Standalone HTML |
|---------|------------------|-----------------|
| **Setup Time** | 15-20 mins (11 snippets) | 1 second (open file) |
| **Easy Updates** | ✅ Very easy (1 snippet at a time) | ❌ Edit large file |
| **WordPress Integration** | ✅ Native | 🟨 Upload/iframe |
| **Team Collaboration** | ✅ Excellent | ❌ File conflicts |
| **Offline Use** | ❌ No | ✅ Yes |
| **Testing** | 🟨 Need WordPress | ✅ Instant |
| **File Management** | ✅ Clean separation | 🟨 Single large file |
| **Load Speed** | ✅ Optimized | ✅ Fast |
| **Maintenance** | ✅ Easy | 🟨 Manual |
| **Version Control** | ✅ Git friendly | ✅ Git friendly |

### 🎯 Recommendation:

**Use Both!**

1. **Development & Testing**: Use `standalone-quiz.html`
   - Test locally
   - Verify changes
   - Debug issues

2. **WordPress Production**: Use `wpcode-snippets/`
   - Deploy via WPCode
   - Easy updates
   - Team collaboration

**Workflow:**
```
1. Edit questions locally (in separate .js files)
2. Test with standalone-quiz.html
3. Once verified, update WPCode snippet
4. Push to live site
```

---

## 🧪 Testing Checklist

### Initial Setup Test:

- [ ] Quiz loads without JavaScript errors (F12 console)
- [ ] All 10 subjects visible on home page
- [ ] Each subject shows chapters
- [ ] Click chapter → questions appear
- [ ] Answer question → score updates
- [ ] Correct answer → confetti animation
- [ ] Timer counts up
- [ ] Back button works (goes to previous question)
- [ ] Restart works
- [ ] Exit returns to home

### Question Quality Test:

- [ ] All questions have emoji
- [ ] All questions readable
- [ ] Options make sense
- [ ] Correct answers verified
- [ ] No duplicate questions
- [ ] Topics labeled correctly

### Responsive Test:

- [ ] Desktop (1920px+): Centered layout, white content
- [ ] Laptop (1366px): Works properly
- [ ] Tablet (768px): Full width
- [ ] Mobile (375px): Full width, good spacing
- [ ] Touch works on mobile

---

## 🐛 Common Issues & Solutions

### Issue 1: "scienceQuestions is not defined"

**Symptoms**: JavaScript error in console, quiz doesn't load

**Cause**: Master app loaded before question files

**Solutions**:

**For Multiple Snippets**:
```
Check priorities:
✓ Science = 10
✓ Math = 11
...
✓ Master = 20 (MUST be highest!)
```

**For Standalone HTML**:
Should not happen (all embedded), but if it does:
- Check that `const scienceQuestions = {` appears before `const subjectQuestionBank = {`

---

### Issue 2: No chapters showing for a subject

**Symptoms**: Subject loads but "No chapters available" message

**Cause**: Empty question arrays or syntax error

**Solution**:
1. Check that subject has at least one chapter:
```javascript
const scienceQuestions = {
    1: { // ← Must have at least Chapter 1!
        easy: [ /* must have questions */ ],
        medium: [],
        hard: [],
        expert: [],
        extreme: []
    }
};
```

2. Verify at least `easy` level has questions (other levels can be empty)

---

### Issue 3: Emoji not displaying

**Symptoms**: See boxes or question marks instead of emoji

**Cause**: Font or encoding issue

**Solutions**:
1. **For WordPress**: Add to theme's `functions.php`:
```php
remove_filter('the_content', 'convert_smilies');
remove_filter('comment_text', 'convert_smilies');
```

2. **Check browser**: Update browser (older browsers have limited emoji support)

3. **Verify encoding**: Ensure files saved as UTF-8

---

### Issue 4: Quiz works locally but not on WordPress

**Symptoms**: standalone-quiz.html works, but WPCode version doesn't

**Possible Causes & Solutions**:

1. **Priority order wrong**
   - Fix: Set priorities 10-20 correctly

2. **Snippet not activated**
   - Fix: Check all 11 snippets are "Active" ✓

3. **WordPress theme conflict**
   - Fix: Check browser console for CSS conflicts
   - May need to adjust CSS specificity

4. **JavaScript conflict with other plugins**
   - Fix: Temporarily disable other plugins to identify conflict

---

### Issue 5: Questions appear but quiz crashes on answer

**Symptoms**: Can see questions but clicking answer causes error

**Cause**: JavaScript error in master app

**Solution**:
1. Open browser console (F12)
2. Look for error message
3. Check line number
4. Edit master app snippet (#11)
5. Fix the error (usually syntax error or typo)

---

## 📁 File Structure Reference

### Repository Structure:
```
aria-practices/
├── standalone-quiz.html          ← Single file version (158 KB)
├── index.html                    ← Multi-file version (needs external files)
├── script.js                     ← Master app (links to external questions)
├── styles.css                    ← All CSS styles
│
├── science-questions.js          ← Source files
├── math-questions.js
├── history-questions.js
├── geography-questions.js
├── english-questions.js
├── health-questions.js
├── environment-questions.js
├── business-questions.js
├── technology-questions.js
├── parenting-questions.js
│
├── wpcode-snippets/              ← Ready for WordPress
│   ├── 01-science-questions.js
│   ├── 02-math-questions.js
│   ├── ... (11 files total)
│   ├── 11-master-app.js
│   └── README.md                 ← Snippet installation guide
│
├── USAGE-GUIDE.md               ← This file!
├── WPCODE-COMPLETE-GUIDE.md     ← Detailed WPCode guide
└── README.md                     ← Project overview
```

---

## 🎓 Learning Resources

### Understanding the Structure:

**Question Bank Format**:
```javascript
const scienceQuestions = {
    1: {  // Chapter number
        easy: [    // Difficulty level
            {
                topic: 'Biology',
                emoji: '🧬💉',
                question: 'DNA stands for Deoxyribonucleic Acid.',
                options: ['True', 'False'],
                correct: 0  // Index of correct answer (0 = True)
            }
        ],
        medium: [ /* ... */ ],
        hard: [ /* ... */ ],
        expert: [ /* ... */ ],
        extreme: [ /* ... */ ]
    },
    2: { /* Chapter 2 */ },
    // Add unlimited chapters!
};
```

**Dynamic Chapter Detection**:
```javascript
// App automatically finds all chapters
function getAvailableChapters(subject) {
    // Scans scienceQuestions object
    // Returns: [1, 2, 3, ...] (sorted)
    // Only shows chapters that have questions!
}
```

---

## 💡 Pro Tips

### Tip 1: Test Before Deploy
```
1. Edit question file locally
2. Rebuild standalone-quiz.html
3. Test in browser
4. Once working, update WPCode snippet
```

### Tip 2: Version Control
```bash
git add wpcode-snippets/
git commit -m "Update science Chapter 2"
git push
```

### Tip 3: Backup Snippets
In WPCode:
- Tools > Export
- Save JSON file
- Store safely

### Tip 4: Gradual Updates
Don't update all subjects at once:
```
Week 1: Test new format with Science only
Week 2: Add Math if Science works well
Week 3: Add rest of subjects
```

### Tip 5: Browser DevTools
Learn to use F12:
- Console: See JavaScript errors
- Network: Check file loading
- Elements: Inspect CSS

---

## 🆘 Getting Help

### Troubleshooting Steps:

1. **Check Browser Console** (F12)
   - Look for red errors
   - Read error message carefully

2. **Verify File Structure**
   - All 11 snippets created?
   - Priorities correct?
   - All activated?

3. **Test with Standalone**
   - Does standalone-quiz.html work?
   - If yes, issue is in WPCode setup
   - If no, issue is in question data

4. **Compare with Working Version**
   - Use GitHub version as reference
   - Check for typos or missing code

5. **Start Fresh**
   - Delete all snippets
   - Re-create from scratch
   - Test each step

---

## 📞 Support

**Documentation Files**:
- `USAGE-GUIDE.md` (this file) - Overall usage
- `wpcode-snippets/README.md` - Snippet-specific guide
- `WPCODE-COMPLETE-GUIDE.md` - Complete WPCode guide
- `QUESTION_BANK_SEPARATION_GUIDE.md` - Architecture details

**GitHub Repository**:
- Branch: `claude/quiz-app-separated-011CUp87H6zPkQj3xav4dsvH`
- URL: https://github.com/mahendragautam/aria-practices

---

## ✅ Quick Start Summary

### For WordPress (Multiple Snippets):
```
1. Go to wpcode-snippets/ folder
2. For each of 11 files:
   - Copy content
   - Create WPCode snippet
   - Set priority (10-20)
   - Activate
3. Test on WordPress site
```

### For Standalone:
```
1. Download standalone-quiz.html
2. Open in browser
3. Done! ✅
```

### For Development:
```
1. Edit question files (.js)
2. Test with standalone-quiz.html
3. Update WPCode snippets
4. Deploy to WordPress
```

---

**Hajur lai kaam lagla! Both methods ready to use!** 🎉
