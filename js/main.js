/**
 * main.js
 * Inicialización y funciones globales
 */

// Reloj de la barra de tareas
function updateClock() {
    const now = new Date();
    const hours   = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('taskbar-clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Inicialización al cargar
window.addEventListener('load', () => {
    const isMobileView = window.matchMedia('(max-width: 768px)').matches;

    // Inicializar iconos Lucide (reemplaza <i data-lucide="..."> por SVGs)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Abrir ventana principal solo en escritorio
    if (!isMobileView) {
        openWindow('window-main');
        renderFolder('main');
    }

    // Iniciar reloj
    updateClock();
    setInterval(updateClock, 1000);
});
