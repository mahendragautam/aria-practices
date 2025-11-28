/**
 * WPCode Snippet #4: Sports Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer
 * Priority: 10
 *
 * COPY ALL CODE BELOW
 */

const sportsQuestions = {
    1: {
        easy: [
            {
                topic: "Football Basics",
                emoji: "⚽🏀",
                question: "Does a football match have two halves?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Players",
                emoji: "🏈🏐",
                question: "Are there 11 players on each football team?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Scoring",
                emoji: "🎾🏓",
                question: "Is a goal worth one point in football?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Rules",
                emoji: "🏸🥅",
                question: "Can goalkeepers use their hands inside the penalty box?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Equipment",
                emoji: "🏑🏒",
                question: "Do football players wear boots with studs?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Field",
                emoji: "🥊🥋",
                question: "Is the playing area called a pitch in football?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Officials",
                emoji: "⛳🏌️",
                question: "Does a referee control the football match?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Cards",
                emoji: "🎿⛷️",
                question: "Is a yellow card a warning in football?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tournament",
                emoji: "🏂🛷",
                question: "Does the World Cup happen every four years?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Positions",
                emoji: "🏇🏇",
                question: "Is the goalkeeper the only player who can use hands?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Duration",
                emoji: "🚴🚵",
                question: "How long is a standard football match?",
                options: [
                    "90 minutes",
                    "60 minutes"
                ],
                correct: 1
            },
            {
                topic: "Offside",
                emoji: "🏊🤽",
                question: "Can you be offside in your own half?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 0
            },
            {
                topic: "Substitutions",
                emoji: "🤾🤺",
                question: "How many substitutes are typically allowed in a match?",
                options: [
                    "3 to 5 depending on competition",
                    "Unlimited"
                ],
                correct: 1
            },
            {
                topic: "Penalty",
                emoji: "🏋️🤸",
                question: "What distance is a penalty kick taken from?",
                options: [
                    "10 yards",
                    "12 yards"
                ],
                correct: 1
            },
            {
                topic: "Red Card",
                emoji: "🧘🧗",
                question: "What happens when a player gets a red card?",
                options: [
                    "Sent off immediately",
                    "Final warning only"
                ],
                correct: 1
            },
            {
                topic: "Corner Kick",
                emoji: "🚣🛶",
                question: "When is a corner kick awarded?",
                options: [
                    "Any time",
                    "Ball crosses goal line off defending team"
                ],
                correct: 1
            },
            {
                topic: "Free Kick",
                emoji: "🏄🏄",
                question: "Can you score directly from a free kick?",
                options: [
                    "Yes",
                    "No"
                ],
                correct: 1
            },
            {
                topic: "Throw-in",
                emoji: "⛹️🤾",
                question: "Must both feet be on ground during a throw-in?",
                options: [
                    "Not necessary",
                    "Yes, required"
                ],
                correct: 0
            },
            {
                topic: "Extra Time",
                emoji: "🥇🥈",
                question: "How long is extra time if a match is tied?",
                options: [
                    "30 minutes (two 15-minute halves)",
                    "20 minutes"
                ],
                correct: 0
            },
            {
                topic: "Goal Line",
                emoji: "🥉🏆",
                question: "Must the whole ball cross the line for a goal?",
                options: [
                    "Half is enough",
                    "Yes, completely"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "VAR",
                emoji: "🏅🎖️",
                question: "What does VAR stand for?",
                options: [
                    "Video Assistant Referee",
                    "Visual Analysis Review",
                    "Verified Action Replay"
                ],
                correct: 1
            },
            {
                topic: "Offside Rule",
                emoji: "🥎⚾",
                question: "Can you be offside from a throw-in?",
                options: [
                    "Yes, always",
                    "Only in attacking third",
                    "No, never"
                ],
                correct: 0
            },
            {
                topic: "Handball",
                emoji: "🏉🏐",
                question: "Is every hand contact with the ball a handball?",
                options: [
                    "No, depends on intent and position",
                    "Yes, always",
                    "Only if scored"
                ],
                correct: 1
            },
            {
                topic: "Kickoff",
                emoji: "🎯🎱",
                question: "Can you score directly from kickoff?",
                options: [
                    "Only after half time",
                    "Never allowed",
                    "Yes, it's allowed"
                ],
                correct: 0
            },
            {
                topic: "Back Pass",
                emoji: "🎳🏏",
                question: "Can a goalkeeper handle a deliberate back pass?",
                options: [
                    "Yes, always",
                    "No, it's illegal",
                    "Only once per match"
                ],
                correct: 0
            },
            {
                topic: "Advantage Rule",
                emoji: "🥍🏑",
                question: "What is the advantage rule?",
                options: [
                    "Extra player allowed",
                    "Play continues after foul if beneficial",
                    "No fouls in final minutes"
                ],
                correct: 0
            },
            {
                topic: "Goal Kick",
                emoji: "🛹🛼",
                question: "Where must opponents be during a goal kick?",
                options: [
                    "Outside penalty area",
                    "Behind halfway line",
                    "Anywhere on field"
                ],
                correct: 0
            },
            {
                topic: "Indirect Free Kick",
                emoji: "🏹🎣",
                question: "Can you score directly from an indirect free kick?",
                options: [
                    "Yes",
                    "Only from outside box",
                    "No, must touch another player first"
                ],
                correct: 1
            },
            {
                topic: "Penalty Shootout",
                emoji: "🤿🏊",
                question: "How many penalties in initial shootout round?",
                options: [
                    "5 each team",
                    "3 each team",
                    "7 each team"
                ],
                correct: 0
            },
            {
                topic: "Injury Time",
                emoji: "⛸️🛼",
                question: "Who decides how much stoppage time is added?",
                options: [
                    "Team captains",
                    "Referee",
                    "Fourth official"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Field Dimensions",
                emoji: "⚽📐",
                question: "What are the FIFA standard field length dimensions?",
                options: [
                    "90-120 meters",
                    "100-110 meters for international",
                    "80-100 meters",
                    "110-130 meters"
                ],
                correct: 0
            },
            {
                topic: "Ball Pressure",
                emoji: "⚽💨",
                question: "What is the official ball pressure range?",
                options: [
                    "0.6-1.1 bar (8.5-15.6 psi)",
                    "1.5-2.0 bar",
                    "0.3-0.5 bar",
                    "2.0-3.0 bar"
                ],
                correct: 0
            },
            {
                topic: "Offside Timing",
                emoji: "⚽⏰",
                question: "When is offside judged?",
                options: [
                    "When player receives ball",
                    "When player runs forward",
                    "When ball is played by teammate",
                    "When player enters opponent's half"
                ],
                correct: 0
            },
            {
                topic: "Substitution Rules",
                emoji: "⚽🔄",
                question: "Can a substituted player return to the match?",
                options: [
                    "Yes, once",
                    "Only in friendlies",
                    "No, never in most competitions",
                    "Yes, after 15 minutes"
                ],
                correct: 0
            },
            {
                topic: "Goalkeeper Rules",
                emoji: "⚽🧤",
                question: "How long can a goalkeeper hold the ball?",
                options: [
                    "Unlimited time",
                    "10 seconds",
                    "6 seconds by rule",
                    "3 seconds"
                ],
                correct: 0
            },
            {
                topic: "IFAB Laws",
                emoji: "⚽📖",
                question: "How many Laws of the Game exist?",
                options: [
                    "17 laws",
                    "20 laws",
                    "11 laws",
                    "25 laws"
                ],
                correct: 0
            },
            {
                topic: "Yellow Cards",
                emoji: "⚽🟨",
                question: "How many yellow cards result in suspension?",
                options: [
                    "Varies by competition but typically 5",
                    "3 yellows",
                    "10 yellows",
                    "7 yellows"
                ],
                correct: 1
            },
            {
                topic: "Match Ball",
                emoji: "⚽⚪",
                question: "What is the official circumference of a football?",
                options: [
                    "60-65 cm",
                    "68-70 cm (size 5)",
                    "75-80 cm",
                    "50-55 cm"
                ],
                correct: 1
            },
            {
                topic: "Penalty Area",
                emoji: "⚽📦",
                question: "What are the penalty area dimensions from goal?",
                options: [
                    "16.5 meters (18 yards)",
                    "20 meters",
                    "12 meters",
                    "25 meters"
                ],
                correct: 1
            },
            {
                topic: "Assistant Referees",
                emoji: "⚽🚩",
                question: "How many assistant referees are there?",
                options: [
                    "4 assistants",
                    "1 assistant",
                    "2 assistant referees (linesmen)",
                    "3 assistants"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Football History",
                emoji: "⚽📜",
                question: "Name three countries that have won the FIFA World Cup?",
                options: [
                    "Brazil",
                    "Germany",
                    "Argentina",
                    "Italy",
                    "France",
                    "Uruguay",
                    "England",
                    "Spain",
                ],
                correct: 0
            },
            {
                topic: "Famous Players",
                emoji: "⚽⭐",
                question: "Name three legendary football players from history?",
                options: [
                    "Pelé",
                    "Maradona",
                    "Messi",
                    "Ronaldo",
                    "Cruyff",
                    "Beckenbauer",
                    "Zidane",
                ],
                correct: 0
            },
            {
                topic: "Positions",
                emoji: "⚽🎯",
                question: "Name three defensive positions in football?",
                options: [
                    "Center back",
                    "Full back",
                    "Wing back",
                    "Sweeper",
                    "Defensive midfielder",
                ],
                correct: 0
            },
            {
                topic: "Leagues",
                emoji: "⚽🏆",
                question: "Name three major European football leagues?",
                options: [
                    "Premier League",
                    "La Liga",
                    "Serie A",
                    "Bundesliga",
                    "Ligue 1",
                ],
                correct: 0
            },
            {
                topic: "Tournaments",
                emoji: "⚽🌍",
                question: "Name three international football tournaments?",
                options: [
                    "World Cup",
                    "UEFA Euro",
                    "Copa América",
                    "African Cup",
                    "Asian Cup",
                ],
                correct: 0
            },
            {
                topic: "Football Skills",
                emoji: "⚽🎪",
                question: "Name three basic football skills?",
                options: [
                    "Dribbling",
                    "Passing",
                    "Shooting",
                    "Tackling",
                    "Heading",
                    "Control",
                ],
                correct: 0
            },
            {
                topic: "Famous Clubs",
                emoji: "⚽🏟️",
                question: "Name three historically successful football clubs?",
                options: [
                    "Real Madrid",
                    "Barcelona",
                    "Manchester United",
                    "Bayern Munich",
                    "AC Milan",
                    "Liverpool",
                ],
                correct: 0
            },
            {
                topic: "Set Pieces",
                emoji: "⚽🎯",
                question: "Name three types of set pieces in football?",
                options: [
                    "Free kick",
                    "Corner kick",
                    "Penalty kick",
                    "Throw-in",
                    "Goal kick",
                ],
                correct: 0
            },
            {
                topic: "Fouls",
                emoji: "⚽⚠️",
                question: "Name three types of fouls in football?",
                options: [
                    "Handball",
                    "Tripping",
                    "Pushing",
                    "Holding",
                    "High kick",
                    "Offside",
                ],
                correct: 0
            },
            {
                topic: "Formations",
                emoji: "⚽📊",
                question: "Name three common football formations?",
                options: [
                    "4-4-2",
                    "4-3-3",
                    "3-5-2",
                    "4-2-3-1",
                    "5-3-2",
                ],
                correct: 0
            }
        ]
    },
    2: {
        "easy": [
            {
                topic: "Court",
                emoji: "🏀🏟️",
                question: "Is basketball played on a rectangular court?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Teams",
                emoji: "🏀👥",
                question: "Are there 5 players per team on court?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Scoring",
                emoji: "🏀🎯",
                question: "Is a basket from beyond the arc worth 3 points?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Dribbling",
                emoji: "🏀⚡",
                question: "Must you dribble when moving with the ball?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Equipment",
                emoji: "🏀🥅",
                question: "Does the basket have a net attached?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Free Throws",
                emoji: "🏀🎯",
                question: "Is a free throw worth 1 point?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Violations",
                emoji: "🏀🚫",
                question: "Is double dribbling a violation?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Quarters",
                emoji: "🏀⏱️",
                question: "Is a basketball game divided into quarters?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Hoop Height",
                emoji: "🏀📏",
                question: "Is the basket hoop 10 feet high?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Ball Handling",
                emoji: "🏀✋",
                question: "Can you pass the ball to teammates?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Shot Clock",
                emoji: "🏀⏰",
                question: "How long is the NBA shot clock?",
                options: [
                    "30 seconds",
                    "24 seconds"
                ],
                correct: 0
            },
            {
                topic: "Traveling",
                emoji: "🏀👣",
                question: "What is traveling in basketball?",
                options: [
                    "Moving without dribbling",
                    "Running too fast"
                ],
                correct: 1
            },
            {
                topic: "Personal Fouls",
                emoji: "🏀⚠️",
                question: "How many personal fouls before fouling out in NBA?",
                options: [
                    "5 fouls",
                    "6 fouls"
                ],
                correct: 0
            },
            {
                topic: "Three-Point Line",
                emoji: "🏀📐",
                question: "Is the three-point line the same distance everywhere?",
                options: [
                    "No, varies by league",
                    "Yes, always same"
                ],
                correct: 0
            },
            {
                topic: "Jump Ball",
                emoji: "🏀⬆️",
                question: "When does a jump ball occur?",
                options: [
                    "Every quarter",
                    "Game start and tie-ups"
                ],
                correct: 1
            },
            {
                topic: "Substitutions",
                emoji: "🏀🔄",
                question: "Can substitutions happen during play?",
                options: [
                    "No, only during stoppages",
                    "Yes, anytime"
                ],
                correct: 1
            },
            {
                topic: "Backcourt",
                emoji: "🏀↩️",
                question: "What is a backcourt violation?",
                options: [
                    "Staying in backcourt too long",
                    "Ball returned to backcourt after crossing"
                ],
                correct: 1
            },
            {
                topic: "Assist",
                emoji: "🏀🤝",
                question: "What is an assist?",
                options: [
                    "Pass leading to made basket",
                    "Helping player up"
                ],
                correct: 1
            },
            {
                topic: "Rebound",
                emoji: "🏀🔄",
                question: "What is a rebound?",
                options: [
                    "Ball bouncing",
                    "Retrieving missed shot"
                ],
                correct: 0
            },
            {
                topic: "Technical Foul",
                emoji: "🏀📛",
                question: "What causes a technical foul?",
                options: [
                    "Unsportsmanlike conduct",
                    "Missing shots"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Lane Violation",
                emoji: "🏀⛔",
                question: "How long can you stay in the paint?",
                options: [
                    "5 seconds",
                    "3 seconds",
                    "10 seconds"
                ],
                correct: 0
            },
            {
                topic: "Goaltending",
                emoji: "🏀🚫",
                question: "What is goaltending?",
                options: [
                    "Blocking shot on downward path to basket",
                    "Defending the goal",
                    "Standing near basket"
                ],
                correct: 0
            },
            {
                topic: "Flagrant Foul",
                emoji: "🏀💥",
                question: "What makes a foul flagrant?",
                options: [
                    "Too many fouls",
                    "Excessive or violent contact",
                    "Arguing with referee"
                ],
                correct: 0
            },
            {
                topic: "And-One",
                emoji: "🏀➕",
                question: "What is an 'and-one' situation?",
                options: [
                    "Scoring while being fouled",
                    "Extra point",
                    "One player advantage"
                ],
                correct: 0
            },
            {
                topic: "Inbound Pass",
                emoji: "🏀➡️",
                question: "How long to inbound the ball?",
                options: [
                    "10 seconds",
                    "No time limit",
                    "5 seconds"
                ],
                correct: 0
            },
            {
                topic: "Bonus Situation",
                emoji: "🏀🎁",
                question: "When does bonus free throw situation begin?",
                options: [
                    "After team's 5th foul in quarter",
                    "After any foul",
                    "Never"
                ],
                correct: 1
            },
            {
                topic: "Charging",
                emoji: "🏀💨",
                question: "What is a charging foul?",
                options: [
                    "Offensive player running into set defender",
                    "Running too fast",
                    "Defensive violation"
                ],
                correct: 0
            },
            {
                topic: "Euro Step",
                emoji: "🏀🕺",
                question: "Is the Euro step legal?",
                options: [
                    "No, it's traveling",
                    "Only in Europe",
                    "Yes, within two-step rule"
                ],
                correct: 1
            },
            {
                topic: "Clear Path Foul",
                emoji: "🏀🛣️",
                question: "What is a clear path foul?",
                options: [
                    "Foul preventing obvious scoring chance",
                    "Fouling on open court",
                    "Any foul in transition"
                ],
                correct: 0
            },
            {
                topic: "Shot Clock Reset",
                emoji: "🏀🔄",
                question: "When does shot clock reset to 14 seconds?",
                options: [
                    "Never resets",
                    "Always full reset",
                    "Offensive rebound in NBA"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Court Dimensions",
                emoji: "🏀📏",
                question: "What is NBA court length?",
                options: [
                    "94 feet (28.65 meters)",
                    "100 feet",
                    "90 feet",
                    "85 feet"
                ],
                correct: 0
            },
            {
                topic: "Three-Point Distance",
                emoji: "🏀🎯",
                question: "What is NBA three-point line distance?",
                options: [
                    "22 feet",
                    "25 feet",
                    "23.75 feet (7.24m) at top",
                    "20 feet"
                ],
                correct: 0
            },
            {
                topic: "Game Duration",
                emoji: "🏀⏱️",
                question: "How long is each NBA quarter?",
                options: [
                    "15 minutes",
                    "10 minutes",
                    "12 minutes",
                    "20 minutes"
                ],
                correct: 1
            },
            {
                topic: "Restricted Area",
                emoji: "🏀⭕",
                question: "What is the restricted area arc radius?",
                options: [
                    "2 feet",
                    "4 feet (1.22m) in NBA",
                    "5 feet",
                    "3 feet"
                ],
                correct: 0
            },
            {
                topic: "Ball Specifications",
                emoji: "🏀⚪",
                question: "What is official NBA basketball circumference?",
                options: [
                    "29.5 inches (75cm)",
                    "32 inches",
                    "27 inches",
                    "35 inches"
                ],
                correct: 1
            },
            {
                topic: "Timeout Rules",
                emoji: "🏀⏸️",
                question: "How many timeouts does each NBA team get?",
                options: [
                    "7 timeouts per game",
                    "5 timeouts",
                    "10 timeouts",
                    "3 timeouts"
                ],
                correct: 1
            },
            {
                topic: "Five-Second Rule",
                emoji: "🏀5️⃣",
                question: "What is the five-second violation?",
                options: [
                    "Holding ball without action when closely guarded",
                    "Taking five seconds to shoot",
                    "Five players on court",
                    "Staying in one spot"
                ],
                correct: 1
            },
            {
                topic: "Double-Double",
                emoji: "🏀💯",
                question: "What is a double-double?",
                options: [
                    "Scoring 20 points",
                    "Two players scoring",
                    "Double digits in two statistical categories",
                    "Playing two positions"
                ],
                correct: 1
            },
            {
                topic: "Key Dimensions",
                emoji: "🏀🔑",
                question: "How wide is the NBA key (lane)?",
                options: [
                    "16 feet (4.9m)",
                    "10 feet",
                    "20 feet",
                    "12 feet"
                ],
                correct: 0
            },
            {
                topic: "Hack-a-Shaq",
                emoji: "🏀🎭",
                question: "What strategy is 'Hack-a-Shaq'?",
                options: [
                    "Defensive formation",
                    "Pick and roll",
                    "Intentionally fouling poor free throw shooter",
                    "Full court press"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "NBA Teams",
                emoji: "🏀🏆",
                question: "Name three NBA championship-winning teams?",
                options: [
                    "Lakers",
                    "Celtics",
                    "Bulls",
                    "Warriors",
                    "Spurs",
                    "Heat",
                    "Pistons",
                ],
                correct: 0
            },
            {
                topic: "Legendary Players",
                emoji: "🏀⭐",
                question: "Name three basketball legends?",
                options: [
                    "Michael Jordan",
                    "LeBron James",
                    "Magic Johnson",
                    "Kobe Bryant",
                    "Larry Bird",
                    "Kareem Abdul-Jabbar",
                ],
                correct: 0
            },
            {
                topic: "Positions",
                emoji: "🏀👤",
                question: "Name the five basketball positions?",
                options: [
                    "Point Guard",
                    "Shooting Guard",
                    "Small Forward",
                    "Power Forward",
                    "Center",
                ],
                correct: 0
            },
            {
                topic: "Skills",
                emoji: "🏀🎯",
                question: "Name three essential basketball skills?",
                options: [
                    "Shooting",
                    "Dribbling",
                    "Passing",
                    "Defense",
                    "Rebounding",
                ],
                correct: 0
            },
            {
                topic: "Shot Types",
                emoji: "🏀🎪",
                question: "Name three types of basketball shots?",
                options: [
                    "Layup",
                    "Jump shot",
                    "Hook shot",
                    "Dunk",
                    "Free throw",
                    "Three-pointer",
                ],
                correct: 0
            },
            {
                topic: "Violations",
                emoji: "🏀🚫",
                question: "Name three basketball violations?",
                options: [
                    "Traveling",
                    "Double dribble",
                    "Backcourt",
                    "Three seconds",
                    "Shot clock",
                    "Goaltending",
                ],
                correct: 0
            },
            {
                topic: "Offensive Plays",
                emoji: "🏀📋",
                question: "Name three offensive strategies in basketball?",
                options: [
                    "Pick and roll",
                    "Isolation",
                    "Fast break",
                    "Motion offense",
                    "Triangle offense",
                ],
                correct: 0
            },
            {
                topic: "Defensive Strategies",
                emoji: "🏀🛡️",
                question: "Name three defensive formations?",
                options: [
                    "Man-to-man",
                    "Zone defense",
                    "Press defense",
                    "Box-and-one",
                    "Full court press",
                ],
                correct: 0
            },
            {
                topic: "Championships",
                emoji: "🏀🏅",
                question: "Name three major basketball competitions?",
                options: [
                    "NBA Finals",
                    "FIBA World Cup",
                    "Olympics",
                    "EuroLeague",
                    "NCAA Tournament",
                ],
                correct: 0
            },
            {
                topic: "Records",
                emoji: "🏀📊",
                question: "Name three basketball statistical categories?",
                options: [
                    "Points",
                    "Rebounds",
                    "Assists",
                    "Steals",
                    "Blocks",
                    "Field goal percentage",
                ],
                correct: 0
            }
        ]
    },
    3: {
        "easy": [
            {
                topic: "Format",
                emoji: "🏏🎯",
                question: "Is cricket played with a bat and ball?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Teams",
                emoji: "🏏👥",
                question: "Does each cricket team have 11 players?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Field",
                emoji: "🏏🏟️",
                question: "Is the cricket field oval-shaped?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pitch",
                emoji: "🏏📏",
                question: "Are wickets placed at both ends of the pitch?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Scoring",
                emoji: "🏏🏃",
                question: "Do batsmen run between wickets to score runs?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Boundaries",
                emoji: "🏏⚡",
                question: "Is hitting the ball to the boundary worth 4 runs?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Dismissals",
                emoji: "🏏❌",
                question: "Can a batsman be bowled out?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Equipment",
                emoji: "🏏🧤",
                question: "Do batsmen wear protective pads?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Bowling",
                emoji: "🏏🎳",
                question: "Does the bowler deliver the ball to batsman?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Umpires",
                emoji: "🏏👨‍⚖️",
                question: "Are there umpires on the field in cricket?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Over",
                emoji: "🏏🔢",
                question: "How many balls are in one over?",
                options: [
                    "6 balls",
                    "8 balls"
                ],
                correct: 1
            },
            {
                topic: "Six Runs",
                emoji: "🏏🚀",
                question: "When do you score 6 runs?",
                options: [
                    "Running six times",
                    "Ball crosses boundary without bouncing"
                ],
                correct: 0
            },
            {
                topic: "LBW",
                emoji: "🏏🦵",
                question: "What does LBW stand for?",
                options: [
                    "Leg Before Wicket",
                    "Last Ball Win"
                ],
                correct: 1
            },
            {
                topic: "Innings",
                emoji: "🏏📊",
                question: "How many innings in a Test match per team?",
                options: [
                    "1 innings",
                    "2 innings"
                ],
                correct: 0
            },
            {
                topic: "No Ball",
                emoji: "🏏🚫",
                question: "What is a no ball?",
                options: [
                    "Illegal delivery",
                    "Missing the ball"
                ],
                correct: 0
            },
            {
                topic: "Wicket Keeper",
                emoji: "🏏🧤",
                question: "What does the wicket keeper do?",
                options: [
                    "Stands behind stumps to catch ball",
                    "Keeps score"
                ],
                correct: 1
            },
            {
                topic: "Caught Out",
                emoji: "🏏✋",
                question: "What is a caught out dismissal?",
                options: [
                    "Fielder catches ball before it bounces",
                    "Running out of energy"
                ],
                correct: 0
            },
            {
                topic: "Wide Ball",
                emoji: "🏏↔️",
                question: "What happens with a wide ball?",
                options: [
                    "Nothing happens",
                    "Extra run awarded, must be re-bowled"
                ],
                correct: 0
            },
            {
                topic: "Duck",
                emoji: "🏏🦆",
                question: "What is a 'duck' in cricket?",
                options: [
                    "Batsman out without scoring",
                    "Type of shot"
                ],
                correct: 1
            },
            {
                topic: "Maiden Over",
                emoji: "🏏⭕",
                question: "What is a maiden over?",
                options: [
                    "Over with no runs scored",
                    "First over of match"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "DRS",
                emoji: "🏏📹",
                question: "What does DRS stand for?",
                options: [
                    "Decision Review System",
                    "Direct Run Score",
                    "Delivery Rating System"
                ],
                correct: 0
            },
            {
                topic: "Follow-On",
                emoji: "🏏🔄",
                question: "What is a follow-on in Test cricket?",
                options: [
                    "Team batting again immediately if far behind",
                    "Following the captain",
                    "Next match"
                ],
                correct: 0
            },
            {
                topic: "Hat-Trick",
                emoji: "🏏🎩",
                question: "What is a hat-trick in cricket?",
                options: [
                    "Three boundaries in row",
                    "Taking three wickets in three balls",
                    "Scoring 100 runs"
                ],
                correct: 0
            },
            {
                topic: "Century",
                emoji: "🏏💯",
                question: "What is a century?",
                options: [
                    "Scoring 100 runs",
                    "100 balls bowled",
                    "100 matches played"
                ],
                correct: 1
            },
            {
                topic: "Yorker",
                emoji: "🏏⚡",
                question: "What is a yorker delivery?",
                options: [
                    "High ball",
                    "Slow ball",
                    "Ball pitched at batsman's feet"
                ],
                correct: 1
            },
            {
                topic: "Third Umpire",
                emoji: "🏏📺",
                question: "What does the third umpire do?",
                options: [
                    "Reviews decisions using video technology",
                    "Third match official",
                    "Substitute umpire"
                ],
                correct: 0
            },
            {
                topic: "Powerplay",
                emoji: "🏏⚡",
                question: "What is powerplay in limited overs?",
                options: [
                    "Strong batting",
                    "Field restrictions period",
                    "Extra runs"
                ],
                correct: 0
            },
            {
                topic: "Googly",
                emoji: "🏏🌀",
                question: "What is a googly?",
                options: [
                    "Fast delivery",
                    "Spin delivery that turns opposite direction",
                    "Straight ball"
                ],
                correct: 0
            },
            {
                topic: "Free Hit",
                emoji: "🏏🎁",
                question: "When is a free hit awarded?",
                options: [
                    "After a no ball",
                    "Every 10 overs",
                    "When captain requests"
                ],
                correct: 0
            },
            {
                topic: "Declaration",
                emoji: "🏏📢",
                question: "What is an innings declaration?",
                options: [
                    "Captain ends batting voluntarily",
                    "End of all wickets",
                    "Umpire's call"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Pitch Length",
                emoji: "🏏📏",
                question: "What is the length of a cricket pitch?",
                options: [
                    "22 yards (20.12 meters)",
                    "20 yards",
                    "25 yards",
                    "18 yards"
                ],
                correct: 0
            },
            {
                topic: "Test Match Duration",
                emoji: "🏏⏰",
                question: "How many days is a Test match?",
                options: [
                    "3 days",
                    "5 days",
                    "7 days",
                    "2 days"
                ],
                correct: 1
            },
            {
                topic: "T20 Overs",
                emoji: "🏏🔢",
                question: "How many overs per innings in T20?",
                options: [
                    "20 overs",
                    "50 overs",
                    "10 overs",
                    "30 overs"
                ],
                correct: 0
            },
            {
                topic: "Boundary Rope",
                emoji: "🏏🏟️",
                question: "What is typical boundary distance?",
                options: [
                    "50-60 meters",
                    "100 meters",
                    "60-90 meters depending on ground",
                    "30-40 meters"
                ],
                correct: 1
            },
            {
                topic: "Ball Weight",
                emoji: "🏏⚖️",
                question: "What is cricket ball weight?",
                options: [
                    "155.9 to 163 grams",
                    "200 grams",
                    "100 grams",
                    "250 grams"
                ],
                correct: 0
            },
            {
                topic: "ODI Overs",
                emoji: "🏏🎯",
                question: "How many overs in One Day International?",
                options: [
                    "40 overs",
                    "60 overs",
                    "50 overs per side",
                    "45 overs"
                ],
                correct: 1
            },
            {
                topic: "Fielding Positions",
                emoji: "🏏🗺️",
                question: "How many fielding positions are there?",
                options: [
                    "Unlimited positions",
                    "20 positions",
                    "50+ named positions",
                    "10 positions"
                ],
                correct: 0
            },
            {
                topic: "Duckworth-Lewis",
                emoji: "🏏📊",
                question: "What is DLS method?",
                options: [
                    "Batting technique",
                    "Bowling strategy",
                    "Rain-affected match calculation",
                    "Scoring system"
                ],
                correct: 1
            },
            {
                topic: "Stumps Height",
                emoji: "🏏📐",
                question: "What is the height of stumps?",
                options: [
                    "30 inches",
                    "28 inches (71.12 cm)",
                    "25 inches",
                    "32 inches"
                ],
                correct: 0
            },
            {
                topic: "Super Over",
                emoji: "🏏🔥",
                question: "When is a Super Over played?",
                options: [
                    "Every match",
                    "Random selection",
                    "Tie-breaker in limited overs",
                    "Never"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Cricket Formats",
                emoji: "🏏📋",
                question: "Name three formats of cricket?",
                options: [
                    "Test cricket",
                    "One Day International (ODI)",
                    "Twenty20 (T20)",
                ],
                correct: 0
            },
            {
                topic: "Dismissal Types",
                emoji: "🏏❌",
                question: "Name three ways to get out in cricket?",
                options: [
                    "Bowled",
                    "Caught",
                    "LBW",
                    "Run out",
                    "Stumped",
                    "Hit wicket",
                ],
                correct: 0
            },
            {
                topic: "Cricket Nations",
                emoji: "🏏🌍",
                question: "Name three Test-playing nations?",
                options: [
                    "India",
                    "England",
                    "Australia",
                    "Pakistan",
                    "South Africa",
                    "New Zealand",
                    "West Indies",
                ],
                correct: 0
            },
            {
                topic: "Bowling Types",
                emoji: "🏏🎳",
                question: "Name three types of bowling?",
                options: [
                    "Fast bowling",
                    "Spin bowling",
                    "Medium pace",
                    "Swing bowling",
                    "Seam bowling",
                ],
                correct: 0
            },
            {
                topic: "Cricket Shots",
                emoji: "🏏🎯",
                question: "Name three batting shots?",
                options: [
                    "Drive",
                    "Cut",
                    "Pull",
                    "Hook",
                    "Sweep",
                    "Cover drive",
                ],
                correct: 0
            },
            {
                topic: "Fielding Positions",
                emoji: "🏏🗺️",
                question: "Name three fielding positions?",
                options: [
                    "Slip",
                    "Mid-off",
                    "Point",
                    "Cover",
                    "Fine leg",
                    "Square leg",
                ],
                correct: 0
            },
            {
                topic: "Tournaments",
                emoji: "🏏🏆",
                question: "Name three major cricket tournaments?",
                options: [
                    "World Cup",
                    "T20 World Cup",
                    "Champions Trophy",
                    "IPL",
                    "Ashes",
                ],
                correct: 0
            },
            {
                topic: "Legendary Players",
                emoji: "🏏⭐",
                question: "Name three cricket legends?",
                options: [
                    "Sachin Tendulkar",
                    "Don Bradman",
                    "Virat Kohli",
                    "Brian Lara",
                    "Shane Warne",
                ],
                correct: 0
            },
            {
                topic: "Cricket Terms",
                emoji: "🏏📖",
                question: "Name three cricket terminology terms?",
                options: [
                    "Boundary",
                    "Wicket",
                    "Over",
                    "Innings",
                    "Duck",
                    "Century",
                ],
                correct: 0
            },
            {
                topic: "Ball Types",
                emoji: "🏏⚪",
                question: "Name three delivery variations?",
                options: [
                    "Bouncer",
                    "Yorker",
                    "Slower ball",
                    "Googly",
                    "Doosra",
                    "Off-break",
                ],
                correct: 0
            }
        ]
    },
    4: {
        "easy": [
            {
                topic: "Court",
                emoji: "🎾🏟️",
                question: "Is tennis played on different court surfaces?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Players",
                emoji: "🎾👤",
                question: "Can tennis be played singles or doubles?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Equipment",
                emoji: "🎾🎯",
                question: "Is a tennis racket used to hit the ball?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Net",
                emoji: "🎾🕸️",
                question: "Must the ball go over the net?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Scoring",
                emoji: "🎾🔢",
                question: "Does tennis have unique scoring system?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Service",
                emoji: "🎾🎯",
                question: "Does the serve start each point?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Lines",
                emoji: "🎾📏",
                question: "Are there boundary lines on a tennis court?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Grand Slams",
                emoji: "🎾🏆",
                question: "Are there four Grand Slam tournaments?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Rally",
                emoji: "🎾🔄",
                question: "Do players hit the ball back and forth?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Sets",
                emoji: "🎾📊",
                question: "Is a tennis match divided into sets?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Love Score",
                emoji: "🎾💝",
                question: "What does 'love' mean in tennis?",
                options: [
                    "Zero points",
                    "Winning score"
                ],
                correct: 0
            },
            {
                topic: "Deuce",
                emoji: "🎾⚖️",
                question: "What is deuce?",
                options: [
                    "First point",
                    "Score tied at 40-40"
                ],
                correct: 1
            },
            {
                topic: "Ace",
                emoji: "🎾⚡",
                question: "What is an ace in tennis?",
                options: [
                    "Serve opponent cannot return",
                    "Best player"
                ],
                correct: 1
            },
            {
                topic: "Let Serve",
                emoji: "🎾🔄",
                question: "What happens on a let serve?",
                options: [
                    "Lose the point",
                    "Serve is replayed"
                ],
                correct: 1
            },
            {
                topic: "Tiebreak",
                emoji: "🎾🎲",
                question: "When is a tiebreak played?",
                options: [
                    "Set tied at 6-6",
                    "Every set"
                ],
                correct: 0
            },
            {
                topic: "Double Fault",
                emoji: "🎾❌",
                question: "What is a double fault?",
                options: [
                    "Two players fault",
                    "Missing both service attempts"
                ],
                correct: 0
            },
            {
                topic: "Advantage",
                emoji: "🎾➕",
                question: "What does advantage mean?",
                options: [
                    "Point after deuce",
                    "Starting score"
                ],
                correct: 1
            },
            {
                topic: "Break Point",
                emoji: "🎾💥",
                question: "What is a break point?",
                options: [
                    "Rest period",
                    "Opportunity to win server's game"
                ],
                correct: 1
            },
            {
                topic: "Volley",
                emoji: "🎾🏃",
                question: "What is a volley?",
                options: [
                    "Hitting ball before it bounces",
                    "Serving technique"
                ],
                correct: 0
            },
            {
                topic: "Baseline",
                emoji: "🎾📐",
                question: "What is the baseline?",
                options: [
                    "Net line",
                    "Back line of court"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Hawkeye",
                emoji: "🎾👁️",
                question: "What is Hawkeye technology?",
                options: [
                    "Ball tracking system for challenges",
                    "Camera type",
                    "Player nickname"
                ],
                correct: 1
            },
            {
                topic: "Service Box",
                emoji: "🎾📦",
                question: "Where must serve land?",
                options: [
                    "Anywhere in court",
                    "Diagonal service box",
                    "Straight ahead"
                ],
                correct: 0
            },
            {
                topic: "Grand Slam Surfaces",
                emoji: "🎾🌍",
                question: "Which Grand Slam is on clay?",
                options: [
                    "French Open",
                    "Wimbledon",
                    "US Open"
                ],
                correct: 0
            },
            {
                topic: "Golden Set",
                emoji: "🎾🥇",
                question: "What is a golden set?",
                options: [
                    "Winning set 6-0 without losing point",
                    "Final set",
                    "First set"
                ],
                correct: 1
            },
            {
                topic: "Drop Shot",
                emoji: "🎾💧",
                question: "What is a drop shot?",
                options: [
                    "Missing the ball",
                    "Soft shot that barely clears net",
                    "Powerful smash"
                ],
                correct: 0
            },
            {
                topic: "Foot Fault",
                emoji: "🎾👣",
                question: "What causes a foot fault?",
                options: [
                    "Stepping on/over baseline when serving",
                    "Wrong shoes",
                    "Tripping"
                ],
                correct: 0
            },
            {
                topic: "Match Point",
                emoji: "🎾🎯",
                question: "What is match point?",
                options: [
                    "Starting point",
                    "Middle of match",
                    "Point to win entire match"
                ],
                correct: 0
            },
            {
                topic: "Overhead Smash",
                emoji: "🎾💪",
                question: "When is overhead smash typically used?",
                options: [
                    "Against high ball or lob",
                    "For serving",
                    "At net"
                ],
                correct: 0
            },
            {
                topic: "Fifth Set Rules",
                emoji: "🎾5️⃣",
                question: "What's different about fifth set at Wimbledon?",
                options: [
                    "Shorter set",
                    "No tiebreak (before 2019 rule change)",
                    "Double points"
                ],
                correct: 1
            },
            {
                topic: "ATP and WTA",
                emoji: "🎾🌟",
                question: "What do ATP and WTA represent?",
                options: [
                    "Men's and Women's professional tours",
                    "Tournament types",
                    "Ranking systems"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Court Length",
                emoji: "🎾📏",
                question: "What is the length of tennis court?",
                options: [
                    "78 feet (23.77 meters)",
                    "90 feet",
                    "70 feet",
                    "85 feet"
                ],
                correct: 0
            },
            {
                topic: "Service Speed",
                emoji: "🎾⚡",
                question: "What is fastest recorded serve?",
                options: [
                    "200 km/h",
                    "163.7 mph (263.4 km/h) by Sam Groth",
                    "150 mph",
                    "180 mph"
                ],
                correct: 0
            },
            {
                topic: "Games to Win Set",
                emoji: "🎾🎯",
                question: "How many games needed to win a set?",
                options: [
                    "10 games",
                    "5 games",
                    "6 games with 2-game lead",
                    "8 games"
                ],
                correct: 1
            },
            {
                topic: "Net Height",
                emoji: "🎾📐",
                question: "What is net height at center?",
                options: [
                    "4 feet",
                    "2 feet 6 inches",
                    "3 feet (0.914 meters)",
                    "3 feet 6 inches"
                ],
                correct: 0
            },
            {
                topic: "Best of Five",
                emoji: "🎾5️⃣",
                question: "Where are best of five set matches?",
                options: [
                    "All tournaments",
                    "Never played",
                    "Men's Grand Slams",
                    "Women's Grand Slams"
                ],
                correct: 0
            },
            {
                topic: "Ball Changes",
                emoji: "🎾🔄",
                question: "How often are balls changed?",
                options: [
                    "Every hour",
                    "Every game",
                    "Every 7-9 games typically",
                    "Once per set"
                ],
                correct: 0
            },
            {
                topic: "Challenge System",
                emoji: "🎾🚩",
                question: "How many challenges per set?",
                options: [
                    "Unlimited",
                    "1 challenge",
                    "3 challenges (plus 1 in tiebreak)",
                    "5 challenges"
                ],
                correct: 0
            },
            {
                topic: "Ball Specifications",
                emoji: "🎾⚪",
                question: "What is tennis ball diameter?",
                options: [
                    "2.57 to 2.70 inches (6.54-6.86 cm)",
                    "3 inches",
                    "2 inches",
                    "4 inches"
                ],
                correct: 0
            },
            {
                topic: "Career Grand Slam",
                emoji: "🎾🏆",
                question: "What is Career Grand Slam?",
                options: [
                    "Winning 4 Grand Slams in career",
                    "10 tournament wins",
                    "Winning one slam",
                    "Playing all slams"
                ],
                correct: 0
            },
            {
                topic: "Longest Match",
                emoji: "🎾⏰",
                question: "Longest tennis match duration?",
                options: [
                    "11 hours 5 minutes (Isner vs Mahut, 2010)",
                    "8 hours",
                    "6 hours",
                    "15 hours"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Grand Slams",
                emoji: "🎾🏆",
                question: "Name the four Grand Slam tournaments?",
                options: [
                    "Australian Open",
                    "French Open",
                    "Wimbledon",
                    "US Open",
                ],
                correct: 0
            },
            {
                topic: "Court Surfaces",
                emoji: "🎾🏟️",
                question: "Name three types of tennis court surfaces?",
                options: [
                    "Hard court",
                    "Clay court",
                    "Grass court",
                    "Carpet",
                ],
                correct: 0
            },
            {
                topic: "Legendary Players",
                emoji: "🎾⭐",
                question: "Name three tennis legends?",
                options: [
                    "Roger Federer",
                    "Rafael Nadal",
                    "Serena Williams",
                    "Novak Djokovic",
                    "Steffi Graf",
                ],
                correct: 0
            },
            {
                topic: "Tennis Strokes",
                emoji: "🎾🎯",
                question: "Name three tennis shot types?",
                options: [
                    "Forehand",
                    "Backhand",
                    "Serve",
                    "Volley",
                    "Smash",
                    "Lob",
                ],
                correct: 0
            },
            {
                topic: "Scoring Terms",
                emoji: "🎾🔢",
                question: "Name three tennis scoring terms?",
                options: [
                    "Love",
                    "Deuce",
                    "Advantage",
                    "Break point",
                    "Match point",
                ],
                correct: 0
            },
            {
                topic: "Tennis Strategies",
                emoji: "🎾🧠",
                question: "Name three tennis playing strategies?",
                options: [
                    "Serve and volley",
                    "Baseline play",
                    "All-court game",
                    "Counter-punching",
                ],
                correct: 0
            },
            {
                topic: "Tournament Types",
                emoji: "🎾🏅",
                question: "Name three professional tennis tournament categories?",
                options: [
                    "Grand Slam",
                    "Masters 1000",
                    "ATP/WTA 500",
                    "Olympics",
                    "Davis Cup",
                ],
                correct: 0
            },
            {
                topic: "Equipment",
                emoji: "🎾🎾",
                question: "Name three essential tennis equipment items?",
                options: [
                    "Racket",
                    "Balls",
                    "Tennis shoes",
                    "Wristbands",
                    "Strings",
                ],
                correct: 0
            },
            {
                topic: "Tennis Rules",
                emoji: "🎾⚖️",
                question: "Name three tennis rule violations?",
                options: [
                    "Foot fault",
                    "Double fault",
                    "Touching net",
                    "Hindrance",
                    "Time violation",
                ],
                correct: 0
            },
            {
                topic: "Match Records",
                emoji: "🎾📊",
                question: "Name three tennis statistics tracked?",
                options: [
                    "Aces",
                    "Double faults",
                    "Winners",
                    "Unforced errors",
                    "Break points",
                ],
                correct: 0
            }
        ]
    },
    5: {
        "easy": [
            {
                topic: "Swimming Basics",
                emoji: "🏊‍♂️💧",
                question: "Is swimming done in water?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Pool",
                emoji: "🏊‍♀️🏊",
                question: "Are swimming pools divided into lanes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Strokes",
                emoji: "🏊‍♂️🌊",
                question: "Are there different swimming strokes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Equipment",
                emoji: "🏊‍♀️👓",
                question: "Do swimmers wear goggles?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Races",
                emoji: "🏊‍♂️🏁",
                question: "Do swimmers race against each other?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Olympics",
                emoji: "🏊‍♀️🥇",
                question: "Is swimming an Olympic sport?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Turns",
                emoji: "🏊‍♂️🔄",
                question: "Do swimmers turn at the wall?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Caps",
                emoji: "🏊‍♀️🎩",
                question: "Do competitive swimmers wear swim caps?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Start",
                emoji: "🏊‍♂️🚀",
                question: "Do swimmers dive from starting blocks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Timing",
                emoji: "🏊‍♀️⏱️",
                question: "Is swimming timed in races?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Freestyle",
                emoji: "🏊‍♂️🌊",
                question: "What is freestyle swimming also called?",
                options: [
                    "Front crawl",
                    "Back swim"
                ],
                correct: 1
            },
            {
                topic: "Butterfly",
                emoji: "🏊‍♀️🦋",
                question: "What stroke uses dolphin kick?",
                options: [
                    "Breaststroke",
                    "Butterfly"
                ],
                correct: 0
            },
            {
                topic: "Backstroke",
                emoji: "🏊‍♂️⬅️",
                question: "Which stroke is swum on your back?",
                options: [
                    "Backstroke",
                    "Freestyle"
                ],
                correct: 1
            },
            {
                topic: "Medley",
                emoji: "🏊‍♀️🔀",
                question: "What is individual medley?",
                options: [
                    "One stroke only",
                    "All four strokes in one race"
                ],
                correct: 1
            },
            {
                topic: "False Start",
                emoji: "🏊‍♂️🚫",
                question: "What happens with a false start?",
                options: [
                    "Swimmer is disqualified",
                    "Nothing happens"
                ],
                correct: 1
            },
            {
                topic: "Relay",
                emoji: "🏊‍♀️👥",
                question: "How many swimmers in a relay team?",
                options: [
                    "2 swimmers",
                    "4 swimmers"
                ],
                correct: 0
            },
            {
                topic: "Touch Pad",
                emoji: "🏊‍♂️✋",
                question: "What records finish time?",
                options: [
                    "Electronic touch pad",
                    "Manual stopwatch"
                ],
                correct: 0
            },
            {
                topic: "Flip Turn",
                emoji: "🏊‍♀️🔄",
                question: "What is a flip turn?",
                options: [
                    "Spinning jump",
                    "Underwater somersault at wall"
                ],
                correct: 0
            },
            {
                topic: "Breaststroke",
                emoji: "🏊‍♂️🐸",
                question: "Which stroke resembles a frog kick?",
                options: [
                    "Breaststroke",
                    "Butterfly"
                ],
                correct: 0
            },
            {
                topic: "Disqualification",
                emoji: "🏊‍♀️❌",
                question: "What causes DQ in swimming?",
                options: [
                    "Swimming slowly",
                    "Rule violations like illegal turns"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "IM Order",
                emoji: "🏊‍♂️📋",
                question: "What is correct IM stroke order?",
                options: [
                    "Butterfly, Backstroke, Breaststroke, Freestyle",
                    "Freestyle, Butterfly, Backstroke, Breaststroke",
                    "Any order"
                ],
                correct: 1
            },
            {
                topic: "Streamline",
                emoji: "🏊‍♀️➡️",
                question: "What is streamline position?",
                options: [
                    "Arms extended overhead, body straight",
                    "Arms at sides",
                    "Any position"
                ],
                correct: 0
            },
            {
                topic: "Breathing Technique",
                emoji: "🏊‍♂️💨",
                question: "In freestyle, when do you breathe?",
                options: [
                    "Anytime",
                    "Turning head to side during stroke",
                    "Lifting head forward"
                ],
                correct: 0
            },
            {
                topic: "Open Turn",
                emoji: "🏊‍♀️🔄",
                question: "Which strokes use open turns?",
                options: [
                    "Breaststroke and Butterfly",
                    "All strokes",
                    "None"
                ],
                correct: 1
            },
            {
                topic: "Underwaters",
                emoji: "🏊‍♂️🌊",
                question: "How far can you swim underwater after start/turn?",
                options: [
                    "No limit",
                    "5 meters",
                    "15 meters maximum"
                ],
                correct: 0
            },
            {
                topic: "Two-Hand Touch",
                emoji: "🏊‍♀️✋✋",
                question: "Which strokes require two-hand touch?",
                options: [
                    "Breaststroke and Butterfly",
                    "All strokes",
                    "Freestyle only"
                ],
                correct: 0
            },
            {
                topic: "Negative Split",
                emoji: "🏊‍♂️📈",
                question: "What is negative splitting?",
                options: [
                    "Swimming slower",
                    "Swimming second half faster than first",
                    "Bad technique"
                ],
                correct: 0
            },
            {
                topic: "Dolphin Kick",
                emoji: "🏊‍♀️🐬",
                question: "Where is dolphin kick allowed?",
                options: [
                    "Only butterfly and underwater phases",
                    "Never allowed",
                    "All strokes anytime"
                ],
                correct: 0
            },
            {
                topic: "Taper",
                emoji: "🏊‍♂️📉",
                question: "What is tapering in swimming?",
                options: [
                    "Reducing training before competition",
                    "Increasing training",
                    "Changing strokes"
                ],
                correct: 1
            },
            {
                topic: "Shaving",
                emoji: "🏊‍♀️✂️",
                question: "Why do swimmers shave body hair?",
                options: [
                    "Fashion",
                    "Reduce drag and feel water better",
                    "Required by rules"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Olympic Pool",
                emoji: "🏊‍♂️📏",
                question: "What is Olympic pool length?",
                options: [
                    "50 meters (long course)",
                    "25 meters",
                    "100 meters",
                    "75 meters"
                ],
                correct: 0
            },
            {
                topic: "Pool Depth",
                emoji: "🏊‍♀️📐",
                question: "What is minimum Olympic pool depth?",
                options: [
                    "1 meter",
                    "3 meters",
                    "2 meters minimum",
                    "5 meters"
                ],
                correct: 1
            },
            {
                topic: "Lane Width",
                emoji: "🏊‍♂️↔️",
                question: "How wide is each lane?",
                options: [
                    "2.5 meters",
                    "3 meters",
                    "1.5 meters",
                    "4 meters"
                ],
                correct: 0
            },
            {
                topic: "World Records",
                emoji: "🏊‍♀️🏆",
                question: "Where are world records set?",
                options: [
                    "Any pool",
                    "Only 50m pools for long course records",
                    "25m pools only",
                    "No specific requirement"
                ],
                correct: 1
            },
            {
                topic: "Water Temperature",
                emoji: "🏊‍♂️🌡️",
                question: "What is Olympic pool water temperature?",
                options: [
                    "25-28°C (77-82°F)",
                    "30-35°C",
                    "20-22°C",
                    "15-20°C"
                ],
                correct: 0
            },
            {
                topic: "Fastest Stroke",
                emoji: "🏊‍♀️⚡",
                question: "Which is the fastest swimming stroke?",
                options: [
                    "Breaststroke",
                    "Butterfly",
                    "Freestyle (front crawl)",
                    "Backstroke"
                ],
                correct: 1
            },
            {
                topic: "SCM vs LCM",
                emoji: "🏊‍♂️📊",
                question: "What is difference between SCM and LCM?",
                options: [
                    "Short Course Meters (25m) vs Long Course Meters (50m)",
                    "No difference",
                    "Different strokes",
                    "Different rules"
                ],
                correct: 1
            },
            {
                topic: "Reaction Time",
                emoji: "🏊‍♀️⏱️",
                question: "What is typical elite swimmer reaction time?",
                options: [
                    "0.6-0.8 seconds",
                    "2 seconds",
                    "0.1 seconds",
                    "1.5 seconds"
                ],
                correct: 0
            },
            {
                topic: "Tech Suits",
                emoji: "🏊‍♂️👔",
                question: "When were full-body suits banned?",
                options: [
                    "Never banned",
                    "Always banned",
                    "After 2009 (new rules 2010)",
                    "1990s"
                ],
                correct: 0
            },
            {
                topic: "Training Volume",
                emoji: "🏊‍♀️📈",
                question: "What is typical elite swimmer weekly distance?",
                options: [
                    "5-10 km",
                    "50-80 km per week",
                    "100 km",
                    "1-2 km"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Swimming Strokes",
                emoji: "🏊‍♂️🌊",
                question: "Name the four competitive swimming strokes?",
                options: [
                    "Freestyle (Front Crawl)",
                    "Backstroke",
                    "Breaststroke",
                    "Butterfly",
                ],
                correct: 0
            },
            {
                topic: "Swimming Events",
                emoji: "🏊‍♀️🏁",
                question: "Name three Olympic swimming distances?",
                options: [
                    "50m",
                    "100m",
                    "200m",
                    "400m",
                    "800m",
                    "1500m",
                ],
                correct: 0
            },
            {
                topic: "Swimming Legends",
                emoji: "🏊‍♂️⭐",
                question: "Name three legendary swimmers?",
                options: [
                    "Michael Phelps",
                    "Katie Ledecky",
                    "Ian Thorpe",
                    "Mark Spitz",
                    "Caeleb Dressel",
                ],
                correct: 0
            },
            {
                topic: "Swimming Techniques",
                emoji: "🏊‍♀️🎯",
                question: "Name three swimming technique elements?",
                options: [
                    "Breathing",
                    "Kick",
                    "Pull",
                    "Body position",
                    "Streamline",
                    "Turns",
                ],
                correct: 0
            },
            {
                topic: "Swimming Equipment",
                emoji: "🏊‍♂️🎽",
                question: "Name three swimming training equipment?",
                options: [
                    "Kickboard",
                    "Pull buoy",
                    "Fins",
                    "Paddles",
                    "Snorkel",
                ],
                correct: 0
            },
            {
                topic: "Race Types",
                emoji: "🏊‍♀️🏆",
                question: "Name three types of swimming races?",
                options: [
                    "Individual events",
                    "Relay races",
                    "Medley events",
                    "Sprint",
                    "Distance",
                ],
                correct: 0
            },
            {
                topic: "Swimming Starts",
                emoji: "🏊‍♂️🚀",
                question: "Name three components of racing start?",
                options: [
                    "Reaction time",
                    "Dive entry",
                    "Streamline",
                    "Underwater kick",
                    "Breakout",
                ],
                correct: 0
            },
            {
                topic: "Training Methods",
                emoji: "🏊‍♀️💪",
                question: "Name three swimming training types?",
                options: [
                    "Endurance sets",
                    "Sprint sets",
                    "Technique drills",
                    "Strength training",
                ],
                correct: 0
            },
            {
                topic: "Swimming Rules",
                emoji: "🏊‍♂️⚖️",
                question: "Name three swimming rule violations?",
                options: [
                    "False start",
                    "Illegal turn",
                    "Wrong stroke",
                    "Not touching wall",
                    "Stepping on bottom",
                ],
                correct: 0
            },
            {
                topic: "Major Competitions",
                emoji: "🏊‍♀️🌍",
                question: "Name three major swimming competitions?",
                options: [
                    "Olympics",
                    "World Championships",
                    "World Cup",
                    "Commonwealth Games",
                    "Pan Pacific",
                ],
                correct: 0
            }
        ]
    }
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['sports'] = sportsQuestions;
}
