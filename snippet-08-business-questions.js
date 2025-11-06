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
            {topic: 'Innovation', emoji: '🔬💡', question: 'What is the innovator's dilemma?', options: ['Successful companies miss disruptions', 'Too much innovation', 'No innovation', 'Fast innovation'], correct: 0},
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
            {topic: 'Strategy', emoji: '🎯📋', question: 'What is Porter's Five Forces?', options: ['Industry competition analysis', 'Employee model', 'Marketing tool'], correct: 0},
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
            {topic: 'Strategy', emoji: '🎯🗺️', question: 'Name Porter's three generic strategies', answer: 'Cost leadership, Differentiation, Focus'},
            {topic: 'Analysis', emoji: '📊🔍', question: 'Name the four quadrants of SWOT', answer: 'Strengths, Weaknesses, Opportunities, Threats'},
            {topic: 'Competition', emoji: '🏆⚔️', question: 'Name three types of competitive advantage', answer: 'Cost, Differentiation, Speed, Quality, Service (any 3)'},
            {topic: 'Growth', emoji: '📈🚀', question: 'Name four growth strategies in Ansoff Matrix', answer: 'Market penetration, Market development, Product development, Diversification'},
            {topic: 'Strategy', emoji: '🎯💡', question: 'Name three strategic options', answer: 'Growth, Stability, Retrenchment'},
            {topic: 'Implementation', emoji: '⚙️✅', question: 'Name three barriers to strategy execution', answer: 'Resistance to change, Poor communication, Lack of resources, Unclear goals (any 3)'}
        ]
    },
    7: { // Chapter 7: Business Ethics
        easy: [
            {topic: 'Ethics', emoji: '⚖️💼', question: 'Ethics guide right and wrong.', options: ['True', 'False'], correct: 0},
            {topic: 'Compliance', emoji: '📋✅', question: 'Companies must follow laws.', options: ['True', 'False'], correct: 0},
            {topic: 'Honesty', emoji: '🤝💚', question: 'Honesty builds trust.', options: ['True', 'False'], correct: 0},
            {topic: 'Responsibility', emoji: '🎯🌍', question: 'Businesses have social responsibility.', options: ['True', 'False'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🏢', question: 'Ethical behavior is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Transparency', emoji: '🔍📊', question: 'Transparency means being open.', options: ['True', 'False'], correct: 0},
            {topic: 'Fairness', emoji: '⚖️👥', question: 'Fair treatment matters.', options: ['True', 'False'], correct: 0},
            {topic: 'Integrity', emoji: '💎✨', question: 'Integrity means doing the right thing.', options: ['True', 'False'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️📜', question: 'Codes of conduct set standards.', options: ['True', 'False'], correct: 0},
            {topic: 'Accountability', emoji: '👤📊', question: 'People should be accountable.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ethics', emoji: '⚖️💼', question: 'What is business ethics?', options: ['Moral principles in business', 'Any practice'], correct: 0},
            {topic: 'Compliance', emoji: '📋✅', question: 'What is regulatory compliance?', options: ['Following government rules', 'Ignoring rules'], correct: 0},
            {topic: 'Honesty', emoji: '🤝💚', question: 'What is fiduciary duty?', options: ['Legal obligation to act in best interest', 'No obligation'], correct: 0},
            {topic: 'Responsibility', emoji: '🎯🌍', question: 'What is CSR?', options: ['Corporate Social Responsibility', 'Company Sales Report'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🏢', question: 'What is ethical dilemma?', options: ['Conflict between moral choices', 'Easy decision'], correct: 0},
            {topic: 'Transparency', emoji: '🔍📊', question: 'What is disclosure?', options: ['Revealing information', 'Hiding facts'], correct: 0},
            {topic: 'Fairness', emoji: '⚖️👥', question: 'What is equal opportunity?', options: ['Fair access for all', 'Discrimination'], correct: 0},
            {topic: 'Integrity', emoji: '💎✨', question: 'What is whistleblowing?', options: ['Reporting wrongdoing', 'Staying silent'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️📜', question: 'What is code of ethics?', options: ['Written moral guidelines', 'No guidelines'], correct: 0},
            {topic: 'Accountability', emoji: '👤📊', question: 'What is corporate governance?', options: ['System of rules and practices', 'No oversight'], correct: 0}
        ],
        hard: [
            {topic: 'Ethics', emoji: '⚖️💼', question: 'What is stakeholder theory?', options: ['Consider all affected parties', 'Shareholders only'], correct: 0},
            {topic: 'Compliance', emoji: '📋✅', question: 'What is Sarbanes-Oxley Act?', options: ['Financial reporting law', 'Employment law'], correct: 0},
            {topic: 'Honesty', emoji: '🤝💚', question: 'What is conflict of interest?', options: ['Personal interest conflicts with duty', 'No conflict'], correct: 0},
            {topic: 'Responsibility', emoji: '🎯🌍', question: 'What is triple bottom line?', options: ['People, Planet, Profit', 'Profit only'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🏢', question: 'What is moral hazard?', options: ['Risk-taking without consequences', 'Ethical behavior'], correct: 0},
            {topic: 'Transparency', emoji: '🔍📊', question: 'What is GAAP principle?', options: ['Accounting transparency standards', 'Business strategy'], correct: 0},
            {topic: 'Fairness', emoji: '⚖️👥', question: 'What is pay equity?', options: ['Equal pay for equal work', 'Unequal pay'], correct: 0},
            {topic: 'Integrity', emoji: '💎✨', question: 'What is ethical leadership?', options: ['Lead by moral example', 'Ignore ethics'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️📜', question: 'What is ethical sourcing?', options: ['Responsible procurement', 'Any supplier'], correct: 0},
            {topic: 'Accountability', emoji: '👤📊', question: 'What is board of directors role?', options: ['Oversee management', 'No oversight'], correct: 0}
        ],
        expert: [
            {topic: 'Ethics', emoji: '⚖️💼', question: 'What is utilitarian ethics?', options: ['Greatest good for greatest number', 'Individual rights', 'Duty-based', 'Virtue-based'], correct: 0},
            {topic: 'Compliance', emoji: '📋✅', question: 'What is FCPA?', options: ['Foreign Corrupt Practices Act', 'Financial Compliance Protection Act', 'Federal Corporate Policy Act', 'Fair Competition Procedures Act'], correct: 0},
            {topic: 'Honesty', emoji: '🤝💚', question: 'What is materiality in disclosure?', options: ['Information significance', 'Material goods', 'Physical assets', 'No importance'], correct: 0},
            {topic: 'Responsibility', emoji: '🎯🌍', question: 'What is ESG?', options: ['Environmental, Social, Governance', 'Economic Strategy Guide', 'Employee Safety Guidelines', 'Earnings, Sales, Growth'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🏢', question: 'What is ethical relativism?', options: ['Ethics vary by culture', 'Universal ethics', 'No ethics', 'Absolute rules'], correct: 0},
            {topic: 'Transparency', emoji: '🔍📊', question: 'What is audit independence?', options: ['Auditor objectivity', 'Audit dependence', 'No audits', 'Biased review'], correct: 0},
            {topic: 'Fairness', emoji: '⚖️👥', question: 'What is distributive justice?', options: ['Fair allocation of resources', 'Unequal distribution', 'Random allocation', 'No fairness'], correct: 0},
            {topic: 'Integrity', emoji: '💎✨', question: 'What is ethical climate?', options: ['Organizational moral culture', 'Weather conditions', 'Physical environment', 'No culture'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️📜', question: 'What is greenwashing?', options: ['Misleading environmental claims', 'Eco-friendly practice', 'Cleaning service', 'No claims'], correct: 0},
            {topic: 'Accountability', emoji: '👤📊', question: 'What is clawback provision?', options: ['Recover executive compensation', 'Give more pay', 'No provisions', 'Bonus guarantee'], correct: 0}
        ],
        extreme: [
            {topic: 'Ethics', emoji: '⚖️💼', question: 'Name three ethical theories', answer: 'Utilitarianism, Deontology, Virtue ethics, Rights-based (any 3)'},
            {topic: 'Compliance', emoji: '📋✅', question: 'Name three major business regulations', answer: 'SOX, FCPA, GDPR, Anti-trust, Labor laws (any 3)'},
            {topic: 'Honesty', emoji: '🤝💚', question: 'Name three types of fraud', answer: 'Financial, Identity, Securities, Insurance, Tax (any 3)'},
            {topic: 'Responsibility', emoji: '🎯🌍', question: 'Name the three pillars of CSR', answer: 'Economic, Social, Environmental responsibility'},
            {topic: 'Ethics', emoji: '⚖️🏢', question: 'Name three ethical decision-making steps', answer: 'Identify issue, Consider stakeholders, Evaluate options, Decide, Reflect (any 3)'},
            {topic: 'Transparency', emoji: '🔍📊', question: 'Name three transparency practices', answer: 'Financial disclosure, Open communication, Audit trails, Reporting (any 3)'},
            {topic: 'Fairness', emoji: '⚖️👥', question: 'Name three diversity dimensions', answer: 'Race, Gender, Age, Disability, Religion (any 3)'},
            {topic: 'Integrity', emoji: '💎✨', question: 'Name three whistleblower protections', answer: 'Anti-retaliation, Anonymity, Legal protection'},
            {topic: 'Ethics', emoji: '⚖️📜', question: 'Name three elements of ethics program', answer: 'Code of conduct, Training, Hotline, Enforcement (any 3)'}, 
,
    8: { // Chapter 8: E-commerce
        easy: [
            {topic: 'Online', emoji: '💻🛒', question: 'E-commerce is online shopping.', options: ['True', 'False'], correct: 0},
            {topic: 'Website', emoji: '🌐🏬', question: 'Websites sell products.', options: ['True', 'False'], correct: 0},
            {topic: 'Payment', emoji: '💳💰', question: 'Credit cards work online.', options: ['True', 'False'], correct: 0},
            {topic: 'Shipping', emoji: '📦🚚', question: 'Products are shipped to customers.', options: ['True', 'False'], correct: 0},
            {topic: 'Online', emoji: '💻📱', question: 'Mobile apps enable shopping.', options: ['True', 'False'], correct: 0},
            {topic: 'Marketing', emoji: '📢💻', question: 'Digital ads reach customers.', options: ['True', 'False'], correct: 0},
            {topic: 'Customer', emoji: '👤⭐', question: 'Reviews influence purchases.', options: ['True', 'False'], correct: 0},
            {topic: 'Security', emoji: '🔒💻', question: 'Online security is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Online', emoji: '💻🌍', question: 'E-commerce is global.', options: ['True', 'False'], correct: 0},
            {topic: 'Convenience', emoji: '⏰🛒', question: 'Online shopping is convenient.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Online', emoji: '💻🛒', question: 'What is B2C e-commerce?', options: ['Business to Consumer', 'Business to Business'], correct: 0},
            {topic: 'Website', emoji: '🌐🏬', question: 'What is shopping cart?', options: ['Virtual basket for items', 'Physical cart'], correct: 0},
            {topic: 'Payment', emoji: '💳💰', question: 'What is payment gateway?', options: ['Processes online payments', 'Physical gate'], correct: 0},
            {topic: 'Shipping', emoji: '📦🚚', question: 'What is fulfillment?', options: ['Process orders and ship', 'Cancel orders'], correct: 0},
            {topic: 'Online', emoji: '💻📱', question: 'What is m-commerce?', options: ['Mobile commerce', 'Mail commerce'], correct: 0},
            {topic: 'Marketing', emoji: '📢💻', question: 'What is conversion rate?', options: ['Visitors who buy', 'All visitors'], correct: 0},
            {topic: 'Customer', emoji: '👤⭐', question: 'What is user experience (UX)?', options: ['How users interact with site', 'Product features'], correct: 0},
            {topic: 'Security', emoji: '🔒💻', question: 'What is SSL certificate?', options: ['Secure connection encryption', 'Business license'], correct: 0},
            {topic: 'Online', emoji: '💻🌍', question: 'What is dropshipping?', options: ['Seller doesn\'t hold inventory', 'Own warehouse'], correct: 0},
            {topic: 'Convenience', emoji: '⏰🛒', question: 'What is one-click checkout?', options: ['Fast purchase process', 'Multiple steps'], correct: 0}
        ],
        hard: [
            {topic: 'Online', emoji: '💻🛒', question: 'What is omnichannel retail?', options: ['Integrated multi-channel', 'Online only'], correct: 0},
            {topic: 'Website', emoji: '🌐🏬', question: 'What is responsive design?', options: ['Adapts to device size', 'Fixed layout'], correct: 0},
            {topic: 'Payment', emoji: '💳💰', question: 'What is PCI DSS?', options: ['Payment security standard', 'Payment type'], correct: 0},
            {topic: 'Shipping', emoji: '📦🚚', question: 'What is real-time inventory?', options: ['Live stock updates', 'Monthly count'], correct: 0},
            {topic: 'Online', emoji: '💻📱', question: 'What is progressive web app?', options: ['Web app like mobile app', 'Traditional website'], correct: 0},
            {topic: 'Marketing', emoji: '📢💻', question: 'What is retargeting?', options: ['Show ads to previous visitors', 'New customers only'], correct: 0},
            {topic: 'Customer', emoji: '👤⭐', question: 'What is customer journey mapping?', options: ['Visualize buyer experience', 'Product catalog'], correct: 0},
            {topic: 'Security', emoji: '🔒💻', question: 'What is two-factor authentication?', options: ['Extra security layer', 'One password'], correct: 0},
            {topic: 'Online', emoji: '💻🌍', question: 'What is marketplace model?', options: ['Platform for multiple sellers', 'Single seller'], correct: 0},
            {topic: 'Convenience', emoji: '⏰🛒', question: 'What is subscription commerce?', options: ['Recurring automatic orders', 'One-time purchase'], correct: 0}
        ],
        expert: [
            {topic: 'Online', emoji: '💻🛒', question: 'What is typical e-commerce conversion rate?', options: ['2-3%', '50%', '90%', '0.1%'], correct: 0},
            {topic: 'Website', emoji: '🌐🏬', question: 'What is A/B testing?', options: ['Compare two versions', 'Single test', 'No testing', 'Random change'], correct: 0},
            {topic: 'Payment', emoji: '💳💰', question: 'What is chargeback?', options: ['Reversed payment', 'Extra charge', 'Discount', 'Bonus'], correct: 0},
            {topic: 'Shipping', emoji: '📦🚚', question: 'What is cross-border e-commerce challenge?', options: ['Customs and regulations', 'Domestic shipping', 'No issues', 'Simple process'], correct: 0},
            {topic: 'Online', emoji: '💻📱', question: 'What percentage of e-commerce is mobile?', options: ['~60-70%', '10%', '1%', '99%'], correct: 0},
            {topic: 'Marketing', emoji: '📢💻', question: 'What is CAC in e-commerce?', options: ['Customer Acquisition Cost', 'Computer Access Code', 'Central Admin Console', 'Customer Account Center'], correct: 0},
            {topic: 'Customer', emoji: '👤⭐', question: 'What is cart abandonment rate?', options: ['~70% average', '10%', '0%', '100%'], correct: 0},
            {topic: 'Security', emoji: '🔒💻', question: 'What is GDPR?', options: ['Data protection regulation', 'Payment method', 'Shipping rule', 'Marketing tool'], correct: 0},
            {topic: 'Online', emoji: '💻🌍', question: 'What is headless commerce?', options: ['Separate frontend and backend', 'Traditional setup', 'No interface', 'Single system'], correct: 0},
            {topic: 'Convenience', emoji: '⏰🛒', question: 'What is average delivery expectation?', options: ['2-3 days', '1 month', '1 year', '1 hour'], correct: 0}
        ],
        extreme: [
            {topic: 'Online', emoji: '💻🛒', question: 'Name three e-commerce business models', answer: 'B2C, B2B, C2C, D2C, Marketplace (any 3)'},
            {topic: 'Website', emoji: '🌐🏬', question: 'Name three website optimization techniques', answer: 'Speed, Mobile, SEO, UX, Security (any 3)'},
            {topic: 'Payment', emoji: '💳💰', question: 'Name three payment methods', answer: 'Credit card, PayPal, Digital wallet, COD, Crypto (any 3)'},
            {topic: 'Shipping', emoji: '📦🚚', question: 'Name three shipping options', answer: 'Standard, Express, Same-day, Free, International (any 3)'},
            {topic: 'Online', emoji: '💻📱', question: 'Name three mobile commerce features', answer: 'App, Mobile wallet, Push notifications, Location-based (any 3)'},
            {topic: 'Marketing', emoji: '📢💻', question: 'Name three key digital marketing channels', answer: 'SEO, PPC, Email, Social media, Content (any 3)'},
            {topic: 'Customer', emoji: '👤⭐', question: 'Name three ways to reduce cart abandonment', answer: 'Simplify checkout, Show costs, Save cart, Email reminders (any 3)'},
            {topic: 'Security', emoji: '🔒💻', question: 'Name three security measures', answer: 'SSL, 2FA, Encryption, Fraud detection, Compliance (any 3)'},
            {topic: 'Online', emoji: '💻🌍', question: 'Name three major e-commerce platforms', answer: 'Shopify, WooCommerce, Magento, BigCommerce (any 3)'},
            {topic: 'Convenience', emoji: '⏰🛒', question: 'Name three customer service channels', answer: 'Chat, Email, Phone, Social media, FAQ (any 3)'}
        ]
    }
,
    9: { // Chapter 9: International Business  
        easy: [
            {topic: 'Global', emoji: '🌍💼', question: 'International business crosses borders.', options: ['True', 'False'], correct: 0},
            {topic: 'Trade', emoji: '🚢📦', question: 'Countries trade with each other.', options: ['True', 'False'], correct: 0},
            {topic: 'Currency', emoji: '💱💵', question: 'Different countries use different currencies.', options: ['True', 'False'], correct: 0},
            {topic: 'Culture', emoji: '🌏🤝', question: 'Culture affects business.', options: ['True', 'False'], correct: 0},
            {topic: 'Global', emoji: '🌍🏢', question: 'Global companies operate worldwide.', options: ['True', 'False'], correct: 0},
            {topic: 'Export', emoji: '📤🌐', question: 'Exports are goods sold abroad.', options: ['True', 'False'], correct: 0},
            {topic: 'Import', emoji: '📥🌍', question: 'Imports are goods bought from abroad.', options: ['True', 'False'], correct: 0},
            {topic: 'Market', emoji: '🌐💹', question: 'Foreign markets offer opportunities.', options: ['True', 'False'], correct: 0},
            {topic: 'Global', emoji: '🌍✈️', question: 'Travel connects global business.', options: ['True', 'False'], correct: 0},
            {topic: 'Language', emoji: '🗣️🌏', question: 'Language barriers exist internationally.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Global', emoji: '🌍💼', question: 'What is globalization?', options: ['Worldwide economic integration', 'Local business only'], correct: 0},
            {topic: 'Trade', emoji: '🚢📦', question: 'What is free trade?', options: ['Trade without barriers', 'No trade allowed'], correct: 0},
            {topic: 'Currency', emoji: '💱💵', question: 'What is exchange rate?', options: ['Currency conversion value', 'Interest rate'], correct: 0},
            {topic: 'Culture', emoji: '🌏🤝', question: 'What is cultural intelligence?', options: ['Ability to work across cultures', 'Language skills only'], correct: 0},
            {topic: 'Global', emoji: '🌍🏢', question: 'What is multinational corporation?', options: ['Company in multiple countries', 'Local business'], correct: 0},
            {topic: 'Export', emoji: '📤🌐', question: 'What is export subsidy?', options: ['Government support for exports', 'Tax on exports'], correct: 0},
            {topic: 'Import', emoji: '📥🌍', question: 'What is tariff?', options: ['Tax on imports', 'Import permission'], correct: 0},
            {topic: 'Market', emoji: '🌐💹', question: 'What is market entry?', options: ['Entering foreign market', 'Leaving market'], correct: 0},
            {topic: 'Global', emoji: '🌍✈️', question: 'What is expatriate?', options: ['Employee working abroad', 'Tourist'], correct: 0},
            {topic: 'Language', emoji: '🗣️🌏', question: 'What is lingua franca?', options: ['Common business language', 'Native language'], correct: 0}
        ],
        hard: [
            {topic: 'Global', emoji: '🌍💼', question: 'What is GLOCAL strategy?', options: ['Think global, act local', 'Global only', 'Local only'], correct: 0},
            {topic: 'Trade', emoji: '🚢📦', question: 'What is WTO?', options: ['World Trade Organization', 'World Tourism Office', 'Worldwide Tax Office'], correct: 0},
            {topic: 'Currency', emoji: '💱💵', question: 'What is currency hedging?', options: ['Protect against exchange rate risk', 'Currency trading', 'No protection'], correct: 0},
            {topic: 'Culture', emoji: '🌏🤝', question: 'What is Hofstede dimensions?', options: ['Cultural value framework', 'Business model', 'Trade agreement'], correct: 0},
            {topic: 'Global', emoji: '🌍🏢', question: 'What is joint venture?', options: ['Partnership with local company', 'Solo operation', 'Acquisition'], correct: 0},
            {topic: 'Export', emoji: '📤🌐', question: 'What is letter of credit?', options: ['Payment guarantee', 'Export license', 'Trade agreement'], correct: 0},
            {topic: 'Import', emoji: '📥🌍', question: 'What is quota?', options: ['Import quantity limit', 'Quality standard', 'Price control'], correct: 0},
            {topic: 'Market', emoji: '🌐💹', question: 'What is franchising?', options: ['License business model', 'Direct investment', 'Export only'], correct: 0},
            {topic: 'Global', emoji: '🌍✈️', question: 'What is repatriation?', options: ['Return employee to home country', 'Send abroad', 'Local hire'], correct: 0},
            {topic: 'Language', emoji: '🗣️🌏', question: 'What is localization?', options: ['Adapt to local market', 'Global standard', 'No changes'], correct: 0}
        ],
        expert: [
            {topic: 'Global', emoji: '🌍💼', question: 'What is Uppsala model?', options: ['Incremental internationalization', 'Rapid expansion', 'No growth', 'Random approach'], correct: 0},
            {topic: 'Trade', emoji: '🚢📦', question: 'What percentage does international trade represent of global GDP?', options: ['~60%', '10%', '1%', '100%'], correct: 0},
            {topic: 'Currency', emoji: '💱💵', question: 'What is purchasing power parity?', options: ['Compare currencies by buying power', 'Fixed exchange rate', 'No comparison', 'Interest rate'], correct: 0},
            {topic: 'Culture', emoji: '🌏🤝', question: 'What is high-context vs low-context culture?', options: ['Indirect vs direct communication', 'Rich vs poor', 'East vs West', 'Old vs new'], correct: 0},
            {topic: 'Global', emoji: '🌍🏢', question: 'What is FDI?', options: ['Foreign Direct Investment', 'Federal Department Index', 'Financial Debt Indicator', 'Foreign Development Institute'], correct: 0},
            {topic: 'Export', emoji: '📤🌐', question: 'What is Incoterms?', options: ['International trade terms', 'Currency rates', 'Tax codes', 'Shipping times'], correct: 0},
            {topic: 'Import', emoji: '📥🌍', question: 'What is non-tariff barrier?', options: ['Regulations limiting imports', 'Tax only', 'No barriers', 'Price control'], correct: 0},
            {topic: 'Market', emoji: '🌐💹', question: 'What is psychic distance?', options: ['Perceived cultural difference', 'Physical distance', 'Time zones', 'Travel time'], correct: 0},
            {topic: 'Global', emoji: '🌍✈️', question: 'What is culture shock?', options: ['Adjustment difficulty abroad', 'Happy experience', 'No change', 'Quick adaptation'], correct: 0},
            {topic: 'Language', emoji: '🗣️🌏', question: 'What percentage of international business uses English?', options: ['~80%', '10%', '100%', '5%'], correct: 0}
        ],
        extreme: [
            {topic: 'Global', emoji: '🌍💼', question: 'Name three internationalization strategies', answer: 'Export, Licensing, FDI, Joint venture, Franchise (any 3)'},
            {topic: 'Trade', emoji: '🚢📦', question: 'Name three trade agreements', answer: 'USMCA, EU, ASEAN, RCEP, CPTPP (any 3)'},
            {topic: 'Currency', emoji: '💱💵', question: 'Name three currency risks', answer: 'Transaction, Translation, Economic exposure'},
            {topic: 'Culture', emoji: '🌏🤝', question: 'Name three Hofstede cultural dimensions', answer: 'Power distance, Individualism, Uncertainty avoidance, Masculinity (any 3)'},
            {topic: 'Global', emoji: '🌍🏢', question: 'Name three market entry modes', answer: 'Export, Licensing, Joint venture, Wholly-owned subsidiary (any 3)'},
            {topic: 'Export', emoji: '📤🌐', question: 'Name three export documents', answer: 'Invoice, Bill of lading, Certificate of origin, Packing list (any 3)'},
            {topic: 'Import', emoji: '📥🌍', question: 'Name three trade barriers', answer: 'Tariffs, Quotas, Regulations, Subsidies (any 3)'},
            {topic: 'Market', emoji: '🌐💹', question: 'Name three emerging markets', answer: 'BRICS (Brazil, Russia, India, China, South Africa)'},
            {topic: 'Global', emoji: '🌍✈️', question: 'Name three challenges of global HRM', answer: 'Different labor laws, Cultural differences, Compensation, Talent retention (any 3)'},
            {topic: 'Language', emoji: '🗣️🌏', question: 'Name three aspects of cross-cultural communication', answer: 'Language, Non-verbal, Context, Etiquette (any 3)'}
        ]
    },
    10: { // Chapter 10: Business Law
        easy: [
            {topic: 'Law', emoji: '⚖️📜', question: 'Laws regulate business.', options: ['True', 'False'], correct: 0},
            {topic: 'Contract', emoji: '📄🤝', question: 'Contracts are binding agreements.', options: ['True', 'False'], correct: 0},
            {topic: 'Property', emoji: '🏢📋', question: 'Intellectual property protects ideas.', options: ['True', 'False'], correct: 0},
            {topic: 'Employment', emoji: '👥⚖️', question: 'Employment laws protect workers.', options: ['True', 'False'], correct: 0},
            {topic: 'Law', emoji: '⚖️💼', question: 'Businesses must comply with regulations.', options: ['True', 'False'], correct: 0},
            {topic: 'Liability', emoji: '🛡️⚠️', question: 'Liability means legal responsibility.', options: ['True', 'False'], correct: 0},
            {topic: 'Tax', emoji: '💰📊', question: 'Companies pay taxes.', options: ['True', 'False'], correct: 0},
            {topic: 'Consumer', emoji: '🛍️⚖️', question: 'Consumer protection laws exist.', options: ['True', 'False'], correct: 0},
            {topic: 'Law', emoji: '⚖️🏛️', question: 'Courts resolve disputes.', options: ['True', 'False'], correct: 0},
            {topic: 'Compliance', emoji: '✅📋', question: 'Compliance avoids penalties.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Law', emoji: '⚖️📜', question: 'What is commercial law?', options: ['Law governing business', 'Criminal law'], correct: 0},
            {topic: 'Contract', emoji: '📄🤝', question: 'What makes a contract valid?', options: ['Offer, acceptance, consideration', 'Verbal agreement only'], correct: 0},
            {topic: 'Property', emoji: '🏢📋', question: 'What is trademark?', options: ['Brand protection', 'Building ownership'], correct: 0},
            {topic: 'Employment', emoji: '👥⚖️', question: 'What is at-will employment?', options: ['Can terminate anytime', 'Permanent job'], correct: 0},
            {topic: 'Law', emoji: '⚖️💼', question: 'What is tort law?', options: ['Civil wrongs and damages', 'Criminal offenses'], correct: 0},
            {topic: 'Liability', emoji: '🛡️⚠️', question: 'What is limited liability?', options: ['Personal assets protected', 'Unlimited responsibility'], correct: 0},
            {topic: 'Tax', emoji: '💰📊', question: 'What is corporate tax?', options: ['Tax on company profits', 'Personal income tax'], correct: 0},
            {topic: 'Consumer', emoji: '🛍️⚖️', question: 'What is warranty?', options: ['Product guarantee', 'Insurance'], correct: 0},
            {topic: 'Law', emoji: '⚖️🏛️', question: 'What is arbitration?', options: ['Alternative dispute resolution', 'Court trial'], correct: 0},
            {topic: 'Compliance', emoji: '✅📋', question: 'What is due diligence?', options: ['Investigation before transaction', 'Random check'], correct: 0}
        ],
        hard: [
            {topic: 'Law', emoji: '⚖️📜', question: 'What is UCC?', options: ['Uniform Commercial Code', 'United Consumer Council', 'Universal Credit Check'], correct: 0},
            {topic: 'Contract', emoji: '📄🤝', question: 'What is breach of contract?', options: ['Failure to perform obligations', 'Sign contract', 'Negotiate terms'], correct: 0},
            {topic: 'Property', emoji: '🏢📋', question: 'What is patent duration?', options: ['20 years', '5 years', 'Forever'], correct: 0},
            {topic: 'Employment', emoji: '👥⚖️', question: 'What is wrongful termination?', options: ['Illegal firing', 'Any firing', 'Retirement'], correct: 0},
            {topic: 'Law', emoji: '⚖️💼', question: 'What is vicarious liability?', options: ['Employer liable for employee acts', 'No liability', 'Personal only'], correct: 0},
            {topic: 'Liability', emoji: '🛡️⚠️', question: 'What is product liability?', options: ['Manufacturer responsibility for harm', 'No responsibility', 'Consumer fault'], correct: 0},
            {topic: 'Tax', emoji: '💰📊', question: 'What is double taxation?', options: ['Taxed at corporate and personal level', 'Pay twice', 'No tax'], correct: 0},
            {topic: 'Consumer', emoji: '🛍️⚖️', question: 'What is caveat emptor?', options: ['Buyer beware', 'Seller beware', 'No responsibility'], correct: 0},
            {topic: 'Law', emoji: '⚖️🏛️', question: 'What is class action lawsuit?', options: ['Group sues together', 'Individual lawsuit', 'Government suit'], correct: 0},
            {topic: 'Compliance', emoji: '✅📋', question: 'What is SEC?', options: ['Securities Exchange Commission', 'Standard Employment Contract', 'Sales Efficiency Code'], correct: 0}
        ],
        expert: [
            {topic: 'Law', emoji: '⚖️📜', question: 'What is piercing the corporate veil?', options: ['Hold owners personally liable', 'Corporate protection', 'Tax benefit', 'No consequences'], correct: 0},
            {topic: 'Contract', emoji: '📄🤝', question: 'What is statute of frauds?', options: ['Certain contracts must be written', 'All oral', 'No requirements', 'Fraud prevention'], correct: 0},
            {topic: 'Property', emoji: '🏢📋', question: 'What is fair use doctrine?', options: ['Limited use of copyrighted work', 'No limits', 'Complete ban', 'Free access'], correct: 0},
            {topic: 'Employment', emoji: '👥⚖️', question: 'What is EEOC?', options: ['Equal Employment Opportunity Commission', 'Employee Expense Oversight Committee', 'Ethical Employment Operations Center', 'Executive Employee Organization Council'], correct: 0},
            {topic: 'Law', emoji: '⚖️💼', question: 'What is force majeure?', options: ['Unforeseeable circumstances excuse', 'Breach allowed', 'Contract void', 'No excuse'], correct: 0},
            {topic: 'Liability', emoji: '🛡️⚠️', question: 'What is strict liability?', options: ['Liable regardless of fault', 'Need proof of negligence', 'No liability', 'Conditional'], correct: 0},
            {topic: 'Tax', emoji: '💰📊', question: 'What is transfer pricing?', options: ['Pricing between related entities', 'Customer pricing', 'Retail price', 'No pricing'], correct: 0},
            {topic: 'Consumer', emoji: '🛍️⚖️', question: 'What is lemon law?', options: ['Defective product remedies', 'Fruit regulation', 'No protection', 'Tax law'], correct: 0},
            {topic: 'Law', emoji: '⚖️🏛️', question: 'What is statute of limitations?', options: ['Time limit to file lawsuit', 'Crime severity', 'No limit', 'Court backlog'], correct: 0},
            {topic: 'Compliance', emoji: '✅📋', question: 'What is insider trading?', options: ['Illegal trading on non-public info', 'Legal trading', 'Day trading', 'No restriction'], correct: 0}
        ],
        extreme: [
            {topic: 'Law', emoji: '⚖️📜', question: 'Name three types of business entities', answer: 'Sole proprietorship, Partnership, LLC, Corporation (any 3)'},
            {topic: 'Contract', emoji: '📄🤝', question: 'Name three essential elements of contract', answer: 'Offer, Acceptance, Consideration, Capacity, Legality (any 3)'},
            {topic: 'Property', emoji: '🏢📋', question: 'Name three types of intellectual property', answer: 'Patent, Trademark, Copyright, Trade secret'},
            {topic: 'Employment', emoji: '👥⚖️', question: 'Name three major employment laws', answer: 'FLSA, ADA, FMLA, Title VII, OSHA (any 3)'},
            {topic: 'Law', emoji: '⚖️💼', question: 'Name three areas of business law', answer: 'Contract, Tort, Property, Employment, Tax (any 3)'},
            {topic: 'Liability', emoji: '🛡️⚠️', question: 'Name three types of liability', answer: 'Strict, Vicarious, Joint and several, Product (any 3)'},
            {topic: 'Tax', emoji: '💰📊', question: 'Name three types of business taxes', answer: 'Income, Payroll, Sales, Property, Excise (any 3)'},
            {topic: 'Consumer', emoji: '🛍️⚖️', question: 'Name three consumer protection laws', answer: 'FTC Act, Consumer Product Safety Act, Truth in Lending, Warranty Act (any 3)'},
            {topic: 'Law', emoji: '⚖️🏛️', question: 'Name three alternative dispute resolutions', answer: 'Arbitration, Mediation, Negotiation'},
            {topic: 'Compliance', emoji: '✅📋', question: 'Name three regulatory agencies', answer: 'SEC, FTC, EPA, OSHA, FDA (any 3)'}
        ]
    }
,
    11: { // Chapter 11: Project Management
        easy: [
            {topic: 'Project', emoji: '📊🎯', question: 'Projects have start and end dates.', options: ['True', 'False'], correct: 0},
            {topic: 'Planning', emoji: '📋✏️', question: 'Planning helps project success.', options: ['True', 'False'], correct: 0},
            {topic: 'Team', emoji: '👥🤝', question: 'Teams work on projects together.', options: ['True', 'False'], correct: 0},
            {topic: 'Budget', emoji: '💰📊', question: 'Projects need budgets.', options: ['True', 'False'], correct: 0},
            {topic: 'Schedule', emoji: '📅⏰', question: 'Schedules track project timeline.', options: ['True', 'False'], correct: 0},
            {topic: 'Goals', emoji: '🎯✅', question: 'Projects have specific goals.', options: ['True', 'False'], correct: 0},
            {topic: 'Risk', emoji: '⚠️🛡️', question: 'Risks can affect projects.', options: ['True', 'False'], correct: 0},
            {topic: 'Quality', emoji: '✨🔍', question: 'Quality matters in projects.', options: ['True', 'False'], correct: 0},
            {topic: 'Communication', emoji: '💬📢', question: 'Communication is essential.', options: ['True', 'False'], correct: 0},
            {topic: 'Completion', emoji: '🏁✅', question: 'Projects should be completed on time.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Project', emoji: '📊🎯', question: 'What is a project?', options: ['Temporary endeavor with unique goal', 'Ongoing operations'], correct: 0},
            {topic: 'Planning', emoji: '📋✏️', question: 'What is project scope?', options: ['Work included in project', 'Project cost'], correct: 0},
            {topic: 'Team', emoji: '👥🤝', question: 'What is project manager role?', options: ['Lead and coordinate project', 'Just observe'], correct: 0},
            {topic: 'Budget', emoji: '💰📊', question: 'What is cost estimation?', options: ['Predict project expenses', 'Final invoice'], correct: 0},
            {topic: 'Schedule', emoji: '📅⏰', question: 'What is milestone?', options: ['Key project checkpoint', 'Final deadline'], correct: 0},
            {topic: 'Goals', emoji: '🎯✅', question: 'What are deliverables?', options: ['Project outputs', 'Input resources'], correct: 0},
            {topic: 'Risk', emoji: '⚠️🛡️', question: 'What does risk management involve?', options: ['Identify and mitigate risks', 'Ignore problems'], correct: 0},
            {topic: 'Quality', emoji: '✨🔍', question: 'What is quality assurance?', options: ['Ensure standards met', 'No checking'], correct: 0},
            {topic: 'Communication', emoji: '💬📢', question: 'What is stakeholder?', options: ['Person affected by project', 'Team member only'], correct: 0},
            {topic: 'Completion', emoji: '🏁✅', question: 'What is project closure?', options: ['Formal project end', 'Abandon project'], correct: 0}
        ],
        hard: [
            {topic: 'Project', emoji: '📊🎯', question: 'What is triple constraint?', options: ['Scope, time, cost balance', 'Three projects', 'Three teams'], correct: 0},
            {topic: 'Planning', emoji: '📋✏️', question: 'What is WBS?', options: ['Work Breakdown Structure', 'Weekly Business Summary', 'Workflow Basic System'], correct: 0},
            {topic: 'Team', emoji: '👥🤝', question: 'What is RACI matrix?', options: ['Responsible, Accountable, Consulted, Informed', 'Resource Allocation Chart'], correct: 0},
            {topic: 'Budget', emoji: '💰📊', question: 'What is earned value management?', options: ['Project performance measurement', 'Salary calculation', 'Revenue tracking'], correct: 0},
            {topic: 'Schedule', emoji: '📅⏰', question: 'What is critical path?', options: ['Longest task sequence', 'Shortest route', 'Most important tasks'], correct: 0},
            {topic: 'Goals', emoji: '🎯✅', question: 'What is project charter?', options: ['Project authorization document', 'Team roster', 'Budget report'], correct: 0},
            {topic: 'Risk', emoji: '⚠️🛡️', question: 'What is risk register?', options: ['Document of identified risks', 'Employee list', 'Budget sheet'], correct: 0},
            {topic: 'Quality', emoji: '✨🔍', question: 'What is quality control?', options: ['Monitor specific results', 'Prevent defects', 'No checking'], correct: 0},
            {topic: 'Communication', emoji: '💬📢', question: 'What is status report?', options: ['Project progress update', 'Final report', 'Budget request'], correct: 0},
            {topic: 'Completion', emoji: '🏁✅', question: 'What is lessons learned?', options: ['Document for future projects', 'Failure report', 'No documentation'], correct: 0}
        ],
        expert: [
            {topic: 'Project', emoji: '📊🎯', question: 'What is PMI?', options: ['Project Management Institute', 'Primary Management Indicator', 'Public Market Index', 'Personnel Management Integration'], correct: 0},
            {topic: 'Planning', emoji: '📋✏️', question: 'What is rolling wave planning?', options: ['Detailed near-term, high-level long-term', 'All detailed upfront', 'No planning', 'Random approach'], correct: 0},
            {topic: 'Team', emoji: '👥🤝', question: 'What is Tuckman team development stages?', options: ['Forming, Storming, Norming, Performing', 'Start, Middle, End', 'Plan, Execute, Close', 'Hire, Train, Work'], correct: 0},
            {topic: 'Budget', emoji: '💰📊', question: 'What is typical project management overhead cost?', options: ['10-20%', '50%', '1%', '90%'], correct: 0},
            {topic: 'Schedule', emoji: '📅⏰', question: 'What is fast tracking?', options: ['Overlap sequential activities', 'Add resources', 'Reduce scope', 'Extend timeline'], correct: 0},
            {topic: 'Goals', emoji: '🎯✅', question: 'What is scope creep?', options: ['Uncontrolled project expansion', 'Scope reduction', 'Fast completion', 'No changes'], correct: 0},
            {topic: 'Risk', emoji: '⚠️🛡️', question: 'What is Monte Carlo simulation?', options: ['Risk analysis technique', 'Gambling method', 'No analysis', 'Simple guess'], correct: 0},
            {topic: 'Quality', emoji: '✨🔍', question: 'What is Six Sigma in project management?', options: ['Quality improvement methodology', 'Time management', 'Cost cutting', 'Team building'], correct: 0},
            {topic: 'Communication', emoji: '💬📢', question: 'What percentage of PM time is communication?', options: ['~90%', '10%', '50%', '0%'], correct: 0},
            {topic: 'Completion', emoji: '🏁✅', question: 'What is project success rate industry average?', options: ['~35%', '90%', '5%', '100%'], correct: 0}
        ],
        extreme: [
            {topic: 'Project', emoji: '📊🎯', question: 'Name three project management methodologies', answer: 'Waterfall, Agile, Scrum, PRINCE2, Kanban (any 3)'},
            {topic: 'Planning', emoji: '📋✏️', question: 'Name the five process groups in PMBOK', answer: 'Initiating, Planning, Executing, Monitoring and Controlling, Closing'},
            {topic: 'Team', emoji: '👥🤝', question: 'Name three project roles', answer: 'Project manager, Team member, Sponsor, Stakeholder (any 3)'},
            {topic: 'Budget', emoji: '💰📊', question: 'Name three cost estimation techniques', answer: 'Analogous, Parametric, Bottom-up, Three-point (any 3)'},
            {topic: 'Schedule', emoji: '📅⏰', question: 'Name three schedule compression techniques', answer: 'Fast tracking, Crashing, Scope reduction'},
            {topic: 'Goals', emoji: '🎯✅', question: 'Name three project constraints', answer: 'Scope, Time, Cost, Quality, Resources, Risk (any 3)'},
            {topic: 'Risk', emoji: '⚠️🛡️', question: 'Name four risk response strategies', answer: 'Avoid, Transfer, Mitigate, Accept'},
            {topic: 'Quality', emoji: '✨🔍', question: 'Name three quality management tools', answer: 'Control charts, Pareto diagrams, Ishikawa diagrams, Checklists (any 3)'},
            {topic: 'Communication', emoji: '💬📢', question: 'Name three types of project reports', answer: 'Status, Progress, Performance, Risk, Quality (any 3)'},
            {topic: 'Completion', emoji: '🏁✅', question: 'Name three project closure activities', answer: 'Final deliverable, Documentation, Lessons learned, Release resources (any 3)'}
        ]
    },
    12: { // Chapter 12: Sales Management  
        easy: [
            {topic: 'Sales', emoji: '💰🤝', question: 'Sales generate revenue.', options: ['True', 'False'], correct: 0},
            {topic: 'Customer', emoji: '👤💼', question: 'Customers buy products.', options: ['True', 'False'], correct: 0},
            {topic: 'Prospecting', emoji: '🔍👥', question: 'Finding new customers is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Negotiation', emoji: '🤝💬', question: 'Negotiation helps close deals.', options: ['True', 'False'], correct: 0},
            {topic: 'Sales', emoji: '💰📊', question: 'Sales targets drive performance.', options: ['True', 'False'], correct: 0},
            {topic: 'Relationship', emoji: '🤝❤️', question: 'Building relationships increases sales.', options: ['True', 'False'], correct: 0},
            {topic: 'Product', emoji: '📦💡', question: 'Product knowledge helps sell.', options: ['True', 'False'], correct: 0},
            {topic: 'Follow-up', emoji: '📞✅', question: 'Following up is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Sales', emoji: '💰🎯', question: 'Closing deals requires skill.', options: ['True', 'False'], correct: 0},
            {topic: 'Pipeline', emoji: '🔄📈', question: 'Sales pipeline tracks opportunities.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Sales', emoji: '💰🤝', question: 'What is sales cycle?', options: ['Steps from prospect to close', 'One meeting'], correct: 0},
            {topic: 'Customer', emoji: '👤💼', question: 'What is lead qualification?', options: ['Assess prospect potential', 'Reject all leads'], correct: 0},
            {topic: 'Prospecting', emoji: '🔍👥', question: 'What is cold calling?', options: ['Contact without prior relationship', 'Warm introduction'], correct: 0},
            {topic: 'Negotiation', emoji: '🤝💬', question: 'What is win-win negotiation?', options: ['Both parties benefit', 'One side wins'], correct: 0},
            {topic: 'Sales', emoji: '💰📊', question: 'What is sales quota?', options: ['Target sales amount', 'Minimum price'], correct: 0},
            {topic: 'Relationship', emoji: '🤝❤️', question: 'What is account management?', options: ['Maintain customer relationships', 'Open accounts'], correct: 0},
            {topic: 'Product', emoji: '📦💡', question: 'What does value proposition mean?', options: ['Benefits offered to customer', 'Price only'], correct: 0},
            {topic: 'Follow-up', emoji: '📞✅', question: 'What is objection handling?', options: ['Address customer concerns', 'Ignore objections'], correct: 0},
            {topic: 'Sales', emoji: '💰🎯', question: 'What is closing technique?', options: ['Method to finalize sale', 'Opening pitch'], correct: 0},
            {topic: 'Pipeline', emoji: '🔄📈', question: 'What is sales funnel?', options: ['Stages from awareness to purchase', 'Marketing only'], correct: 0}
        ],
        hard: [
            {topic: 'Sales', emoji: '💰🤝', question: 'What is SPIN selling?', options: ['Situation, Problem, Implication, Need-payoff', 'Fast pitch', 'Price focus', 'No questions'], correct: 0},
            {topic: 'Customer', emoji: '👤💼', question: 'What is BANT framework?', options: ['Budget, Authority, Need, Timeline', 'Price, Product, Place', 'Random criteria'], correct: 0},
            {topic: 'Prospecting', emoji: '🔍👥', question: 'What is social selling?', options: ['Use social media for sales', 'In-person only', 'No technology'], correct: 0},
            {topic: 'Negotiation', emoji: '🤝💬', question: 'What is BATNA?', options: ['Best Alternative To Negotiated Agreement', 'Beginning Approach', 'Basic Tactics'], correct: 0},
            {topic: 'Sales', emoji: '💰📊', question: 'What is sales velocity?', options: ['Speed of deals through pipeline', 'Sales volume', 'Price point'], correct: 0},
            {topic: 'Relationship', emoji: '🤝❤️', question: 'What does customer lifetime value measure?', options: ['Total revenue from customer', 'First purchase', 'One year'], correct: 0},
            {topic: 'Product', emoji: '📦💡', question: 'What is solution selling?', options: ['Solve customer problems', 'Product features only', 'Price-based'], correct: 0},
            {topic: 'Follow-up', emoji: '📞✅', question: 'What is nurture campaign?', options: ['Ongoing prospect engagement', 'One-time contact', 'No follow-up'], correct: 0},
            {topic: 'Sales', emoji: '💰🎯', question: 'What is trial close?', options: ['Test readiness to buy', 'Final close', 'Opening'], correct: 0},
            {topic: 'Pipeline', emoji: '🔄📈', question: 'What is pipeline coverage ratio?', options: ['Pipeline value vs quota', 'Number of deals', 'Conversion rate'], correct: 0}
        ],
        expert: [
            {topic: 'Sales', emoji: '💰🤝', question: 'What is typical B2B sales cycle length?', options: ['3-6 months', '1 day', '1 week', '5 years'], correct: 0},
            {topic: 'Customer', emoji: '👤💼', question: 'What is lead-to-customer conversion rate average?', options: ['2-5%', '90%', '50%', '0.1%'], correct: 0},
            {topic: 'Prospecting', emoji: '🔍👥', question: 'What is SQL vs MQL?', options: ['Sales vs Marketing Qualified Lead', 'Same thing', 'No difference', 'Random terms'], correct: 0},
            {topic: 'Negotiation', emoji: '🤝💬', question: 'What is anchoring in negotiation?', options: ['Set initial reference point', 'Final offer', 'No strategy', 'Random price'], correct: 0},
            {topic: 'Sales', emoji: '💰📊', question: 'What is typical sales commission rate?', options: ['5-15%', '100%', '1%', '50%'], correct: 0},
            {topic: 'Relationship', emoji: '🤝❤️', question: 'What is NPS?', options: ['Net Promoter Score', 'New Product Sales', 'National Pricing Standard', 'Next Phase Strategy'], correct: 0},
            {topic: 'Product', emoji: '📦💡', question: 'What is feature vs benefit?', options: ['What it does vs why it matters', 'Same thing', 'No difference', 'Random terms'], correct: 0},
            {topic: 'Follow-up', emoji: '📞✅', question: 'What is optimal follow-up frequency?', options: ['Every 3-7 days', 'Daily', 'Never', 'Monthly'], correct: 0},
            {topic: 'Sales', emoji: '💰🎯', question: 'What percentage of reps hit quota?', options: ['~50-60%', '100%', '5%', '0%'], correct: 0},
            {topic: 'Pipeline', emoji: '🔄📈', question: 'What is ideal pipeline coverage?', options: ['3-5x quota', '1x', '0.5x', '20x'], correct: 0}
        ],
        extreme: [
            {topic: 'Sales', emoji: '💰🤝', question: 'Name three sales methodologies', answer: 'SPIN, Challenger, Solution, Consultative, MEDDIC (any 3)'},
            {topic: 'Customer', emoji: '👤💼', question: 'Name three buyer personas elements', answer: 'Demographics, Pain points, Goals, Budget, Authority (any 3)'},
            {topic: 'Prospecting', emoji: '🔍👥', question: 'Name three prospecting methods', answer: 'Cold calling, Email, Social media, Referrals, Networking (any 3)'},
            {topic: 'Negotiation', emoji: '🤝💬', question: 'Name three negotiation tactics', answer: 'Anchoring, Bundling, Trade-offs, Silence, Time pressure (any 3)'},
            {topic: 'Sales', emoji: '💰📊', question: 'Name three sales metrics', answer: 'Quota, Win rate, Average deal size, Sales cycle, Pipeline (any 3)'},
            {topic: 'Relationship', emoji: '🤝❤️', question: 'Name three retention strategies', answer: 'Customer success, Upselling, Regular check-ins, Training (any 3)'},
            {topic: 'Product', emoji: '📦💡', question: 'Name three product positioning elements', answer: 'Target market, Problem solved, Differentiation, Value (any 3)'},
            {topic: 'Follow-up', emoji: '📞✅', question: 'Name three follow-up channels', answer: 'Email, Phone, Text, Social media, In-person (any 3)'},
            {topic: 'Sales', emoji: '💰🎯', question: 'Name three closing techniques', answer: 'Assumptive, Alternative, Urgency, Trial, Summary (any 3)'},
            {topic: 'Pipeline', emoji: '🔄📈', question: 'Name three pipeline stages', answer: 'Prospecting, Qualification, Proposal, Negotiation, Close (any 3)'}
        ]
    }
    // Add more chapters: 2, 3, 4... unlimited!
};

