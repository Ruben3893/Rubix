const fs = require('fs');

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

const path = 'c:/Users/RUBEN/Downloads/antigravity/Rubix/data/shoeData.ts';
let contents = fs.readFileSync(path, 'utf8');

let i = 0;
contents = contents.replace(/image:\s*".*?"/g, (m) => {
    const url = urls[i % urls.length];
    i++;
    return `image: "${url}"`;
});

fs.writeFileSync(path, contents);
console.log('Successfully replaced ' + i + ' shoe images.');
