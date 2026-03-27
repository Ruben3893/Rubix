import * as fs from 'fs';
import * as path from 'path';

import { accessoryData } from './data/accessoriesData';
import { clothingData } from './data/clothingData';
import { popularSneakersData } from './data/popularSneakersData';
import { shoeData } from './data/shoeData';
import { trendySunglassesData } from './data/trendySunglassesData';
import { watchesData } from './data/watchesData';
import { womensData } from './data/womensData';

const allProducts = [
  ...accessoryData,
  ...clothingData,
  ...popularSneakersData,
  ...shoeData,
  ...trendySunglassesData,
  ...watchesData,
  ...womensData,
];

const headers = ['id', 'name', 'description', 'price', 'image', 'category', 'sizes'];
let csv = headers.join(',') + '\n';

allProducts.forEach(p => {
    const row = headers.map(h => {
        let val = (p as any)[h];
        if (val === undefined || val === null) {
            return '';
        }
        if (Array.isArray(val)) {
            val = val.join('|');
        }
        val = String(val).replace(/"/g, '""');
        if (val.includes(',') || val.includes('\n') || val.includes('"')) {
            val = `"${val}"`;
        }
        return val;
    });
    csv += row.join(',') + '\n';
});

fs.writeFileSync(path.join(__dirname, 'all_products.csv'), csv, 'utf8');
console.log('Successfully written to all_products.csv');
