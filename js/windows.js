/**
 * windows.js
 * Gestión de ventanas (abrir, cerrar, arrastrar, z-index)
 */

let windowZIndex = 1;
let draggedWindow = null;
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let isMobile = window.matchMedia("(max-width: 768px)").matches;

window.addEventListener('resize', () => {
    isMobile = window.matchMedia("(max-width: 768px)").matches;
});

// Abrir ventana
function openWindow(windowId) {
    const window = document.getElementById(windowId);
    window.classList.add('active');
    bringToFront(window);
}

// Cerrar ventana
function closeWindow(windowId) {
    const window = document.getElementById(windowId);
    window.classList.remove('active');
}

// Traer ventana al frente
function bringToFront(window) {
    windowZIndex++;
    window.style.zIndex = windowZIndex;
}

// Click en ventana para traerla al frente
document.querySelectorAll('.window').forEach(window => {
    window.addEventListener('mousedown', () => {
        bringToFront(window);
    });
});

// Drag & Drop de ventanas
document.querySelectorAll('.window').forEach(window => {
    const titlebar = window.querySelector('.window-titlebar');

    titlebar.addEventListener('mousedown', (e) => {
        if (isMobile) return;
        if (e.target.closest('.window-button')) return;
        
        isDragging = true;
        draggedWindow = window;
        
        const rect = window.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        bringToFront(window);
        titlebar.style.cursor = 'grabbing';
        e.preventDefault();
    });
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging || !draggedWindow || isMobile) return;

    e.preventDefault();
    
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    const maxX = window.innerWidth - draggedWindow.offsetWidth;
    const maxY = window.innerHeight - draggedWindow.offsetHeight;
    
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    draggedWindow.style.left = newX + 'px';
    draggedWindow.style.top = newY + 'px';
});

document.addEventListener('mouseup', () => {
    if (isDragging && draggedWindow) {
        const titlebar = draggedWindow.querySelector('.window-titlebar');
        if (!isMobile) {
            titlebar.style.cursor = 'grab';
        }
    }
    
    isDragging = false;
    draggedWindow = null;
});

// Bloc de notas
function openNotepad(fileName, content) {
    const notepadWindow = document.getElementById('window-notepad');
    document.getElementById('notepad-title').textContent = fileName;
    document.getElementById('notepad-content').value = content;
    openWindow('window-notepad');
}

// Ventana de proyecto
function openProjectWindow(name, url, image, description) {
    document.getElementById('project-title').textContent = name;
    document.getElementById('project-name').textContent = name;
    document.getElementById('project-image').src = image;
    document.getElementById('project-description').textContent = description;

    const projectLink = document.getElementById('project-url');
    projectLink.href = url;
    // Actualizar solo el texto del span, preservando el icono SVG
    const linkSpan = projectLink.querySelector('span');
    if (linkSpan) {
        const t = translations[currentLanguage];
        linkSpan.textContent = t.view_project;
    }

    openWindow('window-project');
}

// Visor de imágenes
function openImageWindow() {
    const imageWindow = document.getElementById('window-image');
    const t = translations[currentLanguage];
    document.getElementById('image-display').src = 'assets/foto1.jpg';
    document.getElementById('image-title').textContent = `${t.image} - ${t.image_viewer}`;
    openWindow('window-image');
}

// Ventana de contacto
function openContactWindow() {
    document.getElementById('contact-form').reset();
    openWindow('window-contact');
}

function sendEmail(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;
    
    const mailtoLink = `mailto:jorditubau24@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Nombre: ${name}\n` +
        `Email: ${email}\n\n` +
        `Mensaje:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
        closeWindow('window-contact');
    }, 500);
}

// Iconos del escritorio
document.querySelectorAll('.desktop-icon').forEach(icon => {
    let iconLastClick = 0;
    
    icon.addEventListener('click', (e) => {
        const now = Date.now();
        const timeSinceLastClick = now - iconLastClick;

        if (timeSinceLastClick < 400) {
            const action = icon.getAttribute('data-action');
            
            if (action === 'open-main') {
                openWindow('window-main');
                navigationStack = ['main'];
                renderFolder('main');
            } else if (action === 'open-game') {
                openWindow('window-game');
                initGame();
            } else if (action === 'open-image') {
                openImageWindow();
            } else if (action === 'open-contact') {
                openContactWindow();
            } else if (action === 'open-trash') {
                openWindow('window-trash');
            }
        }

        iconLastClick = now;
    });
});
