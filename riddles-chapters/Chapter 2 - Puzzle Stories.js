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
            options: ["He's short and can't reach button 10", "He wants exercise"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪🔍",
            question: "A man is pushing his car along a road when he comes to a hotel. He shouts 'I'm bankrupt!' Why?",
            options: ["He's playing Monopoly", "His car broke down"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎨🎭",
            question: "A man looks at a painting and says: 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the painting?",
            options: ["His son", "Himself"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🌈",
            question: "Two girls were born to the same mother, on the same day, at the same time, in the same year. Yet they're not twins. How?",
            options: ["They're triplets", "They're not related"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩🔮",
            question: "A man rode into town on Friday. He stayed for three nights and left on Friday. How?",
            options: ["Friday is his horse's name", "He left on a different Friday"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🎨",
            question: "What can you catch but not throw?",
            options: ["A cold", "A ball"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠🌈",
            question: "What can you put in a wooden box that would make it lighter?",
            options: ["Holes", "Air"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩🎨",
            question: "A cowboy rode into town on Friday, stayed three days, and rode out again on Friday. How?",
            options: ["Friday is his horse", "Time travel"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🌟",
            question: "A murderer is condemned to death. He can choose from three rooms. The first is full of raging fires, the second has assassins with loaded guns, and the third has lions that haven't eaten in three years. Which is safest?",
            options: ["The third (lions are dead)", "The first"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🧩",
            question: "Two fathers and two sons go fishing. They each catch one fish. But only three fish were caught. How?",
            options: ["Grandfather, father, and son", "One lied"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠🌈",
            question: "A woman gave birth to two sons who were born on the same hour of the same day of the same year, but were not twins. How?",
            options: ["They were triplets", "Adoption"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭🔮",
            question: "A man is born in 1972 and dies in 1952 at the age of 25. How is this possible?",
            options: ["Room numbers", "B.C. years"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💭",
            question: "A man is wearing all black. Black shoes, socks, trousers, jumper, and gloves. He's walking down a black street with all the street lamps off. A black car with no headlights comes toward him but stops in time. How did the driver see him?",
            options: ["It was daytime", "Car had sensors"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🧠",
            question: "There's a one-story house where everything is yellow. The walls, carpet, furniture. What color are the stairs?",
            options: ["There are no stairs", "Yellow"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭🌟",
            question: "A man is dead in a phone booth. The phone is off the hook and the floor is covered with water and glass. How did he die?",
            options: ["He was a fish in a bowl", "Electrocution"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🌈",
            question: "A man has a bee in his hand. What's in his eye?",
            options: ["Beauty (beauty is in the eye of the beholder)", "Pollen"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🧩",
            question: "A man wants to escape from a room. There are only two exits. One through a door to a room of deadly gas, the other through a door with a man with a gun. How does he escape?",
            options: ["Wait and take second door when man sleeps", "Fight the man"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯💫",
            question: "A man jumps off a 20-story building. He survives without injury. How?",
            options: ["He jumped from the first floor", "Landed in safety net"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭✨",
            question: "A man in California can't legally marry his widow's sister. Why?",
            options: ["He's dead", "It's illegal"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🎨",
            question: "A man is looking at someone's picture. His friend asks who it is. The man replies, 'I have no brothers or sisters, but that man's father is my father's son.' Who is in the picture?",
            options: ["His son", "Himself"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍🌟",
            question: "A man and his son get into a car accident. The man dies. The boy is rushed to the hospital and the surgeon says, 'I can't operate on this boy, he's my son.' How?",
            options: ["Surgeon is his mother", "Two fathers"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🧩",
            question: "Two mothers and two daughters went out to eat. Everyone ate one burger, yet only three burgers were eaten. How?",
            options: ["Grandmother, mother, daughter", "Someone didn't eat"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🎨",
            question: "A man is looking at a portrait. Someone asks him who he's looking at. He replies: 'Brothers and sisters I have none, but that man's father is my father's son.' Who's in the portrait?",
            options: ["His son", "Himself"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭✨",
            question: "A man rode into town on Tuesday. Two days later he rode home on Tuesday. How is this possible?",
            options: ["Tuesday is his horse", "Time zone"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩🌟",
            question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
            options: ["A river", "A clock"],
            correct: 0
        }
    ],
    hard: [
        // 25 Hard questions (3 options)
        {
            topic: "Puzzle Stories",
            emoji: "🎭💭",
            question: "A man is found dead in a room with 53 bicycles. How did he die?",
            options: ["Playing cards (cheating)", "Bicycle accident", "Heart attack"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈💡",
            question: "Romeo and Juliet are found dead on the floor with water and glass around them. How did they die?",
            options: ["They're fish and bowl broke", "Poisoning", "Murder"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🔮",
            question: "A man lives in a house with four walls. Each wall has a window facing south. A bear walks by. What color is the bear?",
            options: ["White (polar bear)", "Brown", "Black"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯💡",
            question: "A woman has 5 daughters. Each daughter has 1 brother. How many children does she have?",
            options: ["6 children", "10 children", "5 children"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪🌟",
            question: "A man is found hanging in a barn with a pile of sawdust beneath him. What happened?",
            options: ["He stood on ice that melted", "He was murdered", "He fell"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🧩",
            question: "What goes in hard, comes out soft, and you blow continuously?",
            options: ["Chewing gum", "Bubble gum", "Balloon"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭💫",
            question: "A man is found dead with a cassette recorder in one hand and a gun in the other. When police press play, they hear: 'I can't go on, I have nothing to live for.' Then a gunshot. What happened?",
            options: ["Murder (tape was rewound)", "Suicide", "Accident"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪💭",
            question: "A man is running along a corridor with a piece of paper. The lights flicker and he dies. What happened?",
            options: ["Airplane crash", "Heart attack", "Murdered"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠💫",
            question: "A man is running home. He is about to reach it when a man wearing a mask jumps out. He turns and runs back where he came from. What's happening?",
            options: ["Playing baseball", "Robbery", "Halloween"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮💭",
            question: "A man is in a bar. He looks at the bartender and says, 'Banana.' The bartender smiles. What happened?",
            options: ["Password to secret club", "Inside joke", "Bartender is deaf"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪💡",
            question: "A man is found murdered on Sunday morning. His wife calls police saying she was sleeping. Police question the wife and staff. The cook says she was cooking breakfast, the maid says she was getting mail, the butler says he was polishing silverware. Who did it?",
            options: ["The maid (no mail Sunday)", "The cook", "The butler"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💭",
            question: "A man leaves home, makes three left turns, and returns home where he finds two masked men. What's happening?",
            options: ["Playing baseball", "Robbery", "Halloween"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠✨",
            question: "A man walks into a bar and asks for a drink. The bartender pulls out a gun and points it at him. The man says 'Thank you' and walks out. Why?",
            options: ["He had hiccups", "Wrong bar", "Joke between friends"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💭",
            question: "A man is found dead with a match in his hand in the middle of a field. What happened?",
            options: ["Hot air balloon crash", "Lightning strike", "Murder"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪✨",
            question: "A man is replacing a wheel on his car when four of the five nuts are blown by a gust of wind into a sewer. A boy nearby tells him an idea. The man thanks the boy and drives away safely. What was the idea?",
            options: ["Take one nut from each other wheel", "Call for help", "Tow truck"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💡",
            question: "A man comes home to find his wife dead on the floor. There are pieces of glass and some water on the floor with her. He knows immediately how she died. How?",
            options: ["She choked on ice", "Fishbowl broke", "Glass of water"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠🔮",
            question: "A man is trapped in a room with two doors. One door leads to a room of fire, the other to a room with lions that haven't eaten in 6 months. Which is safer?",
            options: ["Lions (they're dead)", "Fire room", "Both unsafe"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎨💫",
            question: "A man is found dead in a room with 52 bicycles. How did he die?",
            options: ["Cheating at cards", "Bicycle accident", "Poisoning"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪💡",
            question: "A man is found dead in a locked car with the windows up and the doors locked. There's no damage to the car. How did he die?",
            options: ["Carbon monoxide poisoning", "Heart attack", "Suffocation"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💫",
            question: "A man is pushed out of an airplane without a parachute. He survives with no injuries. How?",
            options: ["Plane was on ground", "Landed in water", "Had hidden parachute"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠💡",
            question: "A man is running through a field, screaming. He dies. A few seconds later, another man takes the exact same route, screaming, and dies. What's happening?",
            options: ["Parachute didn't open", "Landmine", "Sniper"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮💭",
            question: "A man is found hanging from a 30-foot ceiling. There's no furniture or anything to climb on. The only evidence is a puddle on the floor. How did he hang himself?",
            options: ["Stood on ice", "Ladder removed", "Rope was longer"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎪💡",
            question: "A man is found murdered on a Sunday morning. His wife said she was reading. The butler said he was taking a shower. The chef said he was making breakfast. The maid said she was getting the mail. Who did it?",
            options: ["The maid (no mail Sunday)", "The wife", "The butler"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧠🎨",
            question: "A man is walking in the middle of the night and sees two headlights. He's scared and starts running. The headlights follow him wherever he goes. He can't escape. What's happening?",
            options: ["He's on train tracks", "Stalker", "Hallucinating"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🔮",
            question: "A man is found dead with a tape recorder in his hand. When police play it, they hear: 'I'm about to die, the killer is...' then a gunshot. How do they know it's murder?",
            options: ["Dead man can't rewind tape", "Fingerprints on gun", "No gun found"],
            correct: 0
        }
    ],
    expert: [
        // 25 Expert questions (4 options)
        {
            topic: "Puzzle Stories",
            emoji: "🧩🌟",
            question: "A woman shoots her husband, then holds him underwater for 5 minutes. Finally, she hangs him. But 10 minutes later they both go out and enjoy a wonderful dinner together. How?",
            options: ["She's a magician", "She's a photographer", "It was a play", "He's immortal"],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎯🧠",
            question: "A man hangs himself in a room with nothing but a puddle of water beneath him. The ceiling is 20 feet high. How did he do it?",
            options: ["He climbed a ladder", "He stood on ice", "He jumped", "Magic trick"],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💭",
            question: "A man is lying dead in a field with an unopened package beside him. There are no other creatures around. How did he die?",
            options: ["His parachute", "Poison in package", "Heart attack", "Lightning strike"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🧠",
            question: "A cabin in the woods contains no living creatures. Inside are 53 people, all dead. How did they die?",
            options: ["Airplane crash", "Gas leak", "Fire", "Poisoning"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💭",
            question: "A man walks all day on two healthy legs but goes to bed with six legs at night. How?",
            options: ["Bed has four legs", "He's a centaur", "He wears prosthetics", "Magic"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮💡",
            question: "A man is trapped in a room. There are only two doors. Through the first door is a room made of magnifying glass. Through the second door is a fire-breathing dragon. How does he escape?",
            options: ["Wait until night, use first door", "Fight dragon", "Break magnifying glass", "Wait for rescue"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🎯",
            question: "A man is driving a black car. His lights are off. The moon isn't out. A woman wearing all black starts crossing the street. How does he see her?",
            options: ["It's daytime", "Street lights", "She has reflectors", "Car sensors"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🔮",
            question: "A man went to a party and drank some punch. He then left early. Everyone who stayed at the party died of poisoning. How did he survive?",
            options: ["Poison was in ice cubes", "He had antidote", "He didn't drink much", "Immune"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎭✨",
            question: "Acting on an anonymous tip, police raid a house. They arrest the man living there for suspicion of murder. They don't know the victim's name, where they were killed, or when. How can they arrest him?",
            options: ["The man was the tip caller", "DNA evidence", "Confession", "Witness saw him"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🔍",
            question: "A man calls his wife from his car and tells her he'll be home by 8pm. At 8:03pm his car smashes into the front of his house, killing him instantly. How did the wife know to call 911 at exactly 8:00pm?",
            options: ["She saw brake failure", "She caused the crash", "Psychic vision", "Lucky guess"],
            correct: 1
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍✨",
            question: "A man is found dead at the bottom of a building. A detective arrives and sees an open window at the top. He closes the case immediately. What happened?",
            options: ["The man jumped", "Suicide note visible", "Obvious accident", "Security footage"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🎪",
            question: "A woman shoots her husband. She holds him underwater for over 5 minutes. Then she hangs him. Right after, they go out and enjoy dinner. How?",
            options: ["She's a photographer", "It's a play", "He's immortal", "Dream sequence"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎨🔮",
            question: "A man was walking in the rain with no hat or umbrella. His clothes got soaked, but not a single hair on his head got wet. How?",
            options: ["He's bald", "Inside building", "Wearing hood", "Running fast"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🎯",
            question: "A wealthy man lives alone in a small cottage. Being partially handicapped, he had everything delivered to his cottage. One Thursday the mailman came to deliver a package and saw the man dead in his home. The mailman immediately called the police. Why did the mailman suspect foul play?",
            options: ["Mail piled up for days", "Door was open", "Blood visible", "Knew his schedule"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔮🔍",
            question: "A man is found hanging in an empty locked room. The only thing in the room besides the body is a puddle of water. How did he manage to hang himself?",
            options: ["Stood on ice block", "Climbed rope", "Jumped from chair", "Ladder disappeared"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🎪",
            question: "A man enters a cabin and immediately knows someone has died. The cabin has no windows or doors. How does he know?",
            options: ["Airplane cabin", "Elevator", "Train compartment", "Submarine"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🎯",
            question: "A man is dead in his office. He has a cassette recorder on his desk. When police play it back, they hear 'I have nothing to live for' and a gunshot. How do they know it's murder?",
            options: ["Tape was rewound", "No gun found", "Door was locked", "Fingerprints"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩✨",
            question: "A body is discovered in a park at six in the morning. The police are called. The detective interviews the groundskeeper, the cook, the mailman, and the gardener. The mailman confesses. Why did the mailman confess?",
            options: ["Mail isn't delivered at 6am", "He was lying", "Evidence against him", "Guilty conscience"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🔍",
            question: "A man walks into a restaurant and orders albatross. After one bite, he goes home and kills himself. Why?",
            options: ["He realized he ate his wife", "Food was poisoned", "He was allergic", "Bad memory triggered"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟✨",
            question: "A woman has incontrovertible proof in court that her husband was murdered by her sister. The judge declares, 'This is her sister and her husband's murderer, but I cannot send her to jail.' Why?",
            options: ["They're conjoined twins", "Diplomatic immunity", "Insanity plea", "Already in jail"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🎨🔮",
            question: "A man walks into a bar, orders a drink, then immediately pulls out a gun and shoots the bartender. The bartender thanks him. Why?",
            options: ["Cured his hiccups", "Acting rehearsal", "Blank bullets", "Joke between friends"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌈🎯",
            question: "A man and his wife raced through the streets. They stopped and the husband got out of the car. He came back with a baby. They raced back to the same place. What happened?",
            options: ["Hospital birth", "Kidnapping", "Adoption", "Babysitting"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🌟🧩",
            question: "A man is found dead in his cabin in the woods in the middle of winter. The cabin is locked from the inside. The only clue is a pile of water and sawdust. How did he die?",
            options: ["Stood on ice, melted", "Hypothermia", "Carbon monoxide", "Murder"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🔍💭",
            question: "A man goes to a funeral. There he meets a woman. He tries to get her number but she leaves before he can. A week later he kills his brother. Why?",
            options: ["To see her at funeral", "Jealousy", "Inheritance", "Accident"],
            correct: 0
        },
        {
            topic: "Puzzle Stories",
            emoji: "🧩💡",
            question: "A man enters his house and sees his wife hanging from the ceiling fan. There's a puddle of water below her and the fan is on. What happened?",
            options: ["She stood on ice", "Pushed from ladder", "Suicide note", "Someone helped"],
            correct: 0
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
