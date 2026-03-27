import * as fs from 'fs';
import * as path from 'path';
import * as XLSX from 'xlsx';

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

// Clean up arrays inside fields for Excel
const cleanedProducts = allProducts.map(p => {
    const cleaned: any = { ...p };
    if (Array.isArray(cleaned.sizes)) {
        cleaned.sizes = cleaned.sizes.join(', ');
    }
    return cleaned;
});

const worksheet = XLSX.utils.json_to_sheet(cleanedProducts);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'All Products');

const outputPath = path.join(__dirname, 'all_products.xlsx');
XLSX.writeFile(workbook, outputPath);

console.log('Successfully written to all_products.xlsx');
