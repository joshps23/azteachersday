// Helper script to create sprite files
// Run this once to generate sprite PNG files

function createSpriteFiles() {
    // Mr. Azhar sprite (Pokemon trainer style) - 64x64 version
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // Clear background
    ctx.clearRect(0, 0, 64, 64);

    // Hair (styled, professional)
    ctx.fillStyle = '#8B6914'; // Dark blonde/brown hair
    ctx.fillRect(12, 4, 40, 8);
    ctx.fillRect(8, 8, 48, 8);
    ctx.fillRect(10, 16, 44, 4);
    
    // Hair highlights and styling
    ctx.fillStyle = '#A0791A';
    ctx.fillRect(16, 4, 8, 4);
    ctx.fillRect(40, 4, 8, 4);
    ctx.fillRect(12, 12, 4, 4);
    ctx.fillRect(48, 12, 4, 4);
    
    // Face and neck
    ctx.fillStyle = '#FDBCB4'; // Skin tone
    ctx.fillRect(16, 20, 32, 20);
    ctx.fillRect(20, 40, 24, 8);
    
    // Eyes (determined trainer look)
    ctx.fillStyle = '#000';
    ctx.fillRect(22, 24, 3, 3);
    ctx.fillRect(39, 24, 3, 3);
    
    // Eye highlights (gives life to the sprite)
    ctx.fillStyle = '#FFF';
    ctx.fillRect(23, 24, 1, 1);
    ctx.fillRect(40, 24, 1, 1);
    
    // Eyebrows (confident expression)
    ctx.fillStyle = '#654321';
    ctx.fillRect(21, 22, 5, 1);
    ctx.fillRect(38, 22, 5, 1);
    
    // Nose
    ctx.fillStyle = '#E6A89A';
    ctx.fillRect(31, 28, 2, 3);
    
    // Mouth (slight confident smile)
    ctx.fillStyle = '#8B0000';
    ctx.fillRect(28, 32, 8, 2);
    ctx.fillRect(29, 34, 6, 1);
    
    // Professional shirt/jacket (navy blue)
    ctx.fillStyle = '#1B1B3A';
    ctx.fillRect(10, 48, 44, 16);
    ctx.fillRect(8, 52, 48, 12);
    
    // Shirt collar and lapels
    ctx.fillStyle = '#2C2C5C';
    ctx.fillRect(20, 48, 24, 6);
    ctx.fillRect(16, 52, 8, 8);
    ctx.fillRect(40, 52, 8, 8);
    
    // White dress shirt underneath
    ctx.fillStyle = '#FFF';
    ctx.fillRect(24, 50, 16, 4);
    ctx.fillRect(28, 54, 8, 6);
    
    // Professional tie (red with pattern)
    ctx.fillStyle = '#8B0000';
    ctx.fillRect(30, 54, 4, 10);
    ctx.fillStyle = '#FF4444';
    ctx.fillRect(30, 56, 1, 1);
    ctx.fillRect(33, 58, 1, 1);
    ctx.fillRect(30, 60, 1, 1);
    
    // Jacket buttons
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(18, 56, 2, 2);
    ctx.fillRect(44, 56, 2, 2);

    // Download the sprite
    const link = document.createElement('a');
    link.download = 'mr-azhar-sprite.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Call this function in browser console to download sprites
console.log('Run createSpriteFiles() to download Mr. Azhar sprite');