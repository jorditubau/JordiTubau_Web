/**
 * language.js
 * Sistema de cambio de idioma y traducciones
 */

let currentLanguage = 'es';

function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.toggle('active');
}

function changeLanguage(lang) {
    currentLanguage = lang;

    document.getElementById('current-language').textContent = lang.toUpperCase();

    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.target.classList.add('selected');

    document.getElementById('language-dropdown').classList.remove('active');

    applyTranslations();
}

function applyTranslations() {
    const t = translations[currentLanguage];

    // Barra de tareas
    document.querySelector('.text-contact').textContent = t.contact;

    // Iconos del escritorio
    const desktopIcons = document.querySelectorAll('.desktop-icon');
    desktopIcons.forEach(icon => {
        const action = icon.getAttribute('data-action');
        const label = icon.querySelector('.desktop-icon-label');

        if (action === 'open-main') label.textContent = t.main_folder;
        if (action === 'open-game') label.textContent = t.game;
        if (action === 'open-image') label.textContent = t.image;
        if (action === 'open-contact') label.textContent = t.contact_file;
        if (action === 'open-trash') label.textContent = t.trash;
    });

    // Ventana principal
    const mainWindowTitle = document.querySelector('#window-main .window-title span:last-child');
    if (mainWindowTitle) mainWindowTitle.textContent = t.main_folder;

    // Ventana de contacto
    document.querySelector('#window-contact .window-title span:last-child').textContent = t.contact_window_title;
    document.querySelector('label[for="contact-name"]').textContent = t.name_label;
    document.querySelector('label[for="contact-email"]').textContent = t.email_label;
    document.querySelector('label[for="contact-subject"]').textContent = t.subject_label;
    document.querySelector('label[for="contact-message"]').textContent = t.message_label;
    document.querySelector('.contact-form button[type="button"]').textContent = t.cancel_button;
    document.querySelector('.contact-form button[type="submit"]').textContent = t.send_button;

    // Ventana del juego
    const gameWindowTitle = document.querySelector('#window-game .window-title span:last-child');
    if (gameWindowTitle) gameWindowTitle.textContent = t.game_title;

    const scoreLabel = document.querySelector('.game-info div:first-child');
    if (scoreLabel) {
        const scoreValue = document.getElementById('score').textContent;
        scoreLabel.innerHTML = `${t.score}: <span id="score">${scoreValue}</span>`;
    }

    const gameOverDiv = document.getElementById('game-over-message');
    if (gameOverDiv && gameOverDiv.style.display !== 'none') {
        gameOverDiv.innerHTML = `
            ${t.game_over}
            <br>
            <button class="game-restart" onclick="restartGame()">${t.restart}</button>
        `;
    }

    // Ventana papelera
    const trashWindowTitle = document.querySelector('#window-trash .window-title span:last-child');
    if (trashWindowTitle) trashWindowTitle.textContent = t.trash;

    const trashFileLabel = document.querySelector('.trash-file-label');
    if (trashFileLabel) trashFileLabel.textContent = t.trash_file;

    const trashImageLabel = document.querySelector('.trash-image-label');
    if (trashImageLabel) trashImageLabel.textContent = t.trash_image;

    // Botón atrás
    const backButton = document.getElementById('back-button');
    if (backButton) backButton.textContent = t.back;

    // Renderizar carpeta actual
    renderFolder(currentFolder);
}

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector && !languageSelector.contains(e.target)) {
        document.getElementById('language-dropdown').classList.remove('active');
    }
});
