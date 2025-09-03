// Helper script to create sprite files
// Run this once to generate sprite PNG files

function createSpriteFiles() {
    // Mr. Azhar sprite (based on your reference image)
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // Clear background
    ctx.fillStyle = 'transparent';
    ctx.clearRect(0, 0, 32, 32);

    // Hair (blonde/light brown)
    ctx.fillStyle = '#D4C09A';
    ctx.fillRect(8, 2, 16, 6);
    ctx.fillRect(6, 6, 2, 4);
    ctx.fillRect(24, 6, 2, 4);
    ctx.fillRect(8, 8, 16, 4);
    
    // Hair shadows
    ctx.fillStyle = '#B8A082';
    ctx.fillRect(10, 4, 2, 2);
    ctx.fillRect(20, 4, 2, 2);
    ctx.fillRect(8, 10, 2, 2);
    ctx.fillRect(22, 10, 2, 2);
    
    // Face/neck (skin tone)
    ctx.fillStyle = '#FDBCB4';
    ctx.fillRect(10, 12, 12, 10);
    ctx.fillRect(12, 22, 8, 4);
    
    // Eyes
    ctx.fillStyle = '#000000';
    ctx.fillRect(12, 16, 2, 2);
    ctx.fillRect(18, 16, 2, 2);
    
    // Shirt (purple/lavender)
    ctx.fillStyle = '#9B7DB5';
    ctx.fillRect(8, 24, 16, 8);
    ctx.fillRect(6, 26, 20, 6);
    
    // Shirt highlights
    ctx.fillStyle = '#B599CC';
    ctx.fillRect(8, 24, 16, 2);
    ctx.fillRect(8, 28, 2, 4);
    ctx.fillRect(22, 28, 2, 4);

    // Download the sprite
    const link = document.createElement('a');
    link.download = 'mr-azhar-sprite.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Call this function in browser console to download sprites
console.log('Run createSpriteFiles() to download Mr. Azhar sprite');