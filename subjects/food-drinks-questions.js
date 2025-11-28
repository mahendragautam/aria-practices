/**
 * WPCode Snippet #5: Food & Drinks Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 10
 *
 * COPY ALL CODE BELOW
 */

const foodDrinksQuestions = {
    1: {
        easy: [
            {
                topic: "Fruits",
                emoji: "🍕🍔",
                question: "Are bananas yellow when ripe?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Beverages",
                emoji: "🍟🌭",
                question: "Is coffee a hot beverage?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pizza",
                emoji: "🍿🥨",
                question: "Does pizza originate from Italy?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Water",
                emoji: "🍩🍪",
                question: "Is water essential for survival?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chocolate",
                emoji: "🍰🎂",
                question: "Is chocolate made from cocoa beans?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Tea",
                emoji: "🧁🍮",
                question: "Does tea come from tea leaves?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Bread",
                emoji: "🍫🍬",
                question: "Is bread a baked food?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Juice",
                emoji: "🍭🍡",
                question: "Can juice be made from oranges?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Eggs",
                emoji: "🍦🍨",
                question: "Are eggs a breakfast food?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Milk",
                emoji: "🥤🧃",
                question: "Does milk come from cows?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Pasta",
                emoji: "☕🍵",
                question: "Is spaghetti a type of pasta?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Smoothies",
                emoji: "🥛🍼",
                question: "Are smoothies blended drinks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Sushi",
                emoji: "🍺🍻",
                question: "Is sushi always made with raw fish?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Lemonade",
                emoji: "🍷🍾",
                question: "Is lemonade made with lemons?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cheese",
                emoji: "🍹🍸",
                question: "Is cheese made from milk?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Soda",
                emoji: "🥗🥙",
                question: "Does soda contain carbonation?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tacos",
                emoji: "🌮🌯",
                question: "Are tacos from Mexico?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Hot Chocolate",
                emoji: "🍝🍝",
                question: "Is hot chocolate served cold?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Rice",
                emoji: "🍜🍲",
                question: "Is rice a grain?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Coconut Water",
                emoji: "🍱🍛",
                question: "Does coconut water come from coconuts?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Truffles",
                emoji: "🍣🍤",
                question: "Are truffles expensive fungi?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Espresso",
                emoji: "🥟🥠",
                question: "Is espresso more concentrated than regular coffee?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Quinoa",
                emoji: "🍞🥖",
                question: "Is quinoa a complete protein?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Kombucha",
                emoji: "🥐🥯",
                question: "Is kombucha a fermented tea drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Caviar",
                emoji: "🧀🥚",
                question: "Is caviar fish eggs?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Matcha",
                emoji: "🥓🍳",
                question: "Is matcha powdered green tea?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Foie Gras",
                emoji: "🥞🧇",
                question: "Is foie gras made from duck liver?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Sake",
                emoji: "🍎🍏",
                question: "Is sake made from rice?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Prosciutto",
                emoji: "🍊🍋",
                question: "Is prosciutto cured ham?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Kefir",
                emoji: "🥑🥥",
                question: "Is kefir a fermented milk drink?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Umami",
                emoji: "😋🍄",
                question: "Is umami the fifth basic taste?",
                options: [
                    "True",
                    "False",
                    "Maybe",
                    "Never"
                ],
                correct: 1
            },
            {
                topic: "Coffee Regions",
                emoji: "☕🌍",
                question: "Is Ethiopia considered the birthplace of coffee?",
                options: [
                    "False",
                    "True",
                    "Unknown",
                    "China"
                ],
                correct: 0
            },
            {
                topic: "Molecular Gastronomy",
                emoji: "🔬🍽️",
                question: "Does molecular gastronomy use scientific techniques in cooking?",
                options: [
                    "True",
                    "False",
                    "Sometimes",
                    "Never"
                ],
                correct: 1
            },
            {
                topic: "Wine Terroir",
                emoji: "🍷🌍",
                question: "Does terroir refer to environmental factors affecting wine?",
                options: [
                    "No",
                    "Maybe",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Saffron",
                emoji: "🌺💰",
                question: "Is saffron the most expensive spice by weight?",
                options: [
                    "False",
                    "True",
                    "Second most",
                    "Third most"
                ],
                correct: 0
            },
            {
                topic: "Champagne",
                emoji: "🍾🇫🇷",
                question: "Can only sparkling wine from Champagne region be called Champagne?",
                options: [
                    "True",
                    "False",
                    "Any region",
                    "Only Italy"
                ],
                correct: 0
            },
            {
                topic: "Maillard Reaction",
                emoji: "🔥🥩",
                question: "Does the Maillard reaction create browning in cooked foods?",
                options: [
                    "False",
                    "Never",
                    "True",
                    "Rarely"
                ],
                correct: 0
            },
            {
                topic: "Pu-erh Tea",
                emoji: "🍵🇨🇳",
                question: "Is pu-erh tea aged and fermented?",
                options: [
                    "True",
                    "False",
                    "Only dried",
                    "Only fresh"
                ],
                correct: 0
            },
            {
                topic: "Wagyu Beef",
                emoji: "🥩🇯🇵",
                question: "Does wagyu beef have high marbling?",
                options: [
                    "No",
                    "True",
                    "False",
                    "Medium"
                ],
                correct: 1
            },
            {
                topic: "Absinthe",
                emoji: "🍸💚",
                question: "Does absinthe contain wormwood?",
                options: [
                    "True",
                    "False",
                    "Only vintage",
                    "Never"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Culinary Arts",
                emoji: "👨‍🍳🌟",
                question: "Name three French mother sauces?",
                options: [
                    "Béchamel",
                    "Velouté",
                    "Espagnole",
                    "Hollandaise"
                ],
                correct: 0
            },
            {
                topic: "Coffee Brewing",
                emoji: "☕🔧",
                question: "Name three coffee brewing methods?",
                options: [
                    "Espresso",
                    "French press",
                    "Pour over",
                    "Cold brew"
                ],
                correct: 0
            },
            {
                topic: "Knife Skills",
                emoji: "🔪📏",
                question: "Name three basic knife cuts?",
                options: [
                    "Julienne",
                    "Brunoise",
                    "Dice",
                    "Chiffonade"
                ],
                correct: 0
            },
            {
                topic: "Tea Types",
                emoji: "🍵🌈",
                question: "Name three types of tea?",
                options: [
                    "Green",
                    "Black",
                    "White",
                    "Oolong"
                ],
                correct: 0
            },
            {
                topic: "Pasta Shapes",
                emoji: "🍝📐",
                question: "Name three pasta shapes?",
                options: [
                    "Penne",
                    "Fusilli",
                    "Farfalle",
                    "Rigatoni"
                ],
                correct: 0
            },
            {
                topic: "Cocktail Ingredients",
                emoji: "🍸🍋",
                question: "Name three classic cocktail ingredients?",
                options: [
                    "Bitters",
                    "Simple syrup",
                    "Citrus",
                    "Vermouth"
                ],
                correct: 0
            },
            {
                topic: "Cheese Varieties",
                emoji: "🧀🌍",
                question: "Name three types of cheese?",
                options: [
                    "Cheddar",
                    "Brie",
                    "Gouda",
                    "Parmesan"
                ],
                correct: 0
            },
            {
                topic: "Smoothie Ingredients",
                emoji: "🥤🍓",
                question: "Name three common smoothie ingredients?",
                options: [
                    "Banana",
                    "Berries",
                    "Yogurt",
                    "Spinach"
                ],
                correct: 0
            },
            {
                topic: "Baking Essentials",
                emoji: "🧁🥄",
                question: "Name three essential baking ingredients?",
                options: [
                    "Flour",
                    "Sugar",
                    "Eggs",
                    "Butter"
                ],
                correct: 0
            },
            {
                topic: "Wine Regions",
                emoji: "🍷🗺️",
                question: "Name three famous wine regions?",
                options: [
                    "Bordeaux",
                    "Tuscany",
                    "Napa Valley",
                    "Rioja"
                ],
                correct: 0
            }
        ]
    },
    2: {
        "easy": [
            {
                topic: "Vegetables",
                emoji: "🥦🥕",
                question: "Are carrots orange vegetables?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Orange Juice",
                emoji: "🍊🥤",
                question: "Is orange juice made from oranges?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Hamburger",
                emoji: "🍔🥩",
                question: "Does a hamburger contain meat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Green Tea",
                emoji: "🍵💚",
                question: "Is green tea green in color?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Ice Cream",
                emoji: "🍦❄️",
                question: "Is ice cream served frozen?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Apple Juice",
                emoji: "🍎🧃",
                question: "Can apple juice be made from apples?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chicken",
                emoji: "🍗🐔",
                question: "Is chicken a type of poultry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mineral Water",
                emoji: "💧🏔️",
                question: "Does mineral water contain minerals?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cookies",
                emoji: "🍪😋",
                question: "Are cookies a sweet treat?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Iced Tea",
                emoji: "🧊🍵",
                question: "Is iced tea served cold?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Salmon",
                emoji: "🐟🍣",
                question: "Is salmon a type of fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cappuccino",
                emoji: "☕🥛",
                question: "Does cappuccino contain milk foam?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Avocado",
                emoji: "🥑💚",
                question: "Is avocado a fruit?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Energy Drinks",
                emoji: "⚡🥤",
                question: "Do energy drinks contain caffeine?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Lasagna",
                emoji: "🍝🧀",
                question: "Does lasagna have layers?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Milkshake",
                emoji: "🥤🍦",
                question: "Is a milkshake made with ice cream?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Croissant",
                emoji: "🥐🇫🇷",
                question: "Is croissant a French pastry?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sports Drinks",
                emoji: "🏃‍♂️🥤",
                question: "Do sports drinks contain electrolytes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Tofu",
                emoji: "🥢🌱",
                question: "Is tofu made from soybeans?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Bubble Tea",
                emoji: "🧋🫧",
                question: "Does bubble tea contain tapioca pearls?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Kimchi",
                emoji: "🥬🇰🇷",
                question: "Is kimchi a fermented Korean dish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cold Brew",
                emoji: "☕❄️",
                question: "Is cold brew coffee steeped in cold water?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Risotto",
                emoji: "🍚🇮🇹",
                question: "Is risotto made with arborio rice?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ayran",
                emoji: "🥛🧂",
                question: "Is ayran a salty yogurt drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tempura",
                emoji: "🍤🇯🇵",
                question: "Is tempura a Japanese deep-fried dish?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Horchata",
                emoji: "🥛🌾",
                question: "Is horchata made from rice or nuts?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pho",
                emoji: "🍜🇻🇳",
                question: "Is pho a Vietnamese noodle soup?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Kvass",
                emoji: "🍺🍞",
                question: "Is kvass a fermented bread drink?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Escargot",
                emoji: "🐌🇫🇷",
                question: "Is escargot cooked snails?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Lassi",
                emoji: "🥤🇮🇳",
                question: "Is lassi an Indian yogurt beverage?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Miso",
                emoji: "🥣🇯🇵",
                question: "Is miso a fermented soybean paste?",
                options: [
                    "True",
                    "False",
                    "Only beans",
                    "Only salt"
                ],
                correct: 0
            },
            {
                topic: "Amaro",
                emoji: "🍸🌿",
                question: "Is amaro a bitter Italian herbal liqueur?",
                options: [
                    "False",
                    "True",
                    "Sweet only",
                    "No herbs"
                ],
                correct: 0
            },
            {
                topic: "Confit",
                emoji: "🦆🔥",
                question: "Is confit a method of slow-cooking in fat?",
                options: [
                    "True",
                    "False",
                    "Fast cooking",
                    "No fat"
                ],
                correct: 1
            },
            {
                topic: "Oolong Tea",
                emoji: "🍵🍂",
                question: "Is oolong tea partially oxidized?",
                options: [
                    "Never",
                    "True",
                    "False",
                    "Fully only"
                ],
                correct: 1
            },
            {
                topic: "Ceviche",
                emoji: "🐟🍋",
                question: "Is ceviche raw fish cured in citrus?",
                options: [
                    "True",
                    "False",
                    "Cooked fish",
                    "No citrus"
                ],
                correct: 1
            },
            {
                topic: "Mezcal",
                emoji: "🥃🌵",
                question: "Is mezcal made from agave plants?",
                options: [
                    "False",
                    "Only cactus",
                    "True",
                    "Corn based"
                ],
                correct: 1
            },
            {
                topic: "Sous Vide",
                emoji: "🔬🍖",
                question: "Does sous vide involve vacuum-sealed cooking?",
                options: [
                    "True",
                    "False",
                    "Open air",
                    "Grilling"
                ],
                correct: 0
            },
            {
                topic: "Sherry",
                emoji: "🍷🇪🇸",
                question: "Is sherry a fortified wine from Spain?",
                options: [
                    "No",
                    "True",
                    "False",
                    "From France"
                ],
                correct: 0
            },
            {
                topic: "Pâté",
                emoji: "🍖🥖",
                question: "Is pâté a spreadable meat mixture?",
                options: [
                    "True",
                    "False",
                    "Vegetable only",
                    "Cheese"
                ],
                correct: 0
            },
            {
                topic: "Rooibos",
                emoji: "🍵🇿🇦",
                question: "Is rooibos a caffeine-free herbal tea?",
                options: [
                    "High caffeine",
                    "False",
                    "True",
                    "Medium caffeine"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Asian Cuisine",
                emoji: "🍜🌏",
                question: "Name three Asian noodle dishes?",
                options: [
                    "Ramen",
                    "Pho",
                    "Pad Thai",
                    "Lo Mein"
                ],
                correct: 0
            },
            {
                topic: "Coffee Drinks",
                emoji: "☕🥤",
                question: "Name three espresso-based drinks?",
                options: [
                    "Latte",
                    "Cappuccino",
                    "Americano",
                    "Macchiato"
                ],
                correct: 0
            },
            {
                topic: "Seafood",
                emoji: "🦞🐟",
                question: "Name three types of shellfish?",
                options: [
                    "Shrimp",
                    "Lobster",
                    "Crab",
                    "Oysters"
                ],
                correct: 0
            },
            {
                topic: "Herbal Teas",
                emoji: "🍵🌿",
                question: "Name three herbal tea varieties?",
                options: [
                    "Chamomile",
                    "Peppermint",
                    "Hibiscus",
                    "Rooibos"
                ],
                correct: 0
            },
            {
                topic: "Mexican Food",
                emoji: "🌮🇲🇽",
                question: "Name three Mexican dishes?",
                options: [
                    "Tacos",
                    "Enchiladas",
                    "Quesadillas",
                    "Burritos"
                ],
                correct: 0
            },
            {
                topic: "Fruit Juices",
                emoji: "🧃🍇",
                question: "Name three types of fruit juice?",
                options: [
                    "Orange",
                    "Apple",
                    "Grape",
                    "Cranberry"
                ],
                correct: 0
            },
            {
                topic: "Italian Dishes",
                emoji: "🍝🇮🇹",
                question: "Name three Italian pasta dishes?",
                options: [
                    "Carbonara",
                    "Bolognese",
                    "Alfredo",
                    "Marinara"
                ],
                correct: 0
            },
            {
                topic: "Hot Beverages",
                emoji: "☕🔥",
                question: "Name three hot drinks?",
                options: [
                    "Coffee",
                    "Tea",
                    "Hot chocolate",
                    "Cappuccino"
                ],
                correct: 0
            },
            {
                topic: "Desserts",
                emoji: "🍰🍨",
                question: "Name three popular desserts?",
                options: [
                    "Cake",
                    "Ice cream",
                    "Pie",
                    "Cookies"
                ],
                correct: 0
            },
            {
                topic: "Breakfast Drinks",
                emoji: "🥤🌅",
                question: "Name three breakfast beverages?",
                options: [
                    "Orange juice",
                    "Coffee",
                    "Milk",
                    "Smoothie"
                ],
                correct: 0
            }
        ]
    },
    3: {
        "easy": [
            {
                topic: "Tomato",
                emoji: "🍅🥗",
                question: "Is tomato red when ripe?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chocolate Milk",
                emoji: "🥛🍫",
                question: "Does chocolate milk contain chocolate?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "French Fries",
                emoji: "🍟🥔",
                question: "Are french fries made from potatoes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Grape Juice",
                emoji: "🍇🧃",
                question: "Is grape juice made from grapes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cake",
                emoji: "🎂🍰",
                question: "Is cake a baked dessert?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Lemon Water",
                emoji: "🍋💧",
                question: "Does lemon water contain lemon?",
                options: [
                  "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Bacon",
                emoji: "🥓🐷",
                question: "Is bacon made from pork?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cranberry Juice",
                emoji: "🫐🥤",
                question: "Can cranberry juice be made from cranberries?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Popcorn",
                emoji: "🍿🌽",
                question: "Is popcorn made from corn?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ginger Ale",
                emoji: "🥤🫚",
                question: "Does ginger ale contain ginger flavor?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Shrimp",
                emoji: "🦐🍤",
                question: "Is shrimp a type of seafood?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Latte",
                emoji: "☕🥛",
                question: "Does a latte contain more milk than espresso?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Hummus",
                emoji: "🫘🥙",
                question: "Is hummus made from chickpeas?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Protein Shake",
                emoji: "🥤💪",
                question: "Do protein shakes contain protein powder?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Falafel",
                emoji: "🧆🌱",
                question: "Is falafel a Middle Eastern food?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Coconut Milk",
                emoji: "🥥🥛",
                question: "Is coconut milk made from coconuts?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Nachos",
                emoji: "🧀🌮",
                question: "Do nachos typically have cheese?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chai Latte",
                emoji: "☕🌶️",
                question: "Does chai contain spices?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Gyro",
                emoji: "🥙🇬🇷",
                question: "Is gyro a Greek dish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Almond Milk",
                emoji: "🥛🌰",
                question: "Is almond milk made from almonds?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Bouillabaisse",
                emoji: "🍲🐟",
                question: "Is bouillabaisse a French fish stew?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Nitro Coffee",
                emoji: "☕💨",
                question: "Is nitro coffee infused with nitrogen gas?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Gnocchi",
                emoji: "🥔🍝",
                question: "Is gnocchi made with potato?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Switchel",
                emoji: "🥤🍯",
                question: "Is switchel a vinegar-based drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Paella",
                emoji: "🥘🇪🇸",
                question: "Is paella a Spanish rice dish?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Masala Chai",
                emoji: "🍵🇮🇳",
                question: "Does masala chai contain black tea and spices?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Ratatouille",
                emoji: "🍆🍅",
                question: "Is ratatouille a vegetable dish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Agua Fresca",
                emoji: "🥤🍉",
                question: "Is agua fresca a Mexican fruit beverage?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Haggis",
                emoji: "🥘🏴󠁧󠁢󠁳󠁣󠁴󠁿",
                question: "Is haggis a Scottish dish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mate Tea",
                emoji: "🧉🇦🇷",
                question: "Is mate a South American caffeinated drink?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Duxelles",
                emoji: "🍄👨‍🍳",
                question: "Is duxelles a finely chopped mushroom mixture?",
                options: [
                    "True",
                    "False",
                    "Only whole",
                    "No mushrooms"
                ],
                correct: 1
            },
            {
                topic: "Cascade Hops",
                emoji: "🍺🌿",
                question: "Are Cascade hops used in brewing beer?",
                options: [
                    "Never",
                    "True",
                    "False",
                    "Only wine"
                ],
                correct: 1
            },
            {
                topic: "Mirepoix",
                emoji: "🥕🧅",
                question: "Is mirepoix a French aromatic vegetable base?",
                options: [
                    "True",
                    "False",
                    "Only meat",
                    "Single vegetable"
                ],
                correct: 1
            },
            {
                topic: "Barolo Wine",
                emoji: "🍷🇮🇹",
                question: "Is Barolo made from Nebbiolo grapes?",
                options: [
                    "False",
                    "Cabernet only",
                    "True",
                    "Merlot only"
                ],
                correct: 1
            },
            {
                topic: "Cassoulet",
                emoji: "🍲🇫🇷",
                question: "Is cassoulet a French bean stew?",
                options: [
                    "True",
                    "False",
                    "Only meat",
                    "No beans"
                ],
                correct: 0
            },
            {
                topic: "Genmai Tea",
                emoji: "🍵🌾",
                question: "Does genmai tea contain roasted rice?",
                options: [
                    "No rice",
                    "False",
                    "True",
                    "Only leaves"
                ],
                correct: 1
            },
            {
                topic: "Brandade",
                emoji: "🐟🥔",
                question: "Is brandade made with salt cod?",
                options: [
                    "True",
                    "False",
                    "Fresh fish only",
                    "No fish"
                ],
                correct: 1
            },
            {
                topic: "Shochu",
                emoji: "🥃🇯🇵",
                question: "Is shochu a Japanese distilled spirit?",
                options: [
                    "Beer",
                    "True",
                    "False",
                    "Wine"
                ],
                correct: 0
            },
            {
                topic: "Choucroute",
                emoji: "🥬🇫🇷",
                question: "Is choucroute fermented cabbage?",
                options: [
                    "True",
                    "False",
                    "Fresh only",
                    "Pickled"
                ],
                correct: 0
            },
            {
                topic: "Tepache",
                emoji: "🍍🥤",
                question: "Is tepache fermented from pineapple?",
                options: [
                    "Orange",
                    "False",
                    "True",
                    "Apple"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "French Cooking",
                emoji: "🇫🇷👨‍🍳",
                question: "Name three classic French dishes?",
                options: [
                    "Coq au vin",
                    "Beef bourguignon",
                    "Ratatouille",
                    "Bouillabaisse"
                ],
                correct: 0
            },
            {
                topic: "Cold Drinks",
                emoji: "🧊🥤",
                question: "Name three cold beverages?",
                options: [
                    "Iced tea",
                    "Lemonade",
                    "Smoothie",
                    "Iced coffee"
                ],
                correct: 0
            },
            {
                topic: "Grains",
                emoji: "🌾🍚",
                question: "Name three types of grains?",
                options: [
                    "Rice",
                    "Wheat",
                    "Quinoa",
                    "Oats"
                ],
                correct: 0
            },
            {
                topic: "Citrus Drinks",
                emoji: "🍋🥤",
                question: "Name three citrus-based drinks?",
                options: [
                    "Lemonade",
                    "Orange juice",
                    "Grapefruit juice",
                    "Limeade"
                ],
                correct: 0
            },
            {
                topic: "Street Food",
                emoji: "🌮🍢",
                question: "Name three popular street foods?",
                options: [
                    "Tacos",
                    "Hot dogs",
                    "Kebabs",
                    "Falafel"
                ],
                correct: 0
            },
            {
                topic: "Dairy Products",
                emoji: "🥛🧀",
                question: "Name three dairy products?",
                options: [
                    "Milk",
                    "Cheese",
                    "Yogurt",
                    "Butter"
                ],
                correct: 0
            },
            {
                topic: "Japanese Food",
                emoji: "🍣🇯🇵",
                question: "Name three Japanese dishes?",
                options: [
                    "Sushi",
                    "Ramen",
                    "Tempura",
                    "Teriyaki"
                ],
                correct: 0
            },
            {
                topic: "Tropical Drinks",
                emoji: "🍹🌴",
                question: "Name three tropical beverages?",
                options: [
                    "Piña colada",
                    "Coconut water",
                    "Mango juice",
                    "Passion fruit juice"
                ],
                correct: 0
            },
            {
                topic: "Spices",
                emoji: "🌶️🧂",
                question: "Name three common spices?",
                options: [
                    "Pepper",
                    "Cinnamon",
                    "Cumin",
                    "Paprika"
                ],
                correct: 0
            },
            {
                topic: "Breakfast Foods",
                emoji: "🍳🥐",
                question: "Name three breakfast items?",
                options: [
                    "Eggs",
                    "Pancakes",
                    "Bacon",
                    "Toast"
                ],
                correct: 0
            }
        ]
    },
    4: {
        "easy": [
            {
                topic: "Strawberry",
                emoji: "🍓💕",
                question: "Is strawberry a red fruit?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Hot Tea",
                emoji: "🍵🔥",
                question: "Is tea served hot?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Hot Dog",
                emoji: "🌭🍞",
                question: "Does a hot dog have a sausage?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pineapple Juice",
                emoji: "🍍🧃",
                question: "Is pineapple juice made from pineapples?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Donut",
                emoji: "🍩😋",
                question: "Is a donut a fried dough?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Coconut Water",
                emoji: "🥥💧",
                question: "Does coconut water come from young coconuts?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Peanut Butter",
                emoji: "🥜🥪",
                question: "Is peanut butter made from peanuts?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cranberry Juice",
                emoji: "🫐🥤",
                question: "Does cranberry juice come from berries?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pancakes",
                emoji: "🥞🍯",
                question: "Are pancakes a breakfast food?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sparkling Water",
                emoji: "💧✨",
                question: "Does sparkling water have bubbles?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Lobster",
                emoji: "🦞🌊",
                question: "Is lobster a shellfish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Frappuccino",
                emoji: "☕🧊",
                question: "Is a frappuccino a blended iced coffee?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Quinoa",
                emoji: "🌾🥗",
                question: "Is quinoa a superfood grain?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Freshly Squeezed",
                emoji: "🍊💪",
                question: "Is freshly squeezed juice made by hand?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Burrito",
                emoji: "🌯🇲🇽",
                question: "Is a burrito wrapped in a tortilla?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Iced Coffee",
                emoji: "☕❄️",
                question: "Is iced coffee served with ice?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dim Sum",
                emoji: "🥟🇨🇳",
                question: "Is dim sum a Chinese cuisine?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Soy Milk",
                emoji: "🥛🌱",
                question: "Is soy milk made from soybeans?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Waffles",
                emoji: "🧇🍯",
                question: "Do waffles have a grid pattern?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pomegranate Juice",
                emoji: "🍷💎",
                question: "Is pomegranate juice red in color?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Bibimbap",
                emoji: "🍚🇰🇷",
                question: "Is bibimbap a Korean rice bowl?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cortado",
                emoji: "☕🥛",
                question: "Is a cortado equal parts espresso and milk?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Shakshuka",
                emoji: "🍳🍅",
                question: "Is shakshuka eggs poached in tomato sauce?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Kefir Water",
                emoji: "💧🫧",
                question: "Is kefir water a fermented probiotic drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Couscous",
                emoji: "🍚🇲🇦",
                question: "Is couscous a North African dish?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Turmeric Latte",
                emoji: "☕💛",
                question: "Does turmeric latte contain turmeric spice?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Tagine",
                emoji: "🍲🇲🇦",
                question: "Is tagine cooked in a cone-shaped pot?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Shrub Drink",
                emoji: "🥤🍒",
                question: "Is a shrub a vinegar-based fruit syrup?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Bao Buns",
                emoji: "🥟☁️",
                question: "Are bao buns steamed Chinese buns?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chai Tea Latte",
                emoji: "☕🇮🇳",
                question: "Does chai latte combine tea with milk?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Béchamel",
                emoji: "🥛👨‍🍳",
                question: "Is béchamel a white sauce made with roux?",
                options: [
                    "True",
                    "False",
                    "Red sauce",
                    "No roux"
                ],
                correct: 0
            },
            {
                topic: "Darjeeling Tea",
                emoji: "🍵🏔️",
                question: "Is Darjeeling tea from India?",
                options: [
                    "China only",
                    "True",
                    "False",
                    "Japan only"
                ],
                correct: 0
            },
            {
                topic: "Galantine",
                emoji: "🍖🎀",
                question: "Is galantine a boned, stuffed, and poached dish?",
                options: [
                    "True",
                    "False",
                    "Roasted only",
                    "Fried only"
                ],
                correct: 1
            },
            {
                topic: "Riesling Wine",
                emoji: "🍷🇩🇪",
                question: "Is Riesling typically a white wine?",
                options: [
                    "Red only",
                    "False",
                    "True",
                    "Rosé only"
                ],
                correct: 1
            },
            {
                topic: "Soufflé",
                emoji: "🥚☁️",
                question: "Does a soufflé rise due to beaten eggs?",
                options: [
                    "True",
                    "False",
                    "Yeast only",
                    "Baking powder"
                ],
                correct: 1
            },
            {
                topic: "Assam Tea",
                emoji: "🍵🇮🇳",
                question: "Is Assam tea a strong black tea?",
                options: [
                    "Green only",
                    "True",
                    "False",
                    "White only"
                ],
                correct: 0
            },
            {
                topic: "Ballotine",
                emoji: "🍗🎁",
                question: "Is ballotine a deboned poultry dish?",
                options: [
                    "True",
                    "False",
                    "Fish only",
                    "Vegetable"
                ],
                correct: 1
            },
            {
                topic: "Grappa",
                emoji: "🥃🍇",
                question: "Is grappa made from grape pomace?",
                options: [
                    "Grain based",
                    "False",
                    "True",
                    "Potato based"
                ],
                correct: 0
            },
            {
                topic: "Charcuterie",
                emoji: "🥓🧀",
                question: "Does charcuterie involve cured meats?",
                options: [
                    "True",
                    "False",
                    "Cheese only",
                    "Vegetables"
                ],
                correct: 1
            },
            {
                topic: "Sencha Tea",
                emoji: "🍵🇯🇵",
                question: "Is sencha a Japanese green tea?",
                options: [
                    "Black tea",
                    "False",
                    "True",
                    "Herbal"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Indian Cuisine",
                emoji: "🇮🇳🍛",
                question: "Name three Indian dishes?",
                options: [
                    "Curry",
                    "Biryani",
                    "Tikka masala",
                    "Samosa"
                ],
                correct: 0
            },
            {
                topic: "Tea Varieties",
                emoji: "🍵🌈",
                question: "Name three black tea varieties?",
                options: [
                    "Earl Grey",
                    "English breakfast",
                    "Assam",
                    "Ceylon"
                ],
                correct: 0
            },
            {
                topic: "Sandwich Types",
                emoji: "🥪🍞",
                question: "Name three types of sandwiches?",
                options: [
                    "BLT",
                    "Club",
                    "Reuben",
                    "Grilled cheese"
                ],
                correct: 0
            },
            {
                topic: "Smoothie Bases",
                emoji: "🥤🍌",
                question: "Name three smoothie base ingredients?",
                options: [
                    "Banana",
                    "Yogurt",
                    "Milk",
                    "Juice"
                ],
                correct: 0
            },
            {
                topic: "Steak Cuts",
                emoji: "🥩🔪",
                question: "Name three cuts of steak?",
                options: [
                    "Ribeye",
                    "Sirloin",
                    "Filet mignon",
                    "T-bone"
                ],
                correct: 0
            },
            {
                topic: "Wine Types",
                emoji: "🍷🍇",
                question: "Name three types of wine?",
                options: [
                    "Red",
                    "White",
                    "Rosé",
                    "Sparkling"
                ],
                correct: 0
            },
            {
                topic: "Soup Varieties",
                emoji: "🍲🥄",
                question: "Name three types of soup?",
                options: [
                    "Tomato",
                    "Chicken noodle",
                    "Minestrone",
                    "Clam chowder"
                ],
                correct: 0
            },
            {
                topic: "Juice Types",
                emoji: "🧃🍊",
                question: "Name three fruit juices?",
                options: [
                    "Orange",
                    "Apple",
                    "Grape",
                    "Pineapple"
                ],
                correct: 0
            },
            {
                topic: "Herbs",
                emoji: "🌿🍃",
                question: "Name three cooking herbs?",
                options: [
                    "Basil",
                    "Parsley",
                    "Cilantro",
                    "Rosemary"
                ],
                correct: 0
            },
            {
                topic: "Fast Food",
                emoji: "🍔🍟",
                question: "Name three fast food items?",
                options: [
                    "Burger",
                    "Fries",
                    "Pizza",
                    "Chicken nuggets"
                ],
                correct: 0
            }
        ]
    },
    "5": {
        "easy": [
            {
                topic: "Watermelon",
                emoji: "🍉💚",
                question: "Is watermelon a juicy fruit?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Herbal Tea",
                emoji: "🍵🌿",
                question: "Does herbal tea come from herbs?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Muffin",
                emoji: "🧁🫐",
                question: "Is a muffin a baked good?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Berry Smoothie",
                emoji: "🫐🥤",
                question: "Can smoothies contain berries?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Salad",
                emoji: "🥗🥬",
                question: "Is salad made with vegetables?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Fruit Punch",
                emoji: "🧃🍓",
                question: "Does fruit punch contain fruit flavors?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Omelette",
                emoji: "🍳🧀",
                question: "Is an omelette made with eggs?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Ginger Tea",
                emoji: "🍵🫚",
                question: "Does ginger tea contain ginger?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Noodles",
                emoji: "🍜🥢",
                question: "Are noodles a type of pasta?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Fruit Water",
                emoji: "💧🍓",
                question: "Can water be infused with fruit?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Oysters",
                emoji: "🦪🌊",
                question: "Are oysters a type of mollusk?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Macchiato",
                emoji: "☕🥛",
                question: "Is a macchiato espresso with a dollop of foam?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Bruschetta",
                emoji: "🍞🍅",
                question: "Is bruschetta grilled bread with toppings?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Beetroot Juice",
                emoji: "🥤💜",
                question: "Is beetroot juice purple or red?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Stir Fry",
                emoji: "🥘🥕",
                question: "Is stir fry cooked quickly at high heat?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Vanilla Latte",
                emoji: "☕🍦",
                question: "Does vanilla latte contain vanilla flavoring?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Spring Rolls",
                emoji: "🥬🥕",
                question: "Are spring rolls wrapped in rice paper?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Tonic Water",
                emoji: "🥤✨",
                question: "Does tonic water contain quinine?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Quiche",
                emoji: "🥧🥚",
                question: "Is quiche a savory egg tart?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Celery Juice",
                emoji: "🥤💚",
                question: "Is celery juice green in color?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Moussaka",
                emoji: "🍆🇬🇷",
                question: "Is moussaka a Greek eggplant dish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Flat White",
                emoji: "☕🇦🇺",
                question: "Is flat white an Australian coffee drink?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Polenta",
                emoji: "🌽🇮🇹",
                question: "Is polenta made from cornmeal?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Ginger Beer",
                emoji: "🥤🫚",
                question: "Is ginger beer a fermented ginger beverage?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Osso Buco",
                emoji: "🍖🇮🇹",
                question: "Is osso buco braised veal shanks?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Yerba Mate",
                emoji: "🧉🌿",
                question: "Is yerba mate a caffeinated herbal drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Goulash",
                emoji: "🍲🇭🇺",
                question: "Is goulash a Hungarian stew?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Bitters",
                emoji: "🍸🌿",
                question: "Are bitters concentrated flavor extracts?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Carpaccio",
                emoji: "🥩🍋",
                question: "Is carpaccio thinly sliced raw meat or fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tamarind Juice",
                emoji: "🥤🌳",
                question: "Is tamarind juice tangy and sweet?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Velouté",
                emoji: "🥣🐔",
                question: "Is velouté a French white stock-based sauce?",
                options: [
                    "True",
                    "False",
                    "Red sauce",
                    "No stock"
                ],
                correct: 1
            },
            {
                topic: "Silver Needle Tea",
                emoji: "🍵🤍",
                question: "Is Silver Needle a premium white tea?",
                options: [
                    "Black tea",
                    "True",
                    "False",
                    "Green tea"
                ],
                correct: 0
            },
            {
                topic: "Chateaubriand",
                emoji: "🥩👨‍🍳",
                question: "Is Chateaubriand a thick cut beef tenderloin?",
                options: [
                    "True",
                    "False",
                    "Pork cut",
                    "Fish cut"
                ],
                correct: 1
            },
            {
                topic: "Chartreuse",
                emoji: "🍸💚",
                question: "Is Chartreuse a French herbal liqueur?",
                options: [
                    "Beer",
                    "False",
                    "True",
                    "Wine"
                ],
                correct: 1
            },
            {
                topic: "Terrine",
                emoji: "🥖🍖",
                question: "Is terrine a loaf of forcemeat?",
                options: [
                    "True",
                    "False",
                    "Soup",
                    "Sauce"
                ],
                correct: 1
            },
            {
                topic: "Lapsang Souchong",
                emoji: "🍵🔥",
                question: "Is Lapsang Souchong a smoked tea?",
                options: [
                    "Herbal",
                    "True",
                    "False",
                    "Fruit tea"
                ],
                correct: 0
            },
            {
                topic: "Tournedos",
                emoji: "🥩🎀",
                question: "Are tournedos small beef tenderloin steaks?",
                options: [
                    "True",
                    "False",
                    "Chicken",
                    "Fish"
                ],
                correct: 1
            },
            {
                topic: "Fernet",
                emoji: "🍸😖",
                question: "Is Fernet a bitter Italian amaro?",
                options: [
                    "Sweet only",
                    "False",
                    "True",
                    "Mild"
                ],
                correct: 0
            },
            {
                topic: "Confit de Canard",
                emoji: "🦆🇫🇷",
                question: "Is confit de canard duck cooked in its own fat?",
                options: [
                    "True",
                    "False",
                    "Water cooked",
                    "Grilled"
                ],
                correct: 0
            },
            {
                topic: "Gyokuro Tea",
                emoji: "🍵💎",
                question: "Is Gyokuro a premium shade-grown Japanese tea?",
                options: [
                    "Sun grown",
                    "False",
                    "True",
                    "Chinese"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Thai Cuisine",
                emoji: "🇹🇭🍜",
                question: "Name three Thai dishes?",
                options: [
                    "Pad Thai",
                    "Green curry",
                    "Tom yum",
                    "Massaman curry"
                ],
                correct: 0
            },
            {
                topic: "Coffee Types",
                emoji: "☕🌍",
                question: "Name three coffee bean varieties?",
                options: [
                    "Arabica",
                    "Robusta",
                    "Liberica",
                    "Excelsa"
                ],
                correct: 0
            },
            {
                topic: "Sauces",
                emoji: "🥫🍝",
                question: "Name three pasta sauces?",
                options: [
                    "Marinara",
                    "Alfredo",
                    "Pesto",
                    "Carbonara"
                ],
                correct: 0
            },
            {
                topic: "Vegetable Juices",
                emoji: "🥤🥕",
                question: "Name three vegetable juices?",
                options: [
                    "Carrot",
                    "Tomato",
                    "Celery",
                    "Beet"
                ],
                correct: 0
            },
            {
                topic: "Cooking Methods",
                emoji: "🔥🍳",
                question: "Name three cooking methods?",
                options: [
                    "Baking",
                    "Frying",
                    "Grilling",
                    "Boiling"
                ],
                correct: 0
            },
            {
                topic: "Cold Teas",
                emoji: "🧊🍵",
                question: "Name three iced tea varieties?",
                options: [
                    "Black iced tea",
                    "Green iced tea",
                    "Peach tea",
                    "Lemon tea"
                ],
                correct: 0
            },
            {
                topic: "Protein Sources",
                emoji: "🥩🐟",
                question: "Name three protein foods?",
                options: [
                    "Chicken",
                    "Beef",
                    "Fish",
                    "Eggs"
                ],
                correct: 0
            },
            {
                topic: "Carbonated Drinks",
                emoji: "🥤💥",
                question: "Name three carbonated beverages?",
                options: [
                    "Soda",
                    "Sparkling water",
                    "Cola",
                    "Ginger ale"
                ],
                correct: 0
            },
            {
                topic: "Nuts",
                emoji: "🥜🌰",
                question: "Name three types of nuts?",
                options: [
                    "Almonds",
                    "Walnuts",
                    "Cashews",
                    "Peanuts"
                ],
                correct: 0
            },
            {
                topic: "Salad Types",
                emoji: "🥗🍃",
                question: "Name three salad varieties?",
                options: [
                    "Caesar",
                    "Greek",
                    "Cobb",
                    "Caprese"
                ],
                correct: 0
            }
        ]
    },
    6: {
        "easy": [
            {
                topic: "Grapes",
                emoji: "🍇💜",
                question: "Are grapes small round fruits?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Black Coffee",
                emoji: "☕⚫",
                question: "Is black coffee served without milk?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sandwich",
                emoji: "🥪🍞",
                question: "Does a sandwich have bread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tomato Juice",
                emoji: "🍅🥤",
                question: "Is tomato juice made from tomatoes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Brownie",
                emoji: "🍫🟫",
                question: "Is a brownie a chocolate dessert?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Peach Juice",
                emoji: "🍑🧃",
                question: "Can peach juice be made from peaches?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Soup",
                emoji: "🍲🥄",
                question: "Is soup a liquid food?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Lemon Tea",
                emoji: "🍋🍵",
                question: "Does lemon tea contain lemon?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Potato",
                emoji: "🥔🍟",
                question: "Is potato a vegetable?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Root Beer",
                emoji: "🥤🌰",
                question: "Is root beer a sweet carbonated drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Scallops",
                emoji: "🐚🍽️",
                question: "Are scallops a type of seafood?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Americano",
                emoji: "☕💧",
                question: "Is an Americano espresso with hot water?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Empanada",
                emoji: "🥟🇦🇷",
                question: "Is an empanada a stuffed pastry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Wheat Grass Juice",
                emoji: "🌾🥤",
                question: "Is wheatgrass juice green?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Kebab",
                emoji: " 串🥙",
                question: "Is kebab meat cooked on skewers?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Caramel Latte",
                emoji: "☕🍯",
                question: "Does caramel latte contain caramel?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Samosa",
                emoji: "🥟🇮🇳",
                question: "Is samosa a fried Indian pastry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Rice Milk",
                emoji: "🥛🌾",
                question: "Is rice milk made from rice?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Pastrami",
                emoji: "🥩🥪",
                question: "Is pastrami smoked meat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Grapefruit Juice",
                emoji: "🍊🥤",
                question: "Is grapefruit juice bitter-sweet?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Gazpacho",
                emoji: "🥣🍅",
                question: "Is gazpacho a cold Spanish soup?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Affogato",
                emoji: "☕🍦",
                question: "Is affogato ice cream with espresso?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Arancini",
                emoji: "🍙🇮🇹",
                question: "Are arancini fried rice balls?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Soursop Juice",
                emoji: "🥤🍈",
                question: "Is soursop juice a tropical beverage?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Bulgogi",
                emoji: "🥩🇰🇷",
                question: "Is bulgogi Korean marinated beef?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chicory Coffee",
                emoji: "☕🌿",
                question: "Is chicory coffee made from roasted chicory root?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Baklava",
                emoji: "🥮🍯",
                question: "Is baklava a sweet Middle Eastern pastry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sea Buckthorn Juice",
                emoji: "🥤🍊",
                question: "Is sea buckthorn juice high in vitamin C?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Croque Monsieur",
                emoji: "🥪🇫🇷",
                question: "Is croque monsieur a French grilled sandwich?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Horchata de Chufa",
                emoji: "🥛🌰",
                question: "Is horchata de chufa made from tiger nuts?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Espagnole Sauce",
                emoji: "🥣🟤",
                question: "Is Espagnole a brown mother sauce?",
                options: [
                    "True",
                    "False",
                    "White sauce",
                    "Red sauce"
                ],
                correct: 0
            },
            {
                topic: "Dragon Well Tea",
                emoji: "🍵🐉",
                question: "Is Dragon Well a Chinese green tea?",
                options: [
                    "Black tea",
                    "True",
                    "False",
                    "White tea"
                ],
                correct: 1
            },
            {
                topic: "Wellington",
                emoji: "🥩🥐",
                question: "Is Beef Wellington wrapped in puff pastry?",
                options: [
                    "True",
                    "False",
                    "Phyllo",
                    "No pastry"
                ],
                correct: 0
            },
            {
                topic: "Pisco",
                emoji: "🥃🇵🇪",
                question: "Is Pisco a South American brandy?",
                options: [
                    "Beer",
                    "False",
                    "True",
                    "Vodka"
                ],
                correct: 0
            },
            {
                topic: "Roulade",
                emoji: "🥩🌀",
                question: "Is roulade a rolled and stuffed meat dish?",
                options: [
                    "True",
                    "False",
                    "Flat only",
                    "Cubed"
                ],
                correct: 0
            },
            {
                topic: "First Flush Tea",
                emoji: "🍵🌸",
                question: "Is first flush the earliest spring tea harvest?",
                options: [
                    "Fall harvest",
                    "True",
                    "False",
                    "Winter"
                ],
                correct: 0
            },
            {
                topic: "Paillard",
                emoji: "🥩🔨",
                question: "Is paillard a pounded thin cutlet?",
                options: [
                    "True",
                    "False",
                    "Thick cut",
                    "Ground"
                ],
                correct: 1
            },
            {
                topic: "Calvados",
                emoji: "🥃🍎",
                question: "Is Calvados apple brandy from France?",
                options: [
                    "Grape based",
                    "False",
                    "True",
                    "Pear only"
                ],
                correct: 0
            },
            {
                topic: "Supremes",
                emoji: "🍗🔪",
                question: "Are supremes boneless chicken breasts?",
                options: [
                    "True",
                    "False",
                    "With bones",
                    "Legs"
                ],
                correct: 0
            },
            {
                topic: "Tie Guan Yin",
                emoji: "🍵🇨🇳",
                question: "Is Tie Guan Yin a premium oolong tea?",
                options: [
                    "Green tea",
                    "False",
                    "True",
                    "Black tea"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Vietnamese Food",
                emoji: "🇻🇳🍜",
                question: "Name three Vietnamese dishes?",
                options: [
                    "Pho",
                    "Banh mi",
                    "Spring rolls",
                    "Bun cha"
                ],
                correct: 0
            },
            {
                topic: "Latte Flavors",
                emoji: "☕🍰",
                question: "Name three latte flavors?",
                options: [
                    "Vanilla",
                    "Caramel",
                    "Hazelnut",
                    "Mocha"
                ],
                correct: 0
            },
            {
                topic: "Berries",
                emoji: "🫐🍓",
                question: "Name three types of berries?",
                options: [
                    "Strawberry",
                    "Blueberry",
                    "Raspberry",
                    "Blackberry"
                ],
                correct: 0
            },
            {
                topic: "Green Drinks",
                emoji: "🥤💚",
                question: "Name three green beverages?",
                options: [
                    "Green tea",
                    "Green smoothie",
                    "Wheatgrass juice",
                    "Celery juice"
                ],
                correct: 0
            },
            {
                topic: "Fried Foods",
                emoji: "🍟🔥",
                question: "Name three fried foods?",
                options: [
                    "French fries",
                    "Fried chicken",
                    "Tempura",
                    "Donuts"
                ],
                correct: 0
            },
            {
                topic: "Milk Alternatives",
                emoji: "🥛🌱",
                question: "Name three non-dairy milk options?",
                options: [
                    "Almond milk",
                    "Soy milk",
                    "Oat milk",
                    "Coconut milk"
                ],
                correct: 0
            },
            {
                topic: "Greek Food",
                emoji: "🇬🇷🫒",
                question: "Name three Greek dishes?",
                options: [
                    "Gyro",
                    "Moussaka",
                    "Souvlaki",
                    "Greek salad"
                ],
                correct: 0
            },
            {
                topic: "Citrus Fruits",
                emoji: "🍊🍋",
                question: "Name three citrus fruits?",
                options: [
                    "Orange",
                    "Lemon",
                    "Lime",
                    "Grapefruit"
                ],
                correct: 0
            },
            {
                topic: "Condiments",
                emoji: "🧂🍯",
                question: "Name three condiments?",
                options: [
                    "Ketchup",
                    "Mustard",
                    "Mayonnaise",
                    "Soy sauce"
                ],
                correct: 0
            },
            {
                topic: "Dinner Foods",
                emoji: "🍽️🌙",
                question: "Name three dinner dishes?",
                options: [
                    "Steak",
                    "Pasta",
                    "Chicken",
                    "Fish"
                ],
                correct: 0
            }
        ]
    },
    7: {
        "easy": [
            {
                topic: "Mango",
                emoji: "🥭🌴",
                question: "Is mango a tropical fruit?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "White Tea",
                emoji: "🍵⚪",
                question: "Is white tea a type of tea?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Steak",
                emoji: "🥩🍽️",
                question: "Is steak a cut of beef?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cherry Juice",
                emoji: "🍒🥤",
                question: "Is cherry juice red?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cupcake",
                emoji: "🧁🎂",
                question: "Is a cupcake a small cake?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mint Tea",
                emoji: "🍵🌿",
                question: "Does mint tea contain mint leaves?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Corn",
                emoji: "🌽🟡",
                question: "Is corn yellow?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cola",
                emoji: "🥤🟤",
                question: "Is cola a carbonated soft drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Garlic Bread",
                emoji: "🧄🍞",
                question: "Does garlic bread have garlic?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mango Juice",
                emoji: "🥭🧃",
                question: "Can mango juice be made from mangoes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Clams",
                emoji: "🦪🌊",
                question: "Are clams bivalve mollusks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mocha",
                emoji: "☕🍫",
                question: "Does mocha combine coffee and chocolate?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Pita Bread",
                emoji: "🫓🥙",
                question: "Is pita bread a flatbread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Acai Juice",
                emoji: "🫐🥤",
                question: "Is acai juice from the Amazon?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tikka",
                emoji: "🍖🇮🇳",
                question: "Is tikka marinated grilled meat?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Hazelnut Coffee",
                emoji: "☕🌰",
                question: "Does hazelnut coffee have hazelnut flavor?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ravioli",
                emoji: "🥟🇮🇹",
                question: "Is ravioli stuffed pasta?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Hemp Milk",
                emoji: "🥛🌿",
                question: "Is hemp milk made from hemp seeds?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biscotti",
                emoji: "🍪☕",
                question: "Is biscotti twice-baked Italian cookie?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Guava Juice",
                emoji: "🥤🍈",
                question: "Is guava juice tropical?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Borscht",
                emoji: "🍲🇺🇦",
                question: "Is borscht a beetroot soup?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ristretto",
                emoji: "☕⚡",
                question: "Is ristretto a concentrated espresso shot?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pierogi",
                emoji: "🥟🇵🇱",
                question: "Are pierogi Polish dumplings?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Noni Juice",
                emoji: "🥤🍈",
                question: "Is noni juice from a Polynesian fruit?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Schnitzel",
                emoji: "🥩🇦🇹",
                question: "Is schnitzel breaded and fried meat?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Turkish Coffee",
                emoji: "☕🇹🇷",
                question: "Is Turkish coffee brewed with fine grounds?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Spanakopita",
                emoji: "🥧🇬🇷",
                question: "Is spanakopita a spinach pie?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Elderflower Cordial",
                emoji: "🥤🌸",
                question: "Is elderflower cordial made from elder flowers?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Jambalaya",
                emoji: "🍚🦐",
                question: "Is jambalaya a Louisiana rice dish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Birch Water",
                emoji: "💧🌳",
"question": "Is birch water tapped from birch trees?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Hollandaise Sauce",
                emoji: "🥚🍋",
                question: "Is Hollandaise an egg-based mother sauce?",
                options: [
                    "True",
                    "False",
                    "Tomato based",
                    "No eggs"
                ],
                correct: 1
            },
            {
                topic: "Jin Xuan Tea",
                emoji: "🍵🥛",
                question: "Does Jin Xuan have a milky flavor?",
                options: [
                    "Smoky only",
                    "True",
                    "False",
                    "Bitter"
                ],
                correct: 1
            },
            {
                topic: "Blanquette",
                emoji: "🍖🥛",
                question: "Is blanquette a white stew?",
                options: [
                    "True",
                    "False",
                    "Red stew",
                    "No sauce"
                ],
                correct: 1
            },
            {
                topic: "Cachaça",
                emoji: "🥃🇧🇷",
                question: "Is cachaça Brazilian sugarcane spirit?",
                options: [
                    "Vodka",
                    "False",
                    "True",
                    "Whiskey"
                ],
                correct: 0
            },
            {
                topic: "Fricassee",
                emoji: "🍗🥛",
                question: "Is fricassee meat in white sauce?",
                options: [
                    "True",
                    "False",
                    "Red sauce",
                    "No sauce"
                ],
                correct: 1
            },
            {
                topic: "Yellow Tea",
                emoji: "🍵💛",
                question: "Is yellow tea a rare Chinese tea?",
                options: [
                    "Common",
                    "True",
                    "False",
                    "Not Chinese"
                ],
                correct: 1
            },
            {
                topic: "Noisettes",
                emoji: "🥩🌰",
                question: "Are noisettes small round meat cuts?",
                options: [
                    "True",
                    "False",
                    "Large only",
                    "Square cuts"
                ],
                correct: 0
            },
            {
                topic: "Aquavit",
                emoji: "🥃🌿",
                question: "Is aquavit a Scandinavian spirit?",
                options: [
                    "Italian",
                    "False",
                    "True",
                    "Mexican"
                ],
                correct: 0
            },
            {
                topic: "Saltimbocca",
                emoji: "🥩🇮🇹",
                question: "Does saltimbocca mean 'jump in the mouth'?",
                options: [
                    "True",
                    "False",
                    "Slow food",
                    "Heavy dish"
                ],
                correct: 0
            },
            {
                topic: "Kukicha Tea",
                emoji: "🍵🌿",
                question: "Is kukicha made from tea stems?",
                options: [
                    "Leaves only",
                    "False",
                    "True",
                    "Flowers"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Korean Food",
                emoji: "🇰🇷🍜",
                question: "Name three Korean dishes?",
                options: [
                    "Kimchi",
                    "Bibimbap",
                    "Bulgogi",
                    "Japchae"
                ],
                correct: 0
            },
            {
                topic: "Hot Drinks",
                emoji: "☕🔥",
                question: "Name three hot beverages?",
                options: [
                    "Coffee",
                    "Tea",
                    "Hot chocolate",
                    "Cappuccino"
                ],
                correct: 0
            },
            {
                topic: "Root Vegetables",
                emoji: "🥕🥔",
                question: "Name three root vegetables?",
                options: [
                    "Carrot",
                    "Potato",
                    "Beet",
                    "Turnip"
                ],
                correct: 0
            },
            {
                topic: "Energy Boosters",
                emoji: "⚡🥤",
                question: "Name three energy drinks or foods?",
                options: [
                    "Coffee",
                    "Energy drink",
                    "Banana",
                    "Green tea"
                ],
                correct: 0
            },
            {
                topic: "Grilled Foods",
                emoji: "🔥🍖",
                question: "Name three grilled foods?",
                options: [
                    "Steak",
                    "Chicken",
                    "Fish",
                    "Vegetables"
                ],
                correct: 0
            },
            {
                topic: "Plant Milks",
                emoji: "🥛🌱",
                question: "Name three plant-based milks?",
                options: [
                    "Almond",
                    "Soy",
                    "Oat",
                    "Coconut"
                ],
                correct: 0
            },
            {
                topic: "Spanish Food",
                emoji: "🇪🇸🥘",
                question: "Name three Spanish dishes?",
                options: [
                    "Paella",
                    "Tapas",
                    "Gazpacho",
                    "Tortilla española"
                ],
                correct: 0
            },
            {
                topic: "Stone Fruits",
                emoji: "🍑🍒",
                question: "Name three stone fruits?",
                options: [
                    "Peach",
                    "Cherry",
                    "Plum",
                    "Apricot"
                ],
                correct: 0
            },
            {
                topic: "Seasonings",
                emoji: "🧂🌿",
                question: "Name three seasonings?",
                options: [
                    "Salt",
                    "Pepper",
                    "Garlic powder",
                    "Oregano"
                ],
                correct: 0
            },
            {
                topic: "Lunch Foods",
                emoji: "🥪☀️",
                question: "Name three lunch items?",
                options: [
                    "Sandwich",
                    "Salad",
                    "Soup",
                    "Wrap"
                ],
                correct: 0
            }
        ]
    },
    8: {
        "easy": [
            {
                topic: "Blueberry",
                emoji: "🫐💙",
                question: "Are blueberries blue?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Iced Water",
                emoji: "💧🧊",
                question: "Is iced water cold?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pasta",
                emoji: "🍝🇮🇹",
                question: "Is pasta an Italian food?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Carrot Juice",
                emoji: "🥕🥤",
                question: "Is carrot juice orange?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Pie",
                emoji: "🥧🍎",
                question: "Is pie a baked dessert?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Honey Water",
                emoji: "🍯💧",
                question: "Does honey water contain honey?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Onion",
                emoji: "🧅😢",
                question: "Do onions make you cry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sprite",
                emoji: "🥤💚",
                question: "Is Sprite a lemon-lime soda?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Fish",
                emoji: "🐟🍽️",
                question: "Is fish a seafood?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Watermelon Juice",
                emoji: "🍉🥤",
                question: "Is watermelon juice refreshing?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Mussels",
                emoji: "🦪🌊",
                question: "Are mussels shellfish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Espresso Shot",
                emoji: "☕💉",
                question: "Is espresso concentrated coffee?",
                options: [
                    "Weak coffee",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Naan",
                emoji: "🫓🇮🇳",
                question: "Is naan Indian bread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Aloe Vera Juice",
                emoji: "🌵🥤",
                question: "Is aloe vera juice from a plant?",
                options: [
                    "Animal source",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Curry",
                emoji: "🍛🌶️",
                question: "Is curry spicy?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pumpkin Spice Latte",
                emoji: "☕🎃",
                question: "Is pumpkin spice latte seasonal?",
                options: [
                    "Year-round",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Tortilla",
                emoji: "🌮🫓",
                question: "Is tortilla a flatbread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cashew Milk",
                emoji: "🥛🌰",
                question: "Is cashew milk creamy?",
                options: [
                    "Watery only",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pretzel",
                emoji: "🥨🧂",
                question: "Are pretzels salty?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Blackberry Juice",
                emoji: "🫐🥤",
                question: "Is blackberry juice dark purple?",
                options: [
                    "Yellow",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Vichyssoise",
                emoji: "🥣🥔",
                question: "Is vichyssoise served cold?",
                options: [
                    "True",
                    "False",
                    "Hot only"
                ],
                correct: 1
            },
            {
                topic: "Lungo",
                emoji: "☕💧",
                question: "Is lungo a longer espresso pull?",
                options: [
                    "Shorter",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Injera",
                emoji: "🫓🇪🇹",
                question: "Is injera Ethiopian flatbread?",
                options: [
                    "True",
                    "False",
                    "Italian"
                ],
                correct: 1
            },
            {
                topic: "Mangosteen Juice",
                emoji: "🥤🍇",
                question: "Is mangosteen called queen of fruits?",
                options: [
                    "King",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Vindaloo",
                emoji: "🍛🔥",
                question: "Is vindaloo a spicy curry?",
                options: [
                    "True",
                    "False",
                    "Mild only"
                ],
                correct: 0
            },
            {
                topic: "Dirty Chai",
                emoji: "☕🌶️",
                question: "Does dirty chai have espresso?",
                options: [
                    "No espresso",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Knafeh",
                emoji: "🥮🧀",
                question: "Is knafeh a Middle Eastern dessert?",
                options: [
                    "True",
                    "False",
                    "Asian"
                ],
                correct: 1
            },
            {
                topic: "Chrysanthemum Tea",
                emoji: "🍵🌼",
                question: "Is chrysanthemum tea from flowers?",
                options: [
                    "Leaves only",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Okonomiyaki",
                emoji: "🥞🇯🇵",
                question: "Is okonomiyaki a Japanese pancake?",
                options: [
                    "True",
                    "False",
                    "Korean"
                ],
                correct: 0
            },
            {
                topic: "Barley Water",
                emoji: "💧🌾",
                question: "Is barley water made from barley?",
                options: [
                    "Wheat",
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Tomato Sauce",
                emoji: "🍅🥫",
                question: "Is tomato a mother sauce?",
                options: [
                    "True",
                    "False",
                    "Secondary",
                    "Not classified"
                ],
                correct: 0
            },
            {
                topic: "White Peony Tea",
                emoji: "🍵🌸",
                question: "Is White Peony a white tea variety?",
                options: [
                    "Green tea",
                    "True",
                    "False",
                    "Black tea"
                ],
                correct: 0
            },
            {
                topic: "Mirepoix Ratio",
                emoji: "🥕🧅",
                question: "Is classic mirepoix 2:1:1 ratio?",
                options: [
                    "True",
                    "False",
                    "1:1:1",
                    "3:2:1"
                ],
                correct: 1
            },
            {
                topic: "Soju",
                emoji: "🥃🇰🇷",
                question: "Is soju Korean distilled beverage?",
                options: [
                    "Japanese",
                    "False",
                    "True",
                    "Chinese"
                ],
                correct: 1
            },
            {
                topic: "Quenelle",
                emoji: "🥄🍨",
                question: "Is quenelle an oval-shaped scoop?",
                options: [
                    "True",
                    "False",
                    "Square",
                    "Round"
                ],
                correct: 1
            },
            {
                topic: "Keemun Tea",
                emoji: "🍵🇨🇳",
                question: "Is Keemun a Chinese black tea?",
                options: [
                    "Green",
                    "True",
                    "False",
                    "White"
                ],
                correct: 0
            },
            {
                topic: "Medallions",
                emoji: "🥩⭕",
                question: "Are medallions round meat cuts?",
                options: [
                    "True",
                    "False",
                    "Square",
                    "Strips"
                ],
                correct: 1
            },
            {
                topic: "Ouzo",
                emoji: "🥃🇬🇷",
                question: "Is ouzo anise-flavored Greek spirit?",
                options: [
                    "Italian",
                    "False",
                    "True",
                    "Turkish"
                ],
                correct: 0
            },
            {
                topic: "Papillote",
                emoji: "🐟📄",
                question: "Is en papillote cooked in paper?",
                options: [
                    "True",
                    "False",
                    "Foil only",
                    "Open pan"
                ],
                correct: 1
            },
            {
                topic: "Genmaicha",
                emoji: "🍵🌾",
                question: "Does genmaicha have roasted rice?",
                options: [
                    "No rice",
                    "False",
                    "True",
                    "Raw rice"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Chinese Cuisine",
                emoji: "🇨🇳🥢",
                question: "Name three Chinese dishes?",
                options: [
                    "Fried rice",
                    "Kung pao chicken",
                    "Dim sum",
                    "Spring rolls"
                ],
                correct: 0
            },
            {
                topic: "Iced Drinks",
                emoji: "🧊🥤",
                question: "Name three iced beverages?",
                options: [
                    "Iced tea",
                    "Iced coffee",
                    "Lemonade",
                    "Smoothie"
                ],
                correct: 0
            },
            {
                topic: "Leafy Greens",
                emoji: "🥬🥗",
                question: "Name three leafy vegetables?",
                options: [
                    "Spinach",
                    "Lettuce",
                    "Kale",
                    "Cabbage"
                ],
                correct: 0
            },
            {
                topic: "Refreshing Drinks",
                emoji: "🥤😌",
                question: "Name three refreshing beverages?",
                options: [
                    "Water",
                    "Lemonade",
                    "Iced tea",
                    "Coconut water"
                ],
                correct: 0
            },
            {
                topic: "Baked Goods",
                emoji: "🥐🍞",
                question: "Name three baked items?",
                options: [
                    "Bread",
                    "Croissant",
                    "Muffin",
                    "Cookies"
                ],
                correct: 0
            },
            {
                topic: "Probiotic Drinks",
                emoji: "🥤🫧",
                question: "Name three probiotic beverages?",
                options: [
                    "Kombucha",
                    "Kefir",
                    "Yogurt drink",
                    "Lassi"
                ],
                correct: 0
            },
            {
                topic: "Middle Eastern Food",
                emoji: "🇸🇦🥙",
                question: "Name three Middle Eastern dishes?",
                options: [
                    "Hummus",
                    "Falafel",
                    "Shawarma",
                    "Kebab"
                ],
                correct: 0
            },
            {
                topic: "Melons",
                emoji: "🍉🍈",
                question: "Name three types of melons?",
                options: [
                    "Watermelon",
                    "Cantaloupe",
                    "Honeydew",
                    "Galia"
                ],
                correct: 0
            },
            {
                topic: "Cooking Oils",
                emoji: "🫒💧",
                question: "Name three cooking oils?",
                options: [
                    "Olive oil",
                    "Vegetable oil",
                    "Coconut oil",
                    "Canola oil"
                ],
                correct: 0
            },
            {
                topic: "Snack Foods",
                emoji: "🍿🥨",
                question: "Name three snack items?",
                options: [
                    "Chips",
                    "Popcorn",
                    "Pretzels",
                    "Crackers"
                ],
                correct: 0
            }
        ]
    },
    9: {
        "easy": [
            {
                topic: "Kiwi",
                emoji: "🥝💚",
                question: "Is kiwi a green fruit?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Warm Water",
                emoji: "💧🔥",
                question: "Is warm water heated?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tuna",
                emoji: "🐟🥫",
                question: "Is tuna a fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lime Juice",
                emoji: "🍋🥤",
                question: "Is lime juice sour?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Candy",
                emoji: "🍬🍭",
                question: "Is candy sweet?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Rose Tea",
                emoji: "🍵🌹",
                question: "Does rose tea contain rose petals?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Broccoli",
                emoji: "🥦💚",
                question: "Is broccoli green?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Lemon Soda",
                emoji: "🍋🥤",
                question: "Is lemon soda carbonated?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Butter",
                emoji: "🧈🥐",
                question: "Is butter made from milk?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Strawberry Milk",
                emoji: "🍓🥛",
                question: "Is strawberry milk pink?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Crab",
                emoji: "🦀🌊",
                question: "Is crab a crustacean?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Double Espresso",
                emoji: "☕☕",
                question: "Is double espresso two shots?",
                options: [
                    "One shot",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Focaccia",
                emoji: "🍞🫒",
                question: "Is focaccia Italian flatbread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pear Juice",
                emoji: "🍐🥤",
                question: "Is pear juice sweet?",
                options: [
                    "Bitter",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Ramen",
                emoji: "🍜🇯🇵",
                question: "Is ramen a noodle soup?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Irish Coffee",
                emoji: "☕🥃",
                question: "Does Irish coffee contain whiskey?",
                options: [
                    "No alcohol",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Bagel",
                emoji: "🥯🧀",
                question: "Is bagel ring-shaped bread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Macadamia Milk",
                emoji: "🥛🌰",
                question: "Is macadamia milk from macadamia nuts?",
                options: [
                    "From almonds",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Churros",
                emoji: "🥨🍫",
                question: "Are churros fried dough?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Plum Juice",
                emoji: "🥤🍑",
                question: "Is plum juice from plums?",
                options: [
                    "From cherries",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Mulligatawny",
                emoji: "🍲🇮🇳",
                question: "Is mulligatawny an Indian soup?",
                options: [
                    "True",
                    "False",
                    "Chinese"
                ],
                correct: 1
            },
            {
                topic: "Red Eye Coffee",
                emoji: "☕😵",
                question: "Is red eye coffee with a shot of espresso?",
                options: [
                    "No espresso",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Challah",
                emoji: "🍞✡️",
                question: "Is challah a Jewish braided bread?",
                options: [
                    "True",
                    "False",
                    "French"
                ],
                correct: 0
            },
            {
                topic: "Dragon Fruit Juice",
                emoji: "🥤🐉",
                question: "Is dragon fruit juice pink or white?",
                options: [
                    "Green",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Biryani",
                emoji: "🍚🇮🇳",
                question: "Is biryani a spiced rice dish?",
                options: [
                    "True",
                    "False",
                    "Pasta"
                ],
                correct: 0
            },
            {
                topic: "Dalgona Coffee",
                emoji: "☕🫧",
                question: "Is dalgona coffee whipped?",
                options: [
                    "Not whipped",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Panettone",
                emoji: "🍞🇮🇹",
                question: "Is panettone Italian sweet bread?",
                options: [
                    "True",
                    "False",
                    "Savory"
                ],
                correct: 0
            },
            {
                topic: "Hibiscus Tea",
                emoji: "🍵🌺",
                question: "Is hibiscus tea red?",
                options: [
                    "Green",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Croquette",
                emoji: "🥔🔥",
                question: "Are croquettes breaded and fried?",
                options: [
                    "True",
                    "False",
                    "Baked only"
                ],
                correct: 1
            },
            {
                topic: "Lychee Juice",
                emoji: "🥤🍈",
                question: "Is lychee juice from Asian fruit?",
                options: [
                    "European",
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Demi-Glace",
                emoji: "🥣🟤",
                question: "Is demi-glace a reduced brown sauce?",
                options: [
                    "True",
                    "False",
                    "White sauce",
                    "Thin sauce"
                ],
                correct: 1
            },
            {
                topic: "Ceylon Tea",
                emoji: "🍵🇱🇰",
                question: "Is Ceylon tea from Sri Lanka?",
                options: [
                    "India",
                    "True",
                    "False",
                    "China"
                ],
                correct: 0
            },
            {
                topic: "Brunoise",
                emoji: "🔪🥕",
                question: "Is brunoise 1-2mm dice?",
                options: [
                    "True",
                    "False",
                    "Large dice",
                    "Strips"
                ],
                correct: 0
            },
            {
                topic: "Baijiu",
                emoji: "🥃🇨🇳",
                question: "Is baijiu Chinese grain alcohol?",
                options: [
                    "Japanese",
                    "False",
                    "True",
                    "Korean"
                ],
                correct: 0
            },
            {
                topic: "Rouille",
                emoji: "🥣🌶️",
                question: "Is rouille a saffron-garlic sauce?",
                options: [
                    "True",
                    "False",
                    "No garlic",
                    "Sweet"
                ],
                correct: 0
            },
            {
                topic: "Nilgiri Tea",
                emoji: "🍵🏔️",
                question: "Is Nilgiri tea from India?",
                options: [
                    "China",
                    "True",
                    "False",
                    "Japan"
                ],
                correct: 1
            },
            {
                topic: "Escalope",
                emoji: "🥩🔨",
                question: "Is escalope a thin meat slice?",
                options: [
                    "True",
                    "False",
                    "Thick cut",
                    "Ground"
                ],
                correct: 1
            },
            {
                topic: "Raki",
                emoji: "🥃🇹🇷",
                question: "Is raki Turkish anise spirit?",
                options: [
                    "Greek",
                    "False",
                    "True",
                    "Italian"
                ],
                correct: 1
            },
            {
                topic: "Mornay Sauce",
                emoji: "🧀🥛",
                question: "Is Mornay béchamel with cheese?",
                options: [
                    "True",
                    "False",
                    "No cheese",
                    "Tomato base"
                ],
                correct: 1
            },
            {
                topic: "Phoenix Tea",
                emoji: "🍵🔥",
                question: "Is Phoenix oolong from China?",
                options: [
                    "Japan",
                    "False",
                    "True",
                    "India"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Turkish Cuisine",
                emoji: "🇹🇷🍢",
                question: "Name three Turkish dishes?",
                options: [
                    "Kebab",
                    "Baklava",
                    "Dolma",
                    "Köfte"
                ],
                correct: 0
            },
            {
                topic: "Decaf Drinks",
                emoji: "☕🚫",
                question: "Name three caffeine-free drinks?",
                options: [
                    "Herbal tea",
                    "Decaf coffee",
                    "Water",
                    "Juice"
                ],
                correct: 0
            },
            {
                topic: "Cruciferous Vegetables",
                emoji: "🥦🥬",
                question: "Name three cruciferous vegetables?",
                options: [
                    "Broccoli",
                    "Cauliflower",
                    "Cabbage",
                    "Brussels sprouts"
                ],
                correct: 0
            },
            {
                topic: "Detox Drinks",
                emoji: "🥤🌿",
                question: "Name three detox beverages?",
                options: [
                    "Lemon water",
                    "Green tea",
                    "Cucumber water",
                    "Ginger tea"
                ],
                correct: 0
            },
            {
                topic: "Steamed Foods",
                emoji: "♨️🥟",
                question: "Name three steamed dishes?",
                options: [
                    "Dumplings",
                    "Vegetables",
                    "Fish",
                    "Rice"
                ],
                correct: 0
            },
            {
                topic: "Fermented Drinks",
                emoji: "🫧🥤",
                question: "Name three fermented beverages?",
                options: [
                    "Kombucha",
                    "Kefir",
                    "Kvass",
                    "Beer"
                ],
                correct: 0
            },
            {
                topic: "Turkish Food",
                emoji: "🇹🇷🥙",
                question: "Name three Turkish foods?",
                options: [
                    "Döner",
                    "Börek",
                    "Pide",
                    "Lahmacun"
                ],
                correct: 0
            },
            {
                topic: "Exotic Fruits",
                emoji: "🥭🐉",
                question: "Name three exotic fruits?",
                options: [
                    "Dragon fruit",
                    "Passion fruit",
                    "Rambutan",
                    "Mangosteen"
                ],
                correct: 0
            },
            {
                topic: "Baking Techniques",
                emoji: "🎂👨‍🍳",
                question: "Name three baking methods?",
                options: [
                    "Creaming",
                    "Folding",
                    "Whisking",
                    "Proofing"
                ],
                correct: 0
            },
            {
                topic: "Party Foods",
                emoji: "🎉🍕",
                question: "Name three party food items?",
                options: [
                    "Pizza",
                    "Wings",
                    "Nachos",
                    "Sliders"
                ],
                correct: 0
            }
        ]
    },
    10: {
        "easy": [
            {
                topic: "Raspberry",
                emoji: "🫐❤️",
                question: "Is raspberry a berry?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cold Water",
                emoji: "💧❄️",
                question: "Is cold water refreshing?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Turkey",
                emoji: "🦃🍽️",
                question: "Is turkey a poultry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Kiwi Juice",
                emoji: "🥝🥤",
                question: "Is kiwi juice green?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chocolate Cake",
                emoji: "🎂🍫",
                question: "Is chocolate cake brown?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Jasmine Tea",
                emoji: "🍵🌸",
                question: "Does jasmine tea smell floral?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cabbage",
                emoji: "🥬💚",
                question: "Is cabbage a leafy vegetable?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mountain Dew",
                emoji: "🥤💛",
                question: "Is Mountain Dew a citrus soda?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Yogurt",
                emoji: "🥛🫐",
                question: "Is yogurt a dairy product?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Banana Shake",
                emoji: "🍌🥤",
                question: "Is banana shake made with bananas?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Squid",
                emoji: "🦑🌊",
                question: "Is squid a cephalopod?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Decaf Coffee",
                emoji: "☕🚫",
                question: "Is decaf coffee caffeine-free?",
                options: [
                    "Low caffeine",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Ciabatta",
                emoji: "🍞🇮🇹",
                question: "Is ciabatta Italian bread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Papaya Juice",
                emoji: "🥤🍈",
                question: "Is papaya juice orange?",
                options: [
                    "Green",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Paella",
                emoji: "🥘🦐",
                question: "Is paella a rice dish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Matcha Latte",
                emoji: "☕💚",
                question: "Is matcha latte green?",
                options: [
                    "Brown",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cornbread",
                emoji: "🍞🌽",
                question: "Is cornbread made with cornmeal?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Flax Milk",
                emoji: "🥛🌾",
                question: "Is flax milk from flax seeds?",
                options: [
                    "From nuts",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tiramisu",
                emoji: "🍰☕",
                question: "Does tiramisu have coffee?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Apricot Juice",
                emoji: "🥤🍑",
                question: "Is apricot juice from apricots?",
                options: [
                    "From peaches",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Bouillabaisse",
                emoji: "🍲🐟",
                question: "Is bouillabaisse from Marseille?",
                options: [
                    "True",
                    "False",
                    "Paris"
                ],
                correct: 1
            },
            {
                topic: "Vienna Coffee",
                emoji: "☕🇦🇹",
                question: "Does Vienna coffee have whipped cream?",
                options: [
                    "No cream",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sourdough",
                emoji: "🍞🫧",
                question: "Is sourdough naturally leavened?",
                options: [
                    "True",
                    "False",
                    "Yeast only"
                ],
                correct: 0
            },
            {
                topic: "Starfruit Juice",
                emoji: "🥤⭐",
                question: "Is starfruit shaped like a star?",
                options: [
                    "Round",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Laksa",
                emoji: "🍜🇲🇾",
                question: "Is laksa a spicy noodle soup?",
                options: [
                    "True",
                    "False",
                    "Mild only"
                ],
                correct: 0
            },
            {
                topic: "Bulletproof Coffee",
                emoji: "☕🧈",
                question: "Does bulletproof coffee have butter?",
                options: [
                    "No fat",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Brioche",
                emoji: "🥐🧈",
                question: "Is brioche enriched with butter?",
                options: [
                    "True",
                    "False",
                    "No butter"
                ],
                correct: 0
            },
            {
                topic: "Butterfly Pea Tea",
                emoji: "🍵💙",
                question: "Is butterfly pea tea blue?",
                options: [
                    "Red",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Croquembouche",
                emoji: "🍰🏔️",
                question: "Is croquembouche a tower of cream puffs?",
                options: [
                    "True",
                    "False",
                    "Flat cake"
                ],
                correct: 1
            },
            {
                topic: "Goji Berry Juice",
                emoji: "🥤🔴",
                question: "Is goji berry a superfood?",
                options: [
                    "Regular food",
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Bordelaise Sauce",
                emoji: "🥩🍷",
                question: "Is Bordelaise made with red wine?",
                options: [
                    "True",
                    "False",
                    "White wine",
                    "No wine"
                ],
                correct: 1
            },
            {
                topic: "Yunnan Tea",
                emoji: "🍵🇨🇳",
                question: "Is Yunnan famous for pu-erh?",
                options: [
                    "Green tea",
                    "True",
                    "False",
                    "White tea"
                ],
                correct: 0
            },
            {
                topic: "Julienne",
                emoji: "🔪🥕",
                question: "Is julienne matchstick-sized cuts?",
                options: [
                    "True",
                    "False",
                    "Dice",
                    "Chunks"
                ],
                correct: 0
            },
            {
                topic: "Pastis",
                emoji: "🥃🇫🇷",
                question: "Is pastis anise-flavored French aperitif?",
                options: [
                    "Italian",
                    "False",
                    "True",
                    "Spanish"
                ],
                correct: 0
            },
            {
                topic: "Chiffonade",
                emoji: "🔪🌿",
                question: "Is chiffonade thin ribbon cuts?",
                options: [
                    "True",
                    "False",
                    "Dice",
                    "Chunks"
                ],
                correct: 1
            },
            {
                topic: "Hojicha",
                emoji: "🍵🔥",
                question: "Is hojicha roasted green tea?",
                options: [
                    "Fresh only",
                    "True",
                    "False",
                    "Black tea"
                ],
                correct: 1
            },
            {
                topic: "Paupiette",
                emoji: "🥩🌀",
                question: "Is paupiette a stuffed meat roll?",
                options: [
                    "True",
                    "False",
                    "Flat",
                    "Ground"
                ],
                correct: 1
            },
            {
                topic: "Limoncello",
                emoji: "🥃🍋",
                question: "Is limoncello Italian lemon liqueur?",
                options: [
                    "French",
                    "False",
                    "True",
                    "Spanish"
                ],
                correct: 0
            },
            {
                topic: "Suprême Sauce",
                emoji: "🥣🐔",
                question: "Is suprême velouté with cream?",
                options: [
                    "True",
                    "False",
                    "No cream",
                    "Tomato"
                ],
                correct: 0
            },
            {
                topic: "Kabusecha",
                emoji: "🍵🌿",
                question: "Is kabusecha partially shaded tea?",
                options: [
                    "Full sun",
                    "False",
                    "True",
                    "Fully shaded"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Moroccan Cuisine",
                emoji: "🇲🇦🥘",
                question: "Name three Moroccan dishes?",
                options: [
                    "Tagine",
                    "Couscous",
                    "Harira",
                    "Pastilla"
                ],
                correct: 0
            },
            {
                topic: "Breakfast Drinks",
                emoji: "🌅🥤",
                question: "Name three morning beverages?",
                options: [
                    "Coffee",
                    "Orange juice",
                    "Tea",
                    "Milk"
                ],
                correct: 0
            },
            {
                topic: "Allium Vegetables",
                emoji: "🧅🧄",
                question: "Name three allium vegetables?",
                options: [
                    "Onion",
                    "Garlic",
                    "Leek",
                    "Shallot"
                ],
                correct: 0
            },
            {
                topic: "Summer Drinks",
                emoji: "☀️🥤",
                question: "Name three summer beverages?",
                options: [
                    "Lemonade",
                    "Iced tea",
                    "Smoothie",
                    "Fruit punch"
                ],
                correct: 0
            },
            {
                topic: "Boiled Foods",
                emoji: "💧🍳",
                question: "Name three boiled foods?",
                options: [
                    "Eggs",
                    "Pasta",
                    "Potatoes",
                    "Vegetables"
                ],
                correct: 0
            },
            {
                topic: "Cultured Drinks",
                emoji: "🥤🫧",
                question: "Name three cultured beverages?",
                options: [
                    "Yogurt drink",
                    "Buttermilk",
                    "Kefir",
                    "Lassi"
                ],
                correct: 0
            },
            {
                topic: "German Food",
                emoji: "🇩🇪🥨",
                question: "Name three German dishes?",
                options: [
                    "Sauerkraut",
                    "Bratwurst",
                    "Schnitzel",
                    "Pretzel"
                ],
                correct: 0
            },
            {
                topic: "Dried Fruits",
                emoji: "🫐☀️",
                question: "Name three dried fruits?",
                options: [
                    "Raisins",
                    "Dates",
                    "Prunes",
                    "Apricots"
                ],
                correct: 0
            },
            {
                topic: "Knife Skills",
                emoji: "🔪📏",
                question: "Name three knife cuts?",
                options: [
                    "Dice",
                    "Julienne",
                    "Chiffonade",
                    "Brunoise"
                ],
                correct: 0
            },
            {
                topic: "Picnic Foods",
                emoji: "🧺🥪",
                question: "Name three picnic items?",
                options: [
                    "Sandwiches",
                    "Fruit",
                    "Chips",
                    "Cookies"
                ],
                correct: 0
            }
        ]
    },
    11: {
        easy: [
            {
                topic: "Papaya",
                emoji: "🍈🧡",
                question: "Is papaya an orange fruit?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Spring Water",
                emoji: "💧🏔️",
                question: "Does spring water come from natural springs?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Pork",
                emoji: "🥩🐷",
                question: "Is pork from pigs?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Raspberry Juice",
                emoji: "🫐🥤",
                question: "Is raspberry juice red?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Jelly",
                emoji: "🍇🥄",
                question: "Is jelly sweet and wobbly?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Lavender Tea",
                emoji: "🍵💜",
                question: "Does lavender tea smell floral?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Spinach",
                emoji: "🥬💪",
                question: "Is spinach green and leafy?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Orange Soda",
                emoji: "🥤🍊",
                question: "Is orange soda orange-flavored?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Honey",
                emoji: "🍯🐝",
                question: "Is honey made by bees?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Peach Smoothie",
                emoji: "🍑🥤",
                question: "Does peach smoothie contain peaches?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Octopus",
                emoji: "🐙🌊",
                question: "Is octopus a mollusk?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Turkish Coffee",
                emoji: "☕🇹🇷",
                question: "Is Turkish coffee thick and strong?",
                options: [
                    "Weak",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Baguette",
                emoji: "🥖🇫🇷",
                question: "Is baguette French bread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Passion Fruit Juice",
                emoji: "🥤💛",
                question: "Is passion fruit juice tropical?",
                options: [
                    "Temperate",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Gumbo",
                emoji: "🍲🦐",
                question: "Is gumbo a Southern stew?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Turmeric Milk",
                emoji: "🥛💛",
                question: "Is turmeric milk golden?",
                options: [
                    "White only",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Rye Bread",
                emoji: "🍞🌾",
                question: "Is rye bread made with rye?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Walnut Milk",
                emoji: "🥛🌰",
                question: "Is walnut milk from walnuts?",
                options: [
                    "From almonds",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Macarons",
                emoji: "🍪🌈",
                question: "Are macarons French cookies?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Fig Juice",
                emoji: "🥤💜",
                question: "Is fig juice from figs?",
                options: [
                    "From dates",
                    "True"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Tom Yum",
                emoji: "🍲🇹🇭",
                question: "Is tom yum a Thai soup?",
                options: [
                    "True",
                    "False",
                    "Vietnamese"
                ],
                correct: 0
            },
            {
                topic: "Gibraltar Coffee",
                emoji: "☕🥛",
                question: "Is Gibraltar served in a glass?",
                options: [
                    "Ceramic only",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pumpernickel",
                emoji: "🍞🟤",
                question: "Is pumpernickel dark rye bread?",
                options: [
                    "True",
                    "False",
                    "White bread"
                ],
                correct: 1
            },
            {
                topic: "Acerola Juice",
                emoji: "🥤🍒",
                question: "Is acerola high in vitamin C?",
                options: [
                    "Low vitamin",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Rendang",
                emoji: "🍛🇮🇩",
                question: "Is rendang Indonesian curry?",
                options: [
                    "True",
                    "False",
                    "Indian"
                ],
                correct: 1
            },
            {
                topic: "Moon Milk",
                emoji: "🥛🌙",
                question: "Is moon milk an Ayurvedic drink?",
                options: [
                    "Modern only",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Stollen",
                emoji: "🍞🎄",
                question: "Is stollen German Christmas bread?",
                options: [
                    "True",
                    "False",
                    "Italian"
                ],
                correct: 0
            },
            {
                topic: "Neem Juice",
                emoji: "🥤🌿",
                question: "Is neem juice bitter?",
                options: [
                    "Sweet",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Pavlova",
                emoji: "🍰🇦🇺",
                question: "Is pavlova a meringue dessert?",
                options: [
                    "True",
                    "False",
                    "Cake"
                ],
                correct: 1
            },
            {
                topic: "Calamansi Juice",
                emoji: "🥤🍋",
                question: "Is calamansi a Filipino citrus?",
                options: [
                    "Mexican",
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Chasseur Sauce",
                emoji: "🍄🍷",
                question: "Is chasseur a mushroom hunter sauce?",
                options: [
                    "True",
                    "False",
                    "No mushrooms",
                    "Fish sauce"
                ],
                correct: 0
            },
            {
                topic: "Formosa Tea",
                emoji: "🍵🇹🇼",
                question: "Is Formosa tea from Taiwan?",
                options: [
                    "Thailand",
                    "True",
                    "False",
                    "Malaysia"
                ],
                correct: 1
            },
            {
                topic: "Chiffonade",
                emoji: "🔪🥬",
                question: "Is chiffonade for leafy herbs?",
                options: [
                    "True",
                    "False",
                    "Root vegetables",
                    "Meat"
                ],
                correct: 0
            },
            {
                topic: "Arak",
                emoji: "🥃🌿",
                question: "Is arak Middle Eastern spirit?",
                options: [
                    "European",
                    "False",
                    "True",
                    "Asian"
                ],
                correct: 1
            },
            {
                topic: "Bâtonnets",
                emoji: "🔪🥔",
                question: "Are bâtonnets stick-shaped cuts?",
                options: [
                    "True",
                    "False",
                    "Dice",
                    "Round"
                ],
                correct: 0
            },
            {
                topic: "Mate",
                emoji: "🧉🌿",
                question: "Is mate traditionally drunk from gourd?",
                options: [
                    "Cup only",
                    "True",
                    "False",
                    "Bottle"
                ],
                correct: 1
            },
            {
                topic: "Émincé",
                emoji: "🔪🥩",
                question: "Is émincé thinly sliced?",
                options: [
                    "True",
                    "False",
                    "Thick cut",
                    "Cubed"
                ],
                correct: 0
            },
            {
                topic: "Pernod",
                emoji: "🥃💚",
                question: "Is Pernod an anise-flavored aperitif?",
                options: [
                    "Whiskey",
                    "False",
                    "True",
                    "Vodka"
                ],
                correct: 0
            },
            {
                topic: "Lyonnaise",
                emoji: "🧅🍳",
                question: "Does lyonnaise style include onions?",
                options: [
                    "True",
                    "False",
                    "No onions",
                    "Tomatoes"
                ],
                correct: 1
            },
            {
                topic: "Longjing Tea",
                emoji: "🍵🐉",
                question: "Is Longjing Dragon Well tea?",
                options: [
                    "Phoenix",
                    "False",
                    "True",
                    "Tiger"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Lebanese Cuisine",
                emoji: "🇱🇧🥙",
                question: "Name three Lebanese dishes?",
                options: [
                    "Hummus",
                    "Tabbouleh",
                    "Kibbeh",
                    "Falafel"
                ],
                correct: 0
            },
            {
                topic: "Evening Drinks",
                emoji: "🌙🥤",
                question: "Name three evening beverages?",
                options: [
                    "Herbal tea",
                    "Warm milk",
                    "Chamomile",
                    "Hot chocolate"
                ],
                correct: 0
            },
            {
                topic: "Nightshade Vegetables",
                emoji: "🍅🫑",
                question: "Name three nightshade vegetables?",
                options: [
                    "Tomato",
                    "Potato",
                    "Eggplant",
                    "Pepper"
                ],
                correct: 0
            },
            {
                topic: "Winter Drinks",
                emoji: "❄️🥤",
                question: "Name three winter beverages?",
                options: [
                    "Hot chocolate",
                    "Mulled wine",
                    "Hot tea",
                    "Coffee"
                ],
                correct: 0
            },
            {
                topic: "Raw Foods",
                emoji: "🥗🌱",
                question: "Name three raw foods?",
                options: [
                    "Salad",
                    "Sushi",
                    "Fruits",
                    "Vegetables"
                ],
                correct: 0
            },
            {
                topic: "Ancient Grains",
                emoji: "🌾📜",
                question: "Name three ancient grains?",
                options: [
                    "Quinoa",
                    "Amaranth",
                    "Spelt",
                    "Farro"
                ],
                correct: 0
            },
            {
                topic: "Russian Food",
                emoji: "🇷🇺🥟",
                question: "Name three Russian dishes?",
                options: [
                    "Borscht",
                    "Pelmeni",
                    "Blini",
                    "Beef stroganoff"
                ],
                correct: 0
            },
            {
                topic: "Tropical Fruits",
                emoji: "🥭🌴",
                question: "Name three tropical fruits?",
                options: [
                    "Mango",
                    "Pineapple",
                    "Papaya",
                    "Coconut"
                ],
                correct: 0
            },
            {
                topic: "Sauce Techniques",
                emoji: "🥄👨‍🍳",
                question: "Name three sauce thickeners?",
                options: [
                    "Roux",
                    "Cornstarch",
                    "Egg yolk",
                    "Reduction"
                ],
                correct: 0
            },
            {
                topic: "BBQ Foods",
                emoji: "🔥🍖",
                question: "Name three BBQ items?",
                options: [
                    "Ribs",
                    "Chicken",
                    "Burgers",
                    "Sausages"
                ],
                correct: 0
            }
        ]
    },
    12: {
        "easy": [
            {
                topic: "Coconut",
                emoji: "🥥🌴",
                question: "Is coconut brown and hairy?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Filtered Water",
                emoji: "💧✨",
                question: "Is filtered water purified?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Lamb",
                emoji: "🐑🍖",
                question: "Is lamb from sheep?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tangerine Juice",
                emoji: "🍊🥤",
                question: "Is tangerine juice citrus?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Pudding",
                emoji: "🍮🥄",
                question: "Is pudding a creamy dessert?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Oolong Tea",
                emoji: "🍵🍂",
                question: "Is oolong tea partially fermented?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lettuce",
                emoji: "🥬💚",
                question: "Is lettuce used in salads?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Grape Soda",
                emoji: "🥤🍇",
                question: "Is grape soda purple?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Maple Syrup",
                emoji: "🍁🥞",
                question: "Is maple syrup from trees?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Berry Smoothie",
                emoji: "🫐🥤",
                question: "Does berry smoothie contain berries?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Anchovies",
                emoji: "🐟🧂",
                question: "Are anchovies small salty fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Piccolo Latte",
                emoji: "☕🥛",
                question: "Is piccolo a small latte?",
                options: [
                    "Large",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Multigrain Bread",
                emoji: "🍞🌾",
                question: "Does multigrain have multiple grains?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cantaloupe Juice",
                emoji: "🥤🍈",
                question: "Is cantaloupe juice orange?",
                options: [
                    "Green",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sashimi",
                emoji: "🐟🍣",
                question: "Is sashimi raw fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Beetroot Latte",
                emoji: "☕💜",
                question: "Is beetroot latte pink?",
                options: [
                    "Brown",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Paratha",
                emoji: "🫓🇮🇳",
                question: "Is paratha Indian flatbread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pea Milk",
                emoji: "🥛💚",
                question: "Is pea milk from yellow peas?",
                options: [
                    "From green beans",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Éclair",
                emoji: "🍰🇫🇷",
                question: "Is éclair filled with cream?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Prune Juice",
                emoji: "🥤🫐",
                question: "Is prune juice from dried plums?",
                options: [
                    "From grapes",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Pozole",
                emoji: "🍲🇲🇽",
                question: "Is pozole a Mexican hominy soup?",
                options: [
                    "True",
                    "False",
                    "Spanish"
                ],
                correct: 1
            },
            {
                topic: "Mazagran",
                emoji: "☕🧊",
                question: "Is mazagran cold coffee drink?",
                options: [
                    "Hot only",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pain de Mie",
                emoji: "🍞🇫🇷",
                question: "Is pain de mie French sandwich bread?",
                options: [
                    "True",
                    "False",
                    "Italian"
                ],
                correct: 1
            },
            {
                topic: "Wolfberry Juice",
                emoji: "🥤🔴",
                question: "Is wolfberry same as goji?",
                options: [
                    "Different",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mole",
                emoji: "🍫🌶️",
                question: "Does mole have chocolate?",
                options: [
                    "True",
                    "False",
                    "Never"
                ],
                correct: 0
            },
            {
                topic: "Cascara Tea",
                emoji: "🍵☕",
                question: "Is cascara from coffee cherry?",
                options: [
                    "Tea leaves",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Babka",
                emoji: "🍞🍫",
                question: "Is babka a twisted sweet bread?",
                options: [
                    "True",
                    "False",
                    "Flat"
                ],
                correct: 0
            },
            {
                topic: "Noni Juice",
                emoji: "🥤🍈",
                question: "Does noni juice smell strong?",
                options: [
                    "Mild",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cremolada",
                emoji: "🍧🍋",
                question: "Is cremolada a frozen dessert?",
                options: [
                    "True",
                    "False",
                    "Hot"
                ],
                correct: 1
            },
            {
                topic: "Jujube Tea",
                emoji: "🍵🔴",
                question: "Is jujube tea from red dates?",
                options: [
                    "Green dates",
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Périgueux Sauce",
                emoji: "🍄🍷",
                question: "Does Périgueux have truffles?",
                options: [
                    "True",
                    "False",
                    "No truffles",
                    "Mushrooms only"
                ],
                correct: 1
            },
            {
                topic: "Wuyi Tea",
                emoji: "🍵⛰️",
                question: "Is Wuyi rock oolong tea?",
                options: [
                    "Green tea",
                    "True",
                    "False",
                    "Black tea"
                ],
                correct: 1
            },
            {
                topic: "Paysanne",
                emoji: "🔪🥕",
                question: "Is paysanne thin flat cuts?",
                options: [
                    "True",
                    "False",
                    "Thick",
                    "Strips"
                ],
                correct: 1
            },
            {
                topic: "Absinthe",
                emoji: "🍸💚",
                question: "Is absinthe known as green fairy?",
                options: [
                    "Blue fairy",
                    "False",
                    "True",
                    "Red fairy"
                ],
                correct: 1
            },
            {
                topic: "Macedoine",
                emoji: "🔪🥗",
                question: "Is macedoine small mixed dice?",
                options: [
                    "True",
                    "False",
                    "Large chunks",
                    "Strips"
                ],
                correct: 1
            },
            {
                topic: "Rooibos",
                emoji: "🍵🇿🇦",
                question: "Is rooibos red bush tea?",
                options: [
                    "Green bush",
                    "True",
                    "False",
                    "Black bush"
                ],
                correct: 1
            },
            {
                topic: "Jardinière",
                emoji: "🥕🔪",
                question: "Is jardinière mixed vegetables?",
                options: [
                    "True",
                    "False",
                    "Meat only",
                    "Sauce"
                ],
                correct: 0
            },
            {
                topic: "Amaretto",
                emoji: "🥃🌰",
                question: "Is amaretto almond-flavored liqueur?",
                options: [
                    "Hazelnut",
                    "False",
                    "True",
                    "Walnut"
                ],
                correct: 0
            },
            {
                topic: "Provençale",
                emoji: "🍅🧄",
                question: "Does provençale have tomatoes and garlic?",
                options: [
                    "True",
                    "False",
                    "No tomato",
                    "No garlic"
                ],
                correct: 1
            },
            {
                topic: "Biluochun Tea",
                emoji: "🍵🐚",
                question: "Is Biluochun a green tea?",
                options: [
                    "Oolong",
                    "False",
                    "True",
                    "Black"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Brazilian Cuisine",
                emoji: "🇧🇷🍖",
                question: "Name three Brazilian dishes?",
                options: [
                    "Feijoada",
                    "Churrasco",
                    "Moqueca",
                    "Pão de queijo"
                ],
                correct: 0
            },
            {
                topic: "Warm Drinks",
                emoji: "☕🔥",
                question: "Name three warm beverages?",
                options: [
                    "Coffee",
                    "Tea",
                    "Hot chocolate",
                    "Mulled wine"
                ],
                correct: 0
            },
            {
                topic: "Squash Vegetables",
                emoji: "🎃🥒",
                question: "Name three types of squash?",
                options: [
                    "Butternut",
                    "Zucchini",
                    "Pumpkin",
                    "Acorn"
                ],
                correct: 0
            },
            {
                topic: "Fall Drinks",
                emoji: "🍂🥤",
                question: "Name three autumn beverages?",
                options: [
                    "Pumpkin spice latte",
                    "Apple cider",
                    "Hot tea",
                    "Mulled wine"
                ],
                correct: 0
            },
            {
                topic: "Fermented Foods",
                emoji: "🥒🫙",
                question: "Name three fermented foods?",
                options: [
                    "Kimchi",
                    "Sauerkraut",
                    "Pickles",
                    "Yogurt"
                ],
                correct: 0
            },
            {
                topic: "Pseudocereals",
                emoji: "🌾🥗",
                question: "Name three pseudocereals?",
                options: [
                    "Quinoa",
                    "Amaranth",
                    "Buckwheat",
                    "Chia"
                ],
                correct: 0
            },
            {
                topic: "Polish Food",
                emoji: "🇵🇱🥟",
                question: "Name three Polish dishes?",
                options: [
                    "Pierogi",
                    "Bigos",
                    "Kielbasa",
                    "Żurek"
                ],
                correct: 0
            },
            {
                topic: "Plating Techniques",
                emoji: "🍽️🎨",
                question: "Name three plating methods?",
                options: [
                    "Stacking",
                    "Drizzling",
                    "Swooshing",
                    "Dotting"
                ],
                correct: 0
            },
            {
                topic: "Camping Foods",
                emoji: "🏕️🔥",
                question: "Name three camping food items?",
                options: [
                    "S'mores",
                    "Hot dogs",
                    "Beans",
                    "Trail mix"
                ],
                correct: 0
            }
        ]
    },
    13: {
        "easy": [
            {
                topic: "Lemon",
                emoji: "🍋💛",
                question: "Is lemon sour?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Distilled Water",
                emoji: "💧🔬",
                question: "Is distilled water purified?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Duck",
                emoji: "🦆🍖",
                question: "Is duck a type of poultry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Melon Juice",
                emoji: "🍈🥤",
                question: "Is melon juice sweet?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Popsicle",
                emoji: "🍡❄️",
                question: "Is a popsicle frozen?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Earl Grey Tea",
                emoji: "🍵🍊",
                question: "Does Earl Grey have bergamot?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cucumber",
                emoji: "🥒💚",
                question: "Is cucumber green?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cream Soda",
                emoji: "🥤🤍",
                question: "Is cream soda sweet?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Jam",
                emoji: "🍓🍞",
                question: "Is jam made from fruit?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mango Lassi",
                emoji: "🥭🥤",
                question: "Does mango lassi contain yogurt?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Sardines",
                emoji: "🐟🥫",
                question: "Are sardines small oily fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Bone Broth",
                emoji: "🍖🥣",
                question: "Is bone broth simmered for hours?",
                options: [
                    "Minutes only",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pita",
                emoji: "🫓🥙",
                question: "Does pita have a pocket?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Honeydew Juice",
                emoji: "🥤🍈",
                question: "Is honeydew juice light green?",
                options: [
                    "Red",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Udon",
                emoji: "🍜🇯🇵",
                question: "Are udon noodles thick?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Blue Latte",
                emoji: "☕💙",
                question: "Is blue latte made with spirulina?",
                options: [
                    "Coffee only",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Panko",
                emoji: "🍤🍞",
                question: "Is panko Japanese breadcrumbs?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Quinoa Milk",
                emoji: "🥛🌾",
                question: "Is quinoa milk from quinoa?",
                options: [
                    "From oats",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Profiteroles",
                emoji: "🍰🍫",
                question: "Are profiteroles cream puffs?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mulberry Juice",
                emoji: "🥤🫐",
                question: "Is mulberry juice dark purple?",
                options: [
                    "Yellow",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Cholent",
                emoji: "🍲✡️",
                question: "Is cholent a Jewish slow-cooked stew?",
                options: [
                    "True",
                    "False",
                    "Fast cooked"
                ],
                correct: 0
            },
            {
                topic: "Café au Lait",
                emoji: "☕🥛",
                question: "Is café au lait equal coffee and milk?",
                options: [
                    "No milk",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lavash",
                emoji: "🫓🇦🇲",
                question: "Is lavash Armenian flatbread?",
                options: [
                    "True",
                    "False",
                    "Italian"
                ],
                correct: 0
            },
            {
                topic: "Camu Camu Juice",
                emoji: "🥤🍒",
                question: "Is camu camu highest in vitamin C?",
                options: [
                    "Low vitamin",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Adobo",
                emoji: "🍖🇵🇭",
                question: "Is adobo a Filipino dish?",
                options: [
                    "True",
                    "False",
                    "Chinese"
                ],
                correct: 0
            },
            {
                topic: "Cortado",
                emoji: "☕🥛",
                question: "Is cortado espresso with warm milk?",
                options: [
                    "Cold milk",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Challah",
                emoji: "🍞🌀",
                question: "Is challah braided bread?",
                options: [
                    "True",
                    "False",
                    "Flat"
                ],
                correct: 1
            },
            {
                topic: "Pomelo Juice",
                emoji: "🥤🍊",
                question: "Is pomelo larger than grapefruit?",
                options: [
                    "Smaller",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Beignet",
                emoji: "🍩🇫🇷",
                question: "Is beignet a French donut?",
                options: [
                    "True",
                    "False",
                    "Italian"
                ],
                correct: 1
            },
            {
                topic: "Schisandra Tea",
                emoji: "🍵🔴",
                question: "Is schisandra called five flavor berry?",
                options: [
                    "One flavor",
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Robert Sauce",
                emoji: "🧅🍷",
                question: "Is Robert sauce with onions and mustard?",
                options: [
                    "True",
                    "False",
                    "No onions",
                    "No mustard"
                ],
                correct: 1
            },
            {
                topic: "Bai Hao Tea",
                emoji: "🍵🦗",
                question: "Is Bai Hao bitten by leafhoppers?",
                options: [
                    "No insects",
                    "True",
                    "False",
                    "Artificial"
                ],
                correct: 1
            },
            {
                topic: "Lardons",
                emoji: "🥓🔪",
                question: "Are lardons small bacon pieces?",
                options: [
                    "True",
                    "False",
                    "Large chunks",
                    "Not bacon"
                ],
                correct: 0
            },
            {
                topic: "Sambuca",
                emoji: "🥃⭐",
                question: "Is sambuca served with coffee beans?",
                options: [
                    "No beans",
                    "False",
                    "True",
                    "Tea leaves"
                ],
                correct: 1
            },
            {
                topic: "Paysanne Cut",
                emoji: "🔪🥕",
                question: "Is paysanne 1/2 inch thin squares?",
                options: [
                    "True",
                    "False",
                    "Thick",
                    "Strips"
                ],
                correct: 0
            },
            {
                topic: "Honeybush Tea",
                emoji: "🍵🍯",
                question: "Is honeybush from South Africa?",
                options: [
                    "Asia",
                    "True",
                    "False",
                    "Europe"
                ],
                correct: 1
            },
            {
                topic: "Tournée Cut",
                emoji: "🥔🔪",
                question: "Is tournée a football-shaped cut?",
                options: [
                    "True",
                    "False",
                    "Square",
                    "Round"
                ],
                correct: 1
            },
            {
                topic: "Frangelico",
                emoji: "🥃🌰",
                question: "Is Frangelico hazelnut liqueur?",
                options: [
                    "Almond",
                    "False",
                    "True",
                    "Walnut"
                ],
                correct: 0
            },
            {
                topic: "Florentine Style",
                emoji: "🥬🍳",
                question: "Does Florentine include spinach?",
                options: [
                    "True",
                    "False",
                    "No spinach",
                    "Kale"
                ],
                correct: 0
            },
            {
                topic: "Anji Bai Cha",
                emoji: "🍵⚪",
                question: "Is Anji Bai Cha a rare white tea?",
                options: [
                    "Common",
                    "False",
                    "True",
                    "Black tea"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Ethiopian Cuisine",
                emoji: "🇪🇹🍛",
                question: "Name three Ethiopian dishes?",
                options: [
                    "Injera",
                    "Doro wat",
                    "Kitfo",
                    "Tibs"
                ],
                correct: 0
            },
            {
                topic: "Smoothie Boosters",
                emoji: "🥤💪",
                question: "Name three smoothie add-ins?",
                options: [
                    "Protein powder",
                    "Chia seeds",
                    "Spinach",
                    "Flax seeds"
                ],
                correct: 0
            },
            {
                topic: "Gourd Vegetables",
                emoji: "🎃🥒",
                question: "Name three gourd vegetables?",
                options: [
                    "Pumpkin",
                    "Zucchini",
                    "Cucumber",
                    "Bottle gourd"
                ],
                correct: 0
            },
            {
                topic: "Spring Drinks",
                emoji: "🌸🥤",
                question: "Name three spring beverages?",
                options: [
                    "Lavender tea",
                    "Strawberry lemonade",
                    "Green tea",
                    "Flower tea"
                ],
                correct: 0
            },
            {
                topic: "Pickled Foods",
                emoji: "🥒🫙",
                question: "Name three pickled items?",
                options: [
                    "Cucumbers",
                    "Onions",
                    "Peppers",
                    "Cabbage"
                ],
                correct: 0
            },
            {
                topic: "Gluten-Free Grains",
                emoji: "🌾🚫",
                question: "Name three gluten-free grains?",
                options: [
                    "Rice",
                    "Quinoa",
                    "Corn",
                    "Millet"
                ],
                correct: 0
            },
            {
                topic: "Hungarian Food",
                emoji: "🇭🇺🍲",
                question: "Name three Hungarian dishes?",
                options: [
                    "Goulash",
                    "Paprikash",
                    "Lángos",
                    "Dobos torte"
                ],
                correct: 0
            },
            {
                topic: "Pome Fruits",
                emoji: "🍎🍐",
                question: "Name three pome fruits?",
                options: [
                    "Apple",
                    "Pear",
                    "Quince",
                    "Loquat"
                ],
                correct: 0
            },
            {
                topic: "Garnishing",
                emoji: "🌿✨",
                question: "Name three garnish types?",
                options: [
                    "Herbs",
                    "Edible flowers",
                    "Citrus zest",
                    "Microgreens"
                ],
                correct: 0
            },
            {
                topic: "Buffet Foods",
                emoji: "🍽️🎉",
                question: "Name three buffet items?",
                options: [
                    "Salads",
                    "Pasta",
                    "Meats",
                    "Bread"
                ],
                correct: 0
            }
        ]
    },
    14: {
        "easy": [
            {
                topic: "Lime",
                emoji: "🍋💚",
                question: "Is lime green and sour?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Tap Water",
                emoji: "💧🚰",
                question: "Does tap water come from faucets?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Venison",
                emoji: "🦌🍖",
                question: "Is venison deer meat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Watermelon Juice",
                emoji: "🍉🥤",
                question: "Is watermelon juice red or pink?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Fudge",
                emoji: "🍫🟫",
                question: "Is fudge soft and sweet?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Rooibos Tea",
                emoji: "🍵🇿🇦",
                question: "Is rooibos caffeine-free?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Bell Pepper",
                emoji: "🫑🌈",
                question: "Do bell peppers come in colors?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cherry Cola",
                emoji: "🥤🍒",
                question: "Does cherry cola have cherry flavor?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Marmalade",
                emoji: "🍊🍞",
                question: "Is marmalade made from citrus?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chocolate Shake",
                emoji: "🍫🥤",
                question: "Is chocolate shake made with chocolate?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Herring",
                emoji: "🐟🧂",
                question: "Is herring often pickled?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Consommé",
                emoji: "🥣✨",
                question: "Is consommé a clear soup?",
                options: [
                    "Thick soup",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "English Muffin",
                emoji: "🍞🇬🇧",
                question: "Are English muffins toasted?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cranberry Juice",
                emoji: "🫐🥤",
                question: "Is cranberry juice tart?",
                options: [
                    "Sweet only",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Soba",
                emoji: "🍜🇯🇵",
                question: "Are soba noodles made with buckwheat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Activated Charcoal Latte",
                emoji: "☕⚫",
                question: "Is activated charcoal latte black?",
                options: [
                    "White",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Falafel Ball",
                emoji: "🧆💚",
                question: "Is falafel deep-fried?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tiger Nut Milk",
                emoji: "🥛🌰",
                question: "Is tiger nut milk dairy-free?",
                options: [
                    "Contains dairy",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cannoli",
                emoji: "🥐🇮🇹",
                question: "Are cannoli Italian pastries?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pomegranate Juice",
                emoji: "🥤💎",
                question: "Is pomegranate juice antioxidant-rich?",
                options: [
                    "Low antioxidants",
                    "True"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Sukiyaki",
                emoji: "🍲🇯🇵",
                question: "Is sukiyaki a Japanese hot pot?",
                options: [
                    "True",
                    "False",
                    "Korean"
                ],
                correct: 1
            },
            {
                topic: "Shakerato",
                emoji: "☕🧊",
                question: "Is shakerato shaken iced espresso?",
                options: [
                    "Stirred",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tigelle",
                emoji: "🍞🇮🇹",
                question: "Are tigelle small Italian breads?",
                options: [
                    "True",
                    "False",
                    "Large"
                ],
                correct: 0
            },
            {
                topic: "Sea Buckthorn Juice",
                emoji: "🥤🍊",
                question: "Is sea buckthorn juice tangy?",
                options: [
                    "Bland",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Satay",
                emoji: "🍢🥜",
                question: "Is satay served with peanut sauce?",
                options: [
                    "True",
                    "False",
                    "No sauce"
                ],
                correct: 1
            },
            {
                topic: "Nitro Brew",
                emoji: "☕💨",
                question: "Is nitro brew infused with nitrogen?",
                options: [
                    "Oxygen",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Damper Bread",
                emoji: "🍞🇦🇺",
                question: "Is damper Australian bush bread?",
                options: [
                    "True",
                    "False",
                    "American"
                ],
                correct: 0
            },
            {
                topic: "Moringa Tea",
                emoji: "🍵🌿",
                question: "Is moringa called miracle tree?",
                options: [
                    "Common tree",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Mochi",
                emoji: "🍡🇯🇵",
                question: "Is mochi made from rice?",
                options: [
                    "True",
                    "False",
                    "Wheat"
                ],
                correct: 0
            },
            {
                topic: "Mangosteen Juice",
                emoji: "🥤👑",
                question: "Is mangosteen purple inside?",
                options: [
                    "White inside",
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Ravigote Sauce",
                emoji: "🥗🌿",
                question: "Is ravigote a herb vinaigrette?",
                options: [
                    "True",
                    "False",
                    "Cream based",
                    "Tomato based"
                ],
                correct: 1
            },
            {
                topic: "Huangshan Maofeng",
                emoji: "🍵⛰️",
                question: "Is Huangshan Maofeng a green tea?",
                options: [
                    "Black tea",
                    "True",
                    "False",
                    "White tea"
                ],
                correct: 1
            },
            {
                topic: "Rondelle",
                emoji: "🔪🥕",
                question: "Is rondelle round slices?",
                options: [
                    "True",
                    "False",
                    "Square",
                    "Strips"
                ],
                correct: 0
            },
            {
                topic: "Galliano",
                emoji: "🥃💛",
                question: "Is Galliano vanilla-flavored liqueur?",
                options: [
                    "Chocolate",
                    "False",
                    "True",
                    "Coffee"
                ],
                correct: 0
            },
            {
                topic: "Oblique Cut",
                emoji: "🔪🥕",
                question: "Is oblique cut diagonal slicing?",
                options: [
                    "True",
                    "False",
                    "Straight",
                    "Diced"
                ],
                correct: 1
            },
            {
                topic: "Essiac Tea",
                emoji: "🍵🌿",
                question: "Is Essiac a herbal blend?",
                options: [
                    "Single herb",
                    "True",
                    "False",
                    "Not herbal"
                ],
                correct: 0
            },
            {
                topic: "Gaufrette",
                emoji: "🥔🔪",
                question: "Is gaufrette waffle-cut potato?",
                options: [
                    "True",
                    "False",
                    "Thick cut",
                    "Mashed"
                ],
                correct: 1
            },
            {
                topic: "Strega",
                emoji: "🥃💛",
                question: "Is Strega Italian herbal liqueur?",
                options: [
                    "French",
                    "False",
                    "True",
                    "Spanish"
                ],
                correct: 0
            },
            {
                topic: "Milanaise Style",
                emoji: "🥩🍋",
                question: "Does Milanaise mean breaded and fried?",
                options: [
                    "True",
                    "False",
                    "Grilled",
                    "Boiled"
                ],
                correct: 1
            },
            {
                topic: "Junshan Yinzhen",
                emoji: "🍵💛",
                question: "Is Junshan Yinzhen a yellow tea?",
                options: [
                    "Green",
                    "False",
                    "True",
                    "Black"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Peruvian Cuisine",
                emoji: "🇵🇪🥘",
                question: "Name three Peruvian dishes?",
                options: [
                    "Ceviche",
                    "Lomo saltado",
                    "Aji de gallina",
                    "Causa"
                ],
                correct: 0
            },
            {
                topic: "Protein Drinks",
                emoji: "💪🥤",
                question: "Name three protein beverages?",
                options: [
                    "Protein shake",
                    "Milk",
                    "Soy milk",
                    "Kefir"
                ],
                correct: 0
            },
            {
                topic: "Brassica Vegetables",
                emoji: "🥦🥬",
                question: "Name three brassica vegetables?",
                options: [
                    "Broccoli",
                    "Cabbage",
                    "Cauliflower",
                    "Kale"
                ],
                correct: 0
            },
            {
                topic: "Hydrating Drinks",
                emoji: "💧🥤",
                question: "Name three hydrating beverages?",
                options: [
                    "Water",
                    "Coconut water",
                    "Sports drink",
                    "Herbal tea"
                ],
                correct: 0
            },
            {
                topic: "Preserved Foods",
                emoji: "🥫🫙",
                question: "Name three preserved items?",
                options: [
                    "Jam",
                    "Pickles",
                    "Canned goods",
                    "Jerky"
                ],
                correct: 0
            },
            {
                topic: "Whole Grains",
                emoji: "🌾🍚",
                question: "Name three whole grains?",
                options: [
                    "Brown rice",
                    "Oats",
                    "Barley",
                    "Whole wheat"
                ],
                correct: 0
            },
            {
                topic: "Swedish Food",
                emoji: "🇸🇪🥘",
                question: "Name three Swedish dishes?",
                options: [
                    "Meatballs",
                    "Gravlax",
                    "Surströmming",
                    "Knäckebröd"
                ],
                correct: 0
            },
            {
                topic: "Drupes",
                emoji: "🍑🍒",
                question: "Name three drupe fruits?",
                options: [
                    "Peach",
                    "Plum",
                    "Cherry",
                    "Apricot"
                ],
                correct: 0
            },
            {
                topic: "Flavor Profiles",
                emoji: "😋👅",
                question: "Name three basic tastes?",
                options: [
                    "Sweet",
                    "Salty",
                    "Sour",
                    "Bitter"
                ],
                correct: 0
            },
            {
                topic: "Street Snacks",
                emoji: "🌭🍢",
                question: "Name three street snack items?",
                options: [
                    "Corn dog",
                    "Skewers",
                    "Pretzels",
                    "Tacos"
                ],
                correct: 0
            }
        ]
    },
    15: {
        "easy": [
            {
                topic: "Pineapple",
                emoji: "🍍💛",
                question: "Is pineapple sweet and tropical?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Bottled Water",
                emoji: "💧🍾",
                question: "Does bottled water come in bottles?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Rabbit",
                emoji: "🐰🍖",
                question: "Is rabbit a lean meat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Toffee",
                emoji: "🍬🟤",
                question: "Is toffee hard and sweet?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Peppermint Tea",
                emoji: "🍵🌿",
                question: "Does peppermint tea taste minty?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
{
                topic: "Eggplant",
                emoji: "🍆💜",
                question: "Is eggplant purple?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Dr Pepper",
                emoji: "🥤🟤",
                question: "Is Dr Pepper a soft drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Peanut Butter",
                emoji: "🥜🥄",
                question: "Is peanut butter spreadable?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Vanilla Shake",
                emoji: "🍦🥤",
                question: "Is vanilla shake white?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Trout",
                emoji: "🐟🏞️",
                question: "Is trout a freshwater fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Bisque",
                emoji: "🦞🥣",
                question: "Is bisque a creamy soup?",
                options: [
                    "Clear soup",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Tortilla",
                emoji: "🌮🫓",
                question: "Is tortilla related to food and drinks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lychee Juice",
                emoji: "🥤🍈",
                question: "Is lychee juice sweet?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pad Thai",
                emoji: "🍜🇹🇭",
                question: "Is Pad Thai a noodle dish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Beetroot Latte",
                emoji: "☕💜",
                question: "Is beetroot latte naturally pink?",
                options: [
                    "Brown",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Scone",
                emoji: "🥐☕",
                question: "Are scones British pastries?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Brazil Nut Milk",
                emoji: "🥛🌰",
                question: "Is Brazil nut milk from Brazil nuts?",
                options: [
                    "From cashews",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Panna Cotta",
                emoji: "🍮🇮🇹",
                question: "Is panna cotta an Italian dessert?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Persimmon Juice",
                emoji: "🥤🍊",
                question: "Is persimmon juice orange?",
                options: [
                    "Green",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Menudo",
                emoji: "🍲🇲🇽",
                question: "Is menudo a Mexican tripe soup?",
                options: [
                    "True",
                    "False",
                    "Spanish"
                ],
                correct: 0
            },
            {
                topic: "Breve",
                emoji: "☕🥛",
                question: "Is breve made with half-and-half?",
                options: [
                    "Skim milk",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Arepa",
                emoji: "🫓🇨🇴",
                question: "Is arepa a corn cake?",
                options: [
                    "True",
                    "False",
                    "Wheat"
                ],
                correct: 0
            },
            {
                topic: "Yuzu Juice",
                emoji: "🥤🍋",
                question: "Is yuzu a Japanese citrus?",
                options: [
                    "Chinese",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Massaman",
                emoji: "🍛🇹🇭",
                question: "Is massaman a Thai curry?",
                options: [
                    "True",
                    "False",
                    "Indian"
                ],
                correct: 0
            },
            {
                topic: "Einspänner",
                emoji: "☕🥛",
                question: "Is Einspänner Austrian coffee?",
                options: [
                    "Italian",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Bannock",
                emoji: "🍞🇨🇦",
                question: "Is bannock Indigenous flatbread?",
                options: [
                    "True",
                    "False",
                    "European"
                ],
                correct: 0
            },
            {
                topic: "Dandelion Tea",
                emoji: "🍵🌼",
                question: "Is dandelion tea from flowers?",
                options: [
                    "Roots only",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Gulab Jamun",
                emoji: "🍡🇮🇳",
                question: "Is gulab jamun an Indian sweet?",
                options: [
                    "True",
                    "False",
                    "Chinese"
                ],
                correct: 1
            },
            {
                topic: "Feijoa Juice",
                emoji: "🥤🍈",
                question: "Is feijoa from South America?",
                options: [
                    "Europe",
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Soubise Sauce",
                emoji: "🧅🥛",
                question: "Is Soubise béchamel with onions?",
                options: [
                    "True",
                    "False",
                    "No onions",
                    "Tomato base"
                ],
                correct: 0
            },
            {
                topic: "Taiping Houkui",
                emoji: "🍵🐒",
                question: "Is Taiping Houkui a green tea?",
                options: [
                    "Oolong",
                    "True",
                    "False",
                    "Black tea"
                ],
                correct: 0
            },
            {
                topic: "Pont-Neuf",
                emoji: "🥔🔪",
                question: "Is Pont-Neuf thick French fries?",
                options: [
                    "True",
                    "False",
                    "Thin",
                    "Not fries"
                ],
                correct: 1
            },
            {
                topic: "Chambord",
                emoji: "🥃🫐",
                question: "Is Chambord raspberry liqueur?",
                options: [
                    "Strawberry",
                    "False",
                    "True",
                    "Blueberry"
                ],
                correct: 0
            },
            {
                topic: "Bâtonnet Cut",
                emoji: "🔪🥕",
                question: "Is bâtonnet 1/4 x 1/4 x 2 inches?",
                options: [
                    "True",
                    "False",
                    "Smaller",
                    "Larger"
                ],
                correct: 0
            },
            {
                topic: "Tulsi Tea",
                emoji: "🍵🌿",
                question: "Is tulsi holy basil tea?",
                options: [
                    "Mint",
                    "True",
                    "False",
                    "Regular basil"
                ],
                correct: 0
            },
            {
                topic: "Allumette",
                emoji: "🥔🔪",
                question: "Is allumette matchstick-sized cut?",
                options: [
                    "True",
                    "False",
                    "Thick",
                    "Diced"
                ],
                correct: 1
            },
            {
                topic: "Midori",
                emoji: "🥃💚",
                question: "Is Midori melon liqueur?",
                options: [
                    "Apple",
                    "False",
                    "True",
                    "Grape"
                ],
                correct: 1
            },
            {
                topic: "Duglere Style",
                emoji: "🐟🍅",
                question: "Does Duglere have tomatoes?",
                options: [
                    "True",
                    "False",
                    "No tomatoes",
                    "Cream only"
                ],
                correct: 1
            },
            {
                topic: "Liu An Gua Pian",
                emoji: "🍵🍃",
                question: "Is Liu An Gua Pian a green tea?",
                options: [
                    "White",
                    "False",
                    "True",
                    "Yellow"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Argentine Cuisine",
                emoji: "🇦🇷🥩",
                question: "Name three Argentine dishes?",
                options: [
                    "Asado",
                    "Empanadas",
                    "Chimichurri",
                    "Dulce de leche"
                ],
                correct: 0
            },
            {
                topic: "Detox Drinks",
                emoji: "🥤🌿",
                question: "Is detox drinks related to food and drinks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
                {
                topic: "Legumes",
                emoji: "🫘🌱",
                question: "Name three legumes?",
                options: [
                    "Beans",
                    "Lentils",
                    "Chickpeas",
                    "Peas"
                ],
                correct: 0
            },
            {
                topic: "Alkaline Drinks",
                emoji: "💧🥤",
                question: "Name three alkaline beverages?",
                options: [
                    "Alkaline water",
                    "Coconut water",
                    "Green juice",
                    "Aloe vera juice"
                ],
                correct: 0
            },
            {
                topic: "Smoked Foods",
                emoji: "💨🍖",
                question: "Name three smoked items?",
                options: [
                    "Salmon",
                    "Bacon",
                    "Sausage",
                    "Cheese"
                ],
                correct: 0
            },
            {
                topic: "Heirloom Grains",
                emoji: "🌾📜",
                question: "Name three heirloom grains?",
                options: [
                    "Einkorn",
                    "Emmer",
                    "Kamut",
                    "Spelt"
                ],
                correct: 0
            },
            {
                topic: "Austrian Food",
                emoji: "🇦🇹🥨",
                question: "Name three Austrian dishes?",
                options: [
                    "Schnitzel",
                    "Apfelstrudel",
                    "Sachertorte",
                    "Kaiserschmarrn"
                ],
                correct: 0
            },
            {
                topic: "Aggregate Fruits",
                emoji: "🍓🫐",
                question: "Name three aggregate fruits?",
                options: [
                    "Raspberry",
                    "Blackberry",
                    "Strawberry",
                    "Mulberry"
                ],
                correct: 0
            },
            {
                topic: "Food Pairings",
                emoji: "🍷🧀",
                question: "Name three classic food pairings?",
                options: [
                    "Wine and cheese",
                    "Tomato and basil",
                    "Peanut butter and jelly",
                    "Fish and chips"
                ],
                correct: 0
            },
            {
                topic: "Food Truck Items",
                emoji: "🚚🌮",
                question: "Name three food truck items?",
                options: [
                    "Tacos",
                    "Burgers",
                    "Hot dogs",
                    "Falafel"
                ],
                correct: 0
            }
        ]
    },
    16: {
        "easy": [
            {
                topic: "Peach",
                emoji: "🍑💛",
                question: "Is peach a fuzzy fruit?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Seltzer Water",
                emoji: "💧✨",
                question: "Is seltzer water carbonated?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Quail",
                emoji: "🐦🍽️",
                question: "Is quail a small bird?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Apple Juice",
                emoji: "🍎🧃",
                question: "Is apple juice made from apples?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Caramel",
                emoji: "🍮🟤",
                question: "Is caramel made from sugar?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chamomile Tea",
                emoji: "🍵🌼",
                question: "Is chamomile tea calming?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mushroom",
                emoji: "🍄🌰",
                question: "Is mushroom a fungus?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Fanta",
                emoji: "🥤🍊",
                question: "Is Fanta an orange soda?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cream Cheese",
                emoji: "🧀🥯",
                question: "Is cream cheese soft?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Strawberry Lemonade",
                emoji: "🍓🍋",
                question: "Does strawberry lemonade have berries?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Mackerel",
                emoji: "🐟🌊",
                question: "Is mackerel an oily fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chowder",
                emoji: "🥣🐚",
                question: "Is chowder a thick soup?",
                options: [
                    "Thin soup",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Brioche",
                emoji: "🍞🧈",
                question: "Is brioche rich and buttery?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Tamarind Juice",
                emoji: "🥤🌳",
                question: "Is tamarind juice sweet and sour?",
                options: [
                    "Bland",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Teppanyaki",
                emoji: "🍳🇯🇵",
                question: "Is teppanyaki grilled on iron plate?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Rose Latte",
                emoji: "☕🌹",
                question: "Is rose latte pink?",
                options: [
                    "Brown",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Crumpet",
                emoji: "🥞🇬🇧",
                question: "Is crumpet a British griddle cake?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pistachio Milk",
                emoji: "🥛💚",
                question: "Is pistachio milk from pistachios?",
                options: [
                    "From almonds",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Crème Brûlée",
                emoji: "🍮🔥",
                question: "Does crème brûlée have caramelized top?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Quince Juice",
                emoji: "🥤🍐",
                question: "Is quince juice from quince fruit?",
                options: [
                    "From apples",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Bouillabaisse",
                emoji: "🍲🐟",
                question: "Is bouillabaisse from Provence?",
                options: [
                    "True",
                    "False",
                    "Normandy"
                ],
                correct: 1
            },
            {
                topic: "Café Bombón",
                emoji: "☕🥛",
                question: "Is café bombón with condensed milk?",
                options: [
                    "Regular milk",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mantou",
                emoji: "🥟🇨🇳",
                question: "Is mantou a steamed bun?",
                options: [
                    "True",
                    "False",
                    "Fried"
                ],
                correct: 1
            },
            {
                topic: "Acai Juice",
                emoji: "🥤🫐",
                question: "Is acai a superfood berry?",
                options: [
                    "Regular food",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tonkatsu",
                emoji: "🥩🇯🇵",
                question: "Is tonkatsu breaded pork cutlet?",
                options: [
                    "True",
                    "False",
                    "Beef"
                ],
                correct: 1
            },
            {
                topic: "Café de Olla",
                emoji: "☕🇲🇽",
                question: "Is café de olla Mexican spiced coffee?",
                options: [
                    "Cuban",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Zopf",
                emoji: "🍞🇨🇭",
                question: "Is zopf a Swiss braided bread?",
                options: [
                    "True",
                    "False",
                    "German"
                ],
                correct: 1
            },
            {
                topic: "Nettle Tea",
                emoji: "🍵🌿",
                question: "Is nettle tea from stinging nettles?",
                options: [
                    "Mint",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sfogliatelle",
                emoji: "🥐🇮🇹",
                question: "Is sfogliatelle a shell-shaped pastry?",
                options: [
                    "True",
                    "False",
                    "Round"
                ],
                correct: 1
            },
            {
                topic: "Jabuticaba Juice",
                emoji: "🥤🇧🇷",
                question: "Is jabuticaba a Brazilian fruit?",
                options: [
                    "Mexican",
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Nantua Sauce",
                emoji: "🦐🥣",
                question: "Is Nantua made with crayfish?",
                options: [
                    "True",
                    "False",
                    "No shellfish",
                    "Lobster only"
                ],
                correct: 1
            },
            {
                topic: "Xinyang Maojian",
                emoji: "🍵💚",
                question: "Is Xinyang Maojian a green tea?",
                options: [
                    "Black",
                    "True",
                    "False",
                    "White"
                ],
                correct: 1
            },
            {
                topic: "Mirepoix",
                emoji: "🥕🧅",
                question: "Is mirepoix 2:1:1 onion:celery:carrot?",
                options: [
                    "True",
                    "False",
                    "1:1:1",
                    "3:2:1"
                ],
                correct: 0
            },
            {
                topic: "Benedictine",
                emoji: "🥃🌿",
                question: "Is Bénédictine herbal liqueur from France?",
                options: [
                    "Italy",
                    "False",
                    "True",
                    "Spain"
                ],
                correct: 0
            },
            {
                topic: "Parmentier Cut",
                emoji: "🥔🔪",
                question: "Is Parmentier 1/2 inch cube?",
                options: [
                    "True",
                    "False",
                    "1 inch",
                    "1/4 inch"
                ],
                correct: 0
            },
            {
                topic: "Jiaogulan Tea",
                emoji: "🍵🌿",
                question: "Is jiaogulan called immortality herb?",
                options: [
                    "Common herb",
                    "True",
                    "False",
                    "Death herb"
                ],
                correct: 1
            },
            {
                topic: "Dice Cut",
                emoji: "🔪🥔",
                question: "Is large dice 3/4 inch cubes?",
                options: [
                    "True",
                    "False",
                    "1/2 inch",
                    "1 inch"
                ],
                correct: 0
            },
            {
                topic: "Crème de Violette",
                emoji: "🥃💜",
                question: "Is Crème de Violette violet liqueur?",
                options: [
                    "Rose",
                    "False",
                    "True",
                    "Lavender"
                ],
                correct: 1
            },
            {
                topic: "Véronique Style",
                emoji: "🐟🍇",
                question: "Does Véronique include grapes?",
                options: [
                    "True",
                    "False",
                    "No grapes",
                    "Berries"
                ],
                correct: 0
            },
            {
                topic: "Bai Mudan Tea",
                emoji: "🍵🌸",
                question: "Is Bai Mudan white peony tea?",
                options: [
                    "Green",
                    "False",
                    "True",
                    "Black"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Colombian Cuisine",
                emoji: "🇨🇴🍲",
                question: "Name three Colombian dishes?",
                options: [
                    "Bandeja paisa",
                    "Arepas",
                    "Sancocho",
                    "Empanadas"
                ],
                correct: 0
            },
            {
                topic: "Immune Boosting Drinks",
                emoji: "💪🥤",
                question: "Name three immunity drinks?",
                options: [
                    "Orange juice",
                    "Green tea",
                    "Ginger tea",
                    "Turmeric latte"
                ],
                correct: 0
            },
            {
                topic: "Pulses",
                emoji: "🫘🌾",
                question: "Name three pulse crops?",
                options: [
                    "Lentils",
                    "Chickpeas",
                    "Split peas",
                    "Black beans"
                ],
                correct: 0
            },
            {
                topic: "Electrolyte Drinks",
                emoji: "⚡🥤",
                question: "Name three electrolyte beverages?",
                options: [
                    "Sports drink",
                    "Coconut water",
                    "Pedialyte",
                    "Electrolyte water"
                ],
                correct: 0
            },
            {
                topic: "Cured Foods",
                emoji: "🧂🥩",
                question: "Name three cured items?",
                options: [
                    "Bacon",
                    "Ham",
                    "Salami",
                    "Prosciutto"
                ],
                correct: 0
            },
            {
                topic: "Superfood Grains",
                emoji: "🌾⭐",
                question: "Name three superfood grains?",
                options: [
                    "Quinoa",
                    "Amaranth",
                    "Teff",
                    "Farro"
                ],
                correct: 0
            },
            {
                topic: "Swiss Food",
                emoji: "🇨🇭🧀",
                question: "Name three Swiss dishes?",
                options: [
                    "Fondue",
                    "Raclette",
                    "Rösti",
                    "Zürcher Geschnetzeltes"
                ],
                correct: 0
            },
            {
                topic: "Berry Types",
                emoji: "🫐🍓",
                question: "Is berry types related to food and drinks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
                {
                topic: "Molecular Gastronomy",
                emoji: "🔬🍽️",
                question: "Name three molecular techniques?",
                options: [
                    "Spherification",
                    "Foaming",
                    "Gelification",
                    "Emulsification"
                ],
                correct: 0
            },
            {
                topic: "Festival Foods",
                emoji: "🎪🍿",
                question: "Name three festival food items?",
                options: [
                    "Funnel cake",
                    "Corn dog",
                    "Cotton candy",
                    "Fried Oreos"
                ],
                correct: 0
            }
        ]
    },
    17: {
        "easy": [
            {
                topic: "Plum",
                emoji: "💜🍑",
                question: "Is plum a stone fruit?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Club Soda",
                emoji: "💧🫧",
                question: "Is club soda fizzy?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Goat",
                emoji: "🐐🍖",
                question: "Is goat meat called chevon?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Orange Juice",
                emoji: "🍊🥤",
                question: "Is orange juice a breakfast drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Marshmallow",
                emoji: "☁️🍬",
                question: "Is marshmallow soft and sweet?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Hibiscus Tea",
                emoji: "🍵🌺",
                question: "Is hibiscus tea related to food and drinks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
                {
                topic: "Zucchini",
                emoji: "🥒💚",
                question: "Is zucchini a squash?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pepsi",
                emoji: "🥤🔵",
                question: "Is Pepsi a cola drink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Nutella",
                emoji: "🍫🌰",
                question: "Is Nutella chocolate spread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mint Lemonade",
                emoji: "🍋🌿",
                question: "Does mint lemonade have mint?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Halibut",
                emoji: "🐟🌊",
                question: "Is halibut a flatfish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Gazpacho",
                emoji: "🥣🍅",
                question: "Is gazpacho served cold?",
                options: [
                    "Hot",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Flatbread",
                emoji: "🫓🔥",
                question: "Is flatbread thin?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pomegranate Juice",
                emoji: "🥤💎",
                question: "Is pomegranate juice ruby red?",
                options: [
                    "Yellow",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Poke Bowl",
                emoji: "🐟🍚",
                question: "Is poke bowl Hawaiian?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dalgona Coffee",
                emoji: "☕☁️",
                question: "Is dalgona coffee related to food and drinks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
                {
                topic: "Naan Bread",
                emoji: "🫓🇮🇳",
                question: "Is naan baked in tandoor?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Hazelnut Milk",
                emoji: "🥛🌰",
                question: "Is hazelnut milk from hazelnuts?",
                options: [
                    "From walnuts",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mille-Feuille",
                emoji: "🍰🇫🇷",
                question: "Does mille-feuille have layers?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Elderberry Juice",
                emoji: "🥤🫐",
                question: "Is elderberry juice dark purple?",
                options: [
                    "Green",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Kare-Kare",
                emoji: "🍲🇵🇭",
                question: "Is kare-kare Filipino peanut stew?",
                options: [
                    "True",
                    "False",
                    "Thai"
                ],
                correct: 0
            },
            {
                topic: "Café Noisette",
                emoji: "☕🌰",
                question: "Is café noisette espresso with milk?",
                options: [
                    "No milk",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Khachapuri",
                emoji: "🧀🇬🇪",
                question: "Is khachapuri Georgian cheese bread?",
                options: [
                    "True",
                    "False",
                    "Russian"
                ],
                correct: 1
            },
            {
                topic: "Guarana Juice",
                emoji: "🥤⚡",
                question: "Is guarana high in caffeine?",
                options: [
                    "No caffeine",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Okonomiyaki",
                emoji: "🥞🇯🇵",
                question: "Is okonomiyaki a savory pancake?",
                options: [
                    "True",
                    "False",
                    "Sweet only"
                ],
                correct: 0
            },
            {
                topic: "Wiener Melange",
                emoji: "☕🇦🇹",
                question: "Is Wiener Melange Austrian coffee?",
                options: [
                    "German",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Karjalanpiirakka",
                emoji: "🥧🇫🇮",
                question: "Is karjalanpiirakka Finnish pastry?",
                options: [
                    "True",
                    "False",
                    "Swedish"
                ],
                correct: 1
            },
            {
                topic: "Rambutan Juice",
                emoji: "🥤🔴",
                question: "Is rambutan a hairy fruit?",
                options: [
                    "Smooth",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Kladdkaka",
                emoji: "🍫🇸🇪",
                question: "Is kladdkaka Swedish chocolate cake?",
                options: [
                    "True",
                    "False",
                    "Danish"
                ],
                correct: 0
            },
            {
                topic: "Cupuaçu Juice",
                emoji: "🥤🇧🇷",
                question: "Is cupuaçu from Amazon?",
                options: [
                    "Africa",
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Bercy Sauce",
                emoji: "🐟🍷",
                question: "Is Bercy made with white wine?",
                options: [
                    "True",
                    "False",
                    "Red wine",
                    "No wine"
                ],
                correct: 1
            },
            {
                topic: "Mao Feng Tea",
                emoji: "🍵⛰️",
                question: "Is Mao Feng a green tea?",
                options: [
                    "Oolong",
                    "True",
                    "False",
                    "Black"
                ],
                correct: 0
            },
            {
                topic: "Sofrito",
                emoji: "🧅🫑",
                question: "Is sofrito an aromatic base?",
                options: [
                    "True",
                    "False",
                    "Sauce only",
                    "Garnish"
                ],
                correct: 1
            },
            {
                topic: "Kahlúa",
                emoji: "🥃☕",
                question: "Is Kahlúa coffee liqueur?",
                options: [
                    "Chocolate",
                    "False",
                    "True",
                    "Vanilla"
                ],
                correct: 0
            },
            {
                topic: "Concassé",
                emoji: "🍅🔪",
                question: "Is concassé peeled chopped tomatoes?",
                options: [
                    "True",
                    "False",
                    "With skin",
                    "Whole"
                ],
                correct: 0
            },
            {
                topic: "Gyokuro Tea",
                emoji: "🍵💎",
                question: "Is Gyokuro shade-grown tea?",
                options: [
                    "Sun grown",
                    "True",
                    "False",
                    "Indoor"
                ],
                correct: 0
            },
            {
                topic: "Salpicon",
                emoji: "🥗🔪",
                question: "Is salpicon finely diced mixture?",
                options: [
                    "True",
                    "False",
                    "Large chunks",
                    "Whole"
                ],
                correct: 0
            },
            {
                topic: "Tia Maria",
                emoji: "🥃☕",
                question: "Is Tia Maria coffee liqueur from Jamaica?",
                options: [
                    "Mexico",
                    "False",
                    "True",
                    "Brazil"
                ],
                correct: 1
            },
            {
                topic: "À la Grecque",
                emoji: "🫒🍋",
                question: "Is à la grecque cooked in oil and lemon?",
                options: [
                    "True",
                    "False",
                    "Water only",
                    "Cream"
                ],
                correct: 0
            },
            {
                topic: "Gunpowder Tea",
                emoji: "🍵💥",
                question: "Is Gunpowder tea rolled into pellets?",
                options: [
                    "Flat leaves",
                    "False",
                    "True",
                    "Powdered"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Chilean Cuisine",
                emoji: "🇨🇱🥘",
                question: "Name three Chilean dishes?",
                options: [
                    "Empanadas",
                    "Pastel de choclo",
                    "Cazuela",
                    "Completo"
                ],
                correct: 0
            },
            {
                topic: "Pre-Workout Drinks",
                emoji: "💪🥤",
                question: "Name three pre-workout beverages?",
                options: [
                    "Coffee",
                    "Energy drink",
                    "BCAAs",
                    "Pre-workout supplement"
                ],
                correct: 0
            },
            {
                topic: "Tubers",
                emoji: "🥔🍠",
                question: "Name three tuber vegetables?",
                options: [
                    "Potato",
                    "Sweet potato",
                    "Yam",
                    "Cassava"
                ],
                correct: 0
            },
            {
                topic: "Recovery Drinks",
                emoji: "🥤💪",
                question: "Name three post-workout beverages?",
                options: [
                    "Protein shake",
                    "Chocolate milk",
                    "Smoothie",
                    "Coconut water"
                ],
                correct: 0
            },
            {
                topic: "Dehydrated Foods",
                emoji: "☀️🍎",
                question: "Name three dehydrated items?",
                options: [
                    "Dried fruit",
                    "Jerky",
                    "Sun-dried tomatoes",
                    "Dried mushrooms"
                ],
                correct: 0
            },
            {
                topic: "Ancient Grains",
                emoji: "🌾📜",
                question: "Name three ancient grain varieties?",
                options: [
                    "Einkorn",
                    "Emmer",
                    "Spelt",
                    "Kamut"
                ],
                correct: 0
            },
            {
                topic: "Dutch Food",
                emoji: "🇳🇱🧀",
                question: "Name three Dutch dishes?",
                options: [
                    "Stroopwafel",
                    "Bitterballen",
                    "Poffertjes",
                    "Haring"
                ],
                correct: 0
            },
            {
                topic: "Vine Fruits",
                emoji: "🍇🍉",
                question: "Name three fruits that grow on vines?",
                options: [
                    "Grapes",
                    "Watermelon",
                    "Cantaloupe",
                    "Passion fruit"
                ],
                correct: 0
            },
            {
                topic: "Emulsification",
                emoji: "🥚🫒",
                question: "Name three emulsified sauces?",
                options: [
                    "Mayonnaise",
                    "Hollandaise",
                    "Aioli",
                    "Béarnaise"
                ],
                correct: 0
            },
            {
                topic: "County Fair Foods",
                emoji: "🎡🍗",
                question: "Name three fair food items?",
                options: [
                    "Fried chicken",
                    "Corn dog",
                    "Funnel cake",
                    "Turkey leg"
                ],
                correct: 0
            }
        ]
    },
    18: {
        "easy": [
            {
                topic: "Apricot",
                emoji: "🍑🧡",
                question: "Is apricot orange?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Purified Water",
                emoji: "💧✨",
                question: "Is purified water clean?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Bison",
                emoji: "🦬🍖",
                question: "Is bison a red meat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Grape Juice",
                emoji: "🍇🥤",
                question: "Is grape juice purple?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Gummy Bears",
                emoji: "🐻🍬",
                question: "Are gummy bears chewy?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lemon Tea",
                emoji: "🍵🍋",
                question: "Does lemon tea have lemon?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Asparagus",
                emoji: "🥒💚",
                question: "Is asparagus a green vegetable?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "7UP",
                emoji: "🥤💚",
                question: "Is 7UP lemon-lime soda?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ketchup",
                emoji: "🍅🥫",
                question: "Is ketchup made from tomatoes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Fruit Punch",
                emoji: "🍹🍓",
                question: "Does fruit punch have mixed fruits?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Cod",
                emoji: "🐟🌊",
                question: "Is cod a white fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Minestrone",
                emoji: "🥣🇮🇹",
                question: "Is minestrone vegetable soup?",
                options: [
                    "Meat soup",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sourdough Bread",
                emoji: "🍞🫧",
                question: "Is sourdough naturally fermented?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Goji Berry Juice",
                emoji: "🥤🔴",
                question: "Is goji berry juice red?",
                options: [
                    "Green",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Bibimbap",
                emoji: "🍚🇰🇷",
                question: "Is bibimbap mixed rice bowl?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cortado",
                emoji: "☕🥛",
                question: "Is cortado equal espresso and milk?",
                options: [
                    "More milk",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pide",
                emoji: "🫓🇹🇷",
                question: "Is pide Turkish flatbread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pea Protein Shake",
                emoji: "🥤💚",
                question: "Is pea protein from peas?",
                options: [
                    "From beans",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tarte Tatin",
                emoji: "🍎🥧",
                question: "Is tarte Tatin upside-down tart?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Blueberry Juice",
                emoji: "🫐🥤",
                question: "Is blueberry juice blue-purple?",
                options: [
                    "Yellow",
                    "True"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Bún Bò Huế",
                emoji: "🍜🇻🇳",
                question: "Is bún bò Huế spicy Vietnamese soup?",
                options: [
                    "True",
                    "False",
                    "Mild"
                ],
                correct: 1
            },
            {
                topic: "Cortado Condensada",
                emoji: "☕🥛",
                question: "Is cortado condensada with condensed milk?",
                options: [
                    "Regular milk",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Borodinsky",
                emoji: "🍞🇷🇺",
                question: "Is Borodinsky Russian rye bread?",
                options: [
                    "True",
                    "False",
                    "German"
                ],
                correct: 1
            },
            {
                topic: "Baobab Juice",
                emoji: "🥤🌳",
                question: "Is baobab from African tree?",
                options: [
                    "Asian",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Khinkali",
                emoji: "🥟🇬🇪",
                question: "Is khinkali Georgian dumpling?",
                options: [
                    "True",
                    "False",
                    "Chinese"
                ],
                correct: 1
            },
            {
                topic: "Café Touba",
                emoji: "☕🇸🇳",
                question: "Is café Touba Senegalese spiced coffee?",
                options: [
                    "Ethiopian",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lefse",
                emoji: "🫓🇳🇴",
                question: "Is lefse Norwegian potato flatbread?",
                options: [
                    "True",
                    "False",
                    "Swedish"
                ],
                correct: 1
            },
            {
                topic: "Soursop Juice",
                emoji: "🥤🍈",
                question: "Is soursop also called guanabana?",
                options: [
                    "No",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Medovik",
                emoji: "🍰🍯",
                question: "Is medovik honey cake?",
                options: [
                    "True",
                    "False",
                    "Chocolate"
                ],
                correct: 0
            },
            {
                topic: "Lucuma Juice",
                emoji: "🥤🇵🇪",
                question: "Is lucuma from Peru?",
                options: [
                    "Mexico",
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Choron Sauce",
                emoji: "🍅🥚",
                question: "Is Choron béarnaise with tomato?",
                options: [
                    "True",
                    "False",
                    "No tomato",
                    "Hollandaise"
                ],
                correct: 1
            },
            {
                topic: "Pi Lo Chun Tea",
                emoji: "🍵🐚",
                question: "Is Pi Lo Chun green tea?",
                options: [
                    "White",
                    "True",
                    "False",
                    "Oolong"
                ],
                correct: 0
            },
            {
                topic: "Battuto",
                emoji: "🧅🥕",
                question: "Is battuto raw Italian soffritto?",
                options: [
                    "True",
                    "False",
                    "Cooked",
                    "Spanish"
                ],
                correct: 1
            },
            {
                topic: "Cointreau",
                emoji: "🥃🍊",
                question: "Is Cointreau orange liqueur?",
                options: [
                    "Lemon",
                    "False",
                    "True",
                    "Lime"
                ],
                correct: 0
            },
            {
                topic: "Printanière",
                emoji: "🥕🌿",
                question: "Is printanière spring vegetables?",
                options: [
                    "True",
                    "False",
                    "Winter",
                    "Fall"
                ],
                correct: 1
            },
            {
                topic: "Kukicha Tea",
                emoji: "🍵🌿",
                question: "Is kukicha twig tea?",
                options: [
                    "Leaf only",
                    "True",
                    "False",
                    "Flower"
                ],
                correct: 0
            },
            {
                topic: "Duxelles",
                emoji: "🍄🔪",
                question: "Is duxelles finely chopped mushrooms?",
                options: [
                    "True",
                    "False",
                    "Whole",
                    "Sliced"
                ],
                correct: 0
            },
            {
                topic: "Grand Marnier",
                emoji: "🥃🍊",
                question: "Is Grand Marnier cognac-based?",
                options: [
                    "Vodka",
                    "False",
                    "True",
                    "Rum"
                ],
                correct: 0
            },
            {
                topic: "Duxbury Style",
                emoji: "🦞🧈",
                question: "Does Duxbury involve lobster?",
                options: [
                    "True",
                    "False",
                    "Chicken",
                    "Beef"
                ],
                correct: 1
            },
            {
                topic: "Pouchong Tea",
                emoji: "🍵🌸",
                question: "Is Pouchong lightly oxidized oolong?",
                options: [
                    "Fully oxidized",
                    "False",
                    "True",
                    "Not oolong"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Venezuelan Cuisine",
                emoji: "🇻🇪🥘",
                question: "Name three Venezuelan dishes?",
                options: [
                    "Arepas",
                    "Pabellón criollo",
                    "Hallacas",
                    "Cachapas"
                ],
                correct: 0
            },
            {
                topic: "Meal Replacement Drinks",
                emoji: "🥤🍽️",
                question: "Name three meal replacement options?",
                options: [
                    "Protein shake",
                    "Smoothie",
                    "Meal shake",
                    "Soylent"
                ],
                correct: 0
            },
            {
                topic: "Bulb Vegetables",
                emoji: "🧅🧄",
                question: "Name three bulb vegetables?",
                options: [
                    "Onion",
                    "Garlic",
                    "Shallot",
                    "Fennel"
                ],
                correct: 0
            },
            {
                topic: "Vitamin Drinks",
                emoji: "💊🥤",
                question: "Name three vitamin-rich beverages?",
                options: [
                    "Orange juice",
                    "Smoothie",
                    "Vitamin water",
                    "Fortified milk"
                ],
                correct: 0
            },
            {
                topic: "Frozen Foods",
                emoji: "❄️🍕",
                question: "Name three frozen food items?",
                options: [
                    "Ice cream",
                    "Frozen pizza",
                    "Frozen vegetables",
                    "Popsicles"
                ],
                correct: 0
            },
            {
                topic: "Heritage Grains",
                emoji: "🌾👴",
                question: "Name three heritage grain types?",
                options: [
                    "Red Fife wheat",
                    "Turkey Red",
                    "Marquis",
                    "Sonora"
                ],
                correct: 0
            },
            {
                topic: "Belgian Food",
                emoji: "🇧🇪🍟",
                question: "Name three Belgian dishes?",
                options: [
                    "Frites",
                    "Waffles",
                    "Moules-frites",
                    "Carbonnade"
                ],
                correct: 0
            },
            {
                topic: "Tree Fruits",
                emoji: "🍎🌳",
                question: "Name three fruits that grow on trees?",
                options: [
                    "Apple",
                    "Orange",
                    "Peach",
                    "Cherry"
                ],
                correct: 0
            },
            {
                topic: "Reduction Sauces",
                emoji: "🍷🔥",
                question: "Name three reduction-based sauces?",
                options: [
                    "Demi-glace",
                    "Beurre blanc",
                    "Red wine reduction",
                    "Balsamic reduction"
                ],
                correct: 0
            },
            {
                topic: "Movie Theater Foods",
                emoji: "🎬🍿",
                question: "Name three movie snack items?",
                options: [
                    "Popcorn",
                    "Candy",
                    "Nachos",
                    "Hot dog"
                ],
                correct: 0
            }
        ]
    },
    19: {
        "easy": [
            {
                topic: "Blackberry",
                emoji: "🫐⚫",
                question: "Is blackberry a dark berry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Alkaline Water",
                emoji: "💧⚗️",
                question: "Is alkaline water higher pH?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Elk",
                emoji: "🦌🍖",
                question: "Is elk a game meat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pineapple Juice",
                emoji: "🍍🥤",
                question: "Is pineapple juice tropical?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Licorice",
                emoji: "🍬⚫",
                question: "Is licorice black candy?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Ginseng Tea",
                emoji: "🍵🌿",
                question: "Is ginseng tea herbal?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Radish",
                emoji: "🥕❤️",
                question: "Is radish crunchy?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Ginger Ale",
                emoji: "🥤🫚",
                question: "Does ginger ale have ginger?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Mustard",
                emoji: "🌭💛",
                question: "Is mustard a condiment?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Green Smoothie",
                emoji: "🥤💚",
                question: "Does green smoothie have vegetables?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Snapper",
                emoji: "🐟🌊",
                question: "Is snapper a reef fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pho",
                emoji: "🍜🇻🇳",
                question: "Is pho Vietnamese noodle soup?",
                options: [
                    "Thai",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pumpernickel Bread",
                emoji: "🍞🟤",
                question: "Is pumpernickel dark bread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cherry Juice",
                emoji: "🍒🥤",
                question: "Is cherry juice antioxidant-rich?",
                options: [
                    "Low antioxidants",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Shawarma",
                emoji: "🥙🌀",
                question: "Is shawarma rotisserie meat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Ristretto",
                emoji: "☕💧",
                question: "Is ristretto shorter than espresso?",
                options: [
                    "Longer",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Injera",
                emoji: "🫓🇪🇹",
                question: "Is injera spongy flatbread?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sunflower Milk",
                emoji: "🥛🌻",
                question: "Is sunflower milk from sunflower seeds?",
                options: [
                    "From nuts",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Baklava",
                emoji: "🥮🍯",
                question: "Is baklava sweet and flaky?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cranberry Juice",
                emoji: "🫐🥤",
                question: "Is cranberry juice good for UTIs?",
                options: [
                    "No benefits",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Samgyetang",
                emoji: "🍲🇰🇷",
                question: "Is samgyetang ginseng chicken soup?",
                options: [
                    "True",
                    "False",
                    "Beef soup"
                ],
                correct: 0
            },
            {
                topic: "Café Zorro",
                emoji: "☕💧",
                question: "Is café zorro double espresso with water?",
                options: [
                    "Single shot",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Tsoureki",
                emoji: "🍞🇬🇷",
                question: "Is tsoureki Greek Easter bread?",
                options: [
                    "True",
                    "False",
                    "Italian"
                ],
                correct: 0
            },
            {
                topic: "Aronia Juice",
                emoji: "🥤🫐",
                question: "Is aronia also called chokeberry?",
                options: [
                    "Blueberry",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pelmeni",
                emoji: "🥟🇷🇺",
                question: "Is pelmeni Russian dumpling?",
                options: [
                    "True",
                    "False",
                    "Chinese"
                ],
                correct: 1
            },
            {
                topic: "Café Bombón",
                emoji: "☕🍯",
                question: "Is café bombón layered coffee?",
                options: [
                    "Mixed",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pan de Muerto",
                emoji: "🍞💀",
                question: "Is pan de muerto Day of the Dead bread?",
                options: [
                    "True",
                    "False",
                    "Christmas"
                ],
                correct: 0
            },
            {
                topic: "Schisandra Juice",
                emoji: "🥤🔴",
                question: "Does schisandra have five flavors?",
                options: [
                    "One flavor",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Sacher Torte",
                emoji: "🍰🇦🇹",
                question: "Is Sacher torte Austrian chocolate cake?",
                options: [
                    "True",
                    "False",
                    "German"
                ],
                correct: 1
            },
            {
                topic: "Karkadé",
                emoji: "🥤🌺",
                question: "Is karkadé hibiscus tea drink?",
                options: [
                    "Rose tea",
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Foyot Sauce",
                emoji: "🥩🥚",
                question: "Is Foyot béarnaise with meat glaze?",
                options: [
                    "True",
                    "False",
                    "Hollandaise",
                    "No glaze"
                ],
                correct: 0
            },
            {
                topic: "Mao Jian Tea",
                emoji: "🍵💚",
                question: "Is Mao Jian a green tea?",
                options: [
                    "Black",
                    "True",
                    "False",
                    "Oolong"
                ],
                correct: 1
            },
            {
                topic: "Refogado",
                emoji: "🧅🍅",
                question: "Is refogado Portuguese sofrito?",
                options: [
                    "True",
                    "False",
                    "Spanish",
                    "Italian"
                ],
                correct: 0
            },
            {
                topic: "Campari",
                emoji: "🥃🔴",
                question: "Is Campari bitter Italian aperitif?",
                options: [
                    "Sweet",
                    "False",
                    "True",
                    "Mild"
                ],
                correct: 1
            },
            {
                topic: "Brunoise Cut",
                emoji: "🔪🥕",
                question: "Is brunoise cut related to food and drinks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
                {
                topic: "Bancha Tea",
                emoji: "🍵🍂",
                question: "Is bancha everyday Japanese tea?",
                options: [
                    "Premium",
                    "True",
                    "False",
                    "Ceremonial"
                ],
                correct: 1
            },
            {
                topic: "Jardinière Cut",
                emoji: "🥕🔪",
                question: "Is jardinière bâtonnet-sized vegetables?",
                options: [
                    "True",
                    "False",
                    "Dice",
                    "Strips"
                ],
                correct: 1
            },
            {
                topic: "Aperol",
                emoji: "🥃🍊",
                question: "Is Aperol orange Italian aperitif?",
                options: [
                    "Red",
                    "False",
                    "True",
                    "Yellow"
                ],
                correct: 1
            },
            {
                topic: "À la King",
                emoji: "🐔🥛",
                question: "Is à la king in cream sauce?",
                options: [
                    "True",
                    "False",
                    "Tomato",
                    "No sauce"
                ],
                correct: 0
            },
            {
                topic: "Hojicha Tea",
                emoji: "🍵🔥",
                question: "Is hojicha roasted tea?",
                options: [
                    "Fresh",
                    "False",
                    "True",
                    "Steamed"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Uruguayan Cuisine",
                emoji: "🇺🇾🥩",
                question: "Name three Uruguayan dishes?",
                options: [
                    "Asado",
                    "Chivito",
                    "Empanadas",
                    "Milanesa"
                ],
                correct: 0
            },
            {
                topic: "Cleanse Drinks",
                emoji: "🥤🌿",
                question: "Name three cleansing beverages?",
                options: [
                    "Green juice",
                    "Lemon water",
                    "Detox tea",
                    "Celery juice"
                ],
                correct: 0
            },
            {
                topic: "Stem Vegetables",
                emoji: "🥬🌿",
                question: "Name three stem vegetables?",
                options: [
                    "Asparagus",
                    "Celery",
                    "Rhubarb",
                    "Fennel"
                ],
                correct: 0
            },
            {
                topic: "Probiotic Drinks",
                emoji: "🫧🥤",
                question: "Is probiotic drinks related to food and drinks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
                {
                topic: "Candied Foods",
                emoji: "🍬✨",
                question: "Name three candied items?",
                options: [
                    "Candied fruit",
                    "Candied ginger",
                    "Candied nuts",
                    "Candied peel"
                ],
                correct: 0
            },
            {
                topic: "Sprouted Grains",
                emoji: "🌾🌱",
                question: "Name three sprouted grain products?",
                options: [
                    "Ezekiel bread",
                    "Sprouted quinoa",
                    "Sprouted rice",
                    "Sprouted wheat"
                ],
                correct: 0
            },
            {
                topic: "Norwegian Food",
                emoji: "🇳🇴🐟",
                question: "Name three Norwegian dishes?",
                options: [
                    "Gravlax",
                    "Lutefisk",
                    "Rakfisk",
                    "Fårikål"
                ],
                correct: 0
            },
            {
                topic: "Pod Fruits",
                emoji: "🫛🥜",
                question: "Name three pod vegetables?",
                options: [
                    "Peas",
                    "Green beans",
                    "Snow peas",
                    "Peanuts"
                ],
                correct: 0
            },
            {
                topic: "Pan Sauces",
                emoji: "🍳🥄",
                question: "Name three pan sauce techniques?",
                options: [
                    "Deglazing",
                    "Reduction",
                    "Mounting with butter",
                    "Cream finish"
                ],
                correct: 0
            },
            {
                topic: "Airport Foods",
                emoji: "✈️🍔",
                question: "Name three airport food items?",
                options: [
                    "Sandwiches",
                    "Fast food",
                    "Coffee",
                    "Pizza"
                ],
                correct: 0
            }
        ]
    },
    20: {
        "easy": [
            {
                topic: "Nectarine",
                emoji: "🍑✨",
                question: "Is nectarine smooth-skinned?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Vitamin Water",
                emoji: "💧💊",
                question: "Does vitamin water have vitamins?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Wild Boar",
                emoji: "🐗🍖",
                question: "Is wild boar game meat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Coconut Juice",
                emoji: "🥥🥤",
                question: "Is coconut juice related to food and drinks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
                {
                topic: "Cotton Candy",
                emoji: "🍭☁️",
                question: "Is cotton candy fluffy?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sage Tea",
                emoji: "🍵🌿",
                question: "Is sage tea herbal?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Turnip",
                emoji: "🥕🤍",
                question: "Is turnip a root vegetable?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Tonic Water",
                emoji: "🥤💎",
                question: "Does tonic water have quinine?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Soy Sauce",
                emoji: "🥢🟤",
                question: "Is soy sauce salty?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Tropical Smoothie",
                emoji: "🥤🌴",
                question: "Does tropical smoothie have tropical fruits?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Barramundi",
                emoji: "🐟🇦🇺",
                question: "Is barramundi Australian fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Tom Kha",
                emoji: "🥥🍜",
                question: "Is tom kha coconut soup?",
                options: [
                    "Tomato soup",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Ciabatta Bread",
                emoji: "🍞🇮🇹",
                question: "Does ciabatta have holes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Açaí Juice",
                emoji: "🫐🥤",
                question: "Is açaí juice purple?",
                options: [
                    "Green",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Bulgogi",
                emoji: "🥩🇰🇷",
                question: "Is bulgogi marinated beef?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lungo",
                emoji: "☕💧",
                question: "Is lungo longer espresso?",
                options: [
                    "Shorter",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Focaccia",
                emoji: "🍞🫒",
                question: "Is focaccia topped with olive oil?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Barley Milk",
                emoji: "🥛🌾",
                question: "Is barley milk from barley?",
                options: [
                    "From oats",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Napoleon",
                emoji: "🍰🇫🇷",
                question: "Is Napoleon layered pastry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lime Juice",
                emoji: "🍋🥤",
                question: "Is lime juice citrus?",
                options: [
                    "Not citrus",
                    "True"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Haleem",
                emoji: "🍲🇵🇰",
                question: "Is haleem Pakistani meat stew?",
                options: [
                    "True",
                    "False",
                    "Indian"
                ],
                correct: 0
            },
            {
                topic: "Café con Leche",
                emoji: "☕🥛",
                question: "Is café con leche equal coffee and milk?",
                options: [
                    "More coffee",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pandesal",
                emoji: "🍞🇵🇭",
                question: "Is pandesal Filipino bread roll?",
                options: [
                    "True",
                    "False",
                    "Mexican"
                ],
                correct: 1
            },
            {
                topic: "Birch Juice",
                emoji: "🥤🌳",
                question: "Is birch water tapped from trees?",
                options: [
                    "Fruit juice",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Manti",
                emoji: "🥟🇹🇷",
                question: "Is manti Turkish dumpling?",
                options: [
                    "True",
                    "False",
                    "Chinese"
                ],
                correct: 0
            },
            {
                topic: "Café Cubano",
                emoji: "☕🇨🇺",
                question: "Is café cubano sweet espresso?",
                options: [
                    "Bitter",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Kolache",
                emoji: "🥐🇨🇿",
                question: "Is kolache Czech pastry?",
                options: [
                    "True",
                    "False",
                    "Polish"
                ],
                correct: 1
            },
            {
                topic: "Pine Needle Tea",
                emoji: "🍵🌲",
                question: "Is pine needle tea from pine trees?",
                options: [
                    "Oak trees",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Baumkuchen",
                emoji: "🍰🇩🇪",
                question: "Is baumkuchen tree cake?",
                options: [
                    "True",
                    "False",
                    "Flat cake"
                ],
                correct: 1
            },
            {
                topic: "Noni Juice",
                emoji: "🥤🍈",
                question: "Is noni juice medicinal?",
                options: [
                    "No benefits",
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Paloise Sauce",
                emoji: "🌿🥚",
                question: "Is Paloise béarnaise with mint?",
                options: [
                    "True",
                    "False",
                    "Basil",
                    "No herbs"
                ],
                correct: 0
            },
            {
                topic: "Kabusecha Tea",
                emoji: "🍵☂️",
                question: "Is kabusecha partially shaded?",
                options: [
                    "Full sun",
                    "True",
                    "False",
                    "Fully shaded"
                ],
                correct: 1
            },
            {
                topic: "Trinity",
                emoji: "🧅🫑",
                question: "Is trinity Cajun aromatic base?",
                options: [
                    "True",
                    "False",
                    "French",
                    "Italian"
                ],
                correct: 0
            },
            {
                topic: "Chambord",
                emoji: "🥃🫐",
                question: "Is Chambord French raspberry liqueur?",
                options: [
                    "Italian",
                    "False",
                    "True",
                    "Spanish"
                ],
                correct: 1
            },
            {
                topic: "Paysanne Cut",
                emoji: "🔪🥕",
                question: "Is paysanne thin flat shapes?",
                options: [
                    "True",
                    "False",
                    "Thick cubes",
                    "Strips"
                ],
                correct: 0
            },
            {
                topic: "Pu-erh Tea",
                emoji: "🍵🇨🇳",
                question: "Is pu-erh fermented tea?",
                options: [
                    "Fresh only",
                    "True",
                    "False",
                    "Not fermented"
                ],
                correct: 0
            },
            {
                topic: "Salpicon Cut",
                emoji: "🔪🥗",
                question: "Is salpicon small dice mixture?",
                options: [
                    "True",
                    "False",
                    "Large chunks",
                    "Whole"
                ],
                correct: 0
            },
            {
                topic: "Drambuie",
                emoji: "🥃🍯",
                question: "Is Drambuie Scotch-based liqueur?",
                options: [
                    "Bourbon",
                    "False",
                    "True",
                    "Vodka"
                ],
                correct: 1
            },
            {
                topic: "Nicoise Style",
                emoji: "🥗🫒",
                question: "Does Nicoise include tomatoes and olives?",
                options: [
                    "True",
                    "False",
                    "No tomatoes",
                    "No olives"
                ],
                correct: 0
            },
            {
                topic: "Silver Needle Tea",
                emoji: "🍵⚪",
                question: "Is Silver Needle premium white tea?",
                options: [
                    "Green",
                    "False",
                    "True",
                    "Black"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Ecuadorian Cuisine",
                emoji: "🇪🇨🍤",
                question: "Name three Ecuadorian dishes?",
                options: [
                    "Ceviche",
                    "Encebollado",
                    "Llapingachos",
                    "Hornado"
                ],
                correct: 0
            },
            {
                topic: "Hangover Drinks",
                emoji: "🥤😵",
                question: "Name three hangover remedy beverages?",
                options: [
                    "Coconut water",
                    "Sports drink",
                    "Ginger tea",
                    "Tomato juice"
                ],
                correct: 0
            },
            {
                topic: "Flower Vegetables",
                emoji: "🥦🌸",
                question: "Name three flower vegetables?",
                options: [
                    "Broccoli",
                    "Cauliflower",
                    "Artichoke",
                    "Broccoli rabe"
                ],
                correct: 0
            },
            {
                topic: "Adaptogen Drinks",
                emoji: "🥤🌿",
                question: "Name three adaptogenic beverages?",
                options: [
                    "Ashwagandha tea",
                    "Ginseng tea",
                    "Reishi tea",
                    "Maca smoothie"
                ],
                correct: 0
            },
            {
                topic: "Caramelized Foods",
                emoji: "🔥🍯",
                question: "Name three caramelized items?",
                options: [
                    "Caramelized onions",
                    "Crème brûlée",
                    "Caramel sauce",
                    "Caramelized bananas"
                ],
                correct: 0
            },
            {
                topic: "Fermented Grains",
                emoji: "🌾🫧",
                question: "Name three fermented grain products?",
                options: [
                    "Beer",
                    "Sake",
                    "Sourdough",
                    "Miso"
                ],
                correct: 0
            },
            {
                topic: "Portuguese Food",
                emoji: "🇵🇹🐟",
                question: "Name three Portuguese dishes?",
                options: [
                    "Bacalhau",
                    "Pastéis de nata",
                    "Francesinha",
                    "Caldo verde"
                ],
                correct: 0
            },
            {
                topic: "Seed Vegetables",
                emoji: "🌽🫘",
                question: "Name three seed vegetables?",
                options: [
                    "Corn",
                    "Peas",
                    "Beans",
                    "Okra"
                ],
                correct: 0
            },
            {
                topic: "Compound Butter",
                emoji: "🧈🌿",
                question: "Name three compound butter types?",
                options: [
                    "Garlic butter",
                    "Herb butter",
                    "Lemon butter",
                    "Truffle butter"
                ],
                correct: 0
            },
            {
                topic: "Stadium Foods",
                emoji: "🏟️🌭",
                question: "Name three stadium food items?",
                options: [
                    "Hot dogs",
                    "Nachos",
                    "Popcorn",
                    "Pretzels"
                ],
                correct: 0
            }
        ]
    }
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['food-drinks'] = foodDrinksQuestions;
}
