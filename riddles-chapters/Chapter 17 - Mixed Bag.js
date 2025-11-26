/**
 * WPCode Snippet #17: Riddles Chapter 17 - Mixed Bag
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 10
 *
 * Questions Organized by Difficulty Level
 * Easy (combined) → Hard → Expert → Extreme
 *
 * COPY ALL CODE BELOW
 */

window.riddlesQuestions = window.riddlesQuestions || {};
window.riddlesQuestions[17] = {
    easy: [
        {
                topic: "Mixed Bag - Medium",
                emoji: "🎯💭",
                question: "What is always behind you but can't be seen?",
                options: [
                    "Your shadow",
                    "The past",
                    "Your back"
                ],
                correct: 1},
        {
                topic: "Mixed Bag - Medium",
                emoji: "🌈✨",
                question: "What type of dress can never be worn?",
                options: [
                    "A wedding dress",
                    "A sundress",
                    "An address"
                ],
                correct: 2},
        {
                topic: "Mixed Bag - Medium",
                emoji: "🎯🧠",
                question: "What begins with an E but only has one letter?",
                options: [
                    "Entry",
                    "Email",
                    "An envelope"
                ],
                correct: 2},
        {
                topic: "Mixed Bag - Medium",
                emoji: "🧩🔮",
                question: "What has cities but no people, forests but no trees?",
                options: [
                    "A game",
                    "A book",
                    "A map"
                ],
                correct: 2},
        {
                topic: "Mixed Bag - Medium",
                emoji: "🎪🌈",
                question: "What can run but has no legs?",
                options: [
                    "A machine",
                    "A river",
                    "Time"
                ],
                correct: 1},
        {
                topic: "Mixed Bag - Medium",
                emoji: "🧠✨",
                question: "What gets bigger when more is taken away?",
                options: [
                    "Space",
                    "Debt",
                    "A hole"
                ],
                correct: 2},
        {
                topic: "Mixed Bag - Medium",
                emoji: "🔮💡",
                question: "What do you call a bear with no teeth?",
                options: [
                    "A toothless bear",
                    "A baby bear",
                    "A gummy bear"
                ],
                correct: 2
            }
    ],
    hard: [
        {
                topic: "Mixed Bag - Hard",
                emoji: "🌈🔍",
                question: "What can you hold in your right hand but never in your left hand?",
                options: [
                    "Water",
                    "Your left hand",
                    "A pencil",
                    "A ball"
                ],
                correct: 1},
        {
                topic: "Mixed Bag - Hard",
                emoji: "💭🎪",
                question: "I am always in front of you but you can never see me. What am I?",
                options: [
                    "Tomorrow",
                    "Air",
                    "The future",
                    "Your nose"
                ],
                correct: 2},
        {
                topic: "Mixed Bag - Hard",
                emoji: "💭✨",
                question: "I shave every day but my beard stays the same. Who am I?",
                options: [
                    "A razor",
                    "An actor",
                    "A man",
                    "A barber"
                ],
                correct: 3},
        {
                topic: "Mixed Bag - Hard",
                emoji: "🧩🔍",
                question: "What can travel all around the world without leaving its corner?",
                options: [
                    "News",
                    "Light",
                    "A spider",
                    "A stamp"
                ],
                correct: 3},
        {
                topic: "Mixed Bag - Hard",
                emoji: "🧩💡",
                question: "What goes up and never comes down?",
                options: [
                    "Smoke",
                    "Time",
                    "A balloon",
                    "Your age"
                ],
                correct: 3},
        {
                topic: "Mixed Bag - Hard",
                emoji: "🔍🌈",
                question: "What has four fingers and a thumb but isn't living?",
                options: [
                    "A drawing",
                    "A statue",
                    "A glove",
                    "A robot"
                ],
                correct: 2}
    ],
    expert: [
        {
                topic: "Mixed Bag - Expert",
                emoji: "🧠🎨",
                question: "What is it that you can keep after giving it to someone?",
                options: [
                    "Love",
                    "Advice",
                    "A gift",
                    "Your word"
                ],
                correct: 3},
        {
                topic: "Mixed Bag - Expert",
                emoji: "🎯🔮",
                question: "I am weightless but you can see me. Put me in a bucket and I'll make it lighter. What am I?",
                options: [
                    "Nothing",
                    "Air",
                    "Light",
                    "A hole"
                ],
                correct: 3},
        {
                topic: "Mixed Bag - Expert",
                emoji: "🧠🎪",
                question: "I never was but always will be. No one ever saw me but everyone knows I exist. What am I?",
                options: [
                    "Death",
                    "The future",
                    "Hope",
                    "Tomorrow"
                ],
                correct: 3}
    ],
    extreme: [
    ]
};

console.log('✅ Riddles Chapter 17 loaded:',
    (window.riddlesQuestions[17].easy.length +
     window.riddlesQuestions[17].hard.length +
     window.riddlesQuestions[17].expert.length +
     window.riddlesQuestions[17].extreme.length) + ' total riddles');

