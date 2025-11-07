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
,
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
            {topic: 'Behavior', emoji: '🎭😊', question: 'What is a natural consequence?', options: ['Result of child\'s action', 'Parent-imposed punishment'], correct: 0},
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
            {topic: 'Discipline', emoji: '📏🗣️', question: 'What is reflective listening?', options: ['Mirror child\'s feelings', 'Just talk', 'Lecture'], correct: 0},
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
            {topic: 'Development', emoji: '🧠💭', question: 'What is Piaget\'s preoperational stage?', options: ['Ages 2-7, symbolic thinking', 'Birth-2 years', 'Teens'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'What is receptive language?', options: ['Understanding words', 'Speaking words', 'Writing'], correct: 0},
            {topic: 'Development', emoji: '👶🔄', question: 'What is neuroplasticity?', options: ['Brain\'s ability to change', 'Muscle flexibility', 'Bone growth'], correct: 0},
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
            {topic: 'Development', emoji: '🧠💭', question: 'Name Piaget\'s four stages of development', answer: 'Sensorimotor, Preoperational, Concrete operational, Formal operational'},
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
            {topic: 'Learning', emoji: '🧠📖', question: 'What is Vygotsky\'s sociocultural theory?', options: ['Learning through social interaction', 'Isolated learning', 'Genetic only'], correct: 0},
            {topic: 'Education', emoji: '📚🎒', question: 'What is an IEP?', options: ['Individualized Education Plan', 'Intelligence Evaluation Program', 'Initial Education Period'], correct: 0},
            {topic: 'Learning', emoji: '🧠🎨', question: 'What is project-based learning?', options: ['Learn through real-world projects', 'Worksheets only', 'No projects'], correct: 0},
            {topic: 'Education', emoji: '📚👨‍🏫', question: 'What is Response to Intervention (RTI)?', options: ['Tiered support based on needs', 'One-size-fits-all', 'No intervention'], correct: 0},
            {topic: 'Learning', emoji: '🧠🔢', question: 'What is mathematical reasoning?', options: ['Logical thinking about numbers', 'Only memorizing facts', 'No reasoning'], correct: 0},
            {topic: 'Education', emoji: '📚🏫', question: 'What is Reggio Emilia approach?', options: ['Child-centered, project-based', 'Teacher-directed', 'Standardized'], correct: 0},
            {topic: 'Learning', emoji: '🧠💡', question: 'How is metacognition defined?', options: ['Thinking about one\'s thinking', 'Basic thinking', 'No awareness'], correct: 0},
            {topic: 'Education', emoji: '📚📝', question: 'What is formative assessment?', options: ['Ongoing feedback during learning', 'Final exam only', 'No assessment'], correct: 0},
            {topic: 'Learning', emoji: '🧠🌟', question: 'What is multiple intelligences theory?', options: ['Different types of intelligence', 'One intelligence', 'No theory'], correct: 0}
        ],
        expert: [
            {topic: 'Education', emoji: '📚✏️', question: 'What are the five essential components of reading?', options: ['Phonemic awareness, Phonics, Fluency, Vocabulary, Comprehension', 'Just phonics', 'Only reading', 'Memorization'], correct: 0},
            {topic: 'Learning', emoji: '🧠📖', question: 'Who developed the Zone of Proximal Development?', options: ['Lev Vygotsky', 'Jean Piaget', 'Erik Erikson', 'Maria Montessori'], correct: 0},
            {topic: 'Education', emoji: '📚🎒', question: 'What percentage of children attend preschool?', options: ['~68%', '10%', '100%', '25%'], correct: 0},
            {topic: 'Learning', emoji: '🧠🎨', question: 'What is Bloom\'s Taxonomy?', options: ['Levels of learning objectives', 'Teaching method', 'Grading system', 'Student type'], correct: 0},
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
            {topic: 'Safety', emoji: '🛡️🏊', question: 'What is touch supervision?', options: ['Within arm\'s reach', 'Same room', 'Different room'], correct: 0},
            {topic: 'First Aid', emoji: '🩹🤕', question: 'When do cuts need stitches?', options: ['Deep, gaping, won\'t stop bleeding', 'All cuts', 'No cuts'], correct: 0},
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
,
    7: { // Chapter 7: Emotional Intelligence
        easy: [
            {topic: 'Emotions', emoji: '😊❤️', question: 'Children have feelings.', options: ['True', 'False'], correct: 0},
            {topic: 'EQ', emoji: '🧠💚', question: 'Emotional intelligence can be taught.', options: ['True', 'False'], correct: 0},
            {topic: 'Emotions', emoji: '😢🤗', question: 'Validating feelings helps children.', options: ['True', 'False'], correct: 0},
            {topic: 'EQ', emoji: '🧠😌', question: 'Self-regulation is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Emotions', emoji: '😡🛑', question: 'Anger is a normal emotion.', options: ['True', 'False'], correct: 0},
            {topic: 'EQ', emoji: '🧠🤝', question: 'Empathy can be learned.', options: ['True', 'False'], correct: 0},
            {topic: 'Emotions', emoji: '😰😌', question: 'Children feel anxiety.', options: ['True', 'False'], correct: 0},
            {topic: 'EQ', emoji: '🧠👂', question: 'Listening validates emotions.', options: ['True', 'False'], correct: 0},
            {topic: 'Emotions', emoji: '😊🌈', question: 'Positive emotions are beneficial.', options: ['True', 'False'], correct: 0},
            {topic: 'EQ', emoji: '🧠💪', question: 'Resilience can be built.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Emotions', emoji: '😊❤️', question: 'What is emotion labeling?', options: ['Naming feelings', 'Ignoring emotions'], correct: 0},
            {topic: 'EQ', emoji: '🧠💚', question: 'What is emotional intelligence?', options: ['Understanding and managing emotions', 'Only IQ'], correct: 0},
            {topic: 'Emotions', emoji: '😢🤗', question: 'What is emotion validation?', options: ['Acknowledging feelings as real', 'Dismissing feelings'], correct: 0},
            {topic: 'EQ', emoji: '🧠😌', question: 'What is self-regulation?', options: ['Managing own emotions and behavior', 'Always happy'], correct: 0},
            {topic: 'Emotions', emoji: '😡🛑', question: 'What is anger management?', options: ['Healthy ways to express anger', 'Suppressing anger'], correct: 0},
            {topic: 'EQ', emoji: '🧠🤝', question: 'What is empathy?', options: ['Understanding others\' feelings', 'Only sympathy'], correct: 0},
            {topic: 'Emotions', emoji: '😰😌', question: 'What causes childhood anxiety?', options: ['Stress, change, uncertainty', 'Nothing'], correct: 0},
            {topic: 'EQ', emoji: '🧠👂', question: 'What does active listening require?', options: ['Fully focusing and understanding', 'Half paying attention'], correct: 0},
            {topic: 'Emotions', emoji: '😊🌈', question: 'What is emotional vocabulary?', options: ['Words to describe feelings', 'Regular words'], correct: 0},
            {topic: 'EQ', emoji: '🧠💪', question: 'What is resilience?', options: ['Bouncing back from challenges', 'Never struggling'], correct: 0}
        ],
        hard: [
            {topic: 'Emotions', emoji: '😊❤️', question: 'What is the Window of Tolerance?', options: ['Optimal arousal zone', 'Time limit', 'Anger threshold'], correct: 0},
            {topic: 'EQ', emoji: '🧠💚', question: 'What are the five components of EQ?', options: ['Self-awareness, regulation, motivation, empathy, social skills', 'Only IQ', 'Two components'], correct: 0},
            {topic: 'Emotions', emoji: '😢🤗', question: 'What does emotion coaching involve?', options: ['Teaching emotional awareness and regulation', 'Dismissing emotions', 'Punishing feelings'], correct: 0},
            {topic: 'EQ', emoji: '🧠😌', question: 'What is co-regulation?', options: ['Adult helps child regulate', 'Child alone', 'No regulation'], correct: 0},
            {topic: 'Emotions', emoji: '😡🛑', question: 'What is the amygdala hijack?', options: ['Emotional override of rational brain', 'Calm state', 'No reaction'], correct: 0},
            {topic: 'EQ', emoji: '🧠🤝', question: 'What is perspective-taking?', options: ['Seeing from another\'s viewpoint', 'Own view only', 'No perspective'], correct: 0},
            {topic: 'Emotions', emoji: '😰😌', question: 'What is separation anxiety disorder?', options: ['Excessive fear of separation', 'Normal separation', 'No anxiety'], correct: 0},
            {topic: 'EQ', emoji: '🧠👂', question: 'What does reflective listening mean?', options: ['Mirroring feelings back', 'Only hearing', 'Ignoring'], correct: 0},
            {topic: 'Emotions', emoji: '😊🌈', question: 'What is positive psychology?', options: ['Focus on strengths and wellbeing', 'Only problems', 'Ignore challenges'], correct: 0},
            {topic: 'EQ', emoji: '🧠💪', question: 'What does growth mindset mean?', options: ['Belief abilities can develop', 'Fixed abilities', 'No growth'], correct: 0}
        ],
        expert: [
            {topic: 'Emotions', emoji: '😊❤️', question: 'At what age can children recognize basic emotions?', options: ['2-3 years', '10 years', '1 month', '15 years'], correct: 0},
            {topic: 'EQ', emoji: '🧠💚', question: 'Who developed the concept of emotional intelligence?', options: ['Daniel Goleman', 'Sigmund Freud', 'B.F. Skinner', 'Erik Erikson'], correct: 0},
            {topic: 'Emotions', emoji: '😢🤗', question: 'What is the optimal ratio of positive to negative emotions?', options: ['3:1 or higher', '1:1', '1:3', '10:1'], correct: 0},
            {topic: 'EQ', emoji: '🧠😌', question: 'At what age does self-regulation fully develop?', options: ['Mid-20s', 'Age 5', 'Birth', 'Age 10'], correct: 0},
            {topic: 'Emotions', emoji: '😡🛑', question: 'What percentage of children experience anger issues?', options: ['~7-10%', '90%', '1%', '100%'], correct: 0},
            {topic: 'EQ', emoji: '🧠🤝', question: 'When does empathy begin to develop?', options: ['18-24 months', '10 years', 'Birth', '5 years'], correct: 0},
            {topic: 'Emotions', emoji: '😰😌', question: 'What percentage of children have anxiety disorders?', options: ['~7-8%', '50%', '1%', '100%'], correct: 0},
            {topic: 'EQ', emoji: '🧠👂', question: 'What is the impact of emotional validation?', options: ['Reduces intensity and duration of emotions', 'Increases problems', 'No impact', 'Makes worse'], correct: 0},
            {topic: 'Emotions', emoji: '😊🌈', question: 'How many basic emotions do researchers identify?', options: ['6-8 basic emotions', '2', '100', '1'], correct: 0},
            {topic: 'EQ', emoji: '🧠💪', question: 'What is the ACE study?', options: ['Adverse Childhood Experiences research', 'Athletic test', 'Art class', 'No study'], correct: 0}
        ],
        extreme: [
            {topic: 'Emotions', emoji: '😊❤️', question: 'Name the six basic emotions', answer: 'Happiness, Sadness, Anger, Fear, Surprise, Disgust'},
            {topic: 'EQ', emoji: '🧠💚', question: 'Name the five components of emotional intelligence', answer: 'Self-awareness, Self-regulation, Motivation, Empathy, Social skills'},
            {topic: 'Emotions', emoji: '😢🤗', question: 'Name three emotion validation statements', answer: 'I see you\'re upset, That sounds frustrating, Your feelings are okay (any 3)'},
            {topic: 'EQ', emoji: '🧠😌', question: 'Name three self-regulation strategies', answer: 'Deep breathing, Counting, Time-out, Physical activity, Mindfulness (any 3)'},
            {topic: 'Emotions', emoji: '😡🛑', question: 'Name three healthy anger outlets', answer: 'Physical exercise, Art, Talking, Journaling, Pillow punching (any 3)'},
            {topic: 'EQ', emoji: '🧠🤝', question: 'Name three ways to teach empathy', answer: 'Model empathy, Read stories, Discuss feelings, Perspective-taking (any 3)'},
            {topic: 'Emotions', emoji: '😰😌', question: 'Name three signs of anxiety in children', answer: 'Worry, Physical symptoms, Avoidance, Clinginess, Sleep issues (any 3)'},
            {topic: 'EQ', emoji: '🧠👂', question: 'List three active listening techniques', answer: 'Eye contact, Reflecting, Paraphrasing, No interrupting, Validating (any 3)'},
            {topic: 'Emotions', emoji: '😊🌈', question: 'Name three positive emotions', answer: 'Joy, Gratitude, Love, Pride, Hope, Contentment (any 3)'},
            {topic: 'EQ', emoji: '🧠💪', question: 'Name three resilience-building practices', answer: 'Problem-solving, Positive relationships, Coping skills, Optimism (any 3)'}
        ]
    },
    8: { // Chapter 8: Screen Time & Technology
        easy: [
            {topic: 'Screen Time', emoji: '📱⏰', question: 'Too much screen time is harmful.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '💻🧒', question: 'Children need screen time limits.', options: ['True', 'False'], correct: 0},
            {topic: 'Screen Time', emoji: '📺👀', question: 'Screen time affects sleep.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '🎮🕹️', question: 'Video games can be educational.', options: ['True', 'False'], correct: 0},
            {topic: 'Screen Time', emoji: '📱🚫', question: 'Screen-free time is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '💻🔒', question: 'Online safety is essential.', options: ['True', 'False'], correct: 0},
            {topic: 'Screen Time', emoji: '📺👨‍👩‍👧', question: 'Co-viewing media benefits children.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '📱📚', question: 'Educational apps can aid learning.', options: ['True', 'False'], correct: 0},
            {topic: 'Screen Time', emoji: '📺⏱️', question: 'AAP recommends screen time limits.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '💻👁️', question: 'Blue light affects eyes.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Screen Time', emoji: '📱⏰', question: 'What is recommended screen time for kids 2-5?', options: ['1 hour quality programming', 'Unlimited'], correct: 0},
            {topic: 'Technology', emoji: '💻🧒', question: 'What is digital citizenship?', options: ['Responsible online behavior', 'Just using tech'], correct: 0},
            {topic: 'Screen Time', emoji: '📺👀', question: 'What is blue light?', options: ['High-energy visible light from screens', 'Regular light'], correct: 0},
            {topic: 'Technology', emoji: '🎮🕹️', question: 'What is ESRB rating?', options: ['Video game age rating', 'Movie rating'], correct: 0},
            {topic: 'Screen Time', emoji: '📱🚫', question: 'What are screen-free zones?', options: ['Areas without devices', 'Everywhere screens'], correct: 0},
            {topic: 'Technology', emoji: '💻🔒', question: 'What is cyberbullying?', options: ['Online harassment', 'In-person only'], correct: 0},
            {topic: 'Screen Time', emoji: '📺👨‍👩‍👧', question: 'What is co-viewing?', options: ['Watching together and discussing', 'Alone viewing'], correct: 0},
            {topic: 'Technology', emoji: '📱📚', question: 'What makes content educational?', options: ['Age-appropriate, interactive, engaging', 'Any content'], correct: 0},
            {topic: 'Screen Time', emoji: '📺⏱️', question: 'What is screen time?', options: ['Time using electronic devices', 'Homework time'], correct: 0},
            {topic: 'Technology', emoji: '💻👁️', question: 'What is digital eye strain?', options: ['Tired eyes from screens', 'No effect'], correct: 0}
        ],
        hard: [
            {topic: 'Screen Time', emoji: '📱⏰', question: 'What is the AAP recommendation for under 18 months?', options: ['No screen time except video chat', 'Unlimited', '5 hours'], correct: 0},
            {topic: 'Technology', emoji: '💻🧒', question: 'What is COPPA?', options: ['Children\'s Online Privacy Protection Act', 'Computer Program', 'No law'], correct: 0},
            {topic: 'Screen Time', emoji: '📺👀', question: 'How does blue light affect melatonin?', options: ['Suppresses production, delays sleep', 'Increases melatonin', 'No effect'], correct: 0},
            {topic: 'Technology', emoji: '🎮🕹️', question: 'What is problematic gaming?', options: ['Gaming interferes with life', 'Any gaming', 'No issues'], correct: 0},
            {topic: 'Screen Time', emoji: '📱🚫', question: 'What is a media diet?', options: ['Balanced mix of screen and non-screen', 'Only screens', 'No media'], correct: 0},
            {topic: 'Technology', emoji: '💻🔒', question: 'What is digital footprint?', options: ['Online data trail', 'Physical steps', 'No record'], correct: 0},
            {topic: 'Screen Time', emoji: '📺👨‍👩‍👧', question: 'What is parasocial interaction?', options: ['One-sided relationship with media figures', 'Real friendship', 'No interaction'], correct: 0},
            {topic: 'Technology', emoji: '📱📚', question: 'What is the app gap?', options: ['Quality difference in educational apps', 'Storage space', 'No gap'], correct: 0},
            {topic: 'Screen Time', emoji: '📺⏱️', question: 'What is binge-watching?', options: ['Watching multiple episodes consecutively', 'One episode', 'No watching'], correct: 0},
            {topic: 'Technology', emoji: '💻👁️', question: 'What is the 20-20-20 rule?', options: ['Every 20 min, look 20 ft away for 20 sec', 'Random rule', 'No rule'], correct: 0}
        ],
        expert: [
            {topic: 'Screen Time', emoji: '📱⏰', question: 'What percentage of children under 2 use screens daily?', options: ['~90%', '10%', '50%', '0%'], correct: 0},
            {topic: 'Technology', emoji: '💻🧒', question: 'At what age should children learn about online safety?', options: ['As soon as they use devices', 'Age 18', 'Never', 'Age 10'], correct: 0},
            {topic: 'Screen Time', emoji: '📺👀', question: 'How much does screen time displace physical activity?', options: ['~1:1 ratio', 'No displacement', 'Triple', 'No correlation'], correct: 0},
            {topic: 'Technology', emoji: '🎮🕹️', question: 'What is the WHO gaming disorder threshold?', options: ['Impaired control causing significant impairment 12+ months', '1 hour', 'No threshold', 'Any gaming'], correct: 0},
            {topic: 'Screen Time', emoji: '📱🚫', question: 'What percentage of parents struggle with limits?', options: ['~60-70%', '5%', '100%', '0%'], correct: 0},
            {topic: 'Technology', emoji: '💻🔒', question: 'What percentage of teens have experienced cyberbullying?', options: ['~59%', '1%', '100%', '10%'], correct: 0},
            {topic: 'Screen Time', emoji: '📺👨‍👩‍👧', question: 'What is the impact of background TV?', options: ['Reduces quality interactions', 'No impact', 'Helps learning', 'Always beneficial'], correct: 0},
            {topic: 'Technology', emoji: '📱📚', question: 'What percentage of educational apps lack evidence?', options: ['~80%', '0%', '10%', '100%'], correct: 0},
            {topic: 'Screen Time', emoji: '📺⏱️', question: 'What is average daily screen time for teens?', options: ['~7-9 hours', '1 hour', '30 minutes', '24 hours'], correct: 0},
            {topic: 'Technology', emoji: '💻👁️', question: 'What wavelength is blue light?', options: ['380-500 nanometers', '1000 nm', '50 nm', '5000 nm'], correct: 0}
        ],
        extreme: [
            {topic: 'Screen Time', emoji: '📱⏰', question: 'Name AAP screen time guidelines by age', answer: 'Under 18mo: none, 18-24mo: quality only, 2-5yo: 1hr, 6+: consistent limits (any 3)'},
            {topic: 'Technology', emoji: '💻🧒', question: 'Name three digital citizenship principles', answer: 'Respect, Educate, Protect, Privacy, Critical thinking (any 3)'},
            {topic: 'Screen Time', emoji: '📺👀', question: 'Name three effects of excessive screen time', answer: 'Sleep issues, Obesity, Behavioral problems, Academic issues (any 3)'},
            {topic: 'Technology', emoji: '🎮🕹️', question: 'Name three benefits of gaming', answer: 'Problem-solving, Hand-eye coordination, Social connection, Creativity (any 3)'},
            {topic: 'Screen Time', emoji: '📱🚫', question: 'Name three screen-free activities', answer: 'Outdoor play, Reading, Art, Sports, Board games (any 3)'},
            {topic: 'Technology', emoji: '💻🔒', question: 'Name three online safety rules', answer: 'No personal info, Tell adult about problems, Think before posting (any 3)'},
            {topic: 'Screen Time', emoji: '📺👨‍👩‍👧', question: 'Name three co-viewing benefits', answer: 'Learning support, Media literacy, Bonding, Critical thinking (any 3)'},
            {topic: 'Technology', emoji: '📱📚', question: 'Name three criteria for quality educational apps', answer: 'Age-appropriate, Interactive, Evidence-based, Engaging (any 3)'},
            {topic: 'Screen Time', emoji: '📺⏱️', question: 'Name three family media plan components', answer: 'Screen-free times, Device-free zones, Quality content, Limits (any 3)'},
            {topic: 'Technology', emoji: '💻👁️', question: 'Name three ways to reduce eye strain', answer: '20-20-20 rule, Proper distance, Good lighting, Blink often (any 3)'}
        ]
    },
    9: { // Chapter 9: Sleep & Bedtime
        easy: [
            {topic: 'Sleep', emoji: '😴💤', question: 'Sleep is essential for children.', options: ['True', 'False'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🛏️', question: 'Bedtime routines help children sleep.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴⏰', question: 'Children need more sleep than adults.', options: ['True', 'False'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙📖', question: 'Reading helps children wind down.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴🧠', question: 'Sleep affects brain development.', options: ['True', 'False'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🎵', question: 'Lullabies calm children.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴💪', question: 'Sleep affects growth.', options: ['True', 'False'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🌡️', question: 'Cool rooms promote sleep.', options: ['True', 'False'], correct: 0},
            {topic: 'Sleep', emoji: '😴😫', question: 'Lack of sleep causes crankiness.', options: ['True', 'False'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🚫', question: 'Screens before bed disrupt sleep.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Sleep', emoji: '😴💤', question: 'How much sleep do toddlers need?', options: ['11-14 hours', '5 hours'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🛏️', question: 'What is a bedtime routine?', options: ['Consistent activities before sleep', 'Random activities'], correct: 0},
            {topic: 'Sleep', emoji: '😴⏰', question: 'What is circadian rhythm?', options: ['Internal body clock', 'Random sleep'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙📖', question: 'What is sleep hygiene?', options: ['Practices promoting good sleep', 'Bathing'], correct: 0},
            {topic: 'Sleep', emoji: '😴🧠', question: 'What happens during sleep?', options: ['Brain consolidates memories', 'Nothing happens'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🎵', question: 'What is white noise?', options: ['Consistent sound masking others', 'Music'], correct: 0},
            {topic: 'Sleep', emoji: '😴💪', question: 'What is growth hormone?', options: ['Hormone released during sleep', 'Energy drink'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🌡️', question: 'What is ideal sleep temperature?', options: ['60-67°F (15-19°C)', '90°F'], correct: 0},
            {topic: 'Sleep', emoji: '😴😫', question: 'What is sleep debt?', options: ['Cumulative sleep loss', 'Financial debt'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🚫', question: 'Why avoid screens before bed?', options: ['Blue light disrupts melatonin', 'No effect'], correct: 0}
        ],
        hard: [
            {topic: 'Sleep', emoji: '😴💤', question: 'What is REM sleep?', options: ['Rapid Eye Movement, dream stage', 'Light sleep', 'Deep sleep'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🛏️', question: 'What is sleep association?', options: ['Condition needed to fall asleep', 'Any sleep', 'No association'], correct: 0},
            {topic: 'Sleep', emoji: '😴⏰', question: 'What is melatonin?', options: ['Sleep-regulating hormone', 'Wake hormone', 'No hormone'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙📖', question: 'What is the Ferber method?', options: ['Gradual extinction sleep training', 'Cry it out', 'Co-sleeping'], correct: 0},
            {topic: 'Sleep', emoji: '😴🧠', question: 'What is sleep cycle?', options: ['Progression through sleep stages', 'One stage', 'No cycle'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🎵', question: 'What is sleep regression?', options: ['Temporary sleep disruption', 'Permanent problem', 'No change'], correct: 0},
            {topic: 'Sleep', emoji: '😴💪', question: 'What is sleep apnea?', options: ['Breathing stops during sleep', 'Normal breathing', 'Deep sleep'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🌡️', question: 'What is sleep environment?', options: ['Physical setting for sleep', 'Daytime activity', 'No environment'], correct: 0},
            {topic: 'Sleep', emoji: '😴😫', question: 'What is chronic sleep deprivation?', options: ['Ongoing insufficient sleep', 'One bad night', 'Too much sleep'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🚫', question: 'What is delayed sleep phase?', options: ['Later natural sleep time', 'Early sleep', 'Normal timing'], correct: 0}
        ],
        expert: [
            {topic: 'Sleep', emoji: '😴💤', question: 'How many sleep cycles do children have per night?', options: ['4-6 cycles', '1 cycle', '20 cycles', 'No cycles'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🛏️', question: 'What percentage of children resist bedtime?', options: ['~20-30%', '0%', '100%', '5%'], correct: 0},
            {topic: 'Sleep', emoji: '😴⏰', question: 'When does melatonin production peak?', options: ['9-11 PM', '6 AM', 'Noon', '3 PM'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙📖', question: 'How long should bedtime routine be?', options: ['20-30 minutes', '5 minutes', '2 hours', '10 seconds'], correct: 0},
            {topic: 'Sleep', emoji: '😴🧠', question: 'What percentage of learning is consolidated during sleep?', options: ['Significant portion', '0%', '5%', '100%'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🎵', question: 'At what age do sleep regressions commonly occur?', options: ['4, 8, 12, 18 months, 2 years', 'Never', 'Only once', 'Age 10'], correct: 0},
            {topic: 'Sleep', emoji: '😴💪', question: 'When is growth hormone primarily released?', options: ['During deep sleep', 'While awake', 'Never', 'Random'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🌡️', question: 'What percentage of children have sleep problems?', options: ['~25-40%', '0%', '100%', '5%'], correct: 0},
            {topic: 'Sleep', emoji: '😴😫', question: 'How does one hour sleep loss affect children?', options: ['Equivalent to 2 years cognitive delay', 'No effect', 'Minimal', 'Positive'], correct: 0},
            {topic: 'Bedtime', emoji: '🌙🚫', question: 'How long before bed to avoid screens?', options: ['1-2 hours', '5 minutes', '5 hours', 'Never'], correct: 0}
        ],
        extreme: [
            {topic: 'Sleep', emoji: '😴💤', question: 'Name recommended sleep hours by age', answer: 'Newborn: 14-17hr, Toddler: 11-14hr, School-age: 9-12hr, Teen: 8-10hr (any 3)'},
            {topic: 'Bedtime', emoji: '🌙🛏️', question: 'Name three bedtime routine activities', answer: 'Bath, Story, Lullaby, Cuddles, Brush teeth (any 3)'},
            {topic: 'Sleep', emoji: '😴⏰', question: 'Name the stages of sleep', answer: 'Stage 1, Stage 2, Stage 3 (deep), REM'},
            {topic: 'Bedtime', emoji: '🌙📖', question: 'Name three sleep training methods', answer: 'Ferber, Cry it out, Chair method, Pick up/put down, No tears (any 3)'},
            {topic: 'Sleep', emoji: '😴🧠', question: 'Name three benefits of sleep', answer: 'Memory consolidation, Growth, Immune function, Mood (any 3)'},
            {topic: 'Bedtime', emoji: '🌙🎵', question: 'Name three sleep regression ages', answer: '4 months, 8 months, 12 months, 18 months, 2 years (any 3)'},
            {topic: 'Sleep', emoji: '😴💪', question: 'Name three signs of sleep deprivation', answer: 'Irritability, Hyperactivity, Poor focus, Clumsiness (any 3)'},
            {topic: 'Bedtime', emoji: '🌙🌡️', question: 'Name three ideal sleep environment features', answer: 'Cool, Dark, Quiet, Comfortable bed (any 3)'},
            {topic: 'Sleep', emoji: '😴😫', question: 'Name three common sleep problems', answer: 'Insomnia, Night terrors, Sleep apnea, Restless legs (any 3)'},
            {topic: 'Bedtime', emoji: '🌙🚫', question: 'Name three sleep disruptors', answer: 'Screen time, Caffeine, Noise, Light, Stress (any 3)'}
        ]
    },
    10: { // Chapter 10: Social Skills
        easy: [
            {topic: 'Social Skills', emoji: '👫🤝', question: 'Children learn social skills.', options: ['True', 'False'], correct: 0},
            {topic: 'Friendship', emoji: '👧👦', question: 'Friends are important for children.', options: ['True', 'False'], correct: 0},
            {topic: 'Social Skills', emoji: '👫💬', question: 'Communication is a social skill.', options: ['True', 'False'], correct: 0},
            {topic: 'Friendship', emoji: '🤝😊', question: 'Sharing builds friendships.', options: ['True', 'False'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🎭', question: 'Taking turns is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Friendship', emoji: '👧🗣️', question: 'Listening helps friendships.', options: ['True', 'False'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🙏', question: 'Manners show respect.', options: ['True', 'False'], correct: 0},
            {topic: 'Friendship', emoji: '🤝❤️', question: 'Kindness attracts friends.', options: ['True', 'False'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🎨', question: 'Play teaches social skills.', options: ['True', 'False'], correct: 0},
            {topic: 'Friendship', emoji: '👧💔', question: 'Conflicts happen in friendships.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Social Skills', emoji: '👫🤝', question: 'What are social skills?', options: ['Abilities to interact effectively', 'Only talking'], correct: 0},
            {topic: 'Friendship', emoji: '👧👦', question: 'What does parallel play mean?', options: ['Playing alongside others', 'Playing together'], correct: 0},
            {topic: 'Social Skills', emoji: '👫💬', question: 'What does nonverbal communication include?', options: ['Body language and gestures', 'Only words'], correct: 0},
            {topic: 'Friendship', emoji: '🤝😊', question: 'What is reciprocity?', options: ['Give and take in relationships', 'Only taking'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🎭', question: 'What is turn-taking?', options: ['Waiting for one\'s turn', 'Going first always'], correct: 0},
            {topic: 'Friendship', emoji: '👧🗣️', question: 'How to practice active listening with friends?', options: ['Fully focusing on speaker', 'Waiting to talk'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🙏', question: 'What are table manners?', options: ['Polite eating behaviors', 'No rules'], correct: 0},
            {topic: 'Friendship', emoji: '🤝❤️', question: 'What is prosocial behavior?', options: ['Helping and cooperating', 'Selfish behavior'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🎨', question: 'What is cooperative play?', options: ['Playing together with common goal', 'Playing alone'], correct: 0},
            {topic: 'Friendship', emoji: '👧💔', question: 'What is conflict resolution?', options: ['Solving disagreements', 'Ignoring problems'], correct: 0}
        ],
        hard: [
            {topic: 'Social Skills', emoji: '👫🤝', question: 'What is social cognition?', options: ['Understanding social situations', 'Physical skills', 'No understanding'], correct: 0},
            {topic: 'Friendship', emoji: '👧👦', question: 'What is Parten\'s stages of play?', options: ['6 stages from solitary to cooperative', '2 stages', 'No stages'], correct: 0},
            {topic: 'Social Skills', emoji: '👫💬', question: 'What is pragmatic language?', options: ['Using language in social contexts', 'Grammar only', 'No language'], correct: 0},
            {topic: 'Friendship', emoji: '🤝😊', question: 'What is social reciprocity?', options: ['Back-and-forth social interaction', 'One-way', 'No interaction'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🎭', question: 'What is impulse control?', options: ['Ability to wait and think first', 'Acting immediately', 'No control'], correct: 0},
            {topic: 'Friendship', emoji: '👧🗣️', question: 'What does perspective-taking involve?', options: ['Understanding others\' viewpoints', 'Own view only', 'No perspective'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🙏', question: 'What is social etiquette?', options: ['Culturally-accepted behaviors', 'No rules', 'Random actions'], correct: 0},
            {topic: 'Friendship', emoji: '🤝❤️', question: 'What is altruism?', options: ['Selfless concern for others', 'Selfish behavior', 'No concern'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🎨', question: 'What does symbolic play involve?', options: ['Using objects to represent other things', 'Literal play', 'No imagination'], correct: 0},
            {topic: 'Friendship', emoji: '👧💔', question: 'What is peer mediation?', options: ['Peers help resolve conflicts', 'Adult intervention', 'Fighting'], correct: 0}
        ],
        expert: [
            {topic: 'Social Skills', emoji: '👫🤝', question: 'At what age do children develop theory of mind?', options: ['4-5 years', '1 year', '15 years', 'Birth'], correct: 0},
            {topic: 'Friendship', emoji: '👧👦', question: 'What percentage of preschoolers have at least one friend?', options: ['~75%', '10%', '100%', '0%'], correct: 0},
            {topic: 'Social Skills', emoji: '👫💬', question: 'What percentage of communication is nonverbal?', options: ['~70-93%', '10%', '50%', '100%'], correct: 0},
            {topic: 'Friendship', emoji: '🤝😊', question: 'When does sharing typically develop?', options: ['3-4 years', '1 month', '10 years', 'Birth'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🎭', question: 'What is the marshmallow test?', options: ['Delayed gratification study', 'Food preference', 'No test', 'IQ test'], correct: 0},
            {topic: 'Friendship', emoji: '👧🗣️', question: 'What is the recommended child-to-child ratio for optimal play?', options: ['2-4 children', '20 children', '1 child', '100 children'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🙏', question: 'At what age can children say please and thank you?', options: ['2-3 years', '10 years', '1 month', '15 years'], correct: 0},
            {topic: 'Friendship', emoji: '🤝❤️', question: 'When does empathy fully develop?', options: ['Continues into adulthood', 'Age 5 complete', 'Birth', 'Never'], correct: 0},
            {topic: 'Social Skills', emoji: '👫🎨', question: 'What age range for cooperative play?', options: ['4-6 years', '1 year', '15 years', 'Birth'], correct: 0},
            {topic: 'Friendship', emoji: '👧💔', question: 'What percentage of children experience peer rejection?', options: ['~10-15%', '90%', '0%', '100%'], correct: 0}
        ],
        extreme: [
            {topic: 'Social Skills', emoji: '👫🤝', question: 'Name three essential social skills', answer: 'Communication, Cooperation, Sharing, Empathy, Conflict resolution (any 3)'},
            {topic: 'Friendship', emoji: '👧👦', question: 'Name Parten\'s six stages of play', answer: 'Unoccupied, Solitary, Onlooker, Parallel, Associative, Cooperative (any 3)'},
            {topic: 'Social Skills', emoji: '👫💬', question: 'Name three communication skills', answer: 'Listening, Speaking clearly, Eye contact, Taking turns (any 3)'},
            {topic: 'Friendship', emoji: '🤝😊', question: 'Name three qualities of good friendship', answer: 'Trust, Loyalty, Kindness, Respect, Fun (any 3)'},
            {topic: 'Social Skills', emoji: '👫🎭', question: 'Name three self-control strategies', answer: 'Deep breathing, Counting, Wait time, Think first (any 3)'},
            {topic: 'Friendship', emoji: '👧🗣️', question: 'Name three conversation skills', answer: 'Greeting, Asking questions, Listening, Responding, Eye contact (any 3)'},
            {topic: 'Social Skills', emoji: '👫🙏', question: 'Name three basic manners', answer: 'Please, Thank you, Excuse me, Sorry, You\'re welcome (any 3)'},
            {topic: 'Friendship', emoji: '🤝❤️', question: 'Name three prosocial behaviors', answer: 'Helping, Sharing, Comforting, Cooperating (any 3)'},
            {topic: 'Social Skills', emoji: '👫🎨', question: 'Identify three types of play', answer: 'Solitary, Parallel, Cooperative, Symbolic, Physical (any 3)'},
            {topic: 'Friendship', emoji: '👧💔', question: 'Name three conflict resolution steps', answer: 'Stop, Talk, Listen, Brainstorm solutions, Compromise (any 3)'}
        ]
    },
    11: { // Chapter 11: Adolescence & Teens
        easy: [
            {topic: 'Adolescence', emoji: '👦👧', question: 'Adolescence is a time of change.', options: ['True', 'False'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓📱', question: 'Teens need independence.', options: ['True', 'False'], correct: 0},
            {topic: 'Adolescence', emoji: '👦💪', question: 'Puberty involves physical changes.', options: ['True', 'False'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓🧠', question: 'Teen brains are still developing.', options: ['True', 'False'], correct: 0},
            {topic: 'Adolescence', emoji: '👦😊', question: 'Peer relationships matter to teens.', options: ['True', 'False'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓💭', question: 'Teens need privacy.', options: ['True', 'False'], correct: 0},
            {topic: 'Adolescence', emoji: '👦🎭', question: 'Identity development occurs in teens.', options: ['True', 'False'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓🗣️', question: 'Communication changes with teens.', options: ['True', 'False'], correct: 0},
            {topic: 'Adolescence', emoji: '👦📈', question: 'Teens grow rapidly.', options: ['True', 'False'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓⚖️', question: 'Teens need boundaries.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Adolescence', emoji: '👦👧', question: 'What age range is adolescence?', options: ['10-19 years', '1-5 years'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓📱', question: 'What is autonomy?', options: ['Self-governance and independence', 'Total dependence'], correct: 0},
            {topic: 'Adolescence', emoji: '👦💪', question: 'What is puberty?', options: ['Physical maturation to adulthood', 'No change'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓🧠', question: 'What is the prefrontal cortex?', options: ['Brain area for decision-making', 'No function'], correct: 0},
            {topic: 'Adolescence', emoji: '👦😊', question: 'What is peer pressure?', options: ['Influence from friends', 'No influence'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓💭', question: 'What is appropriate privacy?', options: ['Balance between trust and safety', 'Total freedom'], correct: 0},
            {topic: 'Adolescence', emoji: '👦🎭', question: 'What is identity formation?', options: ['Developing sense of self', 'No change'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓🗣️', question: 'What is active listening for teens?', options: ['Hearing without judging', 'Lecturing'], correct: 0},
            {topic: 'Adolescence', emoji: '👦📈', question: 'What is growth spurt?', options: ['Rapid physical growth', 'Slow growth'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓⚖️', question: 'What are natural consequences?', options: ['Results of teen\'s choices', 'Parent punishment'], correct: 0}
        ],
        hard: [
            {topic: 'Adolescence', emoji: '👦👧', question: 'What is the adolescent brain development timeline?', options: ['Continues until mid-20s', 'Complete at 10', 'Complete at birth'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓📱', question: 'What is individuation?', options: ['Separating identity from parents', 'Complete dependence', 'No change'], correct: 0},
            {topic: 'Adolescence', emoji: '👦💪', question: 'What is the HPG axis?', options: ['Hypothalamic-Pituitary-Gonadal hormonal system', 'No system', 'Random'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓🧠', question: 'What is synaptic pruning?', options: ['Elimination of unused brain connections', 'Building connections', 'No change'], correct: 0},
            {topic: 'Adolescence', emoji: '👦😊', question: 'What is social identity theory?', options: ['Self-concept from group membership', 'Individual only', 'No identity'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓💭', question: 'What is monitored independence?', options: ['Freedom with oversight', 'Total freedom', 'No freedom'], correct: 0},
            {topic: 'Adolescence', emoji: '👦🎭', question: 'What is Erikson\'s adolescent stage?', options: ['Identity vs Role Confusion', 'Trust vs Mistrust', 'No stage'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓🗣️', question: 'What is motivational interviewing?', options: ['Collaborative conversation style', 'Lecturing', 'Ignoring'], correct: 0},
            {topic: 'Adolescence', emoji: '👦📈', question: 'What is asynchronous development?', options: ['Uneven physical/emotional development', 'Even development', 'No development'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓⚖️', question: 'What is collaborative problem-solving?', options: ['Work together to find solutions', 'Parent decides', 'No solutions'], correct: 0}
        ],
        expert: [
            {topic: 'Adolescence', emoji: '👦👧', question: 'When does the prefrontal cortex fully mature?', options: ['Age 25-26', 'Age 10', 'Age 5', 'Age 30'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓📱', question: 'What percentage of teens want more independence?', options: ['~85%', '10%', '5%', '100%'], correct: 0},
            {topic: 'Adolescence', emoji: '👦💪', question: 'What is the average age for puberty start?', options: ['Girls 10-11, Boys 11-12', 'Age 20', 'Birth', 'Age 5'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓🧠', question: 'What is myelination?', options: ['Insulation of nerve fibers', 'No process', 'Random'], correct: 0},
            {topic: 'Adolescence', emoji: '👦😊', question: 'What percentage of teens experience peer pressure?', options: ['~90%', '10%', '0%', '100%'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓💭', question: 'What is the recommended approach to monitoring?', options: ['Know friends, activities, whereabouts', 'No monitoring', 'Complete control', 'Random'], correct: 0},
            {topic: 'Adolescence', emoji: '👦🎭', question: 'What is identity moratorium?', options: ['Exploring without commitment', 'Fixed identity', 'No exploration'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓🗣️', question: 'What is the ideal parent-teen communication?', options: ['Open, non-judgmental dialogue', 'One-way lectures', 'No communication', 'Random'], correct: 0},
            {topic: 'Adolescence', emoji: '👦📈', question: 'How much can teens grow in a year?', options: ['Up to 4 inches', '1 foot', 'No growth', '1 inch'], correct: 0},
            {topic: 'Teens', emoji: '🧑‍🎓⚖️', question: 'What is the recommended parenting style for teens?', options: ['Authoritative', 'Authoritarian', 'Permissive', 'Uninvolved'], correct: 0}
        ],
        extreme: [
            {topic: 'Adolescence', emoji: '👦👧', question: 'Name the three phases of adolescence', answer: 'Early (10-13), Middle (14-17), Late (18-21)'},
            {topic: 'Teens', emoji: '🧑‍🎓📱', question: 'Name three teen developmental tasks', answer: 'Identity formation, Independence, Peer relationships, Career planning (any 3)'},
            {topic: 'Adolescence', emoji: '👦💪', question: 'Name three puberty changes', answer: 'Growth spurt, Sexual maturation, Body composition, Voice changes (any 3)'},
            {topic: 'Teens', emoji: '🧑‍🎓🧠', question: 'Name three brain development changes', answer: 'Synaptic pruning, Myelination, Prefrontal cortex development (any 3)'},
            {topic: 'Adolescence', emoji: '👦😊', question: 'Name three peer relationship functions', answer: 'Social support, Identity exploration, Emotional support, Belonging (any 3)'},
            {topic: 'Teens', emoji: '🧑‍🎓💭', question: 'Name three privacy boundaries', answer: 'Room, Phone, Journal, Conversations with friends (any 3)'},
            {topic: 'Adolescence', emoji: '👦🎭', question: 'Name Marcia\'s four identity statuses', answer: 'Diffusion, Foreclosure, Moratorium, Achievement'},
            {topic: 'Teens', emoji: '🧑‍🎓🗣️', question: 'Name three communication tips for teens', answer: 'Listen without judging, Ask open questions, Respect opinions, Pick timing (any 3)'},
            {topic: 'Adolescence', emoji: '👦📈', question: 'Name three adolescent health concerns', answer: 'Sleep, Nutrition, Mental health, Risk-taking, Substance use (any 3)'},
            {topic: 'Teens', emoji: '🧑‍🎓⚖️', question: 'Name three appropriate boundaries for teens', answer: 'Curfew, Chores, Academic expectations, Respect, Safety (any 3)'}
        ]
    }
,
    12: { // Chapter 12: Special Needs
        easy: [
            {topic: 'Special Needs', emoji: '♿🌟', question: 'Every child is unique.', options: ['True', 'False'], correct: 0},
            {topic: 'Support', emoji: '🤝💙', question: 'Children with special needs can thrive.', options: ['True', 'False'], correct: 0},
            {topic: 'Special Needs', emoji: '♿📚', question: 'Early intervention helps.', options: ['True', 'False'], correct: 0},
            {topic: 'Support', emoji: '🤝🏫', question: 'Schools provide accommodations.', options: ['True', 'False'], correct: 0},
            {topic: 'Special Needs', emoji: '♿❤️', question: 'Acceptance is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Support', emoji: '🤝👨‍⚕️', question: 'Therapies can help development.', options: ['True', 'False'], correct: 0},
            {topic: 'Special Needs', emoji: '♿🎯', question: 'Children have strengths.', options: ['True', 'False'], correct: 0},
            {topic: 'Support', emoji: '🤝👨‍👩‍👧', question: 'Family support is crucial.', options: ['True', 'False'], correct: 0},
            {topic: 'Special Needs', emoji: '♿📖', question: 'Education is a right.', options: ['True', 'False'], correct: 0},
            {topic: 'Support', emoji: '🤝🌈', question: 'Inclusion benefits everyone.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Special Needs', emoji: '♿🌟', question: 'What are special needs?', options: ['Require additional support', 'No support needed'], correct: 0},
            {topic: 'Support', emoji: '🤝💙', question: 'What is early intervention?', options: ['Services for young children with delays', 'School-age only'], correct: 0},
            {topic: 'Special Needs', emoji: '♿📚', question: 'What does IEP stand for?', options: ['Individualized Education Program', 'Internet Protocol'], correct: 0},
            {topic: 'Support', emoji: '🤝🏫', question: 'What is a 504 plan?', options: ['Accommodations under Section 504', 'No plan'], correct: 0},
            {topic: 'Special Needs', emoji: '♿❤️', question: 'What is neurodiversity?', options: ['Natural variation in brain function', 'Disorder only'], correct: 0},
            {topic: 'Support', emoji: '🤝👨‍⚕️', question: 'What is occupational therapy?', options: ['Help with daily living skills', 'Job training'], correct: 0},
            {topic: 'Special Needs', emoji: '♿🎯', question: 'What is strength-based approach?', options: ['Focus on abilities', 'Focus on deficits'], correct: 0},
            {topic: 'Support', emoji: '🤝👨‍👩‍👧', question: 'What is respite care?', options: ['Temporary relief for caregivers', 'Permanent care'], correct: 0},
            {topic: 'Special Needs', emoji: '♿📖', question: 'What is IDEA?', options: ['Individuals with Disabilities Education Act', 'No law'], correct: 0},
            {topic: 'Support', emoji: '🤝🌈', question: 'What is inclusion?', options: ['Full participation in regular settings', 'Separation'], correct: 0}
        ],
        hard: [
            {topic: 'Special Needs', emoji: '♿🌟', question: 'What is the difference between IEP and 504?', options: ['IEP is special ed, 504 is accommodations', 'Same thing', 'No difference'], correct: 0},
            {topic: 'Support', emoji: '🤝💙', question: 'What ages qualify for early intervention?', options: ['Birth to 3 years', '5-10 years', 'Teens only'], correct: 0},
            {topic: 'Special Needs', emoji: '♿📚', question: 'What is FAPE?', options: ['Free Appropriate Public Education', 'Fast Learning', 'No acronym'], correct: 0},
            {topic: 'Support', emoji: '🤝🏫', question: 'What is LRE?', options: ['Least Restrictive Environment', 'Limited Resources', 'No meaning'], correct: 0},
            {topic: 'Special Needs', emoji: '♿❤️', question: 'What is person-first language?', options: ['Child with autism, not autistic child', 'Labels first', 'No preference'], correct: 0},
            {topic: 'Support', emoji: '🤝👨‍⚕️', question: 'What is ABA therapy?', options: ['Applied Behavior Analysis', 'Art therapy', 'No therapy'], correct: 0},
            {topic: 'Special Needs', emoji: '♿🎯', question: 'What is a sensory processing disorder?', options: ['Difficulty processing sensory information', 'Normal processing', 'No disorder'], correct: 0},
            {topic: 'Support', emoji: '🤝👨‍👩‍👧', question: 'What is family-centered care?', options: ['Family as partners in care', 'Professional-only decisions', 'No family'], correct: 0},
            {topic: 'Special Needs', emoji: '♿📖', question: 'What is transition planning?', options: ['Plan for post-school life', 'No planning', 'School only'], correct: 0},
            {topic: 'Support', emoji: '🤝🌈', question: 'What is universal design for learning?', options: ['Flexible approaches for all learners', 'One-size-fits-all', 'No design'], correct: 0}
        ],
        expert: [
            {topic: 'Special Needs', emoji: '♿🌟', question: 'What percentage of children have special needs?', options: ['~15-20%', '1%', '90%', '0%'], correct: 0},
            {topic: 'Support', emoji: '🤝💙', question: 'What is the recommended hours for early intervention?', options: ['Varies, typically 2-10 hours/week', '100 hours', '0 hours', '1 hour/year'], correct: 0},
            {topic: 'Special Needs', emoji: '♿📚', question: 'At what age must IEP transition planning begin?', options: ['Age 16 (or earlier)', 'Age 5', 'Age 21', 'Never'], correct: 0},
            {topic: 'Support', emoji: '🤝🏫', question: 'What percentage of students have IEPs?', options: ['~14%', '90%', '1%', '100%'], correct: 0},
            {topic: 'Special Needs', emoji: '♿❤️', question: 'What is the autism prevalence?', options: ['1 in 36 children', '1 in 1000', '1 in 2', 'No data'], correct: 0},
            {topic: 'Support', emoji: '🤝👨‍⚕️', question: 'How many hours of ABA therapy are recommended?', options: ['20-40 hours per week', '1 hour', '100 hours', 'None'], correct: 0},
            {topic: 'Special Needs', emoji: '♿🎯', question: 'What is the ADHD prevalence in children?', options: ['~9-10%', '90%', '1%', '0%'], correct: 0},
            {topic: 'Support', emoji: '🤝👨‍👩‍👧', question: 'What percentage of parents report stress?', options: ['~50% report high stress', '0%', '100%', '5%'], correct: 0},
            {topic: 'Special Needs', emoji: '♿📖', question: 'What did IDEA replace?', options: ['Education for All Handicapped Children Act', 'No prior law', 'NCLB', 'Random'], correct: 0},
            {topic: 'Support', emoji: '🤝🌈', question: 'What percentage of students are in inclusive settings?', options: ['~65%', '5%', '100%', '0%'], correct: 0}
        ],
        extreme: [
            {topic: 'Special Needs', emoji: '♿🌟', question: 'Name three categories of special needs', answer: 'Physical, Learning, Developmental, Behavioral, Sensory (any 3)'},
            {topic: 'Support', emoji: '🤝💙', question: 'Name three early intervention services', answer: 'Speech therapy, PT, OT, Special instruction, Family training (any 3)'},
            {topic: 'Special Needs', emoji: '♿📚', question: 'Name three IEP components', answer: 'Present levels, Goals, Accommodations, Services, Placement (any 3)'},
            {topic: 'Support', emoji: '🤝🏫', question: 'Name three types of accommodations', answer: 'Extra time, Reduced distractions, Assistive tech, Modified assignments (any 3)'},
            {topic: 'Special Needs', emoji: '♿❤️', question: 'Name three neurodevelopmental conditions', answer: 'Autism, ADHD, Learning disabilities, Intellectual disability (any 3)'},
            {topic: 'Support', emoji: '🤝👨‍⚕️', question: 'Name three types of therapy', answer: 'Speech, Occupational, Physical, ABA, Play therapy (any 3)'},
            {topic: 'Special Needs', emoji: '♿🎯', question: 'Name three strengths-based practices', answer: 'Focus on abilities, Build confidence, Use interests, Celebrate progress (any 3)'},
            {topic: 'Support', emoji: '🤝👨‍👩‍👧', question: 'Name three family support services', answer: 'Respite care, Support groups, Counseling, Parent training (any 3)'},
            {topic: 'Special Needs', emoji: '♿📖', question: 'Name three IDEA principles', answer: 'FAPE, LRE, IEP, Parent participation, Due process (any 3)'},
            {topic: 'Support', emoji: '🤝🌈', question: 'Name three inclusion benefits', answer: 'Social skills, Acceptance, Academic growth, Peer models (any 3)'}
        ]
    },
    13: { // Chapter 13: Family Dynamics
        easy: [
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦❤️', question: 'Families come in different forms.', options: ['True', 'False'], correct: 0},
            {topic: 'Siblings', emoji: '👧👦', question: 'Sibling relationships are important.', options: ['True', 'False'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🏠', question: 'Family routines provide stability.', options: ['True', 'False'], correct: 0},
            {topic: 'Siblings', emoji: '👧😡👦', question: 'Siblings sometimes fight.', options: ['True', 'False'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🍽️', question: 'Family meals benefit children.', options: ['True', 'False'], correct: 0},
            {topic: 'Siblings', emoji: '👧🤝👦', question: 'Siblings can be friends.', options: ['True', 'False'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦💬', question: 'Communication strengthens families.', options: ['True', 'False'], correct: 0},
            {topic: 'Siblings', emoji: '👧👶', question: 'New siblings need adjustment.', options: ['True', 'False'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🎉', question: 'Family traditions matter.', options: ['True', 'False'], correct: 0},
            {topic: 'Siblings', emoji: '👧⚖️👦', question: 'Fairness doesn\'t mean equal.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦❤️', question: 'What is a nuclear family?', options: ['Parents and children', 'Extended relatives'], correct: 0},
            {topic: 'Siblings', emoji: '👧👦', question: 'What is sibling rivalry?', options: ['Competition between siblings', 'Always harmony'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🏠', question: 'What are family routines?', options: ['Regular predictable activities', 'Random schedules'], correct: 0},
            {topic: 'Siblings', emoji: '👧😡👦', question: 'What causes sibling conflict?', options: ['Competition, jealousy, differences', 'Nothing'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🍽️', question: 'What are family meal benefits?', options: ['Better nutrition, communication', 'No benefits'], correct: 0},
            {topic: 'Siblings', emoji: '👧🤝👦', question: 'What is sibling bonding?', options: ['Close emotional connection', 'Always fighting'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦💬', question: 'What is family meeting?', options: ['Discuss issues together', 'No discussion'], correct: 0},
            {topic: 'Siblings', emoji: '👧👶', question: 'What is sibling preparation?', options: ['Helping child adjust to new baby', 'No preparation'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🎉', question: 'What are family rituals?', options: ['Meaningful repeated activities', 'Random events'], correct: 0},
            {topic: 'Siblings', emoji: '👧⚖️👦', question: 'What is equal vs fair?', options: ['Equal is same, fair is what each needs', 'Same thing'], correct: 0}
        ],
        hard: [
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦❤️', question: 'What is a blended family?', options: ['Remarriage combining children', 'Original family', 'No children'], correct: 0},
            {topic: 'Siblings', emoji: '👧👦', question: 'What is differential parental treatment?', options: ['Treating siblings differently', 'Exactly equal', 'No difference'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🏠', question: 'What is family systems theory?', options: ['Family as interconnected system', 'Independent individuals', 'No theory'], correct: 0},
            {topic: 'Siblings', emoji: '👧😡👦', question: 'What is sibling deidentification?', options: ['Developing different identities', 'Being identical', 'No identity'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🍽️', question: 'What is the recommended family meal frequency?', options: ['5-7 times per week', 'Once a month', 'Never'], correct: 0},
            {topic: 'Siblings', emoji: '👧🤝👦', question: 'What is sibling warmth?', options: ['Affection and support between siblings', 'Temperature', 'No warmth'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦💬', question: 'What is Gottman\'s ratio for relationships?', options: ['5:1 positive to negative', '1:1', '1:5', 'No ratio'], correct: 0},
            {topic: 'Siblings', emoji: '👧👶', question: 'What is sibling regression?', options: ['Older child acts younger', 'Normal development', 'No change'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🎉', question: 'What is intergenerational transmission?', options: ['Passing values across generations', 'No passing', 'Random'], correct: 0},
            {topic: 'Siblings', emoji: '👧⚖️👦', question: 'What is birth order theory?', options: ['Personality affected by birth position', 'No effect', 'Random'], correct: 0}
        ],
        expert: [
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦❤️', question: 'What percentage of children live in two-parent homes?', options: ['~70%', '10%', '100%', '0%'], correct: 0},
            {topic: 'Siblings', emoji: '👧👦', question: 'What is typical sibling conflict frequency?', options: ['3-7 conflicts per hour for young kids', 'Never', 'Once a year', 'Constant'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🏠', question: 'What percentage of families eat together daily?', options: ['~30%', '100%', '0%', '90%'], correct: 0},
            {topic: 'Siblings', emoji: '👧😡👦', question: 'At what age is sibling rivalry highest?', options: ['3-7 years', '15 years', '1 month', '20 years'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🍽️', question: 'What is the impact of family meals on academics?', options: ['Higher grades and vocabulary', 'No impact', 'Lower grades', 'Random'], correct: 0},
            {topic: 'Siblings', emoji: '👧🤝👦', question: 'What percentage of adults remain close to siblings?', options: ['~80%', '10%', '0%', '100%'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦💬', question: 'What is the recommended family meeting frequency?', options: ['Weekly', 'Never', 'Daily', 'Yearly'], correct: 0},
            {topic: 'Siblings', emoji: '👧👶', question: 'What is optimal spacing between siblings?', options: ['2-4 years', '10 years', '1 month', 'No spacing'], correct: 0},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🎉', question: 'What percentage of families have regular traditions?', options: ['~75%', '10%', '0%', '100%'], correct: 0},
            {topic: 'Siblings', emoji: '👧⚖️👦', question: 'What does research say about equal treatment?', options: ['Less important than fairness', 'Must be equal', 'No importance', 'Random'], correct: 0}
        ],
        extreme: [
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦❤️', question: 'Name three family structures', answer: 'Nuclear, Extended, Blended, Single-parent, Same-sex (any 3)'},
            {topic: 'Siblings', emoji: '👧👦', question: 'Name three factors affecting sibling relationships', answer: 'Age gap, Gender, Personality, Parental treatment (any 3)'},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🏠', question: 'Name three family routine benefits', answer: 'Security, Stability, Connection, Healthy habits (any 3)'},
            {topic: 'Siblings', emoji: '👧😡👦', question: 'Name three ways to reduce sibling conflict', answer: 'Teach conflict resolution, Give attention, Avoid comparisons, Individual time (any 3)'},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🍽️', question: 'Name three family meal benefits', answer: 'Better nutrition, Communication, Academic success, Mental health (any 3)'},
            {topic: 'Siblings', emoji: '👧🤝👦', question: 'Name three ways to build sibling bonds', answer: 'Shared activities, Teamwork, Encourage kindness, Celebrate each other (any 3)'},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦💬', question: 'Name three family communication skills', answer: 'Active listening, I-messages, Problem-solving, Respect (any 3)'},
            {topic: 'Siblings', emoji: '👧👶', question: 'Name three ways to prepare for new sibling', answer: 'Read books, Tour hospital, Practice helping, Discuss changes (any 3)'},
            {topic: 'Family', emoji: '👨‍👩‍👧‍👦🎉', question: 'Name three types of family traditions', answer: 'Holiday, Daily, Milestone, Seasonal, Cultural (any 3)'},
            {topic: 'Siblings', emoji: '👧⚖️👦', question: 'Name three fairness strategies', answer: 'Individual needs, Take turns, Different rules by age, Equal time (any 3)'}
        ]
    },
    14: { // Chapter 14: Communication
        easy: [
            {topic: 'Communication', emoji: '💬👂', question: 'Listening is part of communication.', options: ['True', 'False'], correct: 0},
            {topic: 'Talking', emoji: '🗣️👶', question: 'Talk to children at their level.', options: ['True', 'False'], correct: 0},
            {topic: 'Communication', emoji: '💬❤️', question: 'Kind words matter.', options: ['True', 'False'], correct: 0},
            {topic: 'Talking', emoji: '🗣️📖', question: 'Reading builds vocabulary.', options: ['True', 'False'], correct: 0},
            {topic: 'Communication', emoji: '💬👁️', question: 'Body language communicates.', options: ['True', 'False'], correct: 0},
            {topic: 'Talking', emoji: '🗣️❓', question: 'Ask open-ended questions.', options: ['True', 'False'], correct: 0},
            {topic: 'Communication', emoji: '💬🚫', question: 'Avoid criticism.', options: ['True', 'False'], correct: 0},
            {topic: 'Talking', emoji: '🗣️💭', question: 'Validate children\'s feelings.', options: ['True', 'False'], correct: 0},
            {topic: 'Communication', emoji: '💬⏰', question: 'Timing matters in communication.', options: ['True', 'False'], correct: 0},
            {topic: 'Talking', emoji: '🗣️👍', question: 'Positive language encourages.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Communication', emoji: '💬👂', question: 'How to practice active listening?', options: ['Fully focusing on speaker', 'Waiting to talk'], correct: 0},
            {topic: 'Talking', emoji: '🗣️👶', question: 'What is parentese?', options: ['Simplified speech for babies', 'Baby talk'], correct: 0},
            {topic: 'Communication', emoji: '💬❤️', question: 'What are I-messages?', options: ['Express feelings without blame', 'You-statements'], correct: 0},
            {topic: 'Talking', emoji: '🗣️📖', question: 'What is dialogic reading?', options: ['Interactive back-and-forth reading', 'Silent reading'], correct: 0},
            {topic: 'Communication', emoji: '💬👁️', question: 'What is nonverbal communication?', options: ['Body language, facial expressions', 'Only words'], correct: 0},
            {topic: 'Talking', emoji: '🗣️❓', question: 'What are open-ended questions?', options: ['Require more than yes/no', 'Yes/no only'], correct: 0},
            {topic: 'Communication', emoji: '💬🚫', question: 'What is constructive feedback?', options: ['Helpful, specific suggestions', 'Harsh criticism'], correct: 0},
            {topic: 'Talking', emoji: '🗣️💭', question: 'How does reflective listening work?', options: ['Mirroring back what heard', 'Ignoring'], correct: 0},
            {topic: 'Communication', emoji: '💬⏰', question: 'What is the best time to talk?', options: ['When calm and receptive', 'During tantrum'], correct: 0},
            {topic: 'Talking', emoji: '🗣️👍', question: 'What is positive phrasing?', options: ['Say what to do', 'Focus on negatives'], correct: 0}
        ],
        hard: [
            {topic: 'Communication', emoji: '💬👂', question: 'What is the communication ratio?', options: ['80% listen, 20% talk', '100% talk', '50-50', 'No ratio'], correct: 0},
            {topic: 'Talking', emoji: '🗣️👶', question: 'What does joint attention involve?', options: ['Shared focus with child', 'Separate activities', 'No attention'], correct: 0},
            {topic: 'Communication', emoji: '💬❤️', question: 'What is the Gottman method?', options: ['Build emotional connection', 'Conflict only', 'No method'], correct: 0},
            {topic: 'Talking', emoji: '🗣️📖', question: 'What is the word gap?', options: ['Difference in words heard by income', 'No gap', 'Random'], correct: 0},
            {topic: 'Communication', emoji: '💬👁️', question: 'How much communication is nonverbal?', options: ['~70-93%', '10%', '0%', '100%'], correct: 0},
            {topic: 'Talking', emoji: '🗣️❓', question: 'What is scaffolding in conversation?', options: ['Support that builds skills', 'No support', 'Random'], correct: 0},
            {topic: 'Communication', emoji: '💬🚫', question: 'What is the criticism-to-praise ratio?', options: ['Should be 1:5 or higher praise', 'All criticism', '1:1', 'Random'], correct: 0},
            {topic: 'Talking', emoji: '🗣️💭', question: 'What is validation vs agreement?', options: ['Understand feelings vs agree with behavior', 'Same thing', 'No difference'], correct: 0},
            {topic: 'Communication', emoji: '💬⏰', question: 'What is the repair attempt?', options: ['Effort to de-escalate conflict', 'No attempt', 'Escalate'], correct: 0},
            {topic: 'Talking', emoji: '🗣️👍', question: 'What is specific vs general praise?', options: ['Describe exact behavior vs generic', 'Same thing', 'No difference'], correct: 0}
        ],
        expert: [
            {topic: 'Communication', emoji: '💬👂', question: 'What is the average parent-child conversation time?', options: ['~38 minutes per day', '10 hours', '1 minute', '0'], correct: 0},
            {topic: 'Talking', emoji: '🗣️👶', question: 'How many words should children hear daily?', options: ['~21,000', '100', '1,000', '100,000'], correct: 0},
            {topic: 'Communication', emoji: '💬❤️', question: 'What is the magic ratio by Gottman?', options: ['5:1 positive to negative', '1:1', '1:5', 'No ratio'], correct: 0},
            {topic: 'Talking', emoji: '🗣️📖', question: 'What is the 30 million word gap?', options: ['Difference by age 3 based on income', 'No gap', '100 word gap', 'Random'], correct: 0},
            {topic: 'Communication', emoji: '💬👁️', question: 'What percentage of message is tone?', options: ['~38%', '0%', '100%', '10%'], correct: 0},
            {topic: 'Talking', emoji: '🗣️❓', question: 'How many questions do preschoolers ask daily?', options: ['~300', '5', '1000', '0'], correct: 0},
            {topic: 'Communication', emoji: '💬🚫', question: 'What is the impact of criticism on children?', options: ['Lowers self-esteem and compliance', 'No impact', 'Always positive', 'Random'], correct: 0},
            {topic: 'Talking', emoji: '🗣️💭', question: 'What is the recommended validation frequency?', options: ['Multiple times daily', 'Never', 'Once a year', 'Rarely'], correct: 0},
            {topic: 'Communication', emoji: '💬⏰', question: 'What is the best conflict timing?', options: ['When calm, not in moment', 'During tantrum', 'Never', 'Random'], correct: 0},
            {topic: 'Talking', emoji: '🗣️👍', question: 'What is the ideal praise specificity?', options: ['Describe specific behavior and impact', 'Generic only', 'No praise', 'Random'], correct: 0}
        ],
        extreme: [
            {topic: 'Communication', emoji: '💬👂', question: 'Name three active listening skills', answer: 'Eye contact, Reflecting, Paraphrasing, No interrupting, Full attention (any 3)'},
            {topic: 'Talking', emoji: '🗣️👶', question: 'Name three ways to build language', answer: 'Read together, Narrate activities, Ask questions, Expand utterances (any 3)'},
            {topic: 'Communication', emoji: '💬❤️', question: 'Name three I-message components', answer: 'I feel, When you, Because, I need (any 3)'},
            {topic: 'Talking', emoji: '🗣️📖', question: 'Name three dialogic reading techniques', answer: 'Ask questions, Expand answers, Repeat, Praise, Follow interest (any 3)'},
            {topic: 'Communication', emoji: '💬👁️', question: 'Name three types of nonverbal communication', answer: 'Facial expressions, Body language, Tone, Gestures, Eye contact (any 3)'},
            {topic: 'Talking', emoji: '🗣️❓', question: 'Name three open-ended question starters', answer: 'How, What, Why, Tell me about, Describe (any 3)'},
            {topic: 'Communication', emoji: '💬🚫', question: 'Name three constructive feedback elements', answer: 'Specific, Kind, Focused on behavior, Timely, Solutions (any 3)'},
            {topic: 'Talking', emoji: '🗣️💭', question: 'Name three validation statements', answer: 'I see you\'re upset, That makes sense, I understand, You seem frustrated (any 3)'},
            {topic: 'Communication', emoji: '💬⏰', question: 'Name three communication timing tips', answer: 'When calm, Private setting, Unrushed, Good mood, Receptive (any 3)'},
            {topic: 'Talking', emoji: '🗣️👍', question: 'Name three positive phrasing examples', answer: 'Walk please vs don\'t run, Use gentle hands vs don\'t hit, Inside voice vs don\'t yell (any 3)'}
        ]
    },
    15: { // Chapter 15: Self-Care for Parents
        easy: [
            {topic: 'Self-Care', emoji: '🧘‍♀️💆', question: 'Parents need self-care.', options: ['True', 'False'], correct: 0},
            {topic: 'Wellness', emoji: '💪🥗', question: 'Healthy parents raise healthy children.', options: ['True', 'False'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️😌', question: 'Rest is important for parents.', options: ['True', 'False'], correct: 0},
            {topic: 'Wellness', emoji: '💪😴', question: 'Sleep affects parenting.', options: ['True', 'False'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️🤝', question: 'Parents need support.', options: ['True', 'False'], correct: 0},
            {topic: 'Wellness', emoji: '💪🏃', question: 'Exercise reduces stress.', options: ['True', 'False'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️⏰', question: 'Me-time is not selfish.', options: ['True', 'False'], correct: 0},
            {topic: 'Wellness', emoji: '💪🧠', question: 'Mental health matters.', options: ['True', 'False'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️❤️', question: 'Self-care helps parenting.', options: ['True', 'False'], correct: 0},
            {topic: 'Wellness', emoji: '💪🌈', question: 'Balance is key.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Self-Care', emoji: '🧘‍♀️💆', question: 'What is self-care?', options: ['Meeting own physical and emotional needs', 'Ignoring needs'], correct: 0},
            {topic: 'Wellness', emoji: '💪🥗', question: 'What is the oxygen mask principle?', options: ['Help yourself before helping others', 'Help others first'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️😌', question: 'What is mindfulness?', options: ['Present-moment awareness', 'Constant worry'], correct: 0},
            {topic: 'Wellness', emoji: '💪😴', question: 'How much sleep do adults need?', options: ['7-9 hours', '3 hours'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️🤝', question: 'What is a support system?', options: ['Network of helping people', 'No support'], correct: 0},
            {topic: 'Wellness', emoji: '💪🏃', question: 'What is the exercise recommendation?', options: ['150 minutes moderate per week', '0 minutes'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️⏰', question: 'What is me-time?', options: ['Time for own interests', 'Never alone'], correct: 0},
            {topic: 'Wellness', emoji: '💪🧠', question: 'What is parental burnout?', options: ['Exhaustion from parenting stress', 'Normal energy'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️❤️', question: 'What is self-compassion?', options: ['Kindness toward self', 'Self-criticism'], correct: 0},
            {topic: 'Wellness', emoji: '💪🌈', question: 'What is work-life balance?', options: ['Managing multiple roles', 'Work only'], correct: 0}
        ],
        hard: [
            {topic: 'Self-Care', emoji: '🧘‍♀️💆', question: 'What is the self-care deficit?', options: ['Gap between needs and self-care', 'Surplus', 'No gap'], correct: 0},
            {topic: 'Wellness', emoji: '💪🥗', question: 'What is stress eating?', options: ['Eating in response to emotions', 'Hunger-based eating'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️😌', question: 'What is meditation?', options: ['Focused attention practice', 'Sleep', 'Worry'], correct: 0},
            {topic: 'Wellness', emoji: '💪😴', question: 'How is sleep debt defined?', options: ['Cumulative sleep deprivation', 'Surplus sleep'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️🤝', question: 'What does respite care provide?', options: ['Temporary relief for caregivers', 'Permanent care'], correct: 0},
            {topic: 'Wellness', emoji: '💪🏃', question: 'What is the mind-body connection?', options: ['Physical health affects mental health', 'No connection'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️⏰', question: 'What is time scarcity?', options: ['Feeling of not enough time', 'Too much time'], correct: 0},
            {topic: 'Wellness', emoji: '💪🧠', question: 'What is postpartum depression?', options: ['Depression after childbirth', 'Normal emotions'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️❤️', question: 'What is the self-care wheel?', options: ['Six dimensions of wellness', 'No wheel'], correct: 0},
            {topic: 'Wellness', emoji: '💪🌈', question: 'What is role strain?', options: ['Stress from multiple roles', 'No stress'], correct: 0}
        ],
        expert: [
            {topic: 'Self-Care', emoji: '🧘‍♀️💆', question: 'What percentage of parents report burnout?', options: ['~66%', '10%', '0%', '100%'], correct: 0},
            {topic: 'Wellness', emoji: '💪🥗', question: 'What is the recommended water intake?', options: ['8-12 cups daily', '1 cup', '1 gallon hourly', 'None'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️😌', question: 'What is the impact of 10 minutes meditation?', options: ['Reduces stress and anxiety', 'No impact', 'Increases stress', 'Random'], correct: 0},
            {topic: 'Wellness', emoji: '💪😴', question: 'What percentage of parents are sleep deprived?', options: ['~60-70%', '5%', '0%', '100%'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️🤝', question: 'What is the isolation rate for new parents?', options: ['~80% feel isolated', '0%', '10%', '100%'], correct: 0},
            {topic: 'Wellness', emoji: '💪🏃', question: 'What is the stress reduction from exercise?', options: ['~20-30% reduction', '0%', '100%', '5%'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️⏰', question: 'What is the recommended me-time frequency?', options: ['Daily, even 15 minutes', 'Never', 'Once a year', 'Random'], correct: 0},
            {topic: 'Wellness', emoji: '💪🧠', question: 'What is the postpartum depression rate?', options: ['~15-20%', '0%', '100%', '1%'], correct: 0},
            {topic: 'Self-Care', emoji: '🧘‍♀️❤️', question: 'What is the self-compassion benefit?', options: ['Better mental health and parenting', 'No benefit', 'Worse outcomes', 'Random'], correct: 0},
            {topic: 'Wellness', emoji: '💪🌈', question: 'What percentage of parents struggle with balance?', options: ['~75%', '10%', '0%', '100%'], correct: 0}
        ],
        extreme: [
            {topic: 'Self-Care', emoji: '🧘‍♀️💆', question: 'Name three self-care activities', answer: 'Exercise, Reading, Bath, Hobbies, Friends, Nature (any 3)'},
            {topic: 'Wellness', emoji: '💪🥗', question: 'Name three healthy habits', answer: 'Balanced diet, Exercise, Sleep, Hydration, Stress management (any 3)'},
            {topic: 'Self-Care', emoji: '🧘‍♀️😌', question: 'Name three stress-reduction techniques', answer: 'Meditation, Deep breathing, Yoga, Exercise, Nature (any 3)'},
            {topic: 'Wellness', emoji: '💪😴', question: 'Name three sleep hygiene practices', answer: 'Regular schedule, Dark room, No screens, Cool temp (any 3)'},
            {topic: 'Self-Care', emoji: '🧘‍♀️🤝', question: 'Name three types of support', answer: 'Emotional, Practical, Informational, Social (any 3)'},
            {topic: 'Wellness', emoji: '💪🏃', question: 'Name three exercise benefits', answer: 'Mood boost, Energy, Health, Stress relief, Better sleep (any 3)'},
            {topic: 'Self-Care', emoji: '🧘‍♀️⏰', question: 'Name three me-time ideas', answer: 'Hobbies, Exercise, Read, Friends, Spa, Walk (any 3)'},
            {topic: 'Wellness', emoji: '💪🧠', question: 'Name three signs of parental burnout', answer: 'Exhaustion, Detachment, Ineffectiveness, Irritability (any 3)'},
            {topic: 'Self-Care', emoji: '🧘‍♀️❤️', question: 'Name three self-compassion practices', answer: 'Self-kindness, Common humanity, Mindfulness, Positive self-talk (any 3)'},
            {topic: 'Wellness', emoji: '💪🌈', question: 'Name three work-life balance strategies', answer: 'Boundaries, Prioritize, Delegate, Say no, Schedule time (any 3)'}
        ]
    },
    16: { // Chapter 16: Potty Training & Milestones
        easy: [
            {topic: 'Potty Training', emoji: '🚽👶', question: 'Potty training requires readiness.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯📏', question: 'Children reach milestones at different ages.', options: ['True', 'False'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽✅', question: 'Patience is key in potty training.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯👶', question: 'Tracking milestones helps development.', options: ['True', 'False'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽🎉', question: 'Praise encourages potty success.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'Language develops gradually.', options: ['True', 'False'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽💧', question: 'Accidents are normal.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🚶', question: 'Walking is a major milestone.', options: ['True', 'False'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽📚', question: 'Books help potty training.', options: ['True', 'False'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🍴', question: 'Self-feeding is a milestone.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Potty Training', emoji: '🚽👶', question: 'At what age is potty training readiness typical?', options: ['18-24 months', '6 months'], correct: 0},
            {topic: 'Milestones', emoji: '🎯📏', question: 'What are developmental milestones?', options: ['Skills most children achieve by certain age', 'Random skills'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽✅', question: 'What are readiness signs?', options: ['Stays dry, interest, communication', 'Only age'], correct: 0},
            {topic: 'Milestones', emoji: '🎯👶', question: 'What is red flag for development?', options: ['Missing multiple milestones', 'One variation'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽🎉', question: 'What is positive reinforcement?', options: ['Praise and rewards', 'Punishment'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'When should children combine words?', options: ['18-24 months', '6 months'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽💧', question: 'How to handle accidents?', options: ['Stay calm, no punishment', 'Get angry'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🚶', question: 'What age for independent walking?', options: ['12-15 months', '3 months'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽📚', question: 'What is the 3-day method?', options: ['Intensive training approach', 'Three years'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🍴', question: 'When can children use utensils?', options: ['15-18 months', '5 years'], correct: 0}
        ],
        hard: [
            {topic: 'Potty Training', emoji: '🚽👶', question: 'What is child-oriented approach?', options: ['Follow child\'s cues', 'Force training'], correct: 0},
            {topic: 'Milestones', emoji: '🎯📏', question: 'What is developmental surveillance?', options: ['Ongoing monitoring of development', 'One-time check'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽✅', question: 'What is elimination communication?', options: ['Diaper-free from infancy', 'Traditional training'], correct: 0},
            {topic: 'Milestones', emoji: '🎯👶', question: 'What is developmental screening?', options: ['Standardized assessment tool', 'Informal check'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽🎉', question: 'What is regression?', options: ['Going backwards in training', 'Steady progress'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'What is expressive vs receptive language?', options: ['Speaking vs understanding', 'Same thing'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽💧', question: 'What is enuresis?', options: ['Bedwetting beyond age 5', 'Normal wetting'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🚶', question: 'What are gross vs fine motor skills?', options: ['Large vs small muscle movements', 'Same thing'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽📚', question: 'What is scheduled toileting?', options: ['Regular potty times', 'Random times'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🍴', question: 'What is pincer grasp?', options: ['Thumb and finger grasp', 'Whole hand'], correct: 0}
        ],
        expert: [
            {topic: 'Potty Training', emoji: '🚽👶', question: 'What is average potty training completion age?', options: ['2.5-3 years', '1 year', '5 years'], correct: 0},
            {topic: 'Milestones', emoji: '🎯📏', question: 'What percentage of children walk by 15 months?', options: ['~90%', '10%', '100%'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽✅', question: 'What percentage achieve daytime dryness by age 3?', options: ['~85%', '10%', '100%'], correct: 0},
            {topic: 'Milestones', emoji: '🎯👶', question: 'When should screening occur?', options: ['9, 18, 24, 30 months', 'Never', 'Once'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽🎉', question: 'How many accidents are normal during training?', options: ['Several daily in early stages', 'None', 'Constant'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'How many words at 18 months?', options: ['~10-20 words', '500 words', '1 word'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽💧', question: 'What is typical nighttime dryness age?', options: ['4-5 years', '1 year', '10 years'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🚶', question: 'What is typical crawling age range?', options: ['6-10 months', '1 year', '2 years'], correct: 0},
            {topic: 'Potty Training', emoji: '🚽📚', question: 'How long does potty training typically take?', options: ['3-6 months', '1 week', '5 years'], correct: 0},
            {topic: 'Milestones', emoji: '🎯🍴', question: 'When can children drink from cup?', options: ['12-15 months', '3 years', '5 years'], correct: 0}
        ],
        extreme: [
            {topic: 'Potty Training', emoji: '🚽👶', question: 'List three signs of potty training readiness', answer: 'Stays dry 2hrs, Shows interest, Can communicate, Follows directions (any 3)'},
            {topic: 'Milestones', emoji: '🎯📏', question: 'Name the four developmental domains', answer: 'Physical, Cognitive, Social, Emotional'},
            {topic: 'Potty Training', emoji: '🚽✅', question: 'Name three potty training methods', answer: 'Child-oriented, 3-day, Elimination communication, Scheduled (any 3)'},
            {topic: 'Milestones', emoji: '🎯👶', question: 'Name three first-year milestones', answer: 'Rolling, Sitting, Crawling, Standing, First words (any 3)'},
            {topic: 'Potty Training', emoji: '🚽🎉', question: 'Name three rewards for potty success', answer: 'Praise, Stickers, Small treats, Special privileges (any 3)'},
            {topic: 'Milestones', emoji: '🎯🗣️', question: 'Name three language milestones', answer: 'Cooing, Babbling, First words, Two-word phrases, Sentences (any 3)'},
            {topic: 'Potty Training', emoji: '🚽💧', question: 'Name three accident prevention strategies', answer: 'Regular schedule, Watch for cues, Easy clothing, Accessible potty (any 3)'},
            {topic: 'Milestones', emoji: '🎯🚶', question: 'Name three motor milestones', answer: 'Rolling, Crawling, Walking, Running, Jumping (any 3)'},
            {topic: 'Potty Training', emoji: '🚽📚', question: 'Name three potty training supplies', answer: 'Potty chair, Training pants, Books, Stickers, Wipes (any 3)'},
            {topic: 'Milestones', emoji: '🎯🍴', question: 'Name three self-help milestones', answer: 'Self-feeding, Drinking from cup, Dressing, Potty training (any 3)'}
        ]
    }
,
    17: { // Chapter 17: Money & Allowance
        easy: [
            {topic: 'Money', emoji: '💰👶', question: 'Children can learn about money.', options: ['True', 'False'], correct: 0},
            {topic: 'Allowance', emoji: '💵📅', question: 'Allowance teaches financial skills.', options: ['True', 'False'], correct: 0},
            {topic: 'Money', emoji: '💰🏦', question: 'Saving is an important skill.', options: ['True', 'False'], correct: 0},
            {topic: 'Allowance', emoji: '💵🎯', question: 'Children can make spending choices.', options: ['True', 'False'], correct: 0},
            {topic: 'Money', emoji: '💰🛍️', question: 'Money has limits.', options: ['True', 'False'], correct: 0},
            {topic: 'Allowance', emoji: '💵🏠', question: 'Chores can tie to allowance.', options: ['True', 'False'], correct: 0},
            {topic: 'Money', emoji: '💰📊', question: 'Budgeting is a life skill.', options: ['True', 'False'], correct: 0},
            {topic: 'Allowance', emoji: '💵💡', question: 'Mistakes teach money lessons.', options: ['True', 'False'], correct: 0},
            {topic: 'Money', emoji: '💰🎁', question: 'Giving teaches generosity.', options: ['True', 'False'], correct: 0},
            {topic: 'Allowance', emoji: '💵⏰', question: 'Age affects allowance amount.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Money', emoji: '💰👶', question: 'What age to start teaching about money?', options: ['3-4 years', '18 years'], correct: 0},
            {topic: 'Allowance', emoji: '💵📅', question: 'What is allowance?', options: ['Regular money given to child', 'One-time payment'], correct: 0},
            {topic: 'Money', emoji: '💰🏦', question: 'What are the three jars?', options: ['Save, Spend, Give', 'Only spend'], correct: 0},
            {topic: 'Allowance', emoji: '💵🎯', question: 'What is earned allowance?', options: ['Money for completing tasks', 'Free money'], correct: 0},
            {topic: 'Money', emoji: '💰🛍️', question: 'What is opportunity cost?', options: ['What you give up for choice', 'No cost'], correct: 0},
            {topic: 'Allowance', emoji: '💵🏠', question: 'Should chores be paid?', options: ['Debatable, varies by family', 'Always'], correct: 0},
            {topic: 'Money', emoji: '💰📊', question: 'What is a budget?', options: ['Plan for spending and saving', 'Unlimited spending'], correct: 0},
            {topic: 'Allowance', emoji: '💵💡', question: 'What if child wastes allowance?', options: ['Let them experience consequence', 'Always rescue'], correct: 0},
            {topic: 'Money', emoji: '💰🎁', question: 'What is charitable giving?', options: ['Donating to help others', 'Keeping all'], correct: 0},
            {topic: 'Allowance', emoji: '💵⏰', question: 'How much allowance is appropriate?', options: ['$1-2 per year of age weekly', '$100 weekly'], correct: 0}
        ],
        hard: [
            {topic: 'Money', emoji: '💰👶', question: 'What is delayed gratification?', options: ['Waiting for better reward', 'Immediate satisfaction', 'No waiting'], correct: 0},
            {topic: 'Allowance', emoji: '💵📅', question: 'What is commission vs allowance?', options: ['Earned vs given', 'Same thing', 'No difference'], correct: 0},
            {topic: 'Money', emoji: '💰🏦', question: 'What is compound interest?', options: ['Interest on interest', 'Simple interest', 'No interest'], correct: 0},
            {topic: 'Allowance', emoji: '💵🎯', question: 'What is the save-spend-give ratio?', options: ['10-10-80 or similar', 'All spend', 'Random'], correct: 0},
            {topic: 'Money', emoji: '💰🛍️', question: 'What is impulse buying?', options: ['Unplanned purchases', 'Planned shopping', 'Saving'], correct: 0},
            {topic: 'Allowance', emoji: '💵🏠', question: 'What are family contributions?', options: ['Unpaid chores for household', 'All paid', 'No chores'], correct: 0},
            {topic: 'Money', emoji: '💰📊', question: 'What is needs vs wants?', options: ['Essential vs desirable', 'Same thing', 'No difference'], correct: 0},
            {topic: 'Allowance', emoji: '💵💡', question: 'What is financial independence?', options: ['Managing own money responsibly', 'Total dependence', 'No management'], correct: 0},
            {topic: 'Money', emoji: '💰🎁', question: 'What is the giving percentage?', options: ['10% often recommended', '100%', '0%'], correct: 0},
            {topic: 'Allowance', emoji: '💵⏰', question: 'What is age-appropriate financial responsibility?', options: ['Increasing with age and maturity', 'Same at all ages', 'No responsibility'], correct: 0}
        ],
        expert: [
            {topic: 'Money', emoji: '💰👶', question: 'At what age do children understand money?', options: ['~3-4 years basic concept', '18 years', '1 month', '15 years'], correct: 0},
            {topic: 'Allowance', emoji: '💵📅', question: 'What percentage of families give allowance?', options: ['~60%', '100%', '0%', '10%'], correct: 0},
            {topic: 'Money', emoji: '💰🏦', question: 'What is the average teen savings?', options: ['~$500-1000', '$10,000', '$0', '$100'], correct: 0},
            {topic: 'Allowance', emoji: '💵🎯', question: 'What is typical weekly allowance for 10-year-old?', options: ['$10-15', '$100', '$1', '$1000'], correct: 0},
            {topic: 'Money', emoji: '💰🛍️', question: 'What percentage of teens overspend?', options: ['~30-40%', '0%', '100%', '5%'], correct: 0},
            {topic: 'Allowance', emoji: '💵🏠', question: 'What is the debate on payment for chores?', options: ['Teaches work vs family duty', 'No debate', 'Always pay', 'Never pay'], correct: 0},
            {topic: 'Money', emoji: '💰📊', question: 'What percentage of adults lack financial literacy?', options: ['~60%', '0%', '100%', '10%'], correct: 0},
            {topic: 'Allowance', emoji: '💵💡', question: 'What does the marshmallow test measure?', options: ['Delayed gratification study', 'Food test', 'No test', 'Speed test'], correct: 0},
            {topic: 'Money', emoji: '💰🎁', question: 'What percentage of allowance should go to giving?', options: ['10% commonly suggested', '100%', '0%', '90%'], correct: 0},
            {topic: 'Allowance', emoji: '💵⏰', question: 'When should teens have debit cards?', options: ['13-15 with supervision', 'Age 5', 'Never', 'Age 2'], correct: 0}
        ],
        extreme: [
            {topic: 'Money', emoji: '💰👶', question: 'Name three money concepts for young children', answer: 'Coins have value, Money buys things, Saving vs spending (any 3)'},
            {topic: 'Allowance', emoji: '💵📅', question: 'Name three allowance approaches', answer: 'Commission, Unconditional, Hybrid, No allowance (any 3)'},
            {topic: 'Money', emoji: '💰🏦', question: 'Name the three jars method', answer: 'Save, Spend, Give'},
            {topic: 'Allowance', emoji: '💵🎯', question: 'Name three ways to earn extra money', answer: 'Extra chores, Entrepreneurship, Odd jobs, Selling items (any 3)'},
            {topic: 'Money', emoji: '💰🛍️', question: 'Name three smart spending habits', answer: 'Compare prices, Wait before buying, Use lists, Avoid impulse (any 3)'},
            {topic: 'Allowance', emoji: '💵🏠', question: 'Name three unpaid family contributions', answer: 'Clean room, Set table, Pet care, Help siblings (any 3)'},
            {topic: 'Money', emoji: '💰📊', question: 'Name three budgeting categories', answer: 'Save, Spend, Give, Needs, Wants (any 3)'},
            {topic: 'Allowance', emoji: '💵💡', question: 'Name three financial mistakes to allow', answer: 'Impulse buys, Running out, Poor choices, Buyer\'s remorse (any 3)'},
            {topic: 'Money', emoji: '💰🎁', question: 'Name three ways children can give', answer: 'Donate money, Volunteer time, Share toys, Help others (any 3)'},
            {topic: 'Allowance', emoji: '💵⏰', question: 'Name three age-appropriate money tasks', answer: 'Preschool: identify coins, Elementary: count change, Teens: budget (any 3)'}
        ]
    },
    18: { // Chapter 18: Divorce & Co-Parenting
        easy: [
            {topic: 'Divorce', emoji: '💔👨‍👩‍👧', question: 'Divorce affects children.', options: ['True', 'False'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧👩‍👧', question: 'Two homes can work.', options: ['True', 'False'], correct: 0},
            {topic: 'Divorce', emoji: '💔😢', question: 'Children need reassurance.', options: ['True', 'False'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧💬👩‍👧', question: 'Communication helps co-parenting.', options: ['True', 'False'], correct: 0},
            {topic: 'Divorce', emoji: '💔🙅', question: 'Divorce is not child\'s fault.', options: ['True', 'False'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧⚖️👩‍👧', question: 'Consistency across homes helps.', options: ['True', 'False'], correct: 0},
            {topic: 'Divorce', emoji: '💔❤️', question: 'Parents still love children.', options: ['True', 'False'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧🤝👩‍👧', question: 'Respect between parents matters.', options: ['True', 'False'], correct: 0},
            {topic: 'Divorce', emoji: '💔⏰', question: 'Adjustment takes time.', options: ['True', 'False'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧📅👩‍👧', question: 'Schedules provide stability.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Divorce', emoji: '💔👨‍👩‍👧', question: 'What percentage of marriages end in divorce?', options: ['~40-50%', '5%'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧👩‍👧', question: 'What is co-parenting?', options: ['Sharing parenting responsibilities', 'Solo parenting'], correct: 0},
            {topic: 'Divorce', emoji: '💔😢', question: 'What emotions do children feel?', options: ['Sadness, anger, confusion, relief', 'Only happy'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧💬👩‍👧', question: 'What is parallel parenting?', options: ['Minimal interaction between parents', 'Constant communication'], correct: 0},
            {topic: 'Divorce', emoji: '💔🙅', question: 'What do children need to hear?', options: ['It\'s not your fault, we still love you', 'It\'s your fault'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧⚖️👩‍👧', question: 'What is a parenting plan?', options: ['Agreement on custody and decisions', 'No plan'], correct: 0},
            {topic: 'Divorce', emoji: '💔❤️', question: 'What is age-appropriate explanation?', options: ['Simple, honest, age-suitable', 'All details'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧🤝👩‍👧', question: 'What is putting children first?', options: ['Prioritizing child\'s needs', 'Own needs first'], correct: 0},
            {topic: 'Divorce', emoji: '💔⏰', question: 'What is adjustment period?', options: ['Time to adapt to changes', 'Immediate acceptance'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧📅👩‍👧', question: 'What is custody schedule?', options: ['Time division between parents', 'Random visits'], correct: 0}
        ],
        hard: [
            {topic: 'Divorce', emoji: '💔👨‍👩‍👧', question: 'What is high-conflict divorce?', options: ['Ongoing disputes affecting children', 'Amicable split', 'No conflict'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧👩‍👧', question: 'What is parallel vs cooperative parenting?', options: ['Low vs high communication', 'Same thing', 'No difference'], correct: 0},
            {topic: 'Divorce', emoji: '💔😢', question: 'What is parental alienation?', options: ['One parent turns child against other', 'Healthy relationship', 'No alienation'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧💬👩‍👧', question: 'What is a parenting communication app?', options: ['Documented parent messaging', 'No documentation'], correct: 0},
            {topic: 'Divorce', emoji: '💔🙅', question: 'What is parentification?', options: ['Child takes adult role', 'Appropriate roles', 'No change'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧⚖️👩‍👧', question: 'What is joint vs sole custody?', options: ['Shared vs one parent decision-making', 'Same thing', 'No custody'], correct: 0},
            {topic: 'Divorce', emoji: '💔❤️', question: 'What is the sleeper effect?', options: ['Delayed impact appearing later', 'Immediate only', 'No effect'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧🤝👩‍👧', question: 'What is the business relationship model?', options: ['Professional co-parent interaction', 'Personal relationship', 'No model'], correct: 0},
            {topic: 'Divorce', emoji: '💔⏰', question: 'How long does adjustment typically take?', options: ['1-2 years', '1 week', '10 years'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧📅👩‍👧', question: 'What is a 2-2-3 schedule?', options: ['2 days each, 3 days alternating', 'Random', 'No schedule'], correct: 0}
        ],
        expert: [
            {topic: 'Divorce', emoji: '💔👨‍👩‍👧', question: 'What percentage of children experience parental divorce?', options: ['~40%', '5%', '100%', '0%'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧👩‍👧', question: 'What is the ideal parenting communication?', options: ['Respectful, child-focused, business-like', 'Hostile', 'None', 'Personal'], correct: 0},
            {topic: 'Divorce', emoji: '💔😢', question: 'What is the biggest predictor of child adjustment?', options: ['Parental conflict level', 'Custody arrangement', 'Money', 'No predictor'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧💬👩‍👧', question: 'What percentage of divorced parents co-parent effectively?', options: ['~25-30%', '100%', '0%', '90%'], correct: 0},
            {topic: 'Divorce', emoji: '💔🙅', question: 'What percentage of children blame themselves?', options: ['~30-40%', '0%', '100%', '5%'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧⚖️👩‍👧', question: 'What is shared physical custody outcome?', options: ['Better child adjustment', 'Worse outcomes', 'No difference', 'Harmful'], correct: 0},
            {topic: 'Divorce', emoji: '💔❤️', question: 'When should children be told about divorce?', options: ['Together by both parents, once decided', 'Never', 'By one parent', 'Last minute'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧🤝👩‍👧', question: 'What is the impact of parental conflict?', options: ['More harmful than divorce itself', 'No impact', 'Always helpful', 'Random'], correct: 0},
            {topic: 'Divorce', emoji: '💔⏰', question: 'What is the crisis period?', options: ['First 6-12 months', 'First week', 'First 10 years', 'Never'], correct: 0},
            {topic: 'Co-Parenting', emoji: '👨‍👧📅👩‍👧', question: 'What percentage prefer consistent schedules?', options: ['~85% of children', '10%', '0%', '100%'], correct: 0}
        ],
        extreme: [
            {topic: 'Divorce', emoji: '💔👨‍👩‍👧', question: 'Name three common child reactions', answer: 'Sadness, Anger, Anxiety, Guilt, Relief (any 3)'},
            {topic: 'Co-Parenting', emoji: '👨‍👧👩‍👧', question: 'Name three co-parenting approaches', answer: 'Cooperative, Parallel, Conflicted (any 3)'},
            {topic: 'Divorce', emoji: '💔😢', question: 'Name three ways to support children', answer: 'Reassure love, Maintain routines, Listen, Therapy, Books (any 3)'},
            {topic: 'Co-Parenting', emoji: '👨‍👧💬👩‍👧', question: 'Name three communication tools', answer: 'Email, App, Notebook, Scheduled calls, Mediator (any 3)'},
            {topic: 'Divorce', emoji: '💔🙅', question: 'Name three things never to do', answer: 'Badmouth other parent, Use child as messenger, Put child in middle (any 3)'},
            {topic: 'Co-Parenting', emoji: '👨‍👧⚖️👩‍👧', question: 'Name three custody arrangements', answer: 'Joint, Sole, Shared physical, Bird\'s nest (any 3)'},
            {topic: 'Divorce', emoji: '💔❤️', question: 'Name three essential messages for children', answer: 'Not your fault, We both love you, We\'ll be okay (any 3)'},
            {topic: 'Co-Parenting', emoji: '👨‍👧🤝👩‍👧', question: 'Name three co-parenting rules', answer: 'Respect, Child-focused, No badmouthing, Consistency (any 3)'},
            {topic: 'Divorce', emoji: '💔⏰', question: 'Name three adjustment phases', answer: 'Crisis, Adjustment, Recovery, New normal (any 3)'},
            {topic: 'Co-Parenting', emoji: '👨‍👧📅👩‍👧', question: 'Name three schedule types', answer: '2-2-3, Week on/off, Alternating weekends, Bird\'s nest (any 3)'}
        ]
    },
    19: { // Chapter 19: Bullying & Peer Pressure
        easy: [
            {topic: 'Bullying', emoji: '😢👊', question: 'Bullying hurts children.', options: ['True', 'False'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥⚠️', question: 'Peer pressure affects decisions.', options: ['True', 'False'], correct: 0},
            {topic: 'Bullying', emoji: '😢🚫', question: 'Bullying is wrong.', options: ['True', 'False'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥💪', question: 'Children can resist pressure.', options: ['True', 'False'], correct: 0},
            {topic: 'Bullying', emoji: '😢🗣️', question: 'Reporting bullying is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥🤔', question: 'Not all peer influence is bad.', options: ['True', 'False'], correct: 0},
            {topic: 'Bullying', emoji: '😢❤️', question: 'Victims need support.', options: ['True', 'False'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥🛑', question: 'Saying no is okay.', options: ['True', 'False'], correct: 0},
            {topic: 'Bullying', emoji: '😢👀', question: 'Bystanders can help.', options: ['True', 'False'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥👍', question: 'Good friends respect choices.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Bullying', emoji: '😢👊', question: 'What is bullying?', options: ['Repeated harmful behavior', 'One-time conflict'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥⚠️', question: 'How is peer pressure defined?', options: ['Influence from peers to conform', 'No influence'], correct: 0},
            {topic: 'Bullying', emoji: '😢🚫', question: 'What are types of bullying?', options: ['Physical, verbal, social, cyber', 'Physical only'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥💪', question: 'What builds resistance to pressure?', options: ['Confidence, values, skills', 'Nothing'], correct: 0},
            {topic: 'Bullying', emoji: '😢🗣️', question: 'What is the difference between tattling and reporting?', options: ['Reporting is for safety', 'Same thing'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥🤔', question: 'What is positive peer pressure?', options: ['Encouragement toward good choices', 'Always negative'], correct: 0},
            {topic: 'Bullying', emoji: '😢❤️', question: 'What do bullying victims need?', options: ['Belief, support, safety', 'Blame'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥🛑', question: 'What is an exit strategy?', options: ['Way to leave uncomfortable situation', 'No strategy'], correct: 0},
            {topic: 'Bullying', emoji: '😢👀', question: 'What is a bystander?', options: ['Witness to bullying', 'Bully'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥👍', question: 'What are healthy friendships?', options: ['Mutual respect and support', 'One-sided'], correct: 0}
        ],
        hard: [
            {topic: 'Bullying', emoji: '😢👊', question: 'What is the bullying triangle?', options: ['Bully, victim, bystander', 'Two people', 'No triangle'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥⚠️', question: 'What is the imaginary audience phenomenon?', options: ['Teens feel constantly watched', 'No audience', 'Real watchers'], correct: 0},
            {topic: 'Bullying', emoji: '😢🚫', question: 'How is cyberbullying defined?', options: ['Online harassment', 'In-person only', 'No bullying'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥💪', question: 'What is assertiveness?', options: ['Express needs respectfully', 'Aggression', 'Passivity'], correct: 0},
            {topic: 'Bullying', emoji: '😢🗣️', question: 'What is an upstander?', options: ['Someone who intervenes', 'Bystander', 'Bully'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥🤔', question: 'What is social capital?', options: ['Resources from relationships', 'Money', 'No capital'], correct: 0},
            {topic: 'Bullying', emoji: '😢❤️', question: 'What is trauma-informed response?', options: ['Understand impact of bullying', 'Blame victim', 'Ignore'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥🛑', question: 'What is the broken record technique?', options: ['Repeat refusal calmly', 'Give in', 'Yell'], correct: 0},
            {topic: 'Bullying', emoji: '😢👀', question: 'What is the bystander effect?', options: ['Less likely to help in group', 'Always help', 'No effect'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥👍', question: 'What is relational aggression?', options: ['Harm relationships to hurt', 'Physical aggression', 'No aggression'], correct: 0}
        ],
        expert: [
            {topic: 'Bullying', emoji: '😢👊', question: 'What percentage of students experience bullying?', options: ['~20-25%', '0%', '100%', '5%'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥⚠️', question: 'At what age is peer pressure strongest?', options: ['12-14 years', '5 years', '25 years', '1 year'], correct: 0},
            {topic: 'Bullying', emoji: '😢🚫', question: 'What percentage of bullying is cyberbullying?', options: ['~15-20%', '90%', '0%', '100%'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥💪', question: 'What is the resistance success rate with skills?', options: ['~60-70% higher', '0%', '100%', '10%'], correct: 0},
            {topic: 'Bullying', emoji: '😢🗣️', question: 'What percentage of bullying is reported?', options: ['~20-30%', '100%', '0%', '90%'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥🤔', question: 'What percentage of peer influence is positive?', options: ['Can be ~40-60%', '0%', '100%', '5%'], correct: 0},
            {topic: 'Bullying', emoji: '😢❤️', question: 'What is suicide risk increase from bullying?', options: ['2-9 times higher', 'No increase', 'Lower', 'Same'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥🛑', question: 'What percentage of teens face pressure to drink?', options: ['~40-50%', '0%', '100%', '5%'], correct: 0},
            {topic: 'Bullying', emoji: '😢👀', question: 'What percentage of bystanders do nothing?', options: ['~80%', '0%', '100%', '10%'], correct: 0},
            {topic: 'Peer Pressure', emoji: '👥👍', question: 'What is the impact of one close friend?', options: ['Significant protection', 'No impact', 'Negative', 'Random'], correct: 0}
        ],
        extreme: [
            {topic: 'Bullying', emoji: '😢👊', question: 'Name the four types of bullying', answer: 'Physical, Verbal, Social, Cyber'},
            {topic: 'Peer Pressure', emoji: '👥⚠️', question: 'Name three sources of peer pressure', answer: 'Friends, Media, Social norms, Desire to fit in (any 3)'},
            {topic: 'Bullying', emoji: '😢🚫', question: 'Name three signs of being bullied', answer: 'Withdrawn, Injuries, Lost items, School avoidance, Mood changes (any 3)'},
            {topic: 'Peer Pressure', emoji: '👥💪', question: 'Name three resistance strategies', answer: 'Say no firmly, Suggest alternatives, Walk away, Blame parents (any 3)'},
            {topic: 'Bullying', emoji: '😢🗣️', question: 'Name three ways to report bullying', answer: 'Tell parent, Teacher, Counselor, Anonymous tip, App (any 3)'},
            {topic: 'Peer Pressure', emoji: '👥🤔', question: 'Name three positive peer influences', answer: 'Academic effort, Sports, Volunteering, Healthy habits (any 3)'},
            {topic: 'Bullying', emoji: '😢❤️', question: 'Name three ways to support victim', answer: 'Believe them, Listen, Report, Document, Therapy (any 3)'},
            {topic: 'Peer Pressure', emoji: '👥🛑', question: 'Name three refusal skills', answer: 'Say no, Give reason, Suggest alternative, Leave, Broken record (any 3)'},
            {topic: 'Bullying', emoji: '😢👀', question: 'Name three upstander actions', answer: 'Intervene safely, Support victim, Report, Refuse to join, Tell adult (any 3)'},
            {topic: 'Peer Pressure', emoji: '👥👍', question: 'Name three friendship qualities', answer: 'Respect, Trust, Support, Honesty, Acceptance (any 3)'}
        ]
    },
    20: { // Chapter 20: Values & Character Building
        easy: [
            {topic: 'Values', emoji: '⭐💎', question: 'Values guide behavior.', options: ['True', 'False'], correct: 0},
            {topic: 'Character', emoji: '🌟💪', question: 'Character can be taught.', options: ['True', 'False'], correct: 0},
            {topic: 'Values', emoji: '⭐❤️', question: 'Kindness is a value.', options: ['True', 'False'], correct: 0},
            {topic: 'Character', emoji: '🌟🙏', question: 'Honesty builds character.', options: ['True', 'False'], correct: 0},
            {topic: 'Values', emoji: '⭐🤝', question: 'Respect matters in families.', options: ['True', 'False'], correct: 0},
            {topic: 'Character', emoji: '🌟💡', question: 'Responsibility is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Values', emoji: '⭐🌈', question: 'Parents model values.', options: ['True', 'False'], correct: 0},
            {topic: 'Character', emoji: '🌟🎯', question: 'Perseverance leads to success.', options: ['True', 'False'], correct: 0},
            {topic: 'Values', emoji: '⭐🙌', question: 'Gratitude is beneficial.', options: ['True', 'False'], correct: 0},
            {topic: 'Character', emoji: '🌟⚖️', question: 'Fairness is a virtue.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Values', emoji: '⭐💎', question: 'What are values?', options: ['Beliefs guiding behavior', 'Random ideas'], correct: 0},
            {topic: 'Character', emoji: '🌟💪', question: 'What is character education?', options: ['Teaching ethical values', 'Academic only'], correct: 0},
            {topic: 'Values', emoji: '⭐❤️', question: 'How would you define empathy?', options: ['Understanding others\' feelings', 'No feeling'], correct: 0},
            {topic: 'Character', emoji: '🌟🙏', question: 'What is integrity?', options: ['Doing right even when alone', 'Doing right when watched'], correct: 0},
            {topic: 'Values', emoji: '⭐🤝', question: 'What is respect?', options: ['Valuing others and self', 'Disregard'], correct: 0},
            {topic: 'Character', emoji: '🌟💡', question: 'What is accountability?', options: ['Taking responsibility for actions', 'Blaming others'], correct: 0},
            {topic: 'Values', emoji: '⭐🌈', question: 'What does modeling values mean?', options: ['Demonstrating values through actions', 'Telling only'], correct: 0},
            {topic: 'Character', emoji: '🌟🎯', question: 'What is grit?', options: ['Passion and perseverance', 'Giving up'], correct: 0},
            {topic: 'Values', emoji: '⭐🙌', question: 'What is gratitude practice?', options: ['Regularly expressing thankfulness', 'Complaining'], correct: 0},
            {topic: 'Character', emoji: '🌟⚖️', question: 'What is justice?', options: ['Fairness and moral rightness', 'Unfairness'], correct: 0}
        ],
        hard: [
            {topic: 'Values', emoji: '⭐💎', question: 'What is the values hierarchy?', options: ['Prioritized ranking of values', 'All equal', 'No hierarchy'], correct: 0},
            {topic: 'Character', emoji: '🌟💪', question: 'What are the six pillars of character?', options: ['Trustworthiness, Respect, Responsibility, Fairness, Caring, Citizenship', 'Two pillars', 'No pillars'], correct: 0},
            {topic: 'Values', emoji: '⭐❤️', question: 'What is moral development theory?', options: ['Stages of ethical reasoning (Kohlberg)', 'No theory', 'Random'], correct: 0},
            {topic: 'Character', emoji: '🌟🙏', question: 'What is moral courage?', options: ['Standing up for values despite risk', 'Going along', 'No courage'], correct: 0},
            {topic: 'Values', emoji: '⭐🤝', question: 'What is cultural relativism?', options: ['Values vary by culture', 'Universal only', 'No variation'], correct: 0},
            {topic: 'Character', emoji: '🌟💡', question: 'What is intrinsic vs extrinsic motivation?', options: ['Internal values vs external rewards', 'Same thing', 'No difference'], correct: 0},
            {topic: 'Values', emoji: '⭐🌈', question: 'What is the hidden curriculum?', options: ['Values taught through example', 'Formal lessons', 'No curriculum'], correct: 0},
            {topic: 'Character', emoji: '🌟🎯', question: 'What does delayed gratification mean?', options: ['Resisting immediate reward for better', 'Immediate satisfaction', 'No delay'], correct: 0},
            {topic: 'Values', emoji: '⭐🙌', question: 'What is the gratitude-happiness link?', options: ['Gratitude increases wellbeing', 'No connection', 'Decreases'], correct: 0},
            {topic: 'Character', emoji: '🌟⚖️', question: 'What is moral reasoning?', options: ['Thinking through ethical issues', 'No thinking', 'Random'], correct: 0}
        ],
        expert: [
            {topic: 'Values', emoji: '⭐💎', question: 'At what age do children understand values?', options: ['~5-7 years', '18 years', '1 month', '20 years'], correct: 0},
            {topic: 'Character', emoji: '🌟💪', question: 'What percentage of schools have character education?', options: ['~70%', '0%', '100%', '10%'], correct: 0},
            {topic: 'Values', emoji: '⭐❤️', question: 'At what age does empathy fully develop?', options: ['Continues through adolescence', 'Age 5 complete', 'Birth', 'Never'], correct: 0},
            {topic: 'Character', emoji: '🌟🙏', question: 'What is the honesty development timeline?', options: ['Increases with age and reasoning', 'Decreases', 'Static', 'Random'], correct: 0},
            {topic: 'Values', emoji: '⭐🤝', question: 'What percentage of values come from parents?', options: ['~70-80% primary influence', '10%', '0%', '100%'], correct: 0},
            {topic: 'Character', emoji: '🌟💡', question: 'What is the impact of responsibility on success?', options: ['Strong positive correlation', 'No correlation', 'Negative', 'Random'], correct: 0},
            {topic: 'Values', emoji: '⭐🌈', question: 'What is the modeling effectiveness?', options: ['Actions more powerful than words', 'Words more powerful', 'Equal', 'No impact'], correct: 0},
            {topic: 'Character', emoji: '🌟🎯', question: 'What did Angela Duckworth study?', options: ['Grit predicts success', 'IQ only', 'No research', 'Random'], correct: 0},
            {topic: 'Values', emoji: '⭐🙌', question: 'What is the gratitude journal impact?', options: ['25% increase in happiness', 'No change', 'Decrease', '100% increase'], correct: 0},
            {topic: 'Character', emoji: '🌟⚖️', question: 'What are Kohlberg\'s stages?', options: ['6 stages of moral development', '2 stages', 'No stages', '10 stages'], correct: 0}
        ],
        extreme: [
            {topic: 'Values', emoji: '⭐💎', question: 'Name three core values to teach', answer: 'Honesty, Kindness, Respect, Responsibility, Courage (any 3)'},
            {topic: 'Character', emoji: '🌟💪', question: 'Name the six pillars of character', answer: 'Trustworthiness, Respect, Responsibility, Fairness, Caring, Citizenship (any 3)'},
            {topic: 'Values', emoji: '⭐❤️', question: 'List three methods to teach empathy', answer: 'Model it, Discuss feelings, Read stories, Volunteer (any 3)'},
            {topic: 'Character', emoji: '🌟🙏', question: 'Name three honesty-building practices', answer: 'Model honesty, Praise truth-telling, Discuss why it matters (any 3)'},
            {topic: 'Values', emoji: '⭐🤝', question: 'Name three respect behaviors', answer: 'Listen, Use manners, Value differences, Kind words (any 3)'},
            {topic: 'Character', emoji: '🌟💡', question: 'Name three responsibility tasks by age', answer: 'Preschool: clean up, Elementary: homework, Teens: job (any 3)'},
            {topic: 'Values', emoji: '⭐🌈', question: 'Name three values modeling opportunities', answer: 'Daily actions, Admit mistakes, Show kindness, Help others (any 3)'},
            {topic: 'Character', emoji: '🌟🎯', question: 'Name three perseverance strategies', answer: 'Growth mindset, Break tasks down, Celebrate effort, Learn from failure (any 3)'},
            {topic: 'Values', emoji: '⭐🙌', question: 'Name three gratitude practices', answer: 'Thank you notes, Gratitude journal, Share at dinner, Acts of kindness (any 3)'},
            {topic: 'Character', emoji: '🌟⚖️', question: 'Name three ways to teach fairness', answer: 'Model it, Discuss scenarios, Turn-taking, Equal vs fair (any 3)'}
        ]
    }
    // Add more chapters: 2, 3, 4... unlimited!
};

