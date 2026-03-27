import * as fs from 'fs';
import * as path from 'path';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType } from 'docx';

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

const children: any[] = [];
let total = 0;
categories.forEach(c => total += c.data.length);

children.push(
    new Paragraph({
        text: `Rubix Product Catalog (Total Products: ${total})`,
        heading: HeadingLevel.TITLE,
    })
);
children.push(new Paragraph(""));

categories.forEach(cat => {
    children.push(
        new Paragraph({
            text: `${cat.name} (${cat.data.length} items)`,
            heading: HeadingLevel.HEADING_2,
        })
    );
    
    const tableRows = [
        new TableRow({
            children: [
                new TableCell({ children: [new Paragraph( { children: [new TextRun({ text: "ID", bold: true })] } )] }),
                new TableCell({ children: [new Paragraph( { children: [new TextRun({ text: "Name", bold: true })] } )] }),
                new TableCell({ children: [new Paragraph( { children: [new TextRun({ text: "Price", bold: true })] } )] }),
                new TableCell({ children: [new Paragraph( { children: [new TextRun({ text: "Sizes", bold: true })] } )] }),
            ]
        })
    ];
    
    cat.data.forEach((p: any) => {
        const sizes = Array.isArray(p.sizes) ? p.sizes.join(', ') : (p.sizes || 'N/A');
        tableRows.push(
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph(p.id)] }),
                    new TableCell({ children: [new Paragraph(p.name)] }),
                    new TableCell({ children: [new Paragraph(`$${p.price}`)] }),
                    new TableCell({ children: [new Paragraph(sizes)] }),
                ]
            })
        );
    });

    children.push(new Table({ 
        rows: tableRows, 
        width: { size: 100, type: WidthType.PERCENTAGE } 
    }));
    
    children.push(new Paragraph("")); // spacing
});

const doc = new Document({
    sections: [{
        children: children
    }]
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(path.join(__dirname, 'product_catalog.docx'), buffer);
    console.log("Successfully written to product_catalog.docx");
}).catch((err) => {
    console.error("Error generating docx:", err);
});
