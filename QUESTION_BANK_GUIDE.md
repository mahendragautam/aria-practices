# Question Bank Guide

## 📝 How to Add New Questions

### Step 1: Locate the Question Bank

Open `script.js` and find the `subjectQuestionBank` object (around line 53).

### Step 2: Add Questions to Existing Chapters

```javascript
subjectQuestionBank.science[1].easy.push({
    topic: 'Biology',
    emoji: '🧬🔬',
    question: 'Your new question here?',
    options: ['True', 'False'],
    correct: 0  // Index of correct answer (0 = first option)
});
```

### Step 3: Question Format by Level

#### Easy Level (True/False)
```javascript
{
    topic: 'Physics',
    emoji: '⚡🔋',
    question: 'Light travels faster than sound.',
    options: ['True', 'False'],
    correct: 0
}
```

#### Medium Level (2 Options)
```javascript
{
    topic: 'Chemistry',
    emoji: '⚗️🧪',
    question: 'What is the lightest element?',
    options: ['Hydrogen', 'Helium'],
    correct: 0
}
```

#### Hard Level (3 Options)
```javascript
{
    topic: 'Astronomy',
    emoji: '🌌🌟',
    question: 'What galaxy do we live in?',
    options: ['Milky Way', 'Andromeda', 'Triangulum'],
    correct: 0
}
```

#### Expert Level (4 Options)
```javascript
{
    topic: 'Biology',
    emoji: '🧬🔬',
    question: 'How many chromosomes do humans have?',
    options: ['46', '23', '48', '92'],
    correct: 0
}
```

#### Extreme Level (Text Answer)
```javascript
{
    topic: 'Physics',
    emoji: '⚛️💫',
    question: 'What is the quantum of light energy called?',
    answer: 'Photon'  // Note: 'answer' instead of 'options'
}
```

## ✅ Important Notes

1. **No Code Changes Needed!**
   - Just add questions to the question bank
   - Everything else is automatic!

2. **Chapter Numbers**
   - Change `[1]` to `[2]`, `[3]`, etc. for different chapters
   - Each subject has 20 chapters (1-20)

3. **Subjects Available**
   - science, math, history, geography, english
   - health, environment, business, technology, parenting

4. **Topic Names Must Match CSS Classes**
   - Example: 'Biology' → `.topic-biology` in CSS
   - Use lowercase in CSS, capitalize in question bank

## 🎨 Emoji Issue Fix

### Problem
Emojis from Canva show as black question marks (❓)

### Why This Happens
1. Character encoding mismatch
2. HTML entity conversion issues
3. Browser font rendering problems

### Solution
Use working emojis list in `script.js` around line 1162:

```javascript
const workingEmojis = {
    correct: ['⭐', '✨', '⚡', '❤️', '💙', '💚', '💛', '💜', '✅', '✔️', '☀️'],
    incorrect: ['💭', '🤔', '📚', '🔍', '💡', '🧠', '❓', '🤷', '📝', '📖']
};
```

**Key Fix:**
```javascript
// ✅ CORRECT - Direct text assignment
emoji.textContent = selectedEmoji;

// ❌ WRONG - HTML conversion
emoji.innerHTML = `&#${selectedEmoji.codePointAt(0)};`;
```

## 📊 Example: Adding 10 New Questions

```javascript
// Science Chapter 4, Easy Level
const newQuestions = [
    {topic: 'Biology', emoji: '🧬🔬', question: 'Cells are the basic unit of life.', options: ['True', 'False'], correct: 0},
    {topic: 'Physics', emoji: '⚡🔋', question: 'Electricity flows from negative to positive.', options: ['True', 'False'], correct: 1},
    {topic: 'Chemistry', emoji: '⚗️🧪', question: 'Gold is a chemical element.', options: ['True', 'False'], correct: 0},
    {topic: 'Astronomy', emoji: '🌍🌙', question: 'The Moon has its own light source.', options: ['True', 'False'], correct: 1},
    {topic: 'Biology', emoji: '🫀❤️', question: 'The heart pumps blood.', options: ['True', 'False'], correct: 0},
    {topic: 'Physics', emoji: '🌡️🔥', question: 'Temperature is measured in meters.', options: ['True', 'False'], correct: 1},
    {topic: 'Chemistry', emoji: '💎💍', question: 'Diamonds are made of carbon.', options: ['True', 'False'], correct: 0},
    {topic: 'Astronomy', emoji: '☀️⭐', question: 'The Sun is the closest star to Earth.', options: ['True', 'False'], correct: 0},
    {topic: 'Biology', emoji: '🦴🦷', question: 'Bones can repair themselves.', options: ['True', 'False'], correct: 0},
    {topic: 'Physics', emoji: '🔊🎵', question: 'Sound travels in waves.', options: ['True', 'False'], correct: 0}
];

// Add all at once
newQuestions.forEach(q => subjectQuestionBank.science[4].easy.push(q));
```

## 🚀 Quick Start

1. Open `script.js`
2. Find: `subjectQuestionBank`
3. Choose: subject, chapter, level
4. Add: your questions using the format above
5. Save and refresh browser!

That's it! No other code changes needed! 🎉
