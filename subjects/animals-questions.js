/**
 * WPCode Snippet #2: Animals & Wildlife Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 10
 *
 * COPY ALL CODE BELOW
 */

const animalsQuestions = {
    1: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "Elephants are afraid of mice.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Eagles can see prey from miles away.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "Dolphins are fish.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦁🐯",
                question: "Alligators and crocodiles are the same.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐼🐨",
                question: "Bees die after stinging once.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "Lions live in jungles.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "Penguins can fly.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦋🐛",
                question: "Sharks have bones.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐝🐜",
                question: "All snakes are venomous.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦈🐙",
                question: "Bears hibernate in winter.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🐢🐊",
                question: "What is an elephant's trunk used for?",
                options: [
                    "Breathing only",
                    "Multiple purposes"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦎🐍",
                question: "How far can eagles see?",
                options: [
                    "1 mile",
                    "2-3 miles"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦉🦇",
                question: "Are dolphins intelligent?",
                options: [
                    "Yes, very",
                    "No"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐺🦊",
                question: "Can alligators live in saltwater?",
                options: [
                    "Mostly freshwater",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐻🐨",
                question: "What do bees make?",
                options: [
                    "Honey",
                    "Wax only"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐰🐹",
                question: "Who hunts in a lion pride?",
                options: [
                    "Males",
                    "Females"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐭🐀",
                question: "Where do penguins live?",
                options: [
                    "North Pole",
                    "Antarctica"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐴🦄",
                question: "What is a shark's best sense?",
                options: [
                    "Sight",
                    "Smell"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🐮🐷",
                question: "How do frogs drink water?",
                options: [
                    "Through skin",
                    "Through mouth"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐔🐓",
                question: "What do bears love to eat?",
                options: [
                    "Meat only",
                    "Omnivorous diet"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🦃🦚",
                question: "How many teeth do elephants have for chewing?",
                options: [
                    "16",
                    "8",
                    "4"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦢🦩",
                question: "How much weight can an eagle carry?",
                options: [
                    "Twice body weight",
                    "Equal to body weight",
                    "Half body weight"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐸🦎",
                question: "How do dolphins communicate?",
                options: [
                    "Silent",
                    "Clicks and whistles",
                    "Body language"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦗🦟",
                question: "How many teeth can a crocodile have?",
                options: [
                    "40",
                    "100",
                    "60-80"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🕷️🕸️",
                question: "How do bees communicate flower locations?",
                options: [
                    "Pheromones only",
                    "Dancing",
                    "Buzzing"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐌🦗",
                question: "How long can a lion's roar be heard?",
                options: [
                    "10 miles",
                    "5 miles",
                    "1 mile"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦞🦀",
                question: "How fast can penguins swim?",
                options: [
                    "5 mph",
                    "15 mph",
                    "25 mph"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How are baby sharks born?",
                options: [
                    "Live birth or eggs",
                    "Eggs only",
                    "Live birth only"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🐡🦈",
                question: "How high can frogs jump?",
                options: [
                    "20x body length",
                    "50x body length",
                    "5x body length"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐙🦑",
                question: "How long do bears hibernate?",
                options: [
                    "5-7 months",
                    "1 year",
                    "2 months"
                ],
                correct: 2
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "How much water can an elephant drink daily?",
                options: [
                    "200 gallons",
                    "20 gallons",
                    "100 gallons",
                    "50 gallons"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "How many times better is eagle vision than humans?",
                options: [
                    "10 times",
                    "20 times",
                    "4-8 times",
                    "2-3 times"
                ],
                correct: 3
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How do dolphins hear?",
                options: [
                    "Skin",
                    "Blowholes",
                    "Through jaw bone",
                    "External ears"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "What determines crocodile egg gender?",
                options: [
                    "Genetics",
                    "Random",
                    "Location",
                    "Temperature"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How many flowers do bees visit daily?",
                options: [
                    "100",
                    "10,000",
                    "5,000",
                    "500-1,000"
                ],
                correct: 3
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "What is a lion's bite force?",
                options: [
                    "400 PSI",
                    "1,000 PSI",
                    "1,500 PSI",
                    "650 PSI"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "How long do emperor penguins incubate eggs?",
                options: [
                    "64 days",
                    "90 days",
                    "120 days",
                    "30 days"
                ],
                correct: 3
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "How often do sharks replace teeth?",
                options: [
                    "Every 6 months",
                    "Yearly",
                    "Monthly",
                    "Every 8 days"
                ],
                correct: 2
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "How fast is a frog's tongue strike?",
                options: [
                    "1 second",
                    "0.07 seconds",
                    "2 seconds",
                    "0.5 seconds"
                ],
                correct: 3
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How fast can a grizzly bear run?",
                options: [
                    "35 mph",
                    "20 mph",
                    "55 mph",
                    "45 mph"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How many bones are in an elephant's trunk?",
                answer: "0 or Zero or None"
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "What is an eagle's visual acuity compared to humans?",
                answer: "20/4 or 20/5 vision"
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "What frequency range can dolphins hear?",
                answer: "20 Hz to 150 kHz"
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "What is a saltwater crocodile's bite force?",
                answer: "3,700 PSI"
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How fast do bee wings beat per second?",
                answer: "200 times or 200 Hz"
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "How many lions are left in the wild?",
                answer: "20,000 or about 20,000"
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How deep can emperor penguins dive?",
                answer: "1,850 feet or 565 meters"
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How deep can great white sharks dive?",
                answer: "1,200 feet or 365 meters"
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "How many eggs can a frog lay at once?",
                answer: "Up to 20,000"
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How much can a grizzly bear lift?",
                answer: "1,000 pounds or 450 kg"
            }
        ]
    },
    2: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "Giraffes have the same number of neck bones as humans.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "Owls can turn their heads 360 degrees.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "Octopuses have three hearts.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "Lizards can regrow their tails.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "Butterflies can taste with their feet.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "Cheetahs can run faster than cars.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "Parrots can mimic human speech.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "Sea turtles return to their birthplace to lay eggs.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦡🦫",
                question: "Snakes can hear sounds.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "Bats are blind.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "How much sleep do giraffes need daily?",
                options: [
                    "8 hours",
                    "2 hours"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "How do owls locate prey in darkness?",
                options: [
                    "Sight only",
                    "Hearing"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "Where are most octopus neurons located?",
                options: [
                    "Brain",
                    "Arms"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "Why do lizards drop their tails?",
                options: [
                    "Growth",
                    "Defense mechanism"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "What do butterflies eat?",
                options: [
                    "Nectar",
                    "Leaves"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How long can cheetahs maintain top speed?",
                options: [
                    "5 minutes",
                    "30 seconds"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "How intelligent are parrots?",
                options: [
                    "Basic",
                    "Very intelligent"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "How do sea turtles navigate?",
                options: [
                    "Magnetic fields",
                    "Random"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "When are frogs most active?",
                options: [
                    "Day",
                    "Night"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How do bats navigate?",
                options: [
                    "Echolocation",
                    "Sight"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How much does a giraffe's heart weigh?",
                options: [
                    "5 lbs",
                    "50 lbs",
                    "25 lbs"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "How many degrees can owls rotate their heads?",
                options: [
                    "180",
                    "270",
                    "360"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How many suckers does an octopus have?",
                options: [
                    "2,000",
                    "5,000",
                    "500"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "How long does tail regeneration take in lizards?",
                options: [
                    "1 year",
                    "1 week",
                    "2 months"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "What is a butterfly's average lifespan?",
                options: [
                    "1 week",
                    "6 months",
                    "2-4 weeks"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "What is a cheetah's top speed?",
                options: [
                    "70 mph",
                    "50 mph",
                    "90 mph"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How long can parrots live?",
                options: [
                    "10 years",
                    "80 years",
                    "30 years"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How long can sea turtles live?",
                options: [
                    "30 years",
                    "50 years",
                    "100+ years"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "What percentage of frogs are endangered?",
                options: [
                    "50%",
                    "30%",
                    "10%"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "What do most bats eat?",
                options: [
                    "Fish",
                    "Insects and fruit",
                    "Blood"
                ],
                correct: 2
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "What is a giraffe's blood pressure?",
                options: [
                    "280/180",
                    "120/80",
                    "200/120",
                    "150/90"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "Why can owls rotate heads so far?",
                options: [
                    "Extra vertebrae",
                    "Magic",
                    "No bones",
                    "Flexible skull"
                ],
                correct: 3
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How fast can octopuses change color?",
                options: [
                    "10 seconds",
                    "5 seconds",
                    "1 second",
                    "0.3 seconds"
                ],
                correct: 3
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "What cells enable tail regeneration?",
                options: [
                    "Nerve cells",
                    "Stem cells",
                    "Blastema cells",
                    "Blood cells"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How do butterflies see?",
                options: [
                    "One eye",
                    "No eyes",
                    "Compound eyes",
                    "Simple eyes"
                ],
                correct: 3
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "What body feature helps cheetahs run fast?",
                options: [
                    "Flexible spine",
                    "Large lungs",
                    "Long legs",
                    "All of these"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "Can parrots understand context?",
                options: [
                    "No",
                    "All can",
                    "Basic only",
                    "Yes, some can"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How do sea turtles find their birthplace?",
                options: [
                    "Sight",
                    "Magnetic imprinting",
                    "Smell",
                    "Following others"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "What disease threatens frogs globally?",
                options: [
                    "Flu",
                    "None",
                    "Chytrid fungus",
                    "Cancer"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "How many pups do bats have per year?",
                options: [
                    "5-10",
                    "20+",
                    "2-3",
                    "1"
                ],
                correct: 3
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "How long is a giraffe's tongue?",
                answer: "20 inches or 50 cm"
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "What frequency range can owls hear?",
                answer: "200 Hz to 12 kHz"
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How many neurons does an octopus have?",
                answer: "500 million"
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "How many times can a lizard regrow its tail?",
                answer: "Multiple times throughout life"
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How many butterfly species exist?",
                answer: "20,000 or about 20,000"
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "What is the cheetah's acceleration time to 60 mph?",
                answer: "3 seconds"
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "What is the vocabulary record for a parrot?",
                answer: "Over 1,700 words"
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "How deep can leatherback turtles dive?",
                answer: "4,000 feet or 1,200 meters"
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "How many frog species exist worldwide?",
                answer: "7,000 or over 7,000"
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "What is the echolocation frequency range of bats?",
                answer: "20-200 kHz"
            }
        ]
    },
    3: {
        easy: [
            {
                topic: "Marine Life",
                emoji: "🦒🦓",
                question: "Are octopuses colorblind?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦉🦇",
                question: "Can snakes sense heat?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐙🦑",
                question: "How many eyes does a bee have?",
                options: [
                    "2",
                    "5"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦘🦌",
                question: "Do wolves hunt alone?",
                options: [
                    "Yes, always",
                    "No, in packs"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐺🦊",
                question: "Which bird lays the largest egg relative to body size?",
                options: [
                    "Ostrich",
                    "Kiwi"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐵🦍",
                question: "What do seals primarily eat?",
                options: [
                    "Fish",
                    "Plants"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🦩🦚",
                question: "Do frogs drink water?",
                options: [
                    "Yes, drink it",
                    "No, absorb through skin"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐠🐟",
                question: "Why do beavers build dams?",
                options: [
                    "For fun",
                    "For shelter"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦂🕷️",
                question: "Do all turtles lay eggs?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐨🦥",
                question: "Do eagles build nests on the ground?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Marine Life",
                emoji: "🦭🦦",
                question: "What color is octopus blood?",
                options: [
                    "Red",
                    "Blue"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐆🐅",
                question: "How do snakes detect heat?",
                options: [
                    "Pit organs",
                    "Skin"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🦎🐉",
                question: "What do bees collect from flowers?",
                options: [
                    "Nectar and pollen",
                    "Water"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐋🐚",
                question: "What is a wolf pack structure?",
                options: [
                    "Family unit",
                    "Random group"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦜🦢",
                question: "Can parrots see colors?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐃🐄",
                question: "Can seals sleep underwater?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🐑🐐",
                question: "Can frogs live in saltwater?",
                options: [
                    "All can",
                    "Most can't"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐪🦙",
                question: "Do beaver teeth stop growing?",
                options: [
                    "Yes",
                    "No, grow continuously"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦡🦫",
                question: "Where do sea turtles lay eggs?",
                options: [
                    "In water",
                    "On beaches"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦨🦔",
                question: "How many eaglets usually survive?",
                options: [
                    "All",
                    "Usually one"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Marine Life",
                emoji: "🐘🦏",
                question: "How intelligent are octopuses?",
                options: [
                    "Highly intelligent",
                    "Low",
                    "Average"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🦅🦜",
                question: "What percentage of snakes are venomous?",
                options: [
                    "20%",
                    "50%",
                    "10%"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐬🐳",
                question: "How many bees live in a hive?",
                options: [
                    "20,000-80,000",
                    "500,000",
                    "1,000"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🐊🦎",
                question: "How far can a wolf howl be heard?",
                options: [
                    "20 miles",
                    "1 mile",
                    "6 miles"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐝🦋",
                question: "Which parrot species is most talkative?",
                options: [
                    "Cockatoo",
                    "African Grey",
                    "Macaw"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦁🐯",
                question: "How long can seals hold their breath?",
                options: [
                    "30 minutes",
                    "2 hours",
                    "5 minutes"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🐧🦆",
                question: "How many times its body length can a frog jump?",
                options: [
                    "5 times",
                    "20 times",
                    "50 times"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦈🐡",
                question: "How long is the longest beaver dam?",
                options: [
                    "850 feet",
                    "2,790 feet",
                    "100 feet"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🐍🐢",
                question: "How long can sea turtles hold their breath?",
                options: [
                    "30 minutes",
                    "12 hours",
                    "4-7 hours"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐻🐼",
                question: "How long do eagle eggs take to hatch?",
                options: [
                    "20 days",
                    "35 days",
                    "60 days"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Marine Life",
                emoji: "🦒🦓",
                question: "How many arms can an octopus regrow?",
                options: [
                    "None",
                    "One",
                    "Multiple",
                    "All"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦉🦇",
                question: "How many snake species exist worldwide?",
                options: [
                    "500",
                    "10,000",
                    "3,900",
                    "1,500"
                ],
                correct: 3
            },
            {
                topic: "Insects",
                emoji: "🐙🦑",
                question: "How long can a queen bee live?",
                options: [
                    "5 years",
                    "7 years",
                    "1 year",
                    "3 years"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦘🦌",
                question: "What is a wolf's jaw pressure?",
                options: [
                    "400 PSI",
                    "1,200 PSI",
                    "200 PSI",
                    "800 PSI"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐺🦊",
                question: "What is a parrot's brain-to-body ratio?",
                options: [
                    "Largest of all birds",
                    "Similar to primates",
                    "Similar to fish",
                    "Similar to dogs"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐵🦍",
                question: "How do seals regulate body temperature in cold water?",
                options: [
                    "Shivering",
                    "Thick blubber",
                    "Metabolism",
                    "All of these"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦩🦚",
                question: "What protects frogs from bacteria?",
                options: [
                    "Nothing",
                    "Antimicrobial peptides",
                    "Thick skin",
                    "Immune cells"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐠🐟",
                question: "How long can beavers stay underwater?",
                options: [
                    "30 minutes",
                    "2 minutes",
                    "15 minutes",
                    "5 minutes"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦂🕷️",
                question: "How do baby sea turtles know to go to the ocean?",
                options: [
                    "Following mother",
                    "Random",
                    "Light cues",
                    "Instinct and gravity"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐨🦥",
                question: "What percentage of an eagle's body is muscle?",
                options: [
                    "20%",
                    "65%",
                    "35%",
                    "50%"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Marine Life",
                emoji: "🦭🦦",
                question: "How many suckers does an octopus have per arm?",
                answer: "240 or about 240"
            },
            {
                topic: "Reptiles",
                emoji: "🐆🐅",
                question: "What is the fastest snake strike speed?",
                answer: "2.5 meters per second"
            },
            {
                topic: "Insects",
                emoji: "🦎🐉",
                question: "How many flowers must bees visit for 1 pound of honey?",
                answer: "2 million"
            },
            {
                topic: "Mammals",
                emoji: "🐋🐚",
                question: "How much stronger is a wolf's sense of smell than humans?",
                answer: "100 times or 100x"
            },
            {
                topic: "Birds",
                emoji: "🦜🦢",
                question: "What is the smallest parrot species?",
                answer: "Buff-faced pygmy parrot"
            },
            {
                topic: "Marine Life",
                emoji: "🐃🐄",
                question: "How much can an elephant seal weigh?",
                answer: "8,800 pounds or 4 tons"
            },
            {
                topic: "Amphibians",
                emoji: "🐑🐐",
                question: "What is the smallest frog in the world?",
                answer: "Paedophryne amauensis"
            },
            {
                topic: "Mammals",
                emoji: "🐪🦙",
                question: "How many trees can a beaver cut down per year?",
                answer: "200 or about 200"
            },
            {
                topic: "Reptiles",
                emoji: "🦡🦫",
                question: "How many sea turtle species exist?",
                answer: "7 or Seven"
            },
            {
                topic: "Birds",
                emoji: "🦨🦔",
                question: "From what distance can an eagle spot a rabbit?",
                answer: "2 miles or 3.2 km"
            }
        ]
    },
    4: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "Monkeys and apes are the same.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Ducks can sleep with one eye open.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "Clownfish can change gender.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "All turtles lay eggs on land.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "Queen ants can live for decades.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "Foxes are canines.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "Eagles build nests on the ground.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "Crabs walk sideways.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐍🐢",
                question: "Geckos can walk on ceilings.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "Squirrels forget where they bury nuts.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "What distinguishes apes from monkeys?",
                options: [
                    "No tail",
                    "Size"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "Why do ducks sleep with one eye open?",
                options: [
                    "Broken sleep",
                    "Watch for predators"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "Do all male clownfish become female?",
                options: [
                    "No",
                    "Yes, when dominant female dies"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "Why do turtles lay eggs on land?",
                options: [
                    "Need air to develop",
                    "Tradition"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "What do worker ants do?",
                options: [
                    "All colony tasks",
                    "Reproduce"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "How do foxes hunt?",
                options: [
                    "Chasing",
                    "Pouncing"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "Where do eagles prefer to nest?",
                options: [
                    "High places",
                    "Ground"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "Why do crabs walk sideways?",
                options: [
                    "Preference",
                    "Leg structure"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "Can all lizard species drop tails?",
                options: [
                    "Yes, all",
                    "No, only some"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How do squirrels find buried nuts?",
                options: [
                    "Smell",
                    "Memory"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "How many ape species exist?",
                options: [
                    "15",
                    "30",
                    "5"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "What is this sleep pattern called?",
                options: [
                    "Unihemispheric sleep",
                    "Light sleep",
                    "Napping"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How long does gender change take in clownfish?",
                options: [
                    "Few weeks",
                    "6 months",
                    "Instant"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "What determines turtle egg gender?",
                options: [
                    "Location",
                    "Temperature",
                    "Genetics"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How much can ants lift?",
                options: [
                    "5x weight",
                    "50x weight",
                    "20x weight"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "What is a fox's top speed?",
                options: [
                    "20 mph",
                    "45 mph",
                    "30 mph"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How heavy can an eagle nest become?",
                options: [
                    "1,000 lbs",
                    "2,000 lbs",
                    "100 lbs"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How many eyes do crabs have?",
                options: [
                    "2",
                    "8",
                    "6"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How long does tail regrowth take?",
                options: [
                    "1 week",
                    "1 year",
                    "2 months"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "What percent of nuts do squirrels find?",
                options: [
                    "95%",
                    "75%",
                    "50%"
                ],
                correct: 2
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "What percent DNA do humans share with chimpanzees?",
                options: [
                    "80%",
                    "90%",
                    "99.9%",
                    "98.8%"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Which brain hemisphere sleeps in ducks?",
                options: [
                    "Both",
                    "Left only",
                    "Neither",
                    "Alternates"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "What do clownfish and anemones share?",
                options: [
                    "Mutualism",
                    "Competition",
                    "Predation",
                    "Nothing"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "How many eggs does a sea turtle lay?",
                options: [
                    "500+",
                    "100-200",
                    "10-20",
                    "50-80"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "What is the total ant population on Earth?",
                options: [
                    "1 billion",
                    "1 trillion",
                    "Unknown",
                    "20 quadrillion"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How do foxes use Earth's magnetic field?",
                options: [
                    "Navigation",
                    "Hunting",
                    "Don't use it",
                    "Mating"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "What is the term for baby eagles?",
                options: [
                    "Fledglings",
                    "Hatchlings",
                    "Chicks",
                    "Eaglets"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "How many times do crabs molt in life?",
                options: [
                    "5-10 times",
                    "20+ times",
                    "Continuously",
                    "Once"
                ],
                correct: 3
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "What enables lizard tail regeneration?",
                options: [
                    "Magic",
                    "Diet",
                    "Blastema cells",
                    "Stem cells"
                ],
                correct: 3
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How many hours do squirrels sleep daily?",
                options: [
                    "20 hours",
                    "8 hours",
                    "15 hours",
                    "4 hours"
                ],
                correct: 2
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How many bones does a monkey have?",
                answer: "About 206"
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "How many duck species exist?",
                answer: "120 or about 120"
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How many anemone tentacles protect clownfish?",
                answer: "Varies, typically hundreds"
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "How far can sea turtles migrate?",
                answer: "10,000 miles or 16,000 km"
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "What is the combined weight of all ants on Earth?",
                answer: "Equal to all humans combined"
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "How many teeth does a fox have?",
                answer: "42"
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How many feathers does an eagle have?",
                answer: "About 7,000"
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How many eggs can a female crab produce?",
                answer: "1,000 to 2 million"
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "What is the longest lizard species?",
                answer: "Komodo dragon"
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How fast do squirrel teeth grow per year?",
                answer: "6 inches or 15 cm"
            }
        ]
    },
    5: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "Tigers and lions can interbreed.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "Only male peacocks have colorful feathers.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "Whales are fish.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "Chameleons change color for camouflage only.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "Mosquitoes are attracted to body heat.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "Otters hold hands while sleeping.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "Penguins can live in hot climates.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "Crabs have 10 legs.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦡🦫",
                question: "Box turtles can close their shells completely.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "Koalas are nocturnal.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "Can tigers swim?",
                options: [
                    "No",
                    "Yes, very well"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Why do male peacocks display feathers?",
                options: [
                    "Warmth",
                    "Attract mates"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How do whales breathe?",
                options: [
                    "Blowholes",
                    "Gills"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "Why do chameleons change color?",
                options: [
                    "Communication and mood",
                    "Camouflage only"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "Which mosquitoes bite humans?",
                options: [
                    "Males",
                    "Females"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "What tools do otters use?",
                options: [
                    "Sticks",
                    "Rocks"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "Where do Galapagos penguins live?",
                options: [
                    "Antarctica",
                    "Equator"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "Do crabs have homes?",
                options: [
                    "No",
                    "Some do"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "Is a turtle's shell part of its skeleton?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "What do koalas eat?",
                options: [
                    "Eucalyptus",
                    "Bamboo"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "What is a tiger's bite force?",
                options: [
                    "500 PSI",
                    "1,500 PSI",
                    "1,000 PSI"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "How many tail feathers does a peacock have?",
                options: [
                    "200",
                    "50",
                    "150"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How much does a blue whale's tongue weigh?",
                options: [
                    "6 tons",
                    "1 ton",
                    "3 tons"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "How fast can chameleons change color?",
                options: [
                    "20 seconds",
                    "1 minute",
                    "Instant"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How many people do mosquitoes kill annually?",
                options: [
                    "100,000",
                    "700,000+",
                    "10,000"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "How much do sea otters eat daily?",
                options: [
                    "10% body weight",
                    "50% body weight",
                    "25% body weight"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How long do emperor penguins fast while incubating?",
                options: [
                    "2 months",
                    "4 months",
                    "1 month"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How strong is a coconut crab's claw?",
                options: [
                    "300 lbs",
                    "700 lbs",
                    "50 lbs"
                ],
                correct: 2
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "How long can box turtles live?",
                options: [
                    "50 years",
                    "100+ years",
                    "20 years"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How many hours do koalas sleep daily?",
                options: [
                    "15 hours",
                    "8 hours",
                    "22 hours"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "How far can tigers swim?",
                options: [
                    "6 miles",
                    "1 mile",
                    "30 miles",
                    "15 miles"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "How many eye-spots are on a peacock's train?",
                options: [
                    "500",
                    "100",
                    "150-200",
                    "50"
                ],
                correct: 3
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How much does a blue whale's heart weigh?",
                options: [
                    "2,000 lbs",
                    "1,000 lbs",
                    "400 lbs",
                    "100 lbs"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "What cells allow color change?",
                options: [
                    "Chromatophores",
                    "Keratinocytes",
                    "Fibroblasts",
                    "Melanocytes"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "What diseases can mosquitoes transmit?",
                options: [
                    "None",
                    "1-2",
                    "Only malaria",
                    "10+"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How many hairs per square inch do sea otters have?",
                options: [
                    "1 million",
                    "10 million",
                    "10,000",
                    "100,000"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How many eggs do penguins typically lay?",
                options: [
                    "1-2",
                    "20+",
                    "5-10",
                    "50+"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How many crab species exist?",
                options: [
                    "1,500",
                    "500",
                    "20,000",
                    "6,800"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How many vertebrae are fused in a turtle's shell?",
                options: [
                    "100",
                    "50",
                    "30",
                    "10"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "What is unique about koala brains?",
                options: [
                    "Most wrinkled",
                    "Two hemispheres",
                    "Very smooth",
                    "Very large"
                ],
                correct: 2
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "What is a tiger's top running speed?",
                answer: "40 mph or 65 km/h"
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "How long can a peacock's train grow?",
                answer: "5 feet or 1.5 meters"
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "What is the length of the longest blue whale recorded?",
                answer: "110 feet or 33.5 meters"
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "How many degrees can a chameleon's eyes rotate?",
                answer: "360 degrees independently"
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How fast can a mosquito beat its wings?",
                answer: "300-600 times per second"
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How long can sea otters hold their breath?",
                answer: "5 minutes or about 5 minutes"
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "How long can emperor penguins stay underwater?",
                answer: "22 minutes or about 20 minutes"
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "What is the leg span of the largest crab?",
                answer: "12 feet or 3.7 meters"
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "What is the oldest recorded age of a box turtle?",
                answer: "138 years"
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How many calories do koalas get from eucalyptus daily?",
                answer: "500 calories or about 500"
            }
        ]
    },
    6: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "Kangaroos can box.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "Flamingos are born pink.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "Squids have ink sacs.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "Snakes can sleep.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "Spiders are insects.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "Hedgehogs carry apples on their spines.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "Songbirds learn their songs.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "Lobsters are naturally red.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦂🕷️",
                question: "Komodo dragons are the largest lizards.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "Llamas are related to camels.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "Why do male kangaroos box?",
                options: [
                    "Sport",
                    "Dominance"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "What makes flamingos pink?",
                options: [
                    "Genetics",
                    "Diet"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "Why do squids release ink?",
                options: [
                    "Defense",
                    "Communication"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "Do snakes have eyelids?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How many legs do spiders have?",
                options: [
                    "8",
                    "6"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How do hedgehogs defend themselves?",
                options: [
                    "Running",
                    "Curling into ball"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How do birds learn songs?",
                options: [
                    "Instinct",
                    "From parents"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "What color are live lobsters?",
                options: [
                    "Red",
                    "Brown-green"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How do Komodo dragons track prey?",
                options: [
                    "Smell",
                    "Sight"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "Do llamas spit?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "How much can a kangaroo's kick force reach?",
                options: [
                    "850 PSI",
                    "300 PSI",
                    "1,500 PSI"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Why do flamingos stand on one leg?",
                options: [
                    "Balance",
                    "Rest",
                    "Conserve body heat"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How large is a giant squid's eye?",
                options: [
                    "10 inches",
                    "15 inches",
                    "5 inches"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "What covers a snake's eye?",
                options: [
                    "Spectacle scale",
                    "Nothing",
                    "Eyelid"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How strong is spider silk?",
                options: [
                    "Weak",
                    "Like cotton",
                    "Stronger than steel"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How many quills does a hedgehog have?",
                options: [
                    "1,000",
                    "10,000",
                    "5,000-7,000"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "What age do birds learn songs?",
                options: [
                    "Birth",
                    "Adulthood",
                    "Youth"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "How long can lobsters live?",
                options: [
                    "50 years",
                    "20 years",
                    "100+ years"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "Are Komodo dragons venomous?",
                options: [
                    "Yes",
                    "No",
                    "Only males"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How tall can llamas grow?",
                options: [
                    "4 feet",
                    "8 feet",
                    "6 feet"
                ],
                correct: 2
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "What DNA percentage do humans share with orangutans?",
                options: [
                    "85%",
                    "75%",
                    "99%",
                    "96.9%"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "How many degrees can owls rotate heads?",
                options: [
                    "90",
                    "270",
                    "180",
                    "360"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How many shark species exist?",
                options: [
                    "500+",
                    "5,000",
                    "50,000",
                    "50"
                ],
                correct: 3
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "How do lizards see UV light?",
                options: [
                    "Fourth color receptor",
                    "They can't",
                    "Through skin",
                    "Special lens"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How loud can cricket chirps be?",
                options: [
                    "20 dB",
                    "50 dB",
                    "120 dB",
                    "90 dB"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "What is unique about raccoon paws?",
                options: [
                    "Glow in dark",
                    "Poisonous",
                    "Webbed",
                    "Four times more receptors than humans"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How do penguins choose mates?",
                options: [
                    "Pebble gifting",
                    "Fighting",
                    "Random",
                    "Dancing"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How many color receptors do mantis shrimp have?",
                options: [
                    "3",
                    "50",
                    "16",
                    "12"
                ],
                correct: 3
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "How many teeth can crocodiles grow in lifetime?",
                options: [
                    "100",
                    "1,000",
                    "4,000",
                    "10,000"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How many muscles control hedgehog quills?",
                options: [
                    "5,000",
                    "50",
                    "500",
                    "50,000"
                ],
                correct: 2
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "What is an orangutan's arm span?",
                answer: "7 feet or 2.1 meters"
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "What is the smallest bird species?",
                answer: "Bee hummingbird at 2 inches"
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "At what dilution can sharks detect blood?",
                answer: "1 part per million"
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "What is the fastest lizard species?",
                answer: "Spiny-tailed iguana at 21 mph"
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How many times per second do cricket wings rub?",
                answer: "About 4-5 times"
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How many neurons do raccoons have?",
                answer: "438 million"
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How many species of penguins exist?",
                answer: "18 species"
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "What is the mantis shrimp punch speed?",
                answer: "50 mph or 80 km/h"
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How long can crocodiles hold their breath?",
                answer: "1-2 hours"
            }
        ]
    },
    7: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "Pandas eat bamboo.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Hummingbirds can fly backwards.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "Blue whales are the largest animals ever.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "Chameleons change color instantly.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "Only female mosquitoes bite.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "Kangaroos can't walk backwards.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "Eagles have excellent eyesight.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "Squids have beaks.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐍🐢",
                question: "All turtles can swim.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "Beavers build dams.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How much bamboo do pandas eat daily?",
                options: [
                    "26-84 lbs",
                    "5 lbs"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "Can hummingbirds hover in place?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How do blue whales communicate?",
                options: [
                    "Songs",
                    "Clicks"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "Why do female mosquitoes need blood?",
                options: [
                    "Egg production",
                    "Food"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "How do kangaroos move when not hopping?",
                options: [
                    "Crawl",
                    "Walk using tail"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How far can eagles see prey?",
                options: [
                    "2 miles",
                    "500 feet"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How do squids escape predators?",
                options: [
                    "Speed only",
                    "Ink cloud"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "Do sea turtles return to birthplace?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "What do beavers use to build dams?",
                options: [
                    "Wood and mud",
                    "Rocks"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "How strong are gorillas compared to humans?",
                options: [
                    "3x stronger",
                    "Same",
                    "10x stronger"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "How many feathers does a typical bird have?",
                options: [
                    "100",
                    "1,000",
                    "25,000"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How long can elephant seals hold breath?",
                options: [
                    "15 minutes",
                    "2 hours",
                    "1 hour"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "How many teeth can alligators have?",
                options: [
                    "80",
                    "120",
                    "40"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How many wings do mosquitoes have?",
                options: [
                    "6",
                    "4",
                    "2"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How powerful is wolf sense of smell?",
                options: [
                    "1,000x humans",
                    "100x humans",
                    "10x humans"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How long can flamingos stand on one leg?",
                options: [
                    "Minutes",
                    "Hours",
                    "Days"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How many tentacles does a squid have?",
                options: [
                    "10",
                    "6",
                    "8"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🦡🦫",
                question: "How long can pythons grow?",
                options: [
                    "10 feet",
                    "30+ feet",
                    "20 feet"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "How far can a skunk spray?",
                options: [
                    "5 feet",
                    "15 feet",
                    "10 feet"
                ],
                correct: 2
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "What DNA percentage do humans share with gorillas?",
                options: [
                    "99.9%",
                    "98.3%",
                    "92%",
                    "85%"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "What makes bird bones lightweight?",
                options: [
                    "Thin",
                    "Cartilage",
                    "Hollow with air sacs",
                    "Small"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How deep can elephant seals dive?",
                options: [
                    "500 feet",
                    "2,000 feet",
                    "5,000 feet",
                    "10,000 feet"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "What determines alligator egg gender?",
                options: [
                    "Genetics",
                    "Random",
                    "Location",
                    "Temperature"
                ],
                correct: 3
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "What is total ant biomass on Earth?",
                options: [
                    "Twice humans",
                    "Equal to all humans",
                    "10x humans",
                    "Half of humans"
                ],
                correct: 3
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How many hours do wolves sleep daily?",
                options: [
                    "4 hours",
                    "16 hours",
                    "8 hours",
                    "12 hours"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "How long do flamingos mate for?",
                options: [
                    "Year",
                    "Never pair",
                    "Season",
                    "Life"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "What color is lobster blood?",
                options: [
                    "Blue",
                    "Red",
                    "Green",
                    "Clear"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐍🐢",
                question: "How much pressure can pythons squeeze?",
                options: [
                    "60 PSI",
                    "120 PSI",
                    "30 PSI",
                    "90 PSI"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "Can foxes use Earth's magnetic field?",
                options: [
                    "Unknown",
                    "For hunting",
                    "No",
                    "For navigation"
                ],
                correct: 3
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How much can a silverback gorilla lift?",
                answer: "1,800 pounds or 815 kg"
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "What is a hummingbird's heart rate?",
                answer: "1,200 bpm"
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How many hearts does an octopus have?",
                answer: "3 or Three"
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "What is an alligator's bite force?",
                answer: "2,125 PSI"
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "What is the estimated ant population?",
                answer: "20 quadrillion"
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "How many hours do wolves travel per day?",
                answer: "8 hours or about 8 hours"
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How tall can flamingos grow?",
                answer: "5 feet or 1.5 meters"
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "What is the heaviest lobster caught?",
                answer: "44 pounds or 20 kg"
            },
            {
                topic: "Reptiles",
                emoji: "🦂🕷️",
                question: "What is the longest python recorded?",
                answer: "33 feet or 10 meters"
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How many teeth do foxes have?",
                answer: "42"
            }
        ]
    },
    8: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "Rhinos have horns made of hair.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "Parrots can mimic sounds.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "Pufferfish can inflate themselves.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "All lizards can regrow tails.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "Butterflies have four wings.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "Camels store fat in humps.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "Owls can turn heads 270 degrees.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "Sharks have cartilage instead of bones.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦡🦫",
                question: "All snakes lay eggs.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "Skunks can spray accurately.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "What are rhino horns made of?",
                options: [
                    "Keratin",
                    "Bone"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Can parrots understand meaning?",
                options: [
                    "Some can",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How do pufferfish inflate?",
                options: [
                    "Water",
                    "Air"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "How many times can lizards regrow tails?",
                options: [
                    "Once",
                    "Multiple times"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How many wings do butterflies have?",
                options: [
                    "4",
                    "2"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How long can camels go without water?",
                options: [
                    "2 months",
                    "1 week"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "When do owls hunt?",
                options: [
                    "Day",
                    "Night"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "Do pufferfish contain poison?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "Do some snakes give live birth?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How accurate is skunk spray?",
                options: [
                    "Random",
                    "Very accurate up to 10 feet"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How fast can rhinos run?",
                options: [
                    "50 mph",
                    "20 mph",
                    "35 mph"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "How long can macaws live?",
                options: [
                    "80 years",
                    "50 years",
                    "20 years"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How deadly is pufferfish toxin?",
                options: [
                    "Like bee sting",
                    "1,200x cyanide",
                    "Mild"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "How long can lizards hold their breath?",
                options: [
                    "10 minutes",
                    "30 minutes",
                    "1 hour"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How many species of butterflies exist?",
                options: [
                    "20,000",
                    "1,000",
                    "10,000"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "What temperature can camels tolerate?",
                options: [
                    "120°F",
                    "50°F",
                    "100°F"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "What is unique about owl ears?",
                options: [
                    "Asymmetrical placement",
                    "External",
                    "Very large"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How many bones do sharks have?",
                options: [
                    "100",
                    "0",
                    "300"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "What percentage of snakes give live birth?",
                options: [
                    "20%",
                    "10%",
                    "50%"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How many sprays can a skunk make?",
                options: [
                    "1-2",
                    "Unlimited",
                    "5-6"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "How many rhino species exist?",
                options: [
                    "5",
                    "2",
                    "20",
                    "10"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "What is parrot intelligence compared to?",
                options: [
                    "Cats",
                    "Fish",
                    "Dogs",
                    "5-year-old child"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "What do pufferfish use their teeth for?",
                options: [
                    "Fighting",
                    "Nothing",
                    "Display",
                    "Crushing shells"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "How many chambers do snake hearts have?",
                options: [
                    "4",
                    "3",
                    "2",
                    "5"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How many lenses in butterfly compound eyes?",
                options: [
                    "1,000",
                    "6,000",
                    "100",
                    "12,000"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How much water can a camel drink at once?",
                options: [
                    "30 gallons",
                    "10 gallons",
                    "100 gallons",
                    "60 gallons"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How many eyelids do owls have?",
                options: [
                    "1",
                    "2",
                    "4",
                    "3"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How long have sharks existed?",
                options: [
                    "450 million years",
                    "1 billion years",
                    "200 million years",
                    "50 million years"
                ],
                correct: 3
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "What percentage of snake venom is protein?",
                options: [
                    "100%",
                    "20%",
                    "50%",
                    "90%"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "What chemical makes skunk spray smell?",
                options: [
                    "Ammonia",
                    "Thiols",
                    "Sulfuric acid",
                    "Methane"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "How much can a white rhino weigh?",
                answer: "5,000 pounds or 2,300 kg"
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "What is the parrot vocabulary record?",
                answer: "Over 1,700 words"
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How many people can one pufferfish kill?",
                answer: "30 people"
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "How many lizard species exist?",
                answer: "6,000 or over 6,000"
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How many flowers does a butterfly visit daily?",
                answer: "Hundreds to thousands"
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How much can a camel carry?",
                answer: "900 pounds or 400 kg"
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "How many degrees can owls rotate their necks?",
                answer: "270 degrees"
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "How many teeth can a shark have in lifetime?",
                answer: "30,000 or over 30,000"
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "What is the longest snake species?",
                answer: "Reticulated python at 30+ feet"
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How far can skunk spray be detected?",
                answer: "1 mile or 1.6 km"
            }
        ]
    },
    9: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "Bison are the largest land mammals in North America.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "Parrots can learn to talk.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "Whales are the largest animals ever.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "Komodo dragons only live in Indonesia.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "Ladybugs eat aphids.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "Sea otters hold hands while sleeping.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "Eagles can see fish underwater.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "Hermit crabs use empty shells.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦂🕷️",
                question: "Pythons can unhinge their jaws.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "Sloths sleep hanging upside down.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "How much can a bison weigh?",
                options: [
                    "2,000 lbs",
                    "500 lbs"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "Can eagles see in color?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How much milk does a whale calf drink daily?",
                options: [
                    "100+ gallons",
                    "10 gallons"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "How do Komodo dragons hunt?",
                options: [
                    "Venom and tracking",
                    "Speed"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "What do ladybugs primarily eat?",
                options: [
                    "Leaves",
                    "Aphids"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "Why do otters hold hands?",
                options: [
                    "Avoid drifting apart",
                    "Affection"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "From what height can eagles spot fish?",
                options: [
                    "100 feet",
                    "1,000+ feet"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "Why do hermit crabs need shells?",
                options: [
                    "Fashion",
                    "Protection"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How do pythons incubate eggs?",
                options: [
                    "Coil around them",
                    "Leave them"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "How do kangaroos move when grazing?",
                options: [
                    "Walk using tail",
                    "Hop"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "How fast can bison run?",
                options: [
                    "50 mph",
                    "35 mph",
                    "20 mph"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "What is the record for parrot vocabulary?",
                options: [
                    "500 words",
                    "100 words",
                    "1,700+ words"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How many species of whales exist?",
                options: [
                    "50",
                    "90",
                    "20"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "How many teeth do Komodo dragons have?",
                options: [
                    "20",
                    "100",
                    "60"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How many mosquito species exist?",
                options: [
                    "3,500+",
                    "10,000",
                    "100"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How many bones do sea otters have?",
                options: [
                    "200",
                    "300",
                    "100"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "How far away can eagles see prey?",
                options: [
                    "2 miles",
                    "10 miles",
                    "1/2 mile"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "How often do hermit crabs change shells?",
                options: [
                    "As they grow",
                    "Never",
                    "Once"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "What percentage of python species are venomous?",
                options: [
                    "0%",
                    "100%",
                    "50%"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "What is a kangaroo's top hopping speed?",
                options: [
                    "50 mph",
                    "15 mph",
                    "35 mph"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "What role do bison play in ecosystems?",
                options: [
                    "Pest",
                    "Keystone species",
                    "Predator",
                    "None"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "What family do parrots belong to?",
                options: [
                    "Psittacidae",
                    "Corvidae",
                    "Accipitridae",
                    "Strigidae"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How do baleen whales produce sound?",
                options: [
                    "Larynx",
                    "Vocal cords",
                    "Blowholes",
                    "Unknown mechanism"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "What bacteria live in Komodo dragon saliva?",
                options: [
                    "5 strains",
                    "Beneficial only",
                    "50+ strains",
                    "None"
                ],
                correct: 3
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "What does mosquito saliva contain?",
                options: [
                    "Venom",
                    "Nothing",
                    "Anticoagulants",
                    "Sugar"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "What is unique about sea otter fur?",
                options: [
                    "Densest",
                    "Waterproof",
                    "Colorful",
                    "Longest"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How do parrots learn to talk?",
                options: [
                    "Mimicry",
                    "Training",
                    "Instinct",
                    "Both B and C"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "What type of eyes do crabs have?",
                options: [
                    "No eyes",
                    "Single lens",
                    "Simple",
                    "Compound"
                ],
                correct: 2
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "How do pythons generate heat for eggs?",
                options: [
                    "Metabolism",
                    "Can't",
                    "Sun only",
                    "Muscle contractions"
                ],
                correct: 3
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "What enables kangaroo hopping efficiency?",
                options: [
                    "Muscles",
                    "Elastic tendons",
                    "Light bones",
                    "Long legs"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "How many bison existed before European colonization?",
                answer: "30-60 million"
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "How many words can an African Grey Parrot learn?",
                answer: "1,000+ words"
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "What is the longest blue whale ever recorded?",
                answer: "110 feet or 33.5 meters"
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "What is a Komodo dragon's running speed?",
                answer: "12 mph or 20 km/h"
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How many deaths do mosquitoes cause annually?",
                answer: "700,000+"
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How many calories do sea otters eat daily?",
                answer: "7,500 calories"
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How far can an eagle fly in a day?",
                answer: "100+ miles"
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "What is the leg span of the Japanese spider crab?",
                answer: "12 feet or 3.7 meters"
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How much can a python squeeze?",
                answer: "90 PSI or 6 bar"
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "How high can a kangaroo jump?",
                answer: "10 feet or 3 meters"
            }
        ]
    },
    10: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "Dogs have better smell than humans.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Ducks have waterproof feathers.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "Pufferfish are poisonous.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "Crocodiles are older than dinosaurs.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "Flies can walk on ceilings.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "Leopards are excellent climbers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "The dodo bird is extinct.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "Octopuses can change texture.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐍🐢",
                question: "Turtles can live over 100 years.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "Camels store water in their humps.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How much better is a dog's smell?",
                options: [
                    "10x",
                    "10,000-100,000x"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "What makes duck feathers waterproof?",
                options: [
                    "Natural coating",
                    "Preen oil"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "What toxin do pufferfish contain?",
                options: [
                    "Tetrodotoxin",
                    "Cyanide"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "When did crocodiles appear?",
                options: [
                    "50 million years ago",
                    "200+ million years ago"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How do flies stick to ceilings?",
                options: [
                    "Suction",
                    "Sticky pads"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "Why do leopards drag prey into trees?",
                options: [
                    "Keep from scavengers",
                    "Fun"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "When did dodos go extinct?",
                options: [
                    "1500s",
                    "1600s"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How do octopuses change texture?",
                options: [
                    "Magic",
                    "Skin muscles"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "What is the oldest turtle age recorded?",
                options: [
                    "180+ years",
                    "100 years"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "What do camel humps store?",
                options: [
                    "Water",
                    "Fat"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "How many smell receptors do dogs have?",
                options: [
                    "300 million",
                    "10 million",
                    "1 billion"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "How many feathers does a duck have?",
                options: [
                    "50,000",
                    "14,000",
                    "1,000"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How toxic is tetrodotoxin?",
                options: [
                    "Mild",
                    "1,200x deadlier than cyanide",
                    "Like bee sting"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "How old can crocodiles live?",
                options: [
                    "150 years",
                    "30 years",
                    "70+ years"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How fast can flies react?",
                options: [
                    "Slower",
                    "7x faster",
                    "Same as humans"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How much weight can leopards carry up trees?",
                options: [
                    "3x body weight",
                    "Equal to body",
                    "Half body"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How tall were dodos?",
                options: [
                    "6 feet",
                    "3 feet",
                    "1 foot"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How fast can octopuses change appearance?",
                options: [
                    "10 seconds",
                    "Under 1 second",
                    "1 minute"
                ],
                correct: 2
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How fast can sea turtles swim?",
                options: [
                    "5 mph",
                    "20 mph",
                    "35 mph"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "How many hours do leopards sleep daily?",
                options: [
                    "16 hours",
                    "12 hours",
                    "8 hours"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "What brain area processes dog smell?",
                options: [
                    "Same as humans",
                    "Small area",
                    "Don't have one",
                    "40x larger than humans"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "How long can ducks stay underwater?",
                options: [
                    "5 minutes",
                    "30 minutes",
                    "1 minute",
                    "10 seconds"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How many pufferfish species are poisonous?",
                options: [
                    "Few",
                    "All",
                    "Most",
                    "None"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "What makes crocodilians unique among reptiles?",
                options: [
                    "Speed",
                    "Size",
                    "Four-chambered heart",
                    "Intelligence"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How many images per second can flies see?",
                options: [
                    "60",
                    "24",
                    "250",
                    "1,000"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "When do leopards prefer to hunt?",
                options: [
                    "Noon",
                    "Dusk",
                    "Dawn",
                    "Night"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "Where did dodos live?",
                options: [
                    "Mauritius",
                    "Galapagos",
                    "Madagascar",
                    "Hawaii"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "What percentage of octopus neurons are in arms?",
                options: [
                    "66%",
                    "90%",
                    "33%",
                    "10%"
                ],
                correct: 3
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "How do sea turtles navigate thousands of miles?",
                options: [
                    "Magnetic fields",
                    "Following others",
                    "Stars",
                    "Smell"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "What temperature range can camels tolerate?",
                options: [
                    "50°F",
                    "150°F",
                    "10°F",
                    "120°F"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How many olfactory receptors do dogs have?",
                answer: "220 million"
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "What is a duck's heart rate while flying?",
                answer: "400 bpm"
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How many people does one pufferfish have enough toxin to kill?",
                answer: "30 people"
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "How many teeth can a crocodile have in its lifetime?",
                answer: "4,000 or about 4,000"
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How fast do fly wings beat per second?",
                answer: "200 times"
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "What is a leopard's bite force?",
                answer: "310 PSI"
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How much did dodos weigh?",
                answer: "20-40 pounds or 9-18 kg"
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How toxic is pufferfish poison?",
                answer: "1,200 times more toxic than cyanide"
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "How long can crocodiles live?",
                answer: "70-100 years"
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How slow do sloths move?",
                answer: "0.15 mph or 0.24 km/h"
            }
        ]
    },
    11: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "Seals can sleep underwater.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "Parrots come in many colors.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "Lobsters can regenerate claws.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "Iguanas are herbivores.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "Ants never sleep.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "Sloths are slow movers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "Peacocks are male peafowl.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "Octopuses are invertebrates.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦡🦫",
                question: "Tortoises live on land.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "Skunks spray when threatened.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "How do seals stay warm in cold water?",
                options: [
                    "Blubber layer",
                    "Thick skin"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "What determines parrot color?",
                options: [
                    "Diet",
                    "Feather structure and pigments"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How long does claw regeneration take?",
                options: [
                    "Years",
                    "Weeks"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "What do iguanas eat?",
                options: [
                    "Insects",
                    "Plants"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "Do ants take short naps?",
                options: [
                    "Yes, hundreds daily",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How often do sloths defecate?",
                options: [
                    "Daily",
                    "Once a week"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "What are the eye-spots on peacock feathers for?",
                options: [
                    "Vision",
                    "Attracting mates"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "Are octopuses intelligent?",
                options: [
                    "Yes, highly",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "Where do tortoises lay eggs?",
                options: [
                    "In nests on land",
                    "In water"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "Do skunks warn before spraying?",
                options: [
                    "Yes, with body language",
                    "No"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How fast do beaver teeth grow per year?",
                options: [
                    "1 inch",
                    "4 inches",
                    "8 inches"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "How many colors can parrots see?",
                options: [
                    "7",
                    "4",
                    "3"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "How long can green iguanas grow?",
                options: [
                    "10 feet",
                    "2 feet",
                    "5 feet"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How long is each ant nap?",
                options: [
                    "1 minute",
                    "8 minutes",
                    "1 hour"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "What grows in sloth fur?",
                options: [
                    "Nothing",
                    "Moss",
                    "Algae"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How many tail feathers do peacocks display?",
                options: [
                    "150",
                    "50",
                    "300"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "How many suckers per arm does an octopus have?",
                options: [
                    "50",
                    "1,000",
                    "240"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "How do tortoises regulate temperature?",
                options: [
                    "Behavioral thermoregulation",
                    "Sweating",
                    "Can't"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How many times can a skunk spray in succession?",
                options: [
                    "5-6",
                    "Unlimited",
                    "1-2"
                ],
                correct: 2
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "What ecosystem role do beavers play?",
                options: [
                    "Pest",
                    "Predator",
                    "Keystone species",
                    "None"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "What pigment makes parrot feathers red?",
                options: [
                    "None",
                    "Carotenoids",
                    "Psittacofulvins",
                    "Melanin"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How do lobsters grow?",
                options: [
                    "Seasonal",
                    "Stop at maturity",
                    "Continuously",
                    "By molting"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "How many eyelids do iguanas have?",
                options: [
                    "1",
                    "4",
                    "2",
                    "3"
                ],
                correct: 3
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How long can a queen ant live?",
                options: [
                    "1 year",
                    "30 years",
                    "15 years",
                    "5 years"
                ],
                correct: 3
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How many hours do sloths sleep daily?",
                options: [
                    "22 hours",
                    "15 hours",
                    "8 hours",
                    "20 hours"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How are peacock colors produced?",
                options: [
                    "Minerals",
                    "Pigments",
                    "Diet",
                    "Structural coloration"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How many arms can an octopus regenerate?",
                options: [
                    "Multiple",
                    "One",
                    "All",
                    "None"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How many bones in a tortoise shell?",
                options: [
                    "100+",
                    "10",
                    "30",
                    "50+"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "What compound makes skunk spray so potent?",
                options: [
                    "Ammonia",
                    "Thiols",
                    "Sulfuric acid",
                    "Pheromones"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "What is the longest beaver dam ever recorded?",
                answer: "2,790 feet or 850 meters"
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "What is the vocabulary record for an African Grey parrot?",
                answer: "Over 1,000 words"
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "What is the heaviest lobster ever caught?",
                answer: "44 pounds or 20 kg"
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "How deep can marine iguanas dive?",
                answer: "30 feet or 9 meters"
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "What is the estimated total ant population on Earth?",
                answer: "20 quadrillion"
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How long does it take a sloth to digest food?",
                answer: "30 days or about a month"
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "How many eye-spots on a peacock's tail?",
                answer: "150-200"
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "How fast can an octopus change color?",
                answer: "0.3 seconds or under 1 second"
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "What is the oldest tortoise age recorded?",
                answer: "190 years"
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How far can skunk smell be detected?",
                answer: "1 mile or 1.6 km"
            }
        ]
    },
    12: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "Wolves are pack animals.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "Swans can be aggressive.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "Some snakes can fly.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "Butterflies migrate long distances.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "Bears eat both plants and meat.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "Flamingos filter feed.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "Dolphins are mammals.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦂🕷️",
                question: "Monitor lizards are carnivores.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "Kangaroos are marsupials.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "Can swans break bones with their wings?",
                options: [
                    "No, myth",
                    "Yes, can"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How do seals sleep underwater?",
                options: [
                    "Half brain at a time",
                    "Can't"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "How do flying snakes glide?",
                options: [
                    "Wings",
                    "Flattening body"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "Which butterfly migrates the farthest?",
                options: [
                    "Swallowtail",
                    "Monarch"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "What do bears eat most?",
                options: [
                    "Meat",
                    "Plants and berries"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "What do flamingos filter for?",
                options: [
                    "Fish",
                    "Algae and shrimp"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How are dolphin calves born?",
                options: [
                    "Tail first",
                    "Head first"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How do monitor lizards hunt?",
                options: [
                    "Active pursuit",
                    "Ambush"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "Where do joeys develop?",
                options: [
                    "In pouch",
                    "In womb"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "How far can wolves communicate by howling?",
                options: [
                    "20 miles",
                    "1 mile",
                    "6-10 miles"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "How many bones in a swan's neck?",
                options: [
                    "7",
                    "25",
                    "14"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "Do fish sleep?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "How far can flying snakes glide?",
                options: [
                    "100+ feet",
                    "10 feet",
                    "50 feet"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How far do monarchs migrate?",
                options: [
                    "500 miles",
                    "1,500 miles",
                    "3,000 miles"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "Are mammals warm-blooded?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "Can all birds fly?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "What frequency can dolphins hear?",
                options: [
                    "150 kHz",
                    "20 kHz",
                    "300 kHz"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "How long can Komodo monitors grow?",
                options: [
                    "7 feet",
                    "10 feet",
                    "4 feet"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How long does a joey stay in pouch?",
                options: [
                    "6-9 months",
                    "2 years",
                    "2 months"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How powerful is a wolf's sense of smell?",
                options: [
                    "10x humans",
                    "1,000x humans",
                    "Same",
                    "100x humans"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "How long do swans mate for?",
                options: [
                    "Never pair",
                    "Season",
                    "Life",
                    "Year"
                ],
                correct: 3
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "What genus are flying snakes?",
                options: [
                    "Cobra",
                    "Python",
                    "Viper",
                    "Chrysopelea"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How do monarchs navigate?",
                options: [
                    "Random",
                    "Following others",
                    "Sun compass and magnetic sense",
                    "Memory"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "What happens to bear heart rate during hibernation?",
                options: [
                    "Stops",
                    "Stays same",
                    "Increases",
                    "Slows to 8 bpm"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How many eyelids do flamingos have?",
                options: [
                    "4",
                    "3",
                    "2",
                    "1"
                ],
                correct: 3
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "What is unique about dolphin sleep?",
                options: [
                    "Unihemispheric",
                    "Sleep fully",
                    "Sleep-swim",
                    "Don't sleep"
                ],
                correct: 3
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "What do Komodo dragons use to kill prey?",
                options: [
                    "Speed",
                    "Venom",
                    "Claws",
                    "Crushing"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "What enables kangaroo hopping?",
                options: [
                    "Strong muscles",
                    "Long tail",
                    "Hollow bones",
                    "Elastic tendons"
                ],
                correct: 3
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "What makes a mammal unique?",
                answer: "Hair and milk production"
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "How many feathers does a swan have?",
                answer: "25,000"
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How do fish breathe?",
                answer: "Through gills"
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "What is a flying snake's glide speed?",
                answer: "25 mph or 40 km/h"
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How many generations does monarch migration take?",
                answer: "4 generations"
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How many calories does a bear eat before hibernation?",
                answer: "20,000 per day"
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How many different whistle sounds can dolphins make?",
                answer: "Over 100"
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How much can a Komodo dragon weigh?",
                answer: "300 pounds or 136 kg"
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "How many quills does a porcupine have?",
                answer: "30,000"
            }
        ]
    },
    13: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "Elephants have excellent memory.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Ducks have webbed feet.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "All sharks are dangerous.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "Sea turtles cry salt tears.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "Bees dance to communicate.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "Giraffes have long necks.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "Owls can rotate heads very far.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "Octopuses have beaks.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐍🐢",
                question: "Crocodiles are reptiles.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "Cheetahs are the fastest land animals.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How long can elephants remember?",
                options: [
                    "Days",
                    "Decades"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "Why do ducks have webbed feet?",
                options: [
                    "Fashion",
                    "Swimming efficiency"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "What do most sharks eat?",
                options: [
                    "Fish and seals",
                    "Humans"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "Why do sea turtles excrete salt?",
                options: [
                    "Waste",
                    "Regulate salt balance"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "What does the waggle dance tell bees?",
                options: [
                    "Food location",
                    "Danger"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "How many neck bones do giraffes have?",
                options: [
                    "14",
                    "7"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How far can owls rotate heads?",
                options: [
                    "180°",
                    "270°"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "Where is an octopus's beak located?",
                options: [
                    "Head",
                    "Center of arms"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "Can crocodiles see well at night?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How slowly do sloths digest food?",
                options: [
                    "1 day",
                    "1 month",
                    "1 week"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "How fast can ducks fly?",
                options: [
                    "30 mph",
                    "90 mph",
                    "60 mph"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How many pups can a shark have?",
                options: [
                    "10-80",
                    "200+",
                    "1-2"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "How deep can sea turtles dive?",
                options: [
                    "4,000 feet",
                    "100 feet",
                    "1,000 feet"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How many flowers must bees visit for 1 lb honey?",
                options: [
                    "2 million",
                    "10 million",
                    "10,000"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "How strong is octopus suction per sucker?",
                options: [
                    "1 lb",
                    "35 lbs",
                    "100 lbs"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How long can crocodiles stay underwater?",
                options: [
                    "10 minutes",
                    "2+ hours",
                    "1 hour"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "How many quills can a porcupine have?",
                options: [
                    "30,000",
                    "10,000",
                    "1,000"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "What is unique about elephant brains?",
                options: [
                    "Largest land animal brain",
                    "No wrinkles",
                    "Two brains",
                    "Small"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "What makes duck bones special?",
                options: [
                    "Hollow for buoyancy",
                    "Made of cartilage",
                    "Solid",
                    "Very heavy"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "What is shark skeleton made of?",
                options: [
                    "Chitin",
                    "Keratin",
                    "Cartilage",
                    "Bone"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "How do sea turtles excrete excess salt?",
                options: [
                    "Salt glands near eyes",
                    "Kidneys",
                    "Skin",
                    "Gills"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How many legs do insects have?",
                options: [
                    "6",
                    "8"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How many vertebrae in giraffe neck?",
                options: [
                    "7",
                    "28",
                    "21",
                    "14"
                ],
                correct: 3
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "Why is octopus blood blue?",
                options: [
                    "Genetics",
                    "Cold water",
                    "Copper-based hemocyanin",
                    "Diet"
                ],
                correct: 2
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "How do crocodiles regulate temperature?",
                options: [
                    "Behavioral thermoregulation",
                    "Panting",
                    "Shivering",
                    "Sweating"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "What enables cheetah speed?",
                options: [
                    "All of these",
                    "Flexible spine",
                    "Large lungs",
                    "Long legs"
                ],
                correct: 2
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How much does an elephant brain weigh?",
                answer: "11 pounds or 5 kg"
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "What is the fastest duck flight speed?",
                answer: "60 mph or 97 km/h"
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "What is the largest lizard species?",
                answer: "Komodo dragon"
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How many flowers for 1 pound of honey?",
                answer: "2 million"
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "Can amphibians live in water?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "Sample question about mammals?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            }
        ]
    },
    14: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "Deer shed their antlers annually.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "Owls are birds of prey.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "Octopuses can squeeze through small spaces.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "Geckos can climb glass.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "Bees communicate through dance.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "Otters use tools.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "Penguins can hold their breath.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐠🐟",
                question: "Sharks can sense electricity.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦂🕷️",
                question: "Snakes can dislocate jaws.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "Bears can climb trees.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "Why do male deer shed antlers?",
                options: [
                    "Hormonal cycle",
                    "Broken"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "What do owls regurgitate?",
                options: [
                    "Pellets",
                    "Seeds"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "Do octopuses have bones?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "What helps geckos climb?",
                options: [
                    "Suction",
                    "Tiny hairs"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "What dance do bees perform?",
                options: [
                    "Waggle dance",
                    "Circle dance"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "What do otters use as tools?",
                options: [
                    "Sticks",
                    "Rocks"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How long can penguins hold breath?",
                options: [
                    "20 minutes",
                    "5 minutes"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "What can sharks sense in water?",
                options: [
                    "Sound only",
                    "Electric fields"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦡🦫",
                question: "Do snakes unhinge their jaws?",
                options: [
                    "No, ligaments stretch",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "Which bears climb best?",
                options: [
                    "Grizzlies",
                    "Black bears"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "When do deer antlers fall off?",
                options: [
                    "Winter",
                    "Spring",
                    "Summer"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How many hearts do octopuses have?",
                options: [
                    "3",
                    "4",
                    "2"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "What are gecko toe pads called?",
                options: [
                    "Spatulae",
                    "Setae",
                    "Lamellae"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "What direction indicates food distance?",
                options: [
                    "Duration",
                    "Dance angle",
                    "Speed"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "What shellfish do otters eat?",
                options: [
                    "Crabs",
                    "Sea urchins",
                    "Clams"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐼🐨",
                question: "What's the deepest penguin dive?",
                options: [
                    "500 feet",
                    "1,850 feet",
                    "3,000 feet"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦒🦓",
                question: "What are shark electroreceptors called?",
                options: [
                    "Lateral line",
                    "Ampullae of Lorenzini",
                    "Barbels"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐧🦆",
                question: "How do snakes detect chemicals?",
                options: [
                    "Jacobson's organ",
                    "Skin",
                    "Nostrils"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦋🐛",
                question: "What bear species climbs most?",
                options: [
                    "Asian black bear",
                    "Sloth bear",
                    "Sun bear"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🐝🐜",
                question: "What hormone triggers antler shedding?",
                options: [
                    "Melatonin",
                    "Cortisol",
                    "Testosterone drop",
                    "Estrogen"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🦈🐙",
                question: "How many neck vertebrae do owls have?",
                options: [
                    "20",
                    "10",
                    "14",
                    "7"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐢🐊",
                question: "Where are octopus neurons located?",
                options: [
                    "2/3 in arms",
                    "All in brain",
                    "1/3 in arms",
                    "Half in arms"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦎🐍",
                question: "How many setae per gecko toe?",
                options: [
                    "Hundreds",
                    "Millions",
                    "Thousands",
                    "Billions"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🦉🦇",
                question: "Who discovered the waggle dance?",
                options: [
                    "Jane Goodall",
                    "Karl von Frisch",
                    "E.O. Wilson",
                    "Charles Darwin"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐺🦊",
                question: "What's the scientific name for sea otter?",
                options: [
                    "Aonyx capensis",
                    "Lontra canadensis",
                    "Enhydra lutris",
                    "Lutra lutra"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐵🦍",
                question: "Which penguin dives deepest?",
                options: [
                    "Gentoo",
                    "Adelie",
                    "Emperor",
                    "King"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦩🦚",
                question: "What phylum are sharks in?",
                options: [
                    "Echinodermata",
                    "Chordata",
                    "Arthropoda",
                    "Mollusca"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🐠🐟",
                question: "What class are snakes in?",
                options: [
                    "Mammalia",
                    "Reptilia",
                    "Amphibia",
                    "Aves"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦂🕷️",
                question: "What's a bear's climbing speed?",
                options: [
                    "50 feet/minute",
                    "100 feet/minute",
                    "25 feet/minute",
                    "200 feet/minute"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "What is the antler growth rate per day?",
                answer: "1 inch or 2.5 cm"
            },
            {
                topic: "Birds",
                emoji: "🦭🦦",
                question: "What is the owl's asymmetric ear adaptation?",
                answer: "Sound localization"
            },
            {
                topic: "Marine Life",
                emoji: "🐆🐅",
                question: "How many suckers does a giant Pacific octopus have?",
                answer: "2,000 or about 2,000"
            },
            {
                topic: "Reptiles",
                emoji: "🦎🐉",
                question: "What force do gecko setae use?",
                answer: "Van der Waals forces"
            },
            {
                topic: "Insects",
                emoji: "🐋🐚",
                question: "What is the waggle dance discovery year?",
                answer: "1967 or 1973"
            },
            {
                topic: "Birds",
                emoji: "🐃🐄",
                question: "What is the Emperor penguin's scientific name?",
                answer: "Aptenodytes forsteri"
            },
            {
                topic: "Marine Life",
                emoji: "🐑🐐",
                question: "What is a shark's sixth sense called?",
                answer: "Electroreception"
            },
            {
                topic: "Reptiles",
                emoji: "🐪🦙",
                question: "What protein makes up snake scales?",
                answer: "Keratin or Beta-keratin"
            },
            {
                topic: "Mammals",
                emoji: "🦡🦫",
                question: "What's the bear's taxonomic family?",
                answer: "Ursidae"
            }
        ]
    },
    15: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "Polar bears have white fur.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "Eagles have sharp talons.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "Sharks must keep swimming to breathe.",
                options: [
                    "Some must",
                    "All must"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "Turtles can live without their shells.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "Butterflies taste with their feet.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "Kangaroos can hop backwards.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "Parrots are social birds.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦂🕷️",
                question: "Chameleons change color.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "All bats drink blood.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "What color is polar bear fur?",
                options: [
                    "Transparent",
                    "White"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "How strong is an eagle's grip?",
                options: [
                    "50 PSI",
                    "400 PSI"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How do some sharks sleep?",
                options: [
                    "Can't sleep",
                    "Keep moving"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "Are reptiles cold-blooded?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How do kangaroos move slowly?",
                options: [
                    "Hop slowly",
                    "Walk with tail"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "Do parrots mate for life?",
                options: [
                    "No",
                    "Usually yes"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "Do hedgehogs have quills for protection?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "How far can polar bears swim?",
                options: [
                    "400+ miles",
                    "60 miles",
                    "10 miles"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "What is the oldest turtle age?",
                options: [
                    "190 years",
                    "300 years",
                    "100 years"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How fast can butterflies fly?",
                options: [
                    "5 mph",
                    "30 mph",
                    "12 mph"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "What force can a kangaroo kick generate?",
                options: [
                    "300 PSI",
                    "1,500 PSI",
                    "850 PSI"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "How many parrot species exist?",
                options: [
                    "100",
                    "800",
                    "400"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "How many neurons in octopus arms?",
                options: [
                    "10 million",
                    "100 million",
                    "300 million"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How many vampire bat species exist?",
                options: [
                    "3",
                    "1",
                    "10"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "How many teeth do polar bears have?",
                options: [
                    "20",
                    "42",
                    "32",
                    "50"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "What percentage of eagle body is skeleton?",
                options: [
                    "15%",
                    "5-6%",
                    "25%",
                    "35%"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦘🦌",
                question: "How many bones in a turtle shell?",
                options: [
                    "10",
                    "30",
                    "50+",
                    "100"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐺🦊",
                question: "How many eyes does a butterfly have?",
                options: [
                    "2",
                    "6",
                    "12,000",
                    "100"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "What makes kangaroo hopping efficient?",
                options: [
                    "Elastic tendons",
                    "Bones",
                    "Muscles",
                    "Tail"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "Can parrots pass mirror test?",
                options: [
                    "Some species",
                    "No",
                    "All species",
                    "Unknown"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "What cells enable chameleon color change?",
                options: [
                    "Fibroblasts",
                    "Melanocytes",
                    "Keratinocytes",
                    "Chromatophores"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How loud is a bat's echolocation?",
                options: [
                    "60 dB",
                    "200 dB",
                    "140 dB",
                    "20 dB"
                ],
                correct: 3
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "How much can a polar bear weigh?",
                answer: "1,500 pounds or 680 kg"
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "What is the fastest bird in level flight?",
                answer: "Common swift at 70 mph"
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "How many hearts does a cuttlefish have?",
                answer: "3 or Three"
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "How long can an anaconda grow?",
                answer: "30 feet or 9 meters"
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "How many ants are there per human on Earth?",
                answer: "1.6 million"
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How fast can a polar bear swim?",
                answer: "6 mph or 10 km/h"
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "How many times per second does a hummingbird's heart beat?",
                answer: "20 beats per second or 1,200 bpm"
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "What is the heaviest marine mammal?",
                answer: "Blue whale at 200 tons"
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "How many degrees can chameleon eyes rotate?",
                answer: "360 degrees independently"
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "How far can a hedgehog travel in one night?",
                answer: "2 miles or 3 km"
            }
        ]
    },
    16: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "Gorillas are mostly peaceful.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Birds have feathers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "Seals are mammals.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "Alligators live in freshwater.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "Ants are social insects.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "Wolves howl to communicate.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐧🦆",
                question: "Flamingos are born gray.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "Lobsters can live 100+ years.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐍🐢",
                question: "Pythons are constrictors.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "Foxes are members of the dog family.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "Why do birds have feathers?",
                options: [
                    "Beauty",
                    "Flight and insulation"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "How do seals sleep?",
                options: [
                    "Can't sleep",
                    "Half brain at a time"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "Why do wolves howl?",
                options: [
                    "Communication",
                    "Fun"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦂🕷️",
                question: "How do pythons kill prey?",
                options: [
                    "Venom",
                    "Constriction"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "Are foxes solitary or social?",
                options: [
                    "Always pack",
                    "Mostly solitary"
                ],
                correct: 0
            }
        ],
        hard: [],
        expert: [],
        extreme: [
            {
                topic: "Birds",
                emoji: "🦉🦇",
                question: "What are bird feathers made of?",
                answer: "Keratin"
            }
        ]
    },
    17: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "Mice have excellent hearing.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "Parrots are intelligent birds.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦎🐉",
                question: "Fish breathe through gills.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐋🐚",
                question: "Komodo dragons are venomous.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦜🦢",
                question: "Male crickets chirp to attract mates.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "Squirrels bury nuts for winter.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐪🦙",
                question: "Crabs can walk forward.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦡🦫",
                question: "Tortoises are slow movers.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "Badgers are nocturnal.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🐘🦏",
                question: "What frequency can mice hear?",
                options: [
                    "Up to 20 kHz",
                    "Up to 90 kHz"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦅🦜",
                question: "Can parrots solve puzzles?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "Do fish drink water?",
                options: [
                    "Saltwater fish do",
                    "No"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐊🦎",
                question: "Where is Komodo dragon venom located?",
                options: [
                    "Saliva glands",
                    "Lower jaw"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "What affects cricket chirp rate?",
                options: [
                    "Temperature",
                    "Mood"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "What is a tortoise's top speed?",
                options: [
                    "5 mph",
                    "0.3 mph"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "What are badger homes called?",
                options: [
                    "Setts",
                    "Dens"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🦒🦓",
                question: "What is a mouse's heart rate?",
                options: [
                    "600 bpm",
                    "300 bpm",
                    "100 bpm"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐙🦑",
                question: "Can fish see in color?",
                options: [
                    "All can",
                    "Some can",
                    "No"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🦩🦚",
                question: "How fast can ducks swim?",
                options: [
                    "2 mph",
                    "5 mph",
                    "8 mph"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦂🕷️",
                question: "How long can tortoises live?",
                options: [
                    "150+ years",
                    "100 years",
                    "50 years"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐨🦥",
                question: "How strong is a badger's bite?",
                options: [
                    "300 PSI",
                    "100 PSI",
                    "500 PSI"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦭🦦",
                question: "What DNA percentage do humans share with mice?",
                options: [
                    "98%",
                    "50%",
                    "85%",
                    "70%"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐆🐅",
                question: "What is unique about parrot bonding?",
                options: [
                    "Change yearly",
                    "No bonds",
                    "Mate for life",
                    "None"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How fast do squirrel teeth grow yearly?",
                options: [
                    "1 inch",
                    "3 inches",
                    "6 inches",
                    "12 inches"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐑🐐",
                question: "What type of sleep do ducks have?",
                options: [
                    "Constant",
                    "Unihemispheric",
                    "Normal",
                    "None"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🦡🦫",
                question: "Do tortoises have good memory?",
                options: [
                    "Yes, excellent",
                    "Average",
                    "No",
                    "Unknown"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦨🦔",
                question: "What family do badgers belong to?",
                options: [
                    "Felidae",
                    "Mustelidae",
                    "Canidae",
                    "Ursidae"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Marine Life",
                emoji: "🐬🐳",
                question: "How many fish species exist?",
                answer: "35,000 or over 35,000"
            },
            {
                topic: "Insects",
                emoji: "🐝🦋",
                question: "How many cricket species exist?",
                answer: "Over 900"
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "What is a squirrel's heart rate?",
                answer: "300-400 bpm"
            },
            {
                topic: "Marine Life",
                emoji: "🦈🐡",
                question: "What is the leg span of Japanese spider crab?",
                answer: "12 feet or 3.7 meters"
            },
            {
                topic: "Amphibians",
                emoji: "🐍🐢",
                question: "How much can a Galapagos tortoise weigh?",
                answer: "900 pounds or 410 kg"
            },
            {
                topic: "Mammals",
                emoji: "🐻🐼",
                question: "How fast can a badger run?",
                answer: "19 mph or 30 km/h"
            }
        ]
    },
    18: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "Otters use rocks as tools.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦩🦚",
                question: "How many hours do pandas eat daily?",
                options: [
                    "24 hours",
                    "12-16 hours",
                    "4 hours"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐠🐟",
                question: "What is unihemispheric sleep?",
                options: [
                    "Light sleep",
                    "No sleep",
                    "Half brain sleeps"
                ],
                correct: 2
            },
            {
                topic: "Reptiles",
                emoji: "🐨🦥",
                question: "What cells enable color change?",
                options: [
                    "Melanocytes",
                    "Chromatophores",
                    "Keratinocytes"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦭🦦",
                question: "How many deaths do mosquitoes cause yearly?",
                options: [
                    "100,000",
                    "700,000+",
                    "10,000"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🦎🐉",
                question: "What percentage is eagle skeleton of body?",
                options: [
                    "5-6%",
                    "25%",
                    "15%"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How many trees can a beaver cut yearly?",
                options: [
                    "500",
                    "50",
                    "200"
                ],
                correct: 2
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🐑🐐",
                question: "What digestive system do pandas have?",
                options: [
                    "Omnivore",
                    "Herbivore",
                    "None",
                    "Carnivore"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🐪🦙",
                question: "Which hemisphere sleeps in ducks?",
                options: [
                    "Alternates",
                    "Both",
                    "Right only",
                    "Left only"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦡🦫",
                question: "How far can blue whale calls travel?",
                options: [
                    "10 miles",
                    "1,000 miles",
                    "5,000 miles",
                    "100 miles"
                ],
                correct: 3
            },
            {
                topic: "Reptiles",
                emoji: "🦨🦔",
                question: "Can chameleons see in two directions?",
                options: [
                    "Yes, independently",
                    "No",
                    "Only backward",
                    "Only forward"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐘🦏",
                question: "What disease kills the most via mosquitoes?",
                options: [
                    "Dengue",
                    "Malaria",
                    "Yellow fever",
                    "Zika"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦅🦜",
                question: "How big is a newborn joey?",
                options: [
                    "1 foot",
                    "1 inch",
                    "6 inches",
                    "2 feet"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How long can beavers hold breath?",
                options: [
                    "5 min",
                    "2 min",
                    "30 min",
                    "15 min"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🐧🦆",
                question: "How much does an adult panda weigh?",
                answer: "220-330 pounds or 100-150 kg"
            },
            {
                topic: "Marine Life",
                emoji: "🐍🐢",
                question: "What is the longest blue whale recorded?",
                answer: "110 feet or 33.5 meters"
            },
            {
                topic: "Reptiles",
                emoji: "🐻🐼",
                question: "How long is a chameleon's tongue compared to body?",
                answer: "1.5-2 times body length"
            },
            {
                topic: "Insects",
                emoji: "🦒🦓",
                question: "How many times per second do mosquito wings beat?",
                answer: "300-600 times"
            },
            {
                topic: "Marine Life",
                emoji: "🦘🦌",
                question: "What is the longest giant squid recorded?",
                answer: "43 feet or 13 meters"
            },
            {
                topic: "Amphibians",
                emoji: "🐺🦊",
                question: "What is the oldest sea turtle recorded?",
                answer: "Over 100 years"
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "What is the longest beaver dam?",
                answer: "2,790 feet or 850 meters"
            }
        ]
    },
    19: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🐑🐐",
                question: "Tigers are the largest cats.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐪🦙",
                question: "Eagles build large nests.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦡🦫",
                question: "Whales sing songs.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦨🦔",
                question: "Crocodiles can live in both fresh and salt water.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐘🦏",
                question: "Mosquitoes are attracted to carbon dioxide.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦅🦜",
                question: "Lions live in groups called prides.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐬🐳",
                question: "Some parrots can live 80+ years.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐊🦎",
                question: "Squids have the largest eyes in the animal kingdom.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐝🦋",
                question: "Anacondas are the heaviest snakes.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "Kangaroos are native to Australia.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Mammals",
                emoji: "🐧🦆",
                question: "How much can a tiger weigh?",
                options: [
                    "600 lbs",
                    "200 lbs"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦈🐡",
                question: "How heavy can eagle nests become?",
                options: [
                    "2,000 lbs",
                    "50 lbs"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐍🐢",
                question: "Why do whales sing?",
                options: [
                    "Communication and mating",
                    "Fun"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐻🐼",
                question: "Which crocodile lives in saltwater?",
                options: [
                    "Saltwater crocodile",
                    "American"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦒🦓",
                question: "What else attracts mosquitoes?",
                options: [
                    "Light",
                    "Body heat and odor"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦉🦇",
                question: "Who leads a lion pride?",
                options: [
                    "Male",
                    "Female"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐙🦑",
                question: "Can parrots recognize themselves in mirrors?",
                options: [
                    "No",
                    "Some can"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦘🦌",
                question: "How large can giant squid eyes be?",
                options: [
                    "5 inches",
                    "10 inches"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🐺🦊",
                question: "Can anacondas swim?",
                options: [
                    "Yes, very well",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "How do kangaroos move efficiently?",
                options: [
                    "Hopping",
                    "Running"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Birds",
                emoji: "🐠🐟",
                question: "How wide can eagle nests be?",
                options: [
                    "6 feet",
                    "3 feet",
                    "10 feet"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🦂🕷️",
                question: "How far can whale songs travel?",
                options: [
                    "10 miles",
                    "1,000+ miles",
                    "100 miles"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🦭🦦",
                question: "How many people do mosquitoes kill yearly?",
                options: [
                    "100,000",
                    "10,000",
                    "700,000+"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐆🐅",
                question: "How far can a lion's roar be heard?",
                options: [
                    "5 miles",
                    "1 mile",
                    "10 miles"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐋🐚",
                question: "How long can giant squids grow?",
                options: [
                    "20 feet",
                    "43 feet",
                    "80 feet"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🦜🦢",
                question: "How much can an anaconda weigh?",
                options: [
                    "300 lbs",
                    "550 lbs",
                    "100 lbs"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🐑🐐",
                question: "Can tigers swim long distances?",
                options: [
                    "Never",
                    "Yes, up to 15 miles",
                    "Only short",
                    "No"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🐪🦙",
                question: "How many eaglets typically survive per nest?",
                options: [
                    "None",
                    "All",
                    "Two",
                    "Usually one"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🦨🦔",
                question: "How many bones in a crocodile's body?",
                options: [
                    "100",
                    "200",
                    "400",
                    "300"
                ],
                correct: 1
            },
            {
                topic: "Insects",
                emoji: "🐘🦏",
                question: "What is the deadliest animal to humans?",
                options: [
                    "Sharks",
                    "Snakes",
                    "Lions",
                    "Mosquitoes"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🐬🐳",
                question: "What makes parrots so intelligent?",
                options: [
                    "Large brain",
                    "Social behavior",
                    "Many neurons",
                    "Brain-to-body ratio similar to primates"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🐊🦎",
                question: "What does a squid use its beak for?",
                options: [
                    "Crushing prey",
                    "Communication",
                    "Grooming",
                    "Defense"
                ],
                correct: 0
            },
            {
                topic: "Amphibians",
                emoji: "🐝🦋",
                question: "What is the longest anaconda recorded?",
                options: [
                    "15 feet",
                    "25 feet",
                    "50 feet",
                    "33 feet"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "What makes kangaroo hopping so efficient?",
                options: [
                    "Strong muscles",
                    "Long tail",
                    "Light bones",
                    "Elastic tendons store energy"
                ],
                correct: 3
            }
        ],
        extreme: [
            {
                topic: "Birds",
                emoji: "🦈🐡",
                question: "What is the largest eagle nest ever recorded?",
                answer: "9.5 feet wide, 20 feet deep"
            },
            {
                topic: "Marine Life",
                emoji: "🐍🐢",
                question: "What is the longest blue whale ever measured?",
                answer: "110 feet or 33.5 meters"
            },
            {
                topic: "Amphibians",
                emoji: "🐺🦊",
                question: "What is the heaviest anaconda recorded?",
                answer: "550 pounds or 250 kg"
            },
            {
                topic: "Mammals",
                emoji: "🐵🦍",
                question: "How long can pandas live?",
                answer: "20-30 years in wild"
            }
        ]
    },
    20: {
        easy: [
            {
                topic: "Mammals",
                emoji: "🦩🦚",
                question: "Pandas eat mainly bamboo.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🐠🐟",
                question: "Flamingos get their color from their diet.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦂🕷️",
                question: "Clownfish live in sea anemones.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🐨🦥",
                question: "Iguanas can swim.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦭🦦",
                question: "Butterflies only live a few weeks.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐆🐅",
                question: "Hippos can hold their breath underwater.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birds",
                emoji: "🦎🐉",
                question: "Ducks are waterfowl.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐋🐚",
                question: "Crabs have hard shells.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦜🦢",
                question: "Sea turtles migrate long distances.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "Elephants are the largest land animals.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Birds",
                emoji: "🐪🦙",
                question: "What pigment makes flamingos pink?",
                options: [
                    "Melanin",
                    "Carotenoids"
                ],
                correct: 0
            },
            {
                topic: "Marine Life",
                emoji: "🦡🦫",
                question: "How are clownfish protected from anemone stings?",
                options: [
                    "Thick skin",
                    "Mucus coating"
                ],
                correct: 0
            },
            {
                topic: "Reptiles",
                emoji: "🦨🦔",
                question: "Which iguana species swims in the ocean?",
                options: [
                    "Marine iguana",
                    "Green iguana"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🐘🦏",
                question: "What do adult butterflies primarily eat?",
                options: [
                    "Leaves",
                    "Nectar"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🦅🦜",
                question: "How long can hippos hold their breath?",
                options: [
                    "2 minutes",
                    "5 minutes"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🐬🐳",
                question: "What makes ducks buoyant?",
                options: [
                    "Hollow bones",
                    "Air sacs and waterproof feathers"
                ],
                correct: 1
            },
            {
                topic: "Marine Life",
                emoji: "🐊🦎",
                question: "Why do crabs molt?",
                options: [
                    "To grow",
                    "To reproduce"
                ],
                correct: 0
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How many muscles are in an elephant's trunk?",
                options: [
                    "100",
                    "40,000+"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Mammals",
                emoji: "🐧🦆",
                question: "How many hours do pandas spend eating?",
                options: [
                    "12-16 hours",
                    "4-6 hours",
                    "20-24 hours"
                ],
                correct: 0
            },
            {
                topic: "Insects",
                emoji: "🦒🦓",
                question: "How far can monarch butterflies migrate?",
                options: [
                    "3,000+ miles",
                    "1,500 miles",
                    "500 miles"
                ],
                correct: 2
            },
            {
                topic: "Mammals",
                emoji: "🦉🦇",
                question: "How long are hippo canine teeth?",
                options: [
                    "6 inches",
                    "20 inches",
                    "12 inches"
                ],
                correct: 2
            },
            {
                topic: "Birds",
                emoji: "🐙🦑",
                question: "How do ducks sleep safely on water?",
                options: [
                    "Float unconsciously",
                    "Unihemispheric sleep",
                    "Don't sleep"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦘🦌",
                question: "How many legs do crabs have?",
                options: [
                    "10",
                    "8",
                    "6"
                ],
                correct: 1
            },
            {
                topic: "Amphibians",
                emoji: "🐺🦊",
                question: "How many eggs can a sea turtle lay at once?",
                options: [
                    "10-20",
                    "100-200",
                    "50-100"
                ],
                correct: 2
            }
        ],
        expert: [
            {
                topic: "Mammals",
                emoji: "🦩🦚",
                question: "How many pandas are left in the wild?",
                options: [
                    "500",
                    "10,000",
                    "5,000",
                    "1,800"
                ],
                correct: 3
            },
            {
                topic: "Birds",
                emoji: "🐠🐟",
                question: "How many flamingo species exist?",
                options: [
                    "6",
                    "4",
                    "2",
                    "10"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🦂🕷️",
                question: "What type of symbiosis do clownfish and anemones have?",
                options: [
                    "Parasitism",
                    "Mutualism",
                    "Commensalism",
                    "Competition"
                ],
                correct: 1
            },
            {
                topic: "Reptiles",
                emoji: "🐨🦥",
                question: "How do marine iguanas warm up after diving?",
                options: [
                    "Internal heat",
                    "Group huddles",
                    "Basking in sun",
                    "Shivering"
                ],
                correct: 2
            },
            {
                topic: "Insects",
                emoji: "🦭🦦",
                question: "How many lenses in a butterfly's compound eye?",
                options: [
                    "6,000",
                    "12,000",
                    "100",
                    "1,000"
                ],
                correct: 3
            },
            {
                topic: "Mammals",
                emoji: "🐆🐅",
                question: "General animal question?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Birds",
                emoji: "🦎🐉",
                question: "Which brain hemisphere stays awake in ducks?",
                options: [
                    "Both partially",
                    "Right",
                    "Left",
                    "Alternates"
                ],
                correct: 2
            },
            {
                topic: "Marine Life",
                emoji: "🐋🐚",
                question: "What color is crab blood?",
                options: [
                    "Red",
                    "Green",
                    "Blue",
                    "Clear"
                ],
                correct: 2
            },
            {
                topic: "Amphibians",
                emoji: "🦜🦢",
                question: "What determines sea turtle egg gender?",
                options: [
                    "Location",
                    "Incubation temperature",
                    "Time of year",
                    "Genetics"
                ],
                correct: 1
            },
            {
                topic: "Mammals",
                emoji: "🐃🐄",
                question: "How much does an elephant's brain weigh?",
                options: [
                    "2 lbs",
                    "5 lbs",
                    "11 lbs",
                    "20 lbs"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Mammals",
                emoji: "🐑🐐",
                question: "How much does an adult giant panda weigh?",
                answer: "220-330 pounds or 100-150 kg"
            },
            {
                topic: "Birds",
                emoji: "🐪🦙",
                question: "How many eye-spots does a peacock have on its train?",
                answer: "150-200"
            },
            {
                topic: "Reptiles",
                emoji: "🦨🦔",
                question: "How long can marine iguanas stop their heartbeat?",
                answer: "Up to 45 minutes"
            },
            {
                topic: "Insects",
                emoji: "🐘🦏",
                question: "How many flowers does a butterfly visit per day?",
                answer: "Hundreds to thousands"
            },
            {
                topic: "Mammals",
                emoji: "🦅🦜",
                question: "How long can hippos stay underwater?",
                answer: "5 minutes or about 5 minutes"
            },
            {
                topic: "Birds",
                emoji: "🐬🐳",
                question: "How many feathers does a mallard duck have?",
                answer: "About 14,000"
            },
            {
                topic: "Amphibians",
                emoji: "🐝🦋",
                question: "How far do some sea turtles migrate?",
                answer: "10,000 miles or 16,000 km"
            },
            {
                topic: "Mammals",
                emoji: "🦁🐯",
                question: "How far can lions roar be heard?",
                answer: "5 miles or 8 km"
            }
        ]
    }
}

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['animals'] = animalsQuestions;
}


