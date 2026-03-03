/**
 * data.js
 * Contenido de carpetas, archivos y proyectos
 */

// Contenido de las carpetas
const folderContents = {
    'main': [
        { type: 'folder', name: 'Sobre mí', id: 'quien-soy', icon: 'folder-open' },
        { type: 'folder', name: 'Proyectos', id: 'proyectos', icon: 'folder-open' }
    ],
    'quien-soy': [
        {
            type: 'file',
            name: 'Quien_soy.txt',
            icon: 'file-text',
            content: {
                es: `¿QUIÉN SOY?
═══════════════════════════════════════════

Hola! Soy Jordi Tubau Martínez, vivo en
Barcelona y soy Técnico Superior en
Desarrollo de Aplicaciones Multiplataforma.

Elegí el desarrollo web porque me gusta
construir, mejorar y dar forma a ideas
a través del código.

Me defino como una persona curiosa,
constante y con ganas reales de seguir
evolucionando. Cuando trabajo en un
proyecto, me implico al máximo: me gusta
entender el porqué de las cosas, buscar
soluciones bien pensadas y aprender de
cada reto que aparece.

Valoro el trabajo en equipo, la comunicación
clara y el compromiso. Busco seguir
creciendo como desarrollador, ganar
experiencia en proyectos reales y
convertirme en un profesional cada vez
más completo, tanto a nivel técnico
como personal.`,
                en: `ABOUT ME
═══════════════════════════════════════════

Hi! I'm Jordi Tubau Martínez, I live in
Barcelona and I'm a Higher Technician in
Multiplatform Application Development.

I chose web development because I enjoy
building, improving and shaping ideas
through code.

I define myself as a curious, consistent
person with a real desire to keep evolving.
When I work on a project, I give it my all:
I like understanding the why behind things,
finding well-thought solutions and learning
from every challenge that comes up.

I value teamwork, clear communication and
commitment. I'm looking to keep growing
as a developer, gain experience in real
projects and become an increasingly complete
professional, both technically and personally.`
            }
        },
        {
            type: 'file',
            name: 'CV.txt',
            icon: 'file-text',
            content: {
                es: `╔═══════════════════════════════════════════╗
║  JORDI TUBAU MARTÍNEZ                     ║
║  Desarrollador Web Full Stack             ║
╚═══════════════════════════════════════════╝

CONTACTO
───────────────────────────────────────────
✉  jorditubau24@gmail.com
☎  +34 684 231 874

TECNOLOGÍAS
───────────────────────────────────────────
HTML · CSS · JavaScript · PHP · Angular
Laravel · n8n · Node.js · MySQL · Java
Git · Magento 2 · WordPress

IDIOMAS
───────────────────────────────────────────
Catalán · Español · Inglés

FORMACIÓN
───────────────────────────────────────────
(2022-2025) Grado Superior de Desarrollo Web
            UOC (Universitat Oberta de Catalunya)

(2019-2021) Grado Superior de Animación 3D
            La Salle Barceloneta

(2017-2019) Grado Medio de Mantenimiento
            Electromecánico
            Escola Xarxa, Berga

EXPERIENCIA
───────────────────────────────────────────
Desarrollador Web Full Stack — TBB Agency
2025 – Presente
• Desarrollo de CMS a medida a partir de
  diseños en Figma
• Maquetación responsive con foco en detalle
  visual, accesibilidad y rendimiento
• Implementación de nuevas funcionalidades
  sobre código existente
• Mantenimiento y actualización de plugins
  (seguridad, compatibilidad, estabilidad)
• Optimización y refactorización de código
  aplicando buenas prácticas
• Colaboración con equipos de diseño y desarrollo

Trabajador en Supermercado — HiperPas
2022 – 2025

Cocinero — McDonald's | 2022

Generalista en Animación, Modelaje,
Texturizado y Renderizado — Niji Mochis | 2021

Ayudante de Electricista | 2018 – 2019`,
                en: `╔═══════════════════════════════════════════╗
║  JORDI TUBAU MARTÍNEZ                     ║
║  Full Stack Web Developer                 ║
╚═══════════════════════════════════════════╝

CONTACT
───────────────────────────────────────────
✉  jorditubau24@gmail.com
☎  +34 684 231 874

TECHNOLOGIES
───────────────────────────────────────────
HTML · CSS · JavaScript · PHP · Angular
Laravel · n8n · Node.js · MySQL · Java
Git · Magento 2 · WordPress

LANGUAGES
───────────────────────────────────────────
Catalan · Spanish · English

EDUCATION
───────────────────────────────────────────
(2022-2025) Higher Degree in Web Development
            UOC (Open University of Catalonia)

(2019-2021) Higher Degree in 3D Animation
            La Salle Barceloneta

(2017-2019) Middle Degree in Electromechanical
            Maintenance
            Escola Xarxa, Berga

EXPERIENCE
───────────────────────────────────────────
Full Stack Web Developer — TBB Agency
2025 – Present
• Custom CMS development from Figma designs
• Responsive layout with focus on visual
  detail, accessibility and performance
• Implementation of new features on
  existing code
• Plugin maintenance and updates
  (security, compatibility, stability)
• Code optimization and refactoring
  applying best practices
• Collaboration with design and
  development teams

Supermarket Worker — HiperPas | 2022 – 2025

Cook — McDonald's | 2022

Generalist in Animation, Modeling, Texturing
and Rendering — Niji Mochis | 2021

Electrician's Assistant | 2018 – 2019`
            }
        }
    ],
    'proyectos': [
        {
            type: 'project',
            name: 'E-Commerce Platform',
            icon: 'monitor',
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
            icon: 'monitor',
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
            icon: 'monitor',
            url: 'https://example.com',
            image: 'https://via.placeholder.com/400x300/008080/ffffff?text=Retro+OS+Portfolio',
            description: {
                es: 'Portfolio interactivo con estética de sistema operativo retro Windows 95/98. Sistema de ventanas completo, explorador de archivos, minijuego integrado y navegación tipo escritorio.\n\nTecnologías: HTML5, CSS3, JavaScript Vanilla, Canvas API.',
                en: 'Interactive portfolio with retro Windows 95/98 operating system aesthetics. Complete window system, file explorer, integrated mini-game and desktop-style navigation.\n\nTechnologies: HTML5, CSS3, Vanilla JavaScript, Canvas API.'
            }
        }
    ]
};
