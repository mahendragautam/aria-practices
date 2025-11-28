/**
 * WPCode Snippet #6: Art & Culture Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 10
 *
 * COPY ALL CODE BELOW
 */

const artCultureQuestions = {
    // SET 1: CHAPTERS 1-5
    1: {
        easy: [
            {
                topic: "Painting",
                emoji: "🎨🖌️",
                question: "The Mona Lisa was painted by Leonardo da Vinci.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🖼️🖍️",
                question: "A piano has 88 keys.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "📚📖",
                question: "The Pyramids of Giza are located in Egypt.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "✍️📝",
                question: "Shakespeare wrote only comedies.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "📜🖋️",
                question: "What is Mexico's folkloric dance?",
                options: [
                    "Jarabe Tapatío",
                    "Cumbia"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "What artist created 'The Gates of Hell'?",
                options: [
                    "Auguste Rodin",
                    "Donatello"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎬🎞️",
                question: "What is the highest-grossing film of all time?",
                options: [
                    "Avatar",
                    "Avengers"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎵🎶",
                question: "What musical features 'Don't Cry for Me Argentina'?",
                options: [
                    "Evita",
                    "Cats"
                ],
                correct: 1
            },
            {
                topic: "Festivals",
                emoji: "🎼🎹",
                question: "What is the New Orleans jazz festival called?",
                options: [
                    "Jazz Fest",
                    "Mardi Gras"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🎸🎺",
                question: "Where is the Palace Museum?",
                options: [
                    "Shanghai",
                    "Beijing"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "🥁🎷",
                question: "Which artist painted 'The Water Lily Pond'?",
                options: [
                    "Claude Monet",
                    "Pierre-Auguste Renoir",
                    "Camille Pissarro"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎻🪕",
                question: "Which composer wrote 'Carmen'?",
                options: [
                    "Georges Bizet",
                    "Giuseppe Verdi",
                    "Giacomo Puccini"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "📸📷",
                question: "Who designed the Marina Bay Sands?",
                options: [
                    "Moshe Safdie",
                    "Norman Foster",
                    "Zaha Hadid"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🗿🏛️",
                question: "Who wrote 'Weep Not, Child'?",
                options: [
                    "Ngũgĩ wa Thiong'o",
                    "Chinua Achebe",
                    "Wole Soyinka"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🏺⚱️",
                question: "How many dancers traditionally perform Bharatanatyam?",
                options: [
                    "Solo",
                    "Duo",
                    "Group"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "💎💍",
                question: "What is the tallest statue in the world?",
                options: [
                    "Statue of Unity",
                    "Spring Temple Buddha",
                    "Statue of Liberty"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "👑👗",
                question: "Who directed '2001: A Space Odyssey'?",
                options: [
                    "Stanley Kubrick",
                    "Ridley Scott",
                    "Steven Spielberg"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎨🌈",
                question: "What is the Spanish flamenco theater form?",
                options: [
                    "Tablao",
                    "Zarzuela",
                    "Corrida"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "✨💫",
                question: "What Portuguese tiles are decorative?",
                options: [
                    "Azulejos",
                    "Mosaicos",
                    "Ladrilhos"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🌟⭐",
                question: "What is Chinese blue and white porcelain?",
                options: [
                    "Ming porcelain",
                    "Jade",
                    "Cloisonné"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "📖📕",
                question: "Which movement did Kazimir Malevich found?",
                options: [
                    "Suprematism",
                    "Constructivism",
                    "Rayonism",
                    "Futurism"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "📗📘",
                question: "How many string quartets did Beethoven write?",
                options: [
                    "16",
                    "14",
                    "18",
                    "20"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "📙📔",
                question: "Who designed Brasília's buildings?",
                options: [
                    "Oscar Niemeyer",
                    "Lúcio Costa",
                    "Paulo Mendes da Rocha",
                    "Vilanova Artigas"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "📓📒",
                question: "Who wrote 'Disgrace'?",
                options: [
                    "J.M. Coetzee",
                    "Nadine Gordimer",
                    "Athol Fugard",
                    "Breyten Breytenbach"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💃🕺",
                question: "Who founded the Joffrey Ballet?",
                options: [
                    "Robert Joffrey",
                    "Jerome Robbins",
                    "Twyla Tharp",
                    "Paul Taylor"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🖍️🖌️",
                question: "Who created the 'Unique Forms of Continuity in Space'?",
                options: [
                    "Umberto Boccioni",
                    "Filippo Marinetti",
                    "Giacomo Balla",
                    "Carlo Carrà"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎭🩰",
                question: "What is the Danish film movement of 1995?",
                options: [
                    "Dogme 95",
                    "New Danish",
                    "Nordic Noir",
                    "Scandinavian Wave"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎪🎡",
                question: "Who wrote 'Death of a Salesman'?",
                options: [
                    "Arthur Miller",
                    "Tennessee Williams",
                    "Edward Albee",
                    "Clifford Odets"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🏛️🗿",
                question: "What is the Armenian monastery complex?",
                options: [
                    "Geghard",
                    "Tatev",
                    "Noravank",
                    "Khor Virap"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "📚📑",
                question: "What museum houses Monet's Water Lilies?",
                options: [
                    "Orangerie",
                    "Louvre",
                    "Orsay",
                    "Rodin"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🎨🖌️",
                question: "What is painting with wax-based paint?",
                answer: "Encaustic"
            },
            {
                topic: "Music",
                emoji: "🎭🎪",
                question: "What is the term for a pause or hold?",
                answer: "Fermata"
            },
            {
                topic: "Architecture",
                emoji: "📚📖",
                question: "What is the triangular space in a pediment?",
                answer: "Tympanum"
            },
            {
                topic: "Literature",
                emoji: "🎬🎥",
                question: "What is repetition of initial consonant sounds?",
                answer: "Alliteration"
            },
            {
                topic: "Dance",
                emoji: "🎵🎶",
                question: "What is a series of turns across the stage?",
                answer: "Chaînés or Piqué turns"
            },
            {
                topic: "Sculpture",
                emoji: "🖼️🏛️",
                question: "What is a three-dimensional artwork hanging in space?",
                answer: "Mobile"
            },
            {
                topic: "Cinema",
                emoji: "📝✍️",
                question: "What is uninterrupted shot from one position?",
                answer: "Static shot or Fixed shot"
            },
            {
                topic: "Theater",
                emoji: "🎸🎹",
                question: "What is traditional Balinese dance-drama?",
                answer: "Legong or Barong"
            },
            {
                topic: "Festivals",
                emoji: "💃🕺",
                question: "What is the Indian festival of lights?",
                answer: "Diwali or Deepavali"
            },
            {
                topic: "Crafts",
                emoji: "🎤🎧",
                question: "What is decorative openwork embroidery?",
                answer: "Cutwork"
            }
        ]
    }
};

// Continue with Sets 3 and 4 in next part due to length...
// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['art_culture'] = artCultureQuestions;
}
                emoji: "📷📸",
                question: "What is the traditional Irish dance called?",
                options: [
                    "Riverdance",
                    "Irish step dance"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What ancient Greek sculptor created the Discobolus?",
                options: [
                    "Myron",
                    "Phidias"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
                question: "Who played Batman in 'The Dark Knight'?",
                options: [
                    "Christian Bale",
                    "Ben Affleck"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "What musical features the song 'Memory'?",
                options: [
                    "Cats",
                    "Phantom"
                ],
                correct: 1
            },
            {
                topic: "Festivals",
                emoji: "🎪🎡",
                question: "What is the Mardi Gras celebration also called?",
                options: [
                    "Fat Tuesday",
                    "Fat Monday"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🌟✨",
                question: "Where is the Acropolis Museum?",
                options: [
                    "Rome",
                    "Athens"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "💎🏆",
            {
                topic: "Music",
                emoji: "🎯🎲",
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "Which artist painted 'Nighthawks'?",
                options: [
                    "Edward Hopper",
                    "Grant Wood",
                    "Norman Rockwell"
                ],
                correct: 0
            },
                question: "Which composer wrote 'The Magic Flute'?",
                options: [
                    "Mozart",
                    "Haydn",
                    "Rossini"
                ],
                correct: 0
            },
                question: "Who designed the Guggenheim Museum in New York?",
                options: [
                    "Frank Lloyd Wright",
                    "Louis Kahn",
                    "Philip Johnson"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "Who wrote 'Norwegian Wood'?",
                options: [
                    "Haruki Murakami",
                    "Yukio Mishima",
                    "Kazuo Ishiguro"
                ],
                correct: 0
            },
                question: "What is the African-American dance style with sharp movements?",
                options: [
                    "Breakdancing",
                    "Krumping",
                    "Popping"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
                question: "What is the Little Mermaid statue's location?",
                options: [
                    "Copenhagen",
                    "Stockholm",
                    "Oslo"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🏺🗿",
            {
                topic: "Theater",
                emoji: "🎭✨",
                question: "Who directed 'American Beauty'?",
                options: [
                    "Sam Mendes",
                    "David Fincher",
                    "Paul Thomas Anderson"
                ],
                correct: 0
            },
                question: "What is the Yiddish theater tradition called?",
                options: [
                    "Yiddish Theatre",
                    "Klezmer",
                    "Hasidic"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "📖🖊️",
                question: "What ancient city had the Hanging Gardens?",
                options: [
                    "Babylon",
                    "Nineveh",
                    "Ur"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🎨🌈",
                question: "What is the art of glass-blowing originated in?",
                options: [
                    "Venice",
                    "Prague",
                    "Murano"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
                question: "Which art movement featured geometric abstraction?",
                options: [
                    "De Stijl",
                    "Dada",
                    "Bauhaus",
                    "Vorticism"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "How many symphonies did Mozart compose?",
                options: [
                    "41",
                    "35",
                    "52",
                    "27"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "Who designed the Finlandia Hall in Helsinki?",
                options: [
                    "Alvar Aalto",
                    "Eero Saarinen",
                    "Eliel Saarinen",
                    "Reima Pietilä"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "Who wrote 'Things Fall Apart'?",
                options: [
                    "Chinua Achebe",
                    "Wole Soyinka",
                    "Ben Okri",
                    "Chimamanda Adichie"
                ],
                correct: 0
            },
                question: "Who founded the Alvin Ailey dance company?",
                options: [
                    "Alvin Ailey",
                    "Katherine Dunham",
                    "Pearl Primus",
                    "Donald McKayle"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "Who created the mobile sculpture form?",
                options: [
                    "Alexander Calder",
                    "George Rickey",
                    "Jean Tinguely",
                    "Naum Gabo"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
            {
                topic: "Theater",
                emoji: "🎬🎥",
            {
                topic: "World Heritage",
                emoji: "🎵🎶",
                question: "Who directed 'Breathless' (À bout de souffle)?",
                options: [
                    "Jean-Luc Godard",
                    "François Truffaut",
                    "Alain Resnais",
                    "Claude Chabrol"
                ],
                correct: 1
            },
                question: "Who wrote 'The Importance of Being Earnest'?",
                options: [
                    "Oscar Wilde",
                    "George Bernard Shaw",
                    "Noël Coward",
                    "Tom Stoppard"
                ],
                correct: 0
            },
                question: "What is the ancient city in Turkey carved in rock?",
                options: [
                    "Cappadocia",
                    "Ephesus",
                    "Troy",
                    "Pergamon"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🖼️🏛️",
                question: "What museum island is in Berlin?",
                options: [
                    "Museumsinsel",
                    "Kulturforum",
                    "Potsdamer",
                    "Charlottenburg"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "📝✍️",
                question: "What is painting on fresh wet plaster called?",
                answer: "Fresco or Buon fresco"
            },
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "What is the musical term for moderately fast?",
                answer: "Allegretto or Moderato"
            },
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "What is the classical order with acanthus leaf capitals?",
                answer: "Corinthian or Corinthian order"
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
                question: "What is a reference to another work in literature?",
                answer: "Allusion"
            },
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "What is a leap where legs are beaten together in ballet?",
                answer: "Cabriole"
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What is carving in relief where figures project significantly?",
                answer: "High relief or Alto-relievo"
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
                question: "What is the technique of projecting live action frame by frame?",
                answer: "Rotoscoping"
            },
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "What is Indonesian shadow puppet theater called?",
                answer: "Wayang or Wayang kulit"
            },
            {
                topic: "Festivals",
                emoji: "🎪🎡",
                question: "What is the Austrian music festival held in summer?",
                answer: "Salzburg Festival"
            },
            {
                topic: "Crafts",
                emoji: "🌟✨",
                question: "What is the French technique of needlepoint on canvas?",
                answer: "Needlepoint or Tapestry"
            }
        ]
    },
    2: {
        easy: [
            {
                topic: "Painting",
                emoji: "🎨🖌️",
                question: "Pablo Picasso was a Spanish painter.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎵🎶",
                question: "Beethoven composed nine symphonies.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🏛️🏰",
                question: "The Taj Mahal is located in India.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📚📖",
                question: "George Orwell wrote '1984'.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💃🕺",
                question: "Ballet originated in Italy.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🗿🏺",
                question: "The Thinker was created by Rodin.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎬🎥",
                question: "The first feature-length film was silent.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭🎪",
                question: "Shakespeare's Globe Theatre is in London.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🏛️🖼️",
                question: "The Louvre is the world's largest art museum.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🧶🪡",
                question: "Origami is the Japanese art of paper folding.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🖼️🖍️",
                question: "Who painted 'The Scream'?",
                options: [
                    "Edvard Munch",
                    "Vincent van Gogh"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎼🎹",
                question: "What is Mozart's first name?",
                options: [
                    "Wolfgang",
                    "Ludwig"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🏗️🌉",
                question: "Who designed the Sydney Opera House?",
                options: [
                    "Jørn Utzon",
                    "Frank Lloyd Wright"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "✍️📝",
                question: "Who wrote 'Pride and Prejudice'?",
                options: [
                    "Jane Austen",
                    "Emily Brontë"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🩰👯",
                question: "What country is the tango from?",
                options: [
                    "Argentina",
                    "Spain"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎨🗿",
                question: "What material is Michelangelo's David made of?",
                options: [
                    "Marble",
                    "Bronze"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "📽️🎞️",
                question: "Who directed 'Citizen Kane'?",
                options: [
                    "Orson Welles",
                    "Alfred Hitchcock"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎤🎧",
                question: "What is the longest-running Broadway show?",
                options: [
                    "The Phantom of the Opera",
                    "Cats"
                ],
                correct: 1
            },
            {
                topic: "Festivals",
                emoji: "🎊🎉",
                question: "Where is the Cannes Film Festival held?",
                options: [
                    "France",
                    "Italy"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "🌍🏰",
                question: "What century was Machu Picchu built?",
                options: [
                    "15th century",
                    "14th century"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "🎨🌈",
                question: "Which artist painted 'The Birth of Venus'?",
                options: [
                    "Sandro Botticelli",
                    "Leonardo da Vinci",
                    "Raphael"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎻🎺",
                question: "Which composer wrote 'The Four Seasons'?",
                options: [
                    "Antonio Vivaldi",
                    "Johann Sebastian Bach",
                    "Georg Handel"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏛️⛪",
                question: "Who designed the dome of St. Peter's Basilica?",
                options: [
                    "Michelangelo",
                    "Bramante",
                    "Bernini"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "📚✒️",
                question: "Who wrote 'One Hundred Years of Solitude'?",
                options: [
                    "Gabriel García Márquez",
                    "Jorge Luis Borges",
                    "Pablo Neruda"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💃🎵",
                question: "What is the classical Indian dance from Kerala?",
                options: [
                    "Kathakali",
                    "Bharatanatyam",
                    "Odissi"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🗿💎",
                question: "Who sculpted 'The Kiss'?",
                options: [
                    "Auguste Rodin",
                    "Constantin Brâncuși",
                    "Antonio Canova"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎬🏆",
                question: "Who won the first Best Director Oscar?",
                options: [
                    "Frank Borzage",
                    "Charlie Chaplin",
                    "D.W. Griffith"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭🌟",
                question: "Who wrote 'A Streetcar Named Desire'?",
                options: [
                    "Tennessee Williams",
                    "Arthur Miller",
                    "Eugene O'Neill"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🏛️🖼️",
                question: "Where is the Hermitage Museum located?",
                options: [
                    "St. Petersburg",
                    "Moscow",
                    "Kiev"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🏺🎨",
                question: "What is the art of decorating eggs called?",
                options: [
                    "Pysanky",
                    "Decoupage",
                    "Batik"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🖌️🎨",
                question: "Which movement did Georges Seurat pioneer?",
                options: [
                    "Pointillism",
                    "Impressionism",
                    "Post-Impressionism",
                    "Divisionism"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎼🎵",
                question: "How many piano concertos did Rachmaninoff compose?",
                options: [
                    "4",
                    "5",
                    "3",
                    "6"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏗️🌆",
                question: "Who designed the Guggenheim Museum in Bilbao?",
                options: [
                    "Frank Gehry",
                    "Zaha Hadid",
                    "Norman Foster",
                    "Renzo Piano"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "📖✍️",
                question: "Who wrote 'The Brothers Karamazov'?",
                options: [
                    "Fyodor Dostoevsky",
                    "Leo Tolstoy",
                    "Anton Chekhov",
                    "Nikolai Gogol"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🩰💫",
                question: "Who choreographed 'The Rite of Spring'?",
                options: [
                    "Vaslav Nijinsky",
                    "George Balanchine",
                    "Martha Graham",
                    "Merce Cunningham"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🗿🎨",
                question: "Who created the 'Bird in Space' series?",
                options: [
                    "Constantin Brâncuși",
                    "Henry Moore",
                    "Alberto Giacometti",
                    "Barbara Hepworth"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎬📽️",
                question: "Who directed 'The Seventh Seal'?",
                options: [
                    "Ingmar Bergman",
                    "Federico Fellini",
                    "Akira Kurosawa",
                    "Andrei Tarkovsky"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭📚",
                question: "Who wrote 'Waiting for Godot'?",
                options: [
                    "Samuel Beckett",
                    "Harold Pinter",
                    "Tom Stoppard",
                    "Eugène Ionesco"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "🌍🏛️",
                question: "What year was Petra designated a UNESCO site?",
                options: [
                    "1985",
                    "1982",
                    "1988",
                    "1990"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🎨🧵",
                question: "What is the Persian art of knotted pile carpets?",
                options: [
                    "Persian rug weaving",
                    "Kilim",
                    "Suzani",
                    "Ikat"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🖼️🎨",
                question: "What was the original title of Picasso's 'Les Demoiselles d'Avignon'?",
                answer: "Le Bordel d'Avignon or The Brothel of Avignon"
            },
            {
                topic: "Music",
                emoji: "🎵🎼",
                question: "What is the name of Berg's unfinished opera?",
                answer: "Lulu"
            },
            {
                topic: "Architecture",
                emoji: "🏛️🌟",
                question: "What architectural style did Louis Sullivan pioneer?",
                answer: "Chicago School or Early Skyscraper"
            },
            {
                topic: "Literature",
                emoji: "📚✒️",
                question: "What is James Joyce's final work?",
                answer: "Finnegans Wake"
            },
            {
                topic: "Dance",
                emoji: "💃🎭",
                question: "What is the traditional Indonesian court dance?",
                answer: "Bedhaya"
            },
            {
                topic: "Sculpture",
                emoji: "🗿💎",
                question: "What material did Louise Bourgeois use for 'Maman'?",
                answer: "Bronze and stainless steel"
            },
            {
                topic: "Cinema",
                emoji: "🎬🎞️",
                question: "What was the first film to use deep focus cinematography?",
                answer: "Citizen Kane"
            },
            {
                topic: "Theater",
                emoji: "🎭🌟",
                question: "What is Bertolt Brecht's epic theater technique called?",
                answer: "Verfremdungseffekt or Alienation effect"
            },
            {
                topic: "Festivals",
                emoji: "🎊🎉",
                question: "What year did the Edinburgh Fringe Festival begin?",
                answer: "1947"
            },
            {
                topic: "Crafts",
                emoji: "🎨🧶",
                question: "What is the Japanese art of gold repair called?",
                answer: "Kintsugi or Kintsukuroi"
            }
        ]
    },
    3: {
        easy: [
            {
                topic: "Painting",
                emoji: "🎨🖌️",
                question: "Frida Kahlo was a Mexican artist.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎸🎤",
                question: "The Beatles were from Liverpool.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🗼🌆",
                question: "The Eiffel Tower is in Paris.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📖📚",
                question: "J.K. Rowling wrote the Harry Potter series.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💃🕺",
                question: "Flamenco is from Spain.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🗽🏛️",
                question: "The Statue of Liberty was a gift from France.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎬🎥",
                question: "Hollywood is in California.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎭🎪",
                question: "Broadway is in New York City.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎵🎶",
                question: "Opera originated in Italy.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Painting",
                emoji: "🖼️🎨",
                question: "The Sistine Chapel ceiling was painted by Michelangelo.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🎨🖌️",
                question: "Who painted 'Girl with a Pearl Earring'?",
                options: [
                    "Johannes Vermeer",
                    "Rembrandt"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎼🎹",
                question: "What instrument did Louis Armstrong play?",
                options: [
                    "Trumpet",
                    "Saxophone"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏛️🕌",
                question: "What style is the Alhambra palace?",
                options: [
                    "Moorish",
                    "Gothic"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "📚📖",
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: [
                    "Harper Lee",
                    "Truman Capote"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🩰👯",
                question: "What dance style did Fred Astaire popularize?",
                options: [
                    "Tap dancing",
                    "Jazz"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🗿🎨",
                question: "What is Michelangelo's Pietà made of?",
                options: [
                    "Carrara marble",
                    "Limestone"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎬📽️",
                question: "Who directed 'The Godfather'?",
                options: [
                    "Francis Ford Coppola",
                    "Martin Scorsese"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭🌟",
                question: "What is the oldest theater in London?",
                options: [
                    "Theatre Royal Drury Lane",
                    "The Old Vic"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🏛️🖼️",
                question: "Where is the Prado Museum?",
                options: [
                    "Madrid",
                    "Barcelona"
                ],
                correct: 1
            },
            {
                topic: "Festivals",
                emoji: "🎊🎉",
                question: "Where is La Tomatina festival celebrated?",
                options: [
                    "Spain",
                    "Italy"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "🎨🌈",
                question: "Which artist founded the Cubist movement?",
                options: [
                    "Pablo Picasso",
                    "Georges Braque",
                    "Juan Gris"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎻🎺",
                question: "Which composer wrote 'The Planets'?",
                options: [
                    "Gustav Holst",
                    "Edward Elgar",
                    "Ralph Vaughan Williams"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏗️🌉",
                question: "Who designed the Fallingwater house?",
                options: [
                    "Frank Lloyd Wright",
                    "Le Corbusier",
                    "Mies van der Rohe"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📚✒️",
                question: "Who wrote 'Beloved'?",
                options: [
                    "Toni Morrison",
                    "Alice Walker",
                    "Maya Angelou"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💃🎵",
                question: "What is the national dance of Brazil?",
                options: [
                    "Samba",
                    "Bossa Nova",
                    "Capoeira"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🗿💎",
                question: "Who created 'The Age of Bronze'?",
                options: [
                    "Auguste Rodin",
                    "Camille Claudel",
                    "Antoine Bourdelle"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎬🏆",
                question: "Who directed 'Rashomon'?",
                options: [
                    "Akira Kurosawa",
                    "Yasujirō Ozu",
                    "Kenji Mizoguchi"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🌍🏰",
                question: "Where is Angkor Wat located?",
                options: [
                    "Cambodia",
                    "Thailand",
                    "Vietnam"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🏺🎨",
                question: "What is the art of Japanese flower arrangement?",
                options: [
                    "Ikebana",
                    "Bonsai",
                    "Origami"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🖌️🎨",
                question: "Which artist painted 'The Garden of Earthly Delights'?",
                options: [
                    "Hieronymus Bosch",
                    "Pieter Bruegel",
                    "Jan van Eyck",
                    "Rogier van der Weyden"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎼🎵",
                question: "How many symphonies did Mahler complete?",
                options: [
                    "9",
                    "10",
                    "8",
                    "11"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏗️🌆",
                question: "Who designed the Barcelona Pavilion?",
                options: [
                    "Mies van der Rohe",
                    "Antoni Gaudí",
                    "Le Corbusier",
                    "Walter Gropius"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📖✍️",
                question: "Who wrote 'Mrs Dalloway'?",
                options: [
                    "Virginia Woolf",
                    "Katherine Mansfield",
                    "Vita Sackville-West",
                    "E.M. Forster"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🩰💫",
                question: "Who founded the Ballets Russes?",
                options: [
                    "Sergei Diaghilev",
                    "George Balanchine",
                    "Michel Fokine",
                    "Vaslav Nijinsky"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🗿🎨",
                question: "Who sculpted 'L'Homme qui marche'?",
                options: [
                    "Alberto Giacometti",
                    "Henry Moore",
                    "Barbara Hepworth",
                    "Jean Arp"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎬📽️",
                question: "Who directed 'Bicycle Thieves'?",
                options: [
                    "Vittorio De Sica",
                    "Roberto Rossellini",
                    "Luchino Visconti",
                    "Federico Fellini"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎭📚",
                question: "Who wrote 'Long Day's Journey into Night'?",
                options: [
                    "Eugene O'Neill",
                    "Tennessee Williams",
                    "Arthur Miller",
                    "Edward Albee"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🏛️🖼️",
                question: "What year did the Guggenheim in New York open?",
                options: [
                    "1959",
                    "1956",
                    "1962",
                    "1965"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🎨🧵",
                question: "What is the Turkish art of marbled paper?",
                options: [
                    "Ebru",
                    "Batik",
                    "Ikat",
                    "Shibori"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🖼️🎨",
                question: "What pigment did Yves Klein patent?",
                answer: "International Klein Blue or IKB"
            },
            {
                topic: "Music",
                emoji: "🎵🎼",
                question: "What is Schoenberg's twelve-tone technique called?",
                answer: "Serialism or Dodecaphony"
            },
            {
                topic: "Architecture",
                emoji: "🏛️🌟",
                question: "What is Le Corbusier's real name?",
                answer: "Charles-Édouard Jeanneret"
            },
            {
                topic: "Literature",
                emoji: "📚✒️",
                question: "What is Proust's seven-volume novel called?",
                answer: "In Search of Lost Time or Remembrance of Things Past"
            },
            {
                topic: "Dance",
                emoji: "💃🎭",
                question: "What is Martha Graham's dance technique principle?",
                answer: "Contraction and release"
            },
            {
                topic: "Sculpture",
                emoji: "🗿💎",
                question: "What movement did Naum Gabo co-found?",
                answer: "Constructivism"
            },
            {
                topic: "Cinema",
                emoji: "🎬🎞️",
                question: "What is Eisenstein's montage theory called?",
                answer: "Intellectual montage or montage of attractions"
            },
            {
                topic: "Theater",
                emoji: "🎭🌟",
                question: "What is Stanislavski's acting system foundation?",
                answer: "Emotional memory or affective memory"
            },
            {
                topic: "World Heritage",
                emoji: "🌍🏛️",
                question: "What is the oldest UNESCO World Heritage site?",
                answer: "Galápagos Islands"
            },
            {
                topic: "Festivals",
                emoji: "🎊🎉",
                question: "What is the Venetian masquerade ball called?",
                answer: "Carnevale di Venezia or Venice Carnival"
            }
        ]
    },
    4: {
        easy: [
            {
                topic: "Music",
                emoji: "🎵🎶",
                question: "Jazz originated in New Orleans.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🏛️🕌",
                question: "The Great Wall of China is visible from space.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Painting",
                emoji: "🎨🖌️",
                question: "Impressionism began in France.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "📚📖",
                question: "The Odyssey was written by Homer.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💃🕺",
                question: "Hip-hop dance originated in New York.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎬🎥",
                question: "The Oscars are awarded annually.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🗿🏺",
                question: "The Sphinx is in Egypt.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎭🎪",
                question: "Kabuki is a Japanese theater form.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎸🎤",
                question: "Rock and roll began in the 1950s.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Painting",
                emoji: "🖼️🎨",
                question: "Surrealism explored the unconscious mind.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Music",
                emoji: "🎼🎹",
                question: "Who composed 'The Nutcracker'?",
                options: [
                    "Tchaikovsky",
                    "Stravinsky"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🏗️🌉",
                question: "What style is Notre-Dame Cathedral?",
                options: [
                    "Gothic",
                    "Romanesque"
                ],
                correct: 1
            },
            {
                topic: "Painting",
                emoji: "🎨🖌️",
                question: "Who painted 'American Gothic'?",
                options: [
                    "Grant Wood",
                    "Edward Hopper"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📚📖",
                question: "Who wrote 'The Great Gatsby'?",
                options: [
                    "F. Scott Fitzgerald",
                    "Ernest Hemingway"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🩰👯",
                question: "What is the Cuban dance with African roots?",
                options: [
                    "Rumba",
                    "Mambo"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎬📽️",
                question: "Who directed 'Psycho'?",
                options: [
                    "Alfred Hitchcock",
                    "Billy Wilder"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🗿🎨",
                question: "What is the Terracotta Army made of?",
                options: [
                    "Clay",
                    "Stone"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎭🌟",
                question: "What theater hosts the Tony Awards?",
                options: [
                    "Broadway",
                    "West End"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🏛️🖼️",
                question: "Where is the British Museum?",
                options: [
                    "London",
                    "Edinburgh"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🧶🪡",
                question: "What is the art of making decorative knots?",
                options: [
                    "Macramé",
                    "Crochet"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Music",
                emoji: "🎻🎺",
                question: "Which composer wrote 'Rhapsody in Blue'?",
                options: [
                    "George Gershwin",
                    "Aaron Copland",
                    "Leonard Bernstein"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🏛️⛪",
                question: "Who designed the Sagrada Família?",
                options: [
                    "Antoni Gaudí",
                    "Santiago Calatrava",
                    "Rafael Moneo"
                ],
                correct: 0
            },
            {
                topic: "Painting",
                emoji: "🎨🌈",
                question: "Which artist created the 'Campbell's Soup Cans'?",
                options: [
                    "Andy Warhol",
                    "Roy Lichtenstein",
                    "Jasper Johns"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📚✒️",
                question: "Who wrote 'Invisible Man'?",
                options: [
                    "Ralph Ellison",
                    "James Baldwin",
                    "Richard Wright"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💃🎵",
                question: "What is the traditional Hawaiian dance?",
                options: [
                    "Hula",
                    "Kahiko",
                    "Auana"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎬🏆",
                question: "Who directed 'Spirited Away'?",
                options: [
                    "Hayao Miyazaki",
                    "Isao Takahata",
                    "Mamoru Hosoda"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🗿💎",
                question: "Who created 'The Burghers of Calais'?",
                options: [
                    "Auguste Rodin",
                    "Aristide Maillol",
                    "Camille Claudel"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭🎪",
                question: "Who wrote 'The Cherry Orchard'?",
                options: [
                    "Anton Chekhov",
                    "Maxim Gorky",
                    "Ivan Turgenev"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "🌍🏰",
                question: "Where is the ancient city of Pompeii?",
                options: [
                    "Italy",
                    "Greece",
                    "Turkey"
                ],
                correct: 0
            },
            {
                topic: "Festivals",
                emoji: "🎊🎉",
                question: "What is Brazil's famous carnival city?",
                options: [
                    "Rio de Janeiro",
                    "São Paulo",
                    "Salvador"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Music",
                emoji: "🎼🎵",
                question: "Which composer pioneered musique concrète?",
                options: [
                    "Pierre Schaeffer",
                    "Karlheinz Stockhausen",
                    "Edgar Varèse",
                    "John Cage"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏗️🌆",
                question: "Who designed Villa Savoye?",
                options: [
                    "Le Corbusier",
                    "Mies van der Rohe",
                    "Walter Gropius",
                    "Philip Johnson"
                ],
                correct: 0
            },
            {
                topic: "Painting",
                emoji: "🖌️🎨",
                question: "Which artist founded Orphism?",
                options: [
                    "Robert Delaunay",
                    "Sonia Delaunay",
                    "Francis Picabia",
                    "Fernand Léger"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "📖✍️",
                question: "Who wrote 'The Sound and the Fury'?",
                options: [
                    "William Faulkner",
                    "Thomas Wolfe",
                    "John Steinbeck",
                    "Sinclair Lewis"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🩰💫",
                question: "Who choreographed 'Appalachian Spring'?",
                options: [
                    "Martha Graham",
                    "Doris Humphrey",
                    "Katherine Dunham",
                    "Pearl Primus"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎬📽️",
                question: "Who directed 'Persona'?",
                options: [
                    "Ingmar Bergman",
                    "Lars von Trier",
                    "Carl Theodor Dreyer",
                    "Roy Andersson"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🗿🎨",
                question: "Who created 'Fountain' (the urinal)?",
                options: [
                    "Marcel Duchamp",
                    "Man Ray",
                    "Francis Picabia",
                    "Hans Arp"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭📚",
                question: "Who wrote 'The Iceman Cometh'?",
                options: [
                    "Eugene O'Neill",
                    "Clifford Odets",
                    "William Saroyan",
                    "Elmer Rice"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🏛️🖼️",
                question: "What year did the Met Museum open?",
                options: [
                    "1870",
                    "1865",
                    "1875",
                    "1880"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🎨🧵",
                question: "What is the Welsh art of love spoons called?",
                options: [
                    "Welsh love spoons",
                    "Caru",
                    "Llwyau Caru",
                    "Cymraeg"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Music",
                emoji: "🎵🎼",
                question: "What is Messiaen's compositional technique using bird songs?",
                answer: "Ornithological transcription"
            },
            {
                topic: "Architecture",
                emoji: "🏛️🌟",
                question: "What is Kahn's concept of served and servant spaces?",
                answer: "Served and servant spaces"
            },
            {
                topic: "Painting",
                emoji: "🖼️🎨",
                question: "What is the technique of dripping paint called?",
                answer: "Action painting or drip painting"
            },
            {
                topic: "Literature",
                emoji: "📚✒️",
                question: "What is Joyce's stream of consciousness technique called?",
                answer: "Interior monologue"
            },
            {
                topic: "Dance",
                emoji: "💃🎭",
                question: "What is Cunningham's use of chance operations called?",
                answer: "Chance procedures or aleatory choreography"
            },
            {
                topic: "Cinema",
                emoji: "🎬🎞️",
                question: "What is Godard's jump cut technique called in French?",
                answer: "Saut de l'ange or jump cut"
            },
            {
                topic: "Sculpture",
                emoji: "🗿💎",
                question: "What is Calder's mobile sculpture technique?",
                answer: "Kinetic sculpture"
            },
            {
                topic: "Theater",
                emoji: "🎭🌟",
                question: "What is Artaud's theater of cruelty concept?",
                answer: "Theatre of Cruelty or Théâtre de la Cruauté"
            },
            {
                topic: "World Heritage",
                emoji: "🌍🏛️",
                question: "What UNESCO program protects intangible heritage?",
                answer: "Intangible Cultural Heritage"
            },
            {
                topic: "Crafts",
                emoji: "🎨🧶",
                question: "What is the Korean art of inlay called?",
                answer: "Najeonchilgi or mother-of-pearl inlay"
            }
        ]
    },
    5: {
        easy: [
            {
                topic: "Literature",
                emoji: "📚📖",
                question: "Charles Dickens was a British author.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎬🎥",
                question: "Silent films had no sound.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎵🎶",
                question: "A symphony orchestra has different instruments.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏛️🕌",
                question: "Castles were built for defense.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Painting",
                emoji: "🎨🖌️",
                question: "Watercolors use water as a medium.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "💃🕺",
                question: "Waltz is a ballroom dance.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭🎪",
                question: "Pantomime uses no words.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🗿🏺",
                question: "Bronze is used for casting sculptures.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🏛️🖼️",
                question: "Museums preserve cultural artifacts.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎸🎤",
                question: "Elvis Presley was called the King of Rock.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Literature",
                emoji: "📚📖",
                question: "Who wrote 'Moby-Dick'?",
                options: [
                    "Herman Melville",
                    "Nathaniel Hawthorne"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎬📽️",
                question: "What was the first full-length animated film?",
                options: [
                    "Snow White",
                    "Fantasia"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎼🎹",
                question: "Who wrote 'Für Elise'?",
                options: [
                    "Beethoven",
                    "Mozart"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏗️🌉",
                question: "What is the tallest building type?",
                options: [
                    "Skyscraper",
                    "Tower"
                ],
                correct: 0
            },
            {
                topic: "Painting",
                emoji: "🎨🖌️",
                question: "Who painted 'The Last Supper'?",
                options: [
                    "Leonardo da Vinci",
                    "Michelangelo"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🩰👯",
                question: "What is the Russian folk dance?",
                options: [
                    "Troika",
                    "Polka"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭🌟",
                question: "What is the Greek theater mask called?",
                options: [
                    "Persona",
                    "Thespis"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🗿🎨",
                question: "What is Rodin's most famous sculpture?",
                options: [
                    "The Thinker",
                    "The Kiss"
                ],
                correct: 1
            },
            {
                topic: "Festivals",
                emoji: "🎊🎉",
                question: "Where is Oktoberfest celebrated?",
                options: [
                    "Munich",
                    "Berlin"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🧶🪡",
                question: "What is the art of glassmaking?",
                options: [
                    "Glassblowing",
                    "Glazing"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Literature",
                emoji: "📚✒️",
                question: "Who wrote 'Ulysses'?",
                options: [
                    "James Joyce",
                    "Samuel Beckett",
                    "Oscar Wilde"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎬🏆",
                question: "Who directed 'Vertigo'?",
                options: [
                    "Alfred Hitchcock",
                    "Billy Wilder",
                    "John Ford"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎻🎺",
                question: "Which composer wrote 'Boléro'?",
                options: [
                    "Maurice Ravel",
                    "Claude Debussy",
                    "Erik Satie"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏛️⛪",
                question: "Who designed the Chrysler Building?",
                options: [
                    "William Van Alen",
                    "Raymond Hood",
                    "Cass Gilbert"
                ],
                correct: 0
            },
            {
                topic: "Painting",
                emoji: "🎨🌈",
                question: "Which artist painted 'The Persistence of Memory'?",
                options: [
                    "Salvador Dalí",
                    "René Magritte",
                    "Max Ernst"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "💃🎵",
                question: "What is the Spanish gypsy dance?",
                options: [
                    "Flamenco",
                    "Paso Doble",
                    "Sevillanas"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎭🎪",
                question: "Who wrote 'The Glass Menagerie'?",
                options: [
                    "Tennessee Williams",
                    "Arthur Miller",
                    "William Inge"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🗿💎",
                question: "Who created 'The Sphere Within Sphere'?",
                options: [
                    "Arnaldo Pomodoro",
                    "Henry Moore",
                    "Anish Kapoor"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "🌍🏰",
                question: "Where is the Acropolis located?",
                options: [
                    "Athens",
                    "Rome",
                    "Cairo"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🏛️🖼️",
                question: "Where is the Uffizi Gallery?",
                options: [
                    "Florence",
                    "Venice",
                    "Rome"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Literature",
                emoji: "📖✍️",
                question: "Who wrote 'The Trial'?",
                options: [
                    "Franz Kafka",
                    "Hermann Hesse",
                    "Thomas Mann",
                    "Robert Musil"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎬📽️",
                question: "Who directed 'La Dolce Vita'?",
                options: [
                    "Federico Fellini",
                    "Luchino Visconti",
                    "Michelangelo Antonioni",
                    "Pier Paolo Pasolini"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎼🎵",
                question: "Which composer wrote 'The Firebird'?",
                options: [
                    "Igor Stravinsky",
                    "Sergei Prokofiev",
                    "Dmitri Shostakovich",
                    "Aram Khachaturian"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🏗️🌆",
                question: "Who designed the Einstein Tower?",
                options: [
                    "Erich Mendelsohn",
                    "Bruno Taut",
                    "Hans Poelzig",
                    "Peter Behrens"
                ],
                correct: 0
            },
            {
                topic: "Painting",
                emoji: "🖌️🎨",
                question: "Which artist painted 'The Treachery of Images'?",
                options: [
                    "René Magritte",
                    "Salvador Dalí",
                    "Paul Delvaux",
                    "Yves Tanguy"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🩰💫",
                question: "Who choreographed 'Apollo'?",
                options: [
                    "George Balanchine",
                    "Frederick Ashton",
                    "Kenneth MacMillan",
                    "Jerome Robbins"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎭📚",
                question: "Who wrote 'The Bald Soprano'?",
                options: [
                    "Eugène Ionesco",
                    "Samuel Beckett",
                    "Jean Genet",
                    "Fernando Arrabal"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🗿🎨",
                question: "Who created 'Endless Column'?",
                options: [
                    "Constantin Brâncuși",
                    "Jean Arp",
                    "Naum Gabo",
                    "Antoine Pevsner"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🏛️🖼️",
                question: "What year did MoMA open in New York?",
                options: [
                    "1929",
                    "1932",
                    "1926",
                    "1935"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🎨🧵",
                question: "What is the Scandinavian art of rosemaling?",
                options: [
                    "Decorative painting",
                    "Wood carving",
                    "Textile weaving",
                    "Glassblowing"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Literature",
                emoji: "📚✒️",
                question: "What is Borges' concept of infinite library?",
                answer: "Library of Babel"
            },
            {
                topic: "Cinema",
                emoji: "🎬🎞️",
                question: "What is Tarkovsky's philosophical concept of time in film?",
                answer: "Sculpting in time"
            },
            {
                topic: "Music",
                emoji: "🎵🎼",
                question: "What is Cage's silent composition called?",
                answer: "4'33\""
            },
            {
                topic: "Architecture",
                emoji: "🏛️🌟",
                question: "What is Wright's organic architecture principle?",
                answer: "Form follows function"
            },
            {
                topic: "Painting",
                emoji: "🖼️🎨",
                question: "What is Rothko's color field painting technique?",
                answer: "Color field painting"
            },
            {
                topic: "Dance",
                emoji: "💃🎭",
                question: "What is Pina Bausch's dance theater style called?",
                answer: "Tanztheater"
            },
            {
                topic: "Theater",
                emoji: "🎭🌟",
                question: "What is Grotowski's poor theater concept?",
                answer: "Poor Theatre or Theatre of 13 Rows"
            },
            {
                topic: "Sculpture",
                emoji: "🗿💎",
                question: "What is Christo's large-scale wrapping called?",
                answer: "Environmental art or wrapping"
            },
            {
                topic: "World Heritage",
                emoji: "🌍🏛️",
                question: "What is UNESCO's convention year for World Heritage?",
                answer: "1972"
            },
            {
                topic: "Festivals",
                emoji: "🎊🎉",
                question: "What is the Venice Biennale's architecture event called?",
                answer: "Venice Architecture Biennale or La Biennale di Venezia"
            }
        ]
    },

    // SET 2: CHAPTERS 6-10
    6: {
        easy: [
            {
                topic: "Painting",
                emoji: "💎🏆",
                question: "Sunflowers are often associated with van Gogh.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "Drums are percussion instruments.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "The Colosseum is in Rome.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
                question: "Ernest Hemingway wrote 'The Old Man and the Sea'.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "Salsa originated in Cuba.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
                question: "The Venus de Milo is missing both arms.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🏺🗿",
                question: "'The Lion King' is a Disney animated film.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭✨",
                question: "The audience sits in the auditorium.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "📖🖊️",
                question: "The Gateway of India is in Mumbai.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎨🌈",
                question: "The Rolling Stones are a rock band.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
                question: "Who painted 'Guernica'?",
                options: [
                    "Pablo Picasso",
                    "Joan Miró"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "What instrument has 47 strings?",
                options: [
                    "Piano",
                    "Harp"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "What gate is a symbol of Berlin?",
                options: [
                    "Brandenburg Gate",
                    "Ishtar Gate"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "What dance style uses canes and top hats?",
                options: [
                    "Vaudeville",
                    "Burlesque"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
                question: "What award is given at the Venice Film Festival?",
                options: [
                    "Palme d'Or",
                    "Golden Lion"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "What musical is set in 1920s Chicago?",
                options: [
                    "Chicago",
                    "Cabaret"
                ],
                correct: 0
            },
            {
                topic: "Festivals",
                emoji: "🎵🎶",
                question: "What is the largest arts festival in Edinburgh?",
                options: [
                    "Fringe Festival",
                    "International Festival"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🖼️🏛️",
                question: "Where is the Tokyo National Museum?",
                options: [
                    "Tokyo",
                    "Kyoto"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "📝✍️",
            {
                topic: "Music",
                emoji: "🎸🎹",
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "What is the Forbidden City's correct name?",
                options: [
                    "Palace Museum",
                    "Imperial Palace",
                    "Purple City"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "How many basic flamenco rhythms exist?",
                options: [
                    "12",
                    "8",
                    "16"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What material did Giacometti prefer?",
                options: [
                    "Bronze",
                    "Marble",
                    "Wood"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "What is the traditional Thai masked dance?",
                options: [
                    "Khon",
                    "Likay",
                    "Lakhon"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🎪🎡",
                question: "What pyramid is in Chichen Itza?",
                options: [
                    "El Castillo",
                    "Temple of Kukulkan",
                    "Both names correct"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🌟✨",
                question: "What is Persian knotted rug making?",
                options: [
                    "Carpet weaving",
                    "Kilim",
                    "Suzani"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "💎🏆",
                question: "Which art movement did Wassily Kandinsky pioneer?",
                options: [
                    "Abstract Expressionism",
                    "Der Blaue Reiter",
                    "Suprematism",
                    "Constructivism"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "How many Goldberg Variations did Bach write?",
                options: [
                    "30",
                    "24",
                    "48",
                    "32"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "Who designed the city of Chandigarh?",
                options: [
                    "Le Corbusier",
                    "Louis Kahn",
                    "Frank Lloyd Wright",
                    "Mies van der Rohe"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "Who choreographed 'The Green Table'?",
                options: [
                    "Kurt Jooss",
                    "Pina Bausch",
                    "Mary Wigman",
                    "Rudolf Laban"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
            {
                topic: "Cinema",
                emoji: "🏺🗿",
                question: "Who is known as the father of Indian cinema?",
                options: [
                    "Dadasaheb Phalke",
                    "Satyajit Ray",
                    "Raj Kapoor",
                    "Guru Dutt"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎭✨",
            {
                topic: "World Heritage",
                emoji: "📖🖊️",
                question: "What are the rock-hewn churches in Ethiopia?",
                options: [
                    "Lalibela",
                    "Axum",
                    "Gondar",
                    "Harar"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🎨🌈",
                question: "What museum houses Picasso's Guernica?",
                options: [
                    "Reina Sofía",
                    "Prado",
                    "Thyssen",
                    "Picasso Museum"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
                question: "What is painting with pigments suspended in water?",
                answer: "Watercolor or Aquarelle"
            },
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "What is the term for gradually slowing down?",
                answer: "Ritardando or Rallentando"
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "What is the ornamental band on a building's exterior?",
                answer: "Frieze"
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
                question: "What is a contradiction that reveals truth?",
                answer: "Paradox"
            },
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "What is the French term for a high kick in ballet?",
                answer: "Grand battement"
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "What is sculpture in the round viewable from all sides?",
                answer: "Freestanding or Sculpture in the round"
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
                question: "What editing technique shows simultaneous actions?",
                answer: "Cross-cutting or Parallel editing"
            },
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "What is traditional Vietnamese water puppet theater?",
                answer: "Múa rối nước"
            },
            {
                topic: "Festivals",
                emoji: "🎵🎶",
                question: "What is the famous Spanish tomato-throwing festival?",
                answer: "La Tomatina"
            },
            {
                topic: "Crafts",
                emoji: "🖼️🏛️",
                question: "What is decorative stitching on the edge of fabric?",
                answer: "Edging or Border work"
            }
        ]
    },
    /**
 * Art & Culture Trivia Questions - Chapter 7
 * ==================================================
 * 5 Levels with 10 questions each
 * Mix of True/False with randomized answer positions
 * Original questions with relevant emojis
 */

const artCultureChapter7 = {
    7: {
        easy: [
            {
                topic: "Painting",
                emoji: "📝✍️",
                question: "Claude Monet was an Impressionist painter.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "Electric guitars need amplifiers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "Westminster Abbey is in London.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
                question: "'Charlotte's Web' is about a spider.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "Breakdancing is part of hip-hop culture.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "The Liberty Bell is in Philadelphia.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
                question: "'Harry Potter' films are based on books.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "Comedy makes people laugh.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "🎪🎡",
                question: "The Sydney Harbour Bridge is steel.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🌟✨",
                question: "David Bowie was a British rock star.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "💎🏆",
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "What is the highest male singing voice?",
                options: [
                    "Tenor",
                    "Countertenor"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "What is the tallest building in New York?",
                options: [
                    "One World Trade",
                    "Empire State"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "Ballet originated in Italy during the Renaissance.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
                question: "Michelangelo sculpted the statue of David.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🏺🗿",
                question: "The first film ever made was in color.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭✨",
                question: "Ancient Greek theater used masks in performances.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "📖🖊️",
                question: "The Eiffel Tower is made entirely of wood.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎨🌈",
                question: "The Beatles were from Liverpool, England.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
                question: "Which artist is famous for painting sunflowers?",
                options: [
                    "Claude Monet",
                    "Vincent van Gogh",
                    "Salvador Dalí"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "How many symphonies did Beethoven compose?",
                options: [
                    "9",
                    "12",
                    "7"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "What is the architectural style of the Taj Mahal?",
                options: [
                    "Mughal",
                    "Persian",
                    "Ottoman"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "How many positions are there in classical ballet?",
                options: [
                    "5",
                    "7",
                    "8"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "Which country gifted the Statue of Liberty to the USA?",
                options: [
                    "France",
                    "England",
                    "Spain"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "Who is considered the father of tragedy?",
                options: [
                    "Sophocles",
                    "Aeschylus",
                    "Euripides"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🎵🎶",
                question: "How many wonders are in the Ancient World?",
                options: [
                    "7",
                    "10",
                    "5"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🖼️🏛️",
                question: "What technique uses wax to create patterns on fabric?",
                options: [
                    "Tie-dye",
                    "Batik",
                    "Screen printing"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "📝✍️",
                question: "In which year was 'The Starry Night' painted?",
                options: [
                    "1885",
                    "1889",
                    "1892",
                    "1880"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "What is the musical term for 'very fast'?",
                options: [
                    "Presto",
                    "Allegro",
                    "Vivace",
                    "Largo"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
                question: "Who won the first Nobel Prize in Literature?",
                options: [
                    "Sully Prudhomme",
                    "Rabindranath Tagore",
                    "Rudyard Kipling",
                    "W.B. Yeats"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "Which dance form originated in Cuba?",
                options: [
                    "Samba",
                    "Rumba",
                    "Mambo",
                    "Salsa"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What artistic period is 'The Thinker' from?",
                options: [
                    "Renaissance",
                    "Baroque",
                    "Modern",
                    "Classical"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
                question: "Which film won the first Academy Award for Best Picture?",
                options: [
                    "Wings",
                    "The Jazz Singer",
                    "Sunrise",
                    "The Circus"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "What is the oldest surviving play?",
                options: [
                    "Oedipus Rex",
                    "Medea",
                    "The Persians",
                    "Antigone"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🎪🎡",
                question: "How many years did it take to build the Colosseum?",
                options: [
                    "8 years",
                    "15 years",
                    "12 years",
                    "20 years"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🌟✨",
                question: "What year was the British Museum founded?",
                options: [
                    "1753",
                    "1801",
                    "1725",
                    "1789"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "💎🏆",
                question: "Name the painting technique where pigments are mixed with egg yolk",
                answer: "Tempera or Egg tempera"
            },
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "What is the Italian term for a piece played with smooth, connected notes?",
                answer: "Legato"
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "What is the classical Greek architectural order with scroll-like ornaments?",
                answer: "Ionic or Ionic order"
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
                question: "What poetic form has 14 lines and follows specific rhyme schemes?",
                answer: "Sonnet"
            },
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "What is the lead female dancer in a ballet company called?",
                answer: "Prima ballerina"
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
                question: "What sculpting technique involves carving away material?",
                answer: "Subtractive or Carving"
            },
            {
                topic: "Cinema",
                emoji: "🏺🗿",
                question: "What is the term for a single uninterrupted shot in filmmaking?",
                answer: "Long take or Sequence shot"
            },
            {
                topic: "Theater",
                emoji: "🎭✨",
                question: "What is the Japanese traditional theater form featuring masks and dance?",
                answer: "Noh or Noh theater"
            },
            {
                topic: "Festivals",
                emoji: "📖🖊️",
                question: "What is the name of the masquerade festival in Venice?",
                answer: "Carnevale or Carnival of Venice"
            },
            {
                topic: "Crafts",
                emoji: "🎨🌈",
                question: "What is the Japanese art of paper folding called?",
                answer: "Origami"
            }
        ]
    }
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['art_culture'] = subjectQuestionBank['art_culture'] || {};
    Object.assign(subjectQuestionBank['art_culture'], artCultureChapter7);
}
    8: {
        easy: [
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "A symphony orchestra has multiple instrument sections.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "The Sphinx has a human head and lion body.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
                question: "Lewis Carroll wrote 'Alice in Wonderland'.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "Kathak is an Indian classical dance.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "The Little Mermaid statue is in Copenhagen.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
                question: "'Star Wars' was released in 1977.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "An intermission is a break during a performance.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "🎵🎶",
                question: "Mount Fuji is a sacred mountain in Japan.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🖼️🏛️",
                question: "Jimi Hendrix was a famous guitarist.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "📝✍️",
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "How many movements does a typical symphony have?",
                options: [
                    "4",
                    "3"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "What is the main palace in Seoul?",
                options: [
                    "Gyeongbokgung",
                    "Changdeokgung"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "What is traditional Korean masked dance?",
                options: [
                    "Ganggangsullae",
                    "Talchum"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What technique uses clay modeling?",
                options: [
                    "Modeling",
                    "Carving"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
                question: "What is the Berlin Film Festival award?",
                options: [
                    "Golden Bear",
                    "Silver Bear"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🖊️📜",
            {
                topic: "Festivals",
                emoji: "🎪🎡",
                question: "What is the famous theater festival in Avignon?",
                options: [
                    "Festival d'Avignon",
                    "Cannes"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🌟✨",
                question: "Where is the Egyptian Museum located?",
                options: [
                    "Cairo",
                    "Alexandria"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "💎🏆",
            {
                topic: "Music",
                emoji: "🎯🎲",
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "What are Malaysia's twin towers called?",
                options: [
                    "Petronas Towers",
                    "KL Towers",
                    "Twin Spires"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "In 'Swan Lake', how many swans dance together?",
                options: [
                    "Four little swans",
                    "Three swans",
                    "Five swans"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
                question: "What material did Henry Moore prefer?",
                options: [
                    "Bronze",
                    "Marble",
                    "Steel"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🏺🗿",
            {
                topic: "Theater",
                emoji: "🎭✨",
                question: "What is the Korean traditional opera?",
                options: [
                    "Pansori",
                    "Namsadang",
                    "Talchum"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "📖🖊️",
                question: "What ancient Thai capital has ruins?",
                options: [
                    "Ayutthaya",
                    "Sukhothai",
                    "Lopburi"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🎨🌈",
                question: "What is Japanese ceramic art called?",
                options: [
                    "Pottery or Yakimono",
                    "Ikebana",
                    "Origami"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
                question: "Which artist founded the Orphism art movement?",
                options: [
                    "Robert Delaunay",
                    "Sonia Delaunay",
                    "František Kupka",
                    "Fernand Léger"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "How many mazurkas did Chopin compose?",
                options: [
                    "59",
                    "45",
                    "67",
                    "51"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "Who designed the Azadi Tower in Tehran?",
                options: [
                    "Hossein Amanat",
                    "Kamran Diba",
                    "Nader Ardalan",
                    "Abdol-Aziz Farmanfarmaian"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
            {
                topic: "Dance",
                emoji: "🎨🖌️",
            {
                topic: "Cinema",
                emoji: "📚📖",
            {
                topic: "Theater",
                emoji: "🎬🎥",
            {
                topic: "World Heritage",
                emoji: "🎵🎶",
                question: "What is the ancient city in Yemen's mountains?",
                options: [
                    "Shibam",
                    "Sana'a",
                    "Zabid",
                    "Marib"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🖼️🏛️",
                question: "What museum houses 'Girl with a Pearl Earring'?",
                options: [
                    "Mauritshuis",
                    "Rijksmuseum",
                    "Van Gogh Museum",
                    "Stedelijk"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "📝✍️",
                question: "What is painting on wooden panels called?",
                answer: "Panel painting"
            },
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "What is the term for a sudden accent?",
                answer: "Sforzando"
            },
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "What is the semicircular recess in a church?",
                answer: "Apse"
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
                question: "What is an indirect reference to another work?",
                answer: "Allusion"
            },
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "What is a slow sustained movement in ballet?",
                answer: "Adagio"
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What is the Italian term for unfinished sculpture?",
                answer: "Non finito"
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
                question: "What is a brief appearance by a celebrity?",
                answer: "Cameo"
            },
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "What is traditional Turkish shadow puppet theater?",
                answer: "Karagöz"
            },
            {
                topic: "Festivals",
                emoji: "🎪🎡",
                question: "What is the Japanese cherry blossom festival?",
                answer: "Hanami"
            },
            {
                topic: "Crafts",
                emoji: "🌟✨",
                question: "What is raised embroidery with padding?",
                answer: "Stumpwork"
            }
        ]
    },
    9: {
        easy: [
            {
                topic: "Painting",
                emoji: "💎🏆",
                question: "Jackson Pollock created drip paintings.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "A bass guitar has four strings.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "The CN Tower is in Toronto.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
                question: "George R.R. Martin wrote 'Game of Thrones' books.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "The polonaise is a Polish dance.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
                question: "The Golden Gate Bridge is painted orange.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🏺🗿",
                question: "'Godzilla' originated in Japan.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭✨",
                question: "A rehearsal happens before the performance.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "📖🖊️",
                question: "Angkor Wat is in Cambodia.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎨🌈",
                question: "Prince was a multi-instrumentalist.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "What does fortissimo mean?",
                options: [
                    "Very soft",
                    "Very loud"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "What is the Western Wall also called?",
                options: [
                    "Wailing Wall",
                    "Temple Wall"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "What is traditional Greek circle dance?",
                options: [
                    "Zorba",
                    "Sirtaki"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "What is sculpture made from assembled objects?",
                options: [
                    "Assemblage",
                    "Collage"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
                question: "What is the top award at Sundance?",
                options: [
                    "Grand Jury Prize",
                    "Audience Award"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "What film features 'Somewhere Over the Rainbow'?",
                options: [
                    "The Wizard of Oz",
                    "Mary Poppins"
                ],
                correct: 0
            },
            {
                topic: "Festivals",
                emoji: "🎵🎶",
                question: "What is the famous Swiss jazz festival?",
                options: [
                    "Montreux",
                    "Lucerne"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🖼️🏛️",
                question: "Where is the Frida Kahlo Museum?",
                options: [
                    "Mexico City",
                    "Guadalajara"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "📝✍️",
            {
                topic: "Music",
                emoji: "🎸🎹",
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "What is Dubai's sail-shaped hotel?",
                options: [
                    "Burj Al Arab",
                    "Atlantis",
                    "Emirates Palace"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "How many principal dancers lead a ballet company?",
                options: [
                    "Varies by company",
                    "Five",
                    "Ten"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What sculptor created 'The Age of Bronze'?",
                options: [
                    "Auguste Rodin",
                    "Camille Claudel",
                    "Medardo Rosso"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "What is Filipino traditional folk theater?",
                options: [
                    "Komedya",
                    "Zarzuela",
                    "Moro-moro"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🎪🎡",
                question: "What ancient Phoenician city is in Lebanon?",
                options: [
                    "Byblos",
                    "Tyre",
                    "Sidon"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🌟✨",
                question: "What is Turkish marbled paper art?",
                options: [
                    "Ebru",
                    "Iznik",
                    "Calligraphy"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "💎🏆",
                question: "Which artist founded the Fauvist movement?",
                options: [
                    "Henri Matisse",
                    "André Derain",
                    "Maurice de Vlaminck",
                    "Raoul Dufy"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "How many nocturnes did Chopin compose?",
                options: [
                    "21",
                    "27",
                    "18",
                    "24"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "Who designed the Biblioteca Vasconcelos?",
                options: [
                    "Alberto Kalach",
                    "Luis Barragán",
                    "Ricardo Legorreta",
                    "Pedro Ramírez Vázquez"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
                question: "Who won the 2006 Nobel Prize for Literature?",
                options: [
                    "Orhan Pamuk",
                    "Yaşar Kemal",
                    "Elif Şafak",
                    "Nâzım Hikmet"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🎼🎤",
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
            {
                topic: "Cinema",
                emoji: "🏺🗿",
            {
                topic: "Theater",
                emoji: "🎭✨",
            {
                topic: "World Heritage",
                emoji: "📖🖊️",
                question: "What is Morocco's ancient imperial city?",
                options: [
                    "Fez",
                    "Marrakech",
                    "Meknes",
                    "Rabat"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🎨🌈",
                question: "What is Australia's national gallery?",
                options: [
                    "National Gallery of Australia",
                    "Art Gallery of NSW",
                    "National Gallery of Victoria",
                    "QAGOMA"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
                question: "What is painting with pigments in hot wax?",
                answer: "Encaustic"
            },
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "What is the term for a trill ornament?",
                answer: "Mordent"
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "What is the uppermost part of a column?",
                answer: "Capital"
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
                question: "What is a poem of 17 syllables in three lines?",
                answer: "Haiku"
            },
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "What is a ballet jump with straight legs?",
                answer: "Jeté or Grand jeté"
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "What is sculpture projecting from a background?",
                answer: "Relief"
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
                question: "What is a shot from a character's viewpoint?",
                answer: "Point of view or POV"
            },
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "What is traditional Filipino shadow puppet play?",
                answer: "Carillo or Kikimut"
            },
            {
                topic: "Festivals",
                emoji: "🎵🎶",
                question: "What is the Thai water festival?",
                answer: "Songkran"
            },
            {
                topic: "Crafts",
                emoji: "🖼️🏛️",
                question: "What is fabric decoration with beads and sequins?",
                answer: "Beadwork"
            }
        ]
    },
    /**
 * Art & Culture Trivia Questions - Chapter 10
 * ==================================================
 * 5 Levels with 10 questions each
 * Mix of True/False with randomized answer positions
 * Original questions with relevant emojis
 */

const artCultureChapter10 = {
    10: {
        easy: [
            {
                topic: "Painting",
                emoji: "📝✍️",
                question: "Leonardo da Vinci was a Renaissance artist.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "Beethoven continued composing after becoming deaf.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "The Sistine Chapel is in Vatican City.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
                question: "Mary Shelley wrote 'Frankenstein'.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "Australia has indigenous dance traditions.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "The Parthenon Marbles are in the British Museum.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
                question: "Westerns are set in the American Old West.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "An understudy replaces the main actor when needed.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "🎪🎡",
                question: "Christ the Redeemer is in Rio de Janeiro.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🌟✨",
                question: "Elvis Presley was called the King of Rock and Roll.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "💎🏆",
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "What is a musical composition for two performers?",
                options: [
                    "Duet",
                    "Solo"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "What is the famous Russian palace outside St. Petersburg?",
                options: [
                    "Winter Palace",
                    "Peterhof"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "What is Brazil's national dance?",
                options: [
                    "Salsa",
                    "Samba"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
                question: "What is clay sculpture that is fired in a kiln?",
                options: [
                    "Ceramic",
                    "Bronze"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🏺🗿",
                question: "What is India's top film award?",
                options: [
                    "National Film Award",
                    "Filmfare Award"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎭✨",
            {
                topic: "Festivals",
                emoji: "📖🖊️",
                question: "What is the famous Brazilian carnival city?",
                options: [
                    "Salvador",
                    "Rio de Janeiro"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🎨🌈",
                question: "Where is the Kunsthistorisches Museum?",
                options: [
                    "Vienna",
                    "Berlin"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
            {
                topic: "Music",
                emoji: "🎬📽️",
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "What is Gaudí's unfinished church in Barcelona?",
                options: [
                    "Sagrada Família",
                    "Casa Batlló",
                    "Park Güell"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "What is the Spanish flamenco hand movement called?",
                options: [
                    "Palmas",
                    "Zapateado",
                    "Braceo"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
            {
                topic: "Cinema",
                emoji: "📚📖",
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "What is Chinese traditional opera?",
                options: [
                    "Peking Opera",
                    "Kabuki",
                    "Noh"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "🎵🎶",
                question: "What ancient Incan city is in Peru?",
                options: [
                    "Machu Picchu",
                    "Chichen Itza",
                    "Tikal"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🖼️🏛️",
                question: "What is Japanese decorative metal inlay?",
                options: [
                    "Zogan",
                    "Raku",
                    "Shibori"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "📝✍️",
                question: "Which artist founded the Precisionism movement?",
                options: [
                    "Charles Demuth",
                    "Georgia O'Keeffe",
                    "Edward Hopper",
                    "Charles Sheeler"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "How many Brandenburg Concertos did Bach compose?",
                options: [
                    "6",
                    "4",
                    "8",
                    "12"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "Who carved the ancient city of Petra?",
                options: [
                    "Nabataeans",
                    "Romans",
                    "Byzantines",
                    "Persians"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
            {
                topic: "Dance",
                emoji: "📷📸",
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
            {
                topic: "Cinema",
                emoji: "🗿🏺",
            {
                topic: "Theater",
                emoji: "🖊️📜",
            {
                topic: "World Heritage",
                emoji: "🎪🎡",
                question: "What is Japan's ancient wooden temple?",
                options: [
                    "Hōryū-ji",
                    "Tōdai-ji",
                    "Kiyomizu-dera",
                    "Kinkaku-ji"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🌟✨",
                question: "What museum houses Botticelli's 'Birth of Venus'?",
                options: [
                    "Uffizi Gallery",
                    "Vatican Museums",
                    "Borghese Gallery",
                    "Accademia"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "💎🏆",
                question: "What is painting technique using small dots of color?",
                answer: "Pointillism or Divisionism"
            },
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "What is the term for a sudden loud accent?",
                answer: "Sforzando"
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "What is a circular window in Gothic architecture?",
                answer: "Rose window or Rosette"
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
                question: "What is repetition at the beginning of successive clauses?",
                answer: "Anaphora"
            },
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "What is a spinning jump in ballet?",
                answer: "Tour en l'air"
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
                question: "What is sculpture technique using molten metal?",
                answer: "Casting or Lost-wax casting"
            },
            {
                topic: "Cinema",
                emoji: "🏺🗿",
                question: "What is a shot following a moving subject?",
                answer: "Tracking shot or Dolly shot"
            },
            {
                topic: "Theater",
                emoji: "🎭✨",
                question: "What is traditional Cambodian dance drama?",
                answer: "Lkhon or Khmer dance"
            },
            {
                topic: "Festivals",
                emoji: "📖🖊️",
            {
                topic: "Crafts",
                emoji: "🎨🌈",
                question: "What is counted thread embroidery?",
                answer: "Cross-stitch or Counted work"
            }
        ]
    }
};



const artCultureSet3 = {
    // SET 3: CHAPTERS 11-15
    11: {
        easy: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
                question: "Hokusai created 'The Great Wave'.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "The saxophone is a woodwind instrument.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "The Shwedagon Pagoda is covered in gold.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
                question: "Rudyard Kipling wrote 'The Jungle Book'.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "The waltz originated in Austria.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "Easter Island statues are called Moai.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
                question: "'Spirited Away' is a Japanese animated film.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "The curtain call happens at the end of a show.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "🎵🎶",
                question: "The Arc de Triomphe is in Paris.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🖼️🏛️",
                question: "The Rolling Stones formed in London.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "📝✍️",
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "What is a musical composition for solo instrument?",
                options: [
                    "Concerto",
                    "Sonata"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "What is the main mosque in Dhaka?",
                options: [
                    "Baitul Mukarram",
                    "Star Mosque"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "What is traditional Romanian folk dance?",
                options: [
                    "Hora",
                    "Polka"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What is carved intaglio design?",
                options: [
                    "Relief",
                    "Sunken design"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
                question: "What is the highest French film award?",
                options: [
                    "César Award",
                    "Lumière Award"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🖊️📜",
            {
                topic: "Festivals",
                emoji: "🎪🎡",
                question: "What is the famous comedy festival in Montreal?",
                options: [
                    "Just for Laughs",
                    "Comedy Central"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🌟✨",
                question: "Where is the Book of Kells displayed?",
                options: [
                    "Trinity College Dublin",
                    "National Museum"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "💎🏆",
            {
                topic: "Music",
                emoji: "🎯🎲",
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "What is Vietnam's ancient imperial city?",
                options: [
                    "Hue",
                    "Hanoi",
                    "Da Nang"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "How many dancers perform a corps de ballet?",
                options: [
                    "Multiple dancers",
                    "Solo",
                    "Pair"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
            {
                topic: "Cinema",
                emoji: "🏺🗿",
            {
                topic: "Theater",
                emoji: "🎭✨",
                question: "What is Laotian classical dance-drama?",
                options: [
                    "Lao classical dance",
                    "Khon",
                    "Likay"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "📖🖊️",
                question: "What ancient Syrian city has ruins?",
                options: [
                    "Palmyra",
                    "Aleppo",
                    "Damascus"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🎨🌈",
                question: "What is Mexican bark paper art?",
                options: [
                    "Amate",
                    "Papel picado",
                    "Alebrije"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
                question: "Which artist founded the Rayonism movement?",
                options: [
                    "Mikhail Larionov",
                    "Natalia Goncharova",
                    "Kazimir Malevich",
                    "El Lissitzky"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "How many cello suites did Bach compose?",
                options: [
                    "6",
                    "4",
                    "8",
                    "12"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "Who designed the Heydar Aliyev Center in Baku?",
                options: [
                    "Zaha Hadid",
                    "Frank Gehry",
                    "Santiago Calatrava",
                    "Norman Foster"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "Who founded the Dance Theatre of Harlem?",
                options: [
                    "Arthur Mitchell",
                    "Alvin Ailey",
                    "Katherine Dunham",
                    "Pearl Primus"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
            {
                topic: "Cinema",
                emoji: "📚📖",
            {
                topic: "Theater",
                emoji: "🎬🎥",
            {
                topic: "World Heritage",
                emoji: "🎵🎶",
                question: "What were the giant Buddha statues destroyed in Afghanistan?",
                options: [
                    "Bamiyan Buddhas",
                    "Kandahar Buddhas",
                    "Herat Buddhas",
                    "Kabul Buddhas"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🖼️🏛️",
                question: "What museum in Basel houses modern art?",
                options: [
                    "Kunstmuseum Basel",
                    "Fondation Beyeler",
                    "Tinguely Museum",
                    "Vitra Design"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "📝✍️",
                question: "What is the technique of scratching through paint layers?",
                answer: "Sgraffito"
            },
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "What is the term for a grace note?",
                answer: "Appoggiatura or Acciaccatura"
            },
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "What is a projecting corbelled structure?",
                answer: "Corbel or Cantilever"
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
                question: "What is a short witty saying?",
                answer: "Epigram"
            },
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "What is a rapid turning movement on one foot?",
                answer: "Fouetté"
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What is a kinetic sculpture?",
                answer: "Moving sculpture"
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
                question: "What is a jump cut in editing?",
                answer: "Abrupt transition in time"
            },
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "What is Burmese classical marionette theater?",
                answer: "Yoke thé"
            },
            {
                topic: "Festivals",
                emoji: "🎪🎡",
                question: "What is the Chinese Moon Festival also called?",
                answer: "Mid-Autumn Festival"
            },
            {
                topic: "Crafts",
                emoji: "🌟✨",
                question: "What is pulled thread embroidery?",
                answer: "Drawn thread work"
            }
        ]
    },
    12: {
        easy: [
            {
                topic: "Painting",
                emoji: "💎🏆",
                question: "René Magritte was a Surrealist painter.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "A drum kit includes cymbals.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "Kathmandu has ancient temple architecture.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
                question: "'The Little Prince' features a fox.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🎼🎤",
                question: "The hopak is a Ukrainian dance.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
                question: "The Lion of Lucerne is carved from rock.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🏺🗿",
                question: "'Interstellar' is a science fiction film.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎭✨",
                question: "Stage left is from the actor's perspective.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "📖🖊️",
                question: "The Tower of Pisa leans due to soft ground.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎨🌈",
                question: "Pink Floyd was a progressive rock band.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "What is a composition for orchestra and soloist?",
                options: [
                    "Symphony",
                    "Concerto"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "What is Sri Lanka's ancient rock fortress?",
                options: [
                    "Sigiriya",
                    "Polonnaruwa"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "What is traditional Filipino dance with candles?",
                options: [
                    "Tinikling",
                    "Pandanggo sa Ilaw"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "What is a relief carving technique?",
                options: [
                    "Subtractive",
                    "Additive"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "What musical is about founding fathers?",
                options: [
                    "Hamilton",
                    "1776"
                ],
                correct: 1
            },
            {
                topic: "Festivals",
                emoji: "🎵🎶",
                question: "What is the famous opera festival in Italy?",
                options: [
                    "Verona Opera",
                    "La Scala"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🖼️🏛️",
                question: "Where is the Vasa Museum?",
                options: [
                    "Stockholm",
                    "Gothenburg"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "📝✍️",
            {
                topic: "Music",
                emoji: "🎸🎹",
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "Who designed the Apartheid Museum?",
                options: [
                    "Mashabane Rose Associates",
                    "Norman Foster",
                    "David Adjaye"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "What is the Indonesian classical dance form?",
                options: [
                    "Javanese dance",
                    "Balinese dance",
                    "Both are correct"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "What material did Naum Gabo use?",
                options: [
                    "Plastic and metal",
                    "Wood",
                    "Stone"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🗿🏺",
            {
                topic: "Theater",
                emoji: "🖊️📜",
                question: "What is Singaporean traditional street opera?",
                options: [
                    "Wayang",
                    "Peranakan",
                    "Bangsawan"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🎪🎡",
                question: "What ancient Nubian pyramids are in Sudan?",
                options: [
                    "Meroë",
                    "Kerma",
                    "Napata"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🌟✨",
                question: "What is Peruvian woven textile art?",
                options: [
                    "Andean weaving",
                    "Navajo weaving",
                    "Kilim"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "💎🏆",
                question: "Which artist founded the Vorticism movement?",
                options: [
                    "Wyndham Lewis",
                    "David Bomberg",
                    "William Roberts",
                    "Edward Wadsworth"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎯🎲",
                question: "How many operas did Verdi compose?",
                options: [
                    "28",
                    "35",
                    "20",
                    "42"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🃏🎴",
                question: "Who designed the National Museum of Beirut?",
                options: [
                    "Antoine Nahas",
                    "Bernard Khoury",
                    "Joseph Philippe Karam",
                    "Pierre el-Khoury"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🧩🎨",
                question: "Who wrote the Icelandic Sagas?",
                options: [
                    "Various anonymous authors",
                    "Snorri Sturluson",
                    "Egill Skallagrímsson",
                    "Unknown single author"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🎼🎤",
            {
                topic: "Sculpture",
                emoji: "🖋️📃",
            {
                topic: "Cinema",
                emoji: "🏺🗿",
            {
                topic: "Theater",
                emoji: "🎭✨",
            {
                topic: "World Heritage",
                emoji: "📖🖊️",
                question: "What is Mali's ancient trading city?",
                options: [
                    "Timbuktu",
                    "Djenné",
                    "Gao",
                    "Mopti"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🎨🌈",
                question: "What museum in Oslo houses 'The Scream'?",
                options: [
                    "National Museum",
                    "Munch Museum",
                    "Astrup Fearnley",
                    "Vigeland Museum"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🎪🎠",
                question: "What is painting on dry plaster called?",
                answer: "Secco or Fresco secco"
            },
            {
                topic: "Music",
                emoji: "🎬📽️",
                question: "What is the term for a sudden silence?",
                answer: "Rest or Grand pause"
            },
            {
                topic: "Architecture",
                emoji: "🎸🥁",
                question: "What is a pointed arch vault?",
                answer: "Ogive or Gothic vault"
            },
            {
                topic: "Literature",
                emoji: "📸🎞️",
                question: "What is a long narrative poem?",
                answer: "Epic"
            },
            {
                topic: "Dance",
                emoji: "🎨🖌️",
                question: "What is a backward bend in ballet?",
                answer: "Cambré"
            },
            {
                topic: "Sculpture",
                emoji: "🎭🎪",
                question: "What is sculpture formed by pouring liquid material?",
                answer: "Casting"
            },
            {
                topic: "Cinema",
                emoji: "📚📖",
                question: "What is voice recorded after filming?",
                answer: "Dubbing or ADR"
            },
            {
                topic: "Theater",
                emoji: "🎬🎥",
                question: "What is Taiwanese glove puppet theater?",
                answer: "Budaixi or Potehi"
            },
            {
                topic: "Festivals",
                emoji: "🎵🎶",
                question: "What is the Indian harvest festival?",
                answer: "Pongal or Makar Sankranti"
            },
            {
                topic: "Crafts",
                emoji: "🖼️🏛️",
                question: "What is whitework embroidery?",
                answer: "White thread on white fabric"
            }
        ]
    },
    13: {
        easy: [
            {
                topic: "Painting",
                emoji: "📝✍️",
                question: "J.M.W. Turner painted seascapes.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎸🎹",
                question: "An acoustic guitar doesn't need electricity.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "💃🕺",
                question: "Moroccan architecture features intricate tilework.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🎤🎧",
                question: "Dr. Seuss wrote 'The Cat in the Hat'.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "📷📸",
                question: "The haka is a Maori war dance.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎻🎺",
                question: "Mount Rushmore features four presidents.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
/**
 * Art & Culture Trivia Questions - Chapters 14 & 15
 * ==================================================
 * 5 Levels with 10 questions each per chapter
 * Mix of True/False with randomized answer positions
 * Original questions with relevant emojis
 */

const artCultureChapters14_15 = {
    // CHAPTER 14
    14: {
        easy: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
                question: "Rembrandt was a Dutch Golden Age painter.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "An opera combines singing and theater.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
                question: "C.S. Lewis wrote 'The Chronicles of Narnia'.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "Flamenco originated in Spain.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
                question: "Ancient Greeks created marble sculptures.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🃏🎴",
                question: "Silent films had no sound at all.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "🎼🎤",
                question: "Big Ben is a clock tower in London.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🖋️📃",
                question: "Bob Dylan won a Nobel Prize in Literature.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
                question: "Which artist famously cut off his own ear?",
                options: [
                    "Vincent van Gogh",
                    "Paul Gauguin"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "What is the largest string instrument in an orchestra?",
                options: [
                    "Cello",
                    "Double bass"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
            {
                topic: "Literature",
                emoji: "🎨🌈",
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
                question: "What is bronze made from?",
                options: [
                    "Copper and tin",
                    "Iron and carbon"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎸🥁",
                question: "What is the British film award called?",
                options: [
                    "BAFTA",
                    "BRIT"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "📸🎞️",
                question: "What musical is about a green witch?",
                options: [
                    "Wicked",
                    "Into the Woods"
                ],
                correct: 1
            },
            {
                topic: "Festivals",
                emoji: "🎨🖌️",
                question: "What is the famous film festival in France?",
                options: [
                    "Cannes",
                    "Deauville"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🎭🎪",
                question: "Where is the Getty Museum?",
                options: [
                    "Los Angeles",
                    "San Francisco"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "📚📖",
            {
                topic: "Music",
                emoji: "🎬🎥",
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "How many years did it take to build the Taj Mahal?",
                options: [
                    "22 years",
                    "15 years",
                    "30 years"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
            {
                topic: "Dance",
                emoji: "📝✍️",
                question: "Who composed the music for 'Swan Lake'?",
                options: [
                    "Tchaikovsky",
                    "Stravinsky",
                    "Prokofiev"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
                question: "What material did Michelangelo use for 'Pietà'?",
                options: [
                    "Marble",
                    "Bronze",
                    "Limestone"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "💃🕺",
            {
                topic: "Theater",
                emoji: "🎤🎧",
                question: "What is Japanese traditional puppet theater?",
                options: [
                    "Bunraku",
                    "Kabuki",
                    "Noh"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "📷📸",
                question: "What ancient Mayan city is in Guatemala?",
                options: [
                    "Tikal",
                    "Chichen Itza",
                    "Copán"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🎻🎺",
                question: "What is Indian block-printed textile?",
                options: [
                    "Block print",
                    "Batik",
                    "Ikat"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
                question: "Which artist founded the Metaphysical painting movement?",
                options: [
                    "Giorgio de Chirico",
                    "Carlo Carrà",
                    "Giorgio Morandi",
                    "Alberto Savinio"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "How many piano concertos did Mozart compose?",
                options: [
                    "27",
                    "21",
                    "32",
                    "18"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "Who designed Montevideo's Palacio Salvo?",
                options: [
                    "Mario Palanti",
                    "Julio Vilamajó",
                    "Rafael Lorente Escudero",
                    "Carlos Surraco"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "Who founded the Martha Graham Dance Company?",
                options: [
                    "Martha Graham",
                    "Doris Humphrey",
                    "Ruth St. Denis",
                    "Isadora Duncan"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
            {
                topic: "Cinema",
                emoji: "🃏🎴",
            {
                topic: "Theater",
                emoji: "🧩🎨",
            {
                topic: "World Heritage",
                emoji: "🎼🎤",
                question: "What is Georgia's ancient cave city?",
                options: [
                    "Uplistsikhe",
                    "Vardzia",
                    "Davit Gareja",
                    "Ananuri"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🖋️📃",
                question: "What museum in Brussels houses Bruegel's works?",
                options: [
                    "Royal Museums of Fine Arts",
                    "Magritte Museum",
                    "Horta Museum",
                    "BELvue Museum"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
                question: "What is the technique of applying thick paint?",
                answer: "Impasto"
            },
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "What is a recurring musical theme called?",
                answer: "Leitmotif or Motif"
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "What is a projecting structure supporting a building?",
                answer: "Cantilever"
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
                question: "What is a dramatic reversal in a story?",
                answer: "Peripeteia or Reversal"
            },
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "What is a pas de deux in ballet?",
                answer: "Dance for two"
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
                question: "What is additive sculpture technique?",
                answer: "Modeling or Building up"
            },
            {
                topic: "Cinema",
                emoji: "🎸🥁",
                question: "What is a mise-en-scène?",
                answer: "Everything in frame"
            },
            {
                topic: "Theater",
                emoji: "📸🎞️",
                question: "What is Mongolian traditional throat singing?",
                answer: "Khoomei or Overtone singing"
            },
            {
                topic: "Festivals",
                emoji: "🎨🖌️",
                question: "What is the German October beer festival?",
                answer: "Oktoberfest"
            },
            {
                topic: "Crafts",
                emoji: "🎭🎪",
                question: "What is ribbon embroidery?",
                answer: "Silk ribbon work"
            }
        ]
    },

    // CHAPTER 15
    15: {
        easy: [
            {
                topic: "Painting",
                emoji: "📚📖",
                question: "Gustav Klimt painted 'The Kiss'.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎬🎥",
                question: "A violin has four strings.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "The Louvre is in Paris.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
                question: "J.R.R. Tolkien wrote 'The Hobbit'.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "📝✍️",
                question: "Tango originated in Argentina.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
                question: "The Statue of Liberty holds a torch.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "💃🕺",
                question: "Animation creates the illusion of movement.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎤🎧",
                question: "Shakespeare wrote in the 16th and 17th centuries.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "📷📸",
                question: "The Brandenburg Gate is in Berlin.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎻🎺",
                question: "Queen was a British rock band.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "What is the lowest female singing voice?",
                options: [
                    "Alto",
                    "Soprano"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "What architectural style is the Pantheon?",
                options: [
                    "Roman",
                    "Greek"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "What dance style originated in Jamaica?",
                options: [
                    "Reggae",
                    "Dancehall"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
                question: "What is wood carving called?",
                options: [
                    "Whittling",
                    "Sculpting"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🃏🎴",
                question: "What is the oldest international film festival?",
                options: [
                    "Venice",
                    "Cannes"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🧩🎨",
            {
                topic: "Festivals",
                emoji: "🎼🎤",
                question: "What is the famous music festival in England?",
                options: [
                    "Glastonbury",
                    "Reading"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🖋️📃",
                question: "What is Russia's famous art museum?",
                options: [
                    "Hermitage",
                    "Tretyakov"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
            {
                topic: "Music",
                emoji: "🎭✨",
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "What is Istanbul's famous mosque?",
                options: [
                    "Hagia Sophia",
                    "Blue Mosque",
                    "Süleymaniye"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "What is modern dance pioneer Isadora Duncan known for?",
                options: [
                    "Barefoot dancing",
                    "Pointe work",
                    "Tap dancing"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
            {
                topic: "Cinema",
                emoji: "🎸🥁",
            {
                topic: "Theater",
                emoji: "📸🎞️",
                question: "What is Korean traditional mask dance?",
                options: [
                    "Talchum",
                    "Pansori",
                    "Samulnori"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "🎨🖌️",
            {
                topic: "Crafts",
                emoji: "🎭🎪",
                question: "What is Native American beadwork tradition?",
                options: [
                    "Beading",
                    "Weaving",
                    "Quillwork"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "📚📖",
                question: "Which artist founded the Synchromism movement?",
                options: [
                    "Morgan Russell",
                    "Stanton Macdonald-Wright",
                    "Patrick Henry Bruce",
                    "Thomas Hart Benton"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎬🎥",
                question: "How many operas did Puccini complete?",
                options: [
                    "12",
                    "16",
                    "9",
                    "14"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "Who rebuilt Warsaw's Old Town after WWII?",
                options: [
                    "Jan Zachwatowicz",
                    "Bohdan Pniewski",
                    "Szymon Syrkus",
                    "Helena Syrkus"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
            {
                topic: "Dance",
                emoji: "📝✍️",
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
            {
                topic: "Cinema",
                emoji: "💃🕺",
            {
                topic: "Theater",
                emoji: "🎤🎧",
            {
                topic: "World Heritage",
                emoji: "📷📸",
                question: "What is Bulgaria's rock-hewn churches site?",
                options: [
                    "Ivanovo",
                    "Rila",
                    "Boyana",
                    "Bachkovo"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🎻🎺",
                question: "What is Finland's national gallery?",
                options: [
                    "Ateneum",
                    "Kiasma",
                    "Sinebrychoff",
                    "Amos Rex"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
                question: "What is painting on prepared canvas called?",
                answer: "Gesso or Primed canvas"
            },
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "What is gradual increase in volume?",
                answer: "Crescendo"
            },
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "What is a recessed triangular space?",
                answer: "Spandrel"
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
                question: "What is a sudden realization in a story?",
                answer: "Epiphany"
            },
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "What is a ballet turn on one foot?",
                answer: "Pirouette"
            },
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
                question: "What is earth art or land art?",
                answer: "Environmental sculpture"
            },
            {
                topic: "Cinema",
                emoji: "🃏🎴",
                question: "What is editing technique alternating storylines?",
                answer: "Parallel editing or Cross-cutting"
            },
            {
                topic: "Theater",
                emoji: "🧩🎨",
                question: "What is Uzbek traditional silk road performance?",
                answer: "Katta Ashula or Epic singing"
            },
            {
                topic: "Festivals",
                emoji: "🎼🎤",
                question: "What is the Korean harvest festival?",
                answer: "Chuseok"
            },
            {
                topic: "Crafts",
                emoji: "🖋️📃",
                question: "What is blackwork embroidery?",
                answer: "Black thread on white fabric"
            }
        ]
    }
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['art_culture'] = subjectQuestionBank['art_culture'] || {};
    Object.assign(subjectQuestionBank['art_culture'], artCultureChapters14_15);
}

/**
 * Art & Culture Trivia Questions - SET 4
 * ==================================================
 * Chapters 16-20
 * Mix of True/False with randomized answer positions
 * Original questions with relevant emojis
 */

const artCultureSet4 = {
    // SET 4: CHAPTERS 16-20
    16: {
        easy: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
                question: "Wassily Kandinsky was a pioneer of abstract art.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "A cello is larger than a violin.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "The Philippines has Spanish colonial architecture.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
                question: "A.A. Milne created Winnie-the-Pooh.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "Bali has traditional dance forms.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
                question: "African masks are forms of sculpture.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎸🥁",
                question: "'The Avengers' is a superhero ensemble film.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "📸🎞️",
                question: "The wings are the sides of a stage.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "🎨🖌️",
                question: "The Angel of Independence is in Mexico City.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎭🎪",
                question: "Radiohead is a British rock band.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "📚📖",
            {
                topic: "Music",
                emoji: "🎬🎥",
                question: "What is a chamber music ensemble?",
                options: [
                    "Small group",
                    "Full orchestra"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "What is Kenya's traditional Maasai dwelling?",
                options: [
                    "Manyatta",
                    "Rondavel"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
            {
                topic: "Dance",
                emoji: "📝✍️",
                question: "What is Chile's national dance?",
                options: [
                    "Cueca",
                    "Tango"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
                question: "What is ice sculpture?",
                options: [
                    "Temporary frozen art",
                    "Permanent art"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "💃🕺",
                question: "What is Spain's top film award?",
                options: [
                    "Goya Award",
                    "Ariel Award"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎤🎧",
            {
                topic: "Festivals",
                emoji: "📷📸",
                question: "What is the famous dance festival in Jacob's Pillow?",
                options: [
                    "Dance Festival",
                    "Ballet Festival"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🎻🎺",
                question: "Where is the Pre-Columbian Art Museum?",
                options: [
                    "Santiago",
                    "Lima"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
            {
                topic: "Music",
                emoji: "🖊️📜",
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "What is Oman's grand mosque?",
                options: [
                    "Sultan Qaboos",
                    "Grand Muscat",
                    "Royal Mosque"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "What is Kenyan traditional Kikuyu dance?",
                options: [
                    "Mukanda",
                    "Adumu",
                    "Gwara gwara"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
            {
                topic: "Cinema",
                emoji: "🃏🎴",
            {
                topic: "Theater",
                emoji: "🧩🎨",
                question: "What is Tibetan Buddhist ritual dance?",
                options: [
                    "Cham",
                    "Lhamo",
                    "Ache Lhamo"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🎼🎤",
                question: "What temple complex is in Java?",
                options: [
                    "Borobudur",
                    "Angkor Wat",
                    "Ayutthaya"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🖋️📃",
                question: "What is Moroccan leather craft?",
                options: [
                    "Tanning",
                    "Weaving",
                    "Pottery"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
                question: "Which artist founded the Lyrical Abstraction movement?",
                options: [
                    "Georges Mathieu",
                    "Hans Hartung",
                    "Pierre Soulages",
                    "Jean-Paul Riopelle"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "How many string quartets did Haydn compose?",
                options: [
                    "68",
                    "52",
                    "83",
                    "45"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "Who designed the Bank of China Tower?",
                options: [
                    "I.M. Pei",
                    "Norman Foster",
                    "Cesar Pelli",
                    "Kohn Pedersen Fox"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "Who founded the Paul Taylor Dance Company?",
                options: [
                    "Paul Taylor",
                    "José Limón",
                    "Merce Cunningham",
                    "Erick Hawkins"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
            {
                topic: "Cinema",
                emoji: "🎸🥁",
            {
                topic: "Theater",
                emoji: "📸🎞️",
            {
                topic: "World Heritage",
                emoji: "🎨🖌️",
                question: "What is North Macedonia's UNESCO lake?",
                options: [
                    "Lake Ohrid",
                    "Lake Prespa",
                    "Lake Dojran",
                    "Matka Canyon"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🎭🎪",
                question: "What is Luxembourg's modern art museum?",
                options: [
                    "MUDAM",
                    "Casino Luxembourg",
                    "Villa Vauban",
                    "National Museum"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "📚📖",
                question: "What is chiaroscuro technique?",
                answer: "Light and dark contrast"
            },
            {
                topic: "Music",
                emoji: "🎬🎥",
                question: "What is the term for slowing down gradually?",
                answer: "Ritardando or Rallentando"
            },
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "What is a fan vault ceiling?",
                answer: "Gothic vault with ribs"
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
                question: "What is a coming-of-age story?",
                answer: "Bildungsroman"
            },
            {
                topic: "Dance",
                emoji: "📝✍️",
                question: "What is a ballet step with one leg lifted?",
                answer: "Attitude"
            },
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
                question: "What is installation art?",
                answer: "Site-specific three-dimensional work"
            },
            {
                topic: "Cinema",
                emoji: "💃🕺",
                question: "What is diegetic sound?",
                answer: "Sound from the film world"
            },
            {
                topic: "Theater",
                emoji: "🎤🎧",
                question: "What is Kazakh traditional epic performance?",
                answer: "Zhyrau or Epic singing"
            },
            {
                topic: "Festivals",
                emoji: "📷📸",
                question: "What is the Peruvian sun festival?",
                answer: "Inti Raymi"
            },
            {
                topic: "Crafts",
                emoji: "🎻🎺",
                question: "What is crewel embroidery?",
                answer: "Wool embroidery on fabric"
            }
        ]
    },
    17: {
        easy: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
                question: "Paul Klee was a Swiss-German artist.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "An accordion uses bellows to make sound.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "Uganda has traditional thatched huts.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
                question: "Beatrix Potter wrote 'Peter Rabbit'.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "Ecuador has traditional folk dances.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
                question: "Lion sculptures symbolize strength.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🃏🎴",
                question: "'Avatar' used motion capture technology.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🧩🎨",
                question: "A tech rehearsal tests lighting and sound.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "🎼🎤",
                question: "Bogotá has colonial monuments.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🖋️📃",
                question: "AC/DC is an Australian rock band.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "What is a musical overture?",
                options: [
                    "Opening piece",
                    "Finale"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "What is Zimbabwe's stone city?",
                options: [
                    "Great Zimbabwe",
                    "Khami"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "What is Peru's coastal dance?",
                options: [
                    "Marinera",
                    "Huayno"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
                question: "What is welded sculpture?",
                options: [
                    "Metal joined by heat",
                    "Carved stone"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🎸🥁",
            {
                topic: "Theater",
                emoji: "📸🎞️",
            {
                topic: "Festivals",
                emoji: "🎨🖌️",
                question: "What is the famous puppet festival in Prague?",
                options: [
                    "Puppet Festival",
                    "Theatre Festival"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🎭🎪",
                question: "Where is the Gold Museum?",
                options: [
                    "Bogotá",
                    "Lima"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "📚📖",
            {
                topic: "Music",
                emoji: "🎬🎥",
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "What is Bahrain's grand mosque?",
                options: [
                    "Al-Fateh",
                    "Khamis",
                    "Al-Aqsa"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
            {
                topic: "Dance",
                emoji: "📝✍️",
                question: "What is Zimbabwean traditional dance?",
                options: [
                    "Mbende Jerusarema",
                    "Adumu",
                    "Pantsula"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
            {
                topic: "Cinema",
                emoji: "💃🕺",
            {
                topic: "Theater",
                emoji: "🎤🎧",
                question: "What is Bhutanese mask dance?",
                options: [
                    "Cham",
                    "Lhamo",
                    "Ache Lhamo"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "📷📸",
                question: "What ancient city is in Myanmar?",
                options: [
                    "Bagan",
                    "Ayutthaya",
                    "Sukhothai"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🎻🎺",
                question: "What is Ethiopian basketry?",
                options: [
                    "Coiled weaving",
                    "Knotted weaving",
                    "Plaited weaving"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
                question: "Which artist founded the Cobra movement?",
                options: [
                    "Karel Appel",
                    "Asger Jorn",
                    "Constant Nieuwenhuys",
                    "Pierre Alechinsky"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "How many violin sonatas did Beethoven compose?",
                options: [
                    "10",
                    "16",
                    "8",
                    "12"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "Who designed Ljubljana's Triple Bridge?",
                options: [
                    "Jože Plečnik",
                    "Edvard Ravnikar",
                    "Savin Sever",
                    "Max Fabiani"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
            {
                topic: "Dance",
                emoji: "💎🏆",
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
            {
                topic: "Cinema",
                emoji: "🃏🎴",
            {
                topic: "Theater",
                emoji: "🧩🎨",
            {
                topic: "World Heritage",
                emoji: "🎼🎤",
                question: "What is Montenegro's coastal city?",
                options: [
                    "Kotor",
                    "Budva",
                    "Herceg Novi",
                    "Bar"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🖋️📃",
                question: "What is Estonia's main art museum?",
                options: [
                    "KUMU",
                    "Adamson-Eric",
                    "Niguliste",
                    "Mikkel"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
                question: "What is tenebrism in painting?",
                answer: "Dramatic illumination contrast"
            },
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "What is the term for a musical shake ornament?",
                answer: "Trill"
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "What is a flying buttress?",
                answer: "External arch support"
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
                question: "What is a stream of consciousness?",
                answer: "Narrative of thoughts"
            },
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "What is a ballet lift called?",
                answer: "Portage or Port de bras"
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
                question: "What is found object sculpture?",
                answer: "Art from everyday objects"
            },
            {
                topic: "Cinema",
                emoji: "🎸🥁",
                question: "What is non-diegetic sound?",
                answer: "Sound outside film world"
            },
            {
                topic: "Theater",
                emoji: "📸🎞️",
                question: "What is Turkmen traditional storytelling?",
                answer: "Bakhshi or Epic singing"
            },
            {
                topic: "Festivals",
                emoji: "🎨🖌️",
                question: "What is the Ethiopian Christmas?",
                answer: "Ganna or Timkat"
            },
            {
                topic: "Crafts",
                emoji: "🎭🎪",
                question: "What is hardanger embroidery?",
                answer: "Norwegian cutwork"
            }
        ]
    },
    /**
 * Art & Culture Trivia Questions - Chapter 18
 * ==================================================
 * 5 Levels with 10 questions each
 * Mix of True/False with randomized answer positions
 * Original questions with relevant emojis
 */

const artCultureChapter18 = {
    18: {
        easy: [
            {
                topic: "Painting",
                emoji: "📚📖",
                question: "The Group of Seven were Canadian landscape painters.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎬🎥",
                question: "A trombone has a sliding mechanism.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "Tanzania has Swahili coastal architecture.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
                question: "Aesop's fables include 'The Tortoise and the Hare'.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "📝✍️",
                question: "Bolivia has Andean folk dances.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
                question: "Eagle sculptures represent freedom.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "💃🕺",
                question: "'Parasite' is a South Korean film.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎤🎧",
                question: "A dress rehearsal is the final practice before opening.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "📷📸",
                question: "Machu Picchu is in Peru.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎻🎺",
                question: "Nirvana was a grunge band from Seattle.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "What is a four-performer musical group?",
                options: [
                    "Quartet",
                    "Quintet"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "What is South Africa's government buildings complex?",
                options: [
                    "Union Buildings",
                    "Parliament"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "What is Paraguay's traditional dance?",
                options: [
                    "Polka paraguaya",
                    "Chacarera"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
                question: "What is soap stone carving?",
                options: [
                    "Soft stone sculpting",
                    "Hard stone sculpting"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🃏🎴",
                question: "What is Turkey's top film award?",
                options: [
                    "Golden Orange",
                    "Siyad"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🧩🎨",
            {
                topic: "Festivals",
                emoji: "🎼🎤",
                question: "What is the famous Spanish running of the bulls?",
                options: [
                    "San Fermín",
                    "La Tomatina"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🖋️📃",
                question: "Where is the Apartheid Museum?",
                options: [
                    "Johannesburg",
                    "Cape Town"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
            {
                topic: "Music",
                emoji: "🎭✨",
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "What Swiss city has the Chapel Bridge?",
                options: [
                    "Lucerne",
                    "Zurich",
                    "Bern"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "What is Ghanaian traditional dance?",
                options: [
                    "Adowa",
                    "Azonto",
                    "Kpanlogo"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
                question: "What material did Barbara Hepworth prefer?",
                options: [
                    "Stone and bronze",
                    "Wood",
                    "Clay"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎸🥁",
            {
                topic: "Theater",
                emoji: "📸🎞️",
                question: "What is Sri Lankan traditional mask dance?",
                options: [
                    "Kolam",
                    "Kandyan",
                    "Sabaragamuwa"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🎨🖌️",
                question: "What are Zambia/Zimbabwe's famous waterfalls?",
                options: [
                    "Victoria Falls",
                    "Tugela Falls",
                    "Kalambo Falls"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🎭🎪",
                question: "What is New Zealand Maori wood carving?",
                options: [
                    "Whakairo",
                    "Kapa haka",
                    "Tukutuku"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "📚📖",
                question: "Which artist founded the Ashcan School?",
                options: [
                    "Robert Henri",
                    "George Bellows",
                    "John Sloan",
                    "William Glackens"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎬🎥",
                question: "How many piano sonatas did Beethoven compose?",
                options: [
                    "32",
                    "27",
                    "41",
                    "24"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "Who designed Buenos Aires' Teatro Colón?",
                options: [
                    "Francesco Tamburini",
                    "Vittorio Meano",
                    "Julio Dormal",
                    "All three"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
            {
                topic: "Dance",
                emoji: "📝✍️",
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
            {
                topic: "Cinema",
                emoji: "💃🕺",
            {
                topic: "Theater",
                emoji: "🎤🎧",
            {
                topic: "World Heritage",
                emoji: "📷📸",
                question: "What are Cyprus's painted churches?",
                options: [
                    "Troodos Churches",
                    "Paphos Churches",
                    "Nicosia Churches",
                    "Larnaca Churches"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🎻🎺",
                question: "What is Argentina's main fine arts museum?",
                options: [
                    "MALBA",
                    "Museo Nacional de Bellas Artes",
                    "Fundación Proa",
                    "MAMBA"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
                question: "What is alla prima painting technique?",
                answer: "Wet-on-wet or Direct painting"
            },
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "What is the term for majestic tempo?",
                answer: "Maestoso"
            },
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "What is a dome on pendentives?",
                answer: "Byzantine dome or Pendentive dome"
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
                question: "What is a brief witty poem?",
                answer: "Epigram"
            },
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "What is a rapid leg movement in ballet?",
                answer: "Battement"
            },
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
                question: "What is carved negative space sculpture?",
                answer: "Pierced sculpture or Negative space"
            },
            {
                topic: "Cinema",
                emoji: "🃏🎴",
                question: "What is a high-angle shot looking down?",
                answer: "Bird's eye view"
            },
            {
                topic: "Theater",
                emoji: "🧩🎨",
                question: "What is Armenian traditional epic performance?",
                answer: "Gusans or Epic singing"
            },
            {
                topic: "Festivals",
                emoji: "🎼🎤",
                question: "What is the Moroccan Gnawa music festival?",
                answer: "Gnaoua Festival or Essaouira Festival"
            },
            {
                topic: "Crafts",
                emoji: "🖋️📃",
                question: "What is ribbon lace making?",
                answer: "Tape lace or Renaissance lace"
            }
        ]
    }
};

/**
 * Art & Culture Trivia Questions - Chapters 19 & 20
 * ==================================================
 * 5 Levels with 10 questions each per chapter
 * Mix of True/False with randomized answer positions
 * Original questions with relevant emojis
 */

const artCultureChapters19_20 = {
    // CHAPTER 19
    19: {
        easy: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
                question: "Salvador Dalí was a Surrealist painter.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "Drums belong to the percussion family.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "Japanese temples often have curved roofs.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "The Bolshoi Ballet is in Moscow.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
                question: "Stone sculptures can last thousands of years.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎸🥁",
                question: "CGI stands for Computer Generated Imagery.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "📸🎞️",
                question: "The balcony is the upper seating area.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "🎨🖌️",
                question: "The Sphinx has a lion's body.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🎭🎪",
                question: "Led Zeppelin was a rock band.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "📚📖",
            {
                topic: "Music",
                emoji: "🎬🎥",
                question: "What is a three-performer musical group?",
                options: [
                    "Trio",
                    "Quartet"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "What bridge is famous in Prague?",
                options: [
                    "Charles Bridge",
                    "Legion Bridge"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
            {
                topic: "Dance",
                emoji: "📝✍️",
                question: "What is traditional Thai classical dance?",
                options: [
                    "Khon",
                    "Likay"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
                question: "What is a small three-dimensional model?",
                options: [
                    "Maquette",
                    "Relief"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "💃🕺",
                question: "What is Germany's top film award?",
                options: [
                    "Lola",
                    "Golden Bear"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎤🎧",
            {
                topic: "Festivals",
                emoji: "📷📸",
                question: "What is the famous carnival in Trinidad?",
                options: [
                    "Trinidad Carnival",
                    "Crop Over"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🎻🎺",
                question: "Where is the Museum of Anatolian Civilizations?",
                options: [
                    "Ankara",
                    "Istanbul"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
            {
                topic: "Music",
                emoji: "🖊️📜",
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "What are Kuwait's iconic towers?",
                options: [
                    "Kuwait Towers",
                    "Liberation Tower",
                    "Al Hamra Tower"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "What is Ethiopian traditional shoulder dance?",
                options: [
                    "Eskista",
                    "Gurage",
                    "Tigray"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
            {
                topic: "Cinema",
                emoji: "🃏🎴",
            {
                topic: "Theater",
                emoji: "🧩🎨",
                question: "What is Malaysian traditional shadow play?",
                options: [
                    "Wayang kulit",
                    "Mak yong",
                    "Menora"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "🎼🎤",
                question: "What is Albania's ancient archaeological site?",
                options: [
                    "Butrint",
                    "Apollonia",
                    "Byllis"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🖋️📃",
                question: "What is Scottish tartan weaving?",
                options: [
                    "Plaid weaving",
                    "Tweed",
                    "Harris"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
                question: "Which artist founded the Neoplasticism movement?",
                options: [
                    "Piet Mondrian",
                    "Theo van Doesburg",
                    "Bart van der Leck",
                    "Vilmos Huszár"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "How many preludes and fugues are in 'The Well-Tempered Clavier'?",
                options: [
                    "48",
                    "24",
                    "32",
                    "96"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "Who designed Moldova's Nativity Cathedral?",
                options: [
                    "Abraham Melnikov",
                    "Bernardazzi",
                    "Mitrofan Elladi",
                    "Alexander Pomerantsev"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
            {
                topic: "Dance",
                emoji: "🎪🎠",
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
            {
                topic: "Cinema",
                emoji: "🎸🥁",
            {
                topic: "Theater",
                emoji: "📸🎞️",
            {
                topic: "World Heritage",
                emoji: "🎨🖌️",
                question: "What is Croatia's Roman amphitheater city?",
                options: [
                    "Pula",
                    "Split",
                    "Zadar",
                    "Dubrovnik"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🎭🎪",
                question: "What is South Korea's national museum?",
                options: [
                    "National Museum of Korea",
                    "Leeum",
                    "National Folk Museum",
                    "Seoul Museum"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "📚📖",
                question: "What is the optical mixing technique in painting?",
                answer: "Optical mixing or Broken color"
            },
            {
                topic: "Music",
                emoji: "🎬🎥",
                question: "What is the term for gradual decrease in volume?",
                answer: "Diminuendo or Decrescendo"
            },
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "What is the space between columns called?",
                answer: "Intercolumniation"
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
                question: "What is a character's inner thoughts narrative?",
                answer: "Interior monologue"
            },
            {
                topic: "Dance",
                emoji: "📝✍️",
                question: "What is a ballet leap with split legs?",
                answer: "Grand jeté"
            },
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
                question: "What is minimal sculpture with geometric forms?",
                answer: "Minimalism or Primary structures"
            },
            {
                topic: "Cinema",
                emoji: "💃🕺",
                question: "What is a continuous take without cuts?",
                answer: "One-shot or Oner"
            },
            {
                topic: "Theater",
                emoji: "🎤🎧",
                question: "What is Kyrgyz traditional epic performance?",
                answer: "Manas or Epic recitation"
            },
            {
                topic: "Festivals",
                emoji: "📷📸",
                question: "What is the Bolivian carnival celebration?",
                answer: "Oruro Carnival"
            },
            {
                topic: "Crafts",
                emoji: "🎻🎺",
                question: "What is gold thread embroidery?",
                answer: "Goldwork or Metal thread work"
            }
        ]
    },

    // CHAPTER 20
    20: {
        easy: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
                question: "Edvard Munch painted 'The Scream'.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "A trumpet is a brass instrument.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "The Parthenon is in Athens.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
                question: "Bram Stoker wrote 'Dracula'.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "💎🏆",
                question: "The tarantella is an Italian dance.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🃏🎴",
                question: "Black and white films came before color films.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🧩🎨",
                question: "A monologue is spoken by one person.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "🎼🎤",
                question: "The Taj Mahal is made of white marble.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🖋️📃",
                question: "Michael Jackson was called the King of Pop.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "What is the highest string instrument?",
                options: [
                    "Violin",
                    "Viola"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "What is the famous parliament building city?",
                options: [
                    "Budapest",
                    "Prague"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "What is Venezuela's national dance?",
                options: [
                    "Joropo",
                    "Merengue"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
                question: "What is carved stone relief?",
                options: [
                    "Bas-relief",
                    "Intaglio"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎸🥁",
            {
                topic: "Theater",
                emoji: "📸🎞️",
            {
                topic: "Festivals",
                emoji: "🎨🖌️",
                question: "What is the famous balloon festival in New Mexico?",
                options: [
                    "Albuquerque Balloon Fiesta",
                    "Santa Fe Fiesta"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "🎭🎪",
                question: "Where is the National Archaeological Museum?",
                options: [
                    "Athens",
                    "Rome"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Painting",
                emoji: "📚📖",
            {
                topic: "Music",
                emoji: "🎬🎥",
            {
                topic: "Architecture",
                emoji: "🎵🎶",
                question: "What is Qatar's iconic museum?",
                options: [
                    "Museum of Islamic Art",
                    "National Museum",
                    "Mathaf"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🖼️🏛️",
            {
                topic: "Dance",
                emoji: "📝✍️",
                question: "What is Senegalese traditional dance?",
                options: [
                    "Sabar",
                    "Azonto",
                    "Gwara gwara"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎸🎹",
            {
                topic: "Cinema",
                emoji: "💃🕺",
            {
                topic: "Theater",
                emoji: "🎤🎧",
                question: "What is Nepalese traditional mask dance?",
                options: [
                    "Lakhe",
                    "Maruni",
                    "Jhyaure"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "📷📸",
                question: "What are Romania's painted monasteries region?",
                options: [
                    "Bucovina",
                    "Maramureș",
                    "Transylvania"
                ],
                correct: 1
            },
            {
                topic: "Crafts",
                emoji: "🎻🎺",
                question: "What is Guatemalan backstrap weaving?",
                options: [
                    "Huipil weaving",
                    "Kilim",
                    "Ikat"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🗿🏺",
                question: "Which artist founded the Tachisme movement?",
                options: [
                    "Jean Fautrier",
                    "Jean Dubuffet",
                    "Wols",
                    "Hans Hartung"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🖊️📜",
                question: "How many waltzes did Chopin compose?",
                options: [
                    "19",
                    "21",
                    "14",
                    "27"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🎪🎡",
                question: "Who designed Reykjavik's Hallgrímskirkja?",
                options: [
                    "Guðjón Samúelsson",
                    "Sigurður Guðmundsson",
                    "Ágúst Pálsson",
                    "Gísli Halldórsson"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "🌟✨",
            {
                topic: "Dance",
                emoji: "💎🏆",
            {
                topic: "Sculpture",
                emoji: "🎯🎲",
            {
                topic: "Cinema",
                emoji: "🃏🎴",
            {
                topic: "Theater",
                emoji: "🧩🎨",
            {
                topic: "World Heritage",
                emoji: "🎼🎤",
                question: "What is Bosnia's famous bridge?",
                options: [
                    "Stari Most (Mostar)",
                    "Mehmed Paša Sokolović",
                    "Latin Bridge",
                    "Šeher-Ćehaja"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🖋️📃",
                question: "What is Singapore's national gallery?",
                options: [
                    "National Gallery Singapore",
                    "Singapore Art Museum",
                    "Asian Civilisations Museum",
                    "Peranakan Museum"
                ],
                correct: 1
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🏺🗿",
                question: "What is painting technique with multiple thin layers?",
                answer: "Glazing or Layering"
            },
            {
                topic: "Music",
                emoji: "🎭✨",
                question: "What is the term for walking tempo?",
                answer: "Andante"
            },
            {
                topic: "Architecture",
                emoji: "📖🖊️",
                question: "What is a covered walkway with columns?",
                answer: "Colonnade or Portico"
            },
            {
                topic: "Literature",
                emoji: "🎨🌈",
                question: "What is an extended metaphor in a poem?",
                answer: "Conceit"
            },
            {
                topic: "Dance",
                emoji: "🎪🎠",
                question: "What is a ballet pose on one leg?",
                answer: "Arabesque"
            },
            {
                topic: "Sculpture",
                emoji: "🎬📽️",
                question: "What is performance art as sculpture?",
                answer: "Living sculpture or Body art"
            },
            {
                topic: "Cinema",
                emoji: "🎸🥁",
                question: "What is a low-angle camera shot?",
                answer: "Worm's eye view"
            },
            {
                topic: "Theater",
                emoji: "📸🎞️",
                question: "What is Tajik traditional storytelling performance?",
                answer: "Maqom or Epic singing"
            },
            {
                topic: "Festivals",
                emoji: "🎨🖌️",
                question: "What is the Colombian flower festival?",
                answer: "Feria de las Flores"
            },
            {
                topic: "Crafts",
                emoji: "🎭🎪",
                question: "What is three-dimensional embroidery?",
                answer: "Stumpwork"
            }
        ]
    }
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['art-literature'] = artCultureQuestions;
}
