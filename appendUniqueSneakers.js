const fs = require('fs');

const moreUniqueSneakers = Array.from({ length: 20 }).map((_, i) => {
    const pId = 'pop' + (i + 21);
    
    // Truly unique, futuristic or high-end sneaker names
    const names = [
        "Y-400 Stealth Runner", "Neon Matrix High", "Cyberpunk Low Drop", "Gravity Defy Foam", 
        "Holographic Wave Kicks", "Lucid Dream Slip-On", "Astro Glide Boost", "Velvet Crush Sneaker", 
        "Titanium Core Edge", "Shattered Glass Retro", "Plasma Surge X", "Obsidian Void Walker",
        "Chrome Pulse Trainer", "Inferno Core Hi-Top", "Nebula Stardust Pro", "Quantum Shift V2",
        "Aurora Borealis Runner", "Magma Tread Boots", "Crystal Clear Sole", "Zenith Peak Strider"
    ];
    
    // Slightly higher prices for these "unique" shoes
    const prices = (Math.random() * (190 - 75) + 75).toFixed(2);
    
    // A fresh set of extremely cool Unsplash sneakers
    const urls = [
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1605348532723-67c010a300dc?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80"
    ];

    return `    {
        id: "${pId}",
        name: "${names[i]}",
        price: ${prices},
        image: "${urls[i % urls.length]}",
        category: "Sneakers"
    }`;
}).join(',\n');

const path = 'c:/Users/RUBEN/Downloads/antigravity/Rubix/data/popularSneakersData.ts';
let contents = fs.readFileSync(path, 'utf8');

// Replace standard closure bracket with the new array elements
contents = contents.replace(/\n\];?\s*$/, ',\n' + moreUniqueSneakers + '\n];\n');
fs.writeFileSync(path, contents);
console.log('Appended 20 new highly unique popular sneakers.');
