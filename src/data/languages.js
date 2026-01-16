// src/data/languages.js

export const languages = [
  // --- BACKEND & FULL STACK ---
  {
    id: 'node',
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    useCase: 'Backend, API, Real-time',
    extension: '.js',
    paradigm: 'Event-driven, Non-blocking I/O',
    description: 'A JavaScript runtime built on Chrome\'s V8 engine, ideal for scalable network applications.',
    categories: ['Backend', 'FullStack']
  },
  {
    id: 'python',
    name: 'Python',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    useCase: 'AI, Data, Backend',
    extension: '.py',
    paradigm: 'Multi-paradigm',
    description: 'A versatile language famous for readability. Dominates AI, Data Science, and Backend scripting.',
    categories: ['Backend', 'DataAI', 'Cloud', 'FullStack']
  },
  {
    id: 'java',
    name: 'Java',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
    useCase: 'Enterprise, Android, Backend',
    extension: '.java',
    paradigm: 'Object-Oriented',
    description: 'The enterprise standard. Known for stability, scalability, and "Write Once, Run Anywhere".',
    categories: ['Backend', 'Mobile', 'Desktop', 'FullStack']
  },
  {
    id: 'csharp',
    name: 'C#',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Csharp_Logo.png/600px-Csharp_Logo.png',
    useCase: 'Enterprise, Game Dev, Desktop',
    extension: '.cs',
    paradigm: 'Object-Oriented, Structured',
    description: 'Microsoft\'s flagship language. Powers enterprise systems (.NET), Windows apps, and Unity games.',
    categories: ['Backend', 'Mobile', 'Desktop', 'GameDev', 'FullStack']
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png',
    useCase: 'Cloud, Microservices',
    extension: '.go',
    paradigm: 'Concurrent, Imperative',
    description: 'Designed by Google for the cloud era. Famous for concurrency (Goroutines) and speed.',
    categories: ['Backend', 'Cloud']
  },
  {
    id: 'php',
    name: 'PHP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png',
    useCase: 'Web Backend, CMS',
    extension: '.php',
    paradigm: 'Imperative, OO',
    description: 'Powering 70%+ of the web (WordPress, Laravel). The original web-native language.',
    categories: ['Backend']
  },

  // --- FRONTEND ---
  {
    id: 'js',
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    useCase: 'Web Frontend, Interactive UI',
    extension: '.js',
    paradigm: 'Event-driven, Functional',
    description: 'The King of the Web. The only language that runs natively in the browser.',
    categories: ['Frontend', 'FullStack', 'Mobile', 'Desktop']
  },
  {
    id: 'ts',
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    useCase: 'Scalable Web Apps',
    extension: '.ts',
    paradigm: 'Strict Syntactical Superset of JS',
    description: 'JavaScript with syntax for types. The industry standard for large web applications.',
    categories: ['Frontend', 'Backend', 'FullStack', 'Mobile']
  },
  {
    id: 'react',
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    useCase: 'UI Library',
    extension: '.jsx',
    paradigm: 'Component-Based',
    description: 'A JavaScript library for building user interfaces, maintained by Meta.',
    categories: ['Frontend']
  },
  {
    id: 'angular',
    name: 'Angular',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    useCase: 'Enterprise Frontend Framework',
    extension: '.ts',
    paradigm: 'Component-Based',
    description: 'A platform for building mobile and desktop web applications, maintained by Google.',
    categories: ['Frontend']
  },
  {
    id: 'vue',
    name: 'Vue.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
    useCase: 'Progressive UI Framework',
    extension: '.vue',
    paradigm: 'Reactive, Component-Based',
    description: 'The progressive JavaScript framework. Known for being approachable and performant.',
    categories: ['Frontend']
  },
  {
    id: 'html',
    name: 'HTML5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png',
    useCase: 'Web Structure',
    extension: '.html',
    paradigm: 'Markup',
    description: 'The standard markup language for documents designed to be displayed in a web browser.',
    categories: ['Frontend']
  },

  // --- MOBILE ---
  {
    id: 'swift',
    name: 'Swift',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1200px-Swift_logo.svg.png',
    useCase: 'iOS, macOS',
    extension: '.swift',
    paradigm: 'Protocol-oriented',
    description: 'Apple\'s modern replacement for Objective-C. Fast, safe, and expressive.',
    categories: ['Mobile']
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png',
    useCase: 'Android Development',
    extension: '.kt',
    paradigm: 'Functional, OO',
    description: 'Google\'s preferred language for Android. Fully interoperable with Java.',
    categories: ['Mobile']
  },
  {
    id: 'dart',
    name: 'Dart (Flutter)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png',
    useCase: 'Cross-Platform Mobile',
    extension: '.dart',
    paradigm: 'Object-Oriented',
    description: 'Optimized for UI. Powered by Flutter to create native apps for Mobile, Web, and Desktop.',
    categories: ['Mobile']
  },

  // --- SYSTEMS & EMBEDDED ---
  {
    id: 'c',
    name: 'C',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
    useCase: 'OS, Embedded, Drivers',
    extension: '.c',
    paradigm: 'Procedural',
    description: 'The mother of modern languages. Used for operating systems and embedded devices.',
    categories: ['Systems']
  },
  {
    id: 'cpp',
    name: 'C++',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
    useCase: 'Game Engines, High-Performance',
    extension: '.cpp',
    paradigm: 'Object-Oriented, Generic',
    description: 'Provides high control over system resources. Standard for AAA Games (Unreal Engine).',
    categories: ['Systems', 'GameDev', 'Desktop']
  },
  {
    id: 'rust',
    name: 'Rust',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png',
    useCase: 'Systems, Safety, WebAssembly',
    extension: '.rs',
    paradigm: 'Multi-paradigm',
    description: 'Blazingly fast and memory-efficient. Prevents segfaults and guarantees thread safety.',
    categories: ['Systems', 'Backend', 'GameDev', 'DataAI']
  },

  // --- DATA & AI ---
  {
    id: 'r',
    name: 'R',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1200px-R_logo.svg.png',
    useCase: 'Statistics, Data Analysis',
    extension: '.r',
    paradigm: 'Functional',
    description: 'A language and environment for statistical computing and graphics.',
    categories: ['DataAI']
  },
  {
    id: 'julia',
    name: 'Julia',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Julia_Programming_Language_Logo.svg/1200px-Julia_Programming_Language_Logo.svg.png',
    useCase: 'High-Performance Numerical Analysis',
    extension: '.jl',
    paradigm: 'Multiple Dispatch',
    description: 'Designed for high-performance numerical analysis and computational science.',
    categories: ['DataAI']
  },

  // --- CLOUD & DEVOPS ---
  {
    id: 'bash',
    name: 'Bash',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png',
    useCase: 'Scripting, Automation',
    extension: '.sh',
    paradigm: 'Command Line',
    description: 'A Unix shell and command language, essential for server management and automation.',
    categories: ['Cloud']
  },
  {
    id: 'terraform',
    name: 'Terraform',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/1200px-Terraform_Logo.svg.png',
    useCase: 'Infrastructure as Code',
    extension: '.tf',
    paradigm: 'Declarative',
    description: 'Tool for building, changing, and versioning infrastructure safely and efficiently.',
    categories: ['Cloud']
  }
];