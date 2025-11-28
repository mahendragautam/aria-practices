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
