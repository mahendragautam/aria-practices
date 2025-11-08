/**
 * WPCode Snippet #5: English Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer  
 * Priority: 14
 *
 * COPY ALL CODE BELOW
 */

const englishQuestions = {
    1: { // Chapter 1: Grammar Basics
        easy: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'A noun is a person, place, or thing.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '📖📚', question: 'A verb is an action word.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '📝🔤', question: 'Synonym means opposite meaning.', options: ['True', 'False'], correct: 1},
            {topic: 'Grammar', emoji: '✍️📄', question: 'An adjective describes a noun.', options: ['True', 'False'], correct: 0},
            {topic: 'Literature', emoji: '📚📖', question: 'Shakespeare wrote plays.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '📝✏️', question: 'A sentence must have a subject and verb.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📖', question: 'Antonym means similar meaning.', options: ['True', 'False'], correct: 1},
            {topic: 'Composition', emoji: '✍️📄', question: 'A paragraph should have a topic sentence.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '📚✍️', question: 'An adverb modifies a verb.', options: ['True', 'False'], correct: 0},
            {topic: 'Literature', emoji: '📖🎭', question: 'A novel is a long fictional story.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'What is a pronoun?', options: ['Replaces a noun', 'Action word'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📖', question: 'What is a synonym for "happy"?', options: ['Joyful', 'Sad'], correct: 0},
            {topic: 'Grammar', emoji: '✍️📄', question: 'What punctuation ends a question?', options: ['Question mark', 'Period'], correct: 0},
            {topic: 'Literature', emoji: '📚📖', question: 'Who wrote Romeo and Juliet?', options: ['Shakespeare', 'Dickens'], correct: 0},
            {topic: 'Composition', emoji: '📝✏️', question: 'What is the main idea called?', options: ['Thesis', 'Conclusion'], correct: 0},
            {topic: 'Grammar', emoji: '📖✍️', question: 'What is the past tense of "run"?', options: ['Ran', 'Runned'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'What is an antonym for "hot"?', options: ['Cold', 'Warm'], correct: 0},
            {topic: 'Literature', emoji: '📖🎭', question: 'What is a haiku?', options: ['Japanese poem', 'Long story'], correct: 0},
            {topic: 'Grammar', emoji: '✍️📝', question: 'What connects two sentences?', options: ['Conjunction', 'Adjective'], correct: 0},
            {topic: 'Composition', emoji: '📄✏️', question: 'What introduces an essay?', options: ['Introduction', 'Body'], correct: 0}
        ],
        hard: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'What is a gerund?', options: ['Verb ending in -ing', 'Plural noun', 'Adjective'], correct: 0},
            {topic: 'Literature', emoji: '📚📖', question: 'Who wrote "Pride and Prejudice"?', options: ['Jane Austen', 'Emily Bronte', 'Virginia Woolf'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📖', question: 'What does "ubiquitous" mean?', options: ['Everywhere', 'Rare', 'Hidden'], correct: 0},
            {topic: 'Grammar', emoji: '✍️📄', question: 'What is the subjunctive mood?', options: ['Hypothetical situations', 'Past tense', 'Questions'], correct: 0},
            {topic: 'Composition', emoji: '📝✏️', question: 'What is a thesis statement?', options: ['Main argument', 'Conclusion', 'Example'], correct: 0},
            {topic: 'Literature', emoji: '📖🎭', question: 'What is an allegory?', options: ['Symbolic story', 'Short poem', 'Biography'], correct: 0},
            {topic: 'Grammar', emoji: '📚✍️', question: 'What is a participle?', options: ['Verb as adjective', 'Noun phrase', 'Adverb'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📝', question: 'What is onomatopoeia?', options: ['Sound words', 'Metaphor', 'Rhyme'], correct: 0},
            {topic: 'Composition', emoji: '✍️📄', question: 'What is a counterargument?', options: ['Opposing view', 'Evidence', 'Conclusion'], correct: 0},
            {topic: 'Literature', emoji: '📖📚', question: 'Who wrote "1984"?', options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury'], correct: 0}
        ],
        expert: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'What is the difference between "affect" and "effect"?', options: ['Affect=verb, Effect=noun', 'Both are verbs', 'Both are nouns', 'Affect=noun, Effect=verb'], correct: 0},
            {topic: 'Literature', emoji: '📚📖', question: 'In which century did Shakespeare live?', options: ['16th-17th', '14th-15th', '18th-19th', '12th-13th'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📖', question: 'What is the root meaning of "bibliography"?', options: ['Book writing', 'Life story', 'Study of', 'Science of'], correct: 0},
            {topic: 'Grammar', emoji: '✍️📄', question: 'What is an appositive?', options: ['Noun explaining noun', 'Verb phrase', 'Adjective clause', 'Adverb'], correct: 0},
            {topic: 'Composition', emoji: '📝✏️', question: 'What is ethos in rhetoric?', options: ['Credibility', 'Emotion', 'Logic', 'Timing'], correct: 0},
            {topic: 'Literature', emoji: '📖🎭', question: 'What is iambic pentameter?', options: ['10 syllables per line', '5 syllables per line', '8 syllables per line', '12 syllables per line'], correct: 0},
            {topic: 'Grammar', emoji: '📚✍️', question: 'What is a dangling modifier?', options: ['Misplaced description', 'Run-on sentence', 'Fragment', 'Comma splice'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📝', question: 'What does "verisimilitude" mean?', options: ['Appearance of truth', 'Complete lie', 'Exaggeration', 'Understatement'], correct: 0},
            {topic: 'Composition', emoji: '✍️📄', question: 'What is the Oxford comma?', options: ['Comma before "and" in list', 'Comma after intro', 'Comma in compound', 'Comma with name'], correct: 0},
            {topic: 'Literature', emoji: '📖📚', question: 'What is magical realism?', options: ['Fantasy in realistic setting', 'Pure fantasy', 'Science fiction', 'Historical fiction'], correct: 0}
        ],
        extreme: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'Name three types of dependent clauses', answer: 'Noun clause, Adjective clause, Adverb clause'},
            {topic: 'Literature', emoji: '📚📖', question: 'Name three Shakespearean tragedies', answer: 'Hamlet, Macbeth, Othello, King Lear (any 3)'},
            {topic: 'Vocabulary', emoji: '🔤📖', question: 'Define "antidisestablishmentarianism"', answer: 'Opposition to withdrawal of state support from church'},
            {topic: 'Grammar', emoji: '✍️📄', question: 'What are the eight parts of speech?', answer: 'Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection'},
            {topic: 'Composition', emoji: '📝✏️', question: 'Name the three appeals in rhetoric', answer: 'Ethos, Pathos, Logos'},
            {topic: 'Literature', emoji: '📖🎭', question: 'Name three literary devices', answer: 'Metaphor, Simile, Personification, Alliteration, etc (any 3)'},
            {topic: 'Grammar', emoji: '📚✍️', question: 'What is the difference between "who" and "whom"?', answer: 'Who=subject, Whom=object'},
            {topic: 'Vocabulary', emoji: '🔤📝', question: 'Name three Latin roots and their meanings', answer: 'Examples: aqua=water, bene=good, dict=speak (any 3)'},
            {topic: 'Composition', emoji: '✍️📄', question: 'What are the five paragraph essay parts?', answer: 'Introduction, Body 1, Body 2, Body 3, Conclusion'},
            {topic: 'Literature', emoji: '📖📚', question: 'Name three famous poets', answer: 'Shakespeare, Frost, Dickinson, Poe, Whitman (any 3)'}
        ]
    },
    2: { // Chapter 2: Parts of Speech
        easy: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'Nouns name people, places, and things.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🏃‍♂️📖', question: 'Verbs show action or state.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🎨📝', question: 'Adjectives describe nouns.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '⚡📖', question: 'Adverbs modify verbs.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '👤📝', question: 'Pronouns replace nouns.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🔗✍️', question: 'Conjunctions connect words.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '📍📖', question: 'Prepositions show position.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '❗📝', question: 'Interjections express emotion.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '📚✍️', question: 'Articles are a, an, the.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🎯📖', question: 'There are eight parts of speech.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'What type of noun is "happiness"?', options: ['Abstract', 'Concrete'], correct: 0},
            {topic: 'Grammar', emoji: '🏃‍♂️📖', question: 'What is a linking verb?', options: ['Connects subject to description', 'Shows action'], correct: 0},
            {topic: 'Grammar', emoji: '🎨📝', question: 'Where do adjectives usually go?', options: ['Before noun', 'After verb'], correct: 0},
            {topic: 'Grammar', emoji: '⚡📖', question: 'What does "quickly" modify in "ran quickly"?', options: ['Verb', 'Noun'], correct: 0},
            {topic: 'Grammar', emoji: '👤📝', question: 'What type is "myself"?', options: ['Reflexive pronoun', 'Personal pronoun'], correct: 0},
            {topic: 'Grammar', emoji: '🔗✍️', question: 'What is "and, but, or"?', options: ['Coordinating conjunctions', 'Subordinating'], correct: 0},
            {topic: 'Grammar', emoji: '📍📖', question: 'What follows a preposition?', options: ['Object', 'Subject'], correct: 0},
            {topic: 'Grammar', emoji: '❗📝', question: 'Which is an interjection?', options: ['Wow', 'Run'], correct: 0},
            {topic: 'Grammar', emoji: '📚✍️', question: 'When do we use "an"?', options: ['Before vowel sound', 'Before consonant'], correct: 0},
            {topic: 'Grammar', emoji: '🎯📖', question: 'What part of speech is "the"?', options: ['Article', 'Pronoun'], correct: 0}
        ],
        hard: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'What is a collective noun?', options: ['Group as single unit', 'Multiple items', 'Abstract concept'], correct: 0},
            {topic: 'Grammar', emoji: '🏃‍♂️📖', question: 'What are auxiliary verbs?', options: ['Helping verbs', 'Action verbs', 'State verbs'], correct: 0},
            {topic: 'Grammar', emoji: '🎨📝', question: 'What is a predicate adjective?', options: ['After linking verb', 'Before noun', 'Modifying verb'], correct: 0},
            {topic: 'Grammar', emoji: '⚡📖', question: 'What is a conjunctive adverb?', options: ['Connects sentences', 'Modifies verb', 'Describes noun'], correct: 0},
            {topic: 'Grammar', emoji: '👤📝', question: 'What are intensive pronouns?', options: ['Emphasize noun', 'Ask questions', 'Show possession'], correct: 0},
            {topic: 'Grammar', emoji: '🔗✍️', question: 'What is a correlative conjunction?', options: ['Paired connectors', 'Single word', 'Three words'], correct: 0},
            {topic: 'Grammar', emoji: '📍📖', question: 'What is a prepositional phrase?', options: ['Preposition + object', 'Two prepositions', 'Verb phrase'], correct: 0},
            {topic: 'Grammar', emoji: '❗📝', question: 'Do interjections affect grammar?', options: ['No, standalone', 'Yes, as subjects', 'Yes, as objects'], correct: 0},
            {topic: 'Grammar', emoji: '📚✍️', question: 'What is zero article?', options: ['No article used', 'The article', 'A/An article'], correct: 0},
            {topic: 'Grammar', emoji: '🎯📖', question: 'What can function as noun?', options: ['Gerund', 'Adverb', 'Preposition'], correct: 0}
        ],
        expert: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'What is the nominative case?', options: ['Subject position', 'Object position', 'Possessive form', 'Indirect object'], correct: 0},
            {topic: 'Grammar', emoji: '🏃‍♂️📖', question: 'What is an ergative verb?', options: ['Same form transitive/intransitive', 'Only transitive', 'Only intransitive', 'Always passive'], correct: 0},
            {topic: 'Grammar', emoji: '🎨📝', question: 'What is a postpositive adjective?', options: ['After noun', 'Before noun', 'Before verb', 'After verb'], correct: 0},
            {topic: 'Grammar', emoji: '⚡📖', question: 'What is a flat adverb?', options: ['No -ly ending', 'Has -ly ending', 'Two syllables', 'Comparative form'], correct: 0},
            {topic: 'Grammar', emoji: '👤📝', question: 'What is an indefinite pronoun?', options: ['Non-specific reference', 'Specific person', 'Question word', 'Possessive'], correct: 0},
            {topic: 'Grammar', emoji: '🔗✍️', question: 'What is a subordinating conjunction?', options: ['Introduces dependent clause', 'Joins equal parts', 'Ends sentence', 'Starts question'], correct: 0},
            {topic: 'Grammar', emoji: '📍📖', question: 'Can prepositions end sentences?', options: ['Yes, in modern English', 'No, never', 'Only formal', 'Only informal'], correct: 0},
            {topic: 'Grammar', emoji: '❗📝', question: 'What is a mild interjection?', options: ['Comma after it', 'Exclamation mark', 'Question mark', 'Period'], correct: 0},
            {topic: 'Grammar', emoji: '📚✍️', question: 'What determines article choice?', options: ['Sound of next word', 'Spelling only', 'Meaning', 'Grammar'], correct: 0},
            {topic: 'Grammar', emoji: '🎯📖', question: 'What is a determiner?', options: ['Introduces noun phrase', 'Type of verb', 'Adjective only', 'Adverb type'], correct: 0}
        ],
        extreme: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'Name three types of nouns', answer: 'Proper, common, abstract, concrete, collective (any 3)'},
            {topic: 'Grammar', emoji: '🏃‍♂️📖', question: 'Name three verb forms', answer: 'Base, past, past participle, present participle, infinitive (any 3)'},
            {topic: 'Grammar', emoji: '🎨📝', question: 'Name three types of adjectives', answer: 'Descriptive, quantitative, demonstrative, possessive (any 3)'},
            {topic: 'Grammar', emoji: '⚡📖', question: 'Name three adverb types by meaning', answer: 'Manner, time, place, frequency, degree (any 3)'},
            {topic: 'Grammar', emoji: '👤📝', question: 'Name three pronoun types', answer: 'Personal, possessive, reflexive, demonstrative, relative (any 3)'},
            {topic: 'Grammar', emoji: '🔗✍️', question: 'Name three coordinating conjunctions', answer: 'And, but, or, nor, for, yet, so (any 3)'},
            {topic: 'Grammar', emoji: '📍📖', question: 'Name five prepositions', answer: 'In, on, at, by, with, from, to (any 5)'},
            {topic: 'Grammar', emoji: '❗📝', question: 'Name three interjections', answer: 'Wow, ouch, hey, oh, yikes (any 3)'},
            {topic: 'Grammar', emoji: '📚✍️', question: 'What are the three English articles?', answer: 'A, an, the'},
            {topic: 'Grammar', emoji: '🎯📖', question: 'List all eight parts of speech', answer: 'Noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection'}
        ]
    },
    3: { // Chapter 3: Sentence Structure
        easy: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'A simple sentence has one clause.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🔗📖', question: 'A compound sentence joins two clauses.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🏗️✍️', question: 'Every sentence needs a subject.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '⚙️📝', question: 'Every sentence needs a predicate.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '❓📖', question: 'Questions are interrogative sentences.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '❗✍️', question: 'Commands are imperative sentences.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '😮📝', question: 'Exclamations show strong emotion.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '📄📖', question: 'Declarative sentences make statements.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🎯✍️', question: 'Fragments are incomplete sentences.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🔄📝', question: 'Run-ons join clauses incorrectly.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'What is a simple sentence?', options: ['One independent clause', 'Two clauses'], correct: 0},
            {topic: 'Grammar', emoji: '🔗📖', question: 'How are compound sentences joined?', options: ['Conjunction or semicolon', 'Comma only'], correct: 0},
            {topic: 'Grammar', emoji: '🏗️✍️', question: 'What is the subject?', options: ['Who/what does action', 'The action'], correct: 0},
            {topic: 'Grammar', emoji: '⚙️📝', question: 'What is the predicate?', options: ['Verb and its parts', 'Subject'], correct: 0},
            {topic: 'Grammar', emoji: '❓📖', question: 'What marks end of question?', options: ['Question mark', 'Period'], correct: 0},
            {topic: 'Grammar', emoji: '❗✍️', question: 'What is implied subject in commands?', options: ['You', 'I'], correct: 0},
            {topic: 'Grammar', emoji: '😮📝', question: 'What punctuation for exclamations?', options: ['Exclamation mark', 'Period'], correct: 0},
            {topic: 'Grammar', emoji: '📄📖', question: 'What ends declarative sentence?', options: ['Period', 'Question mark'], correct: 0},
            {topic: 'Grammar', emoji: '🎯✍️', question: 'What makes a fragment?', options: ['Missing subject or verb', 'Too short'], correct: 0},
            {topic: 'Grammar', emoji: '🔄📝', question: 'How to fix run-on?', options: ['Add punctuation or conjunction', 'Make longer'], correct: 0}
        ],
        hard: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'What is a complex sentence?', options: ['Independent + dependent clause', 'Two independent clauses', 'One clause only'], correct: 0},
            {topic: 'Grammar', emoji: '🔗📖', question: 'What is a compound-complex sentence?', options: ['Two independent + one dependent', 'One of each', 'Three independent'], correct: 0},
            {topic: 'Grammar', emoji: '🏗️✍️', question: 'What is a complete subject?', options: ['Subject with modifiers', 'Subject only', 'Verb phrase'], correct: 0},
            {topic: 'Grammar', emoji: '⚙️📝', question: 'What is a complete predicate?', options: ['Verb with modifiers/objects', 'Verb only', 'Subject phrase'], correct: 0},
            {topic: 'Grammar', emoji: '❓📖', question: 'What is a rhetorical question?', options: ['No answer expected', 'Yes/no question', 'Multiple choice'], correct: 0},
            {topic: 'Grammar', emoji: '❗✍️', question: 'Can imperatives have subjects?', options: ['Yes, for emphasis', 'No, never', 'Only plural'], correct: 0},
            {topic: 'Grammar', emoji: '😮📝', question: 'Are all exclamations complete sentences?', options: ['No, can be fragments', 'Yes, always', 'Only if long'], correct: 0},
            {topic: 'Grammar', emoji: '📄📖', question: 'Can declaratives ask questions?', options: ['Yes, indirectly', 'No, never', 'Only formal'], correct: 0},
            {topic: 'Grammar', emoji: '🎯✍️', question: 'What is a dependent clause fragment?', options: ['Clause needing main clause', 'Complete thought', 'Simple sentence'], correct: 0},
            {topic: 'Grammar', emoji: '🔄📝', question: 'What is a comma splice?', options: ['Clauses joined by comma only', 'Missing comma', 'Too many commas'], correct: 0}
        ],
        expert: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'What is a periodic sentence?', options: ['Main idea at end', 'Main idea at start', 'No main idea', 'Question form'], correct: 0},
            {topic: 'Grammar', emoji: '🔗📖', question: 'What is asyndeton?', options: ['Omitting conjunctions', 'Adding conjunctions', 'Using semicolons', 'Complex structure'], correct: 0},
            {topic: 'Grammar', emoji: '🏗️✍️', question: 'What is an expletive construction?', options: ['It is/There is structure', 'Exclamation', 'Question', 'Command'], correct: 0},
            {topic: 'Grammar', emoji: '⚙️📝', question: 'What is predicate nominative?', options: ['Noun after linking verb', 'Action verb', 'Adjective', 'Adverb'], correct: 0},
            {topic: 'Grammar', emoji: '❓📖', question: 'What is a tag question?', options: ['Added question at end', 'Yes/no question', 'Wh-question', 'Embedded question'], correct: 0},
            {topic: 'Grammar', emoji: '❗✍️', question: 'What is a hortative sentence?', options: ['Exhortation or encouragement', 'Command', 'Statement', 'Question'], correct: 0},
            {topic: 'Grammar', emoji: '😮📝', question: 'What is an exclamatory sentence fragment?', options: ['Emotional outburst phrase', 'Complete sentence', 'Question', 'Statement'], correct: 0},
            {topic: 'Grammar', emoji: '📄📖', question: 'What is passive voice structure?', options: ['Object becomes subject', 'Subject acts', 'No object', 'Question form'], correct: 0},
            {topic: 'Grammar', emoji: '🎯✍️', question: 'Can fragments be stylistic?', options: ['Yes, for effect', 'No, always errors', 'Only in poetry', 'Only in dialogue'], correct: 0},
            {topic: 'Grammar', emoji: '🔄📝', question: 'What is a fused sentence?', options: ['Run-on with no punctuation', 'Comma splice', 'Fragment', 'Complex sentence'], correct: 0}
        ],
        extreme: [
            {topic: 'Grammar', emoji: '📝✍️', question: 'Name four sentence types by structure', answer: 'Simple, compound, complex, compound-complex'},
            {topic: 'Grammar', emoji: '🔗📖', question: 'Name four sentence types by purpose', answer: 'Declarative, interrogative, imperative, exclamatory'},
            {topic: 'Grammar', emoji: '🏗️✍️', question: 'Name three parts of a complete subject', answer: 'Simple subject, modifiers, articles (examples)'},
            {topic: 'Grammar', emoji: '⚙️📝', question: 'Name three parts of a complete predicate', answer: 'Verb, objects, complements, modifiers (any 3)'},
            {topic: 'Grammar', emoji: '❓📖', question: 'Name three types of questions', answer: 'Yes/no, wh-questions, tag questions, rhetorical (any 3)'},
            {topic: 'Grammar', emoji: '❗✍️', question: 'Give three examples of imperative sentences', answer: 'Stop, Please sit down, Let us go (any 3)'},
            {topic: 'Grammar', emoji: '😮📝', question: 'Give three examples of exclamations', answer: 'Wow! What a day! How beautiful! (any 3)'},
            {topic: 'Grammar', emoji: '📄📖', question: 'Name three ways to join independent clauses', answer: 'Comma + conjunction, semicolon, period'},
            {topic: 'Grammar', emoji: '🎯✍️', question: 'Name three ways to fix fragments', answer: 'Add subject, add verb, join to complete sentence'},
            {topic: 'Grammar', emoji: '🔄📝', question: 'Name three ways to fix run-ons', answer: 'Add period, add semicolon, add comma + conjunction'}
        ]
    },
    4: { // Chapter 4: Punctuation and Mechanics
        easy: [
            {topic: 'Punctuation', emoji: '📝✍️', question: 'A period ends a statement.', options: ['True', 'False'], correct: 0},
            {topic: 'Punctuation', emoji: '❓📖', question: 'A question mark ends a question.', options: ['True', 'False'], correct: 0},
            {topic: 'Punctuation', emoji: '❗✍️', question: 'An exclamation mark shows excitement.', options: ['True', 'False'], correct: 0},
            {topic: 'Punctuation', emoji: '💬📝', question: 'Quotation marks show speech.', options: ['True', 'False'], correct: 0},
            {topic: 'Punctuation', emoji: '📍📖', question: 'Commas separate list items.', options: ['True', 'False'], correct: 0},
            {topic: 'Punctuation', emoji: '✍️📄', question: 'Apostrophes show possession.', options: ['True', 'False'], correct: 0},
            {topic: 'Punctuation', emoji: '🔗📝', question: 'Semicolons join related clauses.', options: ['True', 'False'], correct: 0},
            {topic: 'Punctuation', emoji: '➖📖', question: 'Hyphens connect compound words.', options: ['True', 'False'], correct: 0},
            {topic: 'Mechanics', emoji: '🔤✍️', question: 'Capitalize first word of sentence.', options: ['True', 'False'], correct: 0},
            {topic: 'Mechanics', emoji: '📝📖', question: 'Proper nouns are capitalized.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Punctuation', emoji: '📝✍️', question: 'When to use colon?', options: ['Before list or explanation', 'Between clauses'], correct: 0},
            {topic: 'Punctuation', emoji: '❓📖', question: 'Where does question mark go?', options: ['End of sentence', 'Beginning'], correct: 0},
            {topic: 'Punctuation', emoji: '❗✍️', question: 'Can you use multiple exclamation marks?', options: ['Yes, informal only', 'Yes, always'], correct: 0},
            {topic: 'Punctuation', emoji: '💬📝', question: 'Where do periods go with quotes?', options: ['Inside quotes', 'Outside quotes'], correct: 0},
            {topic: 'Punctuation', emoji: '📍📖', question: 'When to use comma before "and"?', options: ['In list of three or more', 'Never'], correct: 0},
            {topic: 'Punctuation', emoji: '✍️📄', question: 'How to make plural possessive?', options: ['Add apostrophe after s', 'Add \'s'], correct: 0},
            {topic: 'Punctuation', emoji: '🔗📝', question: 'What joins clauses stronger than comma?', options: ['Semicolon', 'Period'], correct: 0},
            {topic: 'Punctuation', emoji: '➖📖', question: 'When to hyphenate compound adjectives?', options: ['Before noun', 'After noun'], correct: 0},
            {topic: 'Mechanics', emoji: '🔤✍️', question: 'Capitalize which words in title?', options: ['First, last, major words', 'All words'], correct: 0},
            {topic: 'Mechanics', emoji: '📝📖', question: 'Are seasons capitalized?', options: ['No', 'Yes'], correct: 0}
        ],
        hard: [
            {topic: 'Punctuation', emoji: '📝✍️', question: 'What is an em dash used for?', options: ['Interruption or emphasis', 'List items', 'Possession'], correct: 0},
            {topic: 'Punctuation', emoji: '❓📖', question: 'Can question mark be used mid-sentence?', options: ['Yes, in quotes', 'No, only at end', 'Yes, anywhere'], correct: 0},
            {topic: 'Punctuation', emoji: '❗✍️', question: 'What is an interrobang?', options: ['?! combined', 'Multiple !', 'Multiple ?'], correct: 0},
            {topic: 'Punctuation', emoji: '💬📝', question: 'How to quote within quote?', options: ['Single quotes inside double', 'Double inside single', 'Same quotes'], correct: 0},
            {topic: 'Punctuation', emoji: '📍📖', question: 'What is the serial comma also called?', options: ['Oxford comma', 'Harvard comma', 'Series comma'], correct: 0},
            {topic: 'Punctuation', emoji: '✍️📄', question: 'How to show plural of letter?', options: ['Apostrophe + s', 'Just s', 'Just apostrophe'], correct: 0},
            {topic: 'Punctuation', emoji: '🔗📝', question: 'When not to use semicolon?', options: ['Between dependent and independent', 'Between independents', 'In lists'], correct: 0},
            {topic: 'Punctuation', emoji: '➖📖', question: 'What is an en dash?', options: ['Between numbers/ranges', 'Same as hyphen', 'Same as em dash'], correct: 0},
            {topic: 'Mechanics', emoji: '🔤✍️', question: 'Capitalize after colon?', options: ['If complete sentence follows', 'Always', 'Never'], correct: 0},
            {topic: 'Mechanics', emoji: '📝📖', question: 'How to write numbers under 10?', options: ['Spell out', 'Use numerals', 'Either'], correct: 0}
        ],
        expert: [
            {topic: 'Punctuation', emoji: '📝✍️', question: 'What is ellipsis used for?', options: ['Omitted words or pause', 'Question', 'Excitement', 'List'], correct: 0},
            {topic: 'Punctuation', emoji: '❓📖', question: 'What is a rhetorical question punctuation?', options: ['Question mark or period', 'Only question mark', 'Only period', 'Exclamation'], correct: 0},
            {topic: 'Punctuation', emoji: '❗✍️', question: 'When is exclamation overused?', options: ['Multiple in paragraph', 'One per page', 'Never', 'Two total'], correct: 0},
            {topic: 'Punctuation', emoji: '💬📝', question: 'British vs American quote punctuation?', options: ['UK outside, US inside', 'Same', 'UK inside, US outside', 'No difference'], correct: 0},
            {topic: 'Punctuation', emoji: '📍📖', question: 'What is a serial comma?', options: ['Before last item in list', 'First comma', 'Any comma', 'No comma'], correct: 0},
            {topic: 'Punctuation', emoji: '✍️📄', question: 'How to show joint possession?', options: ['Apostrophe on last name', 'Each name', 'No apostrophe', 'First name only'], correct: 0},
            {topic: 'Punctuation', emoji: '🔗📝', question: 'Can semicolon join with conjunction?', options: ['Yes, with transitional phrase', 'No, never', 'Yes, always', 'Only and'], correct: 0},
            {topic: 'Punctuation', emoji: '➖📖', question: 'What is a suspended hyphen?', options: ['Hyphen with omitted word', 'Double hyphen', 'No hyphen', 'Triple hyphen'], correct: 0},
            {topic: 'Mechanics', emoji: '🔤✍️', question: 'Capitalize compass directions?', options: ['Only as proper regions', 'Always', 'Never', 'Only North'], correct: 0},
            {topic: 'Mechanics', emoji: '📝📖', question: 'How to write decades?', options: ['1990s or \90s', 'Only 1990\'s', 'Only nineties', '1990'], correct: 0}
        ],
        extreme: [
            {topic: 'Punctuation', emoji: '📝✍️', question: 'Name five end punctuation marks', answer: 'Period, question mark, exclamation mark, ellipsis, interrobang (any 5 valid)'},
            {topic: 'Punctuation', emoji: '❓📖', question: 'Name three uses of comma', answer: 'Lists, introductory elements, joining clauses, addresses (any 3)'},
            {topic: 'Punctuation', emoji: '❗✍️', question: 'Name three dash types', answer: 'Hyphen, en dash, em dash'},
            {topic: 'Punctuation', emoji: '💬📝', question: 'Name three uses of quotation marks', answer: 'Direct speech, titles, irony/emphasis (any 3)'},
            {topic: 'Punctuation', emoji: '📍📖', question: 'Name three uses of colon', answer: 'Before list, before explanation, time, ratios (any 3)'},
            {topic: 'Punctuation', emoji: '✍️📄', question: 'Name three uses of apostrophe', answer: 'Possessive, contractions, plural of letters/numbers'},
            {topic: 'Punctuation', emoji: '🔗📝', question: 'Name three uses of semicolon', answer: 'Join clauses, separate complex list items, with transitional phrases'},
            {topic: 'Punctuation', emoji: '➖📖', question: 'Name three uses of parentheses', answer: 'Additional info, citations, numbers/letters in lists'},
            {topic: 'Mechanics', emoji: '🔤✍️', question: 'Name five things always capitalized', answer: 'Proper nouns, first word, I, titles, days/months (any 5)'},
            {topic: 'Mechanics', emoji: '📝📖', question: 'Name three abbreviation rules', answer: 'Period after, all caps for acronyms, no plural apostrophe'}
        ]
    },
    5: { // Chapter 5: Verb Tenses and Moods
        easy: [
            {topic: 'Grammar', emoji: '⏰📝', question: 'Present tense is happening now.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '⏪✍️', question: 'Past tense already happened.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '⏩📖', question: 'Future tense will happen.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🔄📝', question: 'Progressive shows ongoing action.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '✅✍️', question: 'Perfect tense shows completed action.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '📖🎯', question: 'Regular verbs add -ed for past.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🔀📝', question: 'Irregular verbs change form.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '🗣️✍️', question: 'Mood shows attitude.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '💭📖', question: 'Subjunctive shows wishes.', options: ['True', 'False'], correct: 0},
            {topic: 'Grammar', emoji: '❗📝', question: 'Imperative mood gives commands.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Grammar', emoji: '⏰📝', question: 'What is simple present?', options: ['Habitual action', 'Right now'], correct: 0},
            {topic: 'Grammar', emoji: '⏪✍️', question: 'What is simple past?', options: ['Completed past action', 'Ongoing past'], correct: 0},
            {topic: 'Grammar', emoji: '⏩📖', question: 'How to form simple future?', options: ['Will + base verb', 'Going to'], correct: 0},
            {topic: 'Grammar', emoji: '🔄📝', question: 'What is present progressive?', options: ['Am/is/are + -ing', 'Has/have + past'], correct: 0},
            {topic: 'Grammar', emoji: '✅✍️', question: 'What is present perfect?', options: ['Has/have + past participle', 'Had + past'], correct: 0},
            {topic: 'Grammar', emoji: '📖🎯', question: 'What is past of "walk"?', options: ['Walked', 'Walk'], correct: 0},
            {topic: 'Grammar', emoji: '🔀📝', question: 'What is past of "go"?', options: ['Went', 'Goed'], correct: 0},
            {topic: 'Grammar', emoji: '🗣️✍️', question: 'What are three moods?', options: ['Indicative, imperative, subjunctive', 'Past, present, future'], correct: 0},
            {topic: 'Grammar', emoji: '💭📖', question: 'When use subjunctive?', options: ['Wishes, if clauses', 'Statements'], correct: 0},
            {topic: 'Grammar', emoji: '❗📝', question: 'What is indicative mood?', options: ['Statements and questions', 'Commands'], correct: 0}
        ],
        hard: [
            {topic: 'Grammar', emoji: '⏰📝', question: 'What is present perfect progressive?', options: ['Has/have been + -ing', 'Is/am/are + -ing', 'Will be + -ing'], correct: 0},
            {topic: 'Grammar', emoji: '⏪✍️', question: 'What is past perfect?', options: ['Had + past participle', 'Has + past participle', 'Was + -ing'], correct: 0},
            {topic: 'Grammar', emoji: '⏩📖', question: 'What is future perfect?', options: ['Will have + past participle', 'Will + base', 'Will be + -ing'], correct: 0},
            {topic: 'Grammar', emoji: '🔄📝', question: 'What is past progressive?', options: ['Was/were + -ing', 'Had been + -ing', 'Is/am/are + -ing'], correct: 0},
            {topic: 'Grammar', emoji: '✅✍️', question: 'When use past perfect?', options: ['Earlier past action', 'Recent past', 'Future'], correct: 0},
            {topic: 'Grammar', emoji: '📖🎯', question: 'What is principal parts of verb?', options: ['Base, past, past participle, present participle', 'Two forms', 'Three forms'], correct: 0},
            {topic: 'Grammar', emoji: '🔀📝', question: 'What is past participle of "swim"?', options: ['Swum', 'Swam', 'Swimmed'], correct: 0},
            {topic: 'Grammar', emoji: '🗣️✍️', question: 'What is conditional mood?', options: ['Would/could/should situations', 'Commands', 'Wishes'], correct: 0},
            {topic: 'Grammar', emoji: '💭📖', question: 'What verb form in subjunctive?', options: ['Base form or were', 'Regular past', 'Present'], correct: 0},
            {topic: 'Grammar', emoji: '❗📝', question: 'Does imperative have subject?', options: ['No, implied "you"', 'Yes, always', 'Sometimes'], correct: 0}
        ],
        expert: [
            {topic: 'Grammar', emoji: '⏰📝', question: 'What is habitual aspect?', options: ['Used to/would for past habits', 'Present tense', 'Future tense', 'Progressive'], correct: 0},
            {topic: 'Grammar', emoji: '⏪✍️', question: 'What is past perfect progressive?', options: ['Had been + -ing', 'Has been + -ing', 'Was + -ing', 'Were + -ing'], correct: 0},
            {topic: 'Grammar', emoji: '⏩📖', question: 'What is future perfect progressive?', options: ['Will have been + -ing', 'Will be + -ing', 'Will have + past', 'Going to be + -ing'], correct: 0},
            {topic: 'Grammar', emoji: '🔄📝', question: 'What is aspect in grammar?', options: ['Time flow of action', 'Tense', 'Mood', 'Voice'], correct: 0},
            {topic: 'Grammar', emoji: '✅✍️', question: 'What is perfective aspect?', options: ['Completed action', 'Ongoing action', 'Future action', 'Habitual'], correct: 0},
            {topic: 'Grammar', emoji: '📖🎯', question: 'What is a defective verb?', options: ['Missing forms', 'Regular verb', 'Irregular verb', 'Perfect verb'], correct: 0},
            {topic: 'Grammar', emoji: '🔀📝', question: 'What is ablaut?', options: ['Vowel change in irregular verbs', 'Adding -ed', 'No change', 'Double consonant'], correct: 0},
            {topic: 'Grammar', emoji: '🗣️✍️', question: 'What is jussive mood?', options: ['Command in third person', 'First person command', 'Question', 'Statement'], correct: 0},
            {topic: 'Grammar', emoji: '💭📖', question: 'When is "were" used for singular?', options: ['Subjunctive mood', 'Past tense', 'Present tense', 'Future'], correct: 0},
            {topic: 'Grammar', emoji: '❗📝', question: 'Can imperatives use "let"?', options: ['Yes, for inclusive commands', 'No, never', 'Only negative', 'Only formal'], correct: 0}
        ],
        extreme: [
            {topic: 'Grammar', emoji: '⏰📝', question: 'Name all six present tenses', answer: 'Simple, progressive, perfect, perfect progressive (and emphatic, habitual)'},
            {topic: 'Grammar', emoji: '⏪✍️', question: 'Name all six past tenses', answer: 'Simple, progressive, perfect, perfect progressive (and emphatic, habitual)'},
            {topic: 'Grammar', emoji: '⏩📖', question: 'Name all six future tenses', answer: 'Simple, progressive, perfect, perfect progressive (and emphatic, habitual)'},
            {topic: 'Grammar', emoji: '🔄📝', question: 'Name three progressive tenses', answer: 'Present progressive, past progressive, future progressive'},
            {topic: 'Grammar', emoji: '✅✍️', question: 'Name three perfect tenses', answer: 'Present perfect, past perfect, future perfect'},
            {topic: 'Grammar', emoji: '📖🎯', question: 'Give three examples of irregular verbs', answer: 'Go/went/gone, see/saw/seen, eat/ate/eaten (any 3)'},
            {topic: 'Grammar', emoji: '🔀📝', question: 'Name three irregular verb patterns', answer: 'Vowel change, no change, mixed (examples: sing/sang/sung, put/put/put)'},
            {topic: 'Grammar', emoji: '🗣️✍️', question: 'Name the three main moods', answer: 'Indicative, imperative, subjunctive'},
            {topic: 'Grammar', emoji: '💭📖', question: 'Give three subjunctive examples', answer: 'If I were, I wish I were, It is important that he be (any 3)'},
            {topic: 'Grammar', emoji: '❗📝', question: 'Give three imperative examples', answer: 'Stop! Please wait. Let\'s go. (any 3)'}
        ]
    }
,
    6: { // Chapter 6: Vocabulary Building
        easy: [
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 1.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 2.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 3.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 4.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 5.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 6.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 7.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 8.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 9.', options: ['True', 'False'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building topic 10.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 1?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 2?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 3?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 4?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 5?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 6?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 7?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 8?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 9?', options: ['Option A', 'Option B'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building question 10?', options: ['Option A', 'Option B'], correct: 0}
        ],
        hard: [
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 1?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 2?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 3?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 4?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 5?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 6?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 7?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 8?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 9?', options: ['A', 'B', 'C'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building advanced question 10?', options: ['A', 'B', 'C'], correct: 0}
        ],
        expert: [
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 1?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 2?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 3?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 4?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 5?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 6?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 7?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 8?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 9?', options: ['A', 'B', 'C', 'D'], correct: 0},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Vocabulary Building expert question 10?', options: ['A', 'B', 'C', 'D'], correct: 0}
        ],
        extreme: [
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 1', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 2', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 3', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 4', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 5', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 6', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 7', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 8', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 9', answer: 'Item 1, Item 2, Item 3'},
            {topic: 'Vocabulary', emoji: '🔤📚', question: 'Name three vocabulary building items 10', answer: 'Item 1, Item 2, Item 3'}
        ]
    },
};
