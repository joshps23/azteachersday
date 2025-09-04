// Phaser-based Pokemon Battle Game - Mr. Azhar vs Students

class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        // Load sprite images - you can replace these with actual PNG files
        // Just put your PNG files in the same folder and change the paths
        this.load.image('mrAzharFile', 'mr-azhar-sprite.png'); // Your actual sprite file
        this.load.image('studentSprite1', 'lazy-student.png');
        this.load.image('studentSprite2', 'class-clown.png');
        
        // Load audio files (using generated Web Audio API sounds as fallback)
        this.createAudioSounds();
        
        // Fallback to canvas generation if files don't exist
        
        // Create sprite textures using canvas as fallback
        this.createSprites();
        
        // Load UI elements
        this.load.image('battleBg', 'data:image/svg+xml;base64,' + btoa(`
            <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#98FB98;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#90EE90;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="800" height="400" fill="url(#skyGrad)"/>
            </svg>
        `));
    }

    createAudioSounds() {
        // Generate audio using Web Audio API for retro 8-bit sounds
        
        // Create simple sound effects
        this.soundBuffers = {};
        
        // Attack sound effects
        this.createSimpleSound('sternWarning', 220, 0.3);
        this.createSimpleSound('popQuiz', 440, 0.2);
        this.createSimpleSound('extraHomework', 330, 0.5);
        this.createSimpleSound('parentConference', 110, 0.8);
        this.createSimpleSound('studentAttack', 180, 0.4);
        
        // UI sounds
        this.createSimpleSound('buttonClick', 800, 0.1);
        this.createSimpleSound('menuMove', 600, 0.05);
        this.createSimpleSound('hpDrain', 150, 0.3);
        this.createSimpleSound('heal', 523, 0.4);
        this.createSimpleSound('victory', 659, 1.0);
        this.createSimpleSound('defeat', 100, 1.0);
    }

    createSimpleSound(name, frequency, duration) {
        // Simple oscillator-based sound generation
        this.soundBuffers[name] = { frequency, duration, type: 'square' };
    }

    playSound(soundName) {
        if (!this.soundBuffers || !this.soundBuffers[soundName]) return;
        
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            const sound = this.soundBuffers[soundName];
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(sound.frequency, audioContext.currentTime);
            oscillator.type = sound.type || 'square';
            
            // Envelope
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + sound.duration);
        } catch (error) {
            console.log('Audio not supported:', error);
        }
    }

    createSprites() {
        // Create Mr. Azhar sprite based on your image
        this.createMrAzharSprite();
        
        // Create student sprites
        this.createStudentSprites();
    }

    createMrAzharSprite() {
        const graphics = this.add.graphics();
        
        // AUTHENTIC POKEMON TRAINER STYLE (like reference image)
        
        // Simple black outline
        graphics.fillStyle(0x000000);
        graphics.fillRect(6, 0, 20, 32);    // Body outline
        graphics.fillRect(8, 0, 16, 3);     // Head top
        
        // Simple brown hair (classic Pokemon style)
        graphics.fillStyle(0x8B4513);       // Classic brown
        graphics.fillRect(8, 1, 16, 8);     // Hair base
        graphics.fillRect(9, 0, 14, 2);     // Hair top
        
        // Hair highlight (simple)
        graphics.fillStyle(0xA0522D);
        graphics.fillRect(10, 2, 12, 4);    // Simple highlight
        
        // Face (classic Pokemon skin tone)
        graphics.fillStyle(0xFFDBCB);       // Pokemon skin
        graphics.fillRect(10, 9, 12, 10);   // Face
        
        // Simple dot eyes (authentic Pokemon style)
        graphics.fillStyle(0x000000);
        graphics.fillRect(12, 13, 2, 2);    // Left eye
        graphics.fillRect(18, 13, 2, 2);    // Right eye
        
        // Simple mouth line
        graphics.fillRect(14, 17, 4, 1);    // Mouth
        
        // Neck
        graphics.fillStyle(0xFFDBCB);
        graphics.fillRect(13, 19, 6, 4);    // Neck
        
        // Classic blue shirt (like Pokemon trainers)
        graphics.fillStyle(0x4169E1);       // Royal blue
        graphics.fillRect(7, 23, 18, 9);    // Shirt
        
        // Simple shirt highlight
        graphics.fillStyle(0x6495ED);
        graphics.fillRect(8, 24, 16, 3);    // Highlight
        
        // Simple collar
        graphics.fillStyle(0x000080);
        graphics.fillRect(12, 23, 8, 2);    // Collar
        
        graphics.generateTexture('mrAzhar', 32, 32);
        graphics.destroy();
    }

    createStudentSprites() {
        // Create Lazy Student (based on your sprite but with lazy characteristics)
        this.createLazyStudent();
        
        // Create Class Clown (bright colors, messy look)
        this.createClassClown();
        
        // Create Phone Addict (modern colors, phone in hand)
        this.createPhoneAddict();
        
        // Create Know-It-All (neat appearance, glasses)
        this.createKnowItAll();
    }

    createLazyStudent() {
        const graphics = this.add.graphics();
        
        // SIMPLE POKEMON TRAINER STYLE - LAZY STUDENT
        
        // Simple black outline
        graphics.fillStyle(0x000000);
        graphics.fillRect(6, 0, 20, 32);    // Body outline
        graphics.fillRect(8, 0, 16, 3);     // Head outline
        
        // Simple messy hair (2 colors max)
        graphics.fillStyle(0x5D4037);       // Dark brown base
        graphics.fillRect(8, 1, 16, 8);     // Hair base
        graphics.fillRect(9, 0, 14, 2);     // Hair top
        
        // Messy hair spikes (simple)
        graphics.fillRect(7, 1, 2, 4);      // Left messy spike
        graphics.fillRect(12, 0, 3, 2);     // Center messy spike
        graphics.fillRect(21, 1, 2, 3);     // Right messy spike
        
        // Simple hair highlight
        graphics.fillStyle(0x8D6E63);
        graphics.fillRect(10, 2, 12, 4);    // Simple highlight
        
        // Face (Pokemon skin tone)
        graphics.fillStyle(0xFFDBCB);
        graphics.fillRect(10, 9, 12, 10);   // Face
        
        // Sleepy horizontal line eyes (classic lazy look)
        graphics.fillStyle(0x000000);
        graphics.fillRect(12, 13, 3, 1);    // Left sleepy eye (horizontal line)
        graphics.fillRect(17, 13, 3, 1);    // Right sleepy eye (horizontal line)
        
        // Simple mouth line
        graphics.fillRect(14, 17, 4, 1);    // Small mouth
        
        // Neck
        graphics.fillStyle(0xFFDBCB);
        graphics.fillRect(13, 19, 6, 4);    // Neck
        
        // Simple green shirt
        graphics.fillStyle(0x4CAF50);       // Green
        graphics.fillRect(7, 23, 18, 9);    // Shirt
        
        // Simple shirt highlight
        graphics.fillStyle(0x66BB6A);
        graphics.fillRect(8, 24, 16, 3);    // Highlight
        
        graphics.generateTexture('lazyStudent', 32, 32);
        graphics.destroy();
    }

    createClassClown() {
        const graphics = this.add.graphics();
        
        // SIMPLE POKEMON TRAINER STYLE - CLASS CLOWN
        
        // Simple black outline
        graphics.fillStyle(0x000000);
        graphics.fillRect(6, 0, 20, 32);    // Body outline
        graphics.fillRect(8, 0, 16, 3);     // Head outline
        
        // Simple spiky hair (bright colors)
        graphics.fillStyle(0xFF5722);       // Bright red-orange
        graphics.fillRect(8, 1, 16, 8);     // Hair base
        graphics.fillRect(9, 0, 14, 2);     // Hair top
        
        // Simple spiky hair details
        graphics.fillRect(6, 1, 3, 4);      // Left spike
        graphics.fillRect(11, 0, 3, 3);     // Center spike
        graphics.fillRect(18, 0, 2, 3);     // Right spike
        graphics.fillRect(22, 1, 3, 4);     // Far right spike
        
        // Simple hair highlight
        graphics.fillStyle(0xFF8A65);
        graphics.fillRect(10, 2, 12, 4);    // Simple highlight
        
        // Face (Pokemon skin tone)
        graphics.fillStyle(0xFFDBCB);
        graphics.fillRect(10, 9, 12, 10);   // Face
        
        // Simple dot eyes (2x2 pixels)
        graphics.fillStyle(0x000000);
        graphics.fillRect(12, 13, 2, 2);    // Left eye
        graphics.fillRect(18, 13, 2, 2);    // Right eye
        
        // Simple mouth line (bigger smile)
        graphics.fillRect(13, 17, 6, 1);    // Wide smile
        
        // Neck
        graphics.fillStyle(0xFFDBCB);
        graphics.fillRect(13, 19, 6, 4);    // Neck
        
        // Simple orange shirt (bright colors)
        graphics.fillStyle(0xFF9800);       // Bright orange
        graphics.fillRect(7, 23, 18, 9);    // Shirt
        
        // Simple shirt highlight
        graphics.fillStyle(0xFFB74D);
        graphics.fillRect(8, 24, 16, 3);    // Highlight
        
        graphics.generateTexture('classClown', 32, 32);
        graphics.destroy();
    }

    createPhoneAddict() {
        const graphics = this.add.graphics();
        
        // Professional modern tech-obsessed student
        
        // Black outline
        graphics.fillStyle(0x000000);
        graphics.fillRect(4, 0, 24, 32);
        graphics.fillRect(2, 2, 28, 28);
        
        // Modern styled hair outline
        graphics.fillStyle(0x0D47A1);  // Very dark blue
        graphics.fillRect(5, 1, 22, 12);
        graphics.fillRect(3, 3, 26, 8);
        
        // Hair base (trendy blue)
        graphics.fillStyle(0x1976D2);   // Dark blue
        graphics.fillRect(6, 2, 20, 9);
        graphics.fillRect(4, 4, 24, 6);
        
        // Hair main color
        graphics.fillStyle(0x2196F3);   // Medium blue
        graphics.fillRect(7, 3, 18, 7);
        graphics.fillRect(5, 5, 22, 4);
        
        // Hair highlights (stylish)
        graphics.fillStyle(0x42A5F5);
        graphics.fillRect(8, 4, 16, 4);
        graphics.fillRect(9, 8, 14, 1);
        
        // Modern hair styling
        graphics.fillStyle(0x64B5F6);
        graphics.fillRect(9, 4, 3, 2);   // Side part
        graphics.fillRect(20, 4, 4, 2);  // Styled section
        
        // Face outline
        graphics.fillStyle(0x000000);
        graphics.fillRect(8, 11, 16, 13);
        graphics.fillRect(6, 13, 20, 9);
        
        // Face base
        graphics.fillStyle(0xFDBCB4);
        graphics.fillRect(9, 12, 14, 11);
        graphics.fillRect(7, 14, 18, 7);
        
        // Concentrated face shading
        graphics.fillStyle(0xE8A688);
        graphics.fillRect(9, 19, 14, 4);   // Focus expression
        graphics.fillRect(8, 16, 2, 2);    // Concentration lines
        graphics.fillRect(22, 16, 2, 2);
        
        // Eyes looking down (at phone) - professional design
        graphics.fillStyle(0x000000);
        graphics.fillRect(11, 17, 3, 2);   // Left eye downward
        graphics.fillRect(18, 17, 3, 2);   // Right eye downward
        
        // Concentrated mouth
        graphics.fillRect(14, 20, 4, 1);
        
        // Neck
        graphics.fillStyle(0xFDBCB4);
        graphics.fillRect(12, 23, 8, 4);
        graphics.fillStyle(0xE8A688);
        graphics.fillRect(12, 26, 8, 1);
        
        // Shirt outline
        graphics.fillStyle(0x000000);
        graphics.fillRect(5, 26, 22, 6);
        graphics.fillRect(3, 28, 26, 4);
        
        // Modern purple shirt
        graphics.fillStyle(0x6A1B9A);     // Dark purple base
        graphics.fillRect(6, 27, 20, 4);
        graphics.fillRect(4, 29, 24, 2);
        
        // Shirt main color
        graphics.fillStyle(0x8E24AA);     // Medium purple
        graphics.fillRect(7, 27, 18, 3);
        graphics.fillRect(5, 29, 22, 1);
        
        // Shirt highlights
        graphics.fillStyle(0xAB47BC);
        graphics.fillRect(7, 27, 18, 1);
        graphics.fillRect(7, 29, 4, 1);
        graphics.fillRect(21, 29, 4, 1);
        
        // Professional phone design
        graphics.fillStyle(0x000000);     // Phone outline
        graphics.fillRect(25, 14, 6, 10);
        
        // Phone body
        graphics.fillStyle(0x263238);     // Dark phone body
        graphics.fillRect(26, 15, 4, 8);
        
        // Phone screen (bright blue glow)
        graphics.fillStyle(0x03DAC6);     // Cyan screen
        graphics.fillRect(26, 16, 4, 6);
        
        // Screen content (social media colors)
        graphics.fillStyle(0x2196F3);     // Blue notification
        graphics.fillRect(26, 17, 4, 1);
        graphics.fillStyle(0xFF5722);     // Red notification
        graphics.fillRect(26, 19, 4, 1);
        graphics.fillStyle(0x4CAF50);     // Green notification
        graphics.fillRect(26, 21, 4, 1);
        
        // Screen glow effect
        graphics.fillStyle(0x80CBC4);
        graphics.fillRect(25, 16, 1, 6);   // Left glow
        graphics.fillRect(30, 16, 1, 6);   // Right glow
        
        graphics.generateTexture('phoneAddict', 32, 32);
        graphics.destroy();
    }

    createKnowItAll() {
        const graphics = this.add.graphics();
        
        // PROFESSIONAL SPRITE WITH BLACK OUTLINE
        
        // Black outline (professional game sprites always have outlines)
        graphics.fillStyle(0x000000);
        graphics.fillRect(4, 0, 24, 32);   // Full sprite outline
        graphics.fillRect(2, 2, 28, 28);   // Extended outline areas
        
        // Hair outline (neat, well-groomed)
        graphics.fillStyle(0x2E1810);  // Very dark brown
        graphics.fillRect(5, 1, 22, 12);
        graphics.fillRect(3, 3, 26, 8);
        
        // Neat hair base
        graphics.fillStyle(0x5D4037);   // Dark brown
        graphics.fillRect(6, 2, 20, 9);
        graphics.fillRect(4, 4, 24, 6);
        
        // Professional hair highlights
        graphics.fillStyle(0x795548);   // Medium brown
        graphics.fillRect(7, 3, 18, 6);
        graphics.fillRect(5, 5, 22, 4);
        
        // Hair shine (well-maintained)
        graphics.fillStyle(0x8D6E63);
        graphics.fillRect(8, 4, 16, 3);   // Clean shine line
        graphics.fillRect(10, 2, 12, 2);  // Top highlight
        
        // Face outline
        graphics.fillStyle(0x000000);
        graphics.fillRect(8, 11, 16, 13);
        graphics.fillRect(6, 13, 20, 9);
        
        // Face base (3-tone shading)
        graphics.fillStyle(0xFDBCB4);   // Base skin tone
        graphics.fillRect(9, 12, 14, 11);
        graphics.fillRect(7, 14, 18, 7);
        
        // Face highlights (professional lighting)
        graphics.fillStyle(0xFFCCBC);
        graphics.fillRect(10, 13, 4, 6);   // Forehead highlight
        graphics.fillRect(18, 13, 4, 6);   // Cheek highlight
        graphics.fillRect(13, 14, 6, 4);   // Nose bridge
        
        // Face shadows (depth and dimension)
        graphics.fillStyle(0xE8A688);
        graphics.fillRect(9, 19, 14, 4);   // Lower face shadow
        graphics.fillRect(8, 16, 2, 5);    // Left face shadow
        graphics.fillRect(22, 16, 2, 5);   // Right face shadow
        
        // Professional glasses frame (thick, academic style)
        graphics.fillStyle(0x000000);
        graphics.fillRect(9, 14, 6, 6);    // Left lens frame
        graphics.fillRect(17, 14, 6, 6);   // Right lens frame
        graphics.fillRect(15, 16, 2, 1);   // Bridge
        graphics.fillRect(8, 16, 1, 2);    // Left temple start
        graphics.fillRect(23, 16, 1, 2);   // Right temple start
        
        // Glasses lenses (professional anti-glare)
        graphics.fillStyle(0xF5F5F5);
        graphics.fillRect(10, 15, 4, 4);   // Left lens
        graphics.fillRect(18, 15, 4, 4);   // Right lens
        
        // Lens reflections (professional detail)
        graphics.fillStyle(0xFFFFFF);
        graphics.fillRect(11, 16, 1, 1);   // Left lens glint
        graphics.fillRect(19, 16, 1, 1);   // Right lens glint
        
        // Eyes behind glasses (focused, intelligent)
        graphics.fillStyle(0x000000);
        graphics.fillRect(11, 17, 2, 2);   // Left eye
        graphics.fillRect(19, 17, 2, 2);   // Right eye
        
        // Eye highlights (alert expression)
        graphics.fillStyle(0xFFFFFF);
        graphics.fillRect(12, 17, 1, 1);   // Left eye highlight
        graphics.fillRect(20, 17, 1, 1);   // Right eye highlight
        
        // Confident smile (know-it-all expression)
        graphics.fillStyle(0x000000);
        graphics.fillRect(13, 20, 6, 1);   // Smile line
        graphics.fillRect(14, 21, 4, 1);   // Lower lip
        
        // Neck (proper proportions)
        graphics.fillStyle(0xFDBCB4);
        graphics.fillRect(12, 23, 8, 4);
        
        // Neck shadow
        graphics.fillStyle(0xE8A688);
        graphics.fillRect(12, 26, 8, 1);
        
        // Professional shirt outline
        graphics.fillStyle(0x000000);
        graphics.fillRect(5, 26, 22, 6);
        graphics.fillRect(3, 28, 26, 4);
        
        // Crisp white collared shirt
        graphics.fillStyle(0xFFFFFF);
        graphics.fillRect(6, 27, 20, 4);
        graphics.fillRect(4, 29, 24, 2);
        
        // Shirt highlights (crisp, clean)
        graphics.fillStyle(0xF8F8FF);
        graphics.fillRect(7, 28, 6, 2);    // Left collar highlight
        graphics.fillRect(19, 28, 6, 2);   // Right collar highlight
        
        // Professional shirt collar
        graphics.fillStyle(0xF5F5F5);
        graphics.fillRect(10, 27, 12, 2);  // Collar base
        graphics.fillStyle(0xE8E8E8);
        graphics.fillRect(11, 28, 10, 1);  // Collar shadow
        
        // Academic navy tie
        graphics.fillStyle(0x1A237E);      // Deep navy
        graphics.fillRect(14, 27, 4, 4);
        
        // Tie texture (professional pattern)
        graphics.fillStyle(0x303F9F);      // Medium navy
        graphics.fillRect(15, 28, 2, 1);   // Pattern stripe
        graphics.fillRect(15, 30, 2, 1);   // Pattern stripe
        
        // Tie highlight
        graphics.fillStyle(0x3F51B5);
        graphics.fillRect(14, 27, 1, 4);   // Left edge highlight
        
        // Shirt shadows (professional depth)
        graphics.fillStyle(0xE8E8E8);
        graphics.fillRect(6, 30, 20, 1);
        graphics.fillRect(4, 30, 2, 1);
        graphics.fillRect(26, 30, 2, 1);
        
        graphics.generateTexture('knowItAll', 32, 32);
        graphics.destroy();
    }

    create() {
        this.scene.start('BattleScene');
    }
}

class BattleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BattleScene' });
        
        this.player = {
            name: "Mr. Azhar",
            level: 50,
            maxHp: 100,
            currentHp: 100,
            sprite: 'mrAzhar',
            moves: [
                { name: "Stern Warning", damage: 25, accuracy: 95 },
                { name: "Pop Quiz", damage: 30, accuracy: 80 },
                { name: "Extra Homework", damage: 40, accuracy: 70 },
                { name: "Parent Conference", damage: 60, accuracy: 60 }
            ]
        };

        this.enemies = [
            {
                name: "Lazy Student",
                level: 5,
                maxHp: 45,
                currentHp: 45,
                sprite: 'lazyStudent'
            },
            {
                name: "Class Clown", 
                level: 8,
                maxHp: 60,
                currentHp: 60,
                sprite: 'classClown'
            },
            {
                name: "Phone Addict",
                level: 10,
                maxHp: 55,
                currentHp: 55,
                sprite: 'phoneAddict'
            },
            {
                name: "Know-It-All",
                level: 12,
                maxHp: 70,
                currentHp: 70,
                sprite: 'knowItAll'
            }
        ];
    }

    create() {
        // Initialize audio
        this.initializeAudio();
        
        // Background
        this.background = this.add.image(400, 200, 'battleBg');
        
        // Start battle music
        this.playBattleMusic();
        
        // Current enemy
        this.currentEnemy = { ...this.enemies[Math.floor(Math.random() * this.enemies.length)] };
        this.currentEnemy.currentHp = this.currentEnemy.maxHp;
        
        // Sprites - make sure they're visible
        console.log('Creating player sprite with texture:', 'mrAzhar');
        console.log('Creating enemy sprite with texture:', this.currentEnemy.sprite);
        
        this.playerSprite = this.add.sprite(200, 280, 'mrAzhar')
            .setScale(3)
            .setFlipX(false)
            .setVisible(true);
            
        this.enemySprite = this.add.sprite(600, 150, this.currentEnemy.sprite)
            .setScale(3)
            .setFlipX(true)
            .setVisible(true);

        // Debug: Add fallback colored rectangles if sprites don't load
        if (!this.textures.exists('mrAzhar')) {
            console.log('mrAzhar texture missing, creating fallback');
            this.playerSprite.destroy();
            this.playerSprite = this.add.rectangle(200, 280, 96, 96, 0x9B7DB5);
        }

        if (!this.textures.exists(this.currentEnemy.sprite)) {
            console.log(this.currentEnemy.sprite + ' texture missing, creating fallback');
            this.enemySprite.destroy();
            this.enemySprite = this.add.rectangle(600, 150, 96, 96, 0x228B22);
        }

        // Add floating animation
        this.tweens.add({
            targets: this.enemySprite,
            y: this.enemySprite.y - 10,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        this.tweens.add({
            targets: this.playerSprite,
            y: this.playerSprite.y - 5,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // UI Elements
        this.createUI();
        this.updateDisplay();
        
        // Battle text
        this.setBattleText("A wild " + this.currentEnemy.name + " appears!");
        
        this.time.delayedCall(2000, () => {
            this.setBattleText("What will Mr. Azhar do?");
            this.showMainMenu();
        });
    }

    initializeAudio() {
        this.soundBuffers = {
            'sternWarning': { frequency: 220, duration: 0.3, type: 'square' },
            'popQuiz': { frequency: 440, duration: 0.2, type: 'square' },
            'extraHomework': { frequency: 330, duration: 0.5, type: 'square' },
            'parentConference': { frequency: 110, duration: 0.8, type: 'square' },
            'studentAttack': { frequency: 180, duration: 0.4, type: 'square' },
            'buttonClick': { frequency: 800, duration: 0.1, type: 'square' },
            'hpDrain': { frequency: 150, duration: 0.3, type: 'sawtooth' },
            'heal': { frequency: 523, duration: 0.4, type: 'triangle' },
            'victory': { frequency: 659, duration: 1.0, type: 'triangle' },
            'defeat': { frequency: 100, duration: 1.0, type: 'sawtooth' }
        };
        this.battleMusicPlaying = false;
    }

    playSound(soundName) {
        if (!this.soundBuffers || !this.soundBuffers[soundName]) return;
        
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            const sound = this.soundBuffers[soundName];
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(sound.frequency, audioContext.currentTime);
            oscillator.type = sound.type || 'square';
            
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + sound.duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + sound.duration);
        } catch (error) {
            console.log('Audio not supported:', error);
        }
    }

    playBattleMusic() {
        if (this.battleMusicPlaying) return;
        this.battleMusicPlaying = true;
        
        const playMelody = () => {
            if (!this.battleMusicPlaying) return;
            
            const notes = [523, 659, 783, 659, 523, 659, 698, 523];
            let index = 0;
            
            const playNote = () => {
                if (!this.battleMusicPlaying) return;
                if (index >= notes.length) {
                    index = 0;
                    setTimeout(playNote, 1000);
                    return;
                }
                
                try {
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(notes[index], audioContext.currentTime);
                    oscillator.type = 'square';
                    
                    gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.3);
                    
                    index++;
                    setTimeout(playNote, 400);
                } catch (error) {
                    console.log('Audio error:', error);
                }
            };
            
            playNote();
        };
        
        playMelody();
    }

    createUI() {
        // Enemy info box
        this.enemyInfoBg = this.add.graphics()
            .fillStyle(0xf0f0f0)
            .lineStyle(3, 0x000000)
            .fillRoundedRect(450, 50, 200, 60, 8)
            .strokeRoundedRect(450, 50, 200, 60, 8);

        this.enemyNameText = this.add.text(460, 60, this.currentEnemy.name, {
            fontSize: '18px',
            fontFamily: 'Courier New',
            color: '#000000',
            fontStyle: 'bold'
        });

        this.enemyLevelText = this.add.text(600, 60, `Lv.${this.currentEnemy.level}`, {
            fontSize: '16px',
            fontFamily: 'Courier New',
            color: '#000000',
            fontStyle: 'bold'
        });

        // Enemy HP bar
        this.enemyHpBg = this.add.graphics()
            .fillStyle(0x333333)
            .lineStyle(1, 0x000000)
            .fillRoundedRect(500, 85, 140, 8, 4)
            .strokeRoundedRect(500, 85, 140, 8, 4);

        this.enemyHpBar = this.add.graphics();

        this.add.text(460, 85, "HP", {
            fontSize: '14px',
            fontFamily: 'Courier New',
            color: '#000000',
            fontStyle: 'bold'
        });

        // Player info box  
        this.playerInfoBg = this.add.graphics()
            .fillStyle(0xf0f0f0)
            .lineStyle(3, 0x000000)
            .fillRoundedRect(50, 320, 250, 70, 8)
            .strokeRoundedRect(50, 320, 250, 70, 8);

        this.playerNameText = this.add.text(60, 330, "Mr. Azhar", {
            fontSize: '18px',
            fontFamily: 'Courier New',
            color: '#2196F3',
            fontStyle: 'bold'
        });

        this.playerLevelText = this.add.text(250, 330, `Lv.${this.player.level}`, {
            fontSize: '16px',
            fontFamily: 'Courier New',
            color: '#000000',
            fontStyle: 'bold'
        });

        // Player HP bar
        this.playerHpBg = this.add.graphics()
            .fillStyle(0x333333)
            .lineStyle(1, 0x000000)
            .fillRoundedRect(100, 355, 140, 8, 4)
            .strokeRoundedRect(100, 355, 140, 8, 4);

        this.playerHpBar = this.add.graphics();

        this.add.text(60, 355, "HP", {
            fontSize: '14px',
            fontFamily: 'Courier New',
            color: '#000000',
            fontStyle: 'bold'
        });

        this.playerHpText = this.add.text(250, 355, `${this.player.currentHp}/${this.player.maxHp}`, {
            fontSize: '14px',
            fontFamily: 'Courier New',
            color: '#000000',
            fontStyle: 'bold'
        });

        // Battle menu
        this.battleMenuBg = this.add.graphics()
            .fillStyle(0xf0f0f0)
            .lineStyle(4, 0x000000)
            .fillRoundedRect(0, 400, 800, 200, 8, 8, 0, 0)
            .strokeRoundedRect(0, 400, 800, 200, 8, 8, 0, 0);

        this.battleTextBg = this.add.graphics()
            .fillStyle(0xffffff)
            .lineStyle(2, 0xcccccc)
            .fillRect(20, 420, 760, 60)
            .strokeRect(20, 420, 760, 60);

        this.battleText = this.add.text(40, 440, "What will Mr. Azhar do?", {
            fontSize: '18px',
            fontFamily: 'Courier New',
            color: '#000000',
            fontStyle: 'bold'
        });

        this.createMenuButtons();
    }

    createMenuButtons() {
        // Main menu buttons
        this.mainMenuButtons = [];
        
        const buttonData = [
            { x: 50, y: 500, text: "DISCIPLINE", color: 0xF44336, action: () => this.showMoveMenu() },
            { x: 250, y: 500, text: "SUPPLIES", color: 0xFF9800, action: () => this.useSupplies() },
            { x: 450, y: 500, text: "TACTICS", color: 0x2196F3, action: () => this.useTactics() },
            { x: 650, y: 500, text: "DETENTION", color: 0x9C27B0, action: () => this.sendToDetention() }
        ];

        buttonData.forEach(btn => {
            const button = this.add.graphics()
                .fillStyle(btn.color)
                .lineStyle(3, 0x000000)
                .fillRoundedRect(btn.x, btn.y, 140, 60, 8)
                .strokeRoundedRect(btn.x, btn.y, 140, 60, 8)
                .setInteractive(new Phaser.Geom.Rectangle(btn.x, btn.y, 140, 60), Phaser.Geom.Rectangle.Contains)
                .on('pointerdown', () => {
                    this.playSound('buttonClick');
                    btn.action();
                })
                .on('pointerover', () => {
                    button.setTint(0xcccccc);
                    this.playSound('buttonClick');
                })
                .on('pointerout', () => button.clearTint());

            const text = this.add.text(btn.x + 70, btn.y + 30, btn.text, {
                fontSize: '16px',
                fontFamily: 'Courier New',
                color: '#ffffff',
                fontStyle: 'bold'
            }).setOrigin(0.5);

            this.mainMenuButtons.push({ button, text });
        });

        // Move menu buttons
        this.moveMenuButtons = [];
        this.player.moves.forEach((move, index) => {
            const x = 50 + (index % 2) * 350;
            const y = 500 + Math.floor(index / 2) * 40;

            const button = this.add.graphics()
                .fillStyle(0x2196F3)
                .lineStyle(3, 0x000000)
                .fillRoundedRect(x, y, 300, 35, 8)
                .strokeRoundedRect(x, y, 300, 35, 8)
                .setInteractive(new Phaser.Geom.Rectangle(x, y, 300, 35), Phaser.Geom.Rectangle.Contains)
                .on('pointerdown', () => {
                    this.playSound('buttonClick');
                    this.useMove(index);
                })
                .on('pointerover', () => {
                    button.setTint(0xcccccc);
                })
                .on('pointerout', () => button.clearTint())
                .setVisible(false);

            const text = this.add.text(x + 150, y + 17, move.name, {
                fontSize: '14px',
                fontFamily: 'Courier New',
                color: '#ffffff',
                fontStyle: 'bold'
            }).setOrigin(0.5).setVisible(false);

            this.moveMenuButtons.push({ button, text });
        });

        // Back button
        this.backButton = this.add.graphics()
            .fillStyle(0x666666)
            .lineStyle(3, 0x000000)
            .fillRoundedRect(350, 580, 100, 30, 8)
            .strokeRoundedRect(350, 580, 100, 30, 8)
            .setInteractive(new Phaser.Geom.Rectangle(350, 580, 100, 30), Phaser.Geom.Rectangle.Contains)
            .on('pointerdown', () => this.showMainMenu())
            .on('pointerover', () => this.backButton.setTint(0xcccccc))
            .on('pointerout', () => this.backButton.clearTint())
            .setVisible(false);

        this.backButtonText = this.add.text(400, 595, "← BACK", {
            fontSize: '14px',
            fontFamily: 'Courier New',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5).setVisible(false);
    }

    showMainMenu() {
        this.mainMenuButtons.forEach(btn => {
            btn.button.setVisible(true);
            btn.text.setVisible(true);
        });

        this.moveMenuButtons.forEach(btn => {
            btn.button.setVisible(false);
            btn.text.setVisible(false);
        });

        this.backButton.setVisible(false);
        this.backButtonText.setVisible(false);
    }

    showMoveMenu() {
        this.mainMenuButtons.forEach(btn => {
            btn.button.setVisible(false);
            btn.text.setVisible(false);
        });

        this.moveMenuButtons.forEach(btn => {
            btn.button.setVisible(true);
            btn.text.setVisible(true);
        });

        this.backButton.setVisible(true);
        this.backButtonText.setVisible(true);
    }

    useMove(moveIndex) {
        const move = this.player.moves[moveIndex];
        this.setBattleText(`Mr. Azhar used ${move.name}!`);
        
        // Play attack sound based on move
        const soundMap = {
            'Stern Warning': 'sternWarning',
            'Pop Quiz': 'popQuiz', 
            'Extra Homework': 'extraHomework',
            'Parent Conference': 'parentConference'
        };
        const soundName = soundMap[move.name] || 'sternWarning';
        this.playSound(soundName);
        
        // Hide menu
        this.hideAllMenus();

        // Attack animation
        this.tweens.add({
            targets: this.playerSprite,
            x: this.playerSprite.x + 50,
            duration: 200,
            yoyo: true,
            onComplete: () => {
                const hit = Math.random() * 100 <= move.accuracy;
                if (hit) {
                    const damage = Math.floor(move.damage * (0.85 + Math.random() * 0.3));
                    this.currentEnemy.currentHp = Math.max(0, this.currentEnemy.currentHp - damage);
                    
                    // Play HP drain sound
                    this.playSound('hpDrain');
                    
                    // Damage animation
                    this.tweens.add({
                        targets: this.enemySprite,
                        x: this.enemySprite.x + 10,
                        duration: 100,
                        yoyo: true,
                        repeat: 3
                    });

                    this.updateDisplay();
                    this.setBattleText(`${this.currentEnemy.name} took ${damage} damage!`);
                    
                    if (this.currentEnemy.currentHp <= 0) {
                        this.time.delayedCall(1500, () => this.enemyDefeated());
                    } else {
                        this.time.delayedCall(1500, () => this.enemyTurn());
                    }
                } else {
                    this.setBattleText(`Mr. Azhar's attack missed!`);
                    this.time.delayedCall(1500, () => this.enemyTurn());
                }
            }
        });
    }

    enemyTurn() {
        const enemyMoves = ["Disrupt Class", "Make Excuses", "Ignore Teacher", "Cause Chaos"];
        const moveName = enemyMoves[Math.floor(Math.random() * enemyMoves.length)];
        
        this.setBattleText(`${this.currentEnemy.name} used ${moveName}!`);
        this.playSound('studentAttack');
        
        this.time.delayedCall(1000, () => {
            const damage = Math.floor(15 * (0.85 + Math.random() * 0.3));
            this.player.currentHp = Math.max(0, this.player.currentHp - damage);
            
            // Play HP drain sound
            this.playSound('hpDrain');
            
            // Damage animation
            this.tweens.add({
                targets: this.playerSprite,
                x: this.playerSprite.x - 10,
                duration: 100,
                yoyo: true,
                repeat: 3
            });

            this.updateDisplay();
            this.setBattleText(`Mr. Azhar took ${damage} damage!`);
            
            if (this.player.currentHp <= 0) {
                this.time.delayedCall(1500, () => this.playerDefeated());
            } else {
                this.time.delayedCall(1500, () => {
                    this.setBattleText("What will Mr. Azhar do?");
                    this.showMainMenu();
                });
            }
        });
    }

    enemyDefeated() {
        this.setBattleText(`${this.currentEnemy.name} was disciplined! Mr. Azhar wins!`);
        this.playSound('victory');
        
        // Victory animation
        this.tweens.add({
            targets: this.enemySprite,
            alpha: 0,
            duration: 1000
        });

        this.time.delayedCall(2000, () => {
            this.setBattleText("Another student is causing trouble!");
            this.time.delayedCall(1000, () => {
                this.startNewBattle();
            });
        });
    }

    playerDefeated() {
        this.setBattleText("Mr. Azhar is overwhelmed! The students win...");
        this.playSound('defeat');
        this.battleMusicPlaying = false; // Stop battle music
        
        this.time.delayedCall(2000, () => {
            this.setBattleText("The principal gives you another chance! Press any key to try again.");
            this.input.keyboard.once('keydown', () => {
                this.scene.restart();
            });
        });
    }

    startNewBattle() {
        this.currentEnemy = { ...this.enemies[Math.floor(Math.random() * this.enemies.length)] };
        this.currentEnemy.currentHp = this.currentEnemy.maxHp;
        
        this.enemySprite.setTexture(this.currentEnemy.sprite);
        this.enemySprite.setAlpha(1);
        
        this.updateDisplay();
        this.setBattleText("A wild " + this.currentEnemy.name + " appears!");
        
        this.time.delayedCall(2000, () => {
            this.setBattleText("What will Mr. Azhar do?");
            this.showMainMenu();
        });
    }

    useSupplies() {
        const healAmount = 30;
        const oldHp = this.player.currentHp;
        this.player.currentHp = Math.min(this.player.maxHp, this.player.currentHp + healAmount);
        const actualHeal = this.player.currentHp - oldHp;

        this.hideAllMenus();

        if (actualHeal > 0) {
            this.playSound('heal');
            this.updateDisplay();
            this.setBattleText(`Mr. Azhar used coffee! Restored ${actualHeal} HP!`);
            this.time.delayedCall(2000, () => this.enemyTurn());
        } else {
            this.setBattleText("Mr. Azhar's HP is already full!");
            this.time.delayedCall(1500, () => {
                this.setBattleText("What will Mr. Azhar do?");
                this.showMainMenu();
            });
        }
    }

    useTactics() {
        this.hideAllMenus();
        this.setBattleText("Mr. Azhar analyzed the student's behavior... but nothing happened!");
        this.time.delayedCall(2000, () => {
            this.setBattleText("What will Mr. Azhar do?");
            this.showMainMenu();
        });
    }

    sendToDetention() {
        this.hideAllMenus();
        if (Math.random() < 0.3) {
            this.setBattleText(`${this.currentEnemy.name} was sent to detention! Mr. Azhar escaped!`);
            this.time.delayedCall(2000, () => this.startNewBattle());
        } else {
            this.setBattleText(`${this.currentEnemy.name} refuses to go to detention!`);
            this.time.delayedCall(2000, () => this.enemyTurn());
        }
    }

    hideAllMenus() {
        this.mainMenuButtons.forEach(btn => {
            btn.button.setVisible(false);
            btn.text.setVisible(false);
        });

        this.moveMenuButtons.forEach(btn => {
            btn.button.setVisible(false);
            btn.text.setVisible(false);
        });

        this.backButton.setVisible(false);
        this.backButtonText.setVisible(false);
    }

    setBattleText(text) {
        this.battleText.setText(text);
    }

    updateDisplay() {
        // Update enemy name and level
        this.enemyNameText.setText(this.currentEnemy.name);
        this.enemyLevelText.setText(`Lv.${this.currentEnemy.level}`);
        
        // Update enemy HP bar
        const enemyHpPercentage = this.currentEnemy.currentHp / this.currentEnemy.maxHp;
        this.enemyHpBar.clear();
        let enemyHpColor = 0x4CAF50;
        if (enemyHpPercentage <= 0.2) enemyHpColor = 0xF44336;
        else if (enemyHpPercentage <= 0.5) enemyHpColor = 0xFF9800;
        
        this.enemyHpBar.fillStyle(enemyHpColor);
        this.enemyHpBar.fillRoundedRect(500, 85, 140 * enemyHpPercentage, 8, 4);
        
        // Update player HP bar and text
        const playerHpPercentage = this.player.currentHp / this.player.maxHp;
        this.playerHpBar.clear();
        let playerHpColor = 0x4CAF50;
        if (playerHpPercentage <= 0.2) playerHpColor = 0xF44336;
        else if (playerHpPercentage <= 0.5) playerHpColor = 0xFF9800;
        
        this.playerHpBar.fillStyle(playerHpColor);
        this.playerHpBar.fillRoundedRect(100, 355, 140 * playerHpPercentage, 8, 4);
        
        this.playerHpText.setText(`${this.player.currentHp}/${this.player.maxHp}`);
    }
}

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#87CEEB',
    scene: [PreloadScene, BattleScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    }
};

// Start the game
const game = new Phaser.Game(config);