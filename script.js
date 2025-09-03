class BattleGame {
    constructor() {
        this.sprites = this.createSprites();
        this.player = {
            name: "Mr. Azhar",
            level: 50,
            maxHp: 100,
            currentHp: 100,
            spriteKey: "teacher",
            moves: [
                { name: "Stern Warning", damage: 25, accuracy: 95, description: "A sharp rebuke that always hits its mark!" },
                { name: "Pop Quiz", damage: 30, accuracy: 80, description: "Catches students off guard with surprise questions!" },
                { name: "Extra Homework", damage: 40, accuracy: 70, description: "Overwhelming assignment that crushes spirits!" },
                { name: "Parent Conference", damage: 60, accuracy: 60, description: "The ultimate disciplinary move!" }
            ]
        };

        this.enemies = [
            {
                name: "Lazy Student",
                level: 5,
                maxHp: 45,
                currentHp: 45,
                spriteKey: "lazy",
                moves: [
                    { name: "Excuse Making", damage: 15, accuracy: 90 },
                    { name: "Fake Illness", damage: 20, accuracy: 70 },
                    { name: "Blame Others", damage: 10, accuracy: 95 },
                    { name: "Sleep in Class", damage: 5, accuracy: 100 }
                ]
            },
            {
                name: "Class Clown",
                level: 8,
                maxHp: 60,
                currentHp: 60,
                spriteKey: "clown",
                moves: [
                    { name: "Disruptive Joke", damage: 20, accuracy: 85 },
                    { name: "Paper Airplane", damage: 15, accuracy: 90 },
                    { name: "Silly Voices", damage: 25, accuracy: 75 },
                    { name: "Attention Seeking", damage: 30, accuracy: 65 }
                ]
            },
            {
                name: "Phone Addict",
                level: 10,
                maxHp: 55,
                currentHp: 55,
                spriteKey: "phone",
                moves: [
                    { name: "Social Media", damage: 18, accuracy: 95 },
                    { name: "Gaming", damage: 22, accuracy: 80 },
                    { name: "Texting", damage: 16, accuracy: 100 },
                    { name: "TikTok Dance", damage: 35, accuracy: 60 }
                ]
            },
            {
                name: "Know-It-All",
                level: 12,
                maxHp: 70,
                currentHp: 70,
                spriteKey: "nerd",
                moves: [
                    { name: "Correct Teacher", damage: 25, accuracy: 80 },
                    { name: "Show Off", damage: 30, accuracy: 75 },
                    { name: "Argue Everything", damage: 35, accuracy: 70 },
                    { name: "Condescending Tone", damage: 40, accuracy: 65 }
                ]
            }
        ];

        this.currentEnemy = null;
        this.battlePhase = "menu"; // menu, move-select, battle-animation, enemy-turn
        this.gameOver = false;
        this.battleMessages = [];

        this.initializeElements();
        this.startBattle();
    }

    initializeElements() {
        // Player elements
        this.playerHpBar = document.getElementById('playerHpBar');
        this.playerHpCurrent = document.getElementById('playerHpCurrent');
        this.playerHpMax = document.getElementById('playerHpMax');
        this.playerSprite = document.getElementById('playerSprite');
        this.playerLevel = document.getElementById('playerLevel');

        // Enemy elements
        this.enemyHpBar = document.getElementById('enemyHpBar');
        this.enemyName = document.getElementById('enemyName');
        this.enemyLevel = document.getElementById('enemyLevel');
        this.enemySprite = document.getElementById('enemySprite');

        // Menu elements
        this.battleText = document.getElementById('battleText');
        this.mainMenu = document.getElementById('mainMenu');
        this.moveMenu = document.getElementById('moveMenu');

        // Buttons
        this.fightBtn = document.getElementById('fightBtn');
        this.bagBtn = document.getElementById('bagBtn');
        this.pokemonBtn = document.getElementById('pokemonBtn');
        this.runBtn = document.getElementById('runBtn');
        this.backBtn = document.getElementById('backBtn');

        // Move buttons
        this.moveButtons = [
            document.getElementById('move1'),
            document.getElementById('move2'),
            document.getElementById('move3'),
            document.getElementById('move4')
        ];

        this.setupEventListeners();
    }

    createSprites() {
        const sprites = {};
        
        // Create canvas for sprite generation
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        
        // Disable anti-aliasing for pixel art
        ctx.imageSmoothingEnabled = false;
        
        // Teacher sprite
        ctx.fillStyle = '#8B4513'; // Brown hair
        ctx.fillRect(8, 8, 48, 16);
        ctx.fillStyle = '#FDBCB4'; // Skin
        ctx.fillRect(16, 16, 32, 24);
        ctx.fillStyle = '#000'; // Eyes
        ctx.fillRect(20, 20, 4, 4);
        ctx.fillRect(40, 20, 4, 4);
        ctx.fillStyle = '#000'; // Mouth
        ctx.fillRect(28, 28, 8, 2);
        ctx.fillStyle = '#000080'; // Blue shirt
        ctx.fillRect(12, 40, 40, 24);
        ctx.fillStyle = '#FFF'; // Collar
        ctx.fillRect(16, 44, 32, 16);
        ctx.fillStyle = '#FF0000'; // Red tie
        ctx.fillRect(28, 48, 8, 12);
        
        sprites.teacher = canvas.toDataURL();
        
        // Clear canvas for next sprite
        ctx.clearRect(0, 0, 64, 64);
        
        // Lazy student sprite
        ctx.fillStyle = '#654321'; // Brown messy hair
        ctx.fillRect(8, 8, 48, 16);
        ctx.fillStyle = '#FDBCB4'; // Skin
        ctx.fillRect(16, 16, 32, 24);
        ctx.fillStyle = '#000'; // Sleepy eyes (lines)
        ctx.fillRect(20, 22, 8, 2);
        ctx.fillRect(36, 22, 8, 2);
        ctx.fillStyle = '#000'; // Mouth
        ctx.fillRect(28, 28, 8, 4);
        ctx.fillStyle = '#228B22'; // Green shirt
        ctx.fillRect(12, 40, 40, 24);
        
        sprites.lazy = canvas.toDataURL();
        
        ctx.clearRect(0, 0, 64, 64);
        
        // Class clown sprite
        ctx.fillStyle = '#FF6347'; // Red hair
        ctx.fillRect(8, 8, 48, 16);
        ctx.fillStyle = '#FDBCB4'; // Skin
        ctx.fillRect(16, 16, 32, 24);
        ctx.fillStyle = '#000'; // Eyes
        ctx.fillRect(20, 20, 4, 4);
        ctx.fillRect(40, 20, 4, 4);
        ctx.fillStyle = '#FF0000'; // Big smile
        ctx.fillRect(24, 28, 16, 4);
        ctx.fillRect(22, 30, 2, 2);
        ctx.fillRect(42, 30, 2, 2);
        ctx.fillStyle = '#FFA500'; // Orange shirt
        ctx.fillRect(12, 40, 40, 24);
        
        sprites.clown = canvas.toDataURL();
        
        ctx.clearRect(0, 0, 64, 64);
        
        // Phone addict sprite
        ctx.fillStyle = '#000080'; // Blue hair
        ctx.fillRect(8, 8, 48, 16);
        ctx.fillStyle = '#FDBCB4'; // Skin
        ctx.fillRect(16, 16, 32, 24);
        ctx.fillStyle = '#000'; // Eyes looking down
        ctx.fillRect(20, 24, 4, 2);
        ctx.fillRect(40, 24, 4, 2);
        ctx.fillStyle = '#000'; // Mouth
        ctx.fillRect(28, 30, 8, 2);
        ctx.fillStyle = '#800080'; // Purple shirt
        ctx.fillRect(12, 40, 40, 24);
        ctx.fillStyle = '#000'; // Phone
        ctx.fillRect(48, 32, 12, 20);
        ctx.fillStyle = '#00FF00'; // Screen
        ctx.fillRect(50, 34, 8, 16);
        
        sprites.phone = canvas.toDataURL();
        
        ctx.clearRect(0, 0, 64, 64);
        
        // Know-it-all sprite
        ctx.fillStyle = '#654321'; // Brown hair
        ctx.fillRect(8, 8, 48, 16);
        ctx.fillStyle = '#FDBCB4'; // Skin
        ctx.fillRect(16, 16, 32, 24);
        ctx.fillStyle = '#000'; // Glasses frame
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.strokeRect(18, 18, 12, 8);
        ctx.strokeRect(34, 18, 12, 8);
        ctx.fillRect(30, 22, 4, 2); // Bridge
        ctx.fillStyle = '#000'; // Eyes behind glasses
        ctx.fillRect(22, 20, 2, 2);
        ctx.fillRect(38, 20, 2, 2);
        ctx.fillStyle = '#000'; // Smug mouth
        ctx.fillRect(28, 28, 8, 2);
        ctx.fillStyle = '#FFF'; // White shirt
        ctx.fillRect(12, 40, 40, 24);
        
        sprites.nerd = canvas.toDataURL();
        
        return sprites;
    }

    createSpriteHTML(spriteKey) {
        const sprites = {
            teacher: '<div class="sprite-character teacher-sprite">MR<br>AZHAR</div>',
            lazy: '<div class="sprite-character lazy-sprite">😴<br>LAZY</div>',
            clown: '<div class="sprite-character clown-sprite">🤡<br>CLOWN</div>',
            phone: '<div class="sprite-character phone-sprite">📱<br>PHONE</div>',
            nerd: '<div class="sprite-character nerd-sprite">🤓<br>NERD</div>'
        };

        return sprites[spriteKey] || '<div class="sprite-character">❓</div>';
    }

    createMrAzharSprite() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        // Based on your exact sprite image - recreating Mr. Azhar
        
        // Hair (blonde/light brown - matching the sprite)
        ctx.fillStyle = '#D4C09A';
        ctx.fillRect(8, 2, 16, 6);
        ctx.fillRect(6, 6, 2, 4);
        ctx.fillRect(24, 6, 2, 4);
        ctx.fillRect(8, 8, 16, 4);
        
        // Hair shadow/darker parts
        ctx.fillStyle = '#B8A082';
        ctx.fillRect(10, 4, 2, 2);
        ctx.fillRect(20, 4, 2, 2);
        ctx.fillRect(8, 10, 2, 2);
        ctx.fillRect(22, 10, 2, 2);
        
        // Face/neck (skin tone)
        ctx.fillStyle = '#FDBCB4';
        ctx.fillRect(10, 12, 12, 10);
        ctx.fillRect(12, 22, 8, 4);
        
        // Eyes (black dots)
        ctx.fillStyle = '#000000';
        ctx.fillRect(12, 16, 2, 2);
        ctx.fillRect(18, 16, 2, 2);
        
        // Shirt (purple/lavender - matching the sprite)
        ctx.fillStyle = '#9B7DB5';
        ctx.fillRect(8, 24, 16, 8);
        ctx.fillRect(6, 26, 20, 6);
        
        // Shirt highlights (lighter purple)
        ctx.fillStyle = '#B599CC';
        ctx.fillRect(8, 24, 16, 2);
        ctx.fillRect(8, 28, 2, 4);
        ctx.fillRect(22, 28, 2, 4);

        const dataURL = canvas.toDataURL();
        return `<img src="${dataURL}" alt="Mr. Azhar" style="width: 96px; height: 96px; image-rendering: pixelated;">`;
    }

    setupEventListeners() {
        this.fightBtn.addEventListener('click', () => this.showMoveMenu());
        this.bagBtn.addEventListener('click', () => this.useSupplies());
        this.pokemonBtn.addEventListener('click', () => this.useTactics());
        this.runBtn.addEventListener('click', () => this.sendToDetention());
        this.backBtn.addEventListener('click', () => this.showMainMenu());

        this.moveButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => this.useMove(index));
        });
    }

    startBattle() {
        this.currentEnemy = this.getRandomEnemy();
        this.updateDisplay();
        this.setBattleText("A wild " + this.currentEnemy.name + " appears!");
        
        setTimeout(() => {
            this.setBattleText("What will Mr. Azhar do?");
        }, 2000);
    }

    getRandomEnemy() {
        const enemy = { ...this.enemies[Math.floor(Math.random() * this.enemies.length)] };
        enemy.currentHp = enemy.maxHp;
        return enemy;
    }

    updateDisplay() {
        // Update player display
        this.playerSprite.innerHTML = this.createSpriteHTML(this.player.spriteKey);
        this.playerLevel.textContent = this.player.level;
        this.playerHpCurrent.textContent = this.player.currentHp;
        this.playerHpMax.textContent = this.player.maxHp;
        this.updateHpBar(this.playerHpBar, this.player.currentHp, this.player.maxHp);

        // Update enemy display
        this.enemySprite.innerHTML = this.createSpriteHTML(this.currentEnemy.spriteKey);
        this.enemyName.textContent = this.currentEnemy.name;
        this.enemyLevel.textContent = this.currentEnemy.level;
        this.updateHpBar(this.enemyHpBar, this.currentEnemy.currentHp, this.currentEnemy.maxHp);

        // Update move buttons
        this.moveButtons.forEach((btn, index) => {
            if (this.player.moves[index]) {
                btn.textContent = this.player.moves[index].name;
                btn.disabled = false;
            } else {
                btn.textContent = "---";
                btn.disabled = true;
            }
        });
    }

    updateHpBar(hpBar, currentHp, maxHp) {
        const percentage = (currentHp / maxHp) * 100;
        hpBar.style.width = percentage + '%';
        
        hpBar.className = 'hp-bar-fill';
        if (percentage <= 20) {
            hpBar.classList.add('critical');
        } else if (percentage <= 50) {
            hpBar.classList.add('low');
        }
    }

    setBattleText(text) {
        this.battleText.textContent = text;
    }

    showMoveMenu() {
        this.mainMenu.classList.add('hidden');
        this.moveMenu.classList.remove('hidden');
        this.battlePhase = "move-select";
    }

    showMainMenu() {
        this.moveMenu.classList.add('hidden');
        this.mainMenu.classList.remove('hidden');
        this.battlePhase = "menu";
        this.setBattleText("What will Mr. Azhar do?");
    }

    useMove(moveIndex) {
        if (this.battlePhase !== "move-select" || this.gameOver) return;

        const move = this.player.moves[moveIndex];
        if (!move) return;

        this.battlePhase = "battle-animation";
        this.setBattleText(`Mr. Azhar used ${move.name}!`);

        setTimeout(() => {
            const hit = Math.random() * 100 <= move.accuracy;
            if (hit) {
                const damage = this.calculateDamage(move.damage);
                this.currentEnemy.currentHp = Math.max(0, this.currentEnemy.currentHp - damage);
                this.updateDisplay();
                
                this.enemySprite.classList.add('damage-animation');
                setTimeout(() => {
                    this.enemySprite.classList.remove('damage-animation');
                }, 500);

                this.setBattleText(`${this.currentEnemy.name} took ${damage} damage!`);
                
                if (this.currentEnemy.currentHp <= 0) {
                    setTimeout(() => this.enemyDefeated(), 1500);
                } else {
                    setTimeout(() => this.enemyTurn(), 1500);
                }
            } else {
                this.setBattleText(`Mr. Azhar's attack missed!`);
                setTimeout(() => this.enemyTurn(), 1500);
            }
        }, 1000);
    }

    enemyTurn() {
        if (this.gameOver) return;

        const enemyMove = this.currentEnemy.moves[Math.floor(Math.random() * this.currentEnemy.moves.length)];
        this.setBattleText(`${this.currentEnemy.name} used ${enemyMove.name}!`);

        setTimeout(() => {
            const hit = Math.random() * 100 <= enemyMove.accuracy;
            if (hit) {
                const damage = this.calculateEnemyDamage(enemyMove.damage);
                this.player.currentHp = Math.max(0, this.player.currentHp - damage);
                this.updateDisplay();
                
                this.playerSprite.classList.add('damage-animation');
                setTimeout(() => {
                    this.playerSprite.classList.remove('damage-animation');
                }, 500);

                this.setBattleText(`Mr. Azhar took ${damage} damage!`);
                
                if (this.player.currentHp <= 0) {
                    setTimeout(() => this.playerDefeated(), 1500);
                } else {
                    setTimeout(() => {
                        this.battlePhase = "menu";
                        this.showMainMenu();
                    }, 1500);
                }
            } else {
                this.setBattleText(`${this.currentEnemy.name}'s attack missed!`);
                setTimeout(() => {
                    this.battlePhase = "menu";
                    this.showMainMenu();
                }, 1500);
            }
        }, 1000);
    }

    calculateDamage(baseDamage) {
        const variation = Math.random() * 0.3 + 0.85; // 85% to 115% variation
        return Math.floor(baseDamage * variation);
    }

    calculateEnemyDamage(baseDamage) {
        const variation = Math.random() * 0.3 + 0.85;
        return Math.floor(baseDamage * variation * 0.8); // Enemies do less damage
    }

    enemyDefeated() {
        this.setBattleText(`${this.currentEnemy.name} was disciplined! Mr. Azhar wins!`);
        
        setTimeout(() => {
            const continueGame = confirm("Another student is causing trouble! Continue teaching?");
            if (continueGame) {
                this.currentEnemy = this.getRandomEnemy();
                this.updateDisplay();
                this.setBattleText("A wild " + this.currentEnemy.name + " appears!");
                setTimeout(() => {
                    this.battlePhase = "menu";
                    this.showMainMenu();
                }, 2000);
            } else {
                this.setBattleText("Mr. Azhar completed his teaching day successfully!");
                this.gameOver = true;
            }
        }, 2000);
    }

    playerDefeated() {
        this.setBattleText("Mr. Azhar is overwhelmed by the chaos! The students win...");
        this.gameOver = true;
        
        setTimeout(() => {
            const retry = confirm("The principal wants to give you another chance! Try again?");
            if (retry) {
                this.restartGame();
            }
        }, 2000);
    }

    restartGame() {
        this.player.currentHp = this.player.maxHp;
        this.gameOver = false;
        this.battlePhase = "menu";
        this.startBattle();
    }

    useSupplies() {
        if (this.battlePhase !== "menu" || this.gameOver) return;

        const healAmount = 30;
        const oldHp = this.player.currentHp;
        this.player.currentHp = Math.min(this.player.maxHp, this.player.currentHp + healAmount);
        const actualHeal = this.player.currentHp - oldHp;

        if (actualHeal > 0) {
            this.updateDisplay();
            this.setBattleText(`Mr. Azhar used coffee! Restored ${actualHeal} HP!`);
            setTimeout(() => this.enemyTurn(), 2000);
        } else {
            this.setBattleText("Mr. Azhar's HP is already full!");
            setTimeout(() => {
                this.setBattleText("What will Mr. Azhar do?");
            }, 1500);
        }
    }

    useTactics() {
        if (this.battlePhase !== "menu" || this.gameOver) return;

        const strategies = [
            "Mr. Azhar analyzed the student's behavior patterns!",
            "Mr. Azhar planned a strategic lesson approach!",
            "Mr. Azhar prepared classroom management techniques!",
            "Mr. Azhar reviewed educational psychology!"
        ];

        const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];
        this.setBattleText(randomStrategy);
        
        setTimeout(() => {
            this.setBattleText("But nothing happened... What will Mr. Azhar do?");
        }, 2000);
    }

    sendToDetention() {
        if (this.battlePhase !== "menu" || this.gameOver) return;

        const escapeChance = 30;
        if (Math.random() * 100 <= escapeChance) {
            this.setBattleText(`${this.currentEnemy.name} was sent to detention! Mr. Azhar escaped!`);
            setTimeout(() => {
                this.setBattleText("Class continues peacefully...");
                this.gameOver = true;
            }, 2000);
        } else {
            this.setBattleText(`${this.currentEnemy.name} refuses to go to detention!`);
            setTimeout(() => this.enemyTurn(), 2000);
        }
    }
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new BattleGame();
});