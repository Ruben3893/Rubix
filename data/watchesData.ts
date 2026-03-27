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
    { id: "w1", name: "Chrono-Geometric", price: 12500, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80", category: "Women", tag: "Best Seller", specs: { movement: "Automatic Calibre", resistance: "10 ATM / 100M" } },
    { id: "w2", name: "Stealth Aviator", price: 5500, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Tourbillon", resistance: "5 ATM" } },
    { id: "w3", name: "Obsidian Core", price: 7200, image: "https://images.unsplash.com/photo-1549998188-f2f2ac634ba1?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Quartz", resistance: "3 ATM" } },
    { id: "w4", name: "Vanguard Minimal", price: 4800, image: "https://images.unsplash.com/photo-1548689816-c399f954f3dd?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w5", name: "Gold Standard", price: 18000, image: "https://images.unsplash.com/photo-1587836374828-cb4387860956?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Automatic", resistance: "10 ATM" } },
    { id: "w6", name: "Silver Bullet", price: 6200, image: "https://images.unsplash.com/photo-1623998021446-45cd9b269056?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w7", name: "Titanium Shift", price: 9500, image: "https://images.unsplash.com/photo-1508685096489-73fb6df9eb09?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Automatic", resistance: "20 ATM" } },
    { id: "w8", name: "Carbon Eclipse", price: 8100, image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Quartz", resistance: "10 ATM" } },
    { id: "w9", name: "Midnight Ocean", price: 4200, image: "https://images.unsplash.com/photo-1542496658-e3266f07a5ea?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Automatic", resistance: "30 ATM" } },
    { id: "w10", name: "Rose Gradient", price: 10500, image: "https://images.unsplash.com/photo-1596701037210-90c7cdfc7a4a?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w11", name: "Desert Sand", price: 3400, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Quartz", resistance: "3 ATM" } },
    { id: "w12", name: "Ceramic Horizon", price: 12200, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Automatic", resistance: "10 ATM" } },
    { id: "w13", name: "Lucid Flow", price: 5800, image: "https://images.unsplash.com/photo-1549998188-f2f2ac634ba1?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w14", name: "Retrograde X", price: 15400, image: "https://images.unsplash.com/photo-1548689816-c399f954f3dd?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Tourbillon", resistance: "5 ATM" } },
    { id: "w15", name: "Neon Flux", price: 2900, image: "https://images.unsplash.com/photo-1587836374828-cb4387860956?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Quartz", resistance: "5 ATM" } },
    { id: "w16", name: "Platinum Prestige", price: 24000, image: "https://images.unsplash.com/photo-1623998021446-45cd9b269056?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Automatic", resistance: "10 ATM" } },
    { id: "w17", name: "Bronze Mariner", price: 6700, image: "https://images.unsplash.com/photo-1508685096489-73fb6df9eb09?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Mechanical", resistance: "20 ATM" } },
    { id: "w18", name: "Copper Field", price: 3100, image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Quartz", resistance: "10 ATM" } },
    { id: "w19", name: "Sapphire Gaze", price: 11000, image: "https://images.unsplash.com/photo-1542496658-e3266f07a5ea?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Automatic", resistance: "5 ATM" } },
    { id: "w20", name: "Zenith Absolute", price: 32000, image: "https://images.unsplash.com/photo-1596701037210-90c7cdfc7a4a?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Tourbillon", resistance: "10 ATM" } },
    { id: "w21", name: "UA-01 Explorer", price: 9500, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Automatic Calibre", resistance: "20 ATM" } },
    { id: "w22", name: "UA-02 Minimal", price: 4200, image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Swiss Quartz", resistance: "5 ATM" } },
    { id: "w23", name: "UA-03 Stealth", price: 11000, image: "https://images.unsplash.com/photo-1542496658-e32689368832?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Tourbillon", resistance: "10 ATM" } },
    { id: "w24", name: "UA-04 Core", price: 6800, image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w25", name: "UA-05 Dual Time", price: 10400, image: "https://images.unsplash.com/photo-1548171915-e7afaca00c14?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Dual Time Automatic", resistance: "15 ATM" } },
    { id: "w26", name: "UA-06 Chrono", price: 12500, image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Automatic Chronograph", resistance: "10 ATM" } },
    { id: "w27", name: "UA-07 Racing", price: 14000, image: "https://images.unsplash.com/photo-1587836374828-cb4387061d0b?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Automatic Chronograph", resistance: "100M" } },
    { id: "w28", name: "UA-08 Deep Sea", price: 8900, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Automatic", resistance: "30 ATM" } },
    { id: "w29", name: "UA-09 Vanguard", price: 21000, image: "https://images.unsplash.com/photo-1517457788102-4fc88da0234c?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Tourbillon", resistance: "3 ATM" } },
    { id: "w30", name: "UA-10 Titanium", price: 11500, image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Mechanical", resistance: "10 ATM" } },
    { id: "w31", name: "UA-11 Carbon", price: 13200, image: "https://images.unsplash.com/photo-1510563806283-ac6baf67104b?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Automatic Calibre", resistance: "10 ATM" } },
    { id: "w32", name: "UA-12 Orbit", price: 9200, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8ec?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Mechanical", resistance: "5 ATM" } },
    { id: "w33", name: "UA-13 Velocity", price: 8400, image: "https://images.unsplash.com/photo-1515562141207-7a8efb4088db?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Quartz Chronograph", resistance: "10 ATM" } },
    { id: "w34", name: "UA-14 Pulse", price: 7100, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Swiss Quartz", resistance: "5 ATM" } },
    { id: "w35", name: "UA-15 Horizon", price: 15300, image: "https://images.unsplash.com/photo-1549921203-b09e0bb64fc8?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Automatic", resistance: "5 ATM" } },
    { id: "w36", name: "UA-16 Eclipse", price: 18500, image: "https://images.unsplash.com/photo-1557116857-e9a3b2b4dbba?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Skeletonized Mechanical", resistance: "3 ATM" } },
    { id: "w37", name: "UA-17 Precision", price: 5400, image: "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Quartz", resistance: "10 ATM" } },
    { id: "w38", name: "UA-18 Zenith", price: 28000, image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&q=80", category: "Men", specs: { movement: "Tourbillon Calibre", resistance: "5 ATM" } },
    { id: "w39", name: "UA-19 Flux", price: 6200, image: "https://images.unsplash.com/photo-1526045612212-70caf35c1ec1?auto=format&fit=crop&q=80", category: "Kids", specs: { movement: "Automatic", resistance: "10 ATM" } },
    { id: "w40", name: "UA-20 Matrix", price: 9900, image: "https://images.unsplash.com/photo-1606707764188-34ebdfb06f2c?auto=format&fit=crop&q=80", category: "Women", specs: { movement: "Kinetic", resistance: "20 ATM" } }
];
