/**
 * WPCode Snippet #6: Health Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer  
 * Priority: 15
 *
 * COPY ALL CODE BELOW
 */

const healthQuestions = {
    1: { // Chapter 1: Basic Health & Fitness
        easy: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'Fruits and vegetables are healthy.', options: ['True', 'False'], correct: 0},
            {topic: 'Exercise', emoji: '💪🏃', question: 'Exercise is good for your health.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '💧🚰', question: 'Drinking water is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Yoga', emoji: '🧘‍♀️🕉️', question: 'Yoga helps with flexibility.', options: ['True', 'False'], correct: 0},
            {topic: 'Cardio', emoji: '❤️🏃', question: 'Running is a cardio exercise.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥦🥕', question: 'Vegetables have vitamins.', options: ['True', 'False'], correct: 0},
            {topic: 'Exercise', emoji: '🏋️💪', question: 'Lifting weights builds muscle.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🍬🚫', question: 'Too much sugar is bad for health.', options: ['True', 'False'], correct: 0},
            {topic: 'Yoga', emoji: '🧘🌅', question: 'Yoga reduces stress.', options: ['True', 'False'], correct: 0},
            {topic: 'Cardio', emoji: '🚴‍♂️❤️', question: 'Cycling is good for your heart.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'How many servings of fruit per day?', options: ['5', '2'], correct: 0},
            {topic: 'Exercise', emoji: '💪🏃', question: 'How many minutes of exercise per day?', options: ['30 minutes', '10 minutes'], correct: 0},
            {topic: 'Nutrition', emoji: '💧🚰', question: 'How many glasses of water per day?', options: ['8 glasses', '3 glasses'], correct: 0},
            {topic: 'Yoga', emoji: '🧘‍♀️🕉️', question: 'Which yoga pose is for relaxation?', options: ['Savasana', 'Warrior'], correct: 0},
            {topic: 'Cardio', emoji: '❤️🏃', question: 'What does cardio improve?', options: ['Heart health', 'Flexibility'], correct: 0},
            {topic: 'Nutrition', emoji: '🥦🥕', question: 'Which vitamin is in carrots?', options: ['Vitamin A', 'Vitamin C'], correct: 0},
            {topic: 'Exercise', emoji: '🏋️💪', question: 'What builds stronger bones?', options: ['Weight training', 'Stretching'], correct: 0},
            {topic: 'Nutrition', emoji: '🥛🦴', question: 'Which nutrient is in milk?', options: ['Calcium', 'Iron'], correct: 0},
            {topic: 'Yoga', emoji: '🧘🌅', question: 'What is pranayama?', options: ['Breathing exercise', 'Stretching'], correct: 0},
            {topic: 'Cardio', emoji: '🚴‍♂️❤️', question: 'What is aerobic exercise?', options: ['With oxygen', 'Without oxygen'], correct: 0}
        ],
        hard: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'What is BMI?', options: ['Body Mass Index', 'Basic Meal Intake', 'Bone Mineral Index'], correct: 0},
            {topic: 'Exercise', emoji: '💪🏃', question: 'What is HIIT?', options: ['High Intensity Interval', 'Heavy Indoor Impact', 'Healthy Intensity Integration'], correct: 0},
            {topic: 'Nutrition', emoji: '🥦🥕', question: 'What are macronutrients?', options: ['Carbs, Protein, Fat', 'Vitamins, Minerals', 'Water, Fiber'], correct: 0},
            {topic: 'Yoga', emoji: '🧘‍♀️🕉️', question: 'How many limbs in Ashtanga yoga?', options: ['8', '4', '12'], correct: 0},
            {topic: 'Cardio', emoji: '❤️🏃', question: 'What is target heart rate zone?', options: ['50-85% max', '90-100% max', '30-50% max'], correct: 0},
            {topic: 'Nutrition', emoji: '💧🚰', question: 'What causes dehydration?', options: ['Low water intake', 'High protein', 'Low fat'], correct: 0},
            {topic: 'Exercise', emoji: '🏋️💪', question: 'What is progressive overload?', options: ['Increasing weight gradually', 'Decreasing reps', 'Same routine'], correct: 0},
            {topic: 'Nutrition', emoji: '🥛🦴', question: 'What is lactose intolerance?', options: ['Cannot digest milk sugar', 'Allergy to protein', 'Vitamin deficiency'], correct: 0},
            {topic: 'Yoga', emoji: '🧘🌅', question: 'What is the sun salutation?', options: ['Series of poses', 'Breathing technique', 'Meditation style'], correct: 0},
            {topic: 'Cardio', emoji: '🚴‍♂️❤️', question: 'What is VO2 max?', options: ['Oxygen capacity', 'Heart rate', 'Lung volume'], correct: 0}
        ],
        expert: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'Recommended daily protein per kg body weight?', options: ['0.8-1g', '2-3g', '0.1-0.3g', '5g'], correct: 0},
            {topic: 'Exercise', emoji: '💪🏃', question: 'What is muscle hypertrophy?', options: ['Muscle growth', 'Muscle loss', 'Muscle strain', 'Muscle flexibility'], correct: 0},
            {topic: 'Nutrition', emoji: '🥦🥕', question: 'What are essential amino acids?', options: ['Body cannot make', 'Made by body', 'Not needed', 'Only in plants'], correct: 0},
            {topic: 'Yoga', emoji: '🧘‍♀️🕉️', question: 'What is Hatha yoga?', options: ['Physical yoga', 'Meditation only', 'Chanting', 'Philosophy'], correct: 0},
            {topic: 'Cardio', emoji: '❤️🏃', question: 'What is maximum heart rate formula?', options: ['220 - age', '180 - age', '200 - age', '240 - age'], correct: 0},
            {topic: 'Nutrition', emoji: '💧🚰', question: 'How much water weight can body lose per hour exercise?', options: ['1-2 liters', '5 liters', '0.1 liter', '10 liters'], correct: 0},
            {topic: 'Exercise', emoji: '🏋️💪', question: 'What is eccentric contraction?', options: ['Muscle lengthens', 'Muscle shortens', 'No movement', 'Isometric'], correct: 0},
            {topic: 'Nutrition', emoji: '🥛🦴', question: 'Daily calcium requirement for adults?', options: ['1000mg', '100mg', '5000mg', '10000mg'], correct: 0},
            {topic: 'Yoga', emoji: '🧘🌅', question: 'What is the corpse pose called?', options: ['Savasana', 'Warrior', 'Downward dog', 'Tree'], correct: 0},
            {topic: 'Cardio', emoji: '🚴‍♂️❤️', question: 'What is anaerobic threshold?', options: ['Lactic acid builds up', 'Heart stops', 'Oxygen excess', 'Muscle relaxes'], correct: 0}
        ],
        extreme: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'Name the three macronutrients and their calories per gram', answer: 'Carbs=4cal, Protein=4cal, Fat=9cal'},
            {topic: 'Exercise', emoji: '💪🏃', question: 'Name three types of muscle fibers', answer: 'Type I (slow twitch), Type IIa, Type IIb (fast twitch)'},
            {topic: 'Nutrition', emoji: '🥦🥕', question: 'List five essential vitamins and their functions (name 3)', answer: 'A=vision, C=immunity, D=bones, E=antioxidant, K=clotting (any 3)'},
            {topic: 'Yoga', emoji: '🧘‍♀️🕉️', question: 'Name the eight limbs of Ashtanga yoga (name 4)', answer: 'Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi (any 4)'},
            {topic: 'Cardio', emoji: '❤️🏃', question: 'Calculate target heart rate for 30-year-old at 70% intensity', answer: '133 bpm (220-30)*0.7'},
            {topic: 'Nutrition', emoji: '💧🚰', question: 'Name three electrolytes lost in sweat', answer: 'Sodium, Potassium, Chloride, Magnesium (any 3)'},
            {topic: 'Exercise', emoji: '🏋️💪', question: 'Name three compound exercises', answer: 'Squat, Deadlift, Bench Press, Pull-up (any 3)'},
            {topic: 'Nutrition', emoji: '🥛🦴', question: 'Name three minerals important for bone health', answer: 'Calcium, Phosphorus, Magnesium, Vitamin D'},
            {topic: 'Yoga', emoji: '🧘🌅', question: 'Name five common yoga poses (asanas)', answer: 'Downward Dog, Warrior, Tree, Child, Mountain (any 5)'},
            {topic: 'Cardio', emoji: '🚴‍♂️❤️', question: 'What are the five heart rate zones?', answer: 'Zone 1-5: 50-60%, 60-70%, 70-80%, 80-90%, 90-100%'}
        ]
    },    2: { // Chapter 2: Diseases and Prevention
        easy: [
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention advanced question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Diseases and Prevention expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Diseases', emoji: '🦠💉', question: 'Name three diseases and prevention items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    3: { // Chapter 3: Mental Health and Wellness
        easy: [
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness advanced question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Mental', emoji: '🧠💭', question: 'Mental Health and Wellness expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Mental', emoji: '🧠💭', question: 'Name three mental health and wellness items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    4: { // Chapter 4: Sleep and Rest
        easy: [
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest advanced question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Sleep and Rest expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Sleep', emoji: '😴🛌', question: 'Name three sleep and rest items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    5: { // Chapter 5: Personal Hygiene
        easy: [
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene advanced question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Personal Hygiene expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Personal', emoji: '🧼🚿', question: 'Name three personal hygiene items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    6: { // Chapter 6: Nutrition and Diet Plans
        easy: [
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans advanced question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Nutrition and Diet Plans expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Nutrition', emoji: '🥗📊', question: 'Name three nutrition and diet plans items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
};
