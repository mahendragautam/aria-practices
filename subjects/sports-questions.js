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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Players",
                emoji: "🏈🏐",
                question: "Are there 11 players on each football team?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Officials",
                emoji: "⛳🏌️",
                question: "Does a referee control the football match?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Cards",
                emoji: "🎿⛷️",
                question: "Is a yellow card a warning in football?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "60 minutes",
                    "90 minutes"
                ],
                correct: 0
            },
            {
                topic: "Offside",
                emoji: "🏊🤽",
                question: "Can you be offside in your own half?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 1
            },
            {
                topic: "Substitutions",
                emoji: "🤾🤺",
                question: "How many substitutes are typically allowed in a match?",
                options: [
                    "Unlimited",
                    "3 to 5 depending on competition"
                ],
                correct: 0
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
                    "Final warning only",
                    "Sent off immediately"
                ],
                correct: 0
            },
            {
                topic: "Corner Kick",
                emoji: "🚣🛶",
                question: "When is a corner kick awarded?",
                options: [
                    "Ball crosses goal line off defending team",
                    "Any time"
                ],
                correct: 0
            },
            {
                topic: "Free Kick",
                emoji: "🏄🏄",
                question: "Can you score directly from a free kick?",
                options: [
                    "No",
                    "Yes"
                ],
                correct: 0
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
                    "Visual Analysis Review",
                    "Verified Action Replay",
                    "Video Assistant Referee"
                ],
                correct: 0
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
                    "Only if scored",
                    "No, depends on intent and position",
                    "Yes, always"
                ],
                correct: 2
            },
            {
                topic: "Kickoff",
                emoji: "🎯🎱",
                question: "Can you score directly from kickoff?",
                options: [
                    "Yes, it's allowed",
                    "Only after half time",
                    "Never allowed"
                ],
                correct: 1
            },
            {
                topic: "Back Pass",
                emoji: "🎳🏏",
                question: "Can a goalkeeper handle a deliberate back pass?",
                options: [
                    "Only once per match",
                    "No, it's illegal",
                    "Yes, always"
                ],
                correct: 2
            },
            {
                topic: "Advantage Rule",
                emoji: "🥍🏑",
                question: "What is the advantage rule?",
                options: [
                    "Play continues after foul if beneficial",
                    "Extra player allowed",
                    "No fouls in final minutes"
                ],
                correct: 1
            },
            {
                topic: "Goal Kick",
                emoji: "🛹🛼",
                question: "Where must opponents be during a goal kick?",
                options: [
                    "Anywhere on field",
                    "Behind halfway line",
                    "Outside penalty area"
                ],
                correct: 2
            },
            {
                topic: "Indirect Free Kick",
                emoji: "🏹🎣",
                question: "Can you score directly from an indirect free kick?",
                options: [
                    "Only from outside box",
                    "Yes",
                    "No, must touch another player first"
                ],
                correct: 0
            },
            {
                topic: "Penalty Shootout",
                emoji: "🤿🏊",
                question: "How many penalties in initial shootout round?",
                options: [
                    "3 each team",
                    "7 each team",
                    "5 each team"
                ],
                correct: 2
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
                    "80-100 meters",
                    "100-110 meters for international",
                    "110-130 meters",
                    "90-120 meters"
                ],
                correct: 3
            },
            {
                topic: "Ball Pressure",
                emoji: "⚽💨",
                question: "What is the official ball pressure range?",
                options: [
                    "2.0-3.0 bar",
                    "1.5-2.0 bar",
                    "0.3-0.5 bar",
                    "0.6-1.1 bar (8.5-15.6 psi)"
                ],
                correct: 3
            },
            {
                topic: "Offside Timing",
                emoji: "⚽⏰",
                question: "When is offside judged?",
                options: [
                    "When player runs forward",
                    "When player receives ball",
                    "When ball is played by teammate",
                    "When player enters opponent's half"
                ],
                correct: 1
            },
            {
                topic: "Substitution Rules",
                emoji: "⚽🔄",
                question: "Can a substituted player return to the match?",
                options: [
                    "Yes, once",
                    "No, never in most competitions",
                    "Only in friendlies",
                    "Yes, after 15 minutes"
                ],
                correct: 0
            },
            {
                topic: "Goalkeeper Rules",
                emoji: "⚽🧤",
                question: "How long can a goalkeeper hold the ball?",
                options: [
                    "3 seconds",
                    "10 seconds",
                    "6 seconds by rule",
                    "Unlimited time"
                ],
                correct: 3
            },
            {
                topic: "IFAB Laws",
                emoji: "⚽📖",
                question: "How many Laws of the Game exist?",
                options: [
                    "25 laws",
                    "20 laws",
                    "17 laws",
                    "11 laws"
                ],
                correct: 2
            },
            {
                topic: "Yellow Cards",
                emoji: "⚽🟨",
                question: "How many yellow cards result in suspension?",
                options: [
                    "Varies by competition but typically 5",
                    "3 yellows",
                    "7 yellows",
                    "10 yellows"
                ],
                correct: 1
            },
            {
                topic: "Match Ball",
                emoji: "⚽⚪",
                question: "What is the official circumference of a football?",
                options: [
                    "60-65 cm",
                    "75-80 cm",
                    "50-55 cm",
                    "68-70 cm (size 5)"
                ],
                correct: 3
            },
            {
                topic: "Penalty Area",
                emoji: "⚽📦",
                question: "What are the penalty area dimensions from goal?",
                options: [
                    "25 meters",
                    "12 meters",
                    "20 meters",
                    "16.5 meters (18 yards)"
                ],
                correct: 2
            },
            {
                topic: "Assistant Referees",
                emoji: "⚽🚩",
                question: "How many assistant referees are there?",
                options: [
                    "2 assistant referees (linesmen)",
                    "1 assistant",
                    "3 assistants",
                    "4 assistants"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Football History",
                emoji: "⚽📜",
                question: "Name three countries that have won the FIFA World Cup?",
                options: [
                    "Spain",
                    "Germany",
                    "England",
                    "Argentina",
                    "France",
                    "Uruguay",
                    "Italy",
                    "Brazil"
                ],
                correct: 7
            },
            {
                topic: "Famous Players",
                emoji: "⚽⭐",
                question: "Name three legendary football players from history?",
                options: [
                    "Zidane",
                    "Maradona",
                    "Cruyff",
                    "Messi",
                    "Pelé",
                    "Beckenbauer",
                    "Ronaldo"
                ],
                correct: 4
            },
            {
                topic: "Positions",
                emoji: "⚽🎯",
                question: "Name three defensive positions in football?",
                options: [
                    "Full back",
                    "Sweeper",
                    "Defensive midfielder",
                    "Center back",
                    "Wing back"
                ],
                correct: 3
            },
            {
                topic: "Leagues",
                emoji: "⚽🏆",
                question: "Name three major European football leagues?",
                options: [
                    "Bundesliga",
                    "La Liga",
                    "Premier League",
                    "Serie A",
                    "Ligue 1"
                ],
                correct: 2
            },
            {
                topic: "Tournaments",
                emoji: "⚽🌍",
                question: "Name three international football tournaments?",
                options: [
                    "Copa América",
                    "World Cup",
                    "Asian Cup",
                    "UEFA Euro",
                    "African Cup"
                ],
                correct: 1
            },
            {
                topic: "Football Skills",
                emoji: "⚽🎪",
                question: "Name three basic football skills?",
                options: [
                    "Shooting",
                    "Passing",
                    "Heading",
                    "Dribbling",
                    "Tackling",
                    "Control"
                ],
                correct: 3
            },
            {
                topic: "Famous Clubs",
                emoji: "⚽🏟️",
                question: "Name three historically successful football clubs?",
                options: [
                    "Liverpool",
                    "Bayern Munich",
                    "Manchester United",
                    "Real Madrid",
                    "Barcelona",
                    "AC Milan"
                ],
                correct: 3
            },
            {
                topic: "Set Pieces",
                emoji: "⚽🎯",
                question: "Name three types of set pieces in football?",
                options: [
                    "Free kick",
                    "Penalty kick",
                    "Throw-in",
                    "Goal kick",
                    "Corner kick"
                ],
                correct: 0
            },
            {
                topic: "Fouls",
                emoji: "⚽⚠️",
                question: "Name three types of fouls in football?",
                options: [
                    "Holding",
                    "Tripping",
                    "Pushing",
                    "Handball",
                    "Offside",
                    "High kick"
                ],
                correct: 3
            },
            {
                topic: "Formations",
                emoji: "⚽📊",
                question: "Name three common football formations?",
                options: [
                    "4-3-3",
                    "3-5-2",
                    "4-2-3-1",
                    "5-3-2",
                    "4-4-2"
                ],
                correct: 4
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Quarters",
                emoji: "🏀⏱️",
                question: "Is a basketball game divided into quarters?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Hoop Height",
                emoji: "🏀📏",
                question: "Is the basket hoop 10 feet high?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "6 fouls",
                    "5 fouls"
                ],
                correct: 1
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
                    "Yes, anytime",
                    "No, only during stoppages"
                ],
                correct: 0
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
                    "Helping player up",
                    "Pass leading to made basket"
                ],
                correct: 0
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
                    "3 seconds",
                    "5 seconds",
                    "10 seconds"
                ],
                correct: 1
            },
            {
                topic: "Goaltending",
                emoji: "🏀🚫",
                question: "What is goaltending?",
                options: [
                    "Defending the goal",
                    "Standing near basket",
                    "Blocking shot on downward path to basket"
                ],
                correct: 2
            },
            {
                topic: "Flagrant Foul",
                emoji: "🏀💥",
                question: "What makes a foul flagrant?",
                options: [
                    "Arguing with referee",
                    "Excessive or violent contact",
                    "Too many fouls"
                ],
                correct: 2
            },
            {
                topic: "And-One",
                emoji: "🏀➕",
                question: "What is an 'and-one' situation?",
                options: [
                    "Scoring while being fouled",
                    "One player advantage",
                    "Extra point"
                ],
                correct: 0
            },
            {
                topic: "Inbound Pass",
                emoji: "🏀➡️",
                question: "How long to inbound the ball?",
                options: [
                    "No time limit",
                    "10 seconds",
                    "5 seconds"
                ],
                correct: 1
            },
            {
                topic: "Bonus Situation",
                emoji: "🏀🎁",
                question: "When does bonus free throw situation begin?",
                options: [
                    "After team's 5th foul in quarter",
                    "Never",
                    "After any foul"
                ],
                correct: 2
            },
            {
                topic: "Charging",
                emoji: "🏀💨",
                question: "What is a charging foul?",
                options: [
                    "Offensive player running into set defender",
                    "Defensive violation",
                    "Running too fast"
                ],
                correct: 0
            },
            {
                topic: "Euro Step",
                emoji: "🏀🕺",
                question: "Is the Euro step legal?",
                options: [
                    "No, it's traveling",
                    "Yes, within two-step rule",
                    "Only in Europe"
                ],
                correct: 2
            },
            {
                topic: "Clear Path Foul",
                emoji: "🏀🛣️",
                question: "What is a clear path foul?",
                options: [
                    "Any foul in transition",
                    "Foul preventing obvious scoring chance",
                    "Fouling on open court"
                ],
                correct: 1
            },
            {
                topic: "Shot Clock Reset",
                emoji: "🏀🔄",
                question: "When does shot clock reset to 14 seconds?",
                options: [
                    "Offensive rebound in NBA",
                    "Always full reset",
                    "Never resets"
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
                    "85 feet",
                    "90 feet",
                    "94 feet (28.65 meters)",
                    "100 feet"
                ],
                correct: 2
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
                    "12 minutes",
                    "20 minutes",
                    "15 minutes",
                    "10 minutes"
                ],
                correct: 3
            },
            {
                topic: "Restricted Area",
                emoji: "🏀⭕",
                question: "What is the restricted area arc radius?",
                options: [
                    "4 feet (1.22m) in NBA",
                    "2 feet",
                    "3 feet",
                    "5 feet"
                ],
                correct: 1
            },
            {
                topic: "Ball Specifications",
                emoji: "🏀⚪",
                question: "What is official NBA basketball circumference?",
                options: [
                    "35 inches",
                    "29.5 inches (75cm)",
                    "27 inches",
                    "32 inches"
                ],
                correct: 3
            },
            {
                topic: "Timeout Rules",
                emoji: "🏀⏸️",
                question: "How many timeouts does each NBA team get?",
                options: [
                    "3 timeouts",
                    "10 timeouts",
                    "5 timeouts",
                    "7 timeouts per game"
                ],
                correct: 2
            },
            {
                topic: "Five-Second Rule",
                emoji: "🏀5️⃣",
                question: "What is the five-second violation?",
                options: [
                    "Staying in one spot",
                    "Taking five seconds to shoot",
                    "Five players on court",
                    "Holding ball without action when closely guarded"
                ],
                correct: 1
            },
            {
                topic: "Double-Double",
                emoji: "🏀💯",
                question: "What is a double-double?",
                options: [
                    "Scoring 20 points",
                    "Playing two positions",
                    "Two players scoring",
                    "Double digits in two statistical categories"
                ],
                correct: 2
            },
            {
                topic: "Key Dimensions",
                emoji: "🏀🔑",
                question: "How wide is the NBA key (lane)?",
                options: [
                    "12 feet",
                    "20 feet",
                    "16 feet (4.9m)",
                    "10 feet"
                ],
                correct: 2
            },
            {
                topic: "Hack-a-Shaq",
                emoji: "🏀🎭",
                question: "What strategy is 'Hack-a-Shaq'?",
                options: [
                    "Defensive formation",
                    "Intentionally fouling poor free throw shooter",
                    "Pick and roll",
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
                    "Heat",
                    "Bulls",
                    "Celtics",
                    "Spurs",
                    "Warriors",
                    "Pistons",
                    "Lakers"
                ],
                correct: 6
            },
            {
                topic: "Legendary Players",
                emoji: "🏀⭐",
                question: "Name three basketball legends?",
                options: [
                    "Magic Johnson",
                    "Michael Jordan",
                    "Kareem Abdul-Jabbar",
                    "Kobe Bryant",
                    "Larry Bird",
                    "LeBron James"
                ],
                correct: 1
            },
            {
                topic: "Positions",
                emoji: "🏀👤",
                question: "Name the five basketball positions?",
                options: [
                    "Shooting Guard",
                    "Small Forward",
                    "Point Guard",
                    "Center",
                    "Power Forward"
                ],
                correct: 2
            },
            {
                topic: "Skills",
                emoji: "🏀🎯",
                question: "Name three essential basketball skills?",
                options: [
                    "Shooting",
                    "Rebounding",
                    "Dribbling",
                    "Passing",
                    "Defense"
                ],
                correct: 0
            },
            {
                topic: "Shot Types",
                emoji: "🏀🎪",
                question: "Name three types of basketball shots?",
                options: [
                    "Three-pointer",
                    "Free throw",
                    "Jump shot",
                    "Layup",
                    "Dunk",
                    "Hook shot"
                ],
                correct: 3
            },
            {
                topic: "Violations",
                emoji: "🏀🚫",
                question: "Name three basketball violations?",
                options: [
                    "Double dribble",
                    "Shot clock",
                    "Three seconds",
                    "Backcourt",
                    "Goaltending",
                    "Traveling"
                ],
                correct: 5
            },
            {
                topic: "Offensive Plays",
                emoji: "🏀📋",
                question: "Name three offensive strategies in basketball?",
                options: [
                    "Isolation",
                    "Pick and roll",
                    "Fast break",
                    "Motion offense",
                    "Triangle offense"
                ],
                correct: 1
            },
            {
                topic: "Defensive Strategies",
                emoji: "🏀🛡️",
                question: "Name three defensive formations?",
                options: [
                    "Man-to-man",
                    "Zone defense",
                    "Full court press",
                    "Box-and-one",
                    "Press defense"
                ],
                correct: 0
            },
            {
                topic: "Championships",
                emoji: "🏀🏅",
                question: "Name three major basketball competitions?",
                options: [
                    "EuroLeague",
                    "NCAA Tournament",
                    "FIBA World Cup",
                    "NBA Finals",
                    "Olympics"
                ],
                correct: 3
            },
            {
                topic: "Records",
                emoji: "🏀📊",
                question: "Name three basketball statistical categories?",
                options: [
                    "Rebounds",
                    "Blocks",
                    "Steals",
                    "Field goal percentage",
                    "Assists",
                    "Points"
                ],
                correct: 5
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Field",
                emoji: "🏏🏟️",
                question: "Is the cricket field oval-shaped?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pitch",
                emoji: "🏏📏",
                question: "Are wickets placed at both ends of the pitch?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Scoring",
                emoji: "🏏🏃",
                question: "Do batsmen run between wickets to score runs?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Boundaries",
                emoji: "🏏⚡",
                question: "Is hitting the ball to the boundary worth 4 runs?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Dismissals",
                emoji: "🏏❌",
                question: "Can a batsman be bowled out?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Over",
                emoji: "🏏🔢",
                question: "How many balls are in one over?",
                options: [
                    "8 balls",
                    "6 balls"
                ],
                correct: 0
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
                    "Last Ball Win",
                    "Leg Before Wicket"
                ],
                correct: 0
            },
            {
                topic: "Innings",
                emoji: "🏏📊",
                question: "How many innings in a Test match per team?",
                options: [
                    "2 innings",
                    "1 innings"
                ],
                correct: 1
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
                    "Extra run awarded, must be re-bowled",
                    "Nothing happens"
                ],
                correct: 1
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
                    "First over of match",
                    "Over with no runs scored"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "DRS",
                emoji: "🏏📹",
                question: "What does DRS stand for?",
                options: [
                    "Delivery Rating System",
                    "Decision Review System",
                    "Direct Run Score"
                ],
                correct: 1
            },
            {
                topic: "Follow-On",
                emoji: "🏏🔄",
                question: "What is a follow-on in Test cricket?",
                options: [
                    "Following the captain",
                    "Team batting again immediately if far behind",
                    "Next match"
                ],
                correct: 1
            },
            {
                topic: "Hat-Trick",
                emoji: "🏏🎩",
                question: "What is a hat-trick in cricket?",
                options: [
                    "Taking three wickets in three balls",
                    "Three boundaries in row",
                    "Scoring 100 runs"
                ],
                correct: 1
            },
            {
                topic: "Century",
                emoji: "🏏💯",
                question: "What is a century?",
                options: [
                    "Scoring 100 runs",
                    "100 matches played",
                    "100 balls bowled"
                ],
                correct: 2
            },
            {
                topic: "Yorker",
                emoji: "🏏⚡",
                question: "What is a yorker delivery?",
                options: [
                    "Ball pitched at batsman's feet",
                    "Slow ball",
                    "High ball"
                ],
                correct: 1
            },
            {
                topic: "Third Umpire",
                emoji: "🏏📺",
                question: "What does the third umpire do?",
                options: [
                    "Third match official",
                    "Reviews decisions using video technology",
                    "Substitute umpire"
                ],
                correct: 1
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
                    "When captain requests",
                    "Every 10 overs"
                ],
                correct: 0
            },
            {
                topic: "Declaration",
                emoji: "🏏📢",
                question: "What is an innings declaration?",
                options: [
                    "Umpire's call",
                    "End of all wickets",
                    "Captain ends batting voluntarily"
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
                    "25 yards",
                    "20 yards",
                    "22 yards (20.12 meters)",
                    "18 yards"
                ],
                correct: 2
            },
            {
                topic: "Test Match Duration",
                emoji: "🏏⏰",
                question: "How many days is a Test match?",
                options: [
                    "2 days",
                    "7 days",
                    "5 days",
                    "3 days"
                ],
                correct: 2
            },
            {
                topic: "T20 Overs",
                emoji: "🏏🔢",
                question: "How many overs per innings in T20?",
                options: [
                    "10 overs",
                    "30 overs",
                    "20 overs",
                    "50 overs"
                ],
                correct: 2
            },
            {
                topic: "Boundary Rope",
                emoji: "🏏🏟️",
                question: "What is typical boundary distance?",
                options: [
                    "100 meters",
                    "60-90 meters depending on ground",
                    "30-40 meters",
                    "50-60 meters"
                ],
                correct: 0
            },
            {
                topic: "Ball Weight",
                emoji: "🏏⚖️",
                question: "What is cricket ball weight?",
                options: [
                    "200 grams",
                    "100 grams",
                    "155.9 to 163 grams",
                    "250 grams"
                ],
                correct: 2
            },
            {
                topic: "ODI Overs",
                emoji: "🏏🎯",
                question: "How many overs in One Day International?",
                options: [
                    "50 overs per side",
                    "60 overs",
                    "45 overs",
                    "40 overs"
                ],
                correct: 1
            },
            {
                topic: "Fielding Positions",
                emoji: "🏏🗺️",
                question: "How many fielding positions are there?",
                options: [
                    "Unlimited positions",
                    "10 positions",
                    "20 positions",
                    "50+ named positions"
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
                    "Scoring system",
                    "Rain-affected match calculation"
                ],
                correct: 1
            },
            {
                topic: "Stumps Height",
                emoji: "🏏📐",
                question: "What is the height of stumps?",
                options: [
                    "28 inches (71.12 cm)",
                    "25 inches",
                    "30 inches",
                    "32 inches"
                ],
                correct: 2
            },
            {
                topic: "Super Over",
                emoji: "🏏🔥",
                question: "When is a Super Over played?",
                options: [
                    "Tie-breaker in limited overs",
                    "Never",
                    "Every match",
                    "Random selection"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Cricket Formats",
                emoji: "🏏📋",
                question: "Name three formats of cricket?",
                options: [
                    "Twenty20 (T20)",
                    "Test cricket",
                    "One Day International (ODI)"
                ],
                correct: 1
            },
            {
                topic: "Dismissal Types",
                emoji: "🏏❌",
                question: "Name three ways to get out in cricket?",
                options: [
                    "Caught",
                    "Run out",
                    "Hit wicket",
                    "LBW",
                    "Bowled",
                    "Stumped"
                ],
                correct: 4
            },
            {
                topic: "Cricket Nations",
                emoji: "🏏🌍",
                question: "Name three Test-playing nations?",
                options: [
                    "West Indies",
                    "India",
                    "Australia",
                    "Pakistan",
                    "New Zealand",
                    "England",
                    "South Africa"
                ],
                correct: 1
            },
            {
                topic: "Bowling Types",
                emoji: "🏏🎳",
                question: "Name three types of bowling?",
                options: [
                    "Swing bowling",
                    "Medium pace",
                    "Fast bowling",
                    "Spin bowling",
                    "Seam bowling"
                ],
                correct: 2
            },
            {
                topic: "Cricket Shots",
                emoji: "🏏🎯",
                question: "Name three batting shots?",
                options: [
                    "Drive",
                    "Sweep",
                    "Hook",
                    "Pull",
                    "Cut",
                    "Cover drive"
                ],
                correct: 0
            },
            {
                topic: "Fielding Positions",
                emoji: "🏏🗺️",
                question: "Name three fielding positions?",
                options: [
                    "Point",
                    "Cover",
                    "Fine leg",
                    "Mid-off",
                    "Slip",
                    "Square leg"
                ],
                correct: 4
            },
            {
                topic: "Tournaments",
                emoji: "🏏🏆",
                question: "Name three major cricket tournaments?",
                options: [
                    "IPL",
                    "Champions Trophy",
                    "Ashes",
                    "World Cup",
                    "T20 World Cup"
                ],
                correct: 3
            },
            {
                topic: "Legendary Players",
                emoji: "🏏⭐",
                question: "Name three cricket legends?",
                options: [
                    "Sachin Tendulkar",
                    "Virat Kohli",
                    "Don Bradman",
                    "Brian Lara",
                    "Shane Warne"
                ],
                correct: 0
            },
            {
                topic: "Cricket Terms",
                emoji: "🏏📖",
                question: "Name three cricket terminology terms?",
                options: [
                    "Innings",
                    "Over",
                    "Boundary",
                    "Duck",
                    "Wicket",
                    "Century"
                ],
                correct: 2
            },
            {
                topic: "Ball Types",
                emoji: "🏏⚪",
                question: "Name three delivery variations?",
                options: [
                    "Off-break",
                    "Bouncer",
                    "Slower ball",
                    "Googly",
                    "Doosra",
                    "Yorker"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Service",
                emoji: "🎾🎯",
                question: "Does the serve start each point?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "Winning score",
                    "Zero points"
                ],
                correct: 1
            },
            {
                topic: "Deuce",
                emoji: "🎾⚖️",
                question: "What is deuce?",
                options: [
                    "Score tied at 40-40",
                    "First point"
                ],
                correct: 0
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
                    "Serve is replayed",
                    "Lose the point"
                ],
                correct: 0
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
                    "Missing both service attempts",
                    "Two players fault"
                ],
                correct: 1
            },
            {
                topic: "Advantage",
                emoji: "🎾➕",
                question: "What does advantage mean?",
                options: [
                    "Starting score",
                    "Point after deuce"
                ],
                correct: 0
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
                    "Back line of court",
                    "Net line"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                topic: "Hawkeye",
                emoji: "🎾👁️",
                question: "What is Hawkeye technology?",
                options: [
                    "Camera type",
                    "Player nickname",
                    "Ball tracking system for challenges"
                ],
                correct: 0
            },
            {
                topic: "Service Box",
                emoji: "🎾📦",
                question: "Where must serve land?",
                options: [
                    "Diagonal service box",
                    "Straight ahead",
                    "Anywhere in court"
                ],
                correct: 2
            },
            {
                topic: "Grand Slam Surfaces",
                emoji: "🎾🌍",
                question: "Which Grand Slam is on clay?",
                options: [
                    "US Open",
                    "French Open",
                    "Wimbledon"
                ],
                correct: 1
            },
            {
                topic: "Golden Set",
                emoji: "🎾🥇",
                question: "What is a golden set?",
                options: [
                    "Final set",
                    "Winning set 6-0 without losing point",
                    "First set"
                ],
                correct: 0
            },
            {
                topic: "Drop Shot",
                emoji: "🎾💧",
                question: "What is a drop shot?",
                options: [
                    "Missing the ball",
                    "Powerful smash",
                    "Soft shot that barely clears net"
                ],
                correct: 0
            },
            {
                topic: "Foot Fault",
                emoji: "🎾👣",
                question: "What causes a foot fault?",
                options: [
                    "Wrong shoes",
                    "Stepping on/over baseline when serving",
                    "Tripping"
                ],
                correct: 1
            },
            {
                topic: "Match Point",
                emoji: "🎾🎯",
                question: "What is match point?",
                options: [
                    "Point to win entire match",
                    "Starting point",
                    "Middle of match"
                ],
                correct: 1
            },
            {
                topic: "Overhead Smash",
                emoji: "🎾💪",
                question: "When is overhead smash typically used?",
                options: [
                    "For serving",
                    "Against high ball or lob",
                    "At net"
                ],
                correct: 1
            },
            {
                topic: "Fifth Set Rules",
                emoji: "🎾5️⃣",
                question: "What's different about fifth set at Wimbledon?",
                options: [
                    "No tiebreak (before 2019 rule change)",
                    "Double points",
                    "Shorter set"
                ],
                correct: 0
            },
            {
                topic: "ATP and WTA",
                emoji: "🎾🌟",
                question: "What do ATP and WTA represent?",
                options: [
                    "Ranking systems",
                    "Men's and Women's professional tours",
                    "Tournament types"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Court Length",
                emoji: "🎾📏",
                question: "What is the length of tennis court?",
                options: [
                    "85 feet",
                    "78 feet (23.77 meters)",
                    "90 feet",
                    "70 feet"
                ],
                correct: 1
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
                    "6 games with 2-game lead",
                    "5 games",
                    "10 games",
                    "8 games"
                ],
                correct: 1
            },
            {
                topic: "Net Height",
                emoji: "🎾📐",
                question: "What is net height at center?",
                options: [
                    "2 feet 6 inches",
                    "3 feet (0.914 meters)",
                    "4 feet",
                    "3 feet 6 inches"
                ],
                correct: 2
            },
            {
                topic: "Best of Five",
                emoji: "🎾5️⃣",
                question: "Where are best of five set matches?",
                options: [
                    "Never played",
                    "All tournaments",
                    "Men's Grand Slams",
                    "Women's Grand Slams"
                ],
                correct: 1
            },
            {
                topic: "Ball Changes",
                emoji: "🎾🔄",
                question: "How often are balls changed?",
                options: [
                    "Every game",
                    "Every hour",
                    "Every 7-9 games typically",
                    "Once per set"
                ],
                correct: 1
            },
            {
                topic: "Challenge System",
                emoji: "🎾🚩",
                question: "How many challenges per set?",
                options: [
                    "1 challenge",
                    "3 challenges (plus 1 in tiebreak)",
                    "Unlimited",
                    "5 challenges"
                ],
                correct: 2
            },
            {
                topic: "Ball Specifications",
                emoji: "🎾⚪",
                question: "What is tennis ball diameter?",
                options: [
                    "3 inches",
                    "4 inches",
                    "2.57 to 2.70 inches (6.54-6.86 cm)",
                    "2 inches"
                ],
                correct: 2
            },
            {
                topic: "Career Grand Slam",
                emoji: "🎾🏆",
                question: "What is Career Grand Slam?",
                options: [
                    "Winning one slam",
                    "Winning 4 Grand Slams in career",
                    "10 tournament wins",
                    "Playing all slams"
                ],
                correct: 1
            },
            {
                topic: "Longest Match",
                emoji: "🎾⏰",
                question: "Longest tennis match duration?",
                options: [
                    "6 hours",
                    "15 hours",
                    "11 hours 5 minutes (Isner vs Mahut, 2010)",
                    "8 hours"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Grand Slams",
                emoji: "🎾🏆",
                question: "Name the four Grand Slam tournaments?",
                options: [
                    "US Open",
                    "French Open",
                    "Wimbledon",
                    "Australian Open"
                ],
                correct: 3
            },
            {
                topic: "Court Surfaces",
                emoji: "🎾🏟️",
                question: "Name three types of tennis court surfaces?",
                options: [
                    "Carpet",
                    "Clay court",
                    "Hard court",
                    "Grass court"
                ],
                correct: 2
            },
            {
                topic: "Legendary Players",
                emoji: "🎾⭐",
                question: "Name three tennis legends?",
                options: [
                    "Serena Williams",
                    "Steffi Graf",
                    "Rafael Nadal",
                    "Novak Djokovic",
                    "Roger Federer"
                ],
                correct: 4
            },
            {
                topic: "Tennis Strokes",
                emoji: "🎾🎯",
                question: "Name three tennis shot types?",
                options: [
                    "Backhand",
                    "Volley",
                    "Forehand",
                    "Lob",
                    "Smash",
                    "Serve"
                ],
                correct: 2
            },
            {
                topic: "Scoring Terms",
                emoji: "🎾🔢",
                question: "Name three tennis scoring terms?",
                options: [
                    "Advantage",
                    "Break point",
                    "Love",
                    "Match point",
                    "Deuce"
                ],
                correct: 2
            },
            {
                topic: "Tennis Strategies",
                emoji: "🎾🧠",
                question: "Name three tennis playing strategies?",
                options: [
                    "All-court game",
                    "Serve and volley",
                    "Counter-punching",
                    "Baseline play"
                ],
                correct: 1
            },
            {
                topic: "Tournament Types",
                emoji: "🎾🏅",
                question: "Name three professional tennis tournament categories?",
                options: [
                    "Grand Slam",
                    "Davis Cup",
                    "Olympics",
                    "ATP/WTA 500",
                    "Masters 1000"
                ],
                correct: 0
            },
            {
                topic: "Equipment",
                emoji: "🎾🎾",
                question: "Name three essential tennis equipment items?",
                options: [
                    "Balls",
                    "Tennis shoes",
                    "Wristbands",
                    "Racket",
                    "Strings"
                ],
                correct: 3
            },
            {
                topic: "Tennis Rules",
                emoji: "🎾⚖️",
                question: "Name three tennis rule violations?",
                options: [
                    "Foot fault",
                    "Touching net",
                    "Hindrance",
                    "Time violation",
                    "Double fault"
                ],
                correct: 0
            },
            {
                topic: "Match Records",
                emoji: "🎾📊",
                question: "Name three tennis statistics tracked?",
                options: [
                    "Break points",
                    "Double faults",
                    "Unforced errors",
                    "Aces",
                    "Winners"
                ],
                correct: 3
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Pool",
                emoji: "🏊‍♀️🏊",
                question: "Are swimming pools divided into lanes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Strokes",
                emoji: "🏊‍♂️🌊",
                question: "Are there different swimming strokes?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
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
                    "Back swim",
                    "Front crawl"
                ],
                correct: 0
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
                    "All four strokes in one race",
                    "One stroke only"
                ],
                correct: 0
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
                    "Manual stopwatch",
                    "Electronic touch pad"
                ],
                correct: 1
            },
            {
                topic: "Flip Turn",
                emoji: "🏊‍♀️🔄",
                question: "What is a flip turn?",
                options: [
                    "Underwater somersault at wall",
                    "Spinning jump"
                ],
                correct: 1
            },
            {
                topic: "Breaststroke",
                emoji: "🏊‍♂️🐸",
                question: "Which stroke resembles a frog kick?",
                options: [
                    "Butterfly",
                    "Breaststroke"
                ],
                correct: 1
            },
            {
                topic: "Disqualification",
                emoji: "🏊‍♀️❌",
                question: "What causes DQ in swimming?",
                options: [
                    "Rule violations like illegal turns",
                    "Swimming slowly"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "IM Order",
                emoji: "🏊‍♂️📋",
                question: "What is correct IM stroke order?",
                options: [
                    "Freestyle, Butterfly, Backstroke, Breaststroke",
                    "Any order",
                    "Butterfly, Backstroke, Breaststroke, Freestyle"
                ],
                correct: 0
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
                    "Lifting head forward",
                    "Turning head to side during stroke"
                ],
                correct: 0
            },
            {
                topic: "Open Turn",
                emoji: "🏊‍♀️🔄",
                question: "Which strokes use open turns?",
                options: [
                    "None",
                    "Breaststroke and Butterfly",
                    "All strokes"
                ],
                correct: 2
            },
            {
                topic: "Underwaters",
                emoji: "🏊‍♂️🌊",
                question: "How far can you swim underwater after start/turn?",
                options: [
                    "5 meters",
                    "15 meters maximum",
                    "No limit"
                ],
                correct: 2
            },
            {
                topic: "Two-Hand Touch",
                emoji: "🏊‍♀️✋✋",
                question: "Which strokes require two-hand touch?",
                options: [
                    "All strokes",
                    "Freestyle only",
                    "Breaststroke and Butterfly"
                ],
                correct: 2
            },
            {
                topic: "Negative Split",
                emoji: "🏊‍♂️📈",
                question: "What is negative splitting?",
                options: [
                    "Swimming second half faster than first",
                    "Bad technique",
                    "Swimming slower"
                ],
                correct: 2
            },
            {
                topic: "Dolphin Kick",
                emoji: "🏊‍♀️🐬",
                question: "Where is dolphin kick allowed?",
                options: [
                    "All strokes anytime",
                    "Only butterfly and underwater phases",
                    "Never allowed"
                ],
                correct: 1
            },
            {
                topic: "Taper",
                emoji: "🏊‍♂️📉",
                question: "What is tapering in swimming?",
                options: [
                    "Increasing training",
                    "Changing strokes",
                    "Reducing training before competition"
                ],
                correct: 0
            },
            {
                topic: "Shaving",
                emoji: "🏊‍♀️✂️",
                question: "Why do swimmers shave body hair?",
                options: [
                    "Fashion",
                    "Required by rules",
                    "Reduce drag and feel water better"
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
                    "75 meters",
                    "25 meters",
                    "100 meters"
                ],
                correct: 0
            },
            {
                topic: "Pool Depth",
                emoji: "🏊‍♀️📐",
                question: "What is minimum Olympic pool depth?",
                options: [
                    "5 meters",
                    "3 meters",
                    "2 meters minimum",
                    "1 meter"
                ],
                correct: 1
            },
            {
                topic: "Lane Width",
                emoji: "🏊‍♂️↔️",
                question: "How wide is each lane?",
                options: [
                    "3 meters",
                    "1.5 meters",
                    "2.5 meters",
                    "4 meters"
                ],
                correct: 2
            },
            {
                topic: "World Records",
                emoji: "🏊‍♀️🏆",
                question: "Where are world records set?",
                options: [
                    "25m pools only",
                    "No specific requirement",
                    "Any pool",
                    "Only 50m pools for long course records"
                ],
                correct: 3
            },
            {
                topic: "Water Temperature",
                emoji: "🏊‍♂️🌡️",
                question: "What is Olympic pool water temperature?",
                options: [
                    "15-20°C",
                    "25-28°C (77-82°F)",
                    "20-22°C",
                    "30-35°C"
                ],
                correct: 1
            },
            {
                topic: "Fastest Stroke",
                emoji: "🏊‍♀️⚡",
                question: "Which is the fastest swimming stroke?",
                options: [
                    "Backstroke",
                    "Butterfly",
                    "Breaststroke",
                    "Freestyle (front crawl)"
                ],
                correct: 1
            },
            {
                topic: "SCM vs LCM",
                emoji: "🏊‍♂️📊",
                question: "What is difference between SCM and LCM?",
                options: [
                    "No difference",
                    "Different strokes",
                    "Different rules",
                    "Short Course Meters (25m) vs Long Course Meters (50m)"
                ],
                correct: 0
            },
            {
                topic: "Reaction Time",
                emoji: "🏊‍♀️⏱️",
                question: "What is typical elite swimmer reaction time?",
                options: [
                    "1.5 seconds",
                    "0.1 seconds",
                    "2 seconds",
                    "0.6-0.8 seconds"
                ],
                correct: 3
            },
            {
                topic: "Tech Suits",
                emoji: "🏊‍♂️👔",
                question: "When were full-body suits banned?",
                options: [
                    "1990s",
                    "Always banned",
                    "After 2009 (new rules 2010)",
                    "Never banned"
                ],
                correct: 3
            },
            {
                topic: "Training Volume",
                emoji: "🏊‍♀️📈",
                question: "What is typical elite swimmer weekly distance?",
                options: [
                    "50-80 km per week",
                    "5-10 km",
                    "100 km",
                    "1-2 km"
                ],
                correct: 1
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
                    "Butterfly"
                ],
                correct: 0
            },
            {
                topic: "Swimming Events",
                emoji: "🏊‍♀️🏁",
                question: "Name three Olympic swimming distances?",
                options: [
                    "100m",
                    "50m",
                    "1500m",
                    "200m",
                    "800m",
                    "400m"
                ],
                correct: 1
            },
            {
                topic: "Swimming Legends",
                emoji: "🏊‍♂️⭐",
                question: "Name three legendary swimmers?",
                options: [
                    "Michael Phelps",
                    "Caeleb Dressel",
                    "Mark Spitz",
                    "Ian Thorpe",
                    "Katie Ledecky"
                ],
                correct: 0
            },
            {
                topic: "Swimming Techniques",
                emoji: "🏊‍♀️🎯",
                question: "Name three swimming technique elements?",
                options: [
                    "Body position",
                    "Pull",
                    "Breathing",
                    "Turns",
                    "Streamline",
                    "Kick"
                ],
                correct: 2
            },
            {
                topic: "Swimming Equipment",
                emoji: "🏊‍♂️🎽",
                question: "Name three swimming training equipment?",
                options: [
                    "Pull buoy",
                    "Kickboard",
                    "Snorkel",
                    "Fins",
                    "Paddles"
                ],
                correct: 1
            },
            {
                topic: "Race Types",
                emoji: "🏊‍♀️🏆",
                question: "Name three types of swimming races?",
                options: [
                    "Sprint",
                    "Distance",
                    "Individual events",
                    "Relay races",
                    "Medley events"
                ],
                correct: 2
            },
            {
                topic: "Swimming Starts",
                emoji: "🏊‍♂️🚀",
                question: "Name three components of racing start?",
                options: [
                    "Underwater kick",
                    "Streamline",
                    "Reaction time",
                    "Breakout",
                    "Dive entry"
                ],
                correct: 2
            },
            {
                topic: "Training Methods",
                emoji: "🏊‍♀️💪",
                question: "Name three swimming training types?",
                options: [
                    "Strength training",
                    "Endurance sets",
                    "Sprint sets",
                    "Technique drills"
                ],
                correct: 1
            },
            {
                topic: "Swimming Rules",
                emoji: "🏊‍♂️⚖️",
                question: "Name three swimming rule violations?",
                options: [
                    "False start",
                    "Wrong stroke",
                    "Illegal turn",
                    "Not touching wall",
                    "Stepping on bottom"
                ],
                correct: 0
            },
            {
                topic: "Major Competitions",
                emoji: "🏊‍♀️🌍",
                question: "Name three major swimming competitions?",
                options: [
                    "Commonwealth Games",
                    "World Championships",
                    "Pan Pacific",
                    "Olympics",
                    "World Cup"
                ],
                correct: 3
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
                    "British & Irish Lions",
                    "Rugby Championship",
                    "Six Nations"
                ],
                correct: 0
            },
            {
                topic: "Skills",
                emoji: "🏉💪",
                question: "Name three rugby skills?",
                options: [
                    "Tackling",
                    "Scrummaging",
                    "Catching",
                    "Passing",
                    "Kicking",
                    "Rucking"
                ],
                correct: 3
            },
            {
                topic: "Ball Handling",
                emoji: "🏉✋",
                question: "Name three ball-carrying techniques?",
                options: [
                    "Two hands carry",
                    "One arm carry",
                    "Side-step",
                    "Fend-off",
                    "Spin pass"
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
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Caddie",
                emoji: "⛳👤",
                question: "Does a caddie carry golfer's clubs?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "One stroke over par",
                    "Hole in one"
                ],
                correct: 1
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
                    "Two strokes under par",
                    "Par score"
                ],
                correct: 0
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
                    "Hole in one",
                    "Three strokes under par",
                    "One under par"
                ],
                correct: 2
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
                    "Team format",
                    "Traditional stroke play"
                ],
                correct: 2
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
                    "Type of club",
                    "Perfect swing"
                ],
                correct: 0
            },
            {
                topic: "Loft",
                emoji: "⛳📐",
                question: "What is club loft?",
                options: [
                    "Club weight",
                    "Club length",
                    "Angle of clubface"
                ],
                correct: 0
            },
            {
                topic: "Dogleg",
                emoji: "⛳🔀",
                question: "What is a dogleg hole?",
                options: [
                    "Uphill hole",
                    "Straight hole",
                    "Hole that curves left or right"
                ],
                correct: 1
            },
            {
                topic: "Scratch Golfer",
                emoji: "⛳⭐",
                question: "What is a scratch golfer?",
                options: [
                    "Zero handicap player",
                    "Professional only",
                    "Beginner"
                ],
                correct: 2
            },
            {
                topic: "Shank",
                emoji: "⛳❌",
                question: "What is a shank?",
                options: [
                    "Long drive",
                    "Ball hit off hosel, goes right",
                    "Perfect shot"
                ],
                correct: 2
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
                    "2 inches",
                    "1 inch",
                    "1.68 inches (42.67mm) minimum",
                    "3 inches"
                ],
                correct: 0
            },
            {
                topic: "Club Limit",
                emoji: "⛳🎒",
                question: "Maximum clubs allowed in bag?",
                options: [
                    "20 clubs",
                    "10 clubs",
                    "14 clubs",
                    "Unlimited"
                ],
                correct: 0
            },
            {
                topic: "Cup Size",
                emoji: "⛳🕳️",
                question: "What is diameter of golf hole?",
                options: [
                    "4.25 inches (108mm)",
                    "3 inches",
                    "5 inches",
                    "6 inches"
                ],
                correct: 3
            },
            {
                topic: "Par 72",
                emoji: "⛳🔢",
                question: "What is typical 18-hole par?",
                options: [
                    "Par 72 (varies 70-72)",
                    "Par 90",
                    "Par 100",
                    "Par 60"
                ],
                correct: 0
            },
            {
                topic: "Majors",
                emoji: "⛳🏆",
                question: "How many men's major championships?",
                options: [
                    "4 majors annually",
                    "6 majors",
                    "2 majors",
                    "10 majors"
                ],
                correct: 2
            },
            {
                topic: "Swing Speed",
                emoji: "⛳💨",
                question: "What is PGA Tour average driver swing speed?",
                options: [
                    "113-115 mph",
                    "150 mph",
                    "90 mph",
                    "80 mph"
                ],
                correct: 3
            },
            {
                topic: "Green Speed",
                emoji: "⛳⚡",
                question: "What measures green speed?",
                options: [
                    "Ruler",
                    "Timer",
                    "Stimpmeter (feet ball rolls)",
                    "No measurement"
                ],
                correct: 0
            },
            {
                topic: "Course Rating",
                emoji: "⛳📊",
                question: "What is course rating?",
                options: [
                    "Number of holes",
                    "Customer reviews",
                    "Difficulty for scratch golfer",
                    "Green fees"
                ],
                correct: 1
            },
            {
                topic: "Ball Speed",
                emoji: "⛳🚀",
                question: "What is typical pro driver ball speed?",
                options: [
                    "170-180 mph",
                    "200 mph",
                    "50 mph",
                    "100 mph"
                ],
                correct: 0
            },
            {
                topic: "Ryder Cup",
                emoji: "⛳🌍",
                question: "How often is Ryder Cup played?",
                options: [
                    "Every 5 years",
                    "Every 10 years",
                    "Every year",
                    "Every 2 years"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Golf Clubs",
                emoji: "⛳🏑",
                question: "Name three types of golf clubs?",
                options: [
                    "Wedges",
                    "Hybrids",
                    "Driver",
                    "Putter",
                    "Irons",
                    "Woods"
                ],
                correct: 2
            },
            {
                topic: "Major Championships",
                emoji: "⛳🏆",
                question: "Name the four men's major golf championships?",
                options: [
                    "US Open",
                    "Masters",
                    "The Open Championship (British Open)",
                    "PGA Championship"
                ],
                correct: 1
            },
            {
                topic: "Scoring Terms",
                emoji: "⛳🔢",
                question: "Name three golf scoring terms?",
                options: [
                    "Par",
                    "Bogey",
                    "Birdie",
                    "Eagle",
                    "Hole-in-one",
                    "Albatross"
                ],
                correct: 2
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
                    "Rory McIlroy"
                ],
                correct: 0
            },
            {
                topic: "Shot Types",
                emoji: "⛳🎯",
                question: "Name three types of golf shots?",
                options: [
                    "Fade",
                    "Chip",
                    "Pitch",
                    "Bunker shot",
                    "Putt",
                    "Drive"
                ],
                correct: 5
            },
            {
                topic: "Course Hazards",
                emoji: "⛳⚠️",
                question: "Name three golf course hazards?",
                options: [
                    "Out of bounds",
                    "Water hazard",
                    "Sand bunker",
                    "Rough",
                    "Trees"
                ],
                correct: 1
            },
            {
                topic: "Golf Formats",
                emoji: "⛳🎮",
                question: "Name three golf competition formats?",
                options: [
                    "Stableford",
                    "Best ball",
                    "Scramble",
                    "Stroke play",
                    "Match play"
                ],
                correct: 3
            },
            {
                topic: "Course Parts",
                emoji: "⛳🏞️",
                question: "Name three parts of a golf course?",
                options: [
                    "Bunker",
                    "Tee box",
                    "Rough",
                    "Green",
                    "Fringe",
                    "Fairway"
                ],
                correct: 1
            },
            {
                topic: "Club Components",
                emoji: "⛳🔧",
                question: "Name three parts of a golf club?",
                options: [
                    "Hosel",
                    "Clubhead",
                    "Grip",
                    "Shaft",
                    "Clubface"
                ],
                correct: 2
            },
            {
                topic: "Famous Courses",
                emoji: "⛳🏛️",
                question: "Name three famous golf courses?",
                options: [
                    "Augusta National",
                    "Pebble Beach",
                    "Shinnecock Hills",
                    "St Andrews",
                    "Pinehurst"
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "3 points",
                    "5 points"
                ],
                correct: 0
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
                    "Tackling technique",
                    "Ball knocked forward illegally"
                ],
                correct: 0
            },
            {
                topic: "Drop Goal",
                emoji: "🏉🦶",
                question: "What is a drop goal?",
                options: [
                    "Kick through posts during play",
                    "Dropped ball"
                ],
                correct: 1
            },
            {
                topic: "Sin Bin",
                emoji: "🏉🟨",
                question: "What is the sin bin?",
                options: [
                    "Storage area",
                    "Temporary 10-minute suspension"
                ],
                correct: 1
            },
            {
                topic: "Rugby Sevens",
                emoji: "🏉7️⃣",
                question: "How many players in Rugby Sevens?",
                options: [
                    "7 players per team",
                    "15 players"
                ],
                correct: 1
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
                    "Sometimes legal",
                    "No, penalty offense",
                    "Yes, always legal"
                ],
                correct: 2
            },
            {
                topic: "Blood Replacement",
                emoji: "🏉🩸",
                question: "What is blood replacement rule?",
                options: [
                    "Temporary sub for bleeding player",
                    "No replacement",
                    "Permanent sub only"
                ],
                correct: 1
            },
            {
                topic: "Mark",
                emoji: "🏉✋",
                question: "What is calling a mark?",
                options: [
                    "Tackle call",
                    "Scoring method",
                    "Fair catch in own 22, free kick awarded"
                ],
                correct: 1
            },
            {
                topic: "Advantage Rule",
                emoji: "🏉👍",
                question: "What is advantage rule?",
                options: [
                    "Time bonus",
                    "Referee lets play continue after infringement",
                    "Extra points"
                ],
                correct: 1
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
                    "Real pass",
                    "Fake pass to deceive defense",
                    "Illegal move"
                ],
                correct: 1
            },
            {
                topic: "Crouch Bind Set",
                emoji: "🏉📢",
                question: "What is this sequence for?",
                options: [
                    "Lineout call",
                    "Starting scrum safely",
                    "Try celebration"
                ],
                correct: 1
            },
            {
                topic: "Grubber Kick",
                emoji: "🏉⚽",
                question: "What is a grubber kick?",
                options: [
                    "Low kick bouncing along ground",
                    "Backwards kick",
                    "High kick"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Match Duration",
                emoji: "🏉⏰",
                question: "How long is rugby union match?",
                options: [
                    "120 minutes",
                    "60 minutes",
                    "90 minutes",
                    "80 minutes (2x40)"
                ],
                correct: 1
            },
            {
                topic: "Scrum Formation",
                emoji: "🏉📐",
                question: "How many players in a scrum?",
                options: [
                    "5 players",
                    "8 players per team (3-4-1 formation)",
                    "10 players",
                    "15 players"
                ],
                correct: 2
            },
            {
                topic: "TMO",
                emoji: "🏉📹",
                question: "What does TMO stand for?",
                options: [
                    "Team Manager Officer",
                    "Time Management Official",
                    "Television Match Official (video referee)",
                    "Tactical Match Observer"
                ],
                correct: 2
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
                    "40 cm",
                    "20 cm",
                    "50 cm",
                    "28-30 cm"
                ],
                correct: 0
            },
            {
                topic: "Props Position",
                emoji: "🏉💪",
                question: "What do props do?",
                options: [
                    "Kick goals",
                    "Front row scrum positions",
                    "Score tries",
                    "Pass only"
                ],
                correct: 1
            },
            {
                topic: "Bonus Points",
                emoji: "🏉➕",
                question: "How to get attacking bonus point?",
                options: [
                    "Score 4+ tries",
                    "First score",
                    "Win by 10+",
                    "No tries conceded"
                ],
                correct: 0
            },
            {
                topic: "Flanker",
                emoji: "🏉🏃",
                question: "What number are flankers?",
                options: [
                    "9 and 10",
                    "1 and 3",
                    "6 and 7 (back row)",
                    "11 and 14"
                ],
                correct: 1
            },
            {
                topic: "Garryowen",
                emoji: "🏉☁️",
                question: "What is a Garryowen?",
                options: [
                    "Formation",
                    "Try celebration",
                    "High kick towards opponent",
                    "Tackle type"
                ],
                correct: 1
            },
            {
                topic: "Rugby League",
                emoji: "🏉🔢",
                question: "How many players in Rugby League?",
                options: [
                    "7 players",
                    "15 players",
                    "11 players",
                    "13 players per team"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Scoring Methods",
                emoji: "🏉🎯",
                question: "Name three ways to score in rugby?",
                options: [
                    "Drop goal",
                    "Conversion",
                    "Penalty kick",
                    "Try"
                ],
                correct: 3
            },
            {
                topic: "Player Positions",
                emoji: "🏉👤",
                question: "Name three rugby positions?",
                options: [
                    "Hooker",
                    "Fly-half",
                    "Scrum-half",
                    "Prop",
                    "Flanker",
                    "Lock",
                    "Winger"
                ],
                correct: 1
            },
            {
                topic: "Set Pieces",
                emoji: "🏉📋",
                question: "Name the two main set pieces in rugby?",
                options: [
                    "Lineout",
                    "Scrum"
                ],
                correct: 1
            },
            {
                topic: "Rugby Nations",
                emoji: "🏉🌍",
                question: "Name three top rugby-playing nations?",
                options: [
                    "England",
                    "France",
                    "New Zealand",
                    "South Africa",
                    "Australia",
                    "Wales",
                    "Ireland"
                ],
                correct: 2
            },
            {
                topic: "Rugby Legends",
                emoji: "🏉⭐",
                question: "Name three legendary rugby players?",
                options: [
                    "Brian O'Driscoll",
                    "Jonny Wilkinson",
                    "Jonah Lomu",
                    "Dan Carter",
                    "Richie McCaw"
                ],
                correct: 2
            },
            {
                topic: "Phases of Play",
                emoji: "🏉🔄",
                question: "Name three rugby game situations?",
                options: [
                    "Scrum",
                    "Ruck",
                    "Lineout",
                    "Maul",
                    "Open play"
                ],
                correct: 0
            },
            {
                topic: "Infringements",
                emoji: "🏉🚫",
                question: "Name three rugby rule violations?",
                options: [
                    "Knock-on",
                    "Forward pass",
                    "Collapsing scrum",
                    "High tackle",
                    "Offside"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Net",
                emoji: "🏐🕸️",
                question: "Is there a net dividing the court?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Rally",
                emoji: "🏐↔️",
                question: "Do teams hit ball back and forth?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Three Touches",
                emoji: "🏐3️⃣",
                question: "How many touches allowed per side?",
                options: [
                    "Unlimited",
                    "3 touches maximum"
                ],
                correct: 1
            },
            {
                topic: "Spike",
                emoji: "🏐💥",
                question: "What is a spike?",
                options: [
                    "Powerful downward hit",
                    "Soft touch"
                ],
                correct: 1
            },
            {
                topic: "Block",
                emoji: "🏐🚫",
                question: "What is a block?",
                options: [
                    "Serve type",
                    "Defensive play at net"
                ],
                correct: 1
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
                    "Specialized defensive player",
                    "Coach"
                ],
                correct: 1
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
                    "Yes, from behind 3-meter line",
                    "Never"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Set Points",
                emoji: "🏐🔢",
                question: "Points to win a set?",
                options: [
                    "25 points (win by 2)",
                    "15 points",
                    "21 points"
                ],
                correct: 0
            },
            {
                topic: "Fifth Set",
                emoji: "🏐5️⃣",
                question: "How many points in deciding 5th set?",
                options: [
                    "25 points",
                    "10 points",
                    "15 points (win by 2)"
                ],
                correct: 0
            },
            {
                topic: "Double Contact",
                emoji: "🏐✌️",
                question: "Is double contact allowed?",
                options: [
                    "Always legal",
                    "Always illegal",
                    "On first team touch (receive/dig) only"
                ],
                correct: 2
            },
            {
                topic: "Overhand Receive",
                emoji: "🏐🙌",
                question: "Can you overhand receive a serve?",
                options: [
                    "Never allowed",
                    "Only libero",
                    "Yes, but must be clean"
                ],
                correct: 2
            },
            {
                topic: "Foot Fault",
                emoji: "🏐👣",
                question: "What is foot fault on serve?",
                options: [
                    "Stepping on/over line when serving",
                    "No such thing",
                    "Wrong position"
                ],
                correct: 0
            },
            {
                topic: "Antenna",
                emoji: "🏐📏",
                question: "What are antennas for?",
                options: [
                    "Decoration",
                    "Mark vertical net boundary",
                    "Scoreboards"
                ],
                correct: 0
            },
            {
                topic: "Quick Set",
                emoji: "🏐⚡",
                question: "What is a quick set?",
                options: [
                    "High set",
                    "Slow set",
                    "Low, fast set for middle attacker"
                ],
                correct: 2
            },
            {
                topic: "Pancake",
                emoji: "🏐🥞",
                question: "What is a pancake dig?",
                options: [
                    "Jump serve",
                    "Food break",
                    "Diving with hand flat on floor"
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
                    "Celebration",
                    "Serve style"
                ],
                correct: 2
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
                    "20m x 10m",
                    "18m x 9m (59' x 29.5')",
                    "15m x 7.5m",
                    "25m x 12m"
                ],
                correct: 0
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
                    "4 per team",
                    "6 per team",
                    "8 per team",
                    "2 per team"
                ],
                correct: 3
            },
            {
                topic: "Rotation Order",
                emoji: "🏐🔄",
                question: "When do players rotate?",
                options: [
                    "When winning serve back (side-out)",
                    "Every 5 points",
                    "Each point",
                    "Never"
                ],
                correct: 3
            },
            {
                topic: "Substitutions",
                emoji: "🏐🔄",
                question: "How many subs allowed per set?",
                options: [
                    "3 substitutions",
                    "Unlimited",
                    "12 substitutions",
                    "6 substitutions"
                ],
                correct: 1
            },
            {
                topic: "Jump Serve Speed",
                emoji: "🏐💨",
                question: "What is typical jump serve speed?",
                options: [
                    "200 km/h",
                    "50 km/h",
                    "80-120 km/h for elite",
                    "30 km/h"
                ],
                correct: 3
            },
            {
                topic: "Libero Restrictions",
                emoji: "🏐🚫",
                question: "What can't libero do?",
                options: [
                    "Serve, attack above net height",
                    "Pass",
                    "Rotate",
                    "Dig"
                ],
                correct: 0
            },
            {
                topic: "FIVB",
                emoji: "🏐🌍",
                question: "What is FIVB?",
                options: [
                    "International volleyball federation",
                    "Training method",
                    "Tournament name",
                    "Ball brand"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Positions",
                emoji: "🏐👤",
                question: "Name three volleyball positions?",
                options: [
                    "Outside hitter",
                    "Setter",
                    "Opposite",
                    "Middle blocker",
                    "Libero"
                ],
                correct: 1
            },
            {
                topic: "Skills",
                emoji: "🏐💪",
                question: "Name three volleyball skills?",
                options: [
                    "Block",
                    "Spike",
                    "Set",
                    "Dig",
                    "Serve",
                    "Pass"
                ],
                correct: 4
            },
            {
                topic: "Serve Types",
                emoji: "🏐🎾",
                question: "Name three types of serves?",
                options: [
                    "Jump serve",
                    "Underhand serve",
                    "Topspin serve",
                    "Float serve"
                ],
                correct: 3
            },
            {
                topic: "Attack Shots",
                emoji: "🏐💥",
                question: "Name three attacking shots?",
                options: [
                    "Cut shot",
                    "Roll shot",
                    "Line shot",
                    "Spike",
                    "Tip"
                ],
                correct: 3
            },
            {
                topic: "Defensive Moves",
                emoji: "🏐🛡️",
                question: "Name three defensive techniques?",
                options: [
                    "Block",
                    "Dig",
                    "Pancake",
                    "Dive",
                    "Roll"
                ],
                correct: 1
            },
            {
                topic: "Violations",
                emoji: "🏐⚠️",
                question: "Name three volleyball violations?",
                options: [
                    "Lift/carry",
                    "Foot fault",
                    "Four touches",
                    "Net touch",
                    "Double hit"
                ],
                correct: 4
            },
            {
                topic: "Set Types",
                emoji: "🏐📋",
                question: "Name three types of sets?",
                options: [
                    "High ball",
                    "Slide set",
                    "Shoot set",
                    "Quick set",
                    "Back set"
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
                    "World Cup",
                    "Nations League"
                ],
                correct: 0
            },
            {
                topic: "Court Areas",
                emoji: "🏐🏟️",
                question: "Name three zones on volleyball court?",
                options: [
                    "Service area",
                    "Free zone",
                    "Attack line",
                    "Back row",
                    "Front row"
                ],
                correct: 4
            },
            {
                topic: "Famous Nations",
                emoji: "🏐🌍",
                question: "Name three strong volleyball nations?",
                options: [
                    "Brazil",
                    "Russia",
                    "China",
                    "Italy",
                    "USA",
                    "Poland"
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Home Run",
                emoji: "⚾🚀",
                question: "Is a home run when ball goes over fence?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "4 bases (including home)",
                    "2 bases"
                ],
                correct: 0
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
                    "Four balls, batter goes to first",
                    "Running bases"
                ],
                correct: 1
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
                    "Running to next base during pitch",
                    "Cheating"
                ],
                correct: 1
            },
            {
                topic: "Bunt",
                emoji: "⚾👆",
                question: "What is a bunt?",
                options: [
                    "Home run",
                    "Soft tap hit"
                ],
                correct: 0
            },
            {
                topic: "Foul Ball",
                emoji: "⚾↗️",
                question: "What is a foul ball?",
                options: [
                    "Ball hit outside foul lines",
                    "Fair hit"
                ],
                correct: 0
            },
            {
                topic: "RBI",
                emoji: "⚾📊",
                question: "What does RBI stand for?",
                options: [
                    "Running Base Indicator",
                    "Run Batted In"
                ],
                correct: 1
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
                    "Home run",
                    "Strike",
                    "Illegal pitcher motion, runners advance"
                ],
                correct: 1
            },
            {
                topic: "Infield Fly Rule",
                emoji: "⚾☁️",
                question: "When does infield fly rule apply?",
                options: [
                    "Any fly ball",
                    "Never applies",
                    "Pop-up with runners on base, less than 2 outs"
                ],
                correct: 0
            },
            {
                topic: "Designated Hitter",
                emoji: "⚾🎯",
                question: "What is designated hitter?",
                options: [
                    "Coach",
                    "Extra fielder",
                    "Bats for pitcher (AL rule)"
                ],
                correct: 2
            },
            {
                topic: "Perfect Game",
                emoji: "⚾💯",
                question: "What is a perfect game?",
                options: [
                    "No runs allowed",
                    "No baserunners allowed (27 up, 27 down)",
                    "No hitter"
                ],
                correct: 0
            },
            {
                topic: "Cycle",
                emoji: "⚾🔄",
                question: "What is hitting for the cycle?",
                options: [
                    "Three home runs",
                    "Single, double, triple, home run in one game",
                    "Perfect batting"
                ],
                correct: 0
            },
            {
                topic: "Pickoff",
                emoji: "⚾🎯",
                question: "What is a pickoff?",
                options: [
                    "Pitcher throws to base to tag out runner",
                    "Stealing base",
                    "Catching fly ball"
                ],
                correct: 0
            },
            {
                topic: "Passed Ball",
                emoji: "⚾😵",
                question: "What is a passed ball?",
                options: [
                    "Foul ball",
                    "Wild pitch",
                    "Catcher misses catchable pitch, runner advances"
                ],
                correct: 1
            },
            {
                topic: "Sacrifice Fly",
                emoji: "⚾🦅",
                question: "What is a sacrifice fly?",
                options: [
                    "Home run",
                    "Out that scores runner from third",
                    "Strike out"
                ],
                correct: 0
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
                    "45 feet",
                    "70 feet"
                ],
                correct: 0
            },
            {
                topic: "Base Distance",
                emoji: "⚾💎",
                question: "What is distance between bases?",
                options: [
                    "100 feet",
                    "80 feet",
                    "70 feet",
                    "90 feet (27.43m)"
                ],
                correct: 1
            },
            {
                topic: "Fastball Speed",
                emoji: "⚾💨",
                question: "What is MLB average fastball speed?",
                options: [
                    "92-95 mph (148-153 km/h)",
                    "70 mph",
                    "80 mph",
                    "110 mph"
                ],
                correct: 0
            },
            {
                topic: "Batting Average",
                emoji: "⚾📊",
                question: "What is a good batting average?",
                options: [
                    ".100",
                    ".500",
                    ".300 considered excellent",
                    ".900"
                ],
                correct: 1
            },
            {
                topic: "Cy Young Award",
                emoji: "⚾🏆",
                question: "What is Cy Young Award for?",
                options: [
                    "Best pitcher",
                    "Best hitter",
                    "Rookie of year",
                    "Most home runs"
                ],
                correct: 2
            },
            {
                topic: "Triple Crown",
                emoji: "⚾👑",
                question: "What is Triple Crown?",
                options: [
                    "Three teams",
                    "Three innings",
                    "Leading in batting avg, HRs, RBIs",
                    "Three games"
                ],
                correct: 0
            },
            {
                topic: "ERA",
                emoji: "⚾📉",
                question: "What does ERA stand for?",
                options: [
                    "Error Rate Average",
                    "Extra Run Allowed",
                    "Early Run Advantage",
                    "Earned Run Average (pitcher stat)"
                ],
                correct: 3
            },
            {
                topic: "No-Hitter",
                emoji: "⚾🚫",
                question: "What is a no-hitter?",
                options: [
                    "No walks",
                    "Perfect game",
                    "No runs",
                    "Pitcher allows no hits in game"
                ],
                correct: 1
            },
            {
                topic: "Golden Glove",
                emoji: "⚾🧤",
                question: "What is Gold Glove Award?",
                options: [
                    "Best defensive player at position",
                    "Home run leader",
                    "Best offensive player",
                    "Stolen base leader"
                ],
                correct: 2
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
                    "Shortstop",
                    "Outfielder",
                    "Second base",
                    "Catcher",
                    "First base"
                ],
                correct: 0
            },
            {
                topic: "Pitch Types",
                emoji: "⚾🎯",
                question: "Name three types of pitches?",
                options: [
                    "Slider",
                    "Changeup",
                    "Fastball",
                    "Knuckleball",
                    "Curveball"
                ],
                correct: 2
            },
            {
                topic: "Hit Types",
                emoji: "⚾💥",
                question: "Name three types of hits?",
                options: [
                    "Triple",
                    "Single",
                    "Double",
                    "Home run"
                ],
                correct: 1
            },
            {
                topic: "Baseball Legends",
                emoji: "⚾⭐",
                question: "Name three legendary baseball players?",
                options: [
                    "Willie Mays",
                    "Jackie Robinson",
                    "Derek Jeter",
                    "Hank Aaron",
                    "Babe Ruth"
                ],
                correct: 4
            },
            {
                topic: "Out Methods",
                emoji: "⚾❌",
                question: "Name three ways to get an out?",
                options: [
                    "Ground out",
                    "Force out",
                    "Fly out",
                    "Strike out",
                    "Tag out"
                ],
                correct: 3
            },
            {
                topic: "MLB Teams",
                emoji: "⚾🏆",
                question: "Name three MLB teams?",
                options: [
                    "Giants",
                    "Dodgers",
                    "Yankees",
                    "Cubs",
                    "Cardinals",
                    "Red Sox"
                ],
                correct: 2
            },
            {
                topic: "Baseball Stats",
                emoji: "⚾📊",
                question: "Name three baseball statistics?",
                options: [
                    "RBIs",
                    "Batting average",
                    "Strikeouts",
                    "ERA",
                    "Home runs",
                    "Stolen bases"
                ],
                correct: 1
            },
            {
                topic: "World Series",
                emoji: "⚾🏆",
                question: "Name three World Series winning teams?",
                options: [
                    "Athletics",
                    "Giants",
                    "Cardinals",
                    "Dodgers",
                    "Yankees",
                    "Red Sox"
                ],
                correct: 4
            },
            {
                topic: "Baseball Equipment",
                emoji: "⚾🎽",
                question: "Name three pieces of baseball equipment?",
                options: [
                    "Bat",
                    "Cleats",
                    "Glove",
                    "Helmet",
                    "Catcher's mask",
                    "Batting gloves"
                ],
                correct: 0
            },
            {
                topic: "Baseball Rules",
                emoji: "⚾⚖️",
                question: "Name three baseball rules or violations?",
                options: [
                    "Interference",
                    "Infield fly",
                    "Strike zone",
                    "Balk",
                    "Force out"
                ],
                correct: 3
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Periods",
                emoji: "🏒🔢",
                question: "Is a hockey game divided into periods?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Goalie",
                emoji: "🏒🧤",
                question: "Does the goalie defend the net?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
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
                    "Numerical advantage when opponent penalized",
                    "Strong shot"
                ],
                correct: 0
            },
            {
                topic: "Hat Trick",
                emoji: "🏒🎩",
                question: "What is a hat trick?",
                options: [
                    "Three assists",
                    "Three goals by one player in a game"
                ],
                correct: 0
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
                    "Entering zone before puck",
                    "Bad position"
                ],
                correct: 0
            },
            {
                topic: "Empty Net",
                emoji: "🏒🥅",
                question: "What is an empty net goal?",
                options: [
                    "Missing the net",
                    "Scoring when goalie pulled"
                ],
                correct: 1
            },
            {
                topic: "Assist",
                emoji: "🏒🤝",
            {
                topic: "Breakaway",
                emoji: "🏒🏃",
                question: "What is a breakaway?",
                options: [
                    "Breaking stick",
                    "Player alone against goalie"
                ],
                correct: 0
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
                    "Passing twice",
                    "Still in effect",
                    "Pass across two lines (abolished in NHL 2005)"
                ],
                correct: 2
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
                    "Score difference",
                    "Two opponents in penalty box",
                    "Period number"
                ],
                correct: 0
            },
            {
                topic: "Gordie Howe Hat Trick",
                emoji: "🏒🥊",
                question: "What is Gordie Howe hat trick?",
                options: [
                    "Three goals",
                    "Three assists",
                    "Goal, assist, and fight in one game"
                ],
                correct: 2
            },
            {
                topic: "Delayed Penalty",
                emoji: "🏒⏰",
                question: "What is delayed penalty?",
                options: [
                    "No penalty",
                    "Late penalty",
                    "Penalty called but play continues until offending team touches puck"
                ],
                correct: 2
            },
            {
                topic: "Slap Shot",
                emoji: "🏒💥",
                question: "What is a slap shot?",
                options: [
                    "Powerful shot with wind-up",
                    "Passing technique",
                    "Light tap"
                ],
                correct: 0
            },
            {
                topic: "Trap Defense",
                emoji: "🏒🕸️",
                question: "What is the neutral zone trap?",
                options: [
                    "Offensive play",
                    "Goalie technique",
                    "Defensive strategy clogging neutral zone"
                ],
                correct: 2
            },
            {
                topic: "Deke",
                emoji: "🏒🎭",
                question: "What is a deke?",
                options: [
                    "Shooting style",
                    "Fake move to deceive opponent",
                    "Type of penalty"
                ],
                correct: 1
            },
            {
                topic: "Blue Line",
                emoji: "🏒🔵",
                question: "What do blue lines mark?",
                options: [
                    "Goal lines",
                    "Penalty areas",
                    "Offensive/defensive zones"
                ],
                correct: 0
            },
            {
                topic: "Boarding",
                emoji: "🏒🚧",
                question: "What is boarding penalty?",
                options: [
                    "Getting on ice",
                    "Legal check",
                    "Checking player into boards dangerously"
                ],
                correct: 0
            }
        ],
        "expert": [
            {
                topic: "Rink Dimensions",
                emoji: "🏒📐",
                question: "What is NHL rink size?",
                options: [
                    "250 feet x 100 feet",
                    "150 feet x 70 feet",
                    "200 feet x 85 feet",
                    "300 feet x 150 feet"
                ],
                correct: 0
            },
            {
                topic: "Goal Dimensions",
                emoji: "🏒🥅",
                question: "What is hockey goal size?",
                options: [
                    "4 feet x 3 feet",
                    "8 feet x 6 feet",
                    "10 feet x 8 feet",
                    "6 feet wide x 4 feet tall"
                ],
                correct: 3
            },
            {
                topic: "Puck Specifications",
                emoji: "🏒⚫",
                question: "What is puck weight?",
                options: [
                    "10 ounces",
                    "5-6 ounces (142-170 grams)",
                    "12 ounces",
                    "2 ounces"
                ],
                correct: 1
            },
            {
                topic: "Overtime Format",
                emoji: "🏒➕",
                question: "What is NHL overtime format?",
                options: [
                    "20 minutes 6-on-6",
                    "5 minutes 3-on-3 (then shootout)",
                    "10 minutes 5-on-5",
                    "No overtime"
                ],
                correct: 0
            },
            {
                topic: "Plus-Minus",
                emoji: "🏒➕➖",
                question: "What is plus-minus stat?",
                options: [
                    "Assists",
                    "Penalty minutes",
                    "Goals scored",
                    "Goal differential when player on ice"
                ],
                correct: 2
            },
            {
                topic: "Conn Smythe",
                emoji: "🏒🏆",
                question: "What is Conn Smythe Trophy?",
                options: [
                    "Playoff MVP",
                    "Best goalie",
                    "Regular season MVP",
                    "Most goals"
                ],
                correct: 3
            },
            {
                topic: "Trapezoid",
                emoji: "🏒📐",
                question: "What is the trapezoid?",
                options: [
                    "Penalty box",
                    "Offensive zone",
                    "Face-off circle",
                    "Area behind net where goalie can play puck"
                ],
                correct: 2
            },
            {
                topic: "Original Six",
                emoji: "🏒6️⃣",
                question: "How many teams in Original Six era?",
                options: [
                    "6 teams (Bruins, Blackhawks, Red Wings, Canadiens, Rangers, Maple Leafs)",
                    "8 teams",
                    "4 teams",
                    "10 teams"
                ],
                correct: 3
            },
            {
                topic: "Art Ross Trophy",
                emoji: "🏒👑",
                question: "What is Art Ross Trophy for?",
                options: [
                    "Rookie of year",
                    "Leading scorer (points)",
                    "Best defenseman",
                    "Best goalie"
                ],
                correct: 2
            },
            {
                topic: "Shootout Format",
                emoji: "🏒🎯",
                question: "How many shooters in NHL shootout?",
                options: [
                    "1 per team",
                    "Unlimited",
                    "5 per team",
                    "3 per team initially, then sudden death"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Positions",
                emoji: "🏒👤",
                question: "Name three hockey positions?",
                options: [
                    "Winger",
                    "Defenseman",
                    "Center",
                    "Goalie"
                ],
                correct: 2
            },
            {
                topic: "Penalties",
                emoji: "🏒⚠️",
                question: "Name three types of penalties?",
                options: [
                    "High-sticking",
                    "Boarding",
                    "Cross-checking",
                    "Hooking",
                    "Tripping",
                    "Slashing"
                ],
                correct: 3
            },
            {
                topic: "NHL Teams",
                emoji: "🏒🏆",
                question: "Name three NHL teams?",
                options: [
                    "Blackhawks",
                    "Maple Leafs",
                    "Red Wings",
                    "Canadiens",
                    "Bruins",
                    "Rangers"
                ],
                correct: 1
            },
            {
                topic: "Hockey Legends",
                emoji: "🏒⭐",
                question: "Name three legendary hockey players?",
                options: [
                    "Bobby Orr",
                    "Mario Lemieux",
                    "Maurice Richard",
                    "Wayne Gretzky",
                    "Gordie Howe"
                ],
                correct: 3
            },
            {
                topic: "Shot Types",
                emoji: "🏒🎯",
                question: "Name three types of shots?",
                options: [
                    "Snap shot",
                    "One-timer",
                    "Wrist shot",
                    "Slap shot",
                    "Backhand"
                ],
                correct: 3
            },
            {
                topic: "Face-off Locations",
                emoji: "🏒⭕",
                question: "Name three face-off circle locations?",
                options: [
                    "Offensive zone",
                    "Neutral zone",
                    "Defensive zone",
                    "Center ice"
                ],
                correct: 3
            },
            {
                topic: "Hockey Equipment",
                emoji: "🏒🎽",
                question: "Name three pieces of hockey equipment?",
                options: [
                    "Helmet",
                    "Pads",
                    "Gloves",
                    "Stick",
                    "Shoulder pads",
                    "Skates"
                ],
                correct: 3
            },
            {
                topic: "Trophies",
                emoji: "🏒🏆",
                question: "Name three NHL trophies?",
                options: [
                    "Vezina Trophy",
                    "Art Ross Trophy",
                    "Stanley Cup",
                    "Hart Trophy",
                    "Norris Trophy"
                ],
                correct: 2
            },
            {
                topic: "Hockey Terms",
                emoji: "🏒📖",
                question: "Name three hockey terminology terms?",
                options: [
                    "Power play",
                    "Hat trick",
                    "Face-off",
                    "Breakaway",
                    "Icing",
                    "Offside"
                ],
                correct: 1
            },
            {
                topic: "Saves Types",
                emoji: "🏒🧤",
                question: "Name three goalie save techniques?",
                options: [
                    "Glove save",
                    "Stack save",
                    "Blocker save",
                    "Butterfly",
                    "Pad save"
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Punching",
                emoji: "🥊👊",
                question: "Do boxers score points by punching?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "Counting punches",
                    "Referee counts to assess hurt fighter"
                ],
                correct: 1
            },
            {
                topic: "Split Decision",
                emoji: "🥊⚖️",
                question: "What is split decision?",
                options: [
                    "Two judges for one fighter, one for other",
                    "Knockout"
                ],
                correct: 1
            },
            {
                topic: "Clinch",
                emoji: "🥊🤝",
                question: "What is a clinch?",
                options: [
                    "Winning punch",
                    "Boxers holding each other"
                ],
                correct: 1
            },
            {
                topic: "Low Blow",
                emoji: "🥊⚠️",
                question: "What is a low blow?",
                options: [
                    "Illegal punch below belt",
                    "Legal punch"
                ],
                correct: 0
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
                    "Training exercise",
                    "Count given to all knockdowns",
                    "Rest period"
                ],
                correct: 1
            },
            {
                topic: "Undisputed Champion",
                emoji: "🥊👑",
                question: "What is undisputed champion?",
                options: [
                    "Regional champion",
                    "One win",
                    "Holds all major organization belts"
                ],
                correct: 1
            },
            {
                topic: "Peek-a-Boo Style",
                emoji: "🥊👀",
                question: "What is peek-a-boo boxing style?",
                options: [
                    "Circling opponent",
                    "Defensive style with high guard",
                    "Aggressive rushing"
                ],
                correct: 1
            },
            {
                topic: "Body Shot",
                emoji: "🥊💢",
                question: "Why are body shots effective?",
                options: [
                    "Drain stamina and can cause knockouts",
                    "Look impressive",
                    "Easy to land"
                ],
                correct: 1
            },
            {
                topic: "Unification Bout",
                emoji: "🥊🏆",
                question: "What is unification bout?",
                options: [
                    "Training fight",
                    "Exhibition match",
                    "Fight between two champions of different organizations"
                ],
                correct: 2
            },
            {
                topic: "Rope-a-Dope",
                emoji: "🥊🎭",
                question: "What is rope-a-dope strategy?",
                options: [
                    "Aggressive attack",
                    "Leaning on ropes to tire opponent (Ali technique)",
                    "Quick footwork"
                ],
                correct: 0
            },
            {
                topic: "Flash Knockdown",
                emoji: "🥊⚡",
                question: "What is flash knockdown?",
                options: [
                    "Final knockout",
                    "Quick knockdown, fighter recovers immediately",
                    "Bright lights"
                ],
                correct: 2
            },
            {
                topic: "Punch Stats",
                emoji: "🥊📊",
                question: "What is CompuBox?",
                options: [
                    "Training equipment",
                    "Computer system tracking punch statistics",
                    "Boxing video game"
                ],
                correct: 1
            },
            {
                topic: "Protected Ranking",
                emoji: "🥊🛡️",
                question: "What is protected ranking?",
                options: [
                    "Special award",
                    "Top security",
                    "Injured champion retains ranking without defending"
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
                    "25 feet square",
                    "30 feet square",
                    "10 feet square"
                ],
                correct: 0
            },
            {
                topic: "Glove Weight",
                emoji: "🥊🧤",
                question: "What is professional fight glove weight?",
                options: [
                    "16 ounces",
                    "8-10 ounces",
                    "20 ounces",
                    "4 ounces"
                ],
                correct: 1
            },
            {
                topic: "Round Duration",
                emoji: "🥊⏱️",
                question: "How long is each professional round?",
                options: [
                    "3 minutes",
                    "2 minutes",
                    "5 minutes",
                    "10 minutes"
                ],
                correct: 2
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
                    "180 lbs",
                    "Over 200 lbs (no upper limit)",
                    "200 lbs"
                ],
                correct: 3
            },
            {
                topic: "Lineal Champion",
                emoji: "🥊👑",
                question: "What is lineal champion?",
                options: [
                    "First champion",
                    "Regional champion",
                    "Amateur champion",
                    "Champion who beat previous champion (man who beat the man)"
                ],
                correct: 0
            },
            {
                topic: "Marquess of Queensberry",
                emoji: "🥊📜",
                question: "What are Queensberry Rules?",
                options: [
                    "British royalty",
                    "Ancient rules",
                    "Modern boxing rules (gloves, rounds, etc.)",
                    "Training methods"
                ],
                correct: 2
            },
            {
                topic: "Punch Power",
                emoji: "🥊💪",
                question: "What is typical elite punch force?",
                options: [
                    "100 pounds",
                    "500 pounds",
                    "50 pounds",
                    "1,000+ pounds of force"
                ],
                correct: 1
            },
            {
                topic: "Four Major Organizations",
                emoji: "🥊🏆",
                question: "Name the four major boxing bodies?",
                options: [
                    "ABC, DEF, GHI, JKL",
                    "Only one organization",
                    "WBC, WBA, IBF, WBO",
                    "Ten organizations"
                ],
                correct: 2
            },
            {
                topic: "Ring Card Girls",
                emoji: "🥊🔢",
                question: "What do ring card girls display?",
                options: [
                    "Time",
                    "Fighter names",
                    "Scores",
                    "Round number between rounds"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Punch Types",
                emoji: "🥊👊",
                question: "Name three types of punches?",
                options: [
                    "Hook",
                    "Uppercut",
                    "Jab",
                    "Overhand",
                    "Cross"
                ],
                correct: 2
            },
            {
                topic: "Weight Classes",
                emoji: "🥊⚖️",
                question: "Name three boxing weight classes?",
                options: [
                    "Welterweight",
                    "Middleweight",
                    "Featherweight",
                    "Heavyweight",
                    "Lightweight"
                ],
                correct: 3
            },
            {
                topic: "Boxing Legends",
                emoji: "🥊⭐",
                question: "Name three legendary boxers?",
                options: [
                    "Mike Tyson",
                    "Sugar Ray Robinson",
                    "Floyd Mayweather",
                    "Manny Pacquiao",
                    "Muhammad Ali"
                ],
                correct: 4
            },
            {
                topic: "Victory Methods",
                emoji: "🥊🏆",
                question: "Name three ways to win in boxing?",
                options: [
                    "Knockout (KO)",
                    "Technical Knockout (TKO)",
                    "Disqualification",
                    "Decision"
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
                    "Parry",
                    "Block",
                    "Roll"
                ],
                correct: 0
            },
            {
                topic: "Boxing Terms",
                emoji: "🥊📖",
                question: "Name three boxing terminology terms?",
                options: [
                    "Orthodox",
                    "Southpaw",
                    "Clinch",
                    "Combination",
                    "Counter punch"
                ],
                correct: 2
            },
            {
                topic: "Famous Fights",
                emoji: "🥊🔥",
                question: "Name three famous boxing rivalries or fights?",
                options: [
                    "Mayweather vs Pacquiao",
                    "Tyson vs Holyfield",
                    "Ali vs Frazier",
                    "Hagler vs Hearns"
                ],
                correct: 2
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
                    "Double-end bag"
                ],
                correct: 0
            },
            {
                topic: "Boxing Organizations",
                emoji: "🥊🏢",
                question: "Name three boxing governing bodies?",
                options: [
                    "IBF",
                    "WBO",
                    "WBC",
                    "WBA"
                ],
                correct: 2
            },
            {
                topic: "Fouls",
                emoji: "🥊🚫",
                question: "Name three boxing fouls?",
                options: [
                    "Rabbit punch",
                    "Headbutt",
                    "Hitting behind head",
                    "Low blow",
                    "Holding and hitting"
                ],
                correct: 3
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Hurdles",
                emoji: "🏃🚧",
                question: "Are hurdles obstacles to jump over?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Sprint Distance",
                emoji: "🏃💨",
                question: "What is considered a sprint?",
                options: [
                    "1500m, 5000m",
                    "100m, 200m, 400m"
                ],
                correct: 1
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
                    "No penalty",
                    "Disqualification"
                ],
                correct: 1
            },
            {
                topic: "Pole Vault",
                emoji: "🏃🎣",
                question: "What is used in pole vault?",
                options: [
                    "Flexible pole to clear bar",
                    "Ladder"
                ],
                correct: 1
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
                    "5 events",
                    "10 events over 2 days",
                    "20 events"
                ],
                correct: 1
            },
            {
                topic: "Heptathlon",
                emoji: "🏃7️⃣",
                question: "How many events in heptathlon?",
                options: [
                    "3 events",
                    "7 events over 2 days",
                    "10 events"
                ],
                correct: 2
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
                    "Hop, step, and jump",
                    "Running only",
                    "Three separate jumps"
                ],
                correct: 0
            },
            {
                topic: "Fosbury Flop",
                emoji: "🏃🔄",
                question: "What is Fosbury Flop?",
                options: [
                    "Throwing method",
                    "Running style",
                    "High jump technique going backwards over bar"
                ],
                correct: 1
            },
            {
                topic: "Hammer Throw",
                emoji: "🏃🔨",
                question: "What is thrown in hammer throw?",
                options: [
                    "Metal ball on wire",
                    "Disc",
                    "Actual hammer"
                ],
                correct: 0
            },
            {
                topic: "Stagger Start",
                emoji: "🏃📐",
                question: "Why are 200m/400m starts staggered?",
                options: [
                    "Faster runners start back",
                    "Random placement",
                    "Compensate for curve distance differences"
                ],
                correct: 1
            },
            {
                topic: "Exchange Zone",
                emoji: "🏃🔄",
                question: "What is relay exchange zone?",
                options: [
                    "20-30 meter zone for baton pass",
                    "Anywhere on track",
                    "Starting line"
                ],
                correct: 1
            },
            {
                topic: "Discus",
                emoji: "🏃💿",
                question: "How is discus thrown?",
                options: [
                    "Spinning release from circle",
                    "Underhand toss",
                    "Straight throw"
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
                    "300 meters",
                    "200 meters",
                    "500 meters"
                ],
                correct: 3
            },
            {
                topic: "Lane Width",
                emoji: "🏃↔️",
                question: "What is standard lane width?",
                options: [
                    "0.5 meters",
                    "1.22 meters (4 feet)",
                    "2 meters",
                    "3 meters"
                ],
                correct: 1
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
                    "Usain Bolt (9.58 seconds)",
                    "Jesse Owens",
                    "Carl Lewis",
                    "Michael Johnson"
                ],
                correct: 0
            },
            {
                topic: "Javelin Specifications",
                emoji: "🏃🗡️",
            {
                topic: "Steeplechase Distance",
                emoji: "🏃💧",
                question: "What is standard steeplechase distance?",
                options: [
                    "3000m",
                    "5000m",
                    "1500m",
                    "10000m"
                ],
                correct: 1
            },
            {
                topic: "IAAF",
                emoji: "🏃🌍",
                question: "What is IAAF (now World Athletics)?",
                options: [
                    "Training organization",
                    "Olympic committee",
                    "Equipment manufacturer",
                    "International governing body for athletics"
                ],
                correct: 1
            },
            {
                topic: "Diamond League",
                emoji: "🏃💎",
                question: "What is Diamond League?",
                options: [
                    "Training program",
                    "Olympic event",
                    "Regional meet",
                    "Elite international track series"
                ],
                correct: 1
            },
            {
                topic: "Personal Best",
                emoji: "🏃📊",
                question: "What does PB stand for?",
                options: [
                    "Personal Best (athlete's best performance)",
                    "Practice Bout",
                    "Professional Boxing",
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
                    "200 meters",
                    "400 meters",
                    "100 meters"
                ],
                correct: 2
            },
            {
                topic: "Throwing Events",
                emoji: "🏃🎯",
                question: "Name the four throwing events?",
                options: [
                    "Discus",
                    "Hammer throw",
                    "Javelin",
                    "Shot put"
                ],
                correct: 3
            },
            {
                topic: "Jumping Events",
                emoji: "🏃⬆️",
                question: "Name the four jumping events?",
                options: [
                    "Long jump",
                    "Pole vault",
                    "High jump",
                    "Triple jump"
                ],
                correct: 2
            },
            {
                topic: "Distance Running",
                emoji: "🏃🌍",
                question: "Name three long distance events?",
                options: [
                    "Half marathon",
                    "1500m",
                    "5000m",
                    "Marathon",
                    "10000m"
                ],
                correct: 1
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
                    "Florence Griffith-Joyner"
                ],
                correct: 0
            },
            {
                topic: "Hurdle Events",
                emoji: "🏃🚧",
                question: "Name three hurdle race distances?",
                options: [
                    "110m hurdles (men)",
                    "3000m steeplechase",
                    "100m hurdles (women)",
                    "400m hurdles"
                ],
                correct: 2
            },
            {
                topic: "Relay Races",
                emoji: "🏃🤝",
                question: "Name the two standard relay races?",
                options: [
                    "4x100 meter relay",
                    "4x400 meter relay"
                ],
                correct: 0
            },
            {
                topic: "Combined Events",
                emoji: "🏃💪",
                question: "Name the two main combined events?",
                options: [
                    "Heptathlon (women - 7 events)",
                    "Decathlon (men - 10 events)"
                ],
                correct: 1
            },
            {
                topic: "Track Equipment",
                emoji: "🏃🎽",
                question: "Name three pieces of track and field equipment?",
                options: [
                    "Hurdles",
                    "Shot put",
                    "Starting blocks",
                    "Javelin",
                    "Baton",
                    "Pole vault pole"
                ],
                correct: 2
            },
            {
                topic: "Championships",
                emoji: "🏃🏆",
                question: "Name three major track championships?",
                options: [
                    "Diamond League",
                    "World Championships",
                    "Continental Championships",
                    "Olympics"
                ],
                correct: 3
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Helmet",
                emoji: "🚴🪖",
                question: "Should cyclists wear helmets for safety?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Olympics",
                emoji: "🚴🥇",
                question: "Is cycling an Olympic sport?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            }
        ],
        medium: [
            {
                topic: "Yellow Jersey",
                emoji: "🚴🟡",
                question: "What does yellow jersey signify?",
                options: [
                    "Last place",
                    "Tour de France overall leader"
                ],
                correct: 0
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
                    "1 tour",
                    "5 tours",
                    "3 (Tour de France, Giro d'Italia, Vuelta a España)"
                ],
                correct: 2
            },
            {
                topic: "Echelon",
                emoji: "🚴↗️",
                question: "What is an echelon formation?",
                options: [
                    "Diagonal line for crosswind protection",
                    "Circle formation",
                    "Straight line"
                ],
                correct: 0
            },
            {
                topic: "Bonk/Bonking",
                emoji: "🚴😵",
                question: "What is bonking?",
                options: [
                    "Crashing",
                    "Hitting the wall, energy depletion",
                    "Winning sprint"
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
                    "Support crew",
                    "Group of riders trying to make time cut"
                ],
                correct: 0
            },
            {
                topic: "Rouleur",
                emoji: "🚴💪",
                question: "What is a rouleur?",
                options: [
                    "Sprinter only",
                    "Climbing specialist",
                    "All-rounder on flat terrain"
                ],
                correct: 0
            },
            {
                topic: "Madison",
                emoji: "🚴🔄",
                question: "What is Madison racing?",
                options: [
                    "Track relay where partners exchange",
                    "Solo event",
                    "Road race"
                ],
                correct: 0
            },
            {
                topic: "Musette",
                emoji: "🚴🎒",
                question: "What is a musette?",
                options: [
                    "Jersey type",
                    "Feed bag handed to riders",
                    "Bike part"
                ],
                correct: 1
            },
            {
                topic: "Prologue",
                emoji: "🚴🎬",
                question: "What is a prologue?",
                options: [
                    "Rest day",
                    "Short time trial before stage race",
                    "Final stage"
                ],
                correct: 1
            },
            {
                topic: "Neutralized",
                emoji: "🚴⏸️",
                question: "What does neutralized mean?",
                options: [
                    "Maximum speed",
                    "Race is over",
                    "Section where racing is suspended"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Tour Stages",
                emoji: "🚴🔢",
                question: "How many stages typically in Tour de France?",
                options: [
                    "21 stages over 23 days",
                    "30 stages",
                    "10 stages",
                    "15 stages"
                ],
                correct: 2
            },
            {
                topic: "Velodrome Banking",
                emoji: "🚴📐",
                question: "What is typical velodrome banking angle?",
                options: [
                    "42-45 degrees in turns",
                    "20 degrees",
                    "10 degrees",
                    "90 degrees"
                ],
                correct: 2
            },
            {
                topic: "Gear Ratio",
                emoji: "🚴⚙️",
                question: "What is a common pro gear ratio?",
                options: [
                    "10/10",
                    "53/39 chainrings with 11-28 cassette",
                    "5/2",
                    "100/50"
                ],
                correct: 0
            },
            {
                topic: "Power Output",
                emoji: "🚴💪",
                question: "What is elite cyclist's FTP?",
                options: [
                    "1000 watts",
                    "100 watts",
                    "350-450+ watts",
                    "50 watts"
                ],
                correct: 2
            },
            {
                topic: "UCI",
                emoji: "🚴🌍",
                question: "What is UCI?",
                options: [
                    "Union Cycliste Internationale (governing body)",
                    "Training program",
                    "Bike manufacturer",
                    "Race series"
                ],
                correct: 0
            },
            {
                topic: "Hour Record",
                emoji: "🚴⏰",
                question: "What is hour record?",
                options: [
                    "Training duration",
                    "Maximum distance in one hour on track",
                    "Most wins",
                    "Fastest lap"
                ],
                correct: 3
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
                    "10 kg",
                    "15 kg",
                    "6.8 kg (14.99 lbs)",
                    "3 kg"
                ],
                correct: 0
            },
            {
                topic: "Average Speed",
                emoji: "🚴💨",
                question: "What is Tour de France average winning speed?",
                options: [
                    "10 km/h",
                    "20 km/h",
                    "80 km/h",
                    "Around 40-42 km/h"
                ],
                correct: 1
            },
            {
                topic: "Monuments",
                emoji: "🚴🏛️",
                question: "How many Monument classics races?",
                options: [
                    "10",
                    "3",
                    "5 (Milan-San Remo, Tour of Flanders, Paris-Roubaix, Liège-Bastogne-Liège, Il Lombardia)",
                    "1"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Cycling Disciplines",
                emoji: "🚴🎯",
                question: "Name three cycling disciplines?",
                options: [
                    "Road racing",
                    "BMX",
                    "Track cycling",
                    "Mountain biking",
                    "Cyclocross"
                ],
                correct: 0
            },
            {
                topic: "Grand Tours",
                emoji: "🚴🌍",
                question: "Name the three Grand Tours?",
                options: [
                    "Tour de France",
                    "Vuelta a España",
                    "Giro d'Italia"
                ],
                correct: 0
            },
            {
                topic: "Cycling Legends",
                emoji: "🚴⭐",
                question: "Name three legendary cyclists?",
                options: [
                    "Lance Armstrong",
                    "Eddy Merckx",
                    "Peter Sagan",
                    "Miguel Indurain",
                    "Chris Froome"
                ],
                correct: 1
            },
            {
                topic: "Tour Jerseys",
                emoji: "🚴👕",
                question: "Name three Tour de France jerseys?",
                options: [
                    "White (young rider)",
                    "Polka dot (climber)",
                    "Green (sprinter)",
                    "Yellow (overall leader)"
                ],
                correct: 3
            },
            {
                topic: "Bike Components",
                emoji: "🚴🔧",
                question: "Name three major bike components?",
                options: [
                    "Handlebars",
                    "Brakes",
                    "Pedals",
                    "Wheels",
                    "Frame",
                    "Gears/Drivetrain"
                ],
                correct: 4
            },
            {
                topic: "Track Events",
                emoji: "🚴🏟️",
                question: "Name three track cycling events?",
                options: [
                    "Omnium",
                    "Team pursuit",
                    "Madison",
                    "Sprint",
                    "Keirin"
                ],
                correct: 3
            },
            {
                topic: "Cycling Terms",
                emoji: "🚴📖",
                question: "Name three cycling terminology terms?",
                options: [
                    "Domestique",
                    "Cadence",
                    "Bonking",
                    "Peloton",
                    "Drafting",
                    "Breakaway"
                ],
                correct: 3
            },
            {
                topic: "Classic Races",
                emoji: "🚴🏛️",
                question: "Name three Classic cycling races?",
                options: [
                    "Tour of Flanders",
                    "Milan-San Remo",
                    "Liège-Bastogne-Liège",
                    "Paris-Roubaix"
                ],
                correct: 3
            },
            {
                topic: "Cycling Tactics",
                emoji: "🚴🧠",
                question: "Name three cycling racing tactics?",
                options: [
                    "Breakaway",
                    "Counterattack",
                    "Attacking",
                    "Lead-out train",
                    "Drafting"
                ],
                correct: 4
            },
            {
                topic: "Climbing Categories",
                emoji: "🚴⛰️",
                question: "Name three types of climbs in cycling?",
                options: [
                    "Hors Catégorie (HC)",
                    "Category 4",
                    "Category 1",
                    "Category 2",
                    "Category 3"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Leotard",
                emoji: "🤸‍♂️👗",
                question: "Do gymnasts wear special uniforms?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Perfect 10",
                emoji: "🤸‍♀️💯",
                question: "What was perfect score historically?",
                options: [
                    "100",
                    "10.0 (changed in 2006)"
                ],
                correct: 1
            },
            {
                topic: "All-Around",
                emoji: "🤸‍♂️🏆",
                question: "What is all-around competition?",
                options: [
                    "One apparatus only",
                    "Competing on all apparatus"
                ],
                correct: 0
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
                    "Men's horizontal bar apparatus",
                    "Floor level"
                ],
                correct: 0
            },
            {
                topic: "Pike Position",
                emoji: "🤸‍♀️📐",
                question: "What is pike position?",
                options: [
                    "Standing straight",
                    "Body bent at hips, legs straight"
                ],
                correct: 1
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
                    "Routine choreography",
                    "Team name",
                    "Scoring system and rules manual"
                ],
                correct: 2
            },
            {
                topic: "D-Score",
                emoji: "🤸‍♀️🎯",
                question: "What is D-score?",
                options: [
                    "Difficulty score (based on skills performed)",
                    "Deduction score",
                    "Final score"
                ],
                correct: 2
            },
            {
                topic: "E-Score",
                emoji: "🤸‍♂️✨",
                question: "What is E-score?",
                options: [
                    "Exit score",
                    "Entry score",
                    "Execution score (starts at 10, deductions applied)"
                ],
                correct: 1
            },
            {
                topic: "Release Move",
                emoji: "🤸‍♀️🕊️",
                question: "What is a release move?",
                options: [
                    "Starting position",
                    "Finishing routine",
                    "Letting go of bar and re-grasping"
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
                    "Getting off",
                    "Middle of routine",
                    "Getting onto apparatus"
                ],
                correct: 0
            },
            {
                topic: "Layout",
                emoji: "🤸‍♀️━",
                question: "What is layout position?",
                options: [
                    "Tucked position",
                    "Body fully extended in flip",
                    "Bent knees"
                ],
                correct: 1
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
                    "5 cm",
                    "10 cm (4 inches)",
                    "50 cm",
                    "30 cm"
                ],
                correct: 3
            },
            {
                topic: "Vault Table Height",
                emoji: "🤸‍♂️📐",
                question: "What is vault table height for men?",
                options: [
                    "200 cm",
                    "135 cm",
                    "150 cm",
                    "100 cm"
                ],
                correct: 2
            },
            {
                topic: "Floor Exercise Size",
                emoji: "🤸‍♀️⬜",
                question: "What is floor exercise area size?",
                options: [
                    "15m x 15m",
                    "20m x 20m",
                    "8m x 8m",
                    "12m x 12m"
                ],
                correct: 3
            },
            {
                topic: "FIG",
                emoji: "🤸‍♂️🌍",
                question: "What is FIG?",
                options: [
                    "Equipment brand",
                    "International Gymnastics Federation",
                    "Scoring app",
                    "National team"
                ],
                correct: 1
            },
            {
                topic: "Uneven Bars Height",
                emoji: "🤸‍♀️📏",
                question: "What is height difference in uneven bars?",
                options: [
                    "Same height",
                    "High bar 250cm, low bar 170cm",
                    "High 200cm, low 150cm",
                    "High 300cm, low 100cm"
                ],
                correct: 0
            },
            {
                topic: "Rhythmic Gymnastics",
                emoji: "🤸‍♀️🎀",
                question: "What equipment used in rhythmic gymnastics?",
                options: [
                    "No equipment",
                    "Weights",
                    "Only balance beam",
                    "Rope, hoop, ball, clubs, ribbon"
                ],
                correct: 3
            },
            {
                topic: "Team Competition Format",
                emoji: "🤸‍♂️👥",
                question: "How many gymnasts per Olympic team?",
                options: [
                    "20 gymnasts",
                    "2 gymnasts",
                    "10 gymnasts",
                    "4 gymnasts (current format)"
                ],
                correct: 3
            },
            {
                topic: "Rings Height",
                emoji: "🤸‍♂️⭕",
                question: "What height are still rings?",
                options: [
                    "280 cm from floor",
                    "400 cm",
                    "150 cm",
                    "100 cm"
                ],
                correct: 2
            },
            {
                topic: "Difficulty Values",
                emoji: "🤸‍♀️🎯",
                question: "What is highest skill difficulty level?",
                options: [
                    "A",
                    "Z",
                    "I (previously J)",
                    "E"
                ],
                correct: 0
            },
            {
                topic: "Simone Biles",
                emoji: "🤸‍♀️👑",
                question: "How many Olympic gold medals does Simone Biles have?",
                options: [
                    "7 Olympic medals (4 gold in 2016, 2 gold 1 silver 1 bronze in 2020/21)",
                    "No medals",
                    "20 medals",
                    "1 medal"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Women's Apparatus",
                emoji: "🤸‍♀️🏋️",
                question: "Name the four women's artistic gymnastics events?",
                options: [
                    "Vault",
                    "Balance beam",
                    "Uneven bars",
                    "Floor exercise"
                ],
                correct: 0
            },
            {
                topic: "Men's Apparatus",
                emoji: "🤸‍♂️🏋️",
                question: "Name the six men's artistic gymnastics events?",
                options: [
                    "Floor exercise",
                    "Vault",
                    "Parallel bars",
                    "Pommel horse",
                    "Still rings",
                    "Horizontal bar"
                ],
                correct: 0
            },
            {
                topic: "Gymnastics Skills",
                emoji: "🤸‍♀️💪",
                question: "Name three gymnastics skills?",
                options: [
                    "Back handspring",
                    "Split",
                    "Backflip",
                    "Round-off",
                    "Handspring",
                    "Cartwheel"
                ],
                correct: 2
            },
            {
                topic: "Body Positions",
                emoji: "🤸‍♂️📐",
                question: "Name three gymnastics body positions?",
                options: [
                    "Pike",
                    "Tuck",
                    "Arch",
                    "Layout",
                    "Straddle"
                ],
                correct: 0
            },
            {
                topic: "Gymnastics Legends",
                emoji: "🤸‍♀️⭐",
                question: "Name three legendary gymnasts?",
                options: [
                    "Mary Lou Retton",
                    "Simone Biles",
                    "Nadia Comăneci",
                    "Kohei Uchimura",
                    "Olga Korbut"
                ],
                correct: 1
            },
            {
                topic: "Gymnastics Types",
                emoji: "🤸‍♂️🎯",
                question: "Name three types of gymnastics?",
                options: [
                    "Acrobatic",
                    "Aerobic",
                    "Trampoline",
                    "Rhythmic",
                    "Artistic"
                ],
                correct: 4
            },
            {
                topic: "Vault Types",
                emoji: "🤸‍♀️➡️",
                question: "Name three types of vaults?",
                options: [
                    "Handspring",
                    "Yurchenko",
                    "Tsukahara",
                    "Rudi",
                    "Front handspring"
                ],
                correct: 1
            },
            {
                topic: "Floor Tumbling",
                emoji: "🤸‍♂️🔄",
                question: "Name three tumbling skills?",
                options: [
                    "Back tuck",
                    "Arabian",
                    "Full twist",
                    "Double back",
                    "Layout"
                ],
                correct: 0
            },
            {
                topic: "Scoring Components",
                emoji: "🤸‍♀️📊",
                question: "Name three factors in gymnastics scoring?",
                options: [
                    "Artistry",
                    "Execution (E-score)",
                    "Bonus",
                    "Difficulty (D-score)",
                    "Deductions"
                ],
                correct: 3
            },
            {
                topic: "Championships",
                emoji: "🤸‍♂️🏆",
                question: "Name three major gymnastics competitions?",
                options: [
                    "Continental Championships",
                    "World Cup",
                    "World Championships",
                    "Olympics"
                ],
                correct: 3
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Ski Lift",
                emoji: "⛷️🚡",
                question: "Do ski lifts take skiers up mountains?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Goggles",
                emoji: "⛷️🥽",
                question: "Do skiers wear goggles?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Slopes",
                emoji: "⛷️🏔️",
                question: "Are there different difficulty slopes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Green Circle",
                emoji: "⛷️🟢",
                question: "What does green circle mean?",
                options: [
                    "Expert slope",
                    "Beginner/easy slope"
                ],
                correct: 0
            },
            {
                topic: "Black Diamond",
                emoji: "⛷️⬛",
                question: "What does black diamond indicate?",
                options: [
                    "Expert/difficult slope",
                    "Easy slope"
                ],
                correct: 1
            },
            {
                topic: "Slalom",
                emoji: "⛷️🎯",
                question: "What is slalom skiing?",
                options: [
                    "Jumping",
                    "Racing through gates/poles"
                ],
                correct: 0
            },
            {
                topic: "Moguls",
                emoji: "⛷️⛰️",
                question: "What are moguls?",
                options: [
                    "Bumps on slope",
                    "Ski brand"
                ],
                correct: 1
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
                    "Skis apart",
                    "Skis together while turning"
                ],
                correct: 0
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
                    "Ticket for lift access",
                    "Technique move"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Carving",
                emoji: "⛷️🔪",
                question: "What is carving?",
                options: [
                    "Straight skiing",
                    "Jumping",
                    "Turning on ski edges with minimal skidding"
                ],
                correct: 2
            },
            {
                topic: "Giant Slalom",
                emoji: "⛷️🎯",
                question: "How does giant slalom differ from slalom?",
                options: [
                    "Slower speeds",
                    "Identical",
                    "Wider turns, faster speeds"
                ],
                correct: 1
            },
            {
                topic: "Telemark",
                emoji: "⛷️🦵",
                question: "What is telemark skiing?",
                options: [
                    "Downhill racing",
                    "Snowboarding",
                    "Free-heel skiing with lunging turns"
                ],
                correct: 0
            },
            {
                topic: "Ski Wax",
                emoji: "⛷️🕯️",
                question: "Why wax skis?",
                options: [
                    "Improve glide and performance",
                    "No purpose",
                    "Make them shiny"
                ],
                correct: 0
            },
            {
                topic: "Off-Piste",
                emoji: "⛷️🏔️",
                question: "What is off-piste skiing?",
                options: [
                    "Outside groomed slopes",
                    "Indoor skiing",
                    "On marked runs"
                ],
                correct: 0
            },
            {
                topic: "DIN Setting",
                emoji: "⛷️🔧",
                question: "What is DIN setting?",
                options: [
                    "Ski length",
                    "Temperature",
                    "Binding release force setting"
                ],
                correct: 2
            },
            {
                topic: "Corduroy",
                emoji: "⛷️═══",
                question: "What is corduroy snow?",
                options: [
                    "Icy conditions",
                    "Deep powder",
                    "Groomed slopes with visible lines"
                ],
                correct: 0
            },
            {
                topic: "Avalanche Beacon",
                emoji: "⛷️📡",
                question: "What is avalanche beacon for?",
                options: [
                    "Music player",
                    "Locating buried skiers",
                    "Weather forecast"
                ],
                correct: 2
            },
            {
                topic: "Ski Brake",
                emoji: "⛷️🛑",
                question: "What does ski brake do?",
                options: [
                    "Slows down skier",
                    "Decoration",
                    "Stops ski from sliding away when binding releases"
                ],
                correct: 2
            },
            {
                topic: "Ski Touring",
                emoji: "⛷️🥾",
                question: "What is ski touring?",
                options: [
                    "Competition",
                    "Resort skiing only",
                    "Skiing uphill and downhill with special equipment"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Downhill Speed",
                emoji: "⛷️💨",
                question: "What is typical downhill racing speed?",
                options: [
                    "80-140 km/h (50-87 mph)",
                    "200 km/h",
                    "20 km/h",
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
                    "One size fits all",
                    "All same length",
                    "Random selection"
                ],
                correct: 0
            },
            {
                topic: "Alpine Disciplines",
                emoji: "⛷️🏔️",
                question: "How many Olympic alpine skiing events?",
                options: [
                    "11 events (downhill, super-G, giant slalom, slalom, combined for men/women, mixed team)",
                    "1 event",
                    "20 events",
                    "3 events"
                ],
                correct: 0
            },
            {
                topic: "FIS",
                emoji: "⛷️🌍",
                question: "What is FIS?",
                options: [
                    "Equipment brand",
                    "International Ski Federation",
                    "Snow type",
                    "Ski resort"
                ],
                correct: 1
            },
            {
                topic: "Ski Radius",
                emoji: "⛷️⭕",
                question: "What does ski radius affect?",
                options: [
                    "Turn shape and speed",
                    "Weight only",
                    "Color",
                    "Price"
                ],
                correct: 0
            },
            {
                topic: "World Cup",
                emoji: "⛷️🏆",
                question: "What is Alpine Ski World Cup?",
                options: [
                    "Single race",
                    "Training event",
                    "Olympics only",
                    "Annual race series with points standings"
                ],
                correct: 3
            },
            {
                topic: "Ski Edges",
                emoji: "⛷️🔪",
                question: "Why sharpen ski edges?",
                options: [
                    "Aesthetics",
                    "Make noise",
                    "No benefit",
                    "Better grip on ice and hard snow"
                ],
                correct: 3
            },
            {
                topic: "Camber vs Rocker",
                emoji: "⛷️〰️",
                question: "What is ski rocker?",
                options: [
                    "No shape",
                    "Downward bend",
                    "Completely flat",
                    "Upward curve at tip/tail for powder"
                ],
                correct: 3
            },
            {
                topic: "Super-G",
                emoji: "⛷️⚡",
                question: "What is Super-G?",
                options: [
                    "Beginner run",
                    "Super Giant Slalom (combines downhill speed with slalom turns)",
                    "Lift type",
                    "Ski brand"
                ],
                correct: 1
            },
            {
                topic: "Ski School Levels",
                emoji: "⛷️🎓",
                question: "How many typical ski school levels?",
                options: [
                    "100 levels",
                    "One level",
                    "Usually 4-9 levels from beginner to expert",
                    "No levels"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Skiing Disciplines",
                emoji: "⛷️🎯",
                question: "Name three skiing disciplines?",
                options: [
                    "Ski jumping",
                    "Cross-country/Nordic",
                    "Backcountry",
                    "Alpine/Downhill",
                    "Freestyle"
                ],
                correct: 3
            },
            {
                topic: "Alpine Events",
                emoji: "⛷️🏔️",
                question: "Name three alpine skiing race types?",
                options: [
                    "Slalom",
                    "Downhill",
                    "Super-G",
                    "Combined",
                    "Giant slalom"
                ],
                correct: 1
            },
            {
                topic: "Ski Legends",
                emoji: "⛷️⭐",
                question: "Name three legendary skiers?",
                options: [
                    "Ingemar Stenmark",
                    "Lindsey Vonn",
                    "Alberto Tomba",
                    "Mikaela Shiffrin",
                    "Hermann Maier"
                ],
                correct: 1
            },
            {
                topic: "Slope Ratings",
                emoji: "⛷️🎨",
                question: "Name the three main slope difficulty levels?",
                options: [
                    "Blue square (intermediate)",
                    "Green circle (beginner)",
                    "Black diamond (expert/advanced)"
                ],
                correct: 1
            },
            {
                topic: "Ski Equipment",
                emoji: "⛷️🎿",
                question: "Name three essential skiing equipment items?",
                options: [
                    "Bindings",
                    "Poles",
                    "Skis",
                    "Boots",
                    "Goggles",
                    "Helmet"
                ],
                correct: 2
            },
            {
                topic: "Freestyle Skiing",
                emoji: "⛷️🎪",
                question: "Name three freestyle skiing events?",
                options: [
                    "Halfpipe",
                    "Aerials",
                    "Ski cross",
                    "Slopestyle",
                    "Moguls"
                ],
                correct: 4
            },
            {
                topic: "Ski Techniques",
                emoji: "⛷️💪",
                question: "Name three skiing techniques?",
                options: [
                    "Hockey stop",
                    "Carving",
                    "Jump turn",
                    "Parallel turn",
                    "Snowplow"
                ],
                correct: 4
            },
            {
                topic: "Ski Resort Features",
                emoji: "⛷️🏔️",
                question: "Name three ski resort features?",
                options: [
                    "Groomed runs",
                    "Lodge",
                    "Ski lifts",
                    "Terrain park",
                    "Ski patrol"
                ],
                correct: 2
            },
            {
                topic: "Safety Equipment",
                emoji: "⛷️🛡️",
                question: "Name three skiing safety items?",
                options: [
                    "Shovel",
                    "Avalanche beacon",
                    "Probe",
                    "Helmet",
                    "First aid kit"
                ],
                correct: 3
            },
            {
                topic: "Ski Types",
                emoji: "⛷️🎿",
                question: "Name three types of skis?",
                options: [
                    "All-mountain",
                    "Park/Freestyle",
                    "Touring",
                    "Racing/Carving",
                    "Powder"
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
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Self-Defense",
                emoji: "🥋🛡️",
                question: "Are martial arts used for self-defense?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "Beginner",
                    "Expert level/mastery"
                ],
                correct: 0
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
                    "Teacher/instructor",
                    "Beginner student"
                ],
                correct: 0
            },
            {
                topic: "Kiai",
                emoji: "🥋🗣️",
                question: "What is a kiai?",
                options: [
                    "Kick",
                    "Shout used during techniques"
                ],
                correct: 1
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
                    "Colored belt",
                    "Black belt degree level"
                ],
                correct: 1
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
                    "Striking post for training",
                    "Belt"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Bunkai",
                emoji: "🥋🔍",
                question: "What is bunkai?",
                options: [
                    "Warm-up",
                    "Belt ceremony",
                    "Analysis/application of kata techniques"
                ],
                correct: 1
            },
            {
                topic: "Ippon",
                emoji: "🥋✅",
                question: "What is ippon?",
                options: [
                    "Half point",
                    "Full point/winning technique",
                    "Kick"
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
                    "Uniform",
                    "Life energy/force concept",
                    "Technique"
                ],
                correct: 1
            },
            {
                topic: "Tameshiwari",
                emoji: "🥋🧱",
                question: "What is tameshiwari?",
                options: [
                    "Breaking technique (boards, bricks)",
                    "Belt rank",
                    "Kicking drill"
                ],
                correct: 2
            },
            {
                topic: "Uke",
                emoji: "🥋🛡️",
                question: "What is uke?",
                options: [
                    "Blocking/receiving technique or training partner",
                    "Meditation",
                    "Attack"
                ],
                correct: 0
            },
            {
                topic: "Zanshin",
                emoji: "🥋👁️",
                question: "What is zanshin?",
                options: [
                    "Starting position",
                    "Sleeping",
                    "Continued awareness after technique"
                ],
                correct: 1
            },
            {
                topic: "Mokuso",
                emoji: "🥋🧘",
                question: "What is mokuso?",
                options: [
                    "Meditation/clearing the mind",
                    "Fighting stance",
                    "Running"
                ],
                correct: 0
            },
            {
                topic: "Seiza",
                emoji: "🥋🧎",
                question: "What is seiza?",
                options: [
                    "Standing bow",
                    "Kick",
                    "Formal kneeling position"
                ],
                correct: 0
            },
            {
                topic: "Kihon",
                emoji: "🥋📋",
                question: "What is kihon?",
                options: [
                    "Sparring match",
                    "Belt test",
                    "Basic techniques practice"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Belt Levels",
                emoji: "🥋🎨",
                question: "How many colored belt levels typically?",
                options: [
                    "100",
                    "Only 2",
                    "Always 5",
                    "Varies by art (typically 8-10 including white)"
                ],
                correct: 3
            },
            {
                topic: "Black Belt Dans",
                emoji: "🥋⬛",
                question: "How many dan levels in most arts?",
                options: [
                    "3 levels",
                    "10 dan levels maximum",
                    "No levels",
                    "Unlimited"
                ],
                correct: 0
            },
            {
                topic: "Karate Origins",
                emoji: "🥋🇯🇵",
                question: "Where did karate originate?",
                options: [
                    "Okinawa, Japan",
                    "Thailand",
                    "Korea",
                    "China"
                ],
                correct: 3
            },
            {
                topic: "Taekwondo Kicks",
                emoji: "🥋🦵",
                question: "What is taekwondo known for?",
                options: [
                    "Emphasis on high, fast kicks",
                    "Wrestling",
                    "Only punching",
                    "Weapons"
                ],
                correct: 2
            },
            {
                topic: "Judo Techniques",
                emoji: "🥋🤸",
                question: "What is judo's primary focus?",
                options: [
                    "Only kicking",
                    "Weapons only",
                    "Throws and grappling",
                    "No physical contact"
                ],
                correct: 0
            },
            {
                topic: "BJJ",
                emoji: "🥋🤼",
                question: "What does BJJ emphasize?",
                options: [
                    "Running",
                    "Ground fighting and submissions",
                    "Standing strikes only",
                    "Weapons"
                ],
                correct: 1
            },
            {
                topic: "Muay Thai",
                emoji: "🥋🇹🇭",
                question: "What is Muay Thai known as?",
                options: [
                    "Gentle art",
                    "Way of the sword",
                    "Silent fighting",
                    "Art of eight limbs (fists, elbows, knees, shins)"
                ],
                correct: 0
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
                    "World Tournament Format",
                    "Western Training Facility",
                    "Wrestling Training Federation"
                ],
                correct: 3
            },
            {
                topic: "Aikido Philosophy",
                emoji: "🥋☯️",
                question: "What is aikido's philosophy?",
                options: [
                    "Pure competition",
                    "Aggressive attack",
                    "No philosophy",
                    "Harmonizing with opponent's energy"
                ],
                correct: 3
            }
        ],
        "extreme": [
            {
                topic: "Major Martial Arts",
                emoji: "🥋🌍",
                question: "Name three popular martial arts?",
                options: [
                    "Muay Thai",
                    "Karate",
                    "Brazilian Jiu-Jitsu",
                    "Taekwondo",
                    "Kung Fu",
                    "Judo"
                ],
                correct: 1
            },
            {
                topic: "Striking Arts",
                emoji: "🥋👊",
                question: "Name three striking martial arts?",
                options: [
                    "Karate",
                    "Boxing",
                    "Taekwondo",
                    "Kickboxing",
                    "Muay Thai"
                ],
                correct: 0
            },
            {
                topic: "Grappling Arts",
                emoji: "🥋🤼",
                question: "Name three grappling martial arts?",
                options: [
                    "Aikido",
                    "Wrestling",
                    "Sambo",
                    "Brazilian Jiu-Jitsu",
                    "Judo"
                ],
                correct: 4
            },
            {
                topic: "Belt Colors",
                emoji: "🥋🎨",
                question: "Name three common belt colors?",
                options: [
                    "Brown",
                    "Orange",
                    "Black",
                    "Yellow",
                    "Green",
                    "Blue",
                    "Red",
                    "Purple",
                    "White"
                ],
                correct: 8
            },
            {
                topic: "Techniques",
                emoji: "🥋💥",
                question: "Name three martial arts techniques?",
                options: [
                    "Throw",
                    "Strike",
                    "Submission",
                    "Sweep",
                    "Block",
                    "Punch",
                    "Kick"
                ],
                correct: 5
            },
            {
                topic: "Karate Styles",
                emoji: "🥋🇯🇵",
                question: "Name three karate styles?",
                options: [
                    "Shito-Ryu",
                    "Wado-Ryu",
                    "Kyokushin",
                    "Goju-Ryu",
                    "Shotokan"
                ],
                correct: 4
            },
            {
                topic: "Training Equipment",
                emoji: "🥋🎯",
                question: "Name three martial arts training equipment?",
                options: [
                    "Makiwara",
                    "Punching bag",
                    "Dummy",
                    "Heavy bag",
                    "Pads",
                    "Focus mitts"
                ],
                correct: 3
            },
            {
                topic: "Martial Arts Values",
                emoji: "🥋⭐",
                question: "Name three martial arts values?",
                options: [
                    "Self-control",
                    "Respect",
                    "Perseverance",
                    "Humility",
                    "Discipline",
                    "Integrity"
                ],
                correct: 1
            },
            {
                topic: "Weapons",
                emoji: "🥋⚔️",
                question: "Name three martial arts weapons?",
                options: [
                    "Sai",
                    "Tonfa",
                    "Bo staff",
                    "Sword/Katana",
                    "Kama",
                    "Nunchaku"
                ],
                correct: 2
            },
            {
                topic: "Competition Types",
                emoji: "🥋🏆",
                question: "Name three martial arts competition formats?",
                options: [
                    "Full contact",
                    "Kata/Forms",
                    "Sparring/Kumite",
                    "Point fighting",
                    "Submission grappling"
                ],
                correct: 1
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
                    "True",
                    "False"
                ],
                correct: 1
            },
            {
                topic: "Standing",
                emoji: "🏄‍♂️🧍",
                question: "Do surfers stand on the board?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Waves",
                emoji: "🏄‍♀️🌊",
                question: "Do surfers need waves to surf?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Beach",
                emoji: "🏄‍♂️🏖️",
                question: "Is surfing typically done at beaches?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Balance",
                emoji: "🏄‍♀️⚖️",
                question: "Is balance important in surfing?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Olympics",
                emoji: "🏄‍♂️🥇",
                question: "Is surfing now an Olympic sport?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
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
                    "Area where surfers wait for waves",
                    "Waiting area"
                ],
                correct: 1
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
                    "Wave breaking over coral/rock reef",
                    "Beach wave"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                topic: "Backdoor",
                emoji: "🏄‍♂️🚪",
                question: "What is going backdoor?",
                options: [
                    "Beach entry",
                    "Entering barrel from behind peak",
                    "Exiting wave"
                ],
                correct: 2
            },
            {
                topic: "Rocker",
                emoji: "🏄‍♀️〰️",
                question: "What is board rocker?",
                options: [
                    "Flat surface",
                    "Curve from nose to tail",
                    "Board brand"
                ],
                correct: 1
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
                    "Good technique",
                    "Encouraged behavior",
                    "Taking wave someone already riding (breaking etiquette)"
                ],
                correct: 0
            },
            {
                topic: "Fins",
                emoji: "🏄‍♂️🦈",
                question: "What do surfboard fins do?",
                options: [
                    "Decoration only",
                    "Provide stability and control",
                    "No purpose"
                ],
                correct: 0
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
                    "Security guards",
                    "Surfing at sunrise",
                    "Night surfing"
                ],
                correct: 2
            },
            {
                topic: "Thruster",
                emoji: "🏄‍♀️🔱",
                question: "What is a thruster setup?",
                options: [
                    "No fins",
                    "Three-fin configuration",
                    "One fin"
                ],
                correct: 1
            },
            {
                topic: "Stoked",
                emoji: "🏄‍♂️😃",
                question: "What does stoked mean?",
                options: [
                    "Angry",
                    "Excited/happy (surf slang)",
                    "Tired"
                ],
                correct: 0
            },
            {
                topic: "Offshore Wind",
                emoji: "🏄‍♀️💨",
                question: "Why is offshore wind good?",
                options: [
                    "Makes waves messy",
                    "Stops waves",
                    "Holds up wave face, creates cleaner waves"
                ],
                correct: 0
            }
        ],
        "expert": [
           {
                topic: "Wave Height",
                emoji: "🏄‍♂️📏",
                question: "How is Hawaiian wave height measured?",
                options: [
                    "No measurement",
                    "From back of wave (half face height)",
                    "From front face",
                    "From trough to lip"
                ],
                correct: 1
            },
            {
                topic: "WSL",
                emoji: "🏄‍♀️🌍",
                question: "What is WSL?",
                options: [
                    "Wave Size Limit",
                    "World Surf League (professional tour)",
                    "Western Surf Location",
                    "Water Safety League"
                ],
                correct: 3
            },
            {
                topic: "Pipeline",
                emoji: "🏄‍♂️🌊",
                question: "Where is Banzai Pipeline?",
                options: [
                    "Florida",
                    "Australia",
                    "California",
                    "North Shore, Oahu, Hawaii"
                ],
                correct: 3
            },
            {
                topic: "Tow-In Surfing",
                emoji: "🏄‍♀️🚤",
                question: "What is tow-in surfing?",
                options: [
                    "Being towed by jet ski to catch big waves",
                    "Paddling only",
                    "Pool surfing",
                    "Beach surfing"
                ],
                correct: 0
            },
            {
                topic: "Foam Board",
                emoji: "🏄‍♂️🟦",
                question: "Why use foam boards for beginners?",
                options: [
                    "Faster",
                    "Safer, more buoyant, stable",
                    "Professional use",
                    "More expensive"
                ],
                correct: 0
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
                    "Speed enhancement",
                    "Make board shiny",
                    "No purpose"
                ],
                correct: 2
            },
            {
                topic: "Kelly Slater",
                emoji: "🏄‍♂️👑",
                question: "How many world titles does Kelly Slater have?",
                options: [
                    "3 titles",
                    "11 World Championships",
                    "1 title",
                    "None"
                ],
                correct: 1
            },
            {
                topic: "Priority System",
                emoji: "🏄‍♀️1️⃣",
                question: "What is priority in surfing?",
                options: [
                    "Board type",
                    "Right of way system in competitions",
                    "Age order",
                    "Wave size"
                ],
                correct: 1
            },
            {
                topic: "Aerial",
                emoji: "🏄‍♂️✈️",
                question: "What is an aerial maneuver?",
                options: [
                    "Sitting on board",
                    "Paddling technique",
                    "Launching off wave into air and landing back on wave",
                    "Underwater move"
                ],
                correct: 2
            }
        ],
        "extreme": [
            {
                topic: "Surf Spots",
                emoji: "🏄‍♂️🌍",
                question: "Name three famous surf locations?",
                options: [
                    "Waimea)",
                    "Indonesia (Bali)",
                    "Australia (Gold Coast)",
                    "California (Malibu)",
                    "Portugal (Nazaré)",
                    "Hawaii (Pipeline"
                ],
                correct: 5
            },
            {
                topic: "Surfboard Types",
                emoji: "🏄‍♀️🏄",
                question: "Name three types of surfboards?",
                options: [
                    "Shortboard",
                    "Foam board",
                    "Fish",
                    "Longboard",
                    "Funboard",
                    "Gun"
                ],
                correct: 0
            },
            {
                topic: "Surf Maneuvers",
                emoji: "🏄‍♂️🎯",
                question: "Name three surfing maneuvers?",
                options: [
                    "Floater",
                    "Top turn",
                    "Aerial",
                    "Barrel ride",
                    "Bottom turn",
                    "Cutback"
                ],
                correct: 5
            },
            {
                topic: "Legendary Surfers",
                emoji: "🏄‍♀️⭐",
                question: "Name three legendary surfers?",
                options: [
                    "Kelly Slater",
                    "Stephanie Gilmore",
                    "Duke Kahanamoku",
                    "Laird Hamilton",
                    "Bethany Hamilton"
                ],
                correct: 0
            },
            {
                topic: "Wave Types",
                emoji: "🏄‍♂️🌊",
                question: "Name three types of waves?",
                options: [
                    "Closeout",
                    "Reef break",
                    "A-frame",
                    "Beach break",
                    "Point break"
                ],
                correct: 4
            },
            {
                topic: "Surf Equipment",
                emoji: "🏄‍♀️🎽",
                question: "Name three surfing equipment items?",
                options: [
                    "Surfboard",
                    "Wax",
                    "Rash guard",
                    "Leash",
                    "Fins",
                    "Wetsuit"
                ],
                correct: 0
            },
            {
                topic: "Surf Terms",
                emoji: "🏄‍♂️📖",
                question: "Name three surfing slang terms?",
                options: [
                    "Wipeout",
                    "Gnarly",
                    "Shred",
                    "Stoked",
                    "Hang ten",
                    "Carve"
                ],
                correct: 3
            },
            {
                topic: "Fin Setups",
                emoji: "🏄‍♀️🦈",
                question: "Name three fin configurations?",
                options: [
                    "Five fin",
                    "Thruster (3 fins)",
                    "Twin fin",
                    "Quad (4 fins)",
                    "Single fin"
                ],
                correct: 4
            },
            {
                topic: "Surf Conditions",
                emoji: "🏄‍♂️🌤️",
                question: "Name three factors affecting surf conditions?",
                options: [
                    "Tide",
                    "Bottom contour",
                    "Swell size",
                    "Wave period",
                    "Wind direction"
                ],
                correct: 4
            },
            {
                topic: "Competitions",
                emoji: "🏄‍♀️🏆",
                question: "Name three major surf competitions?",
                options: [
                    "US Open of Surfing",
                    "WSL Championship Tour",
                    "Pipeline Masters",
                    "Rip Curl Pro"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "Only server can score",
                    "Point scored on every rally regardless of server"
                ],
                correct: 1
            },
            {
                topic: "Game Points",
                emoji: "🏸🎯",
                question: "How many points to win a game?",
                options: [
                    "21 points (win by 2)",
                    "15 points"
                ],
                correct: 0
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
                    "Low flat shot",
                    "High deep shot to back of court"
                ],
                correct: 1
            },
            {
                topic: "Service Court",
                emoji: "🏸📐",
                question: "Does serve direction change based on score?",
                options: [
                    "Yes, right court when even score, left when odd",
                    "Same court always"
                ],
                correct: 1
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
                    "Illegal serve",
                    "Perfect serve"
                ],
                correct: 1
            },
            {
                topic: "Best of Three",
                emoji: "🏸3️⃣",
                question: "How many games in a match?",
                options: [
                    "Single game",
                    "Best of 3 games"
                ],
                correct: 1
            },
            {
                topic: "Drive",
                emoji: "🏸➡️",
                question: "What is a drive shot?",
                options: [
                    "Flat, fast shot parallel to ground",
                    "High lob"
                ],
                correct: 1
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
                    "No service box",
                    "Yes, doubles uses wider but shorter box",
                    "Identical"
                ],
                correct: 1
            },
            {
                topic: "Backhand Serve",
                emoji: "🏸🤚",
                question: "Is backhand serve common?",
                options: [
                    "Illegal",
                    "Never used",
                    "Yes, especially in doubles for speed and deception"
                ],
                correct: 1
            },
            {
                topic: "Rotation System",
                emoji: "🏸🔄",
                question: "How do doubles partners rotate?",
                options: [
                    "Rotate after winning rally when receiving",
                    "Switch every point",
                    "Stay in position"
                ],
                correct: 2
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
                    "One player only",
                    "Side by side"
                ],
                correct: 2
            },
            {
                topic: "Baseline Play",
                emoji: "🏸━",
                question: "What is baseline strategy?",
                options: [
                    "Only net play",
                    "No strategy",
                    "Playing deep clears to tire opponent"
                ],
                correct: 0
            },
            {
                topic: "Feather Shuttlecock",
                emoji: "🏸🪶",
                question: "Why are feather shuttlecocks preferred in competition?",
                options: [
                    "More durable",
                    "Better flight characteristics and control",
                    "Cheaper"
                ],
                correct: 1
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
                    "Defensive return",
                    "Aggressively attacking weak serve immediately",
                    "Slow return"
                ],
                correct: 2
            }
        ],
        "expert": [
            {
                topic: "Smash Speed",
                emoji: "🏸💨",
                question: "What is fastest recorded smash speed?",
                options: [
                    "Over 426 km/h (265 mph)",
                    "50 km/h",
                    "100 km/h",
                    "600 km/h"
                ],
                correct: 0
            },
            {
                topic: "Court Dimensions",
                emoji: "🏸📐",
                question: "What are badminton court dimensions?",
                options: [
                    "10m x 5m",
                    "13.4m x 6.1m (doubles)",
                    "30m x 15m",
                    "20m x 10m"
                ],
                correct: 1
            },
            {
                topic: "Net Height",
                emoji: "🏸📏",
            {
                topic: "Shuttlecock Weight",
                emoji: "🏸⚖️",
                question: "What is shuttlecock weight?",
                options: [
                    "20 grams",
                    "1 gram",
                    "10 grams",
                    "4.74-5.50 grams"
                ],
                correct: 3
            },
            {
                topic: "BWF",
                emoji: "🏸🌍",
                question: "What is BWF?",
                options: [
                    "Ball Weight Factor",
                    "Badminton World Federation (governing body)",
                    "British Wrestling Federation",
                    "Best World Finalists"
                ],
                correct: 3
            },
            {
                topic: "Thomas Cup",
                emoji: "🏸🏆",
                question: "What is Thomas Cup?",
                options: [
                    "Junior tournament",
                    "Mixed doubles",
                    "Women's singles",
                    "Men's world team championship"
                ],
                correct: 3
            },
            {
                topic: "Uber Cup",
                emoji: "🏸👑",
                question: "What is Uber Cup?",
                options: [
                    "Men's tournament",
                    "Women's world team championship",
                    "Car service",
                    "Racket brand"
                ],
                correct: 0
            },
            {
                topic: "Racket Weight",
                emoji: "🏸⚖️",
                question: "What is typical racket weight?",
                options: [
                    "30 grams",
                    "500 grams",
                    "200 grams",
                    "70-95 grams unstrung"
                ],
                correct: 2
            },
            {
                topic: "All England",
                emoji: "🏸🇬🇧",
                question: "What is All England Championship?",
                options: [
                    "Oldest and most prestigious badminton tournament",
                    "Regional event",
                    "New tournament",
                    "Training camp"
                ],
                correct: 2
            },
            {
                topic: "Lin Dan",
                emoji: "🏸🐉",
                question: "How many Olympic golds did Lin Dan win?",
                options: [
                    "1 medal",
                    "2 Olympic gold medals (2008, 2012)",
                    "5 medals",
                    "None"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Shot Types",
                emoji: "🏸🎯",
                question: "Name three badminton shots?",
                options: [
                    "Drop shot",
                    "Drive",
                    "Smash",
                    "Clear",
                    "Net shot",
                    "Lob"
                ],
                correct: 2
            },
            {
                topic: "Badminton Events",
                emoji: "🏸🏆",
                question: "Name the five Olympic badminton events?",
                options: [
                    "Men's singles",
                    "Women's doubles",
                    "Women's singles",
                    "Men's doubles",
                    "Mixed doubles"
                ],
                correct: 0
            },
            {
                topic: "Legendary Players",
                emoji: "🏸⭐",
                question: "Name three badminton legends?",
                options: [
                    "Taufik Hidayat",
                    "Saina Nehwal",
                    "Lee Chong Wei",
                    "Lin Dan",
                    "P.V. Sindhu"
                ],
                correct: 3
            },
            {
                topic: "Techniques",
                emoji: "🏸💪",
                question: "Name three badminton techniques?",
                options: [
                    "Backhand grip",
                    "Footwork",
                    "Forehand grip",
                    "Jump smash",
                    "Deception"
                ],
                correct: 2
            },
            {
                topic: "Court Areas",
                emoji: "🏸📐",
                question: "Name three court zones?",
                options: [
                    "Forecourt",
                    "Backcourt",
                    "Tramlines",
                    "Midcourt",
                    "Service court"
                ],
                correct: 4
            },
            {
                topic: "Badminton Terms",
                emoji: "🏸📖",
                question: "Name three badminton terminology terms?",
                options: [
                    "Fault",
                    "Deuce",
                    "Let",
                    "Woodshot",
                    "Rally",
                    "Service over"
                ],
                correct: 4
            },
            {
                topic: "Strategies",
                emoji: "🏸🧠",
                question: "Name three badminton strategies?",
                options: [
                    "Deception",
                    "Baseline play",
                    "Defense",
                    "Net play",
                    "Rotation",
                    "Attack"
                ],
                correct: 5
            },
            {
                topic: "Equipment",
                emoji: "🏸🎽",
                question: "Name three badminton equipment items?",
                options: [
                    "String",
                    "Net",
                    "Shoes",
                    "Racket",
                    "Grip",
                    "Shuttlecock"
                ],
                correct: 3
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
                    "Carry"
                ],
                correct: 0
            },
            {
                topic: "Major Tournaments",
                emoji: "🏸🏆",
                question: "Name three major badminton tournaments?",
                options: [
                    "Uber Cup",
                    "Olympics",
                    "Thomas Cup",
                    "All England",
                    "World Championships"
                ],
                correct: 1
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
                    "False",
                    "True"
                ],
                correct: 0
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
                    "False",
                    "True"
                ],
                correct: 1
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
                    "At race start",
                    "During dangerous conditions or crashes"
                ],
                correct: 1
            },
            {
                topic: "Slipstream",
                emoji: "🏁💨",
                question: "What is slipstreaming?",
                options: [
                    "Following closely to reduce drag",
                    "Driving in water"
                ],
                correct: 1
            },
            {
                topic: "DNF",
                emoji: "🏁❌",
                question: "What does DNF mean?",
                options: [
                    "Do Not Follow",
                    "Did Not Finish"
                ],
                correct: 0
            },
            {
                topic: "Grand Prix",
                emoji: "🏁🏆",
                question: "What is a Grand Prix?",
                options: [
                    "Major Formula 1 race",
                    "Practice session"
                ],
                correct: 1
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
                    "Yes, soft, medium, hard compounds",
                    "Only one type"
                ],
                correct: 0
            },
            {
                topic: "Overtaking",
                emoji: "🏁↗️",
                question: "What is overtaking?",
                options: [
                    "Slowing down",
                    "Passing another car"
                ],
                correct: 1
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
                    "Clean track",
                    "Turbulent air behind car reducing following car's downforce",
                    "Fresh air"
                ],
                correct: 1
            },
            {
                topic: "Porpoising",
                emoji: "🏁🐬",
                question: "What is porpoising?",
                options: [
                    "Smooth driving",
                    "Car bouncing due to aerodynamic effects",
                    "Turning technique"
                ],
                correct: 1
            },
            {
                topic: "Parc Fermé",
                emoji: "🏁🔒",
                question: "What is parc fermé?",
                options: [
                    "Practice area",
                    "Closed park where cars secured, limited modifications",
                    "Fan zone"
                ],
                correct: 0
            },
            {
                topic: "Marbles",
                emoji: "🏁⚫",
                question: "What are marbles on track?",
                options: [
                    "Decorations",
                    "Toys",
                    "Debris and rubber off racing line"
                ],
                correct: 2
            },
            {
                topic: "Box Box",
                emoji: "🏁📻",
            {
                topic: "ERS",
                emoji: "🏁🔋",
                question: "What is ERS in F1?",
                options: [
                    "Emergency Radio System",
                    "Engine Restart Switch",
                    "Energy Recovery System for power boost"
                ],
                correct: 0
            },
            {
                topic: "Apex",
                emoji: "🏁🔄",
                question: "What is the apex of a corner?",
                options: [
                    "Entry point",
                    "Innermost point of turn for optimal line",
                    "Exit point"
                ],
                correct: 2
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
                    "200 km/h",
                    "100 km/h",
                    "Around 360 km/h (224 mph)",
                    "500 km/h"
                ],
                correct: 0
            },
            {
                topic: "Track Length",
                emoji: "🏁📏",
                question: "What is minimum F1 track length?",
                options: [
                    "500 km",
                    "100 km",
                    "305 km (except Monaco at 260 km)",
                    "50 km"
                ],
                correct: 2
            },
            {
                topic: "Points System",
                emoji: "🏁🔢",
                question: "How many points for winning F1 race?",
                options: [
                    "10 points",
                    "25 points (plus 1 for fastest lap if top 10)",
                    "50 points",
                    "100 points"
                ],
                correct: 1
            },
            {
                topic: "FIA",
                emoji: "🏁🌍",
                question: "What is FIA?",
                options: [
                    "Fuel Injection Apparatus",
                    "Fédération Internationale de l'Automobile (governing body)",
                    "Formula International Alliance",
                    "Fast International Association"
                ],
                correct: 1
            },
            {
                topic: "Monaco GP",
                emoji: "🏁🇲🇨",
                question: "What makes Monaco GP unique?",
                options: [
                    "Longest track",
                    "Fastest track",
                    "Slowest and shortest circuit, street race",
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
                    "20G",
                    "1G only",
                    "No G-forces"
                ],
                correct: 2
            },
            {
                topic: "Power Unit",
                emoji: "🏁🔋",
                question: "What is modern F1 power unit?",
                options: [
                    "V8 engine",
                    "1.6L V6 turbo hybrid with ERS",
                    "V12 naturally aspirated",
                    "Electric only"
                ],
                correct: 1
            },
            {
                topic: "Halo Device",
                emoji: "🏁🛡️",
                question: "What is the halo?",
                options: [
                    "Fuel system",
                    "Steering wheel",
                    "Rear wing",
                    "Protective structure above driver's head"
                ],
                correct: 1
            },
            {
                topic: "Lewis Hamilton",
                emoji: "🏁👑",
                question: "How many F1 championships has Hamilton won?",
                options: [
                    "10 championships",
                    "3 championships",
                    "1 championship",
                    "7 World Championships (tied record)"
                ],
                correct: 3
            },
            {
                topic: "Constructors Championship",
                emoji: "🏁🏗️",
                question: "What is Constructors Championship?",
                options: [
                    "Individual driver title",
                    "Team championship based on combined driver points",
                    "Fastest car award",
                    "Engine manufacturer award"
                ],
                correct: 1
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
                    "WEC",
                    "Formula E",
                    "IndyCar",
                    "MotoGP"
                ],
                correct: 0
            },
            {
                topic: "F1 Teams",
                emoji: "🏁🏗️",
                question: "Name three current F1 teams?",
                options: [
                    "McLaren",
                    "Ferrari",
                    "Aston Martin",
                    "Red Bull",
                    "Mercedes",
                    "Alpine"
                ],
                correct: 4
            },
            {
                topic: "Racing Legends",
                emoji: "🏁⭐",
                question: "Name three legendary race drivers?",
                options: [
                    "Juan Manuel Fangio",
                    "Alain Prost",
                    "Ayrton Senna",
                    "Michael Schumacher",
                    "Lewis Hamilton"
                ],
                correct: 2
            },
            {
                topic: "Circuit Types",
                emoji: "🏁🛣️",
                question: "Name three types of racing circuits?",
                options: [
                    "Road course",
                    "Mixed circuit",
                    "Street circuit",
                    "Oval",
                    "Permanent circuit"
                ],
                correct: 2
            },
            {
                topic: "Car Components",
                emoji: "🏁🔧",
                question: "Name three F1 car components?",
                options: [
                    "Engine/Power unit",
                    "Chassis",
                    "Suspension",
                    "Gearbox",
                    "Wings",
                    "Tires"
                ],
                correct: 0
            },
            {
                topic: "Flag Signals",
                emoji: "🏁🚩",
                question: "Name three racing flag meanings?",
                options: [
                    "Black (disqualification)",
                    "Yellow (caution)",
                    "Red (stop)",
                    "Green (start/clear)",
                    "Blue (let faster car pass)"
                ],
                correct: 3
            },
            {
                topic: "Famous Circuits",
                emoji: "🏁🏛️",
                question: "Name three famous race tracks?",
                options: [
                    "Silverstone",
                    "Suzuka",
                    "Spa-Francorchamps",
                    "Monaco",
                    "Monza",
                    "Indianapolis"
                ],
                correct: 3
            },
            {
                topic: "Racing Techniques",
                emoji: "🏁🎯",
                question: "Name three racing techniques?",
                options: [
                    "Trail braking",
                    "Overtaking",
                    "Heel-toe downshift",
                    "Defensive driving",
                    "Slipstreaming"
                ],
                correct: 4
            },
            {
                topic: "Pit Crew Roles",
                emoji: "🏁👥",
                question: "Name three pit crew positions?",
                options: [
                    "Tire changers",
                    "Fuelers",
                    "Lollipop man",
                    "Jack operators",
                    "Mechanics"
                ],
                correct: 0
            },
            {
                topic: "Racing Terms",
                emoji: "🏁📖",
                question: "Name three motorsport terms?",
                options: [
                    "Podium",
                    "Qualifying",
                    "Fastest lap",
                    "DNF",
                    "Grid",
                    "Pole position"
                ],
                correct: 5
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
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Chalk",
                emoji: "🧗‍♀️🤍",
                question: "Do climbers use chalk for grip?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Holds",
                emoji: "🧗‍♂️✊",
                question: "Do climbers grip onto holds?",
                options: [
                    "False",
                    "True"
                ],
                correct: 1
            },
            {
                topic: "Belaying",
                emoji: "🧗‍♀️🤝",
                question: "Does a belayer help control the rope?",
                options: [
                    "True",
                    "False"
                ],
                correct: 0
            },
            {
                topic: "Olympics",
                emoji: "🧗‍♂️🥇",
                question: "Is sport climbing in the Olympics?",
                options: [
                    "False",
                    "True"
                ],
                correct: 0
            },
            {
                topic: "Shoes",
                emoji: "🧗‍♀️👟",
                question: "Do climbers wear special climbing shoes?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                topic: "Bouldering",
                emoji: "🧗‍♂️🪨",
                question: "What is bouldering?",
                options: [
                    "Mountain climbing",
                    "Climbing short routes without ropes over crash pads"
                ],
                correct: 1
            },
            {
                topic: "Top Rope",
                emoji: "🧗‍♀️⬆️",
                question: "What is top rope climbing?",
                options: [
                    "Rope anchored at top, belayer at bottom",
                    "Free climbing"
                ],
                correct: 1
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
                    "Gripping small holds with fingertips",
                    "Folding equipment"
                ],
                correct: 1
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
                    "Metal loop for connecting rope and gear",
                    "Climbing hold"
                ],
                correct: 0
            },
            {
                topic: "Redpoint",
                emoji: "🧗‍♂️🔴",
                question: "What is a redpoint?",
                options: [
                    "First attempt",
                    "Successfully completing route after practice"
                ],
                correct: 0
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
                    "Static move",
                    "Dynamic jump to distant hold"
                ],
                correct: 0
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
                    "Side grip",
                    "Gripping underside of hold, pulling upward",
                    "Top grip"
                ],
                correct: 1
            },
            {
                topic: "Smearing",
                emoji: "🧗‍♀️👟",
                question: "What is smearing?",
                options: [
                    "Using chalk",
                    "Rope technique",
                    "Using friction of shoe on rock without foothold"
                ],
                correct: 0
            },
            {
                topic: "Pumped",
                emoji: "🧗‍♂️💪",
            {
                topic: "Mantle",
                emoji: "🧗‍♀️⬆️",
                question: "What is mantling?",
                options: [
                    "Descending",
                    "Pulling technique",
                    "Pressing down on hold to push body up"
                ],
                correct: 1
            },
            {
                topic: "Sandbag",
                emoji: "🧗‍♂️⚠️",
                question: "What does sandbagged route mean?",
                options: [
                    "Sandy climbing",
                    "Route harder than grade suggests",
                    "Easy route"
                ],
                correct: 2
            },
            {
                topic: "Belay Device",
                emoji: "🧗‍♀️🔧",
                question: "What does belay device do?",
                options: [
                    "Controls rope friction for catching falls",
                    "Measures distance",
                    "Holds gear"
                ],
                correct: 2
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
                    "No grades",
                    "1-10 scale",
                    "A-Z scale"
                ],
                correct: 0
            },
            {
                topic: "V-Scale",
                emoji: "🧗‍♀️📊",
                question: "What is V-scale for?",
                options: [
                    "Speed climbing",
                    "Bouldering grades (V0 to V17)",
                    "Height measurement",
                    "Rope climbing"
                ],
                correct: 1
            },
            {
                topic: "Sport Climbing Events",
                emoji: "🧗‍♂️🏆",
                question: "What are Olympic climbing disciplines?",
                options: [
                    "Speed, Bouldering, Lead",
                    "Traditional only",
                    "Only bouldering",
                    "Only speed"
                ],
                correct: 0
            },
            {
                topic: "Speed Climbing",
                emoji: "🧗‍♀️⚡",
                question: "What is standard speed climbing wall height?",
                options: [
                    "20 meters",
                    "5 meters",
                    "15 meters with standardized route",
                    "50 meters"
                ],
                correct: 2
            },
            {
                topic: "IFSC",
                emoji: "🧗‍♂️🌍",
                question: "What is IFSC?",
                options: [
                    "Ice and Free Sports Committee",
                    "International Federation of Sport Climbing",
                    "Indoor Fitness Sport Center",
                    "International Free Solo Club"
                ],
                correct: 1
            },
            {
                topic: "Free Solo",
                emoji: "🧗‍♀️🆓",
                question: "What is free soloing?",
                options: [
                    "Group climbing",
                    "Climbing without rope or protection",
                    "Climbing with rope",
                    "Indoor climbing"
                ],
                correct: 1
            },
            {
                topic: "Aid Climbing",
                emoji: "🧗‍♂️🔧",
                question: "What is aid climbing?",
                options: [
                    "Using gear for upward progress, not just protection",
                    "No equipment",
                    "Speed climbing",
                    "Free climbing"
                ],
                correct: 3
            },
            {
                topic: "Rope Diameter",
                emoji: "🧗‍♀️📏",
                question: "What is typical climbing rope diameter?",
                options: [
                    "50 mm",
                    "20 mm",
                    "5 mm",
                    "9-11 mm"
                ],
                correct: 3
            },
            {
                topic: "Alex Honnold",
                emoji: "🧗‍♂️🌟",
                question: "What is Alex Honnold famous for?",
                options: [
                    "Equipment design",
                    "Speed records",
                    "Free soloing El Capitan in Yosemite",
                    "Indoor competitions"
                ],
                correct: 1
            },
            {
                topic: "Adam Ondra",
                emoji: "🧗‍♂️👑",
                question: "What grades has Adam Ondra climbed?",
                options: [
                    "Beginner grades",
                    "First 5.15d (9c) climber",
                    "Only bouldering",
                    "Only 5.10"
                ],
                correct: 1
            }
        ],
        "extreme": [
            {
                topic: "Climbing Styles",
                emoji: "🧗‍♂️🎯",
                question: "Name three climbing styles?",
                options: [
                    "Bouldering",
                    "Ice climbing",
                    "Sport climbing",
                    "Trad climbing",
                    "Free solo",
                    "Aid climbing"
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
                    "Undercling",
                    "Sloper",
                    "Pocket",
                    "Pinch"
                ],
                correct: 0
            },
            {
                topic: "Essential Gear",
                emoji: "🧗‍♂️🎒",
                question: "Name three essential climbing equipment items?",
                options: [
                    "Harness",
                    "Rope",
                    "Helmet",
                    "Climbing shoes",
                    "Carabiners",
                    "Belay device"
                ],
                correct: 1
            },
            {
                topic: "Climbing Techniques",
                emoji: "🧗‍♀️💪",
                question: "Name three climbing techniques?",
                options: [
                    "Heel hook",
                    "Smearing",
                    "Crimping",
                    "Flagging",
                    "Toe hook",
                    "Dyno"
                ],
                correct: 2
            },
            {
                topic: "Famous Climbers",
                emoji: "🧗‍♂️⭐",
                question: "Name three legendary climbers?",
                options: [
                    "Tommy Caldwell",
                    "Lynn Hill",
                    "Adam Ondra",
                    "Alex Honnold",
                    "Janja Garnbret"
                ],
                correct: 3
            },
            {
                topic: "Climbing Locations",
                emoji: "🧗‍♀️🏔️",
                question: "Name three famous climbing destinations?",
                options: [
                    "Yosemite",
                    "Frankenjura",
                    "Fontainebleau",
                    "Red River Gorge",
                    "Kalymnos"
                ],
                correct: 0
            },
            {
                topic: "Knots",
                emoji: "🧗‍♂️🪢",
                question: "Name three climbing knots?",
                options: [
                    "Clove hitch",
                    "Munter hitch",
                    "Figure-eight",
                    "Double fisherman's",
                    "Bowline"
                ],
                correct: 2
            },
            {
                topic: "Climbing Terms",
                emoji: "🧗‍♀️📖",
                question: "Name three climbing terminology terms?",
                options: [
                    "Onsight",
                    "Crux",
                    "Flash",
                    "Whipper",
                    "Beta",
                    "Redpoint"
                ],
                correct: 4
            },
            {
                topic: "Protection Gear",
                emoji: "🧗‍♂️🔧",
                question: "Name three types of climbing protection?",
                options: [
                    "Bolts",
                    "Cams",
                    "Hexes",
                    "Slings",
                    "Nuts",
                    "Quickdraws"
                ],
                correct: 1
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
