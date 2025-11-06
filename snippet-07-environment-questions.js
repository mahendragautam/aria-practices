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
    },
    2: { // Chapter 2: Climate Change
        easy: [
            {topic: 'Climate', emoji: '🌡️🌍', question: 'Climate change affects weather patterns.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '☀️🌡️', question: 'Global warming makes Earth hotter.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🧊❄️', question: 'Polar ice caps are melting.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🌊🏝️', question: 'Sea levels are rising.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🌪️⛈️', question: 'Extreme weather is increasing.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🏔️🌨️', question: 'Glaciers are shrinking.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🔥🌲', question: 'Wildfires are becoming more common.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🌾☀️', question: 'Droughts affect agriculture.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '💨🏭', question: 'Human activities cause climate change.', options: ['True', 'False'], correct: 0},
            {topic: 'Climate', emoji: '🌍💚', question: 'We can slow climate change.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Climate', emoji: '🌡️🌍', question: 'What is climate change?', options: ['Long-term weather shifts', 'Daily weather'], correct: 0},
            {topic: 'Climate', emoji: '☀️🌡️', question: 'What causes global warming?', options: ['Greenhouse gases', 'Natural cycles only'], correct: 0},
            {topic: 'Climate', emoji: '🧊❄️', question: 'What happens when ice caps melt?', options: ['Sea level rises', 'Gets colder'], correct: 0},
            {topic: 'Climate', emoji: '🌊🏝️', question: 'How much has sea level risen?', options: ['8-9 inches since 1880', '1 inch'], correct: 0},
            {topic: 'Climate', emoji: '🌪️⛈️', question: 'What is extreme weather?', options: ['Severe storms, floods', 'Normal rain'], correct: 0},
            {topic: 'Climate', emoji: '🏔️🌨️', question: 'Why do glaciers matter?', options: ['Store freshwater', 'Only for tourism'], correct: 0},
            {topic: 'Climate', emoji: '🔥🌲', question: 'How does climate affect wildfires?', options: ['Hotter, drier conditions', 'No effect'], correct: 0},
            {topic: 'Climate', emoji: '🌾☀️', question: 'What is a climate refugee?', options: ['Displaced by climate', 'Tourist'], correct: 0},
            {topic: 'Climate', emoji: '💨🏭', question: 'What is climate action?', options: ['Reducing emissions', 'Ignoring problem'], correct: 0},
            {topic: 'Climate', emoji: '🌍💚', question: 'What is climate adaptation?', options: ['Adjusting to changes', 'Stopping all change'], correct: 0}
        ],
        hard: [
            {topic: 'Climate', emoji: '🌡️🌍', question: 'What is the target global warming limit?', options: ['1.5-2°C', '5°C', '10°C'], correct: 0},
            {topic: 'Climate', emoji: '☀️🌡️', question: 'Which gas contributes most to warming?', options: ['Carbon dioxide', 'Oxygen', 'Helium'], correct: 0},
            {topic: 'Climate', emoji: '🧊❄️', question: 'What is the albedo effect?', options: ['Ice reflects sunlight', 'Ice absorbs heat', 'Ice produces cold'], correct: 0},
            {topic: 'Climate', emoji: '🌊🏝️', question: 'How much could seas rise by 2100?', options: ['1-8 feet', '1 inch', '100 feet'], correct: 0},
            {topic: 'Climate', emoji: '🌪️⛈️', question: 'What is the jet stream?', options: ['High-altitude wind', 'Ocean current', 'Underground river'], correct: 0},
            {topic: 'Climate', emoji: '🏔️🌨️', question: 'What percentage of glaciers are retreating?', options: ['Over 90%', '10%', '50%'], correct: 0},
            {topic: 'Climate', emoji: '🔥🌲', question: 'What is a feedback loop in climate?', options: ['Self-reinforcing cycle', 'One-time event', 'Cooling effect'], correct: 0},
            {topic: 'Climate', emoji: '🌾☀️', question: 'What is climate mitigation?', options: ['Reducing causes', 'Accepting fate', 'Moving away'], correct: 0},
            {topic: 'Climate', emoji: '💨🏭', question: 'What is net-zero?', options: ['Balance emissions absorbed', 'No emissions', 'Unlimited emissions'], correct: 0},
            {topic: 'Climate', emoji: '🌍💚', question: 'What is the IPCC?', options: ['Climate science panel', 'Energy company', 'Political party'], correct: 0}
        ],
        expert: [
            {topic: 'Climate', emoji: '🌡️🌍', question: 'What is the current CO2 concentration in atmosphere?', options: ['~420 ppm', '200 ppm', '1000 ppm', '50 ppm'], correct: 0},
            {topic: 'Climate', emoji: '☀️🌡️', question: 'What is climate sensitivity?', options: ['Temperature response to CO2', 'Weather prediction', 'Seasonal change', 'Daily variation'], correct: 0},
            {topic: 'Climate', emoji: '🧊❄️', question: 'What is permafrost?', options: ['Frozen ground', 'Ice sheet', 'Snow', 'Glacier'], correct: 0},
            {topic: 'Climate', emoji: '🌊🏝️', question: 'What is thermal expansion of oceans?', options: ['Water expands when warm', 'Ice melting', 'Evaporation', 'Cooling'], correct: 0},
            {topic: 'Climate', emoji: '🌪️⛈️', question: 'What is the Atlantic Meridional Overturning Circulation?', options: ['Ocean current system', 'Wind pattern', 'Storm type', 'Cloud formation'], correct: 0},
            {topic: 'Climate', emoji: '🏔️🌨️', question: 'What percentage of freshwater is in glaciers?', options: ['~70%', '10%', '90%', '30%'], correct: 0},
            {topic: 'Climate', emoji: '🔥🌲', question: 'What is fire weather index?', options: ['Wildfire risk measure', 'Temperature only', 'Rainfall amount', 'Wind speed'], correct: 0},
            {topic: 'Climate', emoji: '🌾☀️', question: 'What is crop resilience?', options: ['Adapt to climate stress', 'High yield only', 'Fast growth', 'Disease resistance'], correct: 0},
            {topic: 'Climate', emoji: '💨🏭', question: 'What are Scope 1, 2, 3 emissions?', options: ['Direct, indirect, supply chain', 'Past, present, future', 'Air, water, soil', 'Low, medium, high'], correct: 0},
            {topic: 'Climate', emoji: '🌍💚', question: 'What is carbon sequestration?', options: ['Capturing and storing CO2', 'Releasing CO2', 'Burning fuel', 'Deforestation'], correct: 0}
        ],
        extreme: [
            {topic: 'Climate', emoji: '🌡️🌍', question: 'Name three tipping points in climate system', answer: 'Ice sheet collapse, Permafrost thaw, Amazon dieback, Coral reef die-off (any 3)'},
            {topic: 'Climate', emoji: '☀️🌡️', question: 'Explain the difference between weather and climate', answer: 'Weather is short-term atmospheric conditions, Climate is long-term patterns over decades'},
            {topic: 'Climate', emoji: '🧊❄️', question: 'Name three impacts of Arctic ice loss', answer: 'Sea level rise, Albedo feedback, Wildlife habitat loss, Weather pattern changes (any 3)'},
            {topic: 'Climate', emoji: '🌊🏝️', question: 'Name three small island nations threatened by sea level rise', answer: 'Maldives, Tuvalu, Marshall Islands, Kiribati, Vanuatu (any 3)'},
            {topic: 'Climate', emoji: '🌪️⛈️', question: 'Name three types of extreme weather events', answer: 'Hurricanes, Droughts, Floods, Heat waves, Blizzards (any 3)'},
            {topic: 'Climate', emoji: '🏔️🌨️', question: 'Name three major glaciers that are melting', answer: 'Greenland ice sheet, Antarctic ice sheet, Himalayan glaciers, Kilimanjaro (any 3)'},
            {topic: 'Climate', emoji: '🔥🌲', question: 'Name three factors that increase wildfire risk', answer: 'High temperature, Low humidity, Drought, Strong winds (any 3)'},
            {topic: 'Climate', emoji: '🌾☀️', question: 'Name three climate impacts on agriculture', answer: 'Changing rainfall, Temperature extremes, Pest increases, Soil degradation (any 3)'},
            {topic: 'Climate', emoji: '💨🏭', question: 'Name three sectors with highest emissions', answer: 'Energy, Transportation, Industry, Agriculture (any 3)'},
            {topic: 'Climate', emoji: '🌍💚', question: 'Name three climate change solutions', answer: 'Renewable energy, Reforestation, Energy efficiency, Carbon capture (any 3)'}
        ]
    },
    3: { // Chapter 3: Water Conservation
        easy: [
            {topic: 'Water', emoji: '💧🚰', question: 'Water is a limited resource.', options: ['True', 'False'], correct: 0},
            {topic: 'Water', emoji: '🚿💦', question: 'Saving water helps the environment.', options: ['True', 'False'], correct: 0},
            {topic: 'Water', emoji: '🌊💧', question: 'Fresh water is scarce.', options: ['True', 'False'], correct: 0},
            {topic: 'Water', emoji: '🏞️💧', question: 'Rivers provide drinking water.', options: ['True', 'False'], correct: 0},
            {topic: 'Water', emoji: '🌧️☔', question: 'Rain is fresh water.', options: ['True', 'False'], correct: 0},
            {topic: 'Water', emoji: '🏜️💧', question: 'Deserts have little water.', options: ['True', 'False'], correct: 0},
            {topic: 'Water', emoji: '🚱💧', question: 'Polluted water is unsafe.', options: ['True', 'False'], correct: 0},
            {topic: 'Water', emoji: '🌍💧', question: 'Everyone needs clean water.', options: ['True', 'False'], correct: 0},
            {topic: 'Water', emoji: '🚰💰', question: 'Water bills cost money.', options: ['True', 'False'], correct: 0},
            {topic: 'Water', emoji: '💧♻️', question: 'We can reuse water.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Water', emoji: '💧🚰', question: 'What percentage of Earth is fresh water?', options: ['2.5%', '50%'], correct: 0},
            {topic: 'Water', emoji: '🚿💦', question: 'How can we save water at home?', options: ['Short showers, fix leaks', 'Leave taps running'], correct: 0},
            {topic: 'Water', emoji: '🌊💧', question: 'What is water scarcity?', options: ['Lack of clean water', 'Too much water'], correct: 0},
            {topic: 'Water', emoji: '🏞️💧', question: 'What is a watershed?', options: ['Land draining to water body', 'Type of dam'], correct: 0},
            {topic: 'Water', emoji: '🌧️☔', question: 'What is rainwater harvesting?', options: ['Collecting rain', 'Preventing rain'], correct: 0},
            {topic: 'Water', emoji: '🏜️💧', question: 'What is desalination?', options: ['Remove salt from water', 'Add salt'], correct: 0},
            {topic: 'Water', emoji: '🚱💧', question: 'What causes water pollution?', options: ['Chemicals, sewage', 'Rain'], correct: 0},
            {topic: 'Water', emoji: '🌍💧', question: 'What is water stress?', options: ['Demand exceeds supply', 'Water abundance'], correct: 0},
            {topic: 'Water', emoji: '🚰💰', question: 'What is water conservation?', options: ['Using less water', 'Wasting water'], correct: 0},
            {topic: 'Water', emoji: '💧♻️', question: 'What is greywater?', options: ['Reusable wastewater', 'Drinking water'], correct: 0}
        ],
        hard: [
            {topic: 'Water', emoji: '💧🚰', question: 'What percentage of freshwater is accessible?', options: ['Less than 1%', '50%', '25%'], correct: 0},
            {topic: 'Water', emoji: '🚿💦', question: 'How much water does a 5-minute shower use?', options: ['10-25 gallons', '1 gallon', '100 gallons'], correct: 0},
            {topic: 'Water', emoji: '🌊💧', question: 'What is virtual water?', options: ['Water to make products', 'Imaginary water', 'Video game water'], correct: 0},
            {topic: 'Water', emoji: '🏞️💧', question: 'What is groundwater depletion?', options: ['Aquifer overuse', 'Surface flooding', 'River overflow'], correct: 0},
            {topic: 'Water', emoji: '🌧️☔', question: 'What is the water cycle?', options: ['Evaporation-rain-runoff', 'One-way flow', 'Static system'], correct: 0},
            {topic: 'Water', emoji: '🏜️💧', question: 'Which region has most water stress?', options: ['Middle East', 'Amazon', 'Great Lakes'], correct: 0},
            {topic: 'Water', emoji: '🚱💧', question: 'What is eutrophication?', options: ['Excess nutrients in water', 'Water purification', 'Desalination'], correct: 0},
            {topic: 'Water', emoji: '🌍💧', question: 'How many lack clean water globally?', options: ['2 billion people', '100 million', '10,000'], correct: 0},
            {topic: 'Water', emoji: '🚰💰', question: 'What is water footprint?', options: ['Total water usage', 'Foot size', 'Waterproof shoes'], correct: 0},
            {topic: 'Water', emoji: '💧♻️', question: 'What is water recycling?', options: ['Treating wastewater', 'Drinking seawater', 'Melting ice'], correct: 0}
        ],
        expert: [
            {topic: 'Water', emoji: '💧🚰', question: 'What percentage of body weight is water?', options: ['~60%', '10%', '90%', '30%'], correct: 0},
            {topic: 'Water', emoji: '🚿💦', question: 'What is water-use efficiency?', options: ['Output per water used', 'Total consumption', 'Water waste', 'Rainfall amount'], correct: 0},
            {topic: 'Water', emoji: '🌊💧', question: 'What is the water-energy nexus?', options: ['Water-energy interdependence', 'Type of dam', 'Power plant', 'Pipeline system'], correct: 0},
            {topic: 'Water', emoji: '🏞️💧', question: 'What is an aquifer?', options: ['Underground water storage', 'River', 'Lake', 'Ocean'], correct: 0},
            {topic: 'Water', emoji: '🌧️☔', question: 'What is the global average rainfall?', options: ['~990mm per year', '10mm', '5000mm', '100mm'], correct: 0},
            {topic: 'Water', emoji: '🏜️💧', question: 'What is water security?', options: ['Reliable clean water access', 'Locked tap', 'Waterproof safe', 'Dam safety'], correct: 0},
            {topic: 'Water', emoji: '🚱💧', question: 'What is BOD in water quality?', options: ['Biological oxygen demand', 'Bottle of drink', 'Body of debris', 'Base of dam'], correct: 0},
            {topic: 'Water', emoji: '🌍💧', question: 'What percentage of water is used for agriculture?', options: ['~70%', '10%', '30%', '90%'], correct: 0},
            {topic: 'Water', emoji: '🚰💰', question: 'What is water pricing?', options: ['Charging for water use', 'Water quality', 'Free water', 'Rain measurement'], correct: 0},
            {topic: 'Water', emoji: '💧♻️', question: 'What is integrated water management?', options: ['Coordinated water approach', 'Single use', 'Random distribution', 'Ocean dumping'], correct: 0}
        ],
        extreme: [
            {topic: 'Water', emoji: '💧🚰', question: 'Name three ways to conserve water at home', answer: 'Fix leaks, Short showers, Low-flow fixtures, Turn off taps (any 3)'},
            {topic: 'Water', emoji: '🚿💦', question: 'Calculate water saved: 10-min vs 5-min shower daily for a year', answer: '~9,125 gallons saved (assuming 5 gal/min flow rate)'},
            {topic: 'Water', emoji: '🌊💧', question: 'Name three agricultural water conservation methods', answer: 'Drip irrigation, Crop rotation, Mulching, Drought-resistant crops (any 3)'},
            {topic: 'Water', emoji: '🏞️💧', question: 'Name three types of water bodies', answer: 'Rivers, Lakes, Oceans, Wetlands, Aquifers (any 3)'},
            {topic: 'Water', emoji: '🌧️☔', question: 'Explain how rainwater harvesting works', answer: 'Collect rain from roofs, Filter, Store in tanks, Use for non-potable purposes'},
            {topic: 'Water', emoji: '🏜️💧', question: 'Name three water-stressed regions', answer: 'Middle East, North Africa, South Asia, Western USA (any 3)'},
            {topic: 'Water', emoji: '🚱💧', question: 'Name three water pollutants', answer: 'Chemicals, Sewage, Plastics, Heavy metals, Pesticides (any 3)'},
            {topic: 'Water', emoji: '🌍💧', question: 'Name three UN water-related goals', answer: 'Clean water access, Sanitation, Water efficiency, Protect ecosystems (any 3)'},
            {topic: 'Water', emoji: '🚰💰', question: 'Name three benefits of water conservation', answer: 'Lower bills, Protect ecosystems, Ensure supply, Save energy (any 3)'},
            {topic: 'Water', emoji: '💧♻️', question: 'Name three uses for greywater', answer: 'Irrigation, Toilet flushing, Car washing (not drinking)'}
        ]
    },
    4: { // Chapter 4: Renewable Energy
        easy: [
            {topic: 'Energy', emoji: '☀️⚡', question: 'Solar energy comes from the sun.', options: ['True', 'False'], correct: 0},
            {topic: 'Energy', emoji: '💨🌪️', question: 'Wind can generate electricity.', options: ['True', 'False'], correct: 0},
            {topic: 'Energy', emoji: '💧⚡', question: 'Water can produce power.', options: ['True', 'False'], correct: 0},
            {topic: 'Energy', emoji: '♻️⚡', question: 'Renewable energy is cleaner.', options: ['True', 'False'], correct: 0},
            {topic: 'Energy', emoji: '🌍💚', question: 'Fossil fuels pollute more.', options: ['True', 'False'], correct: 0},
            {topic: 'Energy', emoji: '🏠☀️', question: 'Homes can use solar panels.', options: ['True', 'False'], correct: 0},
            {topic: 'Energy', emoji: '🌊⚡', question: 'Ocean waves have energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Energy', emoji: '🌡️⚡', question: 'Earth has heat inside.', options: ['True', 'False'], correct: 0},
            {topic: 'Energy', emoji: '🌱⚡', question: 'Biomass is renewable.', options: ['True', 'False'], correct: 0},
            {topic: 'Energy', emoji: '💡💚', question: 'Saving energy helps environment.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Energy', emoji: '☀️⚡', question: 'What is solar power?', options: ['Electricity from sunlight', 'Power from moon'], correct: 0},
            {topic: 'Energy', emoji: '💨🌪️', question: 'What are wind turbines?', options: ['Convert wind to power', 'Create wind'], correct: 0},
            {topic: 'Energy', emoji: '💧⚡', question: 'What is hydroelectric power?', options: ['Electricity from water', 'Water from electricity'], correct: 0},
            {topic: 'Energy', emoji: '♻️⚡', question: 'What does renewable mean?', options: ['Naturally replenished', 'Runs out quickly'], correct: 0},
            {topic: 'Energy', emoji: '🌍💚', question: 'What are fossil fuels?', options: ['Coal, oil, gas', 'Sun, wind'], correct: 0},
            {topic: 'Energy', emoji: '🏠☀️', question: 'What are solar panels?', options: ['Convert sunlight to electricity', 'Heat water only'], correct: 0},
            {topic: 'Energy', emoji: '🌊⚡', question: 'What is tidal energy?', options: ['Power from ocean tides', 'Wave surfing'], correct: 0},
            {topic: 'Energy', emoji: '🌡️⚡', question: 'What is geothermal energy?', options: ['Heat from Earth', 'Cold storage'], correct: 0},
            {topic: 'Energy', emoji: '🌱⚡', question: 'What is biomass energy?', options: ['Organic matter fuel', 'Fossil fuel'], correct: 0},
            {topic: 'Energy', emoji: '💡💚', question: 'What is energy efficiency?', options: ['Less energy, same output', 'More waste'], correct: 0}
        ],
        hard: [
            {topic: 'Energy', emoji: '☀️⚡', question: 'What is photovoltaic technology?', options: ['Solar cells', 'Wind power', 'Water dam'], correct: 0},
            {topic: 'Energy', emoji: '💨🌪️', question: 'What capacity factor do wind farms typically have?', options: ['25-45%', '90%', '5%'], correct: 0},
            {topic: 'Energy', emoji: '💧⚡', question: 'What is pumped-storage hydropower?', options: ['Energy storage system', 'Water pump', 'Irrigation'], correct: 0},
            {topic: 'Energy', emoji: '♻️⚡', question: 'What percentage of global energy is renewable?', options: ['~30%', '5%', '90%'], correct: 0},
            {topic: 'Energy', emoji: '🌍💚', question: 'What is the energy transition?', options: ['Shift to renewables', 'Use more fossil fuels', 'Stop all power'], correct: 0},
            {topic: 'Energy', emoji: '🏠☀️', question: 'What is net metering?', options: ['Sell excess solar power', 'Buy only', 'No measurement'], correct: 0},
            {topic: 'Energy', emoji: '🌊⚡', question: 'What is the potential of ocean energy?', options: ['Very high', 'None', 'Only for islands'], correct: 0},
            {topic: 'Energy', emoji: '🌡️⚡', question: 'Where is geothermal energy most viable?', options: ['Volcanic regions', 'Deserts', 'Polar areas'], correct: 0},
            {topic: 'Energy', emoji: '🌱⚡', question: 'What is biofuel?', options: ['Fuel from biomass', 'Fossil fuel', 'Nuclear fuel'], correct: 0},
            {topic: 'Energy', emoji: '💡💚', question: 'What is the rebound effect in energy?', options: ['Efficiency leads to more use', 'Always save', 'No change'], correct: 0}
        ],
        expert: [
            {topic: 'Energy', emoji: '☀️⚡', question: 'What is the efficiency of modern solar panels?', options: ['15-22%', '5%', '90%', '50%'], correct: 0},
            {topic: 'Energy', emoji: '💨🌪️', question: 'What is the Betz limit for wind turbines?', options: ['59.3% efficiency cap', '100%', '10%', '25%'], correct: 0},
            {topic: 'Energy', emoji: '💧⚡', question: 'What is the largest hydropower producer?', options: ['China', 'USA', 'Brazil', 'Canada'], correct: 0},
            {topic: 'Energy', emoji: '♻️⚡', question: 'What is LCOE?', options: ['Levelized cost of energy', 'Low carbon output', 'Limited capacity', 'Local consumption'], correct: 0},
            {topic: 'Energy', emoji: '🌍💚', question: 'What is decarbonization?', options: ['Reducing carbon emissions', 'Adding carbon', 'Burning coal', 'Tree removal'], correct: 0},
            {topic: 'Energy', emoji: '🏠☀️', question: 'What is a microgrid?', options: ['Local energy system', 'Large power plant', 'Battery only', 'No grid'], correct: 0},
            {topic: 'Energy', emoji: '🌊⚡', question: 'What is wave energy converter?', options: ['Device capturing wave power', 'Surfboard', 'Boat', 'Dam'], correct: 0},
            {topic: 'Energy', emoji: '🌡️⚡', question: 'What depth is needed for geothermal wells?', options: ['1-3 km typically', '10 meters', '100 km', 'Surface only'], correct: 0},
            {topic: 'Energy', emoji: '🌱⚡', question: 'What is anaerobic digestion?', options: ['Breakdown organic matter', 'Oxygen production', 'Water treatment', 'Coal mining'], correct: 0},
            {topic: 'Energy', emoji: '💡💚', question: 'What is demand response?', options: ['Adjust consumption to supply', 'Constant use', 'No control', 'Waste energy'], correct: 0}
        ],
        extreme: [
            {topic: 'Energy', emoji: '☀️⚡', question: 'Name three types of solar technology', answer: 'Photovoltaic panels, Solar thermal, Concentrated solar power (CSP)'},
            {topic: 'Energy', emoji: '💨🌪️', question: 'Name three advantages of wind energy', answer: 'Clean, Renewable, Low operating cost, Creates jobs (any 3)'},
            {topic: 'Energy', emoji: '💧⚡', question: 'Name three types of hydropower', answer: 'Run-of-river, Reservoir, Pumped-storage, Tidal (any 3)'},
            {topic: 'Energy', emoji: '♻️⚡', question: 'Name three benefits of renewable energy', answer: 'Reduce emissions, Energy independence, Job creation, Lower costs (any 3)'},
            {topic: 'Energy', emoji: '🌍💚', question: 'Name three challenges of renewable energy', answer: 'Intermittency, Storage, Grid integration, Initial cost (any 3)'},
            {topic: 'Energy', emoji: '🏠☀️', question: 'Calculate payback period: $20k solar, $200/month savings', answer: '100 months or ~8.3 years'},
            {topic: 'Energy', emoji: '🌊⚡', question: 'Name three types of ocean energy', answer: 'Wave, Tidal, Ocean thermal, Current (any 3)'},
            {topic: 'Energy', emoji: '🌡️⚡', question: 'Name three geothermal applications', answer: 'Electricity generation, Heating, Agriculture, Spas (any 3)'},
            {topic: 'Energy', emoji: '🌱⚡', question: 'Name three biomass sources', answer: 'Wood, Agricultural waste, Algae, Municipal waste (any 3)'},
            {topic: 'Energy', emoji: '💡💚', question: 'Name three energy storage technologies', answer: 'Batteries, Pumped hydro, Compressed air, Flywheels, Hydrogen (any 3)'}
        ]
    },
    5: { // Chapter 5: Ecosystems
        easy: [
            {topic: 'Ecosystem', emoji: '🌳🦋', question: 'Ecosystems have living things.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌿🐛', question: 'Plants are producers.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecosystem', emoji: '🦁🥩', question: 'Lions are consumers.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecosystem', emoji: '🍄🍂', question: 'Mushrooms are decomposers.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌍🔗', question: 'Everything is connected.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecosystem', emoji: '🐝🌸', question: 'Bees pollinate flowers.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌊🐟', question: 'Fish live in water ecosystems.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌲🦌', question: 'Forests are ecosystems.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecosystem', emoji: '🦅🐭', question: 'Hawks eat mice.', options: ['True', 'False'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌱☀️', question: 'Plants need sunlight.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ecosystem', emoji: '🌳🦋', question: 'What is an ecosystem?', options: ['Living and non-living interact', 'Only plants'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌿🐛', question: 'What do producers do?', options: ['Make their own food', 'Eat animals'], correct: 0},
            {topic: 'Ecosystem', emoji: '🦁🥩', question: 'What is a carnivore?', options: ['Eats meat', 'Eats plants'], correct: 0},
            {topic: 'Ecosystem', emoji: '🍄🍂', question: 'What do decomposers do?', options: ['Break down dead matter', 'Produce oxygen'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌍🔗', question: 'What is a food chain?', options: ['Energy transfer path', 'Restaurant'], correct: 0},
            {topic: 'Ecosystem', emoji: '🐝🌸', question: 'What is pollination?', options: ['Transfer pollen', 'Plant growth'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌊🐟', question: 'What is an aquatic ecosystem?', options: ['Water-based', 'Land-based'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌲🦌', question: 'What is a terrestrial ecosystem?', options: ['Land-based', 'Water-based'], correct: 0},
            {topic: 'Ecosystem', emoji: '🦅🐭', question: 'What is a predator?', options: ['Hunts other animals', 'Eats plants'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌱☀️', question: 'What is photosynthesis?', options: ['Plants make food from light', 'Animals breathe'], correct: 0}
        ],
        hard: [
            {topic: 'Ecosystem', emoji: '🌳🦋', question: 'Define biodiversity', options: ['Variety of life', 'One species', 'No life'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌿🐛', question: 'What is primary production?', options: ['Energy from photosynthesis', 'Factory output', 'First sale'], correct: 0},
            {topic: 'Ecosystem', emoji: '🦁🥩', question: 'What is a trophic level?', options: ['Feeding position', 'Temperature', 'Altitude'], correct: 0},
            {topic: 'Ecosystem', emoji: '🍄🍂', question: 'What is nutrient cycling?', options: ['Matter reuse in ecosystem', 'One-way flow', 'No movement'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌍🔗', question: 'What is a food web?', options: ['Complex feeding relationships', 'Single chain', 'Internet'], correct: 0},
            {topic: 'Ecosystem', emoji: '🐝🌸', question: 'What percentage of crops depend on pollinators?', options: ['75%', '10%', '100%'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌊🐟', question: 'What is a coral reef ecosystem?', options: ['Marine biodiversity hotspot', 'Desert', 'Forest'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌲🦌', question: 'What is succession?', options: ['Ecosystem change over time', 'Staying same', 'Instant death'], correct: 0},
            {topic: 'Ecosystem', emoji: '🦅🐭', question: 'What is the 10% rule?', options: ['Energy transfer between levels', 'Tax rate', 'Discount'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌱☀️', question: 'What is carrying capacity?', options: ['Max population supported', 'Weight limit', 'Infinite'], correct: 0}
        ],
        expert: [
            {topic: 'Ecosystem', emoji: '🌳🦋', question: 'What is ecosystem services?', options: ['Benefits to humans', 'Service industry', 'Repair shop', 'Restaurant'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌿🐛', question: 'What is net primary productivity?', options: ['Energy stored by plants', 'Total consumption', 'Factory output', 'Sales revenue'], correct: 0},
            {topic: 'Ecosystem', emoji: '🦁🥩', question: 'What is an apex predator?', options: ['Top of food chain', 'Bottom feeder', 'Plant eater', 'Decomposer'], correct: 0},
            {topic: 'Ecosystem', emoji: '🍄🍂', question: 'What is the role of fungi in ecosystems?', options: ['Decomposition and symbiosis', 'Predation', 'Photosynthesis', 'Producing oxygen'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌍🔗', question: 'What is bioaccumulation?', options: ['Toxin buildup in organisms', 'Population growth', 'Energy storage', 'Water collection'], correct: 0},
            {topic: 'Ecosystem', emoji: '🐝🌸', question: 'What is mutualism?', options: ['Both species benefit', 'One benefits only', 'Both harmed', 'No interaction'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌊🐟', question: 'What is the photic zone?', options: ['Sunlight penetration depth', 'Deep ocean', 'Shore area', 'River bed'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌲🦌', question: 'What is climax community?', options: ['Stable ecosystem endpoint', 'Starting point', 'Destroyed area', 'No community'], correct: 0},
            {topic: 'Ecosystem', emoji: '🦅🐭', question: 'What is an ecological niche?', options: ["Species' role in ecosystem", 'Physical location', 'Time period', 'Weather pattern'], correct: 0},
            {topic: 'Ecosystem', emoji: '🌱☀️', question: 'What is the nitrogen cycle?', options: ['Nitrogen movement in ecosystem', 'Oxygen cycle', 'Water cycle', 'Carbon only'], correct: 0}
        ],
        extreme: [
            {topic: 'Ecosystem', emoji: '🌳🦋', question: 'Name three types of ecosystem services', answer: 'Provisioning (food), Regulating (climate), Cultural (recreation), Supporting (nutrients) (any 3)'},
            {topic: 'Ecosystem', emoji: '🌿🐛', question: 'Explain energy loss between trophic levels', answer: '~90% lost as heat/metabolism, only ~10% transferred to next level'},
            {topic: 'Ecosystem', emoji: '🦁🥩', question: 'Name three types of consumers', answer: 'Herbivores, Carnivores, Omnivores, Detritivores (any 3)'},
            {topic: 'Ecosystem', emoji: '🍄🍂', question: 'Name three decomposers', answer: 'Bacteria, Fungi, Earthworms, Insects (any 3)'},
            {topic: 'Ecosystem', emoji: '🌍🔗', question: 'Name three biogeochemical cycles', answer: 'Carbon, Nitrogen, Water, Phosphorus, Oxygen (any 3)'},
            {topic: 'Ecosystem', emoji: '🐝🌸', question: 'Name three types of symbiosis', answer: 'Mutualism, Commensalism, Parasitism'},
            {topic: 'Ecosystem', emoji: '🌊🐟', question: 'Name three aquatic ecosystem types', answer: 'Marine, Freshwater, Estuarine, Wetland (any 3)'},
            {topic: 'Ecosystem', emoji: '🌲🦌', question: 'Name three stages of ecological succession', answer: 'Pioneer species, Intermediate species, Climax community'},
            {topic: 'Ecosystem', emoji: '🦅🐭', question: 'Name three factors limiting population growth', answer: 'Food, Water, Space, Disease, Predation (any 3)'},
            {topic: 'Ecosystem', emoji: '🌱☀️', question: 'Name three essential nutrients for plants', answer: 'Nitrogen, Phosphorus, Potassium, Carbon, Water (any 3)'}
        ]
    },
    6: { // Chapter 6: Waste Management
        easy: [
            {topic: 'Waste', emoji: '🗑️♻️', question: 'Recycling reduces waste.', options: ['True', 'False'], correct: 0},
            {topic: 'Waste', emoji: '🍎🥕', question: 'Food waste can be composted.', options: ['True', 'False'], correct: 0},
            {topic: 'Waste', emoji: '🏭🗑️', question: 'Factories produce waste.', options: ['True', 'False'], correct: 0},
            {topic: 'Waste', emoji: '🌍💚', question: 'Less waste helps environment.', options: ['True', 'False'], correct: 0},
            {topic: 'Waste', emoji: '🔋♻️', question: 'Batteries need special disposal.', options: ['True', 'False'], correct: 0},
            {topic: 'Waste', emoji: '👕♻️', question: 'Clothes can be reused.', options: ['True', 'False'], correct: 0},
            {topic: 'Waste', emoji: '🏠🗑️', question: 'Households create waste.', options: ['True', 'False'], correct: 0},
            {topic: 'Waste', emoji: '🌊🗑️', question: 'Littering pollutes oceans.', options: ['True', 'False'], correct: 0},
            {topic: 'Waste', emoji: '📦♻️', question: 'Cardboard is recyclable.', options: ['True', 'False'], correct: 0},
            {topic: 'Waste', emoji: '🚮✅', question: 'We should sort our trash.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Waste', emoji: '🗑️♻️', question: 'What is waste management?', options: ['Handling trash properly', 'Throwing away'], correct: 0},
            {topic: 'Waste', emoji: '🍎🥕', question: 'What is organic waste?', options: ['Biodegradable matter', 'Plastic'], correct: 0},
            {topic: 'Waste', emoji: '🏭🗑️', question: 'What is industrial waste?', options: ['Factory byproducts', 'Home trash'], correct: 0},
            {topic: 'Waste', emoji: '🌍💚', question: 'What is zero waste?', options: ['Minimize waste to landfill', 'Create more trash'], correct: 0},
            {topic: 'Waste', emoji: '🔋♻️', question: 'What is e-waste?', options: ['Electronic waste', 'Energy waste'], correct: 0},
            {topic: 'Waste', emoji: '👕♻️', question: 'What is textile waste?', options: ['Discarded fabrics', 'Food waste'], correct: 0},
            {topic: 'Waste', emoji: '🏠🗑️', question: 'What is municipal solid waste?', options: ['Household trash', 'Factory waste'], correct: 0},
            {topic: 'Waste', emoji: '🌊🗑️', question: 'What is marine debris?', options: ['Trash in oceans', 'Fish'], correct: 0},
            {topic: 'Waste', emoji: '📦♻️', question: 'What is packaging waste?', options: ['Containers and wrapping', 'Contents only'], correct: 0},
            {topic: 'Waste', emoji: '🚮✅', question: 'What is source separation?', options: ['Sorting at origin', 'Mixed trash'], correct: 0}
        ],
        hard: [
            {topic: 'Waste', emoji: '🗑️♻️', question: 'What is the waste hierarchy?', options: ['Reduce, reuse, recycle order', 'Any order', 'Burn everything'], correct: 0},
            {topic: 'Waste', emoji: '🍎🥕', question: 'What percentage of food is wasted globally?', options: ['~30%', '5%', '75%'], correct: 0},
            {topic: 'Waste', emoji: '🏭🗑️', question: 'What is hazardous waste?', options: ['Dangerous materials', 'Safe trash', 'Food'], correct: 0},
            {topic: 'Waste', emoji: '🌍💚', question: 'What is landfill leachate?', options: ['Contaminated liquid', 'Clean water', 'Soil'], correct: 0},
            {topic: 'Waste', emoji: '🔋♻️', question: 'How many phones are discarded yearly?', options: ['Billions', 'Thousands', 'Millions'], correct: 0},
            {topic: 'Waste', emoji: '👕♻️', question: 'What is fast fashion waste?', options: ['Quickly discarded clothes', 'Quick delivery', 'Sport clothes'], correct: 0},
            {topic: 'Waste', emoji: '🏠🗑️', question: 'What is per capita waste generation?', options: ['Waste per person', 'Total waste', 'Factory waste'], correct: 0},
            {topic: 'Waste', emoji: '🌊🗑️', question: 'What is microplastic?', options: ['Tiny plastic particles', 'Large bags', 'No plastic'], correct: 0},
            {topic: 'Waste', emoji: '📦♻️', question: 'What is extended producer responsibility?', options: ['Makers handle disposal', 'Buyers responsible', 'No responsibility'], correct: 0},
            {topic: 'Waste', emoji: '🚮✅', question: 'What is waste-to-energy?', options: ['Convert trash to power', 'Bury everything', 'Export waste'], correct: 0}
        ],
        expert: [
            {topic: 'Waste', emoji: '🗑️♻️', question: 'How much waste does average American generate daily?', options: ['~4.5 lbs', '1 lb', '20 lbs', '0.5 lbs'], correct: 0},
            {topic: 'Waste', emoji: '🍎🥕', question: 'What is anaerobic digestion for waste?', options: ['Breakdown without oxygen', 'Burning', 'Freezing', 'Recycling'], correct: 0},
            {topic: 'Waste', emoji: '🏭🗑️', question: 'What is the Basel Convention?', options: ['Control hazardous waste movement', 'Trade agreement', 'Climate treaty', 'Ocean law'], correct: 0},
            {topic: 'Waste', emoji: '🌍💚', question: 'What is circular economy in waste?', options: ['Eliminate waste concept', 'Linear disposal', 'One-time use', 'Export trash'], correct: 0},
            {topic: 'Waste', emoji: '🔋♻️', question: 'What percentage of e-waste is recycled?', options: ['~20%', '80%', '100%', '2%'], correct: 0},
            {topic: 'Waste', emoji: '👕♻️', question: 'How long for textiles to decompose in landfill?', options: ['200+ years', '1 month', '1 year', '1 week'], correct: 0},
            {topic: 'Waste', emoji: '🏠🗑️', question: 'What is a materials recovery facility?', options: ['Sort recyclables', 'Landfill', 'Incinerator', 'Storage'], correct: 0},
            {topic: 'Waste', emoji: '🌊🗑️', question: 'How many garbage patches exist in oceans?', options: ['5 major ones', '1', '100', 'None'], correct: 0},
            {topic: 'Waste', emoji: '📦♻️', question: 'What is downcycling?', options: ['Recycle to lower quality', 'Upgrade material', 'No change', 'Destroy'], correct: 0},
            {topic: 'Waste', emoji: '🚮✅', question: 'What is single-stream recycling?', options: ['All recyclables together', 'Separate everything', 'No recycling', 'One item type'], correct: 0}
        ],
        extreme: [
            {topic: 'Waste', emoji: '🗑️♻️', question: 'Name the five Rs of waste management', answer: 'Refuse, Reduce, Reuse, Recycle, Rot (compost)'},
            {topic: 'Waste', emoji: '🍎🥕', question: 'Name three ways to reduce food waste', answer: 'Meal planning, Proper storage, Composting, Smaller portions (any 3)'},
            {topic: 'Waste', emoji: '🏭🗑️', question: 'Name three types of hazardous waste', answer: 'Toxic, Flammable, Corrosive, Reactive (any 3)'},
            {topic: 'Waste', emoji: '🌍💚', question: 'Name three zero waste principles', answer: 'Refuse unnecessary, Reduce consumption, Reuse items, Recycle, Rot (any 3)'},
            {topic: 'Waste', emoji: '🔋♻️', question: 'Name three valuable materials in e-waste', answer: 'Gold, Silver, Copper, Rare earth metals (any 3)'},
            {topic: 'Waste', emoji: '👕♻️', question: 'Name three textile recycling methods', answer: 'Donation, Upcycling, Fiber recovery, Resale (any 3)'},
            {topic: 'Waste', emoji: '🏠🗑️', question: 'Name three components of household waste', answer: 'Organics, Paper, Plastic, Glass, Metal (any 3)'},
            {topic: 'Waste', emoji: '🌊🗑️', question: 'Name three sources of ocean plastic', answer: 'Rivers, Fishing gear, Beaches, Ships (any 3)'},
            {topic: 'Waste', emoji: '📦♻️', question: 'Name three sustainable packaging alternatives', answer: 'Biodegradable, Reusable, Minimal, Compostable (any 3)'},
            {topic: 'Waste', emoji: '🚮✅', question: 'Name three waste diversion strategies', answer: 'Recycling, Composting, Donation, Repair (any 3)'}
        ]
    },
    7: { // Chapter 7: Sustainable Agriculture
        easy: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Farming produces food.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌱🌿', question: 'Organic farming uses no chemicals.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '💧🌾', question: 'Crops need water.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🐄🌾', question: 'Animals are part of farming.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌍♻️', question: 'Sustainable farming helps environment.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌻🐝', question: 'Bees help crops grow.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🌳🌾', question: 'Trees prevent soil erosion.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🔄🌱', question: 'Crop rotation is healthy.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🚜💨', question: 'Farming can cause pollution.', options: ['True', 'False'], correct: 0},
            {topic: 'Agriculture', emoji: '🥗💚', question: 'Local food is fresher.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'What is sustainable agriculture?', options: ['Eco-friendly farming', 'Harmful practices'], correct: 0},
            {topic: 'Agriculture', emoji: '🌱🌿', question: 'What is organic farming?', options: ['No synthetic chemicals', 'Any farming'], correct: 0},
            {topic: 'Agriculture', emoji: '💧🌾', question: 'What is drip irrigation?', options: ['Water directly to roots', 'Spray everywhere'], correct: 0},
            {topic: 'Agriculture', emoji: '🐄🌾', question: 'What is integrated farming?', options: ['Crops and livestock together', 'Crops only'], correct: 0},
            {topic: 'Agriculture', emoji: '🌍♻️', question: 'What is regenerative agriculture?', options: ['Restore soil health', 'Deplete soil'], correct: 0},
            {topic: 'Agriculture', emoji: '🌻🐝', question: 'What is agroforestry?', options: ['Trees and crops together', 'No trees'], correct: 0},
            {topic: 'Agriculture', emoji: '🌳🌾', question: 'What is soil conservation?', options: ['Protect from erosion', 'Allow erosion'], correct: 0},
            {topic: 'Agriculture', emoji: '🔄🌱', question: 'Why rotate crops?', options: ['Prevent soil depletion', 'No benefit'], correct: 0},
            {topic: 'Agriculture', emoji: '🚜💨', question: 'What is runoff in farming?', options: ['Water with chemicals flowing', 'Irrigation'], correct: 0},
            {topic: 'Agriculture', emoji: '🥗💚', question: 'What is food miles?', options: ['Distance food travels', 'Recipe length'], correct: 0}
        ],
        hard: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'What is monoculture?', options: ['Single crop large area', 'Multiple crops', 'No crops'], correct: 0},
            {topic: 'Agriculture', emoji: '🌱🌿', question: 'What percentage of US farmland is organic?', options: ['~1-2%', '50%', '90%'], correct: 0},
            {topic: 'Agriculture', emoji: '💧🌾', question: 'What is precision agriculture?', options: ['Technology-based farming', 'Random planting', 'No planning'], correct: 0},
            {topic: 'Agriculture', emoji: '🐄🌾', question: 'What is the main issue with livestock farming?', options: ['High emissions', 'Too healthy', 'No issues'], correct: 0},
            {topic: 'Agriculture', emoji: '🌍♻️', question: 'What is carbon farming?', options: ['Sequester CO2 in soil', 'Release carbon', 'Burn fields'], correct: 0},
            {topic: 'Agriculture', emoji: '🌻🐝', question: 'What is permaculture?', options: ['Sustainable design system', 'Temporary farming', 'Chemical use'], correct: 0},
            {topic: 'Agriculture', emoji: '🌳🌾', question: 'What is contour farming?', options: ['Plow along slopes', 'Down slopes', 'No pattern'], correct: 0},
            {topic: 'Agriculture', emoji: '🔄🌱', question: 'What is nitrogen fixation?', options: ['Converting N2 to usable form', 'Removing nitrogen', 'Adding chemicals'], correct: 0},
            {topic: 'Agriculture', emoji: '🚜💨', question: 'What causes eutrophication?', options: ['Excess nutrients in water', 'Soil health', 'Dry conditions'], correct: 0},
            {topic: 'Agriculture', emoji: '🥗💚', question: 'What is community supported agriculture?', options: ['Direct farm subscriptions', 'Supermarkets', 'Imports'], correct: 0}
        ],
        expert: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'What percentage of global emissions is from agriculture?', options: ['~25%', '5%', '75%', '1%'], correct: 0},
            {topic: 'Agriculture', emoji: '🌱🌿', question: 'What is biological pest control?', options: ['Natural predators', 'Chemicals only', 'No control', 'Fire'], correct: 0},
            {topic: 'Agriculture', emoji: '💧🌾', question: 'What percentage of freshwater is used for agriculture?', options: ['~70%', '10%', '30%', '95%'], correct: 0},
            {topic: 'Agriculture', emoji: '🐄🌾', question: 'How much more land does beef require vs plants?', options: ['~20x more', 'Same', 'Less', '2x'], correct: 0},
            {topic: 'Agriculture', emoji: '🌍♻️', question: 'What is soil organic matter?', options: ['Carbon-rich material', 'Rocks', 'Water', 'Air'], correct: 0},
            {topic: 'Agriculture', emoji: '🌻🐝', question: 'What percentage of food crops rely on pollinators?', options: ['~75%', '10%', '100%', '5%'], correct: 0},
            {topic: 'Agriculture', emoji: '🌳🌾', question: 'How much topsoil is lost annually to erosion?', options: ['24 billion tons', '1 ton', '100 tons', '1 billion tons'], correct: 0},
            {topic: 'Agriculture', emoji: '🔄🌱', question: 'What is cover cropping?', options: ['Plants between main crops', 'Plastic covers', 'No planting', 'Only main crop'], correct: 0},
            {topic: 'Agriculture', emoji: '🚜💨', question: 'What is integrated pest management?', options: ['Combined control strategies', 'Chemicals only', 'No management', 'One method'], correct: 0},
            {topic: 'Agriculture', emoji: '🥗💚', question: 'What is vertical farming?', options: ['Indoor stacked growing', 'Traditional fields', 'Underground', 'No farming'], correct: 0}
        ],
        extreme: [
            {topic: 'Agriculture', emoji: '🌾🚜', question: 'Name three sustainable farming practices', answer: 'Crop rotation, Organic methods, Cover crops, Reduced tillage (any 3)'},
            {topic: 'Agriculture', emoji: '🌱🌿', question: 'Name three benefits of organic farming', answer: 'No synthetic chemicals, Soil health, Biodiversity, Water quality (any 3)'},
            {topic: 'Agriculture', emoji: '💧🌾', question: 'Name three water-efficient irrigation methods', answer: 'Drip irrigation, Sprinkler systems, Mulching, Rainwater harvesting (any 3)'},
            {topic: 'Agriculture', emoji: '🐄🌾', question: 'Name three alternatives to industrial livestock farming', answer: 'Pasture-raised, Free-range, Organic, Rotational grazing (any 3)'},
            {topic: 'Agriculture', emoji: '🌍♻️', question: 'Name three ways farming can sequester carbon', answer: 'Cover crops, No-till farming, Agroforestry, Compost (any 3)'},
            {topic: 'Agriculture', emoji: '🌻🐝', question: 'Name three pollinator-friendly practices', answer: 'Wildflower strips, Reduce pesticides, Diverse crops, Hedgerows (any 3)'},
            {topic: 'Agriculture', emoji: '🌳🌾', question: 'Name three soil conservation methods', answer: 'Terracing, Contour plowing, Windbreaks, Cover crops (any 3)'},
            {topic: 'Agriculture', emoji: '🔄🌱', question: 'Explain a typical crop rotation cycle', answer: 'Legumes (fix nitrogen) → Heavy feeders (corn) → Light feeders (roots) → Repeat'},
            {topic: 'Agriculture', emoji: '🚜💨', question: 'Name three environmental impacts of conventional agriculture', answer: 'Soil erosion, Water pollution, Biodiversity loss, Emissions (any 3)'},
            {topic: 'Agriculture', emoji: '🥗💚', question: 'Name three benefits of local food systems', answer: 'Freshness, Lower emissions, Support farmers, Seasonal eating (any 3)'}
        ]
    },
    8: { // Chapter 8: Biodiversity Conservation
        easy: [
            {topic: 'Biodiversity', emoji: '🦁🐘', question: 'Many species exist on Earth.', options: ['True', 'False'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌳🦋', question: 'Forests have many animals.', options: ['True', 'False'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌍💚', question: 'Biodiversity is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Biodiversity', emoji: '🐼⚠️', question: 'Some animals are endangered.', options: ['True', 'False'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌊🐠', question: 'Oceans have diverse life.', options: ['True', 'False'], correct: 0},
            {topic: 'Biodiversity', emoji: '🦅🦉', question: 'Birds are important for ecosystems.', options: ['True', 'False'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌺🌸', question: 'Plants provide food and oxygen.', options: ['True', 'False'], correct: 0},
            {topic: 'Biodiversity', emoji: '🐝🦋', question: 'Insects pollinate plants.', options: ['True', 'False'], correct: 0},
            {topic: 'Biodiversity', emoji: '🏞️🌲', question: 'National parks protect wildlife.', options: ['True', 'False'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌍🔗', question: 'All life is connected.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Biodiversity', emoji: '🦁🐘', question: 'What does the term biodiversity mean?', options: ['Variety of life', 'One species'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌳🦋', question: 'What is habitat?', options: ["Where species lives", 'Food type'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌍💚', question: 'Why is biodiversity important?', options: ['Ecosystem stability', 'No importance'], correct: 0},
            {topic: 'Biodiversity', emoji: '🐼⚠️', question: 'What is an endangered species?', options: ['Risk of extinction', 'Very common'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌊🐠', question: 'What does marine biodiversity refer to?', options: ['Ocean life variety', 'Land animals'], correct: 0},
            {topic: 'Biodiversity', emoji: '🦅🦉', question: 'What is a species?', options: ['Group that can breed', 'Any animal'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌺🌸', question: 'What is endemic species?', options: ['Found only in one place', 'Everywhere'], correct: 0},
            {topic: 'Biodiversity', emoji: '🐝🦋', question: 'What is a pollinator?', options: ['Helps plant reproduction', 'Eats plants'], correct: 0},
            {topic: 'Biodiversity', emoji: '🏞️🌲', question: 'What is a protected area?', options: ['Conservation zone', 'Shopping mall'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌍🔗', question: 'Define an ecosystem', options: ['Living things interact', 'One animal'], correct: 0}
        ],
        hard: [
            {topic: 'Biodiversity', emoji: '🦁🐘', question: 'How many species exist on Earth?', options: ['~8-9 million', '1000', '100 billion'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌳🦋', question: 'What is habitat fragmentation?', options: ['Breaking up habitats', 'Connecting habitats', 'No change'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌍💚', question: 'What are biodiversity hotspots?', options: ['High species richness areas', 'Low diversity', 'Empty zones'], correct: 0},
            {topic: 'Biodiversity', emoji: '🐼⚠️', question: 'What is the IUCN Red List?', options: ['Threatened species list', 'Shopping list', 'Color chart'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌊🐠', question: 'What percentage of species are in oceans?', options: ['~50-80%', '1%', '100%'], correct: 0},
            {topic: 'Biodiversity', emoji: '🦅🦉', question: 'What is genetic diversity?', options: ['Variation within species', 'Same DNA', 'No variation'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌺🌸', question: 'What is the main threat to biodiversity?', options: ['Habitat loss', 'Too many animals', 'Too much rain'], correct: 0},
            {topic: 'Biodiversity', emoji: '🐝🦋', question: 'What percentage of plant species need pollinators?', options: ['~90%', '10%', '0%'], correct: 0},
            {topic: 'Biodiversity', emoji: '🏞️🌲', question: 'What is in-situ conservation?', options: ['Protect in natural habitat', 'Zoo only', 'Laboratory'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌍🔗', question: 'What is the sixth mass extinction?', options: ['Current biodiversity crisis', 'Past event', 'Future possibility'], correct: 0}
        ],
        expert: [
            {topic: 'Biodiversity', emoji: '🦁🐘', question: 'What is the current extinction rate compared to background?', options: ['100-1000x higher', 'Same', '2x', '10x'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌳🦋', question: 'What is edge effect in ecology?', options: ['Habitat boundary impacts', 'Center areas', 'No effect', 'Weather pattern'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌍💚', question: 'How many biodiversity hotspots exist?', options: ['36', '5', '100', '3'], correct: 0},
            {topic: 'Biodiversity', emoji: '🐼⚠️', question: 'What is ex-situ conservation?', options: ['Outside natural habitat', 'In wild', 'No conservation', 'Destruction'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌊🐠', question: 'What is the Coral Triangle?', options: ['Marine biodiversity center', 'Shape only', 'Empty ocean', 'One reef'], correct: 0},
            {topic: 'Biodiversity', emoji: '🦅🦉', question: 'What is taxonomic diversity?', options: ['Variety of taxonomic groups', 'One group', 'No groups', 'Name only'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌺🌸', question: 'What is island biogeography?', options: ['Species-area relationship', 'Vacation spots', 'No theory', 'Weather study'], correct: 0},
            {topic: 'Biodiversity', emoji: '🐝🦋', question: 'What is colony collapse disorder?', options: ['Bee hive die-off', 'Ant problem', 'Plant disease', 'Weather event'], correct: 0},
            {topic: 'Biodiversity', emoji: '🏞️🌲', question: 'What percentage of land is protected globally?', options: ['~15%', '50%', '1%', '90%'], correct: 0},
            {topic: 'Biodiversity', emoji: '🌍🔗', question: 'What is the Convention on Biological Diversity?', options: ['International treaty', 'Book', 'Company', 'Animal'], correct: 0}
        ],
        extreme: [
            {topic: 'Biodiversity', emoji: '🦁🐘', question: 'Name three levels of biodiversity', answer: 'Genetic, Species, Ecosystem'},
            {topic: 'Biodiversity', emoji: '🌳🦋', question: 'Name three causes of habitat loss', answer: 'Deforestation, Urbanization, Agriculture, Mining (any 3)'},
            {topic: 'Biodiversity', emoji: '🌍💚', question: 'Name three ecosystem services from biodiversity', answer: 'Pollination, Water purification, Climate regulation, Food (any 3)'},
            {topic: 'Biodiversity', emoji: '🐼⚠️', question: 'Name three endangered species', answer: 'Tigers, Rhinos, Elephants, Pandas, Gorillas, Whales (any 3)'},
            {topic: 'Biodiversity', emoji: '🌊🐠', question: 'Name three threats to marine biodiversity', answer: 'Overfishing, Pollution, Climate change, Acidification (any 3)'},
            {topic: 'Biodiversity', emoji: '🦅🦉', question: 'Name three conservation strategies', answer: 'Protected areas, Breeding programs, Habitat restoration, Anti-poaching (any 3)'},
            {topic: 'Biodiversity', emoji: '🌺🌸', question: 'Name three biodiversity hotspots', answer: 'Amazon, Madagascar, Southeast Asia, Mediterranean, Caribbean (any 3)'},
            {topic: 'Biodiversity', emoji: '🐝🦋', question: 'Name three important pollinators', answer: 'Bees, Butterflies, Birds, Bats, Moths (any 3)'},
            {topic: 'Biodiversity', emoji: '🏞️🌲', question: 'Name three types of protected areas', answer: 'National parks, Wildlife sanctuaries, Marine reserves, Biosphere reserves (any 3)'},
            {topic: 'Biodiversity', emoji: '🌍🔗', question: 'Name three benefits of biodiversity', answer: 'Ecosystem resilience, Medicine sources, Food security, Economic value (any 3)'}
        ]
    },
    9: { // Chapter 9: Air Quality
        easy: [
            {topic: 'Air', emoji: '💨🌍', question: 'Air is essential for life.', options: ['True', 'False'], correct: 0},
            {topic: 'Air', emoji: '🏭💨', question: 'Factories pollute air.', options: ['True', 'False'], correct: 0},
            {topic: 'Air', emoji: '🚗💨', question: 'Cars emit pollution.', options: ['True', 'False'], correct: 0},
            {topic: 'Air', emoji: '🌳💚', question: 'Trees clean the air.', options: ['True', 'False'], correct: 0},
            {topic: 'Air', emoji: '🏙️🌫️', question: 'Smog is harmful.', options: ['True', 'False'], correct: 0},
            {topic: 'Air', emoji: '😷🤧', question: 'Air pollution affects health.', options: ['True', 'False'], correct: 0},
            {topic: 'Air', emoji: '🌬️☁️', question: 'Wind moves pollution.', options: ['True', 'False'], correct: 0},
            {topic: 'Air', emoji: '🏠💨', question: 'Indoor air can be polluted.', options: ['True', 'False'], correct: 0},
            {topic: 'Air', emoji: '🔥💨', question: 'Burning things pollutes air.', options: ['True', 'False'], correct: 0},
            {topic: 'Air', emoji: '🌍💚', question: 'Clean air is a right.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Air', emoji: '💨🌍', question: 'What is air quality?', options: ['Condition of air', 'Temperature'], correct: 0},
            {topic: 'Air', emoji: '🏭💨', question: 'What is industrial emission?', options: ['Pollutants from factories', 'Natural air'], correct: 0},
            {topic: 'Air', emoji: '🚗💨', question: 'What is vehicular pollution?', options: ['Exhaust from vehicles', 'Clean air'], correct: 0},
            {topic: 'Air', emoji: '🌳💚', question: 'How do trees help air quality?', options: ['Absorb pollutants, produce oxygen', 'Create pollution'], correct: 0},
            {topic: 'Air', emoji: '🏙️🌫️', question: 'What is smog?', options: ['Fog mixed with pollution', 'Clean mist'], correct: 0},
            {topic: 'Air', emoji: '😷🤧', question: 'What health issues from air pollution?', options: ['Respiratory, heart disease', 'Perfect health'], correct: 0},
            {topic: 'Air', emoji: '🌬️☁️', question: 'What is atmospheric circulation?', options: ['Air movement patterns', 'Stationary air'], correct: 0},
            {topic: 'Air', emoji: '🏠💨', question: 'What is indoor air pollution?', options: ['Contaminants inside buildings', 'Outside only'], correct: 0},
            {topic: 'Air', emoji: '🔥💨', question: 'What is biomass burning?', options: ['Wood, crop burning', 'No burning'], correct: 0},
            {topic: 'Air', emoji: '🌍💚', question: 'What is the Clean Air Act?', options: ['US air quality law', 'Car brand'], correct: 0}
        ],
        hard: [
            {topic: 'Air', emoji: '💨🌍', question: 'What is the Air Quality Index?', options: ['Pollution level measure', 'Temperature', 'Humidity'], correct: 0},
            {topic: 'Air', emoji: '🏭💨', question: 'What does PM2.5 measure?', options: ['Fine particles <2.5 microns', 'Time', 'Temperature'], correct: 0},
            {topic: 'Air', emoji: '🚗💨', question: 'What is the main car pollutant?', options: ['Nitrogen oxides', 'Water', 'Oxygen'], correct: 0},
            {topic: 'Air', emoji: '🌳💚', question: 'What is the urban heat island effect?', options: ['Cities hotter than surroundings', 'Cooler cities', 'No difference'], correct: 0},
            {topic: 'Air', emoji: '🏙️🌫️', question: 'What causes photochemical smog?', options: ['Sunlight on pollutants', 'Rain', 'Snow'], correct: 0},
            {topic: 'Air', emoji: '😷🤧', question: 'How many die from air pollution yearly?', options: ['~7 million', '1000', '100'], correct: 0},
            {topic: 'Air', emoji: '🌬️☁️', question: 'What is transboundary pollution?', options: ['Crosses borders', 'Stays local', 'No movement'], correct: 0},
            {topic: 'Air', emoji: '🏠💨', question: 'What is volatile organic compound?', options: ['Evaporates easily', 'Solid', 'Water'], correct: 0},
            {topic: 'Air', emoji: '🔥💨', question: 'What is black carbon?', options: ['Soot from burning', 'Clean air', 'Oxygen'], correct: 0},
            {topic: 'Air', emoji: '🌍💚', question: 'What is emission standard?', options: ['Legal pollution limit', 'No limit', 'Infinite'], correct: 0}
        ],
        expert: [
            {topic: 'Air', emoji: '💨🌍', question: 'What AQI value is considered unhealthy?', options: ['151-200', '0-50', '51-100', '500+'], correct: 0},
            {topic: 'Air', emoji: '🏭💨', question: 'What is a scrubber in industry?', options: ['Pollution control device', 'Cleaning tool', 'Worker', 'Product'], correct: 0},
            {topic: 'Air', emoji: '🚗💨', question: 'What is catalytic converter?', options: ['Reduces vehicle emissions', 'Increases power', 'Fuel tank', 'Radio'], correct: 0},
            {topic: 'Air', emoji: '🌳💚', question: 'How much CO2 does a tree absorb yearly?', options: ['~48 lbs', '1 lb', '1000 lbs', '0 lbs'], correct: 0},
            {topic: 'Air', emoji: '🏙️🌫️', question: 'What is the Great Smog of London?', options: ['1952 deadly fog event', 'Modern issue', 'Myth', 'Weather'], correct: 0},
            {topic: 'Air', emoji: '😷🤧', question: 'What is the leading air pollution health risk?', options: ['PM2.5 exposure', 'Noise', 'Light', 'Temperature'], correct: 0},
            {topic: 'Air', emoji: '🌬️☁️', question: 'What is atmospheric inversion?', options: ['Warm air traps cool air', 'Normal flow', 'No air', 'Wind'], correct: 0},
            {topic: 'Air', emoji: '🏠💨', question: 'What is sick building syndrome?', options: ['Health issues from indoor air', 'Structural damage', 'Old building', 'Paint color'], correct: 0},
            {topic: 'Air', emoji: '🔥💨', question: 'What percentage of pollution from biomass burning?', options: ['~25% globally', '1%', '90%', '0%'], correct: 0},
            {topic: 'Air', emoji: '🌍💚', question: 'What is the National Ambient Air Quality Standards?', options: ['US EPA air limits', 'Temperature standard', 'Music', 'Food rule'], correct: 0}
        ],
        extreme: [
            {topic: 'Air', emoji: '💨🌍', question: 'Name the six criteria air pollutants (US EPA)', answer: 'PM, Ozone, CO, SO2, NO2, Lead'},
            {topic: 'Air', emoji: '🏭💨', question: 'Name three industrial air pollutants', answer: 'Sulfur dioxide, Nitrogen oxides, Particulates, VOCs (any 3)'},
            {topic: 'Air', emoji: '🚗💨', question: 'Name three strategies to reduce vehicle emissions', answer: 'Electric vehicles, Public transit, Catalytic converters, Carpooling (any 3)'},
            {topic: 'Air', emoji: '🌳💚', question: 'Name three ways plants improve air quality', answer: 'Absorb CO2, Produce oxygen, Filter particles, Cool air (any 3)'},
            {topic: 'Air', emoji: '🏙️🌫️', question: 'Name three cities with worst air quality', answer: 'Delhi, Beijing, Los Angeles, Mexico City, Dhaka (any 3)'},
            {topic: 'Air', emoji: '😷🤧', question: 'Name three health effects of air pollution', answer: 'Asthma, Heart disease, Lung cancer, Stroke (any 3)'},
            {topic: 'Air', emoji: '🌬️☁️', question: 'Name three factors affecting air dispersion', answer: 'Wind speed, Temperature inversion, Topography, Humidity (any 3)'},
            {topic: 'Air', emoji: '🏠💨', question: 'Name three indoor air pollutants', answer: 'Radon, Mold, VOCs, CO, Tobacco smoke (any 3)'},
            {topic: 'Air', emoji: '🔥💨', question: 'Name three sources of particulate matter', answer: 'Vehicles, Industry, Burning, Dust, Construction (any 3)'},
            {topic: 'Air', emoji: '🌍💚', question: 'Name three air quality monitoring methods', answer: 'Ground stations, Satellites, Sensors, Air sampling (any 3)'}
        ]
    },
    10: { // Chapter 10: Carbon Footprint
        easy: [
            {topic: 'Carbon', emoji: '👣💨', question: 'Carbon footprint measures emissions.', options: ['True', 'False'], correct: 0},
            {topic: 'Carbon', emoji: '🚗💨', question: 'Driving increases carbon footprint.', options: ['True', 'False'], correct: 0},
            {topic: 'Carbon', emoji: '🏠⚡', question: 'Electricity use creates emissions.', options: ['True', 'False'], correct: 0},
            {topic: 'Carbon', emoji: '✈️💨', question: 'Flying produces a lot of CO2.', options: ['True', 'False'], correct: 0},
            {topic: 'Carbon', emoji: '🥩🍔', question: 'Meat has high carbon footprint.', options: ['True', 'False'], correct: 0},
            {topic: 'Carbon', emoji: '♻️💚', question: 'Recycling reduces footprint.', options: ['True', 'False'], correct: 0},
            {topic: 'Carbon', emoji: '🌳🌲', question: 'Trees absorb carbon.', options: ['True', 'False'], correct: 0},
            {topic: 'Carbon', emoji: '💡⚡', question: 'LED bulbs save energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Carbon', emoji: '🚴‍♂️💚', question: 'Biking has low footprint.', options: ['True', 'False'], correct: 0},
            {topic: 'Carbon', emoji: '🌍💚', question: 'We can reduce our footprint.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Carbon', emoji: '👣💨', question: 'What does carbon footprint measure?', options: ['Total CO2 emissions', 'Shoe size'], correct: 0},
            {topic: 'Carbon', emoji: '🚗💨', question: 'What is carbon offset?', options: ['Compensate for emissions', 'Increase emissions'], correct: 0},
            {topic: 'Carbon', emoji: '🏠⚡', question: 'What uses most home energy?', options: ['Heating and cooling', 'TV'], correct: 0},
            {topic: 'Carbon', emoji: '✈️💨', question: 'How much CO2 per flight mile?', options: ['~0.4 kg', '0.01 kg'], correct: 0},
            {topic: 'Carbon', emoji: '🥩🍔', question: 'Why is beef high footprint?', options: ['Methane from cows', 'Low emissions'], correct: 0},
            {topic: 'Carbon', emoji: '♻️💚', question: 'How does recycling help?', options: ['Saves energy, reduces production', 'No benefit'], correct: 0},
            {topic: 'Carbon', emoji: '🌳🌲', question: 'What does carbon sequestration do?', options: ['Capturing and storing CO2', 'Releasing CO2'], correct: 0},
            {topic: 'Carbon', emoji: '💡⚡', question: 'How much energy do LEDs save?', options: ['75% vs incandescent', '10%'], correct: 0},
            {topic: 'Carbon', emoji: '🚴‍♂️💚', question: 'What is sustainable transport?', options: ['Low-emission travel', 'Any travel'], correct: 0},
            {topic: 'Carbon', emoji: '🌍💚', question: 'What is carbon neutrality?', options: ['Net zero emissions', 'High emissions'], correct: 0}
        ],
        hard: [
            {topic: 'Carbon', emoji: '👣💨', question: 'What is average US carbon footprint?', options: ['~16 tons per year', '1 ton', '100 tons'], correct: 0},
            {topic: 'Carbon', emoji: '🚗💨', question: 'What is scope 1, 2, 3 emissions?', options: ['Direct, indirect, supply chain', 'Past, present, future'], correct: 0},
            {topic: 'Carbon', emoji: '🏠⚡', question: 'What is embodied carbon?', options: ['Emissions to make product', 'Future emissions', 'No emissions'], correct: 0},
            {topic: 'Carbon', emoji: '✈️💨', question: 'What is radiative forcing from aviation?', options: ['Extra warming at altitude', 'Cooling effect', 'No effect'], correct: 0},
            {topic: 'Carbon', emoji: '🥩🍔', question: 'How much more emissions: beef vs beans?', options: ['~20x more', 'Same', 'Less'], correct: 0},
            {topic: 'Carbon', emoji: '♻️💚', question: 'What does circular economy aim for?', options: ['Eliminate waste', 'Linear use', 'Disposable'], correct: 0},
            {topic: 'Carbon', emoji: '🌳🌲', question: 'How much CO2 does a tree absorb lifetime?', options: ['~1 ton', '10 kg', '100 tons'], correct: 0},
            {topic: 'Carbon', emoji: '💡⚡', question: 'What is energy efficiency rating?', options: ['Energy use performance', 'Color', 'Price'], correct: 0},
            {topic: 'Carbon', emoji: '🚴‍♂️💚', question: 'What is modal shift?', options: ['Change transport mode', 'Gear shift', 'No change'], correct: 0},
            {topic: 'Carbon', emoji: '🌍💚', question: 'What is the 2-ton challenge?', options: ['Personal footprint goal', 'Weight loss', 'Lifting'], correct: 0}
        ],
        expert: [
            {topic: 'Carbon', emoji: '👣💨', question: 'What is life cycle assessment?', options: ['Total environmental impact', 'Age measurement', 'Biography', 'Health check'], correct: 0},
            {topic: 'Carbon', emoji: '🚗💨', question: 'What is the EPA emission factor for gasoline?', options: ['~8.9 kg CO2/gallon', '1 kg', '100 kg', '0.1 kg'], correct: 0},
            {topic: 'Carbon', emoji: '🏠⚡', question: 'What is Passivhaus standard?', options: ['Ultra-low energy building', 'Normal house', 'Abandoned', 'Factory'], correct: 0},
            {topic: 'Carbon', emoji: '✈️💨', question: 'What percentage of global emissions from aviation?', options: ['~2-3%', '50%', '0.1%', '75%'], correct: 0},
            {topic: 'Carbon', emoji: '🥩🍔', question: 'What is the carbon intensity of beef?', options: ['~27 kg CO2/kg', '1 kg', '100 kg', '0.1 kg'], correct: 0},
            {topic: 'Carbon', emoji: '♻️💚', question: 'What is industrial symbiosis?', options: ['Waste = resource', 'Competition', 'No interaction', 'Conflict'], correct: 0},
            {topic: 'Carbon', emoji: '🌳🌲', question: 'What is blue carbon?', options: ['Ocean/coastal carbon storage', 'Sky color', 'Lake', 'Ice'], correct: 0},
            {topic: 'Carbon', emoji: '💡⚡', question: 'What is demand-side management?', options: ['Optimize energy consumption', 'Supply only', 'Ignore demand', 'Maximum use'], correct: 0},
            {topic: 'Carbon', emoji: '🚴‍♂️💚', question: 'What is mobility as a service?', options: ['Integrated transport options', 'Car ownership', 'One mode only', 'No transport'], correct: 0},
            {topic: 'Carbon', emoji: '🌍💚', question: 'What is science-based target?', options: ['Emission goal aligned with climate', 'Random number', 'No target', 'Marketing'], correct: 0}
        ],
        extreme: [
            {topic: 'Carbon', emoji: '👣💨', question: 'Calculate CO2 from 100-mile car trip (25 mpg)', answer: '~35.6 kg CO2 (100 miles / 25 mpg × 8.9 kg/gal)'},
            {topic: 'Carbon', emoji: '🚗💨', question: 'Name three ways to reduce transportation footprint', answer: 'Public transit, Carpool, Electric vehicle, Bike, Walk (any 3)'},
            {topic: 'Carbon', emoji: '🏠⚡', question: 'Name three home energy efficiency upgrades', answer: 'Insulation, LED bulbs, Efficient appliances, Solar panels (any 3)'},
            {topic: 'Carbon', emoji: '✈️💨', question: 'Name three alternatives to flying', answer: 'Train, Video conference, Drive, Bus (any 3)'},
            {topic: 'Carbon', emoji: '🥩🍔', question: 'Name three low-carbon protein sources', answer: 'Beans, Lentils, Tofu, Nuts, Eggs (any 3)'},
            {topic: 'Carbon', emoji: '♻️💚', question: 'Name three Rs to reduce footprint', answer: 'Reduce, Reuse, Recycle, Refuse, Repair (any 3)'},
            {topic: 'Carbon', emoji: '🌳🌲', question: 'Name three carbon sequestration methods', answer: 'Reforestation, Soil management, Ocean fertilization, Direct air capture (any 3)'},
            {topic: 'Carbon', emoji: '💡⚡', question: 'List three renewable energy types', answer: 'Solar, Wind, Hydro, Geothermal, Biomass (any 3)'},
            {topic: 'Carbon', emoji: '🚴‍♂️💚', question: 'Rank by carbon footprint: car, bus, train, bike', answer: 'Car highest, Bus, Train, Bike lowest (zero)'},
            {topic: 'Carbon', emoji: '🌍💚', question: 'List three major emission sectors', answer: 'Energy, Transportation, Industry, Agriculture (any 3)'}
        ]
    },
    11: { // Chapter 11: Ocean Conservation
        easy: [
            {topic: 'Ocean', emoji: '🌊💙', question: 'Oceans cover most of Earth.', options: ['True', 'False'], correct: 0},
            {topic: 'Ocean', emoji: '🐟🐠', question: 'Fish live in the ocean.', options: ['True', 'False'], correct: 0},
            {topic: 'Ocean', emoji: '🗑️🌊', question: 'Plastic pollutes oceans.', options: ['True', 'False'], correct: 0},
            {topic: 'Ocean', emoji: '🐢🐙', question: 'Marine life is diverse.', options: ['True', 'False'], correct: 0},
            {topic: 'Ocean', emoji: '🪸🐠', question: 'Coral reefs are important.', options: ['True', 'False'], correct: 0},
            {topic: 'Ocean', emoji: '🌊🌡️', question: 'Oceans are getting warmer.', options: ['True', 'False'], correct: 0},
            {topic: 'Ocean', emoji: '🎣⚠️', question: 'Overfishing is a problem.', options: ['True', 'False'], correct: 0},
            {topic: 'Ocean', emoji: '🌊💚', question: 'We should protect oceans.', options: ['True', 'False'], correct: 0},
            {topic: 'Ocean', emoji: '🐋🐬', question: 'Whales and dolphins are mammals.', options: ['True', 'False'], correct: 0},
            {topic: 'Ocean', emoji: '🌊☀️', question: 'Oceans affect climate.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ocean', emoji: '🌊💙', question: 'What percentage of Earth is ocean?', options: ['~70%', '30%'], correct: 0},
            {topic: 'Ocean', emoji: '🐟🐠', question: 'What is marine biodiversity?', options: ['Variety of ocean life', 'One species'], correct: 0},
            {topic: 'Ocean', emoji: '🗑️🌊', question: 'What does marine debris refer to?', options: ['Trash in oceans', 'Natural seaweed'], correct: 0},
            {topic: 'Ocean', emoji: '🐢🐙', question: 'What causes ocean acidification?', options: ['Ocean becoming acidic', 'Ocean getting salty'], correct: 0},
            {topic: 'Ocean', emoji: '🪸🐠', question: 'What are coral reefs?', options: ['Underwater ecosystems', 'Rocks only'], correct: 0},
            {topic: 'Ocean', emoji: '🌊🌡️', question: 'Why are oceans warming?', options: ['Climate change', 'Natural only'], correct: 0},
            {topic: 'Ocean', emoji: '🎣⚠️', question: 'What is overfishing?', options: ['Taking too many fish', 'Not enough fishing'], correct: 0},
            {topic: 'Ocean', emoji: '🌊💚', question: 'What is marine protected area?', options: ['Conservation zone', 'Fishing zone'], correct: 0},
            {topic: 'Ocean', emoji: '🐋🐬', question: 'Why protect marine mammals?', options: ['Endangered, ecosystem role', 'No reason'], correct: 0},
            {topic: 'Ocean', emoji: '🌊☀️', question: 'How do oceans regulate climate?', options: ['Absorb heat and CO2', 'No effect'], correct: 0}
        ],
        hard: [
            {topic: 'Ocean', emoji: '🌊💙', question: 'How much oxygen is produced by oceans?', options: ['~50-80%', '5%', '100%'], correct: 0},
            {topic: 'Ocean', emoji: '🐟🐠', question: 'What is the ocean twilight zone?', options: ['Mesopelagic layer', 'Surface only', 'Beach area'], correct: 0},
            {topic: 'Ocean', emoji: '🗑️🌊', question: 'How much plastic enters oceans yearly?', options: ['8-12 million tons', '1 ton', '100 tons'], correct: 0},
            {topic: 'Ocean', emoji: '🐢🐙', question: 'How much has ocean pH decreased?', options: ['0.1 units', '5 units', 'No change'], correct: 0},
            {topic: 'Ocean', emoji: '🪸🐠', question: 'What percentage of coral reefs are threatened?', options: ['~75%', '10%', '100%'], correct: 0},
            {topic: 'Ocean', emoji: '🌊🌡️', question: 'How much ocean heat has increased?', options: ['~90% of warming', '10%', '0%'], correct: 0},
            {topic: 'Ocean', emoji: '🎣⚠️', question: 'What percentage of fish stocks are overfished?', options: ['~35%', '5%', '90%'], correct: 0},
            {topic: 'Ocean', emoji: '🌊💚', question: 'What is the goal for marine protection?', options: ['30% by 2030', '5%', '100%'], correct: 0},
            {topic: 'Ocean', emoji: '🐋🐬', question: 'What is bycatch?', options: ['Unintended catch', 'Target fish', 'No catch'], correct: 0},
            {topic: 'Ocean', emoji: '🌊☀️', question: 'What is the thermohaline circulation?', options: ['Global ocean conveyor', 'Local current', 'No movement'], correct: 0}
        ],
        expert: [
            {topic: 'Ocean', emoji: '🌊💙', question: 'What is the average ocean depth?', options: ['~3,700 meters', '100 meters', '10,000 meters', '50 meters'], correct: 0},
            {topic: 'Ocean', emoji: '🐟🐠', question: 'What is the Dead Zone?', options: ['Low oxygen area', 'Deep trench', 'Warm current', 'Reef'], correct: 0},
            {topic: 'Ocean', emoji: '🗑️🌊', question: 'What is microplastic size?', options: ['<5mm', '<1cm', '<10cm', '<1m'], correct: 0},
            {topic: 'Ocean', emoji: '🐢🐙', question: 'How much CO2 have oceans absorbed?', options: ['~30% of emissions', '5%', '90%', '0%'], correct: 0},
            {topic: 'Ocean', emoji: '🪸🐠', question: 'What is coral bleaching?', options: ['Coral loses algae', 'Coral grows', 'Coral migrates', 'Coral eats'], correct: 0},
            {topic: 'Ocean', emoji: '🌊🌡️', question: 'What is ocean stratification?', options: ['Layer separation', 'Mixed water', 'Freezing', 'Evaporation'], correct: 0},
            {topic: 'Ocean', emoji: '🎣⚠️', question: 'What is IUU fishing?', options: ['Illegal, unreported, unregulated', 'Sustainable method', 'Sport fishing', 'No fishing'], correct: 0},
            {topic: 'Ocean', emoji: '🌊💚', question: 'What is blue economy?', options: ['Sustainable ocean use', 'Deep sea mining', 'All extraction', 'No use'], correct: 0},
            {topic: 'Ocean', emoji: '🐋🐬', question: 'What is the main threat to cetaceans?', options: ['Ship strikes and nets', 'Natural predators', 'Old age', 'Nothing'], correct: 0},
            {topic: 'Ocean', emoji: '🌊☀️', question: 'What is El Niño?', options: ['Pacific warming pattern', 'Atlantic storm', 'Arctic ice', 'River flow'], correct: 0}
        ],
        extreme: [
            {topic: 'Ocean', emoji: '🌊💙', question: 'Name the five ocean basins', answer: 'Pacific, Atlantic, Indian, Arctic, Southern'},
            {topic: 'Ocean', emoji: '🐟🐠', question: 'Name three threats to marine life', answer: 'Pollution, Overfishing, Climate change, Habitat loss (any 3)'},
            {topic: 'Ocean', emoji: '🗑️🌊', question: 'List three origins of ocean plastic', answer: 'Rivers, Fishing gear, Beaches, Ships, Landfills (any 3)'},
            {topic: 'Ocean', emoji: '🐢🐙', question: 'Name three impacts of ocean acidification', answer: 'Shell dissolution, Coral damage, Food web disruption, Fish behavior (any 3)'},
            {topic: 'Ocean', emoji: '🪸🐠', question: 'Name three types of coral reef ecosystems', answer: 'Fringing, Barrier, Atoll reefs'},
            {topic: 'Ocean', emoji: '🌊🌡️', question: 'Name three consequences of ocean warming', answer: 'Sea level rise, Coral bleaching, Species migration, Storm intensity (any 3)'},
            {topic: 'Ocean', emoji: '🎣⚠️', question: 'Name three sustainable fishing practices', answer: 'Catch limits, Marine reserves, Selective gear, Certification (any 3)'},
            {topic: 'Ocean', emoji: '🌊💚', question: 'Name three ocean conservation strategies', answer: 'Marine protected areas, Sustainable fishing, Pollution reduction, Restoration (any 3)'},
            {topic: 'Ocean', emoji: '🐋🐬', question: 'Name three endangered marine mammals', answer: 'Vaquita, Right whale, Monk seal, Manatee (any 3)'},
            {topic: 'Ocean', emoji: '🌊☀️', question: 'Name three ocean currents', answer: 'Gulf Stream, Kuroshio, California, Antarctic Circumpolar (any 3)'}
        ]
    },
    12: { // Chapter 12: Green Technology
        easy: [
            {topic: 'Technology', emoji: '💚📱', question: 'Green tech helps environment.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '☀️🔋', question: 'Solar panels make electricity.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '🚗⚡', question: 'Electric cars are cleaner.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '💡🌱', question: 'LED lights save energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '♻️💻', question: 'Electronics can be recycled.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '🏠🌿', question: 'Green buildings use less energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '💨⚡', question: 'Wind turbines generate power.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '🔋♻️', question: 'Batteries can be recharged.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '🌍💻', question: 'Technology can solve problems.', options: ['True', 'False'], correct: 0},
            {topic: 'Technology', emoji: '📲💚', question: 'Apps can help sustainability.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Technology', emoji: '💚📱', question: 'What is green technology?', options: ['Eco-friendly innovation', 'Any technology'], correct: 0},
            {topic: 'Technology', emoji: '☀️🔋', question: 'How do solar panels work?', options: ['Convert light to electricity', 'Store water'], correct: 0},
            {topic: 'Technology', emoji: '🚗⚡', question: 'What is an EV?', options: ['Electric vehicle', 'Energy voltage'], correct: 0},
            {topic: 'Technology', emoji: '💡🌱', question: 'What is smart home technology?', options: ['Automated efficiency', 'Regular home'], correct: 0},
            {topic: 'Technology', emoji: '♻️💻', question: 'What is e-waste recycling?', options: ['Electronic waste recovery', 'Paper recycling'], correct: 0},
            {topic: 'Technology', emoji: '🏠🌿', question: 'What is LEED certification?', options: ['Green building standard', 'Car rating'], correct: 0},
            {topic: 'Technology', emoji: '💨⚡', question: 'What is wind energy capacity factor?', options: ['Average output percentage', 'Maximum size'], correct: 0},
            {topic: 'Technology', emoji: '🔋♻️', question: 'What is battery recycling?', options: ['Recover materials', 'Throw away'], correct: 0},
            {topic: 'Technology', emoji: '🌍💻', question: 'What is cleantech?', options: ['Clean technology sector', 'Cleaning tools'], correct: 0},
            {topic: 'Technology', emoji: '📲💚', question: 'What is sustainable IT?', options: ['Eco-friendly computing', 'Any computer'], correct: 0}
        ],
        hard: [
            {topic: 'Technology', emoji: '💚📱', question: 'What is cradle-to-cradle design?', options: ['Circular product lifecycle', 'One-time use', 'Disposal focus'], correct: 0},
            {topic: 'Technology', emoji: '☀️🔋', question: 'What is solar panel efficiency?', options: ['~15-22%', '90%', '5%'], correct: 0},
            {topic: 'Technology', emoji: '🚗⚡', question: 'What is regenerative braking?', options: ['Recovers energy', 'Wastes energy', 'No braking'], correct: 0},
            {topic: 'Technology', emoji: '💡🌱', question: 'What is the Internet of Things for environment?', options: ['Connected sensors', 'Regular internet', 'No connection'], correct: 0},
            {topic: 'Technology', emoji: '♻️💻', question: 'What percentage of e-waste is properly recycled?', options: ['~20%', '90%', '100%'], correct: 0},
            {topic: 'Technology', emoji: '🏠🌿', question: 'What is passive solar design?', options: ['Natural heating/cooling', 'Active systems only', 'No design'], correct: 0},
            {topic: 'Technology', emoji: '💨⚡', question: 'What is offshore wind power?', options: ['Ocean-based turbines', 'Land turbines', 'No power'], correct: 0},
            {topic: 'Technology', emoji: '🔋♻️', question: 'What is a lithium-ion battery?', options: ['Rechargeable battery type', 'Disposable', 'No battery'], correct: 0},
            {topic: 'Technology', emoji: '🌍💻', question: 'What is carbon capture technology?', options: ['Removes CO2', 'Adds CO2', 'No effect'], correct: 0},
            {topic: 'Technology', emoji: '📲💚', question: 'What is green computing?', options: ['Energy-efficient IT', 'Any computer use', 'No computing'], correct: 0}
        ],
        expert: [
            {topic: 'Technology', emoji: '💚📱', question: 'What is biomimicry in technology?', options: ['Nature-inspired design', 'Random design', 'Synthetic only', 'No inspiration'], correct: 0},
            {topic: 'Technology', emoji: '☀️🔋', question: 'What is perovskite solar cell?', options: ['New solar technology', 'Old method', 'Not solar', 'Battery'], correct: 0},
            {topic: 'Technology', emoji: '🚗⚡', question: 'What is battery electric vehicle range?', options: ['~200-400 miles typical', '10 miles', '2000 miles', 'Infinite'], correct: 0},
            {topic: 'Technology', emoji: '💡🌱', question: 'What is smart grid technology?', options: ['Intelligent power distribution', 'Regular grid', 'No grid', 'Manual only'], correct: 0},
            {topic: 'Technology', emoji: '♻️💻', question: 'What is urban mining for electronics?', options: ['Recovering metals from e-waste', 'Traditional mining', 'No mining', 'Coal mining'], correct: 0},
            {topic: 'Technology', emoji: '🏠🌿', question: 'What is net-zero energy building?', options: ['Produces as much as uses', 'Uses more', 'No energy', 'Wastes energy'], correct: 0},
            {topic: 'Technology', emoji: '💨⚡', question: 'What is capacity factor for wind?', options: ['~35% average', '100%', '5%', '90%'], correct: 0},
            {topic: 'Technology', emoji: '🔋♻️', question: 'What is solid-state battery?', options: ['Next-gen battery tech', 'Liquid battery', 'Old technology', 'No battery'], correct: 0},
            {topic: 'Technology', emoji: '🌍💻', question: 'What is direct air capture?', options: ['Remove CO2 from air', 'Add CO2', 'Capture water', 'No capture'], correct: 0},
            {topic: 'Technology', emoji: '📲💚', question: 'What is data center PUE?', options: ['Power usage effectiveness', 'Price unit', 'Processing speed', 'Storage size'], correct: 0}
        ],
        extreme: [
            {topic: 'Technology', emoji: '💚📱', question: 'Name three green technology sectors', answer: 'Renewable energy, Electric vehicles, Green building, Waste tech (any 3)'},
            {topic: 'Technology', emoji: '☀️🔋', question: 'List three solar technology types', answer: 'Photovoltaic, Solar thermal, Concentrated solar power'},
            {topic: 'Technology', emoji: '🚗⚡', question: 'Name three benefits of electric vehicles', answer: 'Zero emissions, Lower operating cost, Quiet, Efficient (any 3)'},
            {topic: 'Technology', emoji: '💡🌱', question: 'Name three smart home energy features', answer: 'Smart thermostat, LED automation, Energy monitoring, Solar integration (any 3)'},
            {topic: 'Technology', emoji: '♻️💻', question: 'Name three valuable materials in electronics', answer: 'Gold, Silver, Copper, Rare earths, Cobalt (any 3)'},
            {topic: 'Technology', emoji: '🏠🌿', question: 'Name three green building features', answer: 'Solar panels, Insulation, Efficient HVAC, Green roof (any 3)'},
            {topic: 'Technology', emoji: '💨⚡', question: 'Name three wind energy advantages', answer: 'Renewable, Clean, Cost-effective, Scalable (any 3)'},
            {topic: 'Technology', emoji: '🔋♻️', question: 'Name three battery technologies', answer: 'Lithium-ion, Solid-state, Flow battery, Sodium-ion (any 3)'},
            {topic: 'Technology', emoji: '🌍💻', question: 'Name three carbon removal technologies', answer: 'Direct air capture, Biochar, Ocean fertilization, Enhanced weathering (any 3)'},
            {topic: 'Technology', emoji: '📲💚', question: 'Name three ways to reduce digital carbon footprint', answer: 'Efficient devices, Cloud optimization, Dark mode, Unsubscribe (any 3)'}
        ]
    },
    13: { // Chapter 13: Environmental Policy
        easy: [
            {topic: 'Policy', emoji: '📜🌍', question: 'Environmental laws protect nature.', options: ['True', 'False'], correct: 0},
            {topic: 'Policy', emoji: '⚖️🌱', question: 'Governments make environmental rules.', options: ['True', 'False'], correct: 0},
            {topic: 'Policy', emoji: '🌍🤝', question: 'Countries work together on climate.', options: ['True', 'False'], correct: 0},
            {topic: 'Policy', emoji: '💰♻️', question: 'Taxes can encourage recycling.', options: ['True', 'False'], correct: 0},
            {topic: 'Policy', emoji: '🏭⚖️', question: 'Factories must follow pollution rules.', options: ['True', 'False'], correct: 0},
            {topic: 'Policy', emoji: '🌳📜', question: 'National parks are protected by law.', options: ['True', 'False'], correct: 0},
            {topic: 'Policy', emoji: '🚫🗑️', question: 'Some plastics are banned.', options: ['True', 'False'], correct: 0},
            {topic: 'Policy', emoji: '🌍💚', question: 'Citizens can influence policy.', options: ['True', 'False'], correct: 0},
            {topic: 'Policy', emoji: '📊🌱', question: 'Environmental data guides decisions.', options: ['True', 'False'], correct: 0},
            {topic: 'Policy', emoji: '⚡📜', question: 'Energy policies affect emissions.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Policy', emoji: '📜🌍', question: 'What is environmental policy?', options: ['Rules to protect nature', 'Any rule'], correct: 0},
            {topic: 'Policy', emoji: '⚖️🌱', question: 'What is environmental law?', options: ['Legal framework for protection', 'Business law'], correct: 0},
            {topic: 'Policy', emoji: '🌍🤝', question: 'What does the Paris Agreement address?', options: ['Climate change treaty', 'Trade deal'], correct: 0},
            {topic: 'Policy', emoji: '💰♻️', question: 'What is a carbon tax?', options: ['Fee on emissions', 'Income tax'], correct: 0},
            {topic: 'Policy', emoji: '🏭⚖️', question: 'What is cap and trade?', options: ['Emission limit system', 'Stock market'], correct: 0},
            {topic: 'Policy', emoji: '🌳📜', question: 'What is the Endangered Species Act?', options: ['US wildlife protection law', 'Hunting law'], correct: 0},
            {topic: 'Policy', emoji: '🚫🗑️', question: 'What is Extended Producer Responsibility?', options: ['Makers responsible for disposal', 'Buyer pays'], correct: 0},
            {topic: 'Policy', emoji: '🌍💚', question: 'What is environmental advocacy?', options: ['Supporting nature protection', 'Opposing laws'], correct: 0},
            {topic: 'Policy', emoji: '📊🌱', question: 'What is environmental impact assessment?', options: ['Study project effects', 'Skip review'], correct: 0},
            {topic: 'Policy', emoji: '⚡📜', question: 'What is a renewable energy mandate?', options: ['Required clean energy', 'Optional only'], correct: 0}
        ],
        hard: [
            {topic: 'Policy', emoji: '📜🌍', question: 'What is the precautionary principle?', options: ['Act despite uncertainty', 'Wait for proof', 'Ignore risks'], correct: 0},
            {topic: 'Policy', emoji: '⚖️🌱', question: 'What does the Clean Air Act regulate?', options: ['US air pollution law', 'Water law', 'Land law'], correct: 0},
            {topic: 'Policy', emoji: '🌍🤝', question: 'What is the Kyoto Protocol?', options: ['Climate treaty', 'Trade agreement', 'War treaty'], correct: 0},
            {topic: 'Policy', emoji: '💰♻️', question: 'What is green subsidy?', options: ['Financial support for eco-projects', 'Tax increase', 'Penalty'], correct: 0},
            {topic: 'Policy', emoji: '🏭⚖️', question: 'What is environmental regulation?', options: ['Rules limiting pollution', 'No limits', 'Voluntary only'], correct: 0},
            {topic: 'Policy', emoji: '🌳📜', question: 'What is CITES?', options: ['Wildlife trade treaty', 'Climate deal', 'Ocean law'], correct: 0},
            {topic: 'Policy', emoji: '🚫🗑️', question: 'What is single-use plastic ban?', options: ['Prohibit disposable plastics', 'Require plastic', 'No law'], correct: 0},
            {topic: 'Policy', emoji: '🌍💚', question: 'What is environmental justice?', options: ['Fair distribution of impacts', 'Court system', 'No fairness'], correct: 0},
            {topic: 'Policy', emoji: '📊🌱', question: 'What is the polluter pays principle?', options: ['Polluter covers costs', 'Public pays', 'No cost'], correct: 0},
            {topic: 'Policy', emoji: '⚡📜', question: 'What is feed-in tariff?', options: ['Payment for renewable energy', 'Import tax', 'Fine'], correct: 0}
        ],
        expert: [
            {topic: 'Policy', emoji: '📜🌍', question: 'What is the Montreal Protocol about?', options: ['Ozone layer protection', 'Climate only', 'Ocean protection', 'Trade'], correct: 0},
            {topic: 'Policy', emoji: '⚖️🌱', question: 'What is the National Environmental Policy Act?', options: ['US environmental review law', 'State law', 'City law', 'No law'], correct: 0},
            {topic: 'Policy', emoji: '🌍🤝', question: 'How many countries signed Paris Agreement?', options: ['~195', '10', '50', '5'], correct: 0},
            {topic: 'Policy', emoji: '💰♻️', question: 'What is carbon pricing?', options: ['Cost on emissions', 'Free emissions', 'No pricing', 'Energy cost'], correct: 0},
            {topic: 'Policy', emoji: '🏭⚖️', question: 'What is best available technology requirement?', options: ['Use cleanest methods', 'Any method', 'Cheapest only', 'No requirement'], correct: 0},
            {topic: 'Policy', emoji: '🌳📜', question: 'How much land has protected status globally?', options: ['~15%', '50%', '2%', '90%'], correct: 0},
            {topic: 'Policy', emoji: '🚫🗑️', question: 'How many countries ban single-use plastics?', options: ['~70+', '5', '0', '200'], correct: 0},
            {topic: 'Policy', emoji: '🌍💚', question: 'What is the Aarhus Convention?', options: ['Public participation rights', 'Climate treaty', 'Trade deal', 'War convention'], correct: 0},
            {topic: 'Policy', emoji: '📊🌱', question: 'What is strategic environmental assessment?', options: ['Policy-level review', 'Project only', 'No assessment', 'Financial audit'], correct: 0},
            {topic: 'Policy', emoji: '⚡📜', question: 'What is renewable portfolio standard?', options: ['Required renewable percentage', 'Optional target', 'No standard', 'Fossil fuel quota'], correct: 0}
        ],
        extreme: [
            {topic: 'Policy', emoji: '📜🌍', question: 'Name three major environmental treaties', answer: 'Paris Agreement, Montreal Protocol, Convention on Biological Diversity (any 3)'},
            {topic: 'Policy', emoji: '⚖️🌱', question: 'Name three environmental law types', answer: 'Air quality, Water protection, Wildlife, Waste, Land use (any 3)'},
            {topic: 'Policy', emoji: '🌍🤝', question: 'Name three UN environmental goals', answer: 'Climate action, Clean water, Life on land, Life below water (any 3)'},
            {topic: 'Policy', emoji: '💰♻️', question: 'Name three economic instruments for environment', answer: 'Carbon tax, Subsidies, Cap-and-trade, Eco-labeling (any 3)'},
            {topic: 'Policy', emoji: '🏭⚖️', question: 'Name three pollution control approaches', answer: 'Regulations, Market-based, Voluntary, Technology standards (any 3)'},
            {topic: 'Policy', emoji: '🌳📜', question: 'Name three US environmental laws', answer: 'Clean Air Act, Clean Water Act, ESA, NEPA (any 3)'},
            {topic: 'Policy', emoji: '🚫🗑️', question: 'Name three plastic policy approaches', answer: 'Bans, Taxes, EPR, Deposit schemes (any 3)'},
            {topic: 'Policy', emoji: '🌍💚', question: 'Name three ways citizens influence policy', answer: 'Voting, Advocacy, Lawsuits, Public comment (any 3)'},
            {topic: 'Policy', emoji: '📊🌱', question: 'Name three components of environmental assessment', answer: 'Baseline study, Impact prediction, Mitigation, Monitoring (any 3)'},
            {topic: 'Policy', emoji: '⚡📜', question: 'Name three renewable energy policies', answer: 'Feed-in tariffs, RPS, Tax credits, Net metering (any 3)'}
        ]
    },
    14: { // Chapter 14: Sustainable Living
        easy: [
            {topic: 'Living', emoji: '🏠💚', question: 'We can live more sustainably.', options: ['True', 'False'], correct: 0},
            {topic: 'Living', emoji: '🚶‍♂️🚴', question: 'Walking is better than driving.', options: ['True', 'False'], correct: 0},
            {topic: 'Living', emoji: '🛍️♻️', question: 'Reusable bags help environment.', options: ['True', 'False'], correct: 0},
            {topic: 'Living', emoji: '🥗🌱', question: 'Eating local food is sustainable.', options: ['True', 'False'], correct: 0},
            {topic: 'Living', emoji: '💡🔌', question: 'Turning off lights saves energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Living', emoji: '🚿💧', question: 'Short showers save water.', options: ['True', 'False'], correct: 0},
            {topic: 'Living', emoji: '♻️🗑️', question: 'Separating waste helps recycling.', options: ['True', 'False'], correct: 0},
            {topic: 'Living', emoji: '👕🔄', question: 'Buying used clothes is sustainable.', options: ['True', 'False'], correct: 0},
            {topic: 'Living', emoji: '🌱🏡', question: 'Growing food at home helps.', options: ['True', 'False'], correct: 0},
            {topic: 'Living', emoji: '📱♻️', question: 'Keeping phones longer reduces waste.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Living', emoji: '🏠💚', question: 'What is sustainable living?', options: ['Minimize environmental impact', 'Any lifestyle'], correct: 0},
            {topic: 'Living', emoji: '🚶‍♂️🚴', question: 'What is active transportation?', options: ['Walking, biking', 'Driving only'], correct: 0},
            {topic: 'Living', emoji: '🛍️♻️', question: 'What is zero waste lifestyle?', options: ['Minimize landfill waste', 'Create more waste'], correct: 0},
            {topic: 'Living', emoji: '🥗🌱', question: 'What is farm-to-table?', options: ['Direct from farm', 'Imported food'], correct: 0},
            {topic: 'Living', emoji: '💡🔌', question: 'What is energy conservation?', options: ['Using less energy', 'Using more'], correct: 0},
            {topic: 'Living', emoji: '🚿💧', question: 'What is water-wise living?', options: ['Conserve water', 'Waste water'], correct: 0},
            {topic: 'Living', emoji: '♻️🗑️', question: 'What is composting at home?', options: ['Organic waste recycling', 'Throwing away'], correct: 0},
            {topic: 'Living', emoji: '👕🔄', question: 'What is slow fashion?', options: ['Quality, lasting clothes', 'Fast consumption'], correct: 0},
            {topic: 'Living', emoji: '🌱🏡', question: 'What is urban gardening?', options: ['Growing food in cities', 'No gardening'], correct: 0},
            {topic: 'Living', emoji: '📱♻️', question: 'What is planned obsolescence?', options: ['Designed to fail', 'Long-lasting'], correct: 0}
        ],
        hard: [
            {topic: 'Living', emoji: '🏠💚', question: 'What is carbon neutral living?', options: ['Balance emissions', 'High emissions', 'No emissions'], correct: 0},
            {topic: 'Living', emoji: '🚶‍♂️🚴', question: 'How much CO2 saved by biking vs driving 10 miles?', options: ['~5 kg', '0 kg', '50 kg'], correct: 0},
            {topic: 'Living', emoji: '🛍️♻️', question: 'What is the true cost of fast fashion?', options: ['Environmental and social', 'Price only', 'No cost'], correct: 0},
            {topic: 'Living', emoji: '🥗🌱', question: 'What is plant-based diet impact?', options: ['Lower carbon footprint', 'Higher', 'Same'], correct: 0},
            {topic: 'Living', emoji: '💡🔌', question: 'What is vampire power?', options: ['Standby energy use', 'No power', 'Maximum power'], correct: 0},
            {topic: 'Living', emoji: '🚿💧', question: 'How much water in 5-minute shower?', options: ['~10-25 gallons', '1 gallon', '100 gallons'], correct: 0},
            {topic: 'Living', emoji: '♻️🗑️', question: 'What percentage of household waste is organic?', options: ['~30%', '5%', '90%'], correct: 0},
            {topic: 'Living', emoji: '👕🔄', question: 'What is textile recycling rate?', options: ['~15%', '90%', '100%'], correct: 0},
            {topic: 'Living', emoji: '🌱🏡', question: 'What is permaculture gardening?', options: ['Sustainable design', 'Monoculture', 'No design'], correct: 0},
            {topic: 'Living', emoji: '📱♻️', question: 'What is right to repair movement?', options: ['Fix not replace', 'Always buy new', 'No repairs'], correct: 0}
        ],
        expert: [
            {topic: 'Living', emoji: '🏠💚', question: 'What is ecological footprint?', options: ['Resource use measure', 'Shoe size', 'Walking distance', 'House size'], correct: 0},
            {topic: 'Living', emoji: '🚶‍♂️🚴', question: 'What is the 15-minute city concept?', options: ['All needs nearby', 'Commute time', 'Speed limit', 'No concept'], correct: 0},
            {topic: 'Living', emoji: '🛍️♻️', question: 'What is product lifecycle thinking?', options: ['Cradle to grave impact', 'Buy only', 'No thinking', 'Price only'], correct: 0},
            {topic: 'Living', emoji: '🥗🌱', question: 'How much less emissions: vegan vs meat diet?', options: ['~50-70%', '10%', 'Same', 'More'], correct: 0},
            {topic: 'Living', emoji: '💡🔌', question: 'What is home energy audit?', options: ['Assess efficiency', 'Ignore waste', 'Increase use', 'No audit'], correct: 0},
            {topic: 'Living', emoji: '🚿💧', question: 'What is greywater system?', options: ['Reuse household water', 'Waste all', 'Drinking water', 'No system'], correct: 0},
            {topic: 'Living', emoji: '♻️🗑️', question: 'What is bokashi composting?', options: ['Fermentation method', 'Regular compost', 'No composting', 'Burning'], correct: 0},
            {topic: 'Living', emoji: '👕🔄', question: 'How many wears before washing jeans?', options: ['~5-10 or more', '1', 'Never', 'Daily'], correct: 0},
            {topic: 'Living', emoji: '🌱🏡', question: 'What is aquaponics?', options: ['Fish and plants together', 'Fish only', 'Plants only', 'No system'], correct: 0},
            {topic: 'Living', emoji: '📱♻️', question: 'What is modular phone design?', options: ['Replaceable parts', 'Fixed design', 'Disposable', 'No design'], correct: 0}
        ],
        extreme: [
            {topic: 'Living', emoji: '🏠💚', question: 'Name three pillars of sustainable living', answer: 'Environmental, Social, Economic sustainability'},
            {topic: 'Living', emoji: '🚶‍♂️🚴', question: 'Name three benefits of active transport', answer: 'Health, Lower emissions, Cost savings, Reduce congestion (any 3)'},
            {topic: 'Living', emoji: '🛍️♻️', question: 'Name the five Rs of sustainable consumption', answer: 'Refuse, Reduce, Reuse, Recycle, Rot'},
            {topic: 'Living', emoji: '🥗🌱', question: 'Name three sustainable diet principles', answer: 'Plant-based, Local, Seasonal, Minimal waste (any 3)'},
            {topic: 'Living', emoji: '💡🔌', question: 'Name three home energy saving actions', answer: 'LED bulbs, Unplug devices, Insulation, Efficient appliances (any 3)'},
            {topic: 'Living', emoji: '🚿💧', question: 'Name three water conservation actions', answer: 'Fix leaks, Short showers, Low-flow fixtures, Full loads (any 3)'},
            {topic: 'Living', emoji: '♻️🗑️', question: 'Name three home composting methods', answer: 'Bin composting, Worm composting, Bokashi, Trench (any 3)'},
            {topic: 'Living', emoji: '👕🔄', question: 'Name three sustainable fashion choices', answer: 'Buy used, Quality over quantity, Natural fibers, Repair (any 3)'},
            {topic: 'Living', emoji: '🌱🏡', question: 'Name three benefits of home gardening', answer: 'Fresh food, Lower emissions, Biodiversity, Mental health (any 3)'},
            {topic: 'Living', emoji: '📱♻️', question: 'Name three ways to extend device lifespan', answer: 'Repair, Upgrade, Protective case, Software updates (any 3)'}
        ]
    },
    15: { // Chapter 15: Urban Environment
        easy: [
            {topic: 'Urban', emoji: '🏙️🌿', question: 'Cities can be green.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🌳🏘️', question: 'Trees in cities are important.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🚇🚌', question: 'Public transit reduces pollution.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏢♻️', question: 'Buildings use a lot of energy.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🌆🌡️', question: 'Cities are hotter than countryside.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🚴‍♀️🛴', question: 'Bike lanes help reduce cars.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🏞️🏙️', question: 'Urban parks improve quality of life.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '💧🏙️', question: 'Cities use lots of water.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🗑️🏙️', question: 'Urban areas create much waste.', options: ['True', 'False'], correct: 0},
            {topic: 'Urban', emoji: '🌍🏘️', question: 'Most people live in cities.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Urban', emoji: '🏙️🌿', question: 'What is green infrastructure?', options: ['Natural systems in cities', 'Grey concrete'], correct: 0},
            {topic: 'Urban', emoji: '🌳🏘️', question: 'What is urban forestry?', options: ['Managing city trees', 'Rural forests'], correct: 0},
            {topic: 'Urban', emoji: '🚇🚌', question: 'What is transit-oriented development?', options: ['Build near transit', 'Car-dependent'], correct: 0},
            {topic: 'Urban', emoji: '🏢♻️', question: 'What is green building?', options: ['Sustainable construction', 'Green paint'], correct: 0},
            {topic: 'Urban', emoji: '🌆🌡️', question: 'What is urban heat island?', options: ['Cities warmer than surroundings', 'Cold cities'], correct: 0},
            {topic: 'Urban', emoji: '🚴‍♀️🛴', question: 'What is complete streets?', options: ['Safe for all users', 'Cars only'], correct: 0},
            {topic: 'Urban', emoji: '🏞️🏙️', question: 'What is pocket park?', options: ['Small urban green space', 'Large forest'], correct: 0},
            {topic: 'Urban', emoji: '💧🏙️', question: 'What is stormwater management?', options: ['Control urban runoff', 'Ignore water'], correct: 0},
            {topic: 'Urban', emoji: '🗑️🏙️', question: 'What is municipal waste?', options: ['City household trash', 'Industrial only'], correct: 0},
            {topic: 'Urban', emoji: '🌍🏘️', question: 'What is urbanization?', options: ['Population shift to cities', 'Rural growth'], correct: 0}
        ],
        hard: [
            {topic: 'Urban', emoji: '🏙️🌿', question: 'What is biophilic design?', options: ['Nature in architecture', 'No nature', 'Industrial only'], correct: 0},
            {topic: 'Urban', emoji: '🌳🏘️', question: 'What is urban tree canopy goal?', options: ['~40% coverage', '5%', '100%'], correct: 0},
            {topic: 'Urban', emoji: '🚇🚌', question: 'How much CO2 saved: bus vs car?', options: ['~50-70%', '10%', 'Same'], correct: 0},
            {topic: 'Urban', emoji: '🏢♻️', question: 'What percentage of energy in buildings?', options: ['~40%', '5%', '90%'], correct: 0},
            {topic: 'Urban', emoji: '🌆🌡️', question: 'How much hotter are cities?', options: ['1-7°F', '0°F', '50°F'], correct: 0},
            {topic: 'Urban', emoji: '🚴‍♀️🛴', question: 'What is protected bike lane?', options: ['Physically separated', 'Painted only', 'No protection'], correct: 0},
            {topic: 'Urban', emoji: '🏞️🏙️', question: 'What is the 10-minute walk standard?', options: ['Park within 10 min', '1 hour', 'No standard'], correct: 0},
            {topic: 'Urban', emoji: '💧🏙️', question: 'What is green roof benefit?', options: ['Absorb stormwater', 'No benefit', 'Increase runoff'], correct: 0},
            {topic: 'Urban', emoji: '🗑️🏙️', question: 'What is circular city concept?', options: ['Zero waste economy', 'Linear flow', 'Maximum waste'], correct: 0},
            {topic: 'Urban', emoji: '🌍🏘️', question: 'What percentage live in cities globally?', options: ['~55%', '10%', '100%'], correct: 0}
        ],
        expert: [
            {topic: 'Urban', emoji: '🏙️🌿', question: 'What is sponge city?', options: ['Absorb and reuse water', 'Impermeable surfaces', 'Dry city', 'No water'], correct: 0},
            {topic: 'Urban', emoji: '🌳🏘️', question: 'What is i-Tree assessment?', options: ['Urban forest evaluation', 'Tree age', 'Tree height', 'No assessment'], correct: 0},
            {topic: 'Urban', emoji: '🚇🚌', question: 'What is Bus Rapid Transit?', options: ['High-capacity bus system', 'Regular bus', 'No system', 'Private cars'], correct: 0},
            {topic: 'Urban', emoji: '🏢♻️', question: 'What is net-zero building?', options: ['Zero net energy', 'High energy', 'No building', 'Negative energy'], correct: 0},
            {topic: 'Urban', emoji: '🌆🌡️', question: 'What is cool pavement?', options: ['Reflects heat', 'Absorbs heat', 'Regular asphalt', 'No pavement'], correct: 0},
            {topic: 'Urban', emoji: '🚴‍♀️🛴', question: 'What is modal share?', options: ['Transportation mode percentage', 'Shared bikes', 'Car only', 'No data'], correct: 0},
            {topic: 'Urban', emoji: '🏞️🏙️', question: 'What is the High Line model?', options: ['Elevated park conversion', 'Underground park', 'Traditional park', 'No park'], correct: 0},
            {topic: 'Urban', emoji: '💧🏙️', question: 'What is rain garden?', options: ['Bioretention planting', 'Regular garden', 'Dry garden', 'No garden'], correct: 0},
            {topic: 'Urban', emoji: '🗑️🏙️', question: 'What is waste-to-energy facility?', options: ['Convert trash to power', 'Landfill only', 'Export waste', 'No facility'], correct: 0},
            {topic: 'Urban', emoji: '🌍🏘️', question: 'What is compact city strategy?', options: ['High density mixed-use', 'Sprawl', 'Low density', 'No strategy'], correct: 0}
        ],
        extreme: [
            {topic: 'Urban', emoji: '🏙️🌿', question: 'Name three green infrastructure types', answer: 'Green roofs, Rain gardens, Bioswales, Urban forests (any 3)'},
            {topic: 'Urban', emoji: '🌳🏘️', question: 'Name three urban forest benefits', answer: 'Air quality, Cooling, Stormwater, Mental health (any 3)'},
            {topic: 'Urban', emoji: '🚇🚌', question: 'Name three sustainable transport modes', answer: 'Walking, Biking, Transit, Carpooling (any 3)'},
            {topic: 'Urban', emoji: '🏢♻️', question: 'List three sustainable building features', answer: 'Solar panels, Insulation, Efficient HVAC, Daylighting (any 3)'},
            {topic: 'Urban', emoji: '🌆🌡️', question: 'Name three ways to reduce urban heat', answer: 'Trees, Green roofs, Cool pavement, Water features (any 3)'},
            {topic: 'Urban', emoji: '🚴‍♀️🛴', question: 'Name three complete streets elements', answer: 'Bike lanes, Wide sidewalks, Transit, Trees (any 3)'},
            {topic: 'Urban', emoji: '🏞️🏙️', question: 'Name three types of urban green space', answer: 'Parks, Gardens, Greenways, Plazas (any 3)'},
            {topic: 'Urban', emoji: '💧🏙️', question: 'Name three stormwater management strategies', answer: 'Rain gardens, Permeable pavement, Green roofs, Wetlands (any 3)'},
            {topic: 'Urban', emoji: '🗑️🏙️', question: 'Name three urban waste management approaches', answer: 'Recycling, Composting, Waste-to-energy, Reduction (any 3)'},
            {topic: 'Urban', emoji: '🌍🏘️', question: 'Name three sustainable city principles', answer: 'Compact, Connected, Clean, Collaborative (any 3)'}
        ]
    },
    16: { // Chapter 16: Conservation Biology
        easy: [
            {topic: 'Conservation', emoji: '🐾🌿', question: 'Conservation protects wildlife.', options: ['True', 'False'], correct: 0},
            {topic: 'Conservation', emoji: '🦏⚠️', question: 'Many animals need protection.', options: ['True', 'False'], correct: 0},
            {topic: 'Conservation', emoji: '🌳🔒', question: 'Protected areas help species.', options: ['True', 'False'], correct: 0},
            {topic: 'Conservation', emoji: '🐼💚', question: 'Endangered species can recover.', options: ['True', 'False'], correct: 0},
            {topic: 'Conservation', emoji: '🌍🔬', question: 'Science helps conservation.', options: ['True', 'False'], correct: 0},
            {topic: 'Conservation', emoji: '🦅🏞️', question: 'Habitats need protection.', options: ['True', 'False'], correct: 0},
            {topic: 'Conservation', emoji: '🌱🌲', question: 'Reforestation helps wildlife.', options: ['True', 'False'], correct: 0},
            {topic: 'Conservation', emoji: '🐢🥚', question: 'Breeding programs save species.', options: ['True', 'False'], correct: 0},
            {topic: 'Conservation', emoji: '🌊🐋', question: 'Marine reserves protect ocean life.', options: ['True', 'False'], correct: 0},
            {topic: 'Conservation', emoji: '👥🌿', question: 'People can help conservation.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Conservation', emoji: '🐾🌿', question: 'What is conservation biology?', options: ['Science of protecting life', 'Any biology'], correct: 0},
            {topic: 'Conservation', emoji: '🦏⚠️', question: 'What is keystone species?', options: ['Critical to ecosystem', 'Common animal'], correct: 0},
            {topic: 'Conservation', emoji: '🌳🔒', question: 'What is protected area?', options: ['Conservation zone', 'Unprotected land'], correct: 0},
            {topic: 'Conservation', emoji: '🐼💚', question: 'What is species recovery plan?', options: ['Strategy to save species', 'No plan'], correct: 0},
            {topic: 'Conservation', emoji: '🌍🔬', question: 'What is population viability analysis?', options: ['Extinction risk assessment', 'Count animals'], correct: 0},
            {topic: 'Conservation', emoji: '🦅🏞️', question: 'What is habitat restoration?', options: ['Rebuild damaged areas', 'Destroy habitat'], correct: 0},
            {topic: 'Conservation', emoji: '🌱🌲', question: 'What is corridor conservation?', options: ['Connect habitats', 'Isolate areas'], correct: 0},
            {topic: 'Conservation', emoji: '🐢🥚', question: 'What is captive breeding?', options: ['Breed in facilities', 'Wild only'], correct: 0},
            {topic: 'Conservation', emoji: '🌊🐋', question: 'What is a marine protected area?', options: ['Ocean conservation zone', 'Fishing ground'], correct: 0},
            {topic: 'Conservation', emoji: '👥🌿', question: 'What is community-based conservation?', options: ['Local people involved', 'Top-down only'], correct: 0}
        ],
        hard: [
            {topic: 'Conservation', emoji: '🐾🌿', question: 'What is minimum viable population?', options: ['Lowest for survival', 'Any number', 'Maximum'], correct: 0},
            {topic: 'Conservation', emoji: '🦏⚠️', question: 'What is a trophic cascade?', options: ['Top predator effects', 'Bottom only', 'No effect'], correct: 0},
            {topic: 'Conservation', emoji: '🌳🔒', question: 'What is the global conservation target?', options: ['~30% goal', '5%', '100%'], correct: 0},
            {topic: 'Conservation', emoji: '🐼💚', question: 'What is IUCN Red List status?', options: ['Threat classification', 'Color chart', 'No system'], correct: 0},
            {topic: 'Conservation', emoji: '🌍🔬', question: 'What is genetic bottleneck?', options: ['Loss of diversity', 'Increase diversity', 'No change'], correct: 0},
            {topic: 'Conservation', emoji: '🦅🏞️', question: 'What is ecosystem engineer species?', options: ['Modifies habitat', 'No effect', 'Destroys only'], correct: 0},
            {topic: 'Conservation', emoji: '🌱🌲', question: 'What is assisted migration?', options: ['Help species relocate', 'Natural only', 'No movement'], correct: 0},
            {topic: 'Conservation', emoji: '🐢🥚', question: 'What is genetic rescue?', options: ['Add genetic diversity', 'Isolate genes', 'No action'], correct: 0},
            {topic: 'Conservation', emoji: '🌊🐋', question: 'What is no-take zone?', options: ['No fishing allowed', 'Fishing encouraged', 'Any activity'], correct: 0},
            {topic: 'Conservation', emoji: '👥🌿', question: 'What is traditional ecological knowledge?', options: ['Indigenous wisdom', 'Modern only', 'No knowledge'], correct: 0}
        ],
        expert: [
            {topic: 'Conservation', emoji: '🐾🌿', question: 'What is the 50/500 rule?', options: ['Minimum population genetics', 'Age rule', 'Distance rule', 'No rule'], correct: 0},
            {topic: 'Conservation', emoji: '🦏⚠️', question: 'What is umbrella species concept?', options: ['Protect many by protecting one', 'One species only', 'No concept', 'Random selection'], correct: 0},
            {topic: 'Conservation', emoji: '🌳🔒', question: 'What is IUCN protected area category?', options: ['Classification system', 'Single type', 'No categories', 'Size only'], correct: 0},
            {topic: 'Conservation', emoji: '🐼💚', question: 'What is extinction vortex?', options: ['Positive feedback to extinction', 'Reverse direction', 'No effect', 'Static'], correct: 0},
            {topic: 'Conservation', emoji: '🌍🔬', question: 'What is effective population size?', options: ['Breeding individuals', 'Total count', 'Maximum possible', 'Zero'], correct: 0},
            {topic: 'Conservation', emoji: '🦅🏞️', question: 'What does rewilding involve?', options: ['Restore natural processes', 'Remove all animals', 'Intensive management', 'No change'], correct: 0},
            {topic: 'Conservation', emoji: '🌱🌲', question: 'What is edge effect?', options: ['Habitat boundary impacts', 'Core area', 'No effect', 'Color'], correct: 0},
            {topic: 'Conservation', emoji: '🐢🥚', question: 'What is head-starting?', options: ['Raise young, release adults', 'Wild from birth', 'Keep all', 'No intervention'], correct: 0},
            {topic: 'Conservation', emoji: '🌊🐋', question: 'What is marine spatial planning?', options: ['Ocean use zoning', 'Random use', 'No planning', 'Land only'], correct: 0},
            {topic: 'Conservation', emoji: '👥🌿', question: 'What is CBNRM?', options: ['Community-based resource management', 'Central control', 'No management', 'Corporate only'], correct: 0}
        ],
        extreme: [
            {topic: 'Conservation', emoji: '🐾🌿', question: 'Name three conservation biology principles', answer: 'Diversity has value, Ecological complexity, Evolution continues, Humans part of nature (any 3)'},
            {topic: 'Conservation', emoji: '🦏⚠️', question: 'Name three types of keystone species', answer: 'Predators, Ecosystem engineers, Mutualists'},
            {topic: 'Conservation', emoji: '🌳🔒', question: 'Name three protected area types', answer: 'National parks, Wilderness, Wildlife refuges, Marine reserves (any 3)'},
            {topic: 'Conservation', emoji: '🐼💚', question: 'Name three recovery plan elements', answer: 'Threat assessment, Goals, Actions, Monitoring (any 3)'},
            {topic: 'Conservation', emoji: '🌍🔬', question: 'Name three threats to genetic diversity', answer: 'Small population, Inbreeding, Genetic drift, Bottleneck (any 3)'},
            {topic: 'Conservation', emoji: '🦅🏞️', question: 'Name three habitat restoration methods', answer: 'Replanting, Remove invasives, Reintroduce species, Reconnect (any 3)'},
            {topic: 'Conservation', emoji: '🌱🌲', question: 'Name three landscape connectivity strategies', answer: 'Wildlife corridors, Stepping stones, Matrix management (any 3)'},
            {topic: 'Conservation', emoji: '🐢🥚', question: 'Name three ex-situ conservation methods', answer: 'Captive breeding, Seed banks, Zoos, Botanical gardens (any 3)'},
            {topic: 'Conservation', emoji: '🌊🐋', question: 'Name three marine conservation tools', answer: 'MPAs, Fishing regulations, Species protection, Restoration (any 3)'},
            {topic: 'Conservation', emoji: '👥🌿', question: 'Name three benefits of community conservation', answer: 'Local knowledge, Sustainable use, Economic benefits, Long-term support (any 3)'}
        ]
    },
    17: { // Chapter 17: Environmental Education
        easy: [
            {topic: 'Education', emoji: '📚🌍', question: 'Learning about environment is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '👨‍🏫🌱', question: 'Schools teach environmental topics.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '🌳🔍', question: 'Field trips help learn about nature.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '💚📖', question: 'Everyone can learn sustainability.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '🌍👶', question: 'Children should learn about Earth.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '📺🌿', question: 'Media spreads environmental awareness.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '🏫♻️', question: 'Schools can be eco-friendly.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '🌱🎨', question: 'Art can teach environmental lessons.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '👥💬', question: 'Discussion helps understanding.', options: ['True', 'False'], correct: 0},
            {topic: 'Education', emoji: '🌍💡', question: 'Knowledge leads to action.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Education', emoji: '📚🌍', question: 'What is environmental education?', options: ['Learning about nature and sustainability', 'Any education'], correct: 0},
            {topic: 'Education', emoji: '👨‍🏫🌱', question: 'What is outdoor education?', options: ['Learning in nature', 'Classroom only'], correct: 0},
            {topic: 'Education', emoji: '🌳🔍', question: 'What is citizen science?', options: ['Public participates in research', 'Scientists only'], correct: 0},
            {topic: 'Education', emoji: '💚📖', question: 'What is sustainability literacy?', options: ['Understanding sustainability', 'Reading only'], correct: 0},
            {topic: 'Education', emoji: '🌍👶', question: 'What is nature deficit disorder?', options: ['Lack of outdoor experience', 'Medical disease'], correct: 0},
            {topic: 'Education', emoji: '📺🌿', question: 'What is environmental communication?', options: ['Share environmental info', 'No communication'], correct: 0},
            {topic: 'Education', emoji: '🏫♻️', question: 'What is green school?', options: ['Eco-friendly operations', 'Green paint'], correct: 0},
            {topic: 'Education', emoji: '🌱🎨', question: 'What is eco-art?', options: ['Art about environment', 'Any art'], correct: 0},
            {topic: 'Education', emoji: '👥💬', question: 'What is environmental workshop?', options: ['Hands-on learning session', 'Lecture only'], correct: 0},
            {topic: 'Education', emoji: '🌍💡', question: 'What is behavior change education?', options: ['Promote sustainable actions', 'No change'], correct: 0}
        ],
        hard: [
            {topic: 'Education', emoji: '📚🌍', question: 'What is the Belgrade Charter?', options: ['Environmental education framework', 'Treaty', 'Building'], correct: 0},
            {topic: 'Education', emoji: '👨‍🏫🌱', question: 'What is place-based education?', options: ['Learn from local environment', 'Generic curriculum'], correct: 0},
            {topic: 'Education', emoji: '🌳🔍', question: 'What is bioblitz?', options: ['Species inventory event', 'Storm', 'No event'], correct: 0},
            {topic: 'Education', emoji: '💚📖', question: 'What is systems thinking?', options: ['Understand connections', 'Linear thinking'], correct: 0},
            {topic: 'Education', emoji: '🌍👶', question: 'What is forest school?', options: ['Outdoor learning program', 'Traditional school'], correct: 0},
            {topic: 'Education', emoji: '📺🌿', question: 'What is climate communication?', options: ['Explain climate science', 'No communication'], correct: 0},
            {topic: 'Education', emoji: '🏫♻️', question: 'What is LEED for Schools?', options: ['Green building certification', 'Test score'], correct: 0},
            {topic: 'Education', emoji: '🌱🎨', question: 'What is land art?', options: ['Sculpture with nature', 'Regular art'], correct: 0},
            {topic: 'Education', emoji: '👥💬', question: 'What is environmental justice education?', options: ['Teach equity issues', 'Ignore justice'], correct: 0},
            {topic: 'Education', emoji: '🌍💡', question: 'What is action competence?', options: ['Ability to create change', 'No action'], correct: 0}
        ],
        expert: [
            {topic: 'Education', emoji: '📚🌍', question: 'What is the Tbilisi Declaration?', options: ['1977 environmental education goals', 'Recent document', 'No declaration', 'Trade treaty'], correct: 0},
            {topic: 'Education', emoji: '👨‍🏫🌱', question: 'What is inquiry-based learning?', options: ['Student-driven exploration', 'Lecture only', 'No questions', 'Memorization'], correct: 0},
            {topic: 'Education', emoji: '🌳🔍', question: 'What is phenology?', options: ['Study seasonal patterns', 'Plant names', 'Rock study', 'Weather'], correct: 0},
            {topic: 'Education', emoji: '💚📖', question: 'What is transformative learning?', options: ['Change worldview', 'Surface learning', 'No change', 'Rote memory'], correct: 0},
            {topic: 'Education', emoji: '🌍👶', question: 'What is the Last Child in the Woods?', options: ['Book on nature deficit', 'Movie', 'Song', 'Place'], correct: 0},
            {topic: 'Education', emoji: '📺🌿', question: 'What is environmental literacy?', options: ['Knowledge and action capacity', 'Reading only', 'No literacy', 'Math skills'], correct: 0},
            {topic: 'Education', emoji: '🏫♻️', question: 'What is carbon-neutral campus?', options: ['Net-zero emissions school', 'High emissions', 'No goal', 'Average'], correct: 0},
            {topic: 'Education', emoji: '🌱🎨', question: 'What is ecological aesthetics?', options: ['Beauty in nature connection', 'Appearance only', 'No aesthetics', 'Artificial'], correct: 0},
            {topic: 'Education', emoji: '👥💬', question: 'What is participatory action research?', options: ['Community-driven study', 'Lab only', 'No participation', 'Solo work'], correct: 0},
            {topic: 'Education', emoji: '🌍💡', question: 'What is the UN Decade of ESD?', options: ['Education for sustainable development', 'Regular decade', 'No program', 'Trade decade'], correct: 0}
        ],
        extreme: [
            {topic: 'Education', emoji: '📚🌍', question: 'Name three environmental education goals', answer: 'Awareness, Knowledge, Attitudes, Skills, Participation (any 3)'},
            {topic: 'Education', emoji: '👨‍🏫🌱', question: 'Name three outdoor learning benefits', answer: 'Health, Engagement, Systems thinking, Connection to nature (any 3)'},
            {topic: 'Education', emoji: '🌳🔍', question: 'Name three citizen science platforms', answer: 'iNaturalist, eBird, Zooniverse, GLOBE (any 3)'},
            {topic: 'Education', emoji: '💚📖', question: 'Name three sustainability competencies', answer: 'Systems thinking, Anticipatory, Normative, Strategic, Interpersonal (any 3)'},
            {topic: 'Education', emoji: '🌍👶', question: 'Name three nature connection activities', answer: 'Hiking, Gardening, Wildlife watching, Camping (any 3)'},
            {topic: 'Education', emoji: '📺🌿', question: 'Name three environmental documentaries', answer: 'Planet Earth, Our Planet, Chasing Ice, Before the Flood (any 3)'},
            {topic: 'Education', emoji: '🏫♻️', question: 'Name three green school practices', answer: 'Recycling, Energy efficiency, Gardens, Green curriculum (any 3)'},
            {topic: 'Education', emoji: '🌱🎨', question: 'Name three environmental artists', answer: 'Andy Goldsworthy, Christo, Agnes Denes, Maya Lin (any 3)'},
            {topic: 'Education', emoji: '👥💬', question: 'Name three teaching methods for environment', answer: 'Project-based, Experiential, Inquiry-based, Collaborative (any 3)'},
            {topic: 'Education', emoji: '🌍💡', question: 'Name three ways education drives change', answer: 'Awareness, Skills, Values, Critical thinking (any 3)'}
        ]
    },
    18: { // Chapter 18: Circular Economy
        easy: [
            {topic: 'Circular', emoji: '♻️🔄', question: 'Circular economy reduces waste.', options: ['True', 'False'], correct: 0},
            {topic: 'Circular', emoji: '🔄💚', question: 'We can reuse many things.', options: ['True', 'False'], correct: 0},
            {topic: 'Circular', emoji: '📦♻️', question: 'Packaging can be reused.', options: ['True', 'False'], correct: 0},
            {topic: 'Circular', emoji: '🛠️🔧', question: 'Repair is better than replace.', options: ['True', 'False'], correct: 0},
            {topic: 'Circular', emoji: '🌍🔄', question: 'Resources should be kept in use.', options: ['True', 'False'], correct: 0},
            {topic: 'Circular', emoji: '♻️🏭', question: 'Products can be remade.', options: ['True', 'False'], correct: 0},
            {topic: 'Circular', emoji: '🔄💡', question: 'Design affects recyclability.', options: ['True', 'False'], correct: 0},
            {topic: 'Circular', emoji: '🌱🔄', question: 'Nature works in cycles.', options: ['True', 'False'], correct: 0},
            {topic: 'Circular', emoji: '💼♻️', question: 'Businesses can be circular.', options: ['True', 'False'], correct: 0},
            {topic: 'Circular', emoji: '🔄🌍', question: 'Circular economy helps planet.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Circular', emoji: '♻️🔄', question: 'Describe circular economy', options: ['Eliminate waste concept', 'Linear use'], correct: 0},
            {topic: 'Circular', emoji: '🔄💚', question: 'What is product life extension?', options: ['Use longer', 'Quick disposal'], correct: 0},
            {topic: 'Circular', emoji: '📦♻️', question: 'What is reusable packaging?', options: ['Multiple use containers', 'Single use'], correct: 0},
            {topic: 'Circular', emoji: '🛠️🔧', question: 'What is right to repair?', options: ['Legal ability to fix', 'Must replace'], correct: 0},
            {topic: 'Circular', emoji: '🌍🔄', question: 'What is resource efficiency?', options: ['More output per input', 'Waste resources'], correct: 0},
            {topic: 'Circular', emoji: '♻️🏭', question: 'What is remanufacturing?', options: ['Rebuild to like-new', 'Make new'], correct: 0},
            {topic: 'Circular', emoji: '🔄💡', question: 'What is design for disassembly?', options: ['Easy to take apart', 'Permanent assembly'], correct: 0},
            {topic: 'Circular', emoji: '🌱🔄', question: 'What is biological cycle?', options: ['Return to nature', 'Synthetic only'], correct: 0},
            {topic: 'Circular', emoji: '💼♻️', question: 'What is product-as-service?', options: ['Lease not buy', 'Ownership only'], correct: 0},
            {topic: 'Circular', emoji: '🔄🌍', question: 'What does industrial symbiosis involve?', options: ['Share resources between firms', 'Compete only'], correct: 0}
        ],
        hard: [
            {topic: 'Circular', emoji: '♻️🔄', question: 'What are the 3 principles of circular economy?', options: ['Eliminate waste, circulate, regenerate', 'Take-make-dispose', 'Single use'], correct: 0},
            {topic: 'Circular', emoji: '🔄💚', question: 'What is performance economy?', options: ['Sell function not product', 'Sell products', 'No economy'], correct: 0},
            {topic: 'Circular', emoji: '📦♻️', question: 'What is loop logistics?', options: ['Return and reuse system', 'One-way shipping', 'No returns'], correct: 0},
            {topic: 'Circular', emoji: '🛠️🔧', question: 'What is modular design?', options: ['Replaceable components', 'Fixed design', 'No parts'], correct: 0},
            {topic: 'Circular', emoji: '🌍🔄', question: 'What is material passport?', options: ['Product composition data', 'Travel document', 'No data'], correct: 0},
            {topic: 'Circular', emoji: '♻️🏭', question: 'What is upcycling?', options: ['Increase value', 'Decrease value', 'No change'], correct: 0},
            {topic: 'Circular', emoji: '🔄💡', question: 'What is cradle-to-cradle?', options: ['Continuous reuse cycle', 'Cradle-to-grave', 'Disposal'], correct: 0},
            {topic: 'Circular', emoji: '🌱🔄', question: 'What is regenerative design?', options: ['Restore systems', 'Extract only', 'Degrade'], correct: 0},
            {topic: 'Circular', emoji: '💼♻️', question: 'What is sharing economy?', options: ['Access over ownership', 'Individual ownership', 'No sharing'], correct: 0},
            {topic: 'Circular', emoji: '🔄🌍', question: 'What is decoupling?', options: ['Growth without resource use', 'Direct link', 'No change'], correct: 0}
        ],
        expert: [
            {topic: 'Circular', emoji: '♻️🔄', question: 'What is Ellen MacArthur Foundation?', options: ['Leading circular economy org', 'Linear economy', 'No organization', 'Trading company'], correct: 0},
            {topic: 'Circular', emoji: '🔄💚', question: 'What is cascade use?', options: ['Sequential material use', 'Single use', 'No cascade', 'Parallel only'], correct: 0},
            {topic: 'Circular', emoji: '📦♻️', question: 'What does EPR mean?', options: ['Maker handles end-of-life', 'Consumer responsible', 'No responsibility', 'Government only'], correct: 0},
            {topic: 'Circular', emoji: '🛠️🔧', question: 'What is the repairability index?', options: ['Ease of repair score', 'Price', 'No index', 'Speed'], correct: 0},
            {topic: 'Circular', emoji: '🌍🔄', question: 'What is material flow analysis?', options: ['Track resource movement', 'No tracking', 'Financial only', 'One-time check'], correct: 0},
            {topic: 'Circular', emoji: '♻️🏭', question: 'What is closed-loop manufacturing?', options: ['Waste becomes input', 'Open loop', 'No loop', 'Linear'], correct: 0},
            {topic: 'Circular', emoji: '🔄💡', question: 'What is biomimicry in design?', options: ['Learn from nature', 'Ignore nature', 'Synthetic only', 'Random design'], correct: 0},
            {topic: 'Circular', emoji: '🌱🔄', question: 'What does nutrient cycling mean?', options: ['Biological material return', 'Waste disposal', 'No cycling', 'One-way'], correct: 0},
            {topic: 'Circular', emoji: '💼♻️', question: 'What is servitization?', options: ['Shift to service model', 'Product only', 'No services', 'Traditional'], correct: 0},
            {topic: 'Circular', emoji: '🔄🌍', question: 'What is circular business model?', options: ['Eliminate waste in operations', 'Linear model', 'Disposal focus', 'No model'], correct: 0}
        ],
        extreme: [
            {topic: 'Circular', emoji: '♻️🔄', question: 'Name the three core circular economy principles', answer: 'Eliminate waste, Circulate products, Regenerate nature'},
            {topic: 'Circular', emoji: '🔄💚', question: 'Name three product life extension strategies', answer: 'Repair, Refurbish, Remanufacture, Upgrade (any 3)'},
            {topic: 'Circular', emoji: '📦♻️', question: 'Name three packaging circular strategies', answer: 'Reusable, Refillable, Compostable, Recyclable (any 3)'},
            {topic: 'Circular', emoji: '🛠️🔧', question: 'Name three barriers to repair', answer: 'Design, Cost, Availability of parts, Skills (any 3)'},
            {topic: 'Circular', emoji: '🌍🔄', question: 'Name three material recovery methods', answer: 'Recycling, Composting, Anaerobic digestion, Pyrolysis (any 3)'},
            {topic: 'Circular', emoji: '♻️🏭', question: 'Name three circular economy business models', answer: 'Product-as-service, Sharing, Remanufacturing, Recycling (any 3)'},
            {topic: 'Circular', emoji: '🔄💡', question: 'Name three design for circularity principles', answer: 'Durability, Modularity, Recyclability, Non-toxic (any 3)'},
            {topic: 'Circular', emoji: '🌱🔄', question: 'Name three biological cycle materials', answer: 'Food, Wood, Cotton, Paper, Natural fibers (any 3)'},
            {topic: 'Circular', emoji: '💼♻️', question: 'Name three sharing economy examples', answer: 'Car sharing, Tool libraries, Co-working, Clothing rental (any 3)'},
            {topic: 'Circular', emoji: '🔄🌍', question: 'Name three benefits of circular economy', answer: 'Resource security, Job creation, Reduced emissions, Innovation (any 3)'}
        ]
    },
    19: { // Chapter 19: Indigenous Environmental Knowledge
        easy: [
            {topic: 'Indigenous', emoji: '👥🌍', question: 'Indigenous people have environmental knowledge.', options: ['True', 'False'], correct: 0},
            {topic: 'Indigenous', emoji: '🌱📚', question: 'Traditional knowledge is valuable.', options: ['True', 'False'], correct: 0},
            {topic: 'Indigenous', emoji: '🌲👣', question: 'Indigenous peoples lived sustainably.', options: ['True', 'False'], correct: 0},
            {topic: 'Indigenous', emoji: '🔥🌿', question: 'Traditional fire use managed forests.', options: ['True', 'False'], correct: 0},
            {topic: 'Indigenous', emoji: '🌍🤝', question: 'We can learn from indigenous wisdom.', options: ['True', 'False'], correct: 0},
            {topic: 'Indigenous', emoji: '💧🏔️', question: 'Indigenous peoples protect lands.', options: ['True', 'False'], correct: 0},
            {topic: 'Indigenous', emoji: '🦌🌲', question: 'Traditional hunting was sustainable.', options: ['True', 'False'], correct: 0},
            {topic: 'Indigenous', emoji: '🌾🌱', question: 'Indigenous agriculture preserved diversity.', options: ['True', 'False'], correct: 0},
            {topic: 'Indigenous', emoji: '⚖️🌍', question: 'Indigenous rights are important.', options: ['True', 'False'], correct: 0},
            {topic: 'Indigenous', emoji: '🔬🌿', question: 'Science and traditional knowledge can work together.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Indigenous', emoji: '👥🌍', question: 'What is TEK?', options: ['Indigenous environmental wisdom', 'Modern science only'], correct: 0},
            {topic: 'Indigenous', emoji: '🌱📚', question: 'What is intergenerational knowledge?', options: ['Passed through generations', 'One generation'], correct: 0},
            {topic: 'Indigenous', emoji: '🌲👣', question: 'What is land stewardship?', options: ['Caring for territory', 'Exploitation'], correct: 0},
            {topic: 'Indigenous', emoji: '🔥🌿', question: 'What is cultural burning?', options: ['Traditional fire management', 'Wildfire'], correct: 0},
            {topic: 'Indigenous', emoji: '🌍🤝', question: 'What is co-management?', options: ['Shared resource governance', 'Exclude indigenous'], correct: 0},
            {topic: 'Indigenous', emoji: '💧🏔️', question: 'What are indigenous protected areas?', options: ['Lands managed by indigenous peoples', 'Government only'], correct: 0},
            {topic: 'Indigenous', emoji: '🦌🌲', question: 'What is subsistence harvesting?', options: ['Take only what is needed', 'Commercial exploitation'], correct: 0},
            {topic: 'Indigenous', emoji: '🌾🌱', question: 'What is three sisters planting?', options: ['Corn, beans, squash together', 'Single crop'], correct: 0},
            {topic: 'Indigenous', emoji: '⚖️🌍', question: 'What is UNDRIP?', options: ['Indigenous rights declaration', 'Trade agreement'], correct: 0},
            {topic: 'Indigenous', emoji: '🔬🌿', question: 'What is two-eyed seeing?', options: ['Combine indigenous and Western knowledge', 'One view only'], correct: 0}
        ],
        hard: [
            {topic: 'Indigenous', emoji: '👥🌍', question: 'What percentage of biodiversity on indigenous lands?', options: ['~80%', '10%', '50%'], correct: 0},
            {topic: 'Indigenous', emoji: '🌱📚', question: 'What is oral tradition?', options: ['Knowledge passed verbally', 'Written only'], correct: 0},
            {topic: 'Indigenous', emoji: '🌲👣', question: 'What is the Seventh Generation principle?', options: ['Consider future impact', 'Present only'], correct: 0},
            {topic: 'Indigenous', emoji: '🔥🌿', question: 'How did indigenous burning benefit ecosystems?', options: ['Reduced fuel, increased diversity', 'Destroyed all'], correct: 0},
            {topic: 'Indigenous', emoji: '🌍🤝', question: 'What is free prior informed consent?', options: ['Indigenous approval required', 'No consultation'], correct: 0},
            {topic: 'Indigenous', emoji: '💧🏔️', question: 'What are indigenous territories?', options: ['Traditional lands', 'Any land'], correct: 0},
            {topic: 'Indigenous', emoji: '🦌🌲', question: 'What is the honorable harvest?', options: ['Take respectfully', 'Take everything'], correct: 0},
            {topic: 'Indigenous', emoji: '🌾🌱', question: 'What is milpa agriculture?', options: ['Diverse crop system', 'Monoculture'], correct: 0},
            {topic: 'Indigenous', emoji: '⚖️🌍', question: 'What are indigenous land rights?', options: ['Legal territorial claims', 'No rights'], correct: 0},
            {topic: 'Indigenous', emoji: '🔬🌿', question: 'What is biocultural diversity?', options: ['Link between culture and nature', 'Separate concepts'], correct: 0}
        ],
        expert: [
            {topic: 'Indigenous', emoji: '👥🌍', question: 'How many indigenous people worldwide?', options: ['~370-500 million', '10 million', '1 billion', '100,000'], correct: 0},
            {topic: 'Indigenous', emoji: '🌱📚', question: 'What is the precautionary principle in TEK?', options: ['Careful with unknown', 'Rush ahead'], correct: 0},
            {topic: 'Indigenous', emoji: '🌲👣', question: 'What is indigenous guardianship?', options: ['Cultural responsibility for land', 'Ownership only'], correct: 0},
            {topic: 'Indigenous', emoji: '🔥🌿', question: 'What is fire-stick farming?', options: ['Australian Aboriginal burning', 'Regular farming'], correct: 0},
            {topic: 'Indigenous', emoji: '🌍🤝', question: 'What is the Nagoya Protocol?', options: ['Benefit-sharing from genetic resources', 'Climate treaty'], correct: 0},
            {topic: 'Indigenous', emoji: '💧🏔️', question: 'What percentage of forest is in indigenous territories?', options: ['~36%', '5%', '90%', '1%'], correct: 0},
            {topic: 'Indigenous', emoji: '🦌🌲', question: 'What is seasonal round?', options: ['Annual resource use cycle', 'No pattern'], correct: 0},
            {topic: 'Indigenous', emoji: '🌾🌱', question: 'What is terra preta?', options: ['Amazon dark earth soil', 'Regular soil'], correct: 0},
            {topic: 'Indigenous', emoji: '⚖️🌍', question: 'What is ILO Convention 169?', options: ['Indigenous peoples rights', 'Labor law'], correct: 0},
            {topic: 'Indigenous', emoji: '🔬🌿', question: 'What is ethnobotany?', options: ['Study of plant-people relationships', 'Plant taxonomy'], correct: 0}
        ],
        extreme: [
            {topic: 'Indigenous', emoji: '👥🌍', question: 'Name three aspects of traditional ecological knowledge', answer: 'Knowledge, Practice, Belief, Worldview (any 3)'},
            {topic: 'Indigenous', emoji: '🌱📚', question: 'Name three ways TEK is transmitted', answer: 'Oral tradition, Observation, Experience, Ceremony (any 3)'},
            {topic: 'Indigenous', emoji: '🌲👣', question: 'Name three indigenous conservation practices', answer: 'Sacred sites, Seasonal harvest, Rotation, Habitat management (any 3)'},
            {topic: 'Indigenous', emoji: '🔥🌿', question: 'Name three benefits of cultural burning', answer: 'Reduce fuel, Promote growth, Habitat diversity, Food production (any 3)'},
            {topic: 'Indigenous', emoji: '🌍🤝', question: 'Name three principles of UNDRIP', answer: 'Self-determination, Land rights, FPIC, Cultural rights (any 3)'},
            {topic: 'Indigenous', emoji: '💧🏔️', question: 'Name three indigenous-managed conservation areas', answer: 'Alaska Native lands, Australian IPAs, Canadian territories (any 3)'},
            {topic: 'Indigenous', emoji: '🦌🌲', question: 'Name three sustainable harvesting principles', answer: 'Take only needed, Leave for others, Thank the resource, Reciprocity (any 3)'},
            {topic: 'Indigenous', emoji: '🌾🌱', question: 'Name three indigenous agricultural innovations', answer: 'Raised beds, Terracing, Polyculture, Seed saving (any 3)'},
            {topic: 'Indigenous', emoji: '⚖️🌍', question: 'Name three indigenous rights', answer: 'Land, Self-determination, Culture, FPIC (any 3)'},
            {topic: 'Indigenous', emoji: '🔬🌿', question: 'Name three ways to integrate TEK and science', answer: 'Co-research, Two-eyed seeing, Respect protocols, Benefit sharing (any 3)'}
        ]
    },
    20: { // Chapter 20: Future of Environment
        easy: [
            {topic: 'Future', emoji: '🌍🔮', question: 'The future depends on our actions.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '🌱💡', question: 'Innovation can solve problems.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '👨‍👩‍👧‍👦🌍', question: 'Everyone has a role in the future.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '🌳🌈', question: 'A green future is possible.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '🔄💚', question: 'Change is happening now.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '🌞⚡', question: 'Renewable energy is the future.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '🚀🌍', question: 'Technology helps sustainability.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '💪🌱', question: 'Young people drive change.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '🌍❤️', question: 'Hope is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '✨🌏', question: 'We can make a difference.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Future', emoji: '🌍🔮', question: 'What is sustainable development?', options: ['Meet needs without harming future', 'Unlimited growth'], correct: 0},
            {topic: 'Future', emoji: '🌱💡', question: 'What is green innovation?', options: ['Eco-friendly technology', 'Any invention'], correct: 0},
            {topic: 'Future', emoji: '👨‍👩‍👧‍👦🌍', question: 'What is environmental citizenship?', options: ['Responsible environmental behavior', 'No responsibility'], correct: 0},
            {topic: 'Future', emoji: '🌳🌈', question: 'What is the green economy?', options: ['Economic growth with sustainability', 'Traditional economy'], correct: 0},
            {topic: 'Future', emoji: '🔄💚', question: 'What is transition movement?', options: ['Community resilience initiatives', 'No change'], correct: 0},
            {topic: 'Future', emoji: '🌞⚡', question: 'What is energy transition?', options: ['Shift to renewables', 'Stay with fossil fuels'], correct: 0},
            {topic: 'Future', emoji: '🚀🌍', question: 'What is climate tech?', options: ['Technology for climate solutions', 'Any tech'], correct: 0},
            {topic: 'Future', emoji: '💪🌱', question: 'What is youth climate movement?', options: ['Young activists for climate', 'No movement'], correct: 0},
            {topic: 'Future', emoji: '🌍❤️', question: 'What is solastalgia?', options: ['Distress about environmental change', 'No feeling'], correct: 0},
            {topic: 'Future', emoji: '✨🌏', question: 'What is planetary health?', options: ['Human and Earth wellbeing', 'Humans only'], correct: 0}
        ],
        hard: [
            {topic: 'Future', emoji: '🌍🔮', question: 'What are the SDGs?', options: ['UN Sustainable Development Goals', 'Sports', 'No goals'], correct: 0},
            {topic: 'Future', emoji: '🌱💡', question: 'What is breakthrough technology?', options: ['Transformative innovation', 'Incremental change'], correct: 0},
            {topic: 'Future', emoji: '👨‍👩‍👧‍👦🌍', question: 'What is collective action?', options: ['Group working for change', 'Individual only'], correct: 0},
            {topic: 'Future', emoji: '🌳🌈', question: 'What is degrowth?', options: ['Reduce consumption', 'Infinite growth'], correct: 0},
            {topic: 'Future', emoji: '🔄💚', question: 'What is systems change?', options: ['Transform underlying structures', 'Surface fix'], correct: 0},
            {topic: 'Future', emoji: '🌞⚡', question: 'When could we be 100% renewable?', options: ['2030-2050 possible', '2200', 'Never'], correct: 0},
            {topic: 'Future', emoji: '🚀🌍', question: 'What is negative emissions technology?', options: ['Remove CO2 from air', 'Add CO2'], correct: 0},
            {topic: 'Future', emoji: '💪🌱', question: 'What is Fridays for Future?', options: ['Youth climate strikes', 'Day off'], correct: 0},
            {topic: 'Future', emoji: '🌍❤️', question: 'What is ecological grief?', options: ['Mourning environmental loss', 'No emotion'], correct: 0},
            {topic: 'Future', emoji: '✨🌏', question: 'What is the Anthropocene?', options: ['Human-dominated era', 'Past era'], correct: 0}
        ],
        expert: [
            {topic: 'Future', emoji: '🌍🔮', question: 'How many SDGs are there?', options: ['17', '5', '50', '100'], correct: 0},
            {topic: 'Future', emoji: '🌱💡', question: 'What is mission-oriented innovation?', options: ['Goal-directed research', 'Random discovery'], correct: 0},
            {topic: 'Future', emoji: '👨‍👩‍👧‍👦🌍', question: 'What is the commons?', options: ['Shared resources', 'Private property'], correct: 0},
            {topic: 'Future', emoji: '🌳🌈', question: 'What is doughnut economics?', options: ['Balance social and planetary boundaries', 'Growth only'], correct: 0},
            {topic: 'Future', emoji: '🔄💚', question: 'What is deep leverage point?', options: ['System paradigm shift', 'Surface intervention'], correct: 0},
            {topic: 'Future', emoji: '🌞⚡', question: 'What is sector coupling?', options: ['Integrate energy sectors', 'Separate sectors'], correct: 0},
            {topic: 'Future', emoji: '🚀🌍', question: 'What is carbon removal target by 2050?', options: ['~10 Gt CO2/year', '0', '1 Mt'], correct: 0},
            {topic: 'Future', emoji: '💪🌱', question: 'Who is Greta Thunberg?', options: ['Climate activist', 'Politician'], correct: 0},
            {topic: 'Future', emoji: '🌍❤️', question: 'What is active hope?', options: ['Engage despite uncertainty', 'Passive waiting'], correct: 0},
            {topic: 'Future', emoji: '✨🌏', question: 'What is the Great Transition?', options: ['Sustainability transformation', 'No change'], correct: 0}
        ],
        extreme: [
            {topic: 'Future', emoji: '🌍🔮', question: 'Name three SDG environmental goals', answer: 'Climate action, Life below water, Life on land, Clean water (any 3)'},
            {topic: 'Future', emoji: '🌱💡', question: 'Name three emerging green technologies', answer: 'Green hydrogen, Carbon capture, Advanced batteries, Synthetic biology (any 3)'},
            {topic: 'Future', emoji: '👨‍👩‍👧‍👦🌍', question: 'Name three environmental movements', answer: 'Climate strikes, Extinction Rebellion, Sunrise, 350.org (any 3)'},
            {topic: 'Future', emoji: '🌳🌈', question: 'Name three alternative economic models', answer: 'Circular economy, Doughnut economics, Degrowth, Wellbeing economy (any 3)'},
            {topic: 'Future', emoji: '🔄💚', question: 'Name three leverage points for change', answer: 'Paradigms, Goals, Rules, Feedback (any 3)'},
            {topic: 'Future', emoji: '🌞⚡', question: 'Name three pillars of energy transition', answer: 'Renewable energy, Energy efficiency, Electrification, Storage (any 3)'},
            {topic: 'Future', emoji: '🚀🌍', question: 'Name three climate solutions', answer: 'Renewable energy, Reforestation, Regenerative agriculture, Carbon removal (any 3)'},
            {topic: 'Future', emoji: '💪🌱', question: 'Name three youth climate leaders', answer: 'Greta Thunberg, Vanessa Nakate, Xiye Bastida, Autumn Peltier (any 3)'},
            {topic: 'Future', emoji: '🌍❤️', question: 'Name three sources of hope', answer: 'Renewable growth, Youth activism, Nature resilience, Innovation (any 3)'},
            {topic: 'Future', emoji: '✨🌏', question: 'Name three visions for 2050', answer: 'Carbon neutral, Nature positive, Circular economy, Climate resilient (any 3)'}
        ]
    }
    // Add more chapters
    // Add more chapters: 2, 3, 4... unlimited!
};

