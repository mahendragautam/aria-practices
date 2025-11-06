/**
 * WPCode Snippet #3: History Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer  
 * Priority: 12
 *
 * COPY ALL CODE BELOW
 */

const historyQuestions = {
    1: { // Chapter 1: Ancient Civilizations
        easy: [
            {topic: 'Ancient', emoji: '🏛️👑', question: 'The pyramids are in Egypt.', options: ['True', 'False'], correct: 0},
            {topic: 'Modern', emoji: '🌍🗺️', question: 'World War II ended in 1945.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient', emoji: '⚔️🛡️', question: 'Romans built the Colosseum.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '🏰👑', question: 'Knights lived in castles.', options: ['True', 'False'], correct: 0},
            {topic: 'Modern', emoji: '🚀🌕', question: 'Humans landed on the moon in 1969.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient', emoji: '📜🏛️', question: 'Ancient Greeks invented democracy.', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '🎨🖼️', question: 'Leonardo da Vinci was a Renaissance artist.', options: ['True', 'False'], correct: 0},
            {topic: 'Modern', emoji: '🗽🇺🇸', question: 'USA declared independence in 1776.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🏰', question: 'The Middle Ages lasted about 1000 years.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient', emoji: '🐉👑', question: 'The Great Wall of China was built in ancient times.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ancient', emoji: '🏛️📜', question: 'Who was the first Roman Emperor?', options: ['Augustus', 'Julius Caesar'], correct: 0},
            {topic: 'Modern', emoji: '🗽📜', question: 'Who wrote the Declaration of Independence?', options: ['Thomas Jefferson', 'George Washington'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️👑', question: 'What were medieval soldiers called?', options: ['Knights', 'Samurai'], correct: 0},
            {topic: 'Ancient', emoji: '🏺🏛️', question: 'Which civilization built Machu Picchu?', options: ['Inca', 'Maya'], correct: 0},
            {topic: 'Modern', emoji: '🌍⚔️', question: 'Who led India to independence?', options: ['Gandhi', 'Nehru'], correct: 0},
            {topic: 'Renaissance', emoji: '🎨🖼️', question: 'Who painted the Mona Lisa?', options: ['Leonardo da Vinci', 'Michelangelo'], correct: 0},
            {topic: 'Ancient', emoji: '⚔️🏛️', question: 'Which empire was led by Alexander?', options: ['Macedonian', 'Persian'], correct: 0},
            {topic: 'Modern', emoji: '✈️⚔️', question: 'What triggered World War I?', options: ['Assassination', 'Invasion'], correct: 0},
            {topic: 'Medieval', emoji: '📜👑', question: 'What was the Magna Carta?', options: ['Charter of rights', 'War declaration'], correct: 0},
            {topic: 'Ancient', emoji: '📜🏛️', question: 'Who was the Egyptian sun god?', options: ['Ra', 'Osiris'], correct: 0}
        ],
        hard: [
            {topic: 'Ancient', emoji: '🏛️👑', question: 'In which year did Rome fall?', options: ['476 AD', '410 AD', '500 AD'], correct: 0},
            {topic: 'Modern', emoji: '⚔️🌍', question: 'When did World War I start?', options: ['1914', '1918', '1939'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🏰', question: 'What was the Black Death?', options: ['Plague pandemic', 'War', 'Famine'], correct: 0},
            {topic: 'Renaissance', emoji: '🎨📚', question: 'When did the Renaissance begin?', options: ['14th century', '15th century', '16th century'], correct: 0},
            {topic: 'Ancient', emoji: '🏺📜', question: 'Who was Cleopatra?', options: ['Egyptian pharaoh', 'Roman queen', 'Greek goddess'], correct: 0},
            {topic: 'Modern', emoji: '🗽📜', question: 'When was the US Constitution signed?', options: ['1787', '1776', '1791'], correct: 0},
            {topic: 'Medieval', emoji: '🏰👑', question: 'What were the Crusades?', options: ['Religious wars', 'Trade routes', 'Explorations'], correct: 0},
            {topic: 'Ancient', emoji: '⚔️🛡️', question: 'Who led Carthage against Rome?', options: ['Hannibal', 'Caesar', 'Scipio'], correct: 0},
            {topic: 'Modern', emoji: '🚂⚙️', question: 'When did the Industrial Revolution begin?', options: ['1760s', '1860s', '1660s'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎨', question: 'Who sculpted David?', options: ['Michelangelo', 'Donatello', 'Leonardo'], correct: 0}
        ],
        expert: [
            {topic: 'Ancient', emoji: '🏛️📜', question: 'In which year did Alexander the Great die?', options: ['323 BC', '356 BC', '300 BC', '350 BC'], correct: 0},
            {topic: 'Modern', emoji: '🗽🇺🇸', question: 'Which amendment abolished slavery?', options: ['13th', '14th', '15th', '16th'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️👑', question: 'When did the Battle of Hastings occur?', options: ['1066', '1166', '966', '1266'], correct: 0},
            {topic: 'Renaissance', emoji: '🎨📚', question: 'Who wrote "The Prince"?', options: ['Machiavelli', 'Dante', 'Petrarch', 'Boccaccio'], correct: 0},
            {topic: 'Ancient', emoji: '🏺🏛️', question: 'What was the Rosetta Stone used for?', options: ['Decoding hieroglyphs', 'Building pyramids', 'Religious ceremonies', 'Trade'], correct: 0},
            {topic: 'Modern', emoji: '⚔️🌍', question: 'Treaty that ended WWI?', options: ['Versailles', 'Paris', 'Vienna', 'Geneva'], correct: 0},
            {topic: 'Medieval', emoji: '🏰📜', question: 'When was the printing press invented?', options: ['1440s', '1340s', '1540s', '1640s'], correct: 0},
            {topic: 'Ancient', emoji: '⚔️🛡️', question: 'First emperor of unified China?', options: ['Qin Shi Huang', 'Han Wu', 'Tang Taizong', 'Ming Yongle'], correct: 0},
            {topic: 'Modern', emoji: '🚀🌕', question: 'Apollo 11 landed on moon in which year?', options: ['1969', '1968', '1970', '1971'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎨', question: 'Where was the Renaissance born?', options: ['Florence', 'Rome', 'Venice', 'Milan'], correct: 0}
        ],
        extreme: [
            {topic: 'Ancient', emoji: '🏛️📜', question: 'Name the three main periods of ancient Egyptian history', answer: 'Old Kingdom, Middle Kingdom, New Kingdom'},
            {topic: 'Modern', emoji: '⚔️🌍', question: 'List three causes of World War I', answer: 'Militarism, Alliances, Imperialism, Nationalism (any 3)'},
            {topic: 'Medieval', emoji: '⚔️🏰', question: 'What was the feudal system hierarchy?', answer: 'King, Lords/Nobles, Knights, Peasants/Serfs'},
            {topic: 'Renaissance', emoji: '🎨📚', question: 'Name three Renaissance artists', answer: 'Leonardo da Vinci, Michelangelo, Raphael (any 3)'},
            {topic: 'Ancient', emoji: '🏺🏛️', question: 'What were the Seven Wonders of the Ancient World? (name 3)', answer: 'Pyramids, Hanging Gardens, Zeus Statue, etc (any 3)'},
            {topic: 'Modern', emoji: '🗽📜', question: 'Name the first 10 US presidents (first 3)', answer: 'Washington, Adams, Jefferson'},
            {topic: 'Medieval', emoji: '📜👑', question: 'What year was the Magna Carta signed?', answer: '1215'},
            {topic: 'Ancient', emoji: '⚔️🛡️', question: 'Name three ancient civilizations in Mesopotamia', answer: 'Sumer, Babylon, Assyria (any 3)'},
            {topic: 'Modern', emoji: '🚂⚙️', question: 'Name three inventions of the Industrial Revolution', answer: 'Steam engine, spinning jenny, power loom (any 3)'},
            {topic: 'Renaissance', emoji: '🖼️🎨', question: 'When did the Renaissance approximately occur?', answer: '14th-17th century or 1300-1600'}
        ]
    }
    // Add more chapters: 2, 3, 4... unlimited!
};

