# Riddles Modular Structure

## Folder Structure

```
riddles-chapters/          ← Chapter data files (20 files)
riddles-js/                ← Logic modules (9 files)
riddles-css/               ← Style files (4 files)
```

## WPCode Loading Order (IMPORTANT!)

Add these files as **separate WPCode snippets** in this exact order:

### Part 1: Chapter Files (Priorities 10-29)

| Priority | File | Location | Riddles |
|----------|------|----------|---------|
| 10 | `riddles-chapters/Chapter-1-Trick-Questions.js` | Footer | 100 |
| 11 | `riddles-chapters/Chapter 2 - Puzzle Stories.js` | Footer | 100 |
| 12 | `riddles-chapters/Chapter 3 - Number Riddles.js` | Footer | 100 |
| 13 | `riddles-chapters/Chapter 4 - Classic Riddles.js` | Footer | 100 |
| 14 | `riddles-chapters/Chapter 5 - Brain Teasers.js` | Footer | 100 |
| 15 | `riddles-chapters/Chapter 6 - Funny Riddles.js` | Footer | 100 |
| 16 | `riddles-chapters/Chapter 7 - Mystery Riddles.js` | Footer | 100 |
| 17 | `riddles-chapters/Chapter 8 - Everyday Objects.js` | Footer | 100 |
| 18 | `riddles-chapters/Chapter 9 - Lateral Thinking.js` | Footer | 100 |
| 19 | `riddles-chapters/Chapter 10 - Wordplay.js` | Footer | 100 |
| 20 | `riddles-chapters/Chapter 11 - Visual Riddles.js` | Footer | 100 |
| 21 | `riddles-chapters/Chapter 12 - Pattern Recognition.js` | Footer | 100 |
| 22 | `riddles-chapters/Chapter 13 - Short & Quick.js` | Footer | 100 |
| 23 | `riddles-chapters/Chapter 14 - Long Story.js` | Footer | 100 |
| 24 | `riddles-chapters/Chapter 15 - Kids Riddles.js` | Footer | 100 |
| 25 | `riddles-chapters/Chapter 16 - Hardest Riddles.js` | Footer | 100 |
| 26 | `riddles-chapters/Chapter 17 - Mixed Bag.js` | Footer | 100 |
| 27 | `riddles-chapters/Chapter 18 - Animal Riddles.js` | Footer | 100 |
| 28 | `riddles-chapters/Chapter 19 - Paradox Riddles.js` | Footer | 100 |
| 29 | `riddles-chapters/Chapter 20 - Deduction Riddles.js` | Footer | 100 |

### Part 2: Logic Modules (Priorities 30-38)

| Priority | File | Location | Description |
|----------|------|----------|-------------|
| 30 | `riddles-js/riddles-state.js` | Footer | State variables & config |
| 31 | `riddles-js/riddles-timer.js` | Footer | Timer functionality |
| 32 | `riddles-js/riddles-storage.js` | Footer | LocalStorage management |
| 33 | `riddles-js/riddles-navigation.js` | Footer | Screen navigation |
| 34 | `riddles-js/riddles-display.js` | Footer | UI rendering |
| 35 | `riddles-js/riddles-data.js` | Footer | Data loader |
| 36 | `riddles-js/riddles-logic.js` | Footer | Game logic |
| 37 | `riddles-js/riddles-results.js` | Footer | Results display |
| 38 | `riddles-js/riddles-animations.js` | Footer | Animation effects |

## CSS Files

Add as single file in WPCode or link in HTML:

```html
<link rel="stylesheet" href="riddles-css/riddles-master.css">
```

This imports:
- `riddles-css/riddles-main.css`
- `riddles-css/riddles-progress.css`
- `riddles-css/riddles-results.css`

## Features

✅ **20 Chapters** - 2000 total riddles (100 per chapter)
✅ **5 Difficulty Levels** - Easy, Medium, Hard, Expert, Extreme
✅ **Timer Support** - Optional countdown timer
✅ **LocalStorage** - Save and resume progress
✅ **Clean Separation** - Chapters separate from logic
✅ **Modular** - Each file editable independently

## How It Works

1. **Chapter files** (1-20) populate `window.riddlesQuestions[i]` or `subjectQuestionBank['riddles'][i]`
2. **riddles-state.js** defines state variables and configuration
3. **riddles-data.js** reads chapter data and creates `riddleQuestionBank`
4. **Other modules** use `riddleQuestionBank` to display and manage riddles

## Total Files

- **20 chapter files** (riddles-chapters/)
- **9 logic modules** (riddles-js/)
- **4 CSS files** (riddles-css/)
- **Total: 33 files**

Load as **29 separate WPCode snippets** (20 chapters + 9 modules)
