// Math Question Bank
// Add this file separately in WordPress or link it before app.js

const mathQuestions = {
    1: { // Chapter 1: Basic Arithmetic
        easy: [
            {topic: 'Arithmetic', emoji: '➕➖', question: '2 + 2 equals 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Arithmetic', emoji: '✖️➗', question: '5 × 3 equals 15.', options: ['True', 'False'], correct: 0},
            {topic: 'Geometry', emoji: '🔺📐', question: 'A triangle has three sides.', options: ['True', 'False'], correct: 0},
            {topic: 'Arithmetic', emoji: '💯🔢', question: '10 - 3 equals 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Geometry', emoji: '⭕🔵', question: 'A circle has corners.', options: ['True', 'False'], correct: 1},
            {topic: 'Arithmetic', emoji: '🔢💯', question: '6 ÷ 2 equals 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '📊📈', question: 'x + 5 = 10, so x = 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Geometry', emoji: '🟦📏', question: 'A square has four equal sides.', options: ['True', 'False'], correct: 0},
            {topic: 'Arithmetic', emoji: '💰💵', question: '100 cents equal 1 dollar.', options: ['True', 'False'], correct: 0},
            {topic: 'Geometry', emoji: '📐📏', question: 'A rectangle has four sides.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Arithmetic', emoji: '➕✖️', question: 'What is 12 + 8?', options: ['20', '19'], correct: 0},
            {topic: 'Geometry', emoji: '🔺📐', question: 'How many degrees in a triangle?', options: ['180°', '360°'], correct: 0},
            {topic: 'Arithmetic', emoji: '✖️🔢', question: 'What is 7 × 8?', options: ['56', '54'], correct: 0},
            {topic: 'Algebra', emoji: '📊🔢', question: 'If x = 3, what is 2x?', options: ['6', '5'], correct: 0},
            {topic: 'Geometry', emoji: '⭕📏', question: 'How many degrees in a circle?', options: ['360°', '180°'], correct: 0},
            {topic: 'Arithmetic', emoji: '➗💯', question: 'What is 100 ÷ 4?', options: ['25', '20'], correct: 0},
            {topic: 'Arithmetic', emoji: '➖🔢', question: 'What is 50 - 17?', options: ['33', '37'], correct: 0},
            {topic: 'Geometry', emoji: '🟦📐', question: 'How many sides does a pentagon have?', options: ['5', '6'], correct: 0},
            {topic: 'Algebra', emoji: '📈💯', question: 'What is 10% of 100?', options: ['10', '1'], correct: 0},
            {topic: 'Arithmetic', emoji: '✖️➕', question: 'What is 9 × 9?', options: ['81', '72'], correct: 0}
        ],
        hard: [],
        expert: [],
        extreme: []
    },
    2: { // Chapter 2: Fractions
        // Add Chapter 2 questions here
        easy: [],
        medium: [],
        hard: [],
        expert: [],
        extreme: []
    }
    // Add chapters 3, 4, 5... unlimited!
};

// Export for master file to use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mathQuestions;
}
