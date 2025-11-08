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
    },
    2: { // Chapter 2: Ancient Egypt
        easy: [
            {topic: 'Ancient Egypt', emoji: '🏺👑', question: 'Pharaohs ruled ancient Egypt.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🔺⚰️', question: 'Pyramids were tombs for pharaohs.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '📜🏛️', question: 'Hieroglyphs were Egyptian writing.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🌊🏜️', question: 'The Nile River was vital for Egypt.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '👑💎', question: 'Tutankhamun was a boy king.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🏺⚱️', question: 'Egyptians practiced mummification.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🔱👁️', question: 'Ra was the sun god.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🏜️🔺', question: 'The Sphinx guards the pyramids.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '📜👑', question: 'Cleopatra was the last pharaoh.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '⚱️🏺', question: 'Canopic jars held internal organs.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ancient Egypt', emoji: '🏺👑', question: 'Who unified Upper and Lower Egypt?', options: ['Narmer', 'Khufu'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🔺⚰️', question: 'Which pharaoh built the Great Pyramid?', options: ['Khufu', 'Ramses II'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '📜🏛️', question: 'What was papyrus used for?', options: ['Writing', 'Building'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🌊🏜️', question: 'How did the Nile flood help farmers?', options: ['Deposited fertile soil', 'Provided water only'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '👑💎', question: 'Who was Hatshepsut?', options: ['Female pharaoh', 'Queen consort'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🏺⚱️', question: 'Why did Egyptians mummify bodies?', options: ['Preserve for afterlife', 'Religious ritual only'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🔱👁️', question: 'Who was Anubis?', options: ['God of embalming', 'Sun god'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🏜️🔺', question: 'What does the Sphinx represent?', options: ['Royal power', 'Sun god'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '📜👑', question: 'With whom did Cleopatra ally?', options: ['Julius Caesar', 'Alexander'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '⚱️🏺', question: 'What protected mummies?', options: ['Sarcophagus', 'Temple'], correct: 0}
        ],
        hard: [
            {topic: 'Ancient Egypt', emoji: '🏺👑', question: 'When did the Old Kingdom begin?', options: ['2686 BC', '3000 BC', '2000 BC'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🔺⚰️', question: 'How many pyramids at Giza?', options: ['3', '4', '5'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '📜🏛️', question: 'When was the Rosetta Stone found?', options: ['1799', '1699', '1899'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🌊🏜️', question: 'How long is the Nile River?', options: ['6,650 km', '5,000 km', '7,000 km'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '👑💎', question: 'When did Tutankhamun die?', options: ['1323 BC', '1423 BC', '1223 BC'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🏺⚱️', question: 'How long did mummification take?', options: ['70 days', '40 days', '100 days'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🔱👁️', question: 'What was the Book of the Dead?', options: ['Funerary text', 'Law code', 'History book'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🏜️🔺', question: 'When was the Sphinx built?', options: ['2500 BC', '3000 BC', '2000 BC'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '📜👑', question: 'How did Cleopatra die?', options: ['Snake bite', 'Poison', 'Battle'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '⚱️🏺', question: 'Which organ was left in the body?', options: ['Heart', 'Brain', 'Lungs'], correct: 0}
        ],
        expert: [
            {topic: 'Ancient Egypt', emoji: '🏺👑', question: 'Who was Imhotep?', options: ['Architect/physician', 'Pharaoh', 'General', 'Priest'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🔺⚰️', question: 'What is the tallest pyramid?', options: ['Great Pyramid', 'Khafre', 'Menkaure', 'Red Pyramid'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '📜🏛️', question: 'How many hieroglyphic symbols exist?', options: ['700+', '500', '1000', '300'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🌊🏜️', question: 'What was the Nile flood season called?', options: ['Akhet', 'Peret', 'Shemu', 'Inundation'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '👑💎', question: "Who found Tutankhamun's tomb?", options: ['Howard Carter', 'Petrie', 'Champollion', 'Mariette'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🏺⚱️', question: 'What mineral was used in mummification?', options: ['Natron', 'Salt', 'Sand', 'Clay'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🔱👁️', question: 'Who was Osiris?', options: ['God of afterlife', 'Sun god', 'War god', 'Wisdom god'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '🏜️🔺', question: 'What was the original name of the Sphinx?', options: ['Unknown', 'Harmakhis', 'Anubis', 'Horus'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '📜👑', question: 'Which dynasty was Cleopatra from?', options: ['Ptolemaic', '18th', '19th', '20th'], correct: 0},
            {topic: 'Ancient Egypt', emoji: '⚱️🏺', question: 'What wrapped mummies?', options: ['Linen', 'Cotton', 'Silk', 'Wool'], correct: 0}
        ],
        extreme: [
            {topic: 'Ancient Egypt', emoji: '🏺👑', question: 'Name the three kingdoms of ancient Egypt', answer: 'Old Kingdom, Middle Kingdom, New Kingdom'},
            {topic: 'Ancient Egypt', emoji: '🔺⚰️', question: 'What was the original height of the Great Pyramid?', answer: '146.6 meters or 481 feet'},
            {topic: 'Ancient Egypt', emoji: '📜🏛️', question: 'Who deciphered hieroglyphics?', answer: 'Jean-François Champollion'},
            {topic: 'Ancient Egypt', emoji: '🌊🏜️', question: 'Name three crops grown in ancient Egypt', answer: 'Wheat, barley, flax (any 3)'},
            {topic: 'Ancient Egypt', emoji: '👑💎', question: "In what year was Tutankhamun's tomb discovered?", answer: '1922'},
            {topic: 'Ancient Egypt', emoji: '🏺⚱️', question: 'List the four canopic jar gods', answer: 'Imsety, Hapy, Duamutef, Qebehsenuef'},
            {topic: 'Ancient Egypt', emoji: '🔱👁️', question: 'Name three major Egyptian gods', answer: 'Ra, Osiris, Isis, Anubis, Horus (any 3)'},
            {topic: 'Ancient Egypt', emoji: '🏜️🔺', question: 'What is the Sphinx missing?', answer: 'Nose'},
            {topic: 'Ancient Egypt', emoji: '📜👑', question: 'When did Cleopatra reign?', answer: '51-30 BC'},
            {topic: 'Ancient Egypt', emoji: '⚱️🏺', question: 'How long did ancient Egyptian civilization last?', answer: '3000 years or 3100 BC - 30 BC'}
        ]
    },
    3: { // Chapter 3: Ancient Greece
        easy: [
            {topic: 'Ancient Greece', emoji: '🏛️⚡', question: 'Athens invented democracy.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚔️🛡️', question: 'Spartans were famous warriors.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏺🎭', question: 'Greeks created the Olympic Games.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Greece', emoji: '📜🏛️', question: 'Greek gods lived on Mount Olympus.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚡👑', question: 'Zeus was king of the gods.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏛️📚', question: 'Socrates was a famous philosopher.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚔️🐴', question: 'Greeks used the Trojan Horse trick.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏺🎨', question: 'Greeks made beautiful pottery.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Greece', emoji: '📜⚡', question: 'Alexander conquered much of the world.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏛️🎭', question: 'Greeks invented theater and drama.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ancient Greece', emoji: '🏛️⚡', question: 'Who founded democracy in Athens?', options: ['Cleisthenes', 'Pericles'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚔️🛡️', question: "What was Sparta's government?", options: ['Military oligarchy', 'Democracy'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏺🎭', question: 'When did the first Olympics occur?', options: ['776 BC', '676 BC'], correct: 0},
            {topic: 'Ancient Greece', emoji: '📜🏛️', question: 'Who was the goddess of wisdom?', options: ['Athena', 'Hera'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚡👑', question: "What was Zeus's weapon?", options: ['Thunderbolt', 'Trident'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏛️📚', question: 'Who taught Alexander the Great?', options: ['Aristotle', 'Plato'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚔️🐴', question: 'Who wrote the Iliad?', options: ['Homer', 'Hesiod'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏺🎨', question: 'What style shows black figures?', options: ['Black-figure', 'Red-figure'], correct: 0},
            {topic: 'Ancient Greece', emoji: '📜⚡', question: "Who was Alexander's father?", options: ['Philip II', 'Philip III'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏛️🎭', question: 'Who wrote Greek tragedies?', options: ['Sophocles', 'Aristophanes'], correct: 0}
        ],
        hard: [
            {topic: 'Ancient Greece', emoji: '🏛️⚡', question: 'When was the Golden Age of Athens?', options: ['5th century BC', '4th century BC', '6th century BC'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚔️🛡️', question: 'What was the Spartan warrior code?', options: ['Never surrender', 'Honor above all', 'Victory or death'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏺🎭', question: 'How often were ancient Olympics held?', options: ['Every 4 years', 'Annually', 'Every 2 years'], correct: 0},
            {topic: 'Ancient Greece', emoji: '📜🏛️', question: 'How many Olympian gods were there?', options: ['12', '10', '15'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚡👑', question: "Who was Zeus's wife?", options: ['Hera', 'Athena', 'Aphrodite'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏛️📚', question: "What was Socrates's method called?", options: ['Socratic method', 'Dialectic', 'Logic'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚔️🐴', question: 'How long did the Trojan War last?', options: ['10 years', '20 years', '5 years'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏺🎨', question: 'What battle stopped Persian invasion?', options: ['Marathon', 'Thermopylae', 'Salamis'], correct: 0},
            {topic: 'Ancient Greece', emoji: '📜⚡', question: 'When did Alexander die?', options: ['323 BC', '333 BC', '313 BC'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏛️🎭', question: 'What is a Greek theater called?', options: ['Amphitheater', 'Colosseum', 'Stadium'], correct: 0}
        ],
        expert: [
            {topic: 'Ancient Greece', emoji: '🏛️⚡', question: 'Who was the lawgiver of Athens before Cleisthenes?', options: ['Solon', 'Draco', 'Pericles', 'Themistocles'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚔️🛡️', question: 'How many soldiers in a Spartan phalanx?', options: ['Varied', '300', '1000', '500'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏺🎭', question: 'What prize did Olympic victors receive?', options: ['Olive wreath', 'Gold', 'Laurel wreath', 'Trophy'], correct: 0},
            {topic: 'Ancient Greece', emoji: '📜🏛️', question: 'Who was the god of the sea?', options: ['Poseidon', 'Hades', 'Apollo', 'Hermes'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚡👑', question: 'What was the Oracle of Delphi?', options: ['Priestess', 'Temple', 'God', 'City'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏛️📚', question: 'Who founded the Academy?', options: ['Plato', 'Aristotle', 'Socrates', 'Pythagoras'], correct: 0},
            {topic: 'Ancient Greece', emoji: '⚔️🐴', question: 'Who led the Greeks at Troy?', options: ['Agamemnon', 'Achilles', 'Odysseus', 'Hector'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏺🎨', question: 'What was a Greek city-state called?', options: ['Polis', 'Demos', 'Agora', 'Acropolis'], correct: 0},
            {topic: 'Ancient Greece', emoji: '📜⚡', question: 'Which empire did Alexander NOT conquer?', options: ['China', 'Persia', 'Egypt', 'India'], correct: 0},
            {topic: 'Ancient Greece', emoji: '🏛️🎭', question: 'Who wrote the Oresteia trilogy?', options: ['Aeschylus', 'Sophocles', 'Euripides', 'Aristophanes'], correct: 0}
        ],
        extreme: [
            {topic: 'Ancient Greece', emoji: '🏛️⚡', question: 'Name three famous Athenian leaders', answer: 'Pericles, Cleisthenes, Solon (any 3)'},
            {topic: 'Ancient Greece', emoji: '⚔️🛡️', question: 'What were the three classes in Sparta?', answer: 'Spartiates, Perioeci, Helots'},
            {topic: 'Ancient Greece', emoji: '🏺🎭', question: 'Name four Olympic events in ancient Greece', answer: 'Running, wrestling, boxing, chariot racing (any 4)'},
            {topic: 'Ancient Greece', emoji: '📜🏛️', question: 'List five of the 12 Olympian gods', answer: 'Zeus, Hera, Poseidon, Athena, Apollo (any 5)'},
            {topic: 'Ancient Greece', emoji: '⚡👑', question: "What were Zeus's three domains?", answer: 'Sky, thunder, justice'},
            {topic: 'Ancient Greece', emoji: '🏛️📚', question: 'Name three famous Greek philosophers', answer: 'Socrates, Plato, Aristotle'},
            {topic: 'Ancient Greece', emoji: '⚔️🐴', question: 'When did the Trojan War supposedly occur?', answer: '1200 BC or 12th century BC'},
            {topic: 'Ancient Greece', emoji: '🏺🎨', question: 'What are the three orders of Greek columns?', answer: 'Doric, Ionic, Corinthian'},
            {topic: 'Ancient Greece', emoji: '📜⚡', question: "How far did Alexander's empire stretch?", answer: 'Greece to India or Macedonia to India'},
            {topic: 'Ancient Greece', emoji: '🏛️🎭', question: 'Name three Greek playwrights', answer: 'Sophocles, Euripides, Aeschylus, Aristophanes (any 3)'}
        ]
    },
    4: { // Chapter 4: Ancient Rome
        easy: [
            {topic: 'Ancient Rome', emoji: '🏛️⚔️', question: 'Rome was founded by Romulus.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'Julius Caesar was assassinated.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏟️⚔️', question: 'Gladiators fought in the Colosseum.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🛡️⚔️', question: 'Roman legions conquered many lands.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Rome', emoji: '📜🏛️', question: 'Romans created a republic.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏛️👨‍⚖️', question: 'Rome had a Senate.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🛣️🏛️', question: 'Romans built excellent roads.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'Augustus was the first emperor.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏛️⚖️', question: 'Roman law influenced modern law.', options: ['True', 'False'], correct: 0},
            {topic: 'Ancient Rome', emoji: '⚔️🛡️', question: 'Rome fell in 476 AD.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ancient Rome', emoji: '🏛️⚔️', question: 'When was Rome founded (legend)?', options: ['753 BC', '853 BC'], correct: 0},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'Who said "Et tu, Brute?"', options: ['Julius Caesar', 'Augustus'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏟️⚔️', question: 'What did gladiators usually fight?', options: ['Each other', 'Only animals'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🛡️⚔️', question: 'How many men in a Roman legion?', options: ['5000-6000', '10000'], correct: 0},
            {topic: 'Ancient Rome', emoji: '📜🏛️', question: 'What replaced Roman kings?', options: ['Republic', 'Democracy'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏛️👨‍⚖️', question: 'Who led the Senate?', options: ['Consuls', 'Emperor'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🛣️🏛️', question: 'Why did Romans build roads?', options: ['Military/trade', 'Tourism'], correct: 0},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'What was Augustus originally called?', options: ['Octavian', 'Marcus'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏛️⚖️', question: 'What was Roman law collection called?', options: ['Twelve Tables', 'Ten Commandments'], correct: 0},
            {topic: 'Ancient Rome', emoji: '⚔️🛡️', question: 'Who conquered the Western Empire?', options: ['Germanic tribes', 'Persians'], correct: 0}
        ],
        hard: [
            {topic: 'Ancient Rome', emoji: '🏛️⚔️', question: 'How many kings ruled early Rome?', options: ['7', '5', '10'], correct: 0},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'When was Julius Caesar killed?', options: ['44 BC', '43 BC', '45 BC'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏟️⚔️', question: 'When was the Colosseum completed?', options: ['80 AD', '70 AD', '90 AD'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🛡️⚔️', question: 'Who fought in the Punic Wars?', options: ['Rome and Carthage', 'Rome and Greece', 'Rome and Egypt'], correct: 0},
            {topic: 'Ancient Rome', emoji: '📜🏛️', question: 'When did Rome become a republic?', options: ['509 BC', '510 BC', '500 BC'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏛️👨‍⚖️', question: 'How many consuls led Rome?', options: ['2', '1', '3'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🛣️🏛️', question: 'What was the main Roman road called?', options: ['Via Appia', 'Via Roma', 'Via Regia'], correct: 0},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'What title did Augustus take?', options: ['Princeps', 'Rex', 'Dictator'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏛️⚖️', question: 'What does "veni, vidi, vici" mean?', options: ['I came, saw, conquered', 'Victory is mine', 'Rome forever'], correct: 0},
            {topic: 'Ancient Rome', emoji: '⚔️🛡️', question: 'Who was the last Western Roman emperor?', options: ['Romulus Augustulus', 'Constantine', 'Nero'], correct: 0}
        ],
        expert: [
            {topic: 'Ancient Rome', emoji: '🏛️⚔️', question: 'Who was Cincinnatus?', options: ['Farmer-dictator', 'General', 'Emperor', 'Senator'], correct: 0},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'How many times was Caesar stabbed?', options: ['23', '15', '30', '20'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏟️⚔️', question: 'What emperor started the Colosseum?', options: ['Vespasian', 'Titus', 'Nero', 'Trajan'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🛡️⚔️', question: 'Who crossed the Rubicon?', options: ['Julius Caesar', 'Pompey', 'Marc Antony', 'Cicero'], correct: 0},
            {topic: 'Ancient Rome', emoji: '📜🏛️', question: 'What was the Pax Romana?', options: ['Roman Peace', 'Roman War', 'Roman Law', 'Roman Senate'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏛️👨‍⚖️', question: 'Who was Cicero?', options: ['Orator/statesman', 'General', 'Emperor', 'Gladiator'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🛣️🏛️', question: 'What was a Roman aqueduct?', options: ['Water channel', 'Road', 'Bridge', 'Building'], correct: 0},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'Who was Nero?', options: ['Emperor', 'General', 'Senator', 'Consul'], correct: 0},
            {topic: 'Ancient Rome', emoji: '🏛️⚖️', question: 'What was the Praetorian Guard?', options: ["Emperor's bodyguard", 'Senate guard', 'City police', 'Army unit'], correct: 0},
            {topic: 'Ancient Rome', emoji: '⚔️🛡️', question: 'Who sacked Rome in 410 AD?', options: ['Visigoths', 'Vandals', 'Huns', 'Ostrogoths'], correct: 0}
        ],
        extreme: [
            {topic: 'Ancient Rome', emoji: '🏛️⚔️', question: "Name the three Punic Wars' dates (centuries)", answer: '3rd century BC, 3rd-2nd century BC, 2nd century BC'},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'Name three members of the First Triumvirate', answer: 'Caesar, Pompey, Crassus'},
            {topic: 'Ancient Rome', emoji: '🏟️⚔️', question: "What was the Colosseum's original name?", answer: 'Flavian Amphitheater'},
            {topic: 'Ancient Rome', emoji: '🛡️⚔️', question: 'Who commanded Carthage in Punic Wars?', answer: 'Hannibal Barca'},
            {topic: 'Ancient Rome', emoji: '📜🏛️', question: 'How long did the Roman Republic last?', answer: '500 years or 509 BC - 27 BC'},
            {topic: 'Ancient Rome', emoji: '🏛️👨‍⚖️', question: 'Name three Roman government positions', answer: 'Consul, Senator, Tribune, Praetor (any 3)'},
            {topic: 'Ancient Rome', emoji: '🛣️🏛️', question: 'What saying refers to Roman roads?', answer: 'All roads lead to Rome'},
            {topic: 'Ancient Rome', emoji: '👑🦅', question: 'How long did Augustus rule?', answer: '41 years or 27 BC - 14 AD'},
            {topic: 'Ancient Rome', emoji: '🏛️⚖️', question: 'What does SPQR stand for?', answer: 'Senatus Populusque Romanus'},
            {topic: 'Ancient Rome', emoji: '⚔️🛡️', question: "Name three causes of Rome's fall", answer: 'Invasions, economic problems, political instability (any 3)'}
        ]
    },
    5: { // Chapter 5: Medieval Europe
        easy: [
            {topic: 'Medieval', emoji: '🏰⚔️', question: 'Knights wore armor.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '👑🏰', question: 'Kings ruled medieval kingdoms.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🛡️', question: 'The Crusades were religious wars.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '🏰📜', question: 'Feudalism was the social system.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '🐴⚔️', question: 'Knights fought on horseback.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '📚⛪', question: 'Monks preserved ancient knowledge.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '🏰👸', question: 'Queens sometimes ruled kingdoms.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🏴', question: 'Vikings raided coastal areas.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '🏰🔔', question: 'Churches were important buildings.', options: ['True', 'False'], correct: 0},
            {topic: 'Medieval', emoji: '📜⚔️', question: "The Magna Carta limited king's power.", options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Medieval', emoji: '🏰⚔️', question: "What was a knight's code called?", options: ['Chivalry', 'Honor'], correct: 0},
            {topic: 'Medieval', emoji: '👑🏰', question: 'Who crowned Charlemagne emperor?', options: ['Pope', 'Bishop'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🛡️', question: 'How many Crusades were there?', options: ['8-9', '5-6'], correct: 0},
            {topic: 'Medieval', emoji: '🏰📜', question: 'Who owned land in feudalism?', options: ['Lords', 'Peasants'], correct: 0},
            {topic: 'Medieval', emoji: '🐴⚔️', question: "What was a knight's ceremony called?", options: ['Dubbing', 'Coronation'], correct: 0},
            {topic: 'Medieval', emoji: '📚⛪', question: 'Where did monks live?', options: ['Monasteries', 'Churches'], correct: 0},
            {topic: 'Medieval', emoji: '🏰👸', question: 'Who was Eleanor of Aquitaine?', options: ['Queen', 'Princess'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🏴', question: 'Where did Vikings come from?', options: ['Scandinavia', 'Germany'], correct: 0},
            {topic: 'Medieval', emoji: '🏰🔔', question: 'What style were Gothic churches?', options: ['Pointed arches', 'Rounded arches'], correct: 0},
            {topic: 'Medieval', emoji: '📜⚔️', question: 'When was Magna Carta signed?', options: ['1215', '1315'], correct: 0}
        ],
        hard: [
            {topic: 'Medieval', emoji: '🏰⚔️', question: 'When did the Middle Ages begin?', options: ['5th century', '6th century', '4th century'], correct: 0},
            {topic: 'Medieval', emoji: '👑🏰', question: 'What year was Charlemagne crowned?', options: ['800', '900', '700'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🛡️', question: 'When did the First Crusade start?', options: ['1096', '1006', '1196'], correct: 0},
            {topic: 'Medieval', emoji: '🏰📜', question: 'What were peasant farmers called?', options: ['Serfs', 'Vassals', 'Tenants'], correct: 0},
            {topic: 'Medieval', emoji: '🐴⚔️', question: 'At what age did knight training start?', options: ['7', '10', '5'], correct: 0},
            {topic: 'Medieval', emoji: '📚⛪', question: 'Who founded the Franciscan order?', options: ['St. Francis', 'St. Benedict', 'St. Dominic'], correct: 0},
            {topic: 'Medieval', emoji: '🏰👸', question: 'How many kings did Eleanor marry?', options: ['2', '1', '3'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🏴', question: 'When did the Viking Age end?', options: ['11th century', '10th century', '12th century'], correct: 0},
            {topic: 'Medieval', emoji: '🏰🔔', question: 'What is Notre-Dame?', options: ['Gothic cathedral', 'Palace', 'Monastery'], correct: 0},
            {topic: 'Medieval', emoji: '📜⚔️', question: 'Who forced King John to sign Magna Carta?', options: ['Barons', 'Pope', 'Army'], correct: 0}
        ],
        expert: [
            {topic: 'Medieval', emoji: '🏰⚔️', question: "What was the Hundred Years' War about?", options: ['English-French throne', 'Territory', 'Religion', 'Trade'], correct: 0},
            {topic: 'Medieval', emoji: '👑🏰', question: 'What empire did Charlemagne rule?', options: ['Carolingian', 'Roman', 'Byzantine', 'Ottoman'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🛡️', question: 'Who called for the First Crusade?', options: ['Pope Urban II', 'Pope Gregory', 'King Richard', 'Emperor'], correct: 0},
            {topic: 'Medieval', emoji: '🏰📜', question: 'What was the three-field system?', options: ['Crop rotation', 'Feudal law', 'Tax system', 'Military'], correct: 0},
            {topic: 'Medieval', emoji: '🐴⚔️', question: 'What was a jousting tournament?', options: ['Combat contest', 'Race', 'Festival', 'Training'], correct: 0},
            {topic: 'Medieval', emoji: '📚⛪', question: 'What language did monks use?', options: ['Latin', 'Greek', 'French', 'English'], correct: 0},
            {topic: 'Medieval', emoji: '🏰👸', question: 'Which countries did Eleanor rule?', options: ['France and England', 'England and Spain', 'France and Germany', 'England and Italy'], correct: 0},
            {topic: 'Medieval', emoji: '⚔️🏴', question: 'Who was Leif Erikson?', options: ['Viking explorer', 'King', 'Warrior', 'Trader'], correct: 0},
            {topic: 'Medieval', emoji: '🏰🔔', question: 'When was Notre-Dame built?', options: ['12th-14th century', '11th-13th century', '13th-15th century', '10th-12th century'], correct: 0},
            {topic: 'Medieval', emoji: '📜⚔️', question: 'How many clauses in original Magna Carta?', options: ['63', '50', '75', '100'], correct: 0}
        ],
        extreme: [
            {topic: 'Medieval', emoji: '🏰⚔️', question: 'Name three medieval weapons', answer: 'Sword, lance, mace, crossbow, longbow (any 3)'},
            {topic: 'Medieval', emoji: '👑🏰', question: "What were Charlemagne's three main achievements?", answer: 'Unified Europe, promoted education, spread Christianity'},
            {topic: 'Medieval', emoji: '⚔️🛡️', question: 'Name three Crusader states', answer: 'Jerusalem, Antioch, Tripoli, Edessa (any 3)'},
            {topic: 'Medieval', emoji: '🏰📜', question: 'Describe the feudal hierarchy (4 levels)', answer: 'King, Lords/Nobles, Knights/Vassals, Peasants/Serfs'},
            {topic: 'Medieval', emoji: '🐴⚔️', question: 'What were the stages of knighthood?', answer: 'Page, Squire, Knight'},
            {topic: 'Medieval', emoji: '📚⛪', question: 'Name three monastic orders', answer: 'Benedictine, Franciscan, Dominican (any 3)'},
            {topic: 'Medieval', emoji: '🏰👸', question: 'What years did Eleanor of Aquitaine live?', answer: '1122-1204'},
            {topic: 'Medieval', emoji: '⚔️🏴', question: 'What were three Viking achievements?', answer: 'Exploration, shipbuilding, trade, navigation (any 3)'},
            {topic: 'Medieval', emoji: '🏰🔔', question: 'Name three features of Gothic architecture', answer: 'Pointed arches, flying buttresses, stained glass (any 3)'},
            {topic: 'Medieval', emoji: '📜⚔️', question: 'What were three key rights in Magna Carta?', answer: 'Due process, fair trial, no taxation without consent (any 3)'}
        ]
    },
    6: { // Chapter 6: Renaissance
        easy: [
            {topic: 'Renaissance', emoji: '🎨🖼️', question: 'The Renaissance began in Italy.', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '📚✍️', question: 'Leonardo da Vinci was a Renaissance man.', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎭', question: 'Michelangelo painted the Sistine Chapel.', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '📖🖋️', question: 'Printing press spread knowledge.', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '🎨👨‍🎨', question: 'Renaissance means "rebirth".', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '🏛️📚', question: 'Humanism focused on human potential.', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎨', question: 'Raphael was a famous artist.', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '📜⛪', question: 'Martin Luther started the Reformation.', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '🎭📖', question: 'Shakespeare lived during Renaissance.', options: ['True', 'False'], correct: 0},
            {topic: 'Renaissance', emoji: '🔬🌍', question: 'Renaissance advanced science.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Renaissance', emoji: '🎨🖼️', question: 'Which Italian city started Renaissance?', options: ['Florence', 'Rome'], correct: 0},
            {topic: 'Renaissance', emoji: '📚✍️', question: 'What did Leonardo invent?', options: ['Flying machines (designs)', 'Telescope'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎭', question: "What is Michelangelo's famous statue?", options: ['David', 'Moses'], correct: 0},
            {topic: 'Renaissance', emoji: '📖🖋️', question: 'Who invented the printing press?', options: ['Gutenberg', 'Caxton'], correct: 0},
            {topic: 'Renaissance', emoji: '🎨👨‍🎨', question: 'When did Renaissance begin?', options: ['14th century', '15th century'], correct: 0},
            {topic: 'Renaissance', emoji: '🏛️📚', question: 'What did humanists study?', options: ['Classical texts', 'Science only'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎨', question: 'What did Raphael paint?', options: ['School of Athens', 'Last Supper'], correct: 0},
            {topic: 'Renaissance', emoji: '📜⛪', question: 'What did Luther post on church door?', options: ['95 Theses', '10 Commandments'], correct: 0},
            {topic: 'Renaissance', emoji: '🎭📖', question: 'What did Shakespeare write?', options: ['Plays', 'Novels'], correct: 0},
            {topic: 'Renaissance', emoji: '🔬🌍', question: 'Who said Earth orbits Sun?', options: ['Copernicus', 'Galileo'], correct: 0}
        ],
        hard: [
            {topic: 'Renaissance', emoji: '🎨🖼️', question: 'Who were the Medici?', options: ['Banking family', 'Artists', 'Popes'], correct: 0},
            {topic: 'Renaissance', emoji: '📚✍️', question: 'How many subjects did Leonardo study?', options: ['Many/polymath', 'Just art', 'Just science'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎭', question: 'How long did Sistine Chapel take?', options: ['4 years', '2 years', '6 years'], correct: 0},
            {topic: 'Renaissance', emoji: '📖🖋️', question: 'When was printing press invented?', options: ['1440s', '1540s', '1340s'], correct: 0},
            {topic: 'Renaissance', emoji: '🎨👨‍🎨', question: 'When did Renaissance end?', options: ['17th century', '16th century', '18th century'], correct: 0},
            {topic: 'Renaissance', emoji: '🏛️📚', question: 'Who authored "The Prince"?', options: ['Machiavelli', 'Dante', 'Petrarch'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎨', question: 'Where was Raphael from?', options: ['Urbino', 'Florence', 'Rome'], correct: 0},
            {topic: 'Renaissance', emoji: '📜⛪', question: 'When did Reformation start?', options: ['1517', '1520', '1510'], correct: 0},
            {topic: 'Renaissance', emoji: '🎭📖', question: 'When did Shakespeare live?', options: ['1564-1616', '1500-1550', '1600-1650'], correct: 0},
            {topic: 'Renaissance', emoji: '🔬🌍', question: 'Who improved the telescope?', options: ['Galileo', 'Newton', 'Kepler'], correct: 0}
        ],
        expert: [
            {topic: 'Renaissance', emoji: '🎨🖼️', question: 'Which Pope commissioned Sistine Chapel?', options: ['Julius II', 'Leo X', 'Clement VII', 'Paul III'], correct: 0},
            {topic: 'Renaissance', emoji: '📚✍️', question: "What was Leonardo's most famous painting?", options: ['Mona Lisa', 'Last Supper', 'Vitruvian Man', 'Annunciation'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎭', question: 'What tomb did Michelangelo design?', options: ['Medici Chapel', "St. Peter's", 'Julius II', 'His own'], correct: 0},
            {topic: 'Renaissance', emoji: '📖🖋️', question: 'What was first printed book?', options: ['Gutenberg Bible', 'Divine Comedy', 'Canterbury Tales', 'Decameron'], correct: 0},
            {topic: 'Renaissance', emoji: '🎨👨‍🎨', question: 'What technique used perspective?', options: ['Linear perspective', 'Chiaroscuro', 'Sfumato', 'Fresco'], correct: 0},
            {topic: 'Renaissance', emoji: '🏛️📚', question: 'Who wrote "Divine Comedy"?', options: ['Dante', 'Petrarch', 'Boccaccio', 'Machiavelli'], correct: 0},
            {topic: 'Renaissance', emoji: '🖼️🎨', question: 'How many Madonnas did Raphael paint?', options: ['Many', 'Few', 'One', 'None'], correct: 0},
            {topic: 'Renaissance', emoji: '📜⛪', question: 'What was the Counter-Reformation?', options: ['Catholic response', 'Protestant split', 'Council', 'War'], correct: 0},
            {topic: 'Renaissance', emoji: '🎭📖', question: 'How many plays did Shakespeare write?', options: ['37', '30', '40', '50'], correct: 0},
            {topic: 'Renaissance', emoji: '🔬🌍', question: 'Who formulated laws of motion?', options: ['Newton', 'Galileo', 'Kepler', 'Copernicus'], correct: 0}
        ],
        extreme: [
            {topic: 'Renaissance', emoji: '🎨🖼️', question: 'Name three major Renaissance cities', answer: 'Florence, Rome, Venice (any 3)'},
            {topic: 'Renaissance', emoji: '📚✍️', question: 'List three fields Leonardo studied', answer: 'Art, science, engineering, anatomy, music (any 3)'},
            {topic: 'Renaissance', emoji: '🖼️🎭', question: 'Name three Michelangelo sculptures', answer: 'David, Pietà, Moses (any 3)'},
            {topic: 'Renaissance', emoji: '📖🖋️', question: 'What year was the printing press invented?', answer: '1440 or 1450'},
            {topic: 'Renaissance', emoji: '🎨👨‍🎨', question: 'List three major Renaissance artists', answer: 'Leonardo, Michelangelo, Raphael, Donatello (any 3)'},
            {topic: 'Renaissance', emoji: '🏛️📚', question: 'What were three humanist values?', answer: 'Education, reason, classical learning (any 3)'},
            {topic: 'Renaissance', emoji: '🖼️🎨', question: 'Name three subjects Raphael painted', answer: 'Madonnas, portraits, frescoes (any 3)'},
            {topic: 'Renaissance', emoji: '📜⛪', question: 'Name three Protestant reformers', answer: 'Luther, Calvin, Zwingli, Knox (any 3)'},
            {topic: 'Renaissance', emoji: '🎭📖', question: 'Name three Shakespeare plays', answer: 'Hamlet, Macbeth, Romeo and Juliet (any 3)'},
            {topic: 'Renaissance', emoji: '🔬🌍', question: 'Name three Renaissance scientists', answer: 'Copernicus, Galileo, Newton, Kepler (any 3)'}
        ]
    },
};
