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
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🧩",
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🔍💡",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎭",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟✨",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🖼️",
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🔑🗝️",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🎲",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈🎨",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎯",
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Trick Questions",
                emoji: "🧠💭",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎭🎪",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮✨",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🧩",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟💫",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🖌️",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍🔎",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎭",
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
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠💡",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮💭",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈✨",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮🎨",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨💡",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧩💭",
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
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🧩",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🔮",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨💭",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠🎨",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟💡",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪💫",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍🎨",
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Trick Questions",
                emoji: "🧠🔮",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯💭",
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🔍✨",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🎭",
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
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯💭",
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
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🔮",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🧩",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍🌟",
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
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🎯",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍💫",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎨🧩",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈🧩",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🔮",
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
                correct: 1
            },
            {
                topic: "Trick Questions",
                emoji: "🔍💡",
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
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟🧠",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪💫",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌟💫",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🔮",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠💫",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯🔮",
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
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔍🌈",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🔮🧠",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🌈🎪",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🧠🌟",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎯✨",
                correct: 0
            },
            {
                topic: "Trick Questions",
                emoji: "🎪🌈",
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Trick Questions",
                emoji: "🔮✨",
                difficulty: "extreme",
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
            {
                topic: "Trick Questions",
                emoji: "🔍💡",
                difficulty: "extreme",
            {
                topic: "Trick Questions",
                emoji: "🎪🌟",
                difficulty: "extreme",
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
