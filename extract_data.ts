import fs from 'fs';
import { womensData } from './data/womensData';
import { watchesData } from './data/watchesData';
import { trendySunglassesData } from './data/trendySunglassesData';
import { shoeData } from './data/shoeData';
import { popularSneakersData } from './data/popularSneakersData';
import { clothingData } from './data/clothingData';
import { accessoryData } from './data/accessoriesData';

const allProducts = [
    ...womensData.map(p => ({ ...p, source: 'Women' })),
    ...watchesData.map(p => ({ ...p, source: 'Watches' })),
    ...trendySunglassesData.map(p => ({ ...p, source: 'Sunglasses' })),
    ...shoeData.map(p => ({ ...p, source: 'Shoes' })),
    ...popularSneakersData.map(p => ({ ...p, source: 'Sneakers' })),
    ...clothingData.map(p => ({ ...p, source: 'Men\'s Clothing' })),
    ...accessoryData.map(p => ({ ...p, source: 'Accessories' }))
];

type Product = {
    id: string;
    name: string;
    price: number;
    category?: string;
    source: string;
}

let markdown = `# Rubix Complete Product Data\n\n`;
markdown += `| ID | Name | Price | Category | Source |\n`;
markdown += `|---|---|---|---|---|\n`;

allProducts.forEach((p: any) => {
    markdown += `| ${p.id} | ${p.name.replace(/\|/g, '\\|')} | $${p.price?.toFixed(2) ?? p.price} | ${p.category || 'N/A'} | ${p.source} |\n`;
});

fs.writeFileSync('product_data_table.md', markdown);
console.log('Successfully wrote product_data_table.md with ' + allProducts.length + ' products.');
