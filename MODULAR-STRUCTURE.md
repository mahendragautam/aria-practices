# Quiz Application - Modular File Structure

This document describes the reorganized modular structure of the Quiz application. All inline CSS and JS have been extracted, and large monolithic files have been split into smaller, feature-based modules.

## 📁 Directory Structure

```
aria-practices/
├── css/                              # Modular CSS files
│   ├── quiz-main.css                # Main CSS (imports all modules)
│   ├── base-reset.css               # Base/reset styles
│   ├── bubble-animations.css        # Bubble foam effects
│   ├── layout-container.css         # Page layout and containers
│   ├── home-page.css                # Home page specific styles
│   ├── cards.css                    # Card components
│   ├── buttons.css                  # All button styles
│   ├── quiz.css                     # Quiz functionality styles
│   ├── progress-results.css         # Progress bars and results
│   ├── collapsible.css              # Collapsible sections
│   ├── topics-badges.css            # Topic badges
│   ├── emojis-effects.css           # Emoji animations
│   ├── mobile-responsive.css        # Mobile styles
│   ├── quiz-header.css              # Header component styles
│   ├── quiz-footer.css              # Footer component styles
│   └── test-all-subjects.css        # Test page styles
│
├── js/                               # Modular JavaScript files
│   ├── quiz-state.js                # State variables and constants
│   ├── quiz-storage.js              # State persistence
│   ├── quiz-navigation.js           # Page navigation
│   ├── quiz-data.js                 # Data loading
│   ├── quiz-timer.js                # Timer functionality
│   ├── quiz-display.js              # UI rendering
│   ├── quiz-logic.js                # Quiz game logic
│   ├── quiz-results.js              # Results handling
│   ├── quiz-animations.js           # Animations
│   ├── quiz-init.js                 # Initialization
│   ├── quiz-footer.js               # Footer functionality
│   └── test-all-subjects.js         # Test page functionality
│
├── HTML files (updated with external references)
│   ├── home-page.html               # Main quiz page
│   ├── quiz-header.html             # Header component
│   ├── quiz-footer.html             # Footer component
│   ├── test-all-subjects.html       # Test/validation page
│   ├── about-us.html                # About page
│   └── 404.html                     # Error page
│
├── Subject question files (unchanged)
│   ├── Science-questions.js
│   ├── math-questions.js
│   ├── history-questions.js
│   ├── geography-questions.js
│   ├── english-questions.js
│   ├── health-questions.js
│   ├── environment-questions.js
│   ├── business-questions.js
│   ├── technology-questions.js
│   └── parenting-questions.js
│
└── Original files (kept for reference)
    ├── quiz.css                      # Original monolithic CSS (replaced by css/ modules)
    ├── quiz-master-app.js            # Original monolithic JS (replaced by js/ modules)
    ├── about-us.css                  # About page styles
    └── about-us.js                   # About page scripts
```

## 🎨 CSS Module Organization

### Base & Layout
- **base-reset.css** - Universal reset, body styles, WordPress overrides
- **layout-container.css** - Main container, page visibility controls
- **bubble-animations.css** - Animated bubble background effects

### Components
- **cards.css** - Subject cards, chapter cards, level cards
- **buttons.css** - All button styles and states
- **collapsible.css** - Expandable/collapsible sections
- **topics-badges.css** - Subject topic identification badges

### Pages
- **home-page.css** - Home page layout and subject grid
- **quiz.css** - Quiz interface (questions, answers, feedback)
- **progress-results.css** - Progress bars and result screens

### Effects
- **emojis-effects.css** - Emoji animations and effects

### Responsive
- **mobile-responsive.css** - Mobile/tablet breakpoints and overrides

### Standalone Components
- **quiz-header.css** - Header component styles
- **quiz-footer.css** - Footer component styles
- **test-all-subjects.css** - Test page styles

## 💻 JavaScript Module Organization

### Core Modules (Load in this order)

1. **quiz-state.js** (4.4 KB)
   - Global state variables
   - Constants (time limits, subjects)
   - Question bank loading

2. **quiz-storage.js** (5.5 KB)
   - `saveQuizState()` - Save to sessionStorage
   - `restoreQuizState()` - Restore on page load
   - `getCurrentScreen()` - Get active page
   - `clearQuizState()` - Clear saved data

3. **quiz-data.js** (2.7 KB)
   - `getAvailableChapters()` - Get chapters for subject
   - `initializeChapters()` - Render chapter grid
   - `initializeTimerSubjects()` - Render timer subjects

4. **quiz-timer.js** (3.2 KB)
   - `startTimer()` - Start countdown
   - `stopTimer()` - Stop countdown
   - `updateTimerDisplay()` - Update UI
   - `togglePause()` - Pause/resume
   - `handleTimeUp()` - Handle timeout

5. **quiz-animations.js** (4.3 KB)
   - `createFallingEmojis()` - Animated emojis
   - `clearFallingEmojis()` - Remove animations
   - `createCelebrationEmoji()` - Celebration effects
   - `addFloatingEmojis()` - Background emojis

6. **quiz-display.js** (5.1 KB)
   - `displayQuestion()` - Render question UI
   - `updateSubjectCardStatus()` - Visual indicators
   - Handles multiple choice and text input

7. **quiz-logic.js** (7.5 KB)
   - `startQuiz()` - Initialize quiz
   - `selectAnswer()` - Handle answer selection
   - `submitExtremeAnswer()` - Submit text answer
   - `showExtremeAnswer()` - Reveal answer
   - `nextQuestion()` - Advance to next
   - `previousQuestion()` - Go back

8. **quiz-results.js** (2.4 KB)
   - `showResults()` - Calculate and display results
   - Badge assignment
   - `retakeQuiz()` - Restart quiz

9. **quiz-navigation.js** (11 KB)
   - `showHomePage()` - Navigate home
   - `selectSubject()` - Subject selection
   - `showChapterSelection()` - Show chapters
   - `showLevelSelection()` - Show levels
   - `showTimerChallenges()` - Timer mode
   - `showPracticeMode()` - Practice mode
   - `showScreen()` - Core navigation

10. **quiz-init.js** (7.0 KB)
    - `window.onload` - Initialize app
    - History navigation (popstate)
    - Event handlers
    - Link interception

### Standalone Scripts
- **quiz-footer.js** - Footer year update
- **test-all-subjects.js** - Test page logic

## 📄 HTML File Updates

### quiz-header.html
```html
<!-- Before -->
<style>/* 174 lines of CSS */</style>

<!-- After -->
<link rel="stylesheet" href="css/quiz-header.css">
```

### quiz-footer.html
```html
<!-- Before -->
<style>/* 157 lines of CSS */</style>
<script>/* 5 lines of JS */</script>

<!-- After -->
<link rel="stylesheet" href="css/quiz-footer.css">
<script src="js/quiz-footer.js"></script>
```

### test-all-subjects.html
```html
<!-- Before -->
<style>/* 123 lines of CSS */</style>
<script>/* 88 lines of JS */</script>

<!-- After -->
<link rel="stylesheet" href="css/test-all-subjects.css">
<script src="js/test-all-subjects.js"></script>
```

## 🔧 Usage Examples

### Option 1: Use Main CSS File (Recommended)
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/quiz-main.css">
</head>
<body>
    <!-- Your content -->

    <!-- Load JS modules in order -->
    <script src="js/quiz-state.js"></script>
    <script src="js/quiz-storage.js"></script>
    <script src="js/quiz-data.js"></script>
    <script src="js/quiz-timer.js"></script>
    <script src="js/quiz-animations.js"></script>
    <script src="js/quiz-display.js"></script>
    <script src="js/quiz-logic.js"></script>
    <script src="js/quiz-results.js"></script>
    <script src="js/quiz-navigation.js"></script>
    <script src="js/quiz-init.js"></script>
</body>
</html>
```

### Option 2: Load Individual CSS Modules
```html
<!DOCTYPE html>
<html>
<head>
    <!-- Load only needed CSS -->
    <link rel="stylesheet" href="css/base-reset.css">
    <link rel="stylesheet" href="css/cards.css">
    <link rel="stylesheet" href="css/buttons.css">
    <!-- etc. -->
</head>
```

## ✅ Benefits of Modular Structure

1. **Easier Maintenance** - Each file has a single responsibility
2. **Better Organization** - Code grouped by feature/functionality
3. **Improved Readability** - Smaller files are easier to understand
4. **Faster Debugging** - Isolate issues to specific modules
5. **Team Collaboration** - Multiple developers can work simultaneously
6. **Selective Loading** - Load only what you need
7. **Better Performance** - Can optimize/minify individual modules
8. **Clear Dependencies** - Explicit load order for JS modules

## ⚠️ Important Notes

### JavaScript Load Order
The JS modules **MUST** be loaded in the specified order because:
- Later modules depend on earlier ones
- State variables must be initialized first
- Core functions must exist before they're called

### CSS Import Order
CSS modules are imported in order of:
1. Base/reset first
2. Layout second
3. Components third
4. Effects fourth
5. Responsive last (to override earlier styles)

### No Functionality Changes
- **All code logic remains unchanged**
- Only reorganized into smaller files
- Exact same functionality as before
- No new features added
- No features removed

## 📊 File Size Comparison

### Before Modularization
- `quiz.css`: 1,057 lines (monolithic)
- `quiz-master-app.js`: 1,359 lines (monolithic)
- Inline CSS in HTML: 454 lines total
- Inline JS in HTML: 93 lines total

### After Modularization
- 12 modular CSS files (avg ~200 lines each)
- 10 modular JS files (avg ~135 lines each)
- 3 standalone CSS files (header, footer, test)
- 2 standalone JS files (footer, test)
- All inline code extracted

## 🔄 Migration from Old Structure

If you're using the old monolithic files:

1. Replace `<link rel="stylesheet" href="quiz.css">` with:
   - `<link rel="stylesheet" href="css/quiz-main.css">`

2. Replace `<script src="quiz-master-app.js"></script>` with:
   ```html
   <script src="js/quiz-state.js"></script>
   <script src="js/quiz-storage.js"></script>
   <script src="js/quiz-data.js"></script>
   <script src="js/quiz-timer.js"></script>
   <script src="js/quiz-animations.js"></script>
   <script src="js/quiz-display.js"></script>
   <script src="js/quiz-logic.js"></script>
   <script src="js/quiz-results.js"></script>
   <script src="js/quiz-navigation.js"></script>
   <script src="js/quiz-init.js"></script>
   ```

3. Update component files to use external CSS/JS

## 🎯 Quick Reference

| Old File | New Location | Type |
|----------|--------------|------|
| `quiz.css` | `css/quiz-main.css` + 11 modules | CSS |
| `quiz-master-app.js` | `js/quiz-*.js` (10 modules) | JS |
| Inline styles in quiz-header.html | `css/quiz-header.css` | CSS |
| Inline styles in quiz-footer.html | `css/quiz-footer.css` | CSS |
| Inline script in quiz-footer.html | `js/quiz-footer.js` | JS |
| Inline styles in test-all-subjects.html | `css/test-all-subjects.css` | CSS |
| Inline script in test-all-subjects.html | `js/test-all-subjects.js` | JS |

---

**Last Updated:** 2025-01-11
**Version:** 2.0 (Modular)
