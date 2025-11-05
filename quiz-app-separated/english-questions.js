// English Question Bank
// Add this file separately in WordPress or link it before app.js

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
    }
    // Add more chapters: 2, 3, 4... unlimited!
};

// Export for master file to use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = englishQuestions;
}
