/**
 * WPCode Snippet #18: Riddles Chapter 18 - Animal Riddles
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 10
 * 
 * 100 Questions Organized by Difficulty Level
 * Easy (10) → Medium (25) → Hard (25) → Expert (25) → Extreme (15)
 *
 * COPY ALL CODE BELOW
 */

const riddlesQuestions = {
    18: {
        easy: [
            {
                topic: "Animal Riddles - Easy",
                emoji: "🐕🌟",
                question: "What has four legs, a tail, and barks?",
                options: [
                    "A dog",
                    "A wolf"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Easy",
                emoji: "🐱💡",
                question: "What animal says 'meow' and likes to chase mice?",
                options: [
                    "A cat",
                    "A lion"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Easy",
                emoji: "🐘✨",
                question: "What is the largest land animal with a trunk?",
                options: [
                    "An elephant",
                    "A rhino"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Easy",
                emoji: "🦁🔮",
                question: "What animal is called the 'King of the Jungle'?",
                options: [
                    "A lion",
                    "A tiger"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Easy",
                emoji: "🐸🌈",
                question: "What green animal hops and says 'ribbit'?",
                options: [
                    "A frog",
                    "A lizard"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Easy",
                emoji: "🐟💭",
                question: "What animal lives in water and has fins and gills?",
                options: [
                    "A fish",
                    "A dolphin"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Easy",
                emoji: "🐦🎯",
                question: "What animal has feathers, wings, and can fly?",
                options: [
                    "A bird",
                    "A bat"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Easy",
                emoji: "🐰🧩",
                question: "What fluffy animal has long ears and hops?",
                options: [
                    "A rabbit",
                    "A kangaroo"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Easy",
                emoji: "🐴🌟",
                question: "What animal do people ride that says 'neigh'?",
                options: [
                    "A horse",
                    "A donkey"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Easy",
                emoji: "🐝💡",
                question: "What insect makes honey and can sting?",
                options: [
                    "A bee",
                    "A wasp"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦒🧠",
                question: "What animal has the longest neck?",
                options: [
                    "A giraffe",
                    "An ostrich",
                    "A camel"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐧✨",
                question: "What black and white bird can't fly but swims well?",
                options: [
                    "A penguin",
                    "An ostrich",
                    "A puffin"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦘🔮",
                question: "What animal carries its baby in a pouch?",
                options: [
                    "A kangaroo",
                    "A koala",
                    "An opossum"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐊💭",
                question: "What reptile has a long snout and lives in swamps?",
                options: [
                    "A crocodile",
                    "A lizard",
                    "A snake"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦅🎯",
                question: "What bird of prey has excellent eyesight?",
                options: [
                    "An eagle",
                    "A hawk",
                    "An owl"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐻🌈",
                question: "What large animal hibernates in winter?",
                options: [
                    "A bear",
                    "A wolf",
                    "A deer"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦎💡",
                question: "What reptile can change its color to blend in?",
                options: [
                    "A chameleon",
                    "A lizard",
                    "A gecko"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐪🧩",
                question: "What animal can go days without water and has humps?",
                options: [
                    "A camel",
                    "A llama",
                    "A buffalo"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦉🌟",
                question: "What bird is known for being wise and hunts at night?",
                options: [
                    "An owl",
                    "A crow",
                    "A raven"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐙🔍",
                question: "What sea creature has eight arms?",
                options: [
                    "An octopus",
                    "A squid",
                    "A jellyfish"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦇💫",
                question: "What flying mammal is active at night?",
                options: [
                    "A bat",
                    "A bird",
                    "A flying squirrel"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐺🎨",
                question: "What wild dog lives in packs and howls?",
                options: [
                    "A wolf",
                    "A coyote",
                    "A fox"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦈✨",
                question: "What ocean predator has rows of sharp teeth?",
                options: [
                    "A shark",
                    "A whale",
                    "A barracuda"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐢🧠",
                question: "What slow-moving reptile carries its house on its back?",
                options: [
                    "A turtle",
                    "A snail",
                    "A hermit crab"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦜🌈",
                question: "What colorful bird can mimic human speech?",
                options: [
                    "A parrot",
                    "A peacock",
                    "A toucan"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦏💭",
                question: "What large animal has a horn on its nose?",
                options: [
                    "A rhinoceros",
                    "A buffalo",
                    "An elephant"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐆🔮",
                question: "What spotted big cat is the fastest land animal?",
                options: [
                    "A cheetah",
                    "A leopard",
                    "A jaguar"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦛🎯",
                question: "What large animal spends most of its time in water?",
                options: [
                    "A hippopotamus",
                    "A crocodile",
                    "A manatee"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐍💡",
                question: "What legless reptile slithers and some are venomous?",
                options: [
                    "A snake",
                    "A worm",
                    "An eel"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦋🌟",
                question: "What insect starts as a caterpillar and transforms?",
                options: [
                    "A butterfly",
                    "A moth",
                    "A dragonfly"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐿️🧩",
                question: "What bushy-tailed animal collects and stores nuts?",
                options: [
                    "A squirrel",
                    "A chipmunk",
                    "A mouse"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦚✨",
                question: "What bird displays beautiful colorful tail feathers?",
                options: [
                    "A peacock",
                    "A parrot",
                    "A flamingo"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐬🔍",
                question: "What intelligent marine mammal performs tricks?",
                options: [
                    "A dolphin",
                    "A seal",
                    "A whale"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🦊🌈",
                question: "What cunning animal has a bushy tail and is red?",
                options: [
                    "A fox",
                    "A wolf",
                    "A coyote"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Medium",
                emoji: "🐨💭",
                question: "What Australian animal eats eucalyptus leaves?",
                options: [
                    "A koala",
                    "A kangaroo",
                    "A wombat"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦎🧠",
                question: "I have a long tongue twice my body length, eyes that move independently, and I can change colors. What am I?",
                options: [
                    "A chameleon",
                    "A lizard",
                    "An iguana",
                    "A gecko"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐙💫",
                question: "I have three hearts, blue blood, and can squeeze through tiny spaces. What am I?",
                options: [
                    "An octopus",
                    "A squid",
                    "A jellyfish",
                    "A cuttlefish"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦘🔮",
                question: "I can't walk backwards, I carry my baby in a pouch, and I'm a symbol of Australia. What am I?",
                options: [
                    "A kangaroo",
                    "A wallaby",
                    "A koala",
                    "An opossum"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦇✨",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐋🌟",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦎🎯",
                question: "I can regrow my tail if I lose it, I have no eyelids, and I'm cold-blooded. What am I?",
                options: [
                    "A lizard",
                    "A snake",
                    "A salamander",
                    "A newt"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐧💡",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦒🧩",
                question: "I have the same number of neck bones as humans but mine is much longer. I'm the tallest land animal. What am I?",
                options: [
                    "A giraffe",
                    "An elephant",
                    "A camel",
                    "An ostrich"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐊🔍",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦅💭",
                question: "I can see eight times better than humans, I'm a national symbol, and I can dive at 100 mph. What am I?",
                options: [
                    "An eagle",
                    "A hawk",
                    "A falcon",
                    "An owl"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐢🌈",
                question: "I can live over 100 years, I carry my home, and I move slowly on land but swim gracefully. What am I?",
                options: [
                    "A sea turtle",
                    "A tortoise",
                    "A snail",
                    "A hermit crab"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦎✨",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦈🧠",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐆💫",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦜🔮",
                question: "I can live over 80 years, I can mimic sounds perfectly, and I mate for life. What am I?",
                options: [
                    "A parrot",
                    "A crow",
                    "A peacock",
                    "A toucan"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐻🎯",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦏💡",
                question: "I have thick skin like armor, I'm nearly blind, but my hearing is excellent. I have one or two horns. What am I?",
                options: [
                    "A rhinoceros",
                    "An elephant",
                    "A buffalo",
                    "A hippo"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐍🌟",
                question: "I can unhinge my jaw to swallow prey whole, I have no eyelids, and I smell with my tongue. What am I?",
                options: [
                    "A snake",
                    "A lizard",
                    "An eel",
                    "A crocodile"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦛🧩",
                question: "Despite my size, I can run 30 mph on land. I'm one of Africa's most dangerous animals. What am I?",
                options: [
                    "A hippopotamus",
                    "An elephant",
                    "A rhino",
                    "A buffalo"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐺🔍",
                question: "I live in packs with complex social structures, I howl to communicate, and I'm an apex predator. What am I?",
                options: [
                    "A wolf",
                    "A coyote",
                    "A dog",
                    "A hyena"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦋💭",
                question: "I undergo complete metamorphosis, I migrate thousands of miles, and I taste with my feet. What am I?",
                options: [
                    "A butterfly",
                    "A moth",
                    "A bee",
                    "A dragonfly"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐘🌈",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦉✨",
                question: "I can rotate my head 270 degrees, I fly silently, and I hunt at night using asymmetrical ears. What am I?",
                options: [
                    "An owl",
                    "A hawk",
                    "An eagle",
                    "A bat"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🐬🧠",
                correct: 0
            },
            {
                topic: "Animal Riddles - Hard",
                emoji: "🦎💫",
                question: "I can walk on water due to surface tension, I have sticky toe pads, and I can detach my tail. What am I?",
                options: [
                    "A gecko",
                    "A lizard",
                    "A salamander",
                    "A frog"
                ],
                correct: 0
            }
        ],
        expert: [
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦑🧠",
                question: "I have the largest brain-to-body ratio of all invertebrates, I can use tools, and I have chromatophores for instant color change. What am I?",
                options: [
                    "An octopus",
                    "A squid",
                    "A cuttlefish",
                    "A nautilus"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦎🔮",
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐝💫",
                question: "I communicate through dance, I have five eyes, and I can recognize human faces. What am I?",
                options: [
                    "A honeybee",
                    "A wasp",
                    "A bumblebee",
                    "A hornet"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦘✨",
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐋🌟",
                question: "I can hold my breath for over 2 hours, I have the largest brain of any animal, and I sleep vertically. What am I?",
                options: [
                    "A sperm whale",
                    "A blue whale",
                    "An orca",
                    "A dolphin"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦅💡",
                question: "I can spot a rabbit from 2 miles away, I build the largest tree nests, and I mate for life. What am I?",
                options: [
                    "A bald eagle",
                    "A golden eagle",
                    "A hawk",
                    "An osprey"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐊🧩",
                question: "I have the strongest bite force ever measured, I can live up to 100 years, and my gender is determined by temperature. What am I?",
                options: [
                    "A saltwater crocodile",
                    "An alligator",
                    "A Nile crocodile",
                    "A caiman"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦇🔍",
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦋🌈",
                question: "I migrate up to 3,000 miles, I use magnetic fields to navigate, and my migration spans multiple generations. What am I?",
                options: [
                    "A monarch butterfly",
                    "A painted lady",
                    "A swallowtail",
                    "A morpho butterfly"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦈💭",
                question: "I never sleep, I must keep swimming to breathe, and I can sense a drop of blood in 100 liters of water. What am I?",
                options: [
                    "A great white shark",
                    "A hammerhead",
                    "A tiger shark",
                    "A whale shark"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐙🎯",
                question: "I have rectangular pupils, I can taste with my suckers, and I'm a master of disguise with intelligent problem-solving. What am I?",
                options: [
                    "An octopus",
                    "A squid",
                    "A cuttlefish",
                    "A nautilus"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦎✨",
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐆🧠",
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦜💫",
                question: "I have the intelligence of a 5-year-old human, I can live 80+ years, and I form monogamous pair bonds. What am I?",
                options: [
                    "An African grey parrot",
                    "A macaw",
                    "A cockatoo",
                    "An Amazon parrot"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐘🔮",
                question: "I can recognize myself in a mirror, I mourn my dead, and I communicate through infrasound over miles. What am I?",
                options: [
                    "An elephant",
                    "A whale",
                    "A dolphin",
                    "A gorilla"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦉🌟",
                question: "I have asymmetrical ear placement for precise sound location, I can hunt in complete darkness, and my flight is silent. What am I?",
                options: [
                    "An owl",
                    "A bat",
                    "A nightjar",
                    "A hawk"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦛💡",
                question: "I secrete a red, oily substance nicknamed 'blood sweat,' I can hold my breath for 5 minutes, and I'm highly territorial. What am I?",
                options: [
                    "A hippopotamus",
                    "A walrus",
                    "A seal",
                    "A manatee"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐍🧩",
                question: "I can sense infrared heat with special organs, I have the longest fangs of any venomous snake, and I'm a pit viper. What am I?",
                options: [
                    "A Gaboon viper",
                    "A rattlesnake",
                    "A python",
                    "A cobra"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐬🔍",
                question: "I sleep with one eye open, I have signature whistles for individual names, and I've been observed using sponges as tools. What am I?",
                options: [
                    "A bottlenose dolphin",
                    "An orca",
                    "A porpoise",
                    "A pilot whale"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦋💭",
                question: "I can see ultraviolet light, I smell with my antennae, and I begin life as an egg smaller than a pinhead. What am I?",
                options: [
                    "A butterfly",
                    "A moth",
                    "A bee",
                    "A beetle"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦎🌈",
                question: "I can run on water, I store fat in my tail, and I can vocalize using complex chirping sounds. What am I?",
                options: [
                    "A basilisk lizard",
                    "A gecko",
                    "An iguana",
                    "A monitor"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐻✨",
                question: "I have water-repellent fur that appears white but is actually transparent, I can swim 6 mph, and my skin is black. What am I?",
                options: [
                    "A polar bear",
                    "A grizzly bear",
                    "An arctic fox",
                    "A seal"
                ],
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦏🧠",
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🐢💫",
                correct: 0
            },
            {
                topic: "Animal Riddles - Expert",
                emoji: "🦅🔮",
                correct: 0
            }
        ],
        extreme: [
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🦑💫",
                difficulty: "extreme",
                question: "I have the largest eyes in the animal kingdom, I can change color instantly, and I have a beak like a parrot. What am I?",
                answer: "A colossal squid or Giant squid"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🐸🧠",
                difficulty: "extreme",
                question: "I can survive being frozen solid, I breathe through my skin, and I can regrow lost limbs. What am I?",
                answer: "A wood frog or Salamander"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🦎✨",
                difficulty: "extreme",
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🐙🔮",
                difficulty: "extreme",
                question: "I can edit my own RNA, I have blue copper-based blood, and I'm considered the most intelligent invertebrate. What am I?",
                answer: "An octopus or Cephalopod"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🦈🌟",
                difficulty: "extreme",
                question: "I can live over 400 years, I don't reach maturity until 150, and I live in the Arctic. What am I?",
                answer: "A Greenland shark"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🐝💡",
                difficulty: "extreme",
                question: "I can count to four, understand zero as a concept, and perform complex calculations through waggle dances. What am I?",
                answer: "A honeybee"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🦜🧩",
                difficulty: "extreme",
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🐻💭",
                difficulty: "extreme",
                question: "I can survive almost any extreme condition, I can live in space, and I'm microscopic. What am I?",
                answer: "A tardigrade or Water bear"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🦎🌈",
                difficulty: "extreme",
                question: "I have a third eye on top of my head called a parietal eye, I'm a living fossil, and I only exist in New Zealand. What am I?",
                answer: "A tuatara"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🐋✨",
                difficulty: "extreme",
                question: "I have the deepest voice in the animal kingdom at 52 Hz, I'm the loneliest whale, and scientists don't know my species. What am I?",
                answer: "The 52-hertz whale or The loneliest whale"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🦇🔮",
                difficulty: "extreme",
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🐍💫",
                difficulty: "extreme",
                question: "I have heat-sensing pits, I give live birth, and I'm the heaviest venomous snake in the Americas. What am I?",
                answer: "An Eastern diamondback rattlesnake or Bushmaster"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🦅🧠",
                difficulty: "extreme",
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🐢🌟",
                difficulty: "extreme",
                question: "I navigate using Earth's magnetic field, I return to the same beach where I was born to lay eggs, and I can live over 100 years. What am I?",
                answer: "A sea turtle or Loggerhead turtle"
            },
            {
                topic: "Animal Riddles - Extreme",
                emoji: "🦋💡",
                difficulty: "extreme",
                question: "I have four wings but they're coupled together to function as two, I have compound eyes with thousands of lenses, and my larvae are aquatic predators. What am I?",
                answer: "A dragonfly"
            }
        ]
    }
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    if (!subjectQuestionBank['riddles']) {
        subjectQuestionBank['riddles'] = {};
    }
    subjectQuestionBank['riddles'][18] = riddlesQuestions[18];
}
