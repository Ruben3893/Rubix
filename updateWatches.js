const fs = require('fs');
let content = fs.readFileSync('data/watchesData.ts', 'utf8');
let cats = ['Women', 'Men', 'Kids'];
let i = 0;
content = content.replace(/category: "Watches"/g, () => `category: "${cats[i++ % 3]}"`);
fs.writeFileSync('data/watchesData.ts', content);
console.log('Done!');
