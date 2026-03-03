/**
 * game.js
 * Space Invaders — Pixel Art Edition
 *
 * Sprites pixel art dibujados en canvas con cuadrículas de píxeles.
 * Incluye: nave jugador, 3 tipos de marcianitos animados, starfield,
 * explosiones, controles simultáneos y pausa.
 *
 * Controles:
 *   ← → : Mover nave
 *   SPACE / ↑ : Disparar
 *   P : Pausa / Reanudar
 */

const canvas = document.getElementById('gameCanvas');
const ctx    = canvas.getContext('2d');

// ─── Tamaño de cada "pixel" de los sprites (en px reales del canvas) ─────────
const PIXEL = 3;

// ─── Sprites pixel art ────────────────────────────────────────────────────────
// Cada sprite es un objeto { w, h, color, data[] }.
// data es un array de filas, cada fila un array de 0/1.
// 1 = pixel relleno con 'color', 0 = transparente.
const SPRITES = {

    // ── Nave del jugador (13×8 → 39×24 px) ──────────────────────────────────
    player: {
        w: 13, h: 8,
        color: '#00ff00',
        data: [
            [0,0,0,0,0,0,1,0,0,0,0,0,0],  // punta del cañón
            [0,0,0,0,0,1,1,1,0,0,0,0,0],  // cañón
            [0,0,0,0,0,1,1,1,0,0,0,0,0],  // base cañón
            [0,1,1,1,1,1,1,1,1,1,1,1,0],  // casco superior
            [1,1,1,1,1,1,1,1,1,1,1,1,1],  // fuselaje
            [1,1,1,1,1,1,1,1,1,1,1,1,1],  // fuselaje
            [1,1,0,0,1,1,1,1,1,0,0,1,1],  // toberas con ranuras
            [1,0,0,0,0,0,1,0,0,0,0,0,1],  // patas
        ]
    },

    // ── Alien tipo A "Medusa" — fila superior (11×8) — rosa/magenta ──────────
    a1: {
        w: 11, h: 8,
        color: '#ff44cc',
        data: [
            [0,0,1,0,0,0,0,0,1,0,0],  // antenas arriba
            [0,0,0,1,0,0,0,1,0,0,0],  // antenas
            [0,0,1,1,1,1,1,1,1,0,0],  // cabeza
            [0,1,1,0,1,1,1,0,1,1,0],  // ojos
            [1,1,1,1,1,1,1,1,1,1,1],  // cuerpo
            [1,0,1,1,1,1,1,1,1,0,1],  // vientre
            [1,0,1,0,0,0,0,0,1,0,1],  // tentáculos internos
            [0,0,0,1,0,0,0,1,0,0,0],  // tentáculos
        ]
    },
    a2: {  // frame de animación alternativo
        w: 11, h: 8,
        color: '#ff44cc',
        data: [
            [0,0,1,0,0,0,0,0,1,0,0],
            [1,0,0,1,0,0,0,1,0,0,1],  // patas extendidas
            [1,0,1,1,1,1,1,1,1,0,1],
            [1,1,1,0,1,1,1,0,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,1,0],
            [0,0,1,0,0,0,0,0,1,0,0],
            [0,1,0,0,0,0,0,0,0,1,0],  // patas recogidas
        ]
    },

    // ── Alien tipo B "Cangrejo" — filas medias (11×8) — ámbar/naranja ────────
    b1: {
        w: 11, h: 8,
        color: '#ffaa00',
        data: [
            [0,0,0,1,0,0,0,1,0,0,0],  // pinzas arriba
            [0,0,0,0,1,0,1,0,0,0,0],
            [0,0,1,1,1,1,1,1,1,0,0],  // caparazón
            [0,1,1,0,1,1,1,0,1,1,0],  // ojos
            [1,1,1,1,1,1,1,1,1,1,1],  // cuerpo
            [1,1,0,1,1,1,1,1,0,1,1],  // vientre
            [0,0,1,0,0,1,0,0,1,0,0],  // patas
            [0,1,0,1,0,0,0,1,0,1,0],  // patas externas
        ]
    },
    b2: {
        w: 11, h: 8,
        color: '#ffaa00',
        data: [
            [0,0,0,1,0,0,0,1,0,0,0],
            [0,1,0,0,1,0,1,0,0,1,0],  // pinzas abiertas
            [0,1,1,1,1,1,1,1,1,1,0],
            [1,1,0,1,1,1,1,1,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [0,1,1,0,1,1,1,0,1,1,0],
            [0,1,0,0,0,1,0,0,0,1,0],
            [1,0,0,0,0,0,0,0,0,0,1],  // patas extendidas
        ]
    },

    // ── Alien tipo C "Pulpo" — fila inferior (11×8) — cyan/verde ─────────────
    c1: {
        w: 11, h: 8,
        color: '#44ffcc',
        data: [
            [0,0,0,1,1,1,1,1,0,0,0],  // domo superior
            [0,1,1,1,1,1,1,1,1,1,0],
            [1,1,1,1,1,1,1,1,1,1,1],  // cuerpo completo
            [1,1,0,0,1,1,1,0,0,1,1],  // ojos
            [1,1,1,1,1,1,1,1,1,1,1],
            [0,0,1,1,0,0,0,1,1,0,0],  // tentáculos agrupados
            [0,1,1,0,0,0,0,0,1,1,0],
            [1,0,0,0,0,0,0,0,0,0,1],  // puntas tentáculos
        ]
    },
    c2: {
        w: 11, h: 8,
        color: '#44ffcc',
        data: [
            [0,0,0,1,1,1,1,1,0,0,0],
            [0,1,1,1,1,1,1,1,1,1,0],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,1,1,1,1,1,0,0,1],  // ojos cerrados
            [1,1,1,1,1,1,1,1,1,1,1],
            [0,1,0,1,0,0,0,1,0,1,0],  // tentáculos extendidos
            [0,0,1,0,0,0,0,0,1,0,0],
            [0,1,0,1,0,0,0,1,0,1,0],
        ]
    }
};

// Dimensiones reales en canvas derivadas de los sprites
const PLAYER_W = SPRITES.player.w * PIXEL;  // 39 px
const PLAYER_H = SPRITES.player.h * PIXEL;  // 24 px
const ENEMY_W  = SPRITES.a1.w * PIXEL;      // 33 px
const ENEMY_H  = SPRITES.a1.h * PIXEL;      // 24 px

// ─── Fondo: campo de estrellas ────────────────────────────────────────────────
let stars = [];

function initStars() {
    stars = [];
    for (let i = 0; i < 70; i++) {
        stars.push({
            x:      Math.random() * canvas.width,
            y:      Math.random() * canvas.height,
            size:   Math.random() < 0.65 ? 1 : 2,
            speed:  0.15 + Math.random() * 0.35,
            alpha:  0.25 + Math.random() * 0.75
        });
    }
}

function drawStars() {
    for (const star of stars) {
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle   = '#ffffff';
        ctx.fillRect(star.x, star.y, star.size, star.size);
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    }
    ctx.globalAlpha = 1;
}

// ─── Explosiones ──────────────────────────────────────────────────────────────
let explosions = [];

function addExplosion(cx, cy) {
    explosions.push({ x: cx, y: cy, life: 18, maxLife: 18 });
}

function drawExplosions() {
    for (let i = explosions.length - 1; i >= 0; i--) {
        const e = explosions[i];
        const t = e.life / e.maxLife;          // 1 → 0 según avanza
        const size = (1 - t) * 32 + 5;
        const half = size / 2;

        ctx.save();

        // Cruz naranja exterior
        ctx.globalAlpha = t * 0.85;
        ctx.fillStyle = '#ff8800';
        ctx.fillRect(e.x - half, e.y - 2,    size, 4);
        ctx.fillRect(e.x - 2,    e.y - half, 4,    size);

        // Cruz amarilla interior
        ctx.globalAlpha = t * 0.7;
        ctx.fillStyle = '#ffee00';
        ctx.fillRect(e.x - half * 0.6, e.y - 2,    size * 0.6, 4);
        ctx.fillRect(e.x - 2,    e.y - half * 0.6, 4,    size * 0.6);

        // Destellos diagonales
        ctx.globalAlpha = t * 0.5;
        ctx.fillStyle = '#ffcc44';
        const d = half * 0.5;
        ctx.fillRect(e.x - d, e.y - d, 4, 4);
        ctx.fillRect(e.x + d - 4, e.y - d, 4, 4);
        ctx.fillRect(e.x - d, e.y + d - 4, 4, 4);
        ctx.fillRect(e.x + d - 4, e.y + d - 4, 4, 4);

        // Centro blanco
        ctx.globalAlpha = t;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(e.x - 3, e.y - 3, 6, 6);

        ctx.restore();

        e.life--;
        if (e.life <= 0) explosions.splice(i, 1);
    }
}

// ─── Renderizado de sprites pixel art ─────────────────────────────────────────
function drawSprite(sprite, x, y) {
    ctx.fillStyle = sprite.color;
    const data = sprite.data;
    for (let row = 0; row < sprite.h; row++) {
        for (let col = 0; col < sprite.w; col++) {
            if (data[row][col]) {
                ctx.fillRect(
                    Math.round(x) + col * PIXEL,
                    Math.round(y) + row * PIXEL,
                    PIXEL, PIXEL
                );
            }
        }
    }
}

// Versión con brillo: primer pasada a opacidad baja y color más claro
function drawSpriteGlow(sprite, x, y, glowAlpha) {
    ctx.globalAlpha = glowAlpha;
    ctx.fillStyle = '#ffffff';
    const data = sprite.data;
    for (let row = 0; row < sprite.h; row++) {
        for (let col = 0; col < sprite.w; col++) {
            if (data[row][col]) {
                ctx.fillRect(
                    Math.round(x) + col * PIXEL - 1,
                    Math.round(y) + row * PIXEL - 1,
                    PIXEL + 2, PIXEL + 2
                );
            }
        }
    }
    ctx.globalAlpha = 1;
}

// ─── Canvas responsive ────────────────────────────────────────────────────────
function resizeCanvas() {
    const isMobileView = window.matchMedia('(max-width: 768px)').matches;
    if (isMobileView) {
        const container = document.getElementById('game-container');
        const maxWidth  = Math.min(container.clientWidth - 24, 600);
        const scale     = maxWidth / 600;
        canvas.style.width  = maxWidth + 'px';
        canvas.style.height = (400 * scale) + 'px';
    } else {
        canvas.style.width  = '600px';
        canvas.style.height = '400px';
    }
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load',   resizeCanvas);

// ─── Estado global del juego ──────────────────────────────────────────────────
let gameState = {
    running:        false,
    paused:         false,
    score:          0,
    player: {
        x:      Math.round((600 - PLAYER_W) / 2),
        y:      360,
        width:  PLAYER_W,
        height: PLAYER_H,
        speed:  5
    },
    bullets:        [],
    enemies:        [],
    enemyDirection: 1,
    enemySpeed:     1,
    keys:           {},     // flags de teclas pulsadas (permite simultáneas)
    lastShot:       0,
    shootFlash:     0,      // frames de destello al disparar
    animFrame:      0,      // 0 o 1 — alterna el sprite de los enemigos
    animTimer:      0
};

// ─── Tipos de alien por fila ──────────────────────────────────────────────────
// 'a' = medusa (rosa), 'b' = cangrejo (naranja), 'c' = pulpo (cyan)
const ALIEN_TYPE_BY_ROW = ['a', 'b', 'b', 'c'];

function createEnemies() {
    const enemies = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 8; col++) {
            enemies.push({
                x:      55 + col * 60,
                y:      30 + row * 52,
                width:  ENEMY_W,
                height: ENEMY_H,
                alive:  true,
                type:   ALIEN_TYPE_BY_ROW[row]
            });
        }
    }
    return enemies;
}

// ─── Inicialización ───────────────────────────────────────────────────────────
function initGame() {
    gameState.running        = true;
    gameState.paused         = false;
    gameState.score          = 0;
    gameState.player.x       = Math.round((600 - PLAYER_W) / 2);
    gameState.bullets        = [];
    gameState.enemies        = createEnemies();
    gameState.enemyDirection = 1;
    gameState.enemySpeed     = 1;
    gameState.keys           = {};
    gameState.lastShot       = 0;
    gameState.shootFlash     = 0;
    gameState.animFrame      = 0;
    gameState.animTimer      = 0;
    explosions               = [];

    document.getElementById('score').textContent = '0';
    document.getElementById('game-over-message').style.display = 'none';

    resizeCanvas();
    initStars();
    gameLoop();
}

function restartGame() {
    initGame();
}

// ─── Control de teclado (flags booleanos) ─────────────────────────────────────
// El movimiento y disparo se leen en el gameLoop → permite pulsaciones simultáneas.
document.addEventListener('keydown', (e) => {
    if (!gameState.running) return;

    // Pausa
    if (e.key === 'p' || e.key === 'P') {
        togglePause();
        return;
    }

    // Evitar scroll del navegador con las teclas del juego
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', ' '].includes(e.key)) {
        e.preventDefault();
    }

    gameState.keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    gameState.keys[e.key] = false;
});

// ─── Pausa ────────────────────────────────────────────────────────────────────
function togglePause() {
    if (!gameState.running) return;
    gameState.paused = !gameState.paused;

    if (gameState.paused) {
        drawPauseOverlay();  // dibujar overlay sobre el último frame
    } else {
        gameLoop();          // reanudar el bucle
    }
}

function drawPauseOverlay() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.72)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff00';
    ctx.font      = 'bold 24px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText('PAUSADO', canvas.width / 2, canvas.height / 2 - 16);

    ctx.font      = '13px Courier New';
    ctx.fillStyle = 'rgba(0, 255, 0, 0.75)';
    ctx.fillText('Pulsa P para continuar', canvas.width / 2, canvas.height / 2 + 16);
    ctx.textAlign = 'left';
}

// ─── Disparo ──────────────────────────────────────────────────────────────────
function shoot() {
    gameState.bullets.push({
        x:      gameState.player.x + PLAYER_W / 2 - 2,
        y:      gameState.player.y,
        width:  4,
        height: 10,
        speed:  8
    });
    gameState.shootFlash = 6;  // frames de destello visual
}

// ─── Controles táctiles ───────────────────────────────────────────────────────
let touchMoveLeft  = false;
let touchMoveRight = false;

const btnLeft  = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const btnShoot = document.getElementById('btn-shoot');

btnLeft.addEventListener('touchstart',  (e) => { e.preventDefault(); touchMoveLeft = true; });
btnLeft.addEventListener('touchend',    (e) => { e.preventDefault(); touchMoveLeft = false; });
btnLeft.addEventListener('touchcancel', (e) => { e.preventDefault(); touchMoveLeft = false; });
btnLeft.addEventListener('mousedown',   (e) => { e.preventDefault(); touchMoveLeft = true; });
btnLeft.addEventListener('mouseup',     (e) => { e.preventDefault(); touchMoveLeft = false; });

btnRight.addEventListener('touchstart',  (e) => { e.preventDefault(); touchMoveRight = true; });
btnRight.addEventListener('touchend',    (e) => { e.preventDefault(); touchMoveRight = false; });
btnRight.addEventListener('touchcancel', (e) => { e.preventDefault(); touchMoveRight = false; });
btnRight.addEventListener('mousedown',   (e) => { e.preventDefault(); touchMoveRight = true; });
btnRight.addEventListener('mouseup',     (e) => { e.preventDefault(); touchMoveRight = false; });

function tryShoot() {
    if (!gameState.running || gameState.paused) return;
    const now = Date.now();
    if (now - gameState.lastShot > 280) {
        shoot();
        gameState.lastShot = now;
    }
}

btnShoot.addEventListener('touchstart', (e) => { e.preventDefault(); tryShoot(); });
btnShoot.addEventListener('click', tryShoot);

// ─── Bucle de juego ───────────────────────────────────────────────────────────
function gameLoop() {
    if (!gameState.running) return;

    // Pausa: dibujar overlay y detener el RAF
    if (gameState.paused) {
        drawPauseOverlay();
        return;
    }

    // ── Limpiar canvas ──
    ctx.fillStyle = '#000010';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ── Estrellas de fondo ──
    drawStars();

    // ── Alternar frame de animación de enemigos (cada 28 frames) ──
    gameState.animTimer++;
    if (gameState.animTimer >= 28) {
        gameState.animFrame = 1 - gameState.animFrame;
        gameState.animTimer = 0;
    }

    // ── Mover jugador ──
    // Leído desde flags → movimiento + disparo simultáneos sin interferencias
    if ((gameState.keys['ArrowLeft'] || touchMoveLeft) && gameState.player.x > 0) {
        gameState.player.x -= gameState.player.speed;
    }
    if ((gameState.keys['ArrowRight'] || touchMoveRight) &&
        gameState.player.x < canvas.width - gameState.player.width) {
        gameState.player.x += gameState.player.speed;
    }

    // ── Disparo desde teclado (leído en loop, no en evento) ──
    if (gameState.keys[' '] || gameState.keys['ArrowUp']) {
        const now = Date.now();
        if (now - gameState.lastShot > 280) {
            shoot();
            gameState.lastShot = now;
        }
    }

    // ── Dibujar jugador ──

    // Destello al disparar
    if (gameState.shootFlash > 0) {
        ctx.globalAlpha = (gameState.shootFlash / 6) * 0.45;
        ctx.fillStyle   = '#ffffaa';
        ctx.fillRect(
            gameState.player.x - 5,
            gameState.player.y - 8,
            PLAYER_W + 10,
            PLAYER_H + 8
        );
        ctx.globalAlpha = 1;
        gameState.shootFlash--;
    }

    // Brillo sutil verde alrededor de la nave
    drawSpriteGlow(SPRITES.player, gameState.player.x, gameState.player.y, 0.12);

    // Sprite principal
    drawSprite(SPRITES.player, gameState.player.x, gameState.player.y);

    // ── Dibujar balas ──
    for (let i = gameState.bullets.length - 1; i >= 0; i--) {
        const b = gameState.bullets[i];
        b.y -= b.speed;

        if (b.y < 0) {
            gameState.bullets.splice(i, 1);
            continue;
        }

        // Núcleo amarillo brillante
        ctx.fillStyle = '#ffff00';
        ctx.fillRect(b.x, b.y, b.width, b.height);
        // Halo blanco semitransparente
        ctx.globalAlpha = 0.3;
        ctx.fillStyle   = '#ffffff';
        ctx.fillRect(b.x - 1, b.y, b.width + 2, b.height);
        ctx.globalAlpha = 1;
    }

    // ── Enemigos: movimiento y dibujo ──
    let leftMost = canvas.width, rightMost = 0, allDead = true;

    gameState.enemies.forEach(enemy => {
        if (!enemy.alive) return;
        allDead = false;
        if (enemy.x < leftMost)                    leftMost  = enemy.x;
        if (enemy.x + enemy.width > rightMost)     rightMost = enemy.x + enemy.width;
    });

    // Cambio de dirección al llegar a los bordes
    let moveDown = false;
    if (gameState.enemyDirection === 1 && rightMost >= canvas.width - 10) {
        gameState.enemyDirection = -1;
        moveDown = true;
    } else if (gameState.enemyDirection === -1 && leftMost <= 10) {
        gameState.enemyDirection = 1;
        moveDown = true;
    }

    gameState.enemies.forEach(enemy => {
        if (!enemy.alive) return;

        enemy.x += gameState.enemySpeed * gameState.enemyDirection;
        if (moveDown) enemy.y += 15;

        // Seleccionar sprite según tipo (a/b/c) y frame de animación (1/2)
        const spriteKey = enemy.type + (gameState.animFrame === 0 ? '1' : '2');
        const sprite    = SPRITES[spriteKey];
        if (sprite) {
            // Sutil brillo alrededor del alien
            drawSpriteGlow(sprite, enemy.x, enemy.y, 0.08);
            drawSprite(sprite, enemy.x, enemy.y);
        }

        // ── Colisión bala → enemigo (bounding box precisa) ──
        for (let i = gameState.bullets.length - 1; i >= 0; i--) {
            const b = gameState.bullets[i];
            if (
                b.x              < enemy.x + enemy.width  &&
                b.x + b.width    > enemy.x                &&
                b.y              < enemy.y + enemy.height &&
                b.y + b.height   > enemy.y
            ) {
                enemy.alive = false;
                gameState.bullets.splice(i, 1);
                gameState.score += 10;
                document.getElementById('score').textContent = gameState.score;
                addExplosion(
                    enemy.x + enemy.width  / 2,
                    enemy.y + enemy.height / 2
                );
                break;
            }
        }

        // Game Over si un enemigo alcanza la nave
        if (enemy.alive && enemy.y + enemy.height >= gameState.player.y) {
            gameOver();
            return;
        }
    });

    // ── Explosiones ──
    drawExplosions();

    // Nueva oleada si todos los enemigos han sido eliminados
    if (allDead) {
        gameState.enemies    = createEnemies();
        gameState.enemySpeed = Math.min(gameState.enemySpeed + 0.4, 4);
    }

    requestAnimationFrame(gameLoop);
}

// ─── Game Over ────────────────────────────────────────────────────────────────
function gameOver() {
    gameState.running = false;
    document.getElementById('game-over-message').style.display = 'block';
}
