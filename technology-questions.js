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
    }
,
};
