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
    },,
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
            {topic: 'Capitals', emoji: '🏛️🇩🇪', question: 'Name South Africa\'s three capitals', answer: 'Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)'},
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
            {topic: 'Climate', emoji: '☀️🌡️', question: 'What causes seasons?', options: ['Earth\'s tilt', 'Distance from sun'], correct: 0},
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
    }
,
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
            {topic: 'Population', emoji: '👥🌍', question: 'What is India\'s population (approx)?', options: ['1.4 billion', '1.2 billion', '1.6 billion'], correct: 0},
            {topic: 'Population', emoji: '👶👴', question: 'When did world reach 8 billion?', options: ['2022', '2020', '2024'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌆', question: 'How many megacities exist?', options: ['33+', '25', '40'], correct: 0},
            {topic: 'Demographics', emoji: '📊📈', question: 'What is replacement fertility rate?', options: ['2.1', '2.5', '1.8'], correct: 0},
            {topic: 'Population', emoji: '👥🌏', question: 'What percent of people live in Asia?', options: ['60%', '50%', '70%'], correct: 0},
            {topic: 'Cities', emoji: '🏙️🌃', question: 'What is urbanization rate?', options: ['Increasing city population', 'City growth', 'Migration'], correct: 0},
            {topic: 'Demographics', emoji: '📊👶', question: 'Which country has highest birth rate?', options: ['Niger', 'Mali', 'Somalia'], correct: 0},
            {topic: 'Population', emoji: '👥🗺️', question: 'What is Singapore\'s density?', options: ['8,000/km²', '6,000/km²', '10,000/km²'], correct: 0},
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
            {topic: 'Demographics', emoji: '📊📉', question: 'What is emigration?', options: ['Leaving one\'s country', 'Entering country', 'Internal migration', 'Forced movement'], correct: 0}
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
,
    7: { // Chapter 7: Natural Resources
        easy: [
            {topic: 'Resources', emoji: '💎⛏️', question: 'Oil is a natural resource.', options: ['True', 'False'], correct: 0},
            {topic: 'Resources', emoji: '🌲🪵', question: 'Wood comes from forests.', options: ['True', 'False'], correct: 0},
            {topic: 'Resources', emoji: '💧🚰', question: 'Fresh water is limited.', options: ['True', 'False'], correct: 0},
            {topic: 'Resources', emoji: '⚡💡', question: 'Coal produces energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Resources', emoji: '🌾🌽', question: 'Soil is renewable resource.', options: ['True', 'False'], correct: 0},
            {topic: 'Resources', emoji: '☀️🔋', question: 'Solar is renewable energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Resources', emoji: '🐟🦐', question: 'Oceans provide food.', options: ['True', 'False'], correct: 0},
            {topic: 'Resources', emoji: '⛰️🪨', question: 'Minerals are non-renewable.', options: ['True', 'False'], correct: 0},
            {topic: 'Resources', emoji: '🌬️💨', question: 'Wind creates electricity.', options: ['True', 'False'], correct: 0},
            {topic: 'Resources', emoji: '🔥🪵', question: 'Biomass is energy source.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Resources', emoji: '💎⛏️', question: 'Which country has most oil?', options: ['Venezuela', 'Saudi Arabia'], correct: 0},
            {topic: 'Resources', emoji: '🌲🪵', question: 'What is deforestation?', options: ['Forest removal', 'Tree planting'], correct: 0},
            {topic: 'Resources', emoji: '💧🚰', question: 'What percent of water is fresh?', options: ['2.5%', '10%'], correct: 0},
            {topic: 'Resources', emoji: '⚡💡', question: 'What is fossil fuel?', options: ['Ancient organic matter', 'Modern fuel'], correct: 0},
            {topic: 'Resources', emoji: '🌾🌽', question: 'What is topsoil?', options: ['Upper soil layer', 'Deep soil'], correct: 0},
            {topic: 'Resources', emoji: '☀️🔋', question: 'What is photovoltaic?', options: ['Solar to electricity', 'Wind power'], correct: 0},
            {topic: 'Resources', emoji: '🐟🦐', question: 'What is overfishing?', options: ['Taking too many fish', 'Fish farming'], correct: 0},
            {topic: 'Resources', emoji: '⛰️🪨', question: 'What is mining?', options: ['Extracting minerals', 'Digging holes'], correct: 0},
            {topic: 'Resources', emoji: '🌬️💨', question: 'What are wind turbines?', options: ['Wind to electricity', 'Weather tool'], correct: 0},
            {topic: 'Resources', emoji: '🔥🪵', question: 'What is biomass?', options: ['Organic matter fuel', 'Chemical fuel'], correct: 0}
        ],
        hard: [
            {topic: 'Resources', emoji: '💎⛏️', question: 'How much oil does Venezuela have?', options: ['300+ billion barrels', '200 billion', '400 billion'], correct: 0},
            {topic: 'Resources', emoji: '🌲🪵', question: 'How much rainforest is lost yearly?', options: ['10 million hectares', '5 million', '15 million'], correct: 0},
            {topic: 'Resources', emoji: '💧🚰', question: 'Where is most freshwater?', options: ['Ice and glaciers', 'Rivers', 'Lakes'], correct: 0},
            {topic: 'Resources', emoji: '⚡💡', question: 'Which fossil fuel is cleanest?', options: ['Natural gas', 'Coal', 'Oil'], correct: 0},
            {topic: 'Resources', emoji: '🌾🌽', question: 'How long to form 1 inch of topsoil?', options: ['500 years', '100 years', '1000 years'], correct: 0},
            {topic: 'Resources', emoji: '☀️🔋', question: 'What percent of energy is solar?', options: ['3%', '10%', '1%'], correct: 0},
            {topic: 'Resources', emoji: '🐟🦐', question: 'What percent of stocks are overfished?', options: ['35%', '20%', '50%'], correct: 0},
            {topic: 'Resources', emoji: '⛰️🪨', question: 'What is the biggest gold producer?', options: ['China', 'Australia', 'Russia'], correct: 0},
            {topic: 'Resources', emoji: '🌬️💨', question: 'Which country has most wind power?', options: ['China', 'USA', 'Germany'], correct: 0},
            {topic: 'Resources', emoji: '🔥🪵', question: 'What percent use biomass for cooking?', options: ['40%', '20%', '60%'], correct: 0}
        ],
        expert: [
            {topic: 'Resources', emoji: '💎⛏️', question: 'What is peak oil theory?', options: ['Maximum extraction rate reached', 'Oil discovery peak', 'Price maximum', 'Production decline'], correct: 0},
            {topic: 'Resources', emoji: '🌲🪵', question: 'What is sustainable forestry?', options: ['Harvesting that maintains forest', 'No cutting', 'Fast cutting', 'Tree planting'], correct: 0},
            {topic: 'Resources', emoji: '💧🚰', question: 'What is water stress?', options: ['Demand exceeds supply', 'Drought', 'Pollution', 'Scarcity'], correct: 0},
            {topic: 'Resources', emoji: '⚡💡', question: 'What is carbon capture?', options: ['Storing CO2 emissions', 'Reducing emissions', 'Clean energy', 'Tree planting'], correct: 0},
            {topic: 'Resources', emoji: '🌾🌽', question: 'What is soil erosion?', options: ['Loss of topsoil', 'Soil formation', 'Weathering', 'Deposition'], correct: 0},
            {topic: 'Resources', emoji: '☀️🔋', question: 'What is solar efficiency?', options: ['Energy conversion rate', 'Panel size', 'Sunlight amount', 'Cost'], correct: 0},
            {topic: 'Resources', emoji: '🐟🦐', question: 'What is aquaculture?', options: ['Fish farming', 'Wild fishing', 'Ocean study', 'Coral growing'], correct: 0},
            {topic: 'Resources', emoji: '⛰️🪨', question: 'What is strip mining?', options: ['Surface mineral extraction', 'Underground mining', 'Ocean mining', 'Cave mining'], correct: 0},
            {topic: 'Resources', emoji: '🌬️💨', question: 'What is offshore wind?', options: ['Ocean-based turbines', 'Coastal winds', 'Storm energy', 'Tidal power'], correct: 0},
            {topic: 'Resources', emoji: '🔥🪵', question: 'What is biofuel?', options: ['Fuel from organic matter', 'Fossil fuel', 'Nuclear fuel', 'Chemical fuel'], correct: 0}
        ],
        extreme: [
            {topic: 'Resources', emoji: '💎⛏️', question: 'Name three OPEC countries', answer: 'Saudi Arabia, Iran, Iraq, UAE, Venezuela (any 3)'},
            {topic: 'Resources', emoji: '🌲🪵', question: 'Name three threats to forests', answer: 'Deforestation, fire, disease, climate change (any 3)'},
            {topic: 'Resources', emoji: '💧🚰', question: 'Name three major aquifers', answer: 'Ogallala, Great Artesian Basin, Guarani (any 3)'},
            {topic: 'Resources', emoji: '⚡💡', question: 'Name three fossil fuels', answer: 'Coal, oil, natural gas'},
            {topic: 'Resources', emoji: '🌾🌽', question: 'Name three causes of soil degradation', answer: 'Erosion, overgrazing, deforestation, chemicals (any 3)'},
            {topic: 'Resources', emoji: '☀️🔋', question: 'Name three renewable energy sources', answer: 'Solar, wind, hydro, geothermal, biomass (any 3)'},
            {topic: 'Resources', emoji: '🐟🦐', question: 'Name three major fishing grounds', answer: 'Grand Banks, North Sea, Bering Sea (any 3)'},
            {topic: 'Resources', emoji: '⛰️🪨', question: 'Name three precious metals', answer: 'Gold, silver, platinum, palladium (any 3)'},
            {topic: 'Resources', emoji: '🌬️💨', question: 'Name three countries leading in wind energy', answer: 'China, USA, Germany, India, Spain (any 3)'},
            {topic: 'Resources', emoji: '🔥🪵', question: 'Name three biomass sources', answer: 'Wood, crop waste, animal waste, algae (any 3)'}
        ]
    },
    8: { // Chapter 8: Biomes
        easy: [
            {topic: 'Biomes', emoji: '🌳🌲', question: 'Forests are biomes.', options: ['True', 'False'], correct: 0},
            {topic: 'Biomes', emoji: '🌾🦁', question: 'Savannas have grasslands.', options: ['True', 'False'], correct: 0},
            {topic: 'Biomes', emoji: '🏔️❄️', question: 'Tundra is very cold.', options: ['True', 'False'], correct: 0},
            {topic: 'Biomes', emoji: '🏜️🦎', question: 'Deserts get little rain.', options: ['True', 'False'], correct: 0},
            {topic: 'Biomes', emoji: '🌴🦜', question: 'Rainforests are biodiverse.', options: ['True', 'False'], correct: 0},
            {topic: 'Biomes', emoji: '🌊🐠', question: 'Marine is aquatic biome.', options: ['True', 'False'], correct: 0},
            {topic: 'Biomes', emoji: '🌿🌾', question: 'Grasslands have few trees.', options: ['True', 'False'], correct: 0},
            {topic: 'Biomes', emoji: '🦌🌲', question: 'Taiga has coniferous forests.', options: ['True', 'False'], correct: 0},
            {topic: 'Biomes', emoji: '💧🪷', question: 'Wetlands are transition zones.', options: ['True', 'False'], correct: 0},
            {topic: 'Biomes', emoji: '🍂🦫', question: 'Deciduous trees lose leaves.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biomes', emoji: '🌳🌲', question: 'What is largest land biome?', options: ['Taiga', 'Rainforest'], correct: 0},
            {topic: 'Biomes', emoji: '🌾🦁', question: 'Where are most savannas?', options: ['Africa', 'South America'], correct: 0},
            {topic: 'Biomes', emoji: '🏔️❄️', question: 'What characterizes tundra?', options: ['Permafrost', 'Snow'], correct: 0},
            {topic: 'Biomes', emoji: '🏜️🦎', question: 'What is coldest desert?', options: ['Antarctic', 'Gobi'], correct: 0},
            {topic: 'Biomes', emoji: '🌴🦜', question: 'What percent of species in rainforest?', options: ['50%', '30%'], correct: 0},
            {topic: 'Biomes', emoji: '🌊🐠', question: 'What is ocean zonation?', options: ['Depth layers', 'Temperature zones'], correct: 0},
            {topic: 'Biomes', emoji: '🌿🌾', question: 'What are prairies?', options: ['Grasslands', 'Wetlands'], correct: 0},
            {topic: 'Biomes', emoji: '🦌🌲', question: 'What is taiga also called?', options: ['Boreal forest', 'Pine forest'], correct: 0},
            {topic: 'Biomes', emoji: '💧🪷', question: 'What are mangroves?', options: ['Coastal wetland trees', 'Swamp plants'], correct: 0},
            {topic: 'Biomes', emoji: '🍂🦫', question: 'Where are temperate forests?', options: ['Mid-latitudes', 'Tropics'], correct: 0}
        ],
        hard: [
            {topic: 'Biomes', emoji: '🌳🌲', question: 'What percent of land is taiga?', options: ['17%', '10%', '25%'], correct: 0},
            {topic: 'Biomes', emoji: '🌾🦁', question: 'What is savanna rainfall range?', options: ['500-1500mm', '250-500mm', '1500-2500mm'], correct: 0},
            {topic: 'Biomes', emoji: '🏔️❄️', question: 'What is tundra growing season?', options: ['50-60 days', '90 days', '30 days'], correct: 0},
            {topic: 'Biomes', emoji: '🏜️🦎', question: 'What percent of land is desert?', options: ['33%', '20%', '45%'], correct: 0},
            {topic: 'Biomes', emoji: '🌴🦜', question: 'How many rainforest trees per hectare?', options: ['100-200', '50-100', '200-300'], correct: 0},
            {topic: 'Biomes', emoji: '🌊🐠', question: 'What depth is photic zone?', options: ['200m', '100m', '300m'], correct: 0},
            {topic: 'Biomes', emoji: '🌿🌾', question: 'What is steppe?', options: ['Eurasian grassland', 'African grassland', 'American grassland'], correct: 0},
            {topic: 'Biomes', emoji: '🦌🌲', question: 'What percent of forest is taiga?', options: ['29%', '20%', '35%'], correct: 0},
            {topic: 'Biomes', emoji: '💧🪷', question: 'What percent of species use wetlands?', options: ['40%', '25%', '50%'], correct: 0},
            {topic: 'Biomes', emoji: '🍂🦫', question: 'How many seasons in temperate forest?', options: ['4', '2', '3'], correct: 0}
        ],
        expert: [
            {topic: 'Biomes', emoji: '🌳🌲', question: 'What defines a biome?', options: ['Climate and organisms', 'Plant types', 'Animal types', 'Rainfall'], correct: 0},
            {topic: 'Biomes', emoji: '🌾🦁', question: 'What is fire\'s role in savanna?', options: ['Maintains grassland', 'Destroys habitat', 'Kills animals', 'Causes drought'], correct: 0},
            {topic: 'Biomes', emoji: '🏔️❄️', question: 'What is alpine tundra?', options: ['High mountain treeless area', 'Arctic region', 'Cold desert', 'Snow field'], correct: 0},
            {topic: 'Biomes', emoji: '🏜️🦎', question: 'What is desertification?', options: ['Land becoming desert', 'Desert expansion', 'Drought', 'Sandstorm'], correct: 0},
            {topic: 'Biomes', emoji: '🌴🦜', question: 'What is canopy in rainforest?', options: ['Upper tree layer', 'Forest floor', 'Tree type', 'Vine layer'], correct: 0},
            {topic: 'Biomes', emoji: '🌊🐠', question: 'What is benthic zone?', options: ['Ocean floor', 'Surface water', 'Mid-water', 'Coastal area'], correct: 0},
            {topic: 'Biomes', emoji: '🌿🌾', question: 'What threatens grasslands?', options: ['Agriculture conversion', 'Fire', 'Grazing', 'Drought'], correct: 0},
            {topic: 'Biomes', emoji: '🦌🌲', question: 'What is taiga climate?', options: ['Long cold winters, short summers', 'Cold year-round', 'Moderate', 'Dry'], correct: 0},
            {topic: 'Biomes', emoji: '💧🪷', question: 'What services do wetlands provide?', options: ['Water filtration, flood control', 'Food only', 'Recreation', 'Habitat only'], correct: 0},
            {topic: 'Biomes', emoji: '🍂🦫', question: 'What is succession in forests?', options: ['Ecological change over time', 'Tree growth', 'Seasonal change', 'Forest fire'], correct: 0}
        ],
        extreme: [
            {topic: 'Biomes', emoji: '🌳🌲', question: 'Name three major forest biomes', answer: 'Tropical rainforest, temperate forest, taiga/boreal'},
            {topic: 'Biomes', emoji: '🌾🦁', question: 'Name three animals in African savanna', answer: 'Lions, elephants, zebras, giraffes, wildebeest (any 3)'},
            {topic: 'Biomes', emoji: '🏔️❄️', question: 'Name three tundra adaptations', answer: 'Small size, insulation, hibernation, migration (any 3)'},
            {topic: 'Biomes', emoji: '🏜️🦎', question: 'Name three hot deserts', answer: 'Sahara, Arabian, Kalahari, Sonoran (any 3)'},
            {topic: 'Biomes', emoji: '🌴🦜', question: 'Name three rainforest layers', answer: 'Emergent, canopy, understory, forest floor (any 3)'},
            {topic: 'Biomes', emoji: '🌊🐠', question: 'Name three ocean zones', answer: 'Epipelagic, mesopelagic, bathypelagic, abyssal (any 3)'},
            {topic: 'Biomes', emoji: '🌿🌾', question: 'Name three grassland names worldwide', answer: 'Prairie, steppe, pampas, savanna, veld (any 3)'},
            {topic: 'Biomes', emoji: '🦌🌲', question: 'Name three taiga animals', answer: 'Moose, wolf, lynx, bear, owl (any 3)'},
            {topic: 'Biomes', emoji: '💧🪷', question: 'Name three types of wetlands', answer: 'Marshes, swamps, bogs, fens (any 3)'},
            {topic: 'Biomes', emoji: '🍂🦫', question: 'Name three deciduous trees', answer: 'Oak, maple, beech, ash, birch (any 3)'}
        ]
    },
    9: { // Chapter 9: Weather Patterns
        easy: [
            {topic: 'Weather', emoji: '☀️🌤️', question: 'Weather changes daily.', options: ['True', 'False'], correct: 0},
            {topic: 'Weather', emoji: '🌧️💧', question: 'Rain comes from clouds.', options: ['True', 'False'], correct: 0},
            {topic: 'Weather', emoji: '⚡🌩️', question: 'Lightning makes thunder.', options: ['True', 'False'], correct: 0},
            {topic: 'Weather', emoji: '🌨️❄️', question: 'Snow is frozen precipitation.', options: ['True', 'False'], correct: 0},
            {topic: 'Weather', emoji: '🌪️💨', question: 'Tornadoes are rotating storms.', options: ['True', 'False'], correct: 0},
            {topic: 'Weather', emoji: '🌀🌊', question: 'Hurricanes form over ocean.', options: ['True', 'False'], correct: 0},
            {topic: 'Weather', emoji: '🌡️☀️', question: 'Temperature measures heat.', options: ['True', 'False'], correct: 0},
            {topic: 'Weather', emoji: '💨🍃', question: 'Wind is moving air.', options: ['True', 'False'], correct: 0},
            {topic: 'Weather', emoji: '🌫️💭', question: 'Fog is low cloud.', options: ['True', 'False'], correct: 0},
            {topic: 'Weather', emoji: '🌈☔', question: 'Rainbows need sun and rain.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Weather', emoji: '☀️🌤️', question: 'What causes weather?', options: ['Atmospheric conditions', 'Earth rotation'], correct: 0},
            {topic: 'Weather', emoji: '🌧️💧', question: 'What is precipitation?', options: ['Water falling from sky', 'Cloud formation'], correct: 0},
            {topic: 'Weather', emoji: '⚡🌩️', question: 'What causes lightning?', options: ['Electrical discharge', 'Thunder'], correct: 0},
            {topic: 'Weather', emoji: '🌨️❄️', question: 'At what temp does snow form?', options: ['Below 0°C', 'Below 5°C'], correct: 0},
            {topic: 'Weather', emoji: '🌪️💨', question: 'Where do tornadoes form most?', options: ['Tornado Alley USA', 'Everywhere'], correct: 0},
            {topic: 'Weather', emoji: '🌀🌊', question: 'What is a hurricane called in Asia?', options: ['Typhoon', 'Cyclone'], correct: 0},
            {topic: 'Weather', emoji: '🌡️☀️', question: 'What scale measures temp in USA?', options: ['Fahrenheit', 'Celsius'], correct: 0},
            {topic: 'Weather', emoji: '💨🍃', question: 'What causes wind?', options: ['Pressure differences', 'Earth rotation'], correct: 0},
            {topic: 'Weather', emoji: '🌫️💭', question: 'When does fog form?', options: ['Air cools to dew point', 'Rain evaporates'], correct: 0},
            {topic: 'Weather', emoji: '🌈☔', question: 'What causes rainbow colors?', options: ['Light refraction', 'Cloud colors'], correct: 0}
        ],
        hard: [
            {topic: 'Weather', emoji: '☀️🌤️', question: 'What is weather vs climate?', options: ['Short-term vs long-term', 'Same thing', 'Local vs global'], correct: 0},
            {topic: 'Weather', emoji: '🌧️💧', question: 'What is wettest place on Earth?', options: ['Mawsynram India', 'Amazon', 'Hawaii'], correct: 0},
            {topic: 'Weather', emoji: '⚡🌩️', question: 'How hot is lightning?', options: ['30,000°C', '10,000°C', '50,000°C'], correct: 0},
            {topic: 'Weather', emoji: '🌨️❄️', question: 'What is a blizzard?', options: ['Heavy snow with wind', 'Light snow', 'Ice storm'], correct: 0},
            {topic: 'Weather', emoji: '🌪️💨', question: 'What is tornado wind speed?', options: ['Up to 480 km/h', '300 km/h', '600 km/h'], correct: 0},
            {topic: 'Weather', emoji: '🌀🌊', question: 'What is hurricane category based on?', options: ['Wind speed', 'Size', 'Rainfall'], correct: 0},
            {topic: 'Weather', emoji: '🌡️☀️', question: 'What is hottest temp recorded?', options: ['56.7°C', '50°C', '60°C'], correct: 0},
            {topic: 'Weather', emoji: '💨🍃', question: 'What is the Beaufort scale?', options: ['Wind speed scale', 'Temperature scale', 'Pressure scale'], correct: 0},
            {topic: 'Weather', emoji: '🌫️💭', question: 'What is smog?', options: ['Smoke and fog pollution', 'Natural fog', 'Cloud type'], correct: 0},
            {topic: 'Weather', emoji: '🌈☔', question: 'Can you see double rainbow?', options: ['Yes with two reflections', 'No', 'Only in tropics'], correct: 0}
        ],
        expert: [
            {topic: 'Weather', emoji: '☀️🌤️', question: 'What is a weather front?', options: ['Boundary between air masses', 'Storm system', 'Cloud type', 'Wind pattern'], correct: 0},
            {topic: 'Weather', emoji: '🌧️💧', question: 'What is orographic precipitation?', options: ['Mountain-induced rainfall', 'Ocean rain', 'Storm rain', 'Light rain'], correct: 0},
            {topic: 'Weather', emoji: '⚡🌩️', question: 'What is thunder?', options: ['Sound from lightning', 'Lightning sound', 'Cloud noise', 'Wind sound'], correct: 0},
            {topic: 'Weather', emoji: '🌨️❄️', question: 'What is graupel?', options: ['Soft hail', 'Sleet', 'Snow', 'Ice'], correct: 0},
            {topic: 'Weather', emoji: '🌪️💨', question: 'What is Enhanced Fujita scale?', options: ['Tornado intensity rating', 'Wind scale', 'Damage scale', 'Speed scale'], correct: 0},
            {topic: 'Weather', emoji: '🌀🌊', question: 'What is hurricane eye?', options: ['Calm center', 'Storm wall', 'Wind maximum', 'Cloud ring'], correct: 0},
            {topic: 'Weather', emoji: '🌡️☀️', question: 'What is heat index?', options: ['Temperature plus humidity feel', 'Actual temperature', 'Maximum temp', 'Average temp'], correct: 0},
            {topic: 'Weather', emoji: '💨🍃', question: 'What are tropical trade winds?', options: ['Tropical easterly winds', 'Western winds', 'Storm winds', 'Sea breeze'], correct: 0},
            {topic: 'Weather', emoji: '🌫️💭', question: 'What is advection fog?', options: ['Warm air over cold surface', 'Radiation fog', 'Valley fog', 'Sea fog'], correct: 0},
            {topic: 'Weather', emoji: '🌈☔', question: 'What is a moonbow?', options: ['Rainbow at night', 'Moon ring', 'Lunar halo', 'Night clouds'], correct: 0}
        ],
        extreme: [
            {topic: 'Weather', emoji: '☀️🌤️', question: 'Name three types of weather fronts', answer: 'Cold front, warm front, stationary, occluded (any 3)'},
            {topic: 'Weather', emoji: '🌧️💧', question: 'Name three types of precipitation', answer: 'Rain, snow, sleet, hail, freezing rain (any 3)'},
            {topic: 'Weather', emoji: '⚡🌩️', question: 'Name three types of lightning', answer: 'Cloud-to-ground, cloud-to-cloud, intra-cloud (any 3)'},
            {topic: 'Weather', emoji: '🌨️❄️', question: 'Name three types of snow crystals', answer: 'Plates, columns, dendrites, needles (any 3)'},
            {topic: 'Weather', emoji: '🌪️💨', question: 'Name three tornado safety rules', answer: 'Go to basement, interior room, avoid windows (any 3)'},
            {topic: 'Weather', emoji: '🌀🌊', question: 'Name three hurricane categories', answer: 'Category 1, 2, 3, 4, 5 (any 3)'},
            {topic: 'Weather', emoji: '🌡️☀️', question: 'Name three temperature scales', answer: 'Celsius, Fahrenheit, Kelvin'},
            {topic: 'Weather', emoji: '💨🍃', question: 'Name three global wind patterns', answer: 'Trade winds, westerlies, polar easterlies'},
            {topic: 'Weather', emoji: '🌫️💭', question: 'Name three types of fog', answer: 'Radiation, advection, upslope, steam (any 3)'},
            {topic: 'Weather', emoji: '🌈☔', question: 'Name three optical phenomena', answer: 'Rainbow, halo, corona, glory (any 3)'}
        ]
    },
    10: { // Chapter 10: Deserts and Arid Lands
        easy: [
            {topic: 'Deserts', emoji: '🏜️🌵', question: 'Desert regions receive little rainfall.', options: ['True', 'False'], correct: 0},
            {topic: 'Deserts', emoji: '🐪🌴', question: 'Camels live in deserts.', options: ['True', 'False'], correct: 0},
            {topic: 'Deserts', emoji: '☀️🌡️', question: 'Deserts are hot during day.', options: ['True', 'False'], correct: 0},
            {topic: 'Deserts', emoji: '🌵🪨', question: 'Cacti store water.', options: ['True', 'False'], correct: 0},
            {topic: 'Deserts', emoji: '🦎🐍', question: 'Reptiles live in deserts.', options: ['True', 'False'], correct: 0},
            {topic: 'Deserts', emoji: '💨🏜️', question: 'Wind shapes desert landscapes.', options: ['True', 'False'], correct: 0},
            {topic: 'Deserts', emoji: '🌙❄️', question: 'Deserts get cold at night.', options: ['True', 'False'], correct: 0},
            {topic: 'Deserts', emoji: '🏜️💧', question: 'Oases have water.', options: ['True', 'False'], correct: 0},
            {topic: 'Deserts', emoji: '🏺🏜️', question: 'Ancient civilizations had deserts.', options: ['True', 'False'], correct: 0},
            {topic: 'Deserts', emoji: '🌵🌸', question: 'Desert plants have adaptations.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Deserts', emoji: '🏜️🌵', question: 'What is largest hot desert?', options: ['Sahara', 'Arabian'], correct: 0},
            {topic: 'Deserts', emoji: '🐪🌴', question: 'How long can camels go without water?', options: ['7 days', '3 days'], correct: 0},
            {topic: 'Deserts', emoji: '☀️🌡️', question: 'What is hottest desert?', options: ['Lut Desert Iran', 'Sahara'], correct: 0},
            {topic: 'Deserts', emoji: '🌵🪨', question: 'What is saguaro?', options: ['Giant cactus', 'Desert animal'], correct: 0},
            {topic: 'Deserts', emoji: '🦎🐍', question: 'How do desert animals stay cool?', options: ['Nocturnal, burrow', 'Panting'], correct: 0},
            {topic: 'Deserts', emoji: '💨🏜️', question: 'What are sand dunes?', options: ['Wind-formed sand hills', 'Rock formations'], correct: 0},
            {topic: 'Deserts', emoji: '🌙❄️', question: 'Why do deserts cool at night?', options: ['No cloud insulation', 'Wind'], correct: 0},
            {topic: 'Deserts', emoji: '🏜️💧', question: 'What is an oasis?', options: ['Fertile area with water', 'Desert town'], correct: 0},
            {topic: 'Deserts', emoji: '🏺🏜️', question: 'Where was ancient Egypt?', options: ['Nile in Sahara', 'Arabian desert'], correct: 0},
            {topic: 'Deserts', emoji: '🌵🌸', question: 'What is desert bloom?', options: ['Flowers after rain', 'Cactus flowers'], correct: 0}
        ],
        hard: [
            {topic: 'Deserts', emoji: '🏜️🌵', question: 'How big is Sahara Desert?', options: ['9 million km²', '7 million km²', '11 million km²'], correct: 0},
            {topic: 'Deserts', emoji: '🐪🌴', question: 'How much weight can camels lose?', options: ['25%', '15%', '35%'], correct: 0},
            {topic: 'Deserts', emoji: '☀️🌡️', question: 'What was hottest ground temp recorded?', options: ['70.7°C', '60°C', '80°C'], correct: 0},
            {topic: 'Deserts', emoji: '🌵🪨', question: 'How tall can saguaro grow?', options: ['12m', '8m', '15m'], correct: 0},
            {topic: 'Deserts', emoji: '🦎🐍', question: 'What is largest desert animal?', options: ['Addax antelope', 'Camel', 'Gazelle'], correct: 0},
            {topic: 'Deserts', emoji: '💨🏜️', question: 'What is largest sand desert?', options: ['Rub\' al Khali', 'Sahara', 'Gobi'], correct: 0},
            {topic: 'Deserts', emoji: '🌙❄️', question: 'What desert recorded -50°C?', options: ['Gobi', 'Antarctica', 'Arctic'], correct: 0},
            {topic: 'Deserts', emoji: '🏜️💧', question: 'How many oases in Sahara?', options: ['90+', '50', '150'], correct: 0},
            {topic: 'Deserts', emoji: '🏺🏜️', question: 'What civilization was in Atacama?', options: ['Inca', 'Maya', 'Aztec'], correct: 0},
            {topic: 'Deserts', emoji: '🌵🌸', question: 'How often does desert bloom occur?', options: ['After rare rains', 'Yearly', 'Monthly'], correct: 0}
        ],
        expert: [
            {topic: 'Deserts', emoji: '🏜️🌵', question: 'What causes deserts to form?', options: ['Rain shadow, latitude, currents', 'Heat only', 'No water', 'Soil type'], correct: 0},
            {topic: 'Deserts', emoji: '🐪🌴', question: 'What is camel\'s hump for?', options: ['Fat storage not water', 'Water storage', 'Balance', 'Heat regulation'], correct: 0},
            {topic: 'Deserts', emoji: '☀️🌡️', question: 'What is albedo effect?', options: ['Surface reflectivity', 'Heat absorption', 'Wind pattern', 'Evaporation'], correct: 0},
            {topic: 'Deserts', emoji: '🌵🪨', question: 'What is CAM photosynthesis?', options: ['Water-saving plant process', 'Cactus type', 'Desert adaptation', 'Root system'], correct: 0},
            {topic: 'Deserts', emoji: '🦎🐍', question: 'What is estivation?', options: ['Summer dormancy', 'Hibernation', 'Migration', 'Hunting'], correct: 0},
            {topic: 'Deserts', emoji: '💨🏜️', question: 'What is aeolian process?', options: ['Wind erosion and deposition', 'Sand movement', 'Dune formation', 'Desert creation'], correct: 0},
            {topic: 'Deserts', emoji: '🌙❄️', question: 'What is diurnal temperature range?', options: ['Day-night temperature difference', 'Seasonal change', 'Annual variation', 'Heat measure'], correct: 0},
            {topic: 'Deserts', emoji: '🏜️💧', question: 'What creates an oasis?', options: ['Underground water reaching surface', 'Rain collection', 'River', 'Lake'], correct: 0},
            {topic: 'Deserts', emoji: '🏺🏜️', question: 'What causes desertification?', options: ['Land becoming desert', 'Desert expansion', 'Climate change', 'Overgrazing'], correct: 0},
            {topic: 'Deserts', emoji: '🌵🌸', question: 'What triggers desert seeds?', options: ['Specific rainfall amount', 'Any water', 'Temperature', 'Season'], correct: 0}
        ],
        extreme: [
            {topic: 'Deserts', emoji: '🏜️🌵', question: 'Name three major hot deserts', answer: 'Sahara, Arabian, Kalahari, Mojave, Sonoran (any 3)'},
            {topic: 'Deserts', emoji: '🐪🌴', question: 'Name three desert animals', answer: 'Camel, scorpion, rattlesnake, roadrunner, fennec fox (any 3)'},
            {topic: 'Deserts', emoji: '☀️🌡️', question: 'Name three coldest deserts', answer: 'Antarctic, Arctic, Gobi, Great Basin (any 3)'},
            {topic: 'Deserts', emoji: '🌵🪨', question: 'Name three desert plants', answer: 'Cactus, Joshua tree, creosote bush, mesquite (any 3)'},
            {topic: 'Deserts', emoji: '🦎🐍', question: 'Name three desert reptiles', answer: 'Rattlesnake, horned lizard, desert tortoise, Gila monster (any 3)'},
            {topic: 'Deserts', emoji: '💨🏜️', question: 'Name three types of sand dunes', answer: 'Barchan, longitudinal, star, parabolic (any 3)'},
            {topic: 'Deserts', emoji: '🌙❄️', question: 'Name three desert climate features', answer: 'Low rainfall, high evaporation, temperature extremes'},
            {topic: 'Deserts', emoji: '🏜️💧', question: 'Name three famous oases', answer: 'Siwa, Bahariya, Kharga, Turpan (any 3)'},
            {topic: 'Deserts', emoji: '🏺🏜️', question: 'Name three causes of desertification', answer: 'Overgrazing, deforestation, poor irrigation, climate change (any 3)'},
            {topic: 'Deserts', emoji: '🌵🌸', question: 'Name three desert adaptations', answer: 'Water storage, nocturnal activity, small leaves, deep roots (any 3)'}
        ]
    },
    11: { // Chapter 11: Islands and Archipelagos
        easy: [
            {topic: 'Islands', emoji: '🏝️🌴', question: 'Islands are completely encircled by water.', options: ['True', 'False'], correct: 0},
            {topic: 'Islands', emoji: '🗾🌏', question: 'Japan is an island nation.', options: ['True', 'False'], correct: 0},
            {topic: 'Archipelagos', emoji: '🏝️🏝️', question: 'Archipelagos are island groups.', options: ['True', 'False'], correct: 0},
            {topic: 'Islands', emoji: '🌋🏝️', question: 'Some islands are volcanic.', options: ['True', 'False'], correct: 0},
            {topic: 'Islands', emoji: '🐠🪸', question: 'Coral reefs form islands.', options: ['True', 'False'], correct: 0},
            {topic: 'Archipelagos', emoji: '🇵🇭🏝️', question: 'Philippines has many islands.', options: ['True', 'False'], correct: 0},
            {topic: 'Islands', emoji: '🏝️❄️', question: 'Greenland is largest island.', options: ['True', 'False'], correct: 0},
            {topic: 'Islands', emoji: '🌊🏝️', question: 'Islands can be man-made.', options: ['True', 'False'], correct: 0},
            {topic: 'Archipelagos', emoji: '🏝️🗺️', question: 'Indonesia is an archipelago.', options: ['True', 'False'], correct: 0},
            {topic: 'Islands', emoji: '🏝️🌴', question: 'Islands have unique ecosystems.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Islands', emoji: '🏝️🌴', question: 'What is second largest island?', options: ['New Guinea', 'Borneo'], correct: 0},
            {topic: 'Islands', emoji: '🗾🌏', question: 'How many main islands in Japan?', options: ['4', '5'], correct: 0},
            {topic: 'Archipelagos', emoji: '🏝️🏝️', question: 'What is largest archipelago?', options: ['Indonesia', 'Philippines'], correct: 0},
            {topic: 'Islands', emoji: '🌋🏝️', question: 'What created Hawaiian Islands?', options: ['Volcanic hotspot', 'Coral'], correct: 0},
            {topic: 'Islands', emoji: '🐠🪸', question: 'What are atolls?', options: ['Ring-shaped coral island', 'Volcanic island'], correct: 0},
            {topic: 'Archipelagos', emoji: '🇵🇭🏝️', question: 'How many islands in Philippines?', options: ['7,600+', '5,000'], correct: 0},
            {topic: 'Islands', emoji: '🏝️❄️', question: 'Where is Greenland located?', options: ['North America', 'Europe'], correct: 0},
            {topic: 'Islands', emoji: '🌊🏝️', question: 'What are Palm Islands?', options: ['Artificial islands Dubai', 'Natural islands'], correct: 0},
            {topic: 'Archipelagos', emoji: '🏝️🗺️', question: 'How many islands in Indonesia?', options: ['17,000+', '10,000'], correct: 0},
            {topic: 'Islands', emoji: '🏝️🌴', question: 'What is endemic species?', options: ['Found only in one place', 'Common everywhere'], correct: 0}
        ],
        hard: [
            {topic: 'Islands', emoji: '🏝️🌴', question: 'How big is Greenland?', options: ['2.2 million km²', '1.5 million km²', '3 million km²'], correct: 0},
            {topic: 'Islands', emoji: '🗾🌏', question: 'What is Japan\'s largest island?', options: ['Honshu', 'Hokkaido', 'Kyushu'], correct: 0},
            {topic: 'Archipelagos', emoji: '🏝️🏝️', question: 'How many islands in Caribbean?', options: ['700+', '500', '1000'], correct: 0},
            {topic: 'Islands', emoji: '🌋🏝️', question: 'What is youngest Hawaiian island?', options: ['Hawaii (Big Island)', 'Maui', 'Oahu'], correct: 0},
            {topic: 'Islands', emoji: '🐠🪸', question: 'What is largest atoll?', options: ['Kwajalein', 'Maldives', 'Great Chagos'], correct: 0},
            {topic: 'Archipelagos', emoji: '🇵🇭🏝️', question: 'What is largest Philippine island?', options: ['Luzon', 'Mindanao', 'Palawan'], correct: 0},
            {topic: 'Islands', emoji: '🏝️❄️', question: 'What percent of Greenland is ice?', options: ['80%', '60%', '90%'], correct: 0},
            {topic: 'Islands', emoji: '🌊🏝️', question: 'When were Palm Islands built?', options: ['2001-2008', '1990-2000', '2010-2015'], correct: 0},
            {topic: 'Archipelagos', emoji: '🏝️🗺️', question: 'What is Java\'s population?', options: ['145 million', '100 million', '200 million'], correct: 0},
            {topic: 'Islands', emoji: '🏝️🌴', question: 'What causes island gigantism?', options: ['Lack of predators', 'Climate', 'Food'], correct: 0}
        ],
        expert: [
            {topic: 'Islands', emoji: '🏝️🌴', question: 'What is island biogeography theory?', options: ['Species richness on islands', 'Island formation', 'Ocean currents', 'Climate'], correct: 0},
            {topic: 'Islands', emoji: '🗾🌏', question: 'What tectonic feature is Japan on?', options: ['Pacific Ring of Fire', 'Mid-ocean ridge', 'Rift valley', 'Transform fault'], correct: 0},
            {topic: 'Archipelagos', emoji: '🏝️🏝️', question: 'What is an island arc?', options: ['Volcanic chain from subduction', 'Coral islands', 'River delta', 'Coastal islands'], correct: 0},
            {topic: 'Islands', emoji: '🌋🏝️', question: 'What is a shield volcano?', options: ['Broad gentle-sloped volcano', 'Steep volcano', 'Explosive volcano', 'Extinct volcano'], correct: 0},
            {topic: 'Islands', emoji: '🐠🪸', question: 'How do atolls form?', options: ['Volcano subsides, reef remains', 'Coral grows', 'Waves build up', 'Sand accumulates'], correct: 0},
            {topic: 'Archipelagos', emoji: '🇵🇭🏝️', question: 'What is the Philippines\' biodiversity status?', options: ['Megadiverse country', 'Low diversity', 'Moderate diversity', 'Desert'], correct: 0},
            {topic: 'Islands', emoji: '🏝️❄️', question: 'Why is Greenland not a continent?', options: ['On continental shelf', 'Too small', 'Ice-covered', 'Definition'], correct: 0},
            {topic: 'Islands', emoji: '🌊🏝️', question: 'What threat do artificial islands face?', options: ['Sea level rise, subsidence', 'Earthquakes', 'Storms only', 'Pollution'], correct: 0},
            {topic: 'Archipelagos', emoji: '🏝️🗺️', question: 'What is Wallace Line?', options: ['Asian-Australian fauna boundary', 'Island chain', 'Ocean trench', 'Climate zone'], correct: 0},
            {topic: 'Islands', emoji: '🏝️🌴', question: 'What is island dwarfism?', options: ['Species becoming smaller', 'Small islands', 'Low biodiversity', 'Endemic species'], correct: 0}
        ],
        extreme: [
            {topic: 'Islands', emoji: '🏝️🌴', question: 'Name the three largest islands', answer: 'Greenland, New Guinea, Borneo'},
            {topic: 'Islands', emoji: '🗾🌏', question: 'Name four main Japanese islands', answer: 'Honshu, Hokkaido, Kyushu, Shikoku'},
            {topic: 'Archipelagos', emoji: '🏝️🏝️', question: 'Name three island nations', answer: 'Indonesia, Philippines, Japan, UK, New Zealand (any 3)'},
            {topic: 'Islands', emoji: '🌋🏝️', question: 'Name three volcanic islands', answer: 'Hawaii, Iceland, Santorini, Java (any 3)'},
            {topic: 'Islands', emoji: '🐠🪸', question: 'Name three coral island nations', answer: 'Maldives, Tuvalu, Marshall Islands (any 3)'},
            {topic: 'Archipelagos', emoji: '🇵🇭🏝️', question: 'Name three large Philippine islands', answer: 'Luzon, Mindanao, Palawan, Negros (any 3)'},
            {topic: 'Islands', emoji: '🏝️❄️', question: 'Name three Arctic islands', answer: 'Greenland, Svalbard, Ellesmere, Iceland (any 3)'},
            {topic: 'Islands', emoji: '🌊🏝️', question: 'Name three artificial islands', answer: 'Palm Jumeirah, Kansai Airport, Flevopolder (any 3)'},
            {topic: 'Archipelagos', emoji: '🏝️🗺️', question: 'Name three Southeast Asian archipelagos', answer: 'Indonesia, Philippines, Malaysia'},
            {topic: 'Islands', emoji: '🏝️🌴', question: 'Name three island endemic species examples', answer: 'Galapagos tortoise, lemurs (Madagascar), kiwi (New Zealand) (any 3)'}
        ]
    }
,
    12: { // Chapter 12: Lakes and Water Bodies
        easy: [
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies difficult question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Lakes and Water Bodies expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Lakes', emoji: '🏞️💧', question: 'Name three lakes and water bodies items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    13: { // Chapter 13: Forests and Woodlands
        easy: [
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands difficult question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Forests and Woodlands expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Forests', emoji: '🌲🌳', question: 'Name three forests and woodlands items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    14: { // Chapter 14: Agriculture and Farming
        easy: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming difficult question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Agriculture and Farming expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three agriculture and farming items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    15: { // Chapter 15: Urban Geography
        easy: [
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography difficult question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Urban Geography expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Urban', emoji: '🏙️🌆', question: 'Name three urban geography items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    16: { // Chapter 16: Coastal Geography
        easy: [
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography difficult question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Coastal Geography expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Coastal', emoji: '🏖️🌊', question: 'Name three coastal geography items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    17: { // Chapter 17: Volcanoes and Geothermal
        easy: [
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal difficult question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Volcanoes and Geothermal expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Volcanoes', emoji: '🌋🔥', question: 'Name three volcanoes and geothermal items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    18: { // Chapter 18: Earthquakes and Tectonics
        easy: [
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics difficult question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Earthquakes and Tectonics expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Earthquakes', emoji: '🌍💥', question: 'Name three earthquakes and tectonics items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    19: { // Chapter 19: Natural Disasters
        easy: [
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters difficult question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Natural Disasters expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Natural', emoji: '🌪️⚡', question: 'Name three natural disasters items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
    20: { // Chapter 20: Environment and Conservation
        easy: [
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation difficult question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Environment and Conservation expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Environment', emoji: '🌱♻️', question: 'Name three environment and conservation items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    }
    // Add more chapters: 2, 3, 4... unlimited!
};

