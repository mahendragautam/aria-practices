// Geography Question Bank
// Add this file separately in WordPress or link it before app.js

const geographyQuestions = {
    1: { // Chapter 1: Continents and Oceans
        easy: [
            {topic: 'Continents', emoji: '🌍🗺️', question: 'There are 7 continents on Earth.', options: ['True', 'False'], correct: 0},
            {topic: 'Oceans', emoji: '🌊💧', question: 'The Pacific Ocean is the largest ocean.', options: ['True', 'False'], correct: 0},
            {topic: 'Mountains', emoji: '⛰️🏔️', question: 'Mount Everest is the tallest mountain.', options: ['True', 'False'], correct: 0},
            {topic: 'Rivers', emoji: '🏞️💧', question: 'The Nile is the longest river.', options: ['True', 'False'], correct: 0},
            {topic: 'Continents', emoji: '🌍🗺️', question: 'Africa is a continent.', options: ['True', 'False'], correct: 0},
            {topic: 'Oceans', emoji: '🌊🌍', question: 'The Atlantic Ocean is between Europe and America.', options: ['True', 'False'], correct: 0},
            {topic: 'Mountains', emoji: '⛰️🏔️', question: 'Mountains are formed by plate tectonics.', options: ['True', 'False'], correct: 0},
            {topic: 'Rivers', emoji: '🏞️🌊', question: 'Rivers flow from high to low elevation.', options: ['True', 'False'], correct: 0},
            {topic: 'Continents', emoji: '🗺️🌏', question: 'Asia is the largest continent.', options: ['True', 'False'], correct: 0},
            {topic: 'Oceans', emoji: '🌊❄️', question: 'The Arctic Ocean is the smallest ocean.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Continents', emoji: '🌍🗺️', question: 'What is the smallest continent?', options: ['Australia', 'Antarctica'], correct: 0},
            {topic: 'Oceans', emoji: '🌊💧', question: 'Which ocean is the deepest?', options: ['Pacific', 'Atlantic'], correct: 0},
            {topic: 'Mountains', emoji: '⛰️🏔️', question: 'On which continent is Mount Everest?', options: ['Asia', 'Africa'], correct: 0},
            {topic: 'Rivers', emoji: '🏞️💧', question: 'Which river flows through Egypt?', options: ['Nile', 'Amazon'], correct: 0},
            {topic: 'Continents', emoji: '🗺️🌍', question: 'Which continent has no permanent residents?', options: ['Antarctica', 'Australia'], correct: 0},
            {topic: 'Oceans', emoji: '🌊🌏', question: 'Which ocean borders Asia and America?', options: ['Pacific', 'Indian'], correct: 0},
            {topic: 'Mountains', emoji: '⛰️📏', question: 'What is the second tallest mountain?', options: ['K2', 'Kilimanjaro'], correct: 0},
            {topic: 'Rivers', emoji: '🏞️🌊', question: 'Which river is in South America?', options: ['Amazon', 'Mississippi'], correct: 0},
            {topic: 'Continents', emoji: '🌍🗺️', question: 'Which continent has the most countries?', options: ['Africa', 'Asia'], correct: 0},
            {topic: 'Oceans', emoji: '🌊💧', question: 'What ocean is south of India?', options: ['Indian Ocean', 'Pacific Ocean'], correct: 0}
        ],
        hard: [
            {topic: 'Continents', emoji: '🌍🗺️', question: 'How many countries are in Africa?', options: ['54', '48', '60'], correct: 0},
            {topic: 'Oceans', emoji: '🌊💧', question: 'What is the deepest ocean trench?', options: ['Mariana Trench', 'Puerto Rico Trench', 'Java Trench'], correct: 0},
            {topic: 'Mountains', emoji: '⛰️🏔️', question: 'How tall is Mount Everest?', options: ['8,849m', '8,611m', '9,000m'], correct: 0},
            {topic: 'Rivers', emoji: '🏞️💧', question: 'What is the longest river in Europe?', options: ['Volga', 'Danube', 'Rhine'], correct: 0},
            {topic: 'Continents', emoji: '🗺️🌏', question: 'Which continent spans all time zones?', options: ['Antarctica', 'Asia', 'Russia'], correct: 0},
            {topic: 'Oceans', emoji: '🌊🌍', question: 'What percentage of Earth is ocean?', options: ['71%', '65%', '80%'], correct: 0},
            {topic: 'Mountains', emoji: '⛰️🏔️', question: 'Which mountain range is longest?', options: ['Andes', 'Himalayas', 'Rockies'], correct: 0},
            {topic: 'Rivers', emoji: '🏞️🌊', question: 'Which river flows through most countries?', options: ['Danube', 'Nile', 'Amazon'], correct: 0},
            {topic: 'Continents', emoji: '🌍🗺️', question: 'What is the capital of Australia?', options: ['Canberra', 'Sydney', 'Melbourne'], correct: 0},
            {topic: 'Oceans', emoji: '🌊💧', question: 'Where is the Bermuda Triangle?', options: ['Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean'], correct: 0}
        ],
        expert: [
            {topic: 'Continents', emoji: '🌍🗺️', question: 'What is the total area of Asia (approx)?', options: ['44.5 million km²', '30 million km²', '50 million km²', '40 million km²'], correct: 0},
            {topic: 'Oceans', emoji: '🌊💧', question: 'How deep is the Mariana Trench?', options: ['11,000m', '10,000m', '12,000m', '9,000m'], correct: 0},
            {topic: 'Mountains', emoji: '⛰️🏔️', question: 'In which mountain range is Mont Blanc?', options: ['Alps', 'Pyrenees', 'Carpathians', 'Apennines'], correct: 0},
            {topic: 'Rivers', emoji: '🏞️💧', question: 'How long is the Amazon River (approx)?', options: ['6,400km', '5,400km', '7,400km', '4,400km'], correct: 0},
            {topic: 'Continents', emoji: '🗺️🌏', question: 'What is the most populous country?', options: ['India', 'China', 'USA', 'Indonesia'], correct: 0},
            {topic: 'Oceans', emoji: '🌊🌍', question: 'What is the average depth of Pacific Ocean?', options: ['4,000m', '3,000m', '5,000m', '6,000m'], correct: 0},
            {topic: 'Mountains', emoji: '⛰️📏', question: 'Which is the highest mountain in Africa?', options: ['Kilimanjaro', 'Mount Kenya', 'Atlas Peak', 'Table Mountain'], correct: 0},
            {topic: 'Rivers', emoji: '🏞️🌊', question: 'Through how many countries does the Nile flow?', options: ['11', '9', '13', '7'], correct: 0},
            {topic: 'Continents', emoji: '🌍🗺️', question: 'What is the smallest country in the world?', options: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'], correct: 0},
            {topic: 'Oceans', emoji: '🌊💧', question: 'What is the saltiest ocean?', options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'], correct: 0}
        ],
        extreme: [
            {topic: 'Continents', emoji: '🌍🗺️', question: 'Name all 7 continents', answer: 'Asia, Africa, North America, South America, Antarctica, Europe, Australia'},
            {topic: 'Oceans', emoji: '🌊💧', question: 'Name all 5 oceans', answer: 'Pacific, Atlantic, Indian, Arctic, Southern'},
            {topic: 'Mountains', emoji: '⛰️🏔️', question: 'Name the 7 summits (highest peak on each continent) - name 3', answer: 'Everest, Aconcagua, Denali, Kilimanjaro, Elbrus, Vinson, Kosciuszko (any 3)'},
            {topic: 'Rivers', emoji: '🏞️💧', question: 'Name three major rivers in Asia', answer: 'Yangtze, Ganges, Mekong, Yellow, Indus (any 3)'},
            {topic: 'Continents', emoji: '🗺️🌏', question: 'What is the population of Earth (approximate)?', answer: '8 billion or 8,000,000,000'},
            {topic: 'Oceans', emoji: '🌊🌍', question: 'Name three seas that are part of the Atlantic Ocean', answer: 'Caribbean Sea, Mediterranean Sea, North Sea (any 3)'},
            {topic: 'Mountains', emoji: '⛰️🏔️', question: 'Name three mountain ranges in North America', answer: 'Rocky Mountains, Appalachian Mountains, Sierra Nevada (any 3)'},
            {topic: 'Rivers', emoji: '🏞️🌊', question: 'Name the three longest rivers in the world', answer: 'Nile, Amazon, Yangtze'},
            {topic: 'Continents', emoji: '🌍🗺️', question: 'Name five countries in South America', answer: 'Brazil, Argentina, Chile, Peru, Colombia (any 5)'},
            {topic: 'Oceans', emoji: '🌊💧', question: 'What connects the Atlantic and Pacific Oceans?', answer: 'Panama Canal or Drake Passage'}
        ]
    }
    // Add more chapters: 2, 3, 4... unlimited!
};

// Export for master file to use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = geographyQuestions;
}
