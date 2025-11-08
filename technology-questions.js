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
    // Add more chapters: 2, 3, 4... unlimited!
};
