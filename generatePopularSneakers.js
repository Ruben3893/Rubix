const fs = require('fs');

const sneakers = Array.from({ length: 20 }).map((_, i) => {
    const pId = 'pop' + (i + 1);
    
    // Cool sneaker names that feel famous and popular
    const names = [
        "Super Waxled Blue Colour", "Cowboy Style Black Night", "Mini Shoes Blue Cartoon", "Air Retro Hi-Top", 
        "Velocity Runner Pro", "Street Glide Boost", "Neon Future Step", "Retro Court Classic", 
        "Shadow Camo High", "Urban Utility Mid", "Sunset Gradient Zoom", "Thunder Bolt Ignite",
        "Crimson Blaze Low", "Onyx Stealth Kicks", "Phantom Force X", "Glacier Ice Tread",
        "Midnight City Walker", "Solar Flare Sprint", "Lunar Eclipse Shift", "Viper Strike Canvas"
    ];
    
    // Sneaker prices formatted like the screenshot (e.g., $32.13, $36.63)
    const prices = (Math.random() * (90 - 25) + 25).toFixed(2);
    
    // Solid shoe imagery representing varied popular sneakers on transparent/clean backgrounds
    const urls = [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1605348532723-67c010a300dc?auto=format&fit=crop&q=80"
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
const content = `export interface SneakerItem {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const popularSneakersData: SneakerItem[] = [
${sneakers}
];
`;

fs.writeFileSync(path, content);
console.log('Created popularSneakersData.ts with 20 items.');
