/**
 * WPCode Snippet #2: Math Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer  
 * Priority: 11
 *
 * COPY ALL CODE BELOW
 */

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
        hard: [
            {topic: 'Arithmetic', emoji: '➕✖️', question: 'What is 15% of 200?', options: ['30', '25', '35'], correct: 0},
            {topic: 'Geometry', emoji: '🔺📐', question: 'What is the sum of angles in a triangle?', options: ['180°', '360°', '90°'], correct: 0},
            {topic: 'Algebra', emoji: '📊🔢', question: 'Solve: 3x + 9 = 24', options: ['x = 5', 'x = 7', 'x = 6'], correct: 0},
            {topic: 'Arithmetic', emoji: '➗💯', question: 'What is 144 ÷ 12?', options: ['12', '14', '10'], correct: 0},
            {topic: 'Geometry', emoji: '⭕📏', question: 'What is the area formula for a circle?', options: ['πr²', '2πr', 'πd'], correct: 0},
            {topic: 'Algebra', emoji: '📈🔢', question: 'What is 2³ (2 cubed)?', options: ['8', '6', '9'], correct: 0},
            {topic: 'Arithmetic', emoji: '➖💰', question: 'What is 1000 - 347?', options: ['653', '643', '663'], correct: 0},
            {topic: 'Geometry', emoji: '🟦📐', question: 'Area of rectangle = ?', options: ['Length × Width', 'Length + Width', 'Length ÷ Width'], correct: 0},
            {topic: 'Algebra', emoji: '📊💯', question: 'What is √64?', options: ['8', '7', '9'], correct: 0},
            {topic: 'Arithmetic', emoji: '✖️➕', question: 'What is 25 × 4?', options: ['100', '90', '110'], correct: 0}
        ],
        expert: [
            {topic: 'Arithmetic', emoji: '➕➖', question: 'What is 20% of 500?', options: ['100', '80', '120', '90'], correct: 0},
            {topic: 'Geometry', emoji: '🔺📐', question: 'What is the Pythagorean theorem?', options: ['a² + b² = c²', 'a + b = c', 'a² = b²', 'abc = 180'], correct: 0},
            {topic: 'Algebra', emoji: '📊📈', question: 'Solve: 2x - 5 = 11', options: ['x = 8', 'x = 6', 'x = 10', 'x = 7'], correct: 0},
            {topic: 'Arithmetic', emoji: '✖️➗', question: 'What is 225 ÷ 15?', options: ['15', '20', '10', '12'], correct: 0},
            {topic: 'Geometry', emoji: '⭕📏', question: 'Circumference of circle = ?', options: ['2πr', 'πr²', 'πd²', 'r²'], correct: 0},
            {topic: 'Algebra', emoji: '🔢💯', question: 'What is 4² + 3²?', options: ['25', '20', '30', '16'], correct: 0},
            {topic: 'Arithmetic', emoji: '💰💵', question: 'Convert 3/4 to decimal', options: ['0.75', '0.50', '0.80', '0.70'], correct: 0},
            {topic: 'Geometry', emoji: '🔺📐', question: 'Sum of angles in a quadrilateral?', options: ['360°', '180°', '540°', '270°'], correct: 0},
            {topic: 'Algebra', emoji: '📈🔢', question: 'What is √100?', options: ['10', '100', '50', '20'], correct: 0},
            {topic: 'Arithmetic', emoji: '➕✖️', question: 'What is 12 × 12?', options: ['144', '124', '134', '154'], correct: 0}
        ],
        extreme: [
            {topic: 'Arithmetic', emoji: '➕➖', question: 'Calculate 17.5% of 400', answer: '70'},
            {topic: 'Geometry', emoji: '🔺📐', question: 'Write the formula for volume of a cube', answer: 'side³ or side cubed or s³'},
            {topic: 'Algebra', emoji: '📊📈', question: 'Solve: x² = 49', answer: 'x = ±7 or x = 7 and -7'},
            {topic: 'Arithmetic', emoji: '✖️➗', question: 'Calculate 15 × 15', answer: '225'},
            {topic: 'Geometry', emoji: '⭕📏', question: 'Write the formula for area of a triangle', answer: '½ × base × height or (base × height)/2'},
            {topic: 'Algebra', emoji: '🔢💯', question: 'What is 5³ (5 cubed)?', answer: '125'},
            {topic: 'Arithmetic', emoji: '💰💵', question: 'Convert 7/8 to decimal', answer: '0.875'},
            {topic: 'Geometry', emoji: '🔺📐', question: 'What is the sum of interior angles in a pentagon?', answer: '540° or 540 degrees'},
            {topic: 'Algebra', emoji: '📈🔢', question: 'What is √144?', answer: '12'},
            {topic: 'Arithmetic', emoji: '➕✖️', question: 'Calculate 111 × 9', answer: '999'}
        ]
    },
    2: { // Chapter 2: Fractions
        easy: [
            {topic: 'Fractions', emoji: '🍕➗', question: '1/2 is equal to 0.5', options: ['True', 'False'], correct: 0},
            {topic: 'Fractions', emoji: '🥧🔢', question: '1/4 is larger than 1/2', options: ['True', 'False'], correct: 1},
            {topic: 'Fractions', emoji: '🍰➗', question: '2/4 is the same as 1/2', options: ['True', 'False'], correct: 0},
            {topic: 'Fractions', emoji: '🍕💯', question: '3/3 equals 1', options: ['True', 'False'], correct: 0},
            {topic: 'Fractions', emoji: '🥧🔢', question: '1/2 + 1/2 equals 1', options: ['True', 'False'], correct: 0},
            {topic: 'Fractions', emoji: '🍰➕', question: '1/4 + 1/4 equals 1/2', options: ['True', 'False'], correct: 0},
            {topic: 'Fractions', emoji: '🍕🔢', question: '3/4 is less than 1', options: ['True', 'False'], correct: 0},
            {topic: 'Fractions', emoji: '🥧➗', question: '1/3 is smaller than 1/2', options: ['True', 'False'], correct: 0},
            {topic: 'Fractions', emoji: '🍰💯', question: '5/5 equals 1', options: ['True', 'False'], correct: 0},
            {topic: 'Fractions', emoji: '🍕➕', question: '1/2 + 1/4 equals 3/4', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Fractions', emoji: '🍕➗', question: 'What is 1/2 + 1/3?', options: ['5/6', '2/5', '3/5'], correct: 0},
            {topic: 'Fractions', emoji: '🥧🔢', question: 'What is 3/4 - 1/4?', options: ['1/2', '2/4', '1/4'], correct: 0},
            {topic: 'Fractions', emoji: '🍰➕', question: 'What is 2/3 × 3/4?', options: ['1/2', '5/7', '6/12'], correct: 0},
            {topic: 'Fractions', emoji: '🍕💯', question: 'What is 1/2 ÷ 1/4?', options: ['2', '1/8', '4'], correct: 0},
            {topic: 'Fractions', emoji: '🥧🔢', question: 'Simplify: 4/8', options: ['1/2', '2/4', '1/4'], correct: 0},
            {topic: 'Fractions', emoji: '🍰➗', question: 'What is 2/5 + 1/5?', options: ['3/5', '3/10', '1/2'], correct: 0},
            {topic: 'Fractions', emoji: '🍕🔢', question: 'What is 5/6 - 1/6?', options: ['2/3', '4/6', '1/2'], correct: 0},
            {topic: 'Fractions', emoji: '🥧➕', question: 'What is 1/3 × 2?', options: ['2/3', '1/6', '3/2'], correct: 0},
            {topic: 'Fractions', emoji: '🍰💯', question: 'Simplify: 6/9', options: ['2/3', '3/4', '1/2'], correct: 0},
            {topic: 'Fractions', emoji: '🍕➗', question: 'What is 3/4 ÷ 1/2?', options: ['3/2', '1/2', '6/4'], correct: 0}
        ],
        hard: [
            {topic: 'Fractions', emoji: '🍕➗', question: 'What is 2/3 + 3/4?', options: ['17/12', '5/7', '1'], correct: 0},
            {topic: 'Fractions', emoji: '🥧🔢', question: 'What is 5/6 - 2/3?', options: ['1/6', '3/9', '1/3'], correct: 0},
            {topic: 'Fractions', emoji: '🍰➕', question: 'What is 3/5 × 5/6?', options: ['1/2', '15/30', '8/11'], correct: 0},
            {topic: 'Fractions', emoji: '🍕💯', question: 'What is 3/4 ÷ 2/3?', options: ['9/8', '6/12', '1'], correct: 0},
            {topic: 'Fractions', emoji: '🥧🔢', question: 'Simplify: 12/16', options: ['3/4', '6/8', '2/3'], correct: 0},
            {topic: 'Fractions', emoji: '🍰➗', question: 'What is 4/5 + 1/3?', options: ['17/15', '5/8', '1'], correct: 0},
            {topic: 'Fractions', emoji: '🍕🔢', question: 'What is 7/8 - 3/4?', options: ['1/8', '4/12', '1/4'], correct: 0},
            {topic: 'Fractions', emoji: '🥧➕', question: 'What is 2/3 × 9/10?', options: ['3/5', '18/30', '11/13'], correct: 0},
            {topic: 'Fractions', emoji: '🍰💯', question: 'Simplify: 15/20', options: ['3/4', '5/10', '1/2'], correct: 0},
            {topic: 'Fractions', emoji: '🍕➗', question: 'What is 5/6 ÷ 5/12?', options: ['2', '25/72', '1/2'], correct: 0}
        ],
        expert: [
            {topic: 'Fractions', emoji: '🍕➗', question: 'What is 7/8 + 5/6?', options: ['41/24', '12/14', '1', '2'], correct: 0},
            {topic: 'Fractions', emoji: '🥧🔢', question: 'What is 11/12 - 3/8?', options: ['13/24', '8/20', '1/2', '1/3'], correct: 0},
            {topic: 'Fractions', emoji: '🍰➕', question: 'What is 4/7 × 7/8?', options: ['1/2', '28/56', '11/15', '3/4'], correct: 0},
            {topic: 'Fractions', emoji: '🍕💯', question: 'What is 5/6 ÷ 5/9?', options: ['3/2', '25/54', '1', '2/3'], correct: 0},
            {topic: 'Fractions', emoji: '🥧🔢', question: 'Simplify: 24/32', options: ['3/4', '12/16', '6/8', '1/2'], correct: 0},
            {topic: 'Fractions', emoji: '🍰➗', question: 'What is 5/8 + 3/10?', options: ['37/40', '8/18', '1', '1/2'], correct: 0},
            {topic: 'Fractions', emoji: '🍕🔢', question: 'What is 13/15 - 2/5?', options: ['7/15', '11/20', '1/3', '1/2'], correct: 0},
            {topic: 'Fractions', emoji: '🥧➕', question: 'What is 3/8 × 16/21?', options: ['2/7', '48/168', '1/3', '1/4'], correct: 0},
            {topic: 'Fractions', emoji: '🍰💯', question: 'Simplify: 36/48', options: ['3/4', '18/24', '9/12', '6/8'], correct: 0},
            {topic: 'Fractions', emoji: '🍕➗', question: 'What is 7/10 ÷ 14/15?', options: ['3/4', '98/150', '1/2', '2/3'], correct: 0}
        ],
        extreme: [
            {topic: 'Fractions', emoji: '🍕➗', question: 'Simplify: (2/3 + 1/4) × 3/5', answer: '11/20'},
            {topic: 'Fractions', emoji: '🥧🔢', question: 'Calculate: (5/6 - 1/3) ÷ 1/2', answer: '1'},
            {topic: 'Fractions', emoji: '🍰➕', question: 'Solve for x: x/4 = 3/8', answer: 'x = 3/2 or 3/2 or 1.5'},
            {topic: 'Fractions', emoji: '🍕💯', question: 'What is (3/4)²?', answer: '9/16'},
            {topic: 'Fractions', emoji: '🥧🔢', question: 'Simplify: (2/5 × 5/8) + 1/4', answer: '1/2'},
            {topic: 'Fractions', emoji: '🍰➗', question: 'Calculate: 1 - (2/3 + 1/6)', answer: '1/6'},
            {topic: 'Fractions', emoji: '🍕🔢', question: 'Solve for x: 2x/3 = 4/9', answer: 'x = 2/3 or 2/3'},
            {topic: 'Fractions', emoji: '🥧➕', question: 'What is the reciprocal of 3/4?', answer: '4/3'},
            {topic: 'Fractions', emoji: '🍰💯', question: 'Simplify: (5/6 ÷ 2/3) - 1/4', answer: '1'},
            {topic: 'Fractions', emoji: '🍕➗', question: 'Convert mixed number 2 2/3 to improper fraction', answer: '8/3'}
        ]
    }
    // Add chapters 3, 4, 5... unlimited!
};
