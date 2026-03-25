const fs = require('fs');

const moreShoes = Array.from({ length: 20 }).map((_, i) => {
    const pId = i + 21;
    // Cool names for 20 new shoe varieties
    const names = [
        "Aero Strider Pro", "Velocity Elite Trainer", "Lunar Hover Glide", "Summit Tracker Low",
        "Titanium Core Lift", "HyperKnit Racer V2", "Neon Flux Zoom", "Slate Urban Utility",
        "Midnight Trail Blazer", "Aurora Wave Cushion", "Vertex Precision Tech", "Crimson Flash Sprint",
        "Optic White Court", "Slate Runner V3", "Zero-G Comfort Walk", "Cobalt Sky High-Top",
        "Terra Grip Boots", "Nimbus Cloud Strider", "Quantum Energy React", "Shadow Ops Tactical"
    ];
    // Descriptions
    const descs = [
        "Extremely lightweight running shoe with carbon fiber plating.",
        "Daily trainer featuring dual-density foam for max responsiveness.",
        "Advanced shock-absorbing technology meets street-ready style.",
        "Rugged trail shoe designed for intense off-road expeditions.",
        "Flat-soled structural lifting shoe for heavy strength sessions.",
        "Breathable seamless knit upper with rapid propulsion dynamics.",
        "High-visibility accents on a streamlined aerodynamic chassis.",
        "Weather-resistant urban sneaker bridging functionality and fashion.",
        "Aggressive lug patterns on a dark stealthy silhouette.",
        "Sleek and modern lifestyle shoe offering extreme all-day comfort.",
        "Laser-cut precision detailing combined with extreme stability.",
        "Track spike speed elements translated for the urban asphalt.",
        "Classic court styling updated with modern memory foam tech.",
        "The third iteration of our legendary minimalist running platform.",
        "Ultra-plush cushioning giving the sensation of walking on air.",
        "Bold ankle support merged with striking high-top aesthetics.",
        "Waterproof mid-cut boots with unbeatable multi-surface traction.",
        "Breathable mesh overlays supporting an incredibly soft ride.",
        "Energy return capsules embedded deeply within the midsole core.",
        "Military-inspired durability with surprisingly lightweight agility."
    ];
    // URLs
    const urls = [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1605348532723-67c010a300dc?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80"
    ];

    const stringData = `    {
        id: "s${pId}",
        name: "${names[i]}",
        description: "${descs[i]}",
        price: ${Math.floor(Math.random() * 150) + 70},
        image: "${urls[i % urls.length]}",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    }`;
    return stringData;
}).join(',\n');

const path = 'c:/Users/RUBEN/Downloads/antigravity/Rubix/data/shoeData.ts';
let contents = fs.readFileSync(path, 'utf8');

// The file ends with "    }\n];" or similar. We will replace the last "\n];" with ",\n" + moreShoes + "\n];"
contents = contents.replace(/\n\];?\s*$/, ',\n' + moreShoes + '\n];\n');
fs.writeFileSync(path, contents);
console.log('Appended 20 new shoes.');
