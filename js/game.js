/**
 * game.js
 * Juego Space Invaders con controles táctiles
 */

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Hacer el canvas responsive
function resizeCanvas() {
    const isMobileView = window.matchMedia("(max-width: 768px)").matches;
    if (isMobileView) {
        const container = document.getElementById('game-container');
        const maxWidth = container.clientWidth - 32;
        const scale = maxWidth / 600;
        canvas.style.width = maxWidth + 'px';
        canvas.style.height = (400 * scale) + 'px';
    } else {
        canvas.style.width = '600px';
        canvas.style.height = '400px';
    }
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', resizeCanvas);

let gameState = {
    running: false,
    score: 0,
    player: { x: 275, y: 360, width: 40, height: 20, speed: 5 },
    bullets: [],
    enemies: [],
    enemyDirection: 1,
    enemySpeed: 1,
    keys: {},
    lastShot: 0
};

function createEnemies() {
    const enemies = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 8; col++) {
            enemies.push({
                x: 60 + col * 60,
                y: 40 + row * 50,
                width: 35,
                height: 25,
                alive: true
            });
        }
    }
    return enemies;
}

function initGame() {
    gameState.running = true;
    gameState.score = 0;
    gameState.player.x = 275;
    gameState.bullets = [];
    gameState.enemies = createEnemies();
    gameState.enemyDirection = 1;
    gameState.enemySpeed = 1;
    
    document.getElementById('score').textContent = '0';
    document.getElementById('game-over-message').style.display = 'none';
    
    resizeCanvas();
    gameLoop();
}

function restartGame() {
    initGame();
}

// Control de teclado
document.addEventListener('keydown', (e) => {
    if (!gameState.running) return;
    gameState.keys[e.key] = true;
    
    if (e.key === ' ') {
        e.preventDefault();
        const now = Date.now();
        if (now - gameState.lastShot > 300) {
            shoot();
            gameState.lastShot = now;
        }
    }
});

document.addEventListener('keyup', (e) => {
    gameState.keys[e.key] = false;
});

// Controles táctiles con botones
let touchMoveLeft = false;
let touchMoveRight = false;

document.getElementById('btn-left').addEventListener('touchstart', (e) => {
    e.preventDefault();
    touchMoveLeft = true;
});

document.getElementById('btn-left').addEventListener('touchend', (e) => {
    e.preventDefault();
    touchMoveLeft = false;
});

document.getElementById('btn-right').addEventListener('touchstart', (e) => {
    e.preventDefault();
    touchMoveRight = true;
});

document.getElementById('btn-right').addEventListener('touchend', (e) => {
    e.preventDefault();
    touchMoveRight = false;
});

document.getElementById('btn-shoot').addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (!gameState.running) return;
    
    const now = Date.now();
    if (now - gameState.lastShot > 300) {
        shoot();
        gameState.lastShot = now;
    }
});

// Mouse support
document.getElementById('btn-left').addEventListener('mousedown', (e) => {
    e.preventDefault();
    touchMoveLeft = true;
});

document.getElementById('btn-left').addEventListener('mouseup', (e) => {
    e.preventDefault();
    touchMoveLeft = false;
});

document.getElementById('btn-right').addEventListener('mousedown', (e) => {
    e.preventDefault();
    touchMoveRight = true;
});

document.getElementById('btn-right').addEventListener('mouseup', (e) => {
    e.preventDefault();
    touchMoveRight = false;
});

document.getElementById('btn-shoot').addEventListener('click', (e) => {
    e.preventDefault();
    if (!gameState.running) return;
    
    const now = Date.now();
    if (now - gameState.lastShot > 300) {
        shoot();
        gameState.lastShot = now;
    }
});

function shoot() {
    gameState.bullets.push({
        x: gameState.player.x + gameState.player.width / 2 - 2,
        y: gameState.player.y,
        width: 4,
        height: 10,
        speed: 7
    });
}

function gameLoop() {
    if (!gameState.running) return;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Mover jugador
    if ((gameState.keys['ArrowLeft'] || touchMoveLeft) && gameState.player.x > 0) {
        gameState.player.x -= gameState.player.speed;
    }
    if ((gameState.keys['ArrowRight'] || touchMoveRight) && gameState.player.x < canvas.width - gameState.player.width) {
        gameState.player.x += gameState.player.speed;
    }

    // Dibujar jugador
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(gameState.player.x, gameState.player.y, gameState.player.width, gameState.player.height);
    ctx.fillRect(gameState.player.x + 15, gameState.player.y - 10, 10, 10);

    // Dibujar balas
    for (let i = gameState.bullets.length - 1; i >= 0; i--) {
        const bullet = gameState.bullets[i];
        bullet.y -= bullet.speed;
        
        if (bullet.y < 0) {
            gameState.bullets.splice(i, 1);
            continue;
        }

        ctx.fillStyle = '#ffff00';
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }

    // Enemigos
    let leftMost = canvas.width;
    let rightMost = 0;
    let allDead = true;

    gameState.enemies.forEach(enemy => {
        if (enemy.alive) {
            allDead = false;
            if (enemy.x < leftMost) leftMost = enemy.x;
            if (enemy.x + enemy.width > rightMost) rightMost = enemy.x + enemy.width;
        }
    });

    let moveDown = false;
    if (gameState.enemyDirection === 1 && rightMost >= canvas.width - 10) {
        gameState.enemyDirection = -1;
        moveDown = true;
    } else if (gameState.enemyDirection === -1 && leftMost <= 10) {
        gameState.enemyDirection = 1;
        moveDown = true;
    }

    gameState.enemies.forEach((enemy, index) => {
        if (!enemy.alive) return;

        enemy.x += gameState.enemySpeed * gameState.enemyDirection;
        if (moveDown) enemy.y += 15;

        ctx.fillStyle = '#ff0000';
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        ctx.fillStyle = '#fff';
        ctx.fillRect(enemy.x + 5, enemy.y + 5, 8, 8);
        ctx.fillRect(enemy.x + 22, enemy.y + 5, 8, 8);
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(enemy.x + 8, enemy.y - 5, 3, 5);
        ctx.fillRect(enemy.x + 24, enemy.y - 5, 3, 5);

        for (let i = gameState.bullets.length - 1; i >= 0; i--) {
            const bullet = gameState.bullets[i];
            
            if (
                bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.y + bullet.height > enemy.y
            ) {
                enemy.alive = false;
                gameState.bullets.splice(i, 1);
                gameState.score += 10;
                document.getElementById('score').textContent = gameState.score;
                break;
            }
        }

        if (enemy.y + enemy.height >= gameState.player.y) {
            gameOver();
            return;
        }
    });

    if (allDead) {
        gameState.enemies = createEnemies();
        gameState.enemySpeed += 0.3;
    }

    requestAnimationFrame(gameLoop);
}

function gameOver() {
    gameState.running = false;
    document.getElementById('game-over-message').style.display = 'block';
}
