/**
 * WPCode Snippet: Riddles Chapter 2 - Puzzle Stories (4 LEVELS)
 * ==============================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 5
 * 
 * 100 Questions - 4 Difficulty Levels Only
 * Easy (25 - combined from medium) → Hard (25) → Expert (25) → Extreme (25)
 * REORGANIZED TO MATCH CHAPTER 1 STRUCTURE
 */

// Initialize ONCE
if (!window.riddlesQuestions) {
    window.riddlesQuestions = {};
}

window.riddlesQuestions[2] = {
    easy: [
        // 25 Easy questions (originally medium - 2 options)
        {
            topic: "Puzzle Stories",
            emoji: "📖🔍",
            question: "A man lives on the 10th floor. Every day he takes the elevator down to the lobby. But when he returns, he only takes it to the 7th floor and walks the rest. Why?",
            options: [
                    "He wants exercise",
                    "He's short and can't reach button 10"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪🔍",
            question: "A man is pushing his car along a road when he comes to a hotel. He shouts 'I'm bankrupt!' Why?",
            options: [
                    "His car broke down",
                    "He's playing Monopoly"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎨🎭",
            question: "A man looks at a painting and says: 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the painting?",
            options: [
                    "Himself",
                    "His son"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🌈",
            question: "Two girls were born to the same mother, on the same day, at the same time, in the same year. Yet they're not twins. How?",
            options: [
                    "They're not related",
                    "They're triplets"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩🔮",
            question: "A man rode into town on Friday. He stayed for three nights and left on Friday. How?",
            options: [
                    "He left on a different Friday",
                    "Friday is his horse's name"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🎨",
            question: "What can you catch but not throw?",
            options: [
                    "A ball",
                    "A cold"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠🌈",
            question: "What can you put in a wooden box that would make it lighter?",
            options: [
                    "Air",
                    "Holes"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩🎨",
            question: "A cowboy rode into town on Friday, stayed three days, and rode out again on Friday. How?",
            options: [
                    "Time travel",
                    "Friday is his horse"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🌟",
            question: "A murderer is condemned to death. He can choose from three rooms. The first is full of raging fires, the second has assassins with loaded guns, and the third has lions that haven't eaten in three years. Which is safest?",
            options: [
                    "The first",
                    "The third (lions are dead)"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🧩",
            question: "Two fathers and two sons go fishing. They each catch one fish. But only three fish were caught. How?",
            options: [
                    "One lied",
                    "Grandfather, father, and son"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠🌈",
            question: "A woman gave birth to two sons who were born on the same hour of the same day of the same year, but were not twins. How?",
            options: [
                    "Adoption",
                    "They were triplets"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭🔮",
            question: "A man is born in 1972 and dies in 1952 at the age of 25. How is this possible?",
            options: [
                    "B.C. years",
                    "Room numbers"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💭",
            question: "A man is wearing all black. Black shoes, socks, trousers, jumper, and gloves. He's walking down a black street with all the street lamps off. A black car with no headlights comes toward him but stops in time. How did the driver see him?",
            options: [
                    "Car had sensors",
                    "It was daytime"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🧠",
            question: "There's a one-story house where everything is yellow. The walls, carpet, furniture. What color are the stairs?",
            options: [
                    "Yellow",
                    "There are no stairs"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭🌟",
            question: "A man is dead in a phone booth. The phone is off the hook and the floor is covered with water and glass. How did he die?",
            options: [
                    "Electrocution",
                    "He was a fish in a bowl"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🌈",
            question: "A man has a bee in his hand. What's in his eye?",
            options: [
                    "Pollen",
                    "Beauty (beauty is in the eye of the beholder)"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🧩",
            question: "A man wants to escape from a room. There are only two exits. One through a door to a room of deadly gas, the other through a door with a man with a gun. How does he escape?",
            options: [
                    "Fight the man",
                    "Wait and take second door when man sleeps"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯💫",
            question: "A man jumps off a 20-story building. He survives without injury. How?",
            options: [
                    "Landed in safety net",
                    "He jumped from the first floor"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭✨",
            question: "A man in California can't legally marry his widow's sister. Why?",
            options: [
                    "It's illegal",
                    "He's dead"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🎨",
            question: "A man is looking at someone's picture. His friend asks who it is. The man replies, 'I have no brothers or sisters, but that man's father is my father's son.' Who is in the picture?",
            options: [
                    "Himself",
                    "His son"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🌟",
            question: "A man and his son get into a car accident. The man dies. The boy is rushed to the hospital and the surgeon says, 'I can't operate on this boy, he's my son.' How?",
            options: [
                    "Two fathers",
                    "Surgeon is his mother"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🧩",
            question: "Two mothers and two daughters went out to eat. Everyone ate one burger, yet only three burgers were eaten. How?",
            options: [
                    "Someone didn't eat",
                    "Grandmother, mother, daughter"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🎨",
            question: "A man is looking at a portrait. Someone asks him who he's looking at. He replies: 'Brothers and sisters I have none, but that man's father is my father's son.' Who's in the portrait?",
            options: [
                    "Himself",
                    "His son"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭✨",
            question: "A man rode into town on Tuesday. Two days later he rode home on Tuesday. How is this possible?",
            options: [
                    "Time zone",
                    "Tuesday is his horse"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩🌟",
            question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
            options: [
                    "A clock",
                    "A river"
                ],
            correct: 1
        }
    ],
    hard: [
        // 25 Hard questions (3 options)
        {
            topic: "Puzzle Stories",
            emoji: "🎭💭",
            question: "A man is found dead in a room with 53 bicycles. How did he die?",
            options: [
                    "Heart attack",
                    "Playing cards (cheating)",
                    "Bicycle accident"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈💡",
            question: "Romeo and Juliet are found dead on the floor with water and glass around them. How did they die?",
            options: [
                    "They're fish and bowl broke",
                    "Murder",
                    "Poisoning"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🔮",
            question: "A man lives in a house with four walls. Each wall has a window facing south. A bear walks by. What color is the bear?",
            options: [
                    "White (polar bear)",
                    "Black",
                    "Brown"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯💡",
            question: "A woman has 5 daughters. Each daughter has 1 brother. How many children does she have?",
            options: [
                    "10 children",
                    "6 children",
                    "5 children"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪🌟",
            question: "A man is found hanging in a barn with a pile of sawdust beneath him. What happened?",
            options: [
                    "He stood on ice that melted",
                    "He fell",
                    "He was murdered"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🧩",
            question: "What goes in hard, comes out soft, and you blow continuously?",
            options: [
                    "Balloon",
                    "Bubble gum",
                    "Chewing gum"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭💫",
            question: "A man is found dead with a cassette recorder in one hand and a gun in the other. When police press play, they hear: 'I can't go on, I have nothing to live for.' Then a gunshot. What happened?",
            options: [
                    "Murder (tape was rewound)",
                    "Accident",
                    "Suicide"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪💭",
            question: "A man is running along a corridor with a piece of paper. The lights flicker and he dies. What happened?",
            options: [
                    "Murdered",
                    "Airplane crash",
                    "Heart attack"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠💫",
            question: "A man is running home. He is about to reach it when a man wearing a mask jumps out. He turns and runs back where he came from. What's happening?",
            options: [
                    "Halloween",
                    "Robbery",
                    "Playing baseball"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮💭",
            question: "A man is in a bar. He looks at the bartender and says, 'Banana.' The bartender smiles. What happened?",
            options: [
                    "Inside joke",
                    "Password to secret club",
                    "Bartender is deaf"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪💡",
            question: "A man is found murdered on Sunday morning. His wife calls police saying she was sleeping. Police question the wife and staff. The cook says she was cooking breakfast, the maid says she was getting mail, the butler says he was polishing silverware. Who did it?",
            options: [
                    "The butler",
                    "The maid (no mail Sunday)",
                    "The cook"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💭",
            question: "A man leaves home, makes three left turns, and returns home where he finds two masked men. What's happening?",
            options: [
                    "Robbery",
                    "Playing baseball",
                    "Halloween"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠✨",
            question: "A man walks into a bar and asks for a drink. The bartender pulls out a gun and points it at him. The man says 'Thank you' and walks out. Why?",
            options: [
                    "He had hiccups",
                    "Joke between friends",
                    "Wrong bar"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💭",
            question: "A man is found dead with a match in his hand in the middle of a field. What happened?",
            options: [
                    "Murder",
                    "Hot air balloon crash",
                    "Lightning strike"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪✨",
            question: "A man is replacing a wheel on his car when four of the five nuts are blown by a gust of wind into a sewer. A boy nearby tells him an idea. The man thanks the boy and drives away safely. What was the idea?",
            options: [
                    "Call for help",
                    "Tow truck",
                    "Take one nut from each other wheel"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💡",
            question: "A man comes home to find his wife dead on the floor. There are pieces of glass and some water on the floor with her. He knows immediately how she died. How?",
            options: [
                    "She choked on ice",
                    "Glass of water",
                    "Fishbowl broke"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠🔮",
            question: "A man is trapped in a room with two doors. One door leads to a room of fire, the other to a room with lions that haven't eaten in 6 months. Which is safer?",
            options: [
                    "Fire room",
                    "Both unsafe",
                    "Lions (they're dead)"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎨💫",
            question: "A man is found dead in a room with 52 bicycles. How did he die?",
            options: [
                    "Bicycle accident",
                    "Poisoning",
                    "Cheating at cards"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪💡",
            question: "A man is found dead in a locked car with the windows up and the doors locked. There's no damage to the car. How did he die?",
            options: [
                    "Heart attack",
                    "Suffocation",
                    "Carbon monoxide poisoning"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💫",
            question: "A man is pushed out of an airplane without a parachute. He survives with no injuries. How?",
            options: [
                    "Had hidden parachute",
                    "Landed in water",
                    "Plane was on ground"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠💡",
            question: "A man is running through a field, screaming. He dies. A few seconds later, another man takes the exact same route, screaming, and dies. What's happening?",
            options: [
                    "Landmine",
                    "Parachute didn't open",
                    "Sniper"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮💭",
            question: "A man is found hanging from a 30-foot ceiling. There's no furniture or anything to climb on. The only evidence is a puddle on the floor. How did he hang himself?",
            options: [
                    "Rope was longer",
                    "Ladder removed",
                    "Stood on ice"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪💡",
            question: "A man is found murdered on a Sunday morning. His wife said she was reading. The butler said he was taking a shower. The chef said he was making breakfast. The maid said she was getting the mail. Who did it?",
            options: [
                    "The butler",
                    "The maid (no mail Sunday)",
                    "The wife"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠🎨",
            question: "A man is walking in the middle of the night and sees two headlights. He's scared and starts running. The headlights follow him wherever he goes. He can't escape. What's happening?",
            options: [
                    "Stalker",
                    "Hallucinating",
                    "He's on train tracks"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🔮",
            question: "A man is found dead with a tape recorder in his hand. When police play it, they hear: 'I'm about to die, the killer is...' then a gunshot. How do they know it's murder?",
            options: [
                    "No gun found",
                    "Fingerprints on gun",
                    "Dead man can't rewind tape"
                ],
            correct: 2
        }
    ],
    expert: [
        // 25 Expert questions (4 options)
        {
            topic: "Puzzle Stories",
            emoji: "🧩🌟",
            question: "A woman shoots her husband, then holds him underwater for 5 minutes. Finally, she hangs him. But 10 minutes later they both go out and enjoy a wonderful dinner together. How?",
            options: [
                    "It was a play",
                    "She's a photographer",
                    "She's a magician",
                    "He's immortal"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🧠",
            question: "A man hangs himself in a room with nothing but a puddle of water beneath him. The ceiling is 20 feet high. How did he do it?",
            options: [
                    "He stood on ice",
                    "He climbed a ladder",
                    "He jumped",
                    "Magic trick"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💭",
            question: "A man is lying dead in a field with an unopened package beside him. There are no other creatures around. How did he die?",
            options: [
                    "His parachute",
                    "Heart attack",
                    "Lightning strike",
                    "Poison in package"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🧠",
            question: "A cabin in the woods contains no living creatures. Inside are 53 people, all dead. How did they die?",
            options: [
                    "Airplane crash",
                    "Poisoning",
                    "Fire",
                    "Gas leak"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💭",
            question: "A man walks all day on two healthy legs but goes to bed with six legs at night. How?",
            options: [
                    "He's a centaur",
                    "He wears prosthetics",
                    "Magic",
                    "Bed has four legs"
                ],
            correct: 3
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮💡",
            question: "A man is trapped in a room. There are only two doors. Through the first door is a room made of magnifying glass. Through the second door is a fire-breathing dragon. How does he escape?",
            options: [
                    "Wait until night, use first door",
                    "Break magnifying glass",
                    "Fight dragon",
                    "Wait for rescue"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🎯",
            question: "A man is driving a black car. His lights are off. The moon isn't out. A woman wearing all black starts crossing the street. How does he see her?",
            options: [
                    "Car sensors",
                    "She has reflectors",
                    "Street lights",
                    "It's daytime"
                ],
            correct: 3
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🔮",
            question: "A man went to a party and drank some punch. He then left early. Everyone who stayed at the party died of poisoning. How did he survive?",
            options: [
                    "He didn't drink much",
                    "Poison was in ice cubes",
                    "Immune",
                    "He had antidote"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭✨",
            question: "Acting on an anonymous tip, police raid a house. They arrest the man living there for suspicion of murder. They don't know the victim's name, where they were killed, or when. How can they arrest him?",
            options: [
                    "DNA evidence",
                    "Confession",
                    "Witness saw him",
                    "The man was the tip caller"
                ],
            correct: 3
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🔍",
            question: "A man calls his wife from his car and tells her he'll be home by 8pm. At 8:03pm his car smashes into the front of his house, killing him instantly. How did the wife know to call 911 at exactly 8:00pm?",
            options: [
                    "Psychic vision",
                    "She saw brake failure",
                    "Lucky guess",
                    "She caused the crash"
                ],
            correct: 3
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍✨",
            question: "A man is found dead at the bottom of a building. A detective arrives and sees an open window at the top. He closes the case immediately. What happened?",
            options: [
                    "Suicide note visible",
                    "Security footage",
                    "The man jumped",
                    "Obvious accident"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🎪",
            question: "A woman shoots her husband. She holds him underwater for over 5 minutes. Then she hangs him. Right after, they go out and enjoy dinner. How?",
            options: [
                    "He's immortal",
                    "It's a play",
                    "She's a photographer",
                    "Dream sequence"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎨🔮",
            question: "A man was walking in the rain with no hat or umbrella. His clothes got soaked, but not a single hair on his head got wet. How?",
            options: [
                    "Running fast",
                    "He's bald",
                    "Wearing hood",
                    "Inside building"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🎯",
            question: "A wealthy man lives alone in a small cottage. Being partially handicapped, he had everything delivered to his cottage. One Thursday the mailman came to deliver a package and saw the man dead in his home. The mailman immediately called the police. Why did the mailman suspect foul play?",
            options: [
                    "Blood visible",
                    "Mail piled up for days",
                    "Knew his schedule",
                    "Door was open"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮🔍",
            question: "A man is found hanging in an empty locked room. The only thing in the room besides the body is a puddle of water. How did he manage to hang himself?",
            options: [
                    "Ladder disappeared",
                    "Climbed rope",
                    "Jumped from chair",
                    "Stood on ice block"
                ],
            correct: 3
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🎪",
            question: "A man enters a cabin and immediately knows someone has died. The cabin has no windows or doors. How does he know?",
            options: [
                    "Airplane cabin",
                    "Train compartment",
                    "Submarine",
                    "Elevator"
                ],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🎯",
            question: "A man is dead in his office. He has a cassette recorder on his desk. When police play it back, they hear 'I have nothing to live for' and a gunshot. How do they know it's murder?",
            options: [
                    "No gun found",
                    "Tape was rewound",
                    "Fingerprints",
                    "Door was locked"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩✨",
            question: "A body is discovered in a park at six in the morning. The police are called. The detective interviews the groundskeeper, the cook, the mailman, and the gardener. The mailman confesses. Why did the mailman confess?",
            options: [
                    "Evidence against him",
                    "Guilty conscience",
                    "He was lying",
                    "Mail isn't delivered at 6am"
                ],
            correct: 3
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🔍",
            question: "A man walks into a restaurant and orders albatross. After one bite, he goes home and kills himself. Why?",
            options: [
                    "Bad memory triggered",
                    "Food was poisoned",
                    "He realized he ate his wife",
                    "He was allergic"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟✨",
            question: "A woman has incontrovertible proof in court that her husband was murdered by her sister. The judge declares, 'This is her sister and her husband's murderer, but I cannot send her to jail.' Why?",
            options: [
                    "Insanity plea",
                    "They're conjoined twins",
                    "Diplomatic immunity",
                    "Already in jail"
                ],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎨🔮",
            question: "A man walks into a bar, orders a drink, then immediately pulls out a gun and shoots the bartender. The bartender thanks him. Why?",
            options: [
                    "Acting rehearsal",
                    "Joke between friends",
                    "Cured his hiccups",
                    "Blank bullets"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🎯",
            question: "A man and his wife raced through the streets. They stopped and the husband got out of the car. He came back with a baby. They raced back to the same place. What happened?",
            options: [
                    "Adoption",
                    "Babysitting",
                    "Hospital birth",
                    "Kidnapping"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🧩",
            question: "A man is found dead in his cabin in the woods in the middle of winter. The cabin is locked from the inside. The only clue is a pile of water and sawdust. How did he die?",
            options: [
                    "Murder",
                    "Hypothermia",
                    "Stood on ice, melted",
                    "Carbon monoxide"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💭",
            question: "A man goes to a funeral. There he meets a woman. He tries to get her number but she leaves before he can. A week later he kills his brother. Why?",
            options: [
                    "Inheritance",
                    "Accident",
                    "To see her at funeral",
                    "Jealousy"
                ],
            correct: 2
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💡",
            question: "A man enters his house and sees his wife hanging from the ceiling fan. There's a puddle of water below her and the fan is on. What happened?",
            options: [
                    "Someone helped",
                    "Suicide note",
                    "Pushed from ladder",
                    "She stood on ice"
                ],
            correct: 3
        }
    ],
    extreme: [
        // 25 Extreme questions (text answer)
        {
            topic: "Puzzle Stories",
            emoji: "🔮✨",
            question: "A man is found dead in a circular mansion. The victim is the owner. The victim was murdered. There are three suspects: the chef, the maid, and the gardener. The chef claimed he was cooking breakfast. The maid claimed she was dusting the corners. The gardener claimed he was watering the plants. Who killed the owner?",
            answer: "The maid or Maid"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💫",
            question: "A man lives on the 100th floor of an apartment building. On rainy days he rides the elevator all the way up. On sunny days he rides it to the 70th floor and walks up the stairs. Why?",
            answer: "He's short and uses umbrella to reach 100 on rainy days or He can reach higher button with umbrella"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪✨",
            question: "A man and his son are in a car accident. The father dies instantly. The boy is taken to the nearest hospital where the surgeon says, 'I can't operate on this boy. He's my son!' How is this possible?",
            answer: "The surgeon is his mother or She's his mother or The surgeon is female"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭💫",
            question: "A man dies of thirst in his own home despite having running water. How is this possible?",
            answer: "He was stuck or trapped or couldn't reach it or He was paralyzed"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈✨",
            question: "Five people were eating apples. A finished before B but behind C. D finished before E but behind B. What was the finishing order?",
            answer: "CABDE or C, A, B, D, E"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪🔍",
            question: "A man is looking at a photograph. Someone asks who he's looking at. He replies: 'Brothers and sisters have I none, but this man's father is my father's son.' Who is in the photograph?",
            answer: "His son"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍✨",
            question: "A man pushed his car. He stopped when he reached a hotel at which point he knew he was bankrupt. What was happening?",
            answer: "Playing Monopoly"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯💡",
            question: "A man is found dead in a circular room. A knife is embedded in his back. Written on the wall in blood are the words '7-2-1-5-4-9-10-8-11.' What do they mean?",
            answer: "Months of the year or Calendar months or The order spells the killer's name"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🎪",
            question: "A man is found dead in his study. He was killed by a blow to the head by a heavy book. The only other person in the house was his wife who was in the kitchen. How did she do it?",
            answer: "She dropped it from upstairs or She was upstairs or The study was below kitchen"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎨💫",
            question: "A man walks into an art museum and concentrates on one painting. A guard walks over and the man says one word, causing the guard to shoot him. What was the word?",
            answer: "Fire or The word was fire"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🎯",
            question: "A man works on the 50th floor. Every day he takes the elevator from the ground floor to the 25th floor and walks up 25 flights of stairs. Why doesn't he take the elevator all the way up?",
            answer: "He's short and can't reach the 50 button or He can only reach button 25"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯💫",
            question: "A man is looking at someone's picture. His friend asks who it is. The man replies, 'I have no brothers or sisters, but that man's father is my father's son.' Who is in the picture?",
            answer: "His son"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪💡",
            question: "A box without hinges, key, or lid, yet golden treasure inside is hid. What is it?",
            answer: "An egg"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🔍",
            question: "What has hands but cannot clap?",
            answer: "A clock"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭💫",
            question: "A man and his wife were driving in their car when it ran out of gas. The man told his wife to stay in the car. He came back with gas, only to find his wife dead and a stranger in the car. What happened?",
            answer: "She gave birth or She was pregnant and the baby was born"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟💭",
            question: "A man went to a party and drank some of the punch. He then left early. Everyone at the party who drank the punch subsequently died of poisoning. Why did the man not die?",
            answer: "Poison was in the ice cubes or Ice had poison or He left before ice melted"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💫",
            question: "Five sisters are busy. Ann is reading, Rose is cooking, Katie is playing chess, and Emily is doing laundry. What is the fifth sister doing?",
            answer: "Playing chess with Katie or Playing chess"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪🌈",
            question: "What belongs to you but other people use it more than you?",
            answer: "Your name"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮💭",
            question: "A man lives on the 25th floor. Every morning he takes the elevator down. Every evening he takes the elevator to the 20th floor and walks up 5 flights. On rainy days he takes the elevator all the way up. Why?",
            answer: "He's short and uses umbrella to reach button 25 or He can reach higher with umbrella"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🎪",
            question: "A man is driving his car. He turns on the radio and hears a news report. He immediately drives off a cliff, killing himself. What did he hear?",
            answer: "He was blind and heard he got his sight back or Report about himself"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠✨",
            question: "A man is lying dead with a backpack on, face down in the desert. What happened?",
            answer: "His parachute didn't open or Skydiving accident"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮🌈",
            question: "A man is driving down the road and his car breaks down near a monastery. He goes to the monastery and knocks on the door. A monk answers and the man explains his situation. The monk says he can stay the night. At night he hears strange noises. In the morning he asks what the sound was. The monk says 'I can't tell you, you're not a monk.' The man leaves. Years later his car breaks down at the same place. He goes back to the monastery and asks to become a monk. They agree. Then what does he discover?",
            answer: "The monks at the door or Other monks or What was making the sound"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🎪",
            question: "A man wakes up in a room with no windows or doors. The only things in the room are a mirror and a table. How does he escape?",
            answer: "Look in mirror see what he saw, use saw to cut table in half, two halves make a whole, escape through hole or Use saw from mirror"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🔮",
            question: "A man goes to a funeral of a woman he doesn't know. He sees another woman there and falls in love at first sight. He doesn't get her name. Later he kills his own mother. Why?",
            answer: "To see the woman at another funeral or Hope she attends funeral"
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🌟",
            question: "What seven-letter word has hundreds of letters in it?",
            answer: "Mailbox"
        }
    ]
};

console.log('✅ Chapter 2 (4 levels):', 
    (window.riddlesQuestions[2].easy.length +
     window.riddlesQuestions[2].hard.length +
     window.riddlesQuestions[2].expert.length +
     window.riddlesQuestions[2].extreme.length) + ' total riddles');
