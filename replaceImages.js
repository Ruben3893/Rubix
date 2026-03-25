const fs = require('fs');

const urls = [
  "https://images.unsplash.com/photo-1434389670869-c8c8c5c7d13b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550614000-4b95d8582ce0?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1582533561751-0bfab4cb3e05?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1502716115624-b565e0990d9b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1532453288672-3a27e9be20d7?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534069804107-5544d6538ec1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1485527691629-8e370684924c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1505322022379-7c335300f80b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80"
];

const path = 'c:/Users/RUBEN/Downloads/antigravity/Rubix/data/womensData.ts';
let contents = fs.readFileSync(path, 'utf8');

let i = 0;
contents = contents.replace(/image:\s*".*?"/g, () => {
    const url = urls[i % urls.length];
    i++;
    return `image: "${url}"`;
});

fs.writeFileSync(path, contents);
console.log('Successfully replaced ' + i + ' images.');
