const fs = require('fs');

const moreAccessories = Array.from({ length: 20 }).map((_, i) => {
    const pId = i + 21;
    // Names inspired by fine jewelry and high-end accessories
    const names = [
        "Luminous Pearl Drop", "Emerald Cut Solitaire", "Onyx Statement Cuff", "Diamond Tennis Bracelet",
        "Platinum Helix Ring", "Sapphire Teardrop Pendant", "Rose Gold Chain Link", "Pavé Eternity Band",
        "Celestial Star Earrings", "Halo Engagement Ring", "Vintage Estate Brooch", "Radiant Cut Cluster",
        "Aura Gemstone Choker", "Hammered Gold Bangle", "Opal Aura Studs", "Moonstone Drop Pendant",
        "Classic Signet Ring", "Ruby Blossom Earrings", "Tungsten Minimalist Band", "Floating Diamond Necklace"
    ];
    // Descriptions fit for editorial luxury
    const descs = [
        "Hand-selected freshwater pearl elegantly suspended from an 18k white gold hook.",
        "A breathtaking 2-carat emerald cut diamond set on a pristine platinum band.",
        "Bold, architectural cuff carved from solid onyx and wrapped in yellow gold.",
        "The quintessential tennis bracelet, articulated with VS1 brilliance.",
        "A modern twisted helix design representing eternal connection and prestige.",
        "A deep ocean blue sapphire teardrop enshrined in delicate diamond pavé.",
        "Industrial-chic interlocking links cast in heavy, polished 18k rose gold.",
        "A complete circle of flawless diamonds symbolizing unbreakable devotion.",
        "Whimsical star-shaped earrings radiating brilliant, youthful light.",
        "A magnificent brilliant-cut center stone surrounded by a delicate diamond halo.",
        "An intricate, heirloom-quality piece sourced from century-old designs.",
        "An explosion of light captured in a tight formation of radiant-cut stones.",
        "A delicate choker featuring a vibrant, color-shifting gemstone centerpiece.",
        "Textured yellow gold bangle reflecting light from countless hammered facets.",
        "Hypnotic iridescence trapped within a smooth, minimalist gold setting.",
        "Ethereal glow captured in a teardrop moonstone on a thin silver chain.",
        "A timeless flat-faced signet ring ready for personalized engraving.",
        "Vivid crimson rubies arranged in a delicate, blooming floral pattern.",
        "Ultra-durable, scratch-resistant tungsten with a sleek matte finish.",
        "An invisible setting that creates the illusion of a diamond resting on skin."
    ];
    // Splendid jewelry Unsplash URLs
    const urls = [
        "https://images.unsplash.com/photo-1599643478514-4a4e5abaed74?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1599643478514-4a4e5abaed74?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1599643478514-4a4e5abaed74?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80"
    ];

    // High jewelry prices
    const prices = Math.floor(Math.random() * 5000) + 1200;

    const stringData = `    {
        id: "a${pId}",
        name: "${names[i]}",
        description: "${descs[i]}",
        price: ${prices},
        image: "${urls[i % urls.length]}",
        category: "Accessories",
        sizes: ["One Size"]
    }`;
    return stringData;
}).join(',\n');

const path = 'c:/Users/RUBEN/Downloads/antigravity/Rubix/data/accessoriesData.ts';
let contents = fs.readFileSync(path, 'utf8');

// The file ends with "    }\n];". Replace the last bracket closure with our giant block string plus the closing bracket
contents = contents.replace(/\n\];?\s*$/, ',\n' + moreAccessories + '\n];\n');
fs.writeFileSync(path, contents);
console.log('Appended 20 new high-end accessories.');
