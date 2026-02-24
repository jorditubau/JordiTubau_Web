/**
 * data.js
 * Contenido de carpetas, archivos y proyectos
 */

// Contenido de las carpetas
const folderContents = {
    'main': [
        { type: 'folder', name: '¿Quién soy?', id: 'quien-soy', icon: '📂' },
        { type: 'folder', name: 'Proyectos', id: 'proyectos', icon: '📂' }
    ],
    'quien-soy': [
        { 
            type: 'file', 
            name: 'Quien_soy.txt', 
            icon: '📄', 
            content: {
                es: `JORDI TUBAU MARTÍNEZ
Desarrollador Web Full Stack

Hola! Soy Jordi, un apasionado desarrollador web con experiencia en crear experiencias digitales únicas y funcionales.

Me especializo en:
- Desarrollo Frontend (HTML, CSS, JavaScript, React)
- Desarrollo Backend (Node.js, Python, PHP)
- Bases de datos (MySQL, MongoDB)
- Diseño responsive y accesible

Mi enfoque combina creatividad con código limpio y eficiente. Me encanta aprender nuevas tecnologías y enfrentar desafíos técnicos complejos.

Cuando no estoy programando, probablemente estoy:
- Jugando videojuegos retro 🎮
- Explorando nuevos frameworks
- Contribuyendo a proyectos open source
- Tomando café ☕

"El código es poesía en movimiento"`,
                en: `JORDI TUBAU MARTÍNEZ
Full Stack Web Developer

Hi! I'm Jordi, a passionate web developer with experience creating unique and functional digital experiences.

I specialize in:
- Frontend Development (HTML, CSS, JavaScript, React)
- Backend Development (Node.js, Python, PHP)
- Databases (MySQL, MongoDB)
- Responsive and accessible design

My approach combines creativity with clean and efficient code. I love learning new technologies and facing complex technical challenges.

When I'm not coding, I'm probably:
- Playing retro video games 🎮
- Exploring new frameworks
- Contributing to open source projects
- Drinking coffee ☕

"Code is poetry in motion"`
            }
        },
        { 
            type: 'file', 
            name: 'Experiencia.txt', 
            icon: '📄', 
            content: {
                es: `EXPERIENCIA PROFESIONAL

═══════════════════════════════════════

DESARROLLADOR FULL STACK SENIOR
TechCorp Solutions | 2021 - Presente
• Lideré el desarrollo de 5+ aplicaciones web empresariales
• Implementé arquitecturas escalables con microservicios
• Reducí tiempos de carga en un 40% mediante optimización
• Mentoricé a 3 desarrolladores junior

DESARROLLADOR FRONTEND
Digital Innovators | 2019 - 2021
• Desarrollé interfaces de usuario interactivas con React
• Colaboré con diseñadores UX/UI en 10+ proyectos
• Implementé testing automatizado (Jest, Cypress)
• Mejoré la accesibilidad web (WCAG 2.1)

DESARROLLADOR WEB JUNIOR
StartupLab | 2018 - 2019
• Construí páginas web responsive desde cero
• Mantuve y actualicé sitios web corporativos
• Aprendí mejores prácticas de desarrollo ágil
• Participé en revisiones de código y pair programming

═══════════════════════════════════════

HABILIDADES TÉCNICAS:
Frontend: HTML5, CSS3, JavaScript (ES6+), React, Vue
Backend: Node.js, Express, Python, Django
Bases de datos: MySQL, PostgreSQL, MongoDB
Herramientas: Git, Docker, Webpack, VS Code
Metodologías: Agile, Scrum, TDD`,
                en: `PROFESSIONAL EXPERIENCE

═══════════════════════════════════════

SENIOR FULL STACK DEVELOPER
TechCorp Solutions | 2021 - Present
• Led the development of 5+ enterprise web applications
• Implemented scalable architectures with microservices
• Reduced load times by 40% through optimization
• Mentored 3 junior developers

FRONTEND DEVELOPER
Digital Innovators | 2019 - 2021
• Developed interactive user interfaces with React
• Collaborated with UX/UI designers on 10+ projects
• Implemented automated testing (Jest, Cypress)
• Improved web accessibility (WCAG 2.1)

JUNIOR WEB DEVELOPER
StartupLab | 2018 - 2019
• Built responsive websites from scratch
• Maintained and updated corporate websites
• Learned agile development best practices
• Participated in code reviews and pair programming

═══════════════════════════════════════

TECHNICAL SKILLS:
Frontend: HTML5, CSS3, JavaScript (ES6+), React, Vue
Backend: Node.js, Express, Python, Django
Databases: MySQL, PostgreSQL, MongoDB
Tools: Git, Docker, Webpack, VS Code
Methodologies: Agile, Scrum, TDD`
            }
        },
        { 
            type: 'file', 
            name: 'CV.txt', 
            icon: '📄', 
            content: {
                es: `╔═══════════════════════════════════════╗
║     CURRICULUM VITAE                  ║
║     JORDI TUBAU MARTÍNEZ              ║
╚═══════════════════════════════════════╝

📧 Email: jordi.tubau@email.com
🌐 Web: www.jorditubau.dev
💼 LinkedIn: linkedin.com/in/jorditubau
🐙 GitHub: github.com/jorditubau

───────────────────────────────────────

PERFIL PROFESIONAL

Desarrollador web full stack con 5+ años de experiencia creando soluciones digitales innovadoras. Especializado en JavaScript moderno, frameworks frontend y arquitecturas backend escalables.

───────────────────────────────────────

EDUCACIÓN

🎓 Ingeniería Informática
Universidad Politécnica de Cataluña
2014 - 2018

📜 Certificaciones:
• AWS Certified Developer Associate
• MongoDB Certified Developer
• React Developer Certification

───────────────────────────────────────

IDIOMAS

🇪🇸 Español - Nativo
🇬🇧 Inglés - Avanzado (C1)
🇫🇷 Francés - Intermedio (B1)

───────────────────────────────────────

PROYECTOS DESTACADOS

Ver carpeta "Proyectos" para más detalles

───────────────────────────────────────

INTERESES

• Desarrollo de videojuegos indie
• Open Source contribution
• Tecnologías emergentes (IA, Blockchain)
• Arquitectura de software
• UI/UX Design`,
                en: `╔═══════════════════════════════════════╗
║     CURRICULUM VITAE                  ║
║     JORDI TUBAU MARTÍNEZ              ║
╚═══════════════════════════════════════╝

📧 Email: jordi.tubau@email.com
🌐 Web: www.jorditubau.dev
💼 LinkedIn: linkedin.com/in/jorditubau
🐙 GitHub: github.com/jorditubau

───────────────────────────────────────

PROFESSIONAL PROFILE

Full stack web developer with 5+ years of experience creating innovative digital solutions. Specialized in modern JavaScript, frontend frameworks and scalable backend architectures.

───────────────────────────────────────

EDUCATION

🎓 Computer Engineering
Polytechnic University of Catalonia
2014 - 2018

📜 Certifications:
• AWS Certified Developer Associate
• MongoDB Certified Developer
• React Developer Certification

───────────────────────────────────────

LANGUAGES

🇪🇸 Spanish - Native
🇬🇧 English - Advanced (C1)
🇫🇷 French - Intermediate (B1)

───────────────────────────────────────

FEATURED PROJECTS

See "Projects" folder for more details

───────────────────────────────────────

INTERESTS

• Indie game development
• Open Source contribution
• Emerging technologies (AI, Blockchain)
• Software architecture
• UI/UX Design`
            }
        }
    ],
    'proyectos': [
        { 
            type: 'project', 
            name: 'E-Commerce Platform', 
            icon: '🖼️', 
            url: 'https://github.com',
            image: 'https://via.placeholder.com/400x300/4a90e2/ffffff?text=E-Commerce+Platform',
            description: {
                es: 'Plataforma completa de comercio electrónico construida con React y Node.js. Incluye carrito de compras, sistema de pagos integrado con Stripe, panel de administración, gestión de inventario en tiempo real y sistema de reseñas de usuarios.\n\nTecnologías: React, Node.js, Express, MongoDB, Stripe API, JWT Authentication.',
                en: 'Complete e-commerce platform built with React and Node.js. Includes shopping cart, integrated payment system with Stripe, admin panel, real-time inventory management and user review system.\n\nTechnologies: React, Node.js, Express, MongoDB, Stripe API, JWT Authentication.'
            }
        },
        { 
            type: 'project', 
            name: 'Task Manager App', 
            icon: '🖼️', 
            url: 'https://codepen.io',
            image: 'https://via.placeholder.com/400x300/7b68ee/ffffff?text=Task+Manager',
            description: {
                es: 'Aplicación de gestión de tareas con funcionalidad drag & drop, organización por proyectos, etiquetas personalizables y recordatorios. Interfaz intuitiva con sincronización en tiempo real.\n\nTecnologías: Vue.js, Firebase, Vuex, Tailwind CSS, PWA.',
                en: 'Task management application with drag & drop functionality, project organization, customizable tags and reminders. Intuitive interface with real-time synchronization.\n\nTechnologies: Vue.js, Firebase, Vuex, Tailwind CSS, PWA.'
            }
        },
        { 
            type: 'project', 
            name: 'Portfolio Retro OS', 
            icon: '🖼️', 
            url: 'https://example.com',
            image: 'https://via.placeholder.com/400x300/008080/ffffff?text=Retro+OS+Portfolio',
            description: {
                es: 'Portfolio interactivo con estética de sistema operativo retro Windows 95/98. Sistema de ventanas completo, explorador de archivos, minijuego integrado y navegación tipo escritorio.\n\nTecnologías: HTML5, CSS3, JavaScript Vanilla, Canvas API.',
                en: 'Interactive portfolio with retro Windows 95/98 operating system aesthetics. Complete window system, file explorer, integrated mini-game and desktop-style navigation.\n\nTechnologies: HTML5, CSS3, Vanilla JavaScript, Canvas API.'
            }
        }
    ]
};
