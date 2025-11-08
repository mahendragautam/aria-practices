/**
 * WPCode Snippet #4: Geography Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer  
 * Priority: 13
 *
 * COPY ALL CODE BELOW
 */

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
    },
    2: { // Chapter 2: Countries and Borders
        easy: [
            {topic: 'Countries', emoji: '🇺🇸🗺️', question: 'Canada is the second largest country.', options: ['True', 'False'], correct: 0},
            {topic: 'Borders', emoji: '🏔️🚧', question: 'The Great Wall is in China.', options: ['True', 'False'], correct: 0},
            {topic: 'Countries', emoji: '🇷🇺🌍', question: 'Russia is the largest country.', options: ['True', 'False'], correct: 0},
            {topic: 'Borders', emoji: '🗺️📍', question: 'Countries share borders with neighbors.', options: ['True', 'False'], correct: 0},
            {topic: 'Countries', emoji: '🇧🇷🌴', question: 'Brazil is in South America.', options: ['True', 'False'], correct: 0},
            {topic: 'Borders', emoji: '🏞️🚧', question: 'Rivers can form natural borders.', options: ['True', 'False'], correct: 0},
            {topic: 'Countries', emoji: '🇮🇳🗺️', question: 'India is in Asia.', options: ['True', 'False'], correct: 0},
            {topic: 'Borders', emoji: '⛰️🚧', question: 'Mountains can be borders.', options: ['True', 'False'], correct: 0},
            {topic: 'Countries', emoji: '🇩🇪🗺️', question: 'Germany is in Europe.', options: ['True', 'False'], correct: 0},
            {topic: 'Borders', emoji: '🌊🗺️', question: 'Island nations have no land borders.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Countries', emoji: '🇺🇸🗺️', question: 'What is the capital of USA?', options: ['Washington D.C.', 'New York'], correct: 0},
            {topic: 'Borders', emoji: '🏔️🚧', question: 'Which countries border the USA?', options: ['Canada and Mexico', 'Mexico and Cuba'], correct: 0},
            {topic: 'Countries', emoji: '🇷🇺🌍', question: 'How many time zones does Russia span?', options: ['11', '8'], correct: 0},
            {topic: 'Borders', emoji: '🗺️📍', question: 'What is the longest land border?', options: ['Canada-USA', 'Russia-Kazakhstan'], correct: 0},
            {topic: 'Countries', emoji: '🇧🇷🌴', question: 'What is the capital of Brazil?', options: ['Brasília', 'Rio de Janeiro'], correct: 0},
            {topic: 'Borders', emoji: '🏞️🚧', question: 'Which river forms part of US-Mexico border?', options: ['Rio Grande', 'Colorado'], correct: 0},
            {topic: 'Countries', emoji: '🇮🇳🗺️', question: 'What is the largest country in South Asia?', options: ['India', 'Pakistan'], correct: 0},
            {topic: 'Borders', emoji: '⛰️🚧', question: 'Which mountains divide Europe and Asia?', options: ['Urals', 'Alps'], correct: 0},
            {topic: 'Countries', emoji: '🇩🇪🗺️', question: 'How many countries border Germany?', options: ['9', '6'], correct: 0},
            {topic: 'Borders', emoji: '🌊🗺️', question: 'Which country has the most borders?', options: ['China', 'Russia'], correct: 0}
        ],
        hard: [
            {topic: 'Countries', emoji: '🇺🇸🗺️', question: 'How many states are in the USA?', options: ['50', '48', '52'], correct: 0},
            {topic: 'Borders', emoji: '🏔️🚧', question: 'Which line divides North and South Korea?', options: ['38th parallel', '17th parallel', '49th parallel'], correct: 0},
            {topic: 'Countries', emoji: '🇷🇺🌍', question: 'What is the area of Russia (approx)?', options: ['17 million km²', '15 million km²', '20 million km²'], correct: 0},
            {topic: 'Borders', emoji: '🗺️📍', question: 'How long is Canada-USA border?', options: ['8,891 km', '6,891 km', '10,891 km'], correct: 0},
            {topic: 'Countries', emoji: '🇧🇷🌴', question: 'What percentage of South America is Brazil?', options: ['47%', '37%', '57%'], correct: 0},
            {topic: 'Borders', emoji: '🏞️🚧', question: 'How many countries does the Danube flow through?', options: ['10', '8', '12'], correct: 0},
            {topic: 'Countries', emoji: '🇮🇳🗺️', question: 'What is the population of India (approx)?', options: ['1.4 billion', '1.2 billion', '1.6 billion'], correct: 0},
            {topic: 'Borders', emoji: '⛰️🚧', question: 'Which countries does the Himalayas divide?', options: ['India and China', 'Nepal and Bhutan', 'Pakistan and Afghanistan'], correct: 0},
            {topic: 'Countries', emoji: '🇩🇪🗺️', question: 'When was Germany reunified?', options: ['1990', '1989', '1991'], correct: 0},
            {topic: 'Borders', emoji: '🌊🗺️', question: 'How many countries border China?', options: ['14', '12', '16'], correct: 0}
        ],
        expert: [
            {topic: 'Countries', emoji: '🇺🇸🗺️', question: 'Which state is the largest by area?', options: ['Alaska', 'Texas', 'California', 'Montana'], correct: 0},
            {topic: 'Borders', emoji: '🏔️🚧', question: 'What was the Berlin Wall?', options: ['Border dividing East and West Berlin', 'City wall', 'Historical monument', 'Military base'], correct: 0},
            {topic: 'Countries', emoji: '🇷🇺🌍', question: 'What percentage of Russia is in Asia?', options: ['77%', '50%', '85%', '65%'], correct: 0},
            {topic: 'Borders', emoji: '🗺️📍', question: 'What is an enclave?', options: ['Territory surrounded by another country', 'Island nation', 'Border city', 'Neutral zone'], correct: 0},
            {topic: 'Countries', emoji: '🇧🇷🌴', question: 'How many countries does Brazil border?', options: ['10', '8', '12', '9'], correct: 0},
            {topic: 'Borders', emoji: '🏞️🚧', question: 'What is the DMZ?', options: ['Demilitarized Zone Korea', 'Desert Military Zone', 'Dutch Maritime Zone', 'Defense Monitoring Zone'], correct: 0},
            {topic: 'Countries', emoji: '🇮🇳🗺️', question: 'How many states are in India?', options: ['28', '29', '30', '27'], correct: 0},
            {topic: 'Borders', emoji: '⛰️🚧', question: 'Which countries meet at Four Corners?', options: ['US states not countries', 'Switzerland-Austria-Italy-Germany', 'France-Belgium-Germany-Luxembourg', 'Argentina-Chile-Bolivia-Paraguay'], correct: 0},
            {topic: 'Countries', emoji: '🇩🇪🗺️', question: 'What was West Germany called?', options: ['Federal Republic of Germany', 'German Democratic Republic', 'Western Germany', 'Republic of Germany'], correct: 0},
            {topic: 'Borders', emoji: '🌊🗺️', question: 'What is an exclave?', options: ['Territory separated from main country', 'Island territory', 'Border town', 'Disputed region'], correct: 0}
        ],
        extreme: [
            {topic: 'Countries', emoji: '🇺🇸🗺️', question: 'Name three US territories', answer: 'Puerto Rico, Guam, US Virgin Islands, American Samoa (any 3)'},
            {topic: 'Borders', emoji: '🏔️🚧', question: 'Name three countries that border France', answer: 'Spain, Italy, Germany, Belgium, Switzerland, Luxembourg (any 3)'},
            {topic: 'Countries', emoji: '🇷🇺🌍', question: 'Name three regions of Russia', answer: 'Siberia, Far East, Urals, Caucasus (any 3)'},
            {topic: 'Borders', emoji: '🗺️📍', question: 'Name three countries completely surrounded by one country', answer: 'Lesotho (South Africa), San Marino (Italy), Vatican (Italy)'},
            {topic: 'Countries', emoji: '🇧🇷🌴', question: 'Name three major cities in Brazil', answer: 'São Paulo, Rio de Janeiro, Brasília, Salvador (any 3)'},
            {topic: 'Borders', emoji: '🏞️🚧', question: 'Name three rivers that form international borders', answer: 'Rio Grande, Danube, Rhine, Mekong (any 3)'},
            {topic: 'Countries', emoji: '🇮🇳🗺️', question: 'Name three neighboring countries of India', answer: 'Pakistan, China, Nepal, Bangladesh, Myanmar, Bhutan (any 3)'},
            {topic: 'Borders', emoji: '⛰️🚧', question: 'Name three disputed borders', answer: 'Kashmir, Crimea, South China Sea, Western Sahara (any 3)'},
            {topic: 'Countries', emoji: '🇩🇪🗺️', question: 'Name three German states', answer: 'Bavaria, Berlin, Saxony, Hamburg (any 3)'},
            {topic: 'Borders', emoji: '🌊🗺️', question: 'Name three countries with no sea access', answer: 'Switzerland, Austria, Mongolia, Bolivia, Paraguay (any 3)'}
        ]
    },
    3: { // Chapter 3: Capital Cities
        easy: [
            {topic: 'Capitals', emoji: '🏛️🗼', question: 'Paris is the capital of France.', options: ['True', 'False'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇬🇧', question: 'London is the capital of UK.', options: ['True', 'False'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🗾', question: 'Tokyo is the capital of Japan.', options: ['True', 'False'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🦘', question: 'Sydney is the capital of Australia.', options: ['True', 'False'], correct: 1},
            {topic: 'Capitals', emoji: '🏛️🍕', question: 'Rome is the capital of Italy.', options: ['True', 'False'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇪🇸', question: 'Madrid is the capital of Spain.', options: ['True', 'False'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇩🇪', question: 'Berlin is the capital of Germany.', options: ['True', 'False'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇨🇳', question: 'Beijing is the capital of China.', options: ['True', 'False'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇷🇺', question: 'Moscow is the capital of Russia.', options: ['True', 'False'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇧🇷', question: 'Rio is the capital of Brazil.', options: ['True', 'False'], correct: 1}
        ],
        medium: [
            {topic: 'Capitals', emoji: '🏛️🗼', question: 'What is the capital of Italy?', options: ['Rome', 'Milan'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇬🇧', question: 'What is the capital of Spain?', options: ['Madrid', 'Barcelona'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🗾', question: 'What is the capital of South Korea?', options: ['Seoul', 'Busan'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🦘', question: 'What is the real capital of Australia?', options: ['Canberra', 'Sydney'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🍕', question: 'What is the capital of Turkey?', options: ['Ankara', 'Istanbul'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇪🇸', question: 'What is the capital of Canada?', options: ['Ottawa', 'Toronto'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇩🇪', question: 'What is the capital of Switzerland?', options: ['Bern', 'Zurich'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇨🇳', question: 'What is the capital of Egypt?', options: ['Cairo', 'Alexandria'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇷🇺', question: 'What is the capital of India?', options: ['New Delhi', 'Mumbai'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇧🇷', question: 'What is the real capital of Brazil?', options: ['Brasília', 'Rio de Janeiro'], correct: 0}
        ],
        hard: [
            {topic: 'Capitals', emoji: '🏛️🗼', question: 'What is the capital of Kazakhstan?', options: ['Astana', 'Almaty', 'Nur-Sultan'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇬🇧', question: 'What is the capital of Myanmar?', options: ['Naypyidaw', 'Yangon', 'Mandalay'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🗾', question: 'What is the capital of Nigeria?', options: ['Abuja', 'Lagos', 'Kano'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🦘', question: 'When did Canberra become capital?', options: ['1913', '1901', '1927'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🍕', question: 'What is the capital of Pakistan?', options: ['Islamabad', 'Karachi', 'Lahore'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇪🇸', question: 'What is the capital of Morocco?', options: ['Rabat', 'Casablanca', 'Marrakech'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇩🇪', question: 'What is the capital of South Africa?', options: ['Pretoria', 'Cape Town', 'Johannesburg'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇨🇳', question: 'What is the capital of Vietnam?', options: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇷🇺', question: 'What is the capital of Sri Lanka?', options: ['Sri Jayawardenepura Kotte', 'Colombo', 'Kandy'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇧🇷', question: 'When was Brasília founded?', options: ['1960', '1950', '1970'], correct: 0}
        ],
        expert: [
            {topic: 'Capitals', emoji: '🏛️🗼', question: 'What is the highest capital city?', options: ['La Paz', 'Quito', 'Bogotá', 'Addis Ababa'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇬🇧', question: 'Which country has two capitals?', options: ['South Africa', 'Bolivia', 'Sri Lanka', 'Malaysia'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🗾', question: 'What is the smallest capital?', options: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🦘', question: 'Why was Canberra chosen?', options: ['Compromise between Sydney/Melbourne', 'Central location', 'Military strategy', 'Royal decree'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🍕', question: 'What is the capital of UAE?', options: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇪🇸', question: 'Which capital is on two continents?', options: ['Istanbul', 'Cairo', 'Moscow', 'Tehran'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇩🇪', question: 'What is the oldest continuously inhabited capital?', options: ['Damascus', 'Athens', 'Rome', 'Cairo'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇨🇳', question: 'What is the capital of Indonesia?', options: ['Jakarta', 'Surabaya', 'Bandung', 'Medan'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇷🇺', question: 'Which capital was built from scratch?', options: ['Brasília', 'Washington DC', 'Canberra', 'Naypyidaw'], correct: 0},
            {topic: 'Capitals', emoji: '🏛️🇧🇷', question: 'What is the coldest capital?', options: ['Ulaanbaatar', 'Moscow', 'Ottawa', 'Reykjavik'], correct: 0}
        ],
        extreme: [
            {topic: 'Capitals', emoji: '🏛️🗼', question: 'Name three African capitals', answer: 'Cairo, Nairobi, Lagos, Accra, Addis Ababa (any 3)'},
            {topic: 'Capitals', emoji: '🏛️🇬🇧', question: 'Name three Asian capitals', answer: 'Beijing, Tokyo, New Delhi, Bangkok, Seoul (any 3)'},
            {topic: 'Capitals', emoji: '🏛️🗾', question: 'Name three European capitals', answer: 'Paris, London, Berlin, Rome, Madrid (any 3)'},
            {topic: 'Capitals', emoji: '🏛️🦘', question: 'Name three South American capitals', answer: 'Brasília, Buenos Aires, Lima, Santiago, Bogotá (any 3)'},
            {topic: 'Capitals', emoji: '🏛️🍕', question: 'Name three Middle Eastern capitals', answer: 'Riyadh, Tehran, Baghdad, Damascus, Beirut (any 3)'},
            {topic: 'Capitals', emoji: '🏛️🇪🇸', question: 'Name three capital cities starting with B', answer: 'Berlin, Beijing, Brussels, Bangkok, Brasília (any 3)'},
            {topic: 'Capitals', emoji: '🏛️🇩🇪', question: "Name South Africa's three capitals", answer: 'Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)'},
            {topic: 'Capitals', emoji: '🏛️🇨🇳', question: 'Name three capitals on rivers', answer: 'London (Thames), Paris (Seine), Cairo (Nile), Rome (Tiber) (any 3)'},
            {topic: 'Capitals', emoji: '🏛️🇷🇺', question: 'Name three planned capital cities', answer: 'Brasília, Canberra, Washington DC, Astana (any 3)'},
            {topic: 'Capitals', emoji: '🏛️🇧🇷', question: 'Name three capitals above 2000m elevation', answer: 'La Paz, Quito, Bogotá, Addis Ababa (any 3)'}
        ]
    },
    4: { // Chapter 4: Climate Zones
        easy: [
            {topic: 'Climate', emoji: '☀️🌡️', question: 'The equator is hot year-round.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '❄️🧊', question: 'Antarctica is the coldest continent.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🌧️💧', question: 'Rainforests get a lot of rain.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🏜️🌵', question: 'Deserts are very dry.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🍂🍁', question: 'Temperate zones have four seasons.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🌴🥥', question: 'Tropical areas are near the equator.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🌨️⛄', question: 'Polar regions are very cold.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🌿🌱', question: 'Climate affects what plants grow.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🌊🌀', question: 'Oceans affect climate.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '⛰️❄️', question: 'Mountains are usually colder.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Climate', emoji: '☀️🌡️', question: 'What causes seasons?', options: ["Earth\'s tilt", 'Distance from sun'], correct: 0},
            {topic: 'Climate', emoji: '❄️🧊', question: 'What is the coldest recorded temperature?', options: ['-89°C', '-70°C'], correct: 0},
            {topic: 'Climate', emoji: '🌧️💧', question: 'Where is the wettest place on Earth?', options: ['Mawsynram, India', 'Amazon'], correct: 0},
            {topic: 'Climate', emoji: '🏜️🌵', question: 'What is the driest desert?', options: ['Atacama', 'Sahara'], correct: 0},
            {topic: 'Climate', emoji: '🍂🍁', question: 'What are the temperate zones?', options: ['Between tropics and poles', 'Near equator'], correct: 0},
            {topic: 'Climate', emoji: '🌴🥥', question: 'What defines tropical climate?', options: ['Warm year-round', 'Lots of trees'], correct: 0},
            {topic: 'Climate', emoji: '🌨️⛄', question: 'What is the Arctic Circle?', options: ['66.5°N latitude', '90°N latitude'], correct: 0},
            {topic: 'Climate', emoji: '🌿🌱', question: 'What is a monsoon?', options: ['Seasonal wind and rain', 'Hurricane'], correct: 0},
            {topic: 'Climate', emoji: '🌊🌀', question: 'What is El Niño?', options: ['Pacific warming pattern', 'Hurricane type'], correct: 0},
            {topic: 'Climate', emoji: '⛰️❄️', question: 'Why are mountains colder?', options: ['Higher elevation', 'More wind'], correct: 0}
        ],
        hard: [
            {topic: 'Climate', emoji: '☀️🌡️', question: 'How many major climate zones are there?', options: ['5', '3', '7'], correct: 0},
            {topic: 'Climate', emoji: '❄️🧊', question: 'What percentage of Earth is covered by ice?', options: ['10%', '15%', '5%'], correct: 0},
            {topic: 'Climate', emoji: '🌧️💧', question: 'How much rain does rainforest get annually?', options: ['2000mm+', '1000mm+', '500mm+'], correct: 0},
            {topic: 'Climate', emoji: '🏜️🌵', question: 'How much rain defines a desert?', options: ['Less than 250mm', 'Less than 500mm', 'Less than 100mm'], correct: 0},
            {topic: 'Climate', emoji: '🍂🍁', question: 'What is the Mediterranean climate?', options: ['Hot dry summers, mild winters', 'Cold winters, hot summers', 'Rainy year-round'], correct: 0},
            {topic: 'Climate', emoji: '🌴🥥', question: 'What latitudes are tropics?', options: ['23.5°N to 23.5°S', '30°N to 30°S', '15°N to 15°S'], correct: 0},
            {topic: 'Climate', emoji: '🌨️⛄', question: 'What is permafrost?', options: ['Permanently frozen ground', 'Ice sheet', 'Glacier'], correct: 0},
            {topic: 'Climate', emoji: '🌿🌱', question: 'When does India get monsoons?', options: ['June-September', 'December-March', 'Year-round'], correct: 0},
            {topic: 'Climate', emoji: '🌊🌀', question: 'How often does El Niño occur?', options: ['Every 2-7 years', 'Every year', 'Every 10 years'], correct: 0},
            {topic: 'Climate', emoji: '⛰️❄️', question: 'How much does temp drop per 1000m?', options: ['6.5°C', '10°C', '3°C'], correct: 0}
        ],
        expert: [
            {topic: 'Climate', emoji: '☀️🌡️', question: 'What is the Köppen climate classification?', options: ['System of climate zones', 'Temperature scale', 'Weather pattern', 'Season type'], correct: 0},
            {topic: 'Climate', emoji: '❄️🧊', question: 'What is an ice age?', options: ['Long period of cold climate', 'Single cold year', 'Winter season', 'Polar expansion'], correct: 0},
            {topic: 'Climate', emoji: '🌧️💧', question: 'What is orographic rainfall?', options: ['Mountain-induced rain', 'Ocean rain', 'Desert rain', 'Forest rain'], correct: 0},
            {topic: 'Climate', emoji: '🏜️🌵', question: 'What causes rain shadow effect?', options: ['Mountains block moisture', 'Ocean currents', 'Latitude', 'Elevation'], correct: 0},
            {topic: 'Climate', emoji: '🍂🍁', question: 'What is a continental climate?', options: ['Large temp variations', 'Moderate year-round', 'Tropical heat', 'Polar cold'], correct: 0},
            {topic: 'Climate', emoji: '🌴🥥', question: 'What are trade winds?', options: ['Easterly tropical winds', 'Western winds', 'Polar winds', 'Mountain winds'], correct: 0},
            {topic: 'Climate', emoji: '🌨️⛄', question: 'What is the tree line?', options: ['Elevation limit for trees', 'Forest border', 'Latitude line', 'Desert edge'], correct: 0},
            {topic: 'Climate', emoji: '🌿🌱', question: 'What is a microclimate?', options: ['Local climate variation', 'Small country climate', 'City climate', 'Indoor climate'], correct: 0},
            {topic: 'Climate', emoji: '🌊🌀', question: 'What is La Niña?', options: ['Pacific cooling pattern', 'Atlantic storm', 'Indian monsoon', 'Arctic wind'], correct: 0},
            {topic: 'Climate', emoji: '⛰️❄️', question: 'What is the greenhouse effect?', options: ['Atmospheric heat retention', 'Plant growth', 'Ocean warming', 'Ice melting'], correct: 0}
        ],
        extreme: [
            {topic: 'Climate', emoji: '☀️🌡️', question: 'Name the five major climate zones', answer: 'Tropical, dry, temperate, continental, polar'},
            {topic: 'Climate', emoji: '❄️🧊', question: 'Name three types of cold climates', answer: 'Tundra, ice cap, subarctic'},
            {topic: 'Climate', emoji: '🌧️💧', question: 'Name three rainforest locations', answer: 'Amazon, Congo Basin, Southeast Asia'},
            {topic: 'Climate', emoji: '🏜️🌵', question: 'Name three major deserts', answer: 'Sahara, Arabian, Gobi, Kalahari, Atacama (any 3)'},
            {topic: 'Climate', emoji: '🍂🍁', question: 'Name three characteristics of temperate climate', answer: 'Four seasons, moderate temps, varied precipitation'},
            {topic: 'Climate', emoji: '🌴🥥', question: 'Name three types of tropical climates', answer: 'Rainforest, monsoon, savanna'},
            {topic: 'Climate', emoji: '🌨️⛄', question: 'Name three countries in Arctic Circle', answer: 'Norway, Sweden, Finland, Russia, Canada, USA (any 3)'},
            {topic: 'Climate', emoji: '🌿🌱', question: 'Name three factors affecting climate', answer: 'Latitude, altitude, ocean currents, distance from sea (any 3)'},
            {topic: 'Climate', emoji: '🌊🌀', question: 'Name three ocean currents', answer: 'Gulf Stream, Kuroshio, Humboldt, Agulhas (any 3)'},
            {topic: 'Climate', emoji: '⛰️❄️', question: 'Name three greenhouse gases', answer: 'Carbon dioxide, methane, water vapor, nitrous oxide (any 3)'}
        ]
    },
    5: { // Chapter 5: Landforms and Features
        easy: [
            {topic: 'Landforms', emoji: '⛰️🏔️', question: 'Mountains are tall landforms.', options: ['True', 'False'], correct: 0},
            {topic: 'Landforms', emoji: '🏖️🌊', question: 'Beaches are found near water.', options: ['True', 'False'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️🗻', question: 'Valleys are low areas between hills.', options: ['True', 'False'], correct: 0},
            {topic: 'Landforms', emoji: '🏜️🌵', question: 'Plateaus are flat elevated areas.', options: ['True', 'False'], correct: 0},
            {topic: 'Landforms', emoji: '🌊⛰️', question: 'Cliffs are steep rock faces.', options: ['True', 'False'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️💧', question: 'Canyons are carved by water.', options: ['True', 'False'], correct: 0},
            {topic: 'Landforms', emoji: '🏝️🌴', question: 'Islands are surrounded by water.', options: ['True', 'False'], correct: 0},
            {topic: 'Landforms', emoji: '🗻🔥', question: 'Volcanoes can create mountains.', options: ['True', 'False'], correct: 0},
            {topic: 'Landforms', emoji: '🏔️❄️', question: 'Glaciers are made of ice.', options: ['True', 'False'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️🌾', question: 'Plains are flat areas.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Landforms', emoji: '⛰️🏔️', question: 'What is the tallest mountain type?', options: ['Fold mountain', 'Volcanic mountain'], correct: 0},
            {topic: 'Landforms', emoji: '🏖️🌊', question: 'How are beaches formed?', options: ['Wave erosion and deposition', 'Volcanic activity'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️🗻', question: 'What is a rift valley?', options: ['Valley formed by tectonic plates', 'River valley'], correct: 0},
            {topic: 'Landforms', emoji: '🏜️🌵', question: 'What is the largest plateau?', options: ['Tibetan Plateau', 'Colorado Plateau'], correct: 0},
            {topic: 'Landforms', emoji: '🌊⛰️', question: 'What are the White Cliffs of Dover?', options: ['Chalk cliffs', 'Limestone cliffs'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️💧', question: 'What is the deepest canyon?', options: ['Yarlung Tsangpo', 'Grand Canyon'], correct: 0},
            {topic: 'Landforms', emoji: '🏝️🌴', question: 'What is an atoll?', options: ['Ring-shaped coral reef', 'Volcanic island'], correct: 0},
            {topic: 'Landforms', emoji: '🗻🔥', question: 'What is the Ring of Fire?', options: ['Pacific volcanic belt', 'African rift'], correct: 0},
            {topic: 'Landforms', emoji: '🏔️❄️', question: 'Where is the largest glacier?', options: ['Antarctica', 'Greenland'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️🌾', question: 'What are the Great Plains?', options: ['North American grassland', 'European plain'], correct: 0}
        ],
        hard: [
            {topic: 'Landforms', emoji: '⛰️🏔️', question: 'How are fold mountains formed?', options: ['Plate collision', 'Volcanic eruption', 'Erosion'], correct: 0},
            {topic: 'Landforms', emoji: '🏖️🌊', question: 'What is longshore drift?', options: ['Coastal sediment movement', 'Ocean current', 'Wave type'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️🗻', question: 'What is the Great Rift Valley?', options: ['African tectonic valley', 'Asian valley', 'American valley'], correct: 0},
            {topic: 'Landforms', emoji: '🏜️🌵', question: 'How high is Tibetan Plateau?', options: ['4,500m average', '3,000m average', '6,000m average'], correct: 0},
            {topic: 'Landforms', emoji: '🌊⛰️', question: 'What is a fjord?', options: ['Glacial valley filled by sea', 'River valley', 'Volcanic crater'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️💧', question: 'How deep is the Grand Canyon?', options: ['1,800m', '1,000m', '2,500m'], correct: 0},
            {topic: 'Landforms', emoji: '🏝️🌴', question: 'What is the largest island?', options: ['Greenland', 'New Guinea', 'Borneo'], correct: 0},
            {topic: 'Landforms', emoji: '🗻🔥', question: 'What percentage of volcanoes are in Ring of Fire?', options: ['75%', '50%', '90%'], correct: 0},
            {topic: 'Landforms', emoji: '🏔️❄️', question: 'What is the Lambert Glacier length?', options: ['400km', '300km', '500km'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️🌾', question: 'What are pampas?', options: ['South American grasslands', 'African plains', 'Asian steppes'], correct: 0}
        ],
        expert: [
            {topic: 'Landforms', emoji: '⛰️🏔️', question: 'What is orogenesis?', options: ['Mountain formation', 'Erosion process', 'Plate movement', 'Volcanic activity'], correct: 0},
            {topic: 'Landforms', emoji: '🏖️🌊', question: 'What is a tombolo?', options: ['Sand bar connecting island to mainland', 'Beach type', 'Cliff formation', 'Wave pattern'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️🗻', question: 'What is a hanging valley?', options: ['Tributary valley above main valley', 'Mountain valley', 'Coastal valley', 'Desert valley'], correct: 0},
            {topic: 'Landforms', emoji: '🏜️🌵', question: 'What is the Colorado Plateau known for?', options: ['Canyon formations', 'High elevation', 'Desert climate', 'Ancient rocks'], correct: 0},
            {topic: 'Landforms', emoji: '🌊⛰️', question: 'What is a sea stack?', options: ['Isolated rock pillar in sea', 'Underwater mountain', 'Coral formation', 'Beach feature'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️💧', question: 'What created the Grand Canyon?', options: ['Colorado River erosion', 'Earthquake', 'Glacier', 'Volcanic activity'], correct: 0},
            {topic: 'Landforms', emoji: '🏝️🌴', question: 'What is a continental island?', options: ['Island on continental shelf', 'Oceanic island', 'Coral island', 'Volcanic island'], correct: 0},
            {topic: 'Landforms', emoji: '🗻🔥', question: 'What is a caldera?', options: ['Large volcanic crater', 'Lava flow', 'Mountain peak', 'Fault line'], correct: 0},
            {topic: 'Landforms', emoji: '🏔️❄️', question: 'What is a glacial moraine?', options: ['Deposited rock and debris', 'Ice formation', 'Snow field', 'Valley type'], correct: 0},
            {topic: 'Landforms', emoji: '🏞️🌾', question: 'What is a peneplain?', options: ['Eroded flat surface', 'New plain', 'Coastal plain', 'Flood plain'], correct: 0}
        ],
        extreme: [
            {topic: 'Landforms', emoji: '⛰️🏔️', question: 'Name three types of mountains', answer: 'Fold, fault-block, volcanic, dome (any 3)'},
            {topic: 'Landforms', emoji: '🏖️🌊', question: 'Name three coastal features', answer: 'Beaches, cliffs, bays, headlands, spits (any 3)'},
            {topic: 'Landforms', emoji: '🏞️🗻', question: 'Name three famous valleys', answer: 'Great Rift Valley, Death Valley, Napa Valley, Yosemite (any 3)'},
            {topic: 'Landforms', emoji: '🏜️🌵', question: 'Name three major plateaus', answer: 'Tibetan, Colorado, Deccan, Brazilian (any 3)'},
            {topic: 'Landforms', emoji: '🌊⛰️', question: 'Name three erosion processes', answer: 'Water, wind, ice, waves (any 3)'},
            {topic: 'Landforms', emoji: '🏞️💧', question: 'Name three famous canyons', answer: 'Grand Canyon, Fish River Canyon, Copper Canyon (any 3)'},
            {topic: 'Landforms', emoji: '🏝️🌴', question: 'Name three largest islands', answer: 'Greenland, New Guinea, Borneo, Madagascar (any 3)'},
            {topic: 'Landforms', emoji: '🗻🔥', question: 'Name three active volcanoes', answer: 'Kilauea, Mount Etna, Stromboli, Krakatoa (any 3)'},
            {topic: 'Landforms', emoji: '🏔️❄️', question: 'Name three types of glaciers', answer: 'Valley, continental, piedmont, cirque (any 3)'},
            {topic: 'Landforms', emoji: '🏞️🌾', question: 'Name three grassland types', answer: 'Prairies, steppes, pampas, savanna (any 3)'}
        ]
    },
    6: { // Chapter 6: Population and Demographics
        easy: [
            {topic: 'Population', emoji: '👥🌍', question: 'China has largest population.', options: ['True', 'False'], correct: 1},
            {topic: 'Population', emoji: '👶👴', question: 'Population keeps growing globally.', options: ['True', 'False'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌆', question: 'Tokyo is a megacity.', options: ['True', 'False'], correct: 0},
            {topic: 'Demographics', emoji: '📊📈', question: 'Birth rate affects population.', options: ['True', 'False'], correct: 0},
            {topic: 'Population', emoji: '👥🌏', question: 'Asia has most people.', options: ['True', 'False'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌃', question: 'More people live in cities now.', options: ['True', 'False'], correct: 0},
            {topic: 'Demographics', emoji: '📊👶', question: 'Life expectancy is increasing.', options: ['True', 'False'], correct: 0},
            {topic: 'Population', emoji: '👥🗺️', question: 'Monaco is densely populated.', options: ['True', 'False'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🏘️', question: 'Urbanization is growing.', options: ['True', 'False'], correct: 0},
            {topic: 'Demographics', emoji: '📊📉', question: 'Some countries have aging populations.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Population', emoji: '👥🌍', question: 'Which country has largest population now?', options: ['India', 'China'], correct: 0},
            {topic: 'Population', emoji: '👶👴', question: 'What is world population (approx)?', options: ['8 billion', '7 billion'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌆', question: 'What is the most populous city?', options: ['Tokyo', 'Delhi'], correct: 0},
            {topic: 'Demographics', emoji: '📊📈', question: 'What is population density?', options: ['People per area', 'Total population'], correct: 0},
            {topic: 'Population', emoji: '👥🌏', question: 'What continent has fewest people?', options: ['Antarctica', 'Australia'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌃', question: 'What percent live in cities?', options: ['55%', '45%'], correct: 0},
            {topic: 'Demographics', emoji: '📊👶', question: 'What is birth rate?', options: ['Births per 1000', 'Total births'], correct: 0},
            {topic: 'Population', emoji: '👥🗺️', question: 'Which has highest density?', options: ['Monaco', 'Singapore'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🏘️', question: 'What is a megacity?', options: ['10+ million people', '5+ million'], correct: 0},
            {topic: 'Demographics', emoji: '📊📉', question: 'What is aging population?', options: ['More elderly people', 'Longer lifespan'], correct: 0}
        ],
        hard: [
            {topic: 'Population', emoji: '👥🌍', question: "What is India\'s population (approx)?", options: ['1.4 billion', '1.2 billion', '1.6 billion'], correct: 0},
            {topic: 'Population', emoji: '👶👴', question: 'When did world reach 8 billion?', options: ['2022', '2020', '2024'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌆', question: 'How many megacities exist?', options: ['33+', '25', '40'], correct: 0},
            {topic: 'Demographics', emoji: '📊📈', question: 'What is replacement fertility rate?', options: ['2.1', '2.5', '1.8'], correct: 0},
            {topic: 'Population', emoji: '👥🌏', question: 'What percent of people live in Asia?', options: ['60%', '50%', '70%'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌃', question: 'What is urbanization rate?', options: ['Increasing city population', 'City growth', 'Migration'], correct: 0},
            {topic: 'Demographics', emoji: '📊👶', question: 'Which country has highest birth rate?', options: ['Niger', 'Mali', 'Somalia'], correct: 0},
            {topic: 'Population', emoji: '👥🗺️', question: "What is Singapore\'s density?", options: ['8,000/km²', '6,000/km²', '10,000/km²'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🏘️', question: 'What was first city to reach 10M?', options: ['New York', 'London', 'Tokyo'], correct: 0},
            {topic: 'Demographics', emoji: '📊📉', question: 'Which country has oldest population?', options: ['Japan', 'Italy', 'Germany'], correct: 0}
        ],
        expert: [
            {topic: 'Population', emoji: '👥🌍', question: 'What is demographic transition?', options: ['Population development stages', 'Migration pattern', 'Age structure', 'Growth rate'], correct: 0},
            {topic: 'Population', emoji: '👶👴', question: 'When will world population peak?', options: ['2080s-2100', '2050', '2150', '2060'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌆', question: 'What is a primate city?', options: ['Largest city dominates country', 'Capital city', 'Port city', 'Ancient city'], correct: 0},
            {topic: 'Demographics', emoji: '📊📈', question: 'What is dependency ratio?', options: ['Non-working to working population', 'Birth to death ratio', 'Urban to rural ratio', 'Age structure'], correct: 0},
            {topic: 'Population', emoji: '👥🌏', question: 'What is carrying capacity?', options: ['Maximum sustainable population', 'Current population', 'Growth rate', 'Population density'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌃', question: 'What is urban sprawl?', options: ['Uncontrolled city expansion', 'High-rise development', 'City planning', 'Population growth'], correct: 0},
            {topic: 'Demographics', emoji: '📊👶', question: 'What is infant mortality rate?', options: ['Deaths per 1000 live births', 'Child deaths', 'Birth complications', 'Health indicator'], correct: 0},
            {topic: 'Population', emoji: '👥🗺️', question: 'What is population pyramid?', options: ['Age-sex distribution graph', 'Growth chart', 'Density map', 'Migration pattern'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🏘️', question: 'What is gentrification?', options: ['Neighborhood renovation and displacement', 'Urban renewal', 'City planning', 'Population growth'], correct: 0},
            {topic: 'Demographics', emoji: '📊📉', question: 'What is emigration?', options: ["Leaving one\'s country", 'Entering country', 'Internal migration', 'Forced movement'], correct: 0}
        ],
        extreme: [
            {topic: 'Population', emoji: '👥🌍', question: 'Name three most populous countries', answer: 'India, China, USA'},
            {topic: 'Population', emoji: '👶👴', question: 'Name three factors affecting population growth', answer: 'Birth rate, death rate, migration'},
            {topic: 'Cities', emoji: '🏙️🌆', question: 'Name three megacities in Asia', answer: 'Tokyo, Delhi, Shanghai, Manila, Seoul (any 3)'},
            {topic: 'Demographics', emoji: '📊📈', question: 'Name three demographic indicators', answer: 'Birth rate, death rate, life expectancy, fertility rate (any 3)'},
            {topic: 'Population', emoji: '👥🌏', question: 'Name three least populated countries', answer: 'Vatican, Nauru, Tuvalu, Palau (any 3)'},
            {topic: 'Cities', emoji: '🏙️🌃', question: 'Name three challenges of urbanization', answer: 'Housing, infrastructure, pollution, poverty (any 3)'},
            {topic: 'Demographics', emoji: '📊👶', question: 'Name three countries with declining population', answer: 'Japan, Italy, Bulgaria, Ukraine (any 3)'},
            {topic: 'Population', emoji: '👥🗺️', question: 'Name three most densely populated countries', answer: 'Monaco, Singapore, Vatican, Bahrain, Malta (any 3)'},
            {topic: 'Cities', emoji: '🏙️🏘️', question: 'Name three primate cities', answer: 'London (UK), Paris (France), Tokyo (Japan), Bangkok (Thailand) (any 3)'},
            {topic: 'Demographics', emoji: '📊📉', question: 'Name three push factors for migration', answer: 'War, poverty, climate, persecution (any 3)'}
        ]
    },
};
