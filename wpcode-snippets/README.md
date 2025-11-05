# WPCode Snippets - Multiple Snippet Method 🎯

## ✅ 11 Ready-to-Paste Snippets

This folder contains **11 separate WPCode snippets** for WordPress integration.

### 📁 Files in This Folder:

| File | Snippet Name | Priority | Content |
|------|--------------|----------|---------|
| `01-science-questions.js` | Science Questions | **10** | Science question bank |
| `02-math-questions.js` | Math Questions | **11** | Math question bank |
| `03-history-questions.js` | History Questions | **12** | History question bank |
| `04-geography-questions.js` | Geography Questions | **13** | Geography question bank |
| `05-english-questions.js` | English Questions | **14** | English question bank |
| `06-health-questions.js` | Health Questions | **15** | Health question bank |
| `07-environment-questions.js` | Environment Questions | **16** | Environment question bank |
| `08-business-questions.js` | Business Questions | **17** | Business question bank |
| `09-technology-questions.js` | Technology Questions | **18** | Technology question bank |
| `10-parenting-questions.js` | Parenting Questions | **19** | Parenting question bank |
| `11-master-app.js` | **Master Quiz App** | **20** | **Main application** |

---

## 🚀 Installation Instructions

### Step 1: Create Each Snippet

For **EACH** of the 11 files above:

1. Go to **WordPress Admin > WPCode > Add Snippet**
2. Click "**Add Your Custom Code (New Snippet)**"
3. **Name**: Use the "Snippet Name" from table above
4. **Code Type**: **JavaScript**
5. **Code**: Open the file and copy **ALL content**
6. **Location**: Auto Insert > **Footer**
7. **Priority**: Use the priority number from table above
8. **Status**: Set to **Active** ✓
9. Click **Save Snippet**

### Step 2: Verify Priority Order

After creating all 11 snippets, verify in **WPCode > Snippets** list:

```
✓ Science Questions (Priority: 10)
✓ Math Questions (Priority: 11)
✓ History Questions (Priority: 12)
✓ Geography Questions (Priority: 13)
✓ English Questions (Priority: 14)
✓ Health Questions (Priority: 15)
✓ Environment Questions (Priority: 16)
✓ Business Questions (Priority: 17)
✓ Technology Questions (Priority: 18)
✓ Parenting Questions (Priority: 19)
✓ Master Quiz App (Priority: 20) ← MUST BE LAST!
```

⚠️ **IMPORTANT**: Priority numbers ensure correct loading order!
- Lower number = loads first
- Higher number = loads last
- Master App (20) MUST load after all questions (10-19)

---

## ✅ Benefits of Multiple Snippets

### 1. Easy Updates
Update one subject at a time without touching others:
```
Science updated? → Edit only snippet #1
Math updated? → Edit only snippet #2
```

### 2. Team Collaboration
Different people can work on different subjects:
```
Person A: Updates science questions
Person B: Updates math questions
Person C: Updates history questions
→ No conflicts!
```

### 3. Clear Organization
Each subject isolated:
```
wpcode-snippets/
├── 01-science-questions.js    ← 3.3 KB
├── 02-math-questions.js        ← 3.1 KB
├── 03-history-questions.js     ← 8.1 KB
...
└── 11-master-app.js           ← 31 KB (all functions)
```

### 4. Debugging Made Easy
Problem with history questions?
```
→ Disable snippet #3 only
→ Fix the issue
→ Re-enable snippet #3
→ Other subjects still work!
```

---

## 📝 Adding New Questions

### To Add Chapter 2 to Science:

1. Go to **WPCode > Snippets**
2. Find "**Science Questions**" snippet
3. Click **Edit**
4. Find the line: `// Add Chapter 2, 3, 4... unlimited chapters!`
5. Add before the closing `};`:

```javascript
const scienceQuestions = {
    1: { /* existing chapter 1 */ },
    2: { // NEW CHAPTER!
        easy: [
            {topic: 'Biology', emoji: '🧬', question: 'New question here', options: ['True', 'False'], correct: 0},
            // Add 9 more easy questions (10 total)
        ],
        medium: [
            // Add 10 medium questions
        ],
        hard: [
            // Add 10 hard questions
        ],
        expert: [
            // Add 10 expert questions
        ],
        extreme: [
            // Add 10 extreme questions
        ]
    }
};
```

6. **Save snippet**
7. **Done!** Chapter 2 automatically appears in Science!

### To Add Chapter 50:
Just add `50: { easy: [...], medium: [...], ... }` anywhere in the object.
Order doesn't matter - the app auto-sorts chapters!

---

## 🧪 Testing Checklist

After installing all 11 snippets:

1. **Basic Tests**
   - [ ] Quiz loads without errors (check browser console F12)
   - [ ] All 10 subjects appear on home page
   - [ ] Each subject shows correct chapters

2. **Subject Tests** (test each)
   - [ ] Science → Chapter 1 → Questions appear
   - [ ] Math → Chapter 1 & 2 → Questions appear
   - [ ] History → Chapter 1 → All 5 levels work
   - [ ] Geography → Chapter 1 → All 5 levels work
   - [ ] English → Chapter 1 → All 5 levels work
   - [ ] Health → Chapter 1 → All 5 levels work
   - [ ] Environment → Chapter 1 → All 5 levels work
   - [ ] Business → Chapter 1 → All 5 levels work
   - [ ] Technology → Chapter 1 → All 5 levels work
   - [ ] Parenting → Chapter 1 → All 5 levels work

3. **Quiz Features**
   - [ ] Answer questions → Score updates
   - [ ] Correct answer → Confetti appears
   - [ ] Timer works and counts up
   - [ ] Back button goes to previous question
   - [ ] Restart quiz works
   - [ ] Exit quiz returns to correct page

4. **Quick Pick Features**
   - [ ] Level-wise timer challenges work
   - [ ] Mixed mode works
   - [ ] Timer countdown works
   - [ ] Pause button works (level-wise mode only)

---

## 🐛 Troubleshooting

### Problem: "scienceQuestions is not defined"

**Cause**: Master app (#11) loaded before question files
**Fix**: Check priorities:
```
Science = 10 ✓
Math = 11 ✓
...
Master = 20 ✓ (must be highest!)
```

### Problem: No questions showing for a subject

**Cause**: Empty question arrays or typo in variable name
**Fix**:
1. Open that subject's snippet
2. Verify `const scienceQuestions = {` (check exact name)
3. Ensure chapter has at least one level with questions

### Problem: Quiz loads but crashes on click

**Cause**: JavaScript error in master app
**Fix**:
1. Open browser console (F12)
2. Check for error message
3. Edit master app snippet (#11)
4. Fix the error

### Problem: Emoji not showing

**Cause**: WordPress converting emoji to images
**Fix**: Add to theme's `functions.php`:
```php
remove_filter('the_content', 'convert_smilies');
remove_filter('comment_text', 'convert_smilies');
```

---

## 🔄 Update Strategy

### Updating Questions (Recommended Workflow):

1. **Edit Locally**
   - Edit the question file on your computer
   - Test in browser (use standalone HTML)
   - Verify everything works

2. **Update WPCode Snippet**
   - Go to WPCode > Find the snippet
   - Copy entire updated content
   - Paste and save
   - Test on live site

3. **Version Control** (Optional)
   - Keep question files in Git
   - Track changes
   - Easy rollback if needed

---

## 📊 File Sizes

```
01-science-questions.js     →  3.3 KB (20 questions)
02-math-questions.js        →  3.1 KB (20 questions + Chapter 2 empty)
03-history-questions.js     →  8.1 KB (50 questions - complete!)
04-geography-questions.js   →  8.3 KB (50 questions - complete!)
05-english-questions.js     →  8.3 KB (50 questions - complete!)
06-health-questions.js      →  8.4 KB (50 questions - complete!)
07-environment-questions.js →  8.4 KB (50 questions - complete!)
08-business-questions.js    →  8.8 KB (50 questions - complete!)
09-technology-questions.js  →  8.6 KB (50 questions - complete!)
10-parenting-questions.js   →  8.6 KB (50 questions - complete!)
11-master-app.js           → 31.0 KB (all app functions)

TOTAL: ~107 KB (very lightweight!)
```

---

## 💡 Pro Tips

1. **Start Small**: Install Science + Math + Master first, test, then add others
2. **Name Consistently**: Use clear names like "Quiz - Science Questions"
3. **Document Changes**: Add comments when updating questions
4. **Backup First**: Export all snippets before major updates
5. **Test Offline**: Use standalone HTML file to test before uploading

---

## 🎯 Quick Start Checklist

- [ ] Create all 11 WPCode snippets
- [ ] Set correct priority for each (10-20)
- [ ] Activate all snippets
- [ ] Refresh WordPress page
- [ ] Open browser console (F12) - check for errors
- [ ] Test each subject one by one
- [ ] Enjoy your working quiz! 🎉

---

## 📚 Other Files in Repository

- **Standalone HTML**: `/standalone-quiz.html` - Single file version
- **Full Guide**: `/WPCODE-COMPLETE-GUIDE.md` - All integration methods
- **Original Files**: `/science-questions.js`, etc. - Source files

---

**Need Help?**
- Check browser console (F12) for errors
- Read WPCODE-COMPLETE-GUIDE.md
- Verify all snippet priorities
- Test with standalone HTML first
