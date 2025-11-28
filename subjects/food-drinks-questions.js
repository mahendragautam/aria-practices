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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Beverages",
                emoji: "🍟🌭",
                question: "Is coffee a hot beverage?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pizza",
                emoji: "🍿🥨",
                question: "Does pizza originate from Italy?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Water",
                emoji: "🍩🍪",
                question: "Is water essential for survival?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Smoothies",
                emoji: "🥛🍼",
                question: "Are smoothies blended drinks?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Sushi",
                emoji: "🍺🍻",
                question: "Is sushi always made with raw fish?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Lemonade",
                emoji: "🍷🍾",
                question: "Is lemonade made with lemons?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Rice",
                emoji: "🍜🍲",
                question: "Is rice a grain?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Coconut Water",
                emoji: "🍱🍛",
                question: "Does coconut water come from coconuts?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sake",
                emoji: "🍎🍏",
                question: "Is sake made from rice?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Umami",
                emoji: "😋🍄",
                question: "Is umami the fifth basic taste?",
                options: [
                    "Never",
                    "False",
                    "True",
                    "Maybe"
                ],
                correct: 1
            },
            {
                topic: "Coffee Regions",
                emoji: "☕🌍",
                question: "Is Ethiopia considered the birthplace of coffee?",
                options: [
                    "Unknown",
                    "False",
                    "China",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Molecular Gastronomy",
                emoji: "🔬🍽️",
                question: "Does molecular gastronomy use scientific techniques in cooking?",
                options: [
                    "False",
                    "True",
                    "Sometimes",
                    "Never"
                ],
                correct: 0
            },
            {
                topic: "Wine Terroir",
                emoji: "🍷🌍",
                question: "Does terroir refer to environmental factors affecting wine?",
                options: [
                    "False",
                    "True",
                    "Maybe",
                    "No"
                ],
                correct: 2
            },
            {
                topic: "Saffron",
                emoji: "🌺💰",
                question: "Is saffron the most expensive spice by weight?",
                options: [
                    "True",
                    "Third most",
                    "Second most",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Champagne",
                emoji: "🍾🇫🇷",
                question: "Can only sparkling wine from Champagne region be called Champagne?",
                options: [
                    "Any region",
                    "False",
                    "Only Italy",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Maillard Reaction",
                emoji: "🔥🥩",
                question: "Does the Maillard reaction create browning in cooked foods?",
                options: [
                    "True",
                    "Rarely",
                    "Never",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Pu-erh Tea",
                emoji: "🍵🇨🇳",
                question: "Is pu-erh tea aged and fermented?",
                options: [
                    "Only dried",
                    "True",
                    "Only fresh",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Wagyu Beef",
                emoji: "🥩🇯🇵",
                question: "Does wagyu beef have high marbling?",
                options: [
                    "False",
                    "True",
                    "No",
                    "Medium"
                ],
                correct: 1
            },
            {
                topic: "Absinthe",
                emoji: "🍸💚",
                question: "Does absinthe contain wormwood?",
                options: [
                    "Only vintage",
                    "False",
                    "Never",
                    "True"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Culinary Arts",
                emoji: "👨‍🍳🌟",
                question: "Name three French mother sauces?",
                options: [
                    "Velouté",
                    "Béchamel",
                    "Hollandaise",
                    "Espagnole"
                ],
                correct: 1
            },
            {
                topic: "Coffee Brewing",
                emoji: "☕🔧",
                question: "Name three coffee brewing methods?",
                options: [
                    "Pour over",
                    "French press",
                    "Cold brew",
                    "Espresso"
                ],
                correct: 3
            },
            {
                topic: "Knife Skills",
                emoji: "🔪📏",
                question: "Name three basic knife cuts?",
                options: [
                    "Julienne",
                    "Chiffonade",
                    "Dice",
                    "Brunoise"
                ],
                correct: 0
            },
            {
                topic: "Tea Types",
                emoji: "🍵🌈",
                question: "Name three types of tea?",
                options: [
                    "Black",
                    "Green",
                    "White",
                    "Oolong"
                ],
                correct: 1
            },
            {
                topic: "Pasta Shapes",
                emoji: "🍝📐",
                question: "Name three pasta shapes?",
                options: [
                    "Penne",
                    "Farfalle",
                    "Rigatoni",
                    "Fusilli"
                ],
                correct: 0
            },
            {
                topic: "Cocktail Ingredients",
                emoji: "🍸🍋",
                question: "Name three classic cocktail ingredients?",
                options: [
                    "Bitters",
                    "Vermouth",
                    "Citrus",
                    "Simple syrup"
                ],
                correct: 0
            },
            {
                topic: "Cheese Varieties",
                emoji: "🧀🌍",
                question: "Name three types of cheese?",
                options: [
                    "Brie",
                    "Cheddar",
                    "Gouda",
                    "Parmesan"
                ],
                correct: 1
            },
            {
                topic: "Smoothie Ingredients",
                emoji: "🥤🍓",
                question: "Name three common smoothie ingredients?",
                options: [
                    "Spinach",
                    "Yogurt",
                    "Banana",
                    "Berries"
                ],
                correct: 2
            },
            {
                topic: "Baking Essentials",
                emoji: "🧁🥄",
                question: "Name three essential baking ingredients?",
                options: [
                    "Eggs",
                    "Butter",
                    "Flour",
                    "Sugar"
                ],
                correct: 2
            },
            {
                topic: "Wine Regions",
                emoji: "🍷🗺️",
                question: "Name three famous wine regions?",
                options: [
                    "Napa Valley",
                    "Tuscany",
                    "Bordeaux",
                    "Rioja"
                ],
                correct: 2
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Orange Juice",
                emoji: "🍊🥤",
                question: "Is orange juice made from oranges?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Ice Cream",
                emoji: "🍦❄️",
                question: "Is ice cream served frozen?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Croissant",
                emoji: "🥐🇫🇷",
                question: "Is croissant a French pastry?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Sports Drinks",
                emoji: "🏃‍♂️🥤",
                question: "Do sports drinks contain electrolytes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Escargot",
                emoji: "🐌🇫🇷",
                question: "Is escargot cooked snails?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Lassi",
                emoji: "🥤🇮🇳",
                question: "Is lassi an Indian yogurt beverage?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Miso",
                emoji: "🥣🇯🇵",
                question: "Is miso a fermented soybean paste?",
                options: [
                    "False",
                    "True",
                    "Only beans",
                    "Only salt"
                ],
                correct: 1
            },
            {
                topic: "Amaro",
                emoji: "🍸🌿",
                question: "Is amaro a bitter Italian herbal liqueur?",
                options: [
                    "Sweet only",
                    "False",
                    "True",
                    "No herbs"
                ],
                correct: 1
            },
            {
                topic: "Confit",
                emoji: "🦆🔥",
                question: "Is confit a method of slow-cooking in fat?",
                options: [
                    "False",
                    "Fast cooking",
                    "No fat",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Oolong Tea",
                emoji: "🍵🍂",
                question: "Is oolong tea partially oxidized?",
                options: [
                    "True",
                    "Never",
                    "False",
                    "Fully only"
                ],
                correct: 0
            },
            {
                topic: "Ceviche",
                emoji: "🐟🍋",
                question: "Is ceviche raw fish cured in citrus?",
                options: [
                    "True",
                    "No citrus",
                    "Cooked fish",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Mezcal",
                emoji: "🥃🌵",
                question: "Is mezcal made from agave plants?",
                options: [
                    "False",
                    "Corn based",
                    "True",
                    "Only cactus"
                ],
                correct: 3
            },
            {
                topic: "Sous Vide",
                emoji: "🔬🍖",
                question: "Does sous vide involve vacuum-sealed cooking?",
                options: [
                    "True",
                    "Open air",
                    "False",
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
                    "Cheese",
                    "Vegetable only"
                ],
                correct: 0
            },
            {
                topic: "Rooibos",
                emoji: "🍵🇿🇦",
                question: "Is rooibos a caffeine-free herbal tea?",
                options: [
                    "False",
                    "True",
                    "High caffeine",
                    "Medium caffeine"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Asian Cuisine",
                emoji: "🍜🌏",
                question: "Name three Asian noodle dishes?",
                options: [
                    "Pho",
                    "Ramen",
                    "Lo Mein",
                    "Pad Thai"
                ],
                correct: 1
            },
            {
                topic: "Coffee Drinks",
                emoji: "☕🥤",
                question: "Name three espresso-based drinks?",
                options: [
                    "Latte",
                    "Macchiato",
                    "Cappuccino",
                    "Americano"
                ],
                correct: 0
            },
            {
                topic: "Seafood",
                emoji: "🦞🐟",
                question: "Name three types of shellfish?",
                options: [
                    "Shrimp",
                    "Crab",
                    "Lobster",
                    "Oysters"
                ],
                correct: 0
            },
            {
                topic: "Herbal Teas",
                emoji: "🍵🌿",
                question: "Name three herbal tea varieties?",
                options: [
                    "Rooibos",
                    "Chamomile",
                    "Peppermint",
                    "Hibiscus"
                ],
                correct: 1
            },
            {
                topic: "Mexican Food",
                emoji: "🌮🇲🇽",
                question: "Name three Mexican dishes?",
                options: [
                    "Tacos",
                    "Burritos",
                    "Enchiladas",
                    "Quesadillas"
                ],
                correct: 0
            },
            {
                topic: "Fruit Juices",
                emoji: "🧃🍇",
                question: "Name three types of fruit juice?",
                options: [
                    "Cranberry",
                    "Orange",
                    "Grape",
                    "Apple"
                ],
                correct: 1
            },
            {
                topic: "Italian Dishes",
                emoji: "🍝🇮🇹",
                question: "Name three Italian pasta dishes?",
                options: [
                    "Alfredo",
                    "Bolognese",
                    "Carbonara",
                    "Marinara"
                ],
                correct: 2
            },
            {
                topic: "Hot Beverages",
                emoji: "☕🔥",
                question: "Name three hot drinks?",
                options: [
                    "Tea",
                    "Cappuccino",
                    "Hot chocolate",
                    "Coffee"
                ],
                correct: 3
            },
            {
                topic: "Desserts",
                emoji: "🍰🍨",
                question: "Name three popular desserts?",
                options: [
                    "Pie",
                    "Cookies",
                    "Ice cream",
                    "Cake"
                ],
                correct: 3
            },
            {
                topic: "Breakfast Drinks",
                emoji: "🥤🌅",
                question: "Name three breakfast beverages?",
                options: [
                    "Smoothie",
                    "Milk",
                    "Coffee",
                    "Orange juice"
                ],
                correct: 3
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chocolate Milk",
                emoji: "🥛🍫",
                question: "Does chocolate milk contain chocolate?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "French Fries",
                emoji: "🍟🥔",
                question: "Are french fries made from potatoes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Shrimp",
                emoji: "🦐🍤",
                question: "Is shrimp a type of seafood?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Latte",
                emoji: "☕🥛",
                question: "Does a latte contain more milk than espresso?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Chai Latte",
                emoji: "☕🌶️",
                question: "Does chai contain spices?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Agua Fresca",
                emoji: "🥤🍉",
                question: "Is agua fresca a Mexican fruit beverage?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Haggis",
                emoji: "🥘🏴󠁧󠁢󠁳󠁣󠁴󠁿",
                question: "Is haggis a Scottish dish?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "Only whole",
                    "False",
                    "No mushrooms",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cascade Hops",
                emoji: "🍺🌿",
                question: "Are Cascade hops used in brewing beer?",
                options: [
                    "Only wine",
                    "True",
                    "False",
                    "Never"
                ],
                correct: 1
            },
            {
                topic: "Mirepoix",
                emoji: "🥕🧅",
                question: "Is mirepoix a French aromatic vegetable base?",
                options: [
                    "Single vegetable",
                    "False",
                    "Only meat",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Barolo Wine",
                emoji: "🍷🇮🇹",
                question: "Is Barolo made from Nebbiolo grapes?",
                options: [
                    "Merlot only",
                    "False",
                    "True",
                    "Cabernet only"
                ],
                correct: 3
            },
            {
                topic: "Cassoulet",
                emoji: "🍲🇫🇷",
                question: "Is cassoulet a French bean stew?",
                options: [
                    "Only meat",
                    "False",
                    "True",
                    "No beans"
                ],
                correct: 2
            },
            {
                topic: "Genmai Tea",
                emoji: "🍵🌾",
                question: "Does genmai tea contain roasted rice?",
                options: [
                    "True",
                    "False",
                    "No rice",
                    "Only leaves"
                ],
                correct: 1
            },
            {
                topic: "Brandade",
                emoji: "🐟🥔",
                question: "Is brandade made with salt cod?",
                options: [
                    "No fish",
                    "True",
                    "False",
                    "Fresh fish only"
                ],
                correct: 2
            },
            {
                topic: "Shochu",
                emoji: "🥃🇯🇵",
                question: "Is shochu a Japanese distilled spirit?",
                options: [
                    "Beer",
                    "True",
                    "Wine",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Choucroute",
                emoji: "🥬🇫🇷",
                question: "Is choucroute fermented cabbage?",
                options: [
                    "Pickled",
                    "False",
                    "Fresh only",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Tepache",
                emoji: "🍍🥤",
                question: "Is tepache fermented from pineapple?",
                options: [
                    "Apple",
                    "Orange",
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "French Cooking",
                emoji: "🇫🇷👨‍🍳",
                question: "Name three classic French dishes?",
                options: [
                    "Ratatouille",
                    "Bouillabaisse",
                    "Beef bourguignon",
                    "Coq au vin"
                ],
                correct: 3
            },
            {
                topic: "Cold Drinks",
                emoji: "🧊🥤",
                question: "Name three cold beverages?",
                options: [
                    "Iced coffee",
                    "Iced tea",
                    "Lemonade",
                    "Smoothie"
                ],
                correct: 1
            },
            {
                topic: "Grains",
                emoji: "🌾🍚",
                question: "Name three types of grains?",
                options: [
                    "Rice",
                    "Oats",
                    "Wheat",
                    "Quinoa"
                ],
                correct: 0
            },
            {
                topic: "Citrus Drinks",
                emoji: "🍋🥤",
                question: "Name three citrus-based drinks?",
                options: [
                    "Orange juice",
                    "Lemonade",
                    "Limeade",
                    "Grapefruit juice"
                ],
                correct: 1
            },
            {
                topic: "Street Food",
                emoji: "🌮🍢",
                question: "Name three popular street foods?",
                options: [
                    "Kebabs",
                    "Falafel",
                    "Tacos",
                    "Hot dogs"
                ],
                correct: 2
            },
            {
                topic: "Dairy Products",
                emoji: "🥛🧀",
                question: "Name three dairy products?",
                options: [
                    "Yogurt",
                    "Milk",
                    "Butter",
                    "Cheese"
                ],
                correct: 1
            },
            {
                topic: "Japanese Food",
                emoji: "🍣🇯🇵",
                question: "Name three Japanese dishes?",
                options: [
                    "Teriyaki",
                    "Ramen",
                    "Sushi",
                    "Tempura"
                ],
                correct: 2
            },
            {
                topic: "Tropical Drinks",
                emoji: "🍹🌴",
                question: "Name three tropical beverages?",
                options: [
                    "Piña colada",
                    "Mango juice",
                    "Passion fruit juice",
                    "Coconut water"
                ],
                correct: 0
            },
            {
                topic: "Spices",
                emoji: "🌶️🧂",
                question: "Name three common spices?",
                options: [
                    "Paprika",
                    "Cinnamon",
                    "Cumin",
                    "Pepper"
                ],
                correct: 3
            },
            {
                topic: "Breakfast Foods",
                emoji: "🍳🥐",
                question: "Name three breakfast items?",
                options: [
                    "Eggs",
                    "Toast",
                    "Bacon",
                    "Pancakes"
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Frappuccino",
                emoji: "☕🧊",
                question: "Is a frappuccino a blended iced coffee?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Quinoa",
                emoji: "🌾🥗",
                question: "Is quinoa a superfood grain?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Freshly Squeezed",
                emoji: "🍊💪",
                question: "Is freshly squeezed juice made by hand?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Soy Milk",
                emoji: "🥛🌱",
                question: "Is soy milk made from soybeans?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Waffles",
                emoji: "🧇🍯",
                question: "Do waffles have a grid pattern?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pomegranate Juice",
                emoji: "🍷💎",
                question: "Is pomegranate juice red in color?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Bibimbap",
                emoji: "🍚🇰🇷",
                question: "Is bibimbap a Korean rice bowl?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cortado",
                emoji: "☕🥛",
                question: "Is a cortado equal parts espresso and milk?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Tagine",
                emoji: "🍲🇲🇦",
                question: "Is tagine cooked in a cone-shaped pot?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "Japan only",
                    "False",
                    "China only",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Galantine",
                emoji: "🍖🎀",
                question: "Is galantine a boned, stuffed, and poached dish?",
                options: [
                    "Roasted only",
                    "True",
                    "False",
                    "Fried only"
                ],
                correct: 2
            },
            {
                topic: "Riesling Wine",
                emoji: "🍷🇩🇪",
                question: "Is Riesling typically a white wine?",
                options: [
                    "Rosé only",
                    "True",
                    "Red only",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Soufflé",
                emoji: "🥚☁️",
                question: "Does a soufflé rise due to beaten eggs?",
                options: [
                    "Baking powder",
                    "False",
                    "Yeast only",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Assam Tea",
                emoji: "🍵🇮🇳",
                question: "Is Assam tea a strong black tea?",
                options: [
                    "Green only",
                    "False",
                    "True",
                    "White only"
                ],
                correct: 0
            },
            {
                topic: "Ballotine",
                emoji: "🍗🎁",
                question: "Is ballotine a deboned poultry dish?",
                options: [
                    "Vegetable",
                    "Fish only",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Grappa",
                emoji: "🥃🍇",
                question: "Is grappa made from grape pomace?",
                options: [
                    "Potato based",
                    "True",
                    "False",
                    "Grain based"
                ],
                correct: 3
            },
            {
                topic: "Charcuterie",
                emoji: "🥓🧀",
                question: "Does charcuterie involve cured meats?",
                options: [
                    "True",
                    "Vegetables",
                    "Cheese only",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Sencha Tea",
                emoji: "🍵🇯🇵",
                question: "Is sencha a Japanese green tea?",
                options: [
                    "Herbal",
                    "Black tea",
                    "False",
                    "True"
                ],
                correct: 2
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
                    "Samosa",
                    "Tikka masala"
                ],
                correct: 0
            },
            {
                topic: "Tea Varieties",
                emoji: "🍵🌈",
                question: "Name three black tea varieties?",
                options: [
                    "English breakfast",
                    "Ceylon",
                    "Assam",
                    "Earl Grey"
                ],
                correct: 3
            },
            {
                topic: "Sandwich Types",
                emoji: "🥪🍞",
                question: "Name three types of sandwiches?",
                options: [
                    "BLT",
                    "Club",
                    "Grilled cheese",
                    "Reuben"
                ],
                correct: 0
            },
            {
                topic: "Smoothie Bases",
                emoji: "🥤🍌",
                question: "Name three smoothie base ingredients?",
                options: [
                    "Juice",
                    "Banana",
                    "Milk",
                    "Yogurt"
                ],
                correct: 1
            },
            {
                topic: "Steak Cuts",
                emoji: "🥩🔪",
                question: "Name three cuts of steak?",
                options: [
                    "Filet mignon",
                    "Ribeye",
                    "T-bone",
                    "Sirloin"
                ],
                correct: 1
            },
            {
                topic: "Wine Types",
                emoji: "🍷🍇",
                question: "Name three types of wine?",
                options: [
                    "White",
                    "Sparkling",
                    "Red",
                    "Rosé"
                ],
                correct: 2
            },
            {
                topic: "Soup Varieties",
                emoji: "🍲🥄",
                question: "Name three types of soup?",
                options: [
                    "Minestrone",
                    "Chicken noodle",
                    "Tomato",
                    "Clam chowder"
                ],
                correct: 2
            },
            {
                topic: "Juice Types",
                emoji: "🧃🍊",
                question: "Name three fruit juices?",
                options: [
                    "Pineapple",
                    "Orange",
                    "Grape",
                    "Apple"
                ],
                correct: 1
            },
            {
                topic: "Herbs",
                emoji: "🌿🍃",
                question: "Name three cooking herbs?",
                options: [
                    "Parsley",
                    "Rosemary",
                    "Basil",
                    "Cilantro"
                ],
                correct: 2
            },
            {
                topic: "Fast Food",
                emoji: "🍔🍟",
                question: "Name three fast food items?",
                options: [
                    "Chicken nuggets",
                    "Pizza",
                    "Burger",
                    "Fries"
                ],
                correct: 2
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Salad",
                emoji: "🥗🥬",
                question: "Is salad made with vegetables?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Fruit Punch",
                emoji: "🧃🍓",
                question: "Does fruit punch contain fruit flavors?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Omelette",
                emoji: "🍳🧀",
                question: "Is an omelette made with eggs?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ginger Tea",
                emoji: "🍵🫚",
                question: "Does ginger tea contain ginger?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Noodles",
                emoji: "🍜🥢",
                question: "Are noodles a type of pasta?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Stir Fry",
                emoji: "🥘🥕",
                question: "Is stir fry cooked quickly at high heat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Tonic Water",
                emoji: "🥤✨",
                question: "Does tonic water contain quinine?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Quiche",
                emoji: "🥧🥚",
                question: "Is quiche a savory egg tart?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Celery Juice",
                emoji: "🥤💚",
                question: "Is celery juice green in color?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "No stock",
                    "True",
                    "False",
                    "Red sauce"
                ],
                correct: 2
            },
            {
                topic: "Silver Needle Tea",
                emoji: "🍵🤍",
                question: "Is Silver Needle a premium white tea?",
                options: [
                    "Green tea",
                    "Black tea",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chateaubriand",
                emoji: "🥩👨‍🍳",
                question: "Is Chateaubriand a thick cut beef tenderloin?",
                options: [
                    "Pork cut",
                    "Fish cut",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Chartreuse",
                emoji: "🍸💚",
                question: "Is Chartreuse a French herbal liqueur?",
                options: [
                    "Beer",
                    "False",
                    "Wine",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Terrine",
                emoji: "🥖🍖",
                question: "Is terrine a loaf of forcemeat?",
                options: [
                    "True",
                    "Soup",
                    "False",
                    "Sauce"
                ],
                correct: 2
            },
            {
                topic: "Lapsang Souchong",
                emoji: "🍵🔥",
                question: "Is Lapsang Souchong a smoked tea?",
                options: [
                    "True",
                    "False",
                    "Herbal",
                    "Fruit tea"
                ],
                correct: 2
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
                    "False",
                    "True",
                    "Mild",
                    "Sweet only"
                ],
                correct: 3
            },
            {
                topic: "Confit de Canard",
                emoji: "🦆🇫🇷",
                question: "Is confit de canard duck cooked in its own fat?",
                options: [
                    "Grilled",
                    "Water cooked",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Gyokuro Tea",
                emoji: "🍵💎",
                question: "Is Gyokuro a premium shade-grown Japanese tea?",
                options: [
                    "Chinese",
                    "Sun grown",
                    "False",
                    "True"
                ],
                correct: 1
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
                    "Excelsa",
                    "Liberica",
                    "Robusta"
                ],
                correct: 0
            },
            {
                topic: "Sauces",
                emoji: "🥫🍝",
                question: "Name three pasta sauces?",
                options: [
                    "Carbonara",
                    "Pesto",
                    "Marinara",
                    "Alfredo"
                ],
                correct: 2
            },
            {
                topic: "Vegetable Juices",
                emoji: "🥤🥕",
                question: "Name three vegetable juices?",
                options: [
                    "Tomato",
                    "Beet",
                    "Celery",
                    "Carrot"
                ],
                correct: 3
            },
            {
                topic: "Cooking Methods",
                emoji: "🔥🍳",
                question: "Name three cooking methods?",
                options: [
                    "Frying",
                    "Boiling",
                    "Grilling",
                    "Baking"
                ],
                correct: 3
            },
            {
                topic: "Cold Teas",
                emoji: "🧊🍵",
                question: "Name three iced tea varieties?",
                options: [
                    "Lemon tea",
                    "Peach tea",
                    "Green iced tea",
                    "Black iced tea"
                ],
                correct: 3
            },
            {
                topic: "Protein Sources",
                emoji: "🥩🐟",
                question: "Name three protein foods?",
                options: [
                    "Eggs",
                    "Chicken",
                    "Beef",
                    "Fish"
                ],
                correct: 1
            },
            {
                topic: "Carbonated Drinks",
                emoji: "🥤💥",
                question: "Name three carbonated beverages?",
                options: [
                    "Cola",
                    "Ginger ale",
                    "Soda",
                    "Sparkling water"
                ],
                correct: 2
            },
            {
                topic: "Nuts",
                emoji: "🥜🌰",
                question: "Name three types of nuts?",
                options: [
                    "Walnuts",
                    "Peanuts",
                    "Almonds",
                    "Cashews"
                ],
                correct: 2
            },
            {
                topic: "Salad Types",
                emoji: "🥗🍃",
                question: "Name three salad varieties?",
                options: [
                    "Greek",
                    "Caprese",
                    "Caesar",
                    "Cobb"
                ],
                correct: 2
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Potato",
                emoji: "🥔🍟",
                question: "Is potato a vegetable?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Empanada",
                emoji: "🥟🇦🇷",
                question: "Is an empanada a stuffed pastry?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Wheat Grass Juice",
                emoji: "🌾🥤",
                question: "Is wheatgrass juice green?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Kebab",
                emoji: " 串🥙",
                question: "Is kebab meat cooked on skewers?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Caramel Latte",
                emoji: "☕🍯",
                question: "Does caramel latte contain caramel?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pastrami",
                emoji: "🥩🥪",
                question: "Is pastrami smoked meat?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "White sauce",
                    "True",
                    "Red sauce",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Dragon Well Tea",
                emoji: "🍵🐉",
                question: "Is Dragon Well a Chinese green tea?",
                options: [
                    "False",
                    "Black tea",
                    "True",
                    "White tea"
                ],
                correct: 2
            },
            {
                topic: "Wellington",
                emoji: "🥩🥐",
                question: "Is Beef Wellington wrapped in puff pastry?",
                options: [
                    "True",
                    "Phyllo",
                    "False",
                    "No pastry"
                ],
                correct: 0
            },
            {
                topic: "Pisco",
                emoji: "🥃🇵🇪",
                question: "Is Pisco a South American brandy?",
                options: [
                    "False",
                    "Vodka",
                    "Beer",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Roulade",
                emoji: "🥩🌀",
                question: "Is roulade a rolled and stuffed meat dish?",
                options: [
                    "False",
                    "Cubed",
                    "Flat only",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "First Flush Tea",
                emoji: "🍵🌸",
                question: "Is first flush the earliest spring tea harvest?",
                options: [
                    "Winter",
                    "False",
                    "True",
                    "Fall harvest"
                ],
                correct: 3
            },
            {
                topic: "Paillard",
                emoji: "🥩🔨",
                question: "Is paillard a pounded thin cutlet?",
                options: [
                    "Ground",
                    "False",
                    "True",
                    "Thick cut"
                ],
                correct: 1
            },
            {
                topic: "Calvados",
                emoji: "🥃🍎",
                question: "Is Calvados apple brandy from France?",
                options: [
                    "False",
                    "True",
                    "Grape based",
                    "Pear only"
                ],
                correct: 2
            },
            {
                topic: "Supremes",
                emoji: "🍗🔪",
                question: "Are supremes boneless chicken breasts?",
                options: [
                    "True",
                    "False",
                    "Legs",
                    "With bones"
                ],
                correct: 0
            },
            {
                topic: "Tie Guan Yin",
                emoji: "🍵🇨🇳",
                question: "Is Tie Guan Yin a premium oolong tea?",
                options: [
                    "Green tea",
                    "Black tea",
                    "True",
                    "False"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Vietnamese Food",
                emoji: "🇻🇳🍜",
                question: "Name three Vietnamese dishes?",
                options: [
                    "Bun cha",
                    "Banh mi",
                    "Pho",
                    "Spring rolls"
                ],
                correct: 2
            },
            {
                topic: "Latte Flavors",
                emoji: "☕🍰",
                question: "Name three latte flavors?",
                options: [
                    "Mocha",
                    "Hazelnut",
                    "Vanilla",
                    "Caramel"
                ],
                correct: 2
            },
            {
                topic: "Berries",
                emoji: "🫐🍓",
                question: "Name three types of berries?",
                options: [
                    "Blueberry",
                    "Blackberry",
                    "Strawberry",
                    "Raspberry"
                ],
                correct: 2
            },
            {
                topic: "Green Drinks",
                emoji: "🥤💚",
                question: "Name three green beverages?",
                options: [
                    "Celery juice",
                    "Wheatgrass juice",
                    "Green tea",
                    "Green smoothie"
                ],
                correct: 2
            },
            {
                topic: "Fried Foods",
                emoji: "🍟🔥",
                question: "Name three fried foods?",
                options: [
                    "Donuts",
                    "French fries",
                    "Fried chicken",
                    "Tempura"
                ],
                correct: 1
            },
            {
                topic: "Milk Alternatives",
                emoji: "🥛🌱",
                question: "Name three non-dairy milk options?",
                options: [
                    "Coconut milk",
                    "Almond milk",
                    "Soy milk",
                    "Oat milk"
                ],
                correct: 1
            },
            {
                topic: "Greek Food",
                emoji: "🇬🇷🫒",
                question: "Name three Greek dishes?",
                options: [
                    "Souvlaki",
                    "Moussaka",
                    "Greek salad",
                    "Gyro"
                ],
                correct: 3
            },
            {
                topic: "Citrus Fruits",
                emoji: "🍊🍋",
                question: "Name three citrus fruits?",
                options: [
                    "Lemon",
                    "Grapefruit",
                    "Orange",
                    "Lime"
                ],
                correct: 2
            },
            {
                topic: "Condiments",
                emoji: "🧂🍯",
                question: "Name three condiments?",
                options: [
                    "Ketchup",
                    "Soy sauce",
                    "Mustard",
                    "Mayonnaise"
                ],
                correct: 0
            },
            {
                topic: "Dinner Foods",
                emoji: "🍽️🌙",
                question: "Name three dinner dishes?",
                options: [
                    "Steak",
                    "Chicken",
                    "Pasta",
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Steak",
                emoji: "🥩🍽️",
                question: "Is steak a cut of beef?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cola",
                emoji: "🥤🟤",
                question: "Is cola a carbonated soft drink?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Garlic Bread",
                emoji: "🧄🍞",
                question: "Does garlic bread have garlic?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mango Juice",
                emoji: "🥭🧃",
                question: "Can mango juice be made from mangoes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pita Bread",
                emoji: "🫓🥙",
                question: "Is pita bread a flatbread?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Acai Juice",
                emoji: "🫐🥤",
                question: "Is acai juice from the Amazon?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Ravioli",
                emoji: "🥟🇮🇹",
                question: "Is ravioli stuffed pasta?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Guava Juice",
                emoji: "🥤🍈",
                question: "Is guava juice tropical?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Noni Juice",
                emoji: "🥤🍈",
                question: "Is noni juice from a Polynesian fruit?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Schnitzel",
                emoji: "🥩🇦🇹",
                question: "Is schnitzel breaded and fried meat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Turkish Coffee",
                emoji: "☕🇹🇷",
                question: "Is Turkish coffee brewed with fine grounds?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Spanakopita",
                emoji: "🥧🇬🇷",
                question: "Is spanakopita a spinach pie?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Elderflower Cordial",
                emoji: "🥤🌸",
                question: "Is elderflower cordial made from elder flowers?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "No eggs",
                    "False",
                    "Tomato based"
                ],
                correct: 2
            },
            {
                topic: "Jin Xuan Tea",
                emoji: "🍵🥛",
                question: "Does Jin Xuan have a milky flavor?",
                options: [
                    "Smoky only",
                    "False",
                    "True",
                    "Bitter"
                ],
                correct: 2
            },
            {
                topic: "Blanquette",
                emoji: "🍖🥛",
                question: "Is blanquette a white stew?",
                options: [
                    "Red stew",
                    "True",
                    "No sauce",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Cachaça",
                emoji: "🥃🇧🇷",
                question: "Is cachaça Brazilian sugarcane spirit?",
                options: [
                    "Vodka",
                    "Whiskey",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Fricassee",
                emoji: "🍗🥛",
                question: "Is fricassee meat in white sauce?",
                options: [
                    "True",
                    "Red sauce",
                    "No sauce",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Yellow Tea",
                emoji: "🍵💛",
                question: "Is yellow tea a rare Chinese tea?",
                options: [
                    "Not Chinese",
                    "Common",
                    "False",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Noisettes",
                emoji: "🥩🌰",
                question: "Are noisettes small round meat cuts?",
                options: [
                    "Square cuts",
                    "True",
                    "Large only",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Aquavit",
                emoji: "🥃🌿",
                question: "Is aquavit a Scandinavian spirit?",
                options: [
                    "Mexican",
                    "False",
                    "Italian",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Saltimbocca",
                emoji: "🥩🇮🇹",
                question: "Does saltimbocca mean 'jump in the mouth'?",
                options: [
                    "False",
                    "True",
                    "Heavy dish",
                    "Slow food"
                ],
                correct: 1
            },
            {
                topic: "Kukicha Tea",
                emoji: "🍵🌿",
                question: "Is kukicha made from tea stems?",
                options: [
                    "True",
                    "False",
                    "Flowers",
                    "Leaves only"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Korean Food",
                emoji: "🇰🇷🍜",
                question: "Name three Korean dishes?",
                options: [
                    "Bulgogi",
                    "Kimchi",
                    "Japchae",
                    "Bibimbap"
                ],
                correct: 1
            },
            {
                topic: "Hot Drinks",
                emoji: "☕🔥",
                question: "Name three hot beverages?",
                options: [
                    "Coffee",
                    "Cappuccino",
                    "Hot chocolate",
                    "Tea"
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
                    "Green tea",
                    "Banana",
                    "Energy drink",
                    "Coffee"
                ],
                correct: 3
            },
            {
                topic: "Grilled Foods",
                emoji: "🔥🍖",
                question: "Name three grilled foods?",
                options: [
                    "Fish",
                    "Steak",
                    "Chicken",
                    "Vegetables"
                ],
                correct: 1
            },
            {
                topic: "Plant Milks",
                emoji: "🥛🌱",
                question: "Name three plant-based milks?",
                options: [
                    "Soy",
                    "Almond",
                    "Coconut",
                    "Oat"
                ],
                correct: 1
            },
            {
                topic: "Spanish Food",
                emoji: "🇪🇸🥘",
                question: "Name three Spanish dishes?",
                options: [
                    "Paella",
                    "Tapas",
                    "Tortilla española",
                    "Gazpacho"
                ],
                correct: 0
            },
            {
                topic: "Stone Fruits",
                emoji: "🍑🍒",
                question: "Name three stone fruits?",
                options: [
                    "Cherry",
                    "Apricot",
                    "Peach",
                    "Plum"
                ],
                correct: 2
            },
            {
                topic: "Seasonings",
                emoji: "🧂🌿",
                question: "Name three seasonings?",
                options: [
                    "Salt",
                    "Oregano",
                    "Pepper",
                    "Garlic powder"
                ],
                correct: 0
            },
            {
                topic: "Lunch Foods",
                emoji: "🥪☀️",
                question: "Name three lunch items?",
                options: [
                    "Sandwich",
                    "Soup",
                    "Salad",
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Pasta",
                emoji: "🍝🇮🇹",
                question: "Is pasta an Italian food?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Honey Water",
                emoji: "🍯💧",
                question: "Does honey water contain honey?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Mussels",
                emoji: "🦪🌊",
                question: "Are mussels shellfish?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Espresso Shot",
                emoji: "☕💉",
                question: "Is espresso concentrated coffee?",
                options: [
                    "True",
                    "Weak coffee"
                ],
                correct: 1
            },
            {
                topic: "Naan",
                emoji: "🫓🇮🇳",
                question: "Is naan Indian bread?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Aloe Vera Juice",
                emoji: "🌵🥤",
                question: "Is aloe vera juice from a plant?",
                options: [
                    "True",
                    "Animal source"
                ],
                correct: 1
            },
            {
                topic: "Curry",
                emoji: "🍛🌶️",
                question: "Is curry spicy?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pumpkin Spice Latte",
                emoji: "☕🎃",
                question: "Is pumpkin spice latte seasonal?",
                options: [
                    "True",
                    "Year-round"
                ],
                correct: 1
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
                    "True",
                    "Watery only"
                ],
                correct: 1
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
                    "True",
                    "Yellow"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Vichyssoise",
                emoji: "🥣🥔",
                question: "Is vichyssoise served cold?",
                options: [
                    "False",
                    "True",
                    "Hot only"
                ],
                correct: 0
            },
            {
                topic: "Lungo",
                emoji: "☕💧",
                question: "Is lungo a longer espresso pull?",
                options: [
                    "True",
                    "Shorter",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Injera",
                emoji: "🫓🇪🇹",
                question: "Is injera Ethiopian flatbread?",
                options: [
                    "Italian",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Mangosteen Juice",
                emoji: "🥤🍇",
                question: "Is mangosteen called queen of fruits?",
                options: [
                    "King",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Vindaloo",
                emoji: "🍛🔥",
                question: "Is vindaloo a spicy curry?",
                options: [
                    "True",
                    "Mild only",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dirty Chai",
                emoji: "☕🌶️",
                question: "Does dirty chai have espresso?",
                options: [
                    "False",
                    "True",
                    "No espresso"
                ],
                correct: 2
            },
            {
                topic: "Knafeh",
                emoji: "🥮🧀",
                question: "Is knafeh a Middle Eastern dessert?",
                options: [
                    "False",
                    "Asian",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chrysanthemum Tea",
                emoji: "🍵🌼",
                question: "Is chrysanthemum tea from flowers?",
                options: [
                    "False",
                    "True",
                    "Leaves only"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Tomato Sauce",
                emoji: "🍅🥫",
                question: "Is tomato a mother sauce?",
                options: [
                    "False",
                    "True",
                    "Secondary",
                    "Not classified"
                ],
                correct: 1
            },
            {
                topic: "White Peony Tea",
                emoji: "🍵🌸",
                question: "Is White Peony a white tea variety?",
                options: [
                    "Black tea",
                    "False",
                    "True",
                    "Green tea"
                ],
                correct: 3
            },
            {
                topic: "Mirepoix Ratio",
                emoji: "🥕🧅",
                question: "Is classic mirepoix 2:1:1 ratio?",
                options: [
                    "False",
                    "True",
                    "1:1:1",
                    "3:2:1"
                ],
                correct: 0
            },
            {
                topic: "Soju",
                emoji: "🥃🇰🇷",
                question: "Is soju Korean distilled beverage?",
                options: [
                    "Japanese",
                    "True",
                    "Chinese",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Quenelle",
                emoji: "🥄🍨",
                question: "Is quenelle an oval-shaped scoop?",
                options: [
                    "False",
                    "Square",
                    "True",
                    "Round"
                ],
                correct: 0
            },
            {
                topic: "Keemun Tea",
                emoji: "🍵🇨🇳",
                question: "Is Keemun a Chinese black tea?",
                options: [
                    "White",
                    "Green",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Medallions",
                emoji: "🥩⭕",
                question: "Are medallions round meat cuts?",
                options: [
                    "Strips",
                    "True",
                    "False",
                    "Square"
                ],
                correct: 2
            },
            {
                topic: "Ouzo",
                emoji: "🥃🇬🇷",
                question: "Is ouzo anise-flavored Greek spirit?",
                options: [
                    "Turkish",
                    "Italian",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Papillote",
                emoji: "🐟📄",
                question: "Is en papillote cooked in paper?",
                options: [
                    "False",
                    "True",
                    "Open pan",
                    "Foil only"
                ],
                correct: 0
            },
            {
                topic: "Genmaicha",
                emoji: "🍵🌾",
                question: "Does genmaicha have roasted rice?",
                options: [
                    "True",
                    "No rice",
                    "False",
                    "Raw rice"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Chinese Cuisine",
                emoji: "🇨🇳🥢",
                question: "Name three Chinese dishes?",
                options: [
                    "Spring rolls",
                    "Kung pao chicken",
                    "Fried rice",
                    "Dim sum"
                ],
                correct: 2
            },
            {
                topic: "Iced Drinks",
                emoji: "🧊🥤",
                question: "Name three iced beverages?",
                options: [
                    "Iced coffee",
                    "Lemonade",
                    "Smoothie",
                    "Iced tea"
                ],
                correct: 3
            },
            {
                topic: "Leafy Greens",
                emoji: "🥬🥗",
                question: "Name three leafy vegetables?",
                options: [
                    "Lettuce",
                    "Kale",
                    "Cabbage",
                    "Spinach"
                ],
                correct: 3
            },
            {
                topic: "Refreshing Drinks",
                emoji: "🥤😌",
                question: "Name three refreshing beverages?",
                options: [
                    "Water",
                    "Coconut water",
                    "Lemonade",
                    "Iced tea"
                ],
                correct: 0
            },
            {
                topic: "Baked Goods",
                emoji: "🥐🍞",
                question: "Name three baked items?",
                options: [
                    "Bread",
                    "Cookies",
                    "Muffin",
                    "Croissant"
                ],
                correct: 0
            },
            {
                topic: "Probiotic Drinks",
                emoji: "🥤🫧",
                question: "Name three probiotic beverages?",
                options: [
                    "Lassi",
                    "Kombucha",
                    "Kefir",
                    "Yogurt drink"
                ],
                correct: 1
            },
            {
                topic: "Middle Eastern Food",
                emoji: "🇸🇦🥙",
                question: "Name three Middle Eastern dishes?",
                options: [
                    "Kebab",
                    "Hummus",
                    "Shawarma",
                    "Falafel"
                ],
                correct: 1
            },
            {
                topic: "Melons",
                emoji: "🍉🍈",
                question: "Name three types of melons?",
                options: [
                    "Watermelon",
                    "Honeydew",
                    "Cantaloupe",
                    "Galia"
                ],
                correct: 0
            },
            {
                topic: "Cooking Oils",
                emoji: "🫒💧",
                question: "Name three cooking oils?",
                options: [
                    "Vegetable oil",
                    "Canola oil",
                    "Coconut oil",
                    "Olive oil"
                ],
                correct: 3
            },
            {
                topic: "Snack Foods",
                emoji: "🍿🥨",
                question: "Name three snack items?",
                options: [
                    "Popcorn",
                    "Chips",
                    "Crackers",
                    "Pretzels"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Strawberry Milk",
                emoji: "🍓🥛",
                question: "Is strawberry milk pink?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "One shot"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "Chinese",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Red Eye Coffee",
                emoji: "☕😵",
                question: "Is red eye coffee with a shot of espresso?",
                options: [
                    "False",
                    "No espresso",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Challah",
                emoji: "🍞✡️",
                question: "Is challah a Jewish braided bread?",
                options: [
                    "French",
                    "True",
                    "False"
                ],
                correct: 1
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
                    "Pasta",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dalgona Coffee",
                emoji: "☕🫧",
                question: "Is dalgona coffee whipped?",
                options: [
                    "False",
                    "Not whipped",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Panettone",
                emoji: "🍞🇮🇹",
                question: "Is panettone Italian sweet bread?",
                options: [
                    "True",
                    "Savory",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Hibiscus Tea",
                emoji: "🍵🌺",
                question: "Is hibiscus tea red?",
                options: [
                    "False",
                    "True",
                    "Green"
                ],
                correct: 2
            },
            {
                topic: "Croquette",
                emoji: "🥔🔥",
                question: "Are croquettes breaded and fried?",
                options: [
                    "False",
                    "Baked only",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Lychee Juice",
                emoji: "🥤🍈",
                question: "Is lychee juice from Asian fruit?",
                options: [
                    "False",
                    "True",
                    "European"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Demi-Glace",
                emoji: "🥣🟤",
                question: "Is demi-glace a reduced brown sauce?",
                options: [
                    "White sauce",
                    "True",
                    "False",
                    "Thin sauce"
                ],
                correct: 2
            },
            {
                topic: "Ceylon Tea",
                emoji: "🍵🇱🇰",
                question: "Is Ceylon tea from Sri Lanka?",
                options: [
                    "India",
                    "False",
                    "China",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Brunoise",
                emoji: "🔪🥕",
                question: "Is brunoise 1-2mm dice?",
                options: [
                    "Large dice",
                    "Strips",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Baijiu",
                emoji: "🥃🇨🇳",
                question: "Is baijiu Chinese grain alcohol?",
                options: [
                    "True",
                    "Korean",
                    "Japanese",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Rouille",
                emoji: "🥣🌶️",
                question: "Is rouille a saffron-garlic sauce?",
                options: [
                    "Sweet",
                    "True",
                    "No garlic",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Nilgiri Tea",
                emoji: "🍵🏔️",
                question: "Is Nilgiri tea from India?",
                options: [
                    "False",
                    "True",
                    "China",
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
                    "Ground",
                    "Thick cut",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Raki",
                emoji: "🥃🇹🇷",
                question: "Is raki Turkish anise spirit?",
                options: [
                    "True",
                    "Italian",
                    "Greek",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Mornay Sauce",
                emoji: "🧀🥛",
                question: "Is Mornay béchamel with cheese?",
                options: [
                    "No cheese",
                    "Tomato base",
                    "True",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Phoenix Tea",
                emoji: "🍵🔥",
                question: "Is Phoenix oolong from China?",
                options: [
                    "Japan",
                    "India",
                    "True",
                    "False"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Turkish Cuisine",
                emoji: "🇹🇷🍢",
                question: "Name three Turkish dishes?",
                options: [
                    "Köfte",
                    "Dolma",
                    "Kebab",
                    "Baklava"
                ],
                correct: 2
            },
            {
                topic: "Decaf Drinks",
                emoji: "☕🚫",
                question: "Name three caffeine-free drinks?",
                options: [
                    "Water",
                    "Decaf coffee",
                    "Juice",
                    "Herbal tea"
                ],
                correct: 3
            },
            {
                topic: "Cruciferous Vegetables",
                emoji: "🥦🥬",
                question: "Name three cruciferous vegetables?",
                options: [
                    "Cauliflower",
                    "Brussels sprouts",
                    "Broccoli",
                    "Cabbage"
                ],
                correct: 2
            },
            {
                topic: "Detox Drinks",
                emoji: "🥤🌿",
                question: "Name three detox beverages?",
                options: [
                    "Ginger tea",
                    "Green tea",
                    "Cucumber water",
                    "Lemon water"
                ],
                correct: 3
            },
            {
                topic: "Steamed Foods",
                emoji: "♨️🥟",
                question: "Name three steamed dishes?",
                options: [
                    "Dumplings",
                    "Rice",
                    "Vegetables",
                    "Fish"
                ],
                correct: 0
            },
            {
                topic: "Fermented Drinks",
                emoji: "🫧🥤",
                question: "Name three fermented beverages?",
                options: [
                    "Kefir",
                    "Kvass",
                    "Beer",
                    "Kombucha"
                ],
                correct: 3
            },
            {
                topic: "Turkish Food",
                emoji: "🇹🇷🥙",
                question: "Name three Turkish foods?",
                options: [
                    "Pide",
                    "Börek",
                    "Lahmacun",
                    "Döner"
                ],
                correct: 3
            },
            {
                topic: "Exotic Fruits",
                emoji: "🥭🐉",
                question: "Name three exotic fruits?",
                options: [
                    "Mangosteen",
                    "Dragon fruit",
                    "Passion fruit",
                    "Rambutan"
                ],
                correct: 1
            },
            {
                topic: "Baking Techniques",
                emoji: "🎂👨‍🍳",
                question: "Name three baking methods?",
                options: [
                    "Folding",
                    "Proofing",
                    "Creaming",
                    "Whisking"
                ],
                correct: 2
            },
            {
                topic: "Party Foods",
                emoji: "🎉🍕",
                question: "Name three party food items?",
                options: [
                    "Sliders",
                    "Pizza",
                    "Nachos",
                    "Wings"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Banana Shake",
                emoji: "🍌🥤",
                question: "Is banana shake made with bananas?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Squid",
                emoji: "🦑🌊",
                question: "Is squid a cephalopod?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Decaf Coffee",
                emoji: "☕🚫",
                question: "Is decaf coffee caffeine-free?",
                options: [
                    "True",
                    "Low caffeine"
                ],
                correct: 0
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
                    "True",
                    "Green"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Apricot Juice",
                emoji: "🥤🍑",
                question: "Is apricot juice from apricots?",
                options: [
                    "True",
                    "From peaches"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Bouillabaisse",
                emoji: "🍲🐟",
                question: "Is bouillabaisse from Marseille?",
                options: [
                    "False",
                    "True",
                    "Paris"
                ],
                correct: 0
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
                    "Yeast only",
                    "False"
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
                    "Mild only",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Bulletproof Coffee",
                emoji: "☕🧈",
                question: "Does bulletproof coffee have butter?",
                options: [
                    "True",
                    "No fat",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Croquembouche",
                emoji: "🍰🏔️",
                question: "Is croquembouche a tower of cream puffs?",
                options: [
                    "False",
                    "True",
                    "Flat cake"
                ],
                correct: 0
            },
            {
                topic: "Goji Berry Juice",
                emoji: "🥤🔴",
                question: "Is goji berry a superfood?",
                options: [
                    "True",
                    "Regular food",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Bordelaise Sauce",
                emoji: "🥩🍷",
                question: "Is Bordelaise made with red wine?",
                options: [
                    "False",
                    "White wine",
                    "No wine",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Yunnan Tea",
                emoji: "🍵🇨🇳",
                question: "Is Yunnan famous for pu-erh?",
                options: [
                    "False",
                    "White tea",
                    "Green tea",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Julienne",
                emoji: "🔪🥕",
                question: "Is julienne matchstick-sized cuts?",
                options: [
                    "True",
                    "False",
                    "Chunks",
                    "Dice"
                ],
                correct: 0
            },
            {
                topic: "Pastis",
                emoji: "🥃🇫🇷",
                question: "Is pastis anise-flavored French aperitif?",
                options: [
                    "Spanish",
                    "True",
                    "False",
                    "Italian"
                ],
                correct: 3
            },
            {
                topic: "Chiffonade",
                emoji: "🔪🌿",
                question: "Is chiffonade thin ribbon cuts?",
                options: [
                    "Chunks",
                    "False",
                    "Dice",
                    "True"
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
                    "Flat",
                    "Ground",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Limoncello",
                emoji: "🥃🍋",
                question: "Is limoncello Italian lemon liqueur?",
                options: [
                    "Spanish",
                    "True",
                    "False",
                    "French"
                ],
                correct: 3
            },
            {
                topic: "Suprême Sauce",
                emoji: "🥣🐔",
                question: "Is suprême velouté with cream?",
                options: [
                    "False",
                    "No cream",
                    "Tomato",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Kabusecha",
                emoji: "🍵🌿",
                question: "Is kabusecha partially shaded tea?",
                options: [
                    "True",
                    "False",
                    "Full sun",
                    "Fully shaded"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Moroccan Cuisine",
                emoji: "🇲🇦🥘",
                question: "Name three Moroccan dishes?",
                options: [
                    "Couscous",
                    "Tagine",
                    "Pastilla",
                    "Harira"
                ],
                correct: 1
            },
            {
                topic: "Breakfast Drinks",
                emoji: "🌅🥤",
                question: "Name three morning beverages?",
                options: [
                    "Orange juice",
                    "Tea",
                    "Milk",
                    "Coffee"
                ],
                correct: 3
            },
            {
                topic: "Allium Vegetables",
                emoji: "🧅🧄",
                question: "Name three allium vegetables?",
                options: [
                    "Onion",
                    "Garlic",
                    "Shallot",
                    "Leek"
                ],
                correct: 0
            },
            {
                topic: "Summer Drinks",
                emoji: "☀️🥤",
                question: "Name three summer beverages?",
                options: [
                    "Iced tea",
                    "Lemonade",
                    "Smoothie",
                    "Fruit punch"
                ],
                correct: 1
            },
            {
                topic: "Boiled Foods",
                emoji: "💧🍳",
                question: "Name three boiled foods?",
                options: [
                    "Eggs",
                    "Potatoes",
                    "Vegetables",
                    "Pasta"
                ],
                correct: 0
            },
            {
                topic: "Cultured Drinks",
                emoji: "🥤🫧",
                question: "Name three cultured beverages?",
                options: [
                    "Kefir",
                    "Yogurt drink",
                    "Lassi",
                    "Buttermilk"
                ],
                correct: 1
            },
            {
                topic: "German Food",
                emoji: "🇩🇪🥨",
                question: "Name three German dishes?",
                options: [
                    "Sauerkraut",
                    "Pretzel",
                    "Bratwurst",
                    "Schnitzel"
                ],
                correct: 0
            },
            {
                topic: "Dried Fruits",
                emoji: "🫐☀️",
                question: "Name three dried fruits?",
                options: [
                    "Raisins",
                    "Apricots",
                    "Prunes",
                    "Dates"
                ],
                correct: 0
            },
            {
                topic: "Knife Skills",
                emoji: "🔪📏",
                question: "Name three knife cuts?",
                options: [
                    "Chiffonade",
                    "Julienne",
                    "Brunoise",
                    "Dice"
                ],
                correct: 3
            },
            {
                topic: "Picnic Foods",
                emoji: "🧺🥪",
                question: "Name three picnic items?",
                options: [
                    "Cookies",
                    "Sandwiches",
                    "Chips",
                    "Fruit"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Jelly",
                emoji: "🍇🥄",
                question: "Is jelly sweet and wobbly?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lavender Tea",
                emoji: "🍵💜",
                question: "Does lavender tea smell floral?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Spinach",
                emoji: "🥬💪",
                question: "Is spinach green and leafy?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "Weak"
                ],
                correct: 1
            },
            {
                topic: "Baguette",
                emoji: "🥖🇫🇷",
                question: "Is baguette French bread?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Walnut Milk",
                emoji: "🥛🌰",
                question: "Is walnut milk from walnuts?",
                options: [
                    "True",
                    "From almonds"
                ],
                correct: 1
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
                    "Vietnamese",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Gibraltar Coffee",
                emoji: "☕🥛",
                question: "Is Gibraltar served in a glass?",
                options: [
                    "True",
                    "Ceramic only",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pumpernickel",
                emoji: "🍞🟤",
                question: "Is pumpernickel dark rye bread?",
                options: [
                    "False",
                    "True",
                    "White bread"
                ],
                correct: 0
            },
            {
                topic: "Acerola Juice",
                emoji: "🥤🍒",
                question: "Is acerola high in vitamin C?",
                options: [
                    "False",
                    "True",
                    "Low vitamin"
                ],
                correct: 0
            },
            {
                topic: "Rendang",
                emoji: "🍛🇮🇩",
                question: "Is rendang Indonesian curry?",
                options: [
                    "False",
                    "Indian",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Moon Milk",
                emoji: "🥛🌙",
                question: "Is moon milk an Ayurvedic drink?",
                options: [
                    "False",
                    "Modern only",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Stollen",
                emoji: "🍞🎄",
                question: "Is stollen German Christmas bread?",
                options: [
                    "False",
                    "True",
                    "Italian"
                ],
                correct: 1
            },
            {
                topic: "Neem Juice",
                emoji: "🥤🌿",
                question: "Is neem juice bitter?",
                options: [
                    "True",
                    "Sweet",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Pavlova",
                emoji: "🍰🇦🇺",
                question: "Is pavlova a meringue dessert?",
                options: [
                    "False",
                    "Cake",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Calamansi Juice",
                emoji: "🥤🍋",
                question: "Is calamansi a Filipino citrus?",
                options: [
                    "False",
                    "Mexican",
                    "True"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Chasseur Sauce",
                emoji: "🍄🍷",
                question: "Is chasseur a mushroom hunter sauce?",
                options: [
                    "False",
                    "True",
                    "No mushrooms",
                    "Fish sauce"
                ],
                correct: 1
            },
            {
                topic: "Formosa Tea",
                emoji: "🍵🇹🇼",
                question: "Is Formosa tea from Taiwan?",
                options: [
                    "Thailand",
                    "False",
                    "Malaysia",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Chiffonade",
                emoji: "🔪🥬",
                question: "Is chiffonade for leafy herbs?",
                options: [
                    "True",
                    "False",
                    "Meat",
                    "Root vegetables"
                ],
                correct: 0
            },
            {
                topic: "Arak",
                emoji: "🥃🌿",
                question: "Is arak Middle Eastern spirit?",
                options: [
                    "False",
                    "True",
                    "Asian",
                    "European"
                ],
                correct: 0
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
                    "False",
                    "True",
                    "Cup only",
                    "Bottle"
                ],
                correct: 1
            },
            {
                topic: "Émincé",
                emoji: "🔪🥩",
                question: "Is émincé thinly sliced?",
                options: [
                    "Cubed",
                    "True",
                    "Thick cut",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pernod",
                emoji: "🥃💚",
                question: "Is Pernod an anise-flavored aperitif?",
                options: [
                    "False",
                    "Whiskey",
                    "Vodka",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Lyonnaise",
                emoji: "🧅🍳",
                question: "Does lyonnaise style include onions?",
                options: [
                    "True",
                    "Tomatoes",
                    "No onions",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Longjing Tea",
                emoji: "🍵🐉",
                question: "Is Longjing Dragon Well tea?",
                options: [
                    "True",
                    "Phoenix",
                    "Tiger",
                    "False"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Lebanese Cuisine",
                emoji: "🇱🇧🥙",
                question: "Name three Lebanese dishes?",
                options: [
                    "Falafel",
                    "Hummus",
                    "Tabbouleh",
                    "Kibbeh"
                ],
                correct: 1
            },
            {
                topic: "Evening Drinks",
                emoji: "🌙🥤",
                question: "Name three evening beverages?",
                options: [
                    "Hot chocolate",
                    "Herbal tea",
                    "Chamomile",
                    "Warm milk"
                ],
                correct: 1
            },
            {
                topic: "Nightshade Vegetables",
                emoji: "🍅🫑",
                question: "Name three nightshade vegetables?",
                options: [
                    "Pepper",
                    "Tomato",
                    "Potato",
                    "Eggplant"
                ],
                correct: 1
            },
            {
                topic: "Winter Drinks",
                emoji: "❄️🥤",
                question: "Name three winter beverages?",
                options: [
                    "Hot chocolate",
                    "Coffee",
                    "Hot tea",
                    "Mulled wine"
                ],
                correct: 0
            },
            {
                topic: "Raw Foods",
                emoji: "🥗🌱",
                question: "Name three raw foods?",
                options: [
                    "Fruits",
                    "Vegetables",
                    "Sushi",
                    "Salad"
                ],
                correct: 3
            },
            {
                topic: "Ancient Grains",
                emoji: "🌾📜",
                question: "Name three ancient grains?",
                options: [
                    "Amaranth",
                    "Quinoa",
                    "Farro",
                    "Spelt"
                ],
                correct: 1
            },
            {
                topic: "Russian Food",
                emoji: "🇷🇺🥟",
                question: "Name three Russian dishes?",
                options: [
                    "Pelmeni",
                    "Borscht",
                    "Blini",
                    "Beef stroganoff"
                ],
                correct: 1
            },
            {
                topic: "Tropical Fruits",
                emoji: "🥭🌴",
                question: "Name three tropical fruits?",
                options: [
                    "Pineapple",
                    "Papaya",
                    "Mango",
                    "Coconut"
                ],
                correct: 2
            },
            {
                topic: "Sauce Techniques",
                emoji: "🥄👨‍🍳",
                question: "Name three sauce thickeners?",
                options: [
                    "Cornstarch",
                    "Egg yolk",
                    "Reduction",
                    "Roux"
                ],
                correct: 3
            },
            {
                topic: "BBQ Foods",
                emoji: "🔥🍖",
                question: "Name three BBQ items?",
                options: [
                    "Sausages",
                    "Burgers",
                    "Ribs",
                    "Chicken"
                ],
                correct: 2
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tangerine Juice",
                emoji: "🍊🥤",
                question: "Is tangerine juice citrus?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Cantaloupe Juice",
                emoji: "🥤🍈",
                question: "Is cantaloupe juice orange?",
                options: [
                    "True",
                    "Green"
                ],
                correct: 0
            },
            {
                topic: "Sashimi",
                emoji: "🐟🍣",
                question: "Is sashimi raw fish?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Beetroot Latte",
                emoji: "☕💜",
                question: "Is beetroot latte pink?",
                options: [
                    "True",
                    "Brown"
                ],
                correct: 0
            },
            {
                topic: "Paratha",
                emoji: "🫓🇮🇳",
                question: "Is paratha Indian flatbread?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "From grapes"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Pozole",
                emoji: "🍲🇲🇽",
                question: "Is pozole a Mexican hominy soup?",
                options: [
                    "Spanish",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Mazagran",
                emoji: "☕🧊",
                question: "Is mazagran cold coffee drink?",
                options: [
                    "False",
                    "True",
                    "Hot only"
                ],
                correct: 1
            },
            {
                topic: "Pain de Mie",
                emoji: "🍞🇫🇷",
                question: "Is pain de mie French sandwich bread?",
                options: [
                    "True",
                    "Italian",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Wolfberry Juice",
                emoji: "🥤🔴",
                question: "Is wolfberry same as goji?",
                options: [
                    "Different",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mole",
                emoji: "🍫🌶️",
                question: "Does mole have chocolate?",
                options: [
                    "False",
                    "Never",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Cascara Tea",
                emoji: "🍵☕",
                question: "Is cascara from coffee cherry?",
                options: [
                    "False",
                    "True",
                    "Tea leaves"
                ],
                correct: 1
            },
            {
                topic: "Babka",
                emoji: "🍞🍫",
                question: "Is babka a twisted sweet bread?",
                options: [
                    "False",
                    "True",
                    "Flat"
                ],
                correct: 1
            },
            {
                topic: "Noni Juice",
                emoji: "🥤🍈",
                question: "Does noni juice smell strong?",
                options: [
                    "True",
                    "False",
                    "Mild"
                ],
                correct: 1
            },
            {
                topic: "Cremolada",
                emoji: "🍧🍋",
                question: "Is cremolada a frozen dessert?",
                options: [
                    "Hot",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Jujube Tea",
                emoji: "🍵🔴",
                question: "Is jujube tea from red dates?",
                options: [
                    "True",
                    "Green dates",
                    "False"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Périgueux Sauce",
                emoji: "🍄🍷",
                question: "Does Périgueux have truffles?",
                options: [
                    "True",
                    "Mushrooms only",
                    "No truffles",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Wuyi Tea",
                emoji: "🍵⛰️",
                question: "Is Wuyi rock oolong tea?",
                options: [
                    "Black tea",
                    "Green tea",
                    "False",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Paysanne",
                emoji: "🔪🥕",
                question: "Is paysanne thin flat cuts?",
                options: [
                    "False",
                    "True",
                    "Strips",
                    "Thick"
                ],
                correct: 0
            },
            {
                topic: "Absinthe",
                emoji: "🍸💚",
                question: "Is absinthe known as green fairy?",
                options: [
                    "Red fairy",
                    "Blue fairy",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Macedoine",
                emoji: "🔪🥗",
                question: "Is macedoine small mixed dice?",
                options: [
                    "Large chunks",
                    "Strips",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Rooibos",
                emoji: "🍵🇿🇦",
                question: "Is rooibos red bush tea?",
                options: [
                    "Black bush",
                    "Green bush",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Jardinière",
                emoji: "🥕🔪",
                question: "Is jardinière mixed vegetables?",
                options: [
                    "False",
                    "True",
                    "Sauce",
                    "Meat only"
                ],
                correct: 1
            },
            {
                topic: "Amaretto",
                emoji: "🥃🌰",
                question: "Is amaretto almond-flavored liqueur?",
                options: [
                    "False",
                    "Walnut",
                    "True",
                    "Hazelnut"
                ],
                correct: 3
            },
            {
                topic: "Provençale",
                emoji: "🍅🧄",
                question: "Does provençale have tomatoes and garlic?",
                options: [
                    "True",
                    "No tomato",
                    "No garlic",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Biluochun Tea",
                emoji: "🍵🐚",
                question: "Is Biluochun a green tea?",
                options: [
                    "False",
                    "Black",
                    "True",
                    "Oolong"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Brazilian Cuisine",
                emoji: "🇧🇷🍖",
                question: "Name three Brazilian dishes?",
                options: [
                    "Churrasco",
                    "Pão de queijo",
                    "Moqueca",
                    "Feijoada"
                ],
                correct: 3
            },
            {
                topic: "Warm Drinks",
                emoji: "☕🔥",
                question: "Name three warm beverages?",
                options: [
                    "Coffee",
                    "Hot chocolate",
                    "Tea",
                    "Mulled wine"
                ],
                correct: 0
            },
            {
                topic: "Squash Vegetables",
                emoji: "🎃🥒",
                question: "Name three types of squash?",
                options: [
                    "Zucchini",
                    "Pumpkin",
                    "Acorn",
                    "Butternut"
                ],
                correct: 3
            },
            {
                topic: "Fall Drinks",
                emoji: "🍂🥤",
                question: "Name three autumn beverages?",
                options: [
                    "Hot tea",
                    "Pumpkin spice latte",
                    "Mulled wine",
                    "Apple cider"
                ],
                correct: 1
            },
            {
                topic: "Fermented Foods",
                emoji: "🥒🫙",
                question: "Name three fermented foods?",
                options: [
                    "Pickles",
                    "Sauerkraut",
                    "Kimchi",
                    "Yogurt"
                ],
                correct: 2
            },
            {
                topic: "Pseudocereals",
                emoji: "🌾🥗",
                question: "Name three pseudocereals?",
                options: [
                    "Chia",
                    "Amaranth",
                    "Quinoa",
                    "Buckwheat"
                ],
                correct: 2
            },
            {
                topic: "Polish Food",
                emoji: "🇵🇱🥟",
                question: "Name three Polish dishes?",
                options: [
                    "Bigos",
                    "Pierogi",
                    "Kielbasa",
                    "Żurek"
                ],
                correct: 1
            },
            {
                topic: "Plating Techniques",
                emoji: "🍽️🎨",
                question: "Name three plating methods?",
                options: [
                    "Dotting",
                    "Drizzling",
                    "Swooshing",
                    "Stacking"
                ],
                correct: 3
            },
            {
                topic: "Camping Foods",
                emoji: "🏕️🔥",
                question: "Name three camping food items?",
                options: [
                    "Trail mix",
                    "Hot dogs",
                    "Beans",
                    "S'mores"
                ],
                correct: 3
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Earl Grey Tea",
                emoji: "🍵🍊",
                question: "Does Earl Grey have bergamot?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Jam",
                emoji: "🍓🍞",
                question: "Is jam made from fruit?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "Yellow"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Cholent",
                emoji: "🍲✡️",
                question: "Is cholent a Jewish slow-cooked stew?",
                options: [
                    "False",
                    "True",
                    "Fast cooked"
                ],
                correct: 1
            },
            {
                topic: "Café au Lait",
                emoji: "☕🥛",
                question: "Is café au lait equal coffee and milk?",
                options: [
                    "No milk",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Lavash",
                emoji: "🫓🇦🇲",
                question: "Is lavash Armenian flatbread?",
                options: [
                    "Italian",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Camu Camu Juice",
                emoji: "🥤🍒",
                question: "Is camu camu highest in vitamin C?",
                options: [
                    "True",
                    "False",
                    "Low vitamin"
                ],
                correct: 2
            },
            {
                topic: "Adobo",
                emoji: "🍖🇵🇭",
                question: "Is adobo a Filipino dish?",
                options: [
                    "False",
                    "True",
                    "Chinese"
                ],
                correct: 1
            },
            {
                topic: "Cortado",
                emoji: "☕🥛",
                question: "Is cortado espresso with warm milk?",
                options: [
                    "False",
                    "True",
                    "Cold milk"
                ],
                correct: 2
            },
            {
                topic: "Challah",
                emoji: "🍞🌀",
                question: "Is challah braided bread?",
                options: [
                    "False",
                    "True",
                    "Flat"
                ],
                correct: 0
            },
            {
                topic: "Pomelo Juice",
                emoji: "🥤🍊",
                question: "Is pomelo larger than grapefruit?",
                options: [
                    "False",
                    "Smaller",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Beignet",
                emoji: "🍩🇫🇷",
                question: "Is beignet a French donut?",
                options: [
                    "Italian",
                    "False",
                    "True"
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
                    "No onions",
                    "True",
                    "False",
                    "No mustard"
                ],
                correct: 2
            },
            {
                topic: "Bai Hao Tea",
                emoji: "🍵🦗",
                question: "Is Bai Hao bitten by leafhoppers?",
                options: [
                    "No insects",
                    "Artificial",
                    "False",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Lardons",
                emoji: "🥓🔪",
                question: "Are lardons small bacon pieces?",
                options: [
                    "True",
                    "Large chunks",
                    "False",
                    "Not bacon"
                ],
                correct: 0
            },
            {
                topic: "Sambuca",
                emoji: "🥃⭐",
                question: "Is sambuca served with coffee beans?",
                options: [
                    "True",
                    "Tea leaves",
                    "False",
                    "No beans"
                ],
                correct: 2
            },
            {
                topic: "Paysanne Cut",
                emoji: "🔪🥕",
                question: "Is paysanne 1/2 inch thin squares?",
                options: [
                    "Strips",
                    "False",
                    "True",
                    "Thick"
                ],
                correct: 2
            },
            {
                topic: "Honeybush Tea",
                emoji: "🍵🍯",
                question: "Is honeybush from South Africa?",
                options: [
                    "Europe",
                    "True",
                    "False",
                    "Asia"
                ],
                correct: 1
            },
            {
                topic: "Tournée Cut",
                emoji: "🥔🔪",
                question: "Is tournée a football-shaped cut?",
                options: [
                    "Round",
                    "True",
                    "Square",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Frangelico",
                emoji: "🥃🌰",
                question: "Is Frangelico hazelnut liqueur?",
                options: [
                    "False",
                    "Almond",
                    "True",
                    "Walnut"
                ],
                correct: 1
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
                    "False",
                    "Black tea",
                    "True",
                    "Common"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Ethiopian Cuisine",
                emoji: "🇪🇹🍛",
                question: "Name three Ethiopian dishes?",
                options: [
                    "Doro wat",
                    "Kitfo",
                    "Injera",
                    "Tibs"
                ],
                correct: 2
            },
            {
                topic: "Smoothie Boosters",
                emoji: "🥤💪",
                question: "Name three smoothie add-ins?",
                options: [
                    "Protein powder",
                    "Spinach",
                    "Flax seeds",
                    "Chia seeds"
                ],
                correct: 0
            },
            {
                topic: "Gourd Vegetables",
                emoji: "🎃🥒",
                question: "Name three gourd vegetables?",
                options: [
                    "Pumpkin",
                    "Cucumber",
                    "Bottle gourd",
                    "Zucchini"
                ],
                correct: 0
            },
            {
                topic: "Spring Drinks",
                emoji: "🌸🥤",
                question: "Name three spring beverages?",
                options: [
                    "Green tea",
                    "Flower tea",
                    "Lavender tea",
                    "Strawberry lemonade"
                ],
                correct: 2
            },
            {
                topic: "Pickled Foods",
                emoji: "🥒🫙",
                question: "Name three pickled items?",
                options: [
                    "Onions",
                    "Peppers",
                    "Cabbage",
                    "Cucumbers"
                ],
                correct: 3
            },
            {
                topic: "Gluten-Free Grains",
                emoji: "🌾🚫",
                question: "Name three gluten-free grains?",
                options: [
                    "Quinoa",
                    "Rice",
                    "Corn",
                    "Millet"
                ],
                correct: 1
            },
            {
                topic: "Hungarian Food",
                emoji: "🇭🇺🍲",
                question: "Name three Hungarian dishes?",
                options: [
                    "Goulash",
                    "Lángos",
                    "Dobos torte",
                    "Paprikash"
                ],
                correct: 0
            },
            {
                topic: "Pome Fruits",
                emoji: "🍎🍐",
                question: "Name three pome fruits?",
                options: [
                    "Apple",
                    "Loquat",
                    "Pear",
                    "Quince"
                ],
                correct: 0
            },
            {
                topic: "Garnishing",
                emoji: "🌿✨",
                question: "Name three garnish types?",
                options: [
                    "Citrus zest",
                    "Edible flowers",
                    "Herbs",
                    "Microgreens"
                ],
                correct: 2
            },
            {
                topic: "Buffet Foods",
                emoji: "🍽️🎉",
                question: "Name three buffet items?",
                options: [
                    "Salads",
                    "Pasta",
                    "Bread",
                    "Meats"
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Tap Water",
                emoji: "💧🚰",
                question: "Does tap water come from faucets?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "Contains dairy"
                ],
                correct: 1
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
                    "True",
                    "Low antioxidants"
                ],
                correct: 1
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
                    "False",
                    "Stirred",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tigelle",
                emoji: "🍞🇮🇹",
                question: "Are tigelle small Italian breads?",
                options: [
                    "True",
                    "Large",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Sea Buckthorn Juice",
                emoji: "🥤🍊",
                question: "Is sea buckthorn juice tangy?",
                options: [
                    "Bland",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Satay",
                emoji: "🍢🥜",
                question: "Is satay served with peanut sauce?",
                options: [
                    "False",
                    "No sauce",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Nitro Brew",
                emoji: "☕💨",
                question: "Is nitro brew infused with nitrogen?",
                options: [
                    "True",
                    "False",
                    "Oxygen"
                ],
                correct: 0
            },
            {
                topic: "Damper Bread",
                emoji: "🍞🇦🇺",
                question: "Is damper Australian bush bread?",
                options: [
                    "False",
                    "True",
                    "American"
                ],
                correct: 1
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
                    "Wheat",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Mangosteen Juice",
                emoji: "🥤👑",
                question: "Is mangosteen purple inside?",
                options: [
                    "False",
                    "True",
                    "White inside"
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
                    "False",
                    "Tomato based",
                    "Cream based",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Huangshan Maofeng",
                emoji: "🍵⛰️",
                question: "Is Huangshan Maofeng a green tea?",
                options: [
                    "True",
                    "Black tea",
                    "False",
                    "White tea"
                ],
                correct: 0
            },
            {
                topic: "Rondelle",
                emoji: "🔪🥕",
                question: "Is rondelle round slices?",
                options: [
                    "Square",
                    "True",
                    "Strips",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Galliano",
                emoji: "🥃💛",
                question: "Is Galliano vanilla-flavored liqueur?",
                options: [
                    "Coffee",
                    "Chocolate",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Oblique Cut",
                emoji: "🔪🥕",
                question: "Is oblique cut diagonal slicing?",
                options: [
                    "Straight",
                    "True",
                    "Diced",
                    "False"
                ],
                correct: 3
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
                    "False",
                    "Mashed",
                    "Thick cut",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Strega",
                emoji: "🥃💛",
                question: "Is Strega Italian herbal liqueur?",
                options: [
                    "Spanish",
                    "False",
                    "French",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Milanaise Style",
                emoji: "🥩🍋",
                question: "Does Milanaise mean breaded and fried?",
                options: [
                    "True",
                    "Grilled",
                    "False",
                    "Boiled"
                ],
                correct: 2
            },
            {
                topic: "Junshan Yinzhen",
                emoji: "🍵💛",
                question: "Is Junshan Yinzhen a yellow tea?",
                options: [
                    "True",
                    "Black",
                    "Green",
                    "False"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Peruvian Cuisine",
                emoji: "🇵🇪🥘",
                question: "Name three Peruvian dishes?",
                options: [
                    "Ceviche",
                    "Causa",
                    "Aji de gallina",
                    "Lomo saltado"
                ],
                correct: 0
            },
            {
                topic: "Protein Drinks",
                emoji: "💪🥤",
                question: "Name three protein beverages?",
                options: [
                    "Kefir",
                    "Soy milk",
                    "Protein shake",
                    "Milk"
                ],
                correct: 2
            },
            {
                topic: "Brassica Vegetables",
                emoji: "🥦🥬",
                question: "Name three brassica vegetables?",
                options: [
                    "Cauliflower",
                    "Kale",
                    "Cabbage",
                    "Broccoli"
                ],
                correct: 3
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
                    "Canned goods",
                    "Jerky",
                    "Jam",
                    "Pickles"
                ],
                correct: 2
            },
            {
                topic: "Whole Grains",
                emoji: "🌾🍚",
                question: "Name three whole grains?",
                options: [
                    "Oats",
                    "Brown rice",
                    "Whole wheat",
                    "Barley"
                ],
                correct: 1
            },
            {
                topic: "Swedish Food",
                emoji: "🇸🇪🥘",
                question: "Name three Swedish dishes?",
                options: [
                    "Surströmming",
                    "Gravlax",
                    "Knäckebröd",
                    "Meatballs"
                ],
                correct: 3
            },
            {
                topic: "Drupes",
                emoji: "🍑🍒",
                question: "Name three drupe fruits?",
                options: [
                    "Apricot",
                    "Plum",
                    "Cherry",
                    "Peach"
                ],
                correct: 3
            },
            {
                topic: "Flavor Profiles",
                emoji: "😋👅",
                question: "Name three basic tastes?",
                options: [
                    "Sweet",
                    "Salty",
                    "Bitter",
                    "Sour"
                ],
                correct: 0
            },
            {
                topic: "Street Snacks",
                emoji: "🌭🍢",
                question: "Name three street snack items?",
                options: [
                    "Skewers",
                    "Corn dog",
                    "Pretzels",
                    "Tacos"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Peanut Butter",
                emoji: "🥜🥄",
                question: "Is peanut butter spreadable?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Bisque",
                emoji: "🦞🥣",
                question: "Is bisque a creamy soup?",
                options: [
                    "True",
                    "Clear soup"
                ],
                correct: 1
            },
            {
                topic: "Tortilla",
                emoji: "🌮🫓",
                question: "Is tortilla related to food and drinks?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Lychee Juice",
                emoji: "🥤🍈",
                question: "Is lychee juice sweet?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Brazil Nut Milk",
                emoji: "🥛🌰",
                question: "Is Brazil nut milk from Brazil nuts?",
                options: [
                    "True",
                    "From cashews"
                ],
                correct: 1
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
                    "True",
                    "Green"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Menudo",
                emoji: "🍲🇲🇽",
                question: "Is menudo a Mexican tripe soup?",
                options: [
                    "False",
                    "True",
                    "Spanish"
                ],
                correct: 1
            },
            {
                topic: "Breve",
                emoji: "☕🥛",
                question: "Is breve made with half-and-half?",
                options: [
                    "False",
                    "True",
                    "Skim milk"
                ],
                correct: 1
            },
            {
                topic: "Arepa",
                emoji: "🫓🇨🇴",
                question: "Is arepa a corn cake?",
                options: [
                    "Wheat",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Yuzu Juice",
                emoji: "🥤🍋",
                question: "Is yuzu a Japanese citrus?",
                options: [
                    "False",
                    "Chinese",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Massaman",
                emoji: "🍛🇹🇭",
                question: "Is massaman a Thai curry?",
                options: [
                    "False",
                    "Indian",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Einspänner",
                emoji: "☕🥛",
                question: "Is Einspänner Austrian coffee?",
                options: [
                    "True",
                    "False",
                    "Italian"
                ],
                correct: 2
            },
            {
                topic: "Bannock",
                emoji: "🍞🇨🇦",
                question: "Is bannock Indigenous flatbread?",
                options: [
                    "European",
                    "False",
                    "True"
                ],
                correct: 2
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
                    "Chinese",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Feijoa Juice",
                emoji: "🥤🍈",
                question: "Is feijoa from South America?",
                options: [
                    "True",
                    "False",
                    "Europe"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Soubise Sauce",
                emoji: "🧅🥛",
                question: "Is Soubise béchamel with onions?",
                options: [
                    "No onions",
                    "True",
                    "Tomato base",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Taiping Houkui",
                emoji: "🍵🐒",
                question: "Is Taiping Houkui a green tea?",
                options: [
                    "Black tea",
                    "True",
                    "Oolong",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Pont-Neuf",
                emoji: "🥔🔪",
                question: "Is Pont-Neuf thick French fries?",
                options: [
                    "Not fries",
                    "True",
                    "False",
                    "Thin"
                ],
                correct: 2
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
                    "Larger",
                    "Smaller",
                    "False",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Tulsi Tea",
                emoji: "🍵🌿",
                question: "Is tulsi holy basil tea?",
                options: [
                    "False",
                    "Mint",
                    "True",
                    "Regular basil"
                ],
                correct: 1
            },
            {
                topic: "Allumette",
                emoji: "🥔🔪",
                question: "Is allumette matchstick-sized cut?",
                options: [
                    "True",
                    "Thick",
                    "False",
                    "Diced"
                ],
                correct: 2
            },
            {
                topic: "Midori",
                emoji: "🥃💚",
                question: "Is Midori melon liqueur?",
                options: [
                    "Grape",
                    "Apple",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Duglere Style",
                emoji: "🐟🍅",
                question: "Does Duglere have tomatoes?",
                options: [
                    "No tomatoes",
                    "True",
                    "Cream only",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Liu An Gua Pian",
                emoji: "🍵🍃",
                question: "Is Liu An Gua Pian a green tea?",
                options: [
                    "True",
                    "White",
                    "Yellow",
                    "False"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Argentine Cuisine",
                emoji: "🇦🇷🥩",
                question: "Name three Argentine dishes?",
                options: [
                    "Dulce de leche",
                    "Empanadas",
                    "Asado",
                    "Chimichurri"
                ],
                correct: 2
            },
            {
                topic: "Detox Drinks",
                emoji: "🥤🌿",
                question: "Is detox drinks related to food and drinks?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
                {
                topic: "Legumes",
                emoji: "🫘🌱",
                question: "Name three legumes?",
                options: [
                    "Beans",
                    "Peas",
                    "Lentils",
                    "Chickpeas"
                ],
                correct: 0
            },
            {
                topic: "Alkaline Drinks",
                emoji: "💧🥤",
                question: "Name three alkaline beverages?",
                options: [
                    "Green juice",
                    "Aloe vera juice",
                    "Alkaline water",
                    "Coconut water"
                ],
                correct: 2
            },
            {
                topic: "Smoked Foods",
                emoji: "💨🍖",
                question: "Name three smoked items?",
                options: [
                    "Cheese",
                    "Sausage",
                    "Bacon",
                    "Salmon"
                ],
                correct: 3
            },
            {
                topic: "Heirloom Grains",
                emoji: "🌾📜",
                question: "Name three heirloom grains?",
                options: [
                    "Kamut",
                    "Spelt",
                    "Emmer",
                    "Einkorn"
                ],
                correct: 3
            },
            {
                topic: "Austrian Food",
                emoji: "🇦🇹🥨",
                question: "Name three Austrian dishes?",
                options: [
                    "Sachertorte",
                    "Apfelstrudel",
                    "Schnitzel",
                    "Kaiserschmarrn"
                ],
                correct: 2
            },
            {
                topic: "Aggregate Fruits",
                emoji: "🍓🫐",
                question: "Name three aggregate fruits?",
                options: [
                    "Mulberry",
                    "Blackberry",
                    "Strawberry",
                    "Raspberry"
                ],
                correct: 3
            },
            {
                topic: "Food Pairings",
                emoji: "🍷🧀",
                question: "Name three classic food pairings?",
                options: [
                    "Wine and cheese",
                    "Tomato and basil",
                    "Fish and chips",
                    "Peanut butter and jelly"
                ],
                correct: 0
            },
            {
                topic: "Food Truck Items",
                emoji: "🚚🌮",
                question: "Name three food truck items?",
                options: [
                    "Hot dogs",
                    "Falafel",
                    "Burgers",
                    "Tacos"
                ],
                correct: 3
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Seltzer Water",
                emoji: "💧✨",
                question: "Is seltzer water carbonated?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Chamomile Tea",
                emoji: "🍵🌼",
                question: "Is chamomile tea calming?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mushroom",
                emoji: "🍄🌰",
                question: "Is mushroom a fungus?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "Thin soup"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pistachio Milk",
                emoji: "🥛💚",
                question: "Is pistachio milk from pistachios?",
                options: [
                    "True",
                    "From almonds"
                ],
                correct: 1
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
                    "True",
                    "From apples"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Bouillabaisse",
                emoji: "🍲🐟",
                question: "Is bouillabaisse from Provence?",
                options: [
                    "True",
                    "Normandy",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Café Bombón",
                emoji: "☕🥛",
                question: "Is café bombón with condensed milk?",
                options: [
                    "True",
                    "False",
                    "Regular milk"
                ],
                correct: 2
            },
            {
                topic: "Mantou",
                emoji: "🥟🇨🇳",
                question: "Is mantou a steamed bun?",
                options: [
                    "False",
                    "Fried",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Acai Juice",
                emoji: "🥤🫐",
                question: "Is acai a superfood berry?",
                options: [
                    "Regular food",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Tonkatsu",
                emoji: "🥩🇯🇵",
                question: "Is tonkatsu breaded pork cutlet?",
                options: [
                    "Beef",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Café de Olla",
                emoji: "☕🇲🇽",
                question: "Is café de olla Mexican spiced coffee?",
                options: [
                    "Cuban",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Zopf",
                emoji: "🍞🇨🇭",
                question: "Is zopf a Swiss braided bread?",
                options: [
                    "True",
                    "German",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Nettle Tea",
                emoji: "🍵🌿",
                question: "Is nettle tea from stinging nettles?",
                options: [
                    "Mint",
                    "True",
                    "False"
                ],
                correct: 2
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
                    "False",
                    "True",
                    "Mexican"
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
                    "No shellfish",
                    "False",
                    "Lobster only"
                ],
                correct: 2
            },
            {
                topic: "Xinyang Maojian",
                emoji: "🍵💚",
                question: "Is Xinyang Maojian a green tea?",
                options: [
                    "True",
                    "White",
                    "False",
                    "Black"
                ],
                correct: 0
            },
            {
                topic: "Mirepoix",
                emoji: "🥕🧅",
                question: "Is mirepoix 2:1:1 onion:celery:carrot?",
                options: [
                    "True",
                    "1:1:1",
                    "False",
                    "3:2:1"
                ],
                correct: 0
            },
            {
                topic: "Benedictine",
                emoji: "🥃🌿",
                question: "Is Bénédictine herbal liqueur from France?",
                options: [
                    "True",
                    "Spain",
                    "Italy",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Parmentier Cut",
                emoji: "🥔🔪",
                question: "Is Parmentier 1/2 inch cube?",
                options: [
                    "1 inch",
                    "1/4 inch",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Jiaogulan Tea",
                emoji: "🍵🌿",
                question: "Is jiaogulan called immortality herb?",
                options: [
                    "Common herb",
                    "False",
                    "Death herb",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Dice Cut",
                emoji: "🔪🥔",
                question: "Is large dice 3/4 inch cubes?",
                options: [
                    "1/2 inch",
                    "True",
                    "False",
                    "1 inch"
                ],
                correct: 1
            },
            {
                topic: "Crème de Violette",
                emoji: "🥃💜",
                question: "Is Crème de Violette violet liqueur?",
                options: [
                    "Lavender",
                    "False",
                    "True",
                    "Rose"
                ],
                correct: 1
            },
            {
                topic: "Véronique Style",
                emoji: "🐟🍇",
                question: "Does Véronique include grapes?",
                options: [
                    "False",
                    "Berries",
                    "True",
                    "No grapes"
                ],
                correct: 2
            },
            {
                topic: "Bai Mudan Tea",
                emoji: "🍵🌸",
                question: "Is Bai Mudan white peony tea?",
                options: [
                    "False",
                    "True",
                    "Black",
                    "Green"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Colombian Cuisine",
                emoji: "🇨🇴🍲",
                question: "Name three Colombian dishes?",
                options: [
                    "Arepas",
                    "Sancocho",
                    "Bandeja paisa",
                    "Empanadas"
                ],
                correct: 2
            },
            {
                topic: "Immune Boosting Drinks",
                emoji: "💪🥤",
                question: "Name three immunity drinks?",
                options: [
                    "Turmeric latte",
                    "Green tea",
                    "Orange juice",
                    "Ginger tea"
                ],
                correct: 2
            },
            {
                topic: "Pulses",
                emoji: "🫘🌾",
                question: "Name three pulse crops?",
                options: [
                    "Black beans",
                    "Lentils",
                    "Chickpeas",
                    "Split peas"
                ],
                correct: 1
            },
            {
                topic: "Electrolyte Drinks",
                emoji: "⚡🥤",
                question: "Name three electrolyte beverages?",
                options: [
                    "Sports drink",
                    "Electrolyte water",
                    "Pedialyte",
                    "Coconut water"
                ],
                correct: 0
            },
            {
                topic: "Cured Foods",
                emoji: "🧂🥩",
                question: "Name three cured items?",
                options: [
                    "Bacon",
                    "Prosciutto",
                    "Salami",
                    "Ham"
                ],
                correct: 0
            },
            {
                topic: "Superfood Grains",
                emoji: "🌾⭐",
                question: "Name three superfood grains?",
                options: [
                    "Amaranth",
                    "Farro",
                    "Quinoa",
                    "Teff"
                ],
                correct: 2
            },
            {
                topic: "Swiss Food",
                emoji: "🇨🇭🧀",
                question: "Name three Swiss dishes?",
                options: [
                    "Zürcher Geschnetzeltes",
                    "Fondue",
                    "Rösti",
                    "Raclette"
                ],
                correct: 1
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
                    "Emulsification",
                    "Gelification"
                ],
                correct: 0
            },
            {
                topic: "Festival Foods",
                emoji: "🎪🍿",
                question: "Name three festival food items?",
                options: [
                    "Fried Oreos",
                    "Funnel cake",
                    "Corn dog",
                    "Cotton candy"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
            },
                {
                topic: "Zucchini",
                emoji: "🥒💚",
                question: "Is zucchini a squash?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pepsi",
                emoji: "🥤🔵",
                question: "Is Pepsi a cola drink?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "Hot"
                ],
                correct: 1
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
                    "True",
                    "Yellow"
                ],
                correct: 0
            },
            {
                topic: "Poke Bowl",
                emoji: "🐟🍚",
                question: "Is poke bowl Hawaiian?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Hazelnut Milk",
                emoji: "🥛🌰",
                question: "Is hazelnut milk from hazelnuts?",
                options: [
                    "True",
                    "From walnuts"
                ],
                correct: 1
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
                    "True",
                    "Green"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Kare-Kare",
                emoji: "🍲🇵🇭",
                question: "Is kare-kare Filipino peanut stew?",
                options: [
                    "False",
                    "Thai",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Café Noisette",
                emoji: "☕🌰",
                question: "Is café noisette espresso with milk?",
                options: [
                    "No milk",
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Khachapuri",
                emoji: "🧀🇬🇪",
                question: "Is khachapuri Georgian cheese bread?",
                options: [
                    "Russian",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Guarana Juice",
                emoji: "🥤⚡",
                question: "Is guarana high in caffeine?",
                options: [
                    "True",
                    "False",
                    "No caffeine"
                ],
                correct: 1
            },
            {
                topic: "Okonomiyaki",
                emoji: "🥞🇯🇵",
                question: "Is okonomiyaki a savory pancake?",
                options: [
                    "Sweet only",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Wiener Melange",
                emoji: "☕🇦🇹",
                question: "Is Wiener Melange Austrian coffee?",
                options: [
                    "German",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Karjalanpiirakka",
                emoji: "🥧🇫🇮",
                question: "Is karjalanpiirakka Finnish pastry?",
                options: [
                    "Swedish",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Rambutan Juice",
                emoji: "🥤🔴",
                question: "Is rambutan a hairy fruit?",
                options: [
                    "Smooth",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Kladdkaka",
                emoji: "🍫🇸🇪",
                question: "Is kladdkaka Swedish chocolate cake?",
                options: [
                    "True",
                    "Danish",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Cupuaçu Juice",
                emoji: "🥤🇧🇷",
                question: "Is cupuaçu from Amazon?",
                options: [
                    "True",
                    "Africa",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Bercy Sauce",
                emoji: "🐟🍷",
                question: "Is Bercy made with white wine?",
                options: [
                    "True",
                    "Red wine",
                    "No wine",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "Mao Feng Tea",
                emoji: "🍵⛰️",
                question: "Is Mao Feng a green tea?",
                options: [
                    "False",
                    "True",
                    "Oolong",
                    "Black"
                ],
                correct: 2
            },
            {
                topic: "Sofrito",
                emoji: "🧅🫑",
                question: "Is sofrito an aromatic base?",
                options: [
                    "Garnish",
                    "False",
                    "True",
                    "Sauce only"
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
                    "Whole",
                    "True",
                    "False",
                    "With skin"
                ],
                correct: 1
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
                    "Whole",
                    "False",
                    "Large chunks",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Tia Maria",
                emoji: "🥃☕",
                question: "Is Tia Maria coffee liqueur from Jamaica?",
                options: [
                    "Brazil",
                    "True",
                    "Mexico",
                    "False"
                ],
                correct: 3
            },
            {
                topic: "À la Grecque",
                emoji: "🫒🍋",
                question: "Is à la grecque cooked in oil and lemon?",
                options: [
                    "False",
                    "Water only",
                    "Cream",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Gunpowder Tea",
                emoji: "🍵💥",
                question: "Is Gunpowder tea rolled into pellets?",
                options: [
                    "False",
                    "Powdered",
                    "Flat leaves",
                    "True"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Chilean Cuisine",
                emoji: "🇨🇱🥘",
                question: "Name three Chilean dishes?",
                options: [
                    "Pastel de choclo",
                    "Completo",
                    "Cazuela",
                    "Empanadas"
                ],
                correct: 3
            },
            {
                topic: "Pre-Workout Drinks",
                emoji: "💪🥤",
                question: "Name three pre-workout beverages?",
                options: [
                    "Coffee",
                    "Pre-workout supplement",
                    "Energy drink",
                    "BCAAs"
                ],
                correct: 0
            },
            {
                topic: "Tubers",
                emoji: "🥔🍠",
                question: "Name three tuber vegetables?",
                options: [
                    "Cassava",
                    "Potato",
                    "Yam",
                    "Sweet potato"
                ],
                correct: 1
            },
            {
                topic: "Recovery Drinks",
                emoji: "🥤💪",
                question: "Name three post-workout beverages?",
                options: [
                    "Coconut water",
                    "Smoothie",
                    "Protein shake",
                    "Chocolate milk"
                ],
                correct: 2
            },
            {
                topic: "Dehydrated Foods",
                emoji: "☀️🍎",
                question: "Name three dehydrated items?",
                options: [
                    "Sun-dried tomatoes",
                    "Jerky",
                    "Dried mushrooms",
                    "Dried fruit"
                ],
                correct: 3
            },
            {
                topic: "Ancient Grains",
                emoji: "🌾📜",
                question: "Name three ancient grain varieties?",
                options: [
                    "Spelt",
                    "Einkorn",
                    "Kamut",
                    "Emmer"
                ],
                correct: 1
            },
            {
                topic: "Dutch Food",
                emoji: "🇳🇱🧀",
                question: "Name three Dutch dishes?",
                options: [
                    "Bitterballen",
                    "Poffertjes",
                    "Stroopwafel",
                    "Haring"
                ],
                correct: 2
            },
            {
                topic: "Vine Fruits",
                emoji: "🍇🍉",
                question: "Name three fruits that grow on vines?",
                options: [
                    "Watermelon",
                    "Passion fruit",
                    "Grapes",
                    "Cantaloupe"
                ],
                correct: 2
            },
            {
                topic: "Emulsification",
                emoji: "🥚🫒",
                question: "Name three emulsified sauces?",
                options: [
                    "Aioli",
                    "Béarnaise",
                    "Mayonnaise",
                    "Hollandaise"
                ],
                correct: 2
            },
            {
                topic: "County Fair Foods",
                emoji: "🎡🍗",
                question: "Name three fair food items?",
                options: [
                    "Corn dog",
                    "Funnel cake",
                    "Turkey leg",
                    "Fried chicken"
                ],
                correct: 3
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Grape Juice",
                emoji: "🍇🥤",
                question: "Is grape juice purple?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Gummy Bears",
                emoji: "🐻🍬",
                question: "Are gummy bears chewy?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Lemon Tea",
                emoji: "🍵🍋",
                question: "Does lemon tea have lemon?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "Meat soup"
                ],
                correct: 0
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
                    "True",
                    "Green"
                ],
                correct: 0
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
                    "True",
                    "More milk"
                ],
                correct: 1
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
                    "True",
                    "From beans"
                ],
                correct: 0
            },
            {
                topic: "Tarte Tatin",
                emoji: "🍎🥧",
                question: "Is tarte Tatin upside-down tart?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "Mild",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Cortado Condensada",
                emoji: "☕🥛",
                question: "Is cortado condensada with condensed milk?",
                options: [
                    "True",
                    "False",
                    "Regular milk"
                ],
                correct: 0
            },
            {
                topic: "Borodinsky",
                emoji: "🍞🇷🇺",
                question: "Is Borodinsky Russian rye bread?",
                options: [
                    "German",
                    "False",
                    "True"
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
                    "Chinese",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Café Touba",
                emoji: "☕🇸🇳",
                question: "Is café Touba Senegalese spiced coffee?",
                options: [
                    "False",
                    "True",
                    "Ethiopian"
                ],
                correct: 2
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
                    "True",
                    "No",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Medovik",
                emoji: "🍰🍯",
                question: "Is medovik honey cake?",
                options: [
                    "False",
                    "True",
                    "Chocolate"
                ],
                correct: 1
            },
            {
                topic: "Lucuma Juice",
                emoji: "🥤🇵🇪",
                question: "Is lucuma from Peru?",
                options: [
                    "Mexico",
                    "False",
                    "True"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Choron Sauce",
                emoji: "🍅🥚",
                question: "Is Choron béarnaise with tomato?",
                options: [
                    "False",
                    "Hollandaise",
                    "No tomato",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pi Lo Chun Tea",
                emoji: "🍵🐚",
                question: "Is Pi Lo Chun green tea?",
                options: [
                    "Oolong",
                    "False",
                    "White",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Battuto",
                emoji: "🧅🥕",
                question: "Is battuto raw Italian soffritto?",
                options: [
                    "False",
                    "Spanish",
                    "True",
                    "Cooked"
                ],
                correct: 0
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
                    "Fall",
                    "False",
                    "True",
                    "Winter"
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
                    "Whole",
                    "False",
                    "Sliced"
                ],
                correct: 0
            },
            {
                topic: "Grand Marnier",
                emoji: "🥃🍊",
                question: "Is Grand Marnier cognac-based?",
                options: [
                    "Rum",
                    "Vodka",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Duxbury Style",
                emoji: "🦞🧈",
                question: "Does Duxbury involve lobster?",
                options: [
                    "Beef",
                    "False",
                    "Chicken",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Pouchong Tea",
                emoji: "🍵🌸",
                question: "Is Pouchong lightly oxidized oolong?",
                options: [
                    "False",
                    "Not oolong",
                    "True",
                    "Fully oxidized"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Venezuelan Cuisine",
                emoji: "🇻🇪🥘",
                question: "Name three Venezuelan dishes?",
                options: [
                    "Hallacas",
                    "Pabellón criollo",
                    "Arepas",
                    "Cachapas"
                ],
                correct: 2
            },
            {
                topic: "Meal Replacement Drinks",
                emoji: "🥤🍽️",
                question: "Name three meal replacement options?",
                options: [
                    "Smoothie",
                    "Meal shake",
                    "Soylent",
                    "Protein shake"
                ],
                correct: 3
            },
            {
                topic: "Bulb Vegetables",
                emoji: "🧅🧄",
                question: "Name three bulb vegetables?",
                options: [
                    "Onion",
                    "Shallot",
                    "Fennel",
                    "Garlic"
                ],
                correct: 0
            },
            {
                topic: "Vitamin Drinks",
                emoji: "💊🥤",
                question: "Name three vitamin-rich beverages?",
                options: [
                    "Fortified milk",
                    "Orange juice",
                    "Vitamin water",
                    "Smoothie"
                ],
                correct: 1
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
                    "Turkey Red",
                    "Marquis",
                    "Sonora",
                    "Red Fife wheat"
                ],
                correct: 3
            },
            {
                topic: "Belgian Food",
                emoji: "🇧🇪🍟",
                question: "Name three Belgian dishes?",
                options: [
                    "Waffles",
                    "Moules-frites",
                    "Carbonnade",
                    "Frites"
                ],
                correct: 3
            },
            {
                topic: "Tree Fruits",
                emoji: "🍎🌳",
                question: "Name three fruits that grow on trees?",
                options: [
                    "Peach",
                    "Cherry",
                    "Apple",
                    "Orange"
                ],
                correct: 2
            },
            {
                topic: "Reduction Sauces",
                emoji: "🍷🔥",
                question: "Name three reduction-based sauces?",
                options: [
                    "Beurre blanc",
                    "Demi-glace",
                    "Red wine reduction",
                    "Balsamic reduction"
                ],
                correct: 1
            },
            {
                topic: "Movie Theater Foods",
                emoji: "🎬🍿",
                question: "Name three movie snack items?",
                options: [
                    "Popcorn",
                    "Hot dog",
                    "Candy",
                    "Nachos"
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Alkaline Water",
                emoji: "💧⚗️",
                question: "Is alkaline water higher pH?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "Thai"
                ],
                correct: 1
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
                    "True",
                    "Low antioxidants"
                ],
                correct: 0
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
                    "True",
                    "Longer"
                ],
                correct: 0
            },
            {
                topic: "Injera",
                emoji: "🫓🇪🇹",
                question: "Is injera spongy flatbread?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Sunflower Milk",
                emoji: "🥛🌻",
                question: "Is sunflower milk from sunflower seeds?",
                options: [
                    "True",
                    "From nuts"
                ],
                correct: 0
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
                    "True",
                    "No benefits"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Samgyetang",
                emoji: "🍲🇰🇷",
                question: "Is samgyetang ginseng chicken soup?",
                options: [
                    "Beef soup",
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Café Zorro",
                emoji: "☕💧",
                question: "Is café zorro double espresso with water?",
                options: [
                    "True",
                    "Single shot",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tsoureki",
                emoji: "🍞🇬🇷",
                question: "Is tsoureki Greek Easter bread?",
                options: [
                    "Italian",
                    "False",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Aronia Juice",
                emoji: "🥤🫐",
                question: "Is aronia also called chokeberry?",
                options: [
                    "True",
                    "False",
                    "Blueberry"
                ],
                correct: 2
            },
            {
                topic: "Pelmeni",
                emoji: "🥟🇷🇺",
                question: "Is pelmeni Russian dumpling?",
                options: [
                    "True",
                    "Chinese",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Café Bombón",
                emoji: "☕🍯",
                question: "Is café bombón layered coffee?",
                options: [
                    "False",
                    "Mixed",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Pan de Muerto",
                emoji: "🍞💀",
                question: "Is pan de muerto Day of the Dead bread?",
                options: [
                    "False",
                    "Christmas",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Schisandra Juice",
                emoji: "🥤🔴",
                question: "Does schisandra have five flavors?",
                options: [
                    "True",
                    "One flavor",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Sacher Torte",
                emoji: "🍰🇦🇹",
                question: "Is Sacher torte Austrian chocolate cake?",
                options: [
                    "German",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Karkadé",
                emoji: "🥤🌺",
                question: "Is karkadé hibiscus tea drink?",
                options: [
                    "True",
                    "Rose tea",
                    "False"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Foyot Sauce",
                emoji: "🥩🥚",
                question: "Is Foyot béarnaise with meat glaze?",
                options: [
                    "True",
                    "Hollandaise",
                    "False",
                    "No glaze"
                ],
                correct: 0
            },
            {
                topic: "Mao Jian Tea",
                emoji: "🍵💚",
                question: "Is Mao Jian a green tea?",
                options: [
                    "True",
                    "False",
                    "Black",
                    "Oolong"
                ],
                correct: 0
            },
            {
                topic: "Refogado",
                emoji: "🧅🍅",
                question: "Is refogado Portuguese sofrito?",
                options: [
                    "Spanish",
                    "Italian",
                    "False",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Campari",
                emoji: "🥃🔴",
                question: "Is Campari bitter Italian aperitif?",
                options: [
                    "False",
                    "True",
                    "Sweet",
                    "Mild"
                ],
                correct: 0
            },
            {
                topic: "Brunoise Cut",
                emoji: "🔪🥕",
                question: "Is brunoise cut related to food and drinks?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
                {
                topic: "Bancha Tea",
                emoji: "🍵🍂",
                question: "Is bancha everyday Japanese tea?",
                options: [
                    "False",
                    "Premium",
                    "True",
                    "Ceremonial"
                ],
                correct: 2
            },
            {
                topic: "Jardinière Cut",
                emoji: "🥕🔪",
                question: "Is jardinière bâtonnet-sized vegetables?",
                options: [
                    "Dice",
                    "True",
                    "False",
                    "Strips"
                ],
                correct: 2
            },
            {
                topic: "Aperol",
                emoji: "🥃🍊",
                question: "Is Aperol orange Italian aperitif?",
                options: [
                    "False",
                    "Yellow",
                    "Red",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "À la King",
                emoji: "🐔🥛",
                question: "Is à la king in cream sauce?",
                options: [
                    "True",
                    "False",
                    "No sauce",
                    "Tomato"
                ],
                correct: 0
            },
            {
                topic: "Hojicha Tea",
                emoji: "🍵🔥",
                question: "Is hojicha roasted tea?",
                options: [
                    "Fresh",
                    "True",
                    "False",
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
                    "Milanesa",
                    "Empanadas",
                    "Asado",
                    "Chivito"
                ],
                correct: 2
            },
            {
                topic: "Cleanse Drinks",
                emoji: "🥤🌿",
                question: "Name three cleansing beverages?",
                options: [
                    "Celery juice",
                    "Detox tea",
                    "Lemon water",
                    "Green juice"
                ],
                correct: 3
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
                    "False",
                    "True"
                ],
                correct: 1
            },
                {
                topic: "Candied Foods",
                emoji: "🍬✨",
                question: "Name three candied items?",
                options: [
                    "Candied ginger",
                    "Candied peel",
                    "Candied fruit",
                    "Candied nuts"
                ],
                correct: 2
            },
            {
                topic: "Sprouted Grains",
                emoji: "🌾🌱",
                question: "Name three sprouted grain products?",
                options: [
                    "Sprouted wheat",
                    "Sprouted rice",
                    "Sprouted quinoa",
                    "Ezekiel bread"
                ],
                correct: 3
            },
            {
                topic: "Norwegian Food",
                emoji: "🇳🇴🐟",
                question: "Name three Norwegian dishes?",
                options: [
                    "Gravlax",
                    "Fårikål",
                    "Rakfisk",
                    "Lutefisk"
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
                    "Mounting with butter",
                    "Cream finish",
                    "Deglazing",
                    "Reduction"
                ],
                correct: 2
            },
            {
                topic: "Airport Foods",
                emoji: "✈️🍔",
                question: "Name three airport food items?",
                options: [
                    "Pizza",
                    "Sandwiches",
                    "Fast food",
                    "Coffee"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Tropical Smoothie",
                emoji: "🥤🌴",
                question: "Does tropical smoothie have tropical fruits?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Barramundi",
                emoji: "🐟🇦🇺",
                question: "Is barramundi Australian fish?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "True",
                    "Shorter"
                ],
                correct: 1
            },
            {
                topic: "Focaccia",
                emoji: "🍞🫒",
                question: "Is focaccia topped with olive oil?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "Not citrus"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Haleem",
                emoji: "🍲🇵🇰",
                question: "Is haleem Pakistani meat stew?",
                options: [
                    "False",
                    "Indian",
                    "True"
                ],
                correct: 2
            },
            {
                topic: "Café con Leche",
                emoji: "☕🥛",
                question: "Is café con leche equal coffee and milk?",
                options: [
                    "True",
                    "More coffee",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pandesal",
                emoji: "🍞🇵🇭",
                question: "Is pandesal Filipino bread roll?",
                options: [
                    "Mexican",
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Birch Juice",
                emoji: "🥤🌳",
                question: "Is birch water tapped from trees?",
                options: [
                    "Fruit juice",
                    "True",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Manti",
                emoji: "🥟🇹🇷",
                question: "Is manti Turkish dumpling?",
                options: [
                    "False",
                    "True",
                    "Chinese"
                ],
                correct: 1
            },
            {
                topic: "Café Cubano",
                emoji: "☕🇨🇺",
                question: "Is café cubano sweet espresso?",
                options: [
                    "False",
                    "True",
                    "Bitter"
                ],
                correct: 2
            },
            {
                topic: "Kolache",
                emoji: "🥐🇨🇿",
                question: "Is kolache Czech pastry?",
                options: [
                    "True",
                    "Polish",
                    "False"
                ],
                correct: 2
            },
            {
                topic: "Pine Needle Tea",
                emoji: "🍵🌲",
                question: "Is pine needle tea from pine trees?",
                options: [
                    "Oak trees",
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Baumkuchen",
                emoji: "🍰🇩🇪",
                question: "Is baumkuchen tree cake?",
                options: [
                    "False",
                    "True",
                    "Flat cake"
                ],
                correct: 0
            },
            {
                topic: "Noni Juice",
                emoji: "🥤🍈",
                question: "Is noni juice medicinal?",
                options: [
                    "False",
                    "True",
                    "No benefits"
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
                    "No herbs",
                    "False",
                    "Basil"
                ],
                correct: 0
            },
            {
                topic: "Kabusecha Tea",
                emoji: "🍵☂️",
                question: "Is kabusecha partially shaded?",
                options: [
                    "True",
                    "False",
                    "Full sun",
                    "Fully shaded"
                ],
                correct: 0
            },
            {
                topic: "Trinity",
                emoji: "🧅🫑",
                question: "Is trinity Cajun aromatic base?",
                options: [
                    "French",
                    "Italian",
                    "False",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Chambord",
                emoji: "🥃🫐",
                question: "Is Chambord French raspberry liqueur?",
                options: [
                    "False",
                    "Spanish",
                    "True",
                    "Italian"
                ],
                correct: 0
            },
            {
                topic: "Paysanne Cut",
                emoji: "🔪🥕",
                question: "Is paysanne thin flat shapes?",
                options: [
                    "Strips",
                    "False",
                    "Thick cubes",
                    "True"
                ],
                correct: 3
            },
            {
                topic: "Pu-erh Tea",
                emoji: "🍵🇨🇳",
                question: "Is pu-erh fermented tea?",
                options: [
                    "Fresh only",
                    "False",
                    "True",
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
                    "Whole",
                    "Large chunks"
                ],
                correct: 0
            },
            {
                topic: "Drambuie",
                emoji: "🥃🍯",
                question: "Is Drambuie Scotch-based liqueur?",
                options: [
                    "False",
                    "True",
                    "Vodka",
                    "Bourbon"
                ],
                correct: 0
            },
            {
                topic: "Nicoise Style",
                emoji: "🥗🫒",
                question: "Does Nicoise include tomatoes and olives?",
                options: [
                    "True",
                    "No olives",
                    "False",
                    "No tomatoes"
                ],
                correct: 0
            },
            {
                topic: "Silver Needle Tea",
                emoji: "🍵⚪",
                question: "Is Silver Needle premium white tea?",
                options: [
                    "Green",
                    "Black",
                    "False",
                    "True"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Ecuadorian Cuisine",
                emoji: "🇪🇨🍤",
                question: "Name three Ecuadorian dishes?",
                options: [
                    "Ceviche",
                    "Llapingachos",
                    "Hornado",
                    "Encebollado"
                ],
                correct: 0
            },
            {
                topic: "Hangover Drinks",
                emoji: "🥤😵",
                question: "Name three hangover remedy beverages?",
                options: [
                    "Ginger tea",
                    "Tomato juice",
                    "Coconut water",
                    "Sports drink"
                ],
                correct: 2
            },
            {
                topic: "Flower Vegetables",
                emoji: "🥦🌸",
                question: "Name three flower vegetables?",
                options: [
                    "Artichoke",
                    "Broccoli",
                    "Cauliflower",
                    "Broccoli rabe"
                ],
                correct: 1
            },
            {
                topic: "Adaptogen Drinks",
                emoji: "🥤🌿",
                question: "Name three adaptogenic beverages?",
                options: [
                    "Ashwagandha tea",
                    "Ginseng tea",
                    "Maca smoothie",
                    "Reishi tea"
                ],
                correct: 0
            },
            {
                topic: "Caramelized Foods",
                emoji: "🔥🍯",
                question: "Name three caramelized items?",
                options: [
                    "Caramel sauce",
                    "Crème brûlée",
                    "Caramelized onions",
                    "Caramelized bananas"
                ],
                correct: 2
            },
            {
                topic: "Fermented Grains",
                emoji: "🌾🫧",
                question: "Name three fermented grain products?",
                options: [
                    "Sake",
                    "Beer",
                    "Miso",
                    "Sourdough"
                ],
                correct: 1
            },
            {
                topic: "Portuguese Food",
                emoji: "🇵🇹🐟",
                question: "Name three Portuguese dishes?",
                options: [
                    "Pastéis de nata",
                    "Bacalhau",
                    "Francesinha",
                    "Caldo verde"
                ],
                correct: 1
            },
            {
                topic: "Seed Vegetables",
                emoji: "🌽🫘",
                question: "Name three seed vegetables?",
                options: [
                    "Beans",
                    "Okra",
                    "Peas",
                    "Corn"
                ],
                correct: 3
            },
            {
                topic: "Compound Butter",
                emoji: "🧈🌿",
                question: "Name three compound butter types?",
                options: [
                    "Herb butter",
                    "Lemon butter",
                    "Truffle butter",
                    "Garlic butter"
                ],
                correct: 3
            },
            {
                topic: "Stadium Foods",
                emoji: "🏟️🌭",
                question: "Name three stadium food items?",
                options: [
                    "Nachos",
                    "Pretzels",
                    "Popcorn",
                    "Hot dogs"
                ],
                correct: 3
            }
        ]
    }
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['food-drinks'] = foodDrinksQuestions;
}
