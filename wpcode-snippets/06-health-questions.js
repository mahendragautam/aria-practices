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
    }
    // Add more chapters: 2, 3, 4... unlimited!
};

