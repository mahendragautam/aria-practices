/**
 * WPCode Snippet #2: Riddles Chapter 1 - Trick Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 10
 * 
 * 100 Questions Organized by Difficulty Level
 * Easy (10) → Medium (25) → Hard (25) → Expert (25) → Extreme (25)
 *
 * COPY ALL CODE BELOW
 */

const riddlesQuestions = {
    1: {
        easy: [
            {
                topic: "Trick Questions",
                emoji: "🤔❓",
                question: "What has hands but cannot clap?",
                options: [
                    "A clock",
                    "A glove"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🧩",
                question: "What gets wetter the more it dries?",
                options: [
                    "A sponge",
                    "A towel"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🔍💡",
                question: "What has a neck but no head?",
                options: [
                    "A bottle",
                    "A shirt"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎭",
                question: "What can travel around the world while staying in a corner?",
                options: [
                    "A stamp",
                    "A map"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟✨",
                question: "What has one eye but cannot see?",
                options: [
                    "A needle",
                    "A potato"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🖼️",
                question: "What runs but never walks?",
                options: [
                    "Water",
                    "A river"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🔑🗝️",
                question: "What has teeth but cannot bite?",
                options: [
                    "A comb",
                    "A saw"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🎲",
                question: "What has a thumb and four fingers but is not alive?",
                options: [
                    "A glove",
                    "A mannequin"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈🎨",
                question: "What comes down but never goes up?",
                options: [
                    "Rain",
                    "Age"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎯",
                question: "What has keys but no locks?",
                options: [
                    "A piano",
                    "A keyboard"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Trick Questions",
                emoji: "🧠💭",
                question: "What gets broken without being held?",
                options: [
                    "A promise",
                    "A heart"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎭🎪",
                question: "What goes up and down but doesn't move?",
                options: [
                    "A staircase",
                    "Temperature"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮✨",
                question: "The more you take, the more you leave behind. What am I?",
                options: [
                    "Footsteps",
                    "Time"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🧩",
                question: "What has a head and a tail but no body?",
                options: [
                    "A coin",
                    "A snake"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟💫",
                question: "What can fill a room but takes up no space?",
                options: [
                    "Light",
                    "Air"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🖌️",
                question: "What begins with T, ends with T, and has T in it?",
                options: [
                    "A teapot",
                    "Toast"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍🔎",
                question: "What is so fragile that saying its name breaks it?",
                options: [
                    "Silence",
                    "Glass"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎭",
                question: "What has cities but no houses, forests but no trees?",
                options: [
                    "A map",
                    "A painting"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈🎯",
                question: "What belongs to you but others use it more?",
                options: [
                    "Your name",
                    "Your time"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨💡",
                question: "What can you catch but never throw?",
                options: [
                    "A cold",
                    "A fish"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠💡",
                question: "What has one head, one foot, and four legs?",
                options: [
                    "A bed",
                    "A table"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮💭",
                question: "What building has the most stories?",
                options: [
                    "A library",
                    "A skyscraper"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈✨",
                question: "What has words but never speaks?",
                options: [
                    "A book",
                    "A dictionary"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮🎨",
                question: "What has a ring but no finger?",
                options: [
                    "A phone",
                    "A bell"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨💡",
                question: "What runs all around a backyard but never moves?",
                options: [
                    "A fence",
                    "A garden hose"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧩💭",
                question: "What has many keys but can't open a single lock?",
                options: [
                    "A piano",
                    "A keyboard"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮✨",
                question: "What has hands and a face but no arms or legs?",
                options: [
                    "A clock",
                    "A statue"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠💡",
                question: "What has a bottom at the top?",
                options: [
                    "Your legs",
                    "A mountain"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🧩",
                question: "What can point in every direction but can't reach the destination?",
                options: [
                    "Your finger",
                    "A compass"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🔮",
                question: "What has a spine but no bones?",
                options: [
                    "A book",
                    "A cactus"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨💭",
                question: "What goes up when rain comes down?",
                options: [
                    "An umbrella",
                    "A raincoat"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠🎨",
                question: "What has an eye but cannot see?",
                options: [
                    "A needle",
                    "A potato"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟💡",
                question: "What tastes better than it smells?",
                options: [
                    "Your tongue",
                    "Food"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪💫",
                question: "What has a face and two hands but no arms or legs?",
                options: [
                    "A clock",
                    "A watch"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍🎨",
                question: "What has to be broken before you can use it?",
                options: [
                    "An egg",
                    "A seal"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Trick Questions",
                emoji: "🧠🔮",
                question: "What word is spelled incorrectly in every dictionary?",
                options: [
                    "Incorrectly",
                    "Wrong",
                    "Dictionary"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯💭",
                question: "Before Mt. Everest was discovered, what was the tallest mountain?",
                options: [
                    "K2",
                    "Mt. Everest",
                    "Kilimanjaro"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🔍✨",
                question: "A man pushes his car to a hotel and tells the owner he's bankrupt. Why?",
                options: [
                    "Playing Monopoly",
                    "He crashed",
                    "Lost his job"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎭",
                question: "What invention lets you look through walls?",
                options: [
                    "X-ray machine",
                    "A window",
                    "Telescope"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🌟💫",
                question: "If you have me, you want to share me. If you share me, you don't have me. What am I?",
                options: [
                    "A secret",
                    "Money",
                    "Time"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🧩",
                question: "What occurs once in a minute, twice in a moment, but never in a thousand years?",
                options: [
                    "The letter M",
                    "Time",
                    "A heartbeat"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮💡",
                question: "A rooster lays an egg on the roof. Which way does it roll?",
                options: [
                    "Left",
                    "Roosters don't lay eggs",
                    "Right"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🌈",
                question: "How many months have 28 days?",
                options: [
                    "One",
                    "All of them",
                    "Two"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🧠🎪",
                question: "A doctor gives you 3 pills to take every half hour. How long will they last?",
                options: [
                    "1 hour",
                    "90 minutes",
                    "1.5 hours"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍💭",
                question: "What can you hold without ever touching?",
                options: [
                    "Your breath",
                    "Air",
                    "Water"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🔮",
                question: "What can travel the world while staying in a corner?",
                options: [
                    "A stamp",
                    "A map",
                    "A globe"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🧩",
                question: "If two's company and three's a crowd, what are four and five?",
                options: [
                    "Nine",
                    "A party",
                    "Too many"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯💭",
                question: "What gets sharper the more you use it?",
                options: [
                    "Your brain",
                    "A knife",
                    "A pencil"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🧩",
                question: "What invention lets people walk through walls?",
                options: [
                    "A door",
                    "X-ray vision",
                    "Teleportation"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍✨",
                question: "What can you break without touching it?",
                options: [
                    "A promise",
                    "Glass",
                    "A heart"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🔮",
                question: "What comes once in a year, twice in a week, but never in a day?",
                options: [
                    "The letter E",
                    "Time",
                    "Night"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🧩",
                question: "What has four wheels and flies?",
                options: [
                    "A garbage truck",
                    "An airplane",
                    "A car"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍🌟",
                question: "What is full of holes but still holds water?",
                options: [
                    "A sponge",
                    "A bucket",
                    "A net"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮💭",
                question: "What kind of coat can only be put on when wet?",
                options: [
                    "A coat of paint",
                    "A raincoat",
                    "A fur coat"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪💡",
                question: "What has a head, a tail, is brown, and has no legs?",
                options: [
                    "A penny",
                    "A snake",
                    "A worm"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🎯",
                question: "What has legs but doesn't walk?",
                options: [
                    "A table",
                    "A chair",
                    "Pants"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍💫",
                question: "What kind of room has no doors or windows?",
                options: [
                    "A mushroom",
                    "A bathroom",
                    "A bedroom"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🧩",
                question: "What kind of band never plays music?",
                options: [
                    "A rubber band",
                    "A rock band",
                    "A marching band"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈🧩",
                question: "What kind of tree can you carry in your hand?",
                options: [
                    "A palm",
                    "A stick",
                    "A leaf"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🔮",
                question: "What month of the year has 28 days?",
                options: [
                    "February",
                    "All of them",
                    "None"
                ],
                correct: 1
            }
        ],
        expert: [
            {
                topic: "Trick Questions",
                emoji: "🧠💫",
                question: "A woman shoots her husband, holds him underwater for 5 minutes, then hangs him. Later they enjoy dinner. How?",
                options: [
                    "She's a ghost hunter",
                    "She's a photographer",
                    "It's a dream",
                    "She's a magician"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🔮",
                question: "A man walks into a bar and asks for water. The bartender pulls out a gun. The man says thanks and leaves. Why?",
                options: [
                    "He was thirsty",
                    "He had hiccups",
                    "He was scared",
                    "Wrong bar"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🌟✨",
                question: "You see a boat filled with people. It hasn't sunk, but when you look again you don't see a single person. Why?",
                options: [
                    "They jumped",
                    "All married",
                    "It disappeared",
                    "They hid"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎭",
                question: "A man dies of old age on his 25th birthday. How?",
                options: [
                    "Time travel",
                    "Born on Feb 29",
                    "Calendar error",
                    "Cloning"
                ],
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🔍💡",
                question: "How can a man go 8 days without sleep?",
                options: [
                    "He sleeps at night",
                    "He's dead",
                    "He's a robot",
                    "Meditation"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧩🌈",
                question: "What can run but never walks, has a mouth but never talks?",
                options: [
                    "A river",
                    "A clock",
                    "A shadow",
                    "Wind"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨💭",
                question: "I am taken from a mine and shut in a wooden case. I'm never released but used by everyone. What am I?",
                options: [
                    "Pencil lead",
                    "Coal",
                    "Diamond",
                    "Gold"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮🎯",
                question: "What is at the end of a rainbow?",
                options: [
                    "The letter W",
                    "Pot of gold",
                    "Nothing",
                    "Clouds"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🧠",
                question: "How many letters are in the alphabet?",
                options: [
                    "11",
                    "26",
                    "8",
                    "The alphabet"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪💫",
                question: "What starts with E, ends with E, but only has one letter?",
                options: [
                    "An envelope",
                    "Eye",
                    "Edge",
                    "Europe"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟💫",
                question: "I have branches but no fruit, trunk, or leaves. What am I?",
                options: [
                    "A bank",
                    "A tree stump",
                    "A road",
                    "A river"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🔮",
                question: "A man describes his daughters: 'They're all blonde except two, all brunette except two, all redhead except two.' How many daughters?",
                options: [
                    "Three",
                    "Six",
                    "Four",
                    "Two"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠💫",
                question: "I'm light as a feather but the strongest person can't hold me for long. What am I?",
                options: [
                    "Your breath",
                    "A feather",
                    "Air",
                    "A thought"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🔮",
                question: "What disappears the moment you say its name?",
                options: [
                    "Silence",
                    "A secret",
                    "Air",
                    "Nothing"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈🎪",
                question: "I am always hungry and must be fed. Touch me and I'll die. What am I?",
                options: [
                    "Fire",
                    "A baby",
                    "A plant",
                    "A battery"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪💡",
                question: "What has 13 hearts but no organs?",
                options: [
                    "A deck of cards",
                    "A beehive",
                    "A tree",
                    "A hospital"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟💭",
                question: "What begins with an E and ends with an E but only has one letter?",
                options: [
                    "An envelope",
                    "The letter E",
                    "Email",
                    "Eagle"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎯",
                question: "The more you have of it, the less you see. What is it?",
                options: [
                    "Darkness",
                    "Light",
                    "Money",
                    "Time"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠✨",
                question: "What goes through towns and over hills but never moves?",
                options: [
                    "A road",
                    "A river",
                    "Wind",
                    "Time"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍🌈",
                question: "What gets bigger when more is taken away?",
                options: [
                    "A hole",
                    "A balloon",
                    "Space",
                    "Nothing"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮🧠",
                question: "What can be cracked, made, told, and played?",
                options: [
                    "A joke",
                    "An egg",
                    "A code",
                    "Music"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈🎪",
                question: "What's always found on the ground but never gets dirty?",
                options: [
                    "Your shadow",
                    "Grass",
                    "A path",
                    "Dirt"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠🌟",
                question: "What's really easy to get into but hard to get out of?",
                options: [
                    "Trouble",
                    "A car",
                    "Bed",
                    "Debt"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯✨",
                question: "What has a thousand needles but doesn't sew?",
                options: [
                    "A porcupine",
                    "A cactus",
                    "A pine tree",
                    "A sewing kit"
                ],
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🌈",
                question: "What is seen in the middle of March and April that can't be seen at the beginning or end of either month?",
                options: [
                    "The letter R",
                    "Spring",
                    "Rain",
                    "Flowers"
                ],
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Trick Questions",
                emoji: "🔮✨",
                difficulty: "extreme",
                question: "You're in a race and pass the person in 2nd place. What place are you in now?",
                answer: "2nd place or Second"
            },
            {
                topic: "Trick Questions",
                emoji: "🧠🔮",
                difficulty: "extreme",
                question: "A man is trapped in a room with two doors. One leads to certain death, one to freedom. Two guards: one always tells truth, one always lies. You can ask one guard one question. What do you ask?",
                answer: "Which door would the other guard say leads to freedom or Ask either guard which door the other would indicate"
            },
            {
                topic: "Trick Questions",
                emoji: "🎯💭",
                difficulty: "extreme",
                question: "You have 12 balls, identical in appearance. One weighs slightly different. Using a balance scale only 3 times, how do you find it and determine if it's heavier or lighter?",
                answer: "Divide into 3 groups of 4, weigh two groups, then subdivide based on results"
            },
            {
                topic: "Trick Questions",
                emoji: "🔍✨",
                difficulty: "extreme",
                question: "A man looks at a painting and says: 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the painting?",
                answer: "His son"
            },
            {
                topic: "Trick Questions",
                emoji: "🌟💫",
                difficulty: "extreme",
                question: "A surgeon says 'I can't operate on this boy, he's my son!' But the surgeon is not the boy's father. How is this possible?",
                answer: "The surgeon is his mother or She's his mother"
            },
            {
                topic: "Trick Questions",
                emoji: "🧩🌈",
                difficulty: "extreme",
                question: "How can you drop a raw egg onto concrete without cracking it?",
                answer: "Concrete doesn't crack easily or The concrete won't crack"
            },
            {
                topic: "Trick Questions",
                emoji: "🎨💡",
                difficulty: "extreme",
                question: "If you have a bowl with 6 apples and you take away 4, how many do you have?",
                answer: "4 or Four"
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🧠",
                difficulty: "extreme",
                question: "A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many brothers and sisters are there?",
                answer: "4 sisters and 3 brothers"
            },
            {
                topic: "Trick Questions",
                emoji: "🎪💫",
                difficulty: "extreme",
                question: "What question can you never answer yes to?",
                answer: "Are you asleep? or Are you dead?"
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎭",
                difficulty: "extreme",
                question: "A father and son get in a car crash at different hospitals. The surgeon says 'I can't operate, that's my son!' How if the father is at another hospital?",
                answer: "Two fathers (grandfather) or The surgeon is his other father/parent"
            },
            {
                topic: "Trick Questions",
                emoji: "🧠🎯",
                difficulty: "extreme",
                question: "Three doctors said Robert is their brother. Robert says he has no brothers. Who's lying?",
                answer: "No one, the doctors are his sisters or They are women"
            },
            {
                topic: "Trick Questions",
                emoji: "🔍💡",
                difficulty: "extreme",
                question: "A woman has 7 children. Half of them are boys. How is this possible?",
                answer: "All are boys or They are all boys"
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🌟",
                difficulty: "extreme",
                question: "How many times can you subtract 10 from 100?",
                answer: "Once or 1"
            },
            {
                topic: "Trick Questions",
                emoji: "🧠💭",
                difficulty: "extreme",
                question: "A truck driver is going down a one-way street the wrong way and passes 10 cops. Why wasn't he arrested?",
                answer: "He was walking or He wasn't driving"
            },
            {
                topic: "Trick Questions",
                emoji: "🎯💫",
                difficulty: "extreme",
                question: "A man was born in 1946 and died in 1947, yet he was 86 years old. How is this possible?",
                answer: "Hospital room numbers or Born in room 1946, died in room 1947"
            },
            {
                topic: "Trick Questions",
                emoji: "🧠🌈",
                difficulty: "extreme",
                question: "A murderer is condemned to death. He has to choose between three rooms. First has raging fires, second has assassins with loaded guns, third has lions that haven't eaten in 3 years. Which is safest?",
                answer: "The lion room or Third room, the lions are dead"
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🔮",
                difficulty: "extreme",
                question: "If a red house is made of red bricks, a blue house is made of blue bricks, what is a greenhouse made of?",
                answer: "Glass"
            },
            {
                topic: "Trick Questions",
                emoji: "🌈💫",
                difficulty: "extreme",
                question: "What is black when you buy it, red when you use it, and gray when you throw it away?",
                answer: "Charcoal or Coal"
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🌟",
                difficulty: "extreme",
                question: "A man pushes his car. He stops when he reaches a hotel at which point he knows he's bankrupt. What's happening?",
                answer: "Playing Monopoly"
            },
            {
                topic: "Trick Questions",
                emoji: "🧩💫",
                difficulty: "extreme",
                question: "A is the father of B, but B is not the son of A. How is this possible?",
                answer: "B is the daughter or B is a girl"
            },
            {
                topic: "Trick Questions",
                emoji: "🎪✨",
                difficulty: "extreme",
                question: "What occurs twice in a lifetime but once in every year, twice in a week but never in a day?",
                answer: "The letter E"
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🔮",
                difficulty: "extreme",
                question: "What comes at the end of everything?",
                answer: "The letter G"
            },
            {
                topic: "Trick Questions",
                emoji: "🔮💭",
                difficulty: "extreme",
                question: "What 5-letter word becomes shorter when you add two letters to it?",
                answer: "Short or Shorter"
            },
            {
                topic: "Trick Questions",
                emoji: "🧠💡",
                difficulty: "extreme",
                question: "I am always in front of you but can't be seen. What am I?",
                answer: "The future"
            },
            {
                topic: "Trick Questions",
                emoji: "🎯💫",
                difficulty: "extreme",
                question: "What five-letter word has one left when two letters are removed?",
                answer: "Stone or Money or Honey"
            }
        ]
    }
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    if (!subjectQuestionBank['riddles']) {
        subjectQuestionBank['riddles'] = {};
    }
    subjectQuestionBank['riddles'][1] = riddlesQuestions[1];
}
