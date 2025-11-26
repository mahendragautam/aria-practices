/**
 * WPCode Snippet: Riddles Chapter 1 - Trick Questions (4 LEVELS)
 * ===============================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 5
 * 
 * 85 Questions - 4 Difficulty Levels Only
 * Easy (10) → Hard (25) → Expert (25) → Extreme (25)
 * MEDIUM REMOVED
 */

// Initialize ONCE
if (!window.riddlesQuestions) {
    window.riddlesQuestions = {};
}

window.riddlesQuestions[1] = {
    easy: [
        {
            topic: "Trick Questions",
            emoji: "🤔❓",
            question: "What has to be broken before you can use it?",
            options: ["An egg", "A promise", "A stick"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🧩",
            question: "What month of the year has 28 days?",
            options: ["February", "All of them", "None"],
            correct: 1
        },
        {
            topic: "Trick Questions",
            emoji: "🔍💡",
            question: "What goes up but never comes down?",
            options: ["Your age", "A balloon", "Smoke"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎪🎭",
            question: "What can you catch but not throw?",
            options: ["A cold", "A ball", "Water"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌟✨",
            question: "What gets wetter the more it dries?",
            options: ["A towel", "Rain", "A sponge"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎨🖼️",
            question: "What has a head and a tail but no body?",
            options: ["A snake", "A coin", "A fish"],
            correct: 1
        },
        {
            topic: "Trick Questions",
            emoji: "🔑🗝️",
            question: "What has many keys but can't open locks?",
            options: ["A piano", "A keychain", "A map"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🎲",
            question: "What can you break without touching it?",
            options: ["A promise", "Glass", "Ice"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌈🎨",
            question: "What has a neck but no head?",
            options: ["A bottle", "A giraffe", "A shirt"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎪🎯",
            question: "What gets bigger the more you take away?",
            options: ["A hole", "A balloon", "Debt"],
            correct: 0
        }
    ],
    hard: [
        {
            topic: "Trick Questions",
            emoji: "🧠🔮",
            question: "What can you put in a bucket to make it weigh less?",
            options: ["A hole", "Air", "Helium"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎯💭",
            question: "If you drop me, I'm sure to crack, but smile at me and I'll smile back. What am I?",
            options: ["An egg", "A mirror", "A joke"],
            correct: 1
        },
        {
            topic: "Trick Questions",
            emoji: "🔍✨",
            question: "What is seen in the middle of March and April but can't be seen at the beginning or end?",
            options: ["The letter R", "Spring", "Rain"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎪🎭",
            question: "If two's company and three's a crowd, what are four and five?",
            options: ["A party", "Nine", "Too many"],
            correct: 1
        },
        {
            topic: "Trick Questions",
            emoji: "🌟💫",
            question: "If you have me, you want to share me. If you share me, you don't have me. What am I?",
            options: ["A secret", "Money", "Time"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎨🧩",
            question: "What occurs once in a minute, twice in a moment, but never in a thousand years?",
            options: ["The letter M", "Time", "A heartbeat"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔮💡",
            question: "A rooster lays an egg on the roof. Which way does it roll?",
            options: ["Left", "Roosters don't lay eggs", "Right"],
            correct: 1
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🌈",
            question: "A man dies of old age on his 25th birthday. How is this possible?",
            options: ["Time travel", "He was born on Feb 29", "He aged fast"],
            correct: 1
        },
        {
            topic: "Trick Questions",
            emoji: "🧠🎪",
            question: "A doctor gives you 3 pills to take every half hour. How long will they last?",
            options: ["1 hour", "90 minutes", "1.5 hours"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔍💭",
            question: "What can you hold without ever touching?",
            options: ["Your breath", "Air", "Water"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🔮",
            question: "What can travel the world while staying in a corner?",
            options: ["A stamp", "A map", "A globe"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎨🧩",
            question: "What is always on its way but never arrives?",
            options: ["Tomorrow", "A train", "Time"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎯💭",
            question: "What tastes better than it smells?",
            options: ["Your tongue", "Coffee", "Perfume"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌟🧩",
            question: "What invention lets people walk through walls?",
            options: ["A door", "X-ray vision", "Teleportation"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔍✨",
            question: "What gets broken without being held?",
            options: ["A promise", "Glass", "A record"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌟🔮",
            question: "What is always found on the ground but never gets dirty?",
            options: ["A shadow", "Grass", "Concrete"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🧩",
            question: "What can point in every direction but can't reach the destination?",
            options: ["Your finger", "A compass", "An arrow"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔍🌟",
            question: "What do you throw out when you want to use it but take in when you don't?",
            options: ["An anchor", "Garbage", "A fishing line"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔮💭",
            question: "What kind of coat can only be put on when wet?",
            options: ["A coat of paint", "A raincoat", "A fur coat"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎪💡",
            question: "What has cities but no houses, forests but no trees, water but no fish?",
            options: ["A map", "A painting", "A dream"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌟🎯",
            question: "The more it dries, the wetter it gets. What is it?",
            options: ["A towel", "Rain", "A sponge"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔍💫",
            question: "What loses its head in the morning and gets it back at night?",
            options: ["A pillow", "A vampire", "Your shadow"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎨🧩",
            question: "What has four wheels and flies?",
            options: ["A garbage truck", "A plane", "A car"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌈🧩",
            question: "What's black when you get it, red when you use it, and white when you're done?",
            options: ["Charcoal", "A tire", "Coal"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌟🔮",
            question: "How many months have 28 days?",
            options: ["One", "All of them", "None"],
            correct: 1
        }
    ],
    expert: [
        {
            topic: "Trick Questions",
            emoji: "🧠💫",
            question: "A woman shoots her husband, holds him underwater for 5 minutes, then hangs him. Later they enjoy dinner. How?",
            options: ["She's a ghost hunter", "She's a photographer", "It's a dream", "She's a magician"],
            correct: 1
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🔮",
            question: "A man walks into a bar and asks for water. The bartender pulls out a gun. The man says thanks and leaves. Why?",
            options: ["He was thirsty", "He had hiccups", "He was scared", "Wrong bar"],
            correct: 1
        },
        {
            topic: "Trick Questions",
            emoji: "🌟✨",
            question: "You see a boat filled with people. It hasn't sunk, but when you look again you don't see a single person. Why?",
            options: ["They jumped", "All married", "It disappeared", "They hid"],
            correct: 1
        },
        {
            topic: "Trick Questions",
            emoji: "🎪🎭",
            question: "What word in the English language has three consecutive double letters?",
            options: ["Bookkeeper", "Mississippi", "Committee", "Succeed"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔍💡",
            question: "What English word retains the same pronunciation even after you take away four of its five letters?",
            options: ["Queue", "Quiet", "Quick", "Quote"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🧩🌈",
            question: "What can run but never walks, has a mouth but never talks?",
            options: ["A river", "A clock", "A shadow", "Wind"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎨💭",
            question: "I am taken from a mine and shut in a wooden case. I'm never released but used by everyone. What am I?",
            options: ["Pencil lead", "Coal", "Diamond", "Gold"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔮🎯",
            question: "What 5-letter word becomes shorter when you add two letters to it?",
            options: ["Short", "Small", "Brief", "Tiny"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌟🧠",
            question: "What word is spelled incorrectly in every dictionary?",
            options: ["Incorrectly", "Dictionary", "Wrong", "Mistake"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎪💫",
            question: "What is the longest word in the dictionary?",
            options: ["Smiles", "Encyclopedia", "Antidisestablishmentarianism", "Pneumon..."],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌟💫",
            question: "Forward I am heavy, backward I am not. What am I?",
            options: ["Ton", "Weight", "Load", "Heavy"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎪🔮",
            question: "What can you add to one to make it disappear?",
            options: ["The letter G", "Zero", "Nothing", "Subtract"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🧠💫",
            question: "I have keys but no locks, space but no room, you can enter but can't go inside. What am I?",
            options: ["A keyboard", "A piano", "A map", "A safe"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🔮",
            question: "What is at the end of a rainbow?",
            options: ["The letter W", "Gold", "A pot", "Nothing"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌈🎪",
            question: "I am always hungry and must be fed. Touch me and I'll die. What am I?",
            options: ["Fire", "A baby", "A plant", "A battery"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎪💡",
            question: "What can you make that no one—not even you—can see?",
            options: ["Noise", "Wind", "Time", "Darkness"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌟💭",
            question: "What begins with an E and ends with an E but only has one letter?",
            options: ["An envelope", "The letter E", "Email", "Eagle"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎪🎯",
            question: "The more you have of it, the less you see. What is it?",
            options: ["Darkness", "Light", "Money", "Time"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🧠✨",
            question: "What flies without wings?",
            options: ["Time", "A plane", "A bird", "An insect"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔍🌈",
            question: "What comes down but never goes up?",
            options: ["Rain", "Your age", "A ball", "Gravity"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🔮🧠",
            question: "What is full of holes but still holds a lot of weight?",
            options: ["A net", "A sponge", "Swiss cheese", "A colander"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🌈🎪",
            question: "What has a heart that doesn't beat?",
            options: ["An artichoke", "A statue", "A robot", "A painting"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🧠🌟",
            question: "What can be cracked, made, told, and played?",
            options: ["A joke", "An egg", "A code", "A song"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎯✨",
            question: "What kind of tree can you carry in your hand?",
            options: ["A palm", "A small tree", "A bonsai", "A stick"],
            correct: 0
        },
        {
            topic: "Trick Questions",
            emoji: "🎪🌈",
            question: "I shave every day but my beard stays the same. Who am I?",
            options: ["A barber", "A man with fast growth", "A liar", "No one"],
            correct: 0
        }
    ],
    extreme: [
        {
            topic: "Trick Questions",
            emoji: "🔮✨",
            question: "A man describes his daughters: 'They are all blonde but two, all brunette but two, and all redheaded but two.' How many daughters?",
            answer: "3"
        },
        {
            topic: "Trick Questions",
            emoji: "🧠🔮",
            question: "A man is trapped in a room with two doors. One leads to death, one to freedom. Two guards: one tells truth, one lies. You can ask ONE guard ONE question. What do you ask?",
            answer: "Which door would the other guard say leads to freedom"
        },
        {
            topic: "Trick Questions",
            emoji: "🔍✨",
            question: "A man pushed his car to a hotel and lost his fortune. What happened?",
            answer: "He was playing Monopoly"
        },
        {
            topic: "Trick Questions",
            emoji: "🌟💫",
            question: "A surgeon says 'I can't operate on this boy, he's my son!' But the surgeon is not the boy's father. How?",
            answer: "The surgeon is his mother"
        },
        {
            topic: "Trick Questions",
            emoji: "🧩🌈",
            question: "How can you drop a raw egg onto concrete without cracking it?",
            answer: "Concrete doesn't crack easily"
        },
        {
            topic: "Trick Questions",
            emoji: "🎨💡",
            question: "If you have a bowl with 6 apples and you take away 4, how many do you have?",
            answer: "4"
        },
        {
            topic: "Trick Questions",
            emoji: "🌟🧠",
            question: "A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many brothers and sisters?",
            answer: "4 sisters and 3 brothers"
        },
        {
            topic: "Trick Questions",
            emoji: "🎪💫",
            question: "What goes all around the world but stays in a corner?",
            answer: "A stamp"
        },
        {
            topic: "Trick Questions",
            emoji: "🧠🎯",
            question: "What is as big as an elephant but weighs nothing?",
            answer: "An elephant's shadow"
        },
        {
            topic: "Trick Questions",
            emoji: "🔍💡",
            question: "What is it that given one, you'll have either two or none?",
            answer: "A choice"
        },
        {
            topic: "Trick Questions",
            emoji: "🎪🌟",
            question: "What 8-letter word can have letters removed one by one and still make words until only one letter remains?",
            answer: "Starting"
        },
        {
            topic: "Trick Questions",
            emoji: "🧠💭",
            question: "A truck driver goes down a one-way street the wrong way and passes 10 cops. Why wasn't he arrested?",
            answer: "He was walking"
        },
        {
            topic: "Trick Questions",
            emoji: "🎯💫",
            question: "A man was born in 1946 and died in 1947, yet he was 86 years old. How?",
            answer: "Hospital room numbers"
        },
        {
            topic: "Trick Questions",
            emoji: "🧠🌈",
            question: "A murderer is condemned to death. He chooses between: raging fires, assassins with guns, or lions that haven't eaten in 3 years. Which is safest?",
            answer: "The lion room, they are dead"
        },
        {
            topic: "Trick Questions",
            emoji: "🎨🔮",
            question: "If a red house is made of red bricks, a blue house of blue bricks, what is a greenhouse made of?",
            answer: "Glass"
        },
        {
            topic: "Trick Questions",
            emoji: "🌈💫",
            question: "What disappears as soon as you say its name?",
            answer: "Silence"
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🌟",
            question: "A man pushes his car. He stops at a hotel and knows he's bankrupt. What's happening?",
            answer: "Playing Monopoly"
        },
        {
            topic: "Trick Questions",
            emoji: "🧩💫",
            question: "A is the father of B, but B is not the son of A. How is this possible?",
            answer: "B is the daughter"
        },
        {
            topic: "Trick Questions",
            emoji: "🎪✨",
            question: "What occurs twice in a lifetime but once in every year, twice in a week but never in a day?",
            answer: "The letter E"
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🔮",
            question: "What comes at the end of everything?",
            answer: "The letter G"
        },
        {
            topic: "Trick Questions",
            emoji: "🔮💭",
            question: "Remove my skin and I won't cry, but you might. What am I?",
            answer: "An onion"
        },
        {
            topic: "Trick Questions",
            emoji: "🧠💡",
            question: "I am always in front of you but can't be seen. What am I?",
            answer: "The future"
        },
        {
            topic: "Trick Questions",
            emoji: "🎯💫",
            question: "What has 13 hearts but no other organs?",
            answer: "A deck of cards"
        },
        {
            topic: "Trick Questions",
            emoji: "🎯🔮",
            question: "You have 12 balls, one weighs different. Using a balance scale 3 times, how do you find it?",
            answer: "Divide into 3 groups of 4, weigh two groups, subdivide based on results"
        },
        {
            topic: "Trick Questions",
            emoji: "🎪🎭",
            question: "A father and son crash at different hospitals. The surgeon says 'I can't operate, that's my son!' How if the father is at another hospital?",
            answer: "The surgeon is the other father or grandfather"
        }
    ]
};

console.log('✅ Chapter 1 (4 levels):', 
    (window.riddlesQuestions[1].easy.length +
     window.riddlesQuestions[1].hard.length +
     window.riddlesQuestions[1].expert.length +
     window.riddlesQuestions[1].extreme.length) + ' total riddles');
