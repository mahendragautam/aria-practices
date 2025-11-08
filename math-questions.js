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
};
