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
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the process of cell division called?', options: ['Mitosis', 'Meiosis', 'Osmosis'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the unit of force?', options: ['Newton', 'Joule', 'Watt'], correct: 0},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the pH of pure water?', options: ['7', '0', '14'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌙', question: 'How many planets are in our solar system?', options: ['8', '9', '7'], correct: 0},
            {topic: 'Biology', emoji: '🫀❤️', question: 'Which blood type is the universal donor?', options: ['O negative', 'AB positive', 'A positive'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'At what temperature does water boil (Celsius)?', options: ['100°C', '0°C', '50°C'], correct: 0},
            {topic: 'Chemistry', emoji: '💎💍', question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Fe'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the closest star to Earth?', options: ['The Sun', 'Proxima Centauri', 'Sirius'], correct: 0},
            {topic: 'Biology', emoji: '🦴🦷', question: 'How many bones are in the adult human body?', options: ['206', '186', '226'], correct: 0},
            {topic: 'Physics', emoji: '🔊🎵', question: 'What is the speed of sound in air (approximately)?', options: ['343 m/s', '300 m/s', '400 m/s'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🧬💉', question: 'What does RNA stand for?', options: ['Ribonucleic Acid', 'Ribose Nucleic Acid', 'Ribo Nucleotide Acid', 'Radical Nucleic Acid'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is Einstein\'s famous equation?', options: ['E=mc²', 'F=ma', 'a²+b²=c²', 'V=IR'], correct: 0},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the atomic number of carbon?', options: ['6', '12', '8', '14'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌙', question: 'How long does it take for Earth to orbit the Sun?', options: ['365.25 days', '360 days', '366 days', '364 days'], correct: 0},
            {topic: 'Biology', emoji: '🫀❤️', question: 'What is the largest organ in the human body?', options: ['Skin', 'Liver', 'Brain', 'Heart'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is absolute zero in Celsius?', options: ['-273.15°C', '-100°C', '0°C', '-200°C'], correct: 0},
            {topic: 'Chemistry', emoji: '💎💍', question: 'What is the most abundant element in the universe?', options: ['Hydrogen', 'Helium', 'Oxygen', 'Carbon'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is a light-year?', options: ['Distance light travels in a year', 'Time for light to reach Earth', 'A year on a light planet', 'Speed of light'], correct: 0},
            {topic: 'Biology', emoji: '🦴🦷', question: 'What is the study of plants called?', options: ['Botany', 'Zoology', 'Ecology', 'Biology'], correct: 0},
            {topic: 'Physics', emoji: '🔊🎵', question: 'What causes sound waves?', options: ['Vibrations', 'Light', 'Heat', 'Pressure'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'In what year was the structure of DNA discovered?', answer: '1953'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'Name the scientist who formulated the three laws of motion', answer: 'Isaac Newton'},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is Avogadro\'s number?', answer: '6.02 × 10²³ or 6.022 × 10²³'},
            {topic: 'Astronomy', emoji: '🌍🌙', question: 'What is the name of our galaxy?', answer: 'Milky Way'},
            {topic: 'Biology', emoji: '🫀❤️', question: 'How many chambers does the human heart have?', answer: '4 or Four'},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What does the first law of thermodynamics state?', answer: 'Energy cannot be created or destroyed, only converted'},
            {topic: 'Chemistry', emoji: '💎💍', question: 'What property is used to organize the periodic table?', answer: 'Atomic number'},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'Name the largest planet in our solar system', answer: 'Jupiter'},
            {topic: 'Biology', emoji: '🦴🦷', question: 'What percentage of the human body is water?', answer: '60% or About 60%'},
            {topic: 'Physics', emoji: '🔊🎵', question: 'What is the Doppler effect?', answer: 'Change in frequency due to motion or relative motion'}
        ]
    },
    2: { // Chapter 2
        easy: [
            {topic: 'Biology', emoji: '🌱🌿', question: 'Photosynthesis occurs in the chloroplasts.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'Water boils at 100 degrees Celsius at sea level.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧊❄️', question: 'Ice is less dense than liquid water.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'There are billions of galaxies in the universe.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐝🌺', question: 'Bees help in pollination.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔦💡', question: 'Light is a form of energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'Fire needs oxygen to burn.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'Stars produce their own light.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦎🦖', question: 'Reptiles are cold-blooded animals.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🧲⚙️', question: 'Magnets have north and south poles.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🫁💨', question: 'What organ is responsible for breathing?', options: ['Lungs', 'Liver'], correct: 0},
            {topic: 'Physics', emoji: '⚖️📏', question: 'What is the basic unit of mass?', options: ['Kilogram', 'Meter'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the smallest unit of an element?', options: ['Atom', 'Molecule'], correct: 0},
            {topic: 'Astronomy', emoji: '🌑🌚', question: 'What phase is when the moon is not visible?', options: ['New Moon', 'Full Moon'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What connects muscles to bones?', options: ['Tendons', 'Ligaments'], correct: 0},
            {topic: 'Physics', emoji: '🌡️❄️', question: 'What is the freezing point of water in Celsius?', options: ['0°C', '32°C'], correct: 0},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the chemical formula for water?', options: ['H₂O', 'CO₂'], correct: 0},
            {topic: 'Astronomy', emoji: '🔴⭕', question: 'What is Mars known as?', options: ['Red Planet', 'Blue Planet'], correct: 0},
            {topic: 'Biology', emoji: '👁️👀', question: 'What part of the eye gives it color?', options: ['Iris', 'Pupil'], correct: 0},
            {topic: 'Physics', emoji: '🔌⚡', question: 'What is the flow of electrons called?', options: ['Electric current', 'Voltage'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🩸💉', question: 'What protein carries oxygen in blood?', options: ['Hemoglobin', 'Insulin', 'Collagen'], correct: 0},
            {topic: 'Physics', emoji: '🌈🔆', question: 'How many colors are in a rainbow?', options: ['7', '5', '6'], correct: 0},
            {topic: 'Chemistry', emoji: '🧂⚗️', question: 'What is the pH of a neutral solution?', options: ['7', '0', '14'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'How many moons does Earth have?', options: ['1', '2', '0'], correct: 0},
            {topic: 'Biology', emoji: '🧬🔬', question: 'How many chromosomes do humans have?', options: ['46', '23', '92'], correct: 0},
            {topic: 'Physics', emoji: '🏃💨', question: 'What is the SI unit of velocity?', options: ['m/s', 'km/h', 'm/s²'], correct: 0},
            {topic: 'Chemistry', emoji: '💎🔷', question: 'What is the hardest natural substance?', options: ['Diamond', 'Quartz', 'Steel'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌎', question: 'What layer protects Earth from UV rays?', options: ['Ozone layer', 'Atmosphere', 'Ionosphere'], correct: 0},
            {topic: 'Biology', emoji: '🦷😁', question: 'How many teeth does an adult human have?', options: ['32', '28', '30'], correct: 0},
            {topic: 'Physics', emoji: '🎵🔊', question: 'What is the unit of frequency?', options: ['Hertz', 'Decibel', 'Watt'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🧬💊', question: 'What type of cell division produces gametes?', options: ['Meiosis', 'Mitosis', 'Binary fission', 'Budding'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the SI unit of electric charge?', options: ['Coulomb', 'Ampere', 'Volt', 'Ohm'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is the atomic mass of hydrogen?', options: ['1', '2', '0', '4'], correct: 0},
            {topic: 'Astronomy', emoji: '🌙🌍', question: 'How long does the Moon take to orbit Earth?', options: ['27.3 days', '30 days', '24 hours', '365 days'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is the normal human heart rate (bpm)?', options: ['60-100', '50-70', '100-120', '40-60'], correct: 0},
            {topic: 'Physics', emoji: '🌊📡', question: 'What type of wave is light?', options: ['Electromagnetic', 'Mechanical', 'Longitudinal', 'Sound'], correct: 0},
            {topic: 'Chemistry', emoji: '🧊💧', question: 'What is the process of solid to gas called?', options: ['Sublimation', 'Evaporation', 'Condensation', 'Melting'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️🔥', question: 'What is the Sun mainly made of?', options: ['Hydrogen', 'Helium', 'Oxygen', 'Carbon'], correct: 0},
            {topic: 'Biology', emoji: '🧠🧬', question: 'What is the basic unit of the nervous system?', options: ['Neuron', 'Nephron', 'Cell', 'Tissue'], correct: 0},
            {topic: 'Physics', emoji: '🚀🌌', question: 'What is the escape velocity from Earth?', options: ['11.2 km/s', '9.8 m/s', '7.9 km/s', '15 km/s'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🌿🍃', question: 'Name the green pigment in plants that captures light', answer: 'Chlorophyll'},
            {topic: 'Physics', emoji: '🌡️📐', question: 'What is the SI unit of temperature?', answer: 'Kelvin'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the name of the scientist who developed the periodic table?', answer: 'Dmitri Mendeleev or Mendeleev'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the name of the telescope launched in 1990?', answer: 'Hubble Space Telescope or Hubble'},
            {topic: 'Biology', emoji: '🧬🔬', question: 'What does ATP stand for?', answer: 'Adenosine Triphosphate'},
            {topic: 'Physics', emoji: '💡⚡', question: 'Who invented the light bulb?', answer: 'Thomas Edison or Edison'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the molecular weight of water?', answer: '18 or 18 g/mol'},
            {topic: 'Astronomy', emoji: '🌍🔄', question: 'How long does Earth take to complete one rotation?', answer: '24 hours or 1 day'},
            {topic: 'Biology', emoji: '🦴🏥', question: 'What is the longest bone in the human body?', answer: 'Femur'},
            {topic: 'Physics', emoji: '🌊🔊', question: 'What is the speed of light in vacuum (in m/s)?', answer: '299,792,458 m/s or 3 × 10⁸ m/s'}
        ]
    },
    3: { // Chapter 3
        easy: [
            {topic: 'Biology', emoji: '🌳🍂', question: 'Trees produce oxygen during photosynthesis.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎾⚽', question: 'Objects in motion tend to stay in motion.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🥤💧', question: 'Carbon dioxide makes soda fizzy.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '☄️💥', question: 'Meteors are also called shooting stars.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐍🦎', question: 'Snakes are vertebrates.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔨⚙️', question: 'A lever is a simple machine.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🍋🍊', question: 'Citrus fruits contain citric acid.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌕🌖', question: 'The Moon goes through phases.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐸🦗', question: 'Frogs are amphibians.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '⏱️⏰', question: 'Time is measured in seconds.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧫🔬', question: 'What is the study of cells called?', options: ['Cytology', 'Geology'], correct: 0},
            {topic: 'Physics', emoji: '🎸🎵', question: 'What determines the pitch of sound?', options: ['Frequency', 'Amplitude'], correct: 0},
            {topic: 'Chemistry', emoji: '🔴🔵', question: 'What color does litmus paper turn in acid?', options: ['Red', 'Blue'], correct: 0},
            {topic: 'Astronomy', emoji: '🛸🌌', question: 'What is the study of space called?', options: ['Astronomy', 'Astrology'], correct: 0},
            {topic: 'Biology', emoji: '🌸🌺', question: 'What part of the flower produces pollen?', options: ['Stamen', 'Pistil'], correct: 0},
            {topic: 'Physics', emoji: '🏔️⛰️', question: 'What type of energy does a rock at a cliff have?', options: ['Potential', 'Kinetic'], correct: 0},
            {topic: 'Chemistry', emoji: '🧊🔥', question: 'Is melting ice a physical or chemical change?', options: ['Physical', 'Chemical'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌞', question: 'What causes day and night on Earth?', options: ['Rotation', 'Revolution'], correct: 0},
            {topic: 'Biology', emoji: '🦋🐛', question: 'What is the transformation of a caterpillar called?', options: ['Metamorphosis', 'Evolution'], correct: 0},
            {topic: 'Physics', emoji: '🎢🎪', question: 'What force acts against motion?', options: ['Friction', 'Momentum'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🧫', question: 'What is the genetic material in cells?', options: ['DNA', 'Protein', 'Lipid'], correct: 0},
            {topic: 'Physics', emoji: '🌊⚡', question: 'What is the SI unit of energy?', options: ['Joule', 'Newton', 'Watt'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'How many electrons does carbon have?', options: ['6', '12', '8'], correct: 0},
            {topic: 'Astronomy', emoji: '🌕🌑', question: 'How long is a lunar cycle?', options: ['29.5 days', '30 days', '28 days'], correct: 0},
            {topic: 'Biology', emoji: '🫀❤️', question: 'Which chamber pumps blood to the body?', options: ['Left ventricle', 'Right atrium', 'Left atrium'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is the refraction of light?', options: ['Bending of light', 'Bouncing of light', 'Absorption of light'], correct: 0},
            {topic: 'Chemistry', emoji: '🧂⚗️', question: 'What is formed when acid reacts with base?', options: ['Salt and water', 'Gas', 'Heat only'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐✨', question: 'How many planets have rings?', options: ['4', '1', '2'], correct: 0},
            {topic: 'Biology', emoji: '🧠🦴', question: 'What protects the brain?', options: ['Skull', 'Spine', 'Ribs'], correct: 0},
            {topic: 'Physics', emoji: '🔊🎶', question: 'What is the loudness of sound measured in?', options: ['Decibels', 'Hertz', 'Watts'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🔬', question: 'What type of organism is a bacteria?', options: ['Prokaryote', 'Eukaryote', 'Virus', 'Fungi'], correct: 0},
            {topic: 'Physics', emoji: '🔋⚡', question: 'What is the SI unit of power?', options: ['Watt', 'Joule', 'Ampere', 'Volt'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'What gas is produced when metals react with acid?', options: ['Hydrogen', 'Oxygen', 'Carbon dioxide', 'Nitrogen'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the brightest star in the night sky?', options: ['Sirius', 'Polaris', 'Betelgeuse', 'Vega'], correct: 0},
            {topic: 'Biology', emoji: '🌱🧬', question: 'What is the study of heredity called?', options: ['Genetics', 'Evolution', 'Ecology', 'Taxonomy'], correct: 0},
            {topic: 'Physics', emoji: '🎯🏹', question: 'What is Newton\'s first law also called?', options: ['Law of Inertia', 'Law of Acceleration', 'Law of Action', 'Law of Gravity'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is the most electronegative element?', options: ['Fluorine', 'Oxygen', 'Chlorine', 'Nitrogen'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌎', question: 'What percentage of Earth is covered by water?', options: ['71%', '50%', '80%', '60%'], correct: 0},
            {topic: 'Biology', emoji: '🔬🧪', question: 'What is the liquid part of blood called?', options: ['Plasma', 'Serum', 'Lymph', 'Hemoglobin'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is the specific heat capacity of water?', options: ['4.18 J/g°C', '2.09 J/g°C', '1.00 J/g°C', '3.14 J/g°C'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬💉', question: 'What is the name of the sugar found in DNA?', answer: 'Deoxyribose'},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the charge of an electron in coulombs?', answer: '-1.6 × 10⁻¹⁹ C or 1.6 × 10⁻¹⁹ C'},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is the most abundant gas in Earth\'s atmosphere?', answer: 'Nitrogen'},
            {topic: 'Astronomy', emoji: '🌞☀️', question: 'What is the surface temperature of the Sun (approximately)?', answer: '5,500°C or 5,778 K'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the smallest bone in the human body?', answer: 'Stapes or Stirrup'},
            {topic: 'Physics', emoji: '🌊🔊', question: 'What is the principle that states an object submerged in fluid experiences buoyant force?', answer: 'Archimedes Principle'},
            {topic: 'Chemistry', emoji: '💎🔷', question: 'What is the chemical formula for glucose?', answer: 'C₆H₁₂O₆'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the name of the nearest galaxy to the Milky Way?', answer: 'Andromeda'},
            {topic: 'Biology', emoji: '🫁💨', question: 'How many lobes does the right lung have?', answer: '3 or Three'},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is the phenomenon where light bends around corners?', answer: 'Diffraction'}
        ]
    },
    4: { // Chapter 4
        easy: [
            {topic: 'Biology', emoji: '🦴🏥', question: 'The human skeleton has over 200 bones.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌍📍', question: 'Gravity pulls objects toward Earth\'s center.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '💨🌬️', question: 'Air is a mixture of gases.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'Stars twinkle because of Earth\'s atmosphere.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦷😬', question: 'Enamel is the hardest substance in the human body.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔦🌙', question: 'The Moon reflects light from the Sun.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪💧', question: 'Pure water is a good conductor of electricity.', options: ['True', 'False'], correct: 1},
            {topic: 'Astronomy', emoji: '🌎🌍', question: 'Earth is the third planet from the Sun.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🌺🐝', question: 'Flowers attract pollinators with colors and scents.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🏃💨', question: 'Speed is the rate of change of distance.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🧫', question: 'What is the basic building block of life?', options: ['Cell', 'Tissue'], correct: 0},
            {topic: 'Physics', emoji: '⚖️📊', question: 'What measures the amount of matter in an object?', options: ['Mass', 'Weight'], correct: 0},
            {topic: 'Chemistry', emoji: '🔬⚛️', question: 'What determines an element\'s identity?', options: ['Protons', 'Neutrons'], correct: 0},
            {topic: 'Astronomy', emoji: '🌓🌔', question: 'What causes solar eclipses?', options: ['Moon blocks Sun', 'Earth blocks Sun'], correct: 0},
            {topic: 'Biology', emoji: '🌿☀️', question: 'What do plants need for photosynthesis besides light?', options: ['CO₂ and water', 'Oxygen and water'], correct: 0},
            {topic: 'Physics', emoji: '🎭🔊', question: 'What is an echo?', options: ['Reflected sound', 'Original sound'], correct: 0},
            {topic: 'Chemistry', emoji: '🧂💎', question: 'What type of bond is in table salt?', options: ['Ionic', 'Covalent'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is a group of stars forming a pattern called?', options: ['Constellation', 'Galaxy'], correct: 0},
            {topic: 'Biology', emoji: '🩸💉', question: 'What carries blood away from the heart?', options: ['Arteries', 'Veins'], correct: 0},
            {topic: 'Physics', emoji: '🌡️📐', question: 'What is the SI unit of length?', options: ['Meter', 'Centimeter'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧠💭', question: 'How many neurons are in the human brain (approximately)?', options: ['86 billion', '100 million', '1 trillion'], correct: 0},
            {topic: 'Physics', emoji: '🚀🌌', question: 'What is Newton\'s third law?', options: ['Action-reaction', 'F=ma', 'Inertia'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the atomic number of oxygen?', options: ['8', '16', '6'], correct: 0},
            {topic: 'Astronomy', emoji: '🌞⭐', question: 'What powers the Sun?', options: ['Nuclear fusion', 'Nuclear fission', 'Combustion'], correct: 0},
            {topic: 'Biology', emoji: '👂🦻', question: 'How many bones are in the human ear?', options: ['3', '5', '2'], correct: 0},
            {topic: 'Physics', emoji: '🔊📢', question: 'What is the speed of sound in air at 20°C?', options: ['343 m/s', '300 m/s', '400 m/s'], correct: 0},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the boiling point of water at high altitude?', options: ['Less than 100°C', 'More than 100°C', 'Exactly 100°C'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌕', question: 'What is the distance from Earth to Moon?', options: ['384,400 km', '150 million km', '100,000 km'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'How many times does the heart beat per day?', options: ['100,000', '50,000', '200,000'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the SI unit of voltage?', options: ['Volt', 'Ampere', 'Ohm'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What base in DNA pairs with adenine?', options: ['Thymine', 'Cytosine', 'Guanine', 'Uracil'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is the wavelength range of visible light?', options: ['400-700 nm', '100-400 nm', '700-1000 nm', '200-600 nm'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What type of bond is strongest?', options: ['Covalent', 'Ionic', 'Hydrogen', 'Van der Waals'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What type of star is our Sun?', options: ['G-type main sequence', 'Red giant', 'White dwarf', 'Neutron star'], correct: 0},
            {topic: 'Biology', emoji: '🦠🧫', question: 'What organelle produces ATP for cells?', options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi apparatus'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚖️', question: 'What is the gravitational constant G?', options: ['6.67 × 10⁻¹¹', '9.8 × 10⁻¹⁰', '3.14 × 10⁻¹¹', '1.6 × 10⁻¹⁹'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is the oxidation state of oxygen in H₂O?', options: ['-2', '+2', '0', '-1'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'How many moons does Jupiter have (approximately)?', options: ['79', '50', '100', '25'], correct: 0},
            {topic: 'Biology', emoji: '🌱🍃', question: 'What is the waxy layer on plant leaves called?', options: ['Cuticle', 'Epidermis', 'Stomata', 'Mesophyll'], correct: 0},
            {topic: 'Physics', emoji: '🔬⚡', question: 'What is Planck\'s constant approximately?', options: ['6.63 × 10⁻³⁴', '3.00 × 10⁸', '1.38 × 10⁻²³', '9.11 × 10⁻³¹'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬💉', question: 'What enzyme is used to copy DNA in PCR?', answer: 'Taq polymerase or DNA polymerase'},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the mass of an electron (in kg)?', answer: '9.11 × 10⁻³¹ kg'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the name of the group 17 elements?', answer: 'Halogens'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the event horizon of a black hole?', answer: 'Point of no return or boundary where gravity prevents escape'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the scientific name for the kneecap?', answer: 'Patella'},
            {topic: 'Physics', emoji: '🌊📡', question: 'What is the Heisenberg Uncertainty Principle about?', answer: 'Cannot know both position and momentum precisely'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the angle between hydrogen atoms in water molecule?', answer: '104.5 degrees or 104.5°'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the name of the process that creates heavy elements in stars?', answer: 'Nucleosynthesis or Stellar nucleosynthesis'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the junction between two neurons called?', answer: 'Synapse'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the efficiency of an ideal Carnot engine dependent on?', answer: 'Temperature difference or Reservoir temperatures'}
        ]
    },
    5: { // Chapter 5
        easy: [
            {topic: 'Biology', emoji: '🌊🐠', question: 'Fish breathe through gills.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🧊', question: 'Temperature measures how hot or cold something is.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪🔬', question: 'Acids taste sour.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '☄️💥', question: 'Comets have tails made of ice and dust.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦅🐦', question: 'Birds have hollow bones.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'Density is mass divided by volume.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧂⚗️', question: 'Salt dissolves in water.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌞', question: 'Earth orbits the Sun in an ellipse.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🍎🌳', question: 'Fruits contain seeds.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔌💡', question: 'Conductors allow electricity to flow easily.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🦴🔬', question: 'What type of joint is the shoulder?', options: ['Ball and socket', 'Hinge'], correct: 0},
            {topic: 'Physics', emoji: '🌈🔆', question: 'What happens to light when it passes through a prism?', options: ['Disperses', 'Reflects'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is the lightest element?', options: ['Hydrogen', 'Helium'], correct: 0},
            {topic: 'Astronomy', emoji: '🌑🌚', question: 'What is the dark part of the Moon called?', options: ['Maria', 'Highlands'], correct: 0},
            {topic: 'Biology', emoji: '🫁💨', question: 'What gas do we exhale?', options: ['Carbon dioxide', 'Oxygen'], correct: 0},
            {topic: 'Physics', emoji: '🎢⚡', question: 'What type of energy does a moving car have?', options: ['Kinetic', 'Potential'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💧', question: 'What happens when you add water to acid?', options: ['Exothermic reaction', 'Endothermic reaction'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What holds galaxies together?', options: ['Gravity', 'Magnetism'], correct: 0},
            {topic: 'Biology', emoji: '🌱🌿', question: 'What is the male part of a flower called?', options: ['Stamen', 'Pistil'], correct: 0},
            {topic: 'Physics', emoji: '🔊🎵', question: 'What is amplitude in sound waves?', options: ['Loudness', 'Pitch'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🩸💉', question: 'What blood type is the universal recipient?', options: ['AB positive', 'O negative', 'A positive'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the relationship between voltage, current, and resistance?', options: ['V=IR', 'V=I/R', 'I=VR'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the valency of nitrogen?', options: ['3', '5', '2'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🛰️', question: 'What is the orbital period of Earth?', options: ['365.25 days', '360 days', '366 days'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is the colored part of the eye?', options: ['Iris', 'Cornea', 'Retina'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the SI unit of pressure?', options: ['Pascal', 'Bar', 'Atmosphere'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is the common name for sodium bicarbonate?', options: ['Baking soda', 'Washing soda', 'Caustic soda'], correct: 0},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the final stage of a massive star?', options: ['Black hole', 'White dwarf', 'Red giant'], correct: 0},
            {topic: 'Biology', emoji: '🧬🔬', question: 'What organelle makes proteins?', options: ['Ribosome', 'Mitochondria', 'Nucleus'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is absolute zero in Kelvin?', options: ['0 K', '-273 K', '273 K'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What kingdom do mushrooms belong to?', options: ['Fungi', 'Plantae', 'Protista', 'Bacteria'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the work-energy theorem?', options: ['Work = ΔKE', 'Work = Force', 'Work = Power', 'Work = Energy'], correct: 0},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the process of liquid to gas called?', options: ['Evaporation', 'Condensation', 'Sublimation', 'Deposition'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the closest star system to Earth?', options: ['Alpha Centauri', 'Sirius', 'Barnard\'s Star', 'Proxima Centauri'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is the function of ribosomes?', options: ['Protein synthesis', 'Energy production', 'DNA replication', 'Lipid synthesis'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is the index of refraction of water?', options: ['1.33', '1.00', '1.50', '2.00'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is the electron configuration of carbon?', options: ['1s² 2s² 2p²', '1s² 2s² 2p⁴', '1s² 2s² 2p⁶', '1s² 2p⁴'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is the Kuiper Belt?', options: ['Region beyond Neptune', 'Asteroid belt', 'Ring around Saturn', 'Cloud around Sun'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is the opening in leaves for gas exchange?', options: ['Stomata', 'Cuticle', 'Chloroplast', 'Vacuole'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is the Doppler shift?', options: ['Change in wave frequency', 'Change in wave amplitude', 'Change in wave speed', 'Change in wavelength'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the name of the molecule that carries genetic information from DNA to ribosomes?', answer: 'mRNA or Messenger RNA'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the SI unit of magnetic flux?', answer: 'Weber'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the most reactive metal in the periodic table?', answer: 'Francium'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the name of the theory that describes the origin of the universe?', answer: 'Big Bang Theory'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the scientific term for muscle pain?', answer: 'Myalgia'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the principle that states pressure applied to a confined fluid is transmitted equally?', answer: 'Pascal\'s Principle or Pascal\'s Law'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the common ion effect?', answer: 'Suppression of ionization by adding common ion'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the name of the boundary around a black hole from which nothing can escape?', answer: 'Event horizon'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the longest nerve in the human body?', answer: 'Sciatic nerve'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the SI unit of luminous intensity?', answer: 'Candela'}
        ]
    },
    6: { // Chapter 6
        easy: [
            {topic: 'Biology', emoji: '🌾🌽', question: 'Plants make their own food.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🧲🔩', question: 'Opposite magnetic poles attract.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🍬🧂', question: 'Sugar is a type of carbohydrate.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌠✨', question: 'The Milky Way is our galaxy.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦵💪', question: 'Muscles work in pairs.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '📱🔋', question: 'Batteries store chemical energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🌫️💨', question: 'Fog is water vapor.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌗🌘', question: 'Moon phases repeat every month.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐢🥚', question: 'Turtles lay eggs.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎈☁️', question: 'Hot air rises.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🧪', question: 'What carries genetic information?', options: ['DNA', 'Protein'], correct: 0},
            {topic: 'Physics', emoji: '🔭👁️', question: 'What bends light in a telescope?', options: ['Lens', 'Mirror'], correct: 0},
            {topic: 'Chemistry', emoji: '🧊💎', question: 'What is dry ice made of?', options: ['Solid CO₂', 'Solid H₂O'], correct: 0},
            {topic: 'Astronomy', emoji: '🌅🌄', question: 'What causes sunrise colors?', options: ['Light scattering', 'Cloud reflection'], correct: 0},
            {topic: 'Biology', emoji: '🍄🌿', question: 'What type of organism is yeast?', options: ['Fungus', 'Bacteria'], correct: 0},
            {topic: 'Physics', emoji: '🎯🎪', question: 'What keeps planets in orbit?', options: ['Gravity', 'Inertia'], correct: 0},
            {topic: 'Chemistry', emoji: '🧴🧼', question: 'What makes soap clean?', options: ['Surfactants', 'Alcohol'], correct: 0},
            {topic: 'Astronomy', emoji: '🌎🔄', question: 'What causes seasons on Earth?', options: ['Axial tilt', 'Distance from Sun'], correct: 0},
            {topic: 'Biology', emoji: '🐌🐚', question: 'What is a snail\'s shell made of?', options: ['Calcium carbonate', 'Keratin'], correct: 0},
            {topic: 'Physics', emoji: '🪂⬇️', question: 'What opposes falling objects?', options: ['Air resistance', 'Buoyancy'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the shape of DNA?', options: ['Double helix', 'Single strand', 'Triple helix'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is the SI unit of capacitance?', options: ['Farad', 'Henry', 'Coulomb'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the atomic number of sodium?', options: ['11', '23', '12'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is the age of the universe (approximately)?', options: ['13.8 billion years', '10 billion years', '20 billion years'], correct: 0},
            {topic: 'Biology', emoji: '🫀💉', question: 'What is the resting heart rate average?', options: ['70 bpm', '100 bpm', '50 bpm'], correct: 0},
            {topic: 'Physics', emoji: '🌊🔊', question: 'What type of wave is sound?', options: ['Longitudinal', 'Transverse', 'Standing'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is the solvent in a saltwater solution?', options: ['Water', 'Salt', 'Both'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐🌟', question: 'What is the second largest planet?', options: ['Saturn', 'Uranus', 'Neptune'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What gas do plants release at night?', options: ['CO₂', 'O₂', 'N₂'], correct: 0},
            {topic: 'Physics', emoji: '🎢📐', question: 'What is the formula for kinetic energy?', options: ['½mv²', 'mgh', 'mc²'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is the process of engulfing particles by cells?', options: ['Phagocytosis', 'Pinocytosis', 'Exocytosis', 'Osmosis'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the SI unit of inductance?', options: ['Henry', 'Farad', 'Weber', 'Tesla'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is the hybridization of carbon in methane?', options: ['sp³', 'sp²', 'sp', 's²p²'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the Schwarzschild radius?', options: ['Event horizon radius', 'Star radius', 'Planet radius', 'Galaxy radius'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is the start codon in protein synthesis?', options: ['AUG', 'UAA', 'UAG', 'UGA'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is the photon energy formula?', options: ['E=hf', 'E=mc²', 'E=½mv²', 'E=mgh'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'How many particles are in one mole?', options: ['6.02×10²³', '3.00×10⁸', '9.11×10⁻³¹', '6.63×10⁻³⁴'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌞', question: 'What is the solar constant (approximately)?', options: ['1361 W/m²', '1000 W/m²', '2000 W/m²', '500 W/m²'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is the Calvin cycle?', options: ['Dark reaction of photosynthesis', 'Light reaction', 'Respiration cycle', 'Nitrogen cycle'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is the Mach number?', options: ['Speed/Sound speed', 'Sound speed/Speed', 'Speed×Sound speed', 'Frequency/Wavelength'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the wobble hypothesis in genetics?', answer: 'Third nucleotide pairing flexibility or tRNA anticodon flexibility'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the fine structure constant (approximately)?', answer: '1/137 or 0.0073'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the oxidation state of chromium in K₂Cr₂O₇?', answer: '+6'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the Chandrasekhar limit?', answer: '1.4 solar masses'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the medical term for the collarbone?', answer: 'Clavicle'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Bernoulli principle?', answer: 'Fast moving fluid has lower pressure'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the coordination number of FCC structure?', answer: '12 or Twelve'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the Roche limit?', answer: 'Distance where tidal forces break up celestial body'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What neurotransmitter is deficient in Parkinson\'s disease?', answer: 'Dopamine'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Stefan-Boltzmann constant?', answer: '5.67 × 10⁻⁸ W/(m²·K⁴)'}
        ]
    },
    7: { // Chapter 7
        easy: [
            {topic: 'Biology', emoji: '🐕🐈', question: 'Mammals give birth to live young.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎨🌈', question: 'White light contains all colors.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧂💧', question: 'Salt increases water\'s boiling point.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌛🌜', question: 'We see only one side of the Moon.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦟🩸', question: 'Mosquitoes can transmit diseases.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '⚖️📊', question: 'Weight changes with location.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔴🟦', question: 'Indicators change color in acids and bases.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '💫⭐', question: 'Stars are born in nebulae.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🌵🏜️', question: 'Cacti store water in their stems.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🏋️💪', question: 'Work requires force and displacement.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🔬🧬', question: 'What is the study of genes called?', options: ['Genetics', 'Genomics'], correct: 0},
            {topic: 'Physics', emoji: '🚗⚡', question: 'What converts kinetic to electrical energy?', options: ['Generator', 'Motor'], correct: 0},
            {topic: 'Chemistry', emoji: '🧊🔥', question: 'What is a reaction that absorbs heat called?', options: ['Endothermic', 'Exothermic'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍⚡', question: 'What protects Earth from solar wind?', options: ['Magnetic field', 'Atmosphere'], correct: 0},
            {topic: 'Biology', emoji: '🍄🦠', question: 'What breaks down dead organisms?', options: ['Decomposers', 'Producers'], correct: 0},
            {topic: 'Physics', emoji: '🔊🎶', question: 'What is the speed of sound affected by?', options: ['Medium', 'Source'], correct: 0},
            {topic: 'Chemistry', emoji: '⚗️🧪', question: 'What is a substance that speeds up reactions?', options: ['Catalyst', 'Inhibitor'], correct: 0},
            {topic: 'Astronomy', emoji: '🛰️🌍', question: 'What is an artificial satellite?', options: ['Man-made orbiter', 'Natural moon'], correct: 0},
            {topic: 'Biology', emoji: '🦴🩻', question: 'What is the study of bones called?', options: ['Osteology', 'Cardiology'], correct: 0},
            {topic: 'Physics', emoji: '📐🔺', question: 'What is the sum of angles in a triangle?', options: ['180 degrees', '360 degrees'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'How many pairs of chromosomes in humans?', options: ['23', '46', '22'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the power formula?', options: ['P=W/t', 'P=Wt', 'P=W+t'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the mass number?', options: ['Protons + Neutrons', 'Protons only', 'Electrons + Protons'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What holds the solar system together?', options: ['Sun\'s gravity', 'Magnetic force', 'Dark matter'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'Which side of the heart has oxygenated blood?', options: ['Left', 'Right', 'Both'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is the SI unit of heat?', options: ['Joule', 'Calorie', 'BTU'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is the molarity unit?', options: ['mol/L', 'g/L', 'mol/kg'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the Sun\'s surface layer called?', options: ['Photosphere', 'Chromosphere', 'Corona'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What detects color in the eye?', options: ['Cones', 'Rods', 'Lens'], correct: 0},
            {topic: 'Physics', emoji: '🔊📢', question: 'What is ultrasound frequency?', options: ['Above 20 kHz', 'Below 20 Hz', '20-20,000 Hz'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is the gel-like substance in cells?', options: ['Cytoplasm', 'Nucleus', 'Membrane', 'Vacuole'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the electric field unit?', options: ['N/C', 'C/N', 'V·m', 'A·m'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is the pH of stomach acid?', options: ['1-2', '7', '14', '4-5'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is a parsec?', options: ['3.26 light-years', '1 light-year', '10 light-years', '100 light-years'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What enzyme unzips DNA?', options: ['Helicase', 'Polymerase', 'Ligase', 'Primase'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is total internal reflection?', options: ['Light trapped in denser medium', 'Light passes through', 'Light absorbed', 'Light scattered'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is the geometry of CH₄?', options: ['Tetrahedral', 'Linear', 'Planar', 'Octahedral'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is Saturn\'s largest moon?', options: ['Titan', 'Europa', 'Ganymede', 'Callisto'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is the plant hormone for growth?', options: ['Auxin', 'Insulin', 'Adrenaline', 'Thyroxine'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is resonance?', options: ['Matching natural frequency', 'Sound echo', 'Wave interference', 'Amplitude increase'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Kozak sequence?', answer: 'Ribosome binding site in mRNA'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Compton wavelength of electron?', answer: '2.43 × 10⁻¹² m'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the bond order of O₂?', answer: '2 or Two'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the Hubble constant (approximately)?', answer: '70 km/s/Mpc'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the name of the first cervical vertebra?', answer: 'Atlas'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Reynolds number used for?', answer: 'Predicting flow patterns or laminar vs turbulent'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the lanthanide contraction?', answer: 'Decrease in atomic radii across lanthanides'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the Eddington limit?', answer: 'Maximum luminosity of a star'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the blood-brain barrier?', answer: 'Selective membrane protecting brain'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Curie temperature?', answer: 'Temperature where ferromagnetism is lost'}
        ]
    },
    8: { // Chapter 8
        easy: [
            {topic: 'Biology', emoji: '🐛🦋', question: 'Insects have six legs.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🛷❄️', question: 'Friction can be reduced by lubricants.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🍷🍇', question: 'Fermentation produces alcohol.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌕', question: 'The Moon causes ocean tides.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🌺🌸', question: 'Pollination is necessary for fruit formation.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔴🔵', question: 'Red light has lower frequency than blue.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧽🧼', question: 'Soap works by forming micelles.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '⭐💫', question: 'Stars eventually run out of fuel.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦈🐬', question: 'Dolphins are mammals, not fish.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'LED bulbs are more efficient than incandescent.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What determines biological sex?', options: ['Sex chromosomes', 'Hormones'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What property makes water rise in capillaries?', options: ['Surface tension', 'Viscosity'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is an isotope?', options: ['Same protons, different neutrons', 'Different protons'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is a supernova?', options: ['Exploding star', 'New star'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What mineral strengthens bones?', options: ['Calcium', 'Iron'], correct: 0},
            {topic: 'Physics', emoji: '🔊🎵', question: 'What makes sound louder?', options: ['Greater amplitude', 'Higher frequency'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is hard water?', options: ['High mineral content', 'Frozen water'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🔄', question: 'What is Earth\'s rotation period?', options: ['24 hours', '365 days'], correct: 0},
            {topic: 'Biology', emoji: '🍃🌿', question: 'What is transpiration?', options: ['Water loss from leaves', 'Photosynthesis'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚖️', question: 'What is the center of gravity?', options: ['Balance point', 'Heaviest point'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What are the building blocks of proteins?', options: ['Amino acids', 'Nucleotides', 'Fatty acids'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the SI unit of magnetic field?', options: ['Tesla', 'Weber', 'Gauss'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the noble gas configuration of sodium ion?', options: ['Like Neon', 'Like Argon', 'Like Helium'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What type of galaxy is the Milky Way?', options: ['Spiral', 'Elliptical', 'Irregular'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is the largest artery?', options: ['Aorta', 'Pulmonary', 'Carotid'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is latent heat?', options: ['Heat without temperature change', 'Heat with temperature change', 'Heat loss'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is the common name for H₂O₂?', options: ['Hydrogen peroxide', 'Water', 'Heavy water'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What color is the hottest star?', options: ['Blue', 'Red', 'Yellow'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is the blind spot in the eye?', options: ['Where optic nerve exits', 'Center of retina', 'Edge of iris'], correct: 0},
            {topic: 'Physics', emoji: '🔊📢', question: 'What is infrasound?', options: ['Below 20 Hz', 'Above 20 kHz', '20-20,000 Hz'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is the function of Golgi apparatus?', options: ['Package and modify proteins', 'Energy production', 'DNA storage', 'Protein synthesis'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the magnetic flux formula?', options: ['Φ=BA', 'Φ=B/A', 'Φ=BA²', 'Φ=B+A'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is the buffer solution?', options: ['Resists pH change', 'Strong acid', 'Strong base', 'Neutral solution'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is redshift?', options: ['Light stretched to longer wavelengths', 'Light compressed', 'Light absorbed', 'Light reflected'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is crossing over in genetics?', options: ['Exchange of chromosome segments', 'Cell division', 'Mutation', 'Gene expression'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is polarization of light?', options: ['Light waves in one plane', 'Light splitting', 'Light bending', 'Light absorption'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is the oxidation number of oxygen in peroxide?', options: ['-1', '-2', '0', '+2'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is the great red spot on Jupiter?', options: ['Giant storm', 'Crater', 'Mountain', 'Ocean'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is nitrogen fixation?', options: ['Converting N₂ to usable forms', 'Absorbing nitrogen', 'Releasing nitrogen', 'Storing nitrogen'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is the beat frequency?', options: ['Difference of two frequencies', 'Sum of frequencies', 'Average frequency', 'Product of frequencies'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Hill coefficient in biochemistry?', answer: 'Measure of cooperativity in binding'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the gyromagnetic ratio of electron?', answer: '1.76 × 10¹¹ rad/(s·T)'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the Jahn-Teller effect?', answer: 'Distortion of symmetric molecules'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the Cosmic Microwave Background temperature?', answer: '2.7 K'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the medical term for the windpipe?', answer: 'Trachea'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Coanda effect?', answer: 'Fluid tendency to follow curved surface'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the common ion effect on solubility?', answer: 'Decreases solubility'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the Hertzsprung-Russell diagram?', answer: 'Plot of stellar luminosity vs temperature'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the resting membrane potential of neurons?', answer: '-70 mV'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Seebeck effect?', answer: 'Voltage from temperature difference'}
        ]
    },
    9: { // Chapter 9
        easy: [
            {topic: 'Biology', emoji: '🌳🍁', question: 'Trees lose leaves in autumn.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎾🏀', question: 'Heavier objects fall faster than lighter ones.', options: ['True', 'False'], correct: 1},
            {topic: 'Chemistry', emoji: '🧪💧', question: 'Water expands when it freezes.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍☀️', question: 'Earth is closest to Sun in January.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦴🦷', question: 'Teeth are part of the skeletal system.', options: ['True', 'False'], correct: 1},
            {topic: 'Physics', emoji: '🔌⚡', question: 'Insulators prevent flow of electricity.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'Combustion requires oxygen.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌙✨', question: 'Moonlight is reflected sunlight.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐘🦏', question: 'Elephants are the largest land mammals.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️❄️', question: 'Temperature measures average kinetic energy.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the process of making RNA from DNA?', options: ['Transcription', 'Translation'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What measures electric current?', options: ['Ammeter', 'Voltmeter'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the charge of a proton?', options: ['Positive', 'Negative'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'Is a light-year a measure of distance or time?', options: ['Distance', 'Time'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'Which blood cells fight infection?', options: ['White', 'Red'], correct: 0},
            {topic: 'Physics', emoji: '🎵🔊', question: 'What determines pitch of sound?', options: ['Frequency', 'Amplitude'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What makes water a universal solvent?', options: ['Polarity', 'Size'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is our Sun classified as?', options: ['Star', 'Planet'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is the female part of flower?', options: ['Pistil', 'Stamen'], correct: 0},
            {topic: 'Physics', emoji: '🏔️⛰️', question: 'What type of energy does height give?', options: ['Potential', 'Kinetic'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What are the three types of RNA?', options: ['mRNA, tRNA, rRNA', 'DNA, RNA, XNA', 'Nuclear, Cytoplasmic, Mitochondrial'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is EMF?', options: ['Electromotive force', 'Electromagnetic field', 'Electric motor force'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is an allotrope?', options: ['Different forms of same element', 'Different elements', 'Isotope variant'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is dark matter?', options: ['Invisible matter detected by gravity', 'Black holes', 'Dark energy'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What controls pupil size?', options: ['Iris muscles', 'Cornea', 'Lens'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is Archimedes principle?', options: ['Buoyant force equals displaced fluid weight', 'Objects float', 'Density measure'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is Le Chatelier\'s principle?', options: ['System adjusts to oppose change', 'Equilibrium is static', 'Reactions go forward'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What streams from the Sun continuously?', options: ['Stream of charged particles', 'Heat from Sun', 'Solar radiation'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is cartilage?', options: ['Flexible connective tissue', 'Hard bone', 'Muscle tissue'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is thermal equilibrium?', options: ['Same temperature', 'No heat transfer', 'Maximum heat'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is apoptosis?', options: ['Programmed cell death', 'Cell division', 'Cell growth', 'Cell mutation'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is Lenz\'s law?', options: ['Induced current opposes change', 'Current flows clockwise', 'Voltage increases', 'Resistance decreases'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is a Zwitterion?', options: ['Molecule with +/- charges', 'Neutral molecule', 'Charged molecule', 'Ion pair'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What method measures astronomical distances?', options: ['Series of measurement methods', 'Actual ladder in space', 'Constellation pattern', 'Galaxy classification'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is a plasmid?', options: ['Circular DNA in bacteria', 'Linear DNA', 'Protein structure', 'Cell membrane'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is Brewster\'s angle?', options: ['Angle of perfect polarization', 'Critical angle', 'Refraction angle', 'Reflection angle'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is a conjugate acid-base pair?', options: ['Differ by one H+', 'Same pH', 'Both acids', 'Both bases'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What causes auroras?', options: ['Solar particles with magnetic field', 'Reflected light', 'Ice crystals', 'Cloud formation'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is the Cori cycle?', options: ['Lactate to glucose conversion', 'Photosynthesis', 'Respiration', 'Nitrogen cycle'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is acoustic impedance?', options: ['Resistance to sound wave', 'Sound frequency', 'Wave speed', 'Sound intensity'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Michaelis constant (Km)?', answer: 'Substrate concentration at half maximum velocity'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Hall effect?', answer: 'Voltage perpendicular to current in magnetic field'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the Henderson-Hasselbalch equation for?', answer: 'Calculating pH of buffer solutions'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the Oort Cloud?', answer: 'Spherical shell of comets around solar system'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the acetabulum?', answer: 'Hip socket'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Venturi effect?', answer: 'Pressure reduction in constricted flow'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Nernst equation used for?', answer: 'Calculating electrode potential'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the main sequence lifetime of our Sun?', answer: '10 billion years'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is Long-term potentiation (LTP)?', answer: 'Strengthening of synapses from repeated stimulation'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Joule-Thomson effect?', answer: 'Temperature change during gas expansion'}
        ]
    },
    10: { // Chapter 10
        easy: [
            {topic: 'Biology', emoji: '🐜🐝', question: 'Insects have three body parts.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌈🔆', question: 'A rainbow forms when light refracts in water droplets.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '💎💍', question: 'Graphite and diamond are both made of carbon.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'All stars eventually become black holes.', options: ['True', 'False'], correct: 1},
            {topic: 'Biology', emoji: '🍄🌲', question: 'Mushrooms are decomposers in ecosystems.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'Series circuits have one path for current.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'Catalysts are consumed in reactions.', options: ['True', 'False'], correct: 1},
            {topic: 'Astronomy', emoji: '🌍🌕', question: 'A lunar eclipse occurs when Earth blocks sunlight to Moon.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦷😁', question: 'Humans have two sets of teeth in life.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'Heat flows from cold to hot naturally.', options: ['True', 'False'], correct: 1}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is a mutation?', options: ['Change in DNA', 'Cell division'], correct: 0},
            {topic: 'Physics', emoji: '⚖️📊', question: 'What is the difference between mass and weight?', options: ['Mass is matter, weight is force', 'No difference'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What determines chemical properties?', options: ['Electrons', 'Protons'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is a nebula?', options: ['Cloud of gas and dust', 'Dead star'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is the function of valves in heart?', options: ['Prevent backflow', 'Pump blood'], correct: 0},
            {topic: 'Physics', emoji: '🔊🎵', question: 'What is resonant frequency?', options: ['Natural vibration frequency', 'Loudest frequency'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is a saturated solution?', options: ['Maximum dissolved solute', 'Dilute solution'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What are sunspots?', options: ['Cool areas on Sun', 'Hot spots'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What are guard cells?', options: ['Control stomata', 'Protect leaves'], correct: 0},
            {topic: 'Physics', emoji: '🏃💨', question: 'What is acceleration?', options: ['Change in velocity', 'Constant speed'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the human diploid number?', options: ['46', '23', '92'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is Ohm\'s law?', options: ['V=IR', 'P=VI', 'Q=It'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the electron configuration notation?', options: ['1s² 2s² 2p⁶...', 'n=1,2,3...', 'A, B, C...'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is gravitational lensing?', options: ['Light bending by gravity', 'Telescope magnification', 'Star formation'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is accommodation in the eye?', options: ['Lens shape change', 'Pupil dilation', 'Color perception'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What effect causes siren pitch change?', options: ['Frequency change with motion', 'Wave reflection', 'Sound amplification'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is a colligative property?', options: ['Depends on particle number', 'Depends on particle type', 'Constant property'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is stellar parallax?', options: ['Apparent star shift', 'Star brightness', 'Star color'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is ossification?', options: ['Bone formation', 'Bone breaking', 'Joint movement'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is the zeroth law of thermodynamics?', options: ['Thermal equilibrium is transitive', 'Energy conserved', 'Entropy increases'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is endosymbiotic theory?', options: ['Organelles from symbiotic bacteria', 'Cell evolution theory', 'DNA origin theory', 'Protein synthesis theory'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the Lorentz force?', options: ['Force on charged particle in fields', 'Gravitational force', 'Nuclear force', 'Friction force'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is a ligand?', options: ['Ion/molecule that binds to metal', 'Metal ion', 'Catalyst', 'Solvent'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the Drake equation for?', options: ['Estimating intelligent civilizations', 'Star formation rate', 'Galaxy age', 'Planet count'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is a restriction enzyme?', options: ['Cuts DNA at specific sequences', 'Joins DNA', 'Copies DNA', 'Reads DNA'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is Snell\'s law?', options: ['n₁sinθ₁ = n₂sinθ₂', 'n₁ + n₂ = constant', 'n₁/n₂ = θ₁/θ₂', 'n₁θ₁ = n₂θ₂'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is the aufbau principle?', options: ['Electrons fill lowest energy first', 'Electrons spread out', 'Electrons pair up', 'Electrons randomize'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'At what distance do tidal forces destroy objects?', options: ['Tidal disruption distance', 'Orbital distance', 'Escape velocity', 'Gravitational radius'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is chemiosmosis?', options: ['ATP synthesis via proton gradient', 'Photosynthesis', 'Active transport', 'Diffusion'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is the Fourier transform?', options: ['Decompose signal into frequencies', 'Amplify signal', 'Filter noise', 'Compress data'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Shine-Dalgarno sequence?', answer: 'Ribosome binding site in prokaryotic mRNA'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Bohr magneton?', answer: '9.27 × 10⁻²⁴ J/T'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is crystal field splitting energy?', answer: 'Energy difference between d-orbital sets'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the Baade-Wesselink method?', answer: 'Distance measurement using pulsating stars'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the thoracic outlet?', answer: 'Opening for nerves and vessels to arm'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Kelvin-Helmholtz instability?', answer: 'Instability at velocity shear interface'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Debye-Hückel theory?', answer: 'Theory of electrolyte solutions'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the Bok globule?', answer: 'Dark cloud where stars form'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the gate control theory?', answer: 'Theory of pain perception modulation'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Meissner effect?', answer: 'Expulsion of magnetic field from superconductor'}
        ]
    },
    11: { // Chapter 11
        easy: [
            {topic: 'Biology', emoji: '🦠🧬', question: 'Viruses need host cells to reproduce.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔦💡', question: 'Mirrors reflect light.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🥛🦴', question: 'Milk contains calcium.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌓🌔', question: 'The Moon orbits Earth.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🥕👁️', question: 'Carrots are good for eyesight.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎸🔊', question: 'Guitars produce sound through vibrating strings.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🍞🧪', question: 'Yeast is used in baking bread.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '☄️🌍', question: 'Most meteorites burn up in atmosphere.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐝🍯', question: 'Bees produce honey.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '❄️🧊', question: 'Ice is slippery due to thin water layer.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the basic unit of heredity?', options: ['Gene', 'Chromosome'], correct: 0},
            {topic: 'Physics', emoji: '🔋⚡', question: 'What type of current do batteries provide?', options: ['Direct current', 'Alternating current'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is a covalent bond?', options: ['Sharing electrons', 'Transferring electrons'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the closest galaxy to Milky Way?', options: ['Andromeda', 'Triangulum'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the largest muscle in body?', options: ['Gluteus maximus', 'Biceps'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the bending of waves called?', options: ['Refraction', 'Reflection'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is the universal solvent?', options: ['Water', 'Alcohol'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌞', question: 'What keeps Earth in orbit around Sun?', options: ['Gravity', 'Magnetism'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What pigment makes leaves green?', options: ['Chlorophyll', 'Carotene'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚡', question: 'What is resistance measured in?', options: ['Ohms', 'Volts'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What are chromosomes made of?', options: ['DNA and proteins', 'RNA only', 'Proteins only'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the SI unit of work?', options: ['Joule', 'Watt', 'Newton'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the atomic number of iron?', options: ['26', '56', '28'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is the Milky Way\'s shape?', options: ['Spiral', 'Elliptical', 'Irregular'], correct: 0},
            {topic: 'Biology', emoji: '👃🦠', question: 'How many smell receptors do humans have?', options: ['400 types', '100 types', '1000 types'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is Pascal\'s principle about?', options: ['Pressure in fluids', 'Buoyancy', 'Flow rate'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is the pH of lemon juice?', options: ['2-3', '7', '10-11'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'How old is the Sun?', options: ['4.6 billion years', '10 billion years', '1 billion years'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the smallest muscle in body?', options: ['Stapedius', 'Orbicularis', 'Palmaris'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is the Kelvin scale based on?', options: ['Absolute zero', 'Water freezing', 'Human body temp'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is the Hayflick limit?', options: ['Cell division limit', 'Growth limit', 'Size limit', 'Age limit'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the Poynting vector?', options: ['Energy flux', 'Magnetic field', 'Electric field', 'Wave speed'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is the chelate effect?', options: ['Enhanced stability of complexes', 'Metal corrosion', 'Acid neutralization', 'Base formation'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the Fermi paradox?', options: ['Why no alien contact', 'Dark matter mystery', 'Universe age', 'Star formation'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is CRISPR-Cas9?', options: ['Gene editing tool', 'Protein marker', 'Cell type', 'Virus'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is quantum entanglement?', options: ['Correlated particle states', 'Wave collapse', 'Energy levels', 'Particle spin'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is the Pauli exclusion principle?', options: ['No two electrons same quantum state', 'Electrons repel', 'Energy quantized', 'Orbitals fill equally'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is a trojan asteroid?', options: ['Shares planet\'s orbit', 'Near-Earth object', 'Belt asteroid', 'Comet'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is allelopathy?', options: ['Chemical inhibition by plants', 'Symbiosis', 'Parasitism', 'Competition'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is the Rayleigh criterion?', options: ['Resolution limit', 'Sound intensity', 'Wave speed', 'Frequency range'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Warburg effect in cancer?', answer: 'Aerobic glycolysis in cancer cells'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Josephson effect?', answer: 'Current tunneling through superconductor junction'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the Wade-Mingos rules used for?', answer: 'Predicting cluster structures'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the Great Attractor?', answer: 'Gravitational anomaly pulling galaxies'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the foramen magnum?', answer: 'Opening in skull for spinal cord'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Magnus effect?', answer: 'Force on spinning object in fluid'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Sabatier principle?', answer: 'Optimal catalyst-reactant interaction'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the Schönberg-Chandrasekhar limit?', answer: 'Core mass limit for hydrogen shell burning'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the Papez circuit?', answer: 'Neural pathway for emotion'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Casimir effect?', answer: 'Vacuum energy between plates'}
        ]
    },
    12: { // Chapter 12
        easy: [
            {topic: 'Biology', emoji: '🐾🦴', question: 'Vertebrates have a backbone.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎭🔊', question: 'Sound travels faster in solids than air.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧂🧪', question: 'Table salt is sodium chloride.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌟✨', question: 'Stars are made mostly of hydrogen.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦢🦆', question: 'Birds are warm-blooded.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎈💨', question: 'Helium is lighter than air.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💧', question: 'Water can put out most fires.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌕🌑', question: 'Moon phases depend on its position.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🍀🌿', question: 'Plants need sunlight to grow.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔌💡', question: 'Rubber is an insulator.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What stores energy in cells?', options: ['ATP', 'DNA'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is the path of electric current called?', options: ['Circuit', 'Wire'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is rust chemically?', options: ['Iron oxide', 'Iron sulfate'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is a pulsar?', options: ['Rotating neutron star', 'Black hole'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is the largest vein?', options: ['Vena cava', 'Pulmonary'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What makes objects float?', options: ['Buoyancy', 'Density'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is the hardness of water due to?', options: ['Calcium/Magnesium', 'Iron'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is a solar flare?', options: ['Magnetic energy release', 'Explosion'], correct: 0},
            {topic: 'Biology', emoji: '👂🦻', question: 'What is the eardrum also called?', options: ['Tympanic membrane', 'Cochlea'], correct: 0},
            {topic: 'Physics', emoji: '🎢⚡', question: 'What increases with speed?', options: ['Kinetic energy', 'Potential energy'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is an autosome?', options: ['Non-sex chromosome', 'Sex chromosome', 'Y chromosome'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is impedance?', options: ['AC resistance', 'DC resistance', 'Capacitance'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the coordination number?', options: ['Ligands around metal', 'Atoms in molecule', 'Bonds in compound'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is cosmic inflation?', options: ['Rapid universe expansion', 'Star formation', 'Galaxy merger'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What are rods and cones?', options: ['Photoreceptors', 'Muscles', 'Nerves'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is critical angle?', options: ['Total internal reflection angle', 'Refraction angle', 'Incident angle'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is molality?', options: ['Moles per kg solvent', 'Moles per liter', 'Mass per volume'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the solar cycle?', options: ['11 years', '22 years', '5 years'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is synovial fluid?', options: ['Joint lubricant', 'Blood plasma', 'Lymph'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is entropy?', options: ['Measure of disorder', 'Heat energy', 'Temperature'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is quorum sensing?', options: ['Bacterial communication', 'Cell death', 'Growth phase', 'Reproduction'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the Stark effect?', options: ['Energy level splitting in field', 'Electron emission', 'Light scattering', 'Wave interference'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is a Diels-Alder reaction?', options: ['Cycloaddition reaction', 'Substitution', 'Elimination', 'Addition'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the Tully-Fisher relation?', options: ['Galaxy luminosity-rotation', 'Star mass-luminosity', 'Planet size-orbit', 'Comet tail-distance'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is RNA interference?', options: ['Gene silencing mechanism', 'Protein synthesis', 'DNA repair', 'Cell signaling'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is wave-particle duality?', options: ['Light as wave and particle', 'Two wave types', 'Particle collision', 'Wave interference'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is Hund\'s rule?', options: ['Maximum unpaired electrons', 'Lowest energy first', 'Pairing electrons', 'Energy spacing'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is the ecliptic?', options: ['Sun\'s apparent path', 'Moon\'s orbit', 'Earth\'s equator', 'Galaxy plane'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is C4 photosynthesis?', options: ['CO₂ concentration mechanism', 'Regular photosynthesis', 'Night respiration', 'Root absorption'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is constructive interference?', options: ['Waves add together', 'Waves cancel', 'Waves reflect', 'Waves refract'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Barr body?', answer: 'Inactivated X chromosome'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Wiedemann-Franz law?', answer: 'Relates thermal and electrical conductivity'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the trans effect?', answer: 'Ligand influence on substitution rate'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What technique measures cosmic distances?', answer: 'Series of calibrated methods'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the linea alba?', answer: 'Fibrous midline structure of abdomen'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Stokes-Einstein equation?', answer: 'Relates diffusion to viscosity'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Born-Haber cycle?', answer: 'Thermodynamic cycle for lattice energy'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the mass-luminosity relation?', answer: 'L proportional to M³·⁵ for main sequence'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the Schwann cell?', answer: 'Forms myelin in peripheral nervous system'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Lamb shift?', answer: 'Energy level shift from vacuum fluctuations'}
        ]
    },
    13: { // Chapter 13
        easy: [
            {topic: 'Biology', emoji: '🌸🐝', question: 'Flowers attract pollinators with nectar.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎪🎢', question: 'Inertia is the resistance to motion change.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'Vinegar is acetic acid.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'Light from distant stars takes years to reach us.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐠🌊', question: 'Fish use gills to breathe underwater.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🧲📌', question: 'Iron is magnetic.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '💎⚗️', question: 'Graphite conducts electricity.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌞', question: 'Earth receives energy from the Sun.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦴🏥', question: 'Calcium is important for bones.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️📊', question: 'Mercury expands when heated.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What carries oxygen in blood?', options: ['Red blood cells', 'White blood cells'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is parallel circuit?', options: ['Multiple paths', 'Single path'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is oxidation?', options: ['Loss of electrons', 'Gain of electrons'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is a quasar?', options: ['Bright galactic core', 'Dying star'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is the waxy coating on leaves?', options: ['Cuticle', 'Epidermis'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What causes tides besides Moon?', options: ['Sun', 'Wind'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is distillation?', options: ['Separating by boiling', 'Mixing'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the heliosphere?', options: ['Sun\'s magnetic bubble', 'Sun\'s atmosphere'], correct: 0},
            {topic: 'Biology', emoji: '👃🔬', question: 'What detects smell?', options: ['Olfactory receptors', 'Taste buds'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚡', question: 'What is voltage?', options: ['Electric potential difference', 'Current flow'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is pleiotropy?', options: ['One gene, multiple traits', 'Multiple genes, one trait', 'Gene mutation'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is mutual inductance?', options: ['Voltage induced between coils', 'Self-inductance', 'Resistance'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is electronegativity?', options: ['Attract electrons ability', 'Electron count', 'Atomic size'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is parallax used for?', options: ['Measuring distance', 'Measuring brightness', 'Measuring size'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is systole?', options: ['Heart contraction', 'Heart relaxation', 'Blood flow'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is surface tension?', options: ['Cohesive force at surface', 'Water pressure', 'Fluid resistance'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is a redox reaction?', options: ['Oxidation-reduction', 'Acid-base', 'Precipitation'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the corona?', options: ['Sun\'s outer atmosphere', 'Sun\'s core', 'Sun\'s surface'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is astigmatism?', options: ['Irregular cornea curvature', 'Lens cloudiness', 'Retina damage'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is conduction?', options: ['Heat transfer through contact', 'Heat radiation', 'Heat convection'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is sporulation?', options: ['Spore formation', 'Cell division', 'Growth phase', 'Mutation'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the Zeeman effect?', options: ['Spectral line splitting in B field', 'Light absorption', 'Wave diffraction', 'Electron transition'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is a racemic mixture?', options: ['Equal enantiomers', 'Pure compound', 'Isotope mix', 'Allotrope mix'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the virial theorem?', options: ['Relates kinetic to potential energy', 'Mass calculation', 'Distance measure', 'Time dilation'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is epigenetics?', options: ['Gene expression changes without DNA change', 'DNA mutation', 'Chromosome damage', 'Protein folding'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is the photoelectric effect?', options: ['Light ejects electrons', 'Light bends', 'Light reflects', 'Light absorbs'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is hyperconjugation?', options: ['Electron delocalization', 'Bond breaking', 'Electron transfer', 'Ion formation'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is orbital resonance?', options: ['Gravitational interaction pattern', 'Rotation speed', 'Magnetic field', 'Temperature cycle'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is photorespiration?', options: ['Wasteful oxygen fixation', 'Photosynthesis', 'Respiration', 'Transpiration'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is destructive interference?', options: ['Waves cancel out', 'Waves amplify', 'Waves reflect', 'Waves refract'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Pribnow box?', answer: 'Promoter sequence in bacteria'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Aharonov-Bohm effect?', answer: 'Quantum phase shift from vector potential'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the Woodward-Hoffmann rules?', answer: 'Predict pericyclic reaction stereochemistry'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the cosmic web?', answer: 'Large-scale structure of universe'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the inguinal canal?', answer: 'Passage in abdominal wall'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Kutta-Joukowski theorem?', answer: 'Relates lift to circulation'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Grotthuss mechanism?', answer: 'Proton transfer in water'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the Strömgren sphere?', answer: 'Ionized hydrogen region around hot star'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the substantia nigra?', answer: 'Brain region producing dopamine'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Peltier effect?', answer: 'Heat absorption/release at junction from current'}
        ]
    },
    14: { // Chapter 14
        easy: [
            {topic: 'Biology', emoji: '🦎🌞', question: 'Reptiles are cold-blooded.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎈⬆️', question: 'Hot air balloons rise because hot air is less dense.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🥤💧', question: 'Carbon dioxide is a gas at room temperature.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌠💫', question: 'Shooting stars are actually meteors.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐚🦀', question: 'Crabs have an exoskeleton.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔦🌙', question: 'Lunar phases are caused by Moon\'s shadow.', options: ['True', 'False'], correct: 1},
            {topic: 'Chemistry', emoji: '🧊💧', question: 'Ice melting is a physical change.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌎', question: 'Earth rotates from west to east.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐛🦋', question: 'Caterpillars undergo metamorphosis.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '⚖️📏', question: 'Mass remains constant everywhere.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is a zygote?', options: ['Fertilized egg', 'Sperm cell'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What measures cycles per second?', options: ['Hertz', 'Decibel'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is reduction?', options: ['Gain of electrons', 'Loss of electrons'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is the asteroid belt?', options: ['Region between Mars and Jupiter', 'Around Saturn'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is xylem?', options: ['Water-conducting tissue', 'Food-conducting tissue'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is viscosity?', options: ['Fluid thickness', 'Fluid density'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is filtration?', options: ['Separating solid from liquid', 'Mixing'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What are solar prominences?', options: ['Plasma loops', 'Sunspots'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the strongest bone?', options: ['Femur', 'Skull'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚡', question: 'What is capacitance?', options: ['Charge storage ability', 'Current flow'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is codominance?', options: ['Both alleles expressed', 'One dominant', 'Incomplete dominance'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is Faraday\'s law?', options: ['Induced EMF from flux change', 'Current-resistance relation', 'Charge conservation'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the octet rule?', options: ['8 valence electrons stable', '8 protons', '8 neutrons'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is Hubble\'s law?', options: ['Galaxies recede proportional to distance', 'Star formation', 'Planet orbits'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is diastole?', options: ['Heart relaxation', 'Heart contraction', 'Blood clotting'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is Bernoulli\'s principle?', options: ['Fast fluid, low pressure', 'Buoyancy', 'Surface tension'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is a saturated hydrocarbon?', options: ['Only single bonds', 'Has double bonds', 'Has triple bonds'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is solar neutrino problem?', options: ['Fewer neutrinos detected', 'Too many neutrinos', 'No neutrinos'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is presbyopia?', options: ['Age-related farsightedness', 'Nearsightedness', 'Color blindness'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is convection?', options: ['Heat transfer by fluid motion', 'Heat conduction', 'Heat radiation'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is transformation in bacteria?', options: ['Uptake of foreign DNA', 'Shape change', 'Division', 'Death'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the Compton effect?', options: ['Photon scattering increases wavelength', 'Photoelectric effect', 'Wave diffraction', 'Light absorption'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is stereoisomerism?', options: ['Same formula, different 3D arrangement', 'Different formula', 'Same structure', 'Different atoms'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is gravitational redshift?', options: ['Light frequency decrease in gravity', 'Doppler shift', 'Scattering', 'Absorption'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is gene flow?', options: ['Transfer of alleles between populations', 'Mutation', 'Selection', 'Drift'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is Rayleigh scattering?', options: ['Blue sky from light scattering', 'Reflection', 'Refraction', 'Diffraction'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is resonance in chemistry?', options: ['Multiple valid structures', 'Molecular vibration', 'Bond breaking', 'Electron transfer'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is the Hill sphere?', options: ['Gravitational dominance region', 'Atmosphere', 'Ring system', 'Magnetic field'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is guttation?', options: ['Water exudation from leaves', 'Photosynthesis', 'Transpiration', 'Respiration'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is the decibel scale?', options: ['Logarithmic sound intensity', 'Linear scale', 'Frequency scale', 'Wavelength scale'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Holliday junction?', answer: 'DNA crossover structure in recombination'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the skin effect?', answer: 'AC current concentration at conductor surface'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the SN2 mechanism?', answer: 'Bimolecular nucleophilic substitution'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the Zone of Avoidance?', answer: 'Area obscured by Milky Way disk'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the annulus fibrosus?', answer: 'Outer portion of intervertebral disc'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Prandtl number?', answer: 'Ratio of momentum to thermal diffusivity'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Hammett equation?', answer: 'Relates reaction rates to substituent effects'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the asymptotic giant branch?', answer: 'Late stellar evolution phase'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the nucleus accumbens?', answer: 'Brain reward center'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Foucault pendulum?', answer: 'Demonstrates Earth\'s rotation'}
        ]
    },
    15: { // Chapter 15
        easy: [
            {topic: 'Biology', emoji: '🌳🌲', question: 'Trees absorb carbon dioxide.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🏃💨', question: 'Velocity has direction.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'Bases taste bitter.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'Stars are powered by nuclear fusion.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐙🦑', question: 'Octopuses have three hearts.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔌⚡', question: 'Copper is a good conductor.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'Fire needs fuel, oxygen, and heat.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌕', question: 'The Moon has no atmosphere.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦴🦷', question: 'Baby teeth are also called milk teeth.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️❄️', question: 'Absolute zero is the coldest temperature.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is a diploid cell?', options: ['Two sets of chromosomes', 'One set'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is electromagnetic radiation?', options: ['Energy as waves', 'Particle energy'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is a catalyst?', options: ['Speeds reaction', 'Slows reaction'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is the Oort cloud?', options: ['Comet cloud', 'Asteroid belt'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is phloem?', options: ['Sugar-conducting tissue', 'Water-conducting tissue'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What causes apparent frequency shift in sound?', options: ['Frequency change with motion', 'Volume change'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is chromatography?', options: ['Separation technique', 'Mixing technique'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is a coronal mass ejection?', options: ['Solar plasma release', 'Solar flare'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What connects bone to bone?', options: ['Ligaments', 'Tendons'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚡', question: 'What is inductance?', options: ['Opposition to current change', 'Current resistance'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is epistasis?', options: ['Gene masking another', 'Multiple alleles', 'Linkage'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the right-hand rule for?', options: ['Magnetic force direction', 'Current direction', 'Voltage polarity'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is VSEPR theory?', options: ['Predicts molecular shape', 'Bond strength', 'Reaction rate'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is dark energy?', options: ['Accelerates universe expansion', 'Dark matter', 'Black hole energy'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is the pacemaker of heart?', options: ['SA node', 'AV node', 'Ventricle'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is laminar flow?', options: ['Smooth fluid layers', 'Turbulent flow', 'No flow'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is an aromatic compound?', options: ['Contains benzene ring', 'Has odor', 'Aliphatic'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the CNO cycle?', options: ['Stellar fusion pathway', 'Planet formation', 'Star death'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is the fovea?', options: ['Central retina for sharp vision', 'Blind spot', 'Iris'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is radiation heat transfer?', options: ['Heat by electromagnetic waves', 'Heat by contact', 'Heat by fluid'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is conjugation in bacteria?', options: ['DNA transfer via pilus', 'Reproduction', 'Mutation', 'Death'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What principle prevents identical fermions sharing quantum states?', options: ['No identical fermions in same state', 'Energy quantization', 'Wave-particle duality', 'Uncertainty'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is a carbonyl group?', options: ['C=O', 'C-O', 'C-C', 'C-H'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the cosmic microwave background?', options: ['Relic radiation from Big Bang', 'Star light', 'Galaxy emission', 'Solar radiation'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is Hardy-Weinberg equilibrium?', options: ['Allele frequency stability', 'Mutation rate', 'Selection pressure', 'Gene flow'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is chromatic aberration?', options: ['Color fringing in lens', 'Spherical distortion', 'Diffraction', 'Reflection'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is Markovnikov\'s rule?', options: ['Addition to more substituted carbon', 'Bond breaking', 'Electron transfer', 'Proton transfer'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is the Lagrange point?', options: ['Gravitational equilibrium point', 'Orbital radius', 'Escape velocity', 'Tidal force'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is vernalization?', options: ['Cold-induced flowering', 'Photosynthesis', 'Germination', 'Dormancy'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is a standing wave?', options: ['Wave pattern from interference', 'Traveling wave', 'Reflected wave', 'Absorbed wave'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the wobble hypothesis?', answer: 'Relaxed base pairing at codon third position'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Biot-Savart law?', answer: 'Calculates magnetic field from current'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the Baldwin rules?', answer: 'Predict ring closure reaction feasibility'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is baryonic acoustic oscillation?', answer: 'Density fluctuation in early universe'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the foramen ovale?', answer: 'Opening between fetal atria'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Navier-Stokes equation?', answer: 'Describes fluid motion'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Jablonski diagram?', answer: 'Shows electronic transitions and energy'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the Hayashi track?', answer: 'Pre-main sequence stellar evolution path'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the corpus callosum?', answer: 'Connects left and right brain hemispheres'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Carnot cycle?', answer: 'Ideal thermodynamic cycle'}
        ]
    },
    16: { // Chapter 16
        easy: [
            {topic: 'Biology', emoji: '🐛🦗', question: 'Insects are invertebrates.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎾⚽', question: 'Momentum depends on mass and velocity.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'Noble gases are unreactive.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'The universe is expanding.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦋🌺', question: 'Butterflies taste with their feet.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔌⚡', question: 'Plastic is an insulator.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'Hydrogen is flammable.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌕', question: 'The Moon affects ocean tides.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦴🦷', question: 'Wisdom teeth are the last to grow.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️❄️', question: 'Water freezes at 0°C.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is a haploid cell?', options: ['One set of chromosomes', 'Two sets'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is the speed of light?', options: ['3×10⁸ m/s', '3×10⁶ m/s'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is a compound?', options: ['Two or more elements bonded', 'Single element'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is a supergiant star?', options: ['Very large bright star', 'Dying star'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is water loss through leaves called?', options: ['Water vapor loss', 'Photosynthesis'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is wavelength?', options: ['Distance between wave peaks', 'Wave height'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is titration?', options: ['Measuring concentration', 'Mixing'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the chromosphere?', options: ['Layer above photosphere', 'Sun\'s core'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the Achilles tendon?', options: ['Heel tendon', 'Knee ligament'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚡', question: 'What is reactance?', options: ['AC opposition', 'DC resistance'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is linkage in genetics?', options: ['Genes on same chromosome', 'Independent assortment', 'Mutation'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is Maxwell\'s equations describe?', options: ['Electromagnetism', 'Gravity', 'Thermodynamics'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the transition state?', options: ['Highest energy point in reaction', 'Product', 'Reactant'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is gravitational waves?', options: ['Spacetime ripples', 'Light waves', 'Sound waves'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is the bundle of His?', options: ['Heart conduction pathway', 'Nerve bundle', 'Blood vessel'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is Reynolds number?', options: ['Predicts flow type', 'Measures pressure', 'Calculates velocity'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is a functional group?', options: ['Reactive part of molecule', 'Entire molecule', 'Inert part'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the pp chain?', options: ['Proton-proton fusion', 'Planet formation', 'Star collapse'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is the optic nerve?', options: ['Transmits visual signals', 'Focuses light', 'Detects color'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is the second law of thermodynamics?', options: ['Entropy increases', 'Energy conserved', 'Heat flows down'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is transduction in bacteria?', options: ['Virus-mediated DNA transfer', 'Direct uptake', 'Conjugation', 'Mutation'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is Fermi-Dirac statistics?', options: ['Fermion distribution', 'Boson distribution', 'Classical distribution', 'Wave function'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is a carboxylic acid?', options: ['Contains COOH', 'Contains OH', 'Contains NH₂', 'Contains C=O'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the anthropic principle?', options: ['Universe suitable for life', 'Universe age', 'Galaxy formation', 'Star evolution'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is genetic drift?', options: ['Random allele frequency change', 'Natural selection', 'Mutation', 'Gene flow'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is interference?', options: ['Wave superposition', 'Wave reflection', 'Wave absorption', 'Wave transmission'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is Zaitsev\'s rule?', options: ['More substituted alkene favored', 'Less substituted', 'No preference', 'Stereochemistry'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is the frost line?', options: ['Ice formation boundary', 'Planet boundary', 'Asteroid belt', 'Comet origin'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is etiolation?', options: ['Growth in darkness', 'Light growth', 'Root formation', 'Flowering'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is the nodal line?', options: ['Zero amplitude in standing wave', 'Maximum amplitude', 'Wave source', 'Wave speed'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Meselson-Stahl experiment?', answer: 'Proved DNA semiconservative replication'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the London force?', answer: 'Weak van der Waals interaction'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the E1 mechanism?', answer: 'Unimolecular elimination reaction'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is weak gravitational lensing?', answer: 'Slight distortion of background galaxies'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the cauda equina?', answer: 'Bundle of spinal nerves'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Froude number?', answer: 'Ratio of inertial to gravitational forces'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Arrhenius equation?', answer: 'Relates rate constant to temperature'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the instability strip?', answer: 'HR diagram region of pulsating stars'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the hippocampus?', answer: 'Brain region for memory formation'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Stirling cycle?', answer: 'Thermodynamic cycle with isothermal processes'}
        ]
    },
    17: { // Chapter 17
        easy: [
            {topic: 'Biology', emoji: '🐠🦈', question: 'Sharks are fish.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎾⚽', question: 'Elastic collisions conserve kinetic energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'Oxygen is required for rusting.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'Stars are different colors due to temperature.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦎🦋', question: 'Lizards can regrow their tails.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔌⚡', question: 'Gold is a good conductor.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'Chlorophyll is green pigment.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌕', question: 'The Moon is Earth\'s natural satellite.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦴🦷', question: 'Teeth have nerves and blood vessels.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️❄️', question: 'Evaporation causes cooling.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is a gamete?', options: ['Sex cell', 'Body cell'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is power?', options: ['Energy per time', 'Force per time'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is a mixture?', options: ['Components not bonded', 'Components bonded'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is a planetary nebula?', options: ['Dying star shell', 'Star birth'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is a stomata?', options: ['Leaf pore', 'Root hair'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is amplitude?', options: ['Wave height', 'Wave length'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is crystallization?', options: ['Solid formation from solution', 'Dissolving'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is a sunspot cycle?', options: ['11-year pattern', '1-year pattern'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is cardiac muscle?', options: ['Heart muscle', 'Skeletal muscle'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚡', question: 'What is impedance in AC?', options: ['Total opposition', 'Resistance only'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is incomplete dominance?', options: ['Blended phenotype', 'Complete dominance', 'Both expressed'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is Kirchhoff\'s voltage law?', options: ['Voltage sum is zero in loop', 'Current sum is zero', 'Power is constant'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is activation energy?', options: ['Minimum energy for reaction', 'Product energy', 'Heat released'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is a binary star system?', options: ['Two stars orbiting', 'One star', 'Three stars'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is an ECG?', options: ['Heart electrical activity', 'Blood pressure', 'Heart sound'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is turbulent flow?', options: ['Chaotic fluid motion', 'Smooth flow', 'No flow'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is an alkane?', options: ['Saturated hydrocarbon', 'Unsaturated', 'Aromatic'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is stellar nucleosynthesis?', options: ['Element formation in stars', 'Star birth', 'Star death'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is the vitreous humor?', options: ['Eye gel', 'Tear fluid', 'Cornea'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is isothermal process?', options: ['Constant temperature', 'Constant pressure', 'Constant volume'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is lysogeny?', options: ['Viral DNA integration', 'Lytic cycle', 'Cell death', 'Mutation'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is Bose-Einstein condensate?', options: ['Ultra-cold matter state', 'Hot plasma', 'Solid state', 'Liquid state'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is an ester?', options: ['RCOOR\'', 'RCOOH', 'ROH', 'RNH₂'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the fine structure constant?', options: ['Electromagnetic coupling', 'Gravitational constant', 'Speed of light', 'Planck constant'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is the founder effect?', options: ['Reduced variation in new population', 'Increased variation', 'No change', 'Mutation increase'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is diffraction?', options: ['Wave bending around obstacles', 'Wave reflection', 'Wave absorption', 'Wave transmission'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is a chiral molecule?', options: ['Non-superimposable mirror image', 'Symmetrical', 'Planar', 'Linear'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is perturbation?', options: ['Orbital disturbance', 'Planet formation', 'Star collision', 'Galaxy merger'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is apical dominance?', options: ['Main stem suppresses branches', 'Branch growth', 'Root dominance', 'Flower formation'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is an antinode?', options: ['Maximum amplitude point', 'Zero amplitude', 'Wave source', 'Wave end'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Griffith experiment?', answer: 'Discovered transformation in bacteria'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Seebeck coefficient?', answer: 'Thermoelectric voltage per temperature difference'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the SN1 mechanism?', answer: 'Unimolecular nucleophilic substitution'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the Sunyaev-Zel\'dovich effect?', answer: 'CMB distortion by hot gas'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the greater omentum?', answer: 'Abdominal fat apron'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Weber number?', answer: 'Ratio of inertial to surface tension forces'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Eyring equation?', answer: 'Relates rate to free energy of activation'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the horizontal branch?', answer: 'Helium-burning stellar phase'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the amygdala?', answer: 'Brain region for emotion processing'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Otto cycle?', answer: 'Ideal gasoline engine cycle'}
        ]
    },
    18: { // Chapter 18
        easy: [
            {topic: 'Biology', emoji: '🐼🐻', question: 'Pandas eat mostly bamboo.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎾⚽', question: 'Acceleration is change in velocity.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'Distilled water is pure H₂O.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'Some stars are bigger than our Sun.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦜🦚', question: 'Parrots can mimic human speech.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔌⚡', question: 'Aluminum conducts electricity.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'Nitrogen makes up most of air.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌕', question: 'We always see the same side of Moon.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦴🦷', question: 'Fluoride strengthens teeth.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️❄️', question: 'Condensation releases heat.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is meiosis?', options: ['Sex cell division', 'Body cell division'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is impulse?', options: ['Force times time', 'Mass times velocity'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is a solution?', options: ['Homogeneous mixture', 'Heterogeneous mixture'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is a white dwarf?', options: ['Dense stellar remnant', 'Giant star'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is chloroplast?', options: ['Photosynthesis organelle', 'Energy organelle'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is period of wave?', options: ['Time per cycle', 'Cycles per time'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is sublimation?', options: ['Solid to gas', 'Liquid to gas'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What particles stream from the Sun?', options: ['Charged particles', 'Light radiation'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is smooth muscle?', options: ['Involuntary muscle', 'Voluntary muscle'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚡', question: 'What is resonance frequency?', options: ['Natural oscillation rate', 'Applied frequency'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is a test cross?', options: ['Determine genotype', 'Produce offspring', 'Cause mutation'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is Kirchhoff\'s current law?', options: ['Current sum zero at node', 'Voltage sum zero', 'Power constant'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is enthalpy?', options: ['Heat content', 'Disorder', 'Free energy'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is a cepheid variable?', options: ['Pulsating star', 'Binary star', 'Exploding star'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is blood pressure?', options: ['Force on artery walls', 'Heart rate', 'Blood volume'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is Stokes\' law?', options: ['Drag force on sphere', 'Buoyant force', 'Pressure law'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is an alkene?', options: ['Has C=C bond', 'All single bonds', 'Has triple bond'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the heliopause?', options: ['Solar system boundary', 'Sun\'s surface', 'Planet boundary'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is aqueous humor?', options: ['Eye fluid', 'Vitreous gel', 'Tear'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is adiabatic process?', options: ['No heat exchange', 'No work done', 'Constant pressure'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is chemotaxis?', options: ['Movement toward chemicals', 'Cell division', 'Growth response', 'Death signal'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the Uncertainty Principle?', options: ['Cannot know position and momentum precisely', 'Wave-particle duality', 'Energy quantization', 'Time dilation'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is an amide?', options: ['RCONH₂', 'RCOOR\'', 'RCOOH', 'RNH₂'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the multiverse theory?', options: ['Multiple universes exist', 'Multiple galaxies', 'Parallel dimensions', 'Many worlds'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is bottleneck effect?', options: ['Population crash reduces variation', 'Increases variation', 'No change', 'Founder effect'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is spherical aberration?', options: ['Focus blur from lens curve', 'Color fringing', 'Diffraction', 'Reflection'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is tautomerism?', options: ['Structural isomers in equilibrium', 'Stereoisomers', 'Enantiomers', 'Conformers'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is differential rotation?', options: ['Different rotation rates', 'Uniform rotation', 'No rotation', 'Retrograde motion'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is thigmotropism?', options: ['Touch response growth', 'Light response', 'Gravity response', 'Water response'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is mode of vibration?', options: ['Standing wave pattern', 'Traveling wave', 'Wave speed', 'Wave frequency'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Hershey-Chase experiment?', answer: 'Proved DNA is genetic material'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What happens to magnetic fields in superconductors?', answer: 'Magnetic field expulsion'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the E2 mechanism?', answer: 'Bimolecular elimination reaction'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the cosmic censorship hypothesis?', answer: 'Singularities hidden by event horizons'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the ductus arteriosus?', answer: 'Fetal vessel connecting pulmonary artery to aorta'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Strouhal number?', answer: 'Dimensionless number for oscillating flow'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Marcus theory?', answer: 'Electron transfer kinetics'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the red giant branch?', answer: 'Stellar evolution phase after main sequence'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the thalamus?', answer: 'Sensory relay station in brain'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Rankine cycle?', answer: 'Ideal steam engine cycle'}
        ]
    },
    19: { // Chapter 19
        easy: [
            {topic: 'Biology', emoji: '🦎🐊', question: 'Crocodiles are reptiles.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎾⚽', question: 'Friction always opposes motion.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'Litmus paper tests pH.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'Light travels in straight lines.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐙🦑', question: 'Squids have beaks.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔌⚡', question: 'Silver is the best conductor.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'Oxygen supports combustion.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌕', question: 'Lunar eclipses are rarer than solar.', options: ['True', 'False'], correct: 1},
            {topic: 'Biology', emoji: '🦴🦷', question: 'Adult humans have 32 permanent teeth.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️❄️', question: 'Boiling point decreases with altitude.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is mitosis?', options: ['Body cell division', 'Sex cell division'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is angular momentum?', options: ['Rotational momentum', 'Linear momentum'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is a colloid?', options: ['Particles suspended', 'Dissolved particles'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is a neutron star?', options: ['Collapsed star core', 'Black hole'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is mitochondria?', options: ['Energy powerhouse', 'Protein factory'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is frequency?', options: ['Cycles per second', 'Seconds per cycle'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is deposition?', options: ['Gas to solid', 'Solid to gas'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What are solar prominences made of?', options: ['Plasma', 'Gas'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is skeletal muscle?', options: ['Voluntary muscle', 'Involuntary muscle'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚡', question: 'What is Q factor?', options: ['Quality factor', 'Charge'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is a Punnett square for?', options: ['Predict offspring genotypes', 'Measure DNA', 'Count chromosomes'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is Ampere\'s law?', options: ['B-field from current', 'E-field from charge', 'Force law'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is Gibbs free energy?', options: ['Energy available for work', 'Total energy', 'Heat energy'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is cosmological redshift?', options: ['Space expansion effect', 'Doppler effect', 'Gravitational effect'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is the cardiac cycle?', options: ['Heart contraction-relaxation', 'Blood circulation', 'Heartbeat rate'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'How is pressure distributed in confined fluids?', options: ['Pressure transmitted equally', 'Buoyancy', 'Flow rate'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is an alkyne?', options: ['Has C≡C bond', 'Has C=C bond', 'All single bonds'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the termination shock?', options: ['Solar wind slows', 'Planet boundary', 'Star birth'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is the sclera?', options: ['White of eye', 'Colored part', 'Lens'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is isobaric process?', options: ['Constant pressure', 'Constant temperature', 'Constant volume'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is binary fission?', options: ['Bacterial reproduction', 'Virus replication', 'Spore formation', 'Conjugation'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the tunneling effect?', options: ['Particle through barrier', 'Wave through opening', 'Light through medium', 'Sound through wall'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is an aldehyde?', options: ['RCHO', 'RCOOR\'', 'RCOOH', 'RCH₂OH'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is inflation theory?', options: ['Rapid early universe expansion', 'Steady expansion', 'Oscillating universe', 'Static universe'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'What is punctuated equilibrium?', options: ['Rapid evolution bursts', 'Gradual evolution', 'No evolution', 'Random evolution'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is Fraunhofer diffraction?', options: ['Far-field diffraction', 'Near-field', 'Reflection', 'Refraction'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is a carbocation?', options: ['Positively charged carbon', 'Negatively charged', 'Neutral carbon', 'Free radical'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is the ecliptic plane?', options: ['Earth\'s orbital plane', 'Equatorial plane', 'Galactic plane', 'Moon\'s orbit'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is gravitropism?', options: ['Gravity response growth', 'Light response', 'Touch response', 'Water response'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is harmonic frequency?', options: ['Integer multiple of fundamental', 'Half fundamental', 'Random frequency', 'Beat frequency'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Avery-MacLeod-McCarty experiment?', answer: 'Identified DNA as transforming principle'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Kondo effect?', answer: 'Resistance minimum in metals with magnetic impurities'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the Diels-Alder stereospecificity?', answer: 'Syn addition with endo preference'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the no-hair theorem?', answer: 'Black holes characterized by mass, charge, spin'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the ligamentum arteriosum?', answer: 'Remnant of ductus arteriosus'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Knudsen number?', answer: 'Ratio of molecular mean free path to length scale'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Franck-Condon principle?', answer: 'Electronic transition faster than nuclear motion'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'What is the subgiant branch?', answer: 'Short transition phase after main sequence'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the hypothalamus?', answer: 'Regulates homeostasis and hormones'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Brayton cycle?', answer: 'Ideal gas turbine cycle'}
        ]
    },
    20: { // Chapter 20
        easy: [
            {topic: 'Biology', emoji: '🦘🐨', question: 'Kangaroos are marsupials.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🎾⚽', question: 'Centripetal force points toward center.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'pH 7 is neutral.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'The universe started with Big Bang.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🐝🍯', question: 'Honeybees make hexagonal cells.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🔌⚡', question: 'Electricity flows from positive to negative.', options: ['True', 'False'], correct: 0},
            {topic: 'Chemistry', emoji: '🔥💨', question: 'Carbon dioxide is heavier than air.', options: ['True', 'False'], correct: 0},
            {topic: 'Astronomy', emoji: '🌍🌕', question: 'A solar eclipse occurs when Moon blocks Sun.', options: ['True', 'False'], correct: 0},
            {topic: 'Biology', emoji: '🦴🦷', question: 'Bone is living tissue.', options: ['True', 'False'], correct: 0},
            {topic: 'Physics', emoji: '🌡️❄️', question: 'Water has maximum density at 4°C.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is cytokinesis?', options: ['Cell division', 'DNA replication'], correct: 0},
            {topic: 'Physics', emoji: '⚡💡', question: 'What is torque?', options: ['Rotational force', 'Linear force'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is an emulsion?', options: ['Liquid-liquid colloid', 'Gas-liquid'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌✨', question: 'What is a magnetar?', options: ['Neutron star with strong field', 'Black hole'], correct: 0},
            {topic: 'Biology', emoji: '🌿🍃', question: 'What is the Golgi apparatus?', options: ['Packaging organelle', 'Energy producer'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What wave property changes with relative motion?', options: ['Frequency change', 'Amplitude change'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is condensation?', options: ['Gas to liquid', 'Liquid to gas'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is coronal heating problem?', options: ['Why corona hotter than surface', 'Sunspot mystery'], correct: 0},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is an antagonistic pair?', options: ['Opposing muscles', 'Similar muscles'], correct: 0},
            {topic: 'Physics', emoji: '🎯⚡', question: 'What is self-inductance?', options: ['Induced EMF in same coil', 'Between coils'], correct: 0}
        ],
        hard: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the central dogma?', options: ['DNA→RNA→Protein', 'Protein→RNA→DNA', 'RNA→DNA→Protein'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is Gauss\'s law?', options: ['E-field flux from charge', 'B-field from current', 'Force between charges'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the rate-determining step?', options: ['Slowest reaction step', 'Fastest step', 'First step'], correct: 0},
            {topic: 'Astronomy', emoji: '🌌💫', question: 'What is a brown dwarf?', options: ['Failed star', 'Dead star', 'Planet'], correct: 0},
            {topic: 'Biology', emoji: '🫀💓', question: 'What is cardiac output?', options: ['Blood per minute', 'Heart rate', 'Blood pressure'], correct: 0},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the continuity equation?', options: ['Mass conservation in fluids', 'Energy conservation', 'Momentum conservation'], correct: 0},
            {topic: 'Chemistry', emoji: '💧⚗️', question: 'What is benzene?', options: ['Aromatic ring C₆H₆', 'Aliphatic', 'Alkene'], correct: 0},
            {topic: 'Astronomy', emoji: '☀️⭐', question: 'What is the bow shock?', options: ['Where solar wind meets ISM', 'Planetary boundary', 'Star collision'], correct: 0},
            {topic: 'Biology', emoji: '👁️🔬', question: 'What is the choroid?', options: ['Vascular eye layer', 'Retina', 'Lens'], correct: 0},
            {topic: 'Physics', emoji: '🌡️🔥', question: 'What is isochoric process?', options: ['Constant volume', 'Constant pressure', 'Constant temperature'], correct: 0}
        ],
        expert: [
            {topic: 'Biology', emoji: '🦠🧫', question: 'What is horizontal gene transfer?', options: ['Gene transfer between organisms', 'Vertical inheritance', 'Mutation', 'Replication'], correct: 0},
            {topic: 'Physics', emoji: '⚡🔬', question: 'What is the Klein-Gordon equation?', options: ['Relativistic wave equation', 'Schrödinger equation', 'Dirac equation', 'Maxwell equation'], correct: 0},
            {topic: 'Chemistry', emoji: '🧪⚗️', question: 'What is a ketone?', options: ['RCOR\'', 'RCHO', 'RCOOH', 'RCOOR\''], correct: 0},
            {topic: 'Astronomy', emoji: '🌌⭐', question: 'What is the flatness problem?', options: ['Why universe geometry flat', 'Why matter dominates', 'Why expansion', 'Why dark energy'], correct: 0},
            {topic: 'Biology', emoji: '🧬💉', question: 'How do bacteria share genetic material laterally?', options: ['Genes between unrelated organisms', 'Parent to offspring', 'Sister chromatids', 'Homologous chromosomes'], correct: 0},
            {topic: 'Physics', emoji: '🌈💡', question: 'What is Fresnel diffraction?', options: ['Near-field diffraction', 'Far-field', 'Reflection', 'Refraction'], correct: 0},
            {topic: 'Chemistry', emoji: '⚛️💎', question: 'What is a carbanion?', options: ['Negatively charged carbon', 'Positively charged', 'Neutral carbon', 'Free radical'], correct: 0},
            {topic: 'Astronomy', emoji: '🪐💍', question: 'What is the invariable plane?', options: ['Solar system angular momentum plane', 'Ecliptic', 'Galactic plane', 'Equatorial plane'], correct: 0},
            {topic: 'Biology', emoji: '🌱🔬', question: 'What is phototropism?', options: ['Light response growth', 'Gravity response', 'Touch response', 'Water response'], correct: 0},
            {topic: 'Physics', emoji: '🔊📡', question: 'What is the overtone?', options: ['Higher harmonic', 'Fundamental frequency', 'Beat frequency', 'Resonance'], correct: 0}
        ],
        extreme: [
            {topic: 'Biology', emoji: '🧬🔬', question: 'What is the Luria-Delbrück experiment?', answer: 'Proved mutations occur randomly'},
            {topic: 'Physics', emoji: '⚡🔋', question: 'What is the Landau damping?', answer: 'Collisionless plasma wave damping'},
            {topic: 'Chemistry', emoji: '⚛️🔬', question: 'What is the Birch reduction?', answer: 'Aromatic reduction with alkali metal in ammonia'},
            {topic: 'Astronomy', emoji: '🌌🔭', question: 'What is the horizon problem?', answer: 'Why distant regions have same temperature'},
            {topic: 'Biology', emoji: '🦴💪', question: 'What is the foramen of Magendie?', answer: 'Opening in fourth ventricle'},
            {topic: 'Physics', emoji: '🌊💧', question: 'What is the Grashof number?', answer: 'Ratio of buoyancy to viscous forces'},
            {topic: 'Chemistry', emoji: '💧🌊', question: 'What is the Curtin-Hammett principle?', answer: 'Product ratio from transition state energies'},
            {topic: 'Astronomy', emoji: '🌟💫', question: 'At what core mass fraction does hydrogen shell burning begin?', answer: '10% stellar mass for isothermal core'},
            {topic: 'Biology', emoji: '🧠🔬', question: 'What is the basal ganglia?', answer: 'Brain nuclei for motor control'},
            {topic: 'Physics', emoji: '💡⚡', question: 'What is the Diesel cycle?', answer: 'Ideal compression ignition cycle'}
        ]
    }
};

