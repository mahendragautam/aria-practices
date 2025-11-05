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
    }
    // Add more chapters: 2, 3, 4, 5... jati ota pani!
};

