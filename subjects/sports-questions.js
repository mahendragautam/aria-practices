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

options: [
    "Forward pass",
    "Knock-on",
    "Offside",
    "High tackle",
    "Collapsing scrum",
],
correct: 0
            },
            {
                topic: "Tournaments",
                emoji: "🏉🏆",
                question: "Name three major rugby tournaments?",
                options: [
                    "Rugby World Cup",
                    "Six Nations",
                    "Rugby Championship",
                    "British & Irish Lions",
                ],
                correct: 0
            },
            {
                topic: "Skills",
                emoji: "🏉💪",
                question: "Name three rugby skills?",
                options: [
                    "Passing",
                    "Tackling",
                    "Kicking",
                    "Rucking",
                    "Scrummaging",
                    "Catching",
                ],
                correct: 0
            },
            {
                topic: "Ball Handling",
                emoji: "🏉✋",
                question: "Name three ball-carrying techniques?",
                options: [
                    "Two hands carry",
                    "One arm carry",
                    "Fend-off",
                    "Side-step",
                    "Spin pass",
                ],
                correct: 0
            }
        ]
    },
    


 * Sports Quiz Questions - Chapters 6-20
 * ==================================================
 * Type: JavaScript
 * Format: Question Bank with Multiple Difficulty Levels
 *
 * COPY ALL CODE BELOW
 */

const sportsQuestionsExtended = {
    6: {
        easy: [
            {
                topic: "Golf Basics",
                emoji: "⛳🏌️",
                question: "Is golf played on a course with 18 holes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Equipment",
                emoji: "⛳🏑",
                question: "Do golfers use clubs to hit the ball?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Scoring",
                emoji: "⛳📊",
                question: "Is lower score better in golf?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Ball",
                emoji: "⛳⚪",
                question: "Are golf balls small and white?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tee",
                emoji: "⛳📍",
                question: "Does a tee hold the ball off the ground?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Greens",
                emoji: "⛳🟢",
                question: "Is the green where the hole is located?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Putting",
                emoji: "⛳🎯",
                question: "Do golfers putt on the green?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Tournaments",
                emoji: "⛳🏆",
                question: "Are there professional golf tournaments?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Par",
                emoji: "⛳🔢",
                question: "Does each hole have a par score?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Caddie",
                emoji: "⛳👤",
                question: "Does a caddie carry golfer's clubs?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Birdie",
                emoji: "⛳🐦",
                question: "What is a birdie in golf?",
                options: [
                    "One stroke under par",
                    "Two strokes over par"
                ],
                correct: 0
            },
            {
                topic: "Bogey",
                emoji: "⛳➕",
                question: "What is a bogey?",
                options: [
                    "Hole in one",
                    "One stroke over par"
                ],
                correct: 0
            },
            {
                topic: "Driver",
                emoji: "⛳🏌️",
                question: "What is a driver used for?",
                options: [
                    "Long distance tee shots",
                    "Short putts"
                ],
                correct: 1
            },
            {
                topic: "Fairway",
                emoji: "⛳🟩",
                question: "What is the fairway?",
                options: [
                    "Rough grass area",
                    "Short grass between tee and green"
                ],
                correct: 1
            },
            {
                topic: "Bunker",
                emoji: "⛳🏖️",
                question: "What is a bunker?",
                options: [
                    "Sand trap hazard",
                    "Water hazard"
                ],
                correct: 1
            },
            {
                topic: "Eagle",
                emoji: "⛳🦅",
                question: "What is an eagle?",
                options: [
                    "Par score",
                    "Two strokes under par"
                ],
                correct: 1
            },
            {
                topic: "Handicap",
                emoji: "⛳📉",
                question: "What does handicap represent?",
                options: [
                    "Player's skill level adjustment",
                    "Number of clubs"
                ],
                correct: 1
            },
            {
                topic: "Mulligan",
                emoji: "⛳🔄",
                question: "What is a mulligan?",
                options: [
                    "Type of club",
                    "Do-over shot (casual play)"
                ],
                correct: 0
            },
            {
                topic: "Iron",
                emoji: "⛳🔨",
                question: "What are irons used for?",
                options: [
                    "Medium distance shots",
                    "Putting only"
                ],
                correct: 0
            },
            {
                topic: "Slice",
                emoji: "⛳↗️",
                question: "What is a slice?",
                options: [
                    "Perfect shot",
                    "Ball curves right (for right-hander)"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Albatross",
                emoji: "⛳🦅",
                question: "What is an albatross?",
                options: [
                    "Three strokes under par",
                    "One under par",
                    "Hole in one"
                ],
                correct: 1
            },
            {
                topic: "Links Course",
                emoji: "⛳🏖️",
                question: "What defines a links course?",
                options: [
                    "Mountain course",
                    "Seaside course with sandy soil",
                    "Forest course"
                ],
                correct: 1
            },
            {
                topic: "Stableford",
                emoji: "⛳📊",
                question: "What is Stableford scoring?",
                options: [
                    "Points based system instead of strokes",
                    "Traditional stroke play",
                    "Team format"
                ],
                correct: 1
            },
            {
                topic: "Match Play",
                emoji: "⛳🤝",
                question: "What is match play?",
                options: [
                    "Total strokes count",
                    "Head-to-head, hole by hole",
                    "Team competition"
                ],
                correct: 1
            },
            {
                topic: "Yips",
                emoji: "⛳😰",
                question: "What are the yips?",
                options: [
                    "Nervous putting condition",
                    "Perfect swing",
                    "Type of club"
                ],
                correct: 0
            },
            {
                topic: "Loft",
                emoji: "⛳📐",
                question: "What is club loft?",
                options: [
                    "Club weight",
                    "Angle of clubface",
                    "Club length"
                ],
                correct: 0
            },
            {
                topic: "Dogleg",
                emoji: "⛳🔀",
                question: "What is a dogleg hole?",
                options: [
                    "Hole that curves left or right",
                    "Straight hole",
                    "Uphill hole"
                ],
                correct: 1
            },
            {
                topic: "Scratch Golfer",
                emoji: "⛳⭐",
                question: "What is a scratch golfer?",
                options: [
                    "Beginner",
                    "Zero handicap player",
                    "Professional only"
                ],
                correct: 0
            },
            {
                topic: "Shank",
                emoji: "⛳❌",
                question: "What is a shank?",
                options: [
                    "Ball hit off hosel, goes right",
                    "Perfect shot",
                    "Long drive"
                ],
                correct: 1
            },
            {
                topic: "Gimme",
                emoji: "⛳✅",
                question: "What is a gimme?",
                options: [
                    "Long putt",
                    "Short putt conceded (casual play)",
                    "Penalty stroke"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Ball Diameter",
                emoji: "⛳⚪",
                question: "What is regulation golf ball diameter?",
                options: [
                    "1.68 inches (42.67mm) minimum",
                    "2 inches",
                    "1 inch",
                    "3 inches"
                ],
                correct: 1
            },
            {
                topic: "Club Limit",
                emoji: "⛳🎒",
                question: "Maximum clubs allowed in bag?",
                options: [
                    "10 clubs",
                    "20 clubs",
                    "14 clubs",
                    "Unlimited"
                ],
                correct: 1
            },
            {
                topic: "Cup Size",
                emoji: "⛳🕳️",
                question: "What is diameter of golf hole?",
                options: [
                    "4.25 inches (108mm)",
                    "6 inches",
                    "3 inches",
                    "5 inches"
                ],
                correct: 1
            },
            {
                topic: "Par 72",
                emoji: "⛳🔢",
                question: "What is typical 18-hole par?",
                options: [
                    "Par 60",
                    "Par 72 (varies 70-72)",
                    "Par 90",
                    "Par 100"
                ],
                correct: 1
            },
            {
                topic: "Majors",
                emoji: "⛳🏆",
                question: "How many men's major championships?",
                options: [
                    "2 majors",
                    "6 majors",
                    "4 majors annually",
                    "10 majors"
                ],
                correct: 0
            },
            {
                topic: "Swing Speed",
                emoji: "⛳💨",
                question: "What is PGA Tour average driver swing speed?",
                options: [
                    "113-115 mph",
                    "80 mph",
                    "150 mph",
                    "90 mph"
                ],
                correct: 1
            },
            {
                topic: "Green Speed",
                emoji: "⛳⚡",
                question: "What measures green speed?",
                options: [
                    "No measurement",
                    "Ruler",
                    "Stimpmeter (feet ball rolls)",
                    "Timer"
                ],
                correct: 1
            },
            {
                topic: "Course Rating",
                emoji: "⛳📊",
                question: "What is course rating?",
                options: [
                    "Difficulty for scratch golfer",
                    "Customer reviews",
                    "Number of holes",
                    "Green fees"
                ],
                correct: 1
            },
            {
                topic: "Ball Speed",
                emoji: "⛳🚀",
                question: "What is typical pro driver ball speed?",
                options: [
                    "100 mph",
                    "170-180 mph",
                    "200 mph",
                    "50 mph"
                ],
                correct: 1
            },
            {
                topic: "Ryder Cup",
                emoji: "⛳🌍",
                question: "How often is Ryder Cup played?",
                options: [
                    "Every year",
                    "Every 5 years",
                    "Every 2 years",
                    "Every 10 years"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Golf Clubs",
                emoji: "⛳🏑",
                question: "Name three types of golf clubs?",
                options: [
                    "Driver",
                    "Irons",
                    "Wedges",
                    "Putter",
                    "Woods",
                    "Hybrids",
                ],
                correct: 0
            },
            {
                topic: "Major Championships",
                emoji: "⛳🏆",
                question: "Name the four men's major golf championships?",
                options: [
                    "Masters",
                    "US Open",
                    "The Open Championship (British Open)",
                    "PGA Championship",
                ],
                correct: 0
            },
            {
                topic: "Scoring Terms",
                emoji: "⛳🔢",
                question: "Name three golf scoring terms?",
                options: [
                    "Birdie",
                    "Eagle",
                    "Bogey",
                    "Par",
                    "Albatross",
                    "Hole-in-one",
                ],
                correct: 0
            },
            {
                topic: "Golf Legends",
                emoji: "⛳⭐",
                question: "Name three legendary golfers?",
                options: [
                    "Tiger Woods",
                    "Jack Nicklaus",
                    "Arnold Palmer",
                    "Phil Mickelson",
                    "Rory McIlroy",
                ],
                correct: 0
            },
            {
                topic: "Shot Types",
                emoji: "⛳🎯",
                question: "Name three types of golf shots?",
                options: [
                    "Drive",
                    "Chip",
                    "Putt",
                    "Pitch",
                    "Bunker shot",
                    "Fade",
                ],
                correct: 0
            },
            {
                topic: "Course Hazards",
                emoji: "⛳⚠️",
                question: "Name three golf course hazards?",
                options: [
                    "Water hazard",
                    "Sand bunker",
                    "Rough",
                    "Trees",
                    "Out of bounds",
                ],
                correct: 0
            },
            {
                topic: "Golf Formats",
                emoji: "⛳🎮",
                question: "Name three golf competition formats?",
                options: [
                    "Stroke play",
                    "Match play",
                    "Scramble",
                    "Best ball",
                    "Stableford",
                ],
                correct: 0
            },
            {
                topic: "Course Parts",
                emoji: "⛳🏞️",
                question: "Name three parts of a golf course?",
                options: [
                    "Tee box",
                    "Fairway",
                    "Green",
                    "Rough",
                    "Bunker",
                    "Fringe",
                ],
                correct: 0
            },
            {
                topic: "Club Components",
                emoji: "⛳🔧",
                question: "Name three parts of a golf club?",
                options: [
                    "Grip",
                    "Shaft",
                    "Clubhead",
                    "Clubface",
                    "Hosel",
                ],
                correct: 0
            },
            {
                topic: "Famous Courses",
                emoji: "⛳🏛️",
                question: "Name three famous golf courses?",
                options: [
                    "Augusta National",
                    "St Andrews",
                    "Pebble Beach",
                    "Pinehurst",
                    "Shinnecock Hills",
                ],
                correct: 0
            }
        ]
    },
    7: {
        "easy": [
            {
                topic: "Rugby Basics",
                emoji: "🏉🏃",
                question: "Is rugby a contact sport?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Ball Shape",
                emoji: "🏉⚪",
                question: "Is the rugby ball oval-shaped?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Scoring",
                emoji: "🏉🎯",
                question: "Do teams score by touching ball down in try zone?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Players",
                emoji: "🏉👥",
                question: "Are there 15 players per team in rugby union?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Passing",
                emoji: "🏉↔️",
                question: "Must the ball be passed backwards?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Tackling",
                emoji: "🏉💪",
                question: "Is tackling allowed in rugby?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Scrum",
                emoji: "🏉🔄",
                question: "Do players form scrums in rugby?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Kicking",
                emoji: "🏉🦶",
                question: "Can players kick the ball forward?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Referee",
                emoji: "🏉👨‍⚖️",
                question: "Does a referee control the match?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "World Cup",
                emoji: "🏉🏆",
                question: "Is there a Rugby World Cup?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Try Value",
                emoji: "🏉5️⃣",
                question: "How many points is a try worth?",
                options: [
                    "5 points",
                    "3 points"
                ],
                correct: 1
            },
            {
                topic: "Conversion",
                emoji: "🏉🎯",
                question: "What is a conversion?",
                options: [
                    "Tackle technique",
                    "Kick after try for extra points"
                ],
                correct: 0
            },
            {
                topic: "Lineout",
                emoji: "🏉⬆️",
                question: "What is a lineout?",
                options: [
                    "Restart after ball goes out of bounds",
                    "Scoring method"
                ],
                correct: 1
            },
            {
                topic: "Ruck",
                emoji: "🏉👥",
                question: "What is a ruck?",
                options: [
                    "Score",
                    "Contest for ball on ground"
                ],
                correct: 1
            },
            {
                topic: "Penalty Kick",
                emoji: "🏉⚠️",
                question: "How many points for penalty kick?",
                options: [
                    "3 points",
                    "5 points"
                ],
                correct: 0
            },
            {
                topic: "Maul",
                emoji: "🏉🤝",
                question: "What is a maul?",
                options: [
                    "Kick type",
                    "Ball carrier held up by players"
                ],
                correct: 1
            },
            {
                topic: "Knock-On",
                emoji: "🏉🚫",
                question: "What is a knock-on?",
                options: [
                    "Ball knocked forward illegally",
                    "Tackling technique"
                ],
                correct: 1
            },
            {
                topic: "Drop Goal",
                emoji: "🏉🦶",
                question: "What is a drop goal?",
                options: [
                    "Dropped ball",
                    "Kick through posts during play"
                ],
                correct: 0
            },
            {
                topic: "Sin Bin",
                emoji: "🏉🟨",
                question: "What is the sin bin?",
                options: [
                    "Temporary 10-minute suspension",
                    "Storage area"
                ],
                correct: 0
            },
            {
                topic: "Rugby Sevens",
                emoji: "🏉7️⃣",
                question: "How many players in Rugby Sevens?",
                options: [
                    "15 players",
                    "7 players per team"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Offside Line",
                emoji: "🏉📏",
                question: "Where is offside line in open play?",
                options: [
                    "Behind last player's feet",
                    "Anywhere",
                    "10 meters back"
                ],
                correct: 1
            },
            {
                topic: "Forward Pass",
                emoji: "🏉➡️",
                question: "What happens with forward pass?",
                options: [
                    "Play continues",
                    "Scrum to other team",
                    "Penalty kick"
                ],
                correct: 1
            },
            {
                topic: "Collapse Maul",
                emoji: "🏉⬇️",
                question: "Is collapsing a maul legal?",
                options: [
                    "No, penalty offense",
                    "Yes, always legal",
                    "Sometimes legal"
                ],
                correct: 1
            },
            {
                topic: "Blood Replacement",
                emoji: "🏉🩸",
                question: "What is blood replacement rule?",
                options: [
                    "No replacement",
                    "Permanent sub only",
                    "Temporary sub for bleeding player"
                ],
                correct: 0
            },
            {
                topic: "Mark",
                emoji: "🏉✋",
                question: "What is calling a mark?",
                options: [
                    "Fair catch in own 22, free kick awarded",
                    "Scoring method",
                    "Tackle call"
                ],
                correct: 1
            },
            {
                topic: "Advantage Rule",
                emoji: "🏉👍",
                question: "What is advantage rule?",
                options: [
                    "Referee lets play continue after infringement",
                    "Extra points",
                    "Time bonus"
                ],
                correct: 0
            },
            {
                topic: "Up and Under",
                emoji: "🏉☁️",
                question: "What is an up and under kick?",
                options: [
                    "Low kick",
                    "High kick for chasers to contest",
                    "Backwards kick"
                ],
                correct: 0
            },
            {
                topic: "Dummy Pass",
                emoji: "🏉🎭",
                question: "What is a dummy pass?",
                options: [
                    "Fake pass to deceive defense",
                    "Real pass",
                    "Illegal move"
                ],
                correct: 0
            },
            {
                topic: "Crouch Bind Set",
                emoji: "🏉📢",
                question: "What is this sequence for?",
                options: [
                    "Starting scrum safely",
                    "Lineout call",
                    "Try celebration"
                ],
                correct: 0
            },
            {
                topic: "Grubber Kick",
                emoji: "🏉⚽",
                question: "What is a grubber kick?",
                options: [
                    "High kick",
                    "Low kick bouncing along ground",
                    "Backwards kick"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Match Duration",
                emoji: "🏉⏰",
                question: "How long is rugby union match?",
                options: [
                    "60 minutes",
                    "80 minutes (2x40)",
                    "90 minutes",
                    "120 minutes"
                ],
                correct: 0
            },
            {
                topic: "Scrum Formation",
                emoji: "🏉📐",
                question: "How many players in a scrum?",
                options: [
                    "5 players",
                    "10 players",
                    "8 players per team (3-4-1 formation)",
                    "15 players"
                ],
                correct: 1
            },
            {
                topic: "TMO",
                emoji: "🏉📹",
                question: "What does TMO stand for?",
                options: [
                    "Team Manager Officer",
                    "Television Match Official (video referee)",
                    "Time Management Official",
                    "Tactical Match Observer"
                ],
                correct: 1
            },
            {
                topic: "Six Nations",
                emoji: "🏉🌍",
                question: "How many teams in Six Nations?",
                options: [
                    "4 teams",
                    "8 teams",
                    "6 teams (England, France, Ireland, Italy, Scotland, Wales)",
                    "10 teams"
                ],
                correct: 1
            },
            {
                topic: "Ball Dimensions",
                emoji: "🏉📏",
                question: "What is rugby ball length?",
                options: [
                    "28-30 cm",
                    "40 cm",
                    "20 cm",
                    "50 cm"
                ],
                correct: 1
            },
            {
                topic: "Props Position",
                emoji: "🏉💪",
                question: "What do props do?",
                options: [
                    "Score tries",
                    "Front row scrum positions",
                    "Kick goals",
                    "Pass only"
                ],
                correct: 1
            },
            {
                topic: "Bonus Points",
                emoji: "🏉➕",
                question: "How to get attacking bonus point?",
                options: [
                    "Win by 10+",
                    "Score 4+ tries",
                    "No tries conceded",
                    "First score"
                ],
                correct: 1
            },
            {
                topic: "Flanker",
                emoji: "🏉🏃",
                question: "What number are flankers?",
                options: [
                    "1 and 3",
                    "9 and 10",
                    "6 and 7 (back row)",
                    "11 and 14"
                ],
                correct: 0
            },
            {
                topic: "Garryowen",
                emoji: "🏉☁️",
                question: "What is a Garryowen?",
                options: [
                    "Try celebration",
                    "High kick towards opponent",
                    "Tackle type",
                    "Formation"
                ],
                correct: 0
            },
            {
                topic: "Rugby League",
                emoji: "🏉🔢",
                question: "How many players in Rugby League?",
                options: [
                    "15 players",
                    "11 players",
                    "13 players per team",
                    "7 players"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Scoring Methods",
                emoji: "🏉🎯",
                question: "Name three ways to score in rugby?",
                options: [
                    "Try",
                    "Conversion",
                    "Penalty kick",
                    "Drop goal",
                ],
                correct: 0
            },
            {
                topic: "Player Positions",
                emoji: "🏉👤",
                question: "Name three rugby positions?",
                options: [
                    "Fly-half",
                    "Scrum-half",
                    "Prop",
                    "Hooker",
                    "Lock",
                    "Flanker",
                    "Winger",
                ],
                correct: 0
            },
            {
                topic: "Set Pieces",
                emoji: "🏉📋",
                question: "Name the two main set pieces in rugby?",
                options: [
                    "Scrum",
                    "Lineout",
                ],
                correct: 0
            },
            {
                topic: "Rugby Nations",
                emoji: "🏉🌍",
                question: "Name three top rugby-playing nations?",
                options: [
                    "New Zealand",
                    "South Africa",
                    "England",
                    "Australia",
                    "France",
                    "Wales",
                    "Ireland",
                ],
                correct: 0
            },
            {
                topic: "Rugby Legends",
                emoji: "🏉⭐",
                question: "Name three legendary rugby players?",
                options: [
                    "Jonah Lomu",
                    "Richie McCaw",
                    "Dan Carter",
                    "Jonny Wilkinson",
                    "Brian O'Driscoll",
                ],
                correct: 0
            },
            {
                topic: "Phases of Play",
                emoji: "🏉🔄",
                question: "Name three rugby game situations?",
                options: [
                    "Scrum",
                    "Ruck",
                    "Maul",
                    "Lineout",
                    "Open play",
                ],
                correct: 0
            },
            {
                topic: "Infringements",
                emoji: "🏉🚫",
                question: "Name three rugby rule violations?",
                options: [
                    "Forward pass",
                    "Knock-on",
                    "Offside",
                    "High tackle",
                    "Collapsing scrum",
                ],
                correct: 0
            },
            {
                topic: "Tournaments",
                emoji: "🏉🏆",
            {
                topic: "Skills",
                emoji: "🏉💪",
            {
                topic: "Ball Handling",
                emoji: "🏉✋",
        ]
    },
    8: {
        "easy": [
            {
                topic: "Volleyball Basics",
                emoji: "🏐🏐",
                question: "Is volleyball played with hands?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Net",
                emoji: "🏐🕸️",
                question: "Is there a net dividing the court?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Teams",
                emoji: "🏐👥",
                question: "Are there 6 players per team on court?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Scoring",
                emoji: "🏐🎯",
                question: "Do teams score by grounding ball on opponent's court?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Serve",
                emoji: "🏐🎾",
                question: "Does play start with a serve?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Rotation",
                emoji: "🏐🔄",
                question: "Do players rotate positions?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Beach Volleyball",
                emoji: "🏐🏖️",
                question: "Can volleyball be played on sand?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Touches",
                emoji: "🏐✋",
                question: "Are there limited touches per side?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Olympics",
                emoji: "🏐🥇",
                question: "Is volleyball an Olympic sport?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Rally",
                emoji: "🏐↔️",
                question: "Do teams hit ball back and forth?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Three Touches",
                emoji: "🏐3️⃣",
                question: "How many touches allowed per side?",
                options: [
                    "3 touches maximum",
                    "Unlimited"
                ],
                correct: 0
            },
            {
                topic: "Spike",
                emoji: "🏐💥",
                question: "What is a spike?",
                options: [
                    "Soft touch",
                    "Powerful downward hit"
                ],
                correct: 0
            },
            {
                topic: "Block",
                emoji: "🏐🚫",
                question: "What is a block?",
                options: [
                    "Defensive play at net",
                    "Serve type"
                ],
                correct: 0
            },
            {
                topic: "Set",
                emoji: "🏐👆",
                question: "What is a set in volleyball?",
                options: [
                    "Score needed",
                    "Pass to position attacker"
                ],
                correct: 1
            },
            {
                topic: "Dig",
                emoji: "🏐⬇️",
                question: "What is a dig?",
                options: [
                    "Defensive save of hard-driven ball",
                    "Serve technique"
                ],
                correct: 1
            },
            {
                topic: "Libero",
                emoji: "🏐👤",
                question: "What is a libero?",
                options: [
                    "Coach",
                    "Specialized defensive player"
                ],
                correct: 0
            },
            {
                topic: "Ace",
                emoji: "🏐⚡",
                question: "What is an ace?",
                options: [
                    "Serve that scores directly",
                    "Block"
                ],
                correct: 1
            },
            {
                topic: "Rally Scoring",
                emoji: "🏐📊",
                question: "What is rally scoring?",
                options: [
                    "Only serving team scores",
                    "Point scored on every rally"
                ],
                correct: 0
            },
            {
                topic: "Match Format",
                emoji: "🏐🎮",
                question: "How many sets in a match?",
                options: [
                    "Best of 5 sets typically",
                    "1 set only"
                ],
                correct: 1
            },
            {
                topic: "Back Row Attack",
                emoji: "🏐🔙",
                question: "Can back row players attack?",
                options: [
                    "Never",
                    "Yes, from behind 3-meter line"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Set Points",
                emoji: "🏐🔢",
                question: "Points to win a set?",
                options: [
                    "25 points (win by 2)",
                    "21 points",
                    "15 points"
                ],
                correct: 0
            },
            {
                topic: "Fifth Set",
                emoji: "🏐5️⃣",
                question: "How many points in deciding 5th set?",
                options: [
                    "25 points",
                    "15 points (win by 2)",
                    "10 points"
                ],
                correct: 0
            },
            {
                topic: "Double Contact",
                emoji: "🏐✌️",
                question: "Is double contact allowed?",
                options: [
                    "On first team touch (receive/dig) only",
                    "Always illegal",
                    "Always legal"
                ],
                correct: 0
            },
            {
                topic: "Overhand Receive",
                emoji: "🏐🙌",
                question: "Can you overhand receive a serve?",
                options: [
                    "Yes, but must be clean",
                    "Never allowed",
                    "Only libero"
                ],
                correct: 0
            },
            {
                topic: "Foot Fault",
                emoji: "🏐👣",
                question: "What is foot fault on serve?",
                options: [
                    "Stepping on/over line when serving",
                    "Wrong position",
                    "No such thing"
                ],
                correct: 0
            },
            {
                topic: "Antenna",
                emoji: "🏐📏",
                question: "What are antennas for?",
                options: [
                    "Mark vertical net boundary",
                    "Decoration",
                    "Scoreboards"
                ],
                correct: 1
            },
            {
                topic: "Quick Set",
                emoji: "🏐⚡",
                question: "What is a quick set?",
                options: [
                    "Slow set",
                    "Low, fast set for middle attacker",
                    "High set"
                ],
                correct: 1
            },
            {
                topic: "Pancake",
                emoji: "🏐🥞",
                question: "What is a pancake dig?",
                options: [
                    "Diving with hand flat on floor",
                    "Food break",
                    "Jump serve"
                ],
                correct: 1
            },
            {
                topic: "Tool",
                emoji: "🏐🔧",
            {
                topic: "Joust",
                emoji: "🏐⚔️",
                question: "What is a joust?",
                options: [
                    "Two players contact ball simultaneously above net",
                    "Serve style",
                    "Celebration"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Net Height Men",
                emoji: "🏐📐",
                question: "What is men's net height?",
                options: [
                    "2.43 meters (7'11.625\")",
                    "3 meters",
                    "2 meters",
                    "2.24 meters"
                ],
                correct: 1
            },
            {
                topic: "Net Height Women",
                emoji: "🏐📏",
                question: "What is women's net height?",
                options: [
                    "2.43 meters",
                    "2 meters",
                    "2.24 meters (7'4.125\")",
                    "2.50 meters"
                ],
                correct: 1
            },
            {
                topic: "Court Dimensions",
                emoji: "🏐📐",
                question: "What are volleyball court dimensions?",
                options: [
                    "18m x 9m (59' x 29.5')",
                    "20m x 10m",
                    "15m x 7.5m",
                    "25m x 12m"
                ],
                correct: 1
            },
            {
                topic: "Attack Line",
                emoji: "🏐━",
                question: "How far is attack line from net?",
                options: [
                    "5 meters",
                    "1 meter",
                    "3 meters (10 feet)",
                    "6 meters"
                ],
                correct: 1
            },
            {
                topic: "Beach Players",
                emoji: "🏐🏖️",
                question: "How many players in beach volleyball?",
                options: [
                    "6 per team",
                    "2 per team",
                    "4 per team",
                    "8 per team"
                ],
                correct: 1
            },
            {
                topic: "Rotation Order",
                emoji: "🏐🔄",
                question: "When do players rotate?",
                options: [
                    "Never",
                    "Each point",
                    "Every 5 points",
                    "When winning serve back (side-out)"
                ],
                correct: 0
            },
            {
                topic: "Substitutions",
                emoji: "🏐🔄",
                question: "How many subs allowed per set?",
                options: [
                    "Unlimited",
                    "3 substitutions",
                    "6 substitutions",
                    "12 substitutions"
                ],
                correct: 0
            },
            {
                topic: "Jump Serve Speed",
                emoji: "🏐💨",
                question: "What is typical jump serve speed?",
                options: [
                    "30 km/h",
                    "50 km/h",
                    "80-120 km/h for elite",
                    "200 km/h"
                ],
                correct: 0
            },
            {
                topic: "Libero Restrictions",
                emoji: "🏐🚫",
                question: "What can't libero do?",
                options: [
                    "Serve, attack above net height",
                    "Pass",
                    "Dig",
                    "Rotate"
                ],
                correct: 0
            },
            {
                topic: "FIVB",
                emoji: "🏐🌍",
                question: "What is FIVB?",
                options: [
                    "International volleyball federation",
                    "Tournament name",
                    "Ball brand",
                    "Training method"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Positions",
                emoji: "🏐👤",
                question: "Name three volleyball positions?",
                options: [
                    "Setter",
                    "Outside hitter",
                    "Middle blocker",
                    "Opposite",
                    "Libero",
                ],
                correct: 0
            },
            {
                topic: "Skills",
                emoji: "🏐💪",
                question: "Name three volleyball skills?",
                options: [
                    "Serve",
                    "Pass",
                    "Set",
                    "Spike",
                    "Block",
                    "Dig",
                ],
                correct: 0
            },
            {
                topic: "Serve Types",
                emoji: "🏐🎾",
                question: "Name three types of serves?",
                options: [
                    "Float serve",
                    "Jump serve",
                    "Underhand serve",
                    "Topspin serve",
                ],
                correct: 0
            },
            {
                topic: "Attack Shots",
                emoji: "🏐💥",
                question: "Name three attacking shots?",
                options: [
                    "Spike",
                    "Tip",
                    "Roll shot",
                    "Cut shot",
                    "Line shot",
                ],
                correct: 0
            },
            {
                topic: "Defensive Moves",
                emoji: "🏐🛡️",
                question: "Name three defensive techniques?",
                options: [
                    "Dig",
                    "Block",
                    "Dive",
                    "Pancake",
                    "Roll",
                ],
                correct: 0
            },
            {
                topic: "Violations",
                emoji: "🏐⚠️",
                question: "Name three volleyball violations?",
                options: [
                    "Double hit",
                    "Lift/carry",
                    "Net touch",
                    "Foot fault",
                    "Four touches",
                ],
                correct: 0
            },
            {
                topic: "Set Types",
                emoji: "🏐📋",
                question: "Name three types of sets?",
                options: [
                    "High ball",
                    "Quick set",
                    "Back set",
                    "Shoot set",
                    "Slide set",
                ],
                correct: 0
            },
            {
                topic: "Tournaments",
                emoji: "🏐🏆",
                question: "Name three major volleyball competitions?",
                options: [
                    "Olympics",
                    "World Championship",
                    "Nations League",
                    "World Cup",
                ],
                correct: 0
            },
            {
                topic: "Court Areas",
                emoji: "🏐🏟️",
                question: "Name three zones on volleyball court?",
                options: [
                    "Front row",
                    "Back row",
                    "Service area",
                    "Attack line",
                    "Free zone",
                ],
                correct: 0
            },
            {
                topic: "Famous Nations",
                emoji: "🏐🌍",
                question: "Name three strong volleyball nations?",
                options: [
                    "Brazil",
                    "USA",
                    "Russia",
                    "Italy",
                    "Poland",
                    "China",
                ],
                correct: 0
            }
        ]
    },
    9: {
        "easy": [
            {
                topic: "Baseball Basics",
                emoji: "⚾🏟️",
                question: "Is baseball played with bat and ball?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Diamond",
                emoji: "⚾💎",
                question: "Are bases arranged in diamond shape?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Innings",
                emoji: "⚾🔢",
                question: "Is a baseball game divided into innings?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Strikes",
                emoji: "⚾⚡",
                question: "Are three strikes an out?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Home Run",
                emoji: "⚾🚀",
                question: "Is a home run when ball goes over fence?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pitcher",
                emoji: "⚾🤾",
                question: "Does the pitcher throw the ball?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Gloves",
                emoji: "⚾🧤",
                question: "Do players wear gloves to catch?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Umpire",
                emoji: "⚾👨‍⚖️",
                question: "Does an umpire call balls and strikes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "World Series",
                emoji: "⚾🏆",
                question: "Is the World Series baseball's championship?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Teams",
                emoji: "⚾👥",
                question: "Are there 9 players per team on field?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Innings Count",
                emoji: "⚾9️⃣",
                question: "How many innings in a game?",
                options: [
                    "9 innings",
                    "7 innings"
                ],
                correct: 1
            },
            {
                topic: "Bases",
                emoji: "⚾💎",
                question: "How many bases must runner touch?",
                options: [
                    "2 bases",
                    "4 bases (including home)"
                ],
                correct: 1
            },
            {
                topic: "Strike Zone",
                emoji: "⚾📦",
                question: "What is the strike zone?",
                options: [
                    "Area over home plate, knees to chest",
                    "Entire field"
                ],
                correct: 0
            },
            {
                topic: "Walk",
                emoji: "⚾🚶",
                question: "What is a walk?",
                options: [
                    "Running bases",
                    "Four balls, batter goes to first"
                ],
                correct: 0
            },
            {
                topic: "Double Play",
                emoji: "⚾✌️",
                question: "What is a double play?",
                options: [
                    "Two outs in one play",
                    "Two runs"
                ],
                correct: 1
            },
            {
                topic: "Steal",
                emoji: "⚾🏃",
                question: "What is stealing a base?",
                options: [
                    "Cheating",
                    "Running to next base during pitch"
                ],
                correct: 0
            },
            {
                topic: "Bunt",
                emoji: "⚾👆",
                question: "What is a bunt?",
                options: [
                    "Soft tap hit",
                    "Home run"
                ],
                correct: 1
            },
            {
                topic: "Foul Ball",
                emoji: "⚾↗️",
                question: "What is a foul ball?",
                options: [
                    "Fair hit",
                    "Ball hit outside foul lines"
                ],
                correct: 1
            },
            {
                topic: "RBI",
                emoji: "⚾📊",
                question: "What does RBI stand for?",
                options: [
                    "Run Batted In",
                    "Running Base Indicator"
                ],
                correct: 0
            },
            {
                topic: "Bullpen",
                emoji: "⚾🐂",
                question: "What is the bullpen?",
                options: [
                    "Seating area",
                    "Area where relief pitchers warm up"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Balk",
                emoji: "⚾🚫",
                question: "What is a balk?",
                options: [
                    "Illegal pitcher motion, runners advance",
                    "Strike",
                    "Home run"
                ],
                correct: 1
            },
            {
                topic: "Infield Fly Rule",
                emoji: "⚾☁️",
                question: "When does infield fly rule apply?",
                options: [
                    "Pop-up with runners on base, less than 2 outs",
                    "Any fly ball",
                    "Never applies"
                ],
                correct: 1
            },
            {
                topic: "Designated Hitter",
                emoji: "⚾🎯",
                question: "What is designated hitter?",
                options: [
                    "Bats for pitcher (AL rule)",
                    "Extra fielder",
                    "Coach"
                ],
                correct: 0
            },
            {
                topic: "Perfect Game",
                emoji: "⚾💯",
                question: "What is a perfect game?",
                options: [
                    "No hitter",
                    "No runs allowed",
                    "No baserunners allowed (27 up, 27 down)"
                ],
                correct: 1
            },
            {
                topic: "Cycle",
                emoji: "⚾🔄",
                question: "What is hitting for the cycle?",
                options: [
                    "Single, double, triple, home run in one game",
                    "Three home runs",
                    "Perfect batting"
                ],
                correct: 1
            },
            {
                topic: "Pickoff",
                emoji: "⚾🎯",
                question: "What is a pickoff?",
                options: [
                    "Pitcher throws to base to tag out runner",
                    "Catching fly ball",
                    "Stealing base"
                ],
                correct: 0
            },
            {
                topic: "Passed Ball",
                emoji: "⚾😵",
                question: "What is a passed ball?",
                options: [
                    "Catcher misses catchable pitch, runner advances",
                    "Wild pitch",
                    "Foul ball"
                ],
                correct: 1
            },
            {
                topic: "Sacrifice Fly",
                emoji: "⚾🦅",
                question: "What is a sacrifice fly?",
                options: [
                    "Out that scores runner from third",
                    "Home run",
                    "Strike out"
                ],
                correct: 1
            },
            {
                topic: "Hidden Ball Trick",
                emoji: "⚾🎭",
                question: "What is hidden ball trick?",
                options: [
                    "Magic show",
                    "Fielder fakes not having ball, tags runner",
                    "Pitching style"
                ],
                correct: 0
            },
            {
                topic: "Force Out",
                emoji: "⚾➡️",
                question: "What is a force out?",
                options: [
                    "Runner must advance, tagged out at base",
                    "Strike out",
                    "Fly out"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Pitching Distance",
                emoji: "⚾📏",
                question: "What is distance from mound to home plate?",
                options: [
                    "60 feet 6 inches (18.44m)",
                    "50 feet",
                    "70 feet",
                    "45 feet"
                ],
                correct: 0
            },
            {
                topic: "Base Distance",
                emoji: "⚾💎",
                question: "What is distance between bases?",
                options: [
                    "80 feet",
                    "100 feet",
                    "90 feet (27.43m)",
                    "70 feet"
                ],
                correct: 0
            },
            {
                topic: "Fastball Speed",
                emoji: "⚾💨",
                question: "What is MLB average fastball speed?",
                options: [
                    "70 mph",
                    "92-95 mph (148-153 km/h)",
                    "110 mph",
                    "80 mph"
                ],
                correct: 1
            },
            {
                topic: "Batting Average",
                emoji: "⚾📊",
                question: "What is a good batting average?",
                options: [
                    ".500",
                    ".100",
                    ".300 considered excellent",
                    ".900"
                ],
                correct: 0
            },
            {
                topic: "Cy Young Award",
                emoji: "⚾🏆",
                question: "What is Cy Young Award for?",
                options: [
                    "Best hitter",
                    "Rookie of year",
                    "Best pitcher",
                    "Most home runs"
                ],
                correct: 1
            },
            {
                topic: "Triple Crown",
                emoji: "⚾👑",
                question: "What is Triple Crown?",
                options: [
                    "Three teams",
                    "Leading in batting avg, HRs, RBIs",
                    "Three games",
                    "Three innings"
                ],
                correct: 0
            },
            {
                topic: "ERA",
                emoji: "⚾📉",
                question: "What does ERA stand for?",
                options: [
                    "Earned Run Average (pitcher stat)",
                    "Extra Run Allowed",
                    "Error Rate Average",
                    "Early Run Advantage"
                ],
                correct: 0
            },
            {
                topic: "No-Hitter",
                emoji: "⚾🚫",
                question: "What is a no-hitter?",
                options: [
                    "Perfect game",
                    "Pitcher allows no hits in game",
                    "No runs",
                    "No walks"
                ],
                correct: 0
            },
            {
                topic: "Golden Glove",
                emoji: "⚾🧤",
                question: "What is Gold Glove Award?",
                options: [
                    "Best offensive player",
                    "Home run leader",
                    "Best defensive player at position",
                    "Stolen base leader"
                ],
                correct: 0
            },
            {
                topic: "Immaculate Inning",
                emoji: "⚾💯",
                question: "What is an immaculate inning?",
                options: [
                    "9 pitches, 9 strikes, 3 outs",
                    "No runs",
                    "3 home runs",
                    "Perfect defense"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Positions",
                emoji: "⚾👤",
                question: "Name three baseball positions?",
                options: [
                    "Pitcher",
                    "Catcher",
                    "First base",
                    "Shortstop",
                    "Outfielder",
                    "Second base",
                ],
                correct: 0
            },
            {
                topic: "Pitch Types",
                emoji: "⚾🎯",
                question: "Name three types of pitches?",
                options: [
                    "Fastball",
                    "Curveball",
                    "Slider",
                    "Changeup",
                    "Knuckleball",
                ],
                correct: 0
            },
            {
                topic: "Hit Types",
                emoji: "⚾💥",
                question: "Name three types of hits?",
                options: [
                    "Single",
                    "Double",
                    "Triple",
                    "Home run",
                ],
                correct: 0
            },
            {
                topic: "Baseball Legends",
                emoji: "⚾⭐",
                question: "Name three legendary baseball players?",
                options: [
                    "Babe Ruth",
                    "Jackie Robinson",
                    "Willie Mays",
                    "Hank Aaron",
                    "Derek Jeter",
                ],
                correct: 0
            },
            {
                topic: "Out Methods",
                emoji: "⚾❌",
                question: "Name three ways to get an out?",
                options: [
                    "Strike out",
                    "Fly out",
                    "Ground out",
                    "Tag out",
                    "Force out",
                ],
                correct: 0
            },
            {
                topic: "MLB Teams",
                emoji: "⚾🏆",
                question: "Name three MLB teams?",
                options: [
                    "Yankees",
                    "Red Sox",
                    "Dodgers",
                    "Cubs",
                    "Giants",
                    "Cardinals",
                ],
                correct: 0
            },
            {
                topic: "Baseball Stats",
                emoji: "⚾📊",
                question: "Name three baseball statistics?",
                options: [
                    "Batting average",
                    "Home runs",
                    "RBIs",
                    "Strikeouts",
                    "ERA",
                    "Stolen bases",
                ],
                correct: 0
            },
            {
                topic: "World Series",
                emoji: "⚾🏆",
                question: "Name three World Series winning teams?",
                options: [
                    "Yankees",
                    "Cardinals",
                    "Red Sox",
                    "Giants",
                    "Dodgers",
                    "Athletics",
                ],
                correct: 0
            },
            {
                topic: "Baseball Equipment",
                emoji: "⚾🎽",
                question: "Name three pieces of baseball equipment?",
                options: [
                    "Bat",
                    "Glove",
                    "Helmet",
                    "Cleats",
                    "Catcher's mask",
                    "Batting gloves",
                ],
                correct: 0
            },
            {
                topic: "Baseball Rules",
                emoji: "⚾⚖️",
                question: "Name three baseball rules or violations?",
                options: [
                    "Balk",
                    "Interference",
                    "Strike zone",
                    "Infield fly",
                    "Force out",
                ],
                correct: 0
            }
        ]
    },
    10: {
        "easy": [
            {
                topic: "Hockey Basics",
                emoji: "🏒🧊",
                question: "Is hockey played on ice?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Puck",
                emoji: "🏒⚫",
                question: "Do players hit a puck with sticks?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Goal",
                emoji: "🏒🥅",
                question: "Do teams score by shooting puck into net?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Players",
                emoji: "🏒👥",
                question: "Are there 6 players per team on ice?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Skating",
                emoji: "🏒⛸️",
                question: "Do hockey players wear ice skates?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Periods",
                emoji: "🏒🔢",
                question: "Is a hockey game divided into periods?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Goalie",
                emoji: "🏒🧤",
                question: "Does the goalie defend the net?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Penalties",
                emoji: "🏒⚠️",
                question: "Can players get penalties in hockey?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Stanley Cup",
                emoji: "🏒🏆",
                question: "Is the Stanley Cup hockey's championship?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Helmet",
                emoji: "🏒🪖",
                question: "Do hockey players wear helmets?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Three Periods",
                emoji: "🏒3️⃣",
                question: "How many periods in a game?",
                options: [
                    "3 periods of 20 minutes",
                    "4 quarters"
                ],
                correct: 0
            },
            {
                topic: "Power Play",
                emoji: "🏒⚡",
                question: "What is a power play?",
                options: [
                    "Strong shot",
                    "Numerical advantage when opponent penalized"
                ],
                correct: 1
            },
            {
                topic: "Hat Trick",
                emoji: "🏒🎩",
                question: "What is a hat trick?",
                options: [
                    "Three goals by one player in a game",
                    "Three assists"
                ],
                correct: 1
            },
            {
                topic: "Icing",
                emoji: "🏒🧊",
                question: "What is icing?",
                options: [
                    "Freezing the puck",
                    "Shooting puck across two red lines"
                ],
                correct: 0
            },
            {
                topic: "Face-off",
                emoji: "🏒⭕",
                question: "What is a face-off?",
                options: [
                    "Method to start/restart play",
                    "Fighting"
                ],
                correct: 0
            },
            {
                topic: "Offside",
                emoji: "🏒🚫",
                question: "What is offside in hockey?",
                options: [
                    "Bad position",
                    "Entering zone before puck"
                ],
                correct: 1
            },
            {
                topic: "Empty Net",
                emoji: "🏒🥅",
                question: "What is an empty net goal?",
                options: [
                    "Scoring when goalie pulled",
                    "Missing the net"
                ],
                correct: 0
            },
            {
                topic: "Assist",
                emoji: "🏒🤝",
            {
                topic: "Breakaway",
                emoji: "🏒🏃",
                question: "What is a breakaway?",
                options: [
                    "Player alone against goalie",
                    "Breaking stick"
                ],
                correct: 1
            },
            {
                topic: "Zamboni",
                emoji: "🏒🚜",
                question: "What does a Zamboni do?",
                options: [
                    "Scores goals",
                    "Resurfaces ice between periods"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Two-Line Pass",
                emoji: "🏒📏",
                question: "What was the two-line pass rule?",
                options: [
                    "Pass across two lines (abolished in NHL 2005)",
                    "Passing twice",
                    "Still in effect"
                ],
                correct: 0
            },
            {
                topic: "Penalty Shot",
                emoji: "🏒🎯",
                question: "When is penalty shot awarded?",
                options: [
                    "Every penalty",
                    "Breakaway denied by foul",
                    "After hat trick"
                ],
                correct: 0
            },
            {
                topic: "Five-on-Three",
                emoji: "🏒5️⃣",
                question: "What is five-on-three?",
                options: [
                    "Two opponents in penalty box",
                    "Score difference",
                    "Period number"
                ],
                correct: 1
            },
            {
                topic: "Gordie Howe Hat Trick",
                emoji: "🏒🥊",
                question: "What is Gordie Howe hat trick?",
                options: [
                    "Three goals",
                    "Goal, assist, and fight in one game",
                    "Three assists"
                ],
                correct: 1
            },
            {
                topic: "Delayed Penalty",
                emoji: "🏒⏰",
                question: "What is delayed penalty?",
                options: [
                    "Penalty called but play continues until offending team touches puck",
                    "Late penalty",
                    "No penalty"
                ],
                correct: 0
            },
            {
                topic: "Slap Shot",
                emoji: "🏒💥",
                question: "What is a slap shot?",
                options: [
                    "Light tap",
                    "Powerful shot with wind-up",
                    "Passing technique"
                ],
                correct: 1
            },
            {
                topic: "Trap Defense",
                emoji: "🏒🕸️",
                question: "What is the neutral zone trap?",
                options: [
                    "Defensive strategy clogging neutral zone",
                    "Goalie technique",
                    "Offensive play"
                ],
                correct: 0
            },
            {
                topic: "Deke",
                emoji: "🏒🎭",
                question: "What is a deke?",
                options: [
                    "Type of penalty",
                    "Fake move to deceive opponent",
                    "Shooting style"
                ],
                correct: 1
            },
            {
                topic: "Blue Line",
                emoji: "🏒🔵",
                question: "What do blue lines mark?",
                options: [
                    "Offensive/defensive zones",
                    "Goal lines",
                    "Penalty areas"
                ],
                correct: 1
            },
            {
                topic: "Boarding",
                emoji: "🏒🚧",
                question: "What is boarding penalty?",
                options: [
                    "Checking player into boards dangerously",
                    "Getting on ice",
                    "Legal check"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Rink Dimensions",
                emoji: "🏒📐",
                question: "What is NHL rink size?",
                options: [
                    "200 feet x 85 feet",
                    "250 feet x 100 feet",
                    "150 feet x 70 feet",
                    "300 feet x 150 feet"
                ],
                correct: 1
            },
            {
                topic: "Goal Dimensions",
                emoji: "🏒🥅",
                question: "What is hockey goal size?",
                options: [
                    "6 feet wide x 4 feet tall",
                    "8 feet x 6 feet",
                    "4 feet x 3 feet",
                    "10 feet x 8 feet"
                ],
                correct: 0
            },
            {
                topic: "Puck Specifications",
                emoji: "🏒⚫",
                question: "What is puck weight?",
                options: [
                    "5-6 ounces (142-170 grams)",
                    "10 ounces",
                    "2 ounces",
                    "12 ounces"
                ],
                correct: 0
            },
            {
                topic: "Overtime Format",
                emoji: "🏒➕",
                question: "What is NHL overtime format?",
                options: [
                    "10 minutes 5-on-5",
                    "20 minutes 6-on-6",
                    "5 minutes 3-on-3 (then shootout)",
                    "No overtime"
                ],
                correct: 1
            },
            {
                topic: "Plus-Minus",
                emoji: "🏒➕➖",
                question: "What is plus-minus stat?",
                options: [
                    "Goals scored",
                    "Goal differential when player on ice",
                    "Penalty minutes",
                    "Assists"
                ],
                correct: 0
            },
            {
                topic: "Conn Smythe",
                emoji: "🏒🏆",
                question: "What is Conn Smythe Trophy?",
                options: [
                    "Regular season MVP",
                    "Most goals",
                    "Playoff MVP",
                    "Best goalie"
                ],
                correct: 1
            },
            {
                topic: "Trapezoid",
                emoji: "🏒📐",
                question: "What is the trapezoid?",
                options: [
                    "Area behind net where goalie can play puck",
                    "Face-off circle",
                    "Penalty box",
                    "Offensive zone"
                ],
                correct: 1
            },
            {
                topic: "Original Six",
                emoji: "🏒6️⃣",
                question: "How many teams in Original Six era?",
                options: [
                    "4 teams",
                    "10 teams",
                    "6 teams (Bruins, Blackhawks, Red Wings, Canadiens, Rangers, Maple Leafs)",
                    "8 teams"
                ],
                correct: 1
            },
            {
                topic: "Art Ross Trophy",
                emoji: "🏒👑",
                question: "What is Art Ross Trophy for?",
                options: [
                    "Leading scorer (points)",
                    "Best defenseman",
                    "Best goalie",
                    "Rookie of year"
                ],
                correct: 1
            },
            {
                topic: "Shootout Format",
                emoji: "🏒🎯",
                question: "How many shooters in NHL shootout?",
                options: [
                    "5 per team",
                    "1 per team",
                    "3 per team initially, then sudden death",
                    "Unlimited"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Positions",
                emoji: "🏒👤",
                question: "Name three hockey positions?",
                options: [
                    "Center",
                    "Winger",
                    "Defenseman",
                    "Goalie",
                ],
                correct: 0
            },
            {
                topic: "Penalties",
                emoji: "🏒⚠️",
                question: "Name three types of penalties?",
                options: [
                    "Hooking",
                    "Tripping",
                    "High-sticking",
                    "Slashing",
                    "Boarding",
                    "Cross-checking",
                ],
                correct: 0
            },
            {
                topic: "NHL Teams",
                emoji: "🏒🏆",
                question: "Name three NHL teams?",
                options: [
                    "Maple Leafs",
                    "Canadiens",
                    "Bruins",
                    "Rangers",
                    "Blackhawks",
                    "Red Wings",
                ],
                correct: 0
            },
            {
                topic: "Hockey Legends",
                emoji: "🏒⭐",
                question: "Name three legendary hockey players?",
                options: [
                    "Wayne Gretzky",
                    "Mario Lemieux",
                    "Bobby Orr",
                    "Gordie Howe",
                    "Maurice Richard",
                ],
                correct: 0
            },
            {
                topic: "Shot Types",
                emoji: "🏒🎯",
                question: "Name three types of shots?",
                options: [
                    "Slap shot",
                    "Wrist shot",
                    "Backhand",
                    "Snap shot",
                    "One-timer",
                ],
                correct: 0
            },
            {
                topic: "Face-off Locations",
                emoji: "🏒⭕",
                question: "Name three face-off circle locations?",
                options: [
                    "Center ice",
                    "Offensive zone",
                    "Defensive zone",
                    "Neutral zone",
                ],
                correct: 0
            },
            {
                topic: "Hockey Equipment",
                emoji: "🏒🎽",
                question: "Name three pieces of hockey equipment?",
                options: [
                    "Stick",
                    "Skates",
                    "Helmet",
                    "Gloves",
                    "Pads",
                    "Shoulder pads",
                ],
                correct: 0
            },
            {
                topic: "Trophies",
                emoji: "🏒🏆",
                question: "Name three NHL trophies?",
                options: [
                    "Stanley Cup",
                    "Hart Trophy",
                    "Vezina Trophy",
                    "Norris Trophy",
                    "Art Ross Trophy",
                ],
                correct: 0
            },
            {
                topic: "Hockey Terms",
                emoji: "🏒📖",
                question: "Name three hockey terminology terms?",
                options: [
                    "Hat trick",
                    "Power play",
                    "Icing",
                    "Offside",
                    "Breakaway",
                    "Face-off",
                ],
                correct: 0
            },
            {
                topic: "Saves Types",
                emoji: "🏒🧤",
                question: "Name three goalie save techniques?",
                options: [
                    "Glove save",
                    "Pad save",
                    "Blocker save",
                    "Stack save",
                    "Butterfly",
                ],
                correct: 0
            }
        ]
    },
    11: {
        "easy": [
            {
                topic: "Boxing Basics",
                emoji: "🥊💪",
                question: "Is boxing a combat sport?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Ring",
                emoji: "🥊⬜",
                question: "Do boxers fight in a ring?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Gloves",
                emoji: "🥊🧤",
                question: "Do boxers wear padded gloves?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Rounds",
                emoji: "🥊🔢",
                question: "Is a boxing match divided into rounds?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Knockout",
                emoji: "🥊💥",
                question: "Can a fight end by knockout?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Referee",
                emoji: "🥊👨‍⚖️",
                question: "Does a referee oversee the match?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Weight Classes",
                emoji: "🥊⚖️",
                question: "Are there different weight classes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Bell",
                emoji: "🥊🔔",
                question: "Does a bell signal the start and end of rounds?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Punching",
                emoji: "🥊👊",
                question: "Do boxers score points by punching?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Corner",
                emoji: "🥊👥",
                question: "Does each boxer have a corner team?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Professional Rounds",
                emoji: "🥊🔢",
                question: "How many rounds in championship bout?",
                options: [
                    "12 rounds",
                    "15 rounds"
                ],
                correct: 1
            },
            {
                topic: "TKO",
                emoji: "🥊🛑",
                question: "What is a TKO?",
                options: [
                    "Total Knockout",
                    "Technical Knockout (referee stops fight)"
                ],
                correct: 0
            },
            {
                topic: "Jab",
                emoji: "🥊👊",
                question: "What is a jab?",
                options: [
                    "Quick straight punch with lead hand",
                    "Uppercut"
                ],
                correct: 0
            },
            {
                topic: "Southpaw",
                emoji: "🥊↔️",
                question: "What is a southpaw?",
                options: [
                    "Aggressive fighter",
                    "Left-handed boxer"
                ],
                correct: 0
            },
            {
                topic: "Standing Eight Count",
                emoji: "🥊8️⃣",
                question: "What is standing eight count?",
                options: [
                    "Referee counts to assess hurt fighter",
                    "Counting punches"
                ],
                correct: 0
            },
            {
                topic: "Split Decision",
                emoji: "🥊⚖️",
                question: "What is split decision?",
                options: [
                    "Knockout",
                    "Two judges for one fighter, one for other"
                ],
                correct: 0
            },
            {
                topic: "Clinch",
                emoji: "🥊🤝",
                question: "What is a clinch?",
                options: [
                    "Boxers holding each other",
                    "Winning punch"
                ],
                correct: 0
            },
            {
                topic: "Low Blow",
                emoji: "🥊⚠️",
                question: "What is a low blow?",
                options: [
                    "Legal punch",
                    "Illegal punch below belt"
                ],
                correct: 1
            },
            {
                topic: "Hook",
                emoji: "🥊↩️",
                question: "What is a hook punch?",
                options: [
                    "Circular punch to side",
                    "Straight punch"
                ],
                correct: 0
            },
            {
                topic: "On the Ropes",
                emoji: "🥊🔴",
        ],
        hard: [
            {
                topic: "Rabbit Punch",
                emoji: "🥊🚫",
                question: "What is a rabbit punch?",
                options: [
                    "Illegal punch to back of head/neck",
                    "Quick jab",
                    "Legal counter"
                ],
                correct: 0
            },
            {
                topic: "Mandatory Eight Count",
                emoji: "🥊📏",
                question: "What is mandatory eight count?",
                options: [
                    "Count given to all knockdowns",
                    "Rest period",
                    "Training exercise"
                ],
                correct: 0
            },
            {
                topic: "Undisputed Champion",
                emoji: "🥊👑",
                question: "What is undisputed champion?",
                options: [
                    "One win",
                    "Holds all major organization belts",
                    "Regional champion"
                ],
                correct: 0
            },
            {
                topic: "Peek-a-Boo Style",
                emoji: "🥊👀",
                question: "What is peek-a-boo boxing style?",
                options: [
                    "Defensive style with high guard",
                    "Aggressive rushing",
                    "Circling opponent"
                ],
                correct: 0
            },
            {
                topic: "Body Shot",
                emoji: "🥊💢",
                question: "Why are body shots effective?",
                options: [
                    "Look impressive",
                    "Drain stamina and can cause knockouts",
                    "Easy to land"
                ],
                correct: 0
            },
            {
                topic: "Unification Bout",
                emoji: "🥊🏆",
                question: "What is unification bout?",
                options: [
                    "Fight between two champions of different organizations",
                    "Training fight",
                    "Exhibition match"
                ],
                correct: 0
            },
            {
                topic: "Rope-a-Dope",
                emoji: "🥊🎭",
                question: "What is rope-a-dope strategy?",
                options: [
                    "Leaning on ropes to tire opponent (Ali technique)",
                    "Aggressive attack",
                    "Quick footwork"
                ],
                correct: 1
            },
            {
                topic: "Flash Knockdown",
                emoji: "🥊⚡",
                question: "What is flash knockdown?",
                options: [
                    "Quick knockdown, fighter recovers immediately",
                    "Bright lights",
                    "Final knockout"
                ],
                correct: 1
            },
            {
                topic: "Punch Stats",
                emoji: "🥊📊",
                question: "What is CompuBox?",
                options: [
                    "Computer system tracking punch statistics",
                    "Boxing video game",
                    "Training equipment"
                ],
                correct: 0
            },
            {
                topic: "Protected Ranking",
                emoji: "🥊🛡️",
                question: "What is protected ranking?",
                options: [
                    "Injured champion retains ranking without defending",
                    "Top security",
                    "Special award"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Ring Size",
                emoji: "🥊📐",
                question: "What is standard boxing ring size?",
                options: [
                    "16-20 feet square",
                    "30 feet square",
                    "10 feet square",
                    "25 feet square"
                ],
                correct: 0
            },
            {
                topic: "Glove Weight",
                emoji: "🥊🧤",
                question: "What is professional fight glove weight?",
                options: [
                    "8-10 ounces",
                    "16 ounces",
                    "4 ounces",
                    "20 ounces"
                ],
                correct: 0
            },
            {
                topic: "Round Duration",
                emoji: "🥊⏱️",
                question: "How long is each professional round?",
                options: [
                    "2 minutes",
                    "5 minutes",
                    "3 minutes",
                    "10 minutes"
                ],
                correct: 1
            },
            {
                topic: "Scoring System",
                emoji: "🥊💯",
                question: "What is 10-point must system?",
                options: [
                    "10 points to round winner, 9 or less to loser",
                    "Both get 10 points",
                    "Winner gets 100 points",
                    "No scoring"
                ],
                correct: 0
            },
            {
                topic: "Weight Classes",
                emoji: "🥊⚖️",
                question: "What is heavyweight limit?",
                options: [
                    "190 lbs",
                    "200 lbs",
                    "Over 200 lbs (no upper limit)",
                    "180 lbs"
                ],
                correct: 1
            },
            {
                topic: "Lineal Champion",
                emoji: "🥊👑",
                question: "What is lineal champion?",
                options: [
                    "Champion who beat previous champion (man who beat the man)",
                    "First champion",
                    "Regional champion",
                    "Amateur champion"
                ],
                correct: 1
            },
            {
                topic: "Marquess of Queensberry",
                emoji: "🥊📜",
                question: "What are Queensberry Rules?",
                options: [
                    "Modern boxing rules (gloves, rounds, etc.)",
                    "Ancient rules",
                    "British royalty",
                    "Training methods"
                ],
                correct: 0
            },
            {
                topic: "Punch Power",
                emoji: "🥊💪",
                question: "What is typical elite punch force?",
                options: [
                    "100 pounds",
                    "500 pounds",
                    "1,000+ pounds of force",
                    "50 pounds"
                ],
                correct: 1
            },
            {
                topic: "Four Major Organizations",
                emoji: "🥊🏆",
                question: "Name the four major boxing bodies?",
                options: [
                    "WBC, WBA, IBF, WBO",
                    "ABC, DEF, GHI, JKL",
                    "Only one organization",
                    "Ten organizations"
                ],
                correct: 0
            },
            {
                topic: "Ring Card Girls",
                emoji: "🥊🔢",
                question: "What do ring card girls display?",
                options: [
                    "Scores",
                    "Time",
                    "Round number between rounds",
                    "Fighter names"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Punch Types",
                emoji: "🥊👊",
                question: "Name three types of punches?",
                options: [
                    "Jab",
                    "Cross",
                    "Hook",
                    "Uppercut",
                    "Overhand",
                ],
                correct: 0
            },
            {
                topic: "Weight Classes",
                emoji: "🥊⚖️",
                question: "Name three boxing weight classes?",
                options: [
                    "Heavyweight",
                    "Welterweight",
                    "Middleweight",
                    "Lightweight",
                    "Featherweight",
                ],
                correct: 0
            },
            {
                topic: "Boxing Legends",
                emoji: "🥊⭐",
                question: "Name three legendary boxers?",
                options: [
                    "Muhammad Ali",
                    "Mike Tyson",
                    "Floyd Mayweather",
                    "Manny Pacquiao",
                    "Sugar Ray Robinson",
                ],
                correct: 0
            },
            {
                topic: "Victory Methods",
                emoji: "🥊🏆",
                question: "Name three ways to win in boxing?",
                options: [
                    "Knockout (KO)",
                    "Technical Knockout (TKO)",
                    "Decision",
                    "Disqualification",
                ],
                correct: 0
            },
            {
                topic: "Defense Techniques",
                emoji: "🥊🛡️",
                question: "Name three defensive moves?",
                options: [
                    "Slip",
                    "Bob and weave",
                    "Block",
                    "Parry",
                    "Roll",
                ],
                correct: 0
            },
            {
                topic: "Boxing Terms",
                emoji: "🥊📖",
                question: "Name three boxing terminology terms?",
                options: [
                    "Clinch",
                    "Southpaw",
                    "Orthodox",
                    "Counter punch",
                    "Combination",
                ],
                correct: 0
            },
            {
                topic: "Famous Fights",
                emoji: "🥊🔥",
                question: "Name three famous boxing rivalries or fights?",
                options: [
                    "Ali vs Frazier",
                    "Mayweather vs Pacquiao",
                    "Tyson vs Holyfield",
                    "Hagler vs Hearns",
                ],
                correct: 0
            },
            {
                topic: "Training Equipment",
                emoji: "🥊🎽",
                question: "Name three boxing training tools?",
                options: [
                    "Heavy bag",
                    "Speed bag",
                    "Jump rope",
                    "Focus mitts",
                    "Double-end bag",
                ],
                correct: 0
            },
            {
                topic: "Boxing Organizations",
                emoji: "🥊🏢",
                question: "Name three boxing governing bodies?",
                options: [
                    "WBC",
                    "WBA",
                    "IBF",
                    "WBO",
                ],
                correct: 0
            },
            {
                topic: "Fouls",
                emoji: "🥊🚫",
                question: "Name three boxing fouls?",
                options: [
                    "Low blow",
                    "Rabbit punch",
                    "Headbutt",
                    "Hitting behind head",
                    "Holding and hitting",
                ],
                correct: 0
            }
        ]
    },
    12: {
        "easy": [
            {
                topic: "Track Basics",
                emoji: "🏃💨",
                question: "Is track and field an athletic sport?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Running",
                emoji: "🏃‍♂️🏃‍♀️",
                question: "Does track include running events?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Oval Track",
                emoji: "🏃⭕",
                question: "Is the track typically oval-shaped?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Field Events",
                emoji: "🏃🎯",
                question: "Does field include throwing and jumping?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Starting Blocks",
                emoji: "🏃🔲",
                question: "Do sprinters use starting blocks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Lanes",
                emoji: "🏃📏",
                question: "Are there marked lanes on the track?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Olympics",
                emoji: "🏃🥇",
                question: "Is track and field in the Olympics?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Hurdles",
                emoji: "🏃🚧",
                question: "Are hurdles obstacles to jump over?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Photo Finish",
                emoji: "🏃📸",
                question: "Is photo finish used for close races?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Spikes",
                emoji: "🏃👟",
                question: "Do runners wear spiked shoes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Sprint Distance",
                emoji: "🏃💨",
                question: "What is considered a sprint?",
                options: [
                    "100m, 200m, 400m",
                    "1500m, 5000m"
                ],
                correct: 0
            },
            {
                topic: "Marathon",
                emoji: "🏃🌍",
                question: "How long is a marathon?",
                options: [
                    "26 miles",
                    "26.2 miles (42.195 km)"
                ],
                correct: 1
            },
            {
                topic: "High Jump",
                emoji: "🏃⬆️",
                question: "What does high jump measure?",
                options: [
                    "Height cleared over bar",
                    "Distance jumped"
                ],
                correct: 1
            },
            {
                topic: "Relay",
                emoji: "🏃🤝",
                question: "What is passed in relay race?",
                options: [
                    "Trophy",
                    "Baton"
                ],
                correct: 1
            },
            {
                topic: "Shot Put",
                emoji: "🏃⚫",
                question: "What is shot put?",
                options: [
                    "Throwing heavy metal ball",
                    "Running event"
                ],
                correct: 0
            },
            {
                topic: "Long Jump",
                emoji: "🏃➡️",
                question: "What is measured in long jump?",
                options: [
                    "Time",
                    "Distance from takeoff to landing"
                ],
                correct: 1
            },
            {
                topic: "False Start",
                emoji: "🏃🚫",
                question: "What happens with false start?",
                options: [
                    "Disqualification",
                    "No penalty"
                ],
                correct: 0
            },
            {
                topic: "Pole Vault",
                emoji: "🏃🎣",
                question: "What is used in pole vault?",
                options: [
                    "Ladder",
                    "Flexible pole to clear bar"
                ],
                correct: 0
            },
            {
                topic: "Javelin",
                emoji: "🏃🗡️",
                question: "What is javelin?",
                options: [
                    "Spear-like throwing event",
                    "Running style"
                ],
                correct: 0
            },
            {
                topic: "Steeplechase",
                emoji: "🏃💧",
                question: "What makes steeplechase unique?",
                options: [
                    "Very short",
                    "Barriers and water jump"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Decathlon",
                emoji: "🏃🔟",
                question: "How many events in decathlon?",
                options: [
                    "10 events over 2 days",
                    "5 events",
                    "20 events"
                ],
                correct: 0
            },
            {
                topic: "Heptathlon",
                emoji: "🏃7️⃣",
                question: "How many events in heptathlon?",
                options: [
                    "10 events",
                    "7 events over 2 days",
                    "3 events"
                ],
                correct: 0
            },
            {
                topic: "Wind Assistance",
                emoji: "🏃💨",
                question: "What wind speed invalidates records?",
                options: [
                    "Over +2.0 m/s",
                    "No limit",
                    "Any wind"
                ],
                correct: 1
            },
            {
                topic: "Triple Jump",
                emoji: "🏃3️⃣",
                question: "What is triple jump sequence?",
                options: [
                    "Three separate jumps",
                    "Hop, step, and jump",
                    "Running only"
                ],
                correct: 1
            },
            {
                topic: "Fosbury Flop",
                emoji: "🏃🔄",
                question: "What is Fosbury Flop?",
                options: [
                    "High jump technique going backwards over bar",
                    "Running style",
                    "Throwing method"
                ],
                correct: 1
            },
            {
                topic: "Hammer Throw",
                emoji: "🏃🔨",
                question: "What is thrown in hammer throw?",
                options: [
                    "Actual hammer",
                    "Metal ball on wire",
                    "Disc"
                ],
                correct: 1
            },
            {
                topic: "Stagger Start",
                emoji: "🏃📐",
                question: "Why are 200m/400m starts staggered?",
                options: [
                    "Compensate for curve distance differences",
                    "Random placement",
                    "Faster runners start back"
                ],
                correct: 1
            },
            {
                topic: "Exchange Zone",
                emoji: "🏃🔄",
                question: "What is relay exchange zone?",
                options: [
                    "Anywhere on track",
                    "20-30 meter zone for baton pass",
                    "Starting line"
                ],
                correct: 0
            },
            {
                topic: "Discus",
                emoji: "🏃💿",
                question: "How is discus thrown?",
                options: [
                    "Spinning release from circle",
                    "Straight throw",
                    "Underhand toss"
                ],
                correct: 0
            },
            {
                topic: "Pace Maker",
                emoji: "🏃👥",
                question: "What is a pace maker (rabbit)?",
                options: [
                    "Winner",
                    "Runner who sets pace, doesn't compete for win",
                    "Official"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Track Length",
                emoji: "🏃📏",
                question: "What is standard track length?",
                options: [
                    "400 meters",
                    "500 meters",
                    "300 meters",
                    "200 meters"
                ],
                correct: 1
            },
            {
                topic: "Lane Width",
                emoji: "🏃↔️",
                question: "What is standard lane width?",
                options: [
                    "1.22 meters (4 feet)",
                    "2 meters",
                    "0.5 meters",
                    "3 meters"
                ],
                correct: 0
            },
            {
                topic: "Shot Put Weight Men",
                emoji: "🏃⚫",
            {
                topic: "Hurdle Height Men",
                emoji: "🏃🚧",
            {
                topic: "World Record 100m",
                emoji: "🏃⚡",
                question: "Who holds men's 100m world record?",
                options: [
                    "Carl Lewis",
                    "Usain Bolt (9.58 seconds)",
                    "Jesse Owens",
                    "Michael Johnson"
                ],
                correct: 1
            },
            {
                topic: "Javelin Specifications",
                emoji: "🏃🗡️",
            {
                topic: "Steeplechase Distance",
                emoji: "🏃💧",
                question: "What is standard steeplechase distance?",
                options: [
                    "1500m",
                    "5000m",
                    "3000m",
                    "10000m"
                ],
                correct: 1
            },
            {
                topic: "IAAF",
                emoji: "🏃🌍",
                question: "What is IAAF (now World Athletics)?",
                options: [
                    "International governing body for athletics",
                    "Olympic committee",
                    "Training organization",
                    "Equipment manufacturer"
                ],
                correct: 1
            },
            {
                topic: "Diamond League",
                emoji: "🏃💎",
                question: "What is Diamond League?",
                options: [
                    "Olympic event",
                    "Regional meet",
                    "Elite international track series",
                    "Training program"
                ],
                correct: 0
            },
            {
                topic: "Personal Best",
                emoji: "🏃📊",
                question: "What does PB stand for?",
                options: [
                    "Personal Best (athlete's best performance)",
                    "Professional Boxing",
                    "Practice Bout",
                    "Perfect Balance"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Sprint Events",
                emoji: "🏃💨",
                question: "Name the three main sprint distances?",
                options: [
                    "100 meters",
                    "200 meters",
                    "400 meters",
                ],
                correct: 0
            },
            {
                topic: "Throwing Events",
                emoji: "🏃🎯",
                question: "Name the four throwing events?",
                options: [
                    "Shot put",
                    "Discus",
                    "Javelin",
                    "Hammer throw",
                ],
                correct: 0
            },
            {
                topic: "Jumping Events",
                emoji: "🏃⬆️",
                question: "Name the four jumping events?",
                options: [
                    "High jump",
                    "Long jump",
                    "Triple jump",
                    "Pole vault",
                ],
                correct: 0
            },
            {
                topic: "Distance Running",
                emoji: "🏃🌍",
                question: "Name three long distance events?",
                options: [
                    "1500m",
                    "5000m",
                    "10000m",
                    "Marathon",
                    "Half marathon",
                ],
                correct: 0
            },
            {
                topic: "Track Legends",
                emoji: "🏃⭐",
                question: "Name three legendary track athletes?",
                options: [
                    "Usain Bolt",
                    "Carl Lewis",
                    "Jesse Owens",
                    "Michael Johnson",
                    "Florence Griffith-Joyner",
                ],
                correct: 0
            },
            {
                topic: "Hurdle Events",
                emoji: "🏃🚧",
                question: "Name three hurdle race distances?",
                options: [
                    "100m hurdles (women)",
                    "110m hurdles (men)",
                    "400m hurdles",
                    "3000m steeplechase",
                ],
                correct: 0
            },
            {
                topic: "Relay Races",
                emoji: "🏃🤝",
                question: "Name the two standard relay races?",
                options: [
                    "4x100 meter relay",
                    "4x400 meter relay",
                ],
                correct: 0
            },
            {
                topic: "Combined Events",
                emoji: "🏃💪",
                question: "Name the two main combined events?",
                options: [
                    "Decathlon (men - 10 events)",
                    "Heptathlon (women - 7 events)",
                ],
                correct: 0
            },
            {
                topic: "Track Equipment",
                emoji: "🏃🎽",
                question: "Name three pieces of track and field equipment?",
                options: [
                    "Starting blocks",
                    "Hurdles",
                    "Pole vault pole",
                    "Javelin",
                    "Shot put",
                    "Baton",
                ],
                correct: 0
            },
            {
                topic: "Championships",
                emoji: "🏃🏆",
                question: "Name three major track championships?",
                options: [
                    "Olympics",
                    "World Championships",
                    "Diamond League",
                    "Continental Championships",
                ],
                correct: 0
            }
        ]
    },
    13: {
        "easy": [
            {
                topic: "Cycling Basics",
                emoji: "🚴‍♂️🚴‍♀️",
                question: "Is cycling done on bicycles?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pedals",
                emoji: "🚴🦶",
                question: "Do cyclists pedal to move forward?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Helmet",
                emoji: "🚴🪖",
                question: "Should cyclists wear helmets for safety?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Road Racing",
                emoji: "🚴🛣️",
                question: "Can cycling races be on roads?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Gears",
                emoji: "🚴⚙️",
                question: "Do bikes have different gears?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Tour de France",
                emoji: "🚴🇫🇷",
                question: "Is Tour de France a famous cycling race?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Wheels",
                emoji: "🚴⭕",
                question: "Does a bicycle have two wheels?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Track Cycling",
                emoji: "🚴🏟️",
                question: "Can cycling be done on indoor tracks?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mountain Biking",
                emoji: "🚴⛰️",
                question: "Is mountain biking done on rough terrain?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Olympics",
                emoji: "🚴🥇",
                question: "Is cycling an Olympic sport?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Yellow Jersey",
                emoji: "🚴🟡",
                question: "What does yellow jersey signify?",
                options: [
                    "Tour de France overall leader",
                    "Last place"
                ],
                correct: 1
            },
            {
                topic: "Peloton",
                emoji: "🚴👥",
                question: "What is the peloton?",
                options: [
                    "Finish line",
                    "Main group of riders"
                ],
                correct: 0
            },
            {
                topic: "Sprint",
                emoji: "🚴💨",
                question: "What is a sprint in cycling?",
                options: [
                    "Final burst to finish line",
                    "Slow riding"
                ],
                correct: 1
            },
            {
                topic: "Domestique",
                emoji: "🚴🤝",
                question: "What is a domestique?",
                options: [
                    "Team leader",
                    "Support rider for team leader"
                ],
                correct: 0
            },
            {
                topic: "Drafting",
                emoji: "🚴🌬️",
                question: "What is drafting?",
                options: [
                    "Riding behind others to reduce wind resistance",
                    "Drawing race route"
                ],
                correct: 1
            },
            {
                topic: "Time Trial",
                emoji: "🚴⏱️",
                question: "What is a time trial?",
                options: [
                    "Practice session",
                    "Individual race against clock"
                ],
                correct: 0
            },
            {
                topic: "Breakaway",
                emoji: "🚴➡️",
            {
                topic: "Cadence",
                emoji: "🚴🔄",
                question: "What is cadence?",
                options: [
                    "Prize money",
                    "Pedaling rate (RPM)"
                ],
                correct: 1
            },
            {
                topic: "King of Mountains",
                emoji: "🚴⛰️",
                question: "What does polka dot jersey represent?",
                options: [
                    "Best climber",
                    "Oldest rider"
                ],
                correct: 1
            },
            {
                topic: "BMX",
                emoji: "🚴🏁",
                question: "What is BMX racing?",
                options: [
                    "Road racing",
                    "Short track racing on small bikes"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Grand Tours",
                emoji: "🚴🌍",
                question: "How many Grand Tours exist?",
                options: [
                    "3 (Tour de France, Giro d'Italia, Vuelta a España)",
                    "5 tours",
                    "1 tour"
                ],
                correct: 0
            },
            {
                topic: "Echelon",
                emoji: "🚴↗️",
                question: "What is an echelon formation?",
                options: [
                    "Diagonal line for crosswind protection",
                    "Straight line",
                    "Circle formation"
                ],
                correct: 0
            },
            {
                topic: "Bonk/Bonking",
                emoji: "🚴😵",
                question: "What is bonking?",
                options: [
                    "Winning sprint",
                    "Hitting the wall, energy depletion",
                    "Crashing"
                ],
                correct: 1
            },
            {
                topic: "Keirin",
                emoji: "🚴🏍️",
                question: "What is keirin racing?",
                options: [
                    "Track race following motorized pacer",
                    "Mountain race",
                    "Time trial"
                ],
                correct: 0
            },
            {
                topic: "Grupetto",
                emoji: "🚴👥",
                question: "What is the grupetto?",
                options: [
                    "Leading group",
                    "Group of riders trying to make time cut",
                    "Support crew"
                ],
                correct: 0
            },
            {
                topic: "Rouleur",
                emoji: "🚴💪",
                question: "What is a rouleur?",
                options: [
                    "All-rounder on flat terrain",
                    "Sprinter only",
                    "Climbing specialist"
                ],
                correct: 1
            },
            {
                topic: "Madison",
                emoji: "🚴🔄",
                question: "What is Madison racing?",
                options: [
                    "Track relay where partners exchange",
                    "Road race",
                    "Solo event"
                ],
                correct: 0
            },
            {
                topic: "Musette",
                emoji: "🚴🎒",
                question: "What is a musette?",
                options: [
                    "Feed bag handed to riders",
                    "Bike part",
                    "Jersey type"
                ],
                correct: 0
            },
            {
                topic: "Prologue",
                emoji: "🚴🎬",
                question: "What is a prologue?",
                options: [
                    "Short time trial before stage race",
                    "Final stage",
                    "Rest day"
                ],
                correct: 0
            },
            {
                topic: "Neutralized",
                emoji: "🚴⏸️",
                question: "What does neutralized mean?",
                options: [
                    "Section where racing is suspended",
                    "Race is over",
                    "Maximum speed"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Tour Stages",
                emoji: "🚴🔢",
                question: "How many stages typically in Tour de France?",
                options: [
                    "21 stages over 23 days",
                    "10 stages",
                    "30 stages",
                    "15 stages"
                ],
                correct: 1
            },
            {
                topic: "Velodrome Banking",
                emoji: "🚴📐",
                question: "What is typical velodrome banking angle?",
                options: [
                    "42-45 degrees in turns",
                    "10 degrees",
                    "90 degrees",
                    "20 degrees"
                ],
                correct: 1
            },
            {
                topic: "Gear Ratio",
                emoji: "🚴⚙️",
                question: "What is a common pro gear ratio?",
                options: [
                    "53/39 chainrings with 11-28 cassette",
                    "10/10",
                    "100/50",
                    "5/2"
                ],
                correct: 1
            },
            {
                topic: "Power Output",
                emoji: "🚴💪",
                question: "What is elite cyclist's FTP?",
                options: [
                    "350-450+ watts",
                    "100 watts",
                    "50 watts",
                    "1000 watts"
                ],
                correct: 0
            },
            {
                topic: "UCI",
                emoji: "🚴🌍",
                question: "What is UCI?",
                options: [
                    "Union Cycliste Internationale (governing body)",
                    "Bike manufacturer",
                    "Race series",
                    "Training program"
                ],
                correct: 0
            },
            {
                topic: "Hour Record",
                emoji: "🚴⏰",
                question: "What is hour record?",
                options: [
                    "Maximum distance in one hour on track",
                    "Fastest lap",
                    "Most wins",
                    "Training duration"
                ],
                correct: 1
            },
            {
                topic: "Green Jersey",
                emoji: "🚴🟢",
                question: "What does green jersey represent in Tour?",
                options: [
                    "Points classification (sprinter)",
                    "Climber",
                    "Youngest rider",
                    "Local rider"
                ],
                correct: 0
            },
            {
                topic: "Bike Weight",
                emoji: "🚴⚖️",
                question: "What is UCI minimum bike weight?",
                options: [
                    "6.8 kg (14.99 lbs)",
                    "10 kg",
                    "3 kg",
                    "15 kg"
                ],
                correct: 1
            },
            {
                topic: "Average Speed",
                emoji: "🚴💨",
                question: "What is Tour de France average winning speed?",
                options: [
                    "Around 40-42 km/h",
                    "20 km/h",
                    "80 km/h",
                    "10 km/h"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "🚴🏛️",
                question: "How many Monument classics races?",
                options: [
                    "5 (Milan-San Remo, Tour of Flanders, Paris-Roubaix, Liège-Bastogne-Liège, Il Lombardia)",
                    "3",
                    "10",
                    "1"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Cycling Disciplines",
                emoji: "🚴🎯",
                question: "Name three cycling disciplines?",
                options: [
                    "Road racing",
                    "Track cycling",
                    "Mountain biking",
                    "BMX",
                    "Cyclocross",
                ],
                correct: 0
            },
            {
                topic: "Grand Tours",
                emoji: "🚴🌍",
                question: "Name the three Grand Tours?",
                options: [
                    "Tour de France",
                    "Giro d'Italia",
                    "Vuelta a España",
                ],
                correct: 0
            },
            {
                topic: "Cycling Legends",
                emoji: "🚴⭐",
                question: "Name three legendary cyclists?",
                options: [
                    "Eddy Merckx",
                    "Lance Armstrong",
                    "Miguel Indurain",
                    "Chris Froome",
                    "Peter Sagan",
                ],
                correct: 0
            },
            {
                topic: "Tour Jerseys",
                emoji: "🚴👕",
                question: "Name three Tour de France jerseys?",
                options: [
                    "Yellow (overall leader)",
                    "Green (sprinter)",
                    "Polka dot (climber)",
                    "White (young rider)",
                ],
                correct: 0
            },
            {
                topic: "Bike Components",
                emoji: "🚴🔧",
                question: "Name three major bike components?",
                options: [
                    "Frame",
                    "Wheels",
                    "Handlebars",
                    "Gears/Drivetrain",
                    "Brakes",
                    "Pedals",
                ],
                correct: 0
            },
            {
                topic: "Track Events",
                emoji: "🚴🏟️",
                question: "Name three track cycling events?",
                options: [
                    "Sprint",
                    "Keirin",
                    "Team pursuit",
                    "Madison",
                    "Omnium",
                ],
                correct: 0
            },
            {
                topic: "Cycling Terms",
                emoji: "🚴📖",
                question: "Name three cycling terminology terms?",
                options: [
                    "Peloton",
                    "Breakaway",
                    "Drafting",
                    "Cadence",
                    "Bonking",
                    "Domestique",
                ],
                correct: 0
            },
            {
                topic: "Classic Races",
                emoji: "🚴🏛️",
                question: "Name three Classic cycling races?",
                options: [
                    "Paris-Roubaix",
                    "Tour of Flanders",
                    "Milan-San Remo",
                    "Liège-Bastogne-Liège",
                ],
                correct: 0
            },
            {
                topic: "Cycling Tactics",
                emoji: "🚴🧠",
                question: "Name three cycling racing tactics?",
                options: [
                    "Drafting",
                    "Breakaway",
                    "Lead-out train",
                    "Attacking",
                    "Counterattack",
                ],
                correct: 0
            },
            {
                topic: "Climbing Categories",
                emoji: "🚴⛰️",
                question: "Name three types of climbs in cycling?",
                options: [
                    "Category 4",
                    "Category 3",
                    "Category 2",
                    "Category 1",
                    "Hors Catégorie (HC)",
                ],
                correct: 0
            }
        ]
    },
    14: {
        "easy": [
            {
                topic: "Gymnastics Basics",
                emoji: "🤸‍♀️💪",
                question: "Does gymnastics require flexibility?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Apparatus",
                emoji: "🤸‍♂️🏋️",
                question: "Are there different apparatus in gymnastics?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Floor Exercise",
                emoji: "🤸‍♀️🎭",
                question: "Is floor exercise performed on a mat?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Scoring",
                emoji: "🤸‍♂️🔢",
                question: "Do judges score gymnastics routines?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Balance Beam",
                emoji: "🤸‍♀️━",
                question: "Is balance beam a gymnastics apparatus?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Vault",
                emoji: "🤸‍♂️➡️",
                question: "Does vault involve running and jumping?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Uneven Bars",
                emoji: "🤸‍♀️━━",
                question: "Are uneven bars for women's gymnastics?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Olympics",
                emoji: "🤸‍♂️🥇",
                question: "Is gymnastics an Olympic sport?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Tumbling",
                emoji: "🤸‍♀️🔄",
                question: "Does gymnastics include tumbling passes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Leotard",
                emoji: "🤸‍♂️👗",
                question: "Do gymnasts wear special uniforms?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Perfect 10",
                emoji: "🤸‍♀️💯",
                question: "What was perfect score historically?",
                options: [
                    "10.0 (changed in 2006)",
                    "100"
                ],
                correct: 0
            },
            {
                topic: "All-Around",
                emoji: "🤸‍♂️🏆",
                question: "What is all-around competition?",
                options: [
                    "Competing on all apparatus",
                    "One apparatus only"
                ],
                correct: 1
            },
            {
                topic: "Pommel Horse",
                emoji: "🤸‍♂️🐴",
                question: "What is pommel horse?",
                options: [
                    "Floor routine",
                    "Men's apparatus with handles"
                ],
                correct: 1
            },
            {
                topic: "Dismount",
                emoji: "🤸‍♀️⬇️",
                question: "What is a dismount?",
                options: [
                    "Final move off apparatus",
                    "Starting position"
                ],
                correct: 1
            },
            {
                topic: "Parallel Bars",
                emoji: "🤸‍♂️═",
                question: "What are parallel bars?",
                options: [
                    "Women's event",
                    "Men's apparatus with two bars"
                ],
                correct: 1
            },
            {
                topic: "Artistic Gymnastics",
                emoji: "🤸‍♀️🎨",
                question: "What is artistic gymnastics?",
                options: [
                    "Traditional Olympic apparatus gymnastics",
                    "Dancing only"
                ],
                correct: 1
            },
            {
                topic: "Salto",
                emoji: "🤸‍♂️🔄",
                question: "What is a salto?",
                options: [
                    "Landing",
                    "Flip or somersault"
                ],
                correct: 1
            },
            {
                topic: "Deduction",
                emoji: "🤸‍♀️➖",
                question: "What causes deductions?",
                options: [
                    "Errors or form breaks",
                    "Perfect execution"
                ],
                correct: 1
            },
            {
                topic: "High Bar",
                emoji: "🤸‍♂️━",
                question: "What is high bar?",
                options: [
                    "Floor level",
                    "Men's horizontal bar apparatus"
                ],
                correct: 1
            },
            {
                topic: "Pike Position",
                emoji: "🤸‍♀️📐",
                question: "What is pike position?",
                options: [
                    "Body bent at hips, legs straight",
                    "Standing straight"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Yurchenko Vault",
                emoji: "🤸‍♀️🔄",
                question: "What is Yurchenko vault?",
                options: [
                    "Round-off onto springboard, back handspring onto vault",
                    "Forward jump",
                    "Side vault"
                ],
                correct: 1
            },
            {
                topic: "Code of Points",
                emoji: "🤸‍♂️📖",
                question: "What is Code of Points?",
                options: [
                    "Scoring system and rules manual",
                    "Team name",
                    "Routine choreography"
                ],
                correct: 0
            },
            {
                topic: "D-Score",
                emoji: "🤸‍♀️🎯",
                question: "What is D-score?",
                options: [
                    "Difficulty score (based on skills performed)",
                    "Final score",
                    "Deduction score"
                ],
                correct: 1
            },
            {
                topic: "E-Score",
                emoji: "🤸‍♂️✨",
                question: "What is E-score?",
                options: [
                    "Entry score",
                    "Execution score (starts at 10, deductions applied)",
                    "Exit score"
                ],
                correct: 0
            },
            {
                topic: "Release Move",
                emoji: "🤸‍♀️🕊️",
                question: "What is a release move?",
                options: [
                    "Letting go of bar and re-grasping",
                    "Finishing routine",
                    "Starting position"
                ],
                correct: 1
            },
            {
                topic: "Tsukahara",
                emoji: "🤸‍♂️🌀",
                question: "What is Tsukahara vault?",
                options: [
                    "Half turn onto vault, then flip",
                    "Straight vault",
                    "No rotation"
                ],
                correct: 0
            },
            {
                topic: "Giant Swing",
                emoji: "🤸‍♀️⭕",
                question: "What is giant swing?",
                options: [
                    "360-degree rotation around bar",
                    "Small circle",
                    "Half turn"
                ],
                correct: 0
            },
            {
                topic: "Mount",
                emoji: "🤸‍♂️⬆️",
                question: "What is a mount?",
                options: [
                    "Getting onto apparatus",
                    "Getting off",
                    "Middle of routine"
                ],
                correct: 1
            },
            {
                topic: "Layout",
                emoji: "🤸‍♀️━",
                question: "What is layout position?",
                options: [
                    "Body fully extended in flip",
                    "Tucked position",
                    "Bent knees"
                ],
                correct: 0
            },
            {
                topic: "Stick the Landing",
                emoji: "🤸‍♂️✅",
        ],
        "expert": [
            {
                topic: "Balance Beam Width",
                emoji: "🤸‍♀️📏",
                question: "What is balance beam width?",
                options: [
                    "10 cm (4 inches)",
                    "30 cm",
                    "50 cm",
                    "5 cm"
                ],
                correct: 1
            },
            {
                topic: "Vault Table Height",
                emoji: "🤸‍♂️📐",
                question: "What is vault table height for men?",
                options: [
                    "135 cm",
                    "150 cm",
                    "100 cm",
                    "200 cm"
                ],
                correct: 1
            },
            {
                topic: "Floor Exercise Size",
                emoji: "🤸‍♀️⬜",
                question: "What is floor exercise area size?",
                options: [
                    "12m x 12m",
                    "20m x 20m",
                    "8m x 8m",
                    "15m x 15m"
                ],
                correct: 0
            },
            {
                topic: "FIG",
                emoji: "🤸‍♂️🌍",
                question: "What is FIG?",
                options: [
                    "International Gymnastics Federation",
                    "National team",
                    "Equipment brand",
                    "Scoring app"
                ],
                correct: 0
            },
            {
                topic: "Uneven Bars Height",
                emoji: "🤸‍♀️📏",
                question: "What is height difference in uneven bars?",
                options: [
                    "High bar 250cm, low bar 170cm",
                    "Same height",
                    "High 300cm, low 100cm",
                    "High 200cm, low 150cm"
                ],
                correct: 1
            },
            {
                topic: "Rhythmic Gymnastics",
                emoji: "🤸‍♀️🎀",
                question: "What equipment used in rhythmic gymnastics?",
                options: [
                    "Rope, hoop, ball, clubs, ribbon",
                    "Only balance beam",
                    "Weights",
                    "No equipment"
                ],
                correct: 0
            },
            {
                topic: "Team Competition Format",
                emoji: "🤸‍♂️👥",
                question: "How many gymnasts per Olympic team?",
                options: [
                    "4 gymnasts (current format)",
                    "10 gymnasts",
                    "2 gymnasts",
                    "20 gymnasts"
                ],
                correct: 0
            },
            {
                topic: "Rings Height",
                emoji: "🤸‍♂️⭕",
                question: "What height are still rings?",
                options: [
                    "280 cm from floor",
                    "150 cm",
                    "400 cm",
                    "100 cm"
                ],
                correct: 1
            },
            {
                topic: "Difficulty Values",
                emoji: "🤸‍♀️🎯",
                question: "What is highest skill difficulty level?",
                options: [
                    "I (previously J)",
                    "A",
                    "Z",
                    "E"
                ],
                correct: 1
            },
            {
                topic: "Simone Biles",
                emoji: "🤸‍♀️👑",
                question: "How many Olympic gold medals does Simone Biles have?",
                options: [
                    "7 Olympic medals (4 gold in 2016, 2 gold 1 silver 1 bronze in 2020/21)",
                    "1 medal",
                    "No medals",
                    "20 medals"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Women's Apparatus",
                emoji: "🤸‍♀️🏋️",
                question: "Name the four women's artistic gymnastics events?",
                options: [
                    "Vault",
                    "Uneven bars",
                    "Balance beam",
                    "Floor exercise",
                ],
                correct: 0
            },
            {
                topic: "Men's Apparatus",
                emoji: "🤸‍♂️🏋️",
                question: "Name the six men's artistic gymnastics events?",
                options: [
                    "Floor exercise",
                    "Pommel horse",
                    "Still rings",
                    "Vault",
                    "Parallel bars",
                    "Horizontal bar",
                ],
                correct: 0
            },
            {
                topic: "Gymnastics Skills",
                emoji: "🤸‍♀️💪",
                question: "Name three gymnastics skills?",
                options: [
                    "Backflip",
                    "Handspring",
                    "Cartwheel",
                    "Split",
                    "Back handspring",
                    "Round-off",
                ],
                correct: 0
            },
            {
                topic: "Body Positions",
                emoji: "🤸‍♂️📐",
                question: "Name three gymnastics body positions?",
                options: [
                    "Pike",
                    "Tuck",
                    "Layout",
                    "Straddle",
                    "Arch",
                ],
                correct: 0
            },
            {
                topic: "Gymnastics Legends",
                emoji: "🤸‍♀️⭐",
                question: "Name three legendary gymnasts?",
                options: [
                    "Simone Biles",
                    "Nadia Comăneci",
                    "Olga Korbut",
                    "Mary Lou Retton",
                    "Kohei Uchimura",
                ],
                correct: 0
            },
            {
                topic: "Gymnastics Types",
                emoji: "🤸‍♂️🎯",
                question: "Name three types of gymnastics?",
                options: [
                    "Artistic",
                    "Rhythmic",
                    "Trampoline",
                    "Acrobatic",
                    "Aerobic",
                ],
                correct: 0
            },
            {
                topic: "Vault Types",
                emoji: "🤸‍♀️➡️",
                question: "Name three types of vaults?",
                options: [
                    "Yurchenko",
                    "Tsukahara",
                    "Handspring",
                    "Rudi",
                    "Front handspring",
                ],
                correct: 0
            },
            {
                topic: "Floor Tumbling",
                emoji: "🤸‍♂️🔄",
                question: "Name three tumbling skills?",
                options: [
                    "Back tuck",
                    "Layout",
                    "Full twist",
                    "Double back",
                    "Arabian",
                ],
                correct: 0
            },
            {
                topic: "Scoring Components",
                emoji: "🤸‍♀️📊",
                question: "Name three factors in gymnastics scoring?",
                options: [
                    "Difficulty (D-score)",
                    "Execution (E-score)",
                    "Artistry",
                    "Deductions",
                    "Bonus",
                ],
                correct: 0
            },
            {
                topic: "Championships",
                emoji: "🤸‍♂️🏆",
                question: "Name three major gymnastics competitions?",
                options: [
                    "Olympics",
                    "World Championships",
                    "World Cup",
                    "Continental Championships",
                ],
                correct: 0
            }
        ]
    },
    15: {
        "easy": [
            {
                topic: "Skiing Basics",
                emoji: "⛷️❄️",
                question: "Is skiing done on snow?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Skis",
                emoji: "⛷️🎿",
                question: "Do skiers wear skis on their feet?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Mountains",
                emoji: "⛷️⛰️",
                question: "Is skiing typically done on mountains?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Poles",
                emoji: "⛷️🎋",
                question: "Do skiers use poles for balance?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Downhill",
                emoji: "⛷️⬇️",
                question: "Do skiers go down slopes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Ski Lift",
                emoji: "⛷️🚡",
                question: "Do ski lifts take skiers up mountains?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Helmet",
                emoji: "⛷️🪖",
                question: "Should skiers wear helmets for safety?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Winter Olympics",
                emoji: "⛷️🥇",
                question: "Is skiing a Winter Olympic sport?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Goggles",
                emoji: "⛷️🥽",
                question: "Do skiers wear goggles?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Slopes",
                emoji: "⛷️🏔️",
                question: "Are there different difficulty slopes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Green Circle",
                emoji: "⛷️🟢",
                question: "What does green circle mean?",
                options: [
                    "Beginner/easy slope",
                    "Expert slope"
                ],
                correct: 1
            },
            {
                topic: "Black Diamond",
                emoji: "⛷️⬛",
                question: "What does black diamond indicate?",
                options: [
                    "Easy slope",
                    "Expert/difficult slope"
                ],
                correct: 0
            },
            {
                topic: "Slalom",
                emoji: "⛷️🎯",
                question: "What is slalom skiing?",
                options: [
                    "Racing through gates/poles",
                    "Jumping"
                ],
                correct: 1
            },
            {
                topic: "Moguls",
                emoji: "⛷️⛰️",
                question: "What are moguls?",
                options: [
                    "Ski brand",
                    "Bumps on slope"
                ],
                correct: 0
            },
            {
                topic: "Snowplow",
                emoji: "⛷️🔺",
                question: "What is snowplow technique?",
                options: [
                    "Beginner braking with ski tips together",
                    "Advanced turn"
                ],
                correct: 0
            },
            {
                topic: "Powder",
                emoji: "⛷️☁️",
                question: "What is powder skiing?",
                options: [
                    "Icy conditions",
                    "Fresh, soft snow"
                ],
                correct: 0
            },
            {
                topic: "Parallel Turn",
                emoji: "⛷️═",
                question: "What is parallel skiing?",
                options: [
                    "Skis together while turning",
                    "Skis apart"
                ],
                correct: 1
            },
            {
                topic: "Chairlift",
                emoji: "⛷️🪑",
                question: "What is a chairlift?",
                options: [
                    "Restaurant",
                    "Aerial lift with seats"
                ],
                correct: 1
            },
            {
                topic: "Après-ski",
                emoji: "⛷️🍻",
                question: "What is après-ski?",
                options: [
                    "Social activities after skiing",
                    "Ski technique"
                ],
                correct: 1
            },
            {
                topic: "Ski Pass",
                emoji: "⛷️🎫",
                question: "What is a ski pass?",
                options: [
                    "Technique move",
                    "Ticket for lift access"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Carving",
                emoji: "⛷️🔪",
                question: "What is carving?",
                options: [
                    "Turning on ski edges with minimal skidding",
                    "Straight skiing",
                    "Jumping"
                ],
                correct: 0
            },
            {
                topic: "Giant Slalom",
                emoji: "⛷️🎯",
                question: "How does giant slalom differ from slalom?",
                options: [
                    "Wider turns, faster speeds",
                    "Identical",
                    "Slower speeds"
                ],
                correct: 1
            },
            {
                topic: "Telemark",
                emoji: "⛷️🦵",
                question: "What is telemark skiing?",
                options: [
                    "Downhill racing",
                    "Free-heel skiing with lunging turns",
                    "Snowboarding"
                ],
                correct: 0
            },
            {
                topic: "Ski Wax",
                emoji: "⛷️🕯️",
                question: "Why wax skis?",
                options: [
                    "Improve glide and performance",
                    "Make them shiny",
                    "No purpose"
                ],
                correct: 0
            },
            {
                topic: "Off-Piste",
                emoji: "⛷️🏔️",
                question: "What is off-piste skiing?",
                options: [
                    "On marked runs",
                    "Outside groomed slopes",
                    "Indoor skiing"
                ],
                correct: 1
            },
            {
                topic: "DIN Setting",
                emoji: "⛷️🔧",
                question: "What is DIN setting?",
                options: [
                    "Binding release force setting",
                    "Ski length",
                    "Temperature"
                ],
                correct: 0
            },
            {
                topic: "Corduroy",
                emoji: "⛷️═══",
                question: "What is corduroy snow?",
                options: [
                    "Groomed slopes with visible lines",
                    "Icy conditions",
                    "Deep powder"
                ],
                correct: 1
            },
            {
                topic: "Avalanche Beacon",
                emoji: "⛷️📡",
                question: "What is avalanche beacon for?",
                options: [
                    "Locating buried skiers",
                    "Weather forecast",
                    "Music player"
                ],
                correct: 1
            },
            {
                topic: "Ski Brake",
                emoji: "⛷️🛑",
                question: "What does ski brake do?",
                options: [
                    "Stops ski from sliding away when binding releases",
                    "Slows down skier",
                    "Decoration"
                ],
                correct: 0
            },
            {
                topic: "Ski Touring",
                emoji: "⛷️🥾",
                question: "What is ski touring?",
                options: [
                    "Skiing uphill and downhill with special equipment",
                    "Resort skiing only",
                    "Competition"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Downhill Speed",
                emoji: "⛷️💨",
                question: "What is typical downhill racing speed?",
                options: [
                    "80-140 km/h (50-87 mph)",
                    "20 km/h",
                    "200 km/h",
                    "10 km/h"
                ],
                correct: 0
            },
            {
                topic: "Ski Length",
                emoji: "⛷️📏",
                question: "How to determine ski length?",
                options: [
                    "Based on height, weight, ability",
                    "All same length",
                    "Random selection",
                    "One size fits all"
                ],
                correct: 0
            },
            {
                topic: "Alpine Disciplines",
                emoji: "⛷️🏔️",
                question: "How many Olympic alpine skiing events?",
                options: [
                    "11 events (downhill, super-G, giant slalom, slalom, combined for men/women, mixed team)",
                    "3 events",
                    "20 events",
                    "1 event"
                ],
                correct: 0
            },
            {
                topic: "FIS",
                emoji: "⛷️🌍",
                question: "What is FIS?",
                options: [
                    "International Ski Federation",
                    "Ski resort",
                    "Equipment brand",
                    "Snow type"
                ],
                correct: 0
            },
            {
                topic: "Ski Radius",
                emoji: "⛷️⭕",
                question: "What does ski radius affect?",
                options: [
                    "Turn shape and speed",
                    "Color",
                    "Price",
                    "Weight only"
                ],
                correct: 0
            },
            {
                topic: "World Cup",
                emoji: "⛷️🏆",
                question: "What is Alpine Ski World Cup?",
                options: [
                    "Annual race series with points standings",
                    "Single race",
                    "Training event",
                    "Olympics only"
                ],
                correct: 0
            },
            {
                topic: "Ski Edges",
                emoji: "⛷️🔪",
                question: "Why sharpen ski edges?",
                options: [
                    "Better grip on ice and hard snow",
                    "Aesthetics",
                    "Make noise",
                    "No benefit"
                ],
                correct: 0
            },
            {
                topic: "Camber vs Rocker",
                emoji: "⛷️〰️",
                question: "What is ski rocker?",
                options: [
                    "Upward curve at tip/tail for powder",
                    "Completely flat",
                    "Downward bend",
                    "No shape"
                ],
                correct: 0
            },
            {
                topic: "Super-G",
                emoji: "⛷️⚡",
                question: "What is Super-G?",
                options: [
                    "Super Giant Slalom (combines downhill speed with slalom turns)",
                    "Beginner run",
                    "Ski brand",
                    "Lift type"
                ],
                correct: 0
            },
            {
                topic: "Ski School Levels",
                emoji: "⛷️🎓",
                question: "How many typical ski school levels?",
                options: [
                    "Usually 4-9 levels from beginner to expert",
                    "One level",
                    "No levels",
                    "100 levels"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Skiing Disciplines",
                emoji: "⛷️🎯",
                question: "Name three skiing disciplines?",
                options: [
                    "Alpine/Downhill",
                    "Cross-country/Nordic",
                    "Freestyle",
                    "Ski jumping",
                    "Backcountry",
                ],
                correct: 0
            },
            {
                topic: "Alpine Events",
                emoji: "⛷️🏔️",
                question: "Name three alpine skiing race types?",
                options: [
                    "Downhill",
                    "Slalom",
                    "Giant slalom",
                    "Super-G",
                    "Combined",
                ],
                correct: 0
            },
            {
                topic: "Ski Legends",
                emoji: "⛷️⭐",
                question: "Name three legendary skiers?",
                options: [
                    "Lindsey Vonn",
                    "Ingemar Stenmark",
                    "Alberto Tomba",
                    "Mikaela Shiffrin",
                    "Hermann Maier",
                ],
                correct: 0
            },
            {
                topic: "Slope Ratings",
                emoji: "⛷️🎨",
                question: "Name the three main slope difficulty levels?",
                options: [
                    "Green circle (beginner)",
                    "Blue square (intermediate)",
                    "Black diamond (expert/advanced)",
                ],
                correct: 0
            },
            {
                topic: "Ski Equipment",
                emoji: "⛷️🎿",
                question: "Name three essential skiing equipment items?",
                options: [
                    "Skis",
                    "Boots",
                    "Poles",
                    "Bindings",
                    "Helmet",
                    "Goggles",
                ],
                correct: 0
            },
            {
                topic: "Freestyle Skiing",
                emoji: "⛷️🎪",
                question: "Name three freestyle skiing events?",
                options: [
                    "Moguls",
                    "Aerials",
                    "Halfpipe",
                    "Slopestyle",
                    "Ski cross",
                ],
                correct: 0
            },
            {
                topic: "Ski Techniques",
                emoji: "⛷️💪",
                question: "Name three skiing techniques?",
                options: [
                    "Snowplow",
                    "Parallel turn",
                    "Carving",
                    "Hockey stop",
                    "Jump turn",
                ],
                correct: 0
            },
            {
                topic: "Ski Resort Features",
                emoji: "⛷️🏔️",
                question: "Name three ski resort features?",
                options: [
                    "Ski lifts",
                    "Groomed runs",
                    "Terrain park",
                    "Lodge",
                    "Ski patrol",
                ],
                correct: 0
            },
            {
                topic: "Safety Equipment",
                emoji: "⛷️🛡️",
                question: "Name three skiing safety items?",
                options: [
                    "Helmet",
                    "Avalanche beacon",
                    "Probe",
                    "Shovel",
                    "First aid kit",
                ],
                correct: 0
            },
            {
                topic: "Ski Types",
                emoji: "⛷️🎿",
                question: "Name three types of skis?",
                options: [
                    "All-mountain",
                    "Powder",
                    "Racing/Carving",
                    "Park/Freestyle",
                    "Touring",
                ],
                correct: 0
            }
        ]
    },
    16: {
        "easy": [
            {
                topic: "Martial Arts Basics",
                emoji: "🥋💪",
                question: "Are martial arts combat systems?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Discipline",
                emoji: "🥋🧘",
                question: "Do martial arts emphasize discipline?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Belt System",
                emoji: "🥋⬛",
                question: "Do many martial arts use colored belts?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dojo",
                emoji: "🥋🏛️",
                question: "Is a dojo a training hall?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Bow",
                emoji: "🥋🙇",
                question: "Do martial artists bow as a sign of respect?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Uniform",
                emoji: "🥋👘",
                question: "Is a gi a martial arts uniform?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Self-Defense",
                emoji: "🥋🛡️",
                question: "Are martial arts used for self-defense?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Forms",
                emoji: "🥋🎭",
                question: "Do martial arts include choreographed forms?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Olympics",
                emoji: "🥋🥇",
                question: "Are some martial arts in the Olympics?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Training",
                emoji: "🥋💪",
                question: "Does martial arts training include physical fitness?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Black Belt",
                emoji: "🥋⬛",
                question: "What does black belt typically represent?",
                options: [
                    "Expert level/mastery",
                    "Beginner"
                ],
                correct: 1
            },
            {
                topic: "Kata",
                emoji: "🥋🎭",
                question: "What is a kata?",
                options: [
                    "Fighting stance",
                    "Preset pattern of movements"
                ],
                correct: 1
            },
            {
                topic: "Sparring",
                emoji: "🥋🤼",
                question: "What is sparring?",
                options: [
                    "Controlled practice fighting",
                    "Stretching"
                ],
                correct: 0
            },
            {
                topic: "Sensei",
                emoji: "🥋👨‍🏫",
                question: "What is a sensei?",
                options: [
                    "Beginner student",
                    "Teacher/instructor"
                ],
                correct: 1
            },
            {
                topic: "Kiai",
                emoji: "🥋🗣️",
                question: "What is a kiai?",
                options: [
                    "Shout used during techniques",
                    "Kick"
                ],
                correct: 0
            },
            {
                topic: "White Belt",
                emoji: "🥋⬜",
                question: "What does white belt represent?",
                options: [
                    "Expert",
                    "Beginner/novice"
                ],
                correct: 1
            },
            {
                topic: "Dan",
                emoji: "🥋🎖️",
                question: "What is a dan rank?",
                options: [
                    "Black belt degree level",
                    "Colored belt"
                ],
                correct: 0
            },
            {
                topic: "Kumite",
                emoji: "🥋⚔️",
                question: "What is kumite?",
                options: [
                    "Belt test",
                    "Free sparring/fighting"
                ],
                correct: 0
            },
            {
                topic: "Dojo Kun",
                emoji: "🥋📜",
                question: "What is dojo kun?",
                options: [
                    "Training principles/code of conduct",
                    "Fighting technique"
                ],
                correct: 0
            },
            {
                topic: "Makiwara",
                emoji: "🥋🎯",
                question: "What is a makiwara?",
                options: [
                    "Belt",
                    "Striking post for training"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Bunkai",
                emoji: "🥋🔍",
                question: "What is bunkai?",
                options: [
                    "Analysis/application of kata techniques",
                    "Belt ceremony",
                    "Warm-up"
                ],
                correct: 1
            },
            {
                topic: "Ippon",
                emoji: "🥋✅",
                question: "What is ippon?",
                options: [
                    "Kick",
                    "Full point/winning technique",
                    "Half point"
                ],
                correct: 1
            },
            {
                topic: "Randori",
                emoji: "🥋🔄",
                question: "What is randori?",
                options: [
                    "Free practice/sparring (especially in judo)",
                    "Meditation",
                    "Belt tying"
                ],
                correct: 0
            },
            {
                topic: "Ki",
                emoji: "🥋⚡",
                question: "What is ki (or chi)?",
                options: [
                    "Technique",
                    "Life energy/force concept",
                    "Uniform"
                ],
                correct: 1
            },
            {
                topic: "Tameshiwari",
                emoji: "🥋🧱",
                question: "What is tameshiwari?",
                options: [
                    "Breaking technique (boards, bricks)",
                    "Kicking drill",
                    "Belt rank"
                ],
                correct: 1
            },
            {
                topic: "Uke",
                emoji: "🥋🛡️",
                question: "What is uke?",
                options: [
                    "Attack",
                    "Blocking/receiving technique or training partner",
                    "Meditation"
                ],
                correct: 1
            },
            {
                topic: "Zanshin",
                emoji: "🥋👁️",
                question: "What is zanshin?",
                options: [
                    "Continued awareness after technique",
                    "Sleeping",
                    "Starting position"
                ],
                correct: 1
            },
            {
                topic: "Mokuso",
                emoji: "🥋🧘",
                question: "What is mokuso?",
                options: [
                    "Fighting stance",
                    "Meditation/clearing the mind",
                    "Running"
                ],
                correct: 1
            },
            {
                topic: "Seiza",
                emoji: "🥋🧎",
                question: "What is seiza?",
                options: [
                    "Formal kneeling position",
                    "Standing bow",
                    "Kick"
                ],
                correct: 1
            },
            {
                topic: "Kihon",
                emoji: "🥋📋",
                question: "What is kihon?",
                options: [
                    "Belt test",
                    "Basic techniques practice",
                    "Sparring match"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Belt Levels",
                emoji: "🥋🎨",
                question: "How many colored belt levels typically?",
                options: [
                    "Varies by art (typically 8-10 including white)",
                    "Always 5",
                    "Only 2",
                    "100"
                ],
                correct: 0
            },
            {
                topic: "Black Belt Dans",
                emoji: "🥋⬛",
                question: "How many dan levels in most arts?",
                options: [
                    "10 dan levels maximum",
                    "3 levels",
                    "Unlimited",
                    "No levels"
                ],
                correct: 1
            },
            {
                topic: "Karate Origins",
                emoji: "🥋🇯🇵",
                question: "Where did karate originate?",
                options: [
                    "Okinawa, Japan",
                    "China",
                    "Korea",
                    "Thailand"
                ],
                correct: 1
            },
            {
                topic: "Taekwondo Kicks",
                emoji: "🥋🦵",
                question: "What is taekwondo known for?",
                options: [
                    "Emphasis on high, fast kicks",
                    "Only punching",
                    "Wrestling",
                    "Weapons"
                ],
                correct: 1
            },
            {
                topic: "Judo Techniques",
                emoji: "🥋🤸",
                question: "What is judo's primary focus?",
                options: [
                    "Throws and grappling",
                    "Only kicking",
                    "Weapons only",
                    "No physical contact"
                ],
                correct: 1
            },
            {
                topic: "BJJ",
                emoji: "🥋🤼",
                question: "What does BJJ emphasize?",
                options: [
                    "Ground fighting and submissions",
                    "Standing strikes only",
                    "Weapons",
                    "Running"
                ],
                correct: 0
            },
            {
                topic: "Muay Thai",
                emoji: "🥋🇹🇭",
                question: "What is Muay Thai known as?",
                options: [
                    "Art of eight limbs (fists, elbows, knees, shins)",
                    "Gentle art",
                    "Way of the sword",
                    "Silent fighting"
                ],
                correct: 1
            },
            {
                topic: "Kung Fu Styles",
                emoji: "🥋🐉",
                question: "How many kung fu styles exist?",
                options: [
                    "Hundreds of styles",
                    "Only one",
                    "Exactly 10",
                    "Five"
                ],
                correct: 1
            },
            {
                topic: "WTF Taekwondo",
                emoji: "🥋🏆",
                question: "What does WTF stand for?",
                options: [
                    "World Taekwondo Federation (now World Taekwondo)",
                    "Wrestling Training Federation",
                    "World Tournament Format",
                    "Western Training Facility"
                ],
                correct: 1
            },
            {
                topic: "Aikido Philosophy",
                emoji: "🥋☯️",
                question: "What is aikido's philosophy?",
                options: [
                    "Harmonizing with opponent's energy",
                    "Aggressive attack",
                    "Pure competition",
                    "No philosophy"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Major Martial Arts",
                emoji: "🥋🌍",
                question: "Name three popular martial arts?",
                options: [
                    "Karate",
                    "Judo",
                    "Taekwondo",
                    "Kung Fu",
                    "Brazilian Jiu-Jitsu",
                    "Muay Thai",
                ],
                correct: 0
            },
            {
                topic: "Striking Arts",
                emoji: "🥋👊",
                question: "Name three striking martial arts?",
                options: [
                    "Karate",
                    "Taekwondo",
                    "Muay Thai",
                    "Boxing",
                    "Kickboxing",
                ],
                correct: 0
            },
            {
                topic: "Grappling Arts",
                emoji: "🥋🤼",
                question: "Name three grappling martial arts?",
                options: [
                    "Judo",
                    "Brazilian Jiu-Jitsu",
                    "Wrestling",
                    "Sambo",
                    "Aikido",
                ],
                correct: 0
            },
            {
                topic: "Belt Colors",
                emoji: "🥋🎨",
                question: "Name three common belt colors?",
                options: [
                    "White",
                    "Yellow",
                    "Orange",
                    "Green",
                    "Blue",
                    "Purple",
                    "Brown",
                    "Red",
                    "Black",
                ],
                correct: 0
            },
            {
                topic: "Techniques",
                emoji: "🥋💥",
                question: "Name three martial arts techniques?",
                options: [
                    "Punch",
                    "Kick",
                    "Block",
                    "Throw",
                    "Submission",
                    "Strike",
                    "Sweep",
                ],
                correct: 0
            },
            {
                topic: "Karate Styles",
                emoji: "🥋🇯🇵",
                question: "Name three karate styles?",
                options: [
                    "Shotokan",
                    "Goju-Ryu",
                    "Shito-Ryu",
                    "Wado-Ryu",
                    "Kyokushin",
                ],
                correct: 0
            },
            {
                topic: "Training Equipment",
                emoji: "🥋🎯",
                question: "Name three martial arts training equipment?",
                options: [
                    "Heavy bag",
                    "Focus mitts",
                    "Makiwara",
                    "Dummy",
                    "Punching bag",
                    "Pads",
                ],
                correct: 0
            },
            {
                topic: "Martial Arts Values",
                emoji: "🥋⭐",
                question: "Name three martial arts values?",
                options: [
                    "Respect",
                    "Discipline",
                    "Perseverance",
                    "Integrity",
                    "Self-control",
                    "Humility",
                ],
                correct: 0
            },
            {
                topic: "Weapons",
                emoji: "🥋⚔️",
                question: "Name three martial arts weapons?",
                options: [
                    "Bo staff",
                    "Nunchaku",
                    "Sword/Katana",
                    "Sai",
                    "Kama",
                    "Tonfa",
                ],
                correct: 0
            },
            {
                topic: "Competition Types",
                emoji: "🥋🏆",
                question: "Name three martial arts competition formats?",
                options: [
                    "Kata/Forms",
                    "Sparring/Kumite",
                    "Point fighting",
                    "Full contact",
                    "Submission grappling",
                ],
                correct: 0
            }
        ]
    },
    17: {
        "easy": [
            {
                topic: "Surfing Basics",
                emoji: "🏄‍♂️🌊",
                question: "Is surfing done on ocean waves?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Surfboard",
                emoji: "🏄‍♀️🏄",
                question: "Do surfers ride on surfboards?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Standing",
                emoji: "🏄‍♂️🧍",
                question: "Do surfers stand on the board?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Waves",
                emoji: "🏄‍♀️🌊",
                question: "Do surfers need waves to surf?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Beach",
                emoji: "🏄‍♂️🏖️",
                question: "Is surfing typically done at beaches?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Wetsuit",
                emoji: "🏄‍♀️🧥",
                question: "Do surfers wear wetsuits in cold water?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Paddling",
                emoji: "🏄‍♂️💪",
                question: "Do surfers paddle to catch waves?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Balance",
                emoji: "🏄‍♀️⚖️",
                question: "Is balance important in surfing?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Olympics",
                emoji: "🏄‍♂️🥇",
                question: "Is surfing now an Olympic sport?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Leash",
                emoji: "🏄‍♀️🔗",
                question: "Is a leash attached to surfer's ankle?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Pop-Up",
                emoji: "🏄‍♂️⬆️",
                question: "What is a pop-up?",
                options: [
                    "Going from lying to standing on board",
                    "Type of wave"
                ],
                correct: 0
            },
            {
                topic: "Barrel",
                emoji: "🏄‍♀️🌀",
                question: "What is a barrel/tube?",
                options: [
                    "Surfboard part",
                    "Hollow part of breaking wave"
                ],
                correct: 1
            },
            {
                topic: "Wipeout",
                emoji: "🏄‍♂️💥",
                question: "What is a wipeout?",
                options: [
                    "Falling off board",
                    "Perfect ride"
                ],
                correct: 1
            },
            {
                topic: "Lineup",
                emoji: "🏄‍♀️👥",
                question: "What is the lineup?",
                options: [
                    "Waiting area",
                    "Area where surfers wait for waves"
                ],
                correct: 0
            },
            {
                topic: "Duck Dive",
                emoji: "🏄‍♂️🦆",
                question: "What is a duck dive?",
                options: [
                    "Pushing board under oncoming wave",
                    "Type of turn"
                ],
                correct: 0
            },
            {
                topic: "Longboard",
                emoji: "🏄‍♀️━━",
                question: "What is a longboard?",
                options: [
                    "Short surfboard",
                    "Surfboard 9+ feet long"
                ],
                correct: 1
            },
            {
                topic: "Goofy Foot",
                emoji: "🏄‍♂️🦶",
                question: "What is goofy foot stance?",
                options: [
                    "Right foot forward",
                    "Left foot forward"
                ],
                correct: 0
            },
            {
                topic: "Set",
                emoji: "🏄‍♀️🌊",
                question: "What is a set?",
                options: [
                    "Single wave",
                    "Group of waves arriving together"
                ],
                correct: 1
            },
            {
                topic: "Cutback",
                emoji: "🏄‍♂️🔙",
                question: "What is a cutback?",
                options: [
                    "Turn back toward breaking part of wave",
                    "Straight riding"
                ],
                correct: 0
            },
            {
                topic: "Reef Break",
                emoji: "🏄‍♀️🪨",
                question: "What is a reef break?",
                options: [
                    "Beach wave",
                    "Wave breaking over coral/rock reef"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Backdoor",
                emoji: "🏄‍♂️🚪",
                question: "What is going backdoor?",
                options: [
                    "Entering barrel from behind peak",
                    "Exiting wave",
                    "Beach entry"
                ],
                correct: 1
            },
            {
                topic: "Rocker",
                emoji: "🏄‍♀️〰️",
                question: "What is board rocker?",
                options: [
                    "Curve from nose to tail",
                    "Flat surface",
                    "Board brand"
                ],
                correct: 0
            },
            {
                topic: "Quiver",
                emoji: "🏄‍♂️🏄",
                question: "What is a surfer's quiver?",
                options: [
                    "Wetsuit",
                    "Collection of different surfboards",
                    "Surf shop"
                ],
                correct: 0
            },
            {
                topic: "Dropping In",
                emoji: "🏄‍♀️🚫",
                question: "Why is dropping in bad?",
                options: [
                    "Taking wave someone already riding (breaking etiquette)",
                    "Good technique",
                    "Encouraged behavior"
                ],
                correct: 1
            },
            {
                topic: "Fins",
                emoji: "🏄‍♂️🦈",
                question: "What do surfboard fins do?",
                options: [
                    "Provide stability and control",
                    "Decoration only",
                    "No purpose"
                ],
                correct: 1
            },
            {
                topic: "Closeout",
                emoji: "🏄‍♀️🌊",
                question: "What is a closeout wave?",
                options: [
                    "Wave breaking all at once (unsurfable)",
                    "Perfect wave",
                    "Small wave"
                ],
                correct: 0
            },
            {
                topic: "Dawn Patrol",
                emoji: "🏄‍♂️🌅",
                question: "What is dawn patrol?",
                options: [
                    "Surfing at sunrise",
                    "Night surfing",
                    "Security guards"
                ],
                correct: 1
            },
            {
                topic: "Thruster",
                emoji: "🏄‍♀️🔱",
                question: "What is a thruster setup?",
                options: [
                    "Three-fin configuration",
                    "One fin",
                    "No fins"
                ],
                correct: 0
            },
            {
                topic: "Stoked",
                emoji: "🏄‍♂️😃",
                question: "What does stoked mean?",
                options: [
                    "Excited/happy (surf slang)",
                    "Angry",
                    "Tired"
                ],
                correct: 1
            },
            {
                topic: "Offshore Wind",
                emoji: "🏄‍♀️💨",
                question: "Why is offshore wind good?",
                options: [
                    "Holds up wave face, creates cleaner waves",
                    "Makes waves messy",
                    "Stops waves"
                ],
                correct: 1
            }
        ],
        "expert": [
           {
                topic: "Wave Height",
                emoji: "🏄‍♂️📏",
                question: "How is Hawaiian wave height measured?",
                options: [
                    "From back of wave (half face height)",
                    "From front face",
                    "No measurement",
                    "From trough to lip"
                ],
                correct: 0
            },
            {
                topic: "WSL",
                emoji: "🏄‍♀️🌍",
                question: "What is WSL?",
                options: [
                    "World Surf League (professional tour)",
                    "Water Safety League",
                    "Wave Size Limit",
                    "Western Surf Location"
                ],
                correct: 1
            },
            {
                topic: "Pipeline",
                emoji: "🏄‍♂️🌊",
                question: "Where is Banzai Pipeline?",
                options: [
                    "North Shore, Oahu, Hawaii",
                    "California",
                    "Australia",
                    "Florida"
                ],
                correct: 0
            },
            {
                topic: "Tow-In Surfing",
                emoji: "🏄‍♀️🚤",
                question: "What is tow-in surfing?",
                options: [
                    "Being towed by jet ski to catch big waves",
                    "Paddling only",
                    "Beach surfing",
                    "Pool surfing"
                ],
                correct: 0
            },
            {
                topic: "Foam Board",
                emoji: "🏄‍♂️🟦",
                question: "Why use foam boards for beginners?",
                options: [
                    "Safer, more buoyant, stable",
                    "Faster",
                    "Professional use",
                    "More expensive"
                ],
                correct: 1
            },
            {
                topic: "Shortboard Length",
                emoji: "🏄‍♀️📏",
                question: "What is typical shortboard length?",
                options: [
                    "5'6\" to 6'6\" (around 168-198cm)",
                    "10 feet",
                    "3 feet",
                    "15 feet"
                ],
                correct: 0
            },
            {
                topic: "Surf Wax",
                emoji: "🏄‍♂️🕯️",
                question: "Why use surf wax?",
                options: [
                    "Provides grip/traction on board",
                    "Make board shiny",
                    "Speed enhancement",
                    "No purpose"
                ],
                correct: 1
            },
            {
                topic: "Kelly Slater",
                emoji: "🏄‍♂️👑",
                question: "How many world titles does Kelly Slater have?",
                options: [
                    "11 World Championships",
                    "3 titles",
                    "1 title",
                    "None"
                ],
                correct: 0
            },
            {
                topic: "Priority System",
                emoji: "🏄‍♀️1️⃣",
                question: "What is priority in surfing?",
                options: [
                    "Right of way system in competitions",
                    "Wave size",
                    "Board type",
                    "Age order"
                ],
                correct: 0
            },
            {
                topic: "Aerial",
                emoji: "🏄‍♂️✈️",
                question: "What is an aerial maneuver?",
                options: [
                    "Launching off wave into air and landing back on wave",
                    "Underwater move",
                    "Sitting on board",
                    "Paddling technique"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Surf Spots",
                emoji: "🏄‍♂️🌍",
                question: "Name three famous surf locations?",
                options: [
                    "Hawaii (Pipeline",
                    "Waimea)",
                    "California (Malibu)",
                    "Australia (Gold Coast)",
                    "Indonesia (Bali)",
                    "Portugal (Nazaré)",
                ],
                correct: 0
            },
            {
                topic: "Surfboard Types",
                emoji: "🏄‍♀️🏄",
                question: "Name three types of surfboards?",
                options: [
                    "Shortboard",
                    "Longboard",
                    "Fish",
                    "Gun",
                    "Funboard",
                    "Foam board",
                ],
                correct: 0
            },
            {
                topic: "Surf Maneuvers",
                emoji: "🏄‍♂️🎯",
                question: "Name three surfing maneuvers?",
                options: [
                    "Cutback",
                    "Bottom turn",
                    "Top turn",
                    "Aerial",
                    "Barrel ride",
                    "Floater",
                ],
                correct: 0
            },
            {
                topic: "Legendary Surfers",
                emoji: "🏄‍♀️⭐",
                question: "Name three legendary surfers?",
                options: [
                    "Kelly Slater",
                    "Duke Kahanamoku",
                    "Laird Hamilton",
                    "Stephanie Gilmore",
                    "Bethany Hamilton",
                ],
                correct: 0
            },
            {
                topic: "Wave Types",
                emoji: "🏄‍♂️🌊",
                question: "Name three types of waves?",
                options: [
                    "Point break",
                    "Beach break",
                    "Reef break",
                    "Closeout",
                    "A-frame",
                ],
                correct: 0
            },
            {
                topic: "Surf Equipment",
                emoji: "🏄‍♀️🎽",
                question: "Name three surfing equipment items?",
                options: [
                    "Surfboard",
                    "Leash",
                    "Wax",
                    "Wetsuit",
                    "Fins",
                    "Rash guard",
                ],
                correct: 0
            },
            {
                topic: "Surf Terms",
                emoji: "🏄‍♂️📖",
                question: "Name three surfing slang terms?",
                options: [
                    "Stoked",
                    "Gnarly",
                    "Shred",
                    "Hang ten",
                    "Wipeout",
                    "Carve",
                ],
                correct: 0
            },
            {
                topic: "Fin Setups",
                emoji: "🏄‍♀️🦈",
                question: "Name three fin configurations?",
                options: [
                    "Single fin",
                    "Twin fin",
                    "Thruster (3 fins)",
                    "Quad (4 fins)",
                    "Five fin",
                ],
                correct: 0
            },
            {
                topic: "Surf Conditions",
                emoji: "🏄‍♂️🌤️",
                question: "Name three factors affecting surf conditions?",
                options: [
                    "Wind direction",
                    "Swell size",
                    "Tide",
                    "Wave period",
                    "Bottom contour",
                ],
                correct: 0
            },
            {
                topic: "Competitions",
                emoji: "🏄‍♀️🏆",
                question: "Name three major surf competitions?",
                options: [
                    "WSL Championship Tour",
                    "Pipeline Masters",
                    "US Open of Surfing",
                    "Rip Curl Pro",
                ],
                correct: 0
            }
        ]
    },
    18: {
        "easy": [
            {
                topic: "Badminton Basics",
                emoji: "🏸🎯",
                question: "Is badminton played with a shuttlecock?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Racket",
                emoji: "🏸🎾",
                question: "Do players use rackets in badminton?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Net",
                emoji: "🏸🕸️",
            {
                topic: "Indoor Sport",
                emoji: "🏸🏢",
                question: "Is badminton typically played indoors?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Scoring",
                emoji: "🏸🔢",
                question: "Do players score points by landing shuttlecock in opponent's court?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Singles and Doubles",
                emoji: "🏸👥",
                question: "Can badminton be played singles or doubles?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Serve",
                emoji: "🏸🎾",
            {
                topic: "Olympics",
                emoji: "🏸🥇",
                question: "Is badminton an Olympic sport?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Fast Sport",
                emoji: "🏸⚡",
                question: "Is badminton one of the fastest racket sports?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Court Lines",
                emoji: "🏸📏",
                question: "Are there boundary lines on the court?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Rally Scoring",
                emoji: "🏸📊",
                question: "How does rally scoring work?",
                options: [
                    "Point scored on every rally regardless of server",
                    "Only server can score"
                ],
                correct: 0
            },
            {
                topic: "Game Points",
                emoji: "🏸🎯",
                question: "How many points to win a game?",
                options: [
                    "15 points",
                    "21 points (win by 2)"
                ],
                correct: 1
            },
            {
                topic: "Smash",
                emoji: "🏸💥",
                question: "What is a smash?",
                options: [
                    "Powerful downward shot",
                    "Soft drop"
                ],
                correct: 0
            },
            {
                topic: "Drop Shot",
                emoji: "🏸💧",
            {
                topic: "Clear",
                emoji: "🏸☁️",
                question: "What is a clear shot?",
                options: [
                    "High deep shot to back of court",
                    "Low flat shot"
                ],
                correct: 0
            },
            {
                topic: "Service Court",
                emoji: "🏸📐",
                question: "Does serve direction change based on score?",
                options: [
                    "Same court always",
                    "Yes, right court when even score, left when odd"
                ],
                correct: 0
            },
            {
                topic: "Let",
                emoji: "🏸🔄",
                question: "What is a let?",
                options: [
                    "Replay of point",
                    "Lost point"
                ],
                correct: 0
            },
            {
                topic: "Fault",
                emoji: "🏸❌",
                question: "What is a service fault?",
                options: [
                    "Perfect serve",
                    "Illegal serve"
                ],
                correct: 0
            },
            {
                topic: "Best of Three",
                emoji: "🏸3️⃣",
                question: "How many games in a match?",
                options: [
                    "Best of 3 games",
                    "Single game"
                ],
                correct: 0
            },
            {
                topic: "Drive",
                emoji: "🏸➡️",
                question: "What is a drive shot?",
                options: [
                    "High lob",
                    "Flat, fast shot parallel to ground"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Deuce",
                emoji: "🏸⚖️",
                question: "What happens at 20-20?",
                options: [
                    "First to 22 or first to lead by 2 (capped at 30)",
                    "Game over",
                    "Restart"
                ],
                correct: 0
            },
            {
                topic: "Service Box",
                emoji: "🏸📦",
                question: "Are service box dimensions different for singles and doubles?",
                options: [
                    "Identical",
                    "Yes, doubles uses wider but shorter box",
                    "No service box"
                ],
                correct: 1
            },
            {
                topic: "Backhand Serve",
                emoji: "🏸🤚",
                question: "Is backhand serve common?",
                options: [
                    "Yes, especially in doubles for speed and deception",
                    "Never used",
                    "Illegal"
                ],
                correct: 1
            },
            {
                topic: "Rotation System",
                emoji: "🏸🔄",
                question: "How do doubles partners rotate?",
                options: [
                    "Stay in position",
                    "Rotate after winning rally when receiving",
                    "Switch every point"
                ],
                correct: 0
            },
            {
                topic: "Net Cord",
                emoji: "🏸🕸️",
                question: "What if shuttlecock hits net on serve?",
                options: [
                    "Fault if doesn't go over",
                    "Always fault",
                    "Always replay"
                ],
                correct: 0
            },
            {
                topic: "Attacking Formation",
                emoji: "🏸⬆️",
                question: "What is attacking doubles formation?",
                options: [
                    "Front and back positioning",
                    "Side by side",
                    "One player only"
                ],
                correct: 1
            },
            {
                topic: "Baseline Play",
                emoji: "🏸━",
                question: "What is baseline strategy?",
                options: [
                    "Playing deep clears to tire opponent",
                    "Only net play",
                    "No strategy"
                ],
                correct: 1
            },
            {
                topic: "Feather Shuttlecock",
                emoji: "🏸🪶",
                question: "Why are feather shuttlecocks preferred in competition?",
                options: [
                    "Better flight characteristics and control",
                    "Cheaper",
                    "More durable"
                ],
                correct: 0
            },
            {
                topic: "Deceptive Shot",
                emoji: "🏸🎭",
                question: "What makes a shot deceptive?",
                options: [
                    "Same preparation motion for different shots",
                    "Obvious movement",
                    "Slow motion"
                ],
                correct: 1
            },
            {
                topic: "Rush Service",
                emoji: "🏸💨",
                question: "What is rush service return?",
                options: [
                    "Aggressively attacking weak serve immediately",
                    "Slow return",
                    "Defensive return"
                ],
                correct: 1
            }
        ],
        "expert": [
            {
                topic: "Smash Speed",
                emoji: "🏸💨",
                question: "What is fastest recorded smash speed?",
                options: [
                    "Over 426 km/h (265 mph)",
                    "100 km/h",
                    "50 km/h",
                    "600 km/h"
                ],
                correct: 0
            },
            {
                topic: "Court Dimensions",
                emoji: "🏸📐",
                question: "What are badminton court dimensions?",
                options: [
                    "13.4m x 6.1m (doubles)",
                    "20m x 10m",
                    "10m x 5m",
                    "30m x 15m"
                ],
                correct: 0
            },
            {
                topic: "Net Height",
                emoji: "🏸📏",
            {
                topic: "Shuttlecock Weight",
                emoji: "🏸⚖️",
                question: "What is shuttlecock weight?",
                options: [
                    "4.74-5.50 grams",
                    "10 grams",
                    "1 gram",
                    "20 grams"
                ],
                correct: 0
            },
            {
                topic: "BWF",
                emoji: "🏸🌍",
                question: "What is BWF?",
                options: [
                    "Badminton World Federation (governing body)",
                    "Best World Finalists",
                    "British Wrestling Federation",
                    "Ball Weight Factor"
                ],
                correct: 1
            },
            {
                topic: "Thomas Cup",
                emoji: "🏸🏆",
                question: "What is Thomas Cup?",
                options: [
                    "Men's world team championship",
                    "Women's singles",
                    "Mixed doubles",
                    "Junior tournament"
                ],
                correct: 0
            },
            {
                topic: "Uber Cup",
                emoji: "🏸👑",
                question: "What is Uber Cup?",
                options: [
                    "Women's world team championship",
                    "Men's tournament",
                    "Car service",
                    "Racket brand"
                ],
                correct: 1
            },
            {
                topic: "Racket Weight",
                emoji: "🏸⚖️",
                question: "What is typical racket weight?",
                options: [
                    "70-95 grams unstrung",
                    "200 grams",
                    "30 grams",
                    "500 grams"
                ],
                correct: 1
            },
            {
                topic: "All England",
                emoji: "🏸🇬🇧",
                question: "What is All England Championship?",
                options: [
                    "Oldest and most prestigious badminton tournament",
                    "New tournament",
                    "Regional event",
                    "Training camp"
                ],
                correct: 1
            },
            {
                topic: "Lin Dan",
                emoji: "🏸🐉",
                question: "How many Olympic golds did Lin Dan win?",
                options: [
                    "2 Olympic gold medals (2008, 2012)",
                    "None",
                    "5 medals",
                    "1 medal"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Shot Types",
                emoji: "🏸🎯",
                question: "Name three badminton shots?",
                options: [
                    "Smash",
                    "Clear",
                    "Drop shot",
                    "Drive",
                    "Net shot",
                    "Lob",
                ],
                correct: 0
            },
            {
                topic: "Badminton Events",
                emoji: "🏸🏆",
                question: "Name the five Olympic badminton events?",
                options: [
                    "Men's singles",
                    "Women's singles",
                    "Men's doubles",
                    "Women's doubles",
                    "Mixed doubles",
                ],
                correct: 0
            },
            {
                topic: "Legendary Players",
                emoji: "🏸⭐",
                question: "Name three badminton legends?",
                options: [
                    "Lin Dan",
                    "Lee Chong Wei",
                    "Taufik Hidayat",
                    "Saina Nehwal",
                    "P.V. Sindhu",
                ],
                correct: 0
            },
            {
                topic: "Techniques",
                emoji: "🏸💪",
                question: "Name three badminton techniques?",
                options: [
                    "Forehand grip",
                    "Backhand grip",
                    "Footwork",
                    "Jump smash",
                    "Deception",
                ],
                correct: 0
            },
            {
                topic: "Court Areas",
                emoji: "🏸📐",
                question: "Name three court zones?",
                options: [
                    "Service court",
                    "Forecourt",
                    "Midcourt",
                    "Backcourt",
                    "Tramlines",
                ],
                correct: 0
            },
            {
                topic: "Badminton Terms",
                emoji: "🏸📖",
                question: "Name three badminton terminology terms?",
                options: [
                    "Rally",
                    "Fault",
                    "Let",
                    "Deuce",
                    "Service over",
                    "Woodshot",
                ],
                correct: 0
            },
            {
                topic: "Strategies",
                emoji: "🏸🧠",
                question: "Name three badminton strategies?",
                options: [
                    "Attack",
                    "Defense",
                    "Deception",
                    "Net play",
                    "Baseline play",
                    "Rotation",
                ],
                correct: 0
            },
            {
                topic: "Equipment",
                emoji: "🏸🎽",
                question: "Name three badminton equipment items?",
                options: [
                    "Racket",
                    "Shuttlecock",
                    "Shoes",
                    "Grip",
                    "String",
                    "Net",
                ],
                correct: 0
            },
            {
                topic: "Faults",
                emoji: "🏸🚫",
                question: "Name three types of faults?",
                options: [
                    "Service fault",
                    "Foot fault",
                    "Double hit",
                    "Net touch",
                    "Carry",
                ],
                correct: 0
            },
            {
                topic: "Major Tournaments",
                emoji: "🏸🏆",
                question: "Name three major badminton tournaments?",
                options: [
                    "Olympics",
                    "World Championships",
                    "All England",
                    "Thomas Cup",
                    "Uber Cup",
                ],
                correct: 0
            }
        ]
    },
   19: {
        "easy": [
            {
                topic: "Racing Basics",
                emoji: "🏁🏎️",
                question: "Is racing about reaching finish line first?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Formula 1",
                emoji: "🏁🏎️",
                question: "Is Formula 1 a type of car racing?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Track",
                emoji: "🏁🛣️",
                question: "Do race cars compete on tracks?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Speed",
                emoji: "🏁💨",
                question: "Is speed important in racing?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Laps",
                emoji: "🏁🔄",
                question: "Do racers complete multiple laps?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Helmet",
                emoji: "🏁🪖",
                question: "Do race drivers wear helmets?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Checkered Flag",
                emoji: "🏁🏁",
                question: "Does checkered flag signal race end?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Pit Stop",
                emoji: "🏁🔧",
                question: "Do cars stop for service during race?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Qualifying",
                emoji: "🏁🎯",
                question: "Does qualifying determine starting positions?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Podium",
                emoji: "🏁🏆",
                question: "Do top three finishers stand on podium?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Pole Position",
                emoji: "🏁1️⃣",
                question: "What is pole position?",
                options: [
                    "First starting position",
                    "Last position"
                ],
                correct: 0
            },
            {
                topic: "DRS",
                emoji: "🏁⚡",
                question: "What does DRS do in F1?",
                options: [
                    "Braking system",
                    "Drag Reduction System for overtaking"
                ],
                correct: 1
            },
            {
                topic: "Safety Car",
                emoji: "🏁🚗",
                question: "When is safety car deployed?",
                options: [
                    "During dangerous conditions or crashes",
                    "At race start"
                ],
                correct: 0
            },
            {
                topic: "Slipstream",
                emoji: "🏁💨",
                question: "What is slipstreaming?",
                options: [
                    "Driving in water",
                    "Following closely to reduce drag"
                ],
                correct: 0
            },
            {
                topic: "DNF",
                emoji: "🏁❌",
                question: "What does DNF mean?",
                options: [
                    "Did Not Finish",
                    "Do Not Follow"
                ],
                correct: 1
            },
            {
                topic: "Grand Prix",
                emoji: "🏁🏆",
                question: "What is a Grand Prix?",
                options: [
                    "Practice session",
                    "Major Formula 1 race"
                ],
                correct: 0
            },
            {
                topic: "Fastest Lap",
                emoji: "🏁⚡",
                question: "What is fastest lap?",
                options: [
                    "Quickest single lap during race",
                    "Average speed"
                ],
                correct: 1
            },
            {
                topic: "Tire Compounds",
                emoji: "🏁⭕",
                question: "Are there different tire types?",
                options: [
                    "Only one type",
                    "Yes, soft, medium, hard compounds"
                ],
                correct: 1
            },
            {
                topic: "Overtaking",
                emoji: "🏁↗️",
                question: "What is overtaking?",
                options: [
                    "Passing another car",
                    "Slowing down"
                ],
                correct: 0
            },
            {
                topic: "Constructor",
                emoji: "🏁🏗️",
                question: "What is a constructor?",
                options: [
                    "Driver",
                    "Team that builds the car"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Undercut Strategy",
                emoji: "🏁🔧",
                question: "What is undercut pit strategy?",
                options: [
                    "Pitting before rival to gain track position",
                    "Pitting last",
                    "No pit stop"
                ],
                correct: 0
            },
            {
                topic: "Dirty Air",
                emoji: "🏁💨",
                question: "What is dirty air?",
                options: [
                    "Turbulent air behind car reducing following car's downforce",
                    "Clean track",
                    "Fresh air"
                ],
                correct: 0
            },
            {
                topic: "Porpoising",
                emoji: "🏁🐬",
                question: "What is porpoising?",
                options: [
                    "Car bouncing due to aerodynamic effects",
                    "Smooth driving",
                    "Turning technique"
                ],
                correct: 0
            },
            {
                topic: "Parc Fermé",
                emoji: "🏁🔒",
                question: "What is parc fermé?",
                options: [
                    "Closed park where cars secured, limited modifications",
                    "Practice area",
                    "Fan zone"
                ],
                correct: 1
            },
            {
                topic: "Marbles",
                emoji: "🏁⚫",
                question: "What are marbles on track?",
                options: [
                    "Debris and rubber off racing line",
                    "Decorations",
                    "Toys"
                ],
                correct: 0
            },
            {
                topic: "Box Box",
                emoji: "🏁📻",
            {
                topic: "ERS",
                emoji: "🏁🔋",
                question: "What is ERS in F1?",
                options: [
                    "Energy Recovery System for power boost",
                    "Emergency Radio System",
                    "Engine Restart Switch"
                ],
                correct: 1
            },
            {
                topic: "Apex",
                emoji: "🏁🔄",
                question: "What is the apex of a corner?",
                options: [
                    "Innermost point of turn for optimal line",
                    "Exit point",
                    "Entry point"
                ],
                correct: 1
            },
            {
                topic: "Blue Flags",
                emoji: "🏁🔵",
                question: "What do blue flags mean?",
                options: [
                    "Faster car approaching, must let pass",
                    "Race start",
                    "Caution"
                ],
                correct: 0
            },
            {
                topic: "Formation Lap",
                emoji: "🏁🔄",
                question: "What is formation lap?",
                options: [
                    "Parade lap before race start to warm tires",
                    "First racing lap",
                    "Cool-down lap"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "F1 Top Speed",
                emoji: "🏁💨",
                question: "What is typical F1 top speed?",
                options: [
                    "Around 360 km/h (224 mph)",
                    "200 km/h",
                    "500 km/h",
                    "100 km/h"
                ],
                correct: 1
            },
            {
                topic: "Track Length",
                emoji: "🏁📏",
                question: "What is minimum F1 track length?",
                options: [
                    "305 km (except Monaco at 260 km)",
                    "100 km",
                    "500 km",
                    "50 km"
                ],
                correct: 0
            },
            {
                topic: "Points System",
                emoji: "🏁🔢",
                question: "How many points for winning F1 race?",
                options: [
                    "25 points (plus 1 for fastest lap if top 10)",
                    "10 points",
                    "50 points",
                    "100 points"
                ],
                correct: 0
            },
            {
                topic: "FIA",
                emoji: "🏁🌍",
                question: "What is FIA?",
                options: [
                    "Fédération Internationale de l'Automobile (governing body)",
                    "Fast International Association",
                    "Formula International Alliance",
                    "Fuel Injection Apparatus"
                ],
                correct: 0
            },
            {
                topic: "Monaco GP",
                emoji: "🏁🇲🇨",
                question: "What makes Monaco GP unique?",
                options: [
                    "Slowest and shortest circuit, street race",
                    "Fastest track",
                    "Longest track",
                    "Only oval"
                ],
                correct: 1
            },
            {
                topic: "G-Forces",
                emoji: "🏁💪",
                question: "What G-forces do F1 drivers experience?",
                options: [
                    "Up to 6G in braking and corners",
                    "1G only",
                    "No G-forces",
                    "20G"
                ],
                correct: 1
            },
            {
                topic: "Power Unit",
                emoji: "🏁🔋",
                question: "What is modern F1 power unit?",
                options: [
                    "1.6L V6 turbo hybrid with ERS",
                    "V12 naturally aspirated",
                    "Electric only",
                    "V8 engine"
                ],
                correct: 0
            },
            {
                topic: "Halo Device",
                emoji: "🏁🛡️",
                question: "What is the halo?",
                options: [
                    "Protective structure above driver's head",
                    "Steering wheel",
                    "Rear wing",
                    "Fuel system"
                ],
                correct: 1
            },
            {
                topic: "Lewis Hamilton",
                emoji: "🏁👑",
                question: "How many F1 championships has Hamilton won?",
                options: [
                    "7 World Championships (tied record)",
                    "3 championships",
                    "1 championship",
                    "10 championships"
                ],
                correct: 0
            },
            {
                topic: "Constructors Championship",
                emoji: "🏁🏗️",
                question: "What is Constructors Championship?",
                options: [
                    "Team championship based on combined driver points",
                    "Individual driver title",
                    "Engine manufacturer award",
                    "Fastest car award"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Racing Series",
                emoji: "🏁🏆",
                question: "Name three major racing series?",
                options: [
                    "Formula 1",
                    "NASCAR",
                    "IndyCar",
                    "MotoGP",
                    "WEC",
                    "Formula E",
                ],
                correct: 0
            },
            {
                topic: "F1 Teams",
                emoji: "🏁🏗️",
                question: "Name three current F1 teams?",
                options: [
                    "Mercedes",
                    "Red Bull",
                    "Ferrari",
                    "McLaren",
                    "Alpine",
                    "Aston Martin",
                ],
                correct: 0
            },
            {
                topic: "Racing Legends",
                emoji: "🏁⭐",
                question: "Name three legendary race drivers?",
                options: [
                    "Ayrton Senna",
                    "Michael Schumacher",
                    "Lewis Hamilton",
                    "Alain Prost",
                    "Juan Manuel Fangio",
                ],
                correct: 0
            },
            {
                topic: "Circuit Types",
                emoji: "🏁🛣️",
                question: "Name three types of racing circuits?",
                options: [
                    "Street circuit",
                    "Permanent circuit",
                    "Road course",
                    "Oval",
                    "Mixed circuit",
                ],
                correct: 0
            },
            {
                topic: "Car Components",
                emoji: "🏁🔧",
                question: "Name three F1 car components?",
                options: [
                    "Engine/Power unit",
                    "Chassis",
                    "Wings",
                    "Tires",
                    "Gearbox",
                    "Suspension",
                ],
                correct: 0
            },
            {
                topic: "Flag Signals",
                emoji: "🏁🚩",
                question: "Name three racing flag meanings?",
                options: [
                    "Green (start/clear)",
                    "Yellow (caution)",
                    "Red (stop)",
                    "Blue (let faster car pass)",
                    "Black (disqualification)",
                ],
                correct: 0
            },
            {
                topic: "Famous Circuits",
                emoji: "🏁🏛️",
                question: "Name three famous race tracks?",
                options: [
                    "Monaco",
                    "Silverstone",
                    "Spa-Francorchamps",
                    "Monza",
                    "Suzuka",
                    "Indianapolis",
                ],
                correct: 0
            },
            {
                topic: "Racing Techniques",
                emoji: "🏁🎯",
                question: "Name three racing techniques?",
                options: [
                    "Slipstreaming",
                    "Trail braking",
                    "Heel-toe downshift",
                    "Overtaking",
                    "Defensive driving",
                ],
                correct: 0
            },
            {
                topic: "Pit Crew Roles",
                emoji: "🏁👥",
                question: "Name three pit crew positions?",
                options: [
                    "Tire changers",
                    "Jack operators",
                    "Fuelers",
                    "Mechanics",
                    "Lollipop man",
                ],
                correct: 0
            },
            {
                topic: "Racing Terms",
                emoji: "🏁📖",
                question: "Name three motorsport terms?",
                options: [
                    "Pole position",
                    "Podium",
                    "DNF",
                    "Fastest lap",
                    "Qualifying",
                    "Grid",
                ],
                correct: 0
            }
        ]
    },
    20: {
        "easy": [
            {
                topic: "Climbing Basics",
                emoji: "🧗‍♂️⛰️",
                question: "Is rock climbing about ascending rock formations?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Rope",
                emoji: "🧗‍♀️🪢",
                question: "Do climbers use ropes for safety?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Harness",
                emoji: "🧗‍♂️🎽",
                question: "Do climbers wear harnesses?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Indoor Climbing",
                emoji: "🧗‍♀️🏢",
                question: "Can climbing be done indoors?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Helmet",
                emoji: "🧗‍♂️🪖",
                question: "Should climbers wear helmets?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Chalk",
                emoji: "🧗‍♀️🤍",
                question: "Do climbers use chalk for grip?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Holds",
                emoji: "🧗‍♂️✊",
                question: "Do climbers grip onto holds?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Belaying",
                emoji: "🧗‍♀️🤝",
                question: "Does a belayer help control the rope?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Olympics",
                emoji: "🧗‍♂️🥇",
                question: "Is sport climbing in the Olympics?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Shoes",
                emoji: "🧗‍♀️👟",
                question: "Do climbers wear special climbing shoes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Bouldering",
                emoji: "🧗‍♂️🪨",
                question: "What is bouldering?",
                options: [
                    "Climbing short routes without ropes over crash pads",
                    "Mountain climbing"
                ],
                correct: 0
            },
            {
                topic: "Top Rope",
                emoji: "🧗‍♀️⬆️",
                question: "What is top rope climbing?",
                options: [
                    "Free climbing",
                    "Rope anchored at top, belayer at bottom"
                ],
                correct: 0
            },
            {
                topic: "Lead Climbing",
                emoji: "🧗‍♂️🔝",
                question: "What is lead climbing?",
                options: [
                    "Climber clips rope to protection while ascending",
                    "Following another climber"
                ],
                correct: 1
            },
            {
                topic: "Crimping",
                emoji: "🧗‍♀️✊",
                question: "What is crimping?",
                options: [
                    "Folding equipment",
                    "Gripping small holds with fingertips"
                ],
                correct: 0
            },
            {
                topic: "Crux",
                emoji: "🧗‍♂️💪",
                question: "What is the crux?",
                options: [
                    "Hardest section of climb",
                    "Starting point"
                ],
                correct: 0
            },
            {
                topic: "Carabiner",
                emoji: "🧗‍♀️🔗",
                question: "What is a carabiner?",
                options: [
                    "Climbing hold",
                    "Metal loop for connecting rope and gear"
                ],
                correct: 1
            },
            {
                topic: "Redpoint",
                emoji: "🧗‍♂️🔴",
                question: "What is a redpoint?",
                options: [
                    "Successfully completing route after practice",
                    "First attempt"
                ],
                correct: 1
            },
            {
                topic: "Beta",
                emoji: "🧗‍♀️💡",
                question: "What is beta?",
                options: [
                    "Climbing grade",
                    "Information/advice about route"
                ],
                correct: 1
            },
            {
                topic: "Dyno",
                emoji: "🧗‍♂️🚀",
                question: "What is a dyno?",
                options: [
                    "Dynamic jump to distant hold",
                    "Static move"
                ],
                correct: 1
            },
            {
                topic: "Flash",
                emoji: "🧗‍♀️⚡",
                question: "What is flashing a route?",
                options: [
                    "Using lights",
                    "Completing on first try with beta"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Onsight",
                emoji: "🧗‍♂️👁️",
                question: "What is onsighting?",
                options: [
                    "Completing route first try without prior knowledge",
                    "Practice attempt",
                    "Following someone"
                ],
                correct: 0
            },
            {
                topic: "Gaston",
                emoji: "🧗‍♀️💪",
                question: "What is a gaston move?",
                options: [
                    "Pushing outward on holds with thumbs down",
                    "Pulling motion",
                    "Foot technique"
                ],
                correct: 1
            },
            {
                topic: "Undercling",
                emoji: "🧗‍♂️🔽",
                question: "What is an undercling?",
                options: [
                    "Gripping underside of hold, pulling upward",
                    "Top grip",
                    "Side grip"
                ],
                correct: 0
            },
            {
                topic: "Smearing",
                emoji: "🧗‍♀️👟",
                question: "What is smearing?",
                options: [
                    "Using friction of shoe on rock without foothold",
                    "Using chalk",
                    "Rope technique"
                ],
                correct: 1
            },
            {
                topic: "Pumped",
                emoji: "🧗‍♂️💪",
            {
                topic: "Mantle",
                emoji: "🧗‍♀️⬆️",
                question: "What is mantling?",
                options: [
                    "Pressing down on hold to push body up",
                    "Pulling technique",
                    "Descending"
                ],
                correct: 1
            },
            {
                topic: "Sandbag",
                emoji: "🧗‍♂️⚠️",
                question: "What does sandbagged route mean?",
                options: [
                    "Route harder than grade suggests",
                    "Easy route",
                    "Sandy climbing"
                ],
                correct: 1
            },
            {
                topic: "Belay Device",
                emoji: "🧗‍♀️🔧",
                question: "What does belay device do?",
                options: [
                    "Controls rope friction for catching falls",
                    "Holds gear",
                    "Measures distance"
                ],
                correct: 1
            },
            {
                topic: "Campus Board",
                emoji: "🧗‍♂️🪜",
                question: "What is campus board training?",
                options: [
                    "Climbing overhanging rungs using only hands",
                    "Walking board",
                    "Balance training"
                ],
                correct: 1
            },
            {
                topic: "Whipper",
                emoji: "🧗‍♀️💥",
                question: "What is a whipper?",
                options: [
                    "Big fall in lead climbing",
                    "Climbing tool",
                    "Hold type"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Grading System",
                emoji: "🧗‍♂️🔢",
                question: "What is Yosemite Decimal System range?",
                options: [
                    "5.0 to 5.15d for rock climbing difficulty",
                    "1-10 scale",
                    "A-Z scale",
                    "No grades"
                ],
                correct: 0
            },
            {
                topic: "V-Scale",
                emoji: "🧗‍♀️📊",
                question: "What is V-scale for?",
                options: [
                    "Bouldering grades (V0 to V17)",
                    "Rope climbing",
                    "Speed climbing",
                    "Height measurement"
                ],
                correct: 0
            },
            {
                topic: "Sport Climbing Events",
                emoji: "🧗‍♂️🏆",
                question: "What are Olympic climbing disciplines?",
                options: [
                    "Speed, Bouldering, Lead",
                    "Only speed",
                    "Only bouldering",
                    "Traditional only"
                ],
                correct: 0
            },
            {
                topic: "Speed Climbing",
                emoji: "🧗‍♀️⚡",
                question: "What is standard speed climbing wall height?",
                options: [
                    "15 meters with standardized route",
                    "20 meters",
                    "5 meters",
                    "50 meters"
                ],
                correct: 0
            },
            {
                topic: "IFSC",
                emoji: "🧗‍♂️🌍",
                question: "What is IFSC?",
                options: [
                    "International Federation of Sport Climbing",
                    "Indoor Fitness Sport Center",
                    "International Free Solo Club",
                    "Ice and Free Sports Committee"
                ],
                correct: 0
            },
            {
                topic: "Free Solo",
                emoji: "🧗‍♀️🆓",
                question: "What is free soloing?",
                options: [
                    "Climbing without rope or protection",
                    "Climbing with rope",
                    "Indoor climbing",
                    "Group climbing"
                ],
                correct: 0
            },
            {
                topic: "Aid Climbing",
                emoji: "🧗‍♂️🔧",
                question: "What is aid climbing?",
                options: [
                    "Using gear for upward progress, not just protection",
                    "Free climbing",
                    "Speed climbing",
                    "No equipment"
                ],
                correct: 1
            },
            {
                topic: "Rope Diameter",
                emoji: "🧗‍♀️📏",
                question: "What is typical climbing rope diameter?",
                options: [
                    "9-11 mm",
                    "20 mm",
                    "5 mm",
                    "50 mm"
                ],
                correct: 0
            },
            {
                topic: "Alex Honnold",
                emoji: "🧗‍♂️🌟",
                question: "What is Alex Honnold famous for?",
                options: [
                    "Free soloing El Capitan in Yosemite",
                    "Speed records",
                    "Indoor competitions",
                    "Equipment design"
                ],
                correct: 1
            },
            {
                topic: "Adam Ondra",
                emoji: "🧗‍♂️👑",
                question: "What grades has Adam Ondra climbed?",
                options: [
                    "First 5.15d (9c) climber",
                    "Only 5.10",
                    "Only bouldering",
                    "Beginner grades"
                ],
                correct: 0
            }
        ],
        "extreme": [
            {
                topic: "Climbing Styles",
                emoji: "🧗‍♂️🎯",
                question: "Name three climbing styles?",
                options: [
                    "Bouldering",
                    "Sport climbing",
                    "Trad climbing",
                    "Free solo",
                    "Aid climbing",
                    "Ice climbing",
                ],
                correct: 0
            },
            {
                topic: "Climbing Holds",
                emoji: "🧗‍♀️✊",
                question: "Name three types of climbing holds?",
                options: [
                    "Jug",
                    "Crimp",
                    "Sloper",
                    "Pinch",
                    "Pocket",
                    "Undercling",
                ],
                correct: 0
            },
            {
                topic: "Essential Gear",
                emoji: "🧗‍♂️🎒",
                question: "Name three essential climbing equipment items?",
                options: [
                    "Rope",
                    "Harness",
                    "Carabiners",
                    "Belay device",
                    "Helmet",
                    "Climbing shoes",
                ],
                correct: 0
            },
            {
                topic: "Climbing Techniques",
                emoji: "🧗‍♀️💪",
                question: "Name three climbing techniques?",
                options: [
                    "Crimping",
                    "Smearing",
                    "Flagging",
                    "Heel hook",
                    "Toe hook",
                    "Dyno",
                ],
                correct: 0
            },
            {
                topic: "Famous Climbers",
                emoji: "🧗‍♂️⭐",
                question: "Name three legendary climbers?",
                options: [
                    "Alex Honnold",
                    "Adam Ondra",
                    "Lynn Hill",
                    "Tommy Caldwell",
                    "Janja Garnbret",
                ],
                correct: 0
            },
            {
                topic: "Climbing Locations",
                emoji: "🧗‍♀️🏔️",
                question: "Name three famous climbing destinations?",
                options: [
                    "Yosemite",
                    "Fontainebleau",
                    "Kalymnos",
                    "Red River Gorge",
                    "Frankenjura",
                ],
                correct: 0
            },
            {
                topic: "Knots",
                emoji: "🧗‍♂️🪢",
                question: "Name three climbing knots?",
                options: [
                    "Figure-eight",
                    "Clove hitch",
                    "Bowline",
                    "Munter hitch",
                    "Double fisherman's",
                ],
                correct: 0
            },
            {
                topic: "Climbing Terms",
                emoji: "🧗‍♀️📖",
                question: "Name three climbing terminology terms?",
                options: [
                    "Beta",
                    "Crux",
                    "Redpoint",
                    "Flash",
                    "Onsight",
                    "Whipper",
                ],
                correct: 0
            },
            {
                topic: "Protection Gear",
                emoji: "🧗‍♂️🔧",
                question: "Name three types of climbing protection?",
                options: [
                    "Cams",
                    "Nuts",
                    "Quickdraws",
                    "Bolts",
                    "Slings",
                    "Hexes",
                ],
                correct: 0
            },
            {
                topic: "Competitions",
                emoji: "🧗‍♀️🏆",
                question: "Name three climbing competition formats?",
};

// Register in global question bank
if (typeof subjectQuestionBank !== 'undefined') {
    subjectQuestionBank['sports'] = sportsQuestions;
}
