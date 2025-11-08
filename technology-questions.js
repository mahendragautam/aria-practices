/**
 * WPCode Snippet #9: Technology Questions
 * ==================================================
 * Type: JavaScript
 * Location: Auto Insert > Footer  
 * Priority: 18
 *
 * COPY ALL CODE BELOW
 */

const technologyQuestions = {
    1: { // Chapter 1: Technology Basics
        easy: [
            {topic: 'Programming', emoji: '💻👨‍💻', question: 'Python is a programming language.', options: ['True', 'False'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️⌨️', question: 'RAM is computer memory.', options: ['True', 'False'], correct: 0},
            {topic: 'Software', emoji: '📱💾', question: 'Apps are software programs.', options: ['True', 'False'], correct: 0},
            {topic: 'Networking', emoji: '🌐📡', question: 'WiFi is wireless internet.', options: ['True', 'False'], correct: 0},
            {topic: 'Programming', emoji: '💻🔢', question: 'HTML is used for web pages.', options: ['True', 'False'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️💽', question: 'SSD is faster than HDD.', options: ['True', 'False'], correct: 0},
            {topic: 'Software', emoji: '📱🖥️', question: 'Operating systems manage computers.', options: ['True', 'False'], correct: 0},
            {topic: 'Networking', emoji: '🌐🔒', question: 'HTTPS is secure browsing.', options: ['True', 'False'], correct: 0},
            {topic: 'Programming', emoji: '💻📊', question: 'JavaScript runs in web browsers.', options: ['True', 'False'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️🎮', question: 'GPU is for graphics processing.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Programming', emoji: '💻👨‍💻', question: 'What does API stand for?', options: ['Application Programming Interface', 'Advanced Program Integration'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️⌨️', question: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Power Unit'], correct: 0},
            {topic: 'Software', emoji: '📱💾', question: 'What is open source software?', options: ['Free and modifiable', 'Expensive and closed'], correct: 0},
            {topic: 'Networking', emoji: '🌐📡', question: 'What does IP address identify?', options: ['Device on network', 'User name'], correct: 0},
            {topic: 'Programming', emoji: '💻🔢', question: 'What is a variable?', options: ['Stores data', 'Deletes files'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️💽', question: 'What is ROM?', options: ['Read-Only Memory', 'Random Operating Memory'], correct: 0},
            {topic: 'Software', emoji: '📱🖥️', question: 'What is cloud computing?', options: ['Remote servers', 'Local storage'], correct: 0},
            {topic: 'Networking', emoji: '🌐🔒', question: 'What is a firewall?', options: ['Security barrier', 'Internet speed'], correct: 0},
            {topic: 'Programming', emoji: '💻📊', question: 'What is debugging?', options: ['Fixing errors', 'Writing code'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️🎮', question: 'What is bandwidth?', options: ['Data transfer rate', 'Storage space'], correct: 0}
        ],
        hard: [
            {topic: 'Programming', emoji: '💻👨‍💻', question: 'What is object-oriented programming?', options: ['Using objects and classes', 'Linear coding', 'Assembly language'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️⌨️', question: 'What is Moore\'s Law?', options: ['Transistors double every 2 years', 'Internet speed doubles', 'Storage halves cost'], correct: 0},
            {topic: 'Software', emoji: '📱💾', question: 'What is machine learning?', options: ['AI that learns from data', 'Manual programming', 'Hardware upgrade'], correct: 0},
            {topic: 'Networking', emoji: '🌐📡', question: 'What is TCP/IP?', options: ['Internet protocol', 'Storage system', 'Programming language'], correct: 0},
            {topic: 'Programming', emoji: '💻🔢', question: 'What is recursion?', options: ['Function calling itself', 'Loop', 'Variable'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️💽', question: 'What is quantum computing?', options: ['Uses quantum mechanics', 'Traditional binary', 'Cloud storage'], correct: 0},
            {topic: 'Software', emoji: '📱🖥️', question: 'What is blockchain?', options: ['Distributed ledger', 'Database', 'Website'], correct: 0},
            {topic: 'Networking', emoji: '🌐🔒', question: 'What is VPN?', options: ['Virtual Private Network', 'Very Public Network', 'Video Programming Network'], correct: 0},
            {topic: 'Programming', emoji: '💻📊', question: 'What is SQL?', options: ['Database query language', 'Web language', 'Operating system'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️🎮', question: 'What is 5G?', options: ['5th generation mobile', '5 gigabytes', '5 gigahertz'], correct: 0}
        ],
        expert: [
            {topic: 'Programming', emoji: '💻👨‍💻', question: 'What is Big O notation?', options: ['Algorithm complexity', 'Variable type', 'Loop structure', 'Function name'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️⌨️', question: 'How many bits in a byte?', options: ['8', '4', '16', '32'], correct: 0},
            {topic: 'Software', emoji: '📱💾', question: 'What is Docker?', options: ['Containerization platform', 'Database', 'Programming language', 'Web browser'], correct: 0},
            {topic: 'Networking', emoji: '🌐📡', question: 'What OSI layer is TCP in?', options: ['Transport (Layer 4)', 'Application (Layer 7)', 'Physical (Layer 1)', 'Network (Layer 3)'], correct: 0},
            {topic: 'Programming', emoji: '💻🔢', question: 'What is a hash function?', options: ['Maps data to fixed size', 'Sorts array', 'Loops through list', 'Creates variables'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️💽', question: 'What is RAID?', options: ['Redundant Array Independent Disks', 'Random Access Integrated Data', 'Rapid Application Interface Device', 'Read And Input Data'], correct: 0},
            {topic: 'Software', emoji: '📱🖥️', question: 'What is microservices architecture?', options: ['Small independent services', 'Monolithic app', 'Single database', 'One server'], correct: 0},
            {topic: 'Networking', emoji: '🌐🔒', question: 'What port does HTTPS use?', options: ['443', '80', '22', '21'], correct: 0},
            {topic: 'Programming', emoji: '💻📊', question: 'What is RESTful API?', options: ['Stateless web service', 'Database protocol', 'File system', 'Operating system'], correct: 0},
            {topic: 'Hardware', emoji: '🖥️🎮', question: 'What is cache memory?', options: ['Fast temporary storage', 'Permanent storage', 'Virtual memory', 'Cloud storage'], correct: 0}
        ],
        extreme: [
            {topic: 'Programming', emoji: '💻👨‍💻', question: 'Name three programming paradigms', answer: 'Object-oriented, Functional, Procedural, Declarative (any 3)'},
            {topic: 'Hardware', emoji: '🖥️⌨️', question: 'Name the main components of a computer (5)', answer: 'CPU, RAM, Storage, Motherboard, Power Supply, GPU (any 5)'},
            {topic: 'Software', emoji: '📱💾', question: 'Name three operating systems', answer: 'Windows, macOS, Linux, Android, iOS (any 3)'},
            {topic: 'Networking', emoji: '🌐📡', question: 'Name the 7 layers of OSI model (name 4)', answer: 'Physical, Data Link, Network, Transport, Session, Presentation, Application (any 4)'},
            {topic: 'Programming', emoji: '💻🔢', question: 'Name three data structures', answer: 'Array, Linked List, Stack, Queue, Tree, Hash Table (any 3)'},
            {topic: 'Hardware', emoji: '🖥️💽', question: 'What is the difference between RAM and ROM?', answer: 'RAM=temporary/volatile, ROM=permanent/non-volatile'},
            {topic: 'Software', emoji: '📱🖥️', question: 'Name three cloud service providers', answer: 'AWS, Azure, Google Cloud, IBM Cloud, Oracle Cloud (any 3)'},
            {topic: 'Networking', emoji: '🌐🔒', question: 'What does DNS stand for and what does it do?', answer: 'Domain Name System - translates domain names to IP addresses'},
            {topic: 'Programming', emoji: '💻📊', question: 'Name three popular programming languages', answer: 'Python, JavaScript, Java, C++, Go, Rust (any 3)'},
            {topic: 'Hardware', emoji: '🖥️🎮', question: 'Name three types of computer networks', answer: 'LAN, WAN, MAN, PAN, VPN (any 3)'}
        ]
    }
,
    2: { // Chapter 2: Web Development
        easy: [
            {topic: 'Frontend', emoji: '🌐💻', question: 'HTML creates web page structure.', options: ['True', 'False'], correct: 0},
            {topic: 'Styling', emoji: '🎨💅', question: 'CSS styles web pages.', options: ['True', 'False'], correct: 0},
            {topic: 'Frontend', emoji: '⚡📱', question: 'JavaScript adds interactivity.', options: ['True', 'False'], correct: 0},
            {topic: 'Backend', emoji: '🔙💾', question: 'Servers host websites.', options: ['True', 'False'], correct: 0},
            {topic: 'Frontend', emoji: '📱💻', question: 'Responsive design adapts to screens.', options: ['True', 'False'], correct: 0},
            {topic: 'Styling', emoji: '🎨🖌️', question: 'Bootstrap is a CSS framework.', options: ['True', 'False'], correct: 0},
            {topic: 'Frontend', emoji: '⚛️💙', question: 'React is a JavaScript library.', options: ['True', 'False'], correct: 0},
            {topic: 'Backend', emoji: '🔙📊', question: 'Databases store data.', options: ['True', 'False'], correct: 0},
            {topic: 'Frontend', emoji: '🌐🔧', question: 'Browsers render web pages.', options: ['True', 'False'], correct: 0},
            {topic: 'Testing', emoji: '🧪✅', question: 'Testing ensures quality.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Frontend', emoji: '🌐💻', question: 'What is the DOM?', options: ['Document Object Model', 'Data Object Manager'], correct: 0},
            {topic: 'Styling', emoji: '🎨💅', question: 'What is CSS flexbox?', options: ['Layout model', 'Color scheme'], correct: 0},
            {topic: 'Frontend', emoji: '⚡📱', question: 'What is AJAX?', options: ['Asynchronous JavaScript and XML', 'Advanced Java Application'], correct: 0},
            {topic: 'Backend', emoji: '🔙💾', question: 'What is Node.js?', options: ['JavaScript runtime', 'Database'], correct: 0},
            {topic: 'Frontend', emoji: '📱💻', question: 'What is Progressive Web App?', options: ['Web app like native app', 'Regular website'], correct: 0},
            {topic: 'Styling', emoji: '🎨🖌️', question: 'What is Sass?', options: ['CSS preprocessor', 'JavaScript framework'], correct: 0},
            {topic: 'Frontend', emoji: '⚛️💙', question: 'What is Virtual DOM?', options: ['Lightweight copy of DOM', 'Physical memory'], correct: 0},
            {topic: 'Backend', emoji: '🔙📊', question: 'What is REST API?', options: ['Web service architecture', 'Database type'], correct: 0},
            {topic: 'Frontend', emoji: '🌐🔧', question: 'What is SPA?', options: ['Single Page Application', 'Server Page App'], correct: 0},
            {topic: 'Testing', emoji: '🧪✅', question: 'What is unit testing?', options: ['Test individual components', 'Test entire app'], correct: 0}
        ],
        hard: [
            {topic: 'Frontend', emoji: '🌐💻', question: 'What is WebAssembly?', options: ['Binary instruction format', 'JavaScript variant', 'HTML version'], correct: 0},
            {topic: 'Styling', emoji: '🎨💅', question: 'What is CSS Grid?', options: ['2D layout system', '1D layout', 'Color system'], correct: 0},
            {topic: 'Frontend', emoji: '⚡📱', question: 'What is webpack?', options: ['Module bundler', 'Web server', 'Database'], correct: 0},
            {topic: 'Backend', emoji: '🔙💾', question: 'What is Express.js?', options: ['Node.js web framework', 'Database', 'Frontend library'], correct: 0},
            {topic: 'Frontend', emoji: '📱💻', question: 'What is Server-Side Rendering?', options: ['Render on server', 'Client only', 'No rendering'], correct: 0},
            {topic: 'Styling', emoji: '🎨🖌️', question: 'What is CSS-in-JS?', options: ['Styles in JavaScript', 'Separate CSS files', 'No styles'], correct: 0},
            {topic: 'Frontend', emoji: '⚛️💙', question: 'What is Redux?', options: ['State management library', 'Router', 'Database'], correct: 0},
            {topic: 'Backend', emoji: '🔙📊', question: 'What is GraphQL?', options: ['Query language for APIs', 'Database', 'Framework'], correct: 0},
            {topic: 'Frontend', emoji: '🌐🔧', question: 'What is lazy loading?', options: ['Load content on demand', 'Load all at once', 'No loading'], correct: 0},
            {topic: 'Testing', emoji: '🧪✅', question: 'What is end-to-end testing?', options: ['Test complete user flow', 'Test one function', 'No testing'], correct: 0}
        ],
        expert: [
            {topic: 'Frontend', emoji: '🌐💻', question: 'What is the critical rendering path?', options: ['Steps to render page', 'Database query', 'API call', 'File upload'], correct: 0},
            {topic: 'Styling', emoji: '🎨💅', question: 'What is specificity in CSS?', options: ['Selector priority', 'Color value', 'Font size', 'Layout type'], correct: 0},
            {topic: 'Frontend', emoji: '⚡📱', question: 'What is tree shaking?', options: ['Remove unused code', 'Add features', 'Test code', 'Deploy app'], correct: 0},
            {topic: 'Backend', emoji: '🔙💾', question: 'What is middleware in Express?', options: ['Functions between request/response', 'Database layer', 'Frontend code', 'CSS framework'], correct: 0},
            {topic: 'Frontend', emoji: '📱💻', question: 'What is hydration in SSR?', options: ['Make static HTML interactive', 'Add water effects', 'Load images', 'Cache data'], correct: 0},
            {topic: 'Styling', emoji: '🎨🖌️', question: 'What is BEM methodology?', options: ['Block Element Modifier', 'Best Efficient Method', 'Browser Extension Module', 'Basic Element Model'], correct: 0},
            {topic: 'Frontend', emoji: '⚛️💙', question: 'What are React hooks?', options: ['Functions for state in components', 'CSS tricks', 'Database queries', 'API endpoints'], correct: 0},
            {topic: 'Backend', emoji: '🔙📊', question: 'What is JWT?', options: ['JSON Web Token', 'JavaScript Web Tool', 'Java Web Technology', 'JSON Widget Type'], correct: 0},
            {topic: 'Frontend', emoji: '🌐🔧', question: 'What is code splitting?', options: ['Break code into chunks', 'Combine all code', 'Delete code', 'Copy code'], correct: 0},
            {topic: 'Testing', emoji: '🧪✅', question: 'What is test coverage?', options: ['Percentage of code tested', 'Number of tests', 'Testing time', 'Test location'], correct: 0}
        ],
        extreme: [
            {topic: 'Frontend', emoji: '🌐💻', question: 'Name three modern JavaScript frameworks', answer: 'React, Vue, Angular, Svelte, Next.js (any 3)'},
            {topic: 'Styling', emoji: '🎨💅', question: 'Name three CSS layout methods', answer: 'Flexbox, Grid, Float, Position, Table (any 3)'},
            {topic: 'Frontend', emoji: '⚡📱', question: 'Name three JavaScript ES6+ features', answer: 'Arrow functions, Promises, Async/await, Destructuring, Classes (any 3)'},
            {topic: 'Backend', emoji: '🔙💾', question: 'Name three backend frameworks', answer: 'Express, Django, Flask, Spring, Laravel (any 3)'},
            {topic: 'Frontend', emoji: '📱💻', question: 'Name three performance optimization techniques', answer: 'Lazy loading, Code splitting, Caching, Minification, CDN (any 3)'},
            {topic: 'Styling', emoji: '🎨🖌️', question: 'Name three CSS preprocessors', answer: 'Sass, Less, Stylus, PostCSS (any 3)'},
            {topic: 'Frontend', emoji: '⚛️💙', question: 'Name three state management solutions', answer: 'Redux, MobX, Context API, Zustand, Recoil (any 3)'},
            {topic: 'Backend', emoji: '🔙📊', question: 'Name three types of databases', answer: 'SQL, NoSQL, Graph, Key-value, Document (any 3)'},
            {topic: 'Frontend', emoji: '🌐🔧', question: 'Name three build tools', answer: 'Webpack, Vite, Parcel, Rollup, esbuild (any 3)'},
            {topic: 'Testing', emoji: '🧪✅', question: 'Name three testing frameworks', answer: 'Jest, Mocha, Jasmine, Cypress, Playwright (any 3)'}
        ]
    },
    3: { // Chapter 3: Mobile Development
        easy: [
            {topic: 'Mobile', emoji: '📱💻', question: 'Apps run on smartphones.', options: ['True', 'False'], correct: 0},
            {topic: 'iOS', emoji: '🍎📱', question: 'iOS is Apple mobile OS.', options: ['True', 'False'], correct: 0},
            {topic: 'Android', emoji: '🤖📱', question: 'Android is Google mobile OS.', options: ['True', 'False'], correct: 0},
            {topic: 'Mobile', emoji: '📲💾', question: 'Apps are downloaded from stores.', options: ['True', 'False'], correct: 0},
            {topic: 'Design', emoji: '🎨📱', question: 'Mobile design differs from web.', options: ['True', 'False'], correct: 0},
            {topic: 'iOS', emoji: '🍎💻', question: 'Swift is Apple programming language.', options: ['True', 'False'], correct: 0},
            {topic: 'Android', emoji: '🤖💻', question: 'Kotlin is for Android development.', options: ['True', 'False'], correct: 0},
            {topic: 'Mobile', emoji: '📱⚡', question: 'Mobile apps work offline.', options: ['True', 'False'], correct: 0},
            {topic: 'Cross-platform', emoji: '🔄📱', question: 'React Native works on both platforms.', options: ['True', 'False'], correct: 0},
            {topic: 'Mobile', emoji: '📲🔔', question: 'Push notifications engage users.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Mobile', emoji: '📱💻', question: 'What is native app?', options: ['Built for specific platform', 'Web-based'], correct: 0},
            {topic: 'iOS', emoji: '🍎📱', question: 'What is Xcode?', options: ['iOS development IDE', 'Database'], correct: 0},
            {topic: 'Android', emoji: '🤖📱', question: 'What is Android Studio?', options: ['Android development IDE', 'Design tool'], correct: 0},
            {topic: 'Mobile', emoji: '📲💾', question: 'What is APK?', options: ['Android package file', 'Apple package'], correct: 0},
            {topic: 'Design', emoji: '🎨📱', question: 'What is Material Design?', options: ['Google design system', 'Apple design'], correct: 0},
            {topic: 'iOS', emoji: '🍎💻', question: 'What is SwiftUI?', options: ['iOS UI framework', 'Android tool'], correct: 0},
            {topic: 'Android', emoji: '🤖💻', question: 'What is Jetpack Compose?', options: ['Android UI toolkit', 'iOS framework'], correct: 0},
            {topic: 'Mobile', emoji: '📱⚡', question: 'What is hybrid app?', options: ['Web tech in native wrapper', 'Pure native'], correct: 0},
            {topic: 'Cross-platform', emoji: '🔄📱', question: 'What is Flutter?', options: ['Cross-platform framework', 'Database'], correct: 0},
            {topic: 'Mobile', emoji: '📲🔔', question: 'What is FCM?', options: ['Firebase Cloud Messaging', 'Fast Content Manager'], correct: 0}
        ],
        hard: [
            {topic: 'Mobile', emoji: '📱💻', question: 'What is PWA?', options: ['Progressive Web App', 'Pure Web Application', 'Private Web Access'], correct: 0},
            {topic: 'iOS', emoji: '🍎📱', question: 'What is Core Data?', options: ['iOS data persistence', 'Cloud storage', 'Database'], correct: 0},
            {topic: 'Android', emoji: '🤖📱', question: 'What is Room?', options: ['Android database library', 'UI component', 'Network tool'], correct: 0},
            {topic: 'Mobile', emoji: '📲💾', question: 'What is App Store Optimization?', options: ['Improve app visibility', 'Code optimization', 'UI design'], correct: 0},
            {topic: 'Design', emoji: '🎨📱', question: 'What is Human Interface Guidelines?', options: ['Apple design principles', 'Android guidelines', 'Web standards'], correct: 0},
            {topic: 'iOS', emoji: '🍎💻', question: 'What is CocoaPods?', options: ['iOS dependency manager', 'Android tool', 'Database'], correct: 0},
            {topic: 'Android', emoji: '🤖💻', question: 'What is Gradle?', options: ['Build automation tool', 'UI library', 'Database'], correct: 0},
            {topic: 'Mobile', emoji: '📱⚡', question: 'What is deep linking?', options: ['Link to specific app content', 'Website link', 'No linking'], correct: 0},
            {topic: 'Cross-platform', emoji: '🔄📱', question: 'What is Xamarin?', options: ['Microsoft cross-platform framework', 'Database', 'Design tool'], correct: 0},
            {topic: 'Mobile', emoji: '📲🔔', question: 'What is silent notification?', options: ['Background data update', 'Sound alert', 'No notification'], correct: 0}
        ],
        expert: [
            {topic: 'Mobile', emoji: '📱💻', question: 'What is the average mobile app retention rate?', options: ['~25% after 30 days', '90%', '5%', '100%'], correct: 0},
            {topic: 'iOS', emoji: '🍎📱', question: 'What is ARC in iOS?', options: ['Automatic Reference Counting', 'Apple Remote Control', 'App Review Center', 'Advanced Runtime Compiler'], correct: 0},
            {topic: 'Android', emoji: '🤖📱', question: 'What is the Android activity lifecycle?', options: ['onCreate, onStart, onResume, onPause, onStop, onDestroy', 'Start, Run, End', 'Load, Display, Close', 'Init, Show, Exit'], correct: 0},
            {topic: 'Mobile', emoji: '📲💾', question: 'What is the typical app size limit?', options: ['100-150 MB for initial download', '1 GB', '10 MB', 'No limit'], correct: 0},
            {topic: 'Design', emoji: '🎨📱', question: 'What is the ideal tap target size?', options: ['44x44 points (iOS) / 48x48 dp (Android)', '10x10', '100x100', 'Any size'], correct: 0},
            {topic: 'iOS', emoji: '🍎💻', question: 'What is Grand Central Dispatch?', options: ['iOS concurrency framework', 'Cloud service', 'Database', 'UI framework'], correct: 0},
            {topic: 'Android', emoji: '🤖💻', question: 'What is ProGuard?', options: ['Code shrinking tool', 'UI builder', 'Database', 'Testing tool'], correct: 0},
            {topic: 'Mobile', emoji: '📱⚡', question: 'What percentage of apps are never used?', options: ['~25%', '5%', '75%', '0%'], correct: 0},
            {topic: 'Cross-platform', emoji: '🔄📱', question: 'What is code sharing in cross-platform?', options: ['~70-90% shared code', '10%', '100%', '0%'], correct: 0},
            {topic: 'Mobile', emoji: '📲🔔', question: 'What is notification open rate?', options: ['~5-10%', '90%', '50%', '0%'], correct: 0}
        ],
        extreme: [
            {topic: 'Mobile', emoji: '📱💻', question: 'Name three types of mobile apps', answer: 'Native, Hybrid, Progressive Web App'},
            {topic: 'iOS', emoji: '🍎📱', question: 'Name three iOS frameworks', answer: 'UIKit, SwiftUI, Core Data, Core Animation (any 3)'},
            {topic: 'Android', emoji: '🤖📱', question: 'Name three Android components', answer: 'Activity, Service, Broadcast Receiver, Content Provider (any 3)'},
            {topic: 'Mobile', emoji: '📲💾', question: 'Name three mobile storage options', answer: 'SharedPreferences, SQLite, Room, Realm, File storage (any 3)'},
            {topic: 'Design', emoji: '🎨📱', question: 'Name three mobile design patterns', answer: 'Tab bar, Navigation drawer, Cards, Lists (any 3)'},
            {topic: 'iOS', emoji: '🍎💻', question: 'Name three iOS programming languages', answer: 'Swift, Objective-C, C++'},
            {topic: 'Android', emoji: '🤖💻', question: 'Name three Android UI layouts', answer: 'LinearLayout, RelativeLayout, ConstraintLayout, FrameLayout (any 3)'},
            {topic: 'Mobile', emoji: '📱⚡', question: 'Name three mobile performance metrics', answer: 'Load time, Frame rate, Battery usage, Memory, Network (any 3)'},
            {topic: 'Cross-platform', emoji: '🔄📱', question: 'Name three cross-platform frameworks', answer: 'React Native, Flutter, Xamarin, Ionic, Cordova (any 3)'},
            {topic: 'Mobile', emoji: '📲🔔', question: 'Name three monetization strategies', answer: 'Ads, In-app purchases, Subscriptions, Freemium (any 3)'}
        ]
    },
    4: { // Chapter 4: Cloud Computing
        easy: [
            {topic: 'Cloud', emoji: '☁️💻', question: 'Cloud stores data online.', options: ['True', 'False'], correct: 0},
            {topic: 'Services', emoji: '🌐📦', question: 'AWS is a cloud provider.', options: ['True', 'False'], correct: 0},
            {topic: 'Cloud', emoji: '☁️💾', question: 'Cloud reduces hardware costs.', options: ['True', 'False'], correct: 0},
            {topic: 'Storage', emoji: '📦💽', question: 'Cloud storage is scalable.', options: ['True', 'False'], correct: 0},
            {topic: 'Services', emoji: '🌐🔧', question: 'Azure is Microsoft cloud.', options: ['True', 'False'], correct: 0},
            {topic: 'Cloud', emoji: '☁️🌍', question: 'Cloud is accessible anywhere.', options: ['True', 'False'], correct: 0},
            {topic: 'Computing', emoji: '💻⚡', question: 'Cloud offers flexible resources.', options: ['True', 'False'], correct: 0},
            {topic: 'Services', emoji: '🌐🎯', question: 'Google Cloud is a cloud platform.', options: ['True', 'False'], correct: 0},
            {topic: 'Cloud', emoji: '☁️🔒', question: 'Cloud security is important.', options: ['True', 'False'], correct: 0},
            {topic: 'Backup', emoji: '💾🔄', question: 'Cloud provides backup solutions.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Cloud', emoji: '☁️💻', question: 'What defines cloud computing?', options: ['Internet-based computing', 'Local storage'], correct: 0},
            {topic: 'Services', emoji: '🌐📦', question: 'What is IaaS?', options: ['Infrastructure as a Service', 'Internet as a Service'], correct: 0},
            {topic: 'Cloud', emoji: '☁️💾', question: 'What is PaaS?', options: ['Platform as a Service', 'Product as a Service'], correct: 0},
            {topic: 'Storage', emoji: '📦💽', question: 'What is SaaS?', options: ['Software as a Service', 'Storage as a Service'], correct: 0},
            {topic: 'Services', emoji: '🌐🔧', question: 'What is EC2?', options: ['Amazon virtual servers', 'Database service'], correct: 0},
            {topic: 'Cloud', emoji: '☁️🌍', question: 'What is multi-cloud?', options: ['Using multiple cloud providers', 'Single provider'], correct: 0},
            {topic: 'Computing', emoji: '💻⚡', question: 'What is serverless?', options: ['No server management needed', 'No servers exist'], correct: 0},
            {topic: 'Services', emoji: '🌐🎯', question: 'What is S3?', options: ['Amazon object storage', 'Database'], correct: 0},
            {topic: 'Cloud', emoji: '☁️🔒', question: 'What is VPC?', options: ['Virtual Private Cloud', 'Virtual Public Connection'], correct: 0},
            {topic: 'Backup', emoji: '💾🔄', question: 'What is cloud backup?', options: ['Data stored remotely', 'Local backup'], correct: 0}
        ],
        hard: [
            {topic: 'Cloud', emoji: '☁️💻', question: 'What is hybrid cloud?', options: ['Mix of public and private cloud', 'Public only', 'Private only'], correct: 0},
            {topic: 'Services', emoji: '🌐📦', question: 'What is Lambda?', options: ['Serverless compute service', 'Database', 'Storage'], correct: 0},
            {topic: 'Cloud', emoji: '☁️💾', question: 'What is cloud-native?', options: ['Built specifically for cloud', 'Migrated to cloud', 'Local app'], correct: 0},
            {topic: 'Storage', emoji: '📦💽', question: 'What is object storage?', options: ['Flat data structure', 'Hierarchical files', 'No storage'], correct: 0},
            {topic: 'Services', emoji: '🌐🔧', question: 'What is Kubernetes?', options: ['Container orchestration', 'Database', 'Programming language'], correct: 0},
            {topic: 'Cloud', emoji: '☁️🌍', question: 'What is CDN?', options: ['Content Delivery Network', 'Cloud Database Network', 'Central Data Node'], correct: 0},
            {topic: 'Computing', emoji: '💻⚡', question: 'What is auto-scaling?', options: ['Automatic resource adjustment', 'Fixed capacity', 'No scaling'], correct: 0},
            {topic: 'Services', emoji: '🌐🎯', question: 'What is RDS?', options: ['Relational Database Service', 'Remote Data Storage', 'Real-time Data System'], correct: 0},
            {topic: 'Cloud', emoji: '☁️🔒', question: 'What is IAM?', options: ['Identity and Access Management', 'Internet Access Manager', 'Integrated App Module'], correct: 0},
            {topic: 'Backup', emoji: '💾🔄', question: 'What is disaster recovery?', options: ['Restore after failure', 'Regular backup', 'No recovery'], correct: 0}
        ],
        expert: [
            {topic: 'Cloud', emoji: '☁️💻', question: 'What is typical cloud cost savings?', options: ['20-40%', '90%', '5%', '0%'], correct: 0},
            {topic: 'Services', emoji: '🌐📦', question: 'What is the CAP theorem?', options: ['Consistency, Availability, Partition tolerance', 'Cloud Access Protocol', 'Central Administration Panel', 'Compute and Performance'], correct: 0},
            {topic: 'Cloud', emoji: '☁️💾', question: 'What is eventual consistency?', options: ['Data becomes consistent over time', 'Immediate consistency', 'No consistency', 'Random state'], correct: 0},
            {topic: 'Storage', emoji: '📦💽', question: 'What are the storage classes in S3?', options: ['Standard, IA, Glacier, Deep Archive', 'Fast, Slow', 'Hot, Cold', 'Primary, Secondary'], correct: 0},
            {topic: 'Services', emoji: '🌐🔧', question: 'What is service mesh?', options: ['Infrastructure layer for microservices', 'Cloud storage', 'Database type', 'Security tool'], correct: 0},
            {topic: 'Cloud', emoji: '☁️🌍', question: 'What is cloud bursting?', options: ['Scale to public cloud when needed', 'Cloud failure', 'Data transfer', 'Cost increase'], correct: 0},
            {topic: 'Computing', emoji: '💻⚡', question: 'What is spot instance?', options: ['Unused cloud capacity at discount', 'Reserved capacity', 'No discount', 'Premium service'], correct: 0},
            {topic: 'Services', emoji: '🌐🎯', question: 'What is DynamoDB?', options: ['NoSQL database service', 'SQL database', 'File storage', 'Compute service'], correct: 0},
            {topic: 'Cloud', emoji: '☁️🔒', question: 'What is zero trust security?', options: ['Never trust, always verify', 'Trust everyone', 'No security', 'Perimeter-based'], correct: 0},
            {topic: 'Backup', emoji: '💾🔄', question: 'What is RPO and RTO?', options: ['Recovery Point/Time Objective', 'Resource Planning Options', 'Remote Process Orchestration', 'Real Performance Outcome'], correct: 0}
        ],
        extreme: [
            {topic: 'Cloud', emoji: '☁️💻', question: 'Name three cloud deployment models', answer: 'Public, Private, Hybrid'},
            {topic: 'Services', emoji: '🌐📦', question: 'Name three cloud service models', answer: 'IaaS, PaaS, SaaS'},
            {topic: 'Cloud', emoji: '☁️💾', question: 'Name three major cloud providers', answer: 'AWS, Azure, Google Cloud, IBM Cloud, Oracle Cloud (any 3)'},
            {topic: 'Storage', emoji: '📦💽', question: 'Name three types of cloud storage', answer: 'Object, Block, File storage'},
            {topic: 'Services', emoji: '🌐🔧', question: 'Name three AWS services', answer: 'EC2, S3, Lambda, RDS, DynamoDB (any 3)'},
            {topic: 'Cloud', emoji: '☁️🌍', question: 'Name three cloud migration strategies', answer: 'Rehost, Replatform, Refactor, Retire, Retain (any 3)'},
            {topic: 'Computing', emoji: '💻⚡', question: 'Name three container technologies', answer: 'Docker, Kubernetes, Podman, containerd (any 3)'},
            {topic: 'Services', emoji: '🌐🎯', question: 'Name three cloud monitoring tools', answer: 'CloudWatch, Azure Monitor, Stackdriver, Datadog (any 3)'},
            {topic: 'Cloud', emoji: '☁️🔒', question: 'Name three cloud security measures', answer: 'Encryption, IAM, VPC, Security groups, Firewall (any 3)'},
            {topic: 'Backup', emoji: '💾🔄', question: 'Name three backup strategies', answer: 'Full, Incremental, Differential, Snapshot (any 3)'}
        ]
    },
    5: { // Chapter 5: Cybersecurity
        easy: [
            {topic: 'Security', emoji: '🔒🛡️', question: 'Passwords protect accounts.', options: ['True', 'False'], correct: 0},
            {topic: 'Threats', emoji: '⚠️🦠', question: 'Malware is harmful software.', options: ['True', 'False'], correct: 0},
            {topic: 'Security', emoji: '🔐💻', question: 'Encryption protects data.', options: ['True', 'False'], correct: 0},
            {topic: 'Threats', emoji: '🎣📧', question: 'Phishing tries to steal information.', options: ['True', 'False'], correct: 0},
            {topic: 'Network', emoji: '🌐🔒', question: 'Firewalls block threats.', options: ['True', 'False'], correct: 0},
            {topic: 'Security', emoji: '🔑✅', question: 'Two-factor authentication adds security.', options: ['True', 'False'], correct: 0},
            {topic: 'Threats', emoji: '🦠💻', question: 'Viruses can damage computers.', options: ['True', 'False'], correct: 0},
            {topic: 'Security', emoji: '🔒📱', question: 'Updates fix security holes.', options: ['True', 'False'], correct: 0},
            {topic: 'Privacy', emoji: '🔐👤', question: 'Privacy protects personal data.', options: ['True', 'False'], correct: 0},
            {topic: 'Network', emoji: '🌐🛡️', question: 'VPN encrypts internet traffic.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Security', emoji: '🔒🛡️', question: 'What is cybersecurity?', options: ['Protecting systems from threats', 'Building websites'], correct: 0},
            {topic: 'Threats', emoji: '⚠️🦠', question: 'What is ransomware?', options: ['Malware that encrypts files', 'Antivirus software'], correct: 0},
            {topic: 'Security', emoji: '🔐💻', question: 'What is SSL/TLS?', options: ['Encryption protocol', 'Programming language'], correct: 0},
            {topic: 'Threats', emoji: '🎣📧', question: 'What is social engineering?', options: ['Manipulate people for information', 'Network engineering'], correct: 0},
            {topic: 'Network', emoji: '🌐🔒', question: 'What is DDoS attack?', options: ['Distributed Denial of Service', 'Database Download Service'], correct: 0},
            {topic: 'Security', emoji: '🔑✅', question: 'What is MFA?', options: ['Multi-Factor Authentication', 'Main File Access'], correct: 0},
            {topic: 'Threats', emoji: '🦠💻', question: 'What is zero-day vulnerability?', options: ['Unknown security flaw', 'Old bug'], correct: 0},
            {topic: 'Security', emoji: '🔒📱', question: 'What is penetration testing?', options: ['Testing security defenses', 'Hardware testing'], correct: 0},
            {topic: 'Privacy', emoji: '🔐👤', question: 'What is GDPR?', options: ['Data protection regulation', 'Graphics software'], correct: 0},
            {topic: 'Network', emoji: '🌐🛡️', question: 'What is IDS?', options: ['Intrusion Detection System', 'Internet Data Service'], correct: 0}
        ],
        hard: [
            {topic: 'Security', emoji: '🔒🛡️', question: 'What is defense in depth?', options: ['Multiple layers of security', 'Single firewall', 'No security'], correct: 0},
            {topic: 'Threats', emoji: '⚠️🦠', question: 'What is APT?', options: ['Advanced Persistent Threat', 'Application Programming Tool', 'Automated Process Testing'], correct: 0},
            {topic: 'Security', emoji: '🔐💻', question: 'What is end-to-end encryption?', options: ['Only sender and receiver can read', 'Server can read', 'No encryption'], correct: 0},
            {topic: 'Threats', emoji: '🎣📧', question: 'What is spear phishing?', options: ['Targeted phishing attack', 'Generic email', 'Fishing sport'], correct: 0},
            {topic: 'Network', emoji: '🌐🔒', question: 'What is man-in-the-middle attack?', options: ['Intercept communication', 'Network routing', 'Firewall rule'], correct: 0},
            {topic: 'Security', emoji: '🔑✅', question: 'What is biometric authentication?', options: ['Use physical characteristics', 'Password only', 'No authentication'], correct: 0},
            {topic: 'Threats', emoji: '🦠💻', question: 'What is SQL injection?', options: ['Database attack via input', 'Database backup', 'SQL query'], correct: 0},
            {topic: 'Security', emoji: '🔒📱', question: 'What is SIEM?', options: ['Security Information and Event Management', 'Software Implementation Module', 'System Integration Engine'], correct: 0},
            {topic: 'Privacy', emoji: '🔐👤', question: 'What is data anonymization?', options: ['Remove identifying information', 'Store data', 'Delete data'], correct: 0},
            {topic: 'Network', emoji: '🌐🛡️', question: 'What is network segmentation?', options: ['Divide network into zones', 'Combine networks', 'No division'], correct: 0}
        ],
        expert: [
            {topic: 'Security', emoji: '🔒🛡️', question: 'What percentage of breaches involve human error?', options: ['~85%', '10%', '50%', '0%'], correct: 0},
            {topic: 'Threats', emoji: '⚠️🦠', question: 'What is the average cost of a data breach?', options: ['$4.35M', '$100K', '$10K', '$100M'], correct: 0},
            {topic: 'Security', emoji: '🔐💻', question: 'What is AES encryption key size?', options: ['128, 192, or 256 bits', '64 bits', '512 bits', '1024 bits'], correct: 0},
            {topic: 'Threats', emoji: '🎣📧', question: 'What percentage of emails are phishing?', options: ['~1-3%', '50%', '90%', '0.01%'], correct: 0},
            {topic: 'Network', emoji: '🌐🔒', question: 'What is the OWASP Top 10?', options: ['Critical web security risks', 'Programming languages', 'Cloud services', 'Database types'], correct: 0},
            {topic: 'Security', emoji: '🔑✅', question: 'What is RBAC?', options: ['Role-Based Access Control', 'Remote Backup Access Center', 'Rapid Business Application Cloud', 'Real-time Blockchain Audit Chain'], correct: 0},
            {topic: 'Threats', emoji: '🦠💻', question: 'What is cryptojacking?', options: ['Unauthorized crypto mining', 'Stealing cryptocurrency', 'Blockchain hacking', 'Wallet theft'], correct: 0},
            {topic: 'Security', emoji: '🔒📱', question: 'What is bug bounty program?', options: ['Pay for finding vulnerabilities', 'Software testing', 'Marketing campaign', 'Employee bonus'], correct: 0},
            {topic: 'Privacy', emoji: '🔐👤', question: 'What is PII?', options: ['Personally Identifiable Information', 'Private Internet Interface', 'Protected Internal Infrastructure', 'Public Identity Index'], correct: 0},
            {topic: 'Network', emoji: '🌐🛡️', question: 'What is honeypot in security?', options: ['Decoy system to attract attackers', 'Sweet food', 'Database backup', 'Firewall rule'], correct: 0}
        ],
        extreme: [
            {topic: 'Security', emoji: '🔒🛡️', question: 'Name three security principles (CIA triad)', answer: 'Confidentiality, Integrity, Availability'},
            {topic: 'Threats', emoji: '⚠️🦠', question: 'Name three types of malware', answer: 'Virus, Trojan, Ransomware, Worm, Spyware (any 3)'},
            {topic: 'Security', emoji: '🔐💻', question: 'Name three encryption algorithms', answer: 'AES, RSA, SHA, DES, Blowfish (any 3)'},
            {topic: 'Threats', emoji: '🎣📧', question: 'Name three social engineering tactics', answer: 'Phishing, Pretexting, Baiting, Tailgating, Quid pro quo (any 3)'},
            {topic: 'Network', emoji: '🌐🔒', question: 'Name three types of network attacks', answer: 'DDoS, Man-in-the-middle, Packet sniffing, Spoofing (any 3)'},
            {topic: 'Security', emoji: '🔑✅', question: 'Name three authentication factors', answer: 'Knowledge (password), Possession (token), Inherence (biometric)'},
            {topic: 'Threats', emoji: '🦠💻', question: 'Name three web vulnerabilities', answer: 'SQL injection, XSS, CSRF, Authentication flaws (any 3)'},
            {topic: 'Security', emoji: '🔒📱', question: 'Name three security testing types', answer: 'Penetration testing, Vulnerability scanning, Security audit, Red teaming (any 3)'},
            {topic: 'Privacy', emoji: '🔐👤', question: 'Name three privacy regulations', answer: 'GDPR, CCPA, HIPAA, COPPA, PCI DSS (any 3)'},
            {topic: 'Network', emoji: '🌐🛡️', question: 'Name three firewall types', answer: 'Packet-filtering, Stateful, Application-level, Next-gen (any 3)'}
        ]
    },
    6: { // Chapter 6: Data Science
        easy: [
            {topic: 'Data', emoji: '📊💾', question: 'Data science analyzes data.', options: ['True', 'False'], correct: 0},
            {topic: 'Analysis', emoji: '📈🔍', question: 'Statistics help understand data.', options: ['True', 'False'], correct: 0},
            {topic: 'ML', emoji: '🤖📊', question: 'Machine learning learns from data.', options: ['True', 'False'], correct: 0},
            {topic: 'Data', emoji: '📊🧹', question: 'Data cleaning improves quality.', options: ['True', 'False'], correct: 0},
            {topic: 'Visualization', emoji: '📉🎨', question: 'Charts visualize data.', options: ['True', 'False'], correct: 0},
            {topic: 'Analysis', emoji: '📈💡', question: 'Python is used for data science.', options: ['True', 'False'], correct: 0},
            {topic: 'ML', emoji: '🤖🧠', question: 'AI and ML are related.', options: ['True', 'False'], correct: 0},
            {topic: 'Data', emoji: '📊🗄️', question: 'Data systems store information.', options: ['True', 'False'], correct: 0},
            {topic: 'Visualization', emoji: '📉📊', question: 'Dashboards display metrics.', options: ['True', 'False'], correct: 0},
            {topic: 'Analysis', emoji: '📈🔢', question: 'Math is important for data science.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Data', emoji: '📊💾', question: 'What is data science?', options: ['Extract insights from data', 'Build websites'], correct: 0},
            {topic: 'Analysis', emoji: '📈🔍', question: 'What is exploratory data analysis?', options: ['Investigate data patterns', 'Final report'], correct: 0},
            {topic: 'ML', emoji: '🤖📊', question: 'What is supervised learning?', options: ['Learning with labeled data', 'No labels'], correct: 0},
            {topic: 'Data', emoji: '📊🧹', question: 'What is data wrangling?', options: ['Clean and transform data', 'Store data'], correct: 0},
            {topic: 'Visualization', emoji: '📉🎨', question: 'What is Tableau?', options: ['Data visualization tool', 'Programming language'], correct: 0},
            {topic: 'Analysis', emoji: '📈💡', question: 'What is pandas?', options: ['Python data library', 'Animal'], correct: 0},
            {topic: 'ML', emoji: '🤖🧠', question: 'What is neural network?', options: ['AI model inspired by brain', 'Computer network'], correct: 0},
            {topic: 'Data', emoji: '📊🗄️', question: 'What is big data?', options: ['Large complex datasets', 'Small files'], correct: 0},
            {topic: 'Visualization', emoji: '📉📊', question: 'What is Power BI?', options: ['Microsoft analytics tool', 'Programming language'], correct: 0},
            {topic: 'Analysis', emoji: '📈🔢', question: 'What is correlation?', options: ['Relationship between variables', 'No relationship'], correct: 0}
        ],
        hard: [
            {topic: 'Data', emoji: '📊💾', question: 'What is feature engineering?', options: ['Create meaningful features', 'Delete data', 'Store data'], correct: 0},
            {topic: 'Analysis', emoji: '📈🔍', question: 'What is hypothesis testing?', options: ['Statistical validation', 'Random guessing', 'No testing'], correct: 0},
            {topic: 'ML', emoji: '🤖📊', question: 'What is deep learning?', options: ['Neural networks with many layers', 'Shallow network', 'No learning'], correct: 0},
            {topic: 'Data', emoji: '📊🧹', question: 'What is missing data imputation?', options: ['Fill missing values', 'Delete data', 'Ignore gaps'], correct: 0},
            {topic: 'Visualization', emoji: '📉🎨', question: 'What is D3.js?', options: ['JavaScript visualization library', 'Database', 'Framework'], correct: 0},
            {topic: 'Analysis', emoji: '📈💡', question: 'What is scikit-learn?', options: ['Python ML library', 'Database', 'Web framework'], correct: 0},
            {topic: 'ML', emoji: '🤖🧠', question: 'What is overfitting?', options: ['Model too specific to training data', 'Perfect model', 'No fitting'], correct: 0},
            {topic: 'Data', emoji: '📊🗄️', question: 'What is data lake?', options: ['Raw data repository', 'Structured database', 'Water storage'], correct: 0},
            {topic: 'Visualization', emoji: '📉📊', question: 'What is heat map?', options: ['Color-coded data matrix', 'Temperature chart', 'No visualization'], correct: 0},
            {topic: 'Analysis', emoji: '📈🔢', question: 'What is principal component analysis?', options: ['Dimensionality reduction', 'Data collection', 'No analysis'], correct: 0}
        ],
        expert: [
            {topic: 'Data', emoji: '📊💾', question: 'What percentage of data science work is data preparation?', options: ['~80%', '10%', '50%', '5%'], correct: 0},
            {topic: 'Analysis', emoji: '📈🔍', question: 'What is p-value significance level?', options: ['0.05 or 5%', '1%', '50%', '99%'], correct: 0},
            {topic: 'ML', emoji: '🤖📊', question: 'What is the curse of dimensionality?', options: ['Problems with high-dimensional data', 'Too little data', 'Perfect dimensions', 'No issues'], correct: 0},
            {topic: 'Data', emoji: '📊🧹', question: 'What is data quality target?', options: ['95%+ accuracy', '50%', '10%', '100%'], correct: 0},
            {topic: 'Visualization', emoji: '📉🎨', question: 'What is Tufte data-ink ratio principle?', options: ['Maximize data, minimize ink', 'More decoration', 'No principle', 'Random design'], correct: 0},
            {topic: 'Analysis', emoji: '📈💡', question: 'What is cross-validation?', options: ['Split data for validation', 'Single test', 'No validation', 'Random split'], correct: 0},
            {topic: 'ML', emoji: '🤖🧠', question: 'What is typical train-test split?', options: ['70-30 or 80-20', '50-50', '90-10', '100-0'], correct: 0},
            {topic: 'Data', emoji: '📊🗄️', question: 'What is ETL in data engineering?', options: ['Extract, Transform, Load', 'Execute, Test, Launch', 'Evaluate, Train, Learn', 'Export, Transfer, Log'], correct: 0},
            {topic: 'Visualization', emoji: '📉📊', question: 'What is the Gestalt principle?', options: ['How humans perceive visual elements', 'Chart type', 'Color scheme', 'No principle'], correct: 0},
            {topic: 'Analysis', emoji: '📈🔢', question: 'What is Bayes theorem used for?', options: ['Update probability with new evidence', 'Sort data', 'Visualize', 'Delete records'], correct: 0}
        ],
        extreme: [
            {topic: 'Data', emoji: '📊💾', question: 'Name three data science roles', answer: 'Data Scientist, Data Analyst, Data Engineer, ML Engineer (any 3)'},
            {topic: 'Analysis', emoji: '📈🔍', question: 'Name three statistical methods', answer: 'Regression, Hypothesis testing, ANOVA, Chi-square, Bayesian (any 3)'},
            {topic: 'ML', emoji: '🤖📊', question: 'Name three ML algorithms', answer: 'Linear regression, Decision trees, Random forest, Neural networks, SVM (any 3)'},
            {topic: 'Data', emoji: '📊🧹', question: 'Name three data cleaning techniques', answer: 'Handle missing values, Remove duplicates, Normalize, Outlier detection (any 3)'},
            {topic: 'Visualization', emoji: '📉🎨', question: 'Name three visualization tools', answer: 'Tableau, Power BI, Matplotlib, Seaborn, D3.js (any 3)'},
            {topic: 'Analysis', emoji: '📈💡', question: 'Name three Python data libraries', answer: 'Pandas, NumPy, Scikit-learn, Matplotlib, SciPy (any 3)'},
            {topic: 'ML', emoji: '🤖🧠', question: 'Name three neural network types', answer: 'CNN, RNN, GAN, Transformer, Autoencoder (any 3)'},
            {topic: 'Data', emoji: '📊🗄️', question: 'Name three database categories', answer: 'SQL, NoSQL, Graph, Time-series, Key-value (any 3)'},
            {topic: 'Visualization', emoji: '📉📊', question: 'Name three chart types', answer: 'Bar, Line, Scatter, Pie, Heat map (any 3)'},
            {topic: 'Analysis', emoji: '📈🔢', question: 'Name three measures of central tendency', answer: 'Mean, Median, Mode'}
        ]
    },
    
    7: { // Chapter 7: Artificial Intelligence
        easy: [
            {topic: 'AI', emoji: '🤖🧠', question: 'AI mimics human intelligence.', options: ['True', 'False'], correct: 0},
            {topic: 'Learning', emoji: '📚🤖', question: 'AI can learn from data.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🎯🤖', question: 'AI powers voice assistants.', options: ['True', 'False'], correct: 0},
            {topic: 'AI', emoji: '🤖💡', question: 'AI makes predictions.', options: ['True', 'False'], correct: 0},
            {topic: 'Vision', emoji: '👁️🤖', question: 'AI can recognize images.', options: ['True', 'False'], correct: 0},
            {topic: 'Language', emoji: '💬🤖', question: 'AI understands natural language.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🚗🤖', question: 'AI enables self-driving cars.', options: ['True', 'False'], correct: 0},
            {topic: 'AI', emoji: '🤖🎮', question: 'AI plays games better than humans.', options: ['True', 'False'], correct: 0},
            {topic: 'Learning', emoji: '📊🤖', question: 'AI improves with more data.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🏥🤖', question: 'AI helps in medical diagnosis.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'AI', emoji: '🤖🧠', question: 'What is artificial intelligence?', options: ['Machines simulating human intelligence', 'Human brain'], correct: 0},
            {topic: 'Learning', emoji: '📚🤖', question: 'What defines deep learning?', options: ['ML with neural networks', 'Shallow learning'], correct: 0},
            {topic: 'Applications', emoji: '🎯🤖', question: 'What is natural language processing?', options: ['AI understanding human language', 'Programming language'], correct: 0},
            {topic: 'AI', emoji: '🤖💡', question: 'What is reinforcement learning?', options: ['Learn through rewards', 'Supervised learning'], correct: 0},
            {topic: 'Vision', emoji: '👁️🤖', question: 'What is computer vision?', options: ['AI interpreting visual data', 'Screen resolution'], correct: 0},
            {topic: 'Language', emoji: '💬🤖', question: 'What is ChatGPT?', options: ['AI language model', 'Chat application'], correct: 0},
            {topic: 'Applications', emoji: '🚗🤖', question: 'What is autonomous vehicle?', options: ['Self-driving car', 'Manual car'], correct: 0},
            {topic: 'AI', emoji: '🤖🎮', question: 'What is game AI?', options: ['AI for gaming behavior', 'Video game'], correct: 0},
            {topic: 'Learning', emoji: '📊🤖', question: 'What is transfer learning?', options: ['Apply learned knowledge to new tasks', 'Start from scratch'], correct: 0},
            {topic: 'Applications', emoji: '🏥🤖', question: 'What is medical AI?', options: ['AI for healthcare', 'Medical device'], correct: 0}
        ],
        hard: [
            {topic: 'AI', emoji: '🤖🧠', question: 'What is AGI?', options: ['Artificial General Intelligence', 'Advanced Graphics Interface', 'Automated Group Intelligence'], correct: 0},
            {topic: 'Learning', emoji: '📚🤖', question: 'What is transformer architecture?', options: ['Attention-based neural network', 'Traditional RNN', 'Simple network'], correct: 0},
            {topic: 'Applications', emoji: '🎯🤖', question: 'What is sentiment analysis?', options: ['Determine emotional tone', 'Grammar check', 'Translation'], correct: 0},
            {topic: 'AI', emoji: '🤖💡', question: 'What is generative AI?', options: ['Creates new content', 'Classifies data', 'Deletes content'], correct: 0},
            {topic: 'Vision', emoji: '👁️🤖', question: 'What is object detection?', options: ['Identify and locate objects', 'Take photos', 'Display images'], correct: 0},
            {topic: 'Language', emoji: '💬🤖', question: 'What is BERT?', options: ['Bidirectional language model', 'Simple chatbot', 'Database'], correct: 0},
            {topic: 'Applications', emoji: '🚗🤖', question: 'What is LIDAR in autonomous vehicles?', options: ['Light detection and ranging', 'GPS system', 'Camera'], correct: 0},
            {topic: 'AI', emoji: '🤖🎮', question: 'What is Monte Carlo Tree Search?', options: ['Game AI algorithm', 'Graphics rendering', 'Save system'], correct: 0},
            {topic: 'Learning', emoji: '📊🤖', question: 'What is ensemble learning?', options: ['Combine multiple models', 'Single model', 'No learning'], correct: 0},
            {topic: 'Applications', emoji: '🏥🤖', question: 'What is radiology AI?', options: ['Analyze medical images', 'Patient records', 'Lab tests'], correct: 0}
        ],
        expert: [
            {topic: 'AI', emoji: '🤖🧠', question: 'What is the Turing Test?', options: ['Test if machine exhibits human intelligence', 'Speed test', 'Memory test', 'Graphics test'], correct: 0},
            {topic: 'Learning', emoji: '📚🤖', question: 'What is the vanishing gradient problem?', options: ['Gradients become too small in backpropagation', 'Too large gradients', 'Perfect gradients', 'No problem'], correct: 0},
            {topic: 'Applications', emoji: '🎯🤖', question: 'What is GPT in ChatGPT?', options: ['Generative Pre-trained Transformer', 'General Purpose Text', 'Graphical Processing Tool', 'Global Pattern Training'], correct: 0},
            {topic: 'AI', emoji: '🤖💡', question: 'What is the credit assignment problem?', options: ['Determine which actions led to outcome', 'Assign credits', 'Payment system', 'No problem'], correct: 0},
            {topic: 'Vision', emoji: '👁️🤖', question: 'What is YOLO in computer vision?', options: ['You Only Look Once (object detection)', 'Graphics engine', 'Image filter', 'Video player'], correct: 0},
            {topic: 'Language', emoji: '💬🤖', question: 'What is few-shot learning?', options: ['Learn from few examples', 'Many examples', 'No examples', 'One example only'], correct: 0},
            {topic: 'Applications', emoji: '🚗🤖', question: 'What level is full self-driving?', options: ['Level 5', 'Level 1', 'Level 0', 'Level 10'], correct: 0},
            {topic: 'AI', emoji: '🤖🎮', question: 'What did AlphaGo achieve?', options: ['Beat world Go champion', 'Play chess', 'Solve puzzles', 'No achievement'], correct: 0},
            {topic: 'Learning', emoji: '📊🤖', question: 'What is catastrophic forgetting?', options: ['Neural network forgets old tasks', 'Remembers everything', 'No forgetting', 'Perfect memory'], correct: 0},
            {topic: 'Applications', emoji: '🏥🤖', question: 'What accuracy do medical AI systems achieve?', options: ['~90-95% for specific tasks', '50%', '100%', '10%'], correct: 0}
        ],
        extreme: [
            {topic: 'AI', emoji: '🤖🧠', question: 'Name three types of AI', answer: 'Narrow AI, General AI, Super AI'},
            {topic: 'Learning', emoji: '📚🤖', question: 'Name three machine learning types', answer: 'Supervised, Unsupervised, Reinforcement learning'},
            {topic: 'Applications', emoji: '🎯🤖', question: 'Name three NLP tasks', answer: 'Translation, Sentiment analysis, Named entity recognition, Text generation (any 3)'},
            {topic: 'AI', emoji: '🤖💡', question: 'Name three generative AI models', answer: 'GPT, DALL-E, Midjourney, Stable Diffusion (any 3)'},
            {topic: 'Vision', emoji: '👁️🤖', question: 'Name three computer vision tasks', answer: 'Object detection, Image classification, Segmentation, Face recognition (any 3)'},
            {topic: 'Language', emoji: '💬🤖', question: 'Name three large language models', answer: 'GPT, BERT, Claude, LLaMA, PaLM (any 3)'},
            {topic: 'Applications', emoji: '🚗🤖', question: 'Name three autonomous driving sensors', answer: 'LIDAR, Camera, Radar, Ultrasonic (any 3)'},
            {topic: 'AI', emoji: '🤖🎮', question: 'Name three AI game milestones', answer: 'Deep Blue (chess), AlphaGo (Go), OpenAI Five (Dota 2) (any 3)'},
            {topic: 'Learning', emoji: '📊🤖', question: 'Name three neural network architectures', answer: 'CNN, RNN, Transformer, GAN, Autoencoder (any 3)'},
            {topic: 'Applications', emoji: '🏥🤖', question: 'Name three medical AI applications', answer: 'Radiology, Drug discovery, Diagnosis, Surgery assistance (any 3)'}
        ]
    },
    8: { // Chapter 8: Blockchain
        easy: [
            {topic: 'Blockchain', emoji: '⛓️💎', question: 'Blockchain is a distributed ledger.', options: ['True', 'False'], correct: 0},
            {topic: 'Crypto', emoji: '💰🔐', question: 'Bitcoin uses blockchain.', options: ['True', 'False'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️🔒', question: 'Blockchain is secure.', options: ['True', 'False'], correct: 0},
            {topic: 'Crypto', emoji: '💎💸', question: 'Cryptocurrencies are digital money.', options: ['True', 'False'], correct: 0},
            {topic: 'Smart Contracts', emoji: '📝⛓️', question: 'Smart contracts execute automatically.', options: ['True', 'False'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️📊', question: 'Blockchain records are permanent.', options: ['True', 'False'], correct: 0},
            {topic: 'Crypto', emoji: '💰🌐', question: 'Crypto transactions are global.', options: ['True', 'False'], correct: 0},
            {topic: 'Mining', emoji: '⛏️💎', question: 'Mining validates blockchain transactions.', options: ['True', 'False'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️🔓', question: 'Blockchain is transparent.', options: ['True', 'False'], correct: 0},
            {topic: 'Crypto', emoji: '💸🔐', question: 'Wallets store cryptocurrency.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Blockchain', emoji: '⛓️💎', question: 'What is blockchain technology?', options: ['Distributed ledger technology', 'Single database'], correct: 0},
            {topic: 'Crypto', emoji: '💰🔐', question: 'What is cryptocurrency?', options: ['Digital currency using cryptography', 'Physical money'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️🔒', question: 'What is a block?', options: ['Container of transactions', 'Physical box'], correct: 0},
            {topic: 'Crypto', emoji: '💎💸', question: 'What is Ethereum?', options: ['Blockchain platform', 'Payment app'], correct: 0},
            {topic: 'Smart Contracts', emoji: '📝⛓️', question: 'What is a smart contract?', options: ['Self-executing contract on blockchain', 'Paper contract'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️📊', question: 'What is decentralization?', options: ['No central authority', 'Single control'], correct: 0},
            {topic: 'Crypto', emoji: '💰🌐', question: 'What is a token?', options: ['Digital asset on blockchain', 'Physical coin'], correct: 0},
            {topic: 'Mining', emoji: '⛏️💎', question: 'What is mining?', options: ['Validate and add transactions', 'Dig for gold'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️🔓', question: 'What is a hash?', options: ['Cryptographic fingerprint', 'Random number'], correct: 0},
            {topic: 'Crypto', emoji: '💸🔐', question: 'What is a wallet?', options: ['Store crypto keys', 'Physical wallet'], correct: 0}
        ],
        hard: [
            {topic: 'Blockchain', emoji: '⛓️💎', question: 'What is consensus mechanism?', options: ['Agreement protocol for validation', 'Single approval', 'No agreement'], correct: 0},
            {topic: 'Crypto', emoji: '💰🔐', question: 'What is proof of work?', options: ['Mining-based consensus', 'Proof of identity', 'No proof'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️🔒', question: 'What is a Merkle tree?', options: ['Hash tree of transactions', 'Plant species', 'Database'], correct: 0},
            {topic: 'Crypto', emoji: '💎💸', question: 'What is a fork in blockchain?', options: ['Protocol change creating split', 'Utensil', 'No change'], correct: 0},
            {topic: 'Smart Contracts', emoji: '📝⛓️', question: 'What is Solidity?', options: ['Smart contract programming language', 'State of matter', 'Database'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️📊', question: 'What is a node?', options: ['Computer maintaining blockchain', 'Network cable', 'No connection'], correct: 0},
            {topic: 'Crypto', emoji: '💰🌐', question: 'What is DeFi?', options: ['Decentralized Finance', 'Default Interface', 'Defined Finance'], correct: 0},
            {topic: 'Mining', emoji: '⛏️💎', question: 'What is proof of stake?', options: ['Validation by holding coins', 'Mining hardware', 'No validation'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️🔓', question: 'What is a public blockchain?', options: ['Open to everyone', 'Private access', 'No access'], correct: 0},
            {topic: 'Crypto', emoji: '💸🔐', question: 'What is a private key?', options: ['Secret key for wallet access', 'Public information', 'No security'], correct: 0}
        ],
        expert: [
            {topic: 'Blockchain', emoji: '⛓️💎', question: 'What is the blockchain trilemma?', options: ['Decentralization, Security, Scalability trade-off', 'Three blockchains', 'No problem', 'Perfect solution'], correct: 0},
            {topic: 'Crypto', emoji: '💰🔐', question: 'What is Bitcoin block time?', options: ['~10 minutes', '1 second', '1 hour', '1 day'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️🔒', question: 'What is the 51% attack?', options: ['Majority control of network', 'Small attack', 'No attack', '100% control'], correct: 0},
            {topic: 'Crypto', emoji: '💎💸', question: 'What is market cap of Bitcoin?', options: ['$500B-$1T range', '$1B', '$10T', '$100M'], correct: 0},
            {topic: 'Smart Contracts', emoji: '📝⛓️', question: 'What is gas in Ethereum?', options: ['Transaction fee unit', 'Fuel type', 'No cost', 'Fixed price'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️📊', question: 'What is sharding?', options: ['Partition blockchain for scalability', 'Break blockchain', 'No scaling', 'Delete data'], correct: 0},
            {topic: 'Crypto', emoji: '💰🌐', question: 'What is an NFT?', options: ['Non-Fungible Token', 'New Financial Tool', 'Network File Transfer', 'No Fixed Type'], correct: 0},
            {topic: 'Mining', emoji: '⛏️💎', question: 'What is hash rate?', options: ['Mining power per second', 'Storage size', 'No measure', 'Random number'], correct: 0},
            {topic: 'Blockchain', emoji: '⛓️🔓', question: 'What is Byzantine Fault Tolerance?', options: ['Consensus despite faulty nodes', 'No tolerance', 'Perfect nodes', 'Single failure'], correct: 0},
            {topic: 'Crypto', emoji: '💸🔐', question: 'What is cold storage?', options: ['Offline wallet storage', 'Online wallet', 'No storage', 'Hot storage'], correct: 0}
        ],
        extreme: [
            {topic: 'Blockchain', emoji: '⛓️💎', question: 'Name three blockchain types', answer: 'Public, Private, Consortium'},
            {topic: 'Crypto', emoji: '💰🔐', question: 'Name three cryptocurrencies', answer: 'Bitcoin, Ethereum, Binance Coin, Cardano, Solana (any 3)'},
            {topic: 'Blockchain', emoji: '⛓️🔒', question: 'Name three consensus mechanisms', answer: 'Proof of Work, Proof of Stake, Delegated PoS, PBFT (any 3)'},
            {topic: 'Crypto', emoji: '💎💸', question: 'Name three blockchain platforms', answer: 'Ethereum, Solana, Cardano, Polkadot, Binance Smart Chain (any 3)'},
            {topic: 'Smart Contracts', emoji: '📝⛓️', question: 'Name three smart contract use cases', answer: 'DeFi, NFTs, DAOs, Supply chain, Insurance (any 3)'},
            {topic: 'Blockchain', emoji: '⛓️📊', question: 'Name three blockchain components', answer: 'Blocks, Nodes, Consensus, Cryptography (any 3)'},
            {topic: 'Crypto', emoji: '💰🌐', question: 'Name three DeFi protocols', answer: 'Uniswap, Aave, Compound, MakerDAO, Curve (any 3)'},
            {topic: 'Mining', emoji: '⛏️💎', question: 'Name three mining equipment types', answer: 'ASIC, GPU, CPU mining'},
            {topic: 'Blockchain', emoji: '⛓️🔓', question: 'Name three blockchain challenges', answer: 'Scalability, Energy consumption, Regulation, Interoperability (any 3)'},
            {topic: 'Crypto', emoji: '💸🔐', question: 'Name three wallet types', answer: 'Hot wallet, Cold wallet, Hardware wallet, Paper wallet (any 3)'}
        ]
    },
    9: { // Chapter 9: Internet of Things (IoT)
        easy: [
            {topic: 'IoT', emoji: '🌐📱', question: 'IoT connects devices to internet.', options: ['True', 'False'], correct: 0},
            {topic: 'Devices', emoji: '📟💡', question: 'Smart home uses IoT.', options: ['True', 'False'], correct: 0},
            {topic: 'IoT', emoji: '🌐🔌', question: 'IoT devices collect data.', options: ['True', 'False'], correct: 0},
            {topic: 'Sensors', emoji: '📡🌡️', question: 'Sensors measure physical conditions.', options: ['True', 'False'], correct: 0},
            {topic: 'Devices', emoji: '⌚📱', question: 'Wearables are IoT devices.', options: ['True', 'False'], correct: 0},
            {topic: 'IoT', emoji: '🌐🏠', question: 'IoT enables remote control.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🚗📡', question: 'Connected cars use IoT.', options: ['True', 'False'], correct: 0},
            {topic: 'IoT', emoji: '🌐💾', question: 'IoT generates big data.', options: ['True', 'False'], correct: 0},
            {topic: 'Devices', emoji: '🔊📱', question: 'Smart speakers use IoT.', options: ['True', 'False'], correct: 0},
            {topic: 'IoT', emoji: '🌐🔒', question: 'IoT security is important.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'IoT', emoji: '🌐📱', question: 'What is IoT?', options: ['Internet of Things - connected devices', 'Internet of Technology'], correct: 0},
            {topic: 'Devices', emoji: '📟💡', question: 'What is a smart home?', options: ['Home with connected devices', 'Regular home'], correct: 0},
            {topic: 'IoT', emoji: '🌐🔌', question: 'What is MQTT?', options: ['IoT messaging protocol', 'Programming language'], correct: 0},
            {topic: 'Sensors', emoji: '📡🌡️', question: 'What is a temperature sensor?', options: ['Measures temperature', 'Displays time'], correct: 0},
            {topic: 'Devices', emoji: '⌚📱', question: 'What is a smartwatch?', options: ['Wearable with connectivity', 'Regular watch'], correct: 0},
            {topic: 'IoT', emoji: '🌐🏠', question: 'What is home automation?', options: ['Automated home control', 'Manual control'], correct: 0},
            {topic: 'Applications', emoji: '🚗📡', question: 'What is a connected car?', options: ['Vehicle with internet connectivity', 'Regular car'], correct: 0},
            {topic: 'IoT', emoji: '🌐💾', question: 'What is edge computing?', options: ['Process data near source', 'Cloud only'], correct: 0},
            {topic: 'Devices', emoji: '🔊📱', question: 'What is Alexa?', options: ['Amazon voice assistant', 'Speaker brand'], correct: 0},
            {topic: 'IoT', emoji: '🌐🔒', question: 'What is IoT security risk?', options: ['Vulnerable devices can be hacked', 'No risks'], correct: 0}
        ],
        hard: [
            {topic: 'IoT', emoji: '🌐📱', question: 'What is M2M communication?', options: ['Machine to Machine', 'Man to Machine', 'Mobile to Mobile'], correct: 0},
            {topic: 'Devices', emoji: '📟💡', question: 'What is Zigbee?', options: ['Low-power wireless protocol', 'Device brand', 'Programming language'], correct: 0},
            {topic: 'IoT', emoji: '🌐🔌', question: 'What is CoAP?', options: ['Constrained Application Protocol', 'Cloud Access Protocol', 'Computer Application Program'], correct: 0},
            {topic: 'Sensors', emoji: '📡🌡️', question: 'What is an actuator?', options: ['Device that performs action', 'Data sensor', 'Display'], correct: 0},
            {topic: 'Devices', emoji: '⌚📱', question: 'What is fitness tracker?', options: ['Wearable monitoring activity', 'Timer', 'Calculator'], correct: 0},
            {topic: 'IoT', emoji: '🌐🏠', question: 'What is a smart thermostat?', options: ['Connected temperature controller', 'Regular thermostat', 'Heater'], correct: 0},
            {topic: 'Applications', emoji: '🚗📡', question: 'What is V2X communication?', options: ['Vehicle to Everything', 'Video to XML', 'Voice to Text'], correct: 0},
            {topic: 'IoT', emoji: '🌐💾', question: 'What is fog computing?', options: ['Distributed edge computing', 'Cloud computing', 'No computing'], correct: 0},
            {topic: 'Devices', emoji: '🔊📱', question: 'What is a smart plug?', options: ['Connected power outlet', 'Regular plug', 'USB port'], correct: 0},
            {topic: 'IoT', emoji: '🌐🔒', question: 'What is device provisioning?', options: ['Configure and register device', 'Delete device', 'Power on'], correct: 0}
        ],
        expert: [
            {topic: 'IoT', emoji: '🌐📱', question: 'How many IoT devices by 2025?', options: ['~30-40 billion', '1 billion', '100 billion', '1 million'], correct: 0},
            {topic: 'Devices', emoji: '📟💡', question: 'What is the typical IoT device lifespan?', options: ['3-5 years', '1 year', '20 years', '1 month'], correct: 0},
            {topic: 'IoT', emoji: '🌐🔌', question: 'What is LoRaWAN?', options: ['Long Range Wide Area Network', 'Local Radio Access Network', 'Low Rate Wireless Application', 'Limited Range WAN'], correct: 0},
            {topic: 'Sensors', emoji: '📡🌡️', question: 'What is typical sensor sampling rate?', options: ['1-1000 Hz depending on application', '1 MHz', '1 Hz only', 'No sampling'], correct: 0},
            {topic: 'Devices', emoji: '⌚📱', question: 'What is BLE?', options: ['Bluetooth Low Energy', 'Basic Link Encryption', 'Battery Life Extension', 'Binary Logic Engine'], correct: 0},
            {topic: 'IoT', emoji: '🌐🏠', question: 'What is Z-Wave?', options: ['Wireless protocol for home automation', 'Sound wave', 'Light wave', 'No wave'], correct: 0},
            {topic: 'Applications', emoji: '🚗📡', question: 'What is OBD-II?', options: ['On-Board Diagnostics interface', 'Optical Beam Detector', 'Online Database', 'Operating Base Design'], correct: 0},
            {topic: 'IoT', emoji: '🌐💾', question: 'What is digital twin?', options: ['Virtual replica of physical device', 'Two devices', 'Backup system', 'No replica'], correct: 0},
            {topic: 'Devices', emoji: '🔊📱', question: 'What is wake word detection?', options: ['Activate device by voice trigger', 'Sleep mode', 'No activation', 'Manual button'], correct: 0},
            {topic: 'IoT', emoji: '🌐🔒', question: 'What percentage of IoT devices have security flaws?', options: ['~70-80%', '10%', '0%', '100%'], correct: 0}
        ],
        extreme: [
            {topic: 'IoT', emoji: '🌐📱', question: 'Name three IoT communication protocols', answer: 'MQTT, CoAP, HTTP, AMQP, WebSocket (any 3)'},
            {topic: 'Devices', emoji: '📟💡', question: 'Name three smart home devices', answer: 'Smart speaker, Thermostat, Light bulb, Lock, Camera (any 3)'},
            {topic: 'IoT', emoji: '🌐🔌', question: 'Name three IoT wireless technologies', answer: 'WiFi, Bluetooth, Zigbee, Z-Wave, LoRa (any 3)'},
            {topic: 'Sensors', emoji: '📡🌡️', question: 'Name three sensor types', answer: 'Temperature, Pressure, Motion, Humidity, Light (any 3)'},
            {topic: 'Devices', emoji: '⌚📱', question: 'Name three wearable devices', answer: 'Smartwatch, Fitness tracker, Smart glasses, Smart ring (any 3)'},
            {topic: 'IoT', emoji: '🌐🏠', question: 'Name three home automation systems', answer: 'Google Home, Amazon Alexa, Apple HomeKit, Samsung SmartThings (any 3)'},
            {topic: 'Applications', emoji: '🚗📡', question: 'Name three IoT application areas', answer: 'Smart home, Healthcare, Agriculture, Industrial, Transportation (any 3)'},
            {topic: 'IoT', emoji: '🌐💾', question: 'Name three IoT computing paradigms', answer: 'Cloud computing, Edge computing, Fog computing'},
            {topic: 'Devices', emoji: '🔊📱', question: 'Name three voice assistants', answer: 'Alexa, Google Assistant, Siri, Cortana (any 3)'},
            {topic: 'IoT', emoji: '🌐🔒', question: 'Name three IoT security measures', answer: 'Encryption, Authentication, Firmware updates, Network segmentation (any 3)'}
        ]
    },
    10: { // Chapter 10: DevOps
        easy: [
            {topic: 'DevOps', emoji: '🔧⚙️', question: 'DevOps combines development and operations.', options: ['True', 'False'], correct: 0},
            {topic: 'CI/CD', emoji: '🔄🚀', question: 'CI/CD automates deployments.', options: ['True', 'False'], correct: 0},
            {topic: 'DevOps', emoji: '🔧💻', question: 'DevOps improves collaboration.', options: ['True', 'False'], correct: 0},
            {topic: 'Tools', emoji: '🛠️📦', question: 'Git is for version control.', options: ['True', 'False'], correct: 0},
            {topic: 'Containers', emoji: '📦🐳', question: 'Docker creates containers.', options: ['True', 'False'], correct: 0},
            {topic: 'DevOps', emoji: '🔧⚡', question: 'DevOps speeds up delivery.', options: ['True', 'False'], correct: 0},
            {topic: 'Monitoring', emoji: '📊👁️', question: 'Monitoring tracks system health.', options: ['True', 'False'], correct: 0},
            {topic: 'DevOps', emoji: '🔧🔄', question: 'Automation reduces errors.', options: ['True', 'False'], correct: 0},
            {topic: 'Infrastructure', emoji: '🏗️💻', question: 'Infrastructure as code manages resources.', options: ['True', 'False'], correct: 0},
            {topic: 'DevOps', emoji: '🔧📈', question: 'DevOps improves quality.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'DevOps', emoji: '🔧⚙️', question: 'What is DevOps?', options: ['Culture of dev and ops collaboration', 'Development only'], correct: 0},
            {topic: 'CI/CD', emoji: '🔄🚀', question: 'What is CI?', options: ['Continuous Integration', 'Code Inspection'], correct: 0},
            {topic: 'DevOps', emoji: '🔧💻', question: 'What is CD?', options: ['Continuous Deployment/Delivery', 'Code Development'], correct: 0},
            {topic: 'Tools', emoji: '🛠️📦', question: 'What is Jenkins?', options: ['Automation server', 'Database'], correct: 0},
            {topic: 'Containers', emoji: '📦🐳', question: 'What is containerization?', options: ['Package app with dependencies', 'Virtual machine'], correct: 0},
            {topic: 'DevOps', emoji: '🔧⚡', question: 'What is deployment pipeline?', options: ['Automated release process', 'Manual release'], correct: 0},
            {topic: 'Monitoring', emoji: '📊👁️', question: 'What is observability?', options: ['Understanding system internal state', 'Basic monitoring'], correct: 0},
            {topic: 'DevOps', emoji: '🔧🔄', question: 'What is GitOps?', options: ['Git as source of truth', 'Git tutorials'], correct: 0},
            {topic: 'Infrastructure', emoji: '🏗️💻', question: 'What is IaC?', options: ['Infrastructure as Code', 'Internet as Code'], correct: 0},
            {topic: 'DevOps', emoji: '🔧📈', question: 'What is shift left?', options: ['Test earlier in development', 'Move right', 'No testing'], correct: 0}
        ],
        hard: [
            {topic: 'DevOps', emoji: '🔧⚙️', question: 'What is the DevOps feedback loop?', options: ['Continuous improvement cycle', 'One-way process', 'No feedback'], correct: 0},
            {topic: 'CI/CD', emoji: '🔄🚀', question: 'What is blue-green deployment?', options: ['Two identical production environments', 'One environment', 'No deployment'], correct: 0},
            {topic: 'DevOps', emoji: '🔧💻', question: 'What is canary deployment?', options: ['Gradual rollout to subset', 'All at once', 'No rollout'], correct: 0},
            {topic: 'Tools', emoji: '🛠️📦', question: 'What is Ansible?', options: ['Configuration management tool', 'Database', 'Programming language'], correct: 0},
            {topic: 'Containers', emoji: '📦🐳', question: 'What is Kubernetes used for?', options: ['Container orchestration platform', 'Database', 'Web server'], correct: 0},
            {topic: 'DevOps', emoji: '🔧⚡', question: 'What is immutable infrastructure?', options: ['Replace rather than modify', 'Always modify', 'No changes'], correct: 0},
            {topic: 'Monitoring', emoji: '📊👁️', question: 'What is Prometheus?', options: ['Monitoring and alerting toolkit', 'Database', 'Web framework'], correct: 0},
            {topic: 'DevOps', emoji: '🔧🔄', question: 'What is trunk-based development?', options: ['Developers work on single branch', 'Many branches', 'No branches'], correct: 0},
            {topic: 'Infrastructure', emoji: '🏗️💻', question: 'What is Terraform?', options: ['Infrastructure provisioning tool', 'Cloud provider', 'Database'], correct: 0},
            {topic: 'DevOps', emoji: '🔧📈', question: 'What is site reliability engineering?', options: ['Apply software to operations', 'Manual operations', 'No engineering'], correct: 0}
        ],
        expert: [
            {topic: 'DevOps', emoji: '🔧⚙️', question: 'What are the Three Ways of DevOps?', options: ['Flow, Feedback, Continuous Learning', 'Fast, Reliable, Secure', 'Plan, Build, Deploy', 'Code, Test, Release'], correct: 0},
            {topic: 'CI/CD', emoji: '🔄🚀', question: 'What is typical deployment frequency for elite teams?', options: ['Multiple times per day', 'Once a month', 'Once a year', 'Never'], correct: 0},
            {topic: 'DevOps', emoji: '🔧💻', question: 'What is MTTR?', options: ['Mean Time To Recovery', 'Maximum Total Test Rate', 'Minimum Technical Test Requirement', 'Most Tested Technical Release'], correct: 0},
            {topic: 'Tools', emoji: '🛠️📦', question: 'What is GitLab CI/CD?', options: ['Integrated DevOps platform', 'Git client', 'Code editor', 'Database'], correct: 0},
            {topic: 'Containers', emoji: '📦🐳', question: 'What is a pod in Kubernetes?', options: ['Smallest deployable unit', 'Container image', 'Server', 'Database'], correct: 0},
            {topic: 'DevOps', emoji: '🔧⚡', question: 'What is chaos engineering?', options: ['Test system resilience by breaking things', 'Random coding', 'No testing', 'Perfect system'], correct: 0},
            {topic: 'Monitoring', emoji: '📊👁️', question: 'What are the four golden signals?', options: ['Latency, Traffic, Errors, Saturation', 'Speed, Size, Cost, Time', 'CPU, Memory, Disk, Network', 'Fast, Slow, Medium, Stop'], correct: 0},
            {topic: 'DevOps', emoji: '🔧🔄', question: 'What is feature flag?', options: ['Toggle features without deployment', 'Delete features', 'No control', 'Manual change'], correct: 0},
            {topic: 'Infrastructure', emoji: '🏗️💻', question: 'What is idempotency?', options: ['Same result regardless of repetition', 'Different results', 'One-time only', 'Random results'], correct: 0},
            {topic: 'DevOps', emoji: '🔧📈', question: 'What is typical change failure rate for elite teams?', options: ['0-15%', '50%', '90%', '100%'], correct: 0}
        ],
        extreme: [
            {topic: 'DevOps', emoji: '🔧⚙️', question: 'Name three DevOps principles', answer: 'Automation, Collaboration, Continuous improvement, Measurement (any 3)'},
            {topic: 'CI/CD', emoji: '🔄🚀', question: 'Name three deployment strategies', answer: 'Blue-green, Canary, Rolling, Recreate (any 3)'},
            {topic: 'DevOps', emoji: '🔧💻', question: 'Name three CI/CD tools', answer: 'Jenkins, GitLab CI, GitHub Actions, CircleCI, Travis CI (any 3)'},
            {topic: 'Tools', emoji: '🛠️📦', question: 'Name three configuration management tools', answer: 'Ansible, Puppet, Chef, SaltStack (any 3)'},
            {topic: 'Containers', emoji: '📦🐳', question: 'Name three containerization tools', answer: 'Docker, Kubernetes, Podman, containerd (any 3)'},
            {topic: 'DevOps', emoji: '🔧⚡', question: 'Name three DevOps metrics', answer: 'Deployment frequency, Lead time, MTTR, Change failure rate (any 3)'},
            {topic: 'Monitoring', emoji: '📊👁️', question: 'Name three monitoring tools', answer: 'Prometheus, Grafana, Datadog, New Relic, ELK Stack (any 3)'},
            {topic: 'DevOps', emoji: '🔧🔄', question: 'Name three Git workflows', answer: 'GitFlow, Trunk-based, GitHub Flow, GitLab Flow (any 3)'},
            {topic: 'Infrastructure', emoji: '🏗️💻', question: 'Name three IaC tools', answer: 'Terraform, CloudFormation, Pulumi, Ansible (any 3)'},
            {topic: 'DevOps', emoji: '🔧📈', question: 'Name three DevOps culture practices', answer: 'Blameless postmortems, Shared responsibility, Continuous learning, Experimentation (any 3)'}
        ]
    },
    11: { // Chapter 11: Databases
        easy: [
            {topic: 'Databases', emoji: '🗄️💾', question: 'Database systems manage data storage.', options: ['True', 'False'], correct: 0},
            {topic: 'SQL', emoji: '📊🔍', question: 'SQL queries databases.', options: ['True', 'False'], correct: 0},
            {topic: 'Databases', emoji: '🗄️📋', question: 'Tables organize data in rows and columns.', options: ['True', 'False'], correct: 0},
            {topic: 'NoSQL', emoji: '🔥💾', question: 'NoSQL is non-relational database.', options: ['True', 'False'], correct: 0},
            {topic: 'Databases', emoji: '🗄️🔐', question: 'Databases need security.', options: ['True', 'False'], correct: 0},
            {topic: 'SQL', emoji: '📊✏️', question: 'SQL can insert and update data.', options: ['True', 'False'], correct: 0},
            {topic: 'Databases', emoji: '🗄️⚡', question: 'Indexing speeds up queries.', options: ['True', 'False'], correct: 0},
            {topic: 'NoSQL', emoji: '🔥📄', question: 'MongoDB is a NoSQL database.', options: ['True', 'False'], correct: 0},
            {topic: 'Databases', emoji: '🗄️🔄', question: 'Backup protects data.', options: ['True', 'False'], correct: 0},
            {topic: 'SQL', emoji: '📊🔗', question: 'Joins combine tables.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Databases', emoji: '🗄️💾', question: 'What is a database?', options: ['Organized collection of data', 'Random files'], correct: 0},
            {topic: 'SQL', emoji: '📊🔍', question: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Question Logic'], correct: 0},
            {topic: 'Databases', emoji: '🗄️📋', question: 'What is a primary key?', options: ['Unique identifier for row', 'Any column'], correct: 0},
            {topic: 'NoSQL', emoji: '🔥💾', question: 'What is document database?', options: ['Stores data as documents', 'Text files'], correct: 0},
            {topic: 'Databases', emoji: '🗄️🔐', question: 'What is database normalization?', options: ['Organize data to reduce redundancy', 'Add redundancy'], correct: 0},
            {topic: 'SQL', emoji: '📊✏️', question: 'What is a transaction?', options: ['Group of database operations', 'Single query'], correct: 0},
            {topic: 'Databases', emoji: '🗄️⚡', question: 'What is an index?', options: ['Data structure for fast lookup', 'Table'], correct: 0},
            {topic: 'NoSQL', emoji: '🔥📄', question: 'What is key-value store?', options: ['Data stored as key-value pairs', 'Relational table'], correct: 0},
            {topic: 'Databases', emoji: '🗄️🔄', question: 'What is replication?', options: ['Copy data to multiple servers', 'Delete data'], correct: 0},
            {topic: 'SQL', emoji: '📊🔗', question: 'What is a foreign key?', options: ['Reference to another table', 'Primary key'], correct: 0}
        ],
        hard: [
            {topic: 'Databases', emoji: '🗄️💾', question: 'What is ACID?', options: ['Atomicity, Consistency, Isolation, Durability', 'Database type', 'Programming language'], correct: 0},
            {topic: 'SQL', emoji: '📊🔍', question: 'What is a subquery?', options: ['Query nested in another query', 'Main query', 'No nesting'], correct: 0},
            {topic: 'Databases', emoji: '🗄️📋', question: 'What is denormalization?', options: ['Add redundancy for performance', 'Remove redundancy', 'No change'], correct: 0},
            {topic: 'NoSQL', emoji: '🔥💾', question: 'What does eventual consistency mean?', options: ['Data becomes consistent over time', 'Immediate consistency', 'Never consistent'], correct: 0},
            {topic: 'Databases', emoji: '🗄️🔐', question: 'What is SQL injection attack?', options: ['Security vulnerability in queries', 'Performance boost', 'Backup method'], correct: 0},
            {topic: 'SQL', emoji: '📊✏️', question: 'What is a stored procedure?', options: ['Precompiled SQL code', 'Backup file', 'Table'], correct: 0},
            {topic: 'Databases', emoji: '🗄️⚡', question: 'What is query optimization?', options: ['Improve query performance', 'Delete queries', 'No optimization'], correct: 0},
            {topic: 'NoSQL', emoji: '🔥📄', question: 'What is database sharding?', options: ['Partition data across servers', 'Delete data', 'Backup'], correct: 0},
            {topic: 'Databases', emoji: '🗄️🔄', question: 'What is database migration?', options: ['Transfer data between systems', 'Delete database', 'No transfer'], correct: 0},
            {topic: 'SQL', emoji: '📊🔗', question: 'What is a view?', options: ['Virtual table from query', 'Physical table', 'Index'], correct: 0}
        ],
        expert: [
            {topic: 'Databases', emoji: '🗄️💾', question: 'What does CAP theorem state?', options: ['Consistency, Availability, Partition tolerance', 'Common Access Protocol', 'Central Admin Panel', 'Cached Application Performance'], correct: 0},
            {topic: 'SQL', emoji: '📊🔍', question: 'What is the N+1 query problem?', options: ['Multiple queries instead of one join', 'Single query', 'No problem', 'Fast queries'], correct: 0},
            {topic: 'Databases', emoji: '🗄️📋', question: 'What is third normal form (3NF)?', options: ['No transitive dependencies', 'First normal form', 'No normalization', 'Fourth form'], correct: 0},
            {topic: 'NoSQL', emoji: '🔥💾', question: 'What is BASE model?', options: ['Basically Available, Soft state, Eventually consistent', 'ACID alternative', 'Database type', 'No model'], correct: 0},
            {topic: 'Databases', emoji: '🗄️🔐', question: 'What is row-level security?', options: ['Access control per row', 'Table-level only', 'No security', 'Database-level'], correct: 0},
            {topic: 'SQL', emoji: '📊✏️', question: 'What is MVCC?', options: ['Multi-Version Concurrency Control', 'Multiple Virtual Cloud Computing', 'Main Version Control Center', 'Manual Version Change Control'], correct: 0},
            {topic: 'Databases', emoji: '🗄️⚡', question: 'What is a covering index?', options: ['Index containing all query columns', 'Partial index', 'No index', 'Primary key only'], correct: 0},
            {topic: 'NoSQL', emoji: '🔥📄', question: 'What is time-series database?', options: ['Optimized for time-stamped data', 'Regular database', 'No timestamps', 'Calendar app'], correct: 0},
            {topic: 'Databases', emoji: '🗄️🔄', question: 'What is log shipping?', options: ['Transfer transaction logs for replication', 'Ship products', 'No transfer', 'Email logs'], correct: 0},
            {topic: 'SQL', emoji: '📊🔗', question: 'What is a materialized view?', options: ['Cached query results', 'Regular view', 'Table', 'Index'], correct: 0}
        ],
        extreme: [
            {topic: 'Databases', emoji: '🗄️💾', question: 'Name three database models', answer: 'Relational, NoSQL, Graph, Time-series, In-memory (any 3)'},
            {topic: 'SQL', emoji: '📊🔍', question: 'Name three SQL commands', answer: 'SELECT, INSERT, UPDATE, DELETE, CREATE (any 3)'},
            {topic: 'Databases', emoji: '🗄️📋', question: 'Name three relational databases', answer: 'PostgreSQL, MySQL, Oracle, SQL Server, SQLite (any 3)'},
            {topic: 'NoSQL', emoji: '🔥💾', question: 'Name three NoSQL databases', answer: 'MongoDB, Cassandra, Redis, DynamoDB, CouchDB (any 3)'},
            {topic: 'Databases', emoji: '🗄️🔐', question: 'Name three database security measures', answer: 'Encryption, Access control, Audit logs, Backup, SQL injection prevention (any 3)'},
            {topic: 'SQL', emoji: '📊✏️', question: 'Name three types of joins', answer: 'INNER, LEFT, RIGHT, FULL OUTER (any 3)'},
            {topic: 'Databases', emoji: '🗄️⚡', question: 'Name three index types', answer: 'B-tree, Hash, Bitmap, Full-text (any 3)'},
            {topic: 'NoSQL', emoji: '🔥📄', question: 'Name three NoSQL data models', answer: 'Document, Key-value, Column-family, Graph'},
            {topic: 'Databases', emoji: '🗄️🔄', question: 'Name three database backup types', answer: 'Full backup, Incremental, Differential, Point-in-time (any 3)'},
            {topic: 'SQL', emoji: '📊🔗', question: 'Name three database constraints', answer: 'PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK (any 3)'}
        ]
    }
,
    12: { // Chapter 12: Software Engineering
        easy: [
            {topic: 'Software', emoji: '💻🔧', question: 'Software engineering builds applications.', options: ['True', 'False'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻💡', question: 'Code needs to be tested.', options: ['True', 'False'], correct: 0},
            {topic: 'Software', emoji: '💻📋', question: 'Requirements define what to build.', options: ['True', 'False'], correct: 0},
            {topic: 'Design', emoji: '🎨🏗️', question: 'Design comes before coding.', options: ['True', 'False'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻🐛', question: 'Bugs are coding errors.', options: ['True', 'False'], correct: 0},
            {topic: 'Software', emoji: '💻🔄', question: 'Software needs maintenance.', options: ['True', 'False'], correct: 0},
            {topic: 'Quality', emoji: '✅🎯', question: 'Quality assurance requires testing.', options: ['True', 'False'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻📚', question: 'Documentation helps users.', options: ['True', 'False'], correct: 0},
            {topic: 'Software', emoji: '💻⚙️', question: 'Agile is a development method.', options: ['True', 'False'], correct: 0},
            {topic: 'Design', emoji: '🎨🔧', question: 'Architecture defines structure.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Software', emoji: '💻🔧', question: 'What is software engineering?', options: ['Systematic development of software', 'Random coding'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻💡', question: 'What is SDLC?', options: ['Software Development Life Cycle', 'System Design Logic Code'], correct: 0},
            {topic: 'Software', emoji: '💻📋', question: 'What are functional requirements?', options: ['What system should do', 'How system works'], correct: 0},
            {topic: 'Design', emoji: '🎨🏗️', question: 'What is UML?', options: ['Unified Modeling Language', 'User Management Logic'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻🐛', question: 'What does debugging involve?', options: ['Finding and fixing errors', 'Writing code'], correct: 0},
            {topic: 'Software', emoji: '💻🔄', question: 'What is refactoring?', options: ['Improve code without changing behavior', 'Rewrite everything'], correct: 0},
            {topic: 'Quality', emoji: '✅🎯', question: 'What is QA?', options: ['Quality Assurance', 'Quick Action'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻📚', question: 'What is technical debt?', options: ['Future cost of shortcuts', 'Financial debt'], correct: 0},
            {topic: 'Software', emoji: '💻⚙️', question: 'What is Scrum?', options: ['Agile framework', 'Programming language'], correct: 0},
            {topic: 'Design', emoji: '🎨🔧', question: 'What is design pattern?', options: ['Reusable solution template', 'Unique solution'], correct: 0}
        ],
        hard: [
            {topic: 'Software', emoji: '💻🔧', question: 'What is software architecture?', options: ['High-level structure of system', 'Low-level code', 'No structure'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻💡', question: 'What is test-driven development?', options: ['Write tests before code', 'Test after coding', 'No testing'], correct: 0},
            {topic: 'Software', emoji: '💻📋', question: 'What is use case?', options: ['Describe system interaction', 'Code function', 'Database'], correct: 0},
            {topic: 'Design', emoji: '🎨🏗️', question: 'What defines microservices architecture?', options: ['Small independent services', 'Monolithic app', 'Single service'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻🐛', question: 'What is static code analysis?', options: ['Analyze code without execution', 'Run code', 'Delete code'], correct: 0},
            {topic: 'Software', emoji: '💻🔄', question: 'What is continuous refactoring?', options: ['Ongoing code improvement', 'One-time change', 'No changes'], correct: 0},
            {topic: 'Quality', emoji: '✅🎯', question: 'What is regression testing?', options: ['Test after changes', 'First test only', 'No testing'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻📚', question: 'What is API documentation?', options: ['Describe API usage', 'Source code', 'No documentation'], correct: 0},
            {topic: 'Software', emoji: '💻⚙️', question: 'What is sprint in Scrum?', options: ['Time-boxed iteration', 'Running fast', 'No time limit'], correct: 0},
            {topic: 'Design', emoji: '🎨🔧', question: 'What is singleton pattern?', options: ['Only one instance exists', 'Multiple instances', 'No pattern'], correct: 0}
        ],
        expert: [
            {topic: 'Software', emoji: '💻🔧', question: 'What is Conway\'s Law?', options: ['System design mirrors org structure', 'Random design', 'No law', 'Physics law'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻💡', question: 'What is the typical bug cost multiplier?', options: ['10x each phase later', '2x', 'No increase', 'Decreases'], correct: 0},
            {topic: 'Software', emoji: '💻📋', question: 'What is the MoSCoW method?', options: ['Prioritize requirements: Must, Should, Could, Won\'t', 'City name', 'No method', 'Testing'], correct: 0},
            {topic: 'Design', emoji: '🎨🏗️', question: 'What is SOLID principle?', options: ['5 OOP design principles', 'State of matter', 'Database type', 'No principle'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻🐛', question: 'What percentage of code has bugs?', options: ['~15-50 bugs per 1000 lines', 'No bugs', '1 bug', '1000 bugs'], correct: 0},
            {topic: 'Software', emoji: '💻🔄', question: 'What is the Boy Scout Rule?', options: ['Leave code cleaner than you found it', 'Camping rule', 'No rule', 'Make it worse'], correct: 0},
            {topic: 'Quality', emoji: '✅🎯', question: 'What is test coverage target?', options: ['70-80% for most projects', '10%', '100%', '0%'], correct: 0},
            {topic: 'Development', emoji: '👨‍💻📚', question: 'What is the DRY principle?', options: ['Don\'t Repeat Yourself', 'Do Repeat Yourself', 'Dry Weather', 'No principle'], correct: 0},
            {topic: 'Software', emoji: '💻⚙️', question: 'What is velocity in Agile?', options: ['Work completed per sprint', 'Running speed', 'No measure', 'Code speed'], correct: 0},
            {topic: 'Design', emoji: '🎨🔧', question: 'What is dependency injection?', options: ['Pass dependencies from outside', 'Hard-code dependencies', 'No dependencies', 'Delete code'], correct: 0}
        ],
        extreme: [
            {topic: 'Software', emoji: '💻🔧', question: 'Name three software development methodologies', answer: 'Agile, Waterfall, Scrum, Kanban, XP (any 3)'},
            {topic: 'Development', emoji: '👨‍💻💡', question: 'Name three SDLC phases', answer: 'Requirements, Design, Development, Testing, Deployment, Maintenance (any 3)'},
            {topic: 'Software', emoji: '💻📋', question: 'Name three requirement types', answer: 'Functional, Non-functional, Business requirements'},
            {topic: 'Design', emoji: '🎨🏗️', question: 'Name three design patterns', answer: 'Singleton, Factory, Observer, Strategy, Decorator (any 3)'},
            {topic: 'Development', emoji: '👨‍💻🐛', question: 'Name three testing types', answer: 'Unit, Integration, System, Acceptance, Regression (any 3)'},
            {topic: 'Software', emoji: '💻🔄', question: 'Name three code quality practices', answer: 'Code review, Refactoring, Testing, Documentation (any 3)'},
            {topic: 'Quality', emoji: '✅🎯', question: 'Name three quality attributes', answer: 'Performance, Security, Usability, Maintainability, Reliability (any 3)'},
            {topic: 'Development', emoji: '👨‍💻📚', question: 'Name three documentation types', answer: 'API docs, User manual, Technical specs, README (any 3)'},
            {topic: 'Software', emoji: '💻⚙️', question: 'Name three Agile ceremonies', answer: 'Sprint planning, Daily standup, Sprint review, Retrospective (any 3)'},
            {topic: 'Design', emoji: '🎨🔧', question: 'Name the five SOLID principles', answer: 'Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion (any 3)'}
        ]
    },
        13: { // Chapter 13: Computer Networks
        easy: [
            {topic: 'Networks', emoji: '🌐💻', question: 'Networks connect computers.', options: ['True', 'False'], correct: 0},
            {topic: 'Internet', emoji: '🌍🔗', question: 'Internet is a global network.', options: ['True', 'False'], correct: 0},
            {topic: 'Networks', emoji: '🌐📡', question: 'WiFi is wireless networking.', options: ['True', 'False'], correct: 0},
            {topic: 'Protocols', emoji: '📋🔗', question: 'Protocols are communication rules.', options: ['True', 'False'], correct: 0},
            {topic: 'Internet', emoji: '🌍🔍', question: 'DNS translates domain names.', options: ['True', 'False'], correct: 0},
            {topic: 'Networks', emoji: '🌐🔌', question: 'Ethernet uses cables.', options: ['True', 'False'], correct: 0},
            {topic: 'Protocols', emoji: '📋💻', question: 'HTTP is for web browsing.', options: ['True', 'False'], correct: 0},
            {topic: 'Internet', emoji: '🌍📧', question: 'Email uses networks.', options: ['True', 'False'], correct: 0},
            {topic: 'Networks', emoji: '🌐🏠', question: 'Routers connect networks.', options: ['True', 'False'], correct: 0},
            {topic: 'Security', emoji: '🔒🌐', question: 'Firewalls protect networks.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Networks', emoji: '🌐💻', question: 'What is a computer network?', options: ['Connected devices sharing resources', 'Single computer'], correct: 0},
            {topic: 'Internet', emoji: '🌍🔗', question: 'What is an IP address?', options: ['Device identifier on network', 'Phone number'], correct: 0},
            {topic: 'Networks', emoji: '🌐📡', question: 'What is network bandwidth?', options: ['Data transfer rate', 'Physical width'], correct: 0},
            {topic: 'Protocols', emoji: '📋🔗', question: 'What is TCP?', options: ['Transmission Control Protocol', 'Text Copy Protocol'], correct: 0},
            {topic: 'Internet', emoji: '🌍🔍', question: 'What is a domain name?', options: ['Human-readable web address', 'IP address'], correct: 0},
            {topic: 'Networks', emoji: '🌐🔌', question: 'What is a LAN?', options: ['Local Area Network', 'Large Area Network'], correct: 0},
            {topic: 'Protocols', emoji: '📋💻', question: 'What is HTTPS?', options: ['Secure HTTP', 'Hypertext Protocol'], correct: 0},
            {topic: 'Internet', emoji: '🌍📧', question: 'What is SMTP?', options: ['Email sending protocol', 'Web protocol'], correct: 0},
            {topic: 'Networks', emoji: '🌐🏠', question: 'What is a switch?', options: ['Connects devices in network', 'Power button'], correct: 0},
            {topic: 'Security', emoji: '🔒🌐', question: 'What is a VPN?', options: ['Virtual Private Network', 'Video Protocol Network'], correct: 0}
        ],
        hard: [
            {topic: 'Networks', emoji: '🌐💻', question: 'What is the OSI model?', options: ['7-layer network model', '3-layer model', 'No model'], correct: 0},
            {topic: 'Internet', emoji: '🌍🔗', question: 'What is IPv6?', options: ['New IP address version', 'Old IP version', 'No version'], correct: 0},
            {topic: 'Networks', emoji: '🌐📡', question: 'What is latency?', options: ['Time delay in transmission', 'Data size', 'No delay'], correct: 0},
            {topic: 'Protocols', emoji: '📋🔗', question: 'What is UDP?', options: ['User Datagram Protocol', 'Universal Data Protocol', 'Unified Download Process'], correct: 0},
            {topic: 'Internet', emoji: '🌍🔍', question: 'What is DNS cache poisoning?', options: ['Corrupt DNS records', 'Clean cache', 'No attack'], correct: 0},
            {topic: 'Networks', emoji: '🌐🔌', question: 'What is network topology?', options: ['Physical/logical layout', 'Speed measure', 'No layout'], correct: 0},
            {topic: 'Protocols', emoji: '📋💻', question: 'What is WebSocket?', options: ['Full-duplex communication protocol', 'Web page', 'Database'], correct: 0},
            {topic: 'Internet', emoji: '🌍📧', question: 'What is POP3?', options: ['Email retrieval protocol', 'Web protocol', 'File transfer'], correct: 0},
            {topic: 'Networks', emoji: '🌐🏠', question: 'What is NAT?', options: ['Network Address Translation', 'Network Access Tool', 'No translation'], correct: 0},
            {topic: 'Security', emoji: '🔒🌐', question: 'What are SSL/TLS protocols?', options: ['Encryption protocols', 'Routing protocol', 'No security'], correct: 0}
        ],
        expert: [
            {topic: 'Networks', emoji: '🌐💻', question: 'What are the 7 OSI layers?', options: ['Physical, Data Link, Network, Transport, Session, Presentation, Application', '3 layers', '5 layers', '10 layers'], correct: 0},
            {topic: 'Internet', emoji: '🌍🔗', question: 'How many IPv6 addresses exist?', options: ['340 undecillion (2^128)', '4 billion', 'Unlimited', '1 million'], correct: 0},
            {topic: 'Networks', emoji: '🌐📡', question: 'What is typical fiber optic speed?', options: ['1-100 Gbps', '10 Mbps', '1 Kbps', '1 Tbps'], correct: 0},
            {topic: 'Protocols', emoji: '📋🔗', question: 'What port does HTTP use?', options: ['80', '443', '22', '21'], correct: 0},
            {topic: 'Internet', emoji: '🌍🔍', question: 'What is root DNS server count?', options: ['13 root server systems', '1 server', '1000 servers', 'No servers'], correct: 0},
            {topic: 'Networks', emoji: '🌐🔌', question: 'What is the maximum Ethernet frame size?', options: ['1518 bytes', '100 bytes', '10 KB', '1 MB'], correct: 0},
            {topic: 'Protocols', emoji: '📋💻', question: 'What is the three-way handshake?', options: ['TCP connection establishment', 'UDP process', 'No handshake', 'Two-way process'], correct: 0},
            {topic: 'Internet', emoji: '🌍📧', question: 'What is the typical email size limit?', options: ['25 MB', '1 GB', '1 KB', 'No limit'], correct: 0},
            {topic: 'Networks', emoji: '🌐🏠', question: 'What is BGP?', options: ['Border Gateway Protocol', 'Basic Gateway Process', 'Backup Gateway Protocol', 'No protocol'], correct: 0},
            {topic: 'Security', emoji: '🔒🌐', question: 'What is the Diffie-Hellman algorithm for?', options: ['Key exchange', 'Routing', 'No purpose', 'Compression'], correct: 0}
        ],
        extreme: [
            {topic: 'Networks', emoji: '🌐💻', question: 'Name three network types', answer: 'LAN, WAN, MAN, PAN, VPN (any 3)'},
            {topic: 'Internet', emoji: '🌍🔗', question: 'Name three Internet protocols', answer: 'HTTP, FTP, SMTP, DNS, DHCP (any 3)'},
            {topic: 'Networks', emoji: '🌐📡', question: 'Name three wireless standards', answer: 'WiFi (802.11), Bluetooth, 5G, LTE, Zigbee (any 3)'},
            {topic: 'Protocols', emoji: '📋🔗', question: 'Name three transport layer protocols', answer: 'TCP, UDP, SCTP'},
            {topic: 'Internet', emoji: '🌍🔍', question: 'Name three DNS record types', answer: 'A, AAAA, CNAME, MX, TXT (any 3)'},
            {topic: 'Networks', emoji: '🌐🔌', question: 'Name three network topologies', answer: 'Star, Ring, Bus, Mesh, Tree (any 3)'},
            {topic: 'Protocols', emoji: '📋💻', question: 'Name three application layer protocols', answer: 'HTTP, FTP, SMTP, DNS, SSH (any 3)'},
            {topic: 'Internet', emoji: '🌍📧', question: 'Name three email protocols', answer: 'SMTP, POP3, IMAP'},
            {topic: 'Networks', emoji: '🌐🏠', question: 'Name three network devices', answer: 'Router, Switch, Hub, Bridge, Gateway (any 3)'},
            {topic: 'Security', emoji: '🔒🌐', question: 'Name three network security measures', answer: 'Firewall, VPN, IDS/IPS, Encryption, Authentication (any 3)'}
        ]
    },
    14: { // Chapter 14: Operating Systems
        easy: [
            {topic: 'OS', emoji: '💻🖥️', question: 'OS software controls computer hardware.', options: ['True', 'False'], correct: 0},
            {topic: 'Windows', emoji: '🪟💻', question: 'Windows is an operating system.', options: ['True', 'False'], correct: 0},
            {topic: 'OS', emoji: '💻📂', question: 'OS manages files.', options: ['True', 'False'], correct: 0},
            {topic: 'Linux', emoji: '🐧💻', question: 'Linux is open source.', options: ['True', 'False'], correct: 0},
            {topic: 'OS', emoji: '💻⚙️', question: 'OS allocates memory.', options: ['True', 'False'], correct: 0},
            {topic: 'macOS', emoji: '🍎💻', question: 'macOS runs on Apple computers.', options: ['True', 'False'], correct: 0},
            {topic: 'OS', emoji: '💻🔄', question: 'OS schedules processes.', options: ['True', 'False'], correct: 0},
            {topic: 'Mobile', emoji: '📱💻', question: 'Android is a mobile OS.', options: ['True', 'False'], correct: 0},
            {topic: 'OS', emoji: '💻🔐', question: 'OS provides security.', options: ['True', 'False'], correct: 0},
            {topic: 'Mobile', emoji: '📱🍎', question: 'iOS powers Apple mobile devices.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'OS', emoji: '💻🖥️', question: 'What is an operating system?', options: ['Software managing hardware and software', 'Application'], correct: 0},
            {topic: 'Windows', emoji: '🪟💻', question: 'What is Windows Registry?', options: ['Database for system settings', 'File folder'], correct: 0},
            {topic: 'OS', emoji: '💻📂', question: 'What is a file system?', options: ['Organize and store files', 'Application'], correct: 0},
            {topic: 'Linux', emoji: '🐧💻', question: 'What is the Linux kernel?', options: ['Core of Linux OS', 'Application'], correct: 0},
            {topic: 'OS', emoji: '💻⚙️', question: 'What is virtual memory?', options: ['Use disk as RAM extension', 'Physical RAM only'], correct: 0},
            {topic: 'macOS', emoji: '🍎💻', question: 'What is macOS based on?', options: ['Unix', 'DOS'], correct: 0},
            {topic: 'OS', emoji: '💻🔄', question: 'What is a process?', options: ['Running program instance', 'Static program'], correct: 0},
            {topic: 'Mobile', emoji: '📱💻', question: 'What is Android based on?', options: ['Linux kernel', 'Windows'], correct: 0},
            {topic: 'OS', emoji: '💻🔐', question: 'What is user authentication?', options: ['Verify user identity', 'Run programs'], correct: 0},
            {topic: 'Mobile', emoji: '📱🍎', question: 'What is iOS kernel?', options: ['XNU (Darwin)', 'Linux'], correct: 0}
        ],
        hard: [
            {topic: 'OS', emoji: '💻🖥️', question: 'What is a kernel?', options: ['Core of operating system', 'Application', 'User interface'], correct: 0},
            {topic: 'Windows', emoji: '🪟💻', question: 'What is NTFS?', options: ['Windows file system', 'Network protocol', 'Application'], correct: 0},
            {topic: 'OS', emoji: '💻📂', question: 'What are inodes?', options: ['File system data structure', 'Applications', 'Users'], correct: 0},
            {topic: 'Linux', emoji: '🐧💻', question: 'What is a Linux distribution?', options: ['OS built on Linux kernel', 'Application', 'Hardware'], correct: 0},
            {topic: 'OS', emoji: '💻⚙️', question: 'What is paging?', options: ['Memory management technique', 'Web browsing', 'No technique'], correct: 0},
            {topic: 'macOS', emoji: '🍎💻', question: 'What is Finder?', options: ['macOS file manager', 'Search engine', 'Browser'], correct: 0},
            {topic: 'OS', emoji: '💻🔄', question: 'What is context switching?', options: ['Switch between processes', 'Change settings', 'No switching'], correct: 0},
            {topic: 'Mobile', emoji: '📱💻', question: 'What is ART in Android?', options: ['Android Runtime', 'Application', 'File system'], correct: 0},
            {topic: 'OS', emoji: '💻🔐', question: 'What is privilege escalation?', options: ['Gain higher access rights', 'Normal login', 'No access'], correct: 0},
            {topic: 'Mobile', emoji: '📱🍎', question: 'What is sandboxing in iOS?', options: ['Isolate app execution', 'Combine apps', 'No isolation'], correct: 0}
        ],
        expert: [
            {topic: 'OS', emoji: '💻🖥️', question: 'What is the difference between monolithic and microkernel?', options: ['All services in kernel vs separate services', 'No difference', 'Same thing', 'Both monolithic'], correct: 0},
            {topic: 'Windows', emoji: '🪟💻', question: 'What is the Windows HAL?', options: ['Hardware Abstraction Layer', 'High Access Level', 'Hard Application Link', 'No HAL'], correct: 0},
            {topic: 'OS', emoji: '💻📂', question: 'What is journaling in file systems?', options: ['Track changes for recovery', 'Delete files', 'No tracking', 'Random writes'], correct: 0},
            {topic: 'Linux', emoji: '🐧💻', question: 'What is systemd?', options: ['Init system and service manager', 'File system', 'Text editor', 'Kernel'], correct: 0},
            {topic: 'OS', emoji: '💻⚙️', question: 'What is thrashing?', options: ['Excessive paging reduces performance', 'Fast performance', 'No issue', 'Good state'], correct: 0},
            {topic: 'macOS', emoji: '🍎💻', question: 'What is Spotlight?', options: ['System-wide search', 'Light control', 'Screen brightness', 'No search'], correct: 0},
            {topic: 'OS', emoji: '💻🔄', question: 'What is the scheduler in OS?', options: ['Determines process execution order', 'Calendar app', 'No scheduling', 'Random order'], correct: 0},
            {topic: 'Mobile', emoji: '📱💻', question: 'What is the Android Zygote?', options: ['App process spawner', 'File manager', 'Browser', 'No zygote'], correct: 0},
            {topic: 'OS', emoji: '💻🔐', question: 'What is SELinux?', options: ['Security-Enhanced Linux', 'Simple Enhanced Linux', 'Search Engine Linux', 'No SELinux'], correct: 0},
            {topic: 'Mobile', emoji: '📱🍎', question: 'What is the typical iOS memory for apps?', options: ['Varies by device, ~1-2 GB limit', 'Unlimited', '10 MB', '100 GB'], correct: 0}
        ],
        extreme: [
            {topic: 'OS', emoji: '💻🖥️', question: 'Name three major operating systems', answer: 'Windows, Linux, macOS, Unix, Android (any 3)'},
            {topic: 'Windows', emoji: '🪟💻', question: 'Name three Windows versions', answer: 'Windows 10, Windows 11, Windows Server, Windows 7 (any 3)'},
            {topic: 'OS', emoji: '💻📂', question: 'Name three file systems', answer: 'NTFS, ext4, FAT32, HFS+, ZFS (any 3)'},
            {topic: 'Linux', emoji: '🐧💻', question: 'Name three Linux distributions', answer: 'Ubuntu, Debian, Fedora, CentOS, Arch (any 3)'},
            {topic: 'OS', emoji: '💻⚙️', question: 'Name three memory management techniques', answer: 'Paging, Segmentation, Virtual memory, Swapping (any 3)'},
            {topic: 'macOS', emoji: '🍎💻', question: 'Name three macOS versions', answer: 'Monterey, Ventura, Sonoma, Big Sur (any 3)'},
            {topic: 'OS', emoji: '💻🔄', question: 'Name three process states', answer: 'Running, Ready, Blocked, Terminated (any 3)'},
            {topic: 'Mobile', emoji: '📱💻', question: 'Name three mobile operating systems', answer: 'Android, iOS, HarmonyOS, KaiOS (any 3)'},
            {topic: 'OS', emoji: '💻🔐', question: 'Name three OS security features', answer: 'Authentication, Access control, Encryption, Firewall, Sandboxing (any 3)'},
            {topic: 'Mobile', emoji: '📱🍎', question: 'Name three iOS features', answer: 'Face ID, iCloud, App Store, Siri, AirDrop (any 3)'}
        ]
    },
    15: { // Chapter 15: Algorithms
        easy: [
            {topic: 'Algorithms', emoji: '📝🔢', question: 'Algorithms are step-by-step instructions.', options: ['True', 'False'], correct: 0},
            {topic: 'Sorting', emoji: '🔀📊', question: 'Sorting arranges data in order.', options: ['True', 'False'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🔍', question: 'Search algorithms find data.', options: ['True', 'False'], correct: 0},
            {topic: 'Complexity', emoji: '⏱️📈', question: 'Algorithm efficiency matters.', options: ['True', 'False'], correct: 0},
            {topic: 'Sorting', emoji: '🔀⬆️', question: 'Bubble sort is a sorting algorithm.', options: ['True', 'False'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🧮', question: 'Algorithms solve problems.', options: ['True', 'False'], correct: 0},
            {topic: 'Search', emoji: '🔍📊', question: 'Binary search is fast.', options: ['True', 'False'], correct: 0},
            {topic: 'Complexity', emoji: '⏱️💻', question: 'Time complexity measures speed.', options: ['True', 'False'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🔄', question: 'Recursion calls itself.', options: ['True', 'False'], correct: 0},
            {topic: 'Sorting', emoji: '🔀⚡', question: 'Quick sort is efficient.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Algorithms', emoji: '📝🔢', question: 'What is an algorithm?', options: ['Step-by-step problem solution', 'Random steps'], correct: 0},
            {topic: 'Sorting', emoji: '🔀📊', question: 'What is merge sort?', options: ['Divide and conquer sorting', 'Simple swap sorting'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🔍', question: 'What is linear search?', options: ['Check each element sequentially', 'Random search'], correct: 0},
            {topic: 'Complexity', emoji: '⏱️📈', question: 'What does Big O notation describe?', options: ['Describe algorithm complexity', 'Variable name'], correct: 0},
            {topic: 'Sorting', emoji: '🔀⬆️', question: 'What is insertion sort?', options: ['Build sorted array incrementally', 'Random sorting'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🧮', question: 'What is a greedy algorithm?', options: ['Make locally optimal choice', 'Random choice'], correct: 0},
            {topic: 'Search', emoji: '🔍📊', question: 'What is binary search?', options: ['Search sorted array by halving', 'Linear search'], correct: 0},
            {topic: 'Complexity', emoji: '⏱️💻', question: 'What is space complexity?', options: ['Memory usage measure', 'Time measure'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🔄', question: 'What defines recursion?', options: ['Function calling itself', 'Loop'], correct: 0},
            {topic: 'Sorting', emoji: '🔀⚡', question: 'What is quick sort?', options: ['Partition-based sorting', 'Slow sorting'], correct: 0}
        ],
        hard: [
            {topic: 'Algorithms', emoji: '📝🔢', question: 'What is dynamic programming?', options: ['Solve by breaking into subproblems', 'Random approach', 'No strategy'], correct: 0},
            {topic: 'Sorting', emoji: '🔀📊', question: 'What is heap sort?', options: ['Use heap data structure to sort', 'Simple swap', 'No structure'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🔍', question: 'What is depth-first search?', options: ['Explore branch fully before backtrack', 'Breadth search', 'No search'], correct: 0},
            {topic: 'Complexity', emoji: '⏱️📈', question: 'What is O(n log n) complexity?', options: ['Linearithmic time', 'Linear time', 'Constant time'], correct: 0},
            {topic: 'Sorting', emoji: '🔀⬆️', question: 'What is radix sort?', options: ['Sort by digits/characters', 'Comparison sort', 'No sorting'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🧮', question: 'What is the knapsack problem?', options: ['Optimize item selection with constraint', 'Simple counting', 'No problem'], correct: 0},
            {topic: 'Search', emoji: '🔍📊', question: 'What is breadth-first search?', options: ['Explore level by level', 'Depth search', 'No search'], correct: 0},
            {topic: 'Complexity', emoji: '⏱️💻', question: 'What is amortized analysis?', options: ['Average time over sequence', 'Worst case only', 'No analysis'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🔄', question: 'What is memoization?', options: ['Cache results to avoid recomputation', 'No caching', 'Delete results'], correct: 0},
            {topic: 'Sorting', emoji: '🔀⚡', question: 'What is the best comparison sort complexity?', options: ['O(n log n)', 'O(n)', 'O(n²)'], correct: 0}
        ],
        expert: [
            {topic: 'Algorithms', emoji: '📝🔢', question: 'What is the P vs NP problem?', options: ['Major unsolved computer science problem', 'Solved problem', 'No problem', 'Simple question'], correct: 0},
            {topic: 'Sorting', emoji: '🔀📊', question: 'What is the worst-case complexity of quick sort?', options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(1)'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🔍', question: 'What is Dijkstra\'s algorithm for?', options: ['Shortest path in graph', 'Sorting', 'Searching tree', 'No purpose'], correct: 0},
            {topic: 'Complexity', emoji: '⏱️📈', question: 'What does NP-complete mean?', options: ['Hardest problems in NP class', 'Easy problems', 'No classification', 'Simple'], correct: 0},
            {topic: 'Sorting', emoji: '🔀⬆️', question: 'Is bubble sort stable?', options: ['Yes', 'No', 'Sometimes', 'Unknown'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🧮', question: 'What is the traveling salesman problem?', options: ['Find shortest route visiting all cities', 'Simple path', 'No problem', 'Easy solution'], correct: 0},
            {topic: 'Search', emoji: '🔍📊', question: 'What is A* search algorithm?', options: ['Informed search with heuristic', 'Blind search', 'No search', 'Random'], correct: 0},
            {topic: 'Complexity', emoji: '⏱️💻', question: 'What is the Master Theorem for?', options: ['Analyze divide-and-conquer algorithms', 'Sort data', 'No purpose', 'Count elements'], correct: 0},
            {topic: 'Algorithms', emoji: '📝🔄', question: 'What is tail recursion?', options: ['Recursive call is last operation', 'First operation', 'No recursion', 'Middle operation'], correct: 0},
            {topic: 'Sorting', emoji: '🔀⚡', question: 'What is counting sort complexity?', options: ['O(n + k) where k is range', 'O(n²)', 'O(n log n)', 'O(1)'], correct: 0}
        ],
        extreme: [
            {topic: 'Algorithms', emoji: '📝🔢', question: 'Name three algorithm paradigms', answer: 'Divide and conquer, Dynamic programming, Greedy, Backtracking (any 3)'},
            {topic: 'Sorting', emoji: '🔀📊', question: 'Name three O(n log n) sorting algorithms', answer: 'Merge sort, Heap sort, Quick sort (average)'},
            {topic: 'Algorithms', emoji: '📝🔍', question: 'Name three graph algorithms', answer: 'DFS, BFS, Dijkstra, Bellman-Ford, A* (any 3)'},
            {topic: 'Complexity', emoji: '⏱️📈', question: 'Name three complexity classes', answer: 'P, NP, NP-complete, NP-hard, PSPACE (any 3)'},
            {topic: 'Sorting', emoji: '🔀⬆️', question: 'Name three O(n²) sorting algorithms', answer: 'Bubble sort, Insertion sort, Selection sort'},
            {topic: 'Algorithms', emoji: '📝🧮', question: 'Name three optimization problems', answer: 'Knapsack, Traveling salesman, Shortest path, Minimum spanning tree (any 3)'},
            {topic: 'Search', emoji: '🔍📊', question: 'Name three tree traversal methods', answer: 'Inorder, Preorder, Postorder, Level-order (any 3)'},
            {topic: 'Complexity', emoji: '⏱️💻', question: 'Order these complexities: O(1), O(log n), O(n), O(n log n), O(n²)', answer: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²)'},
            {topic: 'Algorithms', emoji: '📝🔄', question: 'Name three divide-and-conquer algorithms', answer: 'Merge sort, Quick sort, Binary search, Strassen matrix (any 3)'},
            {topic: 'Sorting', emoji: '🔀⚡', question: 'Name three stable sorting algorithms', answer: 'Merge sort, Insertion sort, Bubble sort, Counting sort (any 3)'}
        ]
    },
    16: { // Chapter 16: Computer Graphics
        easy: [
            {topic: 'Graphics', emoji: '🎨🖼️', question: 'Computer graphics create images.', options: ['True', 'False'], correct: 0},
            {topic: '2D', emoji: '🖼️📐', question: '2D graphics are flat.', options: ['True', 'False'], correct: 0},
            {topic: 'Graphics', emoji: '🎨🎮', question: 'Games use computer graphics.', options: ['True', 'False'], correct: 0},
            {topic: '3D', emoji: '📦🎨', question: '3D graphics have depth.', options: ['True', 'False'], correct: 0},
            {topic: 'Graphics', emoji: '🎨🖱️', question: 'Graphics software creates art.', options: ['True', 'False'], correct: 0},
            {topic: 'Rendering', emoji: '🖼️⚡', question: 'Rendering creates final image.', options: ['True', 'False'], correct: 0},
            {topic: 'Graphics', emoji: '🎨📹', question: 'Animation is moving graphics.', options: ['True', 'False'], correct: 0},
            {topic: '3D', emoji: '📦🎬', question: 'Movies use 3D graphics.', options: ['True', 'False'], correct: 0},
            {topic: 'Graphics', emoji: '🎨💡', question: 'Lighting affects graphics realism.', options: ['True', 'False'], correct: 0},
            {topic: 'Rendering', emoji: '🖼️🔍', question: 'Ray tracing simulates light.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Graphics', emoji: '🎨🖼️', question: 'What is computer graphics?', options: ['Create and manipulate visual content', 'Text only'], correct: 0},
            {topic: '2D', emoji: '🖼️📐', question: 'What is a pixel?', options: ['Smallest image unit', 'Large image'], correct: 0},
            {topic: 'Graphics', emoji: '🎨🎮', question: 'What is a GPU?', options: ['Graphics Processing Unit', 'General Purpose Unit'], correct: 0},
            {topic: '3D', emoji: '📦🎨', question: 'What is a polygon?', options: ['Basic 3D shape building block', '2D circle'], correct: 0},
            {topic: 'Graphics', emoji: '🎨🖱️', question: 'What is vector graphics?', options: ['Use mathematical equations', 'Use pixels'], correct: 0},
            {topic: 'Rendering', emoji: '🖼️⚡', question: 'What is rasterization?', options: ['Convert vector to pixels', 'Delete graphics'], correct: 0},
            {topic: 'Graphics', emoji: '🎨📹', question: 'What is FPS?', options: ['Frames Per Second', 'First Person Shooter'], correct: 0},
            {topic: '3D', emoji: '📦🎬', question: 'What is a mesh?', options: ['3D object made of polygons', 'Fishing net'], correct: 0},
            {topic: 'Graphics', emoji: '🎨💡', question: 'What is shading?', options: ['Apply color and lighting', 'Delete color'], correct: 0},
            {topic: 'Rendering', emoji: '🖼️🔍', question: 'What is texture mapping?', options: ['Apply images to 3D surfaces', 'Delete textures'], correct: 0}
        ],
        hard: [
            {topic: 'Graphics', emoji: '🎨🖼️', question: 'What is the graphics pipeline?', options: ['Series of steps to render image', 'Single step', 'No process'], correct: 0},
            {topic: '2D', emoji: '🖼️📐', question: 'What is anti-aliasing?', options: ['Smooth jagged edges', 'Create jagged edges', 'No effect'], correct: 0},
            {topic: 'Graphics', emoji: '🎨🎮', question: 'What is a shader?', options: ['Program for rendering effects', 'Hardware device', 'No program'], correct: 0},
            {topic: '3D', emoji: '📦🎨', question: 'What is model transformation?', options: ['Move, rotate, scale 3D objects', 'Delete objects', 'No transformation'], correct: 0},
            {topic: 'Graphics', emoji: '🎨🖱️', question: 'What is Bezier curve?', options: ['Parametric curve for smooth paths', 'Straight line', 'Random curve'], correct: 0},
            {topic: 'Rendering', emoji: '🖼️⚡', question: 'What is Z-buffering?', options: ['Manage depth for visibility', 'Color buffer', 'No buffer'], correct: 0},
            {topic: 'Graphics', emoji: '🎨📹', question: 'What is keyframe animation?', options: ['Define start and end, interpolate between', 'No frames', 'Single frame'], correct: 0},
            {topic: '3D', emoji: '📦🎬', question: 'What is normal mapping?', options: ['Simulate surface detail without geometry', 'Add polygons', 'Delete detail'], correct: 0},
            {topic: 'Graphics', emoji: '🎨💡', question: 'What is ambient occlusion?', options: ['Shadow effect where surfaces meet', 'Bright light', 'No shadow'], correct: 0},
            {topic: 'Rendering', emoji: '🖼️🔍', question: 'What is global illumination?', options: ['Account for indirect light bounces', 'Direct light only', 'No light'], correct: 0}
        ],
        expert: [
            {topic: 'Graphics', emoji: '🎨🖼️', question: 'What is the typical game target frame rate?', options: ['60 FPS', '10 FPS', '1 FPS', '1000 FPS'], correct: 0},
            {topic: '2D', emoji: '🖼️📐', question: 'What is MSAA?', options: ['Multi-Sample Anti-Aliasing', 'Main Screen Active Area', 'Multiple System Access Algorithm', 'No MSAA'], correct: 0},
            {topic: 'Graphics', emoji: '🎨🎮', question: 'What is CUDA?', options: ['Parallel computing platform by NVIDIA', 'Graphics format', 'Game engine', 'No CUDA'], correct: 0},
            {topic: '3D', emoji: '📦🎨', question: 'What is typical polygon count for game character?', options: ['10,000-100,000', '100', '10 million', '10'], correct: 0},
            {topic: 'Graphics', emoji: '🎨🖱️', question: 'What is SVG?', options: ['Scalable Vector Graphics', 'Simple Visual Graphics', 'Standard Video Game', 'No SVG'], correct: 0},
            {topic: 'Rendering', emoji: '🖼️⚡', question: 'What is deferred rendering?', options: ['Separate geometry and lighting passes', 'Single pass', 'No rendering', 'Random order'], correct: 0},
            {topic: 'Graphics', emoji: '🎨📹', question: 'What is motion blur?', options: ['Simulate camera movement blur', 'Sharp image', 'No blur', 'Error'], correct: 0},
            {topic: '3D', emoji: '📦🎬', question: 'What is tessellation?', options: ['Subdivide polygons for detail', 'Delete polygons', 'No change', 'Combine polygons'], correct: 0},
            {topic: 'Graphics', emoji: '🎨💡', question: 'What is the Phong reflection model?', options: ['Ambient + Diffuse + Specular lighting', 'Ambient only', 'No model', 'Single component'], correct: 0},
            {topic: 'Rendering', emoji: '🖼️🔍', question: 'What is path tracing?', options: ['Ray tracing extension for realism', 'Simple rendering', 'No tracing', '2D only'], correct: 0}
        ],
        extreme: [
            {topic: 'Graphics', emoji: '🎨🖼️', question: 'Name three graphics APIs', answer: 'OpenGL, DirectX, Vulkan, Metal, WebGL (any 3)'},
            {topic: '2D', emoji: '🖼️📐', question: 'Name three image formats', answer: 'JPEG, PNG, GIF, BMP, SVG (any 3)'},
            {topic: 'Graphics', emoji: '🎨🎮', question: 'Name three game engines', answer: 'Unity, Unreal Engine, Godot, CryEngine (any 3)'},
            {topic: '3D', emoji: '📦🎨', question: 'Name three 3D modeling software', answer: 'Blender, Maya, 3ds Max, Cinema 4D, ZBrush (any 3)'},
            {topic: 'Graphics', emoji: '🎨🖱️', question: 'Name three graphics software', answer: 'Photoshop, Illustrator, GIMP, Inkscape, Affinity (any 3)'},
            {topic: 'Rendering', emoji: '🖼️⚡', question: 'Name three rendering techniques', answer: 'Ray tracing, Rasterization, Path tracing, Radiosity (any 3)'},
            {topic: 'Graphics', emoji: '🎨📹', question: 'Name three animation principles', answer: 'Squash and stretch, Anticipation, Timing, Follow-through (any 3)'},
            {topic: '3D', emoji: '📦🎬', question: 'Name three 3D file formats', answer: 'OBJ, FBX, STL, GLTF, Collada (any 3)'},
            {topic: 'Graphics', emoji: '🎨💡', question: 'Name three lighting types', answer: 'Ambient, Diffuse, Specular, Point light, Directional (any 3)'},
            {topic: 'Rendering', emoji: '🖼️🔍', question: 'Name three shader types', answer: 'Vertex shader, Fragment shader, Geometry shader, Compute shader (any 3)'}
        ]
    }
,
    17: { // Chapter 17: Robotics
        easy: [
            {topic: 'Robots', emoji: '🤖🔧', question: 'Robots are automated machines.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🏭🤖', question: 'Factories use robots.', options: ['True', 'False'], correct: 0},
            {topic: 'Robots', emoji: '🤖⚙️', question: 'Robots have sensors.', options: ['True', 'False'], correct: 0},
            {topic: 'AI', emoji: '🤖🧠', question: 'AI powers smart robots.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🏥🤖', question: 'Robots assist in surgery.', options: ['True', 'False'], correct: 0},
            {topic: 'Robots', emoji: '🤖💪', question: 'Robots can lift heavy objects.', options: ['True', 'False'], correct: 0},
            {topic: 'Programming', emoji: '💻🤖', question: 'Robots need programming.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🚗🤖', question: 'Self-driving cars are robots.', options: ['True', 'False'], correct: 0},
            {topic: 'Robots', emoji: '🤖👁️', question: 'Robots use computer vision.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '🤖🚀', question: 'Robotics is growing field.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Robots', emoji: '🤖🔧', question: 'What is a robot?', options: ['Programmable machine for tasks', 'Human worker'], correct: 0},
            {topic: 'Applications', emoji: '🏭🤖', question: 'What is industrial robotics?', options: ['Robots in manufacturing', 'Home robots'], correct: 0},
            {topic: 'Robots', emoji: '🤖⚙️', question: 'What does an actuator do?', options: ['Moves robot parts', 'Sensor'], correct: 0},
            {topic: 'AI', emoji: '🤖🧠', question: 'What is autonomous robot?', options: ['Operates without human control', 'Remote controlled'], correct: 0},
            {topic: 'Applications', emoji: '🏥🤖', question: 'What is surgical robot?', options: ['Assists in precise surgery', 'Replaces doctors'], correct: 0},
            {topic: 'Robots', emoji: '🤖💪', question: 'What is a robotic arm?', options: ['Manipulator for tasks', 'Human arm'], correct: 0},
            {topic: 'Programming', emoji: '💻🤖', question: 'What is ROS?', options: ['Robot Operating System', 'Regular OS'], correct: 0},
            {topic: 'Applications', emoji: '🚗🤖', question: 'What is a drone?', options: ['Unmanned aerial vehicle', 'Ground robot'], correct: 0},
            {topic: 'Robots', emoji: '🤖👁️', question: 'What is LIDAR?', options: ['Light detection and ranging', 'Camera'], correct: 0},
            {topic: 'Future', emoji: '🤖🚀', question: 'What is humanoid robot?', options: ['Human-like appearance', 'Animal-like'], correct: 0}
        ],
        hard: [
            {topic: 'Robots', emoji: '🤖🔧', question: 'What is kinematics?', options: ['Study of robot motion', 'Power source', 'Sensor type'], correct: 0},
            {topic: 'Applications', emoji: '🏭🤖', question: 'What is collaborative robot (cobot)?', options: ['Works alongside humans', 'Isolated operation', 'No collaboration'], correct: 0},
            {topic: 'Robots', emoji: '🤖⚙️', question: 'What is degrees of freedom in robotics?', options: ['Independent motion directions', 'Temperature range', 'No freedom'], correct: 0},
            {topic: 'AI', emoji: '🤖🧠', question: 'What is SLAM?', options: ['Simultaneous Localization and Mapping', 'Simple Linear Algorithm', 'No SLAM'], correct: 0},
            {topic: 'Applications', emoji: '🏥🤖', question: 'What is the da Vinci surgical system?', options: ['Robotic surgery platform', 'Painting tool', 'No system'], correct: 0},
            {topic: 'Robots', emoji: '🤖💪', question: 'What is end effector?', options: ['Tool at robot arm end', 'Starting point', 'No effector'], correct: 0},
            {topic: 'Programming', emoji: '💻🤖', question: 'What is path planning?', options: ['Calculate robot movement route', 'Random movement', 'No planning'], correct: 0},
            {topic: 'Applications', emoji: '🚗🤖', question: 'What is swarm robotics?', options: ['Coordinated multi-robot system', 'Single robot', 'No coordination'], correct: 0},
            {topic: 'Robots', emoji: '🤖👁️', question: 'What is sensor fusion?', options: ['Combine multiple sensor data', 'Single sensor', 'No fusion'], correct: 0},
            {topic: 'Future', emoji: '🤖🚀', question: 'What is soft robotics?', options: ['Flexible compliant materials', 'Hard metals only', 'No flexibility'], correct: 0}
        ],
        expert: [
            {topic: 'Robots', emoji: '🤖🔧', question: 'What are the three laws of robotics by Asimov?', options: ['Harm prevention, Obey orders, Self-preservation', 'Speed, Accuracy, Strength', 'No laws', 'One law'], correct: 0},
            {topic: 'Applications', emoji: '🏭🤖', question: 'What is typical robot arm accuracy?', options: ['±0.1 mm for industrial', '±10 cm', '±1 m', 'No accuracy'], correct: 0},
            {topic: 'Robots', emoji: '🤖⚙️', question: 'What is a 6-axis robot?', options: ['Robot with 6 degrees of freedom', '6 wheels', '6 sensors', '6 motors'], correct: 0},
            {topic: 'AI', emoji: '🤖🧠', question: 'What is reinforcement learning in robotics?', options: ['Learn through trial and reward', 'Supervised learning', 'No learning', 'Pre-programmed only'], correct: 0},
            {topic: 'Applications', emoji: '🏥🤖', question: 'What is typical robot surgery precision?', options: ['Sub-millimeter accuracy', '1 cm', '10 cm', 'No precision'], correct: 0},
            {topic: 'Robots', emoji: '🤖💪', question: 'What is the payload capacity of industrial robots?', options: ['10 kg - 1000 kg range', '1 kg max', '10 tons', 'Unlimited'], correct: 0},
            {topic: 'Programming', emoji: '💻🤖', question: 'What is inverse kinematics?', options: ['Calculate joint angles from desired position', 'Forward motion', 'No calculation', 'Random angles'], correct: 0},
            {topic: 'Applications', emoji: '🚗🤖', question: 'What is the Turing test for robots?', options: ['Test if robot exhibits human-like intelligence', 'Speed test', 'No test', 'Strength test'], correct: 0},
            {topic: 'Robots', emoji: '🤖👁️', question: 'What is typical camera frame rate for robot vision?', options: ['30-60 FPS', '1 FPS', '1000 FPS', 'No frames'], correct: 0},
            {topic: 'Future', emoji: '🤖🚀', question: 'What is the uncanny valley?', options: ['Discomfort with human-like robots', 'Physical valley', 'No valley', 'Happy feeling'], correct: 0}
        ],
        extreme: [
            {topic: 'Robots', emoji: '🤖🔧', question: 'Name three types of robots', answer: 'Industrial, Service, Humanoid, Mobile, Surgical (any 3)'},
            {topic: 'Applications', emoji: '🏭🤖', question: 'Name three robot applications', answer: 'Manufacturing, Surgery, Exploration, Agriculture, Delivery (any 3)'},
            {topic: 'Robots', emoji: '🤖⚙️', question: 'Name three robot components', answer: 'Sensors, Actuators, Controller, Power supply, End effector (any 3)'},
            {topic: 'AI', emoji: '🤖🧠', question: 'Name three robot sensing methods', answer: 'Vision, LIDAR, Ultrasonic, Touch, IMU (any 3)'},
            {topic: 'Applications', emoji: '🏥🤖', question: 'Name three surgical robot advantages', answer: 'Precision, Minimal invasion, Steady hands, Better visualization (any 3)'},
            {topic: 'Robots', emoji: '🤖💪', question: 'Name three robot arm joints', answer: 'Shoulder, Elbow, Wrist, Base, Tool (any 3)'},
            {topic: 'Programming', emoji: '💻🤖', question: 'Name three robot programming methods', answer: 'Text-based, Teach pendant, Simulation, Visual programming (any 3)'},
            {topic: 'Applications', emoji: '🚗🤖', question: 'Name three autonomous vehicle sensors', answer: 'LIDAR, Camera, Radar, GPS, Ultrasonic (any 3)'},
            {topic: 'Robots', emoji: '🤖👁️', question: 'Name three computer vision tasks for robots', answer: 'Object detection, Localization, Tracking, Recognition (any 3)'},
            {topic: 'Future', emoji: '🤖🚀', question: 'Name three robotics challenges', answer: 'AI, Power efficiency, Cost, Safety, Ethics (any 3)'}
        ]
    },
    18: { // Chapter 18: Virtual Reality
        easy: [
            {topic: 'VR', emoji: '🥽🌐', question: 'VR creates immersive experiences.', options: ['True', 'False'], correct: 0},
            {topic: 'Hardware', emoji: '🥽💻', question: 'VR headsets display virtual worlds.', options: ['True', 'False'], correct: 0},
            {topic: 'VR', emoji: '🥽🎮', question: 'Games use VR technology.', options: ['True', 'False'], correct: 0},
            {topic: 'AR', emoji: '📱🌍', question: 'AR overlays digital on real world.', options: ['True', 'False'], correct: 0},
            {topic: 'VR', emoji: '🥽👓', question: 'VR is different from AR.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🏫🥽', question: 'VR is used for training.', options: ['True', 'False'], correct: 0},
            {topic: 'VR', emoji: '🥽🎬', question: 'VR creates 360-degree experiences.', options: ['True', 'False'], correct: 0},
            {topic: 'Hardware', emoji: '🎮🥽', question: 'Controllers enable VR interaction.', options: ['True', 'False'], correct: 0},
            {topic: 'VR', emoji: '🥽🏠', question: 'VR can simulate environments.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🎨🥽', question: 'VR enables virtual tours.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'VR', emoji: '🥽🌐', question: 'What is virtual reality?', options: ['Computer-generated immersive environment', 'Real world'], correct: 0},
            {topic: 'Hardware', emoji: '🥽💻', question: 'What is a VR headset?', options: ['Head-mounted display', 'Regular screen'], correct: 0},
            {topic: 'VR', emoji: '🥽🎮', question: 'What is 6DOF?', options: ['Six Degrees of Freedom', 'Six Days of Fun'], correct: 0},
            {topic: 'AR', emoji: '📱🌍', question: 'What is augmented reality?', options: ['Overlay digital on physical', 'Pure virtual'], correct: 0},
            {topic: 'VR', emoji: '🥽👓', question: 'What is mixed reality?', options: ['Blend of VR and AR', 'VR only'], correct: 0},
            {topic: 'Applications', emoji: '🏫🥽', question: 'What is VR training?', options: ['Practice skills in virtual environment', 'Book learning'], correct: 0},
            {topic: 'VR', emoji: '🥽🎬', question: 'What is presence in VR?', options: ['Feeling of being there', 'No feeling'], correct: 0},
            {topic: 'Hardware', emoji: '🎮🥽', question: 'What is haptic feedback?', options: ['Touch sensations', 'Visual only'], correct: 0},
            {topic: 'VR', emoji: '🥽🏠', question: 'What is room-scale VR?', options: ['Move in physical space', 'Seated only'], correct: 0},
            {topic: 'Applications', emoji: '🎨🥽', question: 'What is virtual tour?', options: ['Explore place virtually', 'Physical visit'], correct: 0}
        ],
        hard: [
            {topic: 'VR', emoji: '🥽🌐', question: 'What is stereoscopic 3D?', options: ['Different images for each eye', 'Same image both eyes', 'No 3D'], correct: 0},
            {topic: 'Hardware', emoji: '🥽💻', question: 'What is the field of view in VR?', options: ['Visible area in headset', 'Headset weight', 'No view'], correct: 0},
            {topic: 'VR', emoji: '🥽🎮', question: 'What is inside-out tracking?', options: ['Headset tracks itself', 'External sensors track', 'No tracking'], correct: 0},
            {topic: 'AR', emoji: '📱🌍', question: 'What is marker-based AR?', options: ['Use visual markers for positioning', 'No markers', 'Random placement'], correct: 0},
            {topic: 'VR', emoji: '🥽👓', question: 'What is passthrough mode?', options: ['See real world through VR headset', 'Virtual only', 'No view'], correct: 0},
            {topic: 'Applications', emoji: '🏫🥽', question: 'What is VR therapy?', options: ['Treat conditions with VR', 'Regular therapy', 'No treatment'], correct: 0},
            {topic: 'VR', emoji: '🥽🎬', question: 'What is locomotion in VR?', options: ['Movement in virtual space', 'Standing still', 'No movement'], correct: 0},
            {topic: 'Hardware', emoji: '🎮🥽', question: 'What is latency in VR?', options: ['Delay between action and display', 'No delay', 'Speed'], correct: 0},
            {topic: 'VR', emoji: '🥽🏠', question: 'What is social VR?', options: ['Interact with others in VR', 'Single player', 'No interaction'], correct: 0},
            {topic: 'Applications', emoji: '🎨🥽', question: 'What is VR cinema?', options: ['Watch movies in virtual theater', 'Regular cinema', 'No viewing'], correct: 0}
        ],
        expert: [
            {topic: 'VR', emoji: '🥽🌐', question: 'What is the typical VR headset refresh rate?', options: ['90-120 Hz', '30 Hz', '10 Hz', '1000 Hz'], correct: 0},
            {topic: 'Hardware', emoji: '🥽💻', question: 'What is the Oculus Quest resolution per eye?', options: ['~1832 x 1920 pixels', '640 x 480', '4K', '8K'], correct: 0},
            {topic: 'VR', emoji: '🥽🎮', question: 'What causes VR motion sickness?', options: ['Sensory mismatch', 'Perfect tracking', 'No cause', 'High frame rate'], correct: 0},
            {topic: 'AR', emoji: '📱🌍', question: 'What is SLAM in AR?', options: ['Simultaneous Localization and Mapping', 'Simple Linear Algorithm', 'No SLAM', 'Screen Level Adjustment'], correct: 0},
            {topic: 'VR', emoji: '🥽👓', question: 'What is the metaverse?', options: ['Shared virtual world', 'Single game', 'No connection', 'Website'], correct: 0},
            {topic: 'Applications', emoji: '🏫🥽', question: 'What is surgical VR training effectiveness?', options: ['Improves skills by 30-50%', 'No improvement', '100% mastery', '5% improvement'], correct: 0},
            {topic: 'VR', emoji: '🥽🎬', question: 'What is foveated rendering?', options: ['Render high quality where user looks', 'Equal quality everywhere', 'No rendering', 'Low quality only'], correct: 0},
            {topic: 'Hardware', emoji: '🎮🥽', question: 'What is acceptable VR latency?', options: ['<20 milliseconds', '500 ms', '1 second', '10 seconds'], correct: 0},
            {topic: 'VR', emoji: '🥽🏠', question: 'What is volumetric capture?', options: ['Record 3D space and movement', '2D video', 'No capture', 'Audio only'], correct: 0},
            {topic: 'Applications', emoji: '🎨🥽', question: 'What is the VR market size projection for 2025?', options: ['$50-70 billion', '$1 billion', '$500 billion', '$100 million'], correct: 0}
        ],
        extreme: [
            {topic: 'VR', emoji: '🥽🌐', question: 'Name three VR display technologies', answer: 'LCD, OLED, MicroLED'},
            {topic: 'Hardware', emoji: '🥽💻', question: 'Name three VR headsets', answer: 'Meta Quest, PlayStation VR, HTC Vive, Valve Index (any 3)'},
            {topic: 'VR', emoji: '🥽🎮', question: 'Name three VR tracking methods', answer: 'Inside-out, Outside-in, Optical, Inertial (any 3)'},
            {topic: 'AR', emoji: '📱🌍', question: 'Name three AR devices', answer: 'Microsoft HoloLens, Magic Leap, Google Glass, Smartphone AR (any 3)'},
            {topic: 'VR', emoji: '🥽👓', question: 'Name three XR categories', answer: 'VR (Virtual Reality), AR (Augmented Reality), MR (Mixed Reality)'},
            {topic: 'Applications', emoji: '🏫🥽', question: 'Name three VR application areas', answer: 'Gaming, Training, Education, Healthcare, Real estate (any 3)'},
            {topic: 'VR', emoji: '🥽🎬', question: 'Name three VR challenges', answer: 'Motion sickness, Cost, Content, Resolution, Comfort (any 3)'},
            {topic: 'Hardware', emoji: '🎮🥽', question: 'Name three VR input methods', answer: 'Controllers, Hand tracking, Voice, Eye tracking (any 3)'},
            {topic: 'VR', emoji: '🥽🏠', question: 'Name three VR platforms', answer: 'SteamVR, Oculus Platform, PlayStation VR, Viveport (any 3)'},
            {topic: 'Applications', emoji: '🎨🥽', question: 'Name three VR content types', answer: 'Games, Videos, Simulations, Social spaces, Training (any 3)'}
        ]
    },
    19: { // Chapter 19: Quantum Computing
        easy: [
            {topic: 'Quantum', emoji: '⚛️💻', question: 'Quantum computers are different from regular computers.', options: ['True', 'False'], correct: 0},
            {topic: 'Qubits', emoji: '⚛️🔢', question: 'Qubits are quantum bits.', options: ['True', 'False'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️⚡', question: 'Quantum computers are very fast.', options: ['True', 'False'], correct: 0},
            {topic: 'Science', emoji: '🔬⚛️', question: 'Quantum computing uses quantum physics.', options: ['True', 'False'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🌡️', question: 'Quantum computers need extreme cold.', options: ['True', 'False'], correct: 0},
            {topic: 'Applications', emoji: '🔐⚛️', question: 'Quantum computers affect cryptography.', options: ['True', 'False'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🧪', question: 'Quantum computing is experimental.', options: ['True', 'False'], correct: 0},
            {topic: 'Qubits', emoji: '⚛️💡', question: 'Qubits can be 0 and 1 simultaneously.', options: ['True', 'False'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🏢', question: 'Tech companies invest in quantum computing.', options: ['True', 'False'], correct: 0},
            {topic: 'Future', emoji: '⚛️🚀', question: 'Quantum computing is future technology.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Quantum', emoji: '⚛️💻', question: 'What defines quantum computing?', options: ['Computing using quantum mechanics', 'Regular computing'], correct: 0},
            {topic: 'Qubits', emoji: '⚛️🔢', question: 'What is a qubit?', options: ['Quantum bit', 'Regular bit'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️⚡', question: 'What is quantum advantage?', options: ['Quantum outperforms classical', 'No advantage'], correct: 0},
            {topic: 'Science', emoji: '🔬⚛️', question: 'What is superposition?', options: ['Exist in multiple states', 'Single state'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🌡️', question: 'What temperature do quantum computers need?', options: ['Near absolute zero', 'Room temperature'], correct: 0},
            {topic: 'Applications', emoji: '🔐⚛️', question: 'What is quantum cryptography?', options: ['Secure communication using quantum', 'Regular encryption'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🧪', question: 'What is quantum annealing?', options: ['Find optimal solutions', 'Regular computation'], correct: 0},
            {topic: 'Qubits', emoji: '⚛️💡', question: 'What is entanglement?', options: ['Qubits connected regardless of distance', 'No connection'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🏢', question: 'What is IBM Q?', options: ['IBM quantum computer', 'Regular computer'], correct: 0},
            {topic: 'Future', emoji: '⚛️🚀', question: 'What is quantum supremacy?', options: ['Quantum solves unsolvable classical problems', 'No difference'], correct: 0}
        ],
        hard: [
            {topic: 'Quantum', emoji: '⚛️💻', question: 'What is a quantum gate?', options: ['Basic quantum operation', 'Physical gate', 'No operation'], correct: 0},
            {topic: 'Qubits', emoji: '⚛️🔢', question: 'What is quantum decoherence?', options: ['Loss of quantum state', 'Perfect stability', 'No loss'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️⚡', question: 'What is Grover\'s algorithm?', options: ['Quantum search algorithm', 'Classical algorithm', 'No algorithm'], correct: 0},
            {topic: 'Science', emoji: '🔬⚛️', question: 'What is quantum interference?', options: ['Combine quantum states', 'Block states', 'No combination'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🌡️', question: 'What is a dilution refrigerator?', options: ['Cools quantum computers', 'Regular fridge', 'Heater'], correct: 0},
            {topic: 'Applications', emoji: '🔐⚛️', question: 'What is Shor\'s algorithm?', options: ['Factor numbers efficiently', 'Encrypt data', 'No algorithm'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🧪', question: 'What is topological qubit?', options: ['Error-resistant qubit design', 'Regular qubit', 'No design'], correct: 0},
            {topic: 'Qubits', emoji: '⚛️💡', question: 'What is quantum measurement?', options: ['Collapse superposition to definite state', 'No change', 'Continuous'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🏢', question: 'What is D-Wave?', options: ['Quantum annealing company', 'Classical computer', 'No company'], correct: 0},
            {topic: 'Future', emoji: '⚛️🚀', question: 'What is quantum error correction?', options: ['Fix errors in quantum computation', 'No correction', 'Classical method'], correct: 0}
        ],
        expert: [
            {topic: 'Quantum', emoji: '⚛️💻', question: 'What is the typical qubit coherence time?', options: ['Microseconds to milliseconds', 'Hours', 'Years', 'Seconds'], correct: 0},
            {topic: 'Qubits', emoji: '⚛️🔢', question: 'What is the no-cloning theorem?', options: ['Cannot copy unknown quantum state', 'Can copy everything', 'No theorem', 'Classical only'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️⚡', question: 'What speedup does Grover provide?', options: ['Quadratic (square root)', 'Exponential', 'Linear', 'No speedup'], correct: 0},
            {topic: 'Science', emoji: '🔬⚛️', question: 'What is the Bloch sphere?', options: ['Represent qubit state geometrically', 'Physical ball', 'No representation', 'Cube'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🌡️', question: 'What temperature is needed for superconducting qubits?', options: ['~15 millikelvin', '0°C', '100°C', 'Room temp'], correct: 0},
            {topic: 'Applications', emoji: '🔐⚛️', question: 'What is BB84 protocol?', options: ['Quantum key distribution', 'Classical encryption', 'No protocol', 'Web protocol'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🧪', question: 'What is adiabatic quantum computing?', options: ['Evolve system to find solution', 'Gate-based computing', 'No computing', 'Classical method'], correct: 0},
            {topic: 'Qubits', emoji: '⚛️💡', question: 'What is the quantum volume metric?', options: ['Measure quantum computer capability', 'Physical volume', 'No metric', 'Speed only'], correct: 0},
            {topic: 'Quantum', emoji: '⚛️🏢', question: 'How many qubits did Google\'s Sycamore have?', options: ['53', '1', '1000', '10'], correct: 0},
            {topic: 'Future', emoji: '⚛️🚀', question: 'What is fault-tolerant quantum computing?', options: ['Reliable computation despite errors', 'No errors possible', 'Ignore errors', 'Classical fallback'], correct: 0}
        ],
        extreme: [
            {topic: 'Quantum', emoji: '⚛️💻', question: 'Name three quantum computing approaches', answer: 'Gate-based, Annealing, Topological'},
            {topic: 'Qubits', emoji: '⚛️🔢', question: 'Name three qubit implementations', answer: 'Superconducting, Ion trap, Photonic, Topological (any 3)'},
            {topic: 'Quantum', emoji: '⚛️⚡', question: 'Name three quantum algorithms', answer: 'Shor, Grover, VQE, QAOA, Deutsch-Jozsa (any 3)'},
            {topic: 'Science', emoji: '🔬⚛️', question: 'Name three quantum properties', answer: 'Superposition, Entanglement, Interference'},
            {topic: 'Quantum', emoji: '⚛️🌡️', question: 'Name three quantum computer components', answer: 'Qubits, Control electronics, Dilution refrigerator, Shielding (any 3)'},
            {topic: 'Applications', emoji: '🔐⚛️', question: 'Name three quantum computing applications', answer: 'Cryptography, Drug discovery, Optimization, Finance, AI (any 3)'},
            {topic: 'Quantum', emoji: '⚛️🧪', question: 'Name three quantum computing companies', answer: 'IBM, Google, D-Wave, Rigetti, IonQ (any 3)'},
            {topic: 'Qubits', emoji: '⚛️💡', question: 'Name three quantum gates', answer: 'Hadamard, CNOT, Pauli-X, Pauli-Z, T-gate (any 3)'},
            {topic: 'Quantum', emoji: '⚛️🏢', question: 'Name three challenges in quantum computing', answer: 'Decoherence, Error rates, Scalability, Cost, Temperature (any 3)'},
            {topic: 'Future', emoji: '⚛️🚀', question: 'Name three quantum advantage domains', answer: 'Cryptography, Simulation, Optimization, Machine learning (any 3)'}
        ]
    },
    20: { // Chapter 20: Tech Ethics
        easy: [
            {topic: 'Ethics', emoji: '⚖️💻', question: 'Technology raises ethical questions.', options: ['True', 'False'], correct: 0},
            {topic: 'Privacy', emoji: '🔐👤', question: 'Privacy is important online.', options: ['True', 'False'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🤖', question: 'AI needs ethical guidelines.', options: ['True', 'False'], correct: 0},
            {topic: 'Data', emoji: '📊🔒', question: 'Data collection has privacy concerns.', options: ['True', 'False'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🌍', question: 'Technology impacts society.', options: ['True', 'False'], correct: 0},
            {topic: 'Bias', emoji: '⚠️🤖', question: 'AI can have biases.', options: ['True', 'False'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️📱', question: 'Social media affects mental health.', options: ['True', 'False'], correct: 0},
            {topic: 'Environment', emoji: '🌱💻', question: 'Tech has environmental impact.', options: ['True', 'False'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️👥', question: 'Digital divide creates inequality.', options: ['True', 'False'], correct: 0},
            {topic: 'Security', emoji: '🔒💻', question: 'Cybersecurity is ethical responsibility.', options: ['True', 'False'], correct: 0}
        ],
        medium: [
            {topic: 'Ethics', emoji: '⚖️💻', question: 'What is tech ethics?', options: ['Moral principles in technology', 'No ethics'], correct: 0},
            {topic: 'Privacy', emoji: '🔐👤', question: 'What is data privacy?', options: ['Control over personal information', 'No control'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🤖', question: 'What is algorithmic bias?', options: ['Unfair AI decisions', 'Fair treatment'], correct: 0},
            {topic: 'Data', emoji: '📊🔒', question: 'What is informed consent?', options: ['Agreement with full knowledge', 'No knowledge needed'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🌍', question: 'What is digital citizenship?', options: ['Responsible technology use', 'No responsibility'], correct: 0},
            {topic: 'Bias', emoji: '⚠️🤖', question: 'What is facial recognition bias?', options: ['Inaccuracy across demographics', 'Perfect accuracy'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️📱', question: 'What is attention economy?', options: ['Monetize user attention', 'Free content'], correct: 0},
            {topic: 'Environment', emoji: '🌱💻', question: 'What is e-waste?', options: ['Discarded electronics', 'Regular trash'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️👥', question: 'What is digital divide?', options: ['Gap in technology access', 'No gap'], correct: 0},
            {topic: 'Security', emoji: '🔒💻', question: 'What is ethical hacking?', options: ['Authorized security testing', 'Illegal hacking'], correct: 0}
        ],
        hard: [
            {topic: 'Ethics', emoji: '⚖️💻', question: 'What is the trolley problem in AI?', options: ['Ethical decision in autonomous systems', 'Train problem', 'No problem'], correct: 0},
            {topic: 'Privacy', emoji: '🔐👤', question: 'What is differential privacy?', options: ['Add noise to protect individuals', 'No privacy', 'Perfect privacy'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🤖', question: 'What is explainable AI?', options: ['AI that can explain decisions', 'Black box', 'No explanation'], correct: 0},
            {topic: 'Data', emoji: '📊🔒', question: 'What is right to be forgotten?', options: ['Delete personal data from internet', 'Keep forever', 'No rights'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🌍', question: 'What is surveillance capitalism?', options: ['Profit from behavioral data', 'Free services', 'No surveillance'], correct: 0},
            {topic: 'Bias', emoji: '⚠️🤖', question: 'What is training data bias?', options: ['Biased data leads to biased AI', 'Perfect data', 'No bias'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️📱', question: 'What is dark pattern?', options: ['Manipulative UI design', 'Helpful design', 'No pattern'], correct: 0},
            {topic: 'Environment', emoji: '🌱💻', question: 'What is green computing?', options: ['Environmentally responsible computing', 'Color choice', 'No responsibility'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️👥', question: 'What is algorithmic accountability?', options: ['Responsibility for automated decisions', 'No accountability', 'Perfect algorithms'], correct: 0},
            {topic: 'Security', emoji: '🔒💻', question: 'What is responsible disclosure?', options: ['Report vulnerabilities to vendor first', 'Publish immediately', 'Hide forever'], correct: 0}
        ],
        expert: [
            {topic: 'Ethics', emoji: '⚖️💻', question: 'What is the IEEE code of ethics for engineers?', options: ['Professional conduct guidelines', 'No code', 'Informal rules', 'Company policy'], correct: 0},
            {topic: 'Privacy', emoji: '🔐👤', question: 'What percentage of users read privacy policies?', options: ['~1-9%', '90%', '50%', '100%'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🤖', question: 'What is the European AI Act?', options: ['Regulate AI based on risk level', 'No regulation', 'Ban all AI', 'US law'], correct: 0},
            {topic: 'Data', emoji: '📊🔒', question: 'What is GDPR maximum fine?', options: ['€20M or 4% of revenue, whichever higher', '€100', 'No fine', 'Unlimited'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️🌍', question: 'What is the digital divide percentage globally?', options: ['~40% lack internet access', '1%', '90%', '0%'], correct: 0},
            {topic: 'Bias', emoji: '⚠️🤖', question: 'What is the COMPAS bias controversy?', options: ['Racial bias in recidivism prediction', 'No bias', 'Perfect system', 'Weather prediction'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️📱', question: 'What is the average daily screen time?', options: ['~7 hours', '1 hour', '30 minutes', '24 hours'], correct: 0},
            {topic: 'Environment', emoji: '🌱💻', question: 'What is data center energy use percentage?', options: ['~1-2% of global electricity', '50%', '0.01%', '20%'], correct: 0},
            {topic: 'Ethics', emoji: '⚖️👥', question: 'What is digital redlining?', options: ['Discriminatory access to services', 'Equal access', 'No discrimination', 'Physical boundaries'], correct: 0},
            {topic: 'Security', emoji: '🔒💻', question: 'What is the average data breach cost?', options: ['~$4-5 million', '$100', '$1 billion', '$10'], correct: 0}
        ],
        extreme: [
            {topic: 'Ethics', emoji: '⚖️💻', question: 'Name three tech ethics principles', answer: 'Privacy, Fairness, Transparency, Accountability, Security (any 3)'},
            {topic: 'Privacy', emoji: '🔐👤', question: 'Name three data protection laws', answer: 'GDPR, CCPA, HIPAA, COPPA, PCI DSS (any 3)'},
            {topic: 'Ethics', emoji: '⚖️🤖', question: 'Name three AI ethics concerns', answer: 'Bias, Privacy, Transparency, Accountability, Job displacement (any 3)'},
            {topic: 'Data', emoji: '📊🔒', question: 'Name three data protection rights', answer: 'Access, Deletion, Portability, Rectification, Restriction (any 3)'},
            {topic: 'Ethics', emoji: '⚖️🌍', question: 'Name three social impacts of technology', answer: 'Digital divide, Mental health, Privacy, Jobs, Democracy (any 3)'},
            {topic: 'Bias', emoji: '⚠️🤖', question: 'Name three types of AI bias', answer: 'Data bias, Algorithmic bias, Human bias, Selection bias (any 3)'},
            {topic: 'Ethics', emoji: '⚖️📱', question: 'Name three dark pattern types', answer: 'Confirmshaming, Hidden costs, Forced continuity, Misdirection (any 3)'},
            {topic: 'Environment', emoji: '🌱💻', question: 'Name three green computing practices', answer: 'Energy efficiency, Recycling, Renewable energy, Virtualization (any 3)'},
            {topic: 'Ethics', emoji: '⚖️👥', question: 'Name three ethical frameworks for tech', answer: 'Utilitarianism, Deontology, Virtue ethics, Care ethics (any 3)'},
            {topic: 'Security', emoji: '🔒💻', question: 'Name three responsible disclosure steps', answer: 'Report to vendor, Allow fix time, Coordinate disclosure, Avoid harm (any 3)'}
        ]
    }
    // Add more chapters: 2, 3, 4... unlimited!
};
