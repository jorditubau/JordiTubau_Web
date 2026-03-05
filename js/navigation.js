/**
 * navigation.js
 * Sistema de navegación de carpetas y archivos
 */

let navigationStack = ['main'];
let currentFolder = 'main';

// Renderizar contenido de carpeta
function renderFolder(folderId) {
    const content = folderContents[folderId];
    const container = document.getElementById('explorer-content');
    container.innerHTML = '';

    const t = translations[currentLanguage];

    content.forEach(item => {
        const fileIcon = document.createElement('div');
        fileIcon.className = 'file-icon';

        // Traducir nombres de carpetas y archivos
        let displayName = item.name;

        if (folderId === 'main') {
            if (item.id === 'quien-soy') displayName = t.who_am_i;
            if (item.id === 'proyectos') displayName = t.projects;
        }

        if (folderId === 'quien-soy') {
            if (item.name === 'Quien_soy.txt') displayName = t.who_file;
            if (item.name === 'CV.txt') displayName = t.cv_file;
        }

        if (folderId === 'proyectos') {
            if (item.name === 'E-Commerce Platform') displayName = t.project1;
            if (item.name === 'Task Manager App') displayName = t.project2;
            if (item.name === 'Portfolio Retro OS') displayName = t.project3;
        }

        if (item.type === 'folder') {
            fileIcon.setAttribute('data-folder', item.id);
        } else if (item.type === 'file') {
            fileIcon.setAttribute('data-file', item.name);
            fileIcon.setAttribute('data-content',
                typeof item.content === 'object' ? JSON.stringify(item.content) : item.content
            );
        } else if (item.type === 'project') {
            fileIcon.setAttribute('data-project-name', item.name);
            fileIcon.setAttribute('data-project-url', item.url);
            fileIcon.setAttribute('data-project-image', item.image);
            fileIcon.setAttribute('data-project-video', item.video || '');
            fileIcon.setAttribute('data-project-description',
                typeof item.description === 'object' ? JSON.stringify(item.description) : item.description
            );
        }

        // Renderizar icono Lucide y etiqueta
        fileIcon.innerHTML = `
            <div class="file-icon-image"><i data-lucide="${item.icon}"></i></div>
            <div class="file-icon-label">${displayName}</div>
        `;

        container.appendChild(fileIcon);
    });

    currentFolder = folderId;
    updateBackButton();

    // Inicializar los iconos Lucide recién añadidos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Navegar hacia atrás
function navigateBack() {
    if (navigationStack.length > 1) {
        navigationStack.pop();
        const previousFolder = navigationStack[navigationStack.length - 1];
        renderFolder(previousFolder);
    }
}

// Actualizar botón Atrás
function updateBackButton() {
    const backButton = document.getElementById('back-button');
    backButton.disabled = navigationStack.length <= 1;
}

// Manejo de clicks y doble clicks
let lastClick = 0;
let selectedIcon = null;

const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches;

document.getElementById('explorer-content').addEventListener('click', (e) => {
    const fileIcon = e.target.closest('.file-icon');
    if (!fileIcon) return;

    const now = Date.now();
    const timeSinceLastClick = now - lastClick;

    if (selectedIcon) {
        selectedIcon.classList.remove('selected');
    }
    fileIcon.classList.add('selected');
    selectedIcon = fileIcon;

    if (isTouchDevice() || timeSinceLastClick < 400) {
        handleDoubleClick(fileIcon);
    }

    lastClick = now;
});

function handleDoubleClick(fileIcon) {
    if (fileIcon.hasAttribute('data-folder')) {
        const folderId = fileIcon.getAttribute('data-folder');
        navigationStack.push(folderId);
        renderFolder(folderId);
    }
    else if (fileIcon.hasAttribute('data-file')) {
        const fileName = fileIcon.getAttribute('data-file');
        const contentData = fileIcon.getAttribute('data-content');

        let content;
        try {
            const parsed = JSON.parse(contentData);
            content = parsed[currentLanguage] || parsed.es || contentData;
        } catch {
            content = contentData;
        }

        openNotepad(fileName, content);
    }
    else if (fileIcon.hasAttribute('data-project-name')) {
        const name = fileIcon.getAttribute('data-project-name');
        const url = fileIcon.getAttribute('data-project-url');
        const image = fileIcon.getAttribute('data-project-image');
        const video = fileIcon.getAttribute('data-project-video');
        const descriptionData = fileIcon.getAttribute('data-project-description');

        let description;
        try {
            const parsed = JSON.parse(descriptionData);
            description = parsed[currentLanguage] || parsed.es || descriptionData;
        } catch {
            description = descriptionData;
        }

        openProjectWindow(name, url, image, video, description);
    }
}

// Manejo de clicks en la papelera
let lastTrashClick = 0;
let selectedTrashIcon = null;

document.getElementById('trash-content').addEventListener('click', (e) => {
    const fileIcon = e.target.closest('.file-icon');
    if (!fileIcon) return;

    const now = Date.now();
    const timeSinceLastClick = now - lastTrashClick;

    if (selectedTrashIcon) {
        selectedTrashIcon.classList.remove('selected');
    }
    fileIcon.classList.add('selected');
    selectedTrashIcon = fileIcon;

    if (isTouchDevice() || timeSinceLastClick < 400) {
        handleTrashDoubleClick(fileIcon);
    }

    lastTrashClick = now;
});

function handleTrashDoubleClick(fileIcon) {
    const t = translations[currentLanguage];

    if (fileIcon.hasAttribute('data-trash-file')) {
        const fileName = t.trash_file;
        const content = currentLanguage === 'es'
            ? `ARCHIVO ELIMINADO
═══════════════════════════════════════

"A veces hay que eliminar cosas para
hacer espacio a lo nuevo"

═══════════════════════════════════════
Fecha de eliminación: 14/02/2026`
            : `DELETED FILE
═══════════════════════════════════════

"Sometimes you have to delete things
to make room for the new"

═══════════════════════════════════════
Deletion date: 02/14/2026`;
        openNotepad(fileName, content);
    }
    else if (fileIcon.hasAttribute('data-trash-image')) {
        openTrashImageWindow();
    }
}

function openTrashImageWindow() {
    const t = translations[currentLanguage];
    document.getElementById('image-display').src = 'assets/foto2.jpg';
    document.getElementById('image-title').textContent = `${t.trash_image} - ${t.image_viewer}`;
    openWindow('window-image');
}
