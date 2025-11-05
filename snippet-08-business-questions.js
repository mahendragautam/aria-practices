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
    }
    // Add more chapters: 2, 3, 4... unlimited!
};

