/**
 * WPCode Snippet #7: Environment Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer  
 * Priority: 16
 *
 * COPY ALL CODE BELOW
 */

const environmentQuestions = {
    1: { // Chapter 1: Environmental Basics
        easy: [
            {topic: 'Ecology', emoji: '🌍🌱', question: 'Recycling helps the environment.', options: ['True', 'False'], correct: 0},
            {topic: 'Wildlife', emoji: '🦁🐘', question: 'Many animals are endangered.', options: ['True', 'False'], correct: 0},
            {topic: 'Pollution', emoji: '🏭💨', question: 'Air pollution harms health.', options: ['True', 'False'], correct: 0},
            {topic: 'Recycling', emoji: '♻️🗑️', question: 'Plastic can be recycled.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecology', emoji: '🌳🌲', question: 'Trees produce oxygen.', options: ['True', 'False'], correct: 0},
            {topic: 'Wildlife', emoji: '🐼🦋', question: 'Bees help pollinate flowers.', options: ['True', 'False'], correct: 0},
            {topic: 'Pollution', emoji: '🌊🗑️', question: 'Ocean pollution affects marine life.', options: ['True', 'False'], correct: 0},
            {topic: 'Recycling', emoji: '♻️📄', question: 'Paper comes from trees.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecology', emoji: '🌍💚', question: 'Climate change is real.', options: ['True', 'False'], correct: 0},
            {topic: 'Wildlife', emoji: '🦅🌳', question: 'Forests are home to many animals.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ecology', emoji: '🌍🌱', question: 'What is the greenhouse effect?', options: ['Trapping heat', 'Cooling Earth'], correct: 0},
            {topic: 'Wildlife', emoji: '🦁🐘', question: 'What does endangered mean?', options: ['At risk of extinction', 'Common species'], correct: 0},
            {topic: 'Pollution', emoji: '🏭💨', question: 'What causes air pollution?', options: ['Factories and cars', 'Trees'], correct: 0},
            {topic: 'Recycling', emoji: '♻️🗑️', question: 'What materials can be recycled?', options: ['Paper, glass, plastic', 'Only paper'], correct: 0},
            {topic: 'Ecology', emoji: '🌳🌲', question: 'What is deforestation?', options: ['Cutting down forests', 'Planting trees'], correct: 0},
            {topic: 'Wildlife', emoji: '🐼🦋', question: 'Why are bees important?', options: ['Pollination', 'Making honey only'], correct: 0},
            {topic: 'Pollution', emoji: '🌊🗑️', question: 'What is ocean acidification?', options: ['Ocean becoming acidic', 'Ocean cooling'], correct: 0},
            {topic: 'Recycling', emoji: '♻️📄', question: 'What does reduce, reuse, recycle mean?', options: ['3 Rs of environment', '3 types of trash'], correct: 0},
            {topic: 'Ecology', emoji: '🌍💚', question: 'What is renewable energy?', options: ['Solar, wind power', 'Coal, oil'], correct: 0},
            {topic: 'Wildlife', emoji: '🦅🌳', question: 'What is biodiversity?', options: ['Variety of life', 'One species'], correct: 0}
        ],
        hard: [
            {topic: 'Ecology', emoji: '🌍🌱', question: 'What is the main greenhouse gas?', options: ['Carbon dioxide', 'Oxygen', 'Nitrogen'], correct: 0},
            {topic: 'Wildlife', emoji: '🦁🐘', question: 'How many species go extinct daily?', options: ['Dozens', 'One', 'Hundreds'], correct: 0},
            {topic: 'Pollution', emoji: '🏭💨', question: 'What is the ozone layer?', options: ['Protects from UV', 'Causes pollution', 'Creates oxygen'], correct: 0},
            {topic: 'Recycling', emoji: '♻️🗑️', question: 'How long does plastic take to decompose?', options: ['Hundreds of years', '1 year', '10 years'], correct: 0},
            {topic: 'Ecology', emoji: '🌳🌲', question: 'What percentage of oxygen comes from oceans?', options: ['50-80%', '10-20%', '90-100%'], correct: 0},
            {topic: 'Wildlife', emoji: '🐼🦋', question: 'What is a keystone species?', options: ['Critical to ecosystem', 'Most common', 'Largest animal'], correct: 0},
            {topic: 'Pollution', emoji: '🌊🗑️', question: 'What is the Great Pacific Garbage Patch?', options: ['Ocean plastic accumulation', 'Island', 'Reef'], correct: 0},
            {topic: 'Recycling', emoji: '♻️📄', question: 'What is composting?', options: ['Organic waste decomposition', 'Burning trash', 'Plastic recycling'], correct: 0},
            {topic: 'Ecology', emoji: '🌍💚', question: 'What is the Paris Agreement?', options: ['Climate treaty', 'Trade deal', 'Space program'], correct: 0},
            {topic: 'Wildlife', emoji: '🦅🌳', question: 'What is habitat loss?', options: ['Destruction of homes', 'Animal migration', 'Population growth'], correct: 0}
        ],
        expert: [
            {topic: 'Ecology', emoji: '🌍🌱', question: 'By how much has global temperature risen since 1880?', options: ['1-1.5°C', '0.1°C', '5°C', '10°C'], correct: 0},
            {topic: 'Wildlife', emoji: '🦁🐘', question: 'What percentage of species are endangered?', options: ['25-30%', '5%', '50%', '75%'], correct: 0},
            {topic: 'Pollution', emoji: '🏭💨', question: 'What is PM2.5?', options: ['Fine particulate matter', 'Plastic type', 'Gas', 'Metal'], correct: 0},
            {topic: 'Recycling', emoji: '♻️🗑️', question: 'What percentage of plastic is recycled globally?', options: ['9%', '50%', '75%', '1%'], correct: 0},
            {topic: 'Ecology', emoji: '🌳🌲', question: 'How many trees are cut down annually?', options: ['15 billion', '1 billion', '100 million', '50 billion'], correct: 0},
            {topic: 'Wildlife', emoji: '🐼🦋', question: 'What is trophic cascade?', options: ['Ecosystem chain reaction', 'Food source', 'Migration pattern', 'Reproduction cycle'], correct: 0},
            {topic: 'Pollution', emoji: '🌊🗑️', question: 'How many tons of plastic enter oceans yearly?', options: ['8-12 million', '1 million', '100,000', '50 million'], correct: 0},
            {topic: 'Recycling', emoji: '♻️📄', question: 'What is circular economy?', options: ['Reuse resources', 'Linear production', 'Single use', 'Export waste'], correct: 0},
            {topic: 'Ecology', emoji: '🌍💚', question: 'What is carbon footprint?', options: ['CO2 emissions', 'Tree count', 'Water usage', 'Land area'], correct: 0},
            {topic: 'Wildlife', emoji: '🦅🌳', question: 'What is rewilding?', options: ['Restoring ecosystems', 'Hunting', 'Farming', 'Urbanization'], correct: 0}
        ],
        extreme: [
            {topic: 'Ecology', emoji: '🌍🌱', question: 'Name three greenhouse gases', answer: 'CO2, Methane, Nitrous oxide, Water vapor (any 3)'},
            {topic: 'Wildlife', emoji: '🦁🐘', question: 'Name three causes of species extinction', answer: 'Habitat loss, Climate change, Pollution, Hunting (any 3)'},
            {topic: 'Pollution', emoji: '🏭💨', question: 'Name three types of pollution', answer: 'Air, Water, Soil, Noise, Light (any 3)'},
            {topic: 'Recycling', emoji: '♻️🗑️', question: 'List the 3 Rs and explain each', answer: 'Reduce (use less), Reuse (use again), Recycle (make new)'},
            {topic: 'Ecology', emoji: '🌳🌲', question: 'Name three renewable energy sources', answer: 'Solar, Wind, Hydro, Geothermal, Biomass (any 3)'},
            {topic: 'Wildlife', emoji: '🐼🦋', question: 'Name three endangered animals', answer: 'Tigers, Pandas, Elephants, Rhinos, Gorillas (any 3)'},
            {topic: 'Pollution', emoji: '🌊🗑️', question: 'Name three sources of ocean pollution', answer: 'Plastic waste, Oil spills, Chemical runoff, Sewage (any 3)'},
            {topic: 'Recycling', emoji: '♻️📄', question: 'How long do these take to decompose: plastic bottle, paper, glass?', answer: 'Plastic=450 years, Paper=2-6 months, Glass=1 million years'},
            {topic: 'Ecology', emoji: '🌍💚', question: 'Name the Paris Agreement main goal', answer: 'Limit global warming to 1.5-2°C above pre-industrial levels'},
            {topic: 'Wildlife', emoji: '🦅🌳', question: 'Name three benefits of forests', answer: 'Oxygen production, Carbon storage, Biodiversity, Water cycle (any 3)'}
        ]
    }
    // Add more chapters: 2, 3, 4... unlimited!
};
