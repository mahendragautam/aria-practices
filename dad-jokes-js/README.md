# Dad Jokes Modular Structure

## WPCode Loading Order (IMPORTANT!)

Add these files as **separate WPCode snippets** in this exact order:

| Priority | File | Type | Location | Description |
|----------|------|------|----------|-------------|
| 10 | `Category-1-Classic-Dad-Jokes.js` | JavaScript | Footer | 110 classic jokes |
| 11 | `Category-2-Tech-Geek-Dad-Jokes.js` | JavaScript | Footer | 100 tech/geek jokes |
| 12 | `Category-3-Parenting-Dad-Jokes.js` | JavaScript | Footer | 100 parenting jokes |
| 13 | `Category-4-Work-Office-Dad-Jokes.js` | JavaScript | Footer | 120 work/office jokes |
| 14 | `dad-jokes-data.js` | JavaScript | Footer | Data loader & config |
| 15 | `dad-jokes-logic.js` | JavaScript | Footer | Display & navigation logic |

## Features

✅ **Random Mix** - Combines ALL jokes from categories 1-4 (no limit!)
✅ **Previous Button** - Navigate backward through joke sets
✅ **Random Shuffle** - Randomizes jokes on each session
✅ **Smooth Scrolling** - Smooth scroll to top on navigation
✅ **Modular** - Each file can be edited independently
✅ **Separate from Quiz** - No need to touch quiz-master-app.js

## File Structure

```
dad-jokes-js/
├── Category-1-Classic-Dad-Jokes.js    (110 jokes)
├── Category-2-Tech-Geek-Dad-Jokes.js  (100 jokes)
├── Category-3-Parenting-Dad-Jokes.js  (100 jokes)
├── Category-4-Work-Office-Dad-Jokes.js (120 jokes)
├── dad-jokes-data.js                   (data loader)
└── dad-jokes-logic.js                  (display & logic)
```

## How It Works

1. **Category files** (1-4) populate `window.dadJokesQuestions[1-4]`
2. **dad-jokes-data.js** reads from `window.dadJokesQuestions` and creates `dadJokesData`
3. **dad-jokes-logic.js** uses `dadJokesData` to display jokes

## Random Mix Logic

Category 5 (Random Mix) does NOT load from a file. Instead, it:
- Combines ALL jokes from categories 1-4 dynamically
- Shuffles them randomly each time
- Total jokes = sum of all category jokes (430+ jokes!)

## Integration

`quiz-master-app.js` calls `showDadJokes()` → which calls `showDadJokesHome()` from `dad-jokes-logic.js`.

No changes needed in quiz-master-app.js!
