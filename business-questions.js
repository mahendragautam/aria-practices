/**
 * WPCode Snippet #8: Business Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer  
 * Priority: 17
 *
 * COPY ALL CODE BELOW
 */

const businessQuestions = {
    1: { // Chapter 1: Business Basics
        easy: [
            {topic: 'Marketing', emoji: '📢📊', question: 'Marketing helps sell products.', options: ['True', 'False'], correct: 0},
            {topic: 'Finance', emoji: '💰💵', question: 'Profit is income minus expenses.', options: ['True', 'False'], correct: 0},
            {topic: 'Management', emoji: '👔📊', question: 'Managers lead teams.', options: ['True', 'False'], correct: 0},
            {topic: 'Accounting', emoji: '📊💼', question: 'Accounting tracks money.', options: ['True', 'False'], correct: 0},
            {topic: 'Marketing', emoji: '📢🎯', question: 'Advertising is part of marketing.', options: ['True', 'False'], correct: 0},
            {topic: 'Finance', emoji: '💰📈', question: 'Revenue is money earned.', options: ['True', 'False'], correct: 0},
            {topic: 'Management', emoji: '👔📋', question: 'Planning is important for business.', options: ['True', 'False'], correct: 0},
            {topic: 'Accounting', emoji: '📊💵', question: 'Budgets help control spending.', options: ['True', 'False'], correct: 0},
            {topic: 'Marketing', emoji: '📢📱', question: 'Social media is used for marketing.', options: ['True', 'False'], correct: 0},
            {topic: 'Finance', emoji: '💰🏦', question: 'Banks provide business loans.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Marketing', emoji: '📢📊', question: 'What are the 4 Ps of marketing?', options: ['Product, Price, Place, Promotion', 'Profit, People, Plan, Price'], correct: 0},
            {topic: 'Finance', emoji: '💰💵', question: 'What is ROI?', options: ['Return on Investment', 'Rate of Income'], correct: 0},
            {topic: 'Management', emoji: '👔📊', question: 'What is delegation?', options: ['Assigning tasks', 'Doing everything'], correct: 0},
            {topic: 'Accounting', emoji: '📊💼', question: 'What is a balance sheet?', options: ['Financial statement', 'Employee list'], correct: 0},
            {topic: 'Marketing', emoji: '📢🎯', question: 'What is a target market?', options: ['Specific customer group', 'All customers'], correct: 0},
            {topic: 'Finance', emoji: '💰📈', question: 'What is cash flow?', options: ['Money in and out', 'Total revenue'], correct: 0},
            {topic: 'Management', emoji: '👔📋', question: 'What is SWOT analysis?', options: ['Strengths, Weaknesses, Opportunities, Threats', 'Sales, Work, Operations, Training'], correct: 0},
            {topic: 'Accounting', emoji: '📊💵', question: 'What are assets?', options: ['Things owned', 'Money owed'], correct: 0},
            {topic: 'Marketing', emoji: '📢📱', question: 'What is branding?', options: ['Creating identity', 'Selling products'], correct: 0},
            {topic: 'Finance', emoji: '💰🏦', question: 'What is equity?', options: ['Ownership value', 'Debt'], correct: 0}
        ],
        hard: [
            {topic: 'Marketing', emoji: '📢📊', question: 'What is market segmentation?', options: ['Dividing customers into groups', 'Increasing prices', 'Reducing costs'], correct: 0},
            {topic: 'Finance', emoji: '💰💵', question: 'What is the break-even point?', options: ['Revenue equals costs', 'Maximum profit', 'Minimum loss'], correct: 0},
            {topic: 'Management', emoji: '👔📊', question: 'What is Six Sigma?', options: ['Quality improvement method', 'Marketing strategy', 'HR policy'], correct: 0},
            {topic: 'Accounting', emoji: '📊💼', question: 'What is depreciation?', options: ['Asset value decrease', 'Profit increase', 'Debt payment'], correct: 0},
            {topic: 'Marketing', emoji: '📢🎯', question: 'What is customer lifetime value?', options: ['Total customer spending', 'First purchase', 'Annual revenue'], correct: 0},
            {topic: 'Finance', emoji: '💰📈', question: 'What is working capital?', options: ['Current assets minus liabilities', 'Total profit', 'Annual revenue'], correct: 0},
            {topic: 'Management', emoji: '👔📋', question: 'What is KPI?', options: ['Key Performance Indicator', 'Knowledge and Practice Index', 'Key Profit Indicator'], correct: 0},
            {topic: 'Accounting', emoji: '📊💵', question: 'What is GAAP?', options: ['Accounting standards', 'Profit formula', 'Tax code'], correct: 0},
            {topic: 'Marketing', emoji: '📢📱', question: 'What is B2B marketing?', options: ['Business to Business', 'Brand to Buyer', 'Budget to Business'], correct: 0},
            {topic: 'Finance', emoji: '💰🏦', question: 'What is venture capital?', options: ['Startup investment', 'Bank loan', 'Government grant'], correct: 0}
        ],
        expert: [
            {topic: 'Marketing', emoji: '📢📊', question: 'What is the conversion rate formula?', options: ['Conversions/Visitors × 100', 'Sales/Expenses', 'Profit/Revenue', 'Visitors/Sales'], correct: 0},
            {topic: 'Finance', emoji: '💰💵', question: 'What is the debt-to-equity ratio?', options: ['Total debt/Total equity', 'Assets/Liabilities', 'Revenue/Expenses', 'Profit/Sales'], correct: 0},
            {topic: 'Management', emoji: '👔📊', question: 'What is Kaizen?', options: ['Continuous improvement', 'Japanese accounting', 'Marketing method', 'HR strategy'], correct: 0},
            {topic: 'Accounting', emoji: '📊💼', question: 'What is EBITDA?', options: ['Earnings before interest, tax, depreciation, amortization', 'Total revenue', 'Net profit', 'Gross income'], correct: 0},
            {topic: 'Marketing', emoji: '📢🎯', question: 'What is the marketing funnel stages?', options: ['Awareness, Interest, Decision, Action', 'Plan, Execute, Measure', 'Research, Develop, Launch', 'Price, Product, Promote'], correct: 0},
            {topic: 'Finance', emoji: '💰📈', question: 'What is NPV?', options: ['Net Present Value', 'New Profit Value', 'Net Percentage Variable', 'Nominal Price Value'], correct: 0},
            {topic: 'Management', emoji: '👔📋', question: 'What is agile methodology?', options: ['Iterative development', 'Fixed planning', 'Waterfall model', 'Static process'], correct: 0},
            {topic: 'Accounting', emoji: '📊💵', question: 'What is double-entry bookkeeping?', options: ['Debit and credit entries', 'Two accountants', 'Bi-annual reports', 'Duplicate records'], correct: 0},
            {topic: 'Marketing', emoji: '📢📱', question: 'What is SEO?', options: ['Search Engine Optimization', 'Sales Efficiency Objective', 'Social Engagement Online', 'Strategic Expense Outline'], correct: 0},
            {topic: 'Finance', emoji: '💰🏦', question: 'What is IPO?', options: ['Initial Public Offering', 'International Profit Objective', 'Internal Process Optimization', 'Investment Portfolio Option'], correct: 0}
        ],
        extreme: [
            {topic: 'Marketing', emoji: '📢📊', question: 'Name the 4 Ps of marketing and explain each', answer: 'Product (what you sell), Price (cost), Place (where), Promotion (how advertise)'},
            {topic: 'Finance', emoji: '💰💵', question: 'Calculate ROI: Investment $10,000, Return $15,000', answer: '50% or ($15,000-$10,000)/$10,000 × 100'},
            {topic: 'Management', emoji: '👔📊', question: 'Name the four functions of management', answer: 'Planning, Organizing, Leading, Controlling'},
            {topic: 'Accounting', emoji: '📊💼', question: 'What is the accounting equation?', answer: 'Assets = Liabilities + Equity'},
            {topic: 'Marketing', emoji: '📢🎯', question: 'Name three digital marketing channels', answer: 'Social media, Email, SEO, PPC, Content marketing (any 3)'},
            {topic: 'Finance', emoji: '💰📈', question: 'Name three financial statements', answer: 'Balance Sheet, Income Statement, Cash Flow Statement'},
            {topic: 'Management', emoji: '👔📋', question: 'What does SMART goals stand for?', answer: 'Specific, Measurable, Achievable, Relevant, Time-bound'},
            {topic: 'Accounting', emoji: '📊💵', question: 'Name three types of business expenses', answer: 'Fixed costs, Variable costs, Operating expenses, Capital expenses (any 3)'},
            {topic: 'Marketing', emoji: '📢📱', question: 'Name three social media platforms for business', answer: 'Facebook, LinkedIn, Instagram, Twitter, TikTok (any 3)'},
            {topic: 'Finance', emoji: '💰🏦', question: 'Name three sources of business funding', answer: 'Bank loans, Investors, Venture capital, Crowdfunding, Grants (any 3)'}
        ]
    },
    2: { // Chapter 2: Entrepreneurship
        easy: [
            {topic: 'Startup', emoji: '🚀💡', question: 'Entrepreneurs start businesses.', options: ['True', 'False'], correct: 0},
            {topic: 'Startup', emoji: '💡🏢', question: 'A business plan is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Innovation', emoji: '🔬💡', question: 'Innovation creates new ideas.', options: ['True', 'False'], correct: 0},
            {topic: 'Startup', emoji: '🚀📈', question: 'Startups can grow fast.', options: ['True', 'False'], correct: 0},
            {topic: 'Risk', emoji: '⚠️💼', question: 'Entrepreneurship involves risk.', options: ['True', 'False'], correct: 0},
            {topic: 'Startup', emoji: '💡🌟', question: 'Most startups need funding.', options: ['True', 'False'], correct: 0},
            {topic: 'Innovation', emoji: '🔬🎯', question: 'Entrepreneurs solve problems.', options: ['True', 'False'], correct: 0},
            {topic: 'Startup', emoji: '🚀💰', question: 'Investors provide capital.', options: ['True', 'False'], correct: 0},
            {topic: 'Risk', emoji: '⚠️📊', question: 'Not all startups succeed.', options: ['True', 'False'], correct: 0},
            {topic: 'Startup', emoji: '💡👥', question: 'Teams are important for startups.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Startup', emoji: '🚀💡', question: 'What is a startup?', options: ['New business venture', 'Established company'], correct: 0},
            {topic: 'Startup', emoji: '💡🏢', question: 'What is a business model?', options: ['How company makes money', 'Company location'], correct: 0},
            {topic: 'Innovation', emoji: '🔬💡', question: 'What is disruptive innovation?', options: ['New market creation', 'Incremental change'], correct: 0},
            {topic: 'Startup', emoji: '🚀📈', question: 'What is bootstrapping?', options: ['Self-funding', 'Bank loan'], correct: 0},
            {topic: 'Risk', emoji: '⚠️💼', question: 'What is risk management?', options: ['Identifying and mitigating risks', 'Ignoring problems'], correct: 0},
            {topic: 'Startup', emoji: '💡🌟', question: 'What is a pitch deck?', options: ['Presentation to investors', 'Product catalog'], correct: 0},
            {topic: 'Innovation', emoji: '🔬🎯', question: 'What is MVP?', options: ['Minimum Viable Product', 'Maximum Value Price'], correct: 0},
            {topic: 'Startup', emoji: '🚀💰', question: 'What is seed funding?', options: ['Early-stage investment', 'Final round'], correct: 0},
            {topic: 'Risk', emoji: '⚠️📊', question: 'What is pivot?', options: ['Change business direction', 'Stay same course'], correct: 0},
            {topic: 'Startup', emoji: '💡👥', question: 'What is co-founder?', options: ['Partner who starts company', 'Employee'], correct: 0}
        ],
        hard: [
            {topic: 'Startup', emoji: '🚀💡', question: 'What is the lean startup methodology?', options: ['Build-measure-learn', 'Plan-execute-finish', 'Research-develop-launch'], correct: 0},
            {topic: 'Startup', emoji: '💡🏢', question: 'What is product-market fit?', options: ['Product satisfies market demand', 'Any product', 'Market research'], correct: 0},
            {topic: 'Innovation', emoji: '🔬💡', question: 'What is blue ocean strategy?', options: ['Uncontested market space', 'Competitive market', 'Price war'], correct: 0},
            {topic: 'Startup', emoji: '🚀📈', question: 'What is unicorn company?', options: ['Startup valued at $1B+', 'Any startup', 'Public company'], correct: 0},
            {topic: 'Risk', emoji: '⚠️💼', question: 'What is burn rate?', options: ['Cash spending rate', 'Revenue growth', 'Profit margin'], correct: 0},
            {topic: 'Startup', emoji: '💡🌟', question: 'What are Series A, B, C funding?', options: ['Investment rounds', 'Company grades', 'Product versions'], correct: 0},
            {topic: 'Innovation', emoji: '🔬🎯', question: 'What is first-mover advantage?', options: ['Benefits of being first', 'Disadvantage', 'No difference'], correct: 0},
            {topic: 'Startup', emoji: '🚀💰', question: 'What is equity dilution?', options: ['Ownership percentage decrease', 'Profit increase', 'Revenue loss'], correct: 0},
            {topic: 'Risk', emoji: '⚠️📊', question: 'What is runway?', options: ['Time until money runs out', 'Growth rate', 'Profit target'], correct: 0},
            {topic: 'Startup', emoji: '💡👥', question: 'What is vesting schedule?', options: ['Equity earned over time', 'Immediate ownership', 'Salary increase'], correct: 0}
        ],
        expert: [
            {topic: 'Startup', emoji: '🚀💡', question: 'What is typical startup failure rate?', options: ['~90%', '10%', '50%', '25%'], correct: 0},
            {topic: 'Startup', emoji: '💡🏢', question: 'What is customer acquisition cost (CAC)?', options: ['Cost to acquire customer', 'Product cost', 'Total revenue', 'Profit margin'], correct: 0},
            {topic: 'Innovation', emoji: '🔬💡', question: "What is the innovator's dilemma?", options: ['Successful companies miss disruptions', 'Too much innovation', 'No innovation', 'Fast innovation'], correct: 0},
            {topic: 'Startup', emoji: '🚀📈', question: 'What is hockey stick growth?', options: ['Exponential growth curve', 'Linear growth', 'Decline', 'Flat'], correct: 0},
            {topic: 'Risk', emoji: '⚠️💼', question: 'What is pivot vs persevere?', options: ['Change or continue decision', 'Always pivot', 'Never change', 'Random choice'], correct: 0},
            {topic: 'Startup', emoji: '💡🌟', question: 'What is typical angel investment amount?', options: ['$25k-$100k', '$1M+', '$1k', '$10M'], correct: 0},
            {topic: 'Innovation', emoji: '🔬🎯', question: 'What is the 10x rule?', options: ['10 times better than competitors', '10% improvement', '10 features', '10 customers'], correct: 0},
            {topic: 'Startup', emoji: '🚀💰', question: 'What is term sheet?', options: ['Investment agreement terms', 'Employee contract', 'Product specs', 'Marketing plan'], correct: 0},
            {topic: 'Risk', emoji: '⚠️📊', question: 'What is pre-money vs post-money valuation?', options: ['Before and after investment', 'Profit measures', 'Time periods', 'Market caps'], correct: 0},
            {topic: 'Startup', emoji: '💡👥', question: 'What is sweat equity?', options: ['Ownership for work', 'Cash investment', 'Borrowed money', 'Salary'], correct: 0}
        ],
        extreme: [
            {topic: 'Startup', emoji: '🚀💡', question: 'Name three key elements of a business plan', answer: 'Executive summary, Market analysis, Financial projections, Strategy (any 3)'},
            {topic: 'Startup', emoji: '💡🏢', question: 'Name three business model types', answer: 'Subscription, Freemium, Marketplace, E-commerce, SaaS (any 3)'},
            {topic: 'Innovation', emoji: '🔬💡', question: 'Name three innovation types', answer: 'Product, Process, Business model, Disruptive (any 3)'},
            {topic: 'Startup', emoji: '🚀📈', question: 'Name three startup growth metrics', answer: 'Revenue, Users, CAC, LTV, Churn rate (any 3)'},
            {topic: 'Risk', emoji: '⚠️💼', question: 'Name three startup risks', answer: 'Market risk, Financial risk, Competition, Execution (any 3)'},
            {topic: 'Startup', emoji: '💡🌟', question: 'Name three funding sources', answer: 'Bootstrapping, Angel investors, VC, Crowdfunding, Grants (any 3)'},
            {topic: 'Innovation', emoji: '🔬🎯', question: 'Name three stages of innovation', answer: 'Ideation, Development, Commercialization'},
            {topic: 'Startup', emoji: '🚀💰', question: 'Calculate valuation: Investment $1M for 20% equity', answer: '$5 million post-money valuation ($1M / 0.20)'},
            {topic: 'Risk', emoji: '⚠️📊', question: 'Name three ways to reduce startup risk', answer: 'Validate market, Start small, Build MVP, Get feedback (any 3)'},
            {topic: 'Startup', emoji: '💡👥', question: 'Name three qualities of successful entrepreneurs', answer: 'Resilience, Vision, Adaptability, Passion, Leadership (any 3)'}
        ]
    },
    3: { // Chapter 3: Human Resources
        easy: [
            {topic: 'HR', emoji: '👥💼', question: 'HR manages employees.', options: ['True', 'False'], correct: 0},
            {topic: 'Recruitment', emoji: '📝🔍', question: 'Interviews help hire people.', options: ['True', 'False'], correct: 0},
            {topic: 'Training', emoji: '📚👨‍🎓', question: 'Training improves skills.', options: ['True', 'False'], correct: 0},
            {topic: 'Benefits', emoji: '💰🏥', question: 'Benefits include health insurance.', options: ['True', 'False'], correct: 0},
            {topic: 'Culture', emoji: '🌟👥', question: 'Company culture matters.', options: ['True', 'False'], correct: 0},
            {topic: 'Performance', emoji: '📊✅', question: 'Performance reviews are important.', options: ['True', 'False'], correct: 0},
            {topic: 'HR', emoji: '👥📋', question: 'HR handles payroll.', options: ['True', 'False'], correct: 0},
            {topic: 'Recruitment', emoji: '📝💼', question: 'Job descriptions attract candidates.', options: ['True', 'False'], correct: 0},
            {topic: 'Training', emoji: '📚💡', question: 'Onboarding helps new employees.', options: ['True', 'False'], correct: 0},
            {topic: 'Benefits', emoji: '💰⏰', question: 'Paid time off is a benefit.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'HR', emoji: '👥💼', question: 'What is human capital?', options: ['Employee value', 'Cash reserves'], correct: 0},
            {topic: 'Recruitment', emoji: '📝🔍', question: 'What is talent acquisition?', options: ['Finding and hiring', 'Firing people'], correct: 0},
            {topic: 'Training', emoji: '📚👨‍🎓', question: 'What is L&D?', options: ['Learning and Development', 'Legal Department'], correct: 0},
            {topic: 'Benefits', emoji: '💰🏥', question: 'What is compensation package?', options: ['Salary plus benefits', 'Salary only'], correct: 0},
            {topic: 'Culture', emoji: '🌟👥', question: 'What is employee engagement?', options: ['Commitment and involvement', 'Just showing up'], correct: 0},
            {topic: 'Performance', emoji: '📊✅', question: 'What is KPI in HR?', options: ['Key Performance Indicator', 'Knowledge Priority Index'], correct: 0},
            {topic: 'HR', emoji: '👥📋', question: 'What is HRIS?', options: ['HR Information System', 'HR Insurance Service'], correct: 0},
            {topic: 'Recruitment', emoji: '📝💼', question: 'What is employer branding?', options: ['Company reputation as employer', 'Product branding'], correct: 0},
            {topic: 'Training', emoji: '📚💡', question: 'What is upskilling?', options: ['Learning new skills', 'Firing employees'], correct: 0},
            {topic: 'Benefits', emoji: '💰⏰', question: 'What is 401k?', options: ['Retirement savings plan', 'Health insurance'], correct: 0}
        ],
        hard: [
            {topic: 'HR', emoji: '👥💼', question: 'What is strategic HRM?', options: ['Align HR with business goals', 'Random hiring', 'No strategy'], correct: 0},
            {topic: 'Recruitment', emoji: '📝🔍', question: 'What is the recruitment funnel?', options: ['Candidate journey stages', 'Interview room', 'Job board'], correct: 0},
            {topic: 'Training', emoji: '📚👨‍🎓', question: 'What is the 70-20-10 learning model?', options: ['70% experience, 20% others, 10% formal', '70% classroom', '70% online'], correct: 0},
            {topic: 'Benefits', emoji: '💰🏥', question: 'What is total rewards?', options: ['All compensation and benefits', 'Salary only', 'Bonuses only'], correct: 0},
            {topic: 'Culture', emoji: '🌟👥', question: 'What is organizational culture?', options: ['Shared values and behaviors', 'Office location', 'Company size'], correct: 0},
            {topic: 'Performance', emoji: '📊✅', question: 'What is 360-degree feedback?', options: ['Feedback from all directions', 'Manager only', 'Self-review only'], correct: 0},
            {topic: 'HR', emoji: '👥📋', question: 'What is succession planning?', options: ['Preparing future leaders', 'Hiring process', 'Firing process'], correct: 0},
            {topic: 'Recruitment', emoji: '📝💼', question: 'What is passive candidate?', options: ['Not actively job seeking', 'Unemployed', 'Entry-level'], correct: 0},
            {topic: 'Training', emoji: '📚💡', question: 'What is competency framework?', options: ['Required skills and behaviors', 'Training schedule', 'Job titles'], correct: 0},
            {topic: 'Benefits', emoji: '💰⏰', question: 'What is flexible benefits?', options: ['Choose your own benefits', 'Fixed package', 'No benefits'], correct: 0}
        ],
        expert: [
            {topic: 'HR', emoji: '👥💼', question: 'What is employee turnover rate?', options: ['Percentage leaving annually', 'Hiring rate', 'Promotion rate', 'Salary increase'], correct: 0},
            {topic: 'Recruitment', emoji: '📝🔍', question: 'What is typical time-to-hire?', options: ['30-45 days', '1 week', '6 months', '1 year'], correct: 0},
            {topic: 'Training', emoji: '📚👨‍🎓', question: 'What is ROI on training?', options: ['Value gained vs cost', 'Training hours', 'Number of courses', 'Attendance rate'], correct: 0},
            {topic: 'Benefits', emoji: '💰🏥', question: 'What percentage of salary is benefits typically?', options: ['~30%', '5%', '90%', '100%'], correct: 0},
            {topic: 'Culture', emoji: '🌟👥', question: 'What is the Great Resignation?', options: ['Mass employee exodus trend', 'Firing wave', 'Retirement age', 'Layoff period'], correct: 0},
            {topic: 'Performance', emoji: '📊✅', question: 'What is forced ranking?', options: ['Rank employees by performance', 'Random assignment', 'Seniority order', 'Alphabetical'], correct: 0},
            {topic: 'HR', emoji: '👥📋', question: 'What is the HR business partner model?', options: ['Strategic HR role', 'Administrative only', 'Outsourced HR', 'No HR'], correct: 0},
            {topic: 'Recruitment', emoji: '📝💼', question: 'What is talent pipeline?', options: ['Pool of potential candidates', 'Interview schedule', 'Job board', 'Office layout'], correct: 0},
            {topic: 'Training', emoji: '📚💡', question: 'What is microlearning?', options: ['Short learning modules', 'Long courses', 'Degree programs', 'No training'], correct: 0},
            {topic: 'Benefits', emoji: '💰⏰', question: 'What is unlimited PTO?', options: ['No fixed vacation days', 'No vacation', '365 days off', '10 days'], correct: 0}
        ],
        extreme: [
            {topic: 'HR', emoji: '👥💼', question: 'Name three HR functions', answer: 'Recruitment, Training, Compensation, Performance, Employee relations (any 3)'},
            {topic: 'Recruitment', emoji: '📝🔍', question: 'Name three recruitment channels', answer: 'Job boards, Referrals, Social media, Recruiters, Career fairs (any 3)'},
            {topic: 'Training', emoji: '📚👨‍🎓', question: 'Name three training methods', answer: 'Classroom, Online, On-the-job, Mentoring, Workshops (any 3)'},
            {topic: 'Benefits', emoji: '💰🏥', question: 'Name three employee benefits', answer: 'Health insurance, Retirement plan, PTO, Bonuses, Stock options (any 3)'},
            {topic: 'Culture', emoji: '🌟👥', question: 'Name three elements of company culture', answer: 'Values, Behaviors, Traditions, Communication, Leadership style (any 3)'},
            {topic: 'Performance', emoji: '📊✅', question: 'Name three performance appraisal methods', answer: 'Self-assessment, 360 feedback, Manager review, Peer review (any 3)'},
            {topic: 'HR', emoji: '👥📋', question: 'Calculate turnover rate: 10 left, 100 average employees', answer: '10% turnover rate (10/100 × 100)'},
            {topic: 'Recruitment', emoji: '📝💼', question: 'Name three interview types', answer: 'Behavioral, Technical, Panel, Phone, Video (any 3)'},
            {topic: 'Training', emoji: '📚💡', question: 'Name three learning styles', answer: 'Visual, Auditory, Kinesthetic, Reading/Writing (any 3)'},
            {topic: 'Benefits', emoji: '💰⏰', question: 'Name three types of leave', answer: 'Vacation, Sick, Parental, Bereavement, Sabbatical (any 3)'}
        ]
    },
    4: { // Chapter 4: Operations Management
        easy: [
            {topic: 'Operations', emoji: '⚙️🏭', question: 'Operations manage production.', options: ['True', 'False'], correct: 0},
            {topic: 'Quality', emoji: '✅🔍', question: 'Quality control checks products.', options: ['True', 'False'], correct: 0},
            {topic: 'Process', emoji: '🔄📊', question: 'Processes improve efficiency.', options: ['True', 'False'], correct: 0},
            {topic: 'Inventory', emoji: '📦🏬', question: 'Inventory is stored goods.', options: ['True', 'False'], correct: 0},
            {topic: 'Operations', emoji: '⚙️💼', question: 'Operations affect costs.', options: ['True', 'False'], correct: 0},
            {topic: 'Quality', emoji: '✅⭐', question: 'Quality matters to customers.', options: ['True', 'False'], correct: 0},
            {topic: 'Process', emoji: '🔄🎯', question: 'Automation speeds up work.', options: ['True', 'False'], correct: 0},
            {topic: 'Inventory', emoji: '📦📊', question: 'Too much inventory costs money.', options: ['True', 'False'], correct: 0},
            {topic: 'Operations', emoji: '⚙️🔧', question: 'Maintenance prevents breakdowns.', options: ['True', 'False'], correct: 0},
            {topic: 'Quality', emoji: '✅📈', question: 'Quality reduces waste.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Operations', emoji: '⚙️🏭', question: 'What is operations management?', options: ['Manage production and delivery', 'Marketing only'], correct: 0},
            {topic: 'Quality', emoji: '✅🔍', question: 'What is TQM?', options: ['Total Quality Management', 'Technical Quality Measure'], correct: 0},
            {topic: 'Process', emoji: '🔄📊', question: 'What is process improvement?', options: ['Making operations better', 'Keeping same'], correct: 0},
            {topic: 'Inventory', emoji: '📦🏬', question: 'What is just-in-time inventory?', options: ['Receive goods as needed', 'Store everything'], correct: 0},
            {topic: 'Operations', emoji: '⚙️💼', question: 'What is capacity planning?', options: ['Determine production capability', 'Random production'], correct: 0},
            {topic: 'Quality', emoji: '✅⭐', question: 'What is ISO certification?', options: ['Quality standard', 'Company name'], correct: 0},
            {topic: 'Process', emoji: '🔄🎯', question: 'What is bottleneck?', options: ['Slowest step in process', 'Fastest step'], correct: 0},
            {topic: 'Inventory', emoji: '📦📊', question: 'What is stockout?', options: ['Running out of inventory', 'Too much stock'], correct: 0},
            {topic: 'Operations', emoji: '⚙️🔧', question: 'What is preventive maintenance?', options: ['Regular upkeep', 'Fix when broken'], correct: 0},
            {topic: 'Quality', emoji: '✅📈', question: 'What is defect rate?', options: ['Percentage of flawed products', 'Total production'], correct: 0}
        ],
        hard: [
            {topic: 'Operations', emoji: '⚙️🏭', question: 'What is lean manufacturing?', options: ['Eliminate waste', 'Maximize inventory', 'Slow production'], correct: 0},
            {topic: 'Quality', emoji: '✅🔍', question: 'What are Six Sigma levels?', options: ['3.4 defects per million', '60% quality', 'No standards'], correct: 0},
            {topic: 'Process', emoji: '🔄📊', question: 'What is business process reengineering?', options: ['Fundamental redesign', 'Minor tweaks', 'No change'], correct: 0},
            {topic: 'Inventory', emoji: '📦🏬', question: 'What is EOQ?', options: ['Economic Order Quantity', 'Extra Order Quality', 'Estimated Output Quota'], correct: 0},
            {topic: 'Operations', emoji: '⚙️💼', question: 'What is throughput?', options: ['Output rate', 'Input rate', 'Waste rate'], correct: 0},
            {topic: 'Quality', emoji: '✅⭐', question: 'What does Kaizen emphasize in operations?', options: ['Continuous improvement', 'One-time fix', 'No change'], correct: 0},
            {topic: 'Process', emoji: '🔄🎯', question: 'What is value stream mapping?', options: ['Visualize process flow', 'Financial planning', 'Marketing tool'], correct: 0},
            {topic: 'Inventory', emoji: '📦📊', question: 'What is safety stock?', options: ['Buffer inventory', 'Damaged goods', 'Oldest stock'], correct: 0},
            {topic: 'Operations', emoji: '⚙️🔧', question: 'What is OEE?', options: ['Overall Equipment Effectiveness', 'Operational Efficiency Estimate', 'Organized Employee Effort'], correct: 0},
            {topic: 'Quality', emoji: '✅📈', question: 'What is Pareto principle in quality?', options: ['80/20 rule for defects', '50/50 split', '100% inspection'], correct: 0}
        ],
        expert: [
            {topic: 'Operations', emoji: '⚙️🏭', question: 'What is theory of constraints?', options: ['Focus on bottlenecks', 'Ignore constraints', 'Equal focus', 'Random approach'], correct: 0},
            {topic: 'Quality', emoji: '✅🔍', question: 'What is DMAIC?', options: ['Define, Measure, Analyze, Improve, Control', 'Design, Make, Assemble, Inspect, Check', 'Data, Model, Apply, Interpret, Complete', 'Develop, Monitor, Act, Implement, Change'], correct: 0},
            {topic: 'Process', emoji: '🔄📊', question: 'What is cycle time?', options: ['Time to complete one unit', 'Daily work hours', 'Monthly output', 'Annual production'], correct: 0},
            {topic: 'Inventory', emoji: '📦🏬', question: 'What is inventory turnover ratio?', options: ['COGS / Average inventory', 'Revenue / Inventory', 'Inventory / Sales', 'Assets / Inventory'], correct: 0},
            {topic: 'Operations', emoji: '⚙️💼', question: 'What is takt time?', options: ['Available time / Customer demand', 'Production time', 'Break time', 'Setup time'], correct: 0},
            {topic: 'Quality', emoji: '✅⭐', question: 'What is cost of quality?', options: ['Prevention, appraisal, failure costs', 'Production cost', 'Labor cost', 'Material cost'], correct: 0},
            {topic: 'Process', emoji: '🔄🎯', question: 'What is kanban system?', options: ['Visual workflow management', 'Inventory software', 'Quality tool', 'HR system'], correct: 0},
            {topic: 'Inventory', emoji: '📦📊', question: 'What is ABC analysis?', options: ['Categorize inventory by value', 'Alphabetical sorting', 'Size classification', 'Color coding'], correct: 0},
            {topic: 'Operations', emoji: '⚙️🔧', question: 'What is 5S methodology?', options: ['Sort, Set, Shine, Standardize, Sustain', '5 supervisors', '5 shifts', '5 suppliers'], correct: 0},
            {topic: 'Quality', emoji: '✅📈', question: 'What is poka-yoke?', options: ['Error-proofing', 'Quality badge', 'Inspection tool', 'Training method'], correct: 0}
        ],
        extreme: [
            {topic: 'Operations', emoji: '⚙️🏭', question: 'Name three types of production systems', answer: 'Job shop, Batch, Mass, Continuous (any 3)'},
            {topic: 'Quality', emoji: '✅🔍', question: 'Name the seven wastes in lean', answer: 'Overproduction, Waiting, Transport, Overprocessing, Inventory, Motion, Defects'},
            {topic: 'Process', emoji: '🔄📊', question: 'Name three process improvement methodologies', answer: 'Lean, Six Sigma, Kaizen, BPR, TQM (any 3)'},
            {topic: 'Inventory', emoji: '📦🏬', question: 'Calculate inventory turnover: COGS $1M, Avg inventory $200K', answer: '5 times ($1M / $200K)'},
            {topic: 'Operations', emoji: '⚙️💼', question: 'Name three capacity strategies', answer: 'Lead, Lag, Match demand'},
            {topic: 'Quality', emoji: '✅⭐', question: 'Name three quality gurus', answer: 'Deming, Juran, Crosby, Ishikawa (any 3)'},
            {topic: 'Process', emoji: '🔄🎯', question: 'Name three types of process layouts', answer: 'Product, Process, Fixed-position, Cellular (any 3)'},
            {topic: 'Inventory', emoji: '📦📊', question: 'Name three inventory costs', answer: 'Holding, Ordering, Shortage costs'},
            {topic: 'Operations', emoji: '⚙️🔧', question: 'Name three maintenance types', answer: 'Preventive, Predictive, Corrective'},
            {topic: 'Quality', emoji: '✅📈', question: 'Name three statistical quality tools', answer: 'Control charts, Pareto charts, Histograms, Fishbone diagrams (any 3)'}
        ]
    },
    5: { // Chapter 5: Supply Chain Management
        easy: [
            {topic: 'Supply Chain', emoji: '🚚📦', question: 'Supply chain moves products.', options: ['True', 'False'], correct: 0},
            {topic: 'Logistics', emoji: '🚛🌍', question: 'Logistics handles transportation.', options: ['True', 'False'], correct: 0},
            {topic: 'Procurement', emoji: '🛒💼', question: 'Procurement buys supplies.', options: ['True', 'False'], correct: 0},
            {topic: 'Warehouse', emoji: '🏭📦', question: 'Warehouses store goods.', options: ['True', 'False'], correct: 0},
            {topic: 'Supply Chain', emoji: '🚚🔗', question: 'Suppliers provide materials.', options: ['True', 'False'], correct: 0},
            {topic: 'Logistics', emoji: '🚛📊', question: 'Delivery time matters.', options: ['True', 'False'], correct: 0},
            {topic: 'Procurement', emoji: '🛒💰', question: 'Buying in bulk saves money.', options: ['True', 'False'], correct: 0},
            {topic: 'Warehouse', emoji: '🏭🔍', question: 'Inventory tracking is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Supply Chain', emoji: '🚚🌐', question: 'Global supply chains are complex.', options: ['True', 'False'], correct: 0},
            {topic: 'Logistics', emoji: '🚛⚡', question: 'Fast shipping is valuable.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Supply Chain', emoji: '🚚📦', question: 'What is supply chain management?', options: ['Flow from supplier to customer', 'Sales only'], correct: 0},
            {topic: 'Logistics', emoji: '🚛🌍', question: 'What is third-party logistics (3PL)?', options: ['Outsourced logistics', 'In-house only'], correct: 0},
            {topic: 'Procurement', emoji: '🛒💼', question: 'What is strategic sourcing?', options: ['Long-term supplier relationships', 'Random buying'], correct: 0},
            {topic: 'Warehouse', emoji: '🏭📦', question: 'What is cross-docking?', options: ['Direct transfer without storage', 'Long-term storage'], correct: 0},
            {topic: 'Supply Chain', emoji: '🚚🔗', question: 'What is vendor management?', options: ['Managing supplier relationships', 'Ignoring suppliers'], correct: 0},
            {topic: 'Logistics', emoji: '🚛📊', question: 'What is last-mile delivery?', options: ['Final delivery to customer', 'First pickup'], correct: 0},
            {topic: 'Procurement', emoji: '🛒💰', question: 'What is RFP?', options: ['Request for Proposal', 'Ready for Payment'], correct: 0},
            {topic: 'Warehouse', emoji: '🏭🔍', question: 'What is WMS?', options: ['Warehouse Management System', 'Worker Management Service'], correct: 0},
            {topic: 'Supply Chain', emoji: '🚚🌐', question: 'What is supply chain visibility?', options: ['Track goods location', 'Hide information'], correct: 0},
            {topic: 'Logistics', emoji: '🚛⚡', question: 'What is expedited shipping?', options: ['Faster delivery', 'Slower delivery'], correct: 0}
        ],
        hard: [
            {topic: 'Supply Chain', emoji: '🚚📦', question: 'What is bullwhip effect?', options: ['Demand amplification upstream', 'Stable demand', 'No variation'], correct: 0},
            {topic: 'Logistics', emoji: '🚛🌍', question: 'What is intermodal transportation?', options: ['Multiple transport modes', 'One mode only'], correct: 0},
            {topic: 'Procurement', emoji: '🛒💼', question: 'What is total cost of ownership?', options: ['All costs over lifetime', 'Purchase price only'], correct: 0},
            {topic: 'Warehouse', emoji: '🏭📦', question: 'What is pick-and-pack?', options: ['Order fulfillment process', 'Storage method'], correct: 0},
            {topic: 'Supply Chain', emoji: '🚚🔗', question: 'What is vertical integration?', options: ['Control multiple supply chain stages', 'Outsource everything'], correct: 0},
            {topic: 'Logistics', emoji: '🚛📊', question: 'What is freight forwarding?', options: ['Coordinate shipments', 'Direct shipping'], correct: 0},
            {topic: 'Procurement', emoji: '🛒💰', question: 'What is e-procurement?', options: ['Online purchasing', 'Paper-based buying'], correct: 0},
            {topic: 'Warehouse', emoji: '🏭🔍', question: 'What is FIFO vs LIFO?', options: ['First-In-First-Out vs Last-In-First-Out', 'Same thing'], correct: 0},
            {topic: 'Supply Chain', emoji: '🚚🌐', question: 'What is supply chain resilience?', options: ['Ability to recover from disruptions', 'No disruptions'], correct: 0},
            {topic: 'Logistics', emoji: '🚛⚡', question: 'What is reverse logistics?', options: ['Returns and recycling', 'Forward shipping'], correct: 0}
        ],
        expert: [
            {topic: 'Supply Chain', emoji: '🚚📦', question: 'What is the SCOR model?', options: ['Supply Chain Operations Reference', 'Supply Cost Optimization Rate', 'Standard Chain Order Review', 'Strategic Coordination Resource'], correct: 0},
            {topic: 'Logistics', emoji: '🚛🌍', question: 'What is typical logistics cost as % of sales?', options: ['5-10%', '50%', '1%', '90%'], correct: 0},
            {topic: 'Procurement', emoji: '🛒💼', question: 'What is spend analysis?', options: ['Analyze purchasing data', 'Sales analysis', 'Profit calculation', 'Revenue tracking'], correct: 0},
            {topic: 'Warehouse', emoji: '🏭📦', question: 'What is slotting optimization?', options: ['Optimal product placement', 'Random storage', 'Alphabetical order', 'Size sorting'], correct: 0},
            {topic: 'Supply Chain', emoji: '🚚🔗', question: 'What is demand forecasting accuracy target?', options: ['85-95%', '10%', '50%', '100%'], correct: 0},
            {topic: 'Logistics', emoji: '🚛📊', question: 'What is zone skipping?', options: ['Bypass distribution centers', 'Skip deliveries', 'Zone charging', 'Area expansion'], correct: 0},
            {topic: 'Procurement', emoji: '🛒💰', question: 'What is supplier scorecarding?', options: ['Evaluate supplier performance', 'Random selection', 'Pricing only', 'No evaluation'], correct: 0},
            {topic: 'Warehouse', emoji: '🏭🔍', question: 'What is cycle counting?', options: ['Continuous inventory audit', 'Annual count', 'No counting', 'Daily production'], correct: 0},
            {topic: 'Supply Chain', emoji: '🚚🌐', question: 'What is supply chain digitalization?', options: ['Use of digital technologies', 'Paper processes', 'No technology', 'Manual only'], correct: 0},
            {topic: 'Logistics', emoji: '🚛⚡', question: 'What is milk run logistics?', options: ['Regular route pickups', 'Dairy delivery', 'One-time shipment', 'Random routes'], correct: 0}
        ],
        extreme: [
            {topic: 'Supply Chain', emoji: '🚚📦', question: 'Name three supply chain strategies', answer: 'Lean, Agile, Hybrid, Postponement (any 3)'},
            {topic: 'Logistics', emoji: '🚛🌍', question: 'Name three modes of transportation', answer: 'Truck, Rail, Ship, Air, Pipeline (any 3)'},
            {topic: 'Procurement', emoji: '🛒💼', question: 'Name three procurement strategies', answer: 'Single sourcing, Multiple sourcing, Global sourcing, Local sourcing (any 3)'},
            {topic: 'Warehouse', emoji: '🏭📦', question: 'Name three warehouse operations', answer: 'Receiving, Putaway, Picking, Packing, Shipping (any 3)'},
            {topic: 'Supply Chain', emoji: '🚚🔗', question: 'Name three supply chain risks', answer: 'Disruption, Demand variability, Supplier failure, Natural disasters (any 3)'},
            {topic: 'Logistics', emoji: '🚛📊', question: 'Name three logistics KPIs', answer: 'On-time delivery, Cost per shipment, Order accuracy, Transit time (any 3)'},
            {topic: 'Procurement', emoji: '🛒💰', question: 'Name three procurement documents', answer: 'PO, RFQ, RFP, Invoice, Contract (any 3)'},
            {topic: 'Warehouse', emoji: '🏭🔍', question: 'Name three inventory valuation methods', answer: 'FIFO, LIFO, Weighted average'},
            {topic: 'Supply Chain', emoji: '🚚🌐', question: 'Name three supply chain technologies', answer: 'RFID, Blockchain, AI, IoT, Automation (any 3)'},
            {topic: 'Logistics', emoji: '🚛⚡', question: 'Name three shipping incoterms', answer: 'FOB, CIF, EXW, DDP, FCA (any 3)'}
        ]
    },
    6: { // Chapter 6: Strategic Planning
        easy: [
            {topic: 'Strategy', emoji: '🎯📋', question: 'Strategy guides business direction.', options: ['True', 'False'], correct: 0},
            {topic: 'Vision', emoji: '🔮✨', question: 'Vision describes future goals.', options: ['True', 'False'], correct: 0},
            {topic: 'Mission', emoji: '🎯💼', question: 'Mission explains company purpose.', options: ['True', 'False'], correct: 0},
            {topic: 'Goals', emoji: '🏆📊', question: 'Goals should be specific.', options: ['True', 'False'], correct: 0},
            {topic: 'Strategy', emoji: '🎯🗺️', question: 'Planning prevents problems.', options: ['True', 'False'], correct: 0},
            {topic: 'Analysis', emoji: '📊🔍', question: 'Analysis helps make decisions.', options: ['True', 'False'], correct: 0},
            {topic: 'Competition', emoji: '🏆⚔️', question: 'Competitors affect strategy.', options: ['True', 'False'], correct: 0},
            {topic: 'Growth', emoji: '📈🚀', question: 'Growth strategies expand business.', options: ['True', 'False'], correct: 0},
            {topic: 'Strategy', emoji: '🎯💡', question: 'Strategy requires resources.', options: ['True', 'False'], correct: 0},
            {topic: 'Implementation', emoji: '⚙️✅', question: 'Execution matters as much as planning.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Strategy', emoji: '🎯📋', question: 'What is strategic planning?', options: ['Define long-term direction', 'Daily operations'], correct: 0},
            {topic: 'Vision', emoji: '🔮✨', question: 'What is a vision statement?', options: ['Future aspiration', 'Current state'], correct: 0},
            {topic: 'Mission', emoji: '🎯💼', question: 'What is a mission statement?', options: ['Core purpose and values', 'Product list'], correct: 0},
            {topic: 'Goals', emoji: '🏆📊', question: 'What are SMART goals?', options: ['Specific, Measurable, Achievable, Relevant, Time-bound', 'Simple goals'], correct: 0},
            {topic: 'Strategy', emoji: '🎯🗺️', question: 'What is strategic fit?', options: ['Alignment of strategy and resources', 'Random plan'], correct: 0},
            {topic: 'Analysis', emoji: '📊🔍', question: 'What does SWOT stand for in strategic planning?', options: ['Strengths, Weaknesses, Opportunities, Threats', 'Sales analysis'], correct: 0},
            {topic: 'Competition', emoji: '🏆⚔️', question: 'What is competitive advantage?', options: ['Superior position vs rivals', 'Being average'], correct: 0},
            {topic: 'Growth', emoji: '📈🚀', question: 'What is market penetration?', options: ['Increase share in current market', 'Enter new market'], correct: 0},
            {topic: 'Strategy', emoji: '🎯💡', question: 'What is differentiation strategy?', options: ['Unique product or service', 'Copy competitors'], correct: 0},
            {topic: 'Implementation', emoji: '⚙️✅', question: 'What is strategic execution?', options: ['Putting strategy into action', 'Just planning'], correct: 0}
        ],
        hard: [
            {topic: 'Strategy', emoji: '🎯📋', question: "What is Porter's Five Forces?", options: ['Industry competition analysis', 'Employee model', 'Marketing tool'], correct: 0},
            {topic: 'Vision', emoji: '🔮✨', question: 'What is strategic intent?', options: ['Ambitious long-term goal', 'Short-term target'], correct: 0},
            {topic: 'Mission', emoji: '🎯💼', question: 'What is value proposition?', options: ['Benefits offered to customers', 'Company values'], correct: 0},
            {topic: 'Goals', emoji: '🏆📊', question: 'What is stretch goal?', options: ['Ambitious challenging target', 'Easy objective'], correct: 0},
            {topic: 'Strategy', emoji: '🎯🗺️', question: 'What does blue ocean strategy aim to create?', options: ['Create uncontested market', 'Compete in existing market'], correct: 0},
            {topic: 'Analysis', emoji: '📊🔍', question: 'What is PESTEL analysis?', options: ['Political, Economic, Social, Tech, Environmental, Legal', 'Product evaluation'], correct: 0},
            {topic: 'Competition', emoji: '🏆⚔️', question: 'What is benchmarking?', options: ['Compare with best practices', 'Ignore competitors'], correct: 0},
            {topic: 'Growth', emoji: '📈🚀', question: 'What is Ansoff Matrix?', options: ['Growth strategies framework', 'Organization chart'], correct: 0},
            {topic: 'Strategy', emoji: '🎯💡', question: 'What is cost leadership?', options: ['Lowest cost producer', 'Premium pricing'], correct: 0},
            {topic: 'Implementation', emoji: '⚙️✅', question: 'What is balanced scorecard?', options: ['Performance measurement system', 'Financial statement'], correct: 0}
        ],
        expert: [
            {topic: 'Strategy', emoji: '🎯📋', question: 'What is strategic drift?', options: ['Strategy becomes outdated', 'Perfect alignment', 'No change', 'Fast adaptation'], correct: 0},
            {topic: 'Vision', emoji: '🔮✨', question: 'What is BHAG?', options: ['Big Hairy Audacious Goal', 'Basic Health And Growth', 'Business Handling Annual Gains', 'Brand Helping Achieve Growth'], correct: 0},
            {topic: 'Mission', emoji: '🎯💼', question: 'What is core competency?', options: ['Unique organizational capability', 'Any skill', 'Basic function', 'No specialty'], correct: 0},
            {topic: 'Goals', emoji: '🏆📊', question: 'What is OKR framework?', options: ['Objectives and Key Results', 'Operational Key Ratios', 'Organized Knowledge Resources', 'Overall Knowledge Review'], correct: 0},
            {topic: 'Strategy', emoji: '🎯🗺️', question: 'What is scenario planning?', options: ['Prepare for multiple futures', 'Single prediction', 'No planning', 'Random approach'], correct: 0},
            {topic: 'Analysis', emoji: '📊🔍', question: 'What is value chain analysis?', options: ['Examine activity value creation', 'Supply chain only', 'Cost cutting', 'Revenue focus'], correct: 0},
            {topic: 'Competition', emoji: '🏆⚔️', question: 'What benefits come from first-mover advantage?', options: ['Benefits of market entry first', 'Disadvantage', 'Timing irrelevant', 'Last is best'], correct: 0},
            {topic: 'Growth', emoji: '📈🚀', question: 'What is organic vs inorganic growth?', options: ['Internal vs acquisition', 'Natural products', 'Food industry', 'No difference'], correct: 0},
            {topic: 'Strategy', emoji: '🎯💡', question: 'What is strategic alliance?', options: ['Partnership for mutual benefit', 'Competition', 'Acquisition', 'No relationship'], correct: 0},
            {topic: 'Implementation', emoji: '⚙️✅', question: 'What percentage of strategies fail in execution?', options: ['~70%', '10%', '0%', '100%'], correct: 0}
        ],
        extreme: [
            {topic: 'Strategy', emoji: '🎯📋', question: 'Name three levels of strategy', answer: 'Corporate, Business, Functional'},
            {topic: 'Vision', emoji: '🔮✨', question: 'Name three characteristics of good vision', answer: 'Clear, Inspiring, Future-focused, Achievable (any 3)'},
            {topic: 'Mission', emoji: '🎯💼', question: 'Name three elements of mission statement', answer: 'Purpose, Values, What we do, Who we serve (any 3)'},
            {topic: 'Goals', emoji: '🏆📊', question: 'Name the five SMART criteria', answer: 'Specific, Measurable, Achievable, Relevant, Time-bound'},
            {topic: 'Strategy', emoji: '🎯🗺️', question: "Name Porter's three generic strategies", answer: 'Cost leadership, Differentiation, Focus'},
            {topic: 'Analysis', emoji: '📊🔍', question: 'Name the four quadrants of SWOT', answer: 'Strengths, Weaknesses, Opportunities, Threats'},
            {topic: 'Competition', emoji: '🏆⚔️', question: 'Name three types of competitive advantage', answer: 'Cost, Differentiation, Speed, Quality, Service (any 3)'},
            {topic: 'Growth', emoji: '📈🚀', question: 'Name four growth strategies in Ansoff Matrix', answer: 'Market penetration, Market development, Product development, Diversification'},
            {topic: 'Strategy', emoji: '🎯💡', question: 'Name three strategic options', answer: 'Growth, Stability, Retrenchment'},
            {topic: 'Implementation', emoji: '⚙️✅', question: 'Name three barriers to strategy execution', answer: 'Resistance to change, Poor communication, Lack of resources, Unclear goals (any 3)'}
        ]
    },
};
