# Development Workflow Guide

This branch contains **modular files** for easy editing and maintenance. Use this branch for development, then copy combined files to production branch for WordPress.

## 🌿 Branch Structure

### **Current Branch (Development):**
`claude/copy-working-website-v2-011CV1sHQmBaTGWmPqzBZKnS`

**Purpose:** Development and editing
**Contains:** Modular CSS and JS files

```
├── css/ (12 modular CSS files)
│   ├── base-reset.css
│   ├── bubble-animations.css
│   ├── buttons.css
│   ├── cards.css
│   ├── collapsible.css
│   ├── emojis-effects.css
│   ├── home-page.css
│   ├── layout-container.css
│   ├── mobile-responsive.css
│   ├── progress-results.css
│   ├── quiz-header.css
│   ├── quiz-footer.css
│   ├── test-all-subjects.css
│   └── topics-badges.css
│
├── js/ (12 modular JS files)
│   ├── quiz-animations.js
│   ├── quiz-data.js
│   ├── quiz-display.js
│   ├── quiz-footer.js
│   ├── quiz-init.js
│   ├── quiz-logic.js
│   ├── quiz-navigation.js
│   ├── quiz-results.js
│   ├── quiz-state.js
│   ├── quiz-storage.js
│   ├── quiz-timer.js
│   └── test-all-subjects.js
│
├── HTML files (use external CSS/JS links)
│   ├── quiz-header.html
│   ├── quiz-footer.html
│   ├── home-page.html
│   ├── about-us.html
│   └── test-all-subjects.html
│
└── Build tools
    ├── build-combined.sh (this script combines files)
    ├── MODULAR-STRUCTURE.md (architecture docs)
    └── README-DEVELOPMENT.md (this file)
```

### **Production Branch:**
`claude/working-website-V2-011CUvZ7qfkQLwK6ZyTne5GU`

**Purpose:** Production files for WordPress WPCode
**Contains:** Combined files

```
├── quiz.css (ALL CSS combined)
├── quiz-master-app.js (ALL JS combined)
├── quiz-header.html (inline CSS)
├── quiz-footer.html (inline CSS + JS)
├── home-page.html
├── about-us.html
├── about-us.css
├── about-us.js
└── Subject files (10 files):
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

## 🔄 Development Workflow

### Scenario 1: Edit CSS Styles

**Example:** Change button color

#### Step 1: Edit modular file
```bash
# Stay in development branch
git checkout claude/copy-working-website-v2-011CV1sHQmBaTGWmPqzBZKnS

# Edit the specific module
vim css/buttons.css
# Change: background: #667eea → #ff6b6b
```

#### Step 2: Test locally (optional)
```bash
# Open test-all-subjects.html or home-page.html in browser
# Verify changes work correctly
```

#### Step 3: Build combined file
```bash
./build-combined.sh
# This creates: quiz-combined.css
```

#### Step 4: Copy to production branch
```bash
# Switch to production branch
git checkout claude/working-website-V2-011CUvZ7qfkQLwK6ZyTne5GU

# Copy the combined file
cp ../copy-working-website-v2/quiz-combined.css ./quiz.css

# Or manually copy-paste the button section
```

#### Step 5: Update WPCode
```
1. WordPress Admin → Code Snippets
2. Edit "Quiz CSS Styles" snippet
3. Find button section
4. Update the color
5. Save snippet
```

---

### Scenario 2: Edit JavaScript Logic

**Example:** Change timer duration

#### Step 1: Edit modular file
```bash
# Edit timer module
vim js/quiz-timer.js
# Change timer logic
```

#### Step 2: Build combined file
```bash
./build-combined.sh
# This creates: quiz-master-app-combined.js
```

#### Step 3: Copy to production branch
```bash
git checkout claude/working-website-V2-011CUvZ7qfkQLwK6ZyTne5GU
cp ../copy-working-website-v2/quiz-master-app-combined.js ./quiz-master-app.js
```

#### Step 4: Update WPCode
```
WordPress Admin → Code Snippets
→ Edit "Quiz Master App" snippet
→ Update timer section
→ Save
```

---

### Scenario 3: Add New Feature

**Example:** Add new quiz mode

#### Step 1: Create/Edit modular files
```bash
# Maybe edit multiple files:
vim css/cards.css          # Add new card style
vim js/quiz-navigation.js  # Add navigation logic
vim js/quiz-logic.js       # Add quiz logic
```

#### Step 2: Test locally
```bash
# Open in browser and test
open home-page.html
```

#### Step 3: Build combined files
```bash
./build-combined.sh
```

#### Step 4: Copy to production
```bash
git checkout claude/working-website-V2-011CUvZ7qfkQLwK6ZyTne5GU
cp ../copy-working-website-v2/quiz-combined.css ./quiz.css
cp ../copy-working-website-v2/quiz-master-app-combined.js ./quiz-master-app.js
```

#### Step 5: Update WPCode
```
Update both CSS and JS snippets in WPCode
```

---

## 🎯 Quick Commands

### Build combined files
```bash
./build-combined.sh
```

### Compare changes between branches
```bash
# See what changed in CSS
git diff claude/working-website-V2-011CUvZ7qfkQLwK6ZyTne5GU:quiz.css quiz-combined.css

# See what changed in JS
git diff claude/working-website-V2-011CUvZ7qfkQLwK6ZyTne5GU:quiz-master-app.js quiz-master-app-combined.js
```

### Switch branches
```bash
# Go to development branch
git checkout claude/copy-working-website-v2-011CV1sHQmBaTGWmPqzBZKnS

# Go to production branch
git checkout claude/working-website-V2-011CUvZ7qfkQLwK6ZyTne5GU
```

---

## 📝 File Editing Guide

### When to edit which file:

| Want to change | Edit this file | Branch |
|----------------|----------------|--------|
| Button styles | `css/buttons.css` | Development |
| Card styles | `css/cards.css` | Development |
| Quiz logic | `js/quiz-logic.js` | Development |
| Timer | `js/quiz-timer.js` | Development |
| Navigation | `js/quiz-navigation.js` | Development |
| Mobile styles | `css/mobile-responsive.css` | Development |
| Animations | `css/emojis-effects.css` | Development |
| Question data | `Science-questions.js` etc. | Either branch |

---

## ⚠️ Important Notes

### DO:
- ✅ Edit modular files in development branch
- ✅ Run `build-combined.sh` after editing
- ✅ Test changes before copying to production
- ✅ Commit changes in both branches
- ✅ Keep branches in sync

### DON'T:
- ❌ Edit `quiz-combined.css` or `quiz-master-app-combined.js` directly (they're auto-generated)
- ❌ Edit production branch files directly (use development → build → copy)
- ❌ Forget to run build script after changes
- ❌ Push to main/master branch

---

## 🚀 Deployment to WordPress

### Files to upload to WPCode:

1. **quiz.css** (combined) → Snippet: "Quiz CSS Styles"
2. **quiz-master-app.js** (combined) → Snippet: "Quiz Master App"
3. **quiz-header.html** (inline CSS) → Snippet: "Quiz Header"
4. **quiz-footer.html** (inline CSS + JS) → Snippet: "Quiz Footer"
5. **home-page.html** → Page content
6. **about-us.html** → Page content
7. **about-us.css** → Snippet: "About Us CSS"
8. **about-us.js** → Snippet: "About Us JS"
9. **10 subject files** → Individual snippets

See `README-WPCODE.md` for detailed WPCode setup instructions.

---

## 🔍 Troubleshooting

### Build script not working?
```bash
# Make script executable
chmod +x build-combined.sh

# Run with bash explicitly
bash build-combined.sh
```

### Combined file looks wrong?
```bash
# Check if all modular files exist
ls css/*.css
ls js/*.js

# Check file order in build script
cat build-combined.sh
```

### Changes not appearing in production?
```bash
# Make sure you copied the RIGHT combined file
# And updated WPCode snippet
# Clear WordPress cache if using caching plugin
```

---

## 📚 Additional Resources

- **MODULAR-STRUCTURE.md** - Complete architecture documentation
- **README-WPCODE.md** - WordPress WPCode setup guide
- **TEMPLATE-MODULAR.html** - Example HTML structure

---

**Last Updated:** 2025-01-11
**Maintained by:** Development Team
