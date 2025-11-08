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
    },
    3: { // Chapter 3: Decimals
        easy: [
            {topic: 'Decimals', emoji: '🔢💯', question: '0.5 is equal to 1/2.', options: ['True', 'False'], correct: 0},
            {topic: 'Decimals', emoji: '💰💵', question: '0.25 equals one quarter.', options: ['True', 'False'], correct: 0},
            {topic: 'Decimals', emoji: '🔢📊', question: '0.1 is larger than 0.2.', options: ['True', 'False'], correct: 1},
            {topic: 'Decimals', emoji: '💯📈', question: '0.75 equals three quarters.', options: ['True', 'False'], correct: 0},
            {topic: 'Decimals', emoji: '🔢💰', question: '0.01 equals one cent.', options: ['True', 'False'], correct: 0},
            {topic: 'Decimals', emoji: '📊💵', question: '1.0 equals 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Decimals', emoji: '🔢🎯', question: '0.3 + 0.3 = 0.6.', options: ['True', 'False'], correct: 0},
            {topic: 'Decimals', emoji: '💯💰', question: '0.9 is less than 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Decimals', emoji: '📈🔢', question: '0.5 + 0.5 = 1.0.', options: ['True', 'False'], correct: 0},
            {topic: 'Decimals', emoji: '💵📊', question: '0.10 is the same as 0.1.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Decimals', emoji: '🔢💯', question: 'What is 0.5 + 0.3?', options: ['0.8', '0.7'], correct: 0},
            {topic: 'Decimals', emoji: '💰💵', question: 'What is 1.5 - 0.7?', options: ['0.8', '0.9'], correct: 0},
            {topic: 'Decimals', emoji: '🔢📊', question: 'What is 0.4 × 5?', options: ['2.0', '2.5'], correct: 0},
            {topic: 'Decimals', emoji: '💯📈', question: 'What is 2.5 ÷ 5?', options: ['0.5', '0.4'], correct: 0},
            {topic: 'Decimals', emoji: '🔢💰', question: 'Round 3.7 to nearest whole', options: ['4', '3'], correct: 0},
            {topic: 'Decimals', emoji: '📊💵', question: 'What is 0.6 + 0.9?', options: ['1.5', '1.4'], correct: 0},
            {topic: 'Decimals', emoji: '🔢🎯', question: 'What is 1.2 × 3?', options: ['3.6', '3.5'], correct: 0},
            {topic: 'Decimals', emoji: '💯💰', question: 'What is 4.8 ÷ 2?', options: ['2.4', '2.5'], correct: 0},
            {topic: 'Decimals', emoji: '📈🔢', question: 'What is 0.25 × 4?', options: ['1.0', '0.9'], correct: 0},
            {topic: 'Decimals', emoji: '💵📊', question: 'Round 5.4 to nearest whole', options: ['5', '6'], correct: 0}
        ],
        hard: [
            {topic: 'Decimals', emoji: '🔢💯', question: 'What is 3.45 + 2.67?', options: ['6.12', '6.02', '6.22'], correct: 0},
            {topic: 'Decimals', emoji: '💰💵', question: 'What is 7.5 - 3.75?', options: ['3.75', '3.85', '3.65'], correct: 0},
            {topic: 'Decimals', emoji: '🔢📊', question: 'What is 0.25 × 12?', options: ['3.0', '2.5', '3.5'], correct: 0},
            {topic: 'Decimals', emoji: '💯📈', question: 'What is 8.4 ÷ 0.4?', options: ['21', '20', '22'], correct: 0},
            {topic: 'Decimals', emoji: '🔢💰', question: 'Round 12.649 to 2 decimal places', options: ['12.65', '12.64', '12.66'], correct: 0},
            {topic: 'Decimals', emoji: '📊💵', question: 'What is 1.5 × 2.5?', options: ['3.75', '3.50', '4.0'], correct: 0},
            {topic: 'Decimals', emoji: '🔢🎯', question: 'What is 9.6 ÷ 3?', options: ['3.2', '3.3', '3.1'], correct: 0},
            {topic: 'Decimals', emoji: '💯💰', question: 'What is 0.125 + 0.375?', options: ['0.5', '0.4', '0.6'], correct: 0},
            {topic: 'Decimals', emoji: '📈🔢', question: 'Round 99.999 to nearest whole', options: ['100', '99', '101'], correct: 0},
            {topic: 'Decimals', emoji: '💵📊', question: 'What is 2.5 × 0.8?', options: ['2.0', '1.8', '2.2'], correct: 0}
        ],
        expert: [
            {topic: 'Decimals', emoji: '🔢💯', question: 'What is 15.75 + 23.68?', options: ['39.43', '39.33', '39.53', '39.23'], correct: 0},
            {topic: 'Decimals', emoji: '💰💵', question: 'What is 50.5 - 27.85?', options: ['22.65', '22.75', '22.55', '22.85'], correct: 0},
            {topic: 'Decimals', emoji: '🔢📊', question: 'What is 3.75 × 1.6?', options: ['6.0', '5.5', '6.5', '5.8'], correct: 0},
            {topic: 'Decimals', emoji: '💯📈', question: 'What is 12.6 ÷ 0.3?', options: ['42', '40', '44', '38'], correct: 0},
            {topic: 'Decimals', emoji: '🔢💰', question: 'Round 45.7654 to 3 decimal places', options: ['45.765', '45.766', '45.764', '45.767'], correct: 0},
            {topic: 'Decimals', emoji: '📊💵', question: 'What is 0.625 × 8?', options: ['5.0', '4.5', '5.5', '4.8'], correct: 0},
            {topic: 'Decimals', emoji: '🔢🎯', question: 'What is 18.9 ÷ 0.9?', options: ['21', '20', '22', '19'], correct: 0},
            {topic: 'Decimals', emoji: '💯💰', question: 'What is (2.5)²?', options: ['6.25', '6.5', '6.0', '5.75'], correct: 0},
            {topic: 'Decimals', emoji: '📈🔢', question: 'Express 7/8 as a decimal', options: ['0.875', '0.785', '0.857', '0.825'], correct: 0},
            {topic: 'Decimals', emoji: '💵📊', question: 'What is 0.2 × 0.2?', options: ['0.04', '0.4', '0.2', '0.02'], correct: 0}
        ],
        extreme: [
            {topic: 'Decimals', emoji: '🔢💯', question: 'Calculate: (3.5 × 2.4) + 1.75', answer: '10.15'},
            {topic: 'Decimals', emoji: '💰💵', question: 'What is 100 ÷ 0.25?', answer: '400'},
            {topic: 'Decimals', emoji: '🔢📊', question: 'Round 0.0678 to 2 significant figures', answer: '0.068'},
            {topic: 'Decimals', emoji: '💯📈', question: 'Calculate: 5.5² - 2.5²', answer: '24'},
            {topic: 'Decimals', emoji: '🔢💰', question: 'Convert 3/16 to decimal', answer: '0.1875'},
            {topic: 'Decimals', emoji: '📊💵', question: 'What is (0.5)³?', answer: '0.125'},
            {topic: 'Decimals', emoji: '🔢🎯', question: 'Calculate: 12.5% of 80', answer: '10'},
            {topic: 'Decimals', emoji: '💯💰', question: 'What is √2.25?', answer: '1.5'},
            {topic: 'Decimals', emoji: '📈🔢', question: 'Round 789.9995 to nearest hundredth', answer: '790.00'},
            {topic: 'Decimals', emoji: '💵📊', question: 'Calculate: 0.1 × 0.1 × 0.1', answer: '0.001'}
        ]
    },
    4: { // Chapter 4: Percentages
        easy: [
            {topic: 'Percentages', emoji: '💯📊', question: '50% equals one half.', options: ['True', 'False'], correct: 0},
            {topic: 'Percentages', emoji: '📈🔢', question: '100% equals the whole.', options: ['True', 'False'], correct: 0},
            {topic: 'Percentages', emoji: '💯💰', question: '25% equals one quarter.', options: ['True', 'False'], correct: 0},
            {topic: 'Percentages', emoji: '📊🎯', question: '10% of 100 is 10.', options: ['True', 'False'], correct: 0},
            {topic: 'Percentages', emoji: '💯📈', question: '75% equals three quarters.', options: ['True', 'False'], correct: 0},
            {topic: 'Percentages', emoji: '🔢💰', question: '0% means nothing.', options: ['True', 'False'], correct: 0},
            {topic: 'Percentages', emoji: '📊💯', question: '20% of 50 is 10.', options: ['True', 'False'], correct: 0},
            {topic: 'Percentages', emoji: '📈🎯', question: '1% of 100 is 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Percentages', emoji: '💯🔢', question: '50% of 20 is 10.', options: ['True', 'False'], correct: 0},
            {topic: 'Percentages', emoji: '📊💰', question: '200% is twice the amount.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Percentages', emoji: '💯📊', question: 'What is 25% of 200?', options: ['50', '40'], correct: 0},
            {topic: 'Percentages', emoji: '📈🔢', question: 'What is 10% of 500?', options: ['50', '60'], correct: 0},
            {topic: 'Percentages', emoji: '💯💰', question: 'What is 75% of 40?', options: ['30', '28'], correct: 0},
            {topic: 'Percentages', emoji: '📊🎯', question: 'What is 20% of 150?', options: ['30', '25'], correct: 0},
            {topic: 'Percentages', emoji: '💯📈', question: 'What is 50% of 80?', options: ['40', '45'], correct: 0},
            {topic: 'Percentages', emoji: '🔢💰', question: 'What is 15% of 100?', options: ['15', '20'], correct: 0},
            {topic: 'Percentages', emoji: '📊💯', question: 'What is 5% of 200?', options: ['10', '5'], correct: 0},
            {topic: 'Percentages', emoji: '📈🎯', question: 'What is 30% of 50?', options: ['15', '10'], correct: 0},
            {topic: 'Percentages', emoji: '💯🔢', question: 'What is 40% of 25?', options: ['10', '12'], correct: 0},
            {topic: 'Percentages', emoji: '📊💰', question: 'What is 60% of 30?', options: ['18', '20'], correct: 0}
        ],
        hard: [
            {topic: 'Percentages', emoji: '💯📊', question: 'What is 35% of 240?', options: ['84', '80', '88'], correct: 0},
            {topic: 'Percentages', emoji: '📈🔢', question: 'What is 12.5% of 800?', options: ['100', '90', '110'], correct: 0},
            {topic: 'Percentages', emoji: '💯💰', question: 'Increase 50 by 20%', options: ['60', '55', '65'], correct: 0},
            {topic: 'Percentages', emoji: '📊🎯', question: 'Decrease 120 by 25%', options: ['90', '85', '95'], correct: 0},
            {topic: 'Percentages', emoji: '💯📈', question: 'What is 45% of 180?', options: ['81', '75', '85'], correct: 0},
            {topic: 'Percentages', emoji: '🔢💰', question: 'What % is 30 of 150?', options: ['20%', '15%', '25%'], correct: 0},
            {topic: 'Percentages', emoji: '📊💯', question: 'What is 17.5% of 400?', options: ['70', '65', '75'], correct: 0},
            {topic: 'Percentages', emoji: '📈🎯', question: 'Increase 80 by 15%', options: ['92', '90', '95'], correct: 0},
            {topic: 'Percentages', emoji: '💯🔢', question: 'What % is 25 of 200?', options: ['12.5%', '10%', '15%'], correct: 0},
            {topic: 'Percentages', emoji: '📊💰', question: 'Decrease 200 by 30%', options: ['140', '130', '150'], correct: 0}
        ],
        expert: [
            {topic: 'Percentages', emoji: '💯📊', question: 'What is 37.5% of 480?', options: ['180', '170', '190', '175'], correct: 0},
            {topic: 'Percentages', emoji: '📈🔢', question: 'Increase 250 by 18%', options: ['295', '285', '305', '300'], correct: 0},
            {topic: 'Percentages', emoji: '💯💰', question: 'Decrease 360 by 22.5%', options: ['279', '270', '285', '275'], correct: 0},
            {topic: 'Percentages', emoji: '📊🎯', question: 'What % is 45 of 180?', options: ['25%', '20%', '30%', '22%'], correct: 0},
            {topic: 'Percentages', emoji: '💯📈', question: 'What is 62.5% of 160?', options: ['100', '95', '105', '110'], correct: 0},
            {topic: 'Percentages', emoji: '🔢💰', question: '40 is what % of 320?', options: ['12.5%', '10%', '15%', '13%'], correct: 0},
            {topic: 'Percentages', emoji: '📊💯', question: 'Increase 150 by 33.33%', options: ['200', '190', '210', '195'], correct: 0},
            {topic: 'Percentages', emoji: '📈🎯', question: 'What is 87.5% of 240?', options: ['210', '200', '220', '215'], correct: 0},
            {topic: 'Percentages', emoji: '💯🔢', question: 'Decrease 500 by 16%', options: ['420', '410', '430', '425'], correct: 0},
            {topic: 'Percentages', emoji: '📊💰', question: 'What % is 72 of 288?', options: ['25%', '20%', '30%', '22%'], correct: 0}
        ],
        extreme: [
            {topic: 'Percentages', emoji: '💯📊', question: 'A price increased from $80 to $100. What is the % increase?', answer: '25% or 25'},
            {topic: 'Percentages', emoji: '📈🔢', question: 'What is 33.33% of 270?', answer: '90'},
            {topic: 'Percentages', emoji: '💯💰', question: 'After a 40% discount, item costs $120. What was original price?', answer: '200 or $200'},
            {topic: 'Percentages', emoji: '📊🎯', question: 'Calculate 15% of 15% of 1000', answer: '22.5'},
            {topic: 'Percentages', emoji: '💯📈', question: 'A value decreased from 500 to 400. What % decrease?', answer: '20% or 20'},
            {topic: 'Percentages', emoji: '🔢💰', question: 'What is 125% of 360?', answer: '450'},
            {topic: 'Percentages', emoji: '📊💯', question: 'If 35% of a number is 70, what is the number?', answer: '200'},
            {topic: 'Percentages', emoji: '📈🎯', question: 'Increase 80 by 50% then decrease by 20%', answer: '96'},
            {topic: 'Percentages', emoji: '💯🔢', question: 'What % of 250 is 87.5?', answer: '35% or 35'},
            {topic: 'Percentages', emoji: '📊💰', question: 'Calculate: (40% of 150) + (60% of 100)', answer: '120'}
        ]
    },
    5: { // Chapter 5: Ratios and Proportions
        easy: [
            {topic: 'Ratios', emoji: '⚖️🔢', question: 'The ratio 1:2 means 1 to 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Ratios', emoji: '📊⚖️', question: 'In ratio 3:1, 3 is larger.', options: ['True', 'False'], correct: 0},
            {topic: 'Ratios', emoji: '🔢📈', question: 'Ratio 2:4 equals 1:2.', options: ['True', 'False'], correct: 0},
            {topic: 'Ratios', emoji: '⚖️💯', question: 'Ratio 5:5 equals 1:1.', options: ['True', 'False'], correct: 0},
            {topic: 'Ratios', emoji: '📊🔢', question: 'Ratios compare two quantities.', options: ['True', 'False'], correct: 0},
            {topic: 'Ratios', emoji: '🔢⚖️', question: 'Ratio 10:20 equals 1:2.', options: ['True', 'False'], correct: 0},
            {topic: 'Ratios', emoji: '📈💯', question: 'In ratio 4:1, there are 4 times more.', options: ['True', 'False'], correct: 0},
            {topic: 'Ratios', emoji: '⚖️📊', question: 'Ratio 6:3 equals 2:1.', options: ['True', 'False'], correct: 0},
            {topic: 'Ratios', emoji: '🔢📈', question: 'Proportion shows equality of ratios.', options: ['True', 'False'], correct: 0},
            {topic: 'Ratios', emoji: '💯⚖️', question: 'Ratio 8:4 simplifies to 2:1.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ratios', emoji: '⚖️🔢', question: 'Simplify ratio 12:18', options: ['2:3', '3:2'], correct: 0},
            {topic: 'Ratios', emoji: '📊⚖️', question: 'What is 3:5 as a fraction?', options: ['3/5', '5/3'], correct: 0},
            {topic: 'Ratios', emoji: '🔢📈', question: 'Simplify ratio 20:25', options: ['4:5', '5:4'], correct: 0},
            {topic: 'Ratios', emoji: '⚖️💯', question: 'If ratio is 2:3 and first is 10, what is second?', options: ['15', '12'], correct: 0},
            {topic: 'Ratios', emoji: '📊🔢', question: 'Simplify ratio 15:20', options: ['3:4', '4:3'], correct: 0},
            {topic: 'Ratios', emoji: '🔢⚖️', question: 'Express 2:7 as decimal', options: ['0.29', '0.35'], correct: 0},
            {topic: 'Ratios', emoji: '📈💯', question: 'Simplify ratio 24:32', options: ['3:4', '4:5'], correct: 0},
            {topic: 'Ratios', emoji: '⚖️📊', question: 'If ratio is 5:2 and total is 35, what is first part?', options: ['25', '20'], correct: 0},
            {topic: 'Ratios', emoji: '🔢📈', question: 'Simplify ratio 30:45', options: ['2:3', '3:2'], correct: 0},
            {topic: 'Ratios', emoji: '💯⚖️', question: 'What is 4:1 as a fraction?', options: ['4/1', '1/4'], correct: 0}
        ],
        hard: [
            {topic: 'Ratios', emoji: '⚖️🔢', question: 'Divide 120 in ratio 2:3:5', options: ['24, 36, 60', '20, 40, 60', '25, 35, 60'], correct: 0},
            {topic: 'Ratios', emoji: '📊⚖️', question: 'If a:b = 3:4 and b:c = 2:5, find a:c', options: ['3:10', '6:20', '3:8'], correct: 0},
            {topic: 'Ratios', emoji: '🔢📈', question: 'Simplify ratio 48:64:80', options: ['3:4:5', '6:8:10', '4:5:6'], correct: 0},
            {topic: 'Ratios', emoji: '⚖️💯', question: 'If 5:x = 15:60, what is x?', options: ['20', '25', '15'], correct: 0},
            {topic: 'Ratios', emoji: '📊🔢', question: 'Divide 180 in ratio 1:2:3', options: ['30, 60, 90', '40, 60, 80', '35, 65, 80'], correct: 0},
            {topic: 'Ratios', emoji: '🔢⚖️', question: 'If 4:5 = x:30, what is x?', options: ['24', '20', '25'], correct: 0},
            {topic: 'Ratios', emoji: '📈💯', question: 'Simplify ratio 36:48:60', options: ['3:4:5', '6:8:10', '9:12:15'], correct: 0},
            {topic: 'Ratios', emoji: '⚖️📊', question: 'If a:b = 2:5 and a = 18, what is b?', options: ['45', '40', '50'], correct: 0},
            {topic: 'Ratios', emoji: '🔢📈', question: 'Divide 150 in ratio 2:3', options: ['60, 90', '50, 100', '75, 75'], correct: 0},
            {topic: 'Ratios', emoji: '💯⚖️', question: 'If 7:x = 21:12, what is x?', options: ['4', '3', '5'], correct: 0}
        ],
        expert: [
            {topic: 'Ratios', emoji: '⚖️🔢', question: 'Divide 480 in ratio 3:5:8', options: ['90, 150, 240', '80, 140, 260', '100, 150, 230', '95, 145, 240'], correct: 0},
            {topic: 'Ratios', emoji: '📊⚖️', question: 'If a:b = 2:3, b:c = 4:5, c:d = 6:7, find a:d', options: ['16:35', '8:21', '2:7', '4:15'], correct: 0},
            {topic: 'Ratios', emoji: '🔢📈', question: 'If x:y = 3:5 and x+y = 120, find x', options: ['45', '50', '40', '55'], correct: 0},
            {topic: 'Ratios', emoji: '⚖️💯', question: 'Simplify 0.5:0.75:1.25', options: ['2:3:5', '1:3:5', '2:4:5', '1:2:3'], correct: 0},
            {topic: 'Ratios', emoji: '📊🔢', question: 'If 2/x = 3/12, what is x?', options: ['8', '6', '9', '7'], correct: 0},
            {topic: 'Ratios', emoji: '🔢⚖️', question: 'Divide 360 in ratio 2:3:4:6', options: ['48, 72, 96, 144', '40, 80, 100, 140', '50, 70, 90, 150', '45, 75, 95, 145'], correct: 0},
            {topic: 'Ratios', emoji: '📈💯', question: 'If a:b = 5:7 and a-b = -10, find a', options: ['25', '20', '30', '15'], correct: 0},
            {topic: 'Ratios', emoji: '⚖️📊', question: 'Simplify (1/2):(1/3):(1/4)', options: ['6:4:3', '2:3:4', '3:2:1', '4:3:2'], correct: 0},
            {topic: 'Ratios', emoji: '🔢📈', question: 'If x:y:z = 2:3:4 and z = 20, find x', options: ['10', '12', '8', '15'], correct: 0},
            {topic: 'Ratios', emoji: '💯⚖️', question: 'If 5:8 = x:(x+12), what is x?', options: ['20', '15', '25', '18'], correct: 0}
        ],
        extreme: [
            {topic: 'Ratios', emoji: '⚖️🔢', question: 'If a:b:c = 2:3:5 and a²+b²+c² = 380, find c', answer: '10'},
            {topic: 'Ratios', emoji: '📊⚖️', question: 'Simplify (2/5):(3/7):(4/9) to whole numbers', answer: '126:135:140'},
            {topic: 'Ratios', emoji: '🔢📈', question: 'If x:y = 4:5 and (x+y)/(x-y) = 9, find x', answer: '20'},
            {topic: 'Ratios', emoji: '⚖️💯', question: 'Divide 1000 in ratio 1/2:1/3:1/4', answer: '480, 320, 200 or 480:320:200'},
            {topic: 'Ratios', emoji: '📊🔢', question: 'If a:b = 3:7, b:c = 5:9, find a:b:c in simplest form', answer: '15:35:63'},
            {topic: 'Ratios', emoji: '🔢⚖️', question: 'If x:y = 2:3 and x²:y² = 16:k, find k', answer: '36'},
            {topic: 'Ratios', emoji: '📈💯', question: 'If (a+b):(a-b) = 5:3 and a = 40, find b', answer: '10'},
            {topic: 'Ratios', emoji: '⚖️📊', question: 'Divide 630 in continued ratio 2:3:4', answer: '140, 210, 280 or 140:210:280'},
            {topic: 'Ratios', emoji: '🔢📈', question: 'If a:b = √2:√3 and a = 4√2, find b', answer: '4√3 or 4√3'},
            {topic: 'Ratios', emoji: '💯⚖️', question: 'If x:y:z = 1:2:3 and xy+yz+zx = 88, find z', answer: '12'}
        ]
    },
    6: { // Chapter 6: Basic Algebra
        easy: [
            {topic: 'Algebra', emoji: '🔤📊', question: 'If x + 5 = 10, then x equals 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '📈🔢', question: 'In 2x, the 2 is a coefficient.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '🔤💯', question: 'x - 3 = 7, so x = 10.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '📊🎯', question: 'Variables represent unknown numbers.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '🔤📈', question: '3x means 3 × x.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '🔢💰', question: '2x + 2x = 4x.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '📊🔤', question: 'x/2 = 5, so x = 10.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '📈💯', question: 'Like terms have same variables.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '🔤🎯', question: '5x - 2x = 3x.', options: ['True', 'False'], correct: 0},
            {topic: 'Algebra', emoji: '🔢📊', question: '2(x + 3) = 2x + 6.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Algebra', emoji: '🔤📊', question: 'Solve: x + 7 = 15', options: ['x = 8', 'x = 7'], correct: 0},
            {topic: 'Algebra', emoji: '📈🔢', question: 'Solve: 3x = 21', options: ['x = 7', 'x = 6'], correct: 0},
            {topic: 'Algebra', emoji: '🔤💯', question: 'Simplify: 4x + 3x', options: ['7x', '12x'], correct: 0},
            {topic: 'Algebra', emoji: '📊🎯', question: 'Solve: x - 9 = 6', options: ['x = 15', 'x = 14'], correct: 0},
            {topic: 'Algebra', emoji: '🔤📈', question: 'Solve: x/4 = 3', options: ['x = 12', 'x = 7'], correct: 0},
            {topic: 'Algebra', emoji: '🔢💰', question: 'Simplify: 6x - 2x', options: ['4x', '8x'], correct: 0},
            {topic: 'Algebra', emoji: '📊🔤', question: 'Solve: 2x + 3 = 11', options: ['x = 4', 'x = 5'], correct: 0},
            {topic: 'Algebra', emoji: '📈💯', question: 'Expand: 3(x + 2)', options: ['3x + 6', '3x + 2'], correct: 0},
            {topic: 'Algebra', emoji: '🔤🎯', question: 'Solve: 5x = 35', options: ['x = 7', 'x = 8'], correct: 0},
            {topic: 'Algebra', emoji: '🔢📊', question: 'Simplify: 2x + 5x - 3x', options: ['4x', '10x'], correct: 0}
        ],
        hard: [
            {topic: 'Algebra', emoji: '🔤📊', question: 'Solve: 3x + 7 = 22', options: ['x = 5', 'x = 6', 'x = 4'], correct: 0},
            {topic: 'Algebra', emoji: '📈🔢', question: 'Solve: 5(x - 2) = 20', options: ['x = 6', 'x = 5', 'x = 7'], correct: 0},
            {topic: 'Algebra', emoji: '🔤💯', question: 'Simplify: 3(2x + 4) - 2x', options: ['4x + 12', '6x + 12', '4x + 6'], correct: 0},
            {topic: 'Algebra', emoji: '📊🎯', question: 'Solve: 2x/3 = 8', options: ['x = 12', 'x = 16', 'x = 10'], correct: 0},
            {topic: 'Algebra', emoji: '🔤📈', question: 'Solve: 4x - 5 = 19', options: ['x = 6', 'x = 5', 'x = 7'], correct: 0},
            {topic: 'Algebra', emoji: '🔢💰', question: 'Expand: (x + 3)(x + 2)', options: ['x² + 5x + 6', 'x² + 6', 'x² + 5x'], correct: 0},
            {topic: 'Algebra', emoji: '📊🔤', question: 'Solve: 7 - 2x = 1', options: ['x = 3', 'x = 4', 'x = 2'], correct: 0},
            {topic: 'Algebra', emoji: '📈💯', question: 'Simplify: 5(x + 2) - 3(x - 1)', options: ['2x + 13', '2x + 7', '8x + 13'], correct: 0},
            {topic: 'Algebra', emoji: '🔤🎯', question: 'Solve: (x + 4)/2 = 7', options: ['x = 10', 'x = 11', 'x = 9'], correct: 0},
            {topic: 'Algebra', emoji: '🔢📊', question: 'Factor: x² - 4', options: ['(x + 2)(x - 2)', '(x - 2)²', 'x(x - 4)'], correct: 0}
        ],
        expert: [
            {topic: 'Algebra', emoji: '🔤📊', question: 'Solve: 3(2x - 5) + 4 = 25', options: ['x = 5', 'x = 6', 'x = 4', 'x = 7'], correct: 0},
            {topic: 'Algebra', emoji: '📈🔢', question: 'Factor: x² + 7x + 12', options: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x + 3)(x + 5)'], correct: 0},
            {topic: 'Algebra', emoji: '🔤💯', question: 'Solve: (2x + 3)/4 = 5', options: ['x = 8.5', 'x = 9', 'x = 8', 'x = 7.5'], correct: 0},
            {topic: 'Algebra', emoji: '📊🎯', question: 'Simplify: 2(3x - 4) - 3(x + 2)', options: ['3x - 14', '3x - 2', '9x - 14', '6x - 2'], correct: 0},
            {topic: 'Algebra', emoji: '🔤📈', question: 'Expand: (x + 5)(x - 3)', options: ['x² + 2x - 15', 'x² - 2x - 15', 'x² + 8x - 15', 'x² - 15'], correct: 0},
            {topic: 'Algebra', emoji: '🔢💰', question: 'Solve: 5x - 2(x + 3) = 9', options: ['x = 5', 'x = 4', 'x = 6', 'x = 3'], correct: 0},
            {topic: 'Algebra', emoji: '📊🔤', question: 'Factor: 2x² + 7x + 3', options: ['(2x + 1)(x + 3)', '(2x + 3)(x + 1)', '(x + 1)(2x + 3)', '(x + 3)(2x + 1)'], correct: 0},
            {topic: 'Algebra', emoji: '📈💯', question: 'Solve: 3(x - 4) = 2(x + 1)', options: ['x = 14', 'x = 12', 'x = 16', 'x = 10'], correct: 0},
            {topic: 'Algebra', emoji: '🔤🎯', question: 'Simplify: (x + 2)² - (x - 2)²', options: ['8x', '4x', '4', '8'], correct: 0},
            {topic: 'Algebra', emoji: '🔢📊', question: 'Solve: (3x - 1)/2 + (x + 4)/3 = 5', options: ['x = 2', 'x = 3', 'x = 1', 'x = 4'], correct: 0}
        ],
        extreme: [
            {topic: 'Algebra', emoji: '🔤📊', question: 'Solve: 2(3x - 4) - 3(2x + 1) = 5', answer: 'x = -8'},
            {topic: 'Algebra', emoji: '📈🔢', question: 'Factor completely: 3x² - 27', answer: '3(x + 3)(x - 3) or 3(x² - 9)'},
            {topic: 'Algebra', emoji: '🔤💯', question: 'Solve: (x + 2)/3 - (x - 1)/4 = 1', answer: 'x = 10'},
            {topic: 'Algebra', emoji: '📊🎯', question: 'Expand and simplify: (2x + 3)² - (2x - 3)²', answer: '24x'},
            {topic: 'Algebra', emoji: '🔤📈', question: 'Factor: x³ - 8', answer: '(x - 2)(x² + 2x + 4)'},
            {topic: 'Algebra', emoji: '🔢💰', question: 'Solve: 5(2x - 3) = 3(3x + 1) - 2x', answer: 'x = -18'},
            {topic: 'Algebra', emoji: '📊🔤', question: 'Simplify: (x² - 9)/(x + 3)', answer: 'x - 3'},
            {topic: 'Algebra', emoji: '📈💯', question: 'Factor: 4x² - 12x + 9', answer: '(2x - 3)² or (2x - 3)(2x - 3)'},
            {topic: 'Algebra', emoji: '🔤🎯', question: 'Solve: |2x - 5| = 7', answer: 'x = 6 or x = -1'},
            {topic: 'Algebra', emoji: '🔢📊', question: 'Expand: (x + 1)(x + 2)(x + 3)', answer: 'x³ + 6x² + 11x + 6'}
        ]
    },

    7: { // Chapter 7: Linear Equations
        easy: [
            {topic: 'Linear Equations', emoji: '📈📉', question: 'A linear equation has degree 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📊', question: 'y = 2x + 3 is a linear equation.', options: ['True', 'False'], correct: 0},
            {topic: 'Linear Equations', emoji: '📉🎯', question: 'Linear graphs are straight lines.', options: ['True', 'False'], correct: 0},
            {topic: 'Linear Equations', emoji: '📈💯', question: 'The slope is rise over run.', options: ['True', 'False'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📉', question: 'y = mx + b is slope-intercept form.', options: ['True', 'False'], correct: 0},
            {topic: 'Linear Equations', emoji: '📊🎯', question: "'m' represents the slope in y = mx + b.", options: ['True', 'False'], correct: 0},
            {topic: 'Linear Equations', emoji: '📈🔢', question: 'A horizontal line has slope 0.', options: ['True', 'False'], correct: 0},
            {topic: 'Linear Equations', emoji: '📉💰', question: 'Parallel lines have equal slopes.', options: ['True', 'False'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📈', question: 'Vertical lines have undefined slope.', options: ['True', 'False'], correct: 0},
            {topic: 'Linear Equations', emoji: '📊💯', question: 'The y-intercept is where x = 0.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Linear Equations', emoji: '📈📉', question: 'What is the slope of y = 3x + 2?', options: ['3', '2'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📊', question: 'What is the y-intercept of y = 4x - 5?', options: ['-5', '4'], correct: 0},
            {topic: 'Linear Equations', emoji: '📉🎯', question: 'Slope of line through (0,0) and (2,4)?', options: ['2', '1'], correct: 0},
            {topic: 'Linear Equations', emoji: '📈💯', question: 'What is the slope of y = -2x + 7?', options: ['-2', '7'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📉', question: 'What is y-intercept of y = x - 3?', options: ['-3', '1'], correct: 0},
            {topic: 'Linear Equations', emoji: '📊🎯', question: 'If y = 5x + 1, what is y when x = 2?', options: ['11', '10'], correct: 0},
            {topic: 'Linear Equations', emoji: '📈🔢', question: 'Slope through (1,2) and (3,6)?', options: ['2', '3'], correct: 0},
            {topic: 'Linear Equations', emoji: '📉💰', question: 'What is slope of y = 7?', options: ['0', '7'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📈', question: 'If y = 2x - 1, find x when y = 5', options: ['3', '2'], correct: 0},
            {topic: 'Linear Equations', emoji: '📊💯', question: 'What is the slope of x = 4?', options: ['Undefined', '0'], correct: 0}
        ],
        hard: [
            {topic: 'Linear Equations', emoji: '📈📉', question: 'Write equation for slope 2, y-intercept -3', options: ['y = 2x - 3', 'y = -3x + 2', 'y = 2x + 3'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📊', question: 'Find slope through (-1,3) and (2,9)', options: ['2', '3', '1'], correct: 0},
            {topic: 'Linear Equations', emoji: '📉🎯', question: 'Convert 3x + y = 6 to slope-intercept', options: ['y = -3x + 6', 'y = 3x - 6', 'y = 6 - x'], correct: 0},
            {topic: 'Linear Equations', emoji: '📈💯', question: 'Find equation through (0,5) with slope -2', options: ['y = -2x + 5', 'y = 5x - 2', 'y = 2x + 5'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📉', question: 'Lines y = 2x + 1 and y = 2x - 3 are?', options: ['Parallel', 'Perpendicular', 'Same'], correct: 0},
            {topic: 'Linear Equations', emoji: '📊🎯', question: 'Find x-intercept of y = 3x - 9', options: ['3', '9', '-3'], correct: 0},
            {topic: 'Linear Equations', emoji: '📈🔢', question: 'Slope through (4,-2) and (6,2)?', options: ['2', '1', '3'], correct: 0},
            {topic: 'Linear Equations', emoji: '📉💰', question: 'If 2x - y = 4, find y when x = 3', options: ['2', '3', '1'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📈', question: 'Write equation for slope -1/2, through (0,4)', options: ['y = -x/2 + 4', 'y = 4x - 1/2', 'y = -2x + 4'], correct: 0},
            {topic: 'Linear Equations', emoji: '📊💯', question: 'Convert x - 2y = 8 to slope-intercept', options: ['y = x/2 - 4', 'y = 2x - 8', 'y = -2x + 8'], correct: 0}
        ],
        expert: [
            {topic: 'Linear Equations', emoji: '📈📉', question: 'Find equation through (2,3) and (4,7)', options: ['y = 2x - 1', 'y = 2x + 1', 'y = x + 1', 'y = 3x - 3'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📊', question: 'Perpendicular to y = 3x + 1 through (0,2)?', options: ['y = -x/3 + 2', 'y = 3x + 2', 'y = -3x + 2', 'y = x/3 + 2'], correct: 0},
            {topic: 'Linear Equations', emoji: '📉🎯', question: 'Find y-intercept of 4x - 2y = 12', options: ['-6', '6', '3', '12'], correct: 0},
            {topic: 'Linear Equations', emoji: '📈💯', question: 'Distance from origin to line 3x + 4y = 25', options: ['5', '4', '6', '3'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📉', question: 'Midpoint of (2,5) and (8,13)?', options: ['(5, 9)', '(6, 9)', '(5, 8)', '(6, 8)'], correct: 0},
            {topic: 'Linear Equations', emoji: '📊🎯', question: 'Parallel to 2x + y = 5 through (3,1)?', options: ['y = -2x + 7', 'y = 2x + 7', 'y = -2x - 5', 'y = x/2 + 1'], correct: 0},
            {topic: 'Linear Equations', emoji: '📈🔢', question: 'Find where y = 2x + 1 and y = -x + 7 meet', options: ['x = 2', 'x = 3', 'x = 1', 'x = 4'], correct: 0},
            {topic: 'Linear Equations', emoji: '📉💰', question: 'Slope of line perpendicular to y = 4x - 3?', options: ['-1/4', '4', '-4', '1/4'], correct: 0},
            {topic: 'Linear Equations', emoji: '🔢📈', question: 'Find equation: x-intercept 5, y-intercept -10', options: ['y = 2x - 10', 'y = -2x + 10', 'y = 5x - 10', 'y = x - 5'], correct: 0},
            {topic: 'Linear Equations', emoji: '📊💯', question: 'If 3x - 2y = 12, find slope', options: ['3/2', '2/3', '-3/2', '-2/3'], correct: 0}
        ],
        extreme: [
            {topic: 'Linear Equations', emoji: '📈📉', question: 'Find equation through (3,-2) parallel to 2x - 3y = 9', answer: 'y = 2x/3 - 4 or 2x - 3y = 12'},
            {topic: 'Linear Equations', emoji: '🔢📊', question: 'Where do 3x + 4y = 24 and 2x - y = 3 intersect? (x-coordinate)', answer: 'x = 4'},
            {topic: 'Linear Equations', emoji: '📉🎯', question: 'Find equation through (1,5) perpendicular to x + 2y = 7', answer: 'y = 2x + 3 or 2x - y = -3'},
            {topic: 'Linear Equations', emoji: '📈💯', question: 'Distance between parallel lines y = 3x + 1 and y = 3x + 11', answer: '√10 or 3.16'},
            {topic: 'Linear Equations', emoji: '🔢📉', question: 'Find k if lines kx + 3y = 5 and 2x - y = 1 are perpendicular', answer: 'k = 3/2 or 1.5'},
            {topic: 'Linear Equations', emoji: '📊🎯', question: 'Find equation of median from (0,0) to midpoint of (4,6) and (8,2)', answer: 'y = 2x/3 or 2x - 3y = 0'},
            {topic: 'Linear Equations', emoji: '📈🔢', question: 'Area of triangle with vertices (0,0), (4,0), (0,6)', answer: '12'},
            {topic: 'Linear Equations', emoji: '📉💰', question: 'Find perpendicular distance from (1,2) to line 3x + 4y = 12', answer: '1'},
            {topic: 'Linear Equations', emoji: '🔢📈', question: 'If lines ax + 2y = 5 and 3x + 6y = 8 are parallel, find a', answer: 'a = 1'},
            {topic: 'Linear Equations', emoji: '📊💯', question: 'Find equation bisecting angle between x = 0 and y = 0 in first quadrant', answer: 'y = x or x - y = 0'}
        ]
    },
    8: { // Chapter 8: Quadratic Equations
        easy: [
            {topic: 'Quadratics', emoji: '📐🔢', question: 'A quadratic has degree 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Quadratics', emoji: '🎯📊', question: 'x² + 5x + 6 is a quadratic.', options: ['True', 'False'], correct: 0},
            {topic: 'Quadratics', emoji: '📐💯', question: 'Quadratic graphs are parabolas.', options: ['True', 'False'], correct: 0},
            {topic: 'Quadratics', emoji: '🔢🎯', question: 'ax² + bx + c is standard form.', options: ['True', 'False'], correct: 0},
            {topic: 'Quadratics', emoji: '📊📐', question: 'A quadratic can have 2 real roots.', options: ['True', 'False'], correct: 0},
            {topic: 'Quadratics', emoji: '💯🔢', question: 'The vertex is the turning point.', options: ['True', 'False'], correct: 0},
            {topic: 'Quadratics', emoji: '📐🎯', question: 'x² = 16 has two solutions.', options: ['True', 'False'], correct: 0},
            {topic: 'Quadratics', emoji: '🔢📊', question: 'If a > 0, parabola opens upward.', options: ['True', 'False'], correct: 0},
            {topic: 'Quadratics', emoji: '🎯💯', question: 'The discriminant is b² - 4ac.', options: ['True', 'False'], correct: 0},
            {topic: 'Quadratics', emoji: '📐🔢', question: '(x + 2)(x - 3) is factored form.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Quadratics', emoji: '📐🔢', question: 'Solve: x² = 25', options: ['x = ±5', 'x = 5'], correct: 0},
            {topic: 'Quadratics', emoji: '🎯📊', question: 'Factor: x² + 5x + 6', options: ['(x+2)(x+3)', '(x+1)(x+6)'], correct: 0},
            {topic: 'Quadratics', emoji: '📐💯', question: 'Solve: x² - 4 = 0', options: ['x = ±2', 'x = 4'], correct: 0},
            {topic: 'Quadratics', emoji: '🔢🎯', question: 'Factor: x² - 9', options: ['(x+3)(x-3)', '(x-9)(x+1)'], correct: 0},
            {topic: 'Quadratics', emoji: '📊📐', question: 'Expand: (x + 4)²', options: ['x² + 8x + 16', 'x² + 16'], correct: 0},
            {topic: 'Quadratics', emoji: '💯🔢', question: 'Solve: (x - 3)² = 0', options: ['x = 3', 'x = 0'], correct: 0},
            {topic: 'Quadratics', emoji: '📐🎯', question: 'Factor: x² - 6x + 9', options: ['(x-3)²', '(x-9)(x+1)'], correct: 0},
            {topic: 'Quadratics', emoji: '🔢📊', question: 'What is vertex of y = x²?', options: ['(0, 0)', '(1, 1)'], correct: 0},
            {topic: 'Quadratics', emoji: '🎯💯', question: 'Solve: x² - 1 = 0', options: ['x = ±1', 'x = 1'], correct: 0},
            {topic: 'Quadratics', emoji: '📐🔢', question: 'Expand: (x - 5)²', options: ['x² - 10x + 25', 'x² + 25'], correct: 0}
        ],
        hard: [
            {topic: 'Quadratics', emoji: '📐🔢', question: 'Solve: x² + 6x + 8 = 0', options: ['x = -2, -4', 'x = 2, 4', 'x = -2, 4'], correct: 0},
            {topic: 'Quadratics', emoji: '🎯📊', question: 'Solve: x² - 5x + 6 = 0', options: ['x = 2, 3', 'x = -2, -3', 'x = 1, 6'], correct: 0},
            {topic: 'Quadratics', emoji: '📐💯', question: 'Complete square: x² + 8x + __', options: ['16', '8', '64'], correct: 0},
            {topic: 'Quadratics', emoji: '🔢🎯', question: 'Vertex of y = x² - 4x + 3?', options: ['(2, -1)', '(4, 3)', '(-2, 1)'], correct: 0},
            {topic: 'Quadratics', emoji: '📊📐', question: 'Factor: x² + x - 12', options: ['(x+4)(x-3)', '(x+3)(x-4)', '(x+2)(x-6)'], correct: 0},
            {topic: 'Quadratics', emoji: '💯🔢', question: 'Solve: 2x² = 32', options: ['x = ±4', 'x = 4', 'x = ±16'], correct: 0},
            {topic: 'Quadratics', emoji: '📐🎯', question: 'Discriminant of x² + 4x + 4?', options: ['0', '4', '16'], correct: 0},
            {topic: 'Quadratics', emoji: '🔢📊', question: 'Solve: x² - 2x - 15 = 0', options: ['x = 5, -3', 'x = -5, 3', 'x = 15, -1'], correct: 0},
            {topic: 'Quadratics', emoji: '🎯💯', question: 'Axis of symmetry: y = x² + 6x + 5?', options: ['x = -3', 'x = 3', 'x = -6'], correct: 0},
            {topic: 'Quadratics', emoji: '📐🔢', question: 'Factor: x² - 11x + 24', options: ['(x-3)(x-8)', '(x-2)(x-12)', '(x-4)(x-6)'], correct: 0}
        ],
        expert: [
            {topic: 'Quadratics', emoji: '📐🔢', question: 'Solve: 2x² + 7x + 3 = 0', options: ['x = -1/2, -3', 'x = 1/2, 3', 'x = -1, -3', 'x = -2, -3/2'], correct: 0},
            {topic: 'Quadratics', emoji: '🎯📊', question: 'Vertex form of y = x² - 6x + 11?', options: ['y = (x-3)² + 2', 'y = (x-3)² - 2', 'y = (x+3)² + 2', 'y = (x-6)² + 11'], correct: 0},
            {topic: 'Quadratics', emoji: '📐💯', question: 'Solve: 3x² - 5x - 2 = 0', options: ['x = 2, -1/3', 'x = -2, 1/3', 'x = 1, -2/3', 'x = -1, 2/3'], correct: 0},
            {topic: 'Quadratics', emoji: '🔢🎯', question: 'Max value of y = -x² + 4x - 1?', options: ['3', '4', '2', '1'], correct: 0},
            {topic: 'Quadratics', emoji: '📊📐', question: 'Factor: 4x² - 9', options: ['(2x+3)(2x-3)', '(4x+3)(x-3)', '(2x+9)(2x-1)', '(x+3)(4x-3)'], correct: 0},
            {topic: 'Quadratics', emoji: '💯🔢', question: 'Sum of roots of x² - 7x + 10 = 0?', options: ['7', '10', '-7', '-10'], correct: 0},
            {topic: 'Quadratics', emoji: '📐🎯', question: 'Solve: x² + 4x + 1 = 0 (use formula)', options: ['x = -2±√3', 'x = -2±√5', 'x = 2±√3', 'x = -4±√3'], correct: 0},
            {topic: 'Quadratics', emoji: '🔢📊', question: 'Product of roots: 2x² + 5x - 3 = 0?', options: ['-3/2', '3/2', '-5/2', '5/2'], correct: 0},
            {topic: 'Quadratics', emoji: '🎯💯', question: 'How many real roots: x² + x + 1 = 0?', options: ['0', '1', '2', '3'], correct: 0},
            {topic: 'Quadratics', emoji: '📐🔢', question: 'Vertex of y = -2(x - 1)² + 5?', options: ['(1, 5)', '(-1, 5)', '(1, -5)', '(2, 5)'], correct: 0}
        ],
        extreme: [
            {topic: 'Quadratics', emoji: '📐🔢', question: 'Solve: x² - 2x - 1 = 0 (exact form)', answer: 'x = 1 ± √2'},
            {topic: 'Quadratics', emoji: '🎯📊', question: 'Find k if x² + kx + 9 has equal roots', answer: 'k = ±6 or k = 6 or k = -6'},
            {topic: 'Quadratics', emoji: '📐💯', question: 'Solve: 2x² + 3x - 5 = 0 (larger root)', answer: 'x = 1'},
            {topic: 'Quadratics', emoji: '🔢🎯', question: 'Find equation with roots 3 and -5', answer: 'x² + 2x - 15 = 0 or x² + 2x - 15'},
            {topic: 'Quadratics', emoji: '📊📐', question: 'Minimum value of y = 2x² - 8x + 11', answer: '3'},
            {topic: 'Quadratics', emoji: '💯🔢', question: 'If α, β are roots of x² - 5x + 3 = 0, find α² + β²', answer: '19'},
            {topic: 'Quadratics', emoji: '📐🎯', question: 'Solve: (x - 2)² = 3x - 6 (smaller root)', answer: 'x = 2'},
            {topic: 'Quadratics', emoji: '🔢📊', question: 'Range of y = -(x - 3)² + 7', answer: 'y ≤ 7 or (-∞, 7]'},
            {topic: 'Quadratics', emoji: '🎯💯', question: 'Find a if roots of ax² + 6x + 2 = 0 are reciprocals', answer: 'a = 2'},
            {topic: 'Quadratics', emoji: '📐🔢', question: 'Solve: x⁴ - 5x² + 4 = 0 (positive roots)', answer: 'x = 1, 2'}
        ]
    },
    9: { // Chapter 9: Geometry - Angles
        easy: [
            {topic: 'Angles', emoji: '📐📏', question: 'A right angle is 90°.', options: ['True', 'False'], correct: 0},
            {topic: 'Angles', emoji: '🔺📐', question: 'An acute angle is less than 90°.', options: ['True', 'False'], correct: 0},
            {topic: 'Angles', emoji: '📏🎯', question: 'A straight angle is 180°.', options: ['True', 'False'], correct: 0},
            {topic: 'Angles', emoji: '🔺💯', question: 'An obtuse angle is greater than 90°.', options: ['True', 'False'], correct: 0},
            {topic: 'Angles', emoji: '📐🔢', question: 'Complementary angles sum to 90°.', options: ['True', 'False'], correct: 0},
            {topic: 'Angles', emoji: '📏📊', question: 'Supplementary angles sum to 180°.', options: ['True', 'False'], correct: 0},
            {topic: 'Angles', emoji: '🔺🎯', question: 'Vertical angles are equal.', options: ['True', 'False'], correct: 0},
            {topic: 'Angles', emoji: '📐💰', question: 'Parallel lines never meet.', options: ['True', 'False'], correct: 0},
            {topic: 'Angles', emoji: '📏🔢', question: 'A full rotation is 360°.', options: ['True', 'False'], correct: 0},
            {topic: 'Angles', emoji: '🔺📊', question: 'Adjacent angles share a vertex.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Angles', emoji: '📐📏', question: 'Complement of 30°?', options: ['60°', '150°'], correct: 0},
            {topic: 'Angles', emoji: '🔺📐', question: 'Supplement of 120°?', options: ['60°', '30°'], correct: 0},
            {topic: 'Angles', emoji: '📏🎯', question: 'If angle is 35°, its complement?', options: ['55°', '145°'], correct: 0},
            {topic: 'Angles', emoji: '🔺💯', question: 'Alternate interior angles on parallels are?', options: ['Equal', 'Supplementary'], correct: 0},
            {topic: 'Angles', emoji: '📐🔢', question: 'If two angles are 75° and 105°, they are?', options: ['Supplementary', 'Complementary'], correct: 0},
            {topic: 'Angles', emoji: '📏📊', question: 'Corresponding angles on parallels are?', options: ['Equal', 'Complementary'], correct: 0},
            {topic: 'Angles', emoji: '🔺🎯', question: 'Sum of interior angles in quadrilateral?', options: ['360°', '180°'], correct: 0},
            {topic: 'Angles', emoji: '📐💰', question: 'Exterior angle of triangle equals?', options: ['Sum of remote interiors', 'One interior'], correct: 0},
            {topic: 'Angles', emoji: '📏🔢', question: 'If angle is 40°, its supplement?', options: ['140°', '50°'], correct: 0},
            {topic: 'Angles', emoji: '🔺📊', question: 'Sum of angles in triangle?', options: ['180°', '360°'], correct: 0}
        ],
        hard: [
            {topic: 'Angles', emoji: '📐📏', question: 'Three angles: x, 2x, 3x form line. Find x.', options: ['30°', '45°', '60°'], correct: 0},
            {topic: 'Angles', emoji: '🔺📐', question: 'Two complementary angles differ by 20°. Smaller?', options: ['35°', '40°', '30°'], correct: 0},
            {topic: 'Angles', emoji: '📏🎯', question: 'Angles in ratio 2:3:4 on line. Largest?', options: ['80°', '60°', '90°'], correct: 0},
            {topic: 'Angles', emoji: '🔺💯', question: 'Sum of interior angles in pentagon?', options: ['540°', '360°', '720°'], correct: 0},
            {topic: 'Angles', emoji: '📐🔢', question: 'If two angles are 3x and 2x supplementary, find x', options: ['36°', '45°', '30°'], correct: 0},
            {topic: 'Angles', emoji: '📏📊', question: 'Each interior angle of regular hexagon?', options: ['120°', '108°', '135°'], correct: 0},
            {topic: 'Angles', emoji: '🔺🎯', question: 'Sum of exterior angles of any polygon?', options: ['360°', '180°', '540°'], correct: 0},
            {topic: 'Angles', emoji: '📐💰', question: 'Triangle angles: x, x+20, x+40. Find x.', options: ['40°', '50°', '45°'], correct: 0},
            {topic: 'Angles', emoji: '📏🔢', question: 'Each exterior angle of regular octagon?', options: ['45°', '40°', '50°'], correct: 0},
            {topic: 'Angles', emoji: '🔺📊', question: 'Bisector divides 80° angle into?', options: ['40°, 40°', '50°, 30°', '45°, 35°'], correct: 0}
        ],
        expert: [
            {topic: 'Angles', emoji: '📐📏', question: 'Sum of interior angles in 12-sided polygon?', options: ['1800°', '1620°', '1980°', '2160°'], correct: 0},
            {topic: 'Angles', emoji: '🔺📐', question: 'Each interior angle of regular decagon?', options: ['144°', '140°', '135°', '150°'], correct: 0},
            {topic: 'Angles', emoji: '📏🎯', question: 'Angles 2x, 3x, 4x at a point. Find x.', options: ['40°', '45°', '36°', '30°'], correct: 0},
            {topic: 'Angles', emoji: '🔺💯', question: 'How many sides if each interior angle 150°?', options: ['12', '10', '15', '8'], correct: 0},
            {topic: 'Angles', emoji: '📐🔢', question: 'Angles in triangle ratio 2:3:5. Largest?', options: ['90°', '108°', '100°', '120°'], correct: 0},
            {topic: 'Angles', emoji: '📏📊', question: 'Each exterior angle of regular 18-gon?', options: ['20°', '18°', '22.5°', '15°'], correct: 0},
            {topic: 'Angles', emoji: '🔺🎯', question: 'If two angles 4x and 5x supplementary, find 4x', options: ['80°', '100°', '72°', '90°'], correct: 0},
            {topic: 'Angles', emoji: '📐💰', question: 'Sides of polygon if sum of interiors 1440°?', options: ['10', '9', '11', '8'], correct: 0},
            {topic: 'Angles', emoji: '📏🔢', question: 'Bisectors of supplementary angles form?', options: ['90°', '180°', '45°', '60°'], correct: 0},
            {topic: 'Angles', emoji: '🔺📊', question: 'Three angles at point: x, 2x, 3x+60. Find x.', options: ['50°', '45°', '60°', '40°'], correct: 0}
        ],
        extreme: [
            {topic: 'Angles', emoji: '📐📏', question: 'Sum of interior angles in 20-sided polygon', answer: '3240° or 3240'},
            {topic: 'Angles', emoji: '🔺📐', question: 'How many sides if each exterior angle is 24°?', answer: '15'},
            {topic: 'Angles', emoji: '📏🎯', question: 'Angles in triangle are x, 2x-10, 3x+10. Find largest angle.', answer: '95°'},
            {topic: 'Angles', emoji: '🔺💯', question: 'Each interior angle of regular 15-gon', answer: '156° or 156'},
            {topic: 'Angles', emoji: '📐🔢', question: 'If exterior angle is 40°, how many sides?', answer: '9'},
            {topic: 'Angles', emoji: '📏📊', question: 'Two complementary angles in ratio 2:7. Find the larger.', answer: '70°'},
            {topic: 'Angles', emoji: '🔺🎯', question: 'Angles around point: 2x, 3x, 4x, 5x. Find 5x.', answer: '128.57°'},
            {topic: 'Angles', emoji: '📐💰', question: 'Triangle exterior angles ratio 4:5:6. Find smallest interior.', answer: '48°'},
            {topic: 'Angles', emoji: '📏🔢', question: 'How many diagonals in a decagon (10 sides)?', answer: '35'},
            {topic: 'Angles', emoji: '🔺📊', question: 'If n-gon has 54 diagonals, find n', answer: '12'}
        ]
    },
    10: { // Chapter 10: Triangles
        easy: [
            {topic: 'Triangles', emoji: '🔺📐', question: 'Every triangle has exactly three sides.', options: ['True', 'False'], correct: 0},
            {topic: 'Triangles', emoji: '📏🔺', question: 'Sum of angles in triangle is 180°.', options: ['True', 'False'], correct: 0},
            {topic: 'Triangles', emoji: '🔺💯', question: 'An equilateral triangle has all sides equal.', options: ['True', 'False'], correct: 0},
            {topic: 'Triangles', emoji: '📐🎯', question: 'An isosceles triangle has two equal sides.', options: ['True', 'False'], correct: 0},
            {topic: 'Triangles', emoji: '🔺📊', question: 'A right triangle has one 90° angle.', options: ['True', 'False'], correct: 0},
            {topic: 'Triangles', emoji: '📏💰', question: 'Pythagorean theorem: a² + b² = c².', options: ['True', 'False'], correct: 0},
            {topic: 'Triangles', emoji: '🔺🔢', question: 'Each angle in equilateral is 60°.', options: ['True', 'False'], correct: 0},
            {topic: 'Triangles', emoji: '📐📊', question: 'A scalene triangle has no equal sides.', options: ['True', 'False'], correct: 0},
            {topic: 'Triangles', emoji: '🔺🎯', question: 'Area of triangle = ½ × base × height.', options: ['True', 'False'], correct: 0},
            {topic: 'Triangles', emoji: '📏🔺', question: 'Obtuse triangle has one angle > 90°.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Triangles', emoji: '🔺📐', question: 'In triangle with angles 50° and 70°, find third', options: ['60°', '80°'], correct: 0},
            {topic: 'Triangles', emoji: '📏🔺', question: 'Using Pythagoras: sides 3, 4, hypotenuse?', options: ['5', '7'], correct: 0},
            {topic: 'Triangles', emoji: '🔺💯', question: 'Area of triangle: base 10, height 6?', options: ['30', '60'], correct: 0},
            {topic: 'Triangles', emoji: '📐🎯', question: 'Perimeter of triangle with sides 5, 7, 8?', options: ['20', '280'], correct: 0},
            {topic: 'Triangles', emoji: '🔺📊', question: 'Is 5, 12, 13 a Pythagorean triple?', options: ['Yes', 'No'], correct: 0},
            {topic: 'Triangles', emoji: '📏💰', question: 'In isosceles, two angles are 50° each. Third?', options: ['80°', '100°'], correct: 0},
            {topic: 'Triangles', emoji: '🔺🔢', question: 'Hypotenuse if legs are 6 and 8?', options: ['10', '14'], correct: 0},
            {topic: 'Triangles', emoji: '📐📊', question: 'Area: base 12, height 5?', options: ['30', '60'], correct: 0},
            {topic: 'Triangles', emoji: '🔺🎯', question: 'Triangle with sides 7, 7, 7 is?', options: ['Equilateral', 'Isosceles'], correct: 0},
            {topic: 'Triangles', emoji: '📏🔺', question: 'Third angle if other two angles 45° and 45°?', options: ['90°', '180°'], correct: 0}
        ],
        hard: [
            {topic: 'Triangles', emoji: '🔺📐', question: 'Area of triangle with sides 13, 14, 15?', options: ['84', '90', '80'], correct: 0},
            {topic: 'Triangles', emoji: '📏🔺', question: 'Find x if triangle sides are 8, 15, x (right)', options: ['17', '23', '7'], correct: 0},
            {topic: 'Triangles', emoji: '🔺💯', question: 'Median divides triangle into two equal?', options: ['Areas', 'Perimeters', 'Angles'], correct: 0},
            {topic: 'Triangles', emoji: '📐🎯', question: 'Altitude to hypotenuse in 3-4-5 triangle?', options: ['2.4', '2.5', '3'], correct: 0},
            {topic: 'Triangles', emoji: '🔺📊', question: 'Triangle angles in ratio 2:3:4. Largest?', options: ['80°', '90°', '100°'], correct: 0},
            {topic: 'Triangles', emoji: '📏💰', question: 'Perimeter of right triangle: legs 5, 12?', options: ['30', '32', '28'], correct: 0},
            {topic: 'Triangles', emoji: '🔺🔢', question: 'Area of equilateral triangle, side 6?', options: ['9√3', '18', '12√3'], correct: 0},
            {topic: 'Triangles', emoji: '📐📊', question: 'Find third side: isosceles perimeter 20, equal sides 7', options: ['6', '7', '8'], correct: 0},
            {topic: 'Triangles', emoji: '🔺🎯', question: 'Centroid divides median in ratio?', options: ['2:1', '1:1', '3:1'], correct: 0},
            {topic: 'Triangles', emoji: '📏🔺', question: 'Inradius of 3-4-5 triangle?', options: ['1', '1.5', '2'], correct: 0}
        ],
        expert: [
            {topic: 'Triangles', emoji: '🔺📐', question: 'Area of triangle vertices (0,0), (4,0), (2,6)?', options: ['12', '10', '14', '8'], correct: 0},
            {topic: 'Triangles', emoji: '📏🔺', question: 'Circumradius of triangle sides 7, 24, 25?', options: ['12.5', '13', '12', '14'], correct: 0},
            {topic: 'Triangles', emoji: '🔺💯', question: 'In 30-60-90 triangle, if short leg = 5, hypotenuse?', options: ['10', '5√3', '5√2', '15'], correct: 0},
            {topic: 'Triangles', emoji: '📐🎯', question: 'Area using Heron: sides 5, 6, 7?', options: ['6√6', '7√5', '5√7', '6√5'], correct: 0},
            {topic: 'Triangles', emoji: '🔺📊', question: 'In 45-45-90 triangle, if leg = 8, hypotenuse?', options: ['8√2', '16', '8√3', '12'], correct: 0},
            {topic: 'Triangles', emoji: '📏💰', question: 'Altitude to side in equilateral triangle side 10?', options: ['5√3', '10√3', '5', '10'], correct: 0},
            {topic: 'Triangles', emoji: '🔺🔢', question: 'Orthocenter, centroid, circumcenter lie on?', options: ['Euler line', 'Median', 'Altitude', 'Angle bisector'], correct: 0},
            {topic: 'Triangles', emoji: '📐📊', question: 'Area: two sides 8, 10, included angle 60°?', options: ['20√3', '40', '20', '40√3'], correct: 0},
            {topic: 'Triangles', emoji: '🔺🎯', question: 'Incircle radius: area 24, perimeter 24?', options: ['2', '3', '1', '4'], correct: 0},
            {topic: 'Triangles', emoji: '📏🔺', question: 'Length of median to hypotenuse, hyp 16?', options: ['8', '16', '4', '12'], correct: 0}
        ],
        extreme: [
            {topic: 'Triangles', emoji: '🔺📐', question: 'Find area of triangle with sides 13, 14, 15', answer: '84'},
            {topic: 'Triangles', emoji: '📏🔺', question: 'In triangle with sides 8, 15, 17, find altitude to side 15', answer: '8'},
            {topic: 'Triangles', emoji: '🔺💯', question: 'Circumradius of triangle with sides 5, 12, 13', answer: '6.5'},
            {topic: 'Triangles', emoji: '📐🎯', question: 'Area of equilateral triangle with side 8', answer: '16√3 or 27.71'},
            {topic: 'Triangles', emoji: '🔺📊', question: 'Inradius of triangle with sides 5, 12, 13', answer: '2'},
            {topic: 'Triangles', emoji: '📏💰', question: 'If medians of triangle are 6, 8, 10, find area', answer: '32'},
            {topic: 'Triangles', emoji: '🔺🔢', question: 'In 30-60-90 triangle, if longer leg = 12, find hypotenuse', answer: '8√3 or 13.86'},
            {topic: 'Triangles', emoji: '📐📊', question: 'Area with two sides 10, 12 and included angle 30°', answer: '30'},
            {topic: 'Triangles', emoji: '🔺🎯', question: 'If triangle sides are x, x+2, x+4 and perimeter 30, find x', answer: '8'},
            {topic: 'Triangles', emoji: '📏🔺', question: 'Distance from centroid to vertex if median length 15', answer: '10'}
        ]
    },
    11: { // Chapter 11: Circles
        easy: [
            {topic: 'Circles', emoji: '⭕📏', question: 'A circle has 360°.', options: ['True', 'False'], correct: 0},
            {topic: 'Circles', emoji: '🔵📐', question: 'Diameter is twice the radius.', options: ['True', 'False'], correct: 0},
            {topic: 'Circles', emoji: '⭕💯', question: 'Circumference = 2πr.', options: ['True', 'False'], correct: 0},
            {topic: 'Circles', emoji: '🔵🎯', question: 'Area of circle = πr².', options: ['True', 'False'], correct: 0},
            {topic: 'Circles', emoji: '⭕📊', question: 'A chord connects two points on circle.', options: ['True', 'False'], correct: 0},
            {topic: 'Circles', emoji: '🔵🔢', question: 'Diameter is the longest chord.', options: ['True', 'False'], correct: 0},
            {topic: 'Circles', emoji: '⭕📐', question: 'A tangent touches circle at one point.', options: ['True', 'False'], correct: 0},
            {topic: 'Circles', emoji: '🔵💰', question: 'π is approximately 3.14.', options: ['True', 'False'], correct: 0},
            {topic: 'Circles', emoji: '⭕🔢', question: 'A semicircle is half a circle.', options: ['True', 'False'], correct: 0},
            {topic: 'Circles', emoji: '🔵📊', question: 'A radius is half the diameter.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Circles', emoji: '⭕📏', question: 'Circumference if radius = 7?', options: ['14π', '7π'], correct: 0},
            {topic: 'Circles', emoji: '🔵📐', question: 'Area if radius = 5?', options: ['25π', '10π'], correct: 0},
            {topic: 'Circles', emoji: '⭕💯', question: 'Diameter if radius = 8?', options: ['16', '8'], correct: 0},
            {topic: 'Circles', emoji: '🔵🎯', question: 'Radius if diameter = 20?', options: ['10', '40'], correct: 0},
            {topic: 'Circles', emoji: '⭕📊', question: 'Circumference if diameter = 10?', options: ['10π', '20π'], correct: 0},
            {topic: 'Circles', emoji: '🔵🔢', question: 'Area if diameter = 12?', options: ['36π', '144π'], correct: 0},
            {topic: 'Circles', emoji: '⭕📐', question: 'Radius if circumference = 10π?', options: ['5', '10'], correct: 0},
            {topic: 'Circles', emoji: '🔵💰', question: 'Diameter if area = 9π?', options: ['6', '3'], correct: 0},
            {topic: 'Circles', emoji: '⭕🔢', question: 'Circumference of semicircle, r = 4?', options: ['4π + 8', '4π'], correct: 0},
            {topic: 'Circles', emoji: '🔵📊', question: 'Area of semicircle, r = 6?', options: ['18π', '36π'], correct: 0}
        ],
        hard: [
            {topic: 'Circles', emoji: '⭕📏', question: 'Area of sector with angle 60°, radius 6?', options: ['6π', '12π', '3π'], correct: 0},
            {topic: 'Circles', emoji: '🔵📐', question: 'Length of arc, angle 90°, radius 8?', options: ['4π', '2π', '8π'], correct: 0},
            {topic: 'Circles', emoji: '⭕💯', question: 'Area of annulus: outer r=5, inner r=3?', options: ['16π', '8π', '20π'], correct: 0},
            {topic: 'Circles', emoji: '🔵🎯', question: 'Chord length if perpendicular from center is 3, r=5?', options: ['8', '6', '10'], correct: 0},
            {topic: 'Circles', emoji: '⭕📊', question: 'Central angle if arc = πr/2?', options: ['90°', '45°', '180°'], correct: 0},
            {topic: 'Circles', emoji: '🔵🔢', question: 'Inscribed angle on diameter is?', options: ['90°', '180°', '45°'], correct: 0},
            {topic: 'Circles', emoji: '⭕📐', question: 'Area of circle inscribed in square, side 10?', options: ['25π', '100π', '50π'], correct: 0},
            {topic: 'Circles', emoji: '🔵💰', question: 'Perimeter of quarter circle, r = 12?', options: ['6π + 24', '3π + 12', '12π'], correct: 0},
            {topic: 'Circles', emoji: '⭕🔢', question: 'Radius of circle circumscribing square, side 8?', options: ['4√2', '8', '8√2'], correct: 0},
            {topic: 'Circles', emoji: '🔵📊', question: 'Length of tangent from external point 13 units, r=5?', options: ['12', '8', '13'], correct: 0}
        ],
        expert: [
            {topic: 'Circles', emoji: '⭕📏', question: 'Area of segment: sector 120°, r=6, triangle subtracted?', options: ['12π - 9√3', '12π', '6π - 9√3', '18π'], correct: 0},
            {topic: 'Circles', emoji: '🔵📐', question: 'Common chord length of two circles r=5, centers 6 apart?', options: ['8', '10', '6', '4'], correct: 0},
            {topic: 'Circles', emoji: '⭕💯', question: 'Angle inscribed in arc 100° is?', options: ['50°', '100°', '25°', '200°'], correct: 0},
            {topic: 'Circles', emoji: '🔵🎯', question: 'Radius of circle touching all sides of triangle 6-8-10?', options: ['2', '3', '1', '4'], correct: 0},
            {topic: 'Circles', emoji: '⭕📊', question: 'Power of point 10 units from center, r=6?', options: ['64', '16', '100', '36'], correct: 0},
            {topic: 'Circles', emoji: '🔵🔢', question: 'Area of largest circle in right triangle 3-4-5?', options: ['π', '2π', '4π', '2.25π'], correct: 0},
            {topic: 'Circles', emoji: '⭕📐', question: 'Two tangents from external point form 60°. Distance if r=8?', options: ['16', '8√3', '16√3', '8'], correct: 0},
            {topic: 'Circles', emoji: '🔵💰', question: 'Area between circle r=10 and inscribed square?', options: ['100π - 200', '100π - 100', '50π - 100', '100π'], correct: 0},
            {topic: 'Circles', emoji: '⭕🔢', question: 'Radius of semicircle on hypotenuse 3-4-5 triangle?', options: ['2.5', '3', '2', '4'], correct: 0},
            {topic: 'Circles', emoji: '🔵📊', question: 'Chord makes 30° at center. If r=10, chord length?', options: ['10', '5√3', '10√3', '5'], correct: 0}
        ],
        extreme: [
            {topic: 'Circles', emoji: '⭕📏', question: 'Area of region between two concentric circles r=7 and r=5', answer: '24π'},
            {topic: 'Circles', emoji: '🔵📐', question: 'Find radius if arc length 10π corresponds to 150° angle', answer: '12'},
            {topic: 'Circles', emoji: '⭕💯', question: 'Perimeter of sector with angle 72° and radius 15', answer: '6π + 30'},
            {topic: 'Circles', emoji: '🔵🎯', question: 'Common tangent length if two circles r=3, r=5, centers 10 apart', answer: '√84 or 9.17'},
            {topic: 'Circles', emoji: '⭕📊', question: 'Area of largest equilateral triangle inscribed in circle r=12', answer: '108√3'},
            {topic: 'Circles', emoji: '🔵🔢', question: 'Radius of circle circumscribing equilateral triangle side 6', answer: '2√3 or 3.46'},
            {topic: 'Circles', emoji: '⭕📐', question: 'Distance between centers of two circles r1=8, r2=6 touching externally', answer: '14'},
            {topic: 'Circles', emoji: '🔵💰', question: 'Area of circle inscribed in rhombus diagonals 16 and 12', answer: '28.8π'},
            {topic: 'Circles', emoji: '⭕🔢', question: 'If chord subtends 60° at center and is 10 cm, find radius', answer: '10'},
            {topic: 'Circles', emoji: '🔵📊', question: 'Area of lune if semicircle diameter equals square side 8', answer: '32'}
        ]
    },
    12: { // Chapter 12: 3D Shapes
        easy: [
            {topic: '3D Shapes', emoji: '🎲📦', question: 'A cube has 6 faces.', options: ['True', 'False'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺📐', question: 'A sphere is perfectly round.', options: ['True', 'False'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'Volume of cube = side³.', options: ['True', 'False'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲💯', question: 'A cylinder has two circular bases.', options: ['True', 'False'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺📊', question: 'A cone has one circular base.', options: ['True', 'False'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🔢', question: 'Volume of sphere = (4/3)πr³.', options: ['True', 'False'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲📐', question: 'A prism has two parallel bases.', options: ['True', 'False'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺💰', question: 'Surface area of cube = 6 × side².', options: ['True', 'False'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'A pyramid has triangular faces.', options: ['True', 'False'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲📊', question: 'A cuboid has rectangular faces.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: '3D Shapes', emoji: '🎲📦', question: 'Volume of cube with side 5?', options: ['125', '25'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺📐', question: 'Surface area of cube with side 4?', options: ['96', '64'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'Volume of cuboid: 3×4×5?', options: ['60', '47'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲💯', question: 'Volume of cylinder: r=3, h=7?', options: ['63π', '21π'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺📊', question: 'Volume of sphere with r=3?', options: ['36π', '27π'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🔢', question: 'Surface area of sphere with r=5?', options: ['100π', '25π'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲📐', question: 'Volume of cone: r=4, h=9?', options: ['48π', '144π'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺💰', question: 'Total surface area of cube, side 6?', options: ['216', '36'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'Volume of square pyramid: base 6, h=9?', options: ['108', '324'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲📊', question: 'Curved surface area of cylinder: r=2, h=5?', options: ['20π', '10π'], correct: 0}
        ],
        hard: [
            {topic: '3D Shapes', emoji: '🎲📦', question: 'Volume of sphere inscribed in cube, side 6?', options: ['36π', '216π', '108π'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺📐', question: 'Total surface area of cylinder: r=7, h=10?', options: ['238π', '140π', '119π'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'Volume of hemisphere with r=6?', options: ['144π', '288π', '72π'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲💯', question: 'Slant height of cone: r=5, h=12?', options: ['13', '17', '7'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺📊', question: 'Total surface area of cone: r=7, l=25?', options: ['224π', '175π', '49π'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🔢', question: 'Volume of cuboid: 8×6×5?', options: ['240', '220', '180'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲📐', question: 'Diagonal of cube with side 4?', options: ['4√3', '4√2', '8'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺💰', question: 'Surface area of cuboid: 10×8×6?', options: ['376', '480', '280'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'Volume of prism: triangular base area 20, h=15?', options: ['300', '150', '600'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲📊', question: 'Volume of frustum: top r=3, bottom r=5, h=4?', options: ['196π/3', '64π', '52π'], correct: 0}
        ],
        expert: [
            {topic: '3D Shapes', emoji: '🎲📦', question: 'Volume of largest sphere in cube side 12?', options: ['288π', '576π', '144π', '432π'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺📐', question: 'Total surface area of hemisphere r=14?', options: ['1176π', '588π', '784π', '392π'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'Volume of largest cone in cylinder r=6, h=10?', options: ['120π', '360π', '180π', '60π'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲💯', question: 'Space diagonal of cuboid 12×9×8?', options: ['17', '15', '20', '14'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺📊', question: 'Curved surface area of cone r=5, slant 13?', options: ['65π', '130π', '25π', '169π'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🔢', question: 'Volume of spherical shell: outer r=10, inner r=8?', options: ['488π', '1000π', '512π', '368π'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲📐', question: 'Surface area of regular tetrahedron edge 6?', options: ['36√3', '72√3', '18√3', '108√3'], correct: 0},
            {topic: '3D Shapes', emoji: '🔺💰', question: 'Volume of right circular cone r=8, h=15?', options: ['320π', '960π', '480π', '160π'], correct: 0},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'Total surface area of hollow cylinder: R=10, r=8, h=7?', options: ['252π', '224π', '280π', '196π'], correct: 0},
            {topic: '3D Shapes', emoji: '🎲📊', question: 'Volume of octahedron with edge a=4?', options: ['128√2/3', '64√2', '32√2', '256√2/3'], correct: 0}
        ],
        extreme: [
            {topic: '3D Shapes', emoji: '🎲📦', question: 'Volume of largest cylinder inscribed in sphere radius 10', answer: '1000π√2/3'},
            {topic: '3D Shapes', emoji: '🔺📐', question: 'Surface area of cone r=24, slant height=30', answer: '1296π'},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'Volume of regular octahedron with edge length 6', answer: '72√2'},
            {topic: '3D Shapes', emoji: '🎲💯', question: 'If sphere volume is 288π, find its radius', answer: '6'},
            {topic: '3D Shapes', emoji: '🔺📊', question: 'Longest diagonal of cuboid 8×15×20', answer: '27'},
            {topic: '3D Shapes', emoji: '📦🔢', question: 'Volume of frustum cone: top r=4, bottom r=8, height=9', answer: '336π'},
            {topic: '3D Shapes', emoji: '🎲📐', question: 'Surface area of hemisphere with diameter 28', answer: '1176π'},
            {topic: '3D Shapes', emoji: '🔺💰', question: 'Volume of largest cube that fits in sphere radius 3√3', answer: '216'},
            {topic: '3D Shapes', emoji: '📦🎯', question: 'If cube volume is 1728, find its surface area', answer: '864'},
            {topic: '3D Shapes', emoji: '🎲📊', question: 'Volume of cone formed by semicircle radius 7 rotating around diameter', answer: '343π/3'}
        ]
    },
        13: { // Chapter 13: Exponents and Powers
        easy: [
            {topic: 'Exponents', emoji: '🔢💪', question: '2³ equals 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Exponents', emoji: '💯📊', question: 'Any number to power 0 equals 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Exponents', emoji: '🔢🎯', question: '10² equals 100.', options: ['True', 'False'], correct: 0},
            {topic: 'Exponents', emoji: '💪📈', question: '5¹ equals 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Exponents', emoji: '🔢💯', question: '3² equals 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Exponents', emoji: '📊🎯', question: '4² equals 16.', options: ['True', 'False'], correct: 0},
            {topic: 'Exponents', emoji: '💪🔢', question: '2⁴ equals 16.', options: ['True', 'False'], correct: 0},
            {topic: 'Exponents', emoji: '💯📈', question: '1 to any power equals 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Exponents', emoji: '🔢📊', question: '6² equals 36.', options: ['True', 'False'], correct: 0},
            {topic: 'Exponents', emoji: '🎯💪', question: '10³ equals 1000.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Exponents', emoji: '🔢💪', question: 'What is 2⁵?', options: ['32', '64'], correct: 0},
            {topic: 'Exponents', emoji: '💯📊', question: 'What is 3⁴?', options: ['81', '64'], correct: 0},
            {topic: 'Exponents', emoji: '🔢🎯', question: 'What is 5³?', options: ['125', '75'], correct: 0},
            {topic: 'Exponents', emoji: '💪📈', question: 'Simplify: 2³ × 2²', options: ['2⁵', '2⁶'], correct: 0},
            {topic: 'Exponents', emoji: '🔢💯', question: 'What is 7²?', options: ['49', '14'], correct: 0},
            {topic: 'Exponents', emoji: '📊🎯', question: 'Simplify: 10⁴ ÷ 10²', options: ['10²', '10⁶'], correct: 0},
            {topic: 'Exponents', emoji: '💪🔢', question: 'What is 2⁻¹?', options: ['0.5', '2'], correct: 0},
            {topic: 'Exponents', emoji: '💯📈', question: 'What is (3²)²?', options: ['3⁴', '3⁸'], correct: 0},
            {topic: 'Exponents', emoji: '🔢📊', question: 'What is 8²?', options: ['64', '16'], correct: 0},
            {topic: 'Exponents', emoji: '🎯💪', question: 'Simplify: 5² × 5³', options: ['5⁵', '5⁶'], correct: 0}
        ],
        hard: [
            {topic: 'Exponents', emoji: '🔢💪', question: 'Simplify: (2³)⁴', options: ['2¹²', '2⁷', '2¹⁶'], correct: 0},
            {topic: 'Exponents', emoji: '💯📊', question: 'What is 4⁻²?', options: ['1/16', '1/8', '1/4'], correct: 0},
            {topic: 'Exponents', emoji: '🔢🎯', question: 'Simplify: (x²y³)²', options: ['x⁴y⁶', 'x⁴y⁵', 'x²y⁶'], correct: 0},
            {topic: 'Exponents', emoji: '💪📈', question: 'What is 2⁶ ÷ 2³?', options: ['8', '4', '16'], correct: 0},
            {topic: 'Exponents', emoji: '🔢💯', question: 'Simplify: 3⁵ × 3⁻²', options: ['3³', '3⁷', '3¹⁰'], correct: 0},
            {topic: 'Exponents', emoji: '📊🎯', question: 'What is (5²)³?', options: ['5⁶', '5⁵', '5⁸'], correct: 0},
            {topic: 'Exponents', emoji: '💪🔢', question: 'Simplify: x⁸ ÷ x³', options: ['x⁵', 'x¹¹', 'x⁶'], correct: 0},
            {topic: 'Exponents', emoji: '💯📈', question: 'What is 16^(1/2)?', options: ['4', '8', '2'], correct: 0},
            {topic: 'Exponents', emoji: '🔢📊', question: 'Simplify: (ab²)³', options: ['a³b⁶', 'a³b⁵', 'a²b⁶'], correct: 0},
            {topic: 'Exponents', emoji: '🎯💪', question: 'What is 27^(1/3)?', options: ['3', '9', '6'], correct: 0}
        ],
        expert: [
            {topic: 'Exponents', emoji: '🔢💪', question: 'Simplify: (2x³y²)⁴', options: ['16x¹²y⁸', '8x¹²y⁸', '16x⁷y⁶', '2x¹²y⁸'], correct: 0},
            {topic: 'Exponents', emoji: '💯📊', question: 'What is 8^(2/3)?', options: ['4', '2', '8', '16'], correct: 0},
            {topic: 'Exponents', emoji: '🔢🎯', question: 'Simplify: (x⁻²y³)⁻³', options: ['x⁶/y⁹', 'x⁶y⁹', 'x⁻⁶y⁹', 'x⁻⁶/y⁹'], correct: 0},
            {topic: 'Exponents', emoji: '💪📈', question: 'What is 32^(3/5)?', options: ['8', '16', '4', '32'], correct: 0},
            {topic: 'Exponents', emoji: '🔢💯', question: 'Simplify: (2⁴ × 3²)/(2² × 3)', options: ['12', '18', '6', '24'], correct: 0},
            {topic: 'Exponents', emoji: '📊🎯', question: 'What is (1/4)⁻²?', options: ['16', '8', '4', '1/16'], correct: 0},
            {topic: 'Exponents', emoji: '💪🔢', question: 'Simplify: √(x⁴y⁶)', options: ['x²y³', 'x²y²', 'xy³', 'x⁴y³'], correct: 0},
            {topic: 'Exponents', emoji: '💯📈', question: 'What is 64^(-1/3)?', options: ['1/4', '4', '1/8', '8'], correct: 0},
            {topic: 'Exponents', emoji: '🔢📊', question: 'Simplify: (a²b⁻³)/(a⁻¹b²)', options: ['a³/b⁵', 'a³b⁵', 'a/b⁵', 'a³/b'], correct: 0},
            {topic: 'Exponents', emoji: '🎯💪', question: 'What is 125^(2/3)?', options: ['25', '15', '5', '50'], correct: 0}
        ],
        extreme: [
            {topic: 'Exponents', emoji: '🔢💪', question: 'Simplify: (3²)³ × 3⁻⁴', answer: '9 or 3²'},
            {topic: 'Exponents', emoji: '💯📊', question: 'If 2^x = 32, find x', answer: '5'},
            {topic: 'Exponents', emoji: '🔢🎯', question: 'Simplify: (x³y⁻²z)⁴/(x²y⁻³z⁴)', answer: 'x¹⁰y⁴ or x^10/y^-4'},
            {topic: 'Exponents', emoji: '💪📈', question: 'What is 16^(3/4)?', answer: '8'},
            {topic: 'Exponents', emoji: '🔢💯', question: 'If 3^(2x+1) = 27, find x', answer: '1'},
            {topic: 'Exponents', emoji: '📊🎯', question: 'Simplify: (2^n × 4^n)/8^n', answer: '1'},
            {topic: 'Exponents', emoji: '💪🔢', question: 'What is (√2)⁸?', answer: '16'},
            {topic: 'Exponents', emoji: '💯📈', question: 'If 5^x = 1/125, find x', answer: '-3'},
            {topic: 'Exponents', emoji: '🔢📊', question: 'Simplify: (27)^(4/3)', answer: '81'},
            {topic: 'Exponents', emoji: '🎯💪', question: 'If 2^x × 4^x = 64, find x', answer: '2'}
        ]
    },
    14: { // Chapter 14: Square Roots and Radicals
        easy: [
            {topic: 'Square Roots', emoji: '√️🔢', question: '√4 equals 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Square Roots', emoji: '💯√️', question: '√9 equals 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📊', question: '√16 equals 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Square Roots', emoji: '🔢💪', question: '√25 equals 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Square Roots', emoji: '√️🎯', question: '√36 equals 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Square Roots', emoji: '💯🔢', question: '√49 equals 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📈', question: '√64 equals 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Square Roots', emoji: '🔢√️', question: '√81 equals 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Square Roots', emoji: '💪💯', question: '√100 equals 10.', options: ['True', 'False'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📊', question: '√1 equals 1.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Square Roots', emoji: '√️🔢', question: 'What is √121?', options: ['11', '12'], correct: 0},
            {topic: 'Square Roots', emoji: '💯√️', question: 'Find √144', options: ['12', '14'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📊', question: 'What is √169?', options: ['13', '12'], correct: 0},
            {topic: 'Square Roots', emoji: '🔢💪', question: 'Simplify: √50', options: ['5√2', '2√5'], correct: 0},
            {topic: 'Square Roots', emoji: '√️🎯', question: 'What is √196?', options: ['14', '13'], correct: 0},
            {topic: 'Square Roots', emoji: '💯🔢', question: 'Simplify: √32', options: ['4√2', '2√8'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📈', question: 'What is √225?', options: ['15', '14'], correct: 0},
            {topic: 'Square Roots', emoji: '🔢√️', question: 'Simplify: √18', options: ['3√2', '2√3'], correct: 0},
            {topic: 'Square Roots', emoji: '💪💯', question: 'What is √256?', options: ['16', '15'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📊', question: 'Simplify: √75', options: ['5√3', '3√5'], correct: 0}
        ],
        hard: [
            {topic: 'Square Roots', emoji: '√️🔢', question: 'Simplify: √(48)', options: ['4√3', '3√4', '2√12'], correct: 0},
            {topic: 'Square Roots', emoji: '💯√️', question: 'What is √(0.25)?', options: ['0.5', '0.25', '1'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📊', question: 'Simplify: 2√3 + 3√3', options: ['5√3', '6√3', '√15'], correct: 0},
            {topic: 'Square Roots', emoji: '🔢💪', question: 'Rationalize: 1/√2', options: ['√2/2', '1/2', '2/√2'], correct: 0},
            {topic: 'Square Roots', emoji: '√️🎯', question: 'Simplify: √8 × √2', options: ['4', '√16', '2√4'], correct: 0},
            {topic: 'Square Roots', emoji: '💯🔢', question: 'What is √(49/64)?', options: ['7/8', '1/2', '8/7'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📈', question: 'Simplify: √72', options: ['6√2', '2√36', '8√3'], correct: 0},
            {topic: 'Square Roots', emoji: '🔢√️', question: 'Rationalize: 2/√5', options: ['2√5/5', '√5/2', '10/√5'], correct: 0},
            {topic: 'Square Roots', emoji: '💪💯', question: 'Simplify: √27 + √12', options: ['3√3 + 2√3', '√39', '5√3'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📊', question: 'What is (√5)²?', options: ['5', '√25', '25'], correct: 0}
        ],
        expert: [
            {topic: 'Square Roots', emoji: '√️🔢', question: 'Rationalize: 1/(√3 + √2)', options: ['√3 - √2', '1', '√3 + √2', '√6'], correct: 0},
            {topic: 'Square Roots', emoji: '💯√️', question: 'Reduce: √(x⁴y⁶)', options: ['x²y³', 'x²y²', 'xy³', 'x⁴y³'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📊', question: 'What is ³√27?', options: ['3', '9', '6', '√27'], correct: 0},
            {topic: 'Square Roots', emoji: '🔢💪', question: 'Simplify: (2 + √3)(2 - √3)', options: ['1', '4', '7', '4 - 3'], correct: 0},
            {topic: 'Square Roots', emoji: '√️🎯', question: 'Rationalize: 3/(2 - √5)', options: ['-6 - 3√5', '6 + 3√5', '3√5', '-3√5'], correct: 0},
            {topic: 'Square Roots', emoji: '💯🔢', question: 'What is ³√64?', options: ['4', '8', '2', '16'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📈', question: 'Simplify: √(98a²b⁴)', options: ['7ab²√2', '7a²b⁴√2', '14ab²', '7ab√2'], correct: 0},
            {topic: 'Square Roots', emoji: '🔢√️', question: 'What is ⁴√16?', options: ['2', '4', '8', '1'], correct: 0},
            {topic: 'Square Roots', emoji: '💪💯', question: 'Rationalize: √2/(√3 - 1)', options: ['(√6 + √2)/2', '√6 - √2', '√6/2', '√2'], correct: 0},
            {topic: 'Square Roots', emoji: '√️📊', question: 'Simplify: ³√(54x⁶)', options: ['3x²³√2', '3x³√2', '6x²', '9x²'], correct: 0}
        ],
        extreme: [
            {topic: 'Square Roots', emoji: '√️🔢', question: 'Rationalize: (√5 + √3)/(√5 - √3)', answer: '4 + √15 or (4 + √15)'},
            {topic: 'Square Roots', emoji: '💯√️', question: 'Simplify: √(12 + 2√35)', answer: '√7 + √5'},
            {topic: 'Square Roots', emoji: '√️📊', question: 'If √(x + 5) = 7, find x', answer: '44'},
            {topic: 'Square Roots', emoji: '🔢💪', question: 'Simplify: ³√(128x⁹y⁶)', answer: '4x³y²³√2'},
            {topic: 'Square Roots', emoji: '√️🎯', question: 'Rationalize: 1/(√2 + √3 + √5)', answer: '(√30 + √10 - √6 - 2)/4'},
            {topic: 'Square Roots', emoji: '💯🔢', question: 'What is ⁴√(256)?', answer: '4'},
            {topic: 'Square Roots', emoji: '√️📈', question: 'If √(2x + 3) = √(x + 7), find x', answer: '4'},
            {topic: 'Square Roots', emoji: '🔢√️', question: 'Simplify: (√3 + √2)²', answer: '5 + 2√6'},
            {topic: 'Square Roots', emoji: '💪💯', question: 'Rationalize: 2/(³√4)', answer: '³√2'},
            {topic: 'Square Roots', emoji: '√️📊', question: 'If √x + 1/√x = 3, find x + 1/x', answer: '7'}
        ]
    },
    15: { // Chapter 15: Probability
        easy: [
            {topic: 'Probability', emoji: '🎲🎯', question: 'Probability is between 0 and 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Probability', emoji: '🃏💯', question: 'Impossible event has probability 0.', options: ['True', 'False'], correct: 0},
            {topic: 'Probability', emoji: '🎲📊', question: 'Certain event has probability 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Probability', emoji: '🃏🎯', question: 'Probability of heads in coin toss is 0.5.', options: ['True', 'False'], correct: 0},
            {topic: 'Probability', emoji: '🎲💰', question: 'Dice has 6 equally likely outcomes.', options: ['True', 'False'], correct: 0},
            {topic: 'Probability', emoji: '🃏📈', question: 'Total probability of all outcomes is 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Probability', emoji: '🎲🔢', question: 'P(not A) = 1 - P(A).', options: ['True', 'False'], correct: 0},
            {topic: 'Probability', emoji: '🃏🎲', question: 'Deck has 52 cards.', options: ['True', 'False'], correct: 0},
            {topic: 'Probability', emoji: '🎯💯', question: "Independent events don't affect each other.", options: ['True', 'False'], correct: 0},
            {topic: 'Probability', emoji: '🎲📊', question: 'Sample space contains all outcomes.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Probability', emoji: '🎲🎯', question: 'Probability of getting 3 on a die?', options: ['1/6', '1/3'], correct: 0},
            {topic: 'Probability', emoji: '🃏💯', question: 'Probability of drawing a heart from deck?', options: ['1/4', '1/13'], correct: 0},
            {topic: 'Probability', emoji: '🎲📊', question: 'Probability of even number on die?', options: ['1/2', '1/3'], correct: 0},
            {topic: 'Probability', emoji: '🃏🎯', question: 'Probability of drawing an ace?', options: ['1/13', '1/52'], correct: 0},
            {topic: 'Probability', emoji: '🎲💰', question: 'Probability of getting more than 4 on die?', options: ['1/3', '1/2'], correct: 0},
            {topic: 'Probability', emoji: '🃏📈', question: 'If P(A) = 0.3, what is P(not A)?', options: ['0.7', '0.3'], correct: 0},
            {topic: 'Probability', emoji: '🎲🔢', question: 'Probability of rolling a 1 or 2?', options: ['1/3', '1/6'], correct: 0},
            {topic: 'Probability', emoji: '🃏🎲', question: 'Probability of drawing a face card?', options: ['3/13', '1/4'], correct: 0},
            {topic: 'Probability', emoji: '🎯💯', question: 'Probability of two heads in 2 tosses?', options: ['1/4', '1/2'], correct: 0},
            {topic: 'Probability', emoji: '🎲📊', question: 'Probability of getting 7 on die?', options: ['0', '1/6'], correct: 0}
        ],
        hard: [
            {topic: 'Probability', emoji: '🎲🎯', question: 'Probability of sum 7 with two dice?', options: ['1/6', '1/12', '1/36'], correct: 0},
            {topic: 'Probability', emoji: '🃏💯', question: 'P(drawing 2 aces from deck without replacement)?', options: ['1/221', '1/169', '1/52'], correct: 0},
            {topic: 'Probability', emoji: '🎲📊', question: 'P(at least one head in 3 coin tosses)?', options: ['7/8', '1/2', '3/4'], correct: 0},
            {topic: 'Probability', emoji: '🃏🎯', question: 'P(both cards red, 2 draws no replacement)?', options: ['25/102', '1/4', '1/2'], correct: 0},
            {topic: 'Probability', emoji: '🎲💰', question: 'If A and B independent, P(A)=0.4, P(B)=0.5, P(A∩B)?', options: ['0.2', '0.9', '0.1'], correct: 0},
            {topic: 'Probability', emoji: '🃏📈', question: 'P(sum of 2 dice is 10)?', options: ['1/12', '1/6', '1/36'], correct: 0},
            {topic: 'Probability', emoji: '🎲🔢', question: 'P(exactly 2 heads in 4 tosses)?', options: ['3/8', '1/4', '1/2'], correct: 0},
            {topic: 'Probability', emoji: '🃏🎲', question: 'P(king or queen from deck)?', options: ['2/13', '1/13', '1/26'], correct: 0},
            {topic: 'Probability', emoji: '🎯💯', question: 'P(no sixes in 3 dice rolls)?', options: ['125/216', '5/6', '1/216'], correct: 0},
            {topic: 'Probability', emoji: '🎲📊', question: 'P(A∪B) if P(A)=0.6, P(B)=0.5, P(A∩B)=0.3?', options: ['0.8', '1.1', '0.5'], correct: 0}
        ],
        expert: [
            {topic: 'Probability', emoji: '🎲🎯', question: 'P(exactly 3 heads in 5 coin tosses)?', options: ['10/32', '5/16', '1/2', '3/5'], correct: 0},
            {topic: 'Probability', emoji: '🃏💯', question: 'P(full house in poker - 5 cards)?', options: ['6/4165', '1/4165', '9/4165', '3/4165'], correct: 0},
            {topic: 'Probability', emoji: '🎲📊', question: 'P(sum 8 with 3 dice)?', options: ['21/216', '15/216', '27/216', '18/216'], correct: 0},
            {topic: 'Probability', emoji: '🃏🎯', question: 'If P(A|B)=0.8, P(B)=0.5, P(A∩B)?', options: ['0.4', '0.8', '0.5', '0.3'], correct: 0},
            {topic: 'Probability', emoji: '🎲💰', question: 'P(at least one 6 in 4 dice rolls)?', options: ['671/1296', '1/6', '625/1296', '5/6'], correct: 0},
            {topic: 'Probability', emoji: '🃏📈', question: 'P(flush in poker - all same suit)?', options: ['33/16660', '1/509', '4/52', '1/1000'], correct: 0},
            {topic: 'Probability', emoji: '🎲🔢', question: 'P(getting all different numbers in 3 dice)?', options: ['5/9', '1/6', '1/2', '2/3'], correct: 0},
            {topic: 'Probability', emoji: '🃏🎲', question: 'If P(A)=0.7, P(B|A)=0.6, P(A∩B)?', options: ['0.42', '0.7', '0.6', '1.3'], correct: 0},
            {topic: 'Probability', emoji: '🎯💯', question: 'P(exactly 2 sixes in 5 dice rolls)?', options: ['625/3888', '25/216', '125/1296', '5/36'], correct: 0},
            {topic: 'Probability', emoji: '🎲📊', question: 'Birthday paradox: P(2 share birthday in 23)?', options: ['> 0.5', '< 0.5', '= 0.5', '= 0.23'], correct: 0}
        ],
        extreme: [
            {topic: 'Probability', emoji: '🎲🎯', question: 'P(exactly 7 heads in 10 coin tosses)', answer: '120/1024 or 15/128'},
            {topic: 'Probability', emoji: '🃏💯', question: 'If P(A)=0.6, P(B)=0.5, P(A∪B)=0.8, find P(A|B)', answer: '0.6'},
            {topic: 'Probability', emoji: '🎲📊', question: 'P(sum divisible by 5 with 2 dice)', answer: '7/36'},
            {topic: 'Probability', emoji: '🃏🎯', question: 'P(drawing 3 aces in 5 cards from deck)', answer: '94/54145'},
            {topic: 'Probability', emoji: '🎲💰', question: 'Expected value of rolling one die', answer: '3.5'},
            {topic: 'Probability', emoji: '🃏📈', question: 'P(royal flush in poker)', answer: '1/649740'},
            {topic: 'Probability', emoji: '🎲🔢', question: 'P(all 6 faces appear when rolling die 10 times)', answer: '0.272 or 27.2%'},
            {topic: 'Probability', emoji: '🃏🎲', question: 'If disease affects 1%, test 95% accurate. P(disease|positive)?', answer: '≈0.161 or 16.1%'},
            {topic: 'Probability', emoji: '🎯💯', question: 'P(Monty Hall: switching wins)', answer: '2/3'},
            {topic: 'Probability', emoji: '🎲📊', question: 'P(no repeated numbers in 4 dice rolls)', answer: '5/18'}
        ]
    },
    16: { // Chapter 16: Statistics
        easy: [
            {topic: 'Statistics', emoji: '📊📈', question: 'Mean is the average.', options: ['True', 'False'], correct: 0},
            {topic: 'Statistics', emoji: '📉🔢', question: 'Median is the middle value.', options: ['True', 'False'], correct: 0},
            {topic: 'Statistics', emoji: '📊💯', question: 'Mode is the most frequent value.', options: ['True', 'False'], correct: 0},
            {topic: 'Statistics', emoji: '📈🎯', question: 'Range is max minus min.', options: ['True', 'False'], correct: 0},
            {topic: 'Statistics', emoji: '📉📊', question: 'Data can have multiple modes.', options: ['True', 'False'], correct: 0},
            {topic: 'Statistics', emoji: '🔢💰', question: 'Mean uses all data values.', options: ['True', 'False'], correct: 0},
            {topic: 'Statistics', emoji: '📊🔢', question: 'Median needs data to be ordered.', options: ['True', 'False'], correct: 0},
            {topic: 'Statistics', emoji: '📈💯', question: 'Standard deviation measures spread.', options: ['True', 'False'], correct: 0},
            {topic: 'Statistics', emoji: '📉🎯', question: 'Outliers affect the mean.', options: ['True', 'False'], correct: 0},
            {topic: 'Statistics', emoji: '📊📈', question: 'Population is larger than sample.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Statistics', emoji: '📊📈', question: 'Mean of 3, 7, 11, 15?', options: ['9', '11'], correct: 0},
            {topic: 'Statistics', emoji: '📉🔢', question: 'Median of 2, 4, 6, 8, 10?', options: ['6', '5'], correct: 0},
            {topic: 'Statistics', emoji: '📊💯', question: 'Mode of 3, 5, 5, 7, 9?', options: ['5', '7'], correct: 0},
            {topic: 'Statistics', emoji: '📈🎯', question: 'Range of 10, 15, 20, 25?', options: ['15', '20'], correct: 0},
            {topic: 'Statistics', emoji: '📉📊', question: 'Median of 1, 3, 5, 7?', options: ['4', '5'], correct: 0},
            {topic: 'Statistics', emoji: '🔢💰', question: 'Mean of 5, 10, 15, 20?', options: ['12.5', '15'], correct: 0},
            {topic: 'Statistics', emoji: '📊🔢', question: 'Mode of 2, 2, 3, 4, 4?', options: ['2 and 4', '3'], correct: 0},
            {topic: 'Statistics', emoji: '📈💯', question: 'Range of 8, 12, 15, 22?', options: ['14', '12'], correct: 0},
            {topic: 'Statistics', emoji: '📉🎯', question: 'Median of 5, 8, 12?', options: ['8', '5'], correct: 0},
            {topic: 'Statistics', emoji: '📊📈', question: 'Mean of 6, 9, 12, 15?', options: ['10.5', '9'], correct: 0}
        ],
        hard: [
            {topic: 'Statistics', emoji: '📊📈', question: 'Mean of 2, 5, 7, 11, 15?', options: ['8', '7', '9'], correct: 0},
            {topic: 'Statistics', emoji: '📉🔢', question: 'Q1 of data: 3, 7, 8, 12, 15, 18, 20?', options: ['7.5', '7', '8'], correct: 0},
            {topic: 'Statistics', emoji: '📊💯', question: 'IQR if Q1=25 and Q3=40?', options: ['15', '65', '25'], correct: 0},
            {topic: 'Statistics', emoji: '📈🎯', question: 'Variance of 2, 4, 6, 8 (mean=5)?', options: ['5', '2.5', '10'], correct: 0},
            {topic: 'Statistics', emoji: '📉📊', question: 'Standard deviation if variance=16?', options: ['4', '8', '2'], correct: 0},
            {topic: 'Statistics', emoji: '🔢💰', question: 'Median of 3, 5, 7, 9, 11, 13?', options: ['8', '7', '9'], correct: 0},
            {topic: 'Statistics', emoji: '📊🔢', question: 'Weighted mean: 80(weight 3), 90(weight 2)?', options: ['84', '85', '86'], correct: 0},
            {topic: 'Statistics', emoji: '📈💯', question: 'Q3 of data: 2, 4, 6, 8, 10?', options: ['9', '8', '10'], correct: 0},
            {topic: 'Statistics', emoji: '📉🎯', question: 'Range of 5, 12, 8, 20, 15?', options: ['15', '12', '20'], correct: 0},
            {topic: 'Statistics', emoji: '📊📈', question: 'Mean absolute deviation of 2, 4, 6 (mean=4)?', options: ['4/3', '2', '1'], correct: 0}
        ],
        expert: [
            {topic: 'Statistics', emoji: '📊📈', question: 'If mean=50, SD=10, what % within 1 SD (normal)?', options: ['68%', '95%', '99.7%', '50%'], correct: 0},
            {topic: 'Statistics', emoji: '📉🔢', question: 'Correlation coefficient r=1 means?', options: ['Perfect positive', 'Perfect negative', 'No correlation', 'Weak'], correct: 0},
            {topic: 'Statistics', emoji: '📊💯', question: 'Z-score if x=75, mean=60, SD=5?', options: ['3', '2', '15', '1'], correct: 0},
            {topic: 'Statistics', emoji: '📈🎯', question: 'Coefficient of variation: mean=50, SD=10?', options: ['20%', '5%', '10%', '0.2'], correct: 0},
            {topic: 'Statistics', emoji: '📉📊', question: 'Percentile rank if 80 out of 100 below you?', options: ['80th', '20th', '90th', '70th'], correct: 0},
            {topic: 'Statistics', emoji: '🔢💰', question: 'Sample variance divisor for n=10?', options: ['9', '10', '11', '8'], correct: 0},
            {topic: 'Statistics', emoji: '📊🔢', question: 'Skewness: mean>median>mode indicates?', options: ['Right skew', 'Left skew', 'Symmetric', 'Uniform'], correct: 0},
            {topic: 'Statistics', emoji: '📈💯', question: 'If r²=0.64, what is r (positive)?', options: ['0.8', '0.64', '0.4', '0.32'], correct: 0},
            {topic: 'Statistics', emoji: '📉🎯', question: 'Standard error = SD/√n. If SD=20, n=25?', options: ['4', '5', '0.8', '100'], correct: 0},
            {topic: 'Statistics', emoji: '📊📈', question: 'Outlier if beyond Q1 - 1.5×IQR or Q3 + 1.5×IQR. Q1=20, Q3=40, is 70 outlier?', options: ['Yes', 'No', 'Maybe', 'Cannot tell'], correct: 0}
        ],
        extreme: [
            {topic: 'Statistics', emoji: '📊📈', question: 'Find variance of data set: 4, 8, 12, 16, 20', answer: '32'},
            {topic: 'Statistics', emoji: '📉🔢', question: 'If z-score is 2.5, mean=100, SD=15, find x', answer: '137.5'},
            {topic: 'Statistics', emoji: '📊💯', question: 'Find standard deviation of: 2, 4, 6, 8, 10', answer: '√8 or 2.83'},
            {topic: 'Statistics', emoji: '📈🎯', question: 'Calculate IQR for: 3, 5, 7, 9, 11, 13, 15, 17, 19', answer: '10'},
            {topic: 'Statistics', emoji: '📉📊', question: 'Correlation r=-0.9 means what type of relationship?', answer: 'Strong negative'},
            {topic: 'Statistics', emoji: '🔢💰', question: 'If data set sum=500, n=25, find mean', answer: '20'},
            {topic: 'Statistics', emoji: '📊🔢', question: 'What percentile is score 85 if mean=70, SD=10 (normal)?', answer: '93.3 or 93rd'},
            {topic: 'Statistics', emoji: '📈💯', question: 'Find coefficient of variation if mean=80, SD=16', answer: '20% or 0.2'},
            {topic: 'Statistics', emoji: '📉🎯', question: 'In normal distribution, what % within 2 SD of mean?', answer: '95% or 95.45%'},
            {topic: 'Statistics', emoji: '📊📈', question: 'Calculate weighted mean: 70(wt 2), 80(wt 3), 90(wt 5)', answer: '83'}
        ]
    },
    17: { // Chapter 17: Sequences and Series
        easy: [
            {topic: 'Sequences', emoji: '🔢➡️', question: 'Arithmetic sequence has constant difference.', options: ['True', 'False'], correct: 0},
            {topic: 'Sequences', emoji: '📊💯', question: 'Geometric sequence has constant ratio.', options: ['True', 'False'], correct: 0},
            {topic: 'Sequences', emoji: '🔢📈', question: '2, 4, 6, 8 is arithmetic.', options: ['True', 'False'], correct: 0},
            {topic: 'Sequences', emoji: '➡️🎯', question: '3, 6, 12, 24 is geometric.', options: ['True', 'False'], correct: 0},
            {topic: 'Sequences', emoji: '🔢💰', question: 'First term is often denoted a₁.', options: ['True', 'False'], correct: 0},
            {topic: 'Sequences', emoji: '📊🔢', question: 'Common difference is denoted d.', options: ['True', 'False'], correct: 0},
            {topic: 'Sequences', emoji: '➡️💯', question: 'Common ratio is denoted r.', options: ['True', 'False'], correct: 0},
            {topic: 'Sequences', emoji: '🔢📊', question: 'Series is sum of sequence terms.', options: ['True', 'False'], correct: 0},
            {topic: 'Sequences', emoji: '🎯📈', question: '1, 3, 5, 7 has common difference 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Sequences', emoji: '🔢➡️', question: '2, 6, 18, 54 has common ratio 3.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Sequences', emoji: '🔢➡️', question: 'Next term in 5, 10, 15, 20, __?', options: ['25', '30'], correct: 0},
            {topic: 'Sequences', emoji: '📊💯', question: 'Next term in 3, 9, 27, 81, __?', options: ['243', '162'], correct: 0},
            {topic: 'Sequences', emoji: '🔢📈', question: 'Common difference in 7, 12, 17, 22?', options: ['5', '10'], correct: 0},
            {topic: 'Sequences', emoji: '➡️🎯', question: 'Common ratio in 2, 6, 18, 54?', options: ['3', '4'], correct: 0},
            {topic: 'Sequences', emoji: '🔢💰', question: '10th term of 3, 6, 9, 12, ...?', options: ['30', '33'], correct: 0},
            {topic: 'Sequences', emoji: '📊🔢', question: 'Sum of first 5 terms: 2, 4, 6, 8, 10?', options: ['30', '20'], correct: 0},
            {topic: 'Sequences', emoji: '➡️💯', question: '5th term of 2, 4, 8, 16, ...?', options: ['32', '64'], correct: 0},
            {topic: 'Sequences', emoji: '🔢📊', question: 'Missing term: 5, __, 15, 20?', options: ['10', '12'], correct: 0},
            {topic: 'Sequences', emoji: '🎯📈', question: 'Common difference in 100, 95, 90, 85?', options: ['-5', '5'], correct: 0},
            {topic: 'Sequences', emoji: '🔢➡️', question: 'Next in 1, 4, 9, 16, __? (squares)', options: ['25', '20'], correct: 0}
        ],
        hard: [
            {topic: 'Sequences', emoji: '🔢➡️', question: 'aₙ = 3n + 2. Find a₁₀?', options: ['32', '30', '35'], correct: 0},
            {topic: 'Sequences', emoji: '📊💯', question: 'Sum of first 10 terms: 1, 2, 3, ..., 10?', options: ['55', '50', '45'], correct: 0},
            {topic: 'Sequences', emoji: '🔢📈', question: 'Geometric: a₁=3, r=2. Find a₅?', options: ['48', '32', '96'], correct: 0},
            {topic: 'Sequences', emoji: '➡️🎯', question: 'Arithmetic: a₁=5, d=3. Find a₁₅?', options: ['47', '50', '44'], correct: 0},
            {topic: 'Sequences', emoji: '🔢💰', question: 'Sum of geometric: a=2, r=3, n=4?', options: ['80', '120', '40'], correct: 0},
            {topic: 'Sequences', emoji: '📊🔢', question: 'aₙ = 2ⁿ. Find a₆?', options: ['64', '32', '128'], correct: 0},
            {topic: 'Sequences', emoji: '➡️💯', question: 'Which term is 37 in 1, 4, 7, 10, ...?', options: ['13th', '12th', '14th'], correct: 0},
            {topic: 'Sequences', emoji: '🔢📊', question: 'Sum: 5 + 10 + 15 + ... + 50?', options: ['275', '250', '300'], correct: 0},
            {topic: 'Sequences', emoji: '🎯📈', question: 'Geometric mean of 4 and 16?', options: ['8', '10', '12'], correct: 0},
            {topic: 'Sequences', emoji: '🔢➡️', question: 'Arithmetic mean of 8 and 24?', options: ['16', '18', '20'], correct: 0}
        ],
        expert: [
            {topic: 'Sequences', emoji: '🔢➡️', question: 'Sum of infinite geometric: a=8, r=0.5?', options: ['16', '32', '8', '24'], correct: 0},
            {topic: 'Sequences', emoji: '📊💯', question: 'If aₙ = n² + 1, find a₁₀?', options: ['101', '100', '99', '102'], correct: 0},
            {topic: 'Sequences', emoji: '🔢📈', question: 'Arithmetic: a₃=14, a₇=26. Find d?', options: ['3', '4', '2', '5'], correct: 0},
            {topic: 'Sequences', emoji: '➡️🎯', question: 'Sum of first n natural numbers: n=100?', options: ['5050', '10100', '5000', '10000'], correct: 0},
            {topic: 'Sequences', emoji: '🔢💰', question: 'Geometric: a₂=6, a₅=48. Find r?', options: ['2', '3', '4', '8'], correct: 0},
            {topic: 'Sequences', emoji: '📊🔢', question: 'How many terms in: 5, 8, 11, ..., 50?', options: ['16', '15', '17', '14'], correct: 0},
            {topic: 'Sequences', emoji: '➡️💯', question: 'Sum of arithmetic: a₁=3, aₙ=99, n=17?', options: ['867', '850', '900', '800'], correct: 0},
            {topic: 'Sequences', emoji: '🔢📊', question: 'If Sₙ = n²+n, find nth term?', options: ['2n', 'n²', 'n+1', '2n+1'], correct: 0},
            {topic: 'Sequences', emoji: '🎯📈', question: 'Harmonic mean of 2 and 8?', options: ['3.2', '4', '5', '3'], correct: 0},
            {topic: 'Sequences', emoji: '🔢➡️', question: 'Infinite sum: 1 + 1/2 + 1/4 + 1/8 + ...?', options: ['2', '1', '3', '∞'], correct: 0}
        ],
        extreme: [
            {topic: 'Sequences', emoji: '🔢➡️', question: 'Find sum of arithmetic series with a₁=5, d=3, n=20', answer: '670'},
            {topic: 'Sequences', emoji: '📊💯', question: 'If geometric a₁=3, r=2, find S₈ (sum of 8 terms)', answer: '765'},
            {topic: 'Sequences', emoji: '🔢📈', question: 'Sum of infinite geometric series: a=12, r=1/3', answer: '18'},
            {topic: 'Sequences', emoji: '➡️🎯', question: 'If arithmetic a₅=17 and a₁₂=38, find a₁', answer: '5'},
            {topic: 'Sequences', emoji: '🔢💰', question: 'Find nth term formula if 3, 7, 11, 15, ...', answer: '4n - 1'},
            {topic: 'Sequences', emoji: '📊🔢', question: 'Sum of first 50 odd numbers', answer: '2500'},
            {topic: 'Sequences', emoji: '➡️💯', question: 'If geometric a₃=12, a₆=96, find a₁', answer: '3'},
            {topic: 'Sequences', emoji: '🔢📊', question: 'Sum: 2 + 4 + 8 + 16 + ... + 512', answer: '1022'},
            {topic: 'Sequences', emoji: '🎯📈', question: 'Find r if infinite geometric sum=20 and a₁=12', answer: '0.4 or 2/5'},
            {topic: 'Sequences', emoji: '🔢➡️', question: 'Insert 3 arithmetic means between 5 and 21 (find common difference)', answer: '4'}
        ]
    },
    18: { // Chapter 18: Functions
        easy: [
            {topic: 'Functions', emoji: '📈🔢', question: 'A function maps input to output.', options: ['True', 'False'], correct: 0},
            {topic: 'Functions', emoji: '🎯📊', question: 'f(x) notation represents a function.', options: ['True', 'False'], correct: 0},
            {topic: 'Functions', emoji: '📈💯', question: 'Domain is set of all inputs.', options: ['True', 'False'], correct: 0},
            {topic: 'Functions', emoji: '🔢🎯', question: 'Range is set of all outputs.', options: ['True', 'False'], correct: 0},
            {topic: 'Functions', emoji: '📊📈', question: 'f(x) = x + 1 is a function.', options: ['True', 'False'], correct: 0},
            {topic: 'Functions', emoji: '💯🔢', question: 'Each input has exactly one output.', options: ['True', 'False'], correct: 0},
            {topic: 'Functions', emoji: '📈🎯', question: 'f(2) means substitute x = 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Functions', emoji: '🔢📊', question: 'Linear function has form f(x) = mx + b.', options: ['True', 'False'], correct: 0},
            {topic: 'Functions', emoji: '🎯💯', question: 'Vertical line test checks if relation is function.', options: ['True', 'False'], correct: 0},
            {topic: 'Functions', emoji: '📈🔢', question: 'f(0) is the y-intercept.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Functions', emoji: '📈🔢', question: 'If f(x) = 2x + 3, find f(4)', options: ['11', '8'], correct: 0},
            {topic: 'Functions', emoji: '🎯📊', question: 'If f(x) = x², find f(5)', options: ['25', '10'], correct: 0},
            {topic: 'Functions', emoji: '📈💯', question: 'If f(x) = 3x - 1, find f(0)', options: ['-1', '1'], correct: 0},
            {topic: 'Functions', emoji: '🔢🎯', question: 'Domain of f(x) = √x?', options: ['x ≥ 0', 'All reals'], correct: 0},
            {topic: 'Functions', emoji: '📊📈', question: 'If f(x) = x/2, find f(10)', options: ['5', '20'], correct: 0},
            {topic: 'Functions', emoji: '💯🔢', question: 'Range of f(x) = x²?', options: ['y ≥ 0', 'All reals'], correct: 0},
            {topic: 'Functions', emoji: '📈🎯', question: 'If f(x) = 5 - x, find f(3)', options: ['2', '8'], correct: 0},
            {topic: 'Functions', emoji: '🔢📊', question: 'If f(x) = x³, find f(2)', options: ['8', '6'], correct: 0},
            {topic: 'Functions', emoji: '🎯💯', question: 'Domain of f(x) = 1/x?', options: ['x ≠ 0', 'All reals'], correct: 0},
            {topic: 'Functions', emoji: '📈🔢', question: 'If f(x) = |x|, find f(-5)', options: ['5', '-5'], correct: 0}
        ],
        hard: [
            {topic: 'Functions', emoji: '📈🔢', question: 'If f(x) = x² - 3x + 2, find f(4)', options: ['6', '8', '4'], correct: 0},
            {topic: 'Functions', emoji: '🎯📊', question: 'If f(x)=2x+1 and g(x)=x², find f(g(2))', options: ['9', '17', '5'], correct: 0},
            {topic: 'Functions', emoji: '📈💯', question: 'Domain of f(x) = √(x-3)?', options: ['x ≥ 3', 'x > 3', 'x ≥ 0'], correct: 0},
            {topic: 'Functions', emoji: '🔢🎯', question: 'If f(x)=x²+1, solve f(x)=10', options: ['x = ±3', 'x = 3', 'x = 9'], correct: 0},
            {topic: 'Functions', emoji: '📊📈', question: 'Inverse of f(x) = 2x + 4?', options: ['(x-4)/2', 'x/2 - 4', '2x - 4'], correct: 0},
            {topic: 'Functions', emoji: '💯🔢', question: 'If f(x)=1/x, find f(f(2))', options: ['2', '1/2', '4'], correct: 0},
            {topic: 'Functions', emoji: '📈🎯', question: 'Domain of f(x) = 1/(x-5)?', options: ['x ≠ 5', 'x > 5', 'x ≥ 5'], correct: 0},
            {topic: 'Functions', emoji: '🔢📊', question: 'If f(x)=x²-4, solve f(x)=0', options: ['x = ±2', 'x = 4', 'x = 2'], correct: 0},
            {topic: 'Functions', emoji: '🎯💯', question: 'Range of f(x) = -x² + 4?', options: ['y ≤ 4', 'y ≥ 4', 'All reals'], correct: 0},
            {topic: 'Functions', emoji: '📈🔢', question: 'If f(x)=3x-2, find f⁻¹(7)', options: ['3', '5', '19'], correct: 0}
        ],
        expert: [
            {topic: 'Functions', emoji: '📈🔢', question: 'If f(g(x))=x and g(f(x))=x, then g is?', options: ['Inverse of f', 'Equal to f', 'Composite', 'Reciprocal'], correct: 0},
            {topic: 'Functions', emoji: '🎯📊', question: 'Domain of f(x) = √(x²-9)?', options: ['|x| ≥ 3', 'x ≥ 3', 'x > 3', 'x ≥ 0'], correct: 0},
            {topic: 'Functions', emoji: '📈💯', question: 'If f(x)=2x+3 and g(x)=x-1, find (f∘g)(5)', options: ['11', '13', '9', '7'], correct: 0},
            {topic: 'Functions', emoji: '🔢🎯', question: 'Inverse of f(x) = (x+2)/3?', options: ['3x - 2', '3x + 2', 'x/3 - 2', '(x-2)/3'], correct: 0},
            {topic: 'Functions', emoji: '📊📈', question: 'If f(x) is even, then f(-x) = ?', options: ['f(x)', '-f(x)', '1/f(x)', 'x'], correct: 0},
            {topic: 'Functions', emoji: '💯🔢', question: 'Domain of f(x) = ln(x-5)?', options: ['x > 5', 'x ≥ 5', 'x ≠ 5', 'x < 5'], correct: 0},
            {topic: 'Functions', emoji: '📈🎯', question: 'If f(x) is odd, then f(-x) = ?', options: ['-f(x)', 'f(x)', '1/f(x)', '0'], correct: 0},
            {topic: 'Functions', emoji: '🔢📊', question: 'Range of f(x) = e^x?', options: ['y > 0', 'y ≥ 0', 'All reals', 'y ≠ 0'], correct: 0},
            {topic: 'Functions', emoji: '🎯💯', question: 'If f(x)=x³, find (f∘f)(2)', options: ['512', '64', '8', '16'], correct: 0},
            {topic: 'Functions', emoji: '📈🔢', question: 'Inverse of f(x) = √(x-1)?', options: ['x² + 1', '(x+1)²', 'x² - 1', '√(x+1)'], correct: 0}
        ],
        extreme: [
            {topic: 'Functions', emoji: '📈🔢', question: 'If f(x) = 3x - 5, find f⁻¹(x)', answer: '(x+5)/3'},
            {topic: 'Functions', emoji: '🎯📊', question: 'If f(x)=x² and g(x)=√x, find (f∘g)(16)', answer: '16'},
            {topic: 'Functions', emoji: '📈💯', question: 'Find domain of f(x) = 1/√(4-x²)', answer: '-2 < x < 2'},
            {topic: 'Functions', emoji: '🔢🎯', question: 'If f(x) = 2x+1 and g(x) = x²-3, find (g∘f)(2)', answer: '22'},
            {topic: 'Functions', emoji: '📊📈', question: 'Inverse of f(x) = (3x-2)/(x+1), x ≠ -1', answer: '(-x-2)/(x-3)'},
            {topic: 'Functions', emoji: '💯🔢', question: 'If f is even and f(3)=5, what is f(-3)?', answer: '5'},
            {topic: 'Functions', emoji: '📈🎯', question: 'If f is odd and f(2)=7, what is f(-2)?', answer: '-7'},
            {topic: 'Functions', emoji: '🔢📊', question: 'Find range of f(x) = 3/(x²+1)', answer: '0 < y ≤ 3'},
            {topic: 'Functions', emoji: '🎯💯', question: 'If f(x)=2x-3 and f⁻¹(a)=4, find a', answer: '5'},
            {topic: 'Functions', emoji: '📈🔢', question: 'If f(f(x))=4x-9 and f(x)=ax+b, find a', answer: '2'}
        ]
    },
    19: { // Chapter 19: Coordinate Geometry
        easy: [
            {topic: 'Coordinates', emoji: '📍🗺️', question: 'Origin has coordinates (0, 0).', options: ['True', 'False'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯📊', question: 'X-axis is horizontal.', options: ['True', 'False'], correct: 0},
            {topic: 'Coordinates', emoji: '📍💯', question: 'Y-axis is vertical.', options: ['True', 'False'], correct: 0},
            {topic: 'Coordinates', emoji: '🗺️🔢', question: 'Point (3, 5) has x-coordinate 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Coordinates', emoji: '📍🎯', question: 'Quadrant I has positive x and y.', options: ['True', 'False'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯📈', question: 'Distance formula uses Pythagorean theorem.', options: ['True', 'False'], correct: 0},
            {topic: 'Coordinates', emoji: '📍🔢', question: 'Midpoint averages coordinates.', options: ['True', 'False'], correct: 0},
            {topic: 'Coordinates', emoji: '🗺️💯', question: 'Slope measures steepness of line.', options: ['True', 'False'], correct: 0},
            {topic: 'Coordinates', emoji: '📍📊', question: 'Point (-2, 3) is in Quadrant II.', options: ['True', 'False'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯🗺️', question: 'Collinear points lie on same line.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Coordinates', emoji: '📍🗺️', question: 'Distance between (0,0) and (3,4)?', options: ['5', '7'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯📊', question: 'Midpoint of (2,4) and (6,8)?', options: ['(4, 6)', '(8, 12)'], correct: 0},
            {topic: 'Coordinates', emoji: '📍💯', question: 'Find slope between points (1,2) and (3,6)?', options: ['2', '4'], correct: 0},
            {topic: 'Coordinates', emoji: '🗺️🔢', question: 'Distance between (1,1) and (4,5)?', options: ['5', '3'], correct: 0},
            {topic: 'Coordinates', emoji: '📍🎯', question: 'Which quadrant is (-3, -5)?', options: ['III', 'II'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯📈', question: 'Midpoint of (0,0) and (8,6)?', options: ['(4, 3)', '(8, 6)'], correct: 0},
            {topic: 'Coordinates', emoji: '📍🔢', question: 'Slope through (2,3) and (4,7)?', options: ['2', '1'], correct: 0},
            {topic: 'Coordinates', emoji: '🗺️💯', question: 'Distance from (0,0) to (5,12)?', options: ['13', '17'], correct: 0},
            {topic: 'Coordinates', emoji: '📍📊', question: 'Which quadrant is (4, -3)?', options: ['IV', 'I'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯🗺️', question: 'Midpoint of (-2,4) and (6,2)?', options: ['(2, 3)', '(4, 6)'], correct: 0}
        ],
        hard: [
            {topic: 'Coordinates', emoji: '📍🗺️', question: 'Distance between (-3,4) and (5,10)?', options: ['10', '14', '8'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯📊', question: 'Slope of line through (-2,3) and (4,-5)?', options: ['-4/3', '4/3', '-3/4'], correct: 0},
            {topic: 'Coordinates', emoji: '📍💯', question: 'Equation of line through (0,5) with slope 2?', options: ['y = 2x + 5', 'y = 5x + 2', 'y = 2x - 5'], correct: 0},
            {topic: 'Coordinates', emoji: '🗺️🔢', question: 'Find y-intercept of line through (3,7) and (0,1)?', options: ['1', '7', '0'], correct: 0},
            {topic: 'Coordinates', emoji: '📍🎯', question: 'Point dividing (2,3) and (8,9) in ratio 1:2?', options: ['(4, 5)', '(5, 6)', '(6, 7)'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯📈', question: 'Distance of (3,4) from origin?', options: ['5', '7', '3'], correct: 0},
            {topic: 'Coordinates', emoji: '📍🔢', question: 'Perpendicular slope to m = 3?', options: ['-1/3', '3', '-3'], correct: 0},
            {topic: 'Coordinates', emoji: '🗺️💯', question: 'Equation of x-axis?', options: ['y = 0', 'x = 0', 'y = x'], correct: 0},
            {topic: 'Coordinates', emoji: '📍📊', question: 'Centroid of triangle (0,0), (6,0), (0,6)?', options: ['(2, 2)', '(3, 3)', '(4, 4)'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯🗺️', question: 'Slope of line 3x + 4y = 12?', options: ['-3/4', '4/3', '-4/3'], correct: 0}
        ],
        expert: [
            {topic: 'Coordinates', emoji: '📍🗺️', question: 'Distance from (2,3) to line 3x + 4y = 10?', options: ['4/5', '2', '8/5', '1'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯📊', question: 'Equation perpendicular to 2x - y = 5 through (1,3)?', options: ['x + 2y = 7', '2x + y = 5', 'y = -2x + 5', 'y = x/2'], correct: 0},
            {topic: 'Coordinates', emoji: '📍💯', question: 'Area of triangle: (0,0), (4,0), (0,6)?', options: ['12', '24', '10', '6'], correct: 0},
            {topic: 'Coordinates', emoji: '🗺️🔢', question: 'Reflection of (3,5) over x-axis?', options: ['(3, -5)', '(-3, 5)', '(-3, -5)', '(5, 3)'], correct: 0},
            {topic: 'Coordinates', emoji: '📍🎯', question: 'Center of circle: x² + y² - 6x + 4y = 12?', options: ['(3, -2)', '(-3, 2)', '(6, -4)', '(3, 2)'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯📈', question: 'Equation of circle center (3,4), radius 5?', options: ['(x-3)²+(y-4)²=25', '(x+3)²+(y+4)²=25', 'x²+y²=25', '(x-3)²+(y-4)²=5'], correct: 0},
            {topic: 'Coordinates', emoji: '📍🔢', question: 'Section formula: P divides A(2,3) to B(7,8) in 2:3?', options: ['(4, 5)', '(5, 6)', '(3, 4)', '(6, 7)'], correct: 0},
            {topic: 'Coordinates', emoji: '🗺️💯', question: 'Locus of points equidistant from (0,0) and (4,0)?', options: ['x = 2', 'y = 2', 'x + y = 2', 'x - y = 2'], correct: 0},
            {topic: 'Coordinates', emoji: '📍📊', question: 'Area of quadrilateral: (0,0),(4,0),(4,3),(0,3)?', options: ['12', '14', '10', '7'], correct: 0},
            {topic: 'Coordinates', emoji: '🎯🗺️', question: 'Equation of perpendicular bisector of (1,2) and (5,6)?', options: ['x + y = 7', 'x - y = 1', 'y = x + 1', 'y = -x + 7'], correct: 0}
        ],
        extreme: [
            {topic: 'Coordinates', emoji: '📍🗺️', question: 'Find centroid of triangle with vertices (2,3), (4,7), (6,5)', answer: '(4, 5)'},
            {topic: 'Coordinates', emoji: '🎯📊', question: 'Distance from point (1,2) to line 3x + 4y - 6 = 0', answer: '1'},
            {topic: 'Coordinates', emoji: '📍💯', question: 'Area of triangle with vertices (0,0), (8,0), (4,6)', answer: '24'},
            {topic: 'Coordinates', emoji: '🗺️🔢', question: 'Find radius of circle x² + y² - 8x + 6y = 0', answer: '5'},
            {topic: 'Coordinates', emoji: '📍🎯', question: 'Equation of line through (2,3) perpendicular to 2x + 3y = 6', answer: '3x - 2y = 0 or y = 1.5x'},
            {topic: 'Coordinates', emoji: '🎯📈', question: 'Find orthocenteter of right triangle at (0,0), (4,0), (0,3)', answer: '(0, 0)'},
            {topic: 'Coordinates', emoji: '📍🔢', question: 'Point dividing (1,2) and (4,8) externally in ratio 2:1', answer: '(7, 14)'},
            {topic: 'Coordinates', emoji: '🗺️💯', question: 'Equation of circle with diameter endpoints (2,3) and (6,7)', answer: '(x-4)²+(y-5)²=8'},
            {topic: 'Coordinates', emoji: '📍📊', question: 'Find angle between lines y = 2x and y = 3x', answer: 'arctan(1/7) or 8.13°'},
            {topic: 'Coordinates', emoji: '🎯🗺️', question: 'Area of parallelogram with vertices (0,0), (3,0), (4,5), (1,5)', answer: '15'}
        ]
    },
    20: { // Chapter 20: Mensuration
        easy: [
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Perimeter is distance around a shape.', options: ['True', 'False'], correct: 0},
            {topic: 'Mensuration', emoji: '📐💯', question: 'Area is measured in square units.', options: ['True', 'False'], correct: 0},
            {topic: 'Mensuration', emoji: '📏🎯', question: 'Volume is measured in cubic units.', options: ['True', 'False'], correct: 0},
            {topic: 'Mensuration', emoji: '🔢📊', question: 'Perimeter of rectangle = 2(l + w).', options: ['True', 'False'], correct: 0},
            {topic: 'Mensuration', emoji: '📐📈', question: 'Area of rectangle = length × width.', options: ['True', 'False'], correct: 0},
            {topic: 'Mensuration', emoji: '📏💰', question: 'Perimeter of square = 4 × side.', options: ['True', 'False'], correct: 0},
            {topic: 'Mensuration', emoji: '🔢🎯', question: 'Area of square = side².', options: ['True', 'False'], correct: 0},
            {topic: 'Mensuration', emoji: '📐📊', question: 'Circle circumference equals 2πr.', options: ['True', 'False'], correct: 0},
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Circle area equals πr².', options: ['True', 'False'], correct: 0},
            {topic: 'Mensuration', emoji: '💯📐', question: 'Triangle area equals ½ × base × height.', options: ['True', 'False'], correct: 0},
        ],
        medium: [
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Perimeter of rectangle: length 8, width 5?', options: ['26', '40'], correct: 0},
            {topic: 'Mensuration', emoji: '📐💯', question: 'Area of square with side 7?', options: ['49', '28'], correct: 0},
            {topic: 'Mensuration', emoji: '📏🎯', question: 'Find circumference when radius = 7?', options: ['14π', '49π'], correct: 0},
            {topic: 'Mensuration', emoji: '🔢📊', question: 'Triangle area with base 10, height 6?', options: ['30', '60'], correct: 0},
            {topic: 'Mensuration', emoji: '📐📈', question: 'Volume of cube with side 4?', options: ['64', '16'], correct: 0},
            {topic: 'Mensuration', emoji: '📏💰', question: 'Area of circle with diameter 10?', options: ['25π', '100π'], correct: 0},
            {topic: 'Mensuration', emoji: '🔢🎯', question: 'Perimeter of square with area 36?', options: ['24', '36'], correct: 0},
            {topic: 'Mensuration', emoji: '📐📊', question: 'Area of rectangle: length 12, width 7?', options: ['84', '38'], correct: 0},
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Cylinder volume when r=3, h=7?', options: ['63π', '21π'], correct: 0},
            {topic: 'Mensuration', emoji: '💯📐', question: 'Surface area of cube with side 5?', options: ['150', '125'], correct: 0}
        ],
        hard: [
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Area of trapezoid: parallel sides 8, 12, height 5?', options: ['50', '100', '60'], correct: 0},
            {topic: 'Mensuration', emoji: '📐💯', question: 'Find total surface area of cylinder: r=7, h=10?', options: ['238π', '140π', '119π'], correct: 0},
            {topic: 'Mensuration', emoji: '📏🎯', question: 'Volume of cone: r=6, h=8?', options: ['96π', '288π', '48π'], correct: 0},
            {topic: 'Mensuration', emoji: '🔢📊', question: 'Area of rhombus: diagonals 10 and 16?', options: ['80', '160', '26'], correct: 0},
            {topic: 'Mensuration', emoji: '📐📈', question: 'Lateral surface area of cone: r=5, l=13?', options: ['65π', '325π', '169π'], correct: 0},
            {topic: 'Mensuration', emoji: '📏💰', question: 'Volume of sphere with diameter 12?', options: ['288π', '576π', '144π'], correct: 0},
            {topic: 'Mensuration', emoji: '🔢🎯', question: 'Area of parallelogram: base 15, height 8?', options: ['120', '46', '60'], correct: 0},
            {topic: 'Mensuration', emoji: '📐📊', question: 'Cuboid volume with dimensions 8×6×5?', options: ['240', '220', '180'], correct: 0},
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Surface area of sphere with radius 7?', options: ['196π', '49π', '392π'], correct: 0},
            {topic: 'Mensuration', emoji: '💯📐', question: 'Area of regular hexagon with side 6?', options: ['54√3', '36√3', '108√3'], correct: 0}
        ],
        expert: [
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Frustum volume with top r=3, bottom r=5, h=4?', options: ['196π/3', '64π', '52π', '100π'], correct: 0},
            {topic: 'Mensuration', emoji: '📐💯', question: 'Area of sector: angle 60°, radius 12?', options: ['24π', '48π', '12π', '72π'], correct: 0},
            {topic: 'Mensuration', emoji: '📏🎯', question: 'Volume of hollow cylinder: R=10, r=8, h=7?', options: ['252π', '560π', '126π', '490π'], correct: 0},
            {topic: 'Mensuration', emoji: '🔢📊', question: 'Surface area of hemisphere with radius 14?', options: ['1176π', '588π', '784π', '392π'], correct: 0},
            {topic: 'Mensuration', emoji: '📐📈', question: 'Find segment area: sector 120°, r=6, triangle subtracted?', options: ['12π - 9√3', '12π', '6π', '18π'], correct: 0},
            {topic: 'Mensuration', emoji: '📏💰', question: 'Volume of pyramid: square base side 6, height 8?', options: ['96', '288', '144', '48'], correct: 0},
            {topic: 'Mensuration', emoji: '🔢🎯', question: 'Area of ring: outer r=10, inner r=7?', options: ['51π', '100π', '30π', '149π'], correct: 0},
            {topic: 'Mensuration', emoji: '📐📊', question: 'Volume of prism: triangular base area 30, height 12?', options: ['360', '180', '720', '72'], correct: 0},
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Diagonal of cuboid: 12×9×8?', options: ['17', '15', '20', '14'], correct: 0},
            {topic: 'Mensuration', emoji: '💯📐', question: 'Area of equilateral triangle inscribed in circle r=10?', options: ['75√3', '50√3', '100√3', '25√3'], correct: 0}
        ],
        extreme: [
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Find height of cylinder if volume 440π and radius 5', answer: '17.6'},
            {topic: 'Mensuration', emoji: '📐💯', question: 'Area of largest circle inscribed in equilateral triangle side 12', answer: '12π'},
            {topic: 'Mensuration', emoji: '📏🎯', question: 'Volume of cone formed by rotating right triangle legs 6, 8 around leg 6', answer: '96π'},
            {topic: 'Mensuration', emoji: '🔢📊', question: 'Total surface area of hollow hemisphere outer r=10, inner r=8', answer: '468π'},
            {topic: 'Mensuration', emoji: '📐📈', question: 'Area of path 2m wide around rectangular field 20×15m', answer: '156'},
            {topic: 'Mensuration', emoji: '📏💰', question: 'Volume of largest sphere inscribed in cube side 12', answer: '288π'},
            {topic: 'Mensuration', emoji: '🔢🎯', question: 'Area of quadrant (quarter circle) with radius 14', answer: '154 or 49π'},
            {topic: 'Mensuration', emoji: '📐📊', question: 'Volume of spherical shell outer r=10, inner r=6', answer: '736π'},
            {topic: 'Mensuration', emoji: '📏🔢', question: 'Area of rhombus if diagonals ratio 3:4 and perimeter 40', answer: '96'},
            {topic: 'Mensuration', emoji: '💯📐', question: 'Height of cone if volume 462 cm³ and base area 154 cm²', answer: '9'}
        ]
    }

};
