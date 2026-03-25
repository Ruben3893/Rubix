const fs = require('fs');

const path = 'c:/Users/RUBEN/Downloads/antigravity/Rubix/data/trendySunglassesData.ts';

const sunglasses = Array.from({ length: 40 }).map((_, i) => {
    const id = 'sun' + (i + 1);
    
    // High-fashion / trendy sunglass names
    const names = [
        "Rounded Frames Black", "Rounded Frames Blue", "Rounded Frames Purple", "Retro Aviator Gold", 
        "Oversized Cat Eye tortoiseshell", "Geometric Hex Frames", "Vintage Square Classics", "Neon Shield Visor",
        "Clear Frame Wayfarer", "Minimalist Wire Teardrop", "Chunky 90s Rectangular", "Matte Black polarized",
        "Rose Gold Tinted Round", "Transparent Pink Cat Eye", "Polarized Sport Wrap", "Gradient Lens Octagon",
        "Wooden Arm Browline", "Rimless Floating Matrix", "Amber Tinted Pilots", "Tortoise Shell Keyhole",
        "Jet Black Thick Frame", "Sunset Mirror Lenses", "Classic Clubmaster Style", "Futuristic Slim Y2K",
        "Aqua Blue Ocean Shades", "Ruby Red Translucent", "Emerald Green Eco Frame", "Crimson Flat Top",
        "Champagne Gold Aviator", "Midnight Blue Polarized", "Pearl White Vintage", "Gunmetal Semi-Rimless",
        "Cobalt Square Gradient", "Terracotta Havana Frame", "Lemon Yellow Retro", "Lilac Pastel Oversized",
        "Slate Gray Minimalist", "Silver Mirror Wraparounds", "Crystal Clear Hexagon", "Burnt Orange Summer Tint"
    ];
    
    // Eyewear prices simulating the mockup ($17.00, etc, but adding some variety)
    const prices = (Math.random() * (120 - 15) + 15).toFixed(2);
    
    // Various high-quality Unsplash sunglasses
    const urls = [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1473496169904-658ba7c21f7d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1582143419997-2a4c2847a9ff?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1555009893-f111e1141444?auto=format&fit=crop&q=80"
    ];

    return `    {
        id: "${id}",
        name: "${names[i]}",
        price: ${prices},
        image: "${urls[i % urls.length]}",
        category: "Sunglasses"
    }`;
}).join(',\n');

const content = `export interface SunglassItem {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const trendySunglassesData: SunglassItem[] = [
${sunglasses}
];
`;

fs.writeFileSync(path, content);
console.log('Created trendySunglassesData.ts with 40 new items.');
