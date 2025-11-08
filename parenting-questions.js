/**
 * WPCode Snippet #10: Parenting Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer  
 * Priority: 19
 *
 * COPY ALL CODE BELOW
 */

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
            {topic: 'Preschool', emoji: '🎨📚', question: 'What is scaffolding in learning?', options: ["Support that\'s gradually removed", 'Building blocks', 'Punishment', 'Reward system'], correct: 0},
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
    },
    2: { // Chapter 2: Discipline & Behavior
        easy: [
            {topic: 'Discipline', emoji: '📏👶', question: 'Positive discipline works better than punishment.', options: ['True', 'False'], correct: 0},
            {topic: 'Behavior', emoji: '🎭😊', question: 'Children need clear rules.', options: ['True', 'False'], correct: 0},
            {topic: 'Discipline', emoji: '📏✅', question: 'Consistency is important in discipline.', options: ['True', 'False'], correct: 0},
            {topic: 'Behavior', emoji: '🎭😡', question: 'All behavior is communication.', options: ['True', 'False'], correct: 0},
            {topic: 'Discipline', emoji: '📏⏰', question: 'Time-outs can be effective.', options: ['True', 'False'], correct: 0},
            {topic: 'Behavior', emoji: '🎭🌟', question: 'Praise encourages good behavior.', options: ['True', 'False'], correct: 0},
            {topic: 'Discipline', emoji: '📏🚫', question: 'Spanking is not recommended.', options: ['True', 'False'], correct: 0},
            {topic: 'Behavior', emoji: '🎭💡', question: 'Rewards motivate children.', options: ['True', 'False'], correct: 0},
            {topic: 'Discipline', emoji: '📏🗣️', question: 'Explaining rules helps children understand.', options: ['True', 'False'], correct: 0},
            {topic: 'Behavior', emoji: '🎭👍', question: 'Modeling behavior teaches children.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Discipline', emoji: '📏👶', question: 'What is positive discipline?', options: ['Teaching rather than punishing', 'Only punishment'], correct: 0},
            {topic: 'Behavior', emoji: '🎭😊', question: "What is a natural consequence?", options: ["Result of child's action", 'Parent-imposed punishment'], correct: 0},
            {topic: 'Discipline', emoji: '📏✅', question: 'What is redirection?', options: ['Guide to better choice', 'Ignore behavior'], correct: 0},
            {topic: 'Behavior', emoji: '🎭😡', question: 'What triggers tantrums?', options: ['Frustration and overwhelm', 'Only hunger'], correct: 0},
            {topic: 'Discipline', emoji: '📏⏰', question: 'How long should time-outs be?', options: ['1 minute per year of age', '1 hour'], correct: 0},
            {topic: 'Behavior', emoji: '🎭🌟', question: 'What is specific praise?', options: ['Describing exact behavior', 'Generic good job'], correct: 0},
            {topic: 'Discipline', emoji: '📏🚫', question: 'What is logical consequence?', options: ['Related to misbehavior', 'Unrelated punishment'], correct: 0},
            {topic: 'Behavior', emoji: '🎭💡', question: 'What is a reward chart?', options: ['Visual tracking of behavior', 'Report card'], correct: 0},
            {topic: 'Discipline', emoji: '📏🗣️', question: 'What is active listening?', options: ['Fully focusing on child', 'Half listening'], correct: 0},
            {topic: 'Behavior', emoji: '🎭👍', question: 'What is modeling?', options: ['Demonstrating desired behavior', 'Explaining only'], correct: 0}
        ],
        hard: [
            {topic: 'Discipline', emoji: '📏👶', question: 'What is the 1-2-3 Magic technique?', options: ['Count to 3 before consequence', 'Three punishments', 'Magic tricks'], correct: 0},
            {topic: 'Behavior', emoji: '🎭😊', question: 'What is differential reinforcement?', options: ['Reinforce alternative behavior', 'Punish all behavior', 'Ignore everything'], correct: 0},
            {topic: 'Discipline', emoji: '📏✅', question: 'What is the authoritative parenting style?', options: ['High warmth, high structure', 'Low warmth, high control', 'No boundaries'], correct: 0},
            {topic: 'Behavior', emoji: '🎭😡', question: 'What is extinction burst?', options: ['Behavior worsens before improving', 'Immediate improvement', 'No change'], correct: 0},
            {topic: 'Discipline', emoji: '📏⏰', question: 'What is planned ignoring?', options: ['Ignore attention-seeking behavior', 'Ignore all behavior', 'Never ignore'], correct: 0},
            {topic: 'Behavior', emoji: '🎭🌟', question: 'What is intrinsic motivation?', options: ['Internal drive to behave', 'External rewards only', 'Fear-based'], correct: 0},
            {topic: 'Discipline', emoji: '📏🚫', question: 'What is restorative discipline?', options: ['Repair harm and restore relationships', 'Only punishment', 'No consequences'], correct: 0},
            {topic: 'Behavior', emoji: '🎭💡', question: 'What is token economy?', options: ['Earn tokens for rewards', 'Real money', 'No system'], correct: 0},
            {topic: 'Discipline', emoji: '📏🗣️', question: "What is reflective listening?", options: ["Mirror child's feelings", 'Just talk', 'Lecture'], correct: 0},
            {topic: 'Behavior', emoji: '🎭👍', question: 'What is shaping behavior?', options: ['Reinforce gradual progress', 'Expect perfection', 'No change'], correct: 0}
        ],
        expert: [
            {topic: 'Discipline', emoji: '📏👶', question: 'According to research, what percentage of parents use timeouts?', options: ['~85%', '20%', '50%', '100%'], correct: 0},
            {topic: 'Behavior', emoji: '🎭😊', question: 'What is the ABC model in behavior analysis?', options: ['Antecedent-Behavior-Consequence', 'Always Be Calm', 'Ask Before Correcting', 'Angry Bad Children'], correct: 0},
            {topic: 'Discipline', emoji: '📏✅', question: 'What did Diana Baumrind identify?', options: ['Three parenting styles', 'Five stages', 'Two types', 'No styles'], correct: 0},
            {topic: 'Behavior', emoji: '🎭😡', question: 'What is the typical age for peak tantrums?', options: ['2-3 years', '5 years', '10 years', '1 year'], correct: 0},
            {topic: 'Discipline', emoji: '📏⏰', question: 'What is the recommended timeout duration for a 4-year-old?', options: ['4 minutes', '10 minutes', '30 minutes', '1 hour'], correct: 0},
            {topic: 'Behavior', emoji: '🎭🌟', question: 'What is the overjustification effect?', options: ['External rewards reduce intrinsic motivation', 'Rewards always help', 'No effect', 'Increase motivation'], correct: 0},
            {topic: 'Discipline', emoji: '📏🚫', question: 'What percentage of countries ban corporal punishment?', options: ['~65 countries', '10 countries', 'All countries', 'No countries'], correct: 0},
            {topic: 'Behavior', emoji: '🎭💡', question: 'What is variable ratio reinforcement?', options: ['Rewards at unpredictable intervals', 'Always reward', 'Never reward', 'Fixed schedule'], correct: 0},
            {topic: 'Discipline', emoji: '📏🗣️', question: 'What is emotion coaching?', options: ['Help children identify and manage emotions', 'Dismiss feelings', 'Punish emotions', 'Ignore emotions'], correct: 0},
            {topic: 'Behavior', emoji: '🎭👍', question: 'What is the Premack Principle?', options: ['High-probability behavior reinforces low-probability', 'All behaviors equal', 'No principle', 'Random rewards'], correct: 0}
        ],
        extreme: [
            {topic: 'Discipline', emoji: '📏👶', question: 'Name three positive discipline strategies', answer: 'Natural consequences, Redirection, Time-in, Problem-solving, Praise (any 3)'},
            {topic: 'Behavior', emoji: '🎭😊', question: 'Name the four parenting styles by Baumrind', answer: 'Authoritative, Authoritarian, Permissive, Uninvolved (Neglectful)'},
            {topic: 'Discipline', emoji: '📏✅', question: 'Name three reasons why consistency matters', answer: 'Predictability, Security, Learning boundaries, Trust, Effectiveness (any 3)'},
            {topic: 'Behavior', emoji: '🎭😡', question: 'Name three triggers for misbehavior', answer: 'Hunger, Tiredness, Overstimulation, Frustration, Transitions (any 3)'},
            {topic: 'Discipline', emoji: '📏⏰', question: 'Name three alternatives to timeout', answer: 'Time-in, Redirection, Natural consequences, Problem-solving, Calming corner (any 3)'},
            {topic: 'Behavior', emoji: '🎭🌟', question: 'Name three types of reinforcement', answer: 'Positive reinforcement, Negative reinforcement, Variable ratio, Fixed ratio (any 3)'},
            {topic: 'Discipline', emoji: '📏🚫', question: 'Name three negative effects of spanking', answer: 'Aggression, Anxiety, Lower self-esteem, Mental health issues (any 3)'},
            {topic: 'Behavior', emoji: '🎭💡', question: 'Name three components of behavior modification', answer: 'Antecedent, Behavior, Consequence, Reinforcement, Extinction (any 3)'},
            {topic: 'Discipline', emoji: '📏🗣️', question: 'Name three active listening techniques', answer: 'Eye contact, Reflecting feelings, Paraphrasing, No interrupting (any 3)'},
            {topic: 'Behavior', emoji: '🎭👍', question: 'Name three ways to encourage good behavior', answer: 'Praise, Rewards, Modeling, Clear expectations, Positive attention (any 3)'}
        ]
    },
    3: { // Chapter 3: Nutrition & Health
        easy: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'Fruits and vegetables are healthy.', options: ['True', 'False'], correct: 0},
            {topic: 'Health', emoji: '💉🏥', question: 'Vaccinations protect children.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥛🧀', question: 'Milk provides calcium.', options: ['True', 'False'], correct: 0},
            {topic: 'Health', emoji: '🏃‍♂️⚽', question: 'Exercise is important for children.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🍬🚫', question: 'Too much sugar is unhealthy.', options: ['True', 'False'], correct: 0},
            {topic: 'Health', emoji: '😷🤧', question: 'Handwashing prevents illness.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🥤💧', question: 'Water is essential for kids.', options: ['True', 'False'], correct: 0},
            {topic: 'Health', emoji: '🦷🪥', question: 'Brushing teeth prevents cavities.', options: ['True', 'False'], correct: 0},
            {topic: 'Nutrition', emoji: '🍞🌾', question: 'Whole grains are nutritious.', options: ['True', 'False'], correct: 0},
            {topic: 'Health', emoji: '☀️🧴', question: 'Sunscreen protects skin.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'How many servings of fruits/vegetables daily?', options: ['5 servings', '1 serving'], correct: 0},
            {topic: 'Health', emoji: '💉🏥', question: 'What is the recommended vaccine schedule?', options: ['CDC immunization schedule', 'No schedule'], correct: 0},
            {topic: 'Nutrition', emoji: '🥛🧀', question: 'What is lactose intolerance?', options: ['Cannot digest milk sugar', 'Milk allergy'], correct: 0},
            {topic: 'Health', emoji: '🏃‍♂️⚽', question: 'How much exercise do kids need daily?', options: ['60 minutes', '10 minutes'], correct: 0},
            {topic: 'Nutrition', emoji: '🍬🚫', question: 'What is added sugar?', options: ['Sugar added to food', 'Natural fruit sugar'], correct: 0},
            {topic: 'Health', emoji: '😷🤧', question: 'When should kids wash hands?', options: ['Before eating, after bathroom', 'Never'], correct: 0},
            {topic: 'Nutrition', emoji: '🥤💧', question: 'How much water do kids need?', options: ['6-8 glasses daily', '1 glass'], correct: 0},
            {topic: 'Health', emoji: '🦷🪥', question: 'When should kids brush teeth?', options: ['Twice daily', 'Once weekly'], correct: 0},
            {topic: 'Nutrition', emoji: '🍞🌾', question: 'What are complex carbohydrates?', options: ['Whole grains, fiber', 'Simple sugars'], correct: 0},
            {topic: 'Health', emoji: '☀️🧴', question: 'What SPF is recommended for children?', options: ['SPF 30+', 'SPF 5'], correct: 0}
        ],
        hard: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'What is the MyPlate recommendation?', options: ['Half plate fruits/vegetables', 'All protein', 'No vegetables'], correct: 0},
            {topic: 'Health', emoji: '💉🏥', question: 'What is herd immunity?', options: ['Community protection through vaccination', 'Individual immunity', 'No immunity'], correct: 0},
            {topic: 'Nutrition', emoji: '🥛🧀', question: 'What is the difference between allergy and intolerance?', options: ['Allergy involves immune system', 'Same thing', 'No difference'], correct: 0},
            {topic: 'Health', emoji: '🏃‍♂️⚽', question: 'What is childhood obesity BMI threshold?', options: ['95th percentile or above', '50th percentile', '10th percentile'], correct: 0},
            {topic: 'Nutrition', emoji: '🍬🚫', question: 'What is the recommended daily sugar limit for kids?', options: ['Less than 25g (6 teaspoons)', '100g', 'Unlimited'], correct: 0},
            {topic: 'Health', emoji: '😷🤧', question: 'What is the proper handwashing duration?', options: ['20 seconds', '2 seconds', '5 minutes'], correct: 0},
            {topic: 'Nutrition', emoji: '🥤💧', question: 'What causes dehydration in children?', options: ['Illness, heat, insufficient intake', 'Only exercise', 'Cold weather'], correct: 0},
            {topic: 'Health', emoji: '🦷🪥', question: 'When should first dental visit occur?', options: ['First tooth or age 1', 'Age 10', 'Age 5'], correct: 0},
            {topic: 'Nutrition', emoji: '🍞🌾', question: 'What are essential fatty acids?', options: ['Omega-3 and Omega-6', 'Saturated fats', 'Trans fats'], correct: 0},
            {topic: 'Health', emoji: '☀️🧴', question: 'What is vitamin D synthesis?', options: ['Skin produces from sun exposure', 'Only from food', 'Not needed'], correct: 0}
        ],
        expert: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'What percentage of children eat recommended vegetables?', options: ['Less than 10%', '90%', '50%', '100%'], correct: 0},
            {topic: 'Health', emoji: '💉🏥', question: 'How many vaccines do children receive by age 6?', options: ['~14-15 vaccines', '3 vaccines', '1 vaccine', '50 vaccines'], correct: 0},
            {topic: 'Nutrition', emoji: '🥛🧀', question: 'What is the recommended calcium intake for children 4-8?', options: ['1000 mg daily', '100 mg', '5000 mg', 'None'], correct: 0},
            {topic: 'Health', emoji: '🏃‍♂️⚽', question: 'What percentage of children meet exercise guidelines?', options: ['~24%', '90%', '5%', '100%'], correct: 0},
            {topic: 'Nutrition', emoji: '🍬🚫', question: 'What is the average sugar consumption for children?', options: ['~17 teaspoons daily', '2 teaspoons', '1 teaspoon', 'None'], correct: 0},
            {topic: 'Health', emoji: '😷🤧', question: 'What percentage of illness is prevented by handwashing?', options: ['~50%', '5%', '100%', '0%'], correct: 0},
            {topic: 'Nutrition', emoji: '🥤💧', question: 'What are signs of dehydration?', options: ['Dry mouth, dark urine, fatigue', 'Only thirst', 'No signs', 'Hunger'], correct: 0},
            {topic: 'Health', emoji: '🦷🪥', question: 'What percentage of children have cavities?', options: ['~20% by age 5', '0%', '100%', '5%'], correct: 0},
            {topic: 'Nutrition', emoji: '🍞🌾', question: 'What is the gut microbiome?', options: ['Beneficial bacteria in digestive system', 'Harmful bacteria', 'No bacteria', 'Only in adults'], correct: 0},
            {topic: 'Health', emoji: '☀️🧴', question: 'How much vitamin D do children need daily?', options: ['600 IU', '10 IU', '10000 IU', 'None'], correct: 0}
        ],
        extreme: [
            {topic: 'Nutrition', emoji: '🥗🍎', question: 'Name the five food groups', answer: 'Fruits, Vegetables, Grains, Protein, Dairy'},
            {topic: 'Health', emoji: '💉🏥', question: 'Name three diseases prevented by vaccines', answer: 'Measles, Polio, Whooping cough, Chickenpox, Flu (any 3)'},
            {topic: 'Nutrition', emoji: '🥛🧀', question: 'Name three sources of calcium', answer: 'Milk, Cheese, Yogurt, Leafy greens, Fortified foods (any 3)'},
            {topic: 'Health', emoji: '🏃‍♂️⚽', question: 'Name three benefits of exercise for children', answer: 'Healthy weight, Strong bones, Better mood, Improved sleep (any 3)'},
            {topic: 'Nutrition', emoji: '🍬🚫', question: 'Name three hidden sources of sugar', answer: 'Juice, Yogurt, Cereal, Sauces, Granola bars (any 3)'},
            {topic: 'Health', emoji: '😷🤧', question: 'Name three common childhood illnesses', answer: 'Cold, Flu, Ear infection, Strep throat, Stomach bug (any 3)'},
            {topic: 'Nutrition', emoji: '🥤💧', question: 'Name three signs of proper hydration', answer: 'Light urine, Moist lips, Energy, No thirst, Skin elasticity (any 3)'},
            {topic: 'Health', emoji: '🦷🪥', question: 'Name three dental hygiene practices', answer: 'Brush twice daily, Floss, Limit sugar, Regular checkups (any 3)'},
            {topic: 'Nutrition', emoji: '🍞🌾', question: 'Name three essential nutrients for children', answer: 'Protein, Calcium, Iron, Vitamins, Fiber (any 3)'},
            {topic: 'Health', emoji: '☀️🧴', question: 'Name three sun safety practices', answer: 'Sunscreen, Shade, Protective clothing, Avoid peak hours (any 3)'}
        ]
    },
    4: { // Chapter 4: Child Development
        easy: [
            {topic: 'Development', emoji: '👶📈', question: 'Children develop at different rates.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯👣', question: 'Walking is a motor milestone.', options: ['True', 'False'], correct: 0},
            {topic: 'Development', emoji: '🧠💭', question: 'Play helps brain development.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'Talking is a language milestone.', options: ['True', 'False'], correct: 0},
            {topic: 'Development', emoji: '👶🔄', question: 'Development is continuous.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯✋', question: 'Grasping objects is a milestone.', options: ['True', 'False'], correct: 0},
            {topic: 'Development', emoji: '🧠🎨', question: 'Creativity develops over time.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯😊', question: 'Smiling is an early milestone.', options: ['True', 'False'], correct: 0},
            {topic: 'Development', emoji: '👶🌱', question: 'Genetics and environment both matter.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🚽', question: 'Potty training is a developmental stage.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Development', emoji: '👶📈', question: 'What are developmental domains?', options: ['Physical, cognitive, social, emotional', 'Only physical'], correct: 0},
            {topic: 'Milestones', emoji: '🎯👣', question: 'When do babies typically walk?', options: ['12-15 months', '3 months'], correct: 0},
            {topic: 'Development', emoji: '🧠💭', question: 'What is cognitive development?', options: ['Thinking and learning skills', 'Physical growth'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'When do babies say first words?', options: ['10-14 months', '6 months'], correct: 0},
            {topic: 'Development', emoji: '👶🔄', question: 'What are critical periods?', options: ['Optimal times for learning', 'Crisis times'], correct: 0},
            {topic: 'Milestones', emoji: '🎯✋', question: 'What is the pincer grasp?', options: ['Thumb and finger grasp', 'Whole hand grasp'], correct: 0},
            {topic: 'Development', emoji: '🧠🎨', question: 'What is symbolic play?', options: ['Pretend play', 'Physical play'], correct: 0},
            {topic: 'Milestones', emoji: '🎯😊', question: 'When do babies smile socially?', options: ['6-8 weeks', '6 months'], correct: 0},
            {topic: 'Development', emoji: '👶🌱', question: 'What is nature vs nurture?', options: ['Genetics vs environment', 'Plant growth'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🚽', question: 'What age for potty training readiness?', options: ['18-24 months', '6 months'], correct: 0}
        ],
        hard: [
            {topic: 'Development', emoji: '👶📈', question: 'What is the Zone of Proximal Development?', options: ['Gap between what child can do alone vs with help', 'Growth chart', 'Age range'], correct: 0},
            {topic: 'Milestones', emoji: '🎯👣', question: 'What do gross motor skills involve?', options: ['Large muscle movements', 'Fine hand movements', 'Thinking skills'], correct: 0},
            {topic: 'Development', emoji: '🧠💭', question: "What is Piaget's preoperational stage?", options: ['Ages 2-7, symbolic thinking', 'Birth-2 years', 'Teens'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'What is receptive language?', options: ['Understanding words', 'Speaking words', 'Writing'], correct: 0},
            {topic: 'Development', emoji: '👶🔄', question: 'What is neuroplasticity?', options: ["Brain's ability to change", 'Muscle flexibility', 'Bone growth'], correct: 0},
            {topic: 'Milestones', emoji: '🎯✋', question: 'What are fine motor skills?', options: ['Small precise movements', 'Large movements', 'Running'], correct: 0},
            {topic: 'Development', emoji: '🧠🎨', question: 'What is divergent thinking?', options: ['Creative problem-solving', 'One right answer', 'No thinking'], correct: 0},
            {topic: 'Milestones', emoji: '🎯😊', question: 'What is joint attention?', options: ['Shared focus on object', 'Parallel play', 'Solitary play'], correct: 0},
            {topic: 'Development', emoji: '👶🌱', question: 'What is epigenetics?', options: ['Environment affects gene expression', 'Only genes matter', 'No influence'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🚽', question: 'What are signs of potty readiness?', options: ['Staying dry, interest, communication', 'Only age', 'No signs'], correct: 0}
        ],
        expert: [
            {topic: 'Development', emoji: '👶📈', question: 'What percentage of brain development occurs by age 5?', options: ['~90%', '10%', '50%', '25%'], correct: 0},
            {topic: 'Milestones', emoji: '🎯👣', question: 'What is the typical age range for crawling?', options: ['6-10 months', '1 year', '3 months', '2 years'], correct: 0},
            {topic: 'Development', emoji: '🧠💭', question: 'Who developed the stages of cognitive development?', options: ['Jean Piaget', 'Erik Erikson', 'Sigmund Freud', 'B.F. Skinner'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'How many words should a 2-year-old know?', options: ['~50-200 words', '5 words', '1000 words', '10 words'], correct: 0},
            {topic: 'Development', emoji: '👶🔄', question: 'What are the three types of temperament?', options: ['Easy, Difficult, Slow-to-warm', 'Good, Bad', 'Happy, Sad', 'Active, Passive'], correct: 0},
            {topic: 'Milestones', emoji: '🎯✋', question: 'At what age can children use scissors?', options: ['3-4 years', '1 year', '10 years', '6 months'], correct: 0},
            {topic: 'Development', emoji: '🧠🎨', question: 'What is the critical period for language?', options: ['Birth to age 7', 'Teen years', 'Adulthood', 'Age 10+'], correct: 0},
            {topic: 'Milestones', emoji: '🎯😊', question: 'What is stranger anxiety age?', options: ['6-12 months', '3 years', '5 years', '1 month'], correct: 0},
            {topic: 'Development', emoji: '👶🌱', question: 'What is the developmental cascade?', options: ['One domain affects others', 'Isolated development', 'No connection', 'Random'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🚽', question: 'What is the average age for daytime dryness?', options: ['2.5-3 years', '1 year', '5 years', '6 months'], correct: 0}
        ],
        extreme: [
            {topic: 'Development', emoji: '👶📈', question: 'Name the four domains of child development', answer: 'Physical, Cognitive, Social, Emotional'},
            {topic: 'Milestones', emoji: '🎯👣', question: 'Name three gross motor milestones in first year', answer: 'Rolling over, Sitting, Crawling, Standing, Walking (any 3)'},
            {topic: 'Development', emoji: '🧠💭', question: "Name Piaget's four stages of development", answer: 'Sensorimotor, Preoperational, Concrete operational, Formal operational'},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'Name three language development stages', answer: 'Cooing, Babbling, First words, Two-word phrases, Sentences (any 3)'},
            {topic: 'Development', emoji: '👶🔄', question: 'Name three factors affecting development', answer: 'Genetics, Environment, Nutrition, Stimulation, Healthcare (any 3)'},
            {topic: 'Milestones', emoji: '🎯✋', question: 'Name three fine motor milestones', answer: 'Pincer grasp, Scribbling, Using utensils, Buttoning, Cutting (any 3)'},
            {topic: 'Development', emoji: '🧠🎨', question: 'List three different types of play', answer: 'Solitary, Parallel, Cooperative, Symbolic, Physical (any 3)'},
            {topic: 'Milestones', emoji: '🎯😊', question: 'Name three social-emotional milestones', answer: 'Smiling, Stranger anxiety, Empathy, Self-awareness (any 3)'},
            {topic: 'Development', emoji: '👶🌱', question: 'Name three early childhood theorists', answer: 'Piaget, Erikson, Vygotsky, Bowlby, Montessori (any 3)'},
            {topic: 'Milestones', emoji: '🎯🚽', question: 'Name three potty training readiness signs', answer: 'Stays dry, Shows interest, Can communicate, Follows directions (any 3)'}
        ]
    },
    5: { // Chapter 5: Education & Learning
        easy: [
            {topic: 'Education', emoji: '📚✏️', question: 'Reading to children builds literacy.', options: ['True', 'False'], correct: 0},
            {topic: 'Learning', emoji: '🧠📖', question: 'Children learn through play.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '📚🎒', question: 'School prepares children for future.', options: ['True', 'False'], correct: 0},
            {topic: 'Learning', emoji: '🧠🎨', question: 'Hands-on activities aid learning.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '📚👨‍🏫', question: 'Teachers support development.', options: ['True', 'False'], correct: 0},
            {topic: 'Learning', emoji: '🧠🔢', question: 'Math skills develop over time.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '📚🏫', question: 'Preschool benefits children.', options: ['True', 'False'], correct: 0},
            {topic: 'Learning', emoji: '🧠💡', question: 'Curiosity drives learning.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '📚📝', question: 'Practice improves skills.', options: ['True', 'False'], correct: 0},
            {topic: 'Learning', emoji: '🧠🌟', question: 'Every child can learn.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Education', emoji: '📚✏️', question: 'What is phonemic awareness?', options: ['Understanding sounds in words', 'Letter names'], correct: 0},
            {topic: 'Learning', emoji: '🧠📖', question: 'What is experiential learning?', options: ['Learning by doing', 'Only listening'], correct: 0},
            {topic: 'Education', emoji: '📚🎒', question: 'What is school readiness?', options: ['Skills needed for kindergarten', 'Age only'], correct: 0},
            {topic: 'Learning', emoji: '🧠🎨', question: 'What is STEAM education?', options: ['Science, Tech, Engineering, Art, Math', 'Only science'], correct: 0},
            {topic: 'Education', emoji: '📚👨‍🏫', question: 'What is differentiated instruction?', options: ['Adapt teaching to individual needs', 'Same for all'], correct: 0},
            {topic: 'Learning', emoji: '🧠🔢', question: 'What is number sense?', options: ['Understanding quantity and operations', 'Counting only'], correct: 0},
            {topic: 'Education', emoji: '📚🏫', question: 'What is Montessori method?', options: ['Child-led, hands-on learning', 'Teacher-directed only'], correct: 0},
            {topic: 'Learning', emoji: '🧠💡', question: 'What is inquiry-based learning?', options: ['Learning through questions', 'Memorization'], correct: 0},
            {topic: 'Education', emoji: '📚📝', question: 'What is mastery learning?', options: ['Master topic before moving on', 'Skip ahead'], correct: 0},
            {topic: 'Learning', emoji: '🧠🌟', question: 'What are learning styles?', options: ['Different ways children learn', 'One way only'], correct: 0}
        ],
        hard: [
            {topic: 'Education', emoji: '📚✏️', question: 'What is the science of reading?', options: ['Evidence-based literacy instruction', 'Whole language only', 'Guessing words'], correct: 0},
            {topic: 'Learning', emoji: '🧠📖', question: "What is Vygotsky's sociocultural theory?", options: ['Learning through social interaction', 'Isolated learning', 'Genetic only'], correct: 0},
            {topic: 'Education', emoji: '📚🎒', question: 'What is an IEP?', options: ['Individualized Education Plan', 'Intelligence Evaluation Program', 'Initial Education Period'], correct: 0},
            {topic: 'Learning', emoji: '🧠🎨', question: 'What is project-based learning?', options: ['Learn through real-world projects', 'Worksheets only', 'No projects'], correct: 0},
            {topic: 'Education', emoji: '📚👨‍🏫', question: 'What is Response to Intervention (RTI)?', options: ['Tiered support based on needs', 'One-size-fits-all', 'No intervention'], correct: 0},
            {topic: 'Learning', emoji: '🧠🔢', question: 'What is mathematical reasoning?', options: ['Logical thinking about numbers', 'Only memorizing facts', 'No reasoning'], correct: 0},
            {topic: 'Education', emoji: '📚🏫', question: 'What is Reggio Emilia approach?', options: ['Child-centered, project-based', 'Teacher-directed', 'Standardized'], correct: 0},
            {topic: 'Learning', emoji: '🧠💡', question: 'How is metacognition defined?', options: ["Thinking about one's thinking", 'Basic thinking', 'No awareness'], correct: 0},
            {topic: 'Education', emoji: '📚📝', question: 'What is formative assessment?', options: ['Ongoing feedback during learning', 'Final exam only', 'No assessment'], correct: 0},
            {topic: 'Learning', emoji: '🧠🌟', question: 'What is multiple intelligences theory?', options: ['Different types of intelligence', 'One intelligence', 'No theory'], correct: 0}
        ],
        expert: [
            {topic: 'Education', emoji: '📚✏️', question: 'What are the five essential components of reading?', options: ['Phonemic awareness, Phonics, Fluency, Vocabulary, Comprehension', 'Just phonics', 'Only reading', 'Memorization'], correct: 0},
            {topic: 'Learning', emoji: '🧠📖', question: 'Who developed the Zone of Proximal Development?', options: ['Lev Vygotsky', 'Jean Piaget', 'Erik Erikson', 'Maria Montessori'], correct: 0},
            {topic: 'Education', emoji: '📚🎒', question: 'What percentage of children attend preschool?', options: ['~68%', '10%', '100%', '25%'], correct: 0},
            {topic: 'Learning', emoji: '🧠🎨', question: "What is Bloom's Taxonomy?", options: ['Levels of learning objectives', 'Teaching method', 'Grading system', 'Student type'], correct: 0},
            {topic: 'Education', emoji: '📚👨‍🏫', question: 'What is the recommended student-teacher ratio for preschool?', options: ['10:1', '50:1', '1:1', '100:1'], correct: 0},
            {topic: 'Learning', emoji: '🧠🔢', question: 'At what age can children understand one-to-one correspondence?', options: ['3-4 years', '1 year', '10 years', '6 months'], correct: 0},
            {topic: 'Education', emoji: '📚🏫', question: 'What is the literacy rate goal by 3rd grade?', options: ['Reading at grade level', 'No goal', 'College level', 'Preschool level'], correct: 0},
            {topic: 'Learning', emoji: '🧠💡', question: 'What is spaced repetition?', options: ['Review at increasing intervals', 'Constant repetition', 'No repetition', 'Random review'], correct: 0},
            {topic: 'Education', emoji: '📚📝', question: 'What is criterion-referenced assessment?', options: ['Compare to standard, not peers', 'Compare to others', 'No standard', 'Random'], correct: 0},
            {topic: 'Learning', emoji: '🧠🌟', question: 'What did Howard Gardner propose?', options: ['Multiple intelligences theory', 'One intelligence', 'No theory', 'IQ only'], correct: 0}
        ],
        extreme: [
            {topic: 'Education', emoji: '📚✏️', question: 'Name the five components of literacy', answer: 'Phonemic awareness, Phonics, Fluency, Vocabulary, Comprehension'},
            {topic: 'Learning', emoji: '🧠📖', question: 'Name three learning theories', answer: 'Behaviorism, Cognitivism, Constructivism, Connectivism (any 3)'},
            {topic: 'Education', emoji: '📚🎒', question: 'Name three school readiness skills', answer: 'Letter recognition, Counting, Following directions, Social skills (any 3)'},
            {topic: 'Learning', emoji: '🧠🎨', question: 'Name the components of STEAM', answer: 'Science, Technology, Engineering, Art, Math'},
            {topic: 'Education', emoji: '📚👨‍🏫', question: 'Name three alternative education approaches', answer: 'Montessori, Waldorf, Reggio Emilia, Homeschool, Unschooling (any 3)'},
            {topic: 'Learning', emoji: '🧠🔢', question: 'Name three early math concepts', answer: 'Counting, Patterns, Shapes, Sorting, Comparison (any 3)'},
            {topic: 'Education', emoji: '📚🏫', question: 'Name three benefits of preschool', answer: 'Social skills, School readiness, Cognitive development, Language (any 3)'},
            {topic: 'Learning', emoji: '🧠💡', question: 'Name three ways to foster curiosity', answer: 'Ask questions, Provide materials, Follow interests, Explore nature (any 3)'},
            {topic: 'Education', emoji: '📚📝', question: 'Name three types of assessment', answer: 'Formative, Summative, Diagnostic, Performance-based (any 3)'},
            {topic: 'Learning', emoji: '🧠🌟', question: 'Name three learning modalities', answer: 'Visual, Auditory, Kinesthetic'}
        ]
    },
    6: { // Chapter 6: Safety & First Aid
        easy: [
            {topic: 'Safety', emoji: '🛡️🏠', question: 'Childproofing homes prevents injuries.', options: ['True', 'False'], correct: 0},
            {topic: 'First Aid', emoji: '🩹💊', question: 'First aid kits are important.', options: ['True', 'False'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🚗', question: 'Car seats protect children.', options: ['True', 'False'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🔥', question: 'Cool burns with water.', options: ['True', 'False'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🏊', question: 'Supervise children near water.', options: ['True', 'False'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🤕', question: 'Clean wounds to prevent infection.', options: ['True', 'False'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🔌', question: 'Cover electrical outlets.', options: ['True', 'False'], correct: 0},
            {topic: 'First Aid', emoji: '🩹😵', question: 'Call 911 for emergencies.', options: ['True', 'False'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🚴', question: 'Helmets prevent head injuries.', options: ['True', 'False'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🌡️', question: 'Fever indicates illness.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Safety', emoji: '🛡️🏠', question: 'What is childproofing?', options: ['Making home safe for children', 'Only locks'], correct: 0},
            {topic: 'First Aid', emoji: '🩹💊', question: 'What should be in first aid kit?', options: ['Bandages, antiseptic, gauze', 'Only bandaids'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🚗', question: 'When can children face forward in car seat?', options: ['Age 2+ and weight limit', 'Birth'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🔥', question: 'How to treat minor burn?', options: ['Cool water 10-15 minutes', 'Ice directly'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🏊', question: 'What is water safety rule?', options: ['Never leave children unattended', 'Can leave briefly'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🤕', question: 'How to clean wound?', options: ['Soap and water', 'Leave dirty'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🔌', question: 'What is outlet safety?', options: ['Use outlet covers', 'No protection needed'], correct: 0},
            {topic: 'First Aid', emoji: '🩹😵', question: 'When to call 911?', options: ['Severe injury, breathing problems', 'Minor cuts'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🚴', question: 'What age for bike helmet?', options: ['All ages', 'Only teens'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🌡️', question: 'What temperature is fever?', options: ['100.4°F (38°C) or higher', '95°F'], correct: 0}
        ],
        hard: [
            {topic: 'Safety', emoji: '🛡️🏠', question: 'What are leading causes of child injury?', options: ['Falls, drowning, burns, poisoning', 'Only falls', 'None'], correct: 0},
            {topic: 'First Aid', emoji: '🩹💊', question: 'What is the Heimlich maneuver?', options: ['Abdominal thrusts for choking', 'Chest compressions', 'Back blows only'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🚗', question: 'What are car seat stages?', options: ['Rear-facing, forward-facing, booster, belt', 'One stage', 'No stages'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🔥', question: 'What is a second-degree burn?', options: ['Blisters, deeper skin damage', 'Surface only', 'Full thickness'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🏊', question: 'What is touch supervision?', options: ["Within arm's reach", 'Same room', 'Different room'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🤕', question: 'When do cuts need stitches?', options: ["Deep, gaping, won\'t stop bleeding", 'All cuts', 'No cuts'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🔌', question: 'What is GFCI outlet?', options: ['Ground Fault Circuit Interrupter', 'Regular outlet', 'No difference'], correct: 0},
            {topic: 'First Aid', emoji: '🩹😵', question: 'What is CPR ratio for children?', options: ['30 compressions, 2 breaths', '15:2', '5:1'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🚴', question: 'What makes a proper fitting helmet?', options: ['Level, snug, 2 fingers above eyebrows', 'Loose', 'Tilted'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🌡️', question: 'What is febrile seizure?', options: ['Seizure from high fever', 'Normal', 'Always dangerous'], correct: 0}
        ],
        expert: [
            {topic: 'Safety', emoji: '🛡️🏠', question: 'What percentage of injuries happen at home?', options: ['~50%', '5%', '100%', '10%'], correct: 0},
            {topic: 'First Aid', emoji: '🩹💊', question: 'What size object is choking hazard?', options: ['Smaller than 1.25 inches', '5 inches', '10 inches', 'Any size'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🚗', question: 'Until what age rear-facing car seat?', options: ['At least age 2', 'Birth only', '6 months', '5 years'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🔥', question: 'What is Rule of Nines for burns?', options: ['Estimate body surface area burned', 'Burn temperature', 'No rule', 'Cooling time'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🏊', question: 'How many children drown in pools annually in US?', options: ['~350', '10', '5000', '50'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🤕', question: 'What is the golden hour in trauma?', options: ['First hour after injury most critical', 'Second hour', 'No significance', 'One day'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🔌', question: 'At what amperage is electricity dangerous?', options: ['100-200 mA can be fatal', '10 mA', '1000 mA', 'Not dangerous'], correct: 0},
            {topic: 'First Aid', emoji: '🩹😵', question: 'What is compression depth for child CPR?', options: ['2 inches (1/3 chest depth)', '5 inches', '0.5 inches', 'Full depth'], correct: 0},
            {topic: 'Safety', emoji: '🛡️🚴', question: 'What percentage do helmets reduce head injury?', options: ['~85%', '10%', '5%', '100%'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🌡️', question: 'What temperature requires emergency care?', options: ['105°F (40.5°C) or higher', '99°F', '98.6°F', '110°F'], correct: 0}
        ],
        extreme: [
            {topic: 'Safety', emoji: '🛡️🏠', question: 'Name three childproofing measures', answer: 'Outlet covers, Cabinet locks, Gates, Corner guards, Anchor furniture (any 3)'},
            {topic: 'First Aid', emoji: '🩹💊', question: 'Name three first aid kit essentials', answer: 'Bandages, Antiseptic, Gauze, Tape, Gloves, Scissors (any 3)'},
            {topic: 'Safety', emoji: '🛡️🚗', question: 'Name the four car seat types', answer: 'Rear-facing, Forward-facing, Booster, Seat belt'},
            {topic: 'First Aid', emoji: '🩹🔥', question: 'Name three types of burns', answer: 'First-degree, Second-degree, Third-degree'},
            {topic: 'Safety', emoji: '🛡️🏊', question: 'Name three water safety rules', answer: 'Constant supervision, Fencing, Swim lessons, Life jackets (any 3)'},
            {topic: 'First Aid', emoji: '🩹🤕', question: 'Name three signs of serious injury', answer: 'Unconsciousness, Severe bleeding, Difficulty breathing, Severe pain (any 3)'},
            {topic: 'Safety', emoji: '🛡️🔌', question: 'Name three electrical safety measures', answer: 'Outlet covers, Cord management, GFCI outlets, Unplug appliances (any 3)'},
            {topic: 'First Aid', emoji: '🩹😵', question: 'Name the steps of CPR', answer: 'Check responsiveness, Call 911, Compressions, Airway, Breathing (any 3)'},
            {topic: 'Safety', emoji: '🛡️🚴', question: 'Name three helmet safety rules', answer: 'Proper fit, Level position, Chin strap, Replace after crash (any 3)'},
            {topic: 'First Aid', emoji: '🩹🌡️', question: 'Name three fever management strategies', answer: 'Acetaminophen, Fluids, Light clothing, Lukewarm bath (any 3)'}
        ]
    }
};
