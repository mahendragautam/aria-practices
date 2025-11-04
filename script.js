// Quiz state
let currentSubject = 'science';
let currentChapter = 1;
let currentLevel = 'easy';
let currentQuestionIndex = 0;
let score = 0;
let startTime = 0;
let answered = false;
let shuffledQuestions = [];
let fallingEmojis = [];
let quizMode = 'normal';
let returnPage = 'home';

// Timer state
let isTimedMode = false;
let timeRemaining = 0;
let timerInterval = null;
let isPaused = false;
let canPause = true;

// Time limits (in seconds)
const timeLimits = {
    easy: 60,
    medium: 90,
    hard: 120,
    expert: 150,
    extreme: 180,
    complete: 120
};

// Subjects definition
const subjects = {
    science: { name: 'Science', emoji: '🔬' },
    math: { name: 'Math', emoji: '🔢' },
    history: { name: 'History', emoji: '📜' },
    geography: { name: 'Geography', emoji: '🌍' },
    english: { name: 'English', emoji: '📖' },
    health: { name: 'Health & Fitness', emoji: '💪' },
    environment: { name: 'Environment', emoji: '🌱' },
    business: { name: 'Business', emoji: '💼' },
    technology: { name: 'Technology', emoji: '💻' },
    parenting: { name: 'Parenting', emoji: '👶' }
};

// Chapter colors
const chapterColors = [
    '#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C',
    '#FFD700', '#FF69B4', '#87CEFA', '#90EE90', '#BA55D3',
    '#FFA07A', '#20B2AA', '#FF6347', '#4682B4', '#32CD32',
    '#FF1493', '#00CED1', '#FF4500', '#6A5ACD', '#FFB347'
];
