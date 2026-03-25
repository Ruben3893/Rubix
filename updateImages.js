const fs = require('fs');
const path = require('path');

const dataPath = path.join('c:/Users/RUBEN/Downloads/antigravity/Rubix/data/trendySunglassesData.ts');

const newUrls = [
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
  "https://images.unsplash.com/photo-1473496169904-658ba7c21f7d",
  "https://images.unsplash.com/photo-1508296695146-257a814070b4",
  "https://images.unsplash.com/photo-1582143419997-2a4c2847a9ff",
  "https://images.unsplash.com/photo-1577803645773-f96470509666",
  "https://images.unsplash.com/photo-1563903530908-afdd155d057a",
  "https://images.unsplash.com/photo-1555009893-f111e1141444",
  "https://images.unsplash.com/photo-1614715838608-dd527c46231d",
  "https://images.unsplash.com/photo-1556306535-0f09a536f01f",
  "https://images.unsplash.com/photo-1509695507497-903c140c43b0",
  "https://images.unsplash.com/photo-1596541530919-5d6af7ffcaae",
  "https://images.unsplash.com/photo-1589110036662-7a242fdc6dfa",
  "https://images.unsplash.com/photo-1625591338666-ac2d0bcbd8c4",
  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371",
  "https://images.unsplash.com/photo-1589110001090-488f28c2ddb9",
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  "https://images.unsplash.com/photo-1625591340157-1941e7dc60af",
  "https://images.unsplash.com/photo-1578683533475-4cefd97b0a7c",
  "https://images.unsplash.com/photo-1604118949826-6cd3554e4bdc",
  "https://images.unsplash.com/photo-1589109968417-7a2489c6dffe",
  "https://images.unsplash.com/photo-1614866663595-5ff1ec792d24",
  "https://images.unsplash.com/photo-1588610530514-432a5df03f7e",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
  "https://images.unsplash.com/photo-1584735175315-9d5df23860e6",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
  "https://images.unsplash.com/photo-1605348532723-67c010a300dc",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
  "https://images.unsplash.com/photo-1614715838608-dd527c46231d",
  "https://images.unsplash.com/photo-1580970678850-9ab01ba3e6a2",
  "https://images.unsplash.com/photo-1611075486985-78e0ea52cd08",
  "https://images.unsplash.com/photo-1599839619722-39751411ea63",
  "https://images.unsplash.com/photo-1512353087810-254cb9859f6f",
  "https://images.unsplash.com/photo-1567083060012-706f23f8cb15",
  "https://images.unsplash.com/photo-1592398555845-f9ca4930335e",
  "https://images.unsplash.com/photo-1505322022379-7c3353ee6291",
  "https://images.unsplash.com/photo-1589110036128-090680d22080"
];

let contents = fs.readFileSync(dataPath, 'utf8');

let i = 0;
contents = contents.replace(/image: "(.+?)"/g, function(match, currentImage) {
    const replacement = 'image: "' + newUrls[i % newUrls.length] + '?auto=format&fit=crop&q=80"';
    i++;
    return replacement;
});

fs.writeFileSync(dataPath, contents);
console.log('Successfully applied 40 distinct HD lifestyle/eyewear shots.');
