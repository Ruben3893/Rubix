export interface ClothingItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    sizes: string[];
}

export const accessoryData: ClothingItem[] = [
    {
        id: "a1",
        name: "Textured Wallet",
        description: "RFID-blocking slim wallet with a matte carbon fiber finish and cash clip.",
        price: 55,
        image: "/assets/accessory-1.avif",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a2",
        name: "Navigator Aviators",
        description: "Classic teardrop sunglasses with polarized lenses and gold-tone titanium frames.",
        price: 145,
        image: "/assets/accessory-2.jpeg",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a3",
        name: "Legacy Leather Belt",
        description: "Full-grain Italian leather belt with a brushed nickel buckle and hand-stitched edges.",
        price: 75,
        image: "/assets/accessory-3.webp",
        category: "Accessories",
        sizes: ["32", "34", "36", "38", "40"]
    },
    {
        id: "a4",
        name: "Urban Commuter Backpack",
        description: "Water-resistant ballistic nylon bag with a 16-inch padded laptop sleeve.",
        price: 120,
        image: "/assets/accessory-4.jpeg",
        category: "Accessories",
        sizes: ["22L"]
    },
    {
        id: "a5",
        name: "Carbon watch box",
        description: "Sleek timepiece featuring a Japanese quartz movement and a black stainless steel mesh band.",
        price: 195,
        image: "/assets/accessory-5.jpg",
        category: "Accessories",
        sizes: ["40mm"]
    },
    {
        id: "a6",
        name: "Merino Wool Scarf",
        description: "Ultra-soft charcoal scarf knitted from premium 100% merino wool.",
        price: 65,
        image: "/assets/accessory-6.jpeg",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a7",
        name: "Signature Snapback",
        description: "Structured 6-panel cap with 3D embroidery and an adjustable strap.",
        price: 35,
        image: "/assets/accessory-7.jpg",
        category: "Accessories",
        sizes: ["Adjustable"]
    },
    {
        id: "a8",
        name: "Canvas Duffle Bag",
        description: "Heavy-duty waxed canvas bag with leather handles, perfect for weekend getaways.",
        price: 160,
        image: "/assets/accessory-8.jpg",
        category: "Accessories",
        sizes: ["45L"]
    },
    {
        id: "a9",
        name: "Silver Signet Ring",
        description: "Sterling silver ring with a polished flat face and engraved interior branding.",
        price: 110,
        image: "/assets/accessory-9.jpg",
        category: "Accessories",
        sizes: ["8", "9", "10", "11"]
    },
    {
        id: "a10",
        name: "Tech-Grip Gloves",
        description: "Winter gloves with touchscreen-compatible fingertips and fleece lining.",
        price: 45,
        image: "/assets/accessory-10.jpg",
        category: "Accessories",
        sizes: ["S/M", "L/XL"]
    },
    {
        id: "a11",
        name: "Braided Anchor Bracelet",
        description: "Nautical-inspired cord bracelet with a silver-plated anchor clasp.",
        price: 30,
        image: "/assets/accessory-11.png",
        category: "Accessories",
        sizes: ["Adjustable"]
    },
    {
        id: "a12",
        name: "Aviator Leather Briefcase",
        description: "Professional top-grain leather case with organized internal compartments.",
        price: 280,
        image: "/assets/accessory-12.webp",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a13",
        name: "Silk Geometric Tie",
        description: "Hand-finished silk necktie featuring a subtle navy and silver pattern.",
        price: 55,
        image: "/assets/accessory-13.png",
        category: "Accessories",
        sizes: ["Standard"]
    },
    {
        id: "a14",
        name: "Blue Light Glasses",
        description: "Non-prescription frames designed to reduce eye strain during screen use.",
        price: 85,
        image: "/assets/accessory-14.webp",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a15",
        name: "Cashmere Beanie",
        description: "Luxuriously warm beanie made from sustainable Grade-A cashmere.",
        price: 70,
        image: "/assets/accessory-15.png",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a16",
        name: "Brushed Steel Cufflinks",
        description: "Modern rectangular cufflinks with a minimalist brushed metal texture.",
        price: 50,
        image: "/assets/accessory-16.webp",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a17",
        name: "Travel Toiletry Kit",
        description: "Compact waterproof pouch with internal mesh dividers for grooming essentials.",
        price: 40,
        image: "/assets/accessory-17.webp",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a18",
        name: "Pebbled Leather Cardholder",
        description: "Four-slot cardholder crafted from supple pebbled leather in forest green.",
        price: 45,
        image: "/assets/accessory-18.jpg",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a19",
        name: "Leather Band",
        description: "Premium leather band for watches.",
        price: 35,
        image: "/assets/accessory-19.webp",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a20",
        name: "Premium Suede Cap",
        description: "Luxury baseball cap made from soft goat suede with a silk lining.",
        price: 95,
        image: "/assets/accessory-20.jpg",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a21",
        name: "Luminous Pearl Drop",
        description: "Hand-selected freshwater pearl elegantly suspended from an 18k white gold hook.",
        price: 2235,
        image: "https://images.unsplash.com/photo-1599643478514-4a4e5abaed74?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a22",
        name: "Emerald Cut Solitaire",
        description: "A breathtaking 2-carat emerald cut diamond set on a pristine platinum band.",
        price: 5682,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a23",
        name: "Onyx Statement Cuff",
        description: "Bold, architectural cuff carved from solid onyx and wrapped in yellow gold.",
        price: 1233,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a24",
        name: "Diamond Tennis Bracelet",
        description: "The quintessential tennis bracelet, articulated with VS1 brilliance.",
        price: 5115,
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a25",
        name: "Platinum Helix Ring",
        description: "A modern twisted helix design representing eternal connection and prestige.",
        price: 1947,
        image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a26",
        name: "Sapphire Teardrop Pendant",
        description: "A deep ocean blue sapphire teardrop enshrined in delicate diamond pavé.",
        price: 3293,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a27",
        name: "Rose Gold Chain Link",
        description: "Industrial-chic interlocking links cast in heavy, polished 18k rose gold.",
        price: 2533,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a28",
        name: "Pavé Eternity Band",
        description: "A complete circle of flawless diamonds symbolizing unbreakable devotion.",
        price: 2873,
        image: "https://images.unsplash.com/photo-1599643478514-4a4e5abaed74?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a29",
        name: "Celestial Star Earrings",
        description: "Whimsical star-shaped earrings radiating brilliant, youthful light.",
        price: 5334,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a30",
        name: "Halo Engagement Ring",
        description: "A magnificent brilliant-cut center stone surrounded by a delicate diamond halo.",
        price: 5090,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a31",
        name: "Vintage Estate Brooch",
        description: "An intricate, heirloom-quality piece sourced from century-old designs.",
        price: 2691,
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a32",
        name: "Radiant Cut Cluster",
        description: "An explosion of light captured in a tight formation of radiant-cut stones.",
        price: 5815,
        image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a33",
        name: "Aura Gemstone Choker",
        description: "A delicate choker featuring a vibrant, color-shifting gemstone centerpiece.",
        price: 1246,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a34",
        name: "Hammered Gold Bangle",
        description: "Textured yellow gold bangle reflecting light from countless hammered facets.",
        price: 3323,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a35",
        name: "Opal Aura Studs",
        description: "Hypnotic iridescence trapped within a smooth, minimalist gold setting.",
        price: 2167,
        image: "https://images.unsplash.com/photo-1599643478514-4a4e5abaed74?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a36",
        name: "Moonstone Drop Pendant",
        description: "Ethereal glow captured in a teardrop moonstone on a thin silver chain.",
        price: 3017,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a37",
        name: "Classic Signet Ring",
        description: "A timeless flat-faced signet ring ready for personalized engraving.",
        price: 1988,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a38",
        name: "Ruby Blossom Earrings",
        description: "Vivid crimson rubies arranged in a delicate, blooming floral pattern.",
        price: 2792,
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a39",
        name: "Tungsten Minimalist Band",
        description: "Ultra-durable, scratch-resistant tungsten with a sleek matte finish.",
        price: 3761,
        image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    },
    {
        id: "a40",
        name: "Floating Diamond Necklace",
        description: "An invisible setting that creates the illusion of a diamond resting on skin.",
        price: 5442,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["One Size"]
    }
];
