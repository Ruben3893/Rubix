import * as fs from 'fs';
import * as path from 'path';

import { accessoryData } from './data/accessoriesData';
import { clothingData } from './data/clothingData';
import { popularSneakersData } from './data/popularSneakersData';
import { shoeData } from './data/shoeData';
import { trendySunglassesData } from './data/trendySunglassesData';
import { watchesData } from './data/watchesData';
import { womensData } from './data/womensData';

const categories = [
  { name: 'Accessories', data: accessoryData },
  { name: 'Clothing', data: clothingData },
  { name: 'Sneakers', data: popularSneakersData },
  { name: 'Shoes', data: shoeData },
  { name: 'Sunglasses', data: trendySunglassesData },
  { name: 'Watches', data: watchesData },
  { name: 'WomensWear', data: womensData },
];

let md = '# Rubix Product Catalog\n\n';
let total = 0;

categories.forEach(cat => {
    md += `## ${cat.name} (${cat.data.length} items)\n\n`;
    md += `| ID | Name | Price | Sizes |\n`;
    md += `|----|------|-------|-------|\n`;
    cat.data.forEach((p: any) => {
        const sizes = Array.isArray(p.sizes) ? p.sizes.join(', ') : (p.sizes || 'N/A');
        md += `| ${p.id} | ${p.name} | $${p.price} | ${sizes} |\n`;
    });
    md += '\n';
    total += cat.data.length;
});

md = `*Total Products: ${total}*\n\n` + md;

fs.writeFileSync(path.join(__dirname, 'product_catalog.md'), md, 'utf8');
console.log('Successfully written to product_catalog.md');
