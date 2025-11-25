# Riddles Modular Structure

## WPCode Loading Order (IMPORTANT!)

Add these files as **separate WPCode snippets** in this exact order:

| Priority | File | Type | Location | Description |
|----------|------|------|----------|-------------|
| 10-29 | `Chapter-1-Trick-Questions.js` through `Chapter 20-Deduction Riddles.js` | JavaScript | Footer | 20 riddle chapter files (100 riddles each) |
| 30 | `riddles-state.js` | JavaScript | Footer | State variables & config |
| 31 | `riddles-timer.js` | JavaScript | Footer | Timer functionality |
| 32 | `riddles-storage.js` | JavaScript | Footer | LocalStorage management |
| 33 | `riddles-navigation.js` | JavaScript | Footer | Screen navigation |
| 34 | `riddles-display.js` | JavaScript | Footer | UI rendering |
| 35 | `riddles-data.js` | JavaScript | Footer | Data loader |
| 36 | `riddles-logic.js` | JavaScript | Footer | Game logic |
| 37 | `riddles-results.js` | JavaScript | Footer | Results display |
| 38 | `riddles-animations.js` | JavaScript | Footer | Animation effects |

## Chapter Files (Priorities 10-29)

| Priority | File | Riddles |
|----------|------|---------|
| 10 | `Chapter-1-Trick-Questions.js` | 100 riddles |
| 11 | `Chapter 2 - Puzzle Stories.js` | 100 riddles |
| 12 | `Chapter 3 - Number Riddles.js` | 100 riddles |
| 13 | `Chapter 4 - Classic Riddles.js` | 100 riddles |
| 14 | `Chapter 5 - Brain Teasers.js` | 100 riddles |
| 15 | `Chapter 6 - Funny Riddles.js` | 100 riddles |
| 16 | `Chapter 7 - Mystery Riddles.js` | 100 riddles |
| 17 | `Chapter 8 - Everyday Objects.js` | 100 riddles |
| 18 | `Chapter 9 - Lateral Thinking.js` | 100 riddles |
| 19 | `Chapter 10 - Wordplay.js` | 100 riddles |
| 20 | `Chapter 11 - Visual Riddles.js` | 100 riddles |
| 21 | `Chapter 12 - Pattern Recognition.js` | 100 riddles |
| 22 | `Chapter 13 - Short & Quick.js` | 100 riddles |
| 23 | `Chapter 14 - Long Story.js` | 100 riddles |
| 24 | `Chapter 15 - Kids Riddles.js` | 100 riddles |
| 25 | `Chapter 16 - Hardest Riddles.js` | 100 riddles |
| 26 | `Chapter 17 - Mixed Bag.js` | 100 riddles |
| 27 | `Chapter 18 - Animal Riddles.js` | 100 riddles |
| 28 | `Chapter 19 - Paradox Riddles.js` | 100 riddles |
| 29 | `Chapter 20 - Deduction Riddles.js` | 100 riddles |

## Features

✅ **20 Chapters** - 2000 total riddles (100 per chapter)
✅ **5 Difficulty Levels** - Easy, Medium, Hard, Expert, Extreme
✅ **Timer Support** - Optional countdown timer
✅ **LocalStorage** - Save and resume progress
✅ **Modular** - Each file can be edited independently
✅ **Separate from Quiz** - No need to touch quiz-master-app.js

## File Structure

```
riddles-js/
├── Chapter-1-Trick-Questions.js          (100 riddles)
├── Chapter 2 - Puzzle Stories.js          (100 riddles)
├── ... (18 more chapter files)
├── Chapter 20 - Deduction Riddles.js     (100 riddles)
├── riddles-state.js                       (config & state)
├── riddles-timer.js                       (timer logic)
├── riddles-storage.js                     (localStorage)
├── riddles-navigation.js                  (navigation)
├── riddles-display.js                     (UI rendering)
├── riddles-data.js                        (data loader)
├── riddles-logic.js                       (game logic)
├── riddles-results.js                     (results screen)
└── riddles-animations.js                  (animations)
```

## CSS Files (Load separately)

```
riddles-css/
├── riddles-master.css     (imports all below)
├── riddles-main.css
├── riddles-progress.css
└── riddles-results.css
```

## How It Works

1. **Chapter files** (1-20) populate `window.riddlesQuestions[i]` or `subjectQuestionBank['riddles'][i]`
2. **riddles-state.js** defines state variables and configuration
3. **riddles-data.js** reads chapter data and creates `riddleQuestionBank`
4. **Other modules** use `riddleQuestionBank` to display and manage riddles

## Integration

`quiz-master-app.js` calls `showRiddles()` → which calls `showRiddlesHome()` from `riddles-navigation.js`.

No changes needed in quiz-master-app.js!
