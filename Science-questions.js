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
    }
};
