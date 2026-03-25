export interface ClothingItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    sizes: string[];
}

export const womensData: ClothingItem[] = [
    {
        id: "w1",
        name: "Top in Cream",
        description: "A soft, relaxed fit cream top in a breathable cotton-blend fabric, perfect for everyday lounging.",
        price: 29.90,
        image: "https://images.unsplash.com/photo-1434389670869-c8c8c5c7d13b?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "w2",
        name: "Shirt in Olive",
        description: "A comfortable olive ribbed shirt featuring an open zip-front design and cropped hem.",
        price: 34.90,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w3",
        name: "Sweater in Beige",
        description: "Classic beige cropped sweater crafted from a fine knit, offering an elegant minimal silhouette.",
        price: 34.90,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "w4",
        name: "Top in Black",
        description: "A sleek black square-neck bodysuit designed for a seamless, figure-hugging fit.",
        price: 39.90,
        image: "https://images.unsplash.com/photo-1550614000-4b95d8582ce0?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w5",
        name: "Skirt in Dark Grey",
        description: "A mid-length dark grey ribbed knit skirt featuring a subtle side slit for elegant mobility.",
        price: 39.90,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w6",
        name: "Top in Cream (Fitted)",
        description: "Short sleeve fitted cream top in a stretchy modal blend, offering supreme comfort.",
        price: 29.90,
        image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L"]
    },
    {
        id: "w7",
        name: "Trousers in Khaki",
        description: "High-waisted khaki trousers with a wide-leg cut and tailored front seams.",
        price: 59.90,
        image: "https://images.unsplash.com/photo-1582533561751-0bfab4cb3e05?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "w8",
        name: "Sweater in Beige (Oversized)",
        description: "An incredibly soft, oversized beige sweater dress perfect for cozy layering.",
        price: 69.90,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L"]
    },
    {
        id: "w9",
        name: "Ribbed Cardigan in Oat",
        description: "A versatile oat-colored ribbed cardigan featuring tortoiseshell buttons and a V-neckline.",
        price: 49.90,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "w10",
        name: "Wide Leg Trousers in Cream",
        description: "Flowing wide-leg trousers in a soft cream linen blend, designed for airy summer days.",
        price: 54.90,
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w11",
        name: "Lounge Pants in Olive",
        description: "Relaxed fit olive lounge pants with an elastic waist and premium heavyweight cotton.",
        price: 44.90,
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "w12",
        name: "Scoop Neck Top in Taupe",
        description: "A minimalist taupe top featuring a deep scoop neckline and seamless finish.",
        price: 24.90,
        image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w13",
        name: "Maxi Dress in Black",
        description: "An elegant, floor-length black jersey dress with a subtle mock neck.",
        price: 64.90,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "w14",
        name: "Linen Shirt in White",
        description: "A classic unstructured white linen button-down shirt, perfect for layering.",
        price: 49.90,
        image: "https://images.unsplash.com/photo-1502716115624-b565e0990d9b?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L"]
    },
    {
        id: "w15",
        name: "V-Neck Sweater in Latte",
        description: "A rich latte-colored v-neck sweater spun from a luxurious cashmere blend.",
        price: 79.90,
        image: "https://images.unsplash.com/photo-1532453288672-3a27e9be20d7?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w16",
        name: "Tailored Blazer in Sand",
        description: "An oversized tailored blazer in a neutral sand hue, featuring structured shoulders.",
        price: 119.90,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w17",
        name: "Midi Skirt in Beige",
        description: "High-waisted beige midi skirt crafted from a structured, smooth fabric.",
        price: 44.90,
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "w18",
        name: "Crop Tank in Charcoal",
        description: "Essential charcoal grey cropped ribbed tank designed for versatile styling.",
        price: 19.90,
        image: "https://images.unsplash.com/photo-1534069804107-5544d6538ec1?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w19",
        name: "Bike Shorts in Mocha",
        description: "High-performance ribbed bike shorts in a deep mocha brown shade.",
        price: 29.90,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "w20",
        name: "Zip-Up Hoodie in Ash",
        description: "A premium ash-grey zip hoodie with a relaxed, boxy fit and dropped shoulders.",
        price: 59.90,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w21",
        name: "Draped Top in Ivory",
        description: "An elegant ivory top with subtle draping across the front neckline.",
        price: 39.90,
        image: "https://images.unsplash.com/photo-1485527691629-8e370684924c?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w22",
        name: "Fleece Joggers in Cream",
        description: "Ultra-soft cream joggers with a brushed fleece interior for maximum comfort.",
        price: 49.90,
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "w23",
        name: "Pleated Trousers in Stone",
        description: "Sophisticated stone-colored trousers featuring sharp front pleats and a relaxed leg.",
        price: 69.90,
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w24",
        name: "Turtleneck in Espresso",
        description: "A slim-fit dark espresso turtleneck made from a stretchy rib knit.",
        price: 34.90,
        image: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w25",
        name: "Wrap Dress in Sage",
        description: "A highly versatile sage green wrap dress with a flowing, asymmetrical hem.",
        price: 74.90,
        image: "https://images.unsplash.com/photo-1505322022379-7c335300f80b?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "w26",
        name: "Asymmetric Top in Black",
        description: "A modern, single-shoulder black top featuring a sleek asymmetric cut.",
        price: 39.90,
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w27",
        name: "Puffer Vest in Taupe",
        description: "A minimalist cropped puffer vest in taupe, offering warmth without bulk.",
        price: 79.90,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L"]
    },
    {
        id: "w28",
        name: "Mock Neck Sweater in Ivory",
        description: "A classic ivory mock neck sweater in a mid-weight cotton blend.",
        price: 44.90,
        image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "w29",
        name: "Satin Camisole in Champagne",
        description: "A delicate champagne satin cami top featuring fine straps and a cowl neckline.",
        price: 29.90,
        image: "https://images.unsplash.com/photo-1434389670869-c8c8c5c7d13b?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w30",
        name: "Wide Leg Denim in Washed Grey",
        description: "High-rise premium denim jeans featuring a relaxed, vintage washed grey finish.",
        price: 89.90,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32"]
    },
    {
        id: "w31",
        name: "Knit Shorts in Beige",
        description: "Comfortable high-waisted beige lounge shorts in a textured knit.",
        price: 24.90,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L"]
    },
    {
        id: "w32",
        name: "Trench Coat in Camel",
        description: "A timeless, sweeping camel trench coat with a double-breasted closure and belt.",
        price: 149.90,
        image: "https://images.unsplash.com/photo-1550614000-4b95d8582ce0?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w33",
        name: "Seamless Unitard in Black",
        description: "A high-performance black sports unitard with a sculpting, seamless fit.",
        price: 54.90,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w34",
        name: "Boxy Tee in White",
        description: "An essential heavyweight white cotton t-shirt with a contemporary boxy cut.",
        price: 24.90,
        image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "w35",
        name: "Fitted Maxi Skirt in Cocoa",
        description: "A sleek cocoa-brown maxi skirt tailored to elegantly trace the body.",
        price: 49.90,
        image: "https://images.unsplash.com/photo-1582533561751-0bfab4cb3e05?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w36",
        name: "Lounge Bralette in Olive",
        description: "A wire-free, ultra-soft olive bralette designed for all-day comfort.",
        price: 19.90,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w37",
        name: "Straight Leg Pants in Rust",
        description: "A statement straight-leg trouser in a rich rust-red organic cotton.",
        price: 64.90,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "w38",
        name: "Crewneck Sweatshirt in Navy",
        description: "A vintage-inspired washed navy crewneck featuring subtle drop shoulders.",
        price: 44.90,
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "w39",
        name: "Silk Slip Skirt in Silver",
        description: "A luxurious silver silk-satin slip skirt with an elasticated, hidden waistband.",
        price: 89.90,
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "w40",
        name: "Half-Zip Pullover in Oatmeal",
        description: "A casual ribbed oatmeal pullover top with a polished silver half-zip detail.",
        price: 54.90,
        image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80",
        category: "Women",
        sizes: ["S", "M", "L", "XL"]
    }
];
