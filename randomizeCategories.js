const fs = require('fs');

const path = 'c:/Users/RUBEN/Downloads/antigravity/Rubix/data/popularSneakersData.ts';
let contents = fs.readFileSync(path, 'utf8');

// The categories listed in the UI menu
const categories = ["New Trend", "Lifestyle", "Running", "Tennis", "Basket"];

// Find each category field and randomly replace it
const updatedContents = contents.replace(/category:\s+"Sneakers"/g, () => {
   const randomCat = categories[Math.floor(Math.random() * categories.length)];
   return `category: "${randomCat}"`;
});

fs.writeFileSync(path, updatedContents);
console.log('Randomly distributed all popular sneakers into the 5 menu categories.');
