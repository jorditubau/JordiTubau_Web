/**
 * language.js
 * Sistema de cambio de idioma y traducciones
 */

let currentLanguage = 'es';

function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.toggle('active');
}

function changeLanguage(lang, el) {
    currentLanguage = lang;

    document.getElementById('current-language').textContent = lang.toUpperCase();

    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    if (el) el.classList.add('selected');

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

    // Controles de teclado (hint)
    const hintMove  = document.getElementById('hint-move');
    const hintShoot = document.getElementById('hint-shoot');
    const hintPause = document.getElementById('hint-pause');
    if (hintMove)  hintMove.textContent  = t.controls_move;
    if (hintShoot) hintShoot.textContent = t.controls_shoot;
    if (hintPause) hintPause.textContent = t.controls_pause;

    // Botón reiniciar (siempre actualizado)
    const btnRestart = document.getElementById('btn-restart');
    if (btnRestart) btnRestart.textContent = t.restart;

    const gameOverDiv = document.getElementById('game-over-message');
    if (gameOverDiv && gameOverDiv.style.display !== 'none') {
        gameOverDiv.innerHTML = `
            ${t.game_over}
            <br>
            <button class="game-restart" id="btn-restart" onclick="restartGame()">${t.restart}</button>
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

    // Actualizar visor de imágenes si está abierto
    const imageWindow = document.getElementById('window-image');
    if (imageWindow && imageWindow.classList.contains('active')) {
        document.getElementById('image-title').textContent = `${t.image} - ${t.image_viewer}`;
    }

    // Actualizar notepad si está abierto
    const notepadWindow = document.getElementById('window-notepad');
    if (notepadWindow && notepadWindow.classList.contains('active') && currentNotepadData && currentNotepadData.contentObj) {
        const newContent = currentNotepadData.contentObj[currentLanguage] || currentNotepadData.contentObj.es;
        document.getElementById('notepad-content').value = newContent;
    }

    // Actualizar ventana de proyecto si está abierta
    const projectWindow = document.getElementById('window-project');
    if (projectWindow && projectWindow.classList.contains('active') && currentProjectData && currentProjectData.descriptionObj) {
        const newDesc = currentProjectData.descriptionObj[currentLanguage] || currentProjectData.descriptionObj.es;
        document.getElementById('project-description').textContent = newDesc;
    }

    // Enlaces legales del footer
    const taskbarLegalLinks = document.querySelectorAll('.taskbar-legal a');
    if (taskbarLegalLinks.length >= 2) {
        taskbarLegalLinks[0].textContent = t.legal_notice;
        taskbarLegalLinks[1].textContent = t.privacy_policy;
    }

    // Checkbox de privacidad en el formulario
    const privacyCheckLabel = document.querySelector('label[style*="flex"]');
    if (privacyCheckLabel) {
        const privacyLink = privacyCheckLabel.querySelector('a[href*="privacidad"], a[href*="privacy"]');
        const legalLink = privacyCheckLabel.querySelector('a[href*="aviso-legal"], a[href*="legal-notice"]');
        if (privacyLink && legalLink) {
            const privacyHref = currentLanguage === 'es' ? 'privacidad.html' : 'privacy-policy.html';
            const legalHref = currentLanguage === 'es' ? 'aviso-legal.html' : 'legal-notice.html';
            privacyLink.href = privacyHref;
            privacyLink.textContent = t.privacy_policy;
            legalLink.href = legalHref;
            legalLink.textContent = t.legal_notice;
            const span = privacyCheckLabel.querySelector('span');
            if (span) {
                span.innerHTML = `${t.privacy_checkbox} <a href="${privacyHref}" target="_blank" style="color: #0000ff; text-decoration: underline;">${t.privacy_policy}</a> ${t.and} <a href="${legalHref}" target="_blank" style="color: #0000ff; text-decoration: underline;">${t.legal_notice}</a>`;
            }
        }
    }
}

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector && !languageSelector.contains(e.target)) {
        document.getElementById('language-dropdown').classList.remove('active');
    }
});
