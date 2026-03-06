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
constante y con ganas de seguir
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
person with a desire to keep evolving.
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
                es: `
  JORDI TUBAU MARTÍNEZ                     
  Desarrollador Web Full Stack             
═══════════════════════════════════════════

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
                en: `
  JORDI TUBAU MARTÍNEZ                     
  Full Stack Web Developer                 
═══════════════════════════════════════════

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
            name: 'CVCraft',
            icon: 'monitor',
            url: 'https://github.com/jorditubau/cv-generator',
            image: 'https://via.placeholder.com/400x300/4a90e2/ffffff?text=CVCraft',
            video: 'assets/cv_craft_vid.mp4',
            description: {
                es: 'Aplicación web para crear CVs profesionales sin registro. El usuario rellena un formulario intuitivo y ve su currículum actualizarse en tiempo real en tres templates distintos: clásico, moderno y minimal. Permite exportar a PDF, compartir el CV mediante una URL codificada y guarda el progreso automáticamente en el navegador.\n\nTecnologías:\nReact · TypeScript · Tailwind CSS · Zustand · react-hook-form · jsPDF · html2canvas · dnd-kit',
                en: 'Web application to create professional CVs with no registration. The user fills out an intuitive form and sees their résumé update in real time across three distinct templates: classic, modern and minimal. Supports PDF export, CV sharing via encoded URL, and automatically saves progress in the browser.\n\nTechnologies:\nReact · TypeScript · Tailwind CSS · Zustand · react-hook-form · jsPDF · html2canvas · dnd-kit'
            }
        },
        {
            type: 'project',
            name: 'FocusFlow',
            icon: 'monitor',
            url: 'https://github.com/jorditubau/suite-productividad-pomodoro/tree/main',
            image: 'https://via.placeholder.com/400x300/7b68ee/ffffff?text=FocusFlow',
            video: 'assets/focusflow_vid.mp4',
            description: {
                es: 'Suite de productividad completa basada en la técnica Pomodoro. Incluye temporizador con anillo de progreso animado, gestión de tareas con drag & drop, sonidos de ambiente (lluvia, cafetería, bosque) y un dashboard de estadísticas con gráficos de actividad semanal y mapa de calor tipo GitHub. Todo funciona offline y guarda el historial completo en el navegador.\n\nTecnologías:\nReact · TypeScript · Tailwind CSS · Zustand · dnd-kit · Howler.js · Recharts',
                en: 'Full productivity suite based on the Pomodoro technique. Includes a timer with animated progress ring, drag & drop task management, ambient sounds (rain, café, forest) and a statistics dashboard with weekly activity charts and a GitHub-style heatmap. Everything works offline and saves the full history in the browser.\n\nTechnologies:\nReact · TypeScript · Tailwind CSS · Zustand · dnd-kit · Howler.js · Recharts'
            }
        }
    ]
};
