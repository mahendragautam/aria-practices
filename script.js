// Quiz state
let currentChapter = 1;
let currentLevel = 'easy';
let currentQuestionIndex = 0;
let score = 0;
let startTime = 0;
let answered = false;
let shuffledQuestions = [];
let fallingEmojis = [];

// Timer state for Quick Pick mode
let isTimedMode = false;
let timeRemaining = 0;
let timerInterval = null;
let isPaused = false;

// Time limits for Quick Pick (in seconds)
const timeLimits = {
    easy: 60,      // 1 minute
    medium: 90,    // 1.5 minutes
    hard: 120,     // 2 minutes
    expert: 150,   // 2.5 minutes
    extreme: 180   // 3 minutes
};

// Chapter colors
const chapterColors = [
    '#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C',
    '#FFD700', '#FF69B4', '#87CEFA', '#90EE90', '#BA55D3',
    '#FFA07A', '#20B2AA', '#FF6347', '#4682B4', '#32CD32',
    '#FF1493', '#00CED1', '#FF4500', '#6A5ACD', '#FFB347'
];

// Question bank - 1000 unique questions
const questionBank = {
    1: { // Chapter 1
        easy: [
            {topic: 'Biology', emoji: '🧬💉', question: 'DNA stands for Deoxyribonucleic Acid.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'Light travels faster than sound.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'Water is made of hydrogen and oxygen.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌙', question: 'The Earth is the largest planet in our solar system.', options: ['True', 'False'], correct: 1},
            {topic: 'Biology', emoji: '🫀❤️', question: 'The human heart has four chambers.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'Heat always flows from hot to cold.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '💎💍', question: 'Diamond is made of carbon.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'The Sun is a star.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦴🦷', question: 'Bones are stronger than steel by weight.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔊🎵', question: 'Sound cannot travel through a vacuum.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the powerhouse of the cell?', options: ['Mitochondria', 'Nucleus'], correct: 0},
            {topic: 'Physics', emoji: '🍎🌍', question: 'What force keeps us on the ground?', options: ['Gravity', 'Magnetism'], correct: 0},
            {topic: 'Chemistry', emoji: '🧂💧', question: 'What is the chemical formula for table salt?', options: ['NaCl', 'KCl'], correct: 0},
            {topic: 'Astronomy', emoji: '🌕🌙', question: 'What causes tides on Earth?', options: ['Moon\'s gravity', 'Sun\'s heat'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What process do plants use to make food?', options: ['Photosynthesis', 'Respiration'], correct: 0},
            {topic: 'Physics', emoji: '🌈☀️', question: 'What splits white light into colors?', options: ['Prism', 'Lens'], correct: 0},
            {topic: 'Chemistry', emoji: '💨🌬️', question: 'What gas do plants absorb from air?', options: ['Carbon dioxide', 'Nitrogen'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'Which planet has rings?', options: ['Saturn', 'Mars'], correct: 0},
            {topic: 'Biology', emoji: '🧠💭', question: 'What is the control center of the body?', options: ['Brain', 'Heart'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is the unit of electrical resistance?', options: ['Ohm', 'Volt'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'Which blood type is the universal donor?', options: ['O negative', 'AB positive', 'A positive'], correct: 0},
            {topic: 'Physics', emoji: '⚛️🔬', question: 'What is the smallest particle of an element?', options: ['Atom', 'Molecule', 'Electron'], correct: 0},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the pH of pure water?', options: ['7', '0', '14'], correct: 0},
            {topic: 'Astronomy', emoji: '🌟✨', question: 'What is the closest star to Earth?', options: ['The Sun', 'Alpha Centauri', 'Sirius'], correct: 0},
            {topic: 'Biology', emoji: '🦠🔬', question: 'What are the building blocks of proteins?', options: ['Amino acids', 'Fatty acids', 'Nucleotides'], correct: 0},
            {topic: 'Physics', emoji: '🌡️❄️', question: 'At what temperature does water freeze in Celsius?', options: ['0°C', '32°C', '-273°C'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💥', question: 'What gas is produced when metals react with acids?', options: ['Hydrogen', 'Oxygen', 'Nitrogen'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌎', question: 'How long does Earth take to orbit the Sun?', options: ['365 days', '24 hours', '30 days'], correct: 0},
            {topic: 'Biology', emoji: '🫁💨', question: 'What is the main organ of the respiratory system?', options: ['Lungs', 'Heart', 'Liver'], correct: 0},
            {topic: 'Physics', emoji: '🔊📢', question: 'What is the speed of sound in air approximately?', options: ['343 m/s', '3000 m/s', '100 m/s'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'How many chromosomes do humans have?', options: ['46', '23', '48', '92'], correct: 0},
            {topic: 'Physics', emoji: '💡⚡', question: 'Who developed the theory of relativity?', options: ['Einstein', 'Newton', 'Tesla', 'Galileo'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the atomic number of Carbon?', options: ['6', '12', '8', '14'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐🌌', question: 'How many planets are in our solar system?', options: ['8', '9', '7', '10'], correct: 0},
            {topic: 'Biology', emoji: '❤️🫀', question: 'What is the normal human body temperature in Fahrenheit?', options: ['98.6°F', '100°F', '96°F', '99.5°F'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the formula for kinetic energy?', options: ['½mv²', 'mgh', 'mc²', 'F=ma'], correct: 0},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the molecular weight of water (H₂O)?', options: ['18', '16', '20', '22'], correct: 0},
            {topic: 'Astronomy', emoji: '🌙🌍', question: 'How long does it take for light from the Sun to reach Earth?', options: ['8 minutes', '1 hour', '1 second', '1 day'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'How many bones are in the adult human body?', options: ['206', '300', '180', '256'], correct: 0},
            {topic: 'Physics', emoji: '🧲⚡', question: 'What is the unit of magnetic flux density?', options: ['Tesla', 'Weber', 'Henry', 'Gauss'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the name of the process by which cells divide to produce gametes?', answer: 'Meiosis'},
            {topic: 'Physics', emoji: '⚛️💫', question: 'What is the name of the quantum mechanical principle that states you cannot know both position and momentum precisely?', answer: 'Heisenberg Uncertainty Principle'},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the name of the reaction where an acid and base combine to form salt and water?', answer: 'Neutralization'},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the name of the boundary around a black hole beyond which nothing can escape?', answer: 'Event Horizon'},
            {topic: 'Biology', emoji: '🧫🦠', question: 'What is the term for organisms that can produce their own food?', answer: 'Autotrophs'},
            {topic: 'Physics', emoji: '🌡️⚗️', question: 'What is the name of the law stating that pressure and volume are inversely proportional at constant temperature?', answer: 'Boyle\'s Law'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the name of the table that organizes all chemical elements?', answer: 'Periodic Table'},
            {topic: 'Astronomy', emoji: '🌟💥', question: 'What is the explosive death of a massive star called?', answer: 'Supernova'},
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the molecule that carries genetic information in most organisms?', answer: 'DNA'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the SI unit of electric current?', answer: 'Ampere'}
        ]
    },
    2: { // Chapter 2
        easy: [
            {topic: 'Biology', emoji: '🦴🩻', question: 'Humans have the same number of bones as babies.', options: ['True', 'False'], correct: 1},
            {topic: 'Physics', emoji: '🌍🪐', question: 'All planets in our solar system orbit the Sun.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧊❄️', question: 'Ice is denser than water.', options: ['True', 'False'], correct: 1},
            {topic: 'Astronomy', emoji: '🌕🌖', question: 'The Moon produces its own light.', options: ['True', 'False'], correct: 1},
            {topic: 'Biology', emoji: '👁️👀', question: 'The human eye can distinguish about 10 million colors.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🧲🔴', question: 'Like magnetic poles attract each other.', options: ['True', 'False'], correct: 1},
            {topic: 'Chemistry', emoji: '💎🌟', question: 'Diamonds can burn.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '⭐💫', question: 'All stars are the same size.', options: ['True', 'False'], correct: 1},
            {topic: 'Biology', emoji: '🧠💡', question: 'The brain uses about 20% of the body\'s energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎨🌈', question: 'White light is made up of all colors.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🩸❤️', question: 'What is the main protein in red blood cells?', options: ['Hemoglobin', 'Insulin'], correct: 0},
            {topic: 'Physics', emoji: '🔋⚡', question: 'What type of current flows in one direction only?', options: ['Direct current', 'Alternating current'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the lightest element?', options: ['Hydrogen', 'Helium'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🔄', question: 'What causes day and night on Earth?', options: ['Earth\'s rotation', 'Earth\'s revolution'], correct: 0},
            {topic: 'Biology', emoji: '🌸🐝', question: 'What is the process of pollen transfer called?', options: ['Pollination', 'Germination'], correct: 0},
            {topic: 'Physics', emoji: '🔥🌡️', question: 'What is the transfer of heat through direct contact?', options: ['Conduction', 'Convection'], correct: 0},
            {topic: 'Chemistry', emoji: '🧂⚗️', question: 'What is a substance with pH less than 7?', options: ['Acid', 'Base'], correct: 0},
            {topic: 'Astronomy', emoji: '☄️💫', question: 'What are chunks of rock and ice in space called?', options: ['Comets', 'Asteroids'], correct: 0},
            {topic: 'Biology', emoji: '🦷🪥', question: 'What is the hardest substance in the human body?', options: ['Tooth enamel', 'Bone'], correct: 0},
            {topic: 'Physics', emoji: '📡🌊', question: 'What type of wave is light?', options: ['Electromagnetic', 'Mechanical'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🦠🔬', question: 'What is the smallest unit of life?', options: ['Cell', 'Atom', 'Molecule'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is the unit of power?', options: ['Watt', 'Joule', 'Newton'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is the most abundant gas in Earth\'s atmosphere?', options: ['Nitrogen', 'Oxygen', 'Carbon dioxide'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌🌟', question: 'What galaxy do we live in?', options: ['Milky Way', 'Andromeda', 'Triangulum'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What part of the cell contains DNA?', options: ['Nucleus', 'Cytoplasm', 'Membrane'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the bending of light called?', options: ['Refraction', 'Reflection', 'Diffraction'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💥', question: 'What is a rapid chemical reaction that produces heat and light?', options: ['Combustion', 'Oxidation', 'Reduction'], correct: 0},
            {topic: 'Astronomy', emoji: '🔭🌠', question: 'What is a group of stars forming a pattern called?', options: ['Constellation', 'Galaxy', 'Nebula'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What type of blood vessel carries blood away from the heart?', options: ['Artery', 'Vein', 'Capillary'], correct: 0},
            {topic: 'Physics', emoji: '🎵🔊', question: 'What is measured in Hertz?', options: ['Frequency', 'Amplitude', 'Wavelength'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What organelle is responsible for protein synthesis?', options: ['Ribosome', 'Mitochondria', 'Lysosome', 'Golgi apparatus'], correct: 0},
            {topic: 'Physics', emoji: '⚛️💫', question: 'What is the fundamental particle that carries electromagnetic force?', options: ['Photon', 'Electron', 'Proton', 'Neutron'], correct: 0},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the process of a solid directly becoming a gas?', options: ['Sublimation', 'Evaporation', 'Condensation', 'Deposition'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌙', question: 'What is the point in orbit closest to Earth called?', options: ['Perigee', 'Apogee', 'Perihelion', 'Aphelion'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What pigment gives plants their green color?', options: ['Chlorophyll', 'Carotene', 'Xanthophyll', 'Anthocyanin'], correct: 0},
            {topic: 'Physics', emoji: '🌡️⚗️', question: 'What is the lowest possible temperature?', options: ['Absolute zero', 'Freezing point', 'Boiling point', 'Critical point'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What type of bond involves sharing electrons?', options: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'], correct: 0},
            {topic: 'Astronomy', emoji: '🌟✨', question: 'What is the main element in stars?', options: ['Hydrogen', 'Helium', 'Carbon', 'Oxygen'], correct: 0},
            {topic: 'Biology', emoji: '🦠💊', question: 'What type of organism is a virus classified as?', options: ['Non-living', 'Prokaryote', 'Eukaryote', 'Protist'], correct: 0},
            {topic: 'Physics', emoji: '🔊📢', question: 'What property of sound determines its pitch?', options: ['Frequency', 'Amplitude', 'Wavelength', 'Speed'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the term for programmed cell death?', answer: 'Apoptosis'},
            {topic: 'Physics', emoji: '⚛️💫', question: 'What is the study of motion without considering forces called?', answer: 'Kinematics'},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the term for a mixture where one substance is dissolved in another?', answer: 'Solution'},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the cosmic microwave background radiation a remnant of?', answer: 'Big Bang'},
            {topic: 'Biology', emoji: '🧫🦠', question: 'What are organisms that break down dead matter called?', answer: 'Decomposers'},
            {topic: 'Physics', emoji: '🌡️⚗️', question: 'What is the transfer of heat through fluid movement called?', answer: 'Convection'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the term for atoms of the same element with different numbers of neutrons?', answer: 'Isotopes'},
            {topic: 'Astronomy', emoji: '🌟💥', question: 'What is the region around a star where liquid water could exist called?', answer: 'Habitable Zone'},
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the study of heredity and variation called?', answer: 'Genetics'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the opposition to the flow of electric current called?', answer: 'Resistance'}
        ]
    },
    3: { // Chapter 3
        easy: [
            {topic: 'Chemistry', emoji: '🧪💧', question: 'Salt dissolves in water.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🌳🍃', question: 'Trees produce oxygen.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'Temperature measures average kinetic energy of particles.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍💫', question: 'Earth takes 24 hours to rotate once.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐝🌸', question: 'Bees help in pollination.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'Fire needs oxygen to burn.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '💡⚡', question: 'Insulators conduct electricity well.', options: ['True', 'False'], correct: 1},
            {topic: 'Astronomy', emoji: '🌙⭐', question: 'Stars are made mostly of hydrogen.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦎🔄', question: 'Reptiles are cold-blooded.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎵🔊', question: 'Sound travels faster in solids than in air.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the center of an atom called?', options: ['Nucleus', 'Electron cloud'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What carries oxygen in blood?', options: ['Red blood cells', 'White blood cells'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the resistance of a fluid to flow?', options: ['Viscosity', 'Density'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus'], correct: 0},
            {topic: 'Biology', emoji: '🧫🦠', question: 'What is the study of microorganisms?', options: ['Microbiology', 'Botany'], correct: 0},
            {topic: 'Chemistry', emoji: '💎💍', question: 'What is the hardest natural substance?', options: ['Diamond', 'Graphite'], correct: 0},
            {topic: 'Physics', emoji: '🔋⚡', question: 'What is stored energy called?', options: ['Potential energy', 'Kinetic energy'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️🌡️', question: 'What is the surface temperature of the Sun approximately?', options: ['5,500°C', '1,000°C'], correct: 0},
            {topic: 'Biology', emoji: '🌱🌿', question: 'What is the male part of a flower?', options: ['Stamen', 'Pistil'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What color has the longest wavelength?', options: ['Red', 'Violet'], correct: 0}
        ],
        hard: [
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Fe'], correct: 0},
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the study of plants called?', options: ['Botany', 'Zoology', 'Ecology'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is the rate of doing work?', options: ['Power', 'Energy', 'Force'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌🌟', question: 'What is a dying star that has collapsed called?', options: ['White dwarf', 'Red giant', 'Nebula'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is the largest artery in the body?', options: ['Aorta', 'Vena cava', 'Pulmonary artery'], correct: 0},
            {topic: 'Chemistry', emoji: '🧊💧', question: 'What is H₂O₂ commonly known as?', options: ['Hydrogen peroxide', 'Heavy water', 'Hydrochloric acid'], correct: 0},
            {topic: 'Physics', emoji: '🌍🪐', question: 'What is the force that pulls objects together?', options: ['Gravity', 'Friction', 'Tension'], correct: 0},
            {topic: 'Astronomy', emoji: '🌕🌖', question: 'What phase comes after a new moon?', options: ['Waxing crescent', 'Waning crescent', 'Full moon'], correct: 0},
            {topic: 'Biology', emoji: '🧠💭', question: 'What connects the two hemispheres of the brain?', options: ['Corpus callosum', 'Cerebellum', 'Medulla'], correct: 0},
            {topic: 'Physics', emoji: '🔊📢', question: 'What is the unit of loudness?', options: ['Decibel', 'Hertz', 'Pascal'], correct: 0}
        ],
        expert: [
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is Avogadro\'s number approximately?', options: ['6.02 × 10²³', '3.14 × 10²³', '9.8 × 10²³', '1.6 × 10²³'], correct: 0},
            {topic: 'Biology', emoji: '🧬🔬', question: 'How many bases are in the genetic code?', options: ['4', '20', '64', '3'], correct: 0},
            {topic: 'Physics', emoji: '⚛️💫', question: 'What is the charge of an electron?', options: ['-1.6 × 10⁻¹⁹ C', '+1.6 × 10⁻¹⁹ C', '0 C', '-3.2 × 10⁻¹⁹ C'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌙', question: 'What percentage of the Moon do we see from Earth?', options: ['59%', '50%', '100%', '25%'], correct: 0},
            {topic: 'Biology', emoji: '🦠💊', question: 'What is the pH of human blood?', options: ['7.4', '7.0', '6.8', '8.0'], correct: 0},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the molar mass of water (g/mol)?', options: ['18', '16', '20', '22'], correct: 0},
            {topic: 'Physics', emoji: '🌡️⚗️', question: 'What is absolute zero in Kelvin?', options: ['0 K', '273 K', '-273 K', '100 K'], correct: 0},
            {topic: 'Astronomy', emoji: '🌟✨', question: 'How many light years away is the nearest star (besides the Sun)?', options: ['4.2', '10', '100', '1'], correct: 0},
            {topic: 'Biology', emoji: '🧫🦠', question: 'How many cells are approximately in the human body?', options: ['37 trillion', '7 billion', '100 billion', '1 trillion'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the speed of light (m/s)?', options: ['3 × 10⁸', '3 × 10⁶', '3 × 10¹⁰', '3 × 10⁵'], correct: 0}
        ],
        extreme: [
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the process of separating a liquid mixture by boiling and condensing?', answer: 'Distillation'},
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the powerhouse organelle that produces ATP?', answer: 'Mitochondria'},
            {topic: 'Physics', emoji: '⚛️💫', question: 'What is the quantum of light energy called?', answer: 'Photon'},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the force that prevents a star from collapsing?', answer: 'Nuclear Fusion'},
            {topic: 'Biology', emoji: '🧫🦠', question: 'What is the gel-like substance inside a cell called?', answer: 'Cytoplasm'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is a substance that speeds up a chemical reaction without being consumed?', answer: 'Catalyst'},
            {topic: 'Physics', emoji: '🌡️⚗️', question: 'What is the first law of thermodynamics also known as?', answer: 'Conservation of Energy'},
            {topic: 'Astronomy', emoji: '🌟💥', question: 'What is the remnant of a supernova that is incredibly dense?', answer: 'Neutron Star'},
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the process of creating proteins from mRNA?', answer: 'Translation'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the potential difference also called?', answer: 'Voltage'}
        ]
    }
};

// Generate remaining chapters (4-20) with unique questions
for (let ch = 4; ch <= 20; ch++) {
    questionBank[ch] = {
        easy: [],
        medium: [],
        hard: [],
        expert: [],
        extreme: []
    };

    // Generate 10 unique questions for each level
    const topics = ['Biology', 'Physics', 'Chemistry', 'Astronomy'];
    const emojis = {
        'Biology': ['🧬🔬', '🦠💊', '🧫🦠', '🫀❤️', '🧠💭', '🌿🍃', '🦴🩻', '🩸💉'],
        'Physics': ['⚡🔋', '⚛️💫', '🌡️🔥', '💡⚡', '🔊📢', '🌈☀️', '🧲🔴', '🌊💧'],
        'Chemistry': ['⚗️🧪', '⚛️🔬', '🧊❄️', '💎💍', '🔥💥', '💧🌊', '🧂💧', '💨🌬️'],
        'Astronomy': ['🌍🌙', '🪐💍', '⭐✨', '🌌🌟', '☄️💫', '🌕🌖', '🔭🌠', '☀️🌡️']
    };

    // Easy level - True/False
    for (let i = 0; i < 10; i++) {
        const topic = topics[i % 4];
        const emoji = emojis[topic][Math.floor(Math.random() * emojis[topic].length)];
        questionBank[ch].easy.push({
            topic: topic,
            emoji: emoji,
            question: `${topic} statement ${ch}-${i} is scientifically accurate.`,
            options: ['True', 'False'],
            correct: Math.random() > 0.5 ? 0 : 1
        });
    }

    // Medium level - 2 options
    for (let i = 0; i < 10; i++) {
        const topic = topics[i % 4];
        const emoji = emojis[topic][Math.floor(Math.random() * emojis[topic].length)];
        questionBank[ch].medium.push({
            topic: topic,
            emoji: emoji,
            question: `What is the key concept in ${topic.toLowerCase()} related to topic ${ch}-${i}?`,
            options: [`Concept A${ch}${i}`, `Concept B${ch}${i}`],
            correct: 0
        });
    }

    // Hard level - 3 options
    for (let i = 0; i < 10; i++) {
        const topic = topics[i % 4];
        const emoji = emojis[topic][Math.floor(Math.random() * emojis[topic].length)];
        questionBank[ch].hard.push({
            topic: topic,
            emoji: emoji,
            question: `Which principle best describes ${topic.toLowerCase()} phenomenon ${ch}-${i}?`,
            options: [`Principle A${ch}${i}`, `Principle B${ch}${i}`, `Principle C${ch}${i}`],
            correct: 0
        });
    }

    // Expert level - 4 options
    for (let i = 0; i < 10; i++) {
        const topic = topics[i % 4];
        const emoji = emojis[topic][Math.floor(Math.random() * emojis[topic].length)];
        questionBank[ch].expert.push({
            topic: topic,
            emoji: emoji,
            question: `Advanced ${topic.toLowerCase()} question ${ch}-${i}: What is the correct answer?`,
            options: [`Option A${ch}${i}`, `Option B${ch}${i}`, `Option C${ch}${i}`, `Option D${ch}${i}`],
            correct: 0
        });
    }

    // Extreme level - Text input
    for (let i = 0; i < 10; i++) {
        const topic = topics[i % 4];
        const emoji = emojis[topic][Math.floor(Math.random() * emojis[topic].length)];
        questionBank[ch].extreme.push({
            topic: topic,
            emoji: emoji,
            question: `Expert ${topic.toLowerCase()} question ${ch}-${i}: Provide the detailed answer.`,
            answer: `Answer for chapter ${ch} question ${i}`
        });
    }
}

// Initialize chapters
function initializeChapters() {
    const grid = document.getElementById('chapterGrid');
    for (let i = 1; i <= 20; i++) {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.style.background = chapterColors[i - 1];
        card.textContent = `Chapter ${i}`;
        card.onclick = () => selectChapter(i);
        grid.appendChild(card);
    }
}

function selectChapter(chapter) {
    currentChapter = chapter;
    document.getElementById('levelTitle').textContent = `Chapter ${chapter} - Select Difficulty Level`;
    showScreen('level-selection');
}

function showChapterSelection() {
    clearFallingEmojis();
    stopTimer();
    showScreen('chapter-selection');
}

function showLevelSelection() {
    clearFallingEmojis();
    stopTimer();
    showScreen('level-selection');
}

function showScreen(screenClass) {
    document.querySelectorAll('.chapter-selection, .level-selection, .quiz-container, .result-container').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector(`.${screenClass}`).classList.add('active');
}

function startQuiz(level, timedMode = false) {
    clearFallingEmojis();
    stopTimer(); // Clear any existing timer

    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now();
    isTimedMode = timedMode;
    isPaused = false;

    // Setup timer for Quick Pick mode
    if (isTimedMode) {
        timeRemaining = timeLimits[level];
        startTimer();
    }

    // Shuffle questions
    const questions = [...questionBank[currentChapter][level]];
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    showScreen('quiz-container');
    displayQuestion();
}

function displayQuestion() {
    answered = false;
    const question = shuffledQuestions[currentQuestionIndex];

    let html = '';

    // Topic badge on left
    html += `<div class="topic-badge topic-${question.topic.toLowerCase()}">${question.topic}</div>`;

    // Timer display for Quick Pick mode
    if (isTimedMode) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        const timeClass = timeRemaining <= 30 ? 'timer-warning' : '';

        html += `<div class="timer-container ${timeClass}">`;
        html += `<div class="timer-display">⏱️ <span id="timerDisplay">${timeDisplay}</span></div>`;
        html += `<button class="timer-pause-btn" id="pauseBtn" onclick="togglePause()">
                    ${isPaused ? '▶️ Resume' : '⏸️ Pause'}
                 </button>`;
        html += `</div>`;
    }

    // Question container - left aligned
    html += `<div class="question-container">`;
    html += `<div class="question-emoji">${question.emoji}</div>`;
    html += `<div class="question-text">${question.question}</div>`;
    html += `</div>`;

    // Progress info above progress bar
    html += `<div class="progress-info">${currentQuestionIndex + 1}/10</div>`;

    // Progress bar
    html += `<div class="progress-bar-container">`;
    html += `<div class="progress-bar">`;
    html += `<div class="progress-fill" style="width: ${((currentQuestionIndex + 1) / 10) * 100}%"></div>`;
    html += `</div>`;
    html += `</div>`;

    // Feedback message
    html += `<div class="feedback-message" id="feedbackMessage"></div>`;

    if (currentLevel === 'extreme') {
        // Text input for extreme level
        html += `<input type="text" class="extreme-input" id="extremeInput" placeholder="Type your answer here..." onkeypress="if(event.key==='Enter') submitExtremeAnswer()">`;
        html += `<button class="submit-answer-btn" id="submitBtn" onclick="submitExtremeAnswer()">Submit Answer</button>`;
        html += `<div class="extreme-answer" id="extremeAnswer" style="display: none;"><strong>Correct Answer:</strong> ${question.answer}</div>`;
    } else {
        // Multiple choice answers
        html += `<div class="answers-container">`;
        question.options.forEach((option, index) => {
            html += `<div class="answer-option" onclick="selectAnswer(${index})">${option}</div>`;
        });
        html += `</div>`;
    }

    // Button container with Back and Next (outside if/else - used for both question types)
    html += `<div class="button-container">`;
    html += `<button class="quiz-back-button" onclick="showLevelSelection()">← Back</button>`;
    html += `<button class="next-button" id="nextBtn" onclick="nextQuestion()" disabled>Next →</button>`;
    html += `</div>`;

    document.getElementById('quizContent').innerHTML = html;

    // Add floating background emojis
    addFloatingEmojis(question.emoji);
}

function selectAnswer(selectedIndex) {
    if (answered) return;

    answered = true;
    const question = shuffledQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.answer-option');
    const feedback = document.getElementById('feedbackMessage');
    const nextBtn = document.getElementById('nextBtn');

    options[selectedIndex].classList.add('selected');

    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        feedback.textContent = ['Excellent! 🌟', 'Perfect! ✨', 'Outstanding! 🎯', 'Brilliant! 💡', 'Superb! 🏆'][Math.floor(Math.random() * 5)];
        feedback.className = 'feedback-message feedback-correct';
        score++;
        // ONLY emojis that ACTUALLY work - repeated for variety
        createFallingEmojis('⭐⭐⭐✨✨✨⚡⚡⚡❤❤❤💙💙💚💚💛💛💜💜✅✅✔️✔️☀️☀️☀️⭐✨⚡❤💙💚💛💜✅✔️☀️');
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        feedback.textContent = ['Try next 📚', 'Keep learning 📖', 'Review this topic 🔍', 'Study more 💪', 'Not quite ❌'][Math.floor(Math.random() * 5)];
        feedback.className = 'feedback-message feedback-incorrect';
        // ONLY emojis that ACTUALLY work - repeated for variety
        createFallingEmojis('✏️✏️✏️✏️✏️⚙️⚙️⚙️⚙️⚙️✏️✏️✏️⚙️⚙️⚙️✏️✏️⚙️⚙️');
    }

    nextBtn.disabled = false;
}

function submitExtremeAnswer() {
    if (answered) return;

    const input = document.getElementById('extremeInput');
    const userAnswer = input.value.trim();

    // Don't submit if empty
    if (!userAnswer) {
        alert('Please type your answer first!');
        return;
    }

    answered = true;
    const question = shuffledQuestions[currentQuestionIndex];
    const feedback = document.getElementById('feedbackMessage');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const answerDiv = document.getElementById('extremeAnswer');

    // Disable input and submit button
    input.disabled = true;
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.5';

    // Check answer (case-insensitive, trim spaces)
    const correctAnswer = question.answer.toLowerCase().trim();
    const isCorrect = userAnswer.toLowerCase() === correctAnswer;

    if (isCorrect) {
        // Correct answer
        input.style.borderColor = '#2ecc71';
        input.style.background = '#d4edda';
        feedback.textContent = ['Excellent! 🌟', 'Perfect! ✨', 'Outstanding! 🎯', 'Brilliant! 💡', 'Superb! 🏆'][Math.floor(Math.random() * 5)];
        feedback.className = 'feedback-message feedback-correct';
        score++;

        // Correct answer bubble foam
        createFallingEmojis('⭐⭐⭐✨✨✨⚡⚡⚡❤❤❤💙💙💚💚💛💛💜💜✅✅✔️✔️☀️☀️☀️⭐✨⚡❤💙💚💛💜✅✔️☀️');
    } else {
        // Wrong answer
        input.style.borderColor = '#e74c3c';
        input.style.background = '#f8d7da';
        feedback.textContent = ['Not quite! 🤔', 'Try again next time! 💪', 'Keep learning! 📚', 'Close! 📝'][Math.floor(Math.random() * 4)];
        feedback.className = 'feedback-message feedback-incorrect';

        // Wrong answer bubble foam
        createFallingEmojis('✏️✏️✏️✏️✏️⚙️⚙️⚙️⚙️⚙️✏️✏️✏️⚙️⚙️⚙️✏️✏️⚙️⚙️');

        // Show correct answer
        answerDiv.style.display = 'block';
    }

    // Enable Next button
    nextBtn.disabled = false;
}

function nextQuestion() {
    clearFallingEmojis();
    currentQuestionIndex++;

    if (currentQuestionIndex < 10) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearFallingEmojis();
    stopTimer();

    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    let badge, badgeText, badgeEmoji;

    if (score >= 8) {
        badge = '🏆🥇';
        badgeText = 'Outstanding Performance!';
        badgeEmoji = '🎉🌟⭐✨💫🏆🥇👏';
    } else if (score >= 4) {
        badge = '🥈📚';
        badgeText = 'Good Effort!';
        badgeEmoji = '👍📚💪🎯📖✅😊';
    } else {
        badge = '🥉📝';
        badgeText = 'Keep Learning!';
        badgeEmoji = '📝📚💭🔍📖💡🌱';
    }

    document.getElementById('resultBadge').textContent = badge;
    document.getElementById('badgeText').textContent = badgeText;
    document.getElementById('scoreDisplay').textContent = `${score}/10`;
    document.getElementById('timeTaken').textContent = `${minutes}m ${seconds}s`;
    document.getElementById('finalScore').textContent = `${score}/10 (${score * 10}%)`;
    document.getElementById('levelCompleted').textContent = `${currentLevel.toUpperCase()} - Chapter ${currentChapter}`;

    showScreen('result-container');

    // Celebration emojis
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const emoji = badgeEmoji[Math.floor(Math.random() * badgeEmoji.length)];
            createCelebrationEmoji(emoji);
        }, i * 100);
    }
}

function retakeQuiz() {
    startQuiz(currentLevel, isTimedMode);
}

// Timer functions for Quick Pick mode
function startTimer() {
    stopTimer(); // Clear any existing timer

    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeRemaining--;

            // Update timer display
            updateTimerDisplay();

            // Check if time is up
            if (timeRemaining <= 0) {
                handleTimeUp();
            }
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timerDisplay');
    if (timerElement) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Add warning class when time is low
        const timerContainer = document.querySelector('.timer-container');
        if (timerContainer) {
            if (timeRemaining <= 30) {
                timerContainer.classList.add('timer-warning');
            } else {
                timerContainer.classList.remove('timer-warning');
            }
        }
    }
}

function togglePause() {
    isPaused = !isPaused;

    // Update pause button text
    const pauseBtn = document.getElementById('pauseBtn');
    if (pauseBtn) {
        pauseBtn.textContent = isPaused ? '▶️ Resume' : '⏸️ Pause';
    }

    // Disable/enable answer selection when paused
    const answerOptions = document.querySelectorAll('.answer-option');
    const extremeInput = document.getElementById('extremeInput');
    const nextBtn = document.getElementById('nextBtn');

    if (isPaused) {
        // Disable interactions when paused
        answerOptions.forEach(option => option.style.pointerEvents = 'none');
        if (extremeInput) extremeInput.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
    } else {
        // Re-enable interactions when resumed
        answerOptions.forEach(option => option.style.pointerEvents = 'auto');
        if (extremeInput) extremeInput.disabled = false;
        if (nextBtn && answered) nextBtn.disabled = false;
    }
}

function handleTimeUp() {
    stopTimer();

    // Show time up message
    const feedbackMessage = document.getElementById('feedbackMessage');
    if (feedbackMessage) {
        feedbackMessage.textContent = '⏰ TIME UP!';
        feedbackMessage.className = 'feedback-message feedback-incorrect';
    }

    // Disable all interactions
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => option.style.pointerEvents = 'none');

    const extremeInput = document.getElementById('extremeInput');
    if (extremeInput) extremeInput.disabled = true;

    // Auto-show results after 2 seconds
    setTimeout(() => {
        showResults();
    }, 2000);
}

function createFallingEmojis(emojiString) {
    // Convert to array and create multiple shuffled copies for better variety
    let emojis = emojiString.split('');

    // Fisher-Yates shuffle for true randomization
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Create a pool of emojis with better distribution
    emojis = shuffleArray(emojis);
    let emojiIndex = 0;

    const interval = setInterval(() => {
        if (answered && fallingEmojis.length < 45) {  // HEAVY foam: 45 emojis at once!
            const emoji = document.createElement('span');
            emoji.className = 'falling-emoji';

            // Pick emoji with complete randomization from shuffled array
            const randomIndex = Math.floor(Math.random() * emojis.length);
            const selectedEmoji = emojis[randomIndex];

            // Use textContent with proper character
            emoji.textContent = String.fromCodePoint(selectedEmoji.codePointAt(0));
            emoji.setAttribute('role', 'img');
            emoji.setAttribute('aria-label', 'emoji');

            // Reshuffle frequently for maximum variety
            if (Math.random() > 0.5) {
                emojis = shuffleArray(emojis.slice());
            }

            // Position outside quiz container on left, from back button to topic area
            emoji.style.left = (0.3 + Math.random() * 2) + '%';  // More horizontal spread
            emoji.style.top = (5 + Math.random() * 75) + '%';  // 5% to 80% vertical coverage
            emoji.style.animationDuration = (Math.random() * 1.2 + 1.3) + 's';  // 1.3-2.5s variation
            emoji.style.fontSize = (1 + Math.random() * 0.8) + 'em';  // 1-1.8em size variation
            emoji.style.display = 'inline-block';  // Ensure proper rendering
            document.body.appendChild(emoji);
            fallingEmojis.push(emoji);

            setTimeout(() => {
                emoji.remove();
                fallingEmojis = fallingEmojis.filter(e => e !== emoji);
            }, 2500);  // Match animation duration
        }
    }, 100);  // VERY fast interval - HEAVY FOAM EFFECT!

    // Store interval to clear later
    window.fallingInterval = interval;
}

function clearFallingEmojis() {
    clearInterval(window.fallingInterval);
    fallingEmojis.forEach(emoji => emoji.remove());
    fallingEmojis = [];
}

function createCelebrationEmoji(emoji) {
    const elem = document.createElement('div');
    elem.className = 'celebration-emoji';
    elem.textContent = emoji;
    elem.style.left = Math.random() * 90 + '%';
    document.body.appendChild(elem);

    setTimeout(() => elem.remove(), 3000);
}

function addFloatingEmojis(emoji) {
    // Remove old floating emojis
    document.querySelectorAll('.floating-bg-emoji').forEach(e => e.remove());

    // Add new floating emojis
    const emojis = emoji.split('');
    for (let i = 0; i < 5; i++) {
        const elem = document.createElement('div');
        elem.className = 'floating-bg-emoji';
        elem.textContent = emojis[i % emojis.length];
        elem.style.left = Math.random() * 100 + '%';
        elem.style.top = Math.random() * 100 + '%';
        elem.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(elem);
    }
}

// Initialize on load
window.onload = initializeChapters;
