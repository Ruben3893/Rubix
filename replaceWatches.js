const fs = require('fs');

const watchUrls = [
  "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1549998188-f2f2ac634ba1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1548689816-c399f954f3dd?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1587836374828-cb4387860956?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1623998021446-45cd9b269056?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1508685096489-73fb6df9eb09?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542496658-e3266f07a5ea?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1596701037210-90c7cdfc7a4a?auto=format&fit=crop&q=80"
];

const path = 'c:/Users/RUBEN/Downloads/antigravity/Rubix/data/watchesData.ts';
let contents = fs.readFileSync(path, 'utf8');

let i = 0;
// Only match image: ".../assets/..." or any image not unsplash
contents = contents.replace(/image:\s*".*?"/g, (m) => {
    if (!m.includes('unsplash')) {
        const url = watchUrls[i % watchUrls.length];
        i++;
        return `image: "${url}"`;
    }
    return m;
});

fs.writeFileSync(path, contents);
console.log('Successfully replaced ' + i + ' watch images.');
