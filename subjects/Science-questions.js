/**
 * WPCode Snippet #1: Science Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 10
 *
 * COPY ALL CODE BELOW
 */

const scienceQuestions = {
    1: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "DNA stands for Deoxyribonucleic Acid.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Light travels faster than sound.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Water is made of hydrogen and oxygen.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "The Earth is the largest planet in our solar system.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "The human heart has four chambers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Heat always flows from hot to cold.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Diamond is made of carbon.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "The Sun is a star.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Bones are stronger than steel by weight.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Sound cannot travel through a vacuum.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is the powerhouse of the cell?",
                options: [
                    "Nucleus",
                    "Mitochondria"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What force keeps us on the ground?",
                options: [
                    "Magnetism",
                    "Gravity"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is the chemical formula for table salt?",
                options: [
                    "NaCl",
                    "KCl"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What causes tides on Earth?",
                options: [
                    "Sun's heat",
                    "Moon's gravity"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What process do plants use to make food?",
                options: [
                    "Respiration",
                    "Photosynthesis"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What splits white light into colors?",
                options: [
                    "Prism",
                    "Lens"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What gas do plants absorb from air?",
                options: [
                    "Nitrogen",
                    "Carbon dioxide"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "Which planet has rings?",
                options: [
                    "Mars",
                    "Saturn"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is the control center of the body?",
                options: [
                    "Heart",
                    "Brain"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is the unit of electrical resistance?",
                options: [
                    "Volt",
                    "Ohm"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is the process of cell division called?",
                options: [
                    "Meiosis",
                    "Mitosis",
                    "Osmosis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is the unit of force?",
                options: [
                    "Newton",
                    "Watt",
                    "Joule"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the pH of pure water?",
                options: [
                    "7",
                    "0",
                    "14"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "How many planets are in our solar system?",
                options: [
                    "8",
                    "9",
                    "7"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "Which blood type is the universal donor?",
                options: [
                    "AB positive",
                    "O negative",
                    "A positive"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "At what temperature does water boil (Celsius)?",
                options: [
                    "0°C",
                    "100°C",
                    "50°C"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the chemical symbol for gold?",
                options: [
                    "Ag",
                    "Fe",
                    "Au"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the closest star to Earth?",
                options: [
                    "Sirius",
                    "Proxima Centauri",
                    "The Sun"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "How many bones are in the adult human body?",
                options: [
                    "206",
                    "226",
                    "186"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is the speed of sound in air (approximately)?",
                options: [
                    "300 m/s",
                    "343 m/s",
                    "400 m/s"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What does RNA stand for?",
                options: [
                    "Ribonucleic Acid",
                    "Ribo Nucleotide Acid",
                    "Ribose Nucleic Acid",
                    "Radical Nucleic Acid"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is Einstein's famous equation?",
                options: [
                    "V=IR",
                    "a²+b²=c²",
                    "E=mc²",
                    "F=ma"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "What is the atomic number of carbon?",
                options: [
                    "8",
                    "6",
                    "14",
                    "12"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "How long does it take for Earth to orbit the Sun?",
                options: [
                    "360 days",
                    "364 days",
                    "366 days",
                    "365.25 days"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀❤️",
                question: "What is the largest organ in the human body?",
                options: [
                    "Brain",
                    "Liver",
                    "Heart",
                    "Skin"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️🔥",
                question: "What is absolute zero in Celsius?",
                options: [
                    "0°C",
                    "-100°C",
                    "-273.15°C",
                    "-200°C"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎💍",
                question: "What is the most abundant element in the universe?",
                options: [
                    "Hydrogen",
                    "Carbon",
                    "Oxygen",
                    "Helium"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️⭐",
                question: "What is a light-year?",
                options: [
                    "Distance light travels in a year",
                    "A year on a light planet",
                    "Speed of light",
                    "Time for light to reach Earth"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🦷",
                question: "What is the study of plants called?",
                options: [
                    "Biology",
                    "Zoology",
                    "Botany",
                    "Ecology"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊🎵",
                question: "What causes sound waves?",
                options: [
                    "Vibrations",
                    "Pressure",
                    "Heat",
                    "Light"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "In what year was the structure of DNA discovered?",
                answer: "1953"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Name the scientist who formulated the three laws of motion",
                answer: "Isaac Newton"
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "What is Avogadro's number?",
                answer: "6.02 × 10²³ or 6.022 × 10²³"
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "What is the name of our galaxy?",
                answer: "Milky Way"
            },
            {
                topic: "Biology",
                emoji: "🫀❤️",
                question: "How many chambers does the human heart have?",
                answer: "4 or Four"
            },
            {
                topic: "Physics",
                emoji: "🌡️🔥",
                question: "What does the first law of thermodynamics state?",
                answer: "Energy cannot be created or destroyed, only converted"
            },
            {
                topic: "Chemistry",
                emoji: "💎💍",
                question: "What property is used to organize the periodic table?",
                answer: "Atomic number"
            },
            {
                topic: "Astronomy",
                emoji: "☀️⭐",
                question: "Name the largest planet in our solar system",
                answer: "Jupiter"
            },
            {
                topic: "Biology",
                emoji: "🦴🦷",
                question: "What percentage of the human body is water?",
                answer: "60% or About 60%"
            },
            {
                topic: "Physics",
                emoji: "🔊🎵",
                question: "What is the Doppler effect?",
                answer: "Change in frequency due to motion or relative motion"
            }
        ]
    },
    2: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Photosynthesis occurs in the chloroplasts.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Water boils at 100 degrees Celsius at sea level.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Ice is less dense than liquid water.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "There are billions of galaxies in the universe.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Bees help in pollination.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Light is a form of energy.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Fire needs oxygen to burn.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Stars produce their own light.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Reptiles are cold-blooded animals.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Magnets have north and south poles.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What organ is responsible for breathing?",
                options: [
                    "Liver",
                    "Lungs"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is the basic unit of mass?",
                options: [
                    "Kilogram",
                    "Meter"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is the smallest unit of an element?",
                options: [
                    "Molecule",
                    "Atom"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What phase is when the moon is not visible?",
                options: [
                    "Full Moon",
                    "New Moon"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What connects muscles to bones?",
                options: [
                    "Tendons",
                    "Ligaments"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is the freezing point of water in Celsius?",
                options: [
                    "32°C",
                    "0°C"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is the chemical formula for water?",
                options: [
                    "H₂O",
                    "CO₂"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is Mars known as?",
                options: [
                    "Blue Planet",
                    "Red Planet"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What part of the eye gives it color?",
                options: [
                    "Pupil",
                    "Iris"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is the flow of electrons called?",
                options: [
                    "Voltage",
                    "Electric current"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What protein carries oxygen in blood?",
                options: [
                    "Insulin",
                    "Hemoglobin",
                    "Collagen"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "How many colors are in a rainbow?",
                options: [
                    "7",
                    "5",
                    "6"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the pH of a neutral solution?",
                options: [
                    "14",
                    "0",
                    "7"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "How many moons does Earth have?",
                options: [
                    "2",
                    "0",
                    "1"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "How many chromosomes do humans have?",
                options: [
                    "46",
                    "92",
                    "23"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is the SI unit of velocity?",
                options: [
                    "m/s",
                    "km/h",
                    "m/s²"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the hardest natural substance?",
                options: [
                    "Quartz",
                    "Steel",
                    "Diamond"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What layer protects Earth from UV rays?",
                options: [
                    "Ionosphere",
                    "Ozone layer",
                    "Atmosphere"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "How many teeth does an adult human have?",
                options: [
                    "28",
                    "32",
                    "30"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is the unit of frequency?",
                options: [
                    "Decibel",
                    "Hertz",
                    "Watt"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🧬💊",
                question: "What type of cell division produces gametes?",
                options: [
                    "Mitosis",
                    "Binary fission",
                    "Meiosis",
                    "Budding"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the SI unit of electric charge?",
                options: [
                    "Volt",
                    "Coulomb",
                    "Ampere",
                    "Ohm"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the atomic mass of hydrogen?",
                options: [
                    "1",
                    "2",
                    "0",
                    "4"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌙🌍",
                question: "How long does the Moon take to orbit Earth?",
                options: [
                    "30 days",
                    "24 hours",
                    "365 days",
                    "27.3 days"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "What is the normal human heart rate (bpm)?",
                options: [
                    "60-100",
                    "50-70",
                    "100-120",
                    "40-60"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌊📡",
                question: "What type of wave is light?",
                options: [
                    "Mechanical",
                    "Longitudinal",
                    "Electromagnetic",
                    "Sound"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧊💧",
                question: "What is the process of solid to gas called?",
                options: [
                    "Evaporation",
                    "Melting",
                    "Condensation",
                    "Sublimation"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🔥",
                question: "What is the Sun mainly made of?",
                options: [
                    "Oxygen",
                    "Hydrogen",
                    "Helium",
                    "Carbon"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠🧬",
                question: "What is the basic unit of the nervous system?",
                options: [
                    "Cell",
                    "Neuron",
                    "Nephron",
                    "Tissue"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🚀🌌",
                question: "What is the escape velocity from Earth?",
                options: [
                    "11.2 km/s",
                    "9.8 m/s",
                    "15 km/s",
                    "7.9 km/s"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🌿🍃",
                question: "Name the green pigment in plants that captures light",
                answer: "Chlorophyll"
            },
            {
                topic: "Physics",
                emoji: "🌡️📐",
                question: "What is the SI unit of temperature?",
                answer: "Kelvin"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the name of the scientist who developed the periodic table?",
                answer: "Dmitri Mendeleev or Mendeleev"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the name of the telescope launched in 1990?",
                answer: "Hubble Space Telescope or Hubble"
            },
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What does ATP stand for?",
                answer: "Adenosine Triphosphate"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "Who invented the light bulb?",
                answer: "Thomas Edison or Edison"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the molecular weight of water?",
                answer: "18 or 18 g/mol"
            },
            {
                topic: "Astronomy",
                emoji: "🌍🔄",
                question: "How long does Earth take to complete one rotation?",
                answer: "24 hours or 1 day"
            },
            {
                topic: "Biology",
                emoji: "🦴🏥",
                question: "What is the longest bone in the human body?",
                answer: "Femur"
            },
            {
                topic: "Physics",
                emoji: "🌊🔊",
                question: "What is the speed of light in vacuum (in m/s)?",
                answer: "299,792,458 m/s or 3 × 10⁸ m/s"
            }
        ]
    },
    3: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Trees produce oxygen during photosynthesis.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Objects in motion tend to stay in motion.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Carbon dioxide makes soda fizzy.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Meteors are also called shooting stars.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Snakes are vertebrates.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "A lever is a simple machine.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Citrus fruits contain citric acid.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "The Moon goes through phases.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Frogs are amphibians.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Time is measured in seconds.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is the study of cells called?",
                options: [
                    "Cytology",
                    "Geology"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What determines the pitch of sound?",
                options: [
                    "Frequency",
                    "Amplitude"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What color does litmus paper turn in acid?",
                options: [
                    "Blue",
                    "Red"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is the study of space called?",
                options: [
                    "Astrology",
                    "Astronomy"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What part of the flower produces pollen?",
                options: [
                    "Pistil",
                    "Stamen"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What type of energy does a rock at a cliff have?",
                options: [
                    "Potential",
                    "Kinetic"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "Is melting ice a physical or chemical change?",
                options: [
                    "Chemical",
                    "Physical"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What causes day and night on Earth?",
                options: [
                    "Revolution",
                    "Rotation"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is the transformation of a caterpillar called?",
                options: [
                    "Metamorphosis",
                    "Evolution"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What force acts against motion?",
                options: [
                    "Momentum",
                    "Friction"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is the genetic material in cells?",
                options: [
                    "Protein",
                    "Lipid",
                    "DNA"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is the SI unit of energy?",
                options: [
                    "Newton",
                    "Watt",
                    "Joule"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "How many electrons does carbon have?",
                options: [
                    "6",
                    "12",
                    "8"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "How long is a lunar cycle?",
                options: [
                    "29.5 days",
                    "28 days",
                    "30 days"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "Which chamber pumps blood to the body?",
                options: [
                    "Right atrium",
                    "Left ventricle",
                    "Left atrium"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is the refraction of light?",
                options: [
                    "Bouncing of light",
                    "Bending of light",
                    "Absorption of light"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is formed when acid reacts with base?",
                options: [
                    "Gas",
                    "Heat only",
                    "Salt and water"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "How many planets have rings?",
                options: [
                    "2",
                    "4",
                    "1"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What protects the brain?",
                options: [
                    "Ribs",
                    "Spine",
                    "Skull"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is the loudness of sound measured in?",
                options: [
                    "Decibels",
                    "Hertz",
                    "Watts"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🔬",
                question: "What type of organism is a bacteria?",
                options: [
                    "Fungi",
                    "Eukaryote",
                    "Prokaryote",
                    "Virus"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔋⚡",
                question: "What is the SI unit of power?",
                options: [
                    "Watt",
                    "Volt",
                    "Ampere",
                    "Joule"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔥💨",
                question: "What gas is produced when metals react with acid?",
                options: [
                    "Nitrogen",
                    "Oxygen",
                    "Hydrogen",
                    "Carbon dioxide"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the brightest star in the night sky?",
                options: [
                    "Sirius",
                    "Vega",
                    "Polaris",
                    "Betelgeuse"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌱🧬",
                question: "What is the study of heredity called?",
                options: [
                    "Taxonomy",
                    "Evolution",
                    "Genetics",
                    "Ecology"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🎯🏹",
                question: "What is Newton's first law also called?",
                options: [
                    "Law of Gravity",
                    "Law of Inertia",
                    "Law of Acceleration",
                    "Law of Action"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is the most electronegative element?",
                options: [
                    "Oxygen",
                    "Chlorine",
                    "Nitrogen",
                    "Fluorine"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌎",
                question: "What percentage of Earth is covered by water?",
                options: [
                    "71%",
                    "80%",
                    "50%",
                    "60%"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔬🧪",
                question: "What is the liquid part of blood called?",
                options: [
                    "Plasma",
                    "Lymph",
                    "Hemoglobin",
                    "Serum"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌡️🔥",
                question: "What is the specific heat capacity of water?",
                options: [
                    "1.00 J/g°C",
                    "2.09 J/g°C",
                    "4.18 J/g°C",
                    "3.14 J/g°C"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is the name of the sugar found in DNA?",
                answer: "Deoxyribose"
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the charge of an electron in coulombs?",
                answer: "-1.6 × 10⁻¹⁹ C or 1.6 × 10⁻¹⁹ C"
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "What is the most abundant gas in Earth's atmosphere?",
                answer: "Nitrogen"
            },
            {
                topic: "Astronomy",
                emoji: "🌞☀️",
                question: "What is the surface temperature of the Sun (approximately)?",
                answer: "5,500°C or 5,778 K"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the smallest bone in the human body?",
                answer: "Stapes or Stirrup"
            },
            {
                topic: "Physics",
                emoji: "🌊🔊",
                question: "What is the principle that states an object submerged in fluid experiences buoyant force?",
                answer: "Archimedes Principle"
            },
            {
                topic: "Chemistry",
                emoji: "💎🔷",
                question: "What is the chemical formula for glucose?",
                answer: "C₆H₁₂O₆"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the name of the nearest galaxy to the Milky Way?",
                answer: "Andromeda"
            },
            {
                topic: "Biology",
                emoji: "🫁💨",
                question: "How many lobes does the right lung have?",
                answer: "3 or Three"
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is the phenomenon where light bends around corners?",
                answer: "Diffraction"
            }
        ]
    },
    4: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "The human skeleton has over 200 bones.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Gravity pulls objects toward Earth's center.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Air is a mixture of gases.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Stars twinkle because of Earth's atmosphere.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Enamel is the hardest substance in the human body.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "The Moon reflects light from the Sun.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Pure water is a good conductor of electricity.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Earth is the third planet from the Sun.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Flowers attract pollinators with colors and scents.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Speed is the rate of change of distance.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is the basic building block of life?",
                options: [
                    "Cell",
                    "Tissue"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What measures the amount of matter in an object?",
                options: [
                    "Mass",
                    "Weight"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What determines an element's identity?",
                options: [
                    "Protons",
                    "Neutrons"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What causes solar eclipses?",
                options: [
                    "Moon blocks Sun",
                    "Earth blocks Sun"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What do plants need for photosynthesis besides light?",
                options: [
                    "Oxygen and water",
                    "CO₂ and water"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is an echo?",
                options: [
                    "Original sound",
                    "Reflected sound"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What type of bond is in table salt?",
                options: [
                    "Covalent",
                    "Ionic"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is a group of stars forming a pattern called?",
                options: [
                    "Galaxy",
                    "Constellation"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What carries blood away from the heart?",
                options: [
                    "Arteries",
                    "Veins"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is the SI unit of length?",
                options: [
                    "Centimeter",
                    "Meter"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "How many neurons are in the human brain (approximately)?",
                options: [
                    "86 billion",
                    "100 million",
                    "1 trillion"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the atomic number of oxygen?",
                options: [
                    "6",
                    "8",
                    "16"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What powers the Sun?",
                options: [
                    "Nuclear fusion",
                    "Combustion",
                    "Nuclear fission"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "How many bones are in the human ear?",
                options: [
                    "5",
                    "2",
                    "3"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is the speed of sound in air at 20°C?",
                options: [
                    "343 m/s",
                    "300 m/s",
                    "400 m/s"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the boiling point of water at high altitude?",
                options: [
                    "Exactly 100°C",
                    "More than 100°C",
                    "Less than 100°C"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the distance from Earth to Moon?",
                options: [
                    "384,400 km",
                    "150 million km",
                    "100,000 km"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "How many times does the heart beat per day?",
                options: [
                    "200,000",
                    "100,000",
                    "50,000"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is the SI unit of voltage?",
                options: [
                    "Volt",
                    "Ohm",
                    "Ampere"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What base in DNA pairs with adenine?",
                options: [
                    "Uracil",
                    "Guanine",
                    "Thymine",
                    "Cytosine"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is the wavelength range of visible light?",
                options: [
                    "400-700 nm",
                    "700-1000 nm",
                    "200-600 nm",
                    "100-400 nm"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What type of bond is strongest?",
                options: [
                    "Ionic",
                    "Van der Waals",
                    "Covalent",
                    "Hydrogen"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What type of star is our Sun?",
                options: [
                    "Red giant",
                    "G-type main sequence",
                    "Neutron star",
                    "White dwarf"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What organelle produces ATP for cells?",
                options: [
                    "Golgi apparatus",
                    "Ribosome",
                    "Mitochondria",
                    "Nucleus"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🎯⚖️",
                question: "What is the gravitational constant G?",
                options: [
                    "3.14 × 10⁻¹¹",
                    "6.67 × 10⁻¹¹",
                    "1.6 × 10⁻¹⁹",
                    "9.8 × 10⁻¹⁰"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the oxidation state of oxygen in H₂O?",
                options: [
                    "0",
                    "-2",
                    "-1",
                    "+2"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "How many moons does Jupiter have (approximately)?",
                options: [
                    "100",
                    "79",
                    "25",
                    "50"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🍃",
                question: "What is the waxy layer on plant leaves called?",
                options: [
                    "Stomata",
                    "Mesophyll",
                    "Cuticle",
                    "Epidermis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔬⚡",
                question: "What is Planck's constant approximately?",
                options: [
                    "3.00 × 10⁸",
                    "9.11 × 10⁻³¹",
                    "1.38 × 10⁻²³",
                    "6.63 × 10⁻³⁴"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What enzyme is used to copy DNA in PCR?",
                answer: "Taq polymerase or DNA polymerase"
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the mass of an electron (in kg)?",
                answer: "9.11 × 10⁻³¹ kg"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the name of the group 17 elements?",
                answer: "Halogens"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the event horizon of a black hole?",
                answer: "Point of no return or boundary where gravity prevents escape"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the scientific name for the kneecap?",
                answer: "Patella"
            },
            {
                topic: "Physics",
                emoji: "🌊📡",
                question: "What is the Heisenberg Uncertainty Principle about?",
                answer: "Cannot know both position and momentum precisely"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the angle between hydrogen atoms in water molecule?",
                answer: "104.5 degrees or 104.5°"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the name of the process that creates heavy elements in stars?",
                answer: "Nucleosynthesis or Stellar nucleosynthesis"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the junction between two neurons called?",
                answer: "Synapse"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the efficiency of an ideal Carnot engine dependent on?",
                answer: "Temperature difference or Reservoir temperatures"
            }
        ]
    },
    5: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Fish breathe through gills.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Temperature measures how hot or cold something is.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Acids taste sour.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Comets have tails made of ice and dust.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Birds have hollow bones.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Density is mass divided by volume.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Salt dissolves in water.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Earth orbits the Sun in an ellipse.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Fruits contain seeds.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Conductors allow electricity to flow easily.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What type of joint is the shoulder?",
                options: [
                    "Hinge",
                    "Ball and socket"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What happens to light when it passes through a prism?",
                options: [
                    "Reflects",
                    "Disperses"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is the lightest element?",
                options: [
                    "Helium",
                    "Hydrogen"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is the dark part of the Moon called?",
                options: [
                    "Maria",
                    "Highlands"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What gas do we exhale?",
                options: [
                    "Oxygen",
                    "Carbon dioxide"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What type of energy does a moving car have?",
                options: [
                    "Kinetic",
                    "Potential"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What happens when you add water to acid?",
                options: [
                    "Exothermic reaction",
                    "Endothermic reaction"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What holds galaxies together?",
                options: [
                    "Gravity",
                    "Magnetism"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is the male part of a flower called?",
                options: [
                    "Stamen",
                    "Pistil"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is amplitude in sound waves?",
                options: [
                    "Loudness",
                    "Pitch"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What blood type is the universal recipient?",
                options: [
                    "A positive",
                    "AB positive",
                    "O negative"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is the relationship between voltage, current, and resistance?",
                options: [
                    "V=I/R",
                    "V=IR",
                    "I=VR"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the valency of nitrogen?",
                options: [
                    "2",
                    "3",
                    "5"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is the orbital period of Earth?",
                options: [
                    "365.25 days",
                    "366 days",
                    "360 days"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is the colored part of the eye?",
                options: [
                    "Retina",
                    "Iris",
                    "Cornea"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is the SI unit of pressure?",
                options: [
                    "Atmosphere",
                    "Pascal",
                    "Bar"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the common name for sodium bicarbonate?",
                options: [
                    "Baking soda",
                    "Washing soda",
                    "Caustic soda"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the final stage of a massive star?",
                options: [
                    "Red giant",
                    "White dwarf",
                    "Black hole"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What organelle makes proteins?",
                options: [
                    "Ribosome",
                    "Mitochondria",
                    "Nucleus"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is absolute zero in Kelvin?",
                options: [
                    "-273 K",
                    "273 K",
                    "0 K"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What kingdom do mushrooms belong to?",
                options: [
                    "Plantae",
                    "Protista",
                    "Fungi",
                    "Bacteria"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the work-energy theorem?",
                options: [
                    "Work = ΔKE",
                    "Work = Energy",
                    "Work = Power",
                    "Work = Force"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the process of liquid to gas called?",
                options: [
                    "Condensation",
                    "Sublimation",
                    "Evaporation",
                    "Deposition"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the closest star system to Earth?",
                options: [
                    "Barnard's Star",
                    "Sirius",
                    "Alpha Centauri",
                    "Proxima Centauri"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is the function of ribosomes?",
                options: [
                    "DNA replication",
                    "Lipid synthesis",
                    "Energy production",
                    "Protein synthesis"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is the index of refraction of water?",
                options: [
                    "1.50",
                    "2.00",
                    "1.00",
                    "1.33"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is the electron configuration of carbon?",
                options: [
                    "1s² 2s² 2p⁶",
                    "1s² 2p⁴",
                    "1s² 2s² 2p²",
                    "1s² 2s² 2p⁴"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is the Kuiper Belt?",
                options: [
                    "Cloud around Sun",
                    "Region beyond Neptune",
                    "Asteroid belt",
                    "Ring around Saturn"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌿🍃",
                question: "What is the opening in leaves for gas exchange?",
                options: [
                    "Vacuole",
                    "Chloroplast",
                    "Cuticle",
                    "Stomata"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is the Doppler shift?",
                options: [
                    "Change in wave speed",
                    "Change in wave amplitude",
                    "Change in wave frequency",
                    "Change in wavelength"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the name of the molecule that carries genetic information from DNA to ribosomes?",
                answer: "mRNA or Messenger RNA"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the SI unit of magnetic flux?",
                answer: "Weber"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the most reactive metal in the periodic table?",
                answer: "Francium"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the name of the theory that describes the origin of the universe?",
                answer: "Big Bang Theory"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the scientific term for muscle pain?",
                answer: "Myalgia"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the principle that states pressure applied to a confined fluid is transmitted equally?",
                answer: "Pascal's Principle or Pascal's Law"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the common ion effect?",
                answer: "Suppression of ionization by adding common ion"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the name of the boundary around a black hole from which nothing can escape?",
                answer: "Event horizon"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the longest nerve in the human body?",
                answer: "Sciatic nerve"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the SI unit of luminous intensity?",
                answer: "Candela"
            }
        ]
    },
    6: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Plants make their own food.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Opposite magnetic poles attract.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Sugar is a type of carbohydrate.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "The Milky Way is our galaxy.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Muscles work in pairs.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Batteries store chemical energy.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Fog is water vapor.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Moon phases repeat every month.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Turtles lay eggs.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Hot air rises.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What carries genetic information?",
                options: [
                    "DNA",
                    "Protein"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What bends light in a telescope?",
                options: [
                    "Lens",
                    "Mirror"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is dry ice made of?",
                options: [
                    "Solid H₂O",
                    "Solid CO₂"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What causes sunrise colors?",
                options: [
                    "Cloud reflection",
                    "Light scattering"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What type of organism is yeast?",
                options: [
                    "Bacteria",
                    "Fungus"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What keeps planets in orbit?",
                options: [
                    "Gravity",
                    "Inertia"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What makes soap clean?",
                options: [
                    "Alcohol",
                    "Surfactants"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What causes seasons on Earth?",
                options: [
                    "Axial tilt",
                    "Distance from Sun"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is a snail's shell made of?",
                options: [
                    "Calcium carbonate",
                    "Keratin"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What opposes falling objects?",
                options: [
                    "Buoyancy",
                    "Air resistance"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is the shape of DNA?",
                options: [
                    "Double helix",
                    "Single strand",
                    "Triple helix"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is the SI unit of capacitance?",
                options: [
                    "Farad",
                    "Henry",
                    "Coulomb"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the atomic number of sodium?",
                options: [
                    "12",
                    "23",
                    "11"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is the age of the universe (approximately)?",
                options: [
                    "20 billion years",
                    "10 billion years",
                    "13.8 billion years"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is the resting heart rate average?",
                options: [
                    "50 bpm",
                    "100 bpm",
                    "70 bpm"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What type of wave is sound?",
                options: [
                    "Transverse",
                    "Standing",
                    "Longitudinal"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the solvent in a saltwater solution?",
                options: [
                    "Both",
                    "Water",
                    "Salt"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the second largest planet?",
                options: [
                    "Uranus",
                    "Saturn",
                    "Neptune"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What gas do plants release at night?",
                options: [
                    "O₂",
                    "N₂",
                    "CO₂"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is the formula for kinetic energy?",
                options: [
                    "mc²",
                    "mgh",
                    "½mv²"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is the process of engulfing particles by cells?",
                options: [
                    "Pinocytosis",
                    "Osmosis",
                    "Exocytosis",
                    "Phagocytosis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the SI unit of inductance?",
                options: [
                    "Tesla",
                    "Weber",
                    "Henry",
                    "Farad"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the hybridization of carbon in methane?",
                options: [
                    "sp²",
                    "s²p²",
                    "sp³",
                    "sp"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the Schwarzschild radius?",
                options: [
                    "Event horizon radius",
                    "Planet radius",
                    "Star radius",
                    "Galaxy radius"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is the start codon in protein synthesis?",
                options: [
                    "AUG",
                    "UAA",
                    "UAG",
                    "UGA"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is the photon energy formula?",
                options: [
                    "E=hf",
                    "E=mgh",
                    "E=½mv²",
                    "E=mc²"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "How many particles are in one mole?",
                options: [
                    "3.00×10⁸",
                    "6.02×10²³",
                    "6.63×10⁻³⁴",
                    "9.11×10⁻³¹"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌞",
                question: "What is the solar constant (approximately)?",
                options: [
                    "1361 W/m²",
                    "2000 W/m²",
                    "1000 W/m²",
                    "500 W/m²"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is the Calvin cycle?",
                options: [
                    "Light reaction",
                    "Respiration cycle",
                    "Nitrogen cycle",
                    "Dark reaction of photosynthesis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is the Mach number?",
                options: [
                    "Speed×Sound speed",
                    "Sound speed/Speed",
                    "Frequency/Wavelength",
                    "Speed/Sound speed"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the wobble hypothesis in genetics?",
                answer: "Third nucleotide pairing flexibility or tRNA anticodon flexibility"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the fine structure constant (approximately)?",
                answer: "1/137 or 0.0073"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the oxidation state of chromium in K₂Cr₂O₇?",
                answer: "+6"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the Chandrasekhar limit?",
                answer: "1.4 solar masses"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the medical term for the collarbone?",
                answer: "Clavicle"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Bernoulli principle?",
                answer: "Fast moving fluid has lower pressure"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the coordination number of FCC structure?",
                answer: "12 or Twelve"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the Roche limit?",
                answer: "Distance where tidal forces break up celestial body"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What neurotransmitter is deficient in Parkinson's disease?",
                answer: "Dopamine"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Stefan-Boltzmann constant?",
                answer: "5.67 × 10⁻⁸ W/(m²·K⁴)"
            }
        ]
    },
    7: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Mammals give birth to live young.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "White light contains all colors.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Salt increases water's boiling point.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "We see only one side of the Moon.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Mosquitoes can transmit diseases.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Weight changes with location.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Indicators change color in acids and bases.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Stars are born in nebulae.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Cacti store water in their stems.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Work requires force and displacement.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is the study of genes called?",
                options: [
                    "Genomics",
                    "Genetics"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What converts kinetic to electrical energy?",
                options: [
                    "Motor",
                    "Generator"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is a reaction that absorbs heat called?",
                options: [
                    "Endothermic",
                    "Exothermic"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What protects Earth from solar wind?",
                options: [
                    "Magnetic field",
                    "Atmosphere"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What breaks down dead organisms?",
                options: [
                    "Decomposers",
                    "Producers"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is the speed of sound affected by?",
                options: [
                    "Source",
                    "Medium"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is a substance that speeds up reactions?",
                options: [
                    "Inhibitor",
                    "Catalyst"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is an artificial satellite?",
                options: [
                    "Natural moon",
                    "Man-made orbiter"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is the study of bones called?",
                options: [
                    "Cardiology",
                    "Osteology"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is the sum of angles in a triangle?",
                options: [
                    "360 degrees",
                    "180 degrees"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "How many pairs of chromosomes in humans?",
                options: [
                    "22",
                    "46",
                    "23"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is the power formula?",
                options: [
                    "P=W+t",
                    "P=W/t",
                    "P=Wt"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the mass number?",
                options: [
                    "Protons only",
                    "Protons + Neutrons",
                    "Electrons + Protons"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What holds the solar system together?",
                options: [
                    "Dark matter",
                    "Sun's gravity",
                    "Magnetic force"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "Which side of the heart has oxygenated blood?",
                options: [
                    "Both",
                    "Left",
                    "Right"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is the SI unit of heat?",
                options: [
                    "BTU",
                    "Joule",
                    "Calorie"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the molarity unit?",
                options: [
                    "mol/L",
                    "mol/kg",
                    "g/L"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the Sun's surface layer called?",
                options: [
                    "Chromosphere",
                    "Corona",
                    "Photosphere"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What detects color in the eye?",
                options: [
                    "Lens",
                    "Rods",
                    "Cones"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is ultrasound frequency?",
                options: [
                    "Above 20 kHz",
                    "20-20,000 Hz",
                    "Below 20 Hz"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is the gel-like substance in cells?",
                options: [
                    "Membrane",
                    "Cytoplasm",
                    "Vacuole",
                    "Nucleus"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the electric field unit?",
                options: [
                    "N/C",
                    "C/N",
                    "A·m",
                    "V·m"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the pH of stomach acid?",
                options: [
                    "1-2",
                    "14",
                    "4-5",
                    "7"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is a parsec?",
                options: [
                    "3.26 light-years",
                    "10 light-years",
                    "1 light-year",
                    "100 light-years"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What enzyme unzips DNA?",
                options: [
                    "Ligase",
                    "Primase",
                    "Polymerase",
                    "Helicase"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is total internal reflection?",
                options: [
                    "Light scattered",
                    "Light trapped in denser medium",
                    "Light absorbed",
                    "Light passes through"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is the geometry of CH₄?",
                options: [
                    "Octahedral",
                    "Planar",
                    "Tetrahedral",
                    "Linear"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is Saturn's largest moon?",
                options: [
                    "Ganymede",
                    "Europa",
                    "Callisto",
                    "Titan"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is the plant hormone for growth?",
                options: [
                    "Thyroxine",
                    "Auxin",
                    "Adrenaline",
                    "Insulin"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is resonance?",
                options: [
                    "Matching natural frequency",
                    "Sound echo",
                    "Amplitude increase",
                    "Wave interference"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Kozak sequence?",
                answer: "Ribosome binding site in mRNA"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Compton wavelength of electron?",
                answer: "2.43 × 10⁻¹² m"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the bond order of O₂?",
                answer: "2 or Two"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the Hubble constant (approximately)?",
                answer: "70 km/s/Mpc"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the name of the first cervical vertebra?",
                answer: "Atlas"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Reynolds number used for?",
                answer: "Predicting flow patterns or laminar vs turbulent"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the lanthanide contraction?",
                answer: "Decrease in atomic radii across lanthanides"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the Eddington limit?",
                answer: "Maximum luminosity of a star"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the blood-brain barrier?",
                answer: "Selective membrane protecting brain"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Curie temperature?",
                answer: "Temperature where ferromagnetism is lost"
            }
        ]
    },
    8: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Insects have six legs.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Friction can be reduced by lubricants.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Fermentation produces alcohol.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "The Moon causes ocean tides.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Pollination is necessary for fruit formation.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Red light has lower frequency than blue.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Soap works by forming micelles.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Stars eventually run out of fuel.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Dolphins are mammals, not fish.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "LED bulbs are more efficient than incandescent.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What determines biological sex?",
                options: [
                    "Hormones",
                    "Sex chromosomes"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What property makes water rise in capillaries?",
                options: [
                    "Surface tension",
                    "Viscosity"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is an isotope?",
                options: [
                    "Different protons",
                    "Same protons, different neutrons"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is a supernova?",
                options: [
                    "Exploding star",
                    "New star"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What mineral strengthens bones?",
                options: [
                    "Iron",
                    "Calcium"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What makes sound louder?",
                options: [
                    "Greater amplitude",
                    "Higher frequency"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is hard water?",
                options: [
                    "High mineral content",
                    "Frozen water"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is Earth's rotation period?",
                options: [
                    "24 hours",
                    "365 days"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is transpiration?",
                options: [
                    "Photosynthesis",
                    "Water loss from leaves"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is the center of gravity?",
                options: [
                    "Heaviest point",
                    "Balance point"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What are the building blocks of proteins?",
                options: [
                    "Nucleotides",
                    "Amino acids",
                    "Fatty acids"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is the SI unit of magnetic field?",
                options: [
                    "Tesla",
                    "Gauss",
                    "Weber"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the noble gas configuration of sodium ion?",
                options: [
                    "Like Helium",
                    "Like Argon",
                    "Like Neon"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What type of galaxy is the Milky Way?",
                options: [
                    "Irregular",
                    "Spiral",
                    "Elliptical"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is the largest artery?",
                options: [
                    "Carotid",
                    "Aorta",
                    "Pulmonary"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is latent heat?",
                options: [
                    "Heat with temperature change",
                    "Heat without temperature change",
                    "Heat loss"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the common name for H₂O₂?",
                options: [
                    "Hydrogen peroxide",
                    "Heavy water",
                    "Water"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What color is the hottest star?",
                options: [
                    "Blue",
                    "Red",
                    "Yellow"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is the blind spot in the eye?",
                options: [
                    "Where optic nerve exits",
                    "Edge of iris",
                    "Center of retina"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is infrasound?",
                options: [
                    "Above 20 kHz",
                    "20-20,000 Hz",
                    "Below 20 Hz"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is the function of Golgi apparatus?",
                options: [
                    "Energy production",
                    "DNA storage",
                    "Package and modify proteins",
                    "Protein synthesis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the magnetic flux formula?",
                options: [
                    "Φ=B/A",
                    "Φ=BA",
                    "Φ=B+A",
                    "Φ=BA²"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the buffer solution?",
                options: [
                    "Strong acid",
                    "Resists pH change",
                    "Strong base",
                    "Neutral solution"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is redshift?",
                options: [
                    "Light absorbed",
                    "Light stretched to longer wavelengths",
                    "Light reflected",
                    "Light compressed"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is crossing over in genetics?",
                options: [
                    "Cell division",
                    "Mutation",
                    "Gene expression",
                    "Exchange of chromosome segments"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is polarization of light?",
                options: [
                    "Light splitting",
                    "Light absorption",
                    "Light bending",
                    "Light waves in one plane"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is the oxidation number of oxygen in peroxide?",
                options: [
                    "0",
                    "-2",
                    "-1",
                    "+2"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is the great red spot on Jupiter?",
                options: [
                    "Mountain",
                    "Ocean",
                    "Crater",
                    "Giant storm"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is nitrogen fixation?",
                options: [
                    "Converting N₂ to usable forms",
                    "Releasing nitrogen",
                    "Absorbing nitrogen",
                    "Storing nitrogen"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is the beat frequency?",
                options: [
                    "Sum of frequencies",
                    "Average frequency",
                    "Difference of two frequencies",
                    "Product of frequencies"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Hill coefficient in biochemistry?",
                answer: "Measure of cooperativity in binding"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the gyromagnetic ratio of electron?",
                answer: "1.76 × 10¹¹ rad/(s·T)"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the Jahn-Teller effect?",
                answer: "Distortion of symmetric molecules"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the Cosmic Microwave Background temperature?",
                answer: "2.7 K"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the medical term for the windpipe?",
                answer: "Trachea"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Coanda effect?",
                answer: "Fluid tendency to follow curved surface"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the common ion effect on solubility?",
                answer: "Decreases solubility"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the Hertzsprung-Russell diagram?",
                answer: "Plot of stellar luminosity vs temperature"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the resting membrane potential of neurons?",
                answer: "-70 mV"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Seebeck effect?",
                answer: "Voltage from temperature difference"
            }
        ]
    },
    9: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Trees lose leaves in autumn.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Heavier objects fall faster than lighter ones.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Water expands when it freezes.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Earth is closest to Sun in January.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Teeth are part of the skeletal system.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Insulators prevent flow of electricity.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Combustion requires oxygen.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Moonlight is reflected sunlight.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Elephants are the largest land mammals.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Temperature measures average kinetic energy.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is the process of making RNA from DNA?",
                options: [
                    "Transcription",
                    "Translation"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What measures electric current?",
                options: [
                    "Voltmeter",
                    "Ammeter"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is the charge of a proton?",
                options: [
                    "Positive",
                    "Negative"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "Is a light-year a measure of distance or time?",
                options: [
                    "Distance",
                    "Time"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "Which blood cells fight infection?",
                options: [
                    "White",
                    "Red"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What determines pitch of sound?",
                options: [
                    "Frequency",
                    "Amplitude"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What makes water a universal solvent?",
                options: [
                    "Size",
                    "Polarity"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is our Sun classified as?",
                options: [
                    "Planet",
                    "Star"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is the female part of flower?",
                options: [
                    "Stamen",
                    "Pistil"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What type of energy does height give?",
                options: [
                    "Kinetic",
                    "Potential"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What are the three types of RNA?",
                options: [
                    "mRNA, tRNA, rRNA",
                    "Nuclear, Cytoplasmic, Mitochondrial",
                    "DNA, RNA, XNA"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is EMF?",
                options: [
                    "Electromotive force",
                    "Electric motor force",
                    "Electromagnetic field"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is an allotrope?",
                options: [
                    "Different forms of same element",
                    "Different elements",
                    "Isotope variant"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is dark matter?",
                options: [
                    "Black holes",
                    "Invisible matter detected by gravity",
                    "Dark energy"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What controls pupil size?",
                options: [
                    "Cornea",
                    "Lens",
                    "Iris muscles"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is Archimedes principle?",
                options: [
                    "Objects float",
                    "Buoyant force equals displaced fluid weight",
                    "Density measure"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is Le Chatelier's principle?",
                options: [
                    "System adjusts to oppose change",
                    "Equilibrium is static",
                    "Reactions go forward"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What streams from the Sun continuously?",
                options: [
                    "Heat from Sun",
                    "Solar radiation",
                    "Stream of charged particles"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is cartilage?",
                options: [
                    "Flexible connective tissue",
                    "Muscle tissue",
                    "Hard bone"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is thermal equilibrium?",
                options: [
                    "No heat transfer",
                    "Maximum heat",
                    "Same temperature"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is apoptosis?",
                options: [
                    "Cell growth",
                    "Cell mutation",
                    "Cell division",
                    "Programmed cell death"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is Lenz's law?",
                options: [
                    "Induced current opposes change",
                    "Current flows clockwise",
                    "Resistance decreases",
                    "Voltage increases"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a Zwitterion?",
                options: [
                    "Molecule with +/- charges",
                    "Ion pair",
                    "Neutral molecule",
                    "Charged molecule"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What method measures astronomical distances?",
                options: [
                    "Constellation pattern",
                    "Actual ladder in space",
                    "Galaxy classification",
                    "Series of measurement methods"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is a plasmid?",
                options: [
                    "Cell membrane",
                    "Circular DNA in bacteria",
                    "Linear DNA",
                    "Protein structure"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is Brewster's angle?",
                options: [
                    "Refraction angle",
                    "Critical angle",
                    "Reflection angle",
                    "Angle of perfect polarization"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is a conjugate acid-base pair?",
                options: [
                    "Differ by one H+",
                    "Both acids",
                    "Both bases",
                    "Same pH"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What causes auroras?",
                options: [
                    "Ice crystals",
                    "Solar particles with magnetic field",
                    "Cloud formation",
                    "Reflected light"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is the Cori cycle?",
                options: [
                    "Nitrogen cycle",
                    "Lactate to glucose conversion",
                    "Respiration",
                    "Photosynthesis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is acoustic impedance?",
                options: [
                    "Sound intensity",
                    "Wave speed",
                    "Sound frequency",
                    "Resistance to sound wave"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Michaelis constant (Km)?",
                answer: "Substrate concentration at half maximum velocity"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Hall effect?",
                answer: "Voltage perpendicular to current in magnetic field"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the Henderson-Hasselbalch equation for?",
                answer: "Calculating pH of buffer solutions"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the Oort Cloud?",
                answer: "Spherical shell of comets around solar system"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the acetabulum?",
                answer: "Hip socket"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Venturi effect?",
                answer: "Pressure reduction in constricted flow"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Nernst equation used for?",
                answer: "Calculating electrode potential"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the main sequence lifetime of our Sun?",
                answer: "10 billion years"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is Long-term potentiation (LTP)?",
                answer: "Strengthening of synapses from repeated stimulation"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Joule-Thomson effect?",
                answer: "Temperature change during gas expansion"
            }
        ]
    },
    10: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Insects have three body parts.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "A rainbow forms when light refracts in water droplets.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Graphite and diamond are both made of carbon.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "All stars eventually become black holes.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Mushrooms are decomposers in ecosystems.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Series circuits have one path for current.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Catalysts are consumed in reactions.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "A lunar eclipse occurs when Earth blocks sunlight to Moon.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Humans have two sets of teeth in life.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Heat flows from cold to hot naturally.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is a mutation?",
                options: [
                    "Cell division",
                    "Change in DNA"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is the difference between mass and weight?",
                options: [
                    "No difference",
                    "Mass is matter, weight is force"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What determines chemical properties?",
                options: [
                    "Electrons",
                    "Protons"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is a nebula?",
                options: [
                    "Cloud of gas and dust",
                    "Dead star"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is the function of valves in heart?",
                options: [
                    "Pump blood",
                    "Prevent backflow"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is resonant frequency?",
                options: [
                    "Loudest frequency",
                    "Natural vibration frequency"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is a saturated solution?",
                options: [
                    "Maximum dissolved solute",
                    "Dilute solution"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What are sunspots?",
                options: [
                    "Cool areas on Sun",
                    "Hot spots"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What are guard cells?",
                options: [
                    "Control stomata",
                    "Protect leaves"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is acceleration?",
                options: [
                    "Change in velocity",
                    "Constant speed"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is the human diploid number?",
                options: [
                    "46",
                    "92",
                    "23"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is Ohm's law?",
                options: [
                    "P=VI",
                    "Q=It",
                    "V=IR"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the electron configuration notation?",
                options: [
                    "1s² 2s² 2p⁶...",
                    "n=1,2,3...",
                    "A, B, C..."
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is gravitational lensing?",
                options: [
                    "Star formation",
                    "Light bending by gravity",
                    "Telescope magnification"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is accommodation in the eye?",
                options: [
                    "Lens shape change",
                    "Pupil dilation",
                    "Color perception"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What effect causes siren pitch change?",
                options: [
                    "Frequency change with motion",
                    "Sound amplification",
                    "Wave reflection"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a colligative property?",
                options: [
                    "Depends on particle number",
                    "Depends on particle type",
                    "Constant property"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is stellar parallax?",
                options: [
                    "Apparent star shift",
                    "Star color",
                    "Star brightness"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is ossification?",
                options: [
                    "Joint movement",
                    "Bone formation",
                    "Bone breaking"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is the zeroth law of thermodynamics?",
                options: [
                    "Thermal equilibrium is transitive",
                    "Entropy increases",
                    "Energy conserved"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is endosymbiotic theory?",
                options: [
                    "Cell evolution theory",
                    "DNA origin theory",
                    "Protein synthesis theory",
                    "Organelles from symbiotic bacteria"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the Lorentz force?",
                options: [
                    "Gravitational force",
                    "Nuclear force",
                    "Force on charged particle in fields",
                    "Friction force"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a ligand?",
                options: [
                    "Solvent",
                    "Metal ion",
                    "Ion/molecule that binds to metal",
                    "Catalyst"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the Drake equation for?",
                options: [
                    "Estimating intelligent civilizations",
                    "Planet count",
                    "Star formation rate",
                    "Galaxy age"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is a restriction enzyme?",
                options: [
                    "Copies DNA",
                    "Joins DNA",
                    "Cuts DNA at specific sequences",
                    "Reads DNA"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is Snell's law?",
                options: [
                    "n₁/n₂ = θ₁/θ₂",
                    "n₁ + n₂ = constant",
                    "n₁sinθ₁ = n₂sinθ₂",
                    "n₁θ₁ = n₂θ₂"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is the aufbau principle?",
                options: [
                    "Electrons pair up",
                    "Electrons randomize",
                    "Electrons fill lowest energy first",
                    "Electrons spread out"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "At what distance do tidal forces destroy objects?",
                options: [
                    "Escape velocity",
                    "Gravitational radius",
                    "Orbital distance",
                    "Tidal disruption distance"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is chemiosmosis?",
                options: [
                    "Active transport",
                    "Photosynthesis",
                    "Diffusion",
                    "ATP synthesis via proton gradient"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is the Fourier transform?",
                options: [
                    "Decompose signal into frequencies",
                    "Compress data",
                    "Filter noise",
                    "Amplify signal"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Shine-Dalgarno sequence?",
                answer: "Ribosome binding site in prokaryotic mRNA"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Bohr magneton?",
                answer: "9.27 × 10⁻²⁴ J/T"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is crystal field splitting energy?",
                answer: "Energy difference between d-orbital sets"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the Baade-Wesselink method?",
                answer: "Distance measurement using pulsating stars"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the thoracic outlet?",
                answer: "Opening for nerves and vessels to arm"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Kelvin-Helmholtz instability?",
                answer: "Instability at velocity shear interface"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Debye-Hückel theory?",
                answer: "Theory of electrolyte solutions"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the Bok globule?",
                answer: "Dark cloud where stars form"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the gate control theory?",
                answer: "Theory of pain perception modulation"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Meissner effect?",
                answer: "Expulsion of magnetic field from superconductor"
            }
        ]
    },
    11: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Viruses need host cells to reproduce.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Mirrors reflect light.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Milk contains calcium.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "The Moon orbits Earth.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Carrots are good for eyesight.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Guitars produce sound through vibrating strings.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Yeast is used in baking bread.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Most meteorites burn up in atmosphere.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Bees produce honey.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Ice is slippery due to thin water layer.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is the basic unit of heredity?",
                options: [
                    "Gene",
                    "Chromosome"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What type of current do batteries provide?",
                options: [
                    "Alternating current",
                    "Direct current"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is a covalent bond?",
                options: [
                    "Transferring electrons",
                    "Sharing electrons"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is the closest galaxy to Milky Way?",
                options: [
                    "Triangulum",
                    "Andromeda"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is the largest muscle in body?",
                options: [
                    "Biceps",
                    "Gluteus maximus"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is the bending of waves called?",
                options: [
                    "Refraction",
                    "Reflection"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is the universal solvent?",
                options: [
                    "Alcohol",
                    "Water"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What keeps Earth in orbit around Sun?",
                options: [
                    "Magnetism",
                    "Gravity"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What pigment makes leaves green?",
                options: [
                    "Chlorophyll",
                    "Carotene"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is resistance measured in?",
                options: [
                    "Ohms",
                    "Volts"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What are chromosomes made of?",
                options: [
                    "DNA and proteins",
                    "Proteins only",
                    "RNA only"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is the SI unit of work?",
                options: [
                    "Newton",
                    "Joule",
                    "Watt"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the atomic number of iron?",
                options: [
                    "56",
                    "28",
                    "26"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is the Milky Way's shape?",
                options: [
                    "Spiral",
                    "Irregular",
                    "Elliptical"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "How many smell receptors do humans have?",
                options: [
                    "400 types",
                    "100 types",
                    "1000 types"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is Pascal's principle about?",
                options: [
                    "Flow rate",
                    "Pressure in fluids",
                    "Buoyancy"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the pH of lemon juice?",
                options: [
                    "10-11",
                    "2-3",
                    "7"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "How old is the Sun?",
                options: [
                    "1 billion years",
                    "10 billion years",
                    "4.6 billion years"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is the smallest muscle in body?",
                options: [
                    "Stapedius",
                    "Palmaris",
                    "Orbicularis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is the Kelvin scale based on?",
                options: [
                    "Water freezing",
                    "Human body temp",
                    "Absolute zero"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is the Hayflick limit?",
                options: [
                    "Age limit",
                    "Cell division limit",
                    "Size limit",
                    "Growth limit"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the Poynting vector?",
                options: [
                    "Electric field",
                    "Wave speed",
                    "Energy flux",
                    "Magnetic field"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is the chelate effect?",
                options: [
                    "Base formation",
                    "Enhanced stability of complexes",
                    "Acid neutralization",
                    "Metal corrosion"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the Fermi paradox?",
                options: [
                    "Why no alien contact",
                    "Star formation",
                    "Dark matter mystery",
                    "Universe age"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is CRISPR-Cas9?",
                options: [
                    "Virus",
                    "Gene editing tool",
                    "Protein marker",
                    "Cell type"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is quantum entanglement?",
                options: [
                    "Particle spin",
                    "Energy levels",
                    "Wave collapse",
                    "Correlated particle states"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is the Pauli exclusion principle?",
                options: [
                    "Orbitals fill equally",
                    "No two electrons same quantum state",
                    "Electrons repel",
                    "Energy quantized"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is a trojan asteroid?",
                options: [
                    "Near-Earth object",
                    "Comet",
                    "Belt asteroid",
                    "Shares planet's orbit"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is allelopathy?",
                options: [
                    "Chemical inhibition by plants",
                    "Parasitism",
                    "Competition",
                    "Symbiosis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is the Rayleigh criterion?",
                options: [
                    "Wave speed",
                    "Sound intensity",
                    "Frequency range",
                    "Resolution limit"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Warburg effect in cancer?",
                answer: "Aerobic glycolysis in cancer cells"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Josephson effect?",
                answer: "Current tunneling through superconductor junction"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the Wade-Mingos rules used for?",
                answer: "Predicting cluster structures"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the Great Attractor?",
                answer: "Gravitational anomaly pulling galaxies"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the foramen magnum?",
                answer: "Opening in skull for spinal cord"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Magnus effect?",
                answer: "Force on spinning object in fluid"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Sabatier principle?",
                answer: "Optimal catalyst-reactant interaction"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the Schönberg-Chandrasekhar limit?",
                answer: "Core mass limit for hydrogen shell burning"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the Papez circuit?",
                answer: "Neural pathway for emotion"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Casimir effect?",
                answer: "Vacuum energy between plates"
            }
        ]
    },
    12: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Vertebrates have a backbone.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Sound travels faster in solids than air.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Table salt is sodium chloride.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Stars are made mostly of hydrogen.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Birds are warm-blooded.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Helium is lighter than air.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Water can put out most fires.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Moon phases depend on its position.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Plants need sunlight to grow.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Rubber is an insulator.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What stores energy in cells?",
                options: [
                    "DNA",
                    "ATP"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is the path of electric current called?",
                options: [
                    "Wire",
                    "Circuit"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is rust chemically?",
                options: [
                    "Iron sulfate",
                    "Iron oxide"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is a pulsar?",
                options: [
                    "Black hole",
                    "Rotating neutron star"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is the largest vein?",
                options: [
                    "Vena cava",
                    "Pulmonary"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What makes objects float?",
                options: [
                    "Buoyancy",
                    "Density"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is the hardness of water due to?",
                options: [
                    "Iron",
                    "Calcium/Magnesium"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is a solar flare?",
                options: [
                    "Magnetic energy release",
                    "Explosion"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is the eardrum also called?",
                options: [
                    "Cochlea",
                    "Tympanic membrane"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What increases with speed?",
                options: [
                    "Kinetic energy",
                    "Potential energy"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is an autosome?",
                options: [
                    "Non-sex chromosome",
                    "Sex chromosome",
                    "Y chromosome"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is impedance?",
                options: [
                    "DC resistance",
                    "AC resistance",
                    "Capacitance"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the coordination number?",
                options: [
                    "Bonds in compound",
                    "Atoms in molecule",
                    "Ligands around metal"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is cosmic inflation?",
                options: [
                    "Galaxy merger",
                    "Rapid universe expansion",
                    "Star formation"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What are rods and cones?",
                options: [
                    "Nerves",
                    "Photoreceptors",
                    "Muscles"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is critical angle?",
                options: [
                    "Refraction angle",
                    "Incident angle",
                    "Total internal reflection angle"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is molality?",
                options: [
                    "Moles per kg solvent",
                    "Mass per volume",
                    "Moles per liter"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the solar cycle?",
                options: [
                    "22 years",
                    "11 years",
                    "5 years"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is synovial fluid?",
                options: [
                    "Joint lubricant",
                    "Lymph",
                    "Blood plasma"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is entropy?",
                options: [
                    "Heat energy",
                    "Temperature",
                    "Measure of disorder"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is quorum sensing?",
                options: [
                    "Bacterial communication",
                    "Cell death",
                    "Reproduction",
                    "Growth phase"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the Stark effect?",
                options: [
                    "Wave interference",
                    "Electron emission",
                    "Light scattering",
                    "Energy level splitting in field"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a Diels-Alder reaction?",
                options: [
                    "Substitution",
                    "Cycloaddition reaction",
                    "Elimination",
                    "Addition"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the Tully-Fisher relation?",
                options: [
                    "Comet tail-distance",
                    "Star mass-luminosity",
                    "Planet size-orbit",
                    "Galaxy luminosity-rotation"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is RNA interference?",
                options: [
                    "DNA repair",
                    "Protein synthesis",
                    "Cell signaling",
                    "Gene silencing mechanism"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is wave-particle duality?",
                options: [
                    "Two wave types",
                    "Wave interference",
                    "Particle collision",
                    "Light as wave and particle"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is Hund's rule?",
                options: [
                    "Pairing electrons",
                    "Lowest energy first",
                    "Energy spacing",
                    "Maximum unpaired electrons"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is the ecliptic?",
                options: [
                    "Sun's apparent path",
                    "Galaxy plane",
                    "Moon's orbit",
                    "Earth's equator"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is C4 photosynthesis?",
                options: [
                    "Night respiration",
                    "Regular photosynthesis",
                    "Root absorption",
                    "CO₂ concentration mechanism"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is constructive interference?",
                options: [
                    "Waves add together",
                    "Waves reflect",
                    "Waves cancel",
                    "Waves refract"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Barr body?",
                answer: "Inactivated X chromosome"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Wiedemann-Franz law?",
                answer: "Relates thermal and electrical conductivity"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the trans effect?",
                answer: "Ligand influence on substitution rate"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What technique measures cosmic distances?",
                answer: "Series of calibrated methods"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the linea alba?",
                answer: "Fibrous midline structure of abdomen"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Stokes-Einstein equation?",
                answer: "Relates diffusion to viscosity"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Born-Haber cycle?",
                answer: "Thermodynamic cycle for lattice energy"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the mass-luminosity relation?",
                answer: "L proportional to M³·⁵ for main sequence"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the Schwann cell?",
                answer: "Forms myelin in peripheral nervous system"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Lamb shift?",
                answer: "Energy level shift from vacuum fluctuations"
            }
        ]
    },
    13: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Flowers attract pollinators with nectar.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Inertia is the resistance to motion change.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Vinegar is acetic acid.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Light from distant stars takes years to reach us.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Fish use gills to breathe underwater.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Iron is magnetic.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Graphite conducts electricity.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Earth receives energy from the Sun.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Calcium is important for bones.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Mercury expands when heated.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What carries oxygen in blood?",
                options: [
                    "Red blood cells",
                    "White blood cells"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is parallel circuit?",
                options: [
                    "Multiple paths",
                    "Single path"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is oxidation?",
                options: [
                    "Gain of electrons",
                    "Loss of electrons"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is a quasar?",
                options: [
                    "Bright galactic core",
                    "Dying star"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is the waxy coating on leaves?",
                options: [
                    "Epidermis",
                    "Cuticle"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What causes tides besides Moon?",
                options: [
                    "Sun",
                    "Wind"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is distillation?",
                options: [
                    "Separating by boiling",
                    "Mixing"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is the heliosphere?",
                options: [
                    "Sun's atmosphere",
                    "Sun's magnetic bubble"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What detects smell?",
                options: [
                    "Taste buds",
                    "Olfactory receptors"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is voltage?",
                options: [
                    "Electric potential difference",
                    "Current flow"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is pleiotropy?",
                options: [
                    "One gene, multiple traits",
                    "Gene mutation",
                    "Multiple genes, one trait"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is mutual inductance?",
                options: [
                    "Resistance",
                    "Voltage induced between coils",
                    "Self-inductance"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is electronegativity?",
                options: [
                    "Attract electrons ability",
                    "Electron count",
                    "Atomic size"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is parallax used for?",
                options: [
                    "Measuring brightness",
                    "Measuring size",
                    "Measuring distance"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is systole?",
                options: [
                    "Heart contraction",
                    "Blood flow",
                    "Heart relaxation"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is surface tension?",
                options: [
                    "Cohesive force at surface",
                    "Water pressure",
                    "Fluid resistance"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a redox reaction?",
                options: [
                    "Precipitation",
                    "Acid-base",
                    "Oxidation-reduction"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the corona?",
                options: [
                    "Sun's surface",
                    "Sun's outer atmosphere",
                    "Sun's core"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is astigmatism?",
                options: [
                    "Retina damage",
                    "Lens cloudiness",
                    "Irregular cornea curvature"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is conduction?",
                options: [
                    "Heat radiation",
                    "Heat transfer through contact",
                    "Heat convection"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is sporulation?",
                options: [
                    "Mutation",
                    "Cell division",
                    "Growth phase",
                    "Spore formation"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the Zeeman effect?",
                options: [
                    "Electron transition",
                    "Wave diffraction",
                    "Light absorption",
                    "Spectral line splitting in B field"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a racemic mixture?",
                options: [
                    "Isotope mix",
                    "Allotrope mix",
                    "Equal enantiomers",
                    "Pure compound"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the virial theorem?",
                options: [
                    "Distance measure",
                    "Mass calculation",
                    "Time dilation",
                    "Relates kinetic to potential energy"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is epigenetics?",
                options: [
                    "Chromosome damage",
                    "DNA mutation",
                    "Gene expression changes without DNA change",
                    "Protein folding"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is the photoelectric effect?",
                options: [
                    "Light absorbs",
                    "Light reflects",
                    "Light bends",
                    "Light ejects electrons"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is hyperconjugation?",
                options: [
                    "Electron delocalization",
                    "Bond breaking",
                    "Electron transfer",
                    "Ion formation"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is orbital resonance?",
                options: [
                    "Temperature cycle",
                    "Gravitational interaction pattern",
                    "Magnetic field",
                    "Rotation speed"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is photorespiration?",
                options: [
                    "Wasteful oxygen fixation",
                    "Transpiration",
                    "Respiration",
                    "Photosynthesis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is destructive interference?",
                options: [
                    "Waves refract",
                    "Waves amplify",
                    "Waves reflect",
                    "Waves cancel out"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Pribnow box?",
                answer: "Promoter sequence in bacteria"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Aharonov-Bohm effect?",
                answer: "Quantum phase shift from vector potential"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the Woodward-Hoffmann rules?",
                answer: "Predict pericyclic reaction stereochemistry"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the cosmic web?",
                answer: "Large-scale structure of universe"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the inguinal canal?",
                answer: "Passage in abdominal wall"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Kutta-Joukowski theorem?",
                answer: "Relates lift to circulation"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Grotthuss mechanism?",
                answer: "Proton transfer in water"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the Strömgren sphere?",
                answer: "Ionized hydrogen region around hot star"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the substantia nigra?",
                answer: "Brain region producing dopamine"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Peltier effect?",
                answer: "Heat absorption/release at junction from current"
            }
        ]
    },
    14: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Reptiles are cold-blooded.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Hot air balloons rise because hot air is less dense.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Carbon dioxide is a gas at room temperature.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Shooting stars are actually meteors.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Crabs have an exoskeleton.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Lunar phases are caused by Moon's shadow.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Ice melting is a physical change.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Earth rotates from west to east.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Caterpillars undergo metamorphosis.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Mass remains constant everywhere.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is a zygote?",
                options: [
                    "Fertilized egg",
                    "Sperm cell"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What measures cycles per second?",
                options: [
                    "Hertz",
                    "Decibel"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is reduction?",
                options: [
                    "Gain of electrons",
                    "Loss of electrons"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is the asteroid belt?",
                options: [
                    "Around Saturn",
                    "Region between Mars and Jupiter"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is xylem?",
                options: [
                    "Food-conducting tissue",
                    "Water-conducting tissue"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is viscosity?",
                options: [
                    "Fluid thickness",
                    "Fluid density"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is filtration?",
                options: [
                    "Separating solid from liquid",
                    "Mixing"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What are solar prominences?",
                options: [
                    "Plasma loops",
                    "Sunspots"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is the strongest bone?",
                options: [
                    "Femur",
                    "Skull"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is capacitance?",
                options: [
                    "Current flow",
                    "Charge storage ability"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is codominance?",
                options: [
                    "One dominant",
                    "Both alleles expressed",
                    "Incomplete dominance"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is Faraday's law?",
                options: [
                    "Current-resistance relation",
                    "Induced EMF from flux change",
                    "Charge conservation"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the octet rule?",
                options: [
                    "8 neutrons",
                    "8 protons",
                    "8 valence electrons stable"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is Hubble's law?",
                options: [
                    "Galaxies recede proportional to distance",
                    "Planet orbits",
                    "Star formation"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is diastole?",
                options: [
                    "Blood clotting",
                    "Heart contraction",
                    "Heart relaxation"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is Bernoulli's principle?",
                options: [
                    "Buoyancy",
                    "Fast fluid, low pressure",
                    "Surface tension"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a saturated hydrocarbon?",
                options: [
                    "Has double bonds",
                    "Has triple bonds",
                    "Only single bonds"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is solar neutrino problem?",
                options: [
                    "Too many neutrinos",
                    "No neutrinos",
                    "Fewer neutrinos detected"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is presbyopia?",
                options: [
                    "Color blindness",
                    "Age-related farsightedness",
                    "Nearsightedness"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is convection?",
                options: [
                    "Heat conduction",
                    "Heat transfer by fluid motion",
                    "Heat radiation"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is transformation in bacteria?",
                options: [
                    "Uptake of foreign DNA",
                    "Shape change",
                    "Division",
                    "Death"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the Compton effect?",
                options: [
                    "Light absorption",
                    "Photon scattering increases wavelength",
                    "Wave diffraction",
                    "Photoelectric effect"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is stereoisomerism?",
                options: [
                    "Different atoms",
                    "Same structure",
                    "Same formula, different 3D arrangement",
                    "Different formula"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is gravitational redshift?",
                options: [
                    "Light frequency decrease in gravity",
                    "Absorption",
                    "Doppler shift",
                    "Scattering"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is gene flow?",
                options: [
                    "Drift",
                    "Selection",
                    "Mutation",
                    "Transfer of alleles between populations"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is Rayleigh scattering?",
                options: [
                    "Refraction",
                    "Reflection",
                    "Diffraction",
                    "Blue sky from light scattering"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is resonance in chemistry?",
                options: [
                    "Electron transfer",
                    "Multiple valid structures",
                    "Molecular vibration",
                    "Bond breaking"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is the Hill sphere?",
                options: [
                    "Gravitational dominance region",
                    "Magnetic field",
                    "Atmosphere",
                    "Ring system"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is guttation?",
                options: [
                    "Photosynthesis",
                    "Water exudation from leaves",
                    "Respiration",
                    "Transpiration"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is the decibel scale?",
                options: [
                    "Frequency scale",
                    "Logarithmic sound intensity",
                    "Wavelength scale",
                    "Linear scale"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Holliday junction?",
                answer: "DNA crossover structure in recombination"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the skin effect?",
                answer: "AC current concentration at conductor surface"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the SN2 mechanism?",
                answer: "Bimolecular nucleophilic substitution"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the Zone of Avoidance?",
                answer: "Area obscured by Milky Way disk"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the annulus fibrosus?",
                answer: "Outer portion of intervertebral disc"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Prandtl number?",
                answer: "Ratio of momentum to thermal diffusivity"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Hammett equation?",
                answer: "Relates reaction rates to substituent effects"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the asymptotic giant branch?",
                answer: "Late stellar evolution phase"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the nucleus accumbens?",
                answer: "Brain reward center"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Foucault pendulum?",
                answer: "Demonstrates Earth's rotation"
            }
        ]
    },
    15: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Trees absorb carbon dioxide.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Velocity has direction.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Bases taste bitter.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Stars are powered by nuclear fusion.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Octopuses have three hearts.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Copper is a good conductor.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Fire needs fuel, oxygen, and heat.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "The Moon has no atmosphere.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Baby teeth are also called milk teeth.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Absolute zero is the coldest temperature.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is a diploid cell?",
                options: [
                    "Two sets of chromosomes",
                    "One set"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is electromagnetic radiation?",
                options: [
                    "Particle energy",
                    "Energy as waves"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is a catalyst?",
                options: [
                    "Speeds reaction",
                    "Slows reaction"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is the Oort cloud?",
                options: [
                    "Asteroid belt",
                    "Comet cloud"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is phloem?",
                options: [
                    "Sugar-conducting tissue",
                    "Water-conducting tissue"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What causes apparent frequency shift in sound?",
                options: [
                    "Frequency change with motion",
                    "Volume change"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is chromatography?",
                options: [
                    "Separation technique",
                    "Mixing technique"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is a coronal mass ejection?",
                options: [
                    "Solar flare",
                    "Solar plasma release"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What connects bone to bone?",
                options: [
                    "Tendons",
                    "Ligaments"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is inductance?",
                options: [
                    "Opposition to current change",
                    "Current resistance"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is epistasis?",
                options: [
                    "Gene masking another",
                    "Linkage",
                    "Multiple alleles"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is the right-hand rule for?",
                options: [
                    "Magnetic force direction",
                    "Voltage polarity",
                    "Current direction"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is VSEPR theory?",
                options: [
                    "Predicts molecular shape",
                    "Reaction rate",
                    "Bond strength"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is dark energy?",
                options: [
                    "Dark matter",
                    "Accelerates universe expansion",
                    "Black hole energy"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is the pacemaker of heart?",
                options: [
                    "AV node",
                    "SA node",
                    "Ventricle"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is laminar flow?",
                options: [
                    "Smooth fluid layers",
                    "Turbulent flow",
                    "No flow"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is an aromatic compound?",
                options: [
                    "Has odor",
                    "Aliphatic",
                    "Contains benzene ring"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the CNO cycle?",
                options: [
                    "Planet formation",
                    "Stellar fusion pathway",
                    "Star death"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is the fovea?",
                options: [
                    "Blind spot",
                    "Central retina for sharp vision",
                    "Iris"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is radiation heat transfer?",
                options: [
                    "Heat by electromagnetic waves",
                    "Heat by fluid",
                    "Heat by contact"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is conjugation in bacteria?",
                options: [
                    "Death",
                    "DNA transfer via pilus",
                    "Mutation",
                    "Reproduction"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What principle prevents identical fermions sharing quantum states?",
                options: [
                    "Uncertainty",
                    "Wave-particle duality",
                    "Energy quantization",
                    "No identical fermions in same state"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a carbonyl group?",
                options: [
                    "C-C",
                    "C-H",
                    "C-O",
                    "C=O"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the cosmic microwave background?",
                options: [
                    "Star light",
                    "Galaxy emission",
                    "Solar radiation",
                    "Relic radiation from Big Bang"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is Hardy-Weinberg equilibrium?",
                options: [
                    "Mutation rate",
                    "Allele frequency stability",
                    "Gene flow",
                    "Selection pressure"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is chromatic aberration?",
                options: [
                    "Color fringing in lens",
                    "Diffraction",
                    "Spherical distortion",
                    "Reflection"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is Markovnikov's rule?",
                options: [
                    "Bond breaking",
                    "Proton transfer",
                    "Addition to more substituted carbon",
                    "Electron transfer"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is the Lagrange point?",
                options: [
                    "Escape velocity",
                    "Gravitational equilibrium point",
                    "Tidal force",
                    "Orbital radius"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is vernalization?",
                options: [
                    "Dormancy",
                    "Cold-induced flowering",
                    "Germination",
                    "Photosynthesis"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is a standing wave?",
                options: [
                    "Reflected wave",
                    "Traveling wave",
                    "Absorbed wave",
                    "Wave pattern from interference"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the wobble hypothesis?",
                answer: "Relaxed base pairing at codon third position"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Biot-Savart law?",
                answer: "Calculates magnetic field from current"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the Baldwin rules?",
                answer: "Predict ring closure reaction feasibility"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is baryonic acoustic oscillation?",
                answer: "Density fluctuation in early universe"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the foramen ovale?",
                answer: "Opening between fetal atria"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Navier-Stokes equation?",
                answer: "Describes fluid motion"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Jablonski diagram?",
                answer: "Shows electronic transitions and energy"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the Hayashi track?",
                answer: "Pre-main sequence stellar evolution path"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the corpus callosum?",
                answer: "Connects left and right brain hemispheres"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Carnot cycle?",
                answer: "Ideal thermodynamic cycle"
            }
        ]
    },
    16: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Insects are invertebrates.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Momentum depends on mass and velocity.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Noble gases are unreactive.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "The universe is expanding.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Butterflies taste with their feet.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Plastic is an insulator.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Hydrogen is flammable.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "The Moon affects ocean tides.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Wisdom teeth are the last to grow.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Water freezes at 0°C.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is a haploid cell?",
                options: [
                    "Two sets",
                    "One set of chromosomes"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is the speed of light?",
                options: [
                    "3×10⁸ m/s",
                    "3×10⁶ m/s"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is a compound?",
                options: [
                    "Single element",
                    "Two or more elements bonded"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is a supergiant star?",
                options: [
                    "Very large bright star",
                    "Dying star"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is water loss through leaves called?",
                options: [
                    "Water vapor loss",
                    "Photosynthesis"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is wavelength?",
                options: [
                    "Wave height",
                    "Distance between wave peaks"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is titration?",
                options: [
                    "Mixing",
                    "Measuring concentration"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is the chromosphere?",
                options: [
                    "Layer above photosphere",
                    "Sun's core"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is the Achilles tendon?",
                options: [
                    "Heel tendon",
                    "Knee ligament"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is reactance?",
                options: [
                    "DC resistance",
                    "AC opposition"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is linkage in genetics?",
                options: [
                    "Mutation",
                    "Independent assortment",
                    "Genes on same chromosome"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is Maxwell's equations describe?",
                options: [
                    "Electromagnetism",
                    "Thermodynamics",
                    "Gravity"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the transition state?",
                options: [
                    "Reactant",
                    "Product",
                    "Highest energy point in reaction"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is gravitational waves?",
                options: [
                    "Light waves",
                    "Sound waves",
                    "Spacetime ripples"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is the bundle of His?",
                options: [
                    "Nerve bundle",
                    "Heart conduction pathway",
                    "Blood vessel"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is Reynolds number?",
                options: [
                    "Measures pressure",
                    "Predicts flow type",
                    "Calculates velocity"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a functional group?",
                options: [
                    "Reactive part of molecule",
                    "Inert part",
                    "Entire molecule"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the pp chain?",
                options: [
                    "Proton-proton fusion",
                    "Star collapse",
                    "Planet formation"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is the optic nerve?",
                options: [
                    "Focuses light",
                    "Transmits visual signals",
                    "Detects color"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is the second law of thermodynamics?",
                options: [
                    "Heat flows down",
                    "Entropy increases",
                    "Energy conserved"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is transduction in bacteria?",
                options: [
                    "Conjugation",
                    "Direct uptake",
                    "Virus-mediated DNA transfer",
                    "Mutation"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is Fermi-Dirac statistics?",
                options: [
                    "Wave function",
                    "Fermion distribution",
                    "Boson distribution",
                    "Classical distribution"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a carboxylic acid?",
                options: [
                    "Contains COOH",
                    "Contains C=O",
                    "Contains OH",
                    "Contains NH₂"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the anthropic principle?",
                options: [
                    "Star evolution",
                    "Universe suitable for life",
                    "Universe age",
                    "Galaxy formation"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is genetic drift?",
                options: [
                    "Gene flow",
                    "Mutation",
                    "Natural selection",
                    "Random allele frequency change"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is interference?",
                options: [
                    "Wave transmission",
                    "Wave reflection",
                    "Wave absorption",
                    "Wave superposition"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is Zaitsev's rule?",
                options: [
                    "More substituted alkene favored",
                    "Stereochemistry",
                    "No preference",
                    "Less substituted"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is the frost line?",
                options: [
                    "Planet boundary",
                    "Comet origin",
                    "Ice formation boundary",
                    "Asteroid belt"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is etiolation?",
                options: [
                    "Growth in darkness",
                    "Flowering",
                    "Light growth",
                    "Root formation"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is the nodal line?",
                options: [
                    "Wave source",
                    "Maximum amplitude",
                    "Zero amplitude in standing wave",
                    "Wave speed"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Meselson-Stahl experiment?",
                answer: "Proved DNA semiconservative replication"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the London force?",
                answer: "Weak van der Waals interaction"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the E1 mechanism?",
                answer: "Unimolecular elimination reaction"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is weak gravitational lensing?",
                answer: "Slight distortion of background galaxies"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the cauda equina?",
                answer: "Bundle of spinal nerves"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Froude number?",
                answer: "Ratio of inertial to gravitational forces"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Arrhenius equation?",
                answer: "Relates rate constant to temperature"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the instability strip?",
                answer: "HR diagram region of pulsating stars"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the hippocampus?",
                answer: "Brain region for memory formation"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Stirling cycle?",
                answer: "Thermodynamic cycle with isothermal processes"
            }
        ]
    },
    17: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Sharks are fish.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Elastic collisions conserve kinetic energy.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Oxygen is required for rusting.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Stars are different colors due to temperature.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Lizards can regrow their tails.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Gold is a good conductor.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Chlorophyll is green pigment.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "The Moon is Earth's natural satellite.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Teeth have nerves and blood vessels.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Evaporation causes cooling.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is a gamete?",
                options: [
                    "Sex cell",
                    "Body cell"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is power?",
                options: [
                    "Force per time",
                    "Energy per time"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is a mixture?",
                options: [
                    "Components not bonded",
                    "Components bonded"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is a planetary nebula?",
                options: [
                    "Dying star shell",
                    "Star birth"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is a stomata?",
                options: [
                    "Leaf pore",
                    "Root hair"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is amplitude?",
                options: [
                    "Wave height",
                    "Wave length"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is crystallization?",
                options: [
                    "Dissolving",
                    "Solid formation from solution"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is a sunspot cycle?",
                options: [
                    "11-year pattern",
                    "1-year pattern"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is cardiac muscle?",
                options: [
                    "Heart muscle",
                    "Skeletal muscle"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is impedance in AC?",
                options: [
                    "Resistance only",
                    "Total opposition"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is incomplete dominance?",
                options: [
                    "Both expressed",
                    "Complete dominance",
                    "Blended phenotype"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is Kirchhoff's voltage law?",
                options: [
                    "Voltage sum is zero in loop",
                    "Current sum is zero",
                    "Power is constant"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is activation energy?",
                options: [
                    "Minimum energy for reaction",
                    "Product energy",
                    "Heat released"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is a binary star system?",
                options: [
                    "Two stars orbiting",
                    "Three stars",
                    "One star"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is an ECG?",
                options: [
                    "Heart sound",
                    "Heart electrical activity",
                    "Blood pressure"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is turbulent flow?",
                options: [
                    "Smooth flow",
                    "No flow",
                    "Chaotic fluid motion"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is an alkane?",
                options: [
                    "Saturated hydrocarbon",
                    "Unsaturated",
                    "Aromatic"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is stellar nucleosynthesis?",
                options: [
                    "Star birth",
                    "Element formation in stars",
                    "Star death"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is the vitreous humor?",
                options: [
                    "Cornea",
                    "Eye gel",
                    "Tear fluid"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is isothermal process?",
                options: [
                    "Constant temperature",
                    "Constant pressure",
                    "Constant volume"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is lysogeny?",
                options: [
                    "Cell death",
                    "Mutation",
                    "Viral DNA integration",
                    "Lytic cycle"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is Bose-Einstein condensate?",
                options: [
                    "Hot plasma",
                    "Ultra-cold matter state",
                    "Solid state",
                    "Liquid state"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is an ester?",
                options: [
                    "RNH₂",
                    "RCOOH",
                    "ROH",
                    "RCOOR'"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the fine structure constant?",
                options: [
                    "Electromagnetic coupling",
                    "Gravitational constant",
                    "Speed of light",
                    "Planck constant"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is the founder effect?",
                options: [
                    "Increased variation",
                    "Mutation increase",
                    "Reduced variation in new population",
                    "No change"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is diffraction?",
                options: [
                    "Wave transmission",
                    "Wave reflection",
                    "Wave bending around obstacles",
                    "Wave absorption"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is a chiral molecule?",
                options: [
                    "Linear",
                    "Non-superimposable mirror image",
                    "Symmetrical",
                    "Planar"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is perturbation?",
                options: [
                    "Orbital disturbance",
                    "Star collision",
                    "Galaxy merger",
                    "Planet formation"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is apical dominance?",
                options: [
                    "Branch growth",
                    "Main stem suppresses branches",
                    "Flower formation",
                    "Root dominance"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is an antinode?",
                options: [
                    "Wave source",
                    "Zero amplitude",
                    "Wave end",
                    "Maximum amplitude point"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Griffith experiment?",
                answer: "Discovered transformation in bacteria"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Seebeck coefficient?",
                answer: "Thermoelectric voltage per temperature difference"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the SN1 mechanism?",
                answer: "Unimolecular nucleophilic substitution"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the Sunyaev-Zel'dovich effect?",
                answer: "CMB distortion by hot gas"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the greater omentum?",
                answer: "Abdominal fat apron"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Weber number?",
                answer: "Ratio of inertial to surface tension forces"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Eyring equation?",
                answer: "Relates rate to free energy of activation"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the horizontal branch?",
                answer: "Helium-burning stellar phase"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the amygdala?",
                answer: "Brain region for emotion processing"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Otto cycle?",
                answer: "Ideal gasoline engine cycle"
            }
        ]
    },
    18: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Pandas eat mostly bamboo.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Acceleration is change in velocity.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Distilled water is pure H₂O.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Some stars are bigger than our Sun.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Parrots can mimic human speech.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Aluminum conducts electricity.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Nitrogen makes up most of air.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "We always see the same side of Moon.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Fluoride strengthens teeth.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Condensation releases heat.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is meiosis?",
                options: [
                    "Body cell division",
                    "Sex cell division"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is impulse?",
                options: [
                    "Mass times velocity",
                    "Force times time"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is a solution?",
                options: [
                    "Homogeneous mixture",
                    "Heterogeneous mixture"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is a white dwarf?",
                options: [
                    "Dense stellar remnant",
                    "Giant star"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is chloroplast?",
                options: [
                    "Photosynthesis organelle",
                    "Energy organelle"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is period of wave?",
                options: [
                    "Cycles per time",
                    "Time per cycle"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is sublimation?",
                options: [
                    "Solid to gas",
                    "Liquid to gas"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What particles stream from the Sun?",
                options: [
                    "Charged particles",
                    "Light radiation"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is smooth muscle?",
                options: [
                    "Involuntary muscle",
                    "Voluntary muscle"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is resonance frequency?",
                options: [
                    "Applied frequency",
                    "Natural oscillation rate"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is a test cross?",
                options: [
                    "Cause mutation",
                    "Produce offspring",
                    "Determine genotype"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is enthalpy?",
                options: [
                    "Free energy",
                    "Disorder",
                    "Heat content"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is a cepheid variable?",
                options: [
                    "Pulsating star",
                    "Binary star",
                    "Exploding star"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is blood pressure?",
                options: [
                    "Blood volume",
                    "Heart rate",
                    "Force on artery walls"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is Stokes' law?",
                options: [
                    "Drag force on sphere",
                    "Buoyant force",
                    "Pressure law"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is an alkene?",
                options: [
                    "All single bonds",
                    "Has triple bond",
                    "Has C=C bond"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the heliopause?",
                options: [
                    "Planet boundary",
                    "Sun's surface",
                    "Solar system boundary"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is aqueous humor?",
                options: [
                    "Vitreous gel",
                    "Eye fluid",
                    "Tear"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is adiabatic process?",
                options: [
                    "No work done",
                    "No heat exchange",
                    "Constant pressure"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is chemotaxis?",
                options: [
                    "Movement toward chemicals",
                    "Growth response",
                    "Cell division",
                    "Death signal"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the Uncertainty Principle?",
                options: [
                    "Cannot know position and momentum precisely",
                    "Time dilation",
                    "Energy quantization",
                    "Wave-particle duality"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is an amide?",
                options: [
                    "RCONH₂",
                    "RCOOR'",
                    "RCOOH",
                    "RNH₂"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the multiverse theory?",
                options: [
                    "Many worlds",
                    "Multiple universes exist",
                    "Multiple galaxies",
                    "Parallel dimensions"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is bottleneck effect?",
                options: [
                    "Population crash reduces variation",
                    "Founder effect",
                    "No change",
                    "Increases variation"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is spherical aberration?",
                options: [
                    "Color fringing",
                    "Reflection",
                    "Focus blur from lens curve",
                    "Diffraction"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is tautomerism?",
                options: [
                    "Enantiomers",
                    "Stereoisomers",
                    "Structural isomers in equilibrium",
                    "Conformers"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is differential rotation?",
                options: [
                    "Different rotation rates",
                    "Uniform rotation",
                    "No rotation",
                    "Retrograde motion"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is thigmotropism?",
                options: [
                    "Water response",
                    "Touch response growth",
                    "Light response",
                    "Gravity response"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is mode of vibration?",
                options: [
                    "Traveling wave",
                    "Wave frequency",
                    "Standing wave pattern",
                    "Wave speed"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Hershey-Chase experiment?",
                answer: "Proved DNA is genetic material"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What happens to magnetic fields in superconductors?",
                answer: "Magnetic field expulsion"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the E2 mechanism?",
                answer: "Bimolecular elimination reaction"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the cosmic censorship hypothesis?",
                answer: "Singularities hidden by event horizons"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the ductus arteriosus?",
                answer: "Fetal vessel connecting pulmonary artery to aorta"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Strouhal number?",
                answer: "Dimensionless number for oscillating flow"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Marcus theory?",
                answer: "Electron transfer kinetics"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the red giant branch?",
                answer: "Stellar evolution phase after main sequence"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the thalamus?",
                answer: "Sensory relay station in brain"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Rankine cycle?",
                answer: "Ideal steam engine cycle"
            }
        ]
    },
    19: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Crocodiles are reptiles.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Friction always opposes motion.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "Litmus paper tests pH.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "Light travels in straight lines.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Squids have beaks.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Silver is the best conductor.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Oxygen supports combustion.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "Lunar eclipses are rarer than solar.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Adult humans have 32 permanent teeth.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Boiling point decreases with altitude.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is mitosis?",
                options: [
                    "Sex cell division",
                    "Body cell division"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is angular momentum?",
                options: [
                    "Linear momentum",
                    "Rotational momentum"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is a colloid?",
                options: [
                    "Dissolved particles",
                    "Particles suspended"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is a neutron star?",
                options: [
                    "Black hole",
                    "Collapsed star core"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is mitochondria?",
                options: [
                    "Energy powerhouse",
                    "Protein factory"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What is frequency?",
                options: [
                    "Cycles per second",
                    "Seconds per cycle"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is deposition?",
                options: [
                    "Gas to solid",
                    "Solid to gas"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What are solar prominences made of?",
                options: [
                    "Plasma",
                    "Gas"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is skeletal muscle?",
                options: [
                    "Involuntary muscle",
                    "Voluntary muscle"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is Q factor?",
                options: [
                    "Quality factor",
                    "Charge"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is a Punnett square for?",
                options: [
                    "Predict offspring genotypes",
                    "Count chromosomes",
                    "Measure DNA"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is Ampere's law?",
                options: [
                    "Force law",
                    "E-field from charge",
                    "B-field from current"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is Gibbs free energy?",
                options: [
                    "Heat energy",
                    "Total energy",
                    "Energy available for work"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is cosmological redshift?",
                options: [
                    "Doppler effect",
                    "Space expansion effect",
                    "Gravitational effect"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is the cardiac cycle?",
                options: [
                    "Blood circulation",
                    "Heart contraction-relaxation",
                    "Heartbeat rate"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "How is pressure distributed in confined fluids?",
                options: [
                    "Buoyancy",
                    "Pressure transmitted equally",
                    "Flow rate"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is an alkyne?",
                options: [
                    "All single bonds",
                    "Has C=C bond",
                    "Has C≡C bond"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the termination shock?",
                options: [
                    "Solar wind slows",
                    "Star birth",
                    "Planet boundary"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is the sclera?",
                options: [
                    "White of eye",
                    "Colored part",
                    "Lens"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is isobaric process?",
                options: [
                    "Constant temperature",
                    "Constant volume",
                    "Constant pressure"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is binary fission?",
                options: [
                    "Conjugation",
                    "Spore formation",
                    "Bacterial reproduction",
                    "Virus replication"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the tunneling effect?",
                options: [
                    "Sound through wall",
                    "Wave through opening",
                    "Particle through barrier",
                    "Light through medium"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is an aldehyde?",
                options: [
                    "RCH₂OH",
                    "RCOOH",
                    "RCHO",
                    "RCOOR'"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is inflation theory?",
                options: [
                    "Oscillating universe",
                    "Rapid early universe expansion",
                    "Steady expansion",
                    "Static universe"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "What is punctuated equilibrium?",
                options: [
                    "No evolution",
                    "Random evolution",
                    "Rapid evolution bursts",
                    "Gradual evolution"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is Fraunhofer diffraction?",
                options: [
                    "Reflection",
                    "Refraction",
                    "Far-field diffraction",
                    "Near-field"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is a carbocation?",
                options: [
                    "Neutral carbon",
                    "Negatively charged",
                    "Free radical",
                    "Positively charged carbon"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is the ecliptic plane?",
                options: [
                    "Equatorial plane",
                    "Galactic plane",
                    "Moon's orbit",
                    "Earth's orbital plane"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is gravitropism?",
                options: [
                    "Touch response",
                    "Water response",
                    "Gravity response growth",
                    "Light response"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is harmonic frequency?",
                options: [
                    "Integer multiple of fundamental",
                    "Half fundamental",
                    "Random frequency",
                    "Beat frequency"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Avery-MacLeod-McCarty experiment?",
                answer: "Identified DNA as transforming principle"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Kondo effect?",
                answer: "Resistance minimum in metals with magnetic impurities"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the Diels-Alder stereospecificity?",
                answer: "Syn addition with endo preference"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the no-hair theorem?",
                answer: "Black holes characterized by mass, charge, spin"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the ligamentum arteriosum?",
                answer: "Remnant of ductus arteriosus"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Knudsen number?",
                answer: "Ratio of molecular mean free path to length scale"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Franck-Condon principle?",
                answer: "Electronic transition faster than nuclear motion"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "What is the subgiant branch?",
                answer: "Short transition phase after main sequence"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the hypothalamus?",
                answer: "Regulates homeostasis and hormones"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Brayton cycle?",
                answer: "Ideal gas turbine cycle"
            }
        ]
    },
    20: {
        easy: [
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "Kangaroos are marsupials.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "Centripetal force points toward center.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "⚗️🧪",
                question: "pH 7 is neutral.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌍🌙",
                question: "The universe started with Big Bang.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🫀💓",
                question: "Honeybees make hexagonal cells.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌡️❄️",
                question: "Electricity flows from positive to negative.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "💎✨",
                question: "Carbon dioxide is heavier than air.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "☀️🌟",
                question: "A solar eclipse occurs when Moon blocks Sun.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🦴🩻",
                question: "Bone is living tissue.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📢",
                question: "Water has maximum density at 4°C.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Biology",
                emoji: "🧲🔗",
                question: "What is cytokinesis?",
                options: [
                    "DNA replication",
                    "Cell division"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌈🎨",
                question: "What is torque?",
                options: [
                    "Rotational force",
                    "Linear force"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🔬🧫",
                question: "What is an emulsion?",
                options: [
                    "Gas-liquid",
                    "Liquid-liquid colloid"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🪐🌌",
                question: "What is a magnetar?",
                options: [
                    "Black hole",
                    "Neutron star with strong field"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌿🌱",
                question: "What is the Golgi apparatus?",
                options: [
                    "Packaging organelle",
                    "Energy producer"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "💧💦",
                question: "What wave property changes with relative motion?",
                options: [
                    "Amplitude change",
                    "Frequency change"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🔥🌋",
                question: "What is condensation?",
                options: [
                    "Gas to liquid",
                    "Liquid to gas"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🌊🌀",
                question: "What is coronal heating problem?",
                options: [
                    "Sunspot mystery",
                    "Why corona hotter than surface"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🧠💭",
                question: "What is an antagonistic pair?",
                options: [
                    "Opposing muscles",
                    "Similar muscles"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🫁🫀",
                question: "What is self-inductance?",
                options: [
                    "Induced EMF in same coil",
                    "Between coils"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Biology",
                emoji: "🦷🦴",
                question: "What is the central dogma?",
                options: [
                    "Protein→RNA→DNA",
                    "DNA→RNA→Protein",
                    "RNA→DNA→Protein"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "👁️👀",
                question: "What is Gauss's law?",
                options: [
                    "B-field from current",
                    "Force between charges",
                    "E-field flux from charge"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🌤️⛅",
                question: "What is the rate-determining step?",
                options: [
                    "First step",
                    "Slowest reaction step",
                    "Fastest step"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "❄️🌨️",
                question: "What is a brown dwarf?",
                options: [
                    "Dead star",
                    "Planet",
                    "Failed star"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🌪️💨",
                question: "What is cardiac output?",
                options: [
                    "Heart rate",
                    "Blood pressure",
                    "Blood per minute"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "⚛️🔬",
                question: "What is the continuity equation?",
                options: [
                    "Mass conservation in fluids",
                    "Energy conservation",
                    "Momentum conservation"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is benzene?",
                options: [
                    "Alkene",
                    "Aromatic ring C₆H₆",
                    "Aliphatic"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "💊💉",
                question: "What is the bow shock?",
                options: [
                    "Planetary boundary",
                    "Star collision",
                    "Where solar wind meets ISM"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🔭🌠",
                question: "What is the choroid?",
                options: [
                    "Lens",
                    "Vascular eye layer",
                    "Retina"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🌏🗺️",
                question: "What is isochoric process?",
                options: [
                    "Constant volume",
                    "Constant temperature",
                    "Constant pressure"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Biology",
                emoji: "🦠🧫",
                question: "What is horizontal gene transfer?",
                options: [
                    "Replication",
                    "Gene transfer between organisms",
                    "Vertical inheritance",
                    "Mutation"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "⚡🔬",
                question: "What is the Klein-Gordon equation?",
                options: [
                    "Maxwell equation",
                    "Dirac equation",
                    "Relativistic wave equation",
                    "Schrödinger equation"
                ],
                correct: 1
            },
            {
                topic: "Chemistry",
                emoji: "🧪⚗️",
                question: "What is a ketone?",
                options: [
                    "RCOOR'",
                    "RCHO",
                    "RCOR'",
                    "RCOOH"
                ],
                correct: 0
            },
            {
                topic: "Astronomy",
                emoji: "🌌⭐",
                question: "What is the flatness problem?",
                options: [
                    "Why dark energy",
                    "Why matter dominates",
                    "Why expansion",
                    "Why universe geometry flat"
                ],
                correct: 1
            },
            {
                topic: "Biology",
                emoji: "🧬💉",
                question: "How do bacteria share genetic material laterally?",
                options: [
                    "Genes between unrelated organisms",
                    "Parent to offspring",
                    "Homologous chromosomes",
                    "Sister chromatids"
                ],
                correct: 1
            },
            {
                topic: "Physics",
                emoji: "🌈💡",
                question: "What is Fresnel diffraction?",
                options: [
                    "Refraction",
                    "Far-field",
                    "Reflection",
                    "Near-field diffraction"
                ],
                correct: 0
            },
            {
                topic: "Chemistry",
                emoji: "⚛️💎",
                question: "What is a carbanion?",
                options: [
                    "Negatively charged carbon",
                    "Positively charged",
                    "Neutral carbon",
                    "Free radical"
                ],
                correct: 1
            },
            {
                topic: "Astronomy",
                emoji: "🪐💍",
                question: "What is the invariable plane?",
                options: [
                    "Ecliptic",
                    "Solar system angular momentum plane",
                    "Equatorial plane",
                    "Galactic plane"
                ],
                correct: 0
            },
            {
                topic: "Biology",
                emoji: "🌱🔬",
                question: "What is phototropism?",
                options: [
                    "Light response growth",
                    "Touch response",
                    "Gravity response",
                    "Water response"
                ],
                correct: 0
            },
            {
                topic: "Physics",
                emoji: "🔊📡",
                question: "What is the overtone?",
                options: [
                    "Resonance",
                    "Fundamental frequency",
                    "Beat frequency",
                    "Higher harmonic"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Biology",
                emoji: "🧬🔬",
                question: "What is the Luria-Delbrück experiment?",
                answer: "Proved mutations occur randomly"
            },
            {
                topic: "Physics",
                emoji: "⚡🔋",
                question: "What is the Landau damping?",
                answer: "Collisionless plasma wave damping"
            },
            {
                topic: "Chemistry",
                emoji: "⚛️🔬",
                question: "What is the Birch reduction?",
                answer: "Aromatic reduction with alkali metal in ammonia"
            },
            {
                topic: "Astronomy",
                emoji: "🌌🔭",
                question: "What is the horizon problem?",
                answer: "Why distant regions have same temperature"
            },
            {
                topic: "Biology",
                emoji: "🦴💪",
                question: "What is the foramen of Magendie?",
                answer: "Opening in fourth ventricle"
            },
            {
                topic: "Physics",
                emoji: "🌊💧",
                question: "What is the Grashof number?",
                answer: "Ratio of buoyancy to viscous forces"
            },
            {
                topic: "Chemistry",
                emoji: "💧🌊",
                question: "What is the Curtin-Hammett principle?",
                answer: "Product ratio from transition state energies"
            },
            {
                topic: "Astronomy",
                emoji: "🌟💫",
                question: "At what core mass fraction does hydrogen shell burning begin?",
                answer: "10% stellar mass for isothermal core"
            },
            {
                topic: "Biology",
                emoji: "🧠🔬",
                question: "What is the basal ganglia?",
                answer: "Brain nuclei for motor control"
            },
            {
                topic: "Physics",
                emoji: "💡⚡",
                question: "What is the Diesel cycle?",
                answer: "Ideal compression ignition cycle"
            }
        ]
    }
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['science'] = scienceQuestions;
}
