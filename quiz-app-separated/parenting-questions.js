// Parenting Question Bank
// Add this file separately in WordPress or link it before app.js

const parentingQuestions = {
    1: { // Chapter 1: Parenting Basics
        easy: [
            {topic: 'Newborn', emoji: '👶🍼', question: 'Newborns need frequent feeding.', options: ['True', 'False'], correct: 0},
            {topic: 'Toddler', emoji: '👧🧒', question: 'Toddlers are learning to walk.', options: ['True', 'False'], correct: 0},
            {topic: 'Preschool', emoji: '🎨📚', question: 'Play is important for learning.', options: ['True', 'False'], correct: 0},
            {topic: 'School Age', emoji: '📖🎒', question: 'Reading helps child development.', options: ['True', 'False'], correct: 0},
            {topic: 'Newborn', emoji: '👶😴', question: 'Babies sleep a lot.', options: ['True', 'False'], correct: 0},
            {topic: 'Toddler', emoji: '👧🗣️', question: 'Toddlers start speaking words.', options: ['True', 'False'], correct: 0},
            {topic: 'Preschool', emoji: '🎨👫', question: 'Preschoolers learn social skills.', options: ['True', 'False'], correct: 0},
            {topic: 'School Age', emoji: '📖✏️', question: 'Homework teaches responsibility.', options: ['True', 'False'], correct: 0},
            {topic: 'Newborn', emoji: '👶🤱', question: 'Breastfeeding provides nutrition.', options: ['True', 'False'], correct: 0},
            {topic: 'Toddler', emoji: '👧🧸', question: 'Toddlers like routines.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Newborn', emoji: '👶🍼', question: 'How many hours do newborns sleep?', options: ['16-17 hours', '8 hours'], correct: 0},
            {topic: 'Toddler', emoji: '👧🧒', question: 'At what age do toddlers typically walk?', options: ['12-15 months', '6 months'], correct: 0},
            {topic: 'Preschool', emoji: '🎨📚', question: 'What age is preschool?', options: ['3-5 years', '1-2 years'], correct: 0},
            {topic: 'School Age', emoji: '📖🎒', question: 'When does elementary school typically start?', options: ['Age 5-6', 'Age 3'], correct: 0},
            {topic: 'Newborn', emoji: '👶😴', question: 'What is tummy time?', options: ['Baby on stomach', 'Feeding time'], correct: 0},
            {topic: 'Toddler', emoji: '👧🗣️', question: 'What is parallel play?', options: ['Playing alongside others', 'Playing alone'], correct: 0},
            {topic: 'Preschool', emoji: '🎨👫', question: 'What skills do preschoolers develop?', options: ['Fine motor skills', 'Only reading'], correct: 0},
            {topic: 'School Age', emoji: '📖✏️', question: 'Why is routine important?', options: ['Provides structure', 'No reason'], correct: 0},
            {topic: 'Newborn', emoji: '👶🤱', question: 'How often should newborns eat?', options: ['Every 2-3 hours', 'Once daily'], correct: 0},
            {topic: 'Toddler', emoji: '👧🧸', question: 'What are tantrums?', options: ['Emotional outbursts', 'Happy moments'], correct: 0}
        ],
        hard: [
            {topic: 'Newborn', emoji: '👶🍼', question: 'What is the Moro reflex?', options: ['Startle reflex', 'Crying reflex', 'Sleeping pattern'], correct: 0},
            {topic: 'Toddler', emoji: '👧🧒', question: 'What is object permanence?', options: ['Knowing objects exist when hidden', 'Sharing toys', 'Walking skill'], correct: 0},
            {topic: 'Preschool', emoji: '🎨📚', question: 'What is theory of mind?', options: ['Understanding others\' thoughts', 'Math skills', 'Physical growth'], correct: 0},
            {topic: 'School Age', emoji: '📖🎒', question: 'What is concrete operational stage?', options: ['Logical thinking (7-11)', 'Infant stage', 'Teen stage'], correct: 0},
            {topic: 'Newborn', emoji: '👶😴', question: 'What is SIDS?', options: ['Sudden Infant Death', 'Sleep disorder', 'Growth issue'], correct: 0},
            {topic: 'Toddler', emoji: '👧🗣️', question: 'What is telegraphic speech?', options: ['Two-word phrases', 'Baby babbling', 'Full sentences'], correct: 0},
            {topic: 'Preschool', emoji: '🎨👫', question: 'What are gross motor skills?', options: ['Large muscle movements', 'Fine hand movements', 'Thinking skills'], correct: 0},
            {topic: 'School Age', emoji: '📖✏️', question: 'What is growth mindset?', options: ['Belief in improvement', 'Fixed abilities', 'IQ level'], correct: 0},
            {topic: 'Newborn', emoji: '👶🤱', question: 'What is colostrum?', options: ['First breast milk', 'Baby food', 'Vitamin'], correct: 0},
            {topic: 'Toddler', emoji: '👧🧸', question: 'What is separation anxiety?', options: ['Fear of parent leaving', 'Fear of toys', 'Fear of food'], correct: 0}
        ],
        expert: [
            {topic: 'Newborn', emoji: '👶🍼', question: 'At what age do babies typically double birth weight?', options: ['5-6 months', '1 year', '2 years', '3 months'], correct: 0},
            {topic: 'Toddler', emoji: '👧🧒', question: 'According to Piaget, what stage are toddlers in?', options: ['Sensorimotor', 'Concrete operational', 'Formal operational', 'Preoperational'], correct: 0},
            {topic: 'Preschool', emoji: '🎨📚', question: 'What is scaffolding in learning?', options: ['Support that\'s gradually removed', 'Building blocks', 'Punishment', 'Reward system'], correct: 0},
            {topic: 'School Age', emoji: '📖🎒', question: 'What is executive function?', options: ['Planning and self-control', 'Physical ability', 'Social skill', 'Reading ability'], correct: 0},
            {topic: 'Newborn', emoji: '👶😴', question: 'How many sleep cycles do newborns have?', options: ['2 (REM & Non-REM)', '4', '6', '1'], correct: 0},
            {topic: 'Toddler', emoji: '👧🗣️', question: 'When should toddlers say 50 words?', options: ['18-24 months', '6 months', '3 years', '4 years'], correct: 0},
            {topic: 'Preschool', emoji: '🎨👫', question: 'What is egocentrism in preschoolers?', options: ['Seeing only own perspective', 'Selfishness', 'Intelligence', 'Sharing'], correct: 0},
            {topic: 'School Age', emoji: '📖✏️', question: 'What is metacognition?', options: ['Thinking about thinking', 'Fast thinking', 'Memory loss', 'Problem solving'], correct: 0},
            {topic: 'Newborn', emoji: '👶🤱', question: 'What is the rooting reflex?', options: ['Turning head to find nipple', 'Sleeping', 'Crying', 'Walking'], correct: 0},
            {topic: 'Toddler', emoji: '👧🧸', question: 'What is attachment theory?', options: ['Emotional bond with caregiver', 'Playing with toys', 'Eating habits', 'Sleep pattern'], correct: 0}
        ],
        extreme: [
            {topic: 'Newborn', emoji: '👶🍼', question: 'Name three newborn reflexes', answer: 'Moro, Rooting, Sucking, Grasp, Babinski (any 3)'},
            {topic: 'Toddler', emoji: '👧🧒', question: 'Name the four Piaget stages of development', answer: 'Sensorimotor, Preoperational, Concrete operational, Formal operational'},
            {topic: 'Preschool', emoji: '🎨📚', question: 'Name three types of play', answer: 'Parallel, Cooperative, Symbolic, Solitary, Associative (any 3)'},
            {topic: 'School Age', emoji: '📖🎒', question: 'Name three parenting styles', answer: 'Authoritative, Authoritarian, Permissive, Uninvolved (any 3)'},
            {topic: 'Newborn', emoji: '👶😴', question: 'What are the recommended safe sleep practices? (name 3)', answer: 'Back to sleep, Firm mattress, No blankets, Room sharing (any 3)'},
            {topic: 'Toddler', emoji: '👧🗣️', question: 'Name three language milestones for toddlers', answer: 'First words (12mo), 50 words (24mo), Two-word phrases (24mo) (any 3)'},
            {topic: 'Preschool', emoji: '🎨👫', question: 'Name three social-emotional skills preschoolers learn', answer: 'Sharing, Taking turns, Empathy, Emotional regulation (any 3)'},
            {topic: 'School Age', emoji: '📖✏️', question: 'Name three executive function skills', answer: 'Working memory, Cognitive flexibility, Inhibitory control'},
            {topic: 'Newborn', emoji: '👶🤱', question: 'Name three benefits of breastfeeding', answer: 'Antibodies, Bonding, Nutrition, Convenient, Cost-effective (any 3)'},
            {topic: 'Toddler', emoji: '👧🧸', question: 'Name three strategies for handling tantrums', answer: 'Stay calm, Validate feelings, Set limits, Time-out, Distraction (any 3)'}
        ]
    }
    // Add more chapters: 2, 3, 4... unlimited!
};

// Export for master file to use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = parentingQuestions;
}
