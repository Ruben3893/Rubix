export interface WatchItem {
    id: string;
    name: string;
    description?: string;
    price: number;
    image: string;
    category: string;
    tag?: string;
    specs?: { movement: string; resistance: string };
}

export const watchesData: WatchItem[] = [
    { id: "w1", name: "Chrono-Geometric", price: 12500, image: "/assets/watch-1.jpeg", category: "Watches", tag: "Best Seller", specs: { movement: "Automatic Calibre", resistance: "10 ATM / 100M" } },
    { id: "w2", name: "Stealth Aviator", price: 5500, image: "/assets/watch-2.jpeg", category: "Watches", specs: { movement: "Tourbillon", resistance: "5 ATM" } },
    { id: "w3", name: "Obsidian Core", price: 7200, image: "/assets/watch-3.jpeg", category: "Watches", specs: { movement: "Quartz", resistance: "3 ATM" } },
    { id: "w4", name: "Vanguard Minimal", price: 4800, image: "/assets/watch-4.jpeg", category: "Watches", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w5", name: "Gold Standard", price: 18000, image: "/assets/watch-5.jpeg", category: "Watches", specs: { movement: "Automatic", resistance: "10 ATM" } },
    { id: "w6", name: "Silver Bullet", price: 6200, image: "/assets/watch-6.jpeg", category: "Watches", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w7", name: "Titanium Shift", price: 9500, image: "/assets/watch-7.jpeg", category: "Watches", specs: { movement: "Automatic", resistance: "20 ATM" } },
    { id: "w8", name: "Carbon Eclipse", price: 8100, image: "/assets/watch-8.jpeg", category: "Watches", specs: { movement: "Quartz", resistance: "10 ATM" } },
    { id: "w9", name: "Midnight Ocean", price: 4200, image: "/assets/watch-9.jpeg", category: "Watches", specs: { movement: "Automatic", resistance: "30 ATM" } },
    { id: "w10", name: "Rose Gradient", price: 10500, image: "/assets/watch-10.jpeg", category: "Watches", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w11", name: "Desert Sand", price: 3400, image: "/assets/watch-11.jpg", category: "Watches", specs: { movement: "Quartz", resistance: "3 ATM" } },
    { id: "w12", name: "Ceramic Horizon", price: 12200, image: "/assets/watch-12.webp", category: "Watches", specs: { movement: "Automatic", resistance: "10 ATM" } },
    { id: "w13", name: "Lucid Flow", price: 5800, image: "/assets/watch-13.webp", category: "Watches", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w14", name: "Retrograde X", price: 15400, image: "/assets/watch-14.webp", category: "Watches", specs: { movement: "Tourbillon", resistance: "5 ATM" } },
    { id: "w15", name: "Neon Flux", price: 2900, image: "/assets/watch-15.webp", category: "Watches", specs: { movement: "Quartz", resistance: "5 ATM" } },
    { id: "w16", name: "Platinum Prestige", price: 24000, image: "/assets/watch-16.webp", category: "Watches", specs: { movement: "Automatic", resistance: "10 ATM" } },
    { id: "w17", name: "Bronze Mariner", price: 6700, image: "/assets/watch-17.jpg", category: "Watches", specs: { movement: "Mechanical", resistance: "20 ATM" } },
    { id: "w18", name: "Copper Field", price: 3100, image: "/assets/watch-18.jpg", category: "Watches", specs: { movement: "Quartz", resistance: "10 ATM" } },
    { id: "w19", name: "Sapphire Gaze", price: 11000, image: "/assets/watch-19.webp", category: "Watches", specs: { movement: "Automatic", resistance: "5 ATM" } },
    { id: "w20", name: "Zenith Absolute", price: 32000, image: "/assets/watch-20.webp", category: "Watches", specs: { movement: "Tourbillon", resistance: "10 ATM" } }
];
