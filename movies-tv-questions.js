const moviesTVQuestions = {
    1: {
        easy: [
            {
                topic: "The Lion King",
                emoji: "🎬🎥",
                question: "Simba is a lion cub.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Spider-Man",
                emoji: "🎭🎪",
                question: "Peter Parker gets bitten by a radioactive spider.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Friends",
                emoji: "🍿🥤",
                question: "Friends is set in New York City.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Jurassic Park",
                emoji: "🎞️📽️",
                question: "Jurassic Park has real dinosaurs.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Breaking Bad",
                emoji: "📺📻",
                question: "Walter White is a chemistry teacher.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Finding Nemo",
                emoji: "🎤🎧",
                question: "Nemo is a clownfish.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Walking Dead",
                emoji: "🎵🎶",
                question: "The Walking Dead features zombies.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Batman",
                emoji: "🏆🥇",
                question: "Batman lives in Gotham City.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Game of Thrones",
                emoji: "⭐🌟",
                question: "Game of Thrones has dragons.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Toy Story",
                emoji: "🎨🖼️",
                question: "Woody is a cowboy toy.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Inception",
                emoji: "📸📷",
                question: "What does Dom Cobb do?",
                options: [
                    "Steals from dreams",
                    "Creates dreams"
                ],
                correct: 0
            },
            {
                topic: "The Office",
                emoji: "🎟️🎫",
                question: "What company do they work for?",
                options: [
                    "Dunder Mifflin",
                    "Staples"
                ],
                correct: 0
            },
            {
                topic: "The Matrix",
                emoji: "🎪🎡",
                question: "What color pill does Neo take?",
                options: [
                    "Red",
                    "Blue"
                ],
                correct: 0
            },
            {
                topic: "Stranger Things",
                emoji: "🎢🎠",
                question: "What is the alternate dimension called?",
                options: [
                    "The Upside Down",
                    "The Shadow World"
                ],
                correct: 0
            },
            {
                topic: "Pulp Fiction",
                emoji: "🎰🃏",
                question: "Who directed Pulp Fiction?",
                options: [
                    "Quentin Tarantino",
                    "Martin Scorsese"
                ],
                correct: 0
            },
            {
                topic: "How I Met Your Mother",
                emoji: "👑💎",
                question: "What is Barney's catchphrase?",
                options: [
                    "Legendary",
                    "Awesome"
                ],
                correct: 0
            },
            {
                topic: "Fight Club",
                emoji: "🗡️⚔️",
                question: "What does Tyler Durden sell?",
                options: [
                    "Soap",
                    "Clothes"
                ],
                correct: 0
            },
            {
                topic: "The Big Bang Theory",
                emoji: "🚀🛸",
                question: "What is Sheldon's profession?",
                options: [
                    "Physicist",
                    "Engineer"
                ],
                correct: 0
            },
            {
                topic: "Forrest Gump",
                emoji: "👽🤖",
                question: "What does Forrest say life is like?",
                options: [
                    "Box of chocolates",
                    "Journey"
                ],
                correct: 0
            },
            {
                topic: "Parks and Recreation",
                emoji: "🦸🦹",
                question: "What is Leslie's dream project?",
                options: [
                    "Park",
                    "Library"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "The Godfather",
                emoji: "🧙🧚",
                question: "Who directed The Godfather?",
                options: [
                    "Francis Ford Coppola",
                    "Martin Scorsese",
                    "Brian De Palma"
                ],
                correct: 0
            },
            {
                topic: "The Wire",
                emoji: "🧛🧟",
                question: "What city is The Wire set in?",
                options: [
                    "Baltimore",
                    "New York",
                    "Chicago"
                ],
                correct: 0
            },
            {
                topic: "The Shawshank Redemption",
                emoji: "👻💀",
                question: "How many years was Andy imprisoned?",
                options: [
                    "19",
                    "20",
                    "27"
                ],
                correct: 0
            },
            {
                topic: "Mad Men",
                emoji: "🐉🦖",
                question: "What decade is Mad Men primarily set in?",
                options: [
                    "1960s",
                    "1950s",
                    "1970s"
                ],
                correct: 0
            },
            {
                topic: "The Dark Knight",
                emoji: "🦄🐴",
                question: "Who played the Joker?",
                options: [
                    "Heath Ledger",
                    "Jack Nicholson",
                    "Jared Leto"
                ],
                correct: 0
            },
            {
                topic: "Lost",
                emoji: "🏰🏛️",
                question: "How many main seasons does Lost have?",
                options: [
                    "6",
                    "5",
                    "7"
                ],
                correct: 0
            },
            {
                topic: "Goodfellas",
                emoji: "🗼🌉",
                question: "Who plays Henry Hill?",
                options: [
                    "Ray Liotta",
                    "Robert De Niro",
                    "Joe Pesci"
                ],
                correct: 0
            },
            {
                topic: "The West Wing",
                emoji: "🌃🌆",
                question: "Who is the President in The West Wing?",
                options: [
                    "Josiah Bartlet",
                    "Matt Santos",
                    "Arnold Vinick"
                ],
                correct: 0
            },
            {
                topic: "Schindler's List",
                emoji: "💥⚡",
                question: "What war is Schindler's List set during?",
                options: [
                    "World War II",
                    "World War I",
                    "Vietnam War"
                ],
                correct: 0
            },
            {
                topic: "Twin Peaks",
                emoji: "🔥💫",
                question: "Who killed Laura Palmer?",
                options: [
                    "Leland Palmer",
                    "Bob",
                    "Leo Johnson"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "The Godfather",
                emoji: "🎬🎥",
                question: "What year was The Godfather released?",
                options: [
                    "1972",
                    "1971",
                    "1973",
                    "1974"
                ],
                correct: 0
            },
            {
                topic: "Breaking Bad",
                emoji: "🎭🎪",
                question: "What is Walter White's alias?",
                options: [
                    "Heisenberg",
                    "Capn Cook",
                    "Krazy-8",
                    "Tuco"
                ],
                correct: 0
            },
            {
                topic: "Citizen Kane",
                emoji: "🏆🌟",
                question: "What is Kane's dying word?",
                options: [
                    "Rosebud",
                    "Susan",
                    "Xanadu",
                    "Mother"
                ],
                correct: 0
            },
            {
                topic: "The Sopranos",
                emoji: "👑💍",
                question: "What state is The Sopranos set in?",
                options: [
                    "New Jersey",
                    "New York",
                    "Pennsylvania",
                    "Connecticut"
                ],
                correct: 0
            },
            {
                topic: "Casablanca",
                emoji: "🦸🦹",
                question: "What is Rick's nightclub called?",
                options: [
                    "Rick's Café Américain",
                    "The Blue Parrot",
                    "The American Bar",
                    "Café Morocco"
                ],
                correct: 0
            },
            {
                topic: "The Twilight Zone",
                emoji: "🚀🌌",
                question: "Who created The Twilight Zone?",
                options: [
                    "Rod Serling",
                    "Alfred Hitchcock",
                    "Gene Roddenberry",
                    "Ray Bradbury"
                ],
                correct: 0
            },
            {
                topic: "Seven Samurai",
                emoji: "🧙🔮",
                question: "Who directed Seven Samurai?",
                options: [
                    "Akira Kurosawa",
                    "Yasujirō Ozu",
                    "Kenji Mizoguchi",
                    "Masaki Kobayashi"
                ],
                correct: 0
            },
            {
                topic: "The X-Files",
                emoji: "🦖🦕",
                question: "What is Mulder's first name?",
                options: [
                    "Fox",
                    "Frank",
                    "Fred",
                    "Felix"
                ],
                correct: 0
            },
            {
                topic: "2001: A Space Odyssey",
                emoji: "🕷️🕸️",
                question: "Who directed 2001: A Space Odyssey?",
                options: [
                    "Stanley Kubrick",
                    "Ridley Scott",
                    "Steven Spielberg",
                    "George Lucas"
                ],
                correct: 0
            },
            {
                topic: "Seinfeld",
                emoji: "⚔️🛡️",
                question: "What network aired Seinfeld?",
                options: [
                    "NBC",
                    "CBS",
                    "ABC",
                    "FOX"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "The Godfather",
                emoji: "💎🏝️",
                question: "What is the name of the Corleone family's hometown in Sicily?",
                answer: "Corleone"
            },
            {
                topic: "The Sopranos",
                emoji: "🐉⚡",
                question: "What is the name of Tony's boat?",
                answer: "Stugots"
            },
            {
                topic: "Vertigo",
                emoji: "🤖🔧",
                question: "Who directed Vertigo?",
                answer: "Alfred Hitchcock"
            },
            {
                topic: "The Wire",
                emoji: "🏴‍☠️⚓",
                question: "What is Omar Little's signature whistle?",
                answer: "The Farmer in the Dell"
            },
            {
                topic: "Apocalypse Now",
                emoji: "👻👽",
                question: "What novella is Apocalypse Now based on?",
                answer: "Heart of Darkness"
            },
            {
                topic: "The Prisoner",
                emoji: "🔫💥",
                question: "What is the protagonist's number?",
                answer: "6 or Number 6"
            },
            {
                topic: "8½",
                emoji: "🎩🎪",
                question: "Who directed 8½?",
                answer: "Federico Fellini"
            },
            {
                topic: "Breaking Bad",
                emoji: "🌹💔",
                question: "What is the name of Saul Goodman's real identity?",
                answer: "Jimmy McGill"
            },
            {
                topic: "The Third Man",
                emoji: "🎸🎤",
                question: "What city is The Third Man set in?",
                answer: "Vienna"
            },
            {
                topic: "Mad Men",
                emoji: "🏃💨",
                question: "What is Don Draper's real name?",
                answer: "Dick Whitman"
            }
        ]
    },
    2: {
        easy: [
            {
                topic: "Frozen",
                emoji: "🎯🎲",
                question: "Elsa has ice powers.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Iron Man",
                emoji: "🎰🃏",
                question: "Tony Stark builds a suit of armor.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "The Simpsons",
                emoji: "🏎️💨",
                question: "Homer Simpson works at a nuclear plant.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Star Wars",
                emoji: "🚁✈️",
                question: "Luke Skywalker becomes a Jedi.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Stranger Things",
                emoji: "🦇🌃",
                question: "Eleven has telekinetic powers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "The Avengers",
                emoji: "👮🔍",
                question: "The Avengers is a superhero team.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Grey's Anatomy",
                emoji: "💰💵",
                question: "Grey's Anatomy is set in a hospital.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Harry Potter",
                emoji: "🎭😂",
                question: "Harry Potter attends Hogwarts.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Office",
                emoji: "🎪🤡",
                question: "Michael Scott is the regional manager.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Shrek",
                emoji: "🎬📹",
                question: "Shrek lives in a swamp.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "The Shawshank Redemption",
                emoji: "🎬🎥",
                question: "What does Andy carve through?",
                options: [
                    "Wall",
                    "Floor"
                ],
                correct: 0
            },
            {
                topic: "Community",
                emoji: "🎭🎪",
                question: "What type of school is Greendale?",
                options: [
                    "Community college",
                    "University"
                ],
                correct: 0
            },
            {
                topic: "The Silence of the Lambs",
                emoji: "🏆🌟",
                question: "What is Hannibal Lecter?",
                options: [
                    "Psychiatrist",
                    "Surgeon"
                ],
                correct: 0
            },
            {
                topic: "Arrested Development",
                emoji: "👑💍",
                question: "What is the family name?",
                options: [
                    "Bluth",
                    "Funke"
                ],
                correct: 0
            },
            {
                topic: "Gladiator",
                emoji: "🦸🦹",
                question: "What was Maximus before becoming a gladiator?",
                options: [
                    "General",
                    "Senator"
                ],
                correct: 0
            },
            {
                topic: "Brooklyn Nine-Nine",
                emoji: "🚀🌌",
                question: "Who is the captain?",
                options: [
                    "Holt",
                    "Terry"
                ],
                correct: 0
            },
            {
                topic: "The Departed",
                emoji: "🧙🔮",
                question: "Who directed The Departed?",
                options: [
                    "Martin Scorsese",
                    "Francis Ford Coppola"
                ],
                correct: 0
            },
            {
                topic: "Modern Family",
                emoji: "🦖🦕",
                question: "What is Phil's profession?",
                options: [
                    "Realtor",
                    "Architect"
                ],
                correct: 0
            },
            {
                topic: "The Usual Suspects",
                emoji: "🕷️🕸️",
                question: "Who is Keyser Söze?",
                options: [
                    "Verbal Kint",
                    "Dean Keaton"
                ],
                correct: 0
            },
            {
                topic: "It's Always Sunny",
                emoji: "⚔️🛡️",
                question: "What is their bar called?",
                options: [
                    "Paddy's Pub",
                    "Charlie's Bar"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "There Will Be Blood",
                emoji: "💎🏝️",
                question: "Who directed There Will Be Blood?",
                options: [
                    "Paul Thomas Anderson",
                    "Terrence Malick",
                    "Christopher Nolan"
                ],
                correct: 0
            },
            {
                topic: "The Leftovers",
                emoji: "🐉⚡",
                question: "What percentage of people disappeared?",
                options: [
                    "2%",
                    "5%",
                    "10%"
                ],
                correct: 0
            },
            {
                topic: "No Country for Old Men",
                emoji: "🤖🔧",
                question: "Who plays Anton Chigurh?",
                options: [
                    "Javier Bardem",
                    "Josh Brolin",
                    "Tommy Lee Jones"
                ],
                correct: 0
            },
            {
                topic: "Deadwood",
                emoji: "🏴‍☠️⚓",
                question: "What is the setting time period?",
                options: [
                    "1870s",
                    "1860s",
                    "1880s"
                ],
                correct: 0
            },
            {
                topic: "The Social Network",
                emoji: "👻👽",
                question: "Who directed The Social Network?",
                options: [
                    "David Fincher",
                    "Aaron Sorkin",
                    "Bennett Miller"
                ],
                correct: 0
            },
            {
                topic: "Louie",
                emoji: "🔫💥",
                question: "Where is Louie set?",
                options: [
                    "New York",
                    "Los Angeles",
                    "Boston"
                ],
                correct: 0
            },
            {
                topic: "Inglourious Basterds",
                emoji: "🎩🎪",
                question: "Who plays Hans Landa?",
                options: [
                    "Christoph Waltz",
                    "Michael Fassbender",
                    "Daniel Brühl"
                ],
                correct: 0
            },
            {
                topic: "Boardwalk Empire",
                emoji: "🌹💔",
                question: "Who is the main character?",
                options: [
                    "Nucky Thompson",
                    "Jimmy Darmody",
                    "Al Capone"
                ],
                correct: 0
            },
            {
                topic: "The Master",
                emoji: "🎸🎤",
                question: "Who plays Freddie Quell?",
                options: [
                    "Joaquin Phoenix",
                    "Philip Seymour Hoffman",
                    "Daniel Day-Lewis"
                ],
                correct: 0
            },
            {
                topic: "Justified",
                emoji: "🏃💨",
                question: "What is Boyd Crowder to Raylan?",
                options: [
                    "Childhood friend",
                    "Brother",
                    "Cousin"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Vertigo",
                emoji: "🎯🎲",
                question: "What is Scottie's phobia?",
                options: [
                    "Acrophobia",
                    "Claustrophobia",
                    "Agoraphobia",
                    "Nyctophobia"
                ],
                correct: 0
            },
            {
                topic: "The Wire",
                emoji: "🎰🃏",
                question: "How many seasons does The Wire have?",
                options: [
                    "5",
                    "4",
                    "6",
                    "7"
                ],
                correct: 0
            },
            {
                topic: "Mulholland Drive",
                emoji: "🏎️💨",
                question: "Who directed Mulholland Drive?",
                options: [
                    "David Lynch",
                    "David Cronenberg",
                    "David Fincher",
                    "Darren Aronofsky"
                ],
                correct: 0
            },
            {
                topic: "Deadwood",
                emoji: "🚁✈️",
                question: "How many seasons did Deadwood originally have?",
                options: [
                    "3",
                    "2",
                    "4",
                    "5"
                ],
                correct: 0
            },
            {
                topic: "The Apartment",
                emoji: "🦇🌃",
                question: "Who directed The Apartment?",
                options: [
                    "Billy Wilder",
                    "William Wyler",
                    "Frank Capra",
                    "George Cukor"
                ],
                correct: 0
            },
            {
                topic: "Freaks and Geeks",
                emoji: "👮🔍",
                question: "What year is Freaks and Geeks set in?",
                options: [
                    "1980",
                    "1981",
                    "1979",
                    "1982"
                ],
                correct: 0
            },
            {
                topic: "The Double Life of Véronique",
                emoji: "💰💵",
                question: "Who directed this film?",
                options: [
                    "Krzysztof Kieślowski",
                    "Andrei Tarkovsky",
                    "Ingmar Bergman",
                    "Theo Angelopoulos"
                ],
                correct: 0
            },
            {
                topic: "The Shield",
                emoji: "🎭😂",
                question: "How many seasons does The Shield have?",
                options: [
                    "7",
                    "6",
                    "8",
                    "5"
                ],
                correct: 0
            },
            {
                topic: "The Conformist",
                emoji: "🎪🤡",
                question: "Who directed The Conformist?",
                options: [
                    "Bernardo Bertolucci",
                    "Luchino Visconti",
                    "Pier Paolo Pasolini",
                    "Michelangelo Antonioni"
                ],
                correct: 0
            },
            {
                topic: "The Larry Sanders Show",
                emoji: "🎬📹",
                question: "Who created The Larry Sanders Show?",
                options: [
                    "Garry Shandling",
                    "Larry David",
                    "Jerry Seinfeld",
                    "Chris Rock"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Vertigo",
                emoji: "🎬🎥",
                question: "What tower does the climactic scene take place in?",
                answer: "Mission San Juan Bautista"
            },
            {
                topic: "The Wire",
                emoji: "🎭🎪",
                question: "What is Stringer Bell's real first name?",
                answer: "Russell"
            },
            {
                topic: "La Jetée",
                emoji: "🏆🌟",
                question: "Who directed La Jetée?",
                answer: "Chris Marker"
            },
            {
                topic: "Deadwood",
                emoji: "👑💍",
                question: "What is Al Swearengen's saloon called?",
                answer: "The Gem"
            },
            {
                topic: "The Searchers",
                emoji: "🦸🦹",
                question: "Who directed The Searchers?",
                answer: "John Ford"
            },
            {
                topic: "The Sopranos",
                emoji: "🚀🌌",
                question: "What is the name of the strip club Tony owns?",
                answer: "Bada Bing"
            },
            {
                topic: "Au Revoir Les Enfants",
                emoji: "🧙🔮",
                question: "Who directed Au Revoir Les Enfants?",
                answer: "Louis Malle"
            },
            {
                topic: "Freaks and Geeks",
                emoji: "🦖🦕",
                question: "What is Lindsay's last name?",
                answer: "Weir"
            },
            {
                topic: "The Battle of Algiers",
                emoji: "🕷️🕸️",
                question: "Who directed The Battle of Algiers?",
                answer: "Gillo Pontecorvo"
            },
            {
                topic: "The Shield",
                emoji: "⚔️🛡️",
                question: "What is the name of Vic Mackey's unit?",
                answer: "Strike Team"
            }
        ]
    }
};
const chapter3 = {
    easy: [
        {
            topic: "Titanic",
            emoji: "💎🏝️",
            question: "Titanic is about a ship that sinks.",
            options: [
                "True",
                "False"
            ],
            correct: 0
        },
        {
            topic: "Black Panther",
            emoji: "🐉⚡",
            question: "Black Panther is the king of Wakanda.",
            options: [
                "False",
                "True"
            ],
            correct: 1
        },
        {
            topic: "Downton Abbey",
            emoji: "🤖🔧",
            question: "Downton Abbey is set in England.",
            options: [
                "True",
                "False"
            ],
            correct: 0
        },
        {
            topic: "E.T.",
            emoji: "🏴‍☠️⚓",
            question: "E.T. wants to go home.",
            options: [
                "False",
                "True"
            ],
            correct: 1
        },
        {
            topic: "Supernatural",
            emoji: "👻👽",
            question: "Sam and Dean hunt monsters.",
            options: [
                "True",
                "False"
            ],
            correct: 1
        },
        {
            topic: "The Incredibles",
            emoji: "🔫💥",
            question: "The Incredibles is a superhero family.",
            options: [
                "False",
                "True"
            ],
            correct: 0
        },
        {
            topic: "Doctor Who",
            emoji: "🎩🎪",
            question: "The Doctor travels through time.",
            options: [
                "True",
                "False"
            ],
            correct: 1
        },
        {
            topic: "Captain America",
            emoji: "🌹💔",
            question: "Steve Rogers becomes Captain America.",
            options: [
                "True",
                "False"
            ],
            correct: 0
        },
        {
            topic: "Glee",
            emoji: "🎸🎤",
            question: "Glee is about a high school choir.",
            options: [
                "False",
                "True"
            ],
            correct: 0
        },
        {
            topic: "Up",
            emoji: "🏃💨",
            question: "Carl uses balloons to fly his house.",
            options: [
                "True",
                "False"
            ],
            correct: 1
        }
    ],
    medium: [
        {
            topic: "The Departed",
            emoji: "🎯🎲",
            question: "What city is The Departed set in?",
            options: [
                "Boston",
                "New York"
            ],
            correct: 0
        },
        {
            topic: "Scrubs",
            emoji: "🎰🃏",
            question: "What is JD's profession?",
            options: [
                "Doctor",
                "Nurse"
            ],
            correct: 0
        },
        {
            topic: "Interstellar",
            emoji: "🏎️💨",
            question: "Who directed Interstellar?",
            options: [
                "Christopher Nolan",
                "Denis Villeneuve"
            ],
            correct: 0
        },
        {
            topic: "The Good Place",
            emoji: "🚁✈️",
            question: "Who is the architect of The Good Place?",
            options: [
                "Michael",
                "Chidi"
            ],
            correct: 0
        },
        {
            topic: "Saving Private Ryan",
            emoji: "🦇🌃",
            question: "What war is depicted in Saving Private Ryan?",
            options: [
                "World War II",
                "Vietnam War"
            ],
            correct: 0
        },
        {
            topic: "The Witcher",
            emoji: "👮🔍",
            question: "What is Geralt's profession?",
            options: [
                "Witcher",
                "Knight"
            ],
            correct: 0
        },
        {
            topic: "The Notebook",
            emoji: "💰💵",
            question: "Where does The Notebook take place?",
            options: [
                "South Carolina",
                "North Carolina"
            ],
            correct: 0
        },
        {
            topic: "Silicon Valley",
            emoji: "🎭😂",
            question: "What is the main company called?",
            options: [
                "Pied Piper",
                "Hooli"
            ],
            correct: 0
        },
        {
            topic: "La La Land",
            emoji: "🎪🤡",
            question: "What city is La La Land set in?",
            options: [
                "Los Angeles",
                "San Francisco"
            ],
            correct: 0
        },
        {
            topic: "Arrested Development",
            emoji: "🎬📹",
            question: "What is the family business?",
            options: [
                "Real estate development",
                "Frozen bananas"
            ],
            correct: 0
        }
    ],
    hard: [
        {
            topic: "Se7en",
            emoji: "🎬🎥",
            question: "How many deadly sins are there?",
            options: [
                "5",
                "7",
                "10"
            ],
            correct: 1
        },
        {
            topic: "Chernobyl",
            emoji: "🎭🎪",
            question: "What year did the Chernobyl disaster occur?",
            options: [
                "1984",
                "1986",
                "1988"
            ],
            correct: 1
        },
        {
            topic: "Oldboy",
            emoji: "🏆🌟",
            question: "How many years was the protagonist imprisoned?",
            options: [
                "10",
                "15",
                "20"
            ],
            correct: 1
        },
        {
            topic: "Atlanta",
            emoji: "👑💍",
            question: "Who created Atlanta?",
            options: [
                "Donald Glover",
                "Jordan Peele",
                "Lakeith Stanfield"
            ],
            correct: 0
        },
        {
            topic: "Memento",
            emoji: "🦸🦹",
            question: "What condition does Leonard have?",
            options: [
                "Amnesia",
                "Short-term memory loss",
                "Alzheimer's"
            ],
            correct: 1
        },
        {
            topic: "Fargo",
            emoji: "🚀🌌",
            question: "What state is the TV series Fargo set in?",
            options: [
                "North Dakota",
                "Minnesota",
                "Wisconsin"
            ],
            correct: 1
        },
        {
            topic: "Eternal Sunshine",
            emoji: "🧙🔮",
            question: "What gets erased in Eternal Sunshine?",
            options: [
                "Memories",
                "Identity",
                "Emotions"
            ],
            correct: 0
        },
        {
            topic: "True Detective",
            emoji: "🦖🦕",
            question: "How many detectives are in Season 1?",
            options: [
                "1",
                "2",
                "3"
            ],
            correct: 1
        },
        {
            topic: "Pan's Labyrinth",
            emoji: "🕷️🕸️",
            question: "What country is Pan's Labyrinth from?",
            options: [
                "Mexico",
                "Spain",
                "Argentina"
            ],
            correct: 1
        },
        {
            topic: "The Expanse",
            emoji: "⚔️🛡️",
            question: "What is the main spaceship called?",
            options: [
                "Rocinante",
                "Donnager",
                "Canterbury"
            ],
            correct: 0
        }
    ],
    expert: [
        {
            topic: "Barry Lyndon",
            emoji: "💎🏝️",
            question: "What type of lighting did Kubrick use?",
            options: [
                "Natural light",
                "Candlelight",
                "LED lights",
                "Fluorescent"
            ],
            correct: 1
        },
        {
            topic: "The Shield",
            emoji: "🐉⚡",
            question: "What is the Strike Team's leader's name?",
            options: [
                "Vic Mackey",
                "Shane Vendrell",
                "Ronnie Gardocki",
                "Curtis Lemansky"
            ],
            correct: 0
        },
        {
            topic: "Persona",
            emoji: "🤖🔧",
            question: "Who directed Persona?",
            options: [
                "Ingmar Bergman",
                "Carl Theodor Dreyer",
                "Lars von Trier",
                "Roy Andersson"
            ],
            correct: 0
        },
        {
            topic: "The Larry Sanders Show",
            emoji: "🏴‍☠️⚓",
            question: "What type of show is Larry Sanders Show?",
            options: [
                "News show",
                "Talk show",
                "Game show",
                "Reality show"
            ],
            correct: 1
        },
        {
            topic: "Rashomon",
            emoji: "👻👽",
            question: "How many versions of the story are told?",
            options: [
                "2",
                "3",
                "4",
                "5"
            ],
            correct: 2
        },
        {
            topic: "Boardwalk Empire",
            emoji: "🔫💥",
            question: "What decade is Boardwalk Empire set in?",
            options: [
                "1910s",
                "1920s",
                "1930s",
                "1940s"
            ],
            correct: 1
        },
        {
            topic: "Tokyo Story",
            emoji: "🎩🎪",
            question: "Who directed Tokyo Story?",
            options: [
                "Akira Kurosawa",
                "Yasujirō Ozu",
                "Kenji Mizoguchi",
                "Masaki Kobayashi"
            ],
            correct: 1
        },
        {
            topic: "Rectify",
            emoji: "🌹💔",
            question: "How many years was Daniel on death row?",
            options: [
                "15",
                "19",
                "20",
                "25"
            ],
            correct: 1
        },
        {
            topic: "Wings of Desire",
            emoji: "🎸🎤",
            question: "What city is Wings of Desire set in?",
            options: [
                "Paris",
                "Berlin",
                "Vienna",
                "Prague"
            ],
            correct: 1
        },
        {
            topic: "Justified",
            emoji: "🏃💨",
            question: "What is Raylan Givens' occupation?",
            options: [
                "Sheriff",
                "Detective",
                "US Marshal",
                "FBI Agent"
            ],
            correct: 2
        }
    ],
    extreme: [
        {
            topic: "La Dolce Vita",
            emoji: "🎯🎲",
            question: "What fountain appears in the famous scene?",
            answer: "Trevi Fountain"
        },
        {
            topic: "Freaks and Geeks",
            emoji: "🎰🃏",
            question: "How many episodes did Freaks and Geeks have?",
            answer: "18"
        },
        {
            topic: "M",
            emoji: "🏎️💨",
            question: "Who directed the German film M?",
            answer: "Fritz Lang"
        },
        {
            topic: "Firefly",
            emoji: "🚁✈️",
            question: "What is the ship's name in Firefly?",
            answer: "Serenity"
        },
        {
            topic: "The 400 Blows",
            emoji: "🦇🌃",
            question: "Who directed The 400 Blows?",
            answer: "François Truffaut"
        },
        {
            topic: "Hill Street Blues",
            emoji: "👮🔍",
            question: "What phrase ends the morning briefing?",
            answer: "Let's be careful out there"
        },
        {
            topic: "Andrei Rublev",
            emoji: "💰💵",
            question: "Who directed Andrei Rublev?",
            answer: "Andrei Tarkovsky"
        },
        {
            topic: "My So-Called Life",
            emoji: "🎭😂",
        {
            topic: "The Red Shoes",
            emoji: "🎪🤡",
            question: "What color are the iconic shoes?",
            answer: "Red"
        },
        {
            topic: "Homicide: Life on the Street",
            emoji: "🎬📹",
            question: "What city is the show set in?",
            answer: "Baltimore"
        }
    ]
};

  4: {
        easy: [
            {
                topic: "Shrek",
                emoji: "🎬🎥",
                question: "Shrek is an ogre.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Guardians of the Galaxy",
                emoji: "🎭🎪",
                question: "Groot can only say 'I am Groot'.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "The Fresh Prince",
                emoji: "🏆🌟",
                question: "Will Smith moves to Bel-Air in the show.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ghostbusters",
                emoji: "👑💍",
                question: "Ghostbusters catch ghosts.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Suits",
                emoji: "🦸🦹",
                question: "Mike Ross is a lawyer in Suits.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Aladdin",
                emoji: "🚀🌌",
                question: "Aladdin finds a magic lamp.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Vikings",
                emoji: "🧙🔮",
                question: "Ragnar Lothbrok is the main character.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Wonder Woman",
                emoji: "🦖🦕",
                question: "Wonder Woman is an Amazon warrior.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Crown",
                emoji: "🕷️🕸️",
                question: "The Crown is about British royalty.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Moana",
                emoji: "⚔️🛡️",
                question: "Moana sails across the ocean.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "The Prestige",
                emoji: "💎🏝️",
                question: "What are the two magicians' professions?",
                options: [
                    "Rivals",
                    "Partners"
                ],
                correct: 0
            },
            {
                topic: "30 Rock",
                emoji: "🐉⚡",
                question: "Who is the head writer?",
                options: [
                    "Liz Lemon",
                    "Jack Donaghy"
                ],
                correct: 0
            },
            {
                topic: "Django Unchained",
                emoji: "🤖🔧",
                question: "What genre is Django Unchained?",
                options: [
                    "Western",
                    "Thriller"
                ],
                correct: 0
            },
            {
                topic: "Veep",
                emoji: "🏴‍☠️⚓",
                question: "What is Selina Meyer's position?",
                options: [
                    "Senator",
                    "Vice President"
                ],
                correct: 1
            },
            {
                topic: "Braveheart",
                emoji: "👻👽",
                question: "Who does Mel Gibson play?",
                options: [
                    "William Wallace",
                    "Robert the Bruce"
                ],
                correct: 0
            },
            {
                topic: "The Boys",
                emoji: "🔫💥",
                question: "What are superheroes called in The Boys?",
                options: [
                    "Supes",
                    "Heroes"
                ],
                correct: 0
            },
            {
                topic: "Birdman",
                emoji: "🎩🎪",
                question: "What is the movie shot to look like?",
                options: [
                    "One continuous take",
                    "Multiple scenes"
                ],
                correct: 0
            },
            {
                topic: "The Mandalorian",
                emoji: "🌹💔",
                question: "What is the Mandalorian's code?",
                options: [
                    "This is the way",
                    "May the Force be with you"
                ],
                correct: 0
            },
            {
                topic: "Up",
                emoji: "🎸🎤",
                question: "What lifts the house in Up?",
                options: [
                    "Balloons",
                    "Helicopter"
                ],
                correct: 0
            },
            {
                topic: "Money Heist",
                emoji: "🏃💨",
                question: "What do they plan to rob?",
                options: [
                    "Bank",
                    "Royal Mint"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Birdman",
                emoji: "🎯🎲",
                question: "Who directed Birdman?",
                options: [
                    "Alfonso Cuarón",
                    "Alejandro González Iñárritu",
                    "Guillermo del Toro"
                ],
                correct: 1
            },
            {
                topic: "Hannibal",
                emoji: "🎰🃏",
                question: "What is Hannibal Lecter's profession in the show?",
                options: [
                    "Psychiatrist",
                    "Surgeon",
                    "Chef"
                ],
                correct: 0
            },
            {
                topic: "Drive",
                emoji: "🏎️💨",
                question: "What is the Driver's main job?",
                options: [
                    "Mechanic",
                    "Stunt driver",
                    "Getaway driver"
                ],
                correct: 1
            },
            {
                topic: "Band of Brothers",
                emoji: "🚁✈️",
                question: "What company is the show about?",
                options: [
                    "Easy Company",
                    "Baker Company",
                    "Charlie Company"
                ],
                correct: 0
            },
            {
                topic: "Whiplash",
                emoji: "🦇🌃",
                question: "What instrument does Andrew play?",
                options: [
                    "Piano",
                    "Drums",
                    "Trumpet"
                ],
                correct: 1
            },
            {
                topic: "Mindhunter",
                emoji: "👮🔍",
                question: "What do the agents study?",
                options: [
                    "Cold cases",
                    "Serial killers",
                    "Organized crime"
                ],
                correct: 1
            },
            {
                topic: "Her",
                emoji: "💰💵",
                question: "What does the protagonist fall in love with?",
                options: [
                    "A robot",
                    "An AI",
                    "A hologram"
                ],
                correct: 1
            },
            {
                topic: "The Leftovers",
                emoji: "🎭😂",
                question: "Where is the show primarily set?",
                options: [
                    "New York",
                    "Mapleton",
                    "Austin"
                ],
                correct: 1
            },
            {
                topic: "Moonlight",
                emoji: "🎪🤡",
                question: "How many actors play the protagonist?",
                options: [
                    "2",
                    "3",
                    "4"
                ],
                correct: 1
            },
            {
                topic: "The Terror",
                emoji: "🎬📹",
                question: "What are the ships searching for?",
                options: [
                    "Northwest Passage",
                    "Treasure",
                    "New land"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "The Tree of Life",
                emoji: "🎬🎥",
                question: "Who directed The Tree of Life?",
                options: [
                    "Terrence Malick",
                    "Paul Thomas Anderson",
                    "Darren Aronofsky",
                    "Christopher Nolan"
                ],
                correct: 0
            },
            {
                topic: "The Prisoner",
                emoji: "🎭🎪",
                question: "What is the protagonist known as?",
                options: [
                    "Number 5",
                    "Number 6",
                    "Number 7",
                    "Number 8"
                ],
                correct: 1
            },
            {
                topic: "A Separation",
                emoji: "🏆🌟",
                question: "What country is A Separation from?",
                options: [
                    "Iraq",
                    "Iran",
                    "Turkey",
                    "Lebanon"
                ],
                correct: 1
            },
            {
                topic: "The Knick",
                emoji: "👑💍",
                question: "What century is The Knick set in?",
                options: [
                    "19th",
                    "20th",
                    "18th",
                    "21st"
                ],
                correct: 1
            },
            {
                topic: "The Master",
                emoji: "🦸🦹",
                question: "What is the cult-like organization called?",
                options: [
                    "The Cause",
                    "The Way",
                    "The Movement",
                    "The Path"
                ],
                correct: 0
            },
            {
                topic: "Carnivàle",
                emoji: "🚀🌌",
                question: "What decade is Carnivàle set in?",
                options: [
                    "1920s",
                    "1930s",
                    "1940s",
                    "1950s"
                ],
                correct: 1
            },
            {
                topic: "Synecdoche, New York",
                emoji: "🧙🔮",
            {
                topic: "Utopia",
                emoji: "🦖🦕",
                question: "What country produced the original Utopia?",
                options: [
                    "USA",
                    "UK",
                    "Canada",
                    "Australia"
                ],
                correct: 1
            },
            {
                topic: "Harakiri",
                emoji: "🕷️🕸️",
                question: "What is the central theme?",
                options: [
                    "Honor",
                    "Revenge",
                    "Love",
                    "War"
                ],
                correct: 0
            },
            {
                topic: "Terriers",
                emoji: "⚔️🛡️",
                question: "How many seasons did Terriers have?",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Au Hasard Balthazar",
                emoji: "💎🏝️",
                question: "Who directed Au Hasard Balthazar?",
                answer: "Robert Bresson"
            },
            {
                topic: "The Singing Detective",
                emoji: "🐉⚡",
                question: "Who wrote The Singing Detective?",
                answer: "Dennis Potter"
            },
            {
                topic: "Aguirre, the Wrath of God",
                emoji: "🤖🔧",
                question: "Who directed Aguirre?",
                answer: "Werner Herzog"
            },
            {
                topic: "The Honeymooners",
                emoji: "🏴‍☠️⚓",
                question: "What is Ralph Kramden's job?",
                answer: "Bus driver"
            },
            {
                topic: "L'Atalante",
                emoji: "👻👽",
                question: "Who directed L'Atalante?",
                answer: "Jean Vigo"
            },
            {
                topic: "The Avengers (1960s)",
                emoji: "🔫💥",
                question: "What is Emma Peel's signature outfit?",
                answer: "Leather catsuit or jumpsuit"
            },
            {
                topic: "Ikiru",
                emoji: "🎩🎪",
                question: "What does 'Ikiru' mean in English?",
                answer: "To Live"
            },
            {
                topic: "Edge of Darkness",
                emoji: "🌹💔",
                question: "What year was the original Edge of Darkness series?",
                answer: "1985"
            },
            {
                topic: "The Earrings of Madame de...",
                emoji: "🎸🎤",
            {
                topic: "Brideshead Revisited",
                emoji: "🏃💨",
                question: "Who wrote the novel Brideshead Revisited?",
                answer: "Evelyn Waugh"
            }
        ]
    },
    5: {
        easy: [
            {
                topic: "Coco",
                emoji: "🎯🎲",
                question: "Coco is about the Day of the Dead.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Doctor Strange",
                emoji: "🎰🃏",
                question: "Doctor Strange is a neurosurgeon.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "That '70s Show",
                emoji: "🏎️💨",
                question: "That '70s Show is set in Wisconsin.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Terminator",
                emoji: "🚁✈️",
                question: "The Terminator is a cyborg.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Gilmore Girls",
                emoji: "🦇🌃",
                question: "Lorelai and Rory are mother and daughter.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Beauty and the Beast",
                emoji: "👮🔍",
                question: "Belle loves reading books.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Vampire Diaries",
                emoji: "💰💵",
                question: "The show is set in Mystic Falls.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Aquaman",
                emoji: "🎭😂",
                question: "Aquaman can communicate with sea creatures.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Handmaid's Tale",
                emoji: "🎪🤡",
                question: "Handmaids wear red robes.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Zootopia",
                emoji: "🎬📹",
                question: "Judy Hopps is a rabbit police officer.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Spotlight",
                emoji: "🎬🎥",
                question: "What does the Spotlight team investigate?",
                options: [
                    "Catholic Church scandal",
                    "Political corruption"
                ],
                correct: 0
            },
            {
                topic: "It's Always Sunny",
                emoji: "🎭🎪",
            {
                topic: "Logan",
                emoji: "🏆🌟",
                question: "What year is Logan set in?",
                options: [
                    "2029",
                    "2049"
                ],
                correct: 0
            },
            {
                topic: "Curb Your Enthusiasm",
                emoji: "👑💍",
                question: "Who created Curb Your Enthusiasm?",
                options: [
                    "Larry David",
                    "Jerry Seinfeld"
                ],
                correct: 0
            },
            {
                topic: "Arrival",
                emoji: "🦸🦹",
                question: "What does the linguist try to understand?",
                options: [
                    "Alien language",
                    "Ancient text"
                ],
                correct: 0
            },
            {
                topic: "Battlestar Galactica",
                emoji: "🚀🌌",
                question: "What are the enemy robots called?",
                options: [
                    "Terminators",
                    "Cylons"
                ],
                correct: 1
            },
            {
                topic: "Room",
                emoji: "🧙🔮",
                question: "Where do they escape from?",
                options: [
                    "A room",
                    "A basement"
                ],
                correct: 0
            },
            {
                topic: "Rick and Morty",
                emoji: "🦖🦕",
            {
                topic: "12 Years a Slave",
                emoji: "🕷️🕸️",
                question: "How long was Solomon enslaved?",
                options: [
                    "12 years",
                    "10 years"
                ],
                correct: 0
            },
            {
                topic: "BoJack Horseman",
                emoji: "⚔️🛡️",
                question: "What is BoJack's species?",
                options: [
                    "Horse",
                    "Donkey"
                ],
                correct: 0
            },
            {
                topic: "Mad Max: Fury Road",
                emoji: "💎🏝️",
                question: "Who is the main female character?",
                options: [
                    "Furiosa",
                    "Max"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Children of Men",
                emoji: "🐉⚡",
                question: "What is the main crisis in the film?",
                options: [
                    "War",
                    "Infertility",
                    "Plague"
                ],
                correct: 1
            },
            {
                topic: "The Leftovers",
                emoji: "🤖🔧",
                question: "Who created The Leftovers?",
                options: [
                    "Damon Lindelof",
                    "J.J. Abrams",
                    "Carlton Cuse"
                ],
                correct: 0
            },
            {
                topic: "Amour",
                emoji: "🏴‍☠️⚓",
                question: "What language is Amour in?",
                options: [
                    "German",
                    "French",
                    "Italian"
                ],
                correct: 1
            },
            {
                topic: "Patriot",
                emoji: "👻👽",
            {
                topic: "The Hunt",
                emoji: "🔫💥",
                question: "What is the main character falsely accused of?",
                options: [
                    "Murder",
                    "Child abuse",
                    "Theft"
                ],
                correct: 1
            },
            {
                topic: "Rectify",
                emoji: "🎩🎪",
                question: "What state is Rectify set in?",
                options: [
                    "Georgia",
                    "Alabama",
                    "South Carolina"
                ],
                correct: 0
            },
            {
                topic: "The Grand Budapest Hotel",
                emoji: "🌹💔",
            {
                topic: "Halt and Catch Fire",
                emoji: "🎸🎤",
                question: "What decade does the show start in?",
                options: [
                    "1970s",
                    "1980s",
                    "1990s"
                ],
                correct: 1
            },
            {
                topic: "Inside Llewyn Davis",
                emoji: "🏃💨",
                question: "What music genre is featured?",
                options: [
                    "Folk",
                    "Jazz",
                    "Blues"
                ],
                correct: 0
            },
            {
                topic: "The Americans",
                emoji: "🎯🎲",
                question: "What are the protagonists disguised as?",
                options: [
                    "Diplomats",
                    "Americans",
                    "Tourists"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Spring, Summer, Fall, Winter",
                emoji: "🎰🃏",
                question: "Who directed this Korean film?",
                options: [
                    "Park Chan-wook",
                    "Kim Ki-duk",
                    "Bong Joon-ho",
                    "Lee Chang-dong"
                ],
                correct: 1
            },
            {
                topic: "The Singing Detective",
                emoji: "🏎️💨",
                question: "What illness does the protagonist have?",
                options: [
                    "Cancer",
                    "Psoriatic arthritis",
                    "Multiple sclerosis",
                    "ALS"
                ],
                correct: 1
            },
            {
                topic: "In the Mood for Love",
                emoji: "🚁✈️",
                question: "Who directed In the Mood for Love?",
                options: [
                    "Wong Kar-wai",
                    "Ang Lee",
                    "Zhang Yimou",
                    "Chen Kaige"
                ],
                correct: 0
            },
            {
                topic: "The Young Pope",
                emoji: "🦇🌃",
                question: "Who plays Pope Pius XIII?",
                options: [
                    "Jude Law",
                    "Michael Fassbender",
                    "Benedict Cumberbatch",
                    "Tom Hiddleston"
                ],
                correct: 0
            },
            {
                topic: "Yi Yi",
                emoji: "👮🔍",
                question: "What does Yi Yi mean?",
                options: [
                    "One One",
                    "A One and a Two",
                    "Family",
                    "Life"
                ],
                correct: 1
            },
            {
                topic: "The Night Of",
                emoji: "💰💵",
                question: "How many episodes is The Night Of?",
                options: [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                correct: 1
            },
            {
                topic: "Cache",
                emoji: "🎭😂",
                question: "Who directed Cache (Hidden)?",
                options: [
                    "Michael Haneke",
                    "François Ozon",
                    "Olivier Assayas",
                    "Jacques Audiard"
                ],
                correct: 0
            },
            {
                topic: "Top of the Lake",
                emoji: "🎪🤡",
                question: "Who created Top of the Lake?",
                options: [
                    "Jane Campion",
                    "Nic Pizzolatto",
                    "David Lynch",
                    "Cary Fukunaga"
                ],
                correct: 0
            },
            {
                topic: "Once Upon a Time in Anatolia",
                emoji: "🎬📹",
                question: "What country is this film from?",
                options: [
                    "Greece",
                    "Turkey",
                    "Iran",
                    "Armenia"
                ],
                correct: 1
            },
            {
                topic: "Treme",
                emoji: "🎬🎥",
                question: "What city is Treme set in post-disaster?",
                options: [
                    "Houston",
                    "Miami",
                    "New Orleans",
                    "Mobile"
                ],
                correct: 2
            }
        ],
        extreme: [
            {
                topic: "L'Avventura",
                emoji: "🎭🎪",
            {
                topic: "The Prisoner",
                emoji: "🏆🌟",
                question: "What village is the protagonist trapped in?",
                answer: "The Village"
            },
            {
                topic: "Pickpocket",
                emoji: "👑💍",
                question: "Who directed Pickpocket?",
                answer: "Robert Bresson"
            },
            {
                topic: "The Singing Detective",
                emoji: "🦸🦹",
            {
                topic: "Sansho the Bailiff",
                emoji: "🚀🌌",
                question: "Who directed Sansho the Bailiff?",
                answer: "Kenji Mizoguchi"
            },
            {
                topic: "Prime Suspect",
                emoji: "🧙🔮",
                question: "What is DCI Tennison's first name?",
                answer: "Jane"
            },
            {
                topic: "Diary of a Country Priest",
                emoji: "🦖🦕",
            {
                topic: "The Prisoner",
                emoji: "🕷️🕸️",
                question: "Who is Number 1?",
                answer: "Number 6 or The Prisoner himself"
            },
            {
                topic: "Pather Panchali",
                emoji: "⚔️🛡️",
                question: "Who directed the Apu Trilogy?",
                answer: "Satyajit Ray"
            },
            {
                topic: "Brideshead Revisited",
                emoji: "💎🏝️",
                question: "What is the estate called?",
                answer: "Brideshead"
            }
        ]
    },
    6: {
        easy: [
            {
                topic: "Inside Out",
                emoji: "🐉⚡",
                question: "Inside Out takes place inside a girl's mind.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ant-Man",
                emoji: "🤖🔧",
                question: "Ant-Man can shrink to the size of an ant.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Two and a Half Men",
                emoji: "🏴‍☠️⚓",
                question: "Charlie Sheen was in Two and a Half Men.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Aliens",
                emoji: "👻👽",
                question: "Ripley fights xenomorphs in Aliens.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Lost",
                emoji: "🔫💥",
                question: "The survivors crash on an island.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mulan",
                emoji: "🎩🎪",
                question: "Mulan disguises herself as a man.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dexter",
                emoji: "🌹💔",
                question: "Dexter is a serial killer.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Captain Marvel",
                emoji: "🎸🎤",
                question: "Captain Marvel is a pilot.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Sherlock",
                emoji: "🏃💨",
                question: "Sherlock lives at 221B Baker Street.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ratatouille",
                emoji: "🎯🎲",
                question: "A rat wants to be a chef.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "The Grand Budapest Hotel",
                emoji: "🎰🃏",
                question: "What is the concierge's name?",
                options: [
                    "Gustave H.",
                    "Zero"
                ],
                correct: 0
            },
            {
                topic: "The IT Crowd",
                emoji: "🏎️💨",
                question: "What floor is IT on?",
                options: [
                    "Basement",
                    "Top floor"
                ],
                correct: 0
            },
            {
                topic: "Sicario",
                emoji: "🚁✈️",
                question: "What does Sicario mean?",
                options: [
                    "Hitman",
                    "Detective"
                ],
                correct: 0
            },
            {
                topic: "Lovecraft Country",
                emoji: "🦇🌃",
                question: "What decade is it set in?",
                options: [
                    "1950s",
                    "1960s"
                ],
                correct: 0
            },
            {
                topic: "The Revenant",
                emoji: "👮🔍",
                question: "Who directed The Revenant?",
                options: [
                    "Alejandro G. Iñárritu",
                    "Alfonso Cuarón"
                ],
                correct: 0
            },
            {
                topic: "Killing Eve",
                emoji: "💰💵",
                question: "Who is the assassin?",
                options: [
                    "Eve",
                    "Villanelle"
                ],
                correct: 1
            },
            {
                topic: "The Shape of Water",
                emoji: "🎭😂",
            {
                topic: "Russian Doll",
                emoji: "🎪🤡",
                question: "What keeps happening to Nadia?",
                options: [
                    "She dies repeatedly",
                    "She time travels"
                ],
                correct: 0
            },
            {
                topic: "Three Billboards",
                emoji: "🎬📹",
                question: "Where is the film set?",
                options: [
                    "Missouri",
                    "Kansas"
                ],
                correct: 0
            },
            {
                topic: "Dark",
                emoji: "🎬🎥",
                question: "What country is Dark from?",
                options: [
                    "Austria",
                    "Germany"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "The Lighthouse",
                emoji: "🎭🎪",
                question: "How many main characters are there?",
                options: [
                    "1",
                    "2",
                    "3"
                ],
                correct: 1
            },
            {
                topic: "Counterpart",
                emoji: "🏆🌟",
                question: "What is the main concept?",
                options: [
                    "Time travel",
                    "Parallel worlds",
                    "Clones"
                ],
                correct: 1
            },
            {
                topic: "The Lives of Others",
                emoji: "👑💍",
                question: "What agency does the protagonist work for?",
                options: [
                    "Stasi",
                    "KGB",
                    "CIA"
                ],
                correct: 0
            },
            {
                topic: "Maniac",
                emoji: "🦸🦹",
                question: "What are the protagonists part of?",
                options: [
                    "Support group",
                    "Drug trial",
                    "Therapy"
                ],
                correct: 1
            },
            {
                topic: "Incendies",
                emoji: "🚀🌌",
                question: "What country is Incendies from?",
                options: [
                    "France",
                    "Canada",
                    "Lebanon"
                ],
                correct: 1
            },
            {
                topic: "The OA",
                emoji: "🧙🔮",
                question: "What ability does Prairie have?",
                options: [
                    "Telekinesis",
                    "Dimensional travel",
                    "Mind reading"
                ],
                correct: 1
            },
            {
                topic: "A Prophet",
                emoji: "🦖🦕",
                question: "Where does most of the film take place?",
                options: [
                    "Prison",
                    "Streets",
                    "Hospital"
                ],
                correct: 0
            },
            {
                topic: "Patriot",
                emoji: "🕷️🕸️",
                question: "What does John express through?",
                options: [
                    "Paintings",
                    "Folk songs",
                    "Poetry"
                ],
                correct: 1
            },
            {
                topic: "Poetry",
                emoji: "⚔️🛡️",
                question: "What country is the film Poetry from?",
                options: [
                    "Japan",
                    "South Korea",
                    "China"
                ],
                correct: 1
            },
            {
                topic: "Station Eleven",
                emoji: "💎🏝️",
                question: "What does the troupe perform?",
                options: [
                    "Music",
                    "Shakespeare",
                    "Opera"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "The Master",
                emoji: "🐉⚡",
                question: "Who plays Lancaster Dodd?",
                options: [
                    "Philip Seymour Hoffman",
                    "Joaquin Phoenix",
                    "Daniel Day-Lewis",
                    "Tom Cruise"
                ],
                correct: 0
            },
            {
                topic: "I May Destroy You",
                emoji: "🤖🔧",
                question: "Who created I May Destroy You?",
                options: [
                    "Phoebe Waller-Bridge",
                    "Michaela Coel",
                    "Issa Rae",
                    "Lena Waithe"
                ],
                correct: 1
            },
            {
                topic: "Stalker",
                emoji: "🏴‍☠️⚓",
                question: "Who directed Stalker?",
                options: [
                    "Andrei Tarkovsky",
                    "Sergei Eisenstein",
                    "Elem Klimov",
                    "Aleksei German"
                ],
                correct: 0
            },
            {
                topic: "Gomorrah",
                emoji: "👻👽",
                question: "What criminal organization is depicted?",
                options: [
                    "Mafia",
                    "Camorra",
                    "'Ndrangheta",
                    "Sacra Corona Unita"
                ],
                correct: 1
            },
            {
                topic: "The Celebration",
                emoji: "🔫💥",
                question: "What filmmaking movement is it part of?",
                options: [
                    "Dogme 95",
                    "French New Wave",
                    "Italian Neorealism",
                    "Cinema Novo"
                ],
                correct: 0
            },
            {
                topic: "Enlightened",
                emoji: "🎩🎪",
                question: "Who created Enlightened?",
                options: [
                    "Laura Dern",
                    "Mike White",
                    "Both A and B",
                    "Amy Sherman-Palladino"
                ],
                correct: 2
            },
            {
                topic: "Uncle Boonmee",
                emoji: "🌹💔",
                question: "Who directed this Palme d'Or winner?",
                options: [
                    "Apichatpong Weerasethakul",
                    "Wong Kar-wai",
                    "Hirokazu Kore-eda",
                    "Jafar Panahi"
                ],
                correct: 0
            },
            {
                topic: "The Bureau",
                emoji: "🎸🎤",
                question: "What agency is The Bureau about?",
                options: [
                    "MI6",
                    "CIA",
                    "DGSE",
                    "Mossad"
                ],
                correct: 2
            },
            {
                topic: "Winter Sleep",
                emoji: "🏃💨",
                question: "How long is Winter Sleep?",
                options: [
                    "2 hours",
                    "2.5 hours",
                    "3 hours",
                    "3.5 hours"
                ],
                correct: 3
            },
            {
                topic: "Engrenages",
                emoji: "🎯🎲",
                question: "What is Engrenages called in English?",
                options: [
                    "Spiral",
                    "The Mechanism",
                    "Locked Up",
                    "The Bridge"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Late Spring",
                emoji: "🎰🃏",
                question: "Who directed Late Spring?",
                answer: "Yasujirō Ozu"
            },
            {
                topic: "State of Play",
                emoji: "🏎️💨",
                question: "What is the main character's profession?",
                answer: "Journalist or Reporter"
            },
            {
                topic: "Contempt",
                emoji: "🚁✈️",
                question: "Who directed Contempt (Le Mépris)?",
                answer: "Jean-Luc Godard"
            },
            {
                topic: "The Thick of It",
                emoji: "🦇🌃",
                question: "What is Malcolm Tucker's job title?",
                answer: "Director of Communications"
            },
            {
                topic: "Ugetsu",
                emoji: "👮🔍",
                question: "Who directed Ugetsu?",
                answer: "Kenji Mizoguchi"
            },
            {
                topic: "Traffik",
                emoji: "💰💵",
                question: "What year was the original Traffik series?",
                answer: "1989"
            },
            {
                topic: "The Night of the Hunter",
                emoji: "🎭😂",
                question: "What words are tattooed on the preacher's knuckles?",
                answer: "LOVE and HATE"
            },
            {
                topic: "Our Friends in the North",
                emoji: "🎪🤡",
                question: "How many decades does the series span?",
                answer: "3 or Three"
            },
            {
                topic: "Chimes at Midnight",
                emoji: "🎬📹",
                question: "Who directed Chimes at Midnight?",
                answer: "Orson Welles"
            },
            {
                topic: "Cracker",
                emoji: "🎬🎥",
                question: "What is Fitz's profession?",
                answer: "Criminal psychologist or Forensic psychologist"
            }
        ]
    },
    7: {
        easy: [
            {
                topic: "Painting",
                emoji: "🎭🎪",
                question: "Claude Monet was an Impressionist painter.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🏆🌟",
                question: "Electric guitars need amplifiers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "👑💍",
                question: "Westminster Abbey is in London.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🦸🦹",
                question: "'Charlotte's Web' is about a spider.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🚀🌌",
                question: "Breakdancing is part of hip-hop culture.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🧙🔮",
                question: "The Liberty Bell is in Philadelphia.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🦖🦕",
                question: "'Harry Potter' films are based on books.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🕷️🕸️",
                question: "Comedy makes people laugh.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "⚔️🛡️",
                question: "The Sydney Harbour Bridge is steel.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "💎🏝️",
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
                emoji: "🐉⚡",
                question: "Who painted 'Starry Night'?",
                options: [
                    "Vincent van Gogh",
                    "Paul Gauguin"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🤖🔧",
                question: "What is the highest male singing voice?",
                options: [
                    "Tenor",
                    "Countertenor"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "🏴‍☠️⚓",
                question: "What is the tallest building in New York?",
                options: [
                    "One World Trade",
                    "Empire State"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "👻👽",
                question: "Who wrote 'The Ugly Duckling'?",
                options: [
                    "Hans Christian Andersen",
                    "Brothers Grimm"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🔫💥",
                question: "Ballet originated in Italy during the Renaissance.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🎩🎪",
                question: "Michelangelo sculpted the statue of David.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cinema",
                emoji: "🌹💔",
                question: "The first film ever made was in color.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎸🎤",
                question: "Ancient Greek theater used masks in performances.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "🏃💨",
                question: "The Eiffel Tower is made entirely of wood.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🎯🎲",
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
                emoji: "🎰🃏",
                question: "Which artist is famous for painting sunflowers?",
                options: [
                    "Claude Monet",
                    "Vincent van Gogh",
                    "Salvador Dalí"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🏎️💨",
                question: "How many symphonies did Beethoven compose?",
                options: [
                    "9",
                    "12",
                    "7"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🚁✈️",
                question: "What is the architectural style of the Taj Mahal?",
                options: [
                    "Mughal",
                    "Persian",
                    "Ottoman"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🦇🌃",
            {
                topic: "Dance",
                emoji: "👮🔍",
                question: "Who wrote 'Pride and Prejudice'?",
                options: [
                    "Charlotte Brontë",
                    "Jane Austen",
                    "Emily Dickinson"
                ],
                correct: 1
            },
                question: "How many positions are there in classical ballet?",
                options: [
                    "5",
                    "7",
                    "8"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "💰💵",
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
                emoji: "🎭😂",
                question: "Who directed 'The Godfather'?",
                options: [
                    "Martin Scorsese",
                    "Francis Ford Coppola",
                    "Steven Spielberg"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🎪🤡",
                question: "Who is considered the father of tragedy?",
                options: [
                    "Sophocles",
                    "Aeschylus",
                    "Euripides"
                ],
                correct: 1
            },
            {
                topic: "World Heritage",
                emoji: "🎬📹",
                question: "How many wonders are in the Ancient World?",
                options: [
                    "7",
                    "10",
                    "5"
                ],
                correct: 0
            },
            {
                topic: "Crafts",
                emoji: "🎬🎥",
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
                emoji: "🎭🎪",
                question: "In which year was 'The Starry Night' painted?",
                options: [
                    "1885",
                    "1889",
                    "1892",
                    "1880"
                ],
                correct: 1
            },
            {
                topic: "Music",
                emoji: "🏆🌟",
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
                topic: "Architecture",
                emoji: "👑💍",
                question: "Who designed the Sydney Opera House?",
                options: [
                    "Frank Lloyd Wright",
                    "Le Corbusier",
                    "Jørn Utzon",
                    "I.M. Pei"
                ],
                correct: 2
            },
            {
                topic: "Literature",
                emoji: "🦸🦹",
                question: "Who won the first Nobel Prize in Literature?",
                options: [
                    "Sully Prudhomme",
                    "Rabindranath Tagore",
                    "Rudyard Kipling",
                    "W.B. Yeats"
                ],
                correct: 0
            },
            {
                topic: "Dance",
                emoji: "🚀🌌",
                question: "Which dance form originated in Cuba?",
                options: [
                    "Samba",
                    "Rumba",
                    "Mambo",
                    "Salsa"
                ],
                correct: 2
            },
            {
                topic: "Sculpture",
                emoji: "🧙🔮",
                question: "What artistic period is 'The Thinker' from?",
                options: [
                    "Renaissance",
                    "Baroque",
                    "Modern",
                    "Classical"
                ],
                correct: 2
            },
            {
                topic: "Cinema",
                emoji: "🦖🦕",
                question: "Which film won the first Academy Award for Best Picture?",
                options: [
                    "Wings",
                    "The Jazz Singer",
                    "Sunrise",
                    "The Circus"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🕷️🕸️",
                question: "What is the oldest surviving play?",
                options: [
                    "Oedipus Rex",
                    "Medea",
                    "The Persians",
                    "Antigone"
                ],
                correct: 2
            },
            {
                topic: "World Heritage",
                emoji: "⚔️🛡️",
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
                emoji: "💎🏝️",
                question: "What year was the British Museum founded?",
                options: [
                    "1753",
                    "1801",
                    "1725",
                    "1789"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Painting",
                emoji: "🐉⚡",
                question: "Name the painting technique where pigments are mixed with egg yolk",
                answer: "Tempera or Egg tempera"
            },
            {
                topic: "Music",
                emoji: "🤖🔧",
                question: "What is the Italian term for a piece played with smooth, connected notes?",
                answer: "Legato"
            },
            {
                topic: "Architecture",
                emoji: "🏴‍☠️⚓",
                question: "What is the classical Greek architectural order with scroll-like ornaments?",
                answer: "Ionic or Ionic order"
            },
            {
                topic: "Literature",
                emoji: "👻👽",
                question: "What poetic form has 14 lines and follows specific rhyme schemes?",
                answer: "Sonnet"
            },
            {
                topic: "Dance",
                emoji: "🔫💥",
                question: "What is the lead female dancer in a ballet company called?",
                answer: "Prima ballerina"
            },
            {
                topic: "Sculpture",
                emoji: "🎩🎪",
                question: "What sculpting technique involves carving away material?",
                answer: "Subtractive or Carving"
            },
            {
                topic: "Cinema",
                emoji: "🌹💔",
                question: "What is the term for a single uninterrupted shot in filmmaking?",
                answer: "Long take or Sequence shot"
            },
            {
                topic: "Theater",
                emoji: "🎸🎤",
                question: "What is the Japanese traditional theater form featuring masks and dance?",
                answer: "Noh or Noh theater"
            },
            {
                topic: "Festivals",
                emoji: "🏃💨",
                question: "What is the name of the masquerade festival in Venice?",
                answer: "Carnevale or Carnival of Venice"
            },
            {
                topic: "Crafts",
                emoji: "🎯🎲",
                question: "What is the Japanese art of paper folding called?",
                answer: "Origami"
            }
        ]
    }
};

    8: {
        easy: [
            {
                topic: "Big Hero 6",
                emoji: "🎰🃏",
                question: "Baymax is a healthcare robot.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Daredevil",
                emoji: "🏎️💨",
                question: "Daredevil is blind.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "The Office",
                emoji: "🚁✈️",
                question: "Dwight Schrute is a salesman.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Predator",
                emoji: "🦇🌃",
                question: "Predator is an alien hunter.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Narcos",
                emoji: "👮🔍",
                question: "Narcos is about drug cartels.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tangled",
                emoji: "💰💵",
                question: "Rapunzel has magical hair.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Smallville",
                emoji: "🎭😂",
                question: "Smallville is about young Superman.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Venom",
                emoji: "🎪🤡",
                question: "Venom is a symbiote.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Outlander",
                emoji: "🎬📹",
                question: "Claire time travels in Outlander.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Wreck-It Ralph",
                emoji: "🎬🎥",
                question: "Ralph is a video game villain.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Moonlight",
                emoji: "🎭🎪",
                question: "How many acts is the film divided into?",
                options: [
                    "Three",
                    "Four"
                ],
                correct: 0
            },
            {
                topic: "Better Call Saul",
                emoji: "🏆🌟",
                question: "What was Jimmy's brother's name?",
                options: [
                    "Chuck",
                    "Howard"
                ],
                correct: 0
            },
            {
                topic: "Wind River",
                emoji: "👑💍",
                question: "Where is Wind River set?",
                options: [
                    "Wyoming",
                    "Montana"
                ],
                correct: 0
            },
            {
                topic: "Peaky Blinders",
                emoji: "🦸🦹",
                question: "What is Tommy Shelby's gang?",
                options: [
                    "Peaky Blinders",
                    "Shelby Company"
                ],
                correct: 0
            },
            {
                topic: "Lady Bird",
                emoji: "🚀🌌",
                question: "What city does Lady Bird want to leave?",
                options: [
                    "Sacramento",
                    "San Francisco"
                ],
                correct: 0
            },
            {
                topic: "Barry",
                emoji: "🧙🔮",
                question: "What does Barry want to become?",
                options: [
                    "Actor",
                    "Director"
                ],
                correct: 0
            },
            {
                topic: "Roma",
                emoji: "🦖🦕",
                question: "What decade is Roma set in?",
                options: [
                    "1970s",
                    "1960s"
                ],
                correct: 0
            },
            {
                topic: "The Handmaid's Tale",
                emoji: "🕷️🕸️",
                question: "What is Offred's real name?",
                options: [
                    "June",
                    "Emily"
                ],
                correct: 0
            },
            {
                topic: "Ford v Ferrari",
                emoji: "⚔️🛡️",
                question: "What race are they competing in?",
                options: [
                    "Le Mans",
                    "Monaco"
                ],
                correct: 0
            },
            {
                topic: "Succession",
                emoji: "💎🏝️",
                question: "What is the company called?",
                options: [
                    "Waystar Royco",
                    "Roy Industries"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "The Act of Killing",
                emoji: "🐉⚡",
                question: "What country is The Act of Killing about?",
                options: [
                    "Cambodia",
                    "Indonesia",
                    "Vietnam"
                ],
                correct: 1
            },
            {
                topic: "The Young Pope",
                emoji: "🤖🔧",
                question: "What is the Pope's name?",
                options: [
                    "Pius XIII",
                    "John Paul III",
                    "Benedict XVI"
                ],
                correct: 0
            },
            {
                topic: "The Florida Project",
                emoji: "🏴‍☠️⚓",
            {
                topic: "The Deuce",
                emoji: "👻👽",
                question: "What era does The Deuce depict?",
                options: [
                    "1970s-80s",
                    "1980s-90s",
                    "1960s-70s"
                ],
                correct: 0
            },
            {
                topic: "First Reformed",
                emoji: "🔫💥",
                question: "What is the priest's crisis about?",
                options: [
                    "Faith",
                    "Environmental",
                    "Both"
                ],
                correct: 2
            },
            {
                topic: "Mindhunter",
                emoji: "🎩🎪",
                question: "What decade is Season 1 set in?",
                options: [
                    "1970s",
                    "1980s",
                    "1990s"
                ],
                correct: 0
            },
            {
                topic: "The Square",
                emoji: "🌹💔",
                question: "What country is The Square from?",
                options: [
                    "Denmark",
                    "Sweden",
                    "Norway"
                ],
                correct: 1
            },
            {
                topic: "Big Little Lies",
                emoji: "🎸🎤",
                question: "Where is Big Little Lies set?",
                options: [
                    "Monterey",
                    "Malibu",
                    "Santa Barbara"
                ],
                correct: 0
            },
            {
                topic: "Shoplifters",
                emoji: "🏃💨",
                question: "What country is Shoplifters from?",
                options: [
                    "South Korea",
                    "Japan",
                    "China"
                ],
                correct: 1
            },
            {
                topic: "Succession S1",
                emoji: "🎯🎲",
                question: "What happens to Logan in episode 1?",
                options: [
                    "Heart attack",
                    "Stroke",
                    "Accident"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Close-Up",
                emoji: "🎰🃏",
                question: "Who directed Close-Up?",
                options: [
                    "Abbas Kiarostami",
                    "Asghar Farhadi",
                    "Jafar Panahi",
                    "Mohsen Makhmalbaf"
                ],
                correct: 0
            },
            {
                topic: "Olive Kitteridge",
                emoji: "🏎️💨",
                question: "Who plays Olive Kitteridge?",
                options: [
                    "Frances McDormand",
                    "Meryl Streep",
                    "Glenn Close",
                    "Diane Keaton"
                ],
                correct: 0
            },
            {
                topic: "The Assassin",
                emoji: "🚁✈️",
                question: "Who directed The Assassin?",
                options: [
                    "Hou Hsiao-hsien",
                    "Wong Kar-wai",
                    "Zhang Yimou",
                    "Ang Lee"
                ],
                correct: 0
            },
            {
                topic: "This Is England",
                emoji: "🦇🌃",
                question: "What decade is This Is England set in?",
                options: [
                    "1970s",
                    "1980s",
                    "1990s",
                    "1960s"
                ],
                correct: 1
            },
            {
                topic: "Secret Sunshine",
                emoji: "👮🔍",
                question: "Who directed Secret Sunshine?",
                options: [
                    "Lee Chang-dong",
                    "Hong Sang-soo",
                    "Kim Ki-duk",
                    "Park Chan-wook"
                ],
                correct: 0
            },
            {
                topic: "The Shadow Line",
                emoji: "💰💵",
                question: "How many episodes is The Shadow Line?",
                options: [
                    "5",
                    "6",
                    "7",
                    "8"
                ],
                correct: 2
            },
            {
                topic: "Silent Light",
                emoji: "🎭😂",
                question: "What country is Silent Light from?",
                options: [
                    "Argentina",
                    "Mexico",
                    "Brazil",
                    "Colombia"
                ],
                correct: 1
            },
            {
                topic: "Southcliffe",
                emoji: "🎪🤡",
                question: "How many episodes is Southcliffe?",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correct: 1
            },
            {
                topic: "4 Months, 3 Weeks and 2 Days",
                emoji: "🎬📹",
            {
                topic: "The Bureau S1",
                emoji: "🎬🎥",
        ],
        extreme: [
            {
                topic: "The Rules of the Game",
                emoji: "🎭🎪",
                question: "Who directed The Rules of the Game?",
                answer: "Jean Renoir"
            },
            {
                topic: "Our Mutual Friend",
                emoji: "🏆🌟",
                question: "Who wrote Our Mutual Friend?",
                answer: "Charles Dickens"
            },
            {
                topic: "The Ascent",
                emoji: "👑💍",
                question: "Who directed The Ascent?",
                answer: "Larisa Shepitko"
            },
            {
                topic: "Jewel in the Crown",
                emoji: "🦸🦹",
                question: "How many episodes is The Jewel in the Crown?",
                answer: "14"
            },
            {
                topic: "Ordet",
                emoji: "🚀🌌",
                question: "Who directed Ordet (The Word)?",
                answer: "Carl Theodor Dreyer"
            },
            {
                topic: "Heimat",
                emoji: "🧙🔮",
                question: "Who directed the Heimat trilogy?",
                answer: "Edgar Reitz"
            },
            {
                topic: "Closely Watched Trains",
                emoji: "🦖🦕",
            {
                topic: "The Singing Detective",
                emoji: "🕷️🕸️",
                question: "How many episodes is The Singing Detective?",
                answer: "6"
            },
            {
                topic: "Trouble in Paradise",
                emoji: "⚔️🛡️",
                question: "Who directed Trouble in Paradise?",
                answer: "Ernst Lubitsch"
            },
            {
                topic: "The Forsyte Saga",
                emoji: "💎🏝️",
                question: "What year was the original BBC adaptation?",
                answer: "1967"
            }
        ]
    },
    9: {
        easy: [
            {
                topic: "Zootopia",
                emoji: "🐉⚡",
                question: "Judy Hopps wants to be a police officer.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Luke Cage",
                emoji: "🤖🔧",
                question: "Luke Cage has unbreakable skin.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Frasier",
                emoji: "🏴‍☠️⚓",
                question: "Frasier Crane is a psychiatrist.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "RoboCop",
                emoji: "👻👽",
                question: "RoboCop is part human.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "The Crown",
                emoji: "🔫💥",
                question: "The Crown follows Queen Elizabeth II's reign.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Hercules",
                emoji: "🎩🎪",
                question: "Hercules is a Greek demigod.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The 100",
                emoji: "🌹💔",
                question: "The 100 is set in a post-apocalyptic world.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Joker",
                emoji: "🎸🎤",
                question: "The Joker becomes a villain.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Westworld",
                emoji: "🏃💨",
                question: "Westworld features android hosts.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Big Hero 6",
                emoji: "🎯🎲",
                question: "Hiro builds Baymax.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Spotlight",
                emoji: "🎰🃏",
                question: "What newspaper is featured?",
                options: [
                    "Boston Globe",
                    "New York Times"
                ],
                correct: 0
            },
            {
                topic: "Deadwood",
                emoji: "🏎️💨",
            {
                topic: "Hell or High Water",
                emoji: "🚁✈️",
                question: "What are the brothers robbing?",
                options: [
                    "Banks",
                    "Stores"
                ],
                correct: 0
            },
            {
                topic: "The Leftovers",
                emoji: "🦇🌃",
                question: "What percentage of people vanished?",
                options: [
                    "2%",
                    "5%"
                ],
                correct: 0
            },
            {
                topic: "Nightcrawler",
                emoji: "👮🔍",
                question: "What does Lou film?",
                options: [
                    "Crime scenes",
                    "Celebrities"
                ],
                correct: 0
            },
            {
                topic: "Fargo",
                emoji: "💰💵",
                question: "Is each season connected?",
                options: [
                    "No, anthology",
                    "Yes, sequel"
                ],
                correct: 0
            },
            {
                topic: "Ex Machina",
                emoji: "🎭😂",
                question: "What test is performed?",
                options: [
                    "Turing test",
                    "IQ test"
                ],
                correct: 0
            },
            {
                topic: "Penny Dreadful",
                emoji: "🎪🤡",
                question: "What era is it set in?",
                options: [
                    "Victorian",
                    "Edwardian"
                ],
                correct: 0
            },
            {
                topic: "Whiplash",
                emoji: "🎬📹",
                question: "What does Andrew want to be?",
                options: [
                    "Great drummer",
                    "Famous"
                ],
                correct: 0
            },
            {
                topic: "Mindhunter",
                emoji: "🎬🎥",
                question: "What unit do they work for?",
                options: [
                    "FBI",
                    "Police"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Holy Motors",
                emoji: "🎭🎪",
                question: "Who directed Holy Motors?",
                options: [
                    "Leos Carax",
                    "Jean-Luc Godard",
                    "Jacques Audiard"
                ],
                correct: 0
            },
            {
                topic: "Rectify",
                emoji: "🏆🌟",
                question: "What is Daniel Holden's situation?",
                options: [
                    "Released from death row",
                    "Pardoned",
                    "Escaped"
                ],
                correct: 0
            },
            {
                topic: "Under the Skin",
                emoji: "👑💍",
                question: "Who directed Under the Skin?",
                options: [
                    "Jonathan Glazer",
                    "Nicolas Winding Refn",
                    "Shane Carruth"
                ],
                correct: 0
            },
            {
                topic: "The Knick",
                emoji: "🦸🦹",
                question: "Who directed The Knick?",
                options: [
                    "David Fincher",
                    "Steven Soderbergh",
                    "Paul Thomas Anderson"
                ],
                correct: 1
            },
            {
                topic: "A Girl Walks Home Alone at Night",
                emoji: "🚀🌌",
                question: "What language is the film in?",
                options: [
                    "Arabic",
                    "Persian",
                    "Turkish"
                ],
                correct: 1
            },
            {
                topic: "Top of the Lake",
                emoji: "🧙🔮",
                question: "Where is Season 1 set?",
                options: [
                    "Australia",
                    "New Zealand",
                    "Scotland"
                ],
                correct: 1
            },
            {
                topic: "It Follows",
                emoji: "🦖🦕",
                question: "What is following the protagonist?",
                options: [
                    "Demon",
                    "Curse",
                    "Ghost"
                ],
                correct: 1
            },
            {
                topic: "The Americans S1",
                emoji: "🕷️🕸️",
                question: "What decade is Season 1 set?",
                options: [
                    "1970s",
                    "1980s",
                    "1990s"
                ],
                correct: 1
            },
            {
                topic: "The Lobster",
                emoji: "⚔️🛡️",
                question: "What happens if you don't find a partner?",
                options: [
                    "Turned into animal",
                    "Exiled",
                    "Imprisoned"
                ],
                correct: 0
            },
            {
                topic: "Halt and Catch Fire S1",
                emoji: "💎🏝️",
                question: "What are they trying to build?",
                options: [
                    "Computer",
                    "Software",
                    "Console"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Marketa Lazarová",
                emoji: "🐉⚡",
                question: "Who directed Marketa Lazarová?",
                options: [
                    "František Vláčil",
                    "Jiří Menzel",
                    "Miloš Forman",
                    "Jan Švankmajer"
                ],
                correct: 0
            },
            {
                topic: "Carlos",
                emoji: "🤖🔧",
                question: "How long is the full Carlos?",
                options: [
                    "4.5 hours",
                    "5.5 hours",
                    "6 hours",
                    "3.5 hours"
                ],
                correct: 1
            },
            {
                topic: "Werckmeister Harmonies",
                emoji: "🏴‍☠️⚓",
                question: "Who directed Werckmeister Harmonies?",
                options: [
                    "Béla Tarr",
                    "Miklós Jancsó",
                    "István Szabó",
                    "Kornél Mundruczó"
                ],
                correct: 0
            },
            {
                topic: "Fortitude",
                emoji: "👻👽",
                question: "Where is Fortitude set?",
                options: [
                    "Arctic Norway",
                    "Iceland",
                    "Greenland",
                    "Alaska"
                ],
                correct: 0
            },
            {
                topic: "Tropical Malady",
                emoji: "🔫💥",
                question: "Who directed Tropical Malady?",
                options: [
                    "Apichatpong Weerasethakul",
                    "Pen-Ek Ratanaruang",
                    "Wisit Sasanatieng",
                    "Anocha Suwichakornpong"
                ],
                correct: 0
            },
            {
                topic: "The Affair",
                emoji: "🎩🎪",
                question: "How is The Affair's narrative told?",
                options: [
                    "Linear",
                    "Multiple perspectives",
                    "Flashback",
                    "Reverse chronology"
                ],
                correct: 1
            },
            {
                topic: "The Turin Horse",
                emoji: "🌹💔",
                question: "Who directed The Turin Horse?",
                options: [
                    "Béla Tarr",
                    "Andrei Tarkovsky",
                    "Theo Angelopoulos",
                    "Aleksandr Sokurov"
                ],
                correct: 0
            },
            {
                topic: "Broadchurch",
                emoji: "🎸🎤",
                question: "What country is Broadchurch from?",
                options: [
                    "UK",
                    "Ireland",
                    "Australia",
                    "New Zealand"
                ],
                correct: 0
            },
            {
                topic: "The Great Beauty",
                emoji: "🏃💨",
                question: "Who directed The Great Beauty?",
                options: [
                    "Paolo Sorrentino",
                    "Nanni Moretti",
                    "Matteo Garrone",
                    "Marco Bellocchio"
                ],
                correct: 0
            },
            {
                topic: "Utopia",
                emoji: "🎯🎲",
                question: "What are they searching for in Utopia?",
                options: [
                    "Manuscript",
                    "Painting",
                    "Book",
                    "Film"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Jeanne Dielman",
                emoji: "🎰🃏",
                question: "Who directed Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles?",
                answer: "Chantal Akerman"
            },
            {
                topic: "Fortunes of War",
                emoji: "🏎️💨",
                question: "Who wrote the novels Fortunes of War is based on?",
                answer: "Olivia Manning"
            },
            {
                topic: "Germany Year Zero",
                emoji: "🚁✈️",
                question: "Who directed Germany Year Zero?",
                answer: "Roberto Rossellini"
            },
            {
                topic: "The Singing Detective",
                emoji: "🦇🌃",
                question: "What decade is The Singing Detective set in?",
                answer: "1940s or 1945"
            },
            {
                topic: "Vampyr",
                emoji: "👮🔍",
                question: "Who directed Vampyr?",
                answer: "Carl Theodor Dreyer"
            },
            {
                topic: "House of Cards UK",
                emoji: "💰💵",
                question: "What is Francis Urquhart's catchphrase?",
                answer: "You might very well think that; I couldn't possibly comment"
            },
            {
                topic: "Man with a Movie Camera",
                emoji: "🎭😂",
                question: "Who directed Man with a Movie Camera?",
                answer: "Dziga Vertov"
            },
            {
                topic: "Smiley's People",
                emoji: "🎪🤡",
                question: "Who plays George Smiley in Smiley's People?",
                answer: "Alec Guinness"
            },
            {
                topic: "Playtime",
                emoji: "🎬📹",
                question: "Who directed Playtime?",
                answer: "Jacques Tati"
            },
            {
                topic: "Pennies from Heaven",
                emoji: "🎬🎥",
                question: "Who wrote Pennies from Heaven?",
                answer: "Dennis Potter"
            }
        ]
    },
const artCultureChapter10 = {
    10: {
        easy: [
            {
                topic: "Painting",
                emoji: "🎭🎪",
                question: "Leonardo da Vinci was a Renaissance artist.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🏆🌟",
                question: "Beethoven continued composing after becoming deaf.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Architecture",
                emoji: "👑💍",
                question: "The Sistine Chapel is in Vatican City.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Literature",
                emoji: "🦸🦹",
                question: "Mary Shelley wrote 'Frankenstein'.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Dance",
                emoji: "🚀🌌",
                question: "Australia has indigenous dance traditions.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🧙🔮",
                question: "The Parthenon Marbles are in the British Museum.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🦖🦕",
                question: "Westerns are set in the American Old West.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Theater",
                emoji: "🕷️🕸️",
                question: "An understudy replaces the main actor when needed.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Monuments",
                emoji: "⚔️🛡️",
                question: "Christ the Redeemer is in Rio de Janeiro.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "💎🏝️",
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
                emoji: "🐉⚡",
            {
                topic: "Music",
                emoji: "🤖🔧",
                question: "What is a musical composition for two performers?",
                options: [
                    "Duet",
                    "Solo"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🏴‍☠️⚓",
                question: "What is the famous Russian palace outside St. Petersburg?",
                options: [
                    "Winter Palace",
                    "Peterhof"
                ],
                correct: 1
            },
            {
                topic: "Literature",
                emoji: "👻👽",
            {
                topic: "Dance",
                emoji: "🔫💥",
                question: "What is Brazil's national dance?",
                options: [
                    "Salsa",
                    "Samba"
                ],
                correct: 1
            },
            {
                topic: "Sculpture",
                emoji: "🎩🎪",
                question: "What is clay sculpture that is fired in a kiln?",
                options: [
                    "Ceramic",
                    "Bronze"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🌹💔",
                question: "What is India's top film award?",
                options: [
                    "National Film Award",
                    "Filmfare Award"
                ],
                correct: 0
            },
            {
                topic: "Theater",
                emoji: "🎸🎤",
                question: "What musical features 'Tomorrow'?",
                options: [
                    "Annie",
                    "Oliver!"
                ],
                correct: 0
            },
            {
                topic: "Festivals",
                emoji: "🏃💨",
                question: "What is the famous Brazilian carnival city?",
                options: [
                    "Salvador",
                    "Rio de Janeiro"
                ],
                correct: 1
            },
            {
                topic: "Museums",
                emoji: "🎯🎲",
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
                emoji: "🎰🃏",
                question: "Which artist painted 'The Card Players'?",
                options: [
                    "Paul Cézanne",
                    "Edgar Degas",
                    "Henri Matisse"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🏎️💨",
                question: "Which composer wrote 'The Rite of Spring'?",
                options: [
                    "Igor Stravinsky",
                    "Sergei Prokofiev",
                    "Dmitri Shostakovich"
                ],
                correct: 0
            },
            {
                topic: "Architecture",
                emoji: "🚁✈️",
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
                emoji: "🦇🌃",
            {
                topic: "Dance",
                emoji: "👮🔍",
                question: "What is the Spanish flamenco hand movement called?",
                options: [
                    "Palmas",
                    "Zapateado",
                    "Braceo"
                ],
                correct: 2
            },
            {
                topic: "Sculpture",
                emoji: "💰💵",
                question: "What artist created 'Cloud Gate' in Chicago?",
                options: [
                    "Anish Kapoor",
                    "Jeff Koons",
                    "Damien Hirst"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🎭😂",
            {
                topic: "Theater",
                emoji: "🎪🤡",
                question: "What is Chinese traditional opera?",
                options: [
                    "Peking Opera",
                    "Kabuki",
                    "Noh"
                ],
                correct: 0
            },
            {
                topic: "World Heritage",
                emoji: "🎬📹",
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
                emoji: "🎬🎥",
                question: "What is Japanese decorative metal inlay?",
                options: [
                    "Zogan",
                    "Raku",
                    "Shibori"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Painting",
                emoji: "🎭🎪",
                question: "Which artist founded the Precisionism movement?",
                options: [
                    "Charles Demuth",
                    "Georgia O'Keeffe",
                    "Edward Hopper",
                    "Charles Sheeler"
                ],
                correct: 0
            },
            {
                topic: "Music",
                emoji: "🏆🌟",
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
                emoji: "👑💍",
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
                emoji: "🦸🦹",
            {
                topic: "Dance",
                emoji: "🚀🌌",
                question: "Who choreographed 'West Side Story'?",
                options: [
                    "Jerome Robbins",
                    "Bob Fosse",
                    "Michael Bennett",
                    "Twyla Tharp"
                ],
                correct: 0
            },
            {
                topic: "Sculpture",
                emoji: "🧙🔮",
                question: "Who created 'The Kiss' sculpture?",
                options: [
                    "Auguste Rodin",
                    "Constantin Brâncuși",
                    "Antoine Bourdelle",
                    "Camille Claudel"
                ],
                correct: 0
            },
            {
                topic: "Cinema",
                emoji: "🦖🦕",
            {
                topic: "Theater",
                emoji: "🕷️🕸️",
            {
                topic: "World Heritage",
                emoji: "⚔️🛡️",
                question: "What is Japan's ancient wooden temple?",
                options: [
                    "Hōryū-ji",
                    "Tōdai-ji",
                    "Kiyomizu-dera",
                    "Kinkaku-ji"
                ],
                correct: 0
            },
            {
                topic: "Museums",
                emoji: "💎🏝️",
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
                emoji: "🐉⚡",
                question: "What is painting technique using small dots of color?",
                answer: "Pointillism or Divisionism"
            },
            {
                topic: "Music",
                emoji: "🤖🔧",
                question: "What is the term for a sudden loud accent?",
                answer: "Sforzando"
            },
            {
                topic: "Architecture",
                emoji: "🏴‍☠️⚓",
                question: "What is a circular window in Gothic architecture?",
                answer: "Rose window or Rosette"
            },
            {
                topic: "Literature",
                emoji: "👻👽",
                question: "What is repetition at the beginning of successive clauses?",
                answer: "Anaphora"
            },
            {
                topic: "Dance",
                emoji: "🔫💥",
                question: "What is a spinning jump in ballet?",
                answer: "Tour en l'air"
            },
            {
                topic: "Sculpture",
                emoji: "🎩🎪",
                question: "What is sculpture technique using molten metal?",
                answer: "Casting or Lost-wax casting"
            },
            {
                topic: "Cinema",
                emoji: "🌹💔",
                question: "What is a shot following a moving subject?",
                answer: "Tracking shot or Dolly shot"
            },
            {
                topic: "Theater",
                emoji: "🎸🎤",
                question: "What is traditional Cambodian dance drama?",
                answer: "Lkhon or Khmer dance"
            },
            {
                topic: "Festivals",
                emoji: "🏃💨",
                question: "What is Mexico's Day of the Dead?",
                answer: "Día de Muertos"
            },
            {
                topic: "Crafts",
                emoji: "🎯🎲",
                question: "What is counted thread embroidery?",
                answer: "Cross-stitch or Counted work"
            }
        ]
    }
};
    11: {
        easy: [
            {
                topic: "The Little Mermaid",
                emoji: "🎰🃏",
                question: "Ariel trades her voice for legs.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Iron Fist",
                emoji: "🏎️💨",
                question: "Danny Rand has a powerful fist.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "M*A*S*H",
                emoji: "🚁✈️",
                question: "M*A*S*H is set during the Korean War.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Blade",
                emoji: "🦇🌃",
                question: "Blade is a vampire hunter.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Homeland",
                emoji: "👮🔍",
                question: "Carrie Mathison is a CIA officer.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tarzan",
                emoji: "💰💵",
                question: "Tarzan was raised by gorillas.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Gotham",
                emoji: "🎭😂",
                question: "Gotham is about young Bruce Wayne.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Suicide Squad",
                emoji: "🎪🤡",
                question: "Suicide Squad is a team of villains.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Umbrella Academy",
                emoji: "🎬📹",
                question: "The siblings have superpowers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "How to Train Your Dragon",
                emoji: "🎬🎥",
                question: "Hiccup befriends a dragon.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "The Lobster",
                emoji: "🎭🎪",
                question: "Who directed The Lobster?",
                options: [
                    "Yorgos Lanthimos",
                    "Ruben Östlund"
                ],
                correct: 0
            },
            {
                topic: "Justified",
                emoji: "🏆🌟",
                question: "What is Raylan's hometown?",
                options: [
                    "Harlan",
                    "Lexington"
                ],
                correct: 0
            },
            {
                topic: "Sicario",
                emoji: "👑💍",
                question: "Who directed Sicario?",
                options: [
                    "Denis Villeneuve",
                    "Taylor Sheridan"
                ],
                correct: 0
            },
            {
                topic: "Black Mirror",
                emoji: "🦸🦹",
                question: "What type of series is Black Mirror?",
                options: [
                    "Anthology",
                    "Serial"
                ],
                correct: 0
            },
            {
                topic: "Brooklyn Nine-Nine",
                emoji: "🚀🌌",
                question: "What precinct do they work at?",
                options: [
                    "99th",
                    "88th"
                ],
                correct: 0
            },
            {
                topic: "Killing Eve",
                emoji: "🧙🔮",
                question: "What is Villanelle's profession?",
                options: [
                    "Spy",
                    "Assassin"
                ],
                correct: 1
            },
            {
                topic: "Nightcrawler",
                emoji: "🦖🦕",
                question: "What city is it set in?",
                options: [
                    "Los Angeles",
                    "New York"
                ],
                correct: 0
            },
            {
                topic: "Ozark",
                emoji: "🕷️🕸️",
                question: "What is Marty's profession?",
                options: [
                    "Financial advisor",
                    "Accountant"
                ],
                correct: 0
            },
            {
                topic: "A Quiet Place",
                emoji: "⚔️🛡️",
                question: "What attracts the creatures?",
                options: [
                    "Sound",
                    "Light"
                ],
                correct: 0
            },
            {
                topic: "Better Call Saul",
                emoji: "💎🏝️",
                question: "What is Kim's profession?",
                options: [
                    "Lawyer",
                    "Judge"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Mysteries of Lisbon",
                emoji: "🐉⚡",
                question: "How long is Mysteries of Lisbon?",
                options: [
                    "3.5 hours",
                    "4.5 hours",
                    "5 hours"
                ],
                correct: 1
            },
            {
                topic: "Peaky Blinders",
                emoji: "🤖🔧",
                question: "What year does Season 1 start?",
                options: [
                    "1919",
                    "1920",
                    "1921"
                ],
                correct: 0
            },
            {
                topic: "Certified Copy",
                emoji: "🏴‍☠️⚓",
                question: "What is the film's central theme?",
                options: [
                    "Identity",
                    "Authenticity",
                    "Memory"
                ],
                correct: 1
            },
            {
                topic: "Line of Duty",
                emoji: "👻👽",
                question: "What unit investigates corrupt officers?",
                options: [
                    "AC-12",
                    "AC-9",
                    "CID"
                ],
                correct: 0
            },
            {
                topic: "Essential Killing",
                emoji: "🔫💥",
                question: "How much dialogue is in the film?",
                options: [
                    "Very little",
                    "Normal amount",
                    "Excessive"
                ],
                correct: 0
            },
            {
                topic: "Bloodline",
                emoji: "🎩🎪",
                question: "Where is Bloodline set?",
                options: [
                    "Florida Keys",
                    "California",
                    "Hawaii"
                ],
                correct: 0
            },
            {
                topic: "Post Tenebras Lux",
                emoji: "🌹💔",
                question: "Who directed Post Tenebras Lux?",
                options: [
                    "Amat Escalante",
                    "Carlos Reygadas",
                    "Alejandro González Iñárritu"
                ],
                correct: 1
            },
            {
                topic: "Quarry",
                emoji: "🎸🎤",
                question: "What decade is Quarry set in?",
                options: [
                    "1960s",
                    "1970s",
                    "1980s"
                ],
                correct: 1
            },
            {
                topic: "Knight of Cups",
                emoji: "🏃💨",
                question: "Who directed Knight of Cups?",
                options: [
                    "Paul Thomas Anderson",
                    "Terrence Malick",
                    "Darren Aronofsky"
                ],
                correct: 1
            },
            {
                topic: "Banshee",
                emoji: "🎯🎲",
                question: "What does Lucas Hood steal?",
                options: [
                    "Money",
                    "Sheriff identity",
                    "Diamonds"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Shoah",
                emoji: "🎰🃏",
                question: "How long is Shoah?",
                options: [
                    "7 hours",
                    "8.5 hours",
                    "9.5 hours",
                    "10 hours"
                ],
                correct: 2
            },
            {
                topic: "Wallander",
                emoji: "🏎️💨",
                question: "What country is Kurt Wallander from?",
                options: [
                    "Norway",
                    "Sweden",
                    "Denmark",
                    "Finland"
                ],
                correct: 1
            },
            {
                topic: "Inland Empire",
                emoji: "🚁✈️",
                question: "Who directed Inland Empire?",
                options: [
                    "David Lynch",
                    "David Cronenberg",
                    "Darren Aronofsky",
                    "Terry Gilliam"
                ],
                correct: 0
            },
            {
                topic: "Occupied",
                emoji: "🦇🌃",
                question: "What country occupies Norway in the series?",
                options: [
                    "Russia",
                    "Germany",
                    "China",
                    "USA"
                ],
                correct: 0
            },
            {
                topic: "Uncle Boonmee",
                emoji: "👮🔍",
                question: "What award did Uncle Boonmee win?",
                options: [
                    "Golden Lion",
                    "Palme d'Or",
                    "Golden Bear",
                    "Grand Prix"
                ],
                correct: 1
            },
            {
                topic: "The Tunnel",
                emoji: "💰💵",
                question: "Which countries does the tunnel connect?",
                options: [
                    "UK-France",
                    "Spain-France",
                    "Italy-France",
                    "Germany-France"
                ],
                correct: 0
            },
            {
                topic: "The Color of Pomegranates",
                emoji: "🎭😂",
                question: "Who directed The Color of Pomegranates?",
                options: [
                    "Sergei Parajanov",
                    "Andrei Tarkovsky",
                    "Aleksandr Sokurov",
                    "Elem Klimov"
                ],
                correct: 0
            },
            {
                topic: "Engrenages",
                emoji: "🎪🤡",
                question: "What is Laure Berthaud's job?",
                options: [
                    "Detective",
                    "Prosecutor",
                    "Lawyer",
                    "Judge"
                ],
                correct: 0
            },
            {
                topic: "The Holy Mountain",
                emoji: "🎬📹",
                question: "Who directed The Holy Mountain?",
                options: [
                    "Alejandro Jodorowsky",
                    "Luis Buñuel",
                    "Fernando Arrabal",
                    "Carlos Saura"
                ],
                correct: 0
            },
            {
                topic: "Borgen",
                emoji: "🎬🎥",
                question: "How many seasons does Borgen have?",
                options: [
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                correct: 2
            }
        ],
        extreme: [
            {
                topic: "The Magnificent Ambersons",
                emoji: "🎭🎪",
                question: "Who directed The Magnificent Ambersons?",
                answer: "Orson Welles"
            },
            {
                topic: "State of Play",
                emoji: "🏆🌟",
                question: "How many episodes is the original State of Play?",
                answer: "6"
            },
            {
                topic: "The Passion of Joan of Arc",
                emoji: "👑💍",
                question: "Who directed The Passion of Joan of Arc?",
                answer: "Carl Theodor Dreyer"
            },
            {
                topic: "Cracker",
                emoji: "🦸🦹",
                question: "What is Dr. Fitz's full first name?",
                answer: "Edward or Eddie"
            },
            {
                topic: "Sunrise",
                emoji: "🚀🌌",
                question: "Who directed Sunrise: A Song of Two Humans?",
                answer: "F.W. Murnau"
            },
            {
                topic: "Our Friends in the North",
                emoji: "🧙🔮",
                question: "What city are the friends from?",
                answer: "Newcastle"
            },
            {
                topic: "The General",
                emoji: "🦖🦕",
                question: "Who directed and starred in The General?",
                answer: "Buster Keaton"
            },
            {
                topic: "Edge of Darkness",
                emoji: "🕷️🕸️",
                question: "What is Craven's daughter involved with?",
                answer: "Nuclear conspiracy"
            },
            {
                topic: "City Lights",
                emoji: "⚔️🛡️",
                question: "Who directed City Lights?",
                answer: "Charlie Chaplin"
            },
            {
                topic: "The Singing Detective",
                emoji: "💎🏝️",
                question: "Who composed the music for The Singing Detective?",
                answer: "Various 1940s songs or Popular songs from the 1930s-40s"
            }
        ]
    },
    12: {
        easy: [
            {
                topic: "Atlantis",
                emoji: "🐉⚡",
                question: "Atlantis is a lost underwater city.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "The Punisher",
                emoji: "🤖🔧",
                question: "Frank Castle becomes The Punisher.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "All in the Family",
                emoji: "🏴‍☠️⚓",
                question: "All in the Family addressed social issues.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Fifth Element",
                emoji: "👻👽",
                question: "The Fifth Element is set in the future.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Person of Interest",
                emoji: "🔫💥",
                question: "The Machine predicts crimes.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sleeping Beauty",
                emoji: "🎩🎪",
                question: "Aurora falls into a deep sleep.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Agents of S.H.I.E.L.D.",
                emoji: "🌹💔",
                question: "S.H.I.E.L.D. is a spy organization.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Birds of Prey",
                emoji: "🎸🎤",
                question: "Harley Quinn leads Birds of Prey.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Witcher",
                emoji: "🏃💨",
                question: "Ciri has special powers.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Despicable Me",
                emoji: "🎯🎲",
                question: "Gru adopts three girls.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Phantom Thread",
                emoji: "🎰🃏",
                question: "What is Reynolds' profession?",
                options: [
                    "Couturier",
                    "Tailor"
                ],
                correct: 0
            },
            {
                topic: "The Shield",
                emoji: "🏎️💨",
                question: "What is the team called?",
                options: [
                    "Strike Team",
                    "SWAT"
                ],
                correct: 0
            },
            {
                topic: "Wind River",
                emoji: "🚁✈️",
                question: "What is Cory's profession?",
                options: [
                    "Tracker",
                    "Sheriff"
                ],
                correct: 0
            },
            {
                topic: "Mare of Easttown",
                emoji: "🦇🌃",
                question: "What is Mare's job?",
                options: [
                    "Detective",
                    "FBI Agent"
                ],
                correct: 0
            },
            {
                topic: "Dunkirk",
                emoji: "👮🔍",
                question: "Who directed Dunkirk?",
                options: [
                    "Christopher Nolan",
                    "Steven Spielberg"
                ],
                correct: 0
            },
            {
                topic: "Gomorrah",
                emoji: "💰💵",
                question: "Where is Gomorrah set?",
                options: [
                    "Naples",
                    "Rome"
                ],
                correct: 0
            },
            {
                topic: "Arrival",
                emoji: "🎭😂",
                question: "Who directed Arrival?",
                options: [
                    "Denis Villeneuve",
                    "Alex Garland"
                ],
                correct: 0
            },
            {
                topic: "Halt and Catch Fire",
                emoji: "🎪🤡",
                question: "What industry is it about?",
                options: [
                    "Computers",
                    "Finance"
                ],
                correct: 0
            },
            {
                topic: "Paterson",
                emoji: "🎬📹",
                question: "What is Paterson's job?",
                options: [
                    "Bus driver",
                    "Poet"
                ],
                correct: 0
            },
            {
                topic: "The OA",
                emoji: "🎬🎥",
                question: "What is Prairie's ability?",
                options: [
                    "Dimension jumping",
                    "Time travel"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "The Ascent",
                emoji: "🎭🎪",
                question: "What war is The Ascent set during?",
                options: [
                    "World War I",
                    "World War II",
                    "Cold War"
                ],
                correct: 1
            },
            {
                topic: "The Young Pope",
                emoji: "🏆🌟",
                question: "Who created The Young Pope?",
                options: [
                    "Paolo Sorrentino",
                    "Matteo Garrone",
                    "Luca Guadagnino"
                ],
                correct: 0
            },
            {
                topic: "The Assassin",
                emoji: "👑💍",
                question: "What dynasty is The Assassin set in?",
                options: [
                    "Ming",
                    "Tang",
                    "Qing"
                ],
                correct: 1
            },
            {
                topic: "Deutschland 83",
                emoji: "🦸🦹",
                question: "Which side is Martin from?",
                options: [
                    "East Germany",
                    "West Germany",
                    "Both"
                ],
                correct: 0
            },
            {
                topic: "Tales of the Unexpected",
                emoji: "🚀🌌",
                question: "Who wrote many of the stories?",
                options: [
                    "Roald Dahl",
                    "Alfred Hitchcock",
                    "Ray Bradbury"
                ],
                correct: 0
            },
            {
                topic: "The Innocents",
                emoji: "🧙🔮",
                question: "What is Anna's profession?",
                options: [
                    "Teacher",
                    "Governess",
                    "Nanny"
                ],
                correct: 1
            },
            {
                topic: "A Ghost Story",
                emoji: "🦖🦕",
                question: "How is the ghost depicted?",
                options: [
                    "Sheet with eyeholes",
                    "Transparent figure",
                    "Shadow"
                ],
                correct: 0
            },
            {
                topic: "Deadwood",
                emoji: "🕷️🕸️",
                question: "How many seasons does Deadwood have?",
                options: [
                    "2",
                    "3",
                    "4"
                ],
                correct: 1
            },
            {
                topic: "Personal Shopper",
                emoji: "⚔️🛡️",
                question: "Who directed Personal Shopper?",
                options: [
                    "Olivier Assayas",
                    "François Ozon",
                    "Claire Denis"
                ],
                correct: 0
            },
            {
                topic: "Taboo",
                emoji: "💎🏝️",
                question: "What century is Taboo set in?",
                options: [
                    "18th",
                    "19th",
                    "17th"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Out 1",
                emoji: "🐉⚡",
                question: "How long is Out 1?",
                options: [
                    "10 hours",
                    "12 hours",
                    "13 hours",
                    "15 hours"
                ],
                correct: 2
            },
            {
                topic: "The Bridge",
                emoji: "🤖🔧",
                question: "Which countries does the original bridge connect?",
                options: [
                    "Denmark-Sweden",
                    "Norway-Sweden",
                    "Finland-Sweden",
                    "Germany-Denmark"
                ],
                correct: 0
            },
            {
                topic: "Nostalghia",
                emoji: "🏴‍☠️⚓",
                question: "Who directed Nostalghia?",
                options: [
                    "Andrei Tarkovsky",
                    "Aleksandr Sokurov",
                    "Elem Klimov",
                    "Sergei Parajanov"
                ],
                correct: 0
            },
            {
                topic: "The Bureau",
                emoji: "👻👽",
                question: "How many seasons does The Bureau have?",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correct: 2
            },
            {
                topic: "Mysteries of the Organism",
                emoji: "🔫💥",
                question: "Who directed WR: Mysteries of the Organism?",
                options: [
                    "Dušan Makavejev",
                    "Emir Kusturica",
                    "Goran Paskaljević",
                    "Srđan Dragojević"
                ],
                correct: 0
            },
            {
                topic: "Spiral",
                emoji: "🎩🎪",
                question: "What is the French title of Spiral?",
                options: [
                    "Engrenages",
                    "La Spirale",
                    "Le Cercle",
                    "Les Flics"
                ],
                correct: 0
            },
            {
                topic: "Fanny and Alexander",
                emoji: "🌹💔",
                question: "How long is the full version of Fanny and Alexander?",
                options: [
                    "3 hours",
                    "4 hours",
                    "5 hours",
                    "6 hours"
                ],
                correct: 2
            },
            {
                topic: "Gomorrah",
                emoji: "🎸🎤",
                question: "How many seasons does Gomorrah have?",
                options: [
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                correct: 2
            },
            {
                topic: "Dekalog",
                emoji: "🏃💨",
                question: "How many films are in Dekalog?",
                options: [
                    "8",
                    "9",
                    "10",
                    "12"
                ],
                correct: 2
            },
            {
                topic: "Montag",
                emoji: "🎯🎲",
                question: "What is Montag (Monday) part of?",
                options: [
                    "Berlin Alexanderplatz",
                    "Heimat",
                    "Edgar Reitz trilogy",
                    "Standalone film"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "The Earrings of Madame de...",
                emoji: "🎰🃏",
                question: "What year was The Earrings of Madame de... released?",
                answer: "1953"
            },
            {
                topic: "Bleak House",
                emoji: "🏎️💨",
                question: "How many episodes is the 2005 Bleak House?",
                answer: "15"
            },
            {
                topic: "Gertrud",
                emoji: "🚁✈️",
                question: "Who directed Gertrud?",
                answer: "Carl Theodor Dreyer"
            },
            {
                topic: "The Singing Detective",
                emoji: "🦇🌃",
                question: "What hospital is Philip Marlow in?",
                answer: "Not specified or General hospital"
            },
            {
                topic: "Intolerance",
                emoji: "👮🔍",
                question: "Who directed Intolerance?",
                answer: "D.W. Griffith"
            },
            {
                topic: "I, Claudius",
                emoji: "💰💵",
                question: "Who plays Livia Drusilla?",
                answer: "Siân Phillips"
            },
            {
                topic: "Le Plaisir",
                emoji: "🎭😂",
                question: "Who directed Le Plaisir?",
                answer: "Max Ophüls"
            },
            {
                topic: "State of Play",
                emoji: "🎪🤡",
                question: "Who plays Cal McCaffrey in the series?",
                answer: "John Simm"
            },
            {
                topic: "Greed",
                emoji: "🎬📹",
                question: "Who directed Greed?",
                answer: "Erich von Stroheim"
            },
            {
                topic: "Our Mutual Friend",
                emoji: "🎬🎥",
                question: "How many episodes is the 1998 adaptation?",
                answer: "4"
            }
        ]
    },
    13: {
        easy: [
            {
                topic: "The Emperor's New Groove",
                emoji: "🎭🎪",
                question: "Kuzco is turned into a llama.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cloak & Dagger",
                emoji: "🏆🌟",
                question: "Tandy and Tyrone have superpowers.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "The Golden Girls",
                emoji: "👑💍",
                question: "The Golden Girls live in Miami.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Total Recall",
                emoji: "🦸🦹",
                question: "Doug Quaid goes to Mars.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "The Blacklist",
                emoji: "🚀🌌",
                question: "Red Reddington is a criminal informant.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Brother Bear",
                emoji: "🧙🔮",
                question: "Kenai is transformed into a bear.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Legends of Tomorrow",
                emoji: "🦖🦕",
                question: "The team travels through time.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "The New Mutants",
                emoji: "🕷️🕸️",
                question: "The New Mutants are young mutants.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "The Boys",
                emoji: "⚔️🛡️",
                question: "The Boys fight corrupt superheroes.",
                options: [
                    "True",
                    "False"
                ],
                correct:



/const chapters14And15 = {
    14: {
        easy: [
            {
                topic: "Encanto",
                emoji: "💎🏝️",
                question: "The Madrigal family has magical gifts.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Moon Knight",
                emoji: "🐉⚡",
                question: "Moon Knight has multiple personalities.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Taxi",
                emoji: "🤖🔧",
                question: "Taxi is set in New York.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Matrix",
                emoji: "🏴‍☠️⚓",
                question: "Neo can dodge bullets.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Succession",
                emoji: "👻👽",
                question: "Succession is about a powerful family.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Luca",
                emoji: "🔫💥",
                question: "Luca is a sea monster.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Hawkeye",
                emoji: "🎩🎪",
                question: "Hawkeye uses a bow and arrow.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Eternals",
                emoji: "🌹💔",
                question: "The Eternals are immortal beings.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Yellowjackets",
                emoji: "🎸🎤",
                question: "Yellowjackets involves a plane crash.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Soul",
                emoji: "🏃💨",
                question: "Joe Gardner is a music teacher.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Parasite",
                emoji: "🎯🎲",
                question: "What country is Parasite from?",
                options: [
                    "South Korea",
                    "Japan"
                ],
                correct: 0
            },
            {
                topic: "Ted Lasso",
                emoji: "🎰🃏",
                question: "What sport does Ted coach?",
                options: [
                    "Football/Soccer",
                    "American Football"
                ],
                correct: 0
            },
            {
                topic: "Knives Out",
                emoji: "🏎️💨",
                question: "Who directed Knives Out?",
                options: [
                    "Rian Johnson",
                    "Denis Villeneuve"
                ],
                correct: 0
            },
            {
                topic: "The White Lotus",
                emoji: "🚁✈️",
                question: "What type of resort is featured?",
                options: [
                    "Luxury resort",
                    "Budget hotel"
                ],
                correct: 0
            },
            {
                topic: "Dune",
                emoji: "🦇🌃",
                question: "What planet is the story set on?",
                options: [
                    "Arrakis",
                    "Caladan"
                ],
                correct: 0
            },
            {
                topic: "Squid Game",
                emoji: "👮🔍",
                question: "What country is Squid Game from?",
                options: [
                    "South Korea",
                    "Japan"
                ],
                correct: 0
            },
            {
                topic: "CODA",
                emoji: "💰💵",
                question: "What does CODA stand for?",
                options: [
                    "Child of Deaf Adults",
                    "Center of Drama Arts"
                ],
                correct: 0
            },
            {
                topic: "Loki",
                emoji: "🎭😂",
                question: "What organization does Loki work with?",
                options: [
                    "TVA",
                    "SHIELD"
                ],
                correct: 0
            },
            {
                topic: "Don't Look Up",
                emoji: "🎪🤡",
                question: "What threatens Earth in the film?",
                options: [
                    "Comet",
                    "Asteroid"
                ],
                correct: 0
            },
            {
                topic: "The Last of Us",
                emoji: "🎬📹",
                question: "What causes the apocalypse?",
                options: [
                    "Fungal infection",
                    "Virus"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Drive My Car",
                emoji: "🎬🎥",
                question: "What country is Drive My Car from?",
                options: [
                    "Japan",
                    "South Korea",
                    "China"
                ],
                correct: 0
            },
            {
                topic: "Succession S3",
                emoji: "🎭🎪",
                question: "Where does the finale take place?",
                options: [
                    "Italy",
                    "Greece",
                    "France"
                ],
                correct: 0
            },
            {
                topic: "The Power of the Dog",
                emoji: "🏆🌟",
                question: "Who directed The Power of the Dog?",
                options: [
                    "Jane Campion",
                    "Kelly Reichardt",
                    "Chloé Zhao"
                ],
                correct: 0
            },
            {
                topic: "Mare of Easttown",
                emoji: "👑💍",
                question: "Who plays Mare?",
                options: [
                    "Kate Winslet",
                    "Amy Adams",
                    "Frances McDormand"
                ],
                correct: 0
            },
            {
                topic: "The Worst Person in the World",
                emoji: "🦸🦹",
            {
                topic: "Yellowjackets",
                emoji: "🚀🌌",
                question: "How many timelines does the show follow?",
                options: [
                    "2",
                    "3",
                    "4"
                ],
                correct: 0
            },
            {
                topic: "The Green Knight",
                emoji: "🧙🔮",
                question: "Who directed The Green Knight?",
                options: [
                    "David Lowery",
                    "Robert Eggers",
                    "Ari Aster"
                ],
                correct: 0
            },
            {
                topic: "Dopesick",
                emoji: "🦖🦕",
                question: "What drug crisis does Dopesick examine?",
                options: [
                    "Opioid",
                    "Cocaine",
                    "Methamphetamine"
                ],
                correct: 0
            },
            {
                topic: "Spencer",
                emoji: "🕷️🕸️",
                question: "Who plays Princess Diana?",
                options: [
                    "Kristen Stewart",
                    "Emma Corrin",
                    "Naomi Watts"
                ],
                correct: 0
            },
            {
                topic: "Hacks",
                emoji: "⚔️🛡️",
                question: "What city is Hacks primarily set in?",
                options: [
                    "Las Vegas",
                    "Los Angeles",
                    "New York"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Petite Maman",
                emoji: "💎🏝️",
                question: "Who directed Petite Maman?",
                options: [
                    "Céline Sciamma",
                    "Mia Hansen-Løve",
                    "Claire Denis",
                    "Agnès Varda"
                ],
                correct: 0
            },
            {
                topic: "The Underground Railroad",
                emoji: "🐉⚡",
                question: "Who directed The Underground Railroad?",
                options: [
                    "Barry Jenkins",
                    "Ava DuVernay",
                    "Steve McQueen",
                    "Ryan Coogler"
                ],
                correct: 0
            },
            {
                topic: "The Card Counter",
                emoji: "🤖🔧",
                question: "Who directed The Card Counter?",
                options: [
                    "Paul Schrader",
                    "Martin Scorsese",
                    "Paul Thomas Anderson",
                    "David Fincher"
                ],
                correct: 0
            },
            {
                topic: "It's a Sin",
                emoji: "🏴‍☠️⚓",
                question: "What decade is It's a Sin set in?",
                options: [
                    "1980s",
                    "1970s",
                    "1990s",
                    "2000s"
                ],
                correct: 0
            },
            {
                topic: "The French Dispatch",
                emoji: "👻👽",
                question: "What is the fictional city called?",
                options: [
                    "Ennui-sur-Blasé",
                    "Marseille",
                    "Lyon",
                    "Bordeaux"
                ],
                correct: 0
            },
            {
                topic: "Landscapers",
                emoji: "🔫💥",
                question: "Who created Landscapers?",
                options: [
                    "Ed Sinclair",
                    "Sally Wainwright",
                    "Jed Mercurio",
                    "Russell T Davies"
                ],
                correct: 0
            },
            {
                topic: "The Lost Daughter",
                emoji: "🎩🎪",
                question: "Who directed The Lost Daughter?",
                options: [
                    "Maggie Gyllenhaal",
                    "Greta Gerwig",
                    "Kelly Reichardt",
                    "Sofia Coppola"
                ],
                correct: 0
            },
            {
                topic: "Wheel of Time",
                emoji: "🌹💔",
                question: "How many episodes is Season 1?",
                options: [
                    "8",
                    "6",
                    "10",
                    "12"
                ],
                correct: 0
            },
            {
                topic: "Bergman Island",
                emoji: "🎸🎤",
                question: "Who directed Bergman Island?",
                options: [
                    "Mia Hansen-Løve",
                    "Céline Sciamma",
                    "Claire Denis",
                    "Maren Ade"
                ],
                correct: 0
            },
            {
                topic: "Pachinko",
                emoji: "🏃💨",
                question: "How many generations does Pachinko follow?",
                options: [
                    "4",
                    "2",
                    "3",
                    "5"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "The Velvet Underground",
                emoji: "🎯🎲",
                question: "Who directed The Velvet Underground documentary?",
                answer: "Todd Haynes"
            },
            {
                topic: "Landscapers",
                emoji: "🎰🃏",
                question: "Who plays Susan Edwards?",
                answer: "Olivia Colman"
            },
            {
                topic: "Annette",
                emoji: "🏎️💨",
                question: "Who directed Annette?",
                answer: "Leos Carax"
            },
            {
                topic: "The Green Knight",
                emoji: "🚁✈️",
                question: "What poem is The Green Knight based on?",
                answer: "Sir Gawain and the Green Knight"
            },
            {
                topic: "Titane",
                emoji: "🦇🌃",
                question: "Who directed Titane?",
                answer: "Julia Ducournau"
            },
            {
                topic: "The Underground Railroad",
                emoji: "👮🔍",
                question: "Who wrote the novel The Underground Railroad?",
                answer: "Colson Whitehead"
            },
            {
                topic: "Drive My Car",
                emoji: "💰💵",
                question: "What play is being rehearsed in the film?",
                answer: "Uncle Vanya"
            },
            {
                topic: "The Tragedy of Macbeth",
                emoji: "🎭😂",
                question: "Who directed the 2021 Macbeth?",
                answer: "Joel Coen"
            },
            {
                topic: "Wheel of Fortune and Fantasy",
                emoji: "🎪🤡",
                question: "Who directed Wheel of Fortune and Fantasy?",
                answer: "Ryusuke Hamaguchi"
            },
            {
                topic: "The French Dispatch",
                emoji: "🎬📹",
                question: "What magazine is The French Dispatch inspired by?",
                answer: "The New Yorker"
            }
        ]
    },
    15: {
        easy: [
            {
                topic: "Turning Red",
                emoji: "🎬🎥",
                question: "Mei turns into a red panda.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Ms. Marvel",
                emoji: "🎭🎪",
                question: "Kamala Khan has superpowers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Fawlty Towers",
                emoji: "🏆🌟",
                question: "Fawlty Towers is a hotel comedy.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Avatar",
                emoji: "👑💍",
                question: "Avatar is set on Pandora.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Severance",
                emoji: "🦸🦹",
                question: "Workers have their memories separated.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Lightyear",
                emoji: "🚀🌌",
                question: "Buzz Lightyear is a space ranger.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "She-Hulk",
                emoji: "🧙🔮",
                question: "Jennifer Walters is a lawyer.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Thor: Love and Thunder",
                emoji: "🦖🦕",
                question: "Thor fights with a hammer.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "House of the Dragon",
                emoji: "🕷️🕸️",
                question: "House of the Dragon is a Game of Thrones prequel.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Strange World",
                emoji: "⚔️🛡️",
                question: "Strange World is about explorers.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Everything Everywhere All at Once",
                emoji: "💎🏝️",
                question: "What is the multiverse explored through?",
                options: [
                    "Laundromat owner",
                    "Scientist"
                ],
                correct: 0
            },
            {
                topic: "The Bear",
                emoji: "🐉⚡",
                question: "What type of restaurant is featured?",
                options: [
                    "Sandwich shop",
                    "Fine dining"
                ],
                correct: 0
            },
            {
                topic: "Top Gun: Maverick",
                emoji: "🤖🔧",
                question: "Who returns as Maverick?",
                options: [
                    "Tom Cruise",
                    "Val Kilmer"
                ],
                correct: 0
            },
            {
                topic: "Abbott Elementary",
                emoji: "🏴‍☠️⚓",
                question: "What city is Abbott Elementary set in?",
                options: [
                    "Philadelphia",
                    "Chicago"
                ],
                correct: 0
            },
            {
                topic: "The Batman",
                emoji: "👻👽",
                question: "Who plays Batman in 2022?",
                options: [
                    "Robert Pattinson",
                    "Ben Affleck"
                ],
                correct: 0
            },
            {
                topic: "Andor",
                emoji: "🔫💥",
                question: "What universe is Andor set in?",
                options: [
                    "Star Wars",
                    "Star Trek"
                ],
                correct: 0
            },
            {
                topic: "The Banshees of Inisherin",
                emoji: "🎩🎪",
            {
                topic: "Wednesday",
                emoji: "🌹💔",
                question: "What family is Wednesday from?",
                options: [
                    "Addams Family",
                    "Munsters"
                ],
                correct: 0
            },
            {
                topic: "Glass Onion",
                emoji: "🎸🎤",
                question: "Who is the detective?",
                options: [
                    "Benoit Blanc",
                    "Hercule Poirot"
                ],
                correct: 0
            },
            {
                topic: "1899",
                emoji: "🏃💨",
                question: "What decade is 1899 set in?",
                options: [
                    "1890s",
                    "1900s"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Tár",
                emoji: "🎯🎲",
                question: "What is Lydia Tár's profession?",
                options: [
                    "Conductor",
                    "Composer",
                    "Violinist"
                ],
                correct: 0
            },
            {
                topic: "The Fabelmans",
                emoji: "🎰🃏",
                question: "Who directed The Fabelmans?",
                options: [
                    "Steven Spielberg",
                    "Martin Scorsese",
                    "Francis Ford Coppola"
                ],
                correct: 0
            },
            {
                topic: "Triangle of Sadness",
                emoji: "🏎️💨",
                question: "What is the main setting?",
                options: [
                    "Luxury yacht",
                    "Private island",
                    "Resort"
                ],
                correct: 0
            },
            {
                topic: "The Rehearsal",
                emoji: "🚁✈️",
                question: "Who created The Rehearsal?",
                options: [
                    "Nathan Fielder",
                    "Eric André",
                    "Tim Heidecker"
                ],
                correct: 0
            },
            {
                topic: "All Quiet on the Western Front",
                emoji: "🦇🌃",
                question: "What country produced the 2022 version?",
                options: [
                    "Germany",
                    "USA",
                    "UK"
                ],
                correct: 0
            },
            {
                topic: "Slow Horses",
                emoji: "👮🔍",
                question: "What is Slough House?",
                options: [
                    "Failed agents division",
                    "Training facility",
                    "Headquarters"
                ],
                correct: 0
            },
            {
                topic: "RRR",
                emoji: "💰💵",
                question: "What country is RRR from?",
                options: [
                    "India",
                    "Pakistan",
                    "Bangladesh"
                ],
                correct: 0
            },
            {
                topic: "The Northman",
                emoji: "🎭😂",
                question: "Who directed The Northman?",
                options: [
                    "Robert Eggers",
                    "Ari Aster",
                    "David Lowery"
                ],
                correct: 0
            },
            {
                topic: "After Yang",
                emoji: "🎪🤡",
                question: "What is Yang?",
                options: [
                    "Android",
                    "Alien",
                    "Clone"
                ],
                correct: 0
            },
            {
                topic: "Nope",
                emoji: "🎬📹",
                question: "Who directed Nope?",
                options: [
                    "Jordan Peele",
                    "Ari Aster",
                    "Robert Eggers"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "EO",
                emoji: "🎬🎥",
                question: "Who directed EO?",
                options: [
                    "Jerzy Skolimowski",
                    "Pawel Pawlikowski",
                    "Andrzej Wajda",
                    "Roman Polanski"
                ],
                correct: 0
            },
            {
                topic: "Aftersun",
                emoji: "🎭🎪",
                question: "Who directed Aftersun?",
                options: [
                    "Charlotte Wells",
                    "Celine Song",
                    "Joanna Hogg",
                    "Lynne Ramsay"
                ],
                correct: 0
            },
            {
                topic: "Decision to Leave",
                emoji: "🏆🌟",
                question: "Who directed Decision to Leave?",
                options: [
                    "Park Chan-wook",
                    "Bong Joon-ho",
                    "Lee Chang-dong",
                    "Hong Sang-soo"
                ],
                correct: 0
            },
            {
                topic: "The Patient",
                emoji: "👑💍",
                question: "Who plays the therapist?",
                options: [
                    "Steve Carell",
                    "Bryan Cranston",
                    "Bob Odenkirk",
                    "Michael C. Hall"
                ],
                correct: 0
            },
            {
                topic: "Saint Omer",
                emoji: "🦸🦹",
                question: "Who directed Saint Omer?",
                options: [
                    "Alice Diop",
                    "Claire Denis",
                    "Mia Hansen-Løve",
                    "Céline Sciamma"
                ],
                correct: 0
            },
            {
                topic: "Argentina, 1985",
                emoji: "🚀🌌",
                question: "What trial is depicted?",
                options: [
                    "Junta trials",
                    "Dirty War",
                    "Military coup",
                    "Human rights"
                ],
                correct: 0
            },
            {
                topic: "Blonde",
                emoji: "🧙🔮",
                question: "Who directed Blonde?",
                options: [
                    "Andrew Dominik",
                    "David Fincher",
                    "Paul Thomas Anderson",
                    "James Gray"
                ],
                correct: 0
            },
            {
                topic: "The Menu",
                emoji: "🦖🦕",
                question: "How many courses are served?",
                options: [
                    "Multiple/Many",
                    "3",
                    "5",
                    "7"
                ],
                correct: 0
            },
            {
                topic: "Babylon",
                emoji: "🕷️🕸️",
                question: "What era is Babylon set in?",
                options: [
                    "1920s Hollywood",
                    "1930s Hollywood",
                    "1940s Hollywood",
                    "Silent film era"
                ],
                correct: 0
            },
            {
                topic: "The English",
                emoji: "⚔️🛡️",
                question: "Who plays Cornelia Locke?",
                options: [
                    "Emily Blunt",
                    "Florence Pugh",
                    "Carey Mulligan",
                    "Saoirse Ronan"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "EO",
                emoji: "💎🏝️",
                question: "What animal is the protagonist of EO?",
                answer: "Donkey"
            },
            {
                topic: "The Rehearsal",
                emoji: "🐉⚡",
                question: "What is Nathan's experiment called?",
                answer: "The Rehearsal"
            },
            {
                topic: "Corsage",
                emoji: "🤖🔧",
                question: "Who directed Corsage?",
                answer: "Marie Kreutzer"
            },
            {
                topic: "Aftersun",
                emoji: "🏴‍☠️⚓",
                question: "What song features prominently in Aftersun?",
                answer: "Under Pressure"
            },
            {
                topic: "Saint Omer",
                emoji: "👻👽",
                question: "What is Saint Omer based on?",
                answer: "Real trial or True story"
            },
            {
                topic: "The Eternal Daughter",
                emoji: "🔫💥",
                question: "Who directed The Eternal Daughter?",
                answer: "Joanna Hogg"
            },
            {
                topic: "Decision to Leave",
                emoji: "🎩🎪",
                question: "What city is Decision to Leave primarily set in?",
                answer: "Busan"
            },
            {
                topic: "The Wonder",
                emoji: "🌹💔",
                question: "Who plays the nurse in The Wonder?",
                answer: "Florence Pugh"
            },
            {
                topic: "Return to Seoul",
                emoji: "🎸🎤",
                question: "Who directed Return to Seoul?",
                answer: "Davy Chou"
            },
            {
                topic: "All the Beauty and the Bloodshed",
                emoji: "🏃💨",
                question: "Who is the subject of this documentary?",
                answer: "Nan Goldin"
            }
        ]
    }
};

// Export for use
console.log(JSON.stringify(chapters14And15, null, 2));

/const chapters16And17 = {
    16: {
        easy: [
            {
                topic: "Elemental",
                emoji: "🎯🎲",
                question: "Elemental is about fire and water elements.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Secret Invasion",
                emoji: "🎰🃏",
                question: "Secret Invasion features Skrulls.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Arrested Development",
                emoji: "🏎️💨",
                question: "The Bluth family is wealthy.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Blade Runner",
                emoji: "🚁✈️",
                question: "Blade Runner is set in the future.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "The Last of Us",
                emoji: "🦇🌃",
                question: "Joel protects Ellie.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Wish",
                emoji: "👮🔍",
                question: "Wish is a Disney animated film.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Gen V",
                emoji: "💰💵",
                question: "Gen V is a spin-off of The Boys.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Guardians of the Galaxy Vol. 3",
                emoji: "🎭😂",
                question: "The Guardians travel through space.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Crowded Room",
                emoji: "🎪🤡",
                question: "The show explores mental health.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Migration",
                emoji: "🎬📹",
                question: "Migration is about traveling ducks.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Past Lives",
                emoji: "🎬🎥",
                question: "Who directed Past Lives?",
                options: [
                    "Celine Song",
                    "Charlotte Wells"
                ],
                correct: 0
            },
            {
                topic: "Beef",
                emoji: "🎭🎪",
                question: "What starts the conflict in Beef?",
                options: [
                    "Road rage",
                    "Parking dispute"
                ],
                correct: 0
            },
            {
                topic: "Oppenheimer",
                emoji: "🏆🌟",
                question: "Who directed Oppenheimer?",
                options: [
                    "Christopher Nolan",
                    "Denis Villeneuve"
                ],
                correct: 0
            },
            {
                topic: "The Holdovers",
                emoji: "👑💍",
                question: "What holiday features in The Holdovers?",
                options: [
                    "Christmas",
                    "Thanksgiving"
                ],
                correct: 0
            },
            {
                topic: "Killers of the Flower Moon",
                emoji: "🦸🦹",
            {
                topic: "The Fall of the House of Usher",
                emoji: "🚀🌌",
                question: "Who created this series?",
                options: [
                    "Mike Flanagan",
                    "Ryan Murphy"
                ],
                correct: 0
            },
            {
                topic: "Barbie",
                emoji: "🧙🔮",
                question: "Who directed Barbie?",
                options: [
                    "Greta Gerwig",
                    "Sofia Coppola"
                ],
                correct: 0
            },
            {
                topic: "The Gilded Age",
                emoji: "🦖🦕",
                question: "What era is The Gilded Age set in?",
                options: [
                    "1880s",
                    "1920s"
                ],
                correct: 0
            },
            {
                topic: "Spider-Man: Across the Spider-Verse",
                emoji: "🕷️🕸️",
                question: "What style is the animation?",
                options: [
                    "Multiverse animation",
                    "Traditional 2D"
                ],
                correct: 0
            },
            {
                topic: "The Regime",
                emoji: "⚔️🛡️",
                question: "What type of government is depicted?",
                options: [
                    "Authoritarian",
                    "Democracy"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Anatomy of a Fall",
                emoji: "💎🏝️",
                question: "What country is Anatomy of a Fall from?",
                options: [
                    "France",
                    "Belgium",
                    "Switzerland"
                ],
                correct: 0
            },
            {
                topic: "The Zone of Interest",
                emoji: "🐉⚡",
                question: "Who directed The Zone of Interest?",
                options: [
                    "Jonathan Glazer",
                    "László Nemes",
                    "Pawel Pawlikowski"
                ],
                correct: 0
            },
            {
                topic: "May December",
                emoji: "🤖🔧",
                question: "Who directed May December?",
                options: [
                    "Todd Haynes",
                    "Paul Thomas Anderson",
                    "Kelly Reichardt"
                ],
                correct: 0
            },
            {
                topic: "Poor Things",
                emoji: "🏴‍☠️⚓",
                question: "Who plays Bella Baxter?",
                options: [
                    "Emma Stone",
                    "Florence Pugh",
                    "Anya Taylor-Joy"
                ],
                correct: 0
            },
            {
                topic: "The Iron Claw",
                emoji: "👻👽",
                question: "What sport is featured?",
                options: [
                    "Wrestling",
                    "Boxing",
                    "MMA"
                ],
                correct: 0
            },
            {
                topic: "A Murder at the End of the World",
                emoji: "🔫💥",
                question: "Where is the murder mystery set?",
                options: [
                    "Iceland resort",
                    "Swiss Alps",
                    "Antarctic station"
                ],
                correct: 0
            },
            {
                topic: "Maestro",
                emoji: "🎩🎪",
                question: "Who does Bradley Cooper play?",
                options: [
                    "Leonard Bernstein",
                    "Gustav Mahler",
                    "Aaron Copland"
                ],
                correct: 0
            },
            {
                topic: "Ferrari",
                emoji: "🌹💔",
                question: "Who directed Ferrari?",
                options: [
                    "Michael Mann",
                    "Ron Howard",
                    "Ridley Scott"
                ],
                correct: 0
            },
            {
                topic: "Fingernails",
                emoji: "🎸🎤",
                question: "What does the test in Fingernails measure?",
                options: [
                    "Love compatibility",
                    "Personality",
                    "Health"
                ],
                correct: 0
            },
            {
                topic: "Fargo S5",
                emoji: "🏃💨",
                question: "What decade is Season 5 set in?",
                options: [
                    "2019",
                    "2010",
                    "2020"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "The Taste of Things",
                emoji: "🎯🎲",
                question: "Who directed The Taste of Things?",
                options: [
                    "Tran Anh Hung",
                    "Hirokazu Kore-eda",
                    "Wong Kar-wai",
                    "Hou Hsiao-hsien"
                ],
                correct: 0
            },
            {
                topic: "Showing Up",
                emoji: "🎰🃏",
                question: "Who directed Showing Up?",
                options: [
                    "Kelly Reichardt",
                    "Lynne Ramsay",
                    "Joanna Hogg",
                    "Céline Sciamma"
                ],
                correct: 0
            },
            {
                topic: "Fallen Leaves",
                emoji: "🏎️💨",
                question: "Who directed Fallen Leaves?",
                options: [
                    "Aki Kaurismäki",
                    "Roy Andersson",
                    "Ruben Östlund",
                    "Joachim Trier"
                ],
                correct: 0
            },
            {
                topic: "The Boy and the Heron",
                emoji: "🚁✈️",
                question: "Who directed The Boy and the Heron?",
                options: [
                    "Hayao Miyazaki",
                    "Makoto Shinkai",
                    "Mamoru Hosoda",
                    "Satoshi Kon"
                ],
                correct: 0
            },
            {
                topic: "Monster",
                emoji: "🦇🌃",
                question: "Who directed Monster?",
                options: [
                    "Hirokazu Kore-eda",
                    "Ryusuke Hamaguchi",
                    "Naomi Kawase",
                    "Takeshi Kitano"
                ],
                correct: 0
            },
            {
                topic: "The Teachers' Lounge",
                emoji: "👮🔍",
                question: "What country is The Teachers' Lounge from?",
                options: [
                    "Germany",
                    "Austria",
                    "Netherlands",
                    "Denmark"
                ],
                correct: 0
            },
            {
                topic: "All of Us Strangers",
                emoji: "💰💵",
                question: "Who directed All of Us Strangers?",
                options: [
                    "Andrew Haigh",
                    "Francis Lee",
                    "Barry Jenkins",
                    "Todd Haynes"
                ],
                correct: 0
            },
            {
                topic: "Society of the Snow",
                emoji: "🎭😂",
                question: "What country is Society of the Snow from?",
                options: [
                    "Spain",
                    "Argentina",
                    "Chile",
                    "Uruguay"
                ],
                correct: 0
            },
            {
                topic: "The Sweet East",
                emoji: "🎪🤡",
                question: "Who directed The Sweet East?",
                options: [
                    "Sean Price Williams",
                    "Kelly Reichardt",
                    "Nathan Silver",
                    "Alex Ross Perry"
                ],
                correct: 0
            },
            {
                topic: "Fremont",
                emoji: "🎬📹",
        ],
        extreme: [
            {
                topic: "Anatomy of a Fall",
                emoji: "🎬🎥",
                question: "Who directed Anatomy of a Fall?",
                answer: "Justine Triet"
            },
            {
                topic: "The Taste of Things",
                emoji: "🎭🎪",
                question: "What is the original French title?",
                answer: "La Passion de Dodin Bouffant"
            },
            {
                topic: "Beau Is Afraid",
                emoji: "🏆🌟",
                question: "Who directed Beau Is Afraid?",
                answer: "Ari Aster"
            },
            {
                topic: "Past Lives",
                emoji: "👑💍",
                question: "What is the Korean concept of destined connection called?",
                answer: "In-yun"
            },
            {
                topic: "The Zone of Interest",
                emoji: "🦸🦹",
                question: "What is The Zone of Interest about?",
                answer: "Auschwitz commandant's family"
            },
            {
                topic: "Showing Up",
                emoji: "🚀🌌",
                question: "What does Lizzy create in Showing Up?",
                answer: "Ceramic sculptures"
            },
            {
                topic: "Monster",
                emoji: "🧙🔮",
                question: "How many perspectives does Monster show?",
                answer: "3 or Three"
            },
            {
                topic: "Fallen Leaves",
                emoji: "🦖🦕",
                question: "What city is Fallen Leaves set in?",
                answer: "Helsinki"
            },
            {
                topic: "The Royal Hotel",
                emoji: "🕷️🕸️",
                question: "Who directed The Royal Hotel?",
                answer: "Kitty Green"
            },
            {
                topic: "The Boy and the Heron",
                emoji: "⚔️🛡️",
                question: "What is the Japanese title?",
                answer: "Kimitachi wa Dō Ikiru ka or How Do You Live?"
            }
        ]
    },
    17: {
        easy: [
            {
                topic: "Inside Out 2",
                emoji: "💎🏝️",
                question: "Inside Out 2 introduces new emotions.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Agatha All Along",
                emoji: "🐉⚡",
                question: "Agatha is a witch.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "The Jeffersons",
                emoji: "🤖🔧",
                question: "The Jeffersons is a sitcom.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "E.T.",
                emoji: "🏴‍☠️⚓",
                question: "E.T. is an alien.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Shogun",
                emoji: "👻👽",
                question: "Shogun is set in Japan.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Kung Fu Panda 4",
                emoji: "🔫💥",
                question: "Po is the Dragon Warrior.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Fallout",
                emoji: "🎩🎪",
                question: "Fallout is based on a video game.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Deadpool & Wolverine",
                emoji: "🌹💔",
                question: "Deadpool and Wolverine team up.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Penguin",
                emoji: "🎸🎤",
                question: "The Penguin is a Batman villain.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Moana 2",
                emoji: "🏃💨",
                question: "Moana sails the ocean.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Dune: Part Two",
                emoji: "🎯🎲",
                question: "What is Paul's Fremen name?",
                options: [
                    "Muad'Dib",
                    "Usul"
                ],
                correct: 0
            },
            {
                topic: "Baby Reindeer",
                emoji: "🎰🃏",
                question: "What platform released Baby Reindeer?",
                options: [
                    "Netflix",
                    "HBO"
                ],
                correct: 0
            },
            {
                topic: "The Substance",
                emoji: "🏎️💨",
                question: "What genre is The Substance?",
                options: [
                    "Body horror",
                    "Thriller"
                ],
                correct: 0
            },
            {
                topic: "Ripley",
                emoji: "🚁✈️",
                question: "What format is the series shot in?",
                options: [
                    "Black and white",
                    "Color"
                ],
                correct: 0
            },
            {
                topic: "Civil War",
                emoji: "🦇🌃",
                question: "Who directed Civil War?",
                options: [
                    "Alex Garland",
                    "Denis Villeneuve"
                ],
                correct: 0
            },
            {
                topic: "3 Body Problem",
                emoji: "👮🔍",
                question: "Who created the series?",
                options: [
                    "Game of Thrones creators",
                    "Westworld creators"
                ],
                correct: 0
            },
            {
                topic: "The Brutalist",
                emoji: "💰💵",
                question: "What profession is the protagonist?",
                options: [
                    "Architect",
                    "Sculptor"
                ],
                correct: 0
            },
            {
                topic: "Anora",
                emoji: "🎭😂",
                question: "Who directed Anora?",
                options: [
                    "Sean Baker",
                    "Barry Jenkins"
                ],
                correct: 0
            },
            {
                topic: "Wicked",
                emoji: "🎪🤡",
                question: "What musical is it based on?",
                options: [
                    "Wicked",
                    "The Wizard of Oz"
                ],
                correct: 0
            },
            {
                topic: "The Wild Robot",
                emoji: "🎬📹",
                question: "What is the robot stranded on?",
                options: [
                    "Island",
                    "Planet"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "The Brutalist",
                emoji: "🎬🎥",
                question: "Who plays the architect?",
                options: [
                    "Adrien Brody",
                    "Oscar Isaac",
                    "Adam Driver"
                ],
                correct: 0
            },
            {
                topic: "Conclave",
                emoji: "🎭🎪",
                question: "What event is depicted in Conclave?",
                options: [
                    "Papal election",
                    "Church scandal",
                    "Vatican conspiracy"
                ],
                correct: 0
            },
            {
                topic: "A Different Man",
                emoji: "🏆🌟",
                question: "Who directed A Different Man?",
                options: [
                    "Aaron Schimberg",
                    "Yorgos Lanthimos",
                    "Ari Aster"
                ],
                correct: 0
            },
            {
                topic: "Nosferatu",
                emoji: "👑💍",
                question: "Who directed the 2024 Nosferatu?",
                options: [
                    "Robert Eggers",
                    "Ari Aster",
                    "David Lowery"
                ],
                correct: 0
            },
            {
                topic: "Kinds of Kindness",
                emoji: "🦸🦹",
                question: "How many stories does it contain?",
                options: [
                    "3",
                    "2",
                    "4"
                ],
                correct: 0
            },
            {
                topic: "The Substance",
                emoji: "🚀🌌",
                question: "Who directed The Substance?",
                options: [
                    "Coralie Fargeat",
                    "Julia Ducournau",
                    "Lucrecia Martel"
                ],
                correct: 0
            },
            {
                topic: "Nickel Boys",
                emoji: "🧙🔮",
                question: "What novel is it based on?",
                options: [
                    "Colson Whitehead novel",
                    "Ta-Nehisi Coates novel",
                    "James Baldwin novel"
                ],
                correct: 0
            },
            {
                topic: "Emilia Pérez",
                emoji: "🦖🦕",
                question: "What genre is Emilia Pérez?",
                options: [
                    "Musical",
                    "Drama",
                    "Thriller"
                ],
                correct: 0
            },
            {
                topic: "I Saw the TV Glow",
                emoji: "🕷️🕸️",
                question: "Who directed I Saw the TV Glow?",
                options: [
                    "Jane Schoenbrun",
                    "Ari Aster",
                    "Robert Eggers"
                ],
                correct: 0
            },
            {
                topic: "Love Lies Bleeding",
                emoji: "⚔️🛡️",
                question: "Who directed Love Lies Bleeding?",
                options: [
                    "Rose Glass",
                    "Julia Ducournau",
                    "Coralie Fargeat"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "All We Imagine as Light",
                emoji: "💎🏝️",
                question: "Who directed All We Imagine as Light?",
                options: [
                    "Payal Kapadia",
                    "Mira Nair",
                    "Deepa Mehta",
                    "Aparna Sen"
                ],
                correct: 0
            },
            {
                topic: "The Seed of the Sacred Fig",
                emoji: "🐉⚡",
                question: "Who directed The Seed of the Sacred Fig?",
                options: [
                    "Mohammad Rasoulof",
                    "Asghar Farhadi",
                    "Jafar Panahi",
                    "Abbas Kiarostami"
                ],
                correct: 0
            },
            {
                topic: "Dying",
                emoji: "🤖🔧",
                question: "Who directed Dying?",
                options: [
                    "Matthias Glasner",
                    "Christian Petzold",
                    "Maren Ade",
                    "Michael Haneke"
                ],
                correct: 0
            },
            {
                topic: "Grand Tour",
                emoji: "🏴‍☠️⚓",
                question: "Who directed Grand Tour?",
                options: [
                    "Miguel Gomes",
                    "Pedro Costa",
                    "João Pedro Rodrigues",
                    "Manoel de Oliveira"
                ],
                correct: 0
            },
            {
                topic: "Evil Does Not Exist",
                emoji: "👻👽",
                question: "Who directed Evil Does Not Exist?",
                options: [
                    "Ryusuke Hamaguchi",
                    "Hirokazu Kore-eda",
                    "Naomi Kawase",
                    "Nobuhiro Suwa"
                ],
                correct: 0
            },
            {
                topic: "Flow",
                emoji: "🔫💥",
                question: "What country is Flow from?",
                options: [
                    "Latvia",
                    "Estonia",
                    "Lithuania",
                    "Poland"
                ],
                correct: 0
            },
            {
                topic: "La Chimera",
                emoji: "🎩🎪",
                question: "Who directed La Chimera?",
                options: [
                    "Alice Rohrwacher",
                    "Paolo Sorrentino",
                    "Matteo Garrone",
                    "Luca Guadagnino"
                ],
                correct: 0
            },
            {
                topic: "Green Border",
                emoji: "🌹💔",
                question: "Who directed Green Border?",
                options: [
                    "Agnieszka Holland",
                    "Pawel Pawlikowski",
                    "Jerzy Skolimowski",
                    "Małgorzata Szumowska"
                ],
                correct: 0
            },
            {
                topic: "The Beast",
                emoji: "🎸🎤",
            {
                topic: "Do Not Expect Too Much from the End of the World",
                emoji: "🏃💨",
        ],
        extreme: [
            {
                topic: "All We Imagine as Light",
                emoji: "🎯🎲",
                question: "What award did it win at Cannes?",
                answer: "Grand Prix"
            },
            {
                topic: "The Seed of the Sacred Fig",
                emoji: "🎰🃏",
                question: "Where was the director when the film premiered?",
                answer: "In exile or Outside Iran"
            },
            {
                topic: "La Chimera",
                emoji: "🏎️💨",
                question: "What do the tomb raiders search for?",
                answer: "Etruscan artifacts"
            },
            {
                topic: "Flow",
                emoji: "🚁✈️",
                question: "What animal is the protagonist in Flow?",
                answer: "Cat"
            },
            {
                topic: "Evil Does Not Exist",
                emoji: "🦇🌃",
                question: "What village is threatened in the film?",
                answer: "Mountain village or Mizubiki"
            },
            {
                topic: "Grand Tour",
                emoji: "👮🔍",
                question: "What era is Grand Tour set in?",
                answer: "1910s or Early 20th century"
            },
            {
                topic: "The Beast",
                emoji: "💰💵",
                question: "Who directed The Beast?",
                answer: "Bertrand Bonello"
            },
            {
                topic: "Green Border",
                emoji: "🎭😂",
                question: "What crisis does Green Border depict?",
                answer: "Migrant crisis or Refugee crisis"
            },
            {
                topic: "Do Not Expect Too Much",
                emoji: "🎪🤡",
                question: "Who directed this Romanian film?",
                answer: "Radu Jude"
            },
            {
                topic: "Robot Dreams",
                emoji: "🎬📹",
                question: "Where is Robot Dreams set?",
                answer: "New York City or Manhattan"
            }
        ]
    }
};

/const chapters18And19 = {
    18: {
        easy: [
            {
                topic: "The Incredibles 2",
                emoji: "🎬🎥",
                question: "The Incredibles 2 features a superhero family.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "WandaVision",
                emoji: "🎭🎪",
                question: "WandaVision takes place in different TV eras.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Columbo",
                emoji: "🏆🌟",
                question: "Columbo is a detective.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Jaws",
                emoji: "👑💍",
                question: "Jaws is about a killer shark.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Bridgerton",
                emoji: "🦸🦹",
                question: "Bridgerton is set in Regency England.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cars",
                emoji: "🚀🌌",
                question: "Lightning McQueen is a race car.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Invincible",
                emoji: "🧙🔮",
                question: "Invincible is an animated superhero show.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Black Widow",
                emoji: "🦖🦕",
                question: "Black Widow is a spy.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Only Murders in the Building",
                emoji: "🕷️🕸️",
                question: "The show is about solving murders.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Onward",
                emoji: "⚔️🛡️",
                question: "Onward features two elf brothers.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Nomadland",
                emoji: "💎🏝️",
                question: "Who directed Nomadland?",
                options: [
                    "Chloé Zhao",
                    "Kelly Reichardt"
                ],
                correct: 0
            },
            {
                topic: "The Queen's Gambit",
                emoji: "🐉⚡",
                question: "What is Beth Harmon's addiction?",
                options: [
                    "Pills and alcohol",
                    "Gambling"
                ],
                correct: 0
            },
            {
                topic: "Soul",
                emoji: "🤖🔧",
                question: "Where does Joe's soul end up?",
                options: [
                    "The Great Before",
                    "The Great Beyond"
                ],
                correct: 0
            },
            {
                topic: "The Mandalorian S2",
                emoji: "🏴‍☠️⚓",
                question: "Who does Grogu reunite with?",
                options: [
                    "Luke Skywalker",
                    "Yoda"
                ],
                correct: 0
            },
            {
                topic: "Minari",
                emoji: "👻👽",
                question: "What country does the family move from?",
                options: [
                    "South Korea",
                    "Japan"
                ],
                correct: 0
            },
            {
                topic: "Mare of Easttown",
                emoji: "🔫💥",
                question: "What is Mare investigating?",
                options: [
                    "Murder",
                    "Robbery"
                ],
                correct: 0
            },
            {
                topic: "Promising Young Woman",
                emoji: "🎩🎪",
                question: "Who directed Promising Young Woman?",
                options: [
                    "Emerald Fennell",
                    "Greta Gerwig"
                ],
                correct: 0
            },
            {
                topic: "Luca",
                emoji: "🌹💔",
                question: "Where is Luca set?",
                options: [
                    "Italian Riviera",
                    "Sicily"
                ],
                correct: 0
            },
            {
                topic: "The Father",
                emoji: "🎸🎤",
                question: "What condition does Anthony have?",
                options: [
                    "Dementia",
                    "Alzheimer's"
                ],
                correct: 0
            },
            {
                topic: "Arcane",
                emoji: "🏃💨",
                question: "What game is Arcane based on?",
                options: [
                    "League of Legends",
                    "Overwatch"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Sound of Metal",
                emoji: "🎯🎲",
                question: "What does Ruben lose?",
                options: [
                    "Hearing",
                    "Sight",
                    "Voice"
                ],
                correct: 0
            },
            {
                topic: "Small Axe",
                emoji: "🎰🃏",
                question: "Who directed the Small Axe anthology?",
                options: [
                    "Steve McQueen",
                    "Barry Jenkins",
                    "Ava DuVernay"
                ],
                correct: 0
            },
            {
                topic: "Judas and the Black Messiah",
                emoji: "🏎️💨",
                question: "Who is the Black Messiah?",
                options: [
                    "Fred Hampton",
                    "Malcolm X",
                    "Huey Newton"
                ],
                correct: 0
            },
            {
                topic: "I May Destroy You",
                emoji: "🚁✈️",
                question: "What does Arabella investigate?",
                options: [
                    "Sexual assault",
                    "Drug trafficking",
                    "Murder"
                ],
                correct: 0
            },
            {
                topic: "The Trial of the Chicago 7",
                emoji: "🦇🌃",
            {
                topic: "The Underground Railroad",
                emoji: "👮🔍",
                question: "How is the Underground Railroad depicted?",
                options: [
                    "Literal train",
                    "Secret routes",
                    "Metaphor"
                ],
                correct: 0
            },
            {
                topic: "Shang-Chi",
                emoji: "💰💵",
                question: "What martial arts style is featured?",
                options: [
                    "Kung Fu",
                    "Karate",
                    "Taekwondo"
                ],
                correct: 0
            },
            {
                topic: "The Mauritanian",
                emoji: "🎭😂",
                question: "Where is the protagonist detained?",
                options: [
                    "Guantanamo Bay",
                    "Abu Ghraib",
                    "Black site"
                ],
                correct: 0
            },
            {
                topic: "Cruella",
                emoji: "🎪🤡",
                question: "What decade is Cruella set in?",
                options: [
                    "1970s",
                    "1960s",
                    "1980s"
                ],
                correct: 0
            },
            {
                topic: "Demon Slayer: Mugen Train",
                emoji: "🎬📹",
        ],
        expert: [
            {
                topic: "Lovers Rock",
                emoji: "🎬🎥",
                question: "What Small Axe film is Lovers Rock?",
                options: [
                    "Part of anthology",
                    "Standalone",
                    "Prequel",
                    "Sequel"
                ],
                correct: 0
            },
            {
                topic: "First Cow",
                emoji: "🎭🎪",
                question: "Who directed First Cow?",
                options: [
                    "Kelly Reichardt",
                    "Lynne Ramsay",
                    "Jane Campion",
                    "Chloé Zhao"
                ],
                correct: 0
            },
            {
                topic: "Another Round",
                emoji: "🏆🌟",
                question: "What experiment do the teachers conduct?",
                options: [
                    "Drinking alcohol daily",
                    "Sleep deprivation",
                    "Meditation",
                    "Exercise regime"
                ],
                correct: 0
            },
            {
                topic: "The Dig",
                emoji: "👑💍",
                question: "What historical event is depicted?",
                options: [
                    "Sutton Hoo excavation",
                    "Tutankhamun discovery",
                    "Pompeii dig",
                    "Rosetta Stone finding"
                ],
                correct: 0
            },
            {
                topic: "The Mauritanian",
                emoji: "🦸🦹",
                question: "Who plays the defense attorney?",
                options: [
                    "Jodie Foster",
                    "Meryl Streep",
                    "Cate Blanchett",
                    "Frances McDormand"
                ],
                correct: 0
            },
            {
                topic: "Quo Vadis, Aida?",
                emoji: "🚀🌌",
                question: "What genocide is depicted?",
                options: [
                    "Srebrenica",
                    "Rwanda",
                    "Cambodia",
                    "Darfur"
                ],
                correct: 0
            },
            {
                topic: "The Disciple",
                emoji: "🧙🔮",
                question: "What music tradition is featured?",
                options: [
                    "Indian classical",
                    "Bollywood",
                    "Qawwali",
                    "Carnatic"
                ],
                correct: 0
            },
            {
                topic: "Preparations to Be Together",
                emoji: "🦖🦕",
                question: "Who directed this Hong Sang-soo film?",
                options: [
                    "Hong Sang-soo",
                    "Lee Chang-dong",
                    "Park Chan-wook",
                    "Bong Joon-ho"
                ],
                correct: 0
            },
            {
                topic: "Malmkrog",
                emoji: "🕷️🕸️",
                question: "What country is Malmkrog from?",
                options: [
                    "Romania",
                    "Hungary",
                    "Poland",
                    "Bulgaria"
                ],
                correct: 0
            },
            {
                topic: "Undine",
                emoji: "⚔️🛡️",
                question: "Who directed Undine?",
                options: [
                    "Christian Petzold",
                    "Michael Haneke",
                    "Maren Ade",
                    "Ulrich Seidl"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "First Cow",
                emoji: "💎🏝️",
                question: "What do Cookie and King-Lu sell?",
                answer: "Oily cakes or Biscuits"
            },
            {
                topic: "Lovers Rock",
                emoji: "🐉⚡",
            {
                topic: "The Truffle Hunters",
                emoji: "🤖🔧",
                question: "What country is The Truffle Hunters set in?",
                answer: "Italy"
            },
            {
                topic: "Another Round",
                emoji: "🏴‍☠️⚓",
                question: "Who directed Another Round?",
                answer: "Thomas Vinterberg"
            },
            {
                topic: "Quo Vadis, Aida?",
                emoji: "👻👽",
                question: "Who directed Quo Vadis, Aida?",
                answer: "Jasmila Žbanić"
            },
            {
                topic: "The Disciple",
                emoji: "🔫💥",
                question: "Who directed The Disciple?",
                answer: "Chaitanya Tamhane"
            },
            {
                topic: "Collective",
                emoji: "🎩🎪",
                question: "What tragedy does Collective investigate?",
                answer: "Nightclub fire or Colectiv fire"
            },
            {
                topic: "Malmkrog",
                emoji: "🌹💔",
                question: "Who directed Malmkrog?",
                answer: "Cristi Puiu"
            },
            {
                topic: "Martin Eden",
                emoji: "🎸🎤",
                question: "Who wrote the novel Martin Eden?",
                answer: "Jack London"
            },
            {
                topic: "Bacurau",
                emoji: "🏃💨",
                question: "What country is Bacurau from?",
                answer: "Brazil"
            }
        ]
    },
    19: {
        easy: [
            {
                topic: "Raya and the Last Dragon",
                emoji: "🎯🎲",
                question: "Raya searches for a dragon.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Falcon and Winter Soldier",
                emoji: "🎰🃏",
                question: "Sam and Bucky are partners.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Hill Street Blues",
                emoji: "🏎️💨",
                question: "Hill Street Blues is a police drama.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Close Encounters",
                emoji: "🚁✈️",
                question: "Close Encounters features aliens.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Squid Game",
                emoji: "🦇🌃",
                question: "Players compete in deadly games.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "The Mitchells vs. the Machines",
                emoji: "👮🔍",
                question: "A family fights robots.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "What If...?",
                emoji: "💰💵",
                question: "What If explores alternate realities.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Eternals",
                emoji: "🎭😂",
                question: "Eternals have existed for thousands of years.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ted Lasso",
                emoji: "🎪🤡",
                question: "Ted Lasso is an American coach.",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Encanto",
                emoji: "🎬📹",
                question: "Mirabel has no magical gift.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Don't Look Up",
                emoji: "🎬🎥",
                question: "What threatens Earth?",
                options: [
                    "Comet",
                    "Asteroid"
                ],
                correct: 0
            },
            {
                topic: "The Harder They Fall",
                emoji: "🎭🎪",
                question: "What genre is The Harder They Fall?",
                options: [
                    "Western",
                    "Crime"
                ],
                correct: 0
            },
            {
                topic: "Free Guy",
                emoji: "🏆🌟",
                question: "Where does Guy live?",
                options: [
                    "Video game",
                    "Virtual reality"
                ],
                correct: 0
            },
            {
                topic: "Hawkeye",
                emoji: "👑💍",
                question: "What city is Hawkeye set in?",
                options: [
                    "New York",
                    "Los Angeles"
                ],
                correct: 0
            },
            {
                topic: "The Suicide Squad",
                emoji: "🦸🦹",
                question: "Who directed The Suicide Squad?",
                options: [
                    "James Gunn",
                    "David Ayer"
                ],
                correct: 0
            },
            {
                topic: "Tick, Tick... Boom!",
                emoji: "🚀🌌",
                question: "Who directed this musical?",
                options: [
                    "Lin-Manuel Miranda",
                    "Damien Chazelle"
                ],
                correct: 0
            },
            {
                topic: "The Power of the Dog",
                emoji: "🧙🔮",
            {
                topic: "Dopesick",
                emoji: "🦖🦕",
                question: "What company is featured?",
                options: [
                    "Purdue Pharma",
                    "Johnson & Johnson"
                ],
                correct: 0
            },
            {
                topic: "West Side Story",
                emoji: "🕷️🕸️",
                question: "Who directed the 2021 version?",
                options: [
                    "Steven Spielberg",
                    "Martin Scorsese"
                ],
                correct: 0
            },
            {
                topic: "Midnight Mass",
                emoji: "⚔️🛡️",
                question: "Who created Midnight Mass?",
                options: [
                    "Mike Flanagan",
                    "Ryan Murphy"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "The Power of the Dog",
                emoji: "💎🏝️",
                question: "Who plays Phil Burbank?",
                options: [
                    "Benedict Cumberbatch",
                    "Jesse Plemons",
                    "Kodi Smit-McPhee"
                ],
                correct: 0
            },
            {
                topic: "The Green Knight",
                emoji: "🐉⚡",
                question: "Who plays Gawain?",
                options: [
                    "Dev Patel",
                    "Timothée Chalamet",
                    "Oscar Isaac"
                ],
                correct: 0
            },
            {
                topic: "Titane",
                emoji: "🤖🔧",
                question: "What award did Titane win at Cannes?",
                options: [
                    "Palme d'Or",
                    "Grand Prix",
                    "Best Director"
                ],
                correct: 0
            },
            {
                topic: "C'mon C'mon",
                emoji: "🏴‍☠️⚓",
                question: "Who directed C'mon C'mon?",
                options: [
                    "Mike Mills",
                    "Barry Jenkins",
                    "Noah Baumbach"
                ],
                correct: 0
            },
            {
                topic: "Pig",
                emoji: "👻👽",
                question: "What does Rob search for?",
                options: [
                    "Truffle pig",
                    "Missing person",
                    "Recipe"
                ],
                correct: 0
            },
            {
                topic: "Spencer",
                emoji: "🔫💥",
                question: "What time period is depicted?",
                options: [
                    "Christmas 1991",
                    "Summer 1997",
                    "Christmas 1995"
                ],
                correct: 0
            },
            {
                topic: "Nightmare Alley",
                emoji: "🎩🎪",
                question: "Who directed Nightmare Alley?",
                options: [
                    "Guillermo del Toro",
                    "Tim Burton",
                    "Terry Gilliam"
                ],
                correct: 0
            },
            {
                topic: "The Card Counter",
                emoji: "🌹💔",
                question: "What is William's past?",
                options: [
                    "Military interrogator",
                    "Professional gambler",
                    "Casino security"
                ],
                correct: 0
            },
            {
                topic: "Licorice Pizza",
                emoji: "🎸🎤",
            {
                topic: "Red Rocket",
                emoji: "🏃💨",
                question: "Who directed Red Rocket?",
                options: [
                    "Sean Baker",
                    "Paul Thomas Anderson",
                    "Harmony Korine"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Wheel of Fortune and Fantasy",
                emoji: "🎯🎲",
                question: "How many episodes/stories does it contain?",
                options: [
                    "3",
                    "2",
                    "4",
                    "5"
                ],
                correct: 0
            },
            {
                topic: "Bergman Island",
                emoji: "🎰🃏",
            {
                topic: "The Souvenir Part II",
                emoji: "🏎️💨",
                question: "Who directed The Souvenir Part II?",
                options: [
                    "Joanna Hogg",
                    "Lynne Ramsay",
                    "Kelly Reichardt",
                    "Charlotte Wells"
                ],
                correct: 0
            },
            {
                topic: "Petite Maman",
                emoji: "🚁✈️",
                question: "How long is Petite Maman?",
                options: [
                    "72 minutes",
                    "90 minutes",
                    "60 minutes",
                    "105 minutes"
                ],
                correct: 0
            },
            {
                topic: "Memoria",
                emoji: "🦇🌃",
                question: "Who directed Memoria?",
                options: [
                    "Apichatpong Weerasethakul",
                    "Tsai Ming-liang",
                    "Hou Hsiao-hsien",
                    "Wong Kar-wai"
                ],
                correct: 0
            },
            {
                topic: "The Worst Person in the World",
                emoji: "👮🔍",
            {
                topic: "A Hero",
                emoji: "💰💵",
                question: "Who directed A Hero?",
                options: [
                    "Asghar Farhadi",
                    "Jafar Panahi",
                    "Abbas Kiarostami",
                    "Mohammad Rasoulof"
                ],
                correct: 0
            },
            {
                topic: "Parallel Mothers",
                emoji: "🎭😂",
                question: "Who directed Parallel Mothers?",
                options: [
                    "Pedro Almodóvar",
                    "Isabel Coixet",
                    "Alejandro Amenábar",
                    "Pablo Larraín"
                ],
                correct: 0
            },
            {
                topic: "Introduction",
                emoji: "🎪🤡",
                question: "Who directed Introduction?",
                options: [
                    "Hong Sang-soo",
                    "Lee Chang-dong",
                    "Park Chan-wook",
                    "Bong Joon-ho"
                ],
                correct: 0
            },
            {
                topic: "The Tsugua Diaries",
                emoji: "🎬📹",
                question: "What country is The Tsugua Diaries from?",
                options: [
                    "Portugal",
                    "Spain",
                    "Brazil",
                    "Italy"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Wheel of Fortune and Fantasy",
                emoji: "🎬🎥",
                question: "What award did it win at Berlin?",
                answer: "Silver Bear Grand Jury Prize"
            },
            {
                topic: "Drive My Car",
                emoji: "🎭🎪",
                question: "What is the car in the film?",
                answer: "Saab 900"
            },
            {
                topic: "Memoria",
                emoji: "🏆🌟",
                question: "Who plays Jessica in Memoria?",
                answer: "Tilda Swinton"
            },
            {
                topic: "Petite Maman",
                emoji: "👑💍",
                question: "Who are the twin actresses in Petite Maman?",
                answer: "Joséphine and Gabrielle Sanz"
            },
            {
                topic: "The Worst Person in the World",
                emoji: "🦸🦹",
                question: "How many chapters does the film have?",
                answer: "12"
            },
            {
                topic: "Red Rocket",
                emoji: "🚀🌌",
                question: "What Texas city is Red Rocket set in?",
                answer: "Texas City"
            },
            {
                topic: "Bergman Island",
                emoji: "🧙🔮",
                question: "Who plays the filmmaker couple?",
                answer: "Vicky Krieps and Tim Roth"
            },
            {
                topic: "Introduction",
                emoji: "🦖🦕",
                question: "How long is Introduction?",
                answer: "66 minutes"
            },
            {
                topic: "A Hero",
                emoji: "🕷️🕸️",
                question: "What city is A Hero set in?",
                answer: "Shiraz"
            },
            {
                topic: "The Velvet Underground",
                emoji: "⚔️🛡️",
                question: "What artist designed the banana album cover?",
                answer: "Andy Warhol"
            }
        ]
    }
};

const chapter20 = {
    20: {
        easy: [
            {
                topic: "The Jungle Book",
                emoji: "💎🏝️",
                question: "Mowgli is raised by wolves.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Loki",
                emoji: "🐉⚡",
                question: "Loki is the god of mischief.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Taxi Driver",
                emoji: "🤖🔧",
                question: "Travis Bickle drives a taxi.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Back to the Future",
                emoji: "🏴‍☠️⚓",
                question: "Marty McFly travels through time.",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Yellowstone",
                emoji: "👻👽",
                question: "Yellowstone is about a ranching family.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Frozen 2",
                emoji: "🔫💥",
                question: "Elsa discovers her origin.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Moon Knight",
                emoji: "🎩🎪",
                question: "Marc Spector has dissociative identity disorder.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Shang-Chi",
                emoji: "🌹💔",
                question: "Shang-Chi is a martial artist.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Foundation",
                emoji: "🎸🎤",
                question: "Foundation is set in space.",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "The Bad Guys",
                emoji: "🏃💨",
                question: "The Bad Guys are reformed criminals.",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Dune",
                emoji: "🎯🎲",
                question: "Who directed Dune (2021)?",
                options: [
                    "Denis Villeneuve",
                    "Christopher Nolan"
                ],
                correct: 0
            },
            {
                topic: "Arcane",
                emoji: "🎰🃏",
                question: "What are the two cities?",
                options: [
                    "Piltover and Zaun",
                    "Demacia and Noxus"
                ],
                correct: 0
            },
            {
                topic: "No Time to Die",
                emoji: "🏎️💨",
                question: "Is this Daniel Craig's last Bond film?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 0
            },
            {
                topic: "The Tragedy of Macbeth",
                emoji: "🚁✈️",
                question: "Who plays Macbeth?",
                options: [
                    "Denzel Washington",
                    "Michael Fassbender"
                ],
                correct: 0
            },
            {
                topic: "Turning Red",
                emoji: "🦇🌃",
                question: "Where is Turning Red set?",
                options: [
                    "Toronto",
                    "San Francisco"
                ],
                correct: 0
            },
            {
                topic: "The Tender Bar",
                emoji: "👮🔍",
                question: "Who directed The Tender Bar?",
                options: [
                    "George Clooney",
                    "Ben Affleck"
                ],
                correct: 0
            },
            {
                topic: "Last Night in Soho",
                emoji: "💰💵",
                question: "What decade does Ellie travel to?",
                options: [
                    "1960s",
                    "1970s"
                ],
                correct: 0
            },
            {
                topic: "Coda",
                emoji: "🎭😂",
                question: "What does Ruby want to pursue?",
                options: [
                    "Singing",
                    "Acting"
                ],
                correct: 0
            },
            {
                topic: "Belfast",
                emoji: "🎪🤡",
                question: "Who directed Belfast?",
                options: [
                    "Kenneth Branagh",
                    "Martin McDonagh"
                ],
                correct: 0
            },
            {
                topic: "Being the Ricardos",
                emoji: "🎬📹",
                question: "Who plays Lucille Ball?",
                options: [
                    "Nicole Kidman",
                    "Cate Blanchett"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "The Lost Daughter",
                emoji: "🎬🎥",
                question: "What is Leda's profession?",
                options: [
                    "Professor",
                    "Writer",
                    "Artist"
                ],
                correct: 0
            },
            {
                topic: "Drive My Car",
                emoji: "🎭🎪",
                question: "What play is being rehearsed?",
                options: [
                    "Uncle Vanya",
                    "Three Sisters",
                    "The Cherry Orchard"
                ],
                correct: 0
            },
            {
                topic: "The French Dispatch",
                emoji: "🏆🌟",
            {
                topic: "Flee",
                emoji: "👑💍",
                question: "What technique is primarily used?",
                options: [
                    "Animation",
                    "Live action",
                    "Documentary footage"
                ],
                correct: 0
            },
            {
                topic: "The Hand of God",
                emoji: "🦸🦹",
                question: "Who directed The Hand of God?",
                options: [
                    "Paolo Sorrentino",
                    "Matteo Garrone",
                    "Luca Guadagnino"
                ],
                correct: 0
            },
            {
                topic: "Passing",
                emoji: "🚀🌌",
                question: "What decade is Passing set in?",
                options: [
                    "1920s",
                    "1930s",
                    "1940s"
                ],
                correct: 0
            },
            {
                topic: "Mass",
                emoji: "🧙🔮",
                question: "How many parents meet in Mass?",
                options: [
                    "4",
                    "2",
                    "6"
                ],
                correct: 0
            },
            {
                topic: "Swan Song",
                emoji: "🦖🦕",
                question: "What is Pat's former profession?",
                options: [
                    "Hairdresser",
                    "Singer",
                    "Dancer"
                ],
                correct: 0
            },
            {
                topic: "Annette",
                emoji: "🕷️🕸️",
                question: "What is unique about the baby?",
                options: [
                    "Puppet",
                    "CGI",
                    "Twin actors"
                ],
                correct: 0
            },
            {
                topic: "The Tragedy of Macbeth",
                emoji: "⚔️🛡️",
                question: "What format is the film shot in?",
                options: [
                    "Black and white",
                    "Color",
                    "Sepia"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "The Power of the Dog",
                emoji: "💎🏝️",
            {
                topic: "Azor",
                emoji: "🐉⚡",
                question: "What decade is Azor set in?",
                options: [
                    "1980s",
                    "1970s",
                    "1960s",
                    "1990s"
                ],
                correct: 1
            },
            {
                topic: "The Souvenir Part II",
                emoji: "🤖🔧",
                question: "What is Julie making a film about?",
                options: [
                    "Her relationship",
                    "Her mother",
                    "Her childhood",
                    "The war"
                ],
                correct: 0
            },
            {
                topic: "Prayers for the Stolen",
                emoji: "🏴‍☠️⚓",
                question: "What country is Prayers for the Stolen from?",
                options: [
                    "Mexico",
                    "Colombia",
                    "Argentina",
                    "Chile"
                ],
                correct: 0
            },
            {
                topic: "What Do We See When We Look at the Sky?",
                emoji: "👻👽",
            {
                topic: "Compartment No. 6",
                emoji: "🔫💥",
                question: "Where is the train headed?",
                options: [
                    "Murmansk",
                    "Moscow",
                    "St. Petersburg",
                    "Helsinki"
                ],
                correct: 0
            },
            {
                topic: "Benediction",
                emoji: "🎩🎪",
                question: "Who is the film's subject?",
                options: [
                    "Siegfried Sassoon",
                    "Wilfred Owen",
                    "Rupert Brooke",
                    "Robert Graves"
                ],
                correct: 0
            },
            {
                topic: "Bad Luck Banging",
                emoji: "🌹💔",
            {
                topic: "Nitram",
                emoji: "🎸🎤",
                question: "What tragedy is Nitram based on?",
                options: [
                    "Port Arthur massacre",
                    "Lindt Café siege",
                    "Hoddle Street massacre",
                    "Strathfield massacre"
                ],
                correct: 0
            },
            {
                topic: "A Chiara",
                emoji: "🏃💨",
                question: "Who directed A Chiara?",
                options: [
                    "Jonas Carpignano",
                    "Matteo Garrone",
                    "Paolo Sorrentino",
                    "Alice Rohrwacher"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "The Power of the Dog",
                emoji: "🎯🎲",
                question: "What animal does Peter dissect?",
                answer: "Rabbit"
            },
            {
                topic: "Azor",
                emoji: "🎰🃏",
                question: "Who directed Azor?",
                answer: "Andreas Fontana"
            },
            {
                topic: "Prayers for the Stolen",
                emoji: "🏎️💨",
                question: "Who directed Prayers for the Stolen?",
                answer: "Tatiana Huezo"
            },
            {
                topic: "What Do We See When We Look at the Sky?",
                emoji: "🚁✈️",
                question: "Who directed this Georgian film?",
                answer: "Alexandre Koberidze"
            },
            {
                topic: "Compartment No. 6",
                emoji: "🦇🌃",
                question: "Who directed Compartment No. 6?",
                answer: "Juho Kuosmanen"
            },
            {
                topic: "Benediction",
                emoji: "👮🔍",
                question: "Who directed Benediction?",
                answer: "Terence Davies"
            },
            {
                topic: "Bad Luck Banging",
                emoji: "💰💵",
            {
                topic: "The Velvet Underground",
                emoji: "🎭😂",
                question: "What is the band's first album called?",
                answer: "The Velvet Underground & Nico"
            },
            {
                topic: "Nitram",
                emoji: "🎪🤡",
                question: "Who directed Nitram?",
                answer: "Justin Kurzel"
            },
            {
                topic: "A Chiara",
                emoji: "🎬📹",
                question: "What Italian region is A Chiara set in?",
                answer: "Calabria"
            }
        ]
    }
};
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['movies'] = moviesTVQuestions;
}
