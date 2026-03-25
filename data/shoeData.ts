export interface ClothingItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    sizes: string[];
}

export const shoeData: ClothingItem[] = [
    {
        id: "s1",
        name: "Phantom Runner X",
        description: "High-performance mesh running shoes with responsive foam cushioning.",
        price: 140,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11", "12"]
    },
    {
        id: "s2",
        name: "Classic Cognac Brogues",
        description: "Hand-finished genuine leather wingtip shoes with intricate perforated detailing.",
        price: 185,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11"]
    },
    {
        id: "s3",
        name: "Urban Street High-Top",
        description: "Retro-inspired canvas high-tops with a reinforced rubber toe cap.",
        price: 95,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11", "12"]
    },
    {
        id: "s4",
        name: "Arctic Trek Boots",
        description: "Waterproof nubuck leather boots with thermal lining and deep-lug traction soles.",
        price: 210,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["9", "10", "11", "12", "13"]
    },
    {
        id: "s5",
        name: "Minimalist White Sneaker",
        description: "Clean, low-profile leather sneakers designed for a versatile smart-casual look.",
        price: 120,
        image: "https://images.unsplash.com/photo-1605348532723-67c010a300dc?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s6",
        name: "Midnight Suede Loafers",
        description: "Slip-on suede loafers with a penny strap and flexible rubber sole.",
        price: 155,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11"]
    },
    {
        id: "s7",
        name: "Volt Trail Blazers",
        description: "Rugged trail running shoes with breathable uppers and aggressive grip for rocky terrain.",
        price: 135,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11", "12"]
    },
    {
        id: "s8",
        name: "Onyx Chelsea Boots",
        description: "Sleek polished leather boots with elastic side panels and a pull tab.",
        price: 195,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s9",
        name: "Sandstorm Desert Boots",
        description: "Classic suede chukka boots with a traditional crepe sole.",
        price: 110,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11"]
    },
    {
        id: "s10",
        name: "Gravity Basketball Pro",
        description: "Lightweight high-top basketball shoes with lateral support and impact protection.",
        price: 165,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["9", "10", "11", "12", "13", "14"]
    },
    {
        id: "s11",
        name: "Titanium Cross-Trainers",
        description: "Multi-purpose gym shoes with a flat stable base for weightlifting.",
        price: 130,
        image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11", "12"]
    },
    {
        id: "s12",
        name: "Harbor Boat Shoes",
        description: "Hand-sewn leather boat shoes with non-marking siped outsoles.",
        price: 90,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11"]
    },
    {
        id: "s13",
        name: "Obsidian Monk Straps",
        description: "Double buckle leather monk straps for a sophisticated formal statement.",
        price: 220,
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11"]
    },
    {
        id: "s14",
        name: "Aero Knit Slip-Ons",
        description: "Ultralight breathable knit upper with a cushioned sock-like fit.",
        price: 85,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["6", "7", "8", "9", "10", "11"]
    },
    {
        id: "s15",
        name: "Vintage Suede Trainers",
        description: "1970s inspired lifestyle sneakers with suede overlays and a gum sole.",
        price: 105,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11", "12"]
    },
    {
        id: "s16",
        name: "Summit Mountaineer",
        description: "Professional grade climbing boots with crampon compatibility and GORE-TEX lining.",
        price: 340,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["9", "10", "11", "12"]
    },
    {
        id: "s17",
        name: "Carbon Skate Lows",
        description: "Durable suede skate shoes with a thick vulcanized sole for board feel.",
        price: 80,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s18",
        name: "Espresso Oxford Cap-Toe",
        description: "Formal full-grain leather Oxfords with a polished cap-toe finish.",
        price: 170,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11", "12"]
    },
    {
        id: "s19",
        name: "Neon Rush Slides",
        description: "Comfortable contoured athletic slides for post-workout recovery.",
        price: 35,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "s20",
        name: "Stealth Combat Boots",
        description: "Tactical-inspired leather and nylon boots with heavy-duty side zippers.",
        price: 190,
        image: "https://images.unsplash.com/photo-1605348532723-67c010a300dc?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["8", "9", "10", "11", "12", "13"]
    },
    {
        id: "s21",
        name: "Aero Strider Pro",
        description: "Extremely lightweight running shoe with carbon fiber plating.",
        price: 75,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s22",
        name: "Velocity Elite Trainer",
        description: "Daily trainer featuring dual-density foam for max responsiveness.",
        price: 212,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s23",
        name: "Lunar Hover Glide",
        description: "Advanced shock-absorbing technology meets street-ready style.",
        price: 177,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s24",
        name: "Summit Tracker Low",
        description: "Rugged trail shoe designed for intense off-road expeditions.",
        price: 81,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s25",
        name: "Titanium Core Lift",
        description: "Flat-soled structural lifting shoe for heavy strength sessions.",
        price: 158,
        image: "https://images.unsplash.com/photo-1605348532723-67c010a300dc?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s26",
        name: "HyperKnit Racer V2",
        description: "Breathable seamless knit upper with rapid propulsion dynamics.",
        price: 77,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s27",
        name: "Neon Flux Zoom",
        description: "High-visibility accents on a streamlined aerodynamic chassis.",
        price: 153,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s28",
        name: "Slate Urban Utility",
        description: "Weather-resistant urban sneaker bridging functionality and fashion.",
        price: 178,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s29",
        name: "Midnight Trail Blazer",
        description: "Aggressive lug patterns on a dark stealthy silhouette.",
        price: 150,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s30",
        name: "Aurora Wave Cushion",
        description: "Sleek and modern lifestyle shoe offering extreme all-day comfort.",
        price: 174,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s31",
        name: "Vertex Precision Tech",
        description: "Laser-cut precision detailing combined with extreme stability.",
        price: 136,
        image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s32",
        name: "Crimson Flash Sprint",
        description: "Track spike speed elements translated for the urban asphalt.",
        price: 97,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s33",
        name: "Optic White Court",
        description: "Classic court styling updated with modern memory foam tech.",
        price: 145,
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s34",
        name: "Slate Runner V3",
        description: "The third iteration of our legendary minimalist running platform.",
        price: 74,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s35",
        name: "Zero-G Comfort Walk",
        description: "Ultra-plush cushioning giving the sensation of walking on air.",
        price: 80,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s36",
        name: "Cobalt Sky High-Top",
        description: "Bold ankle support merged with striking high-top aesthetics.",
        price: 116,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s37",
        name: "Terra Grip Boots",
        description: "Waterproof mid-cut boots with unbeatable multi-surface traction.",
        price: 79,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s38",
        name: "Nimbus Cloud Strider",
        description: "Breathable mesh overlays supporting an incredibly soft ride.",
        price: 186,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s39",
        name: "Quantum Energy React",
        description: "Energy return capsules embedded deeply within the midsole core.",
        price: 151,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    },
    {
        id: "s40",
        name: "Shadow Ops Tactical",
        description: "Military-inspired durability with surprisingly lightweight agility.",
        price: 96,
        image: "https://images.unsplash.com/photo-1605348532723-67c010a300dc?auto=format&fit=crop&q=80",
        category: "Shoes",
        sizes: ["7", "8", "9", "10", "11", "12"]
    }
];
