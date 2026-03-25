export interface ClothingItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    sizes: string[];
}

export const clothingData: ClothingItem[] = [
    {
        id: "c1",
        name: "Obsidian Bomber Jacket",
        description: "Graphic heavy-duty bomber featuring custom patches and a quilted red lining.",
        price: 210,
        image: "/assets/clothes-1.jpeg",
        category: "Outerwear",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c2",
        name: "Olive Tailored Shorts",
        description: "Premium structured cotton shorts with a sharp pleat for a semi-formal summer look.",
        price: 85,
        image: "/assets/clothes-2.png",
        category: "Bottoms",
        sizes: ["30", "32", "34", "36"]
    },
    {
        id: "c3",
        name: "Stealth Tech Shell",
        description: "Water-resistant performance jacket with multiple tactical zippers and adjustable hood.",
        price: 295,
        image: "/assets/clothes-3.png",
        category: "Outerwear",
        sizes: ["M", "L", "XL"]
    },
    {
        id: "c4",
        name: "Arctic Fleece Joggers",
        description: "Clean white heavy-fleece sweatpants with an elasticated waistband and drawstring.",
        price: 110,
        image: "/assets/clothes-4.webp",
        category: "Bottoms",
        sizes: ["S", "M", "L"]
    },
    {
        id: "c5",
        name: "Distressed Rider Leather",
        description: "Vintage-treated black leather jacket with racing stripes and quilted shoulder detailing.",
        price: 320,
        image: "/assets/clothes-5.jpeg",
        category: "Outerwear",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c6",
        name: "Teal Satin Dress Shirt",
        description: "Slim-fit button-down in a high-sheen teal satin for a bold, sophisticated look.",
        price: 75,
        image: "/assets/clothes-6.png",
        category: "Tops",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c7",
        name: "Velvet Crimson Tuxedo",
        description: "Luxurious deep red velvet suit with satin lapels for high-end formal events.",
        price: 550,
        image: "/assets/clothes-7.webp",
        category: "Suits",
        sizes: ["38R", "40R", "42R", "44R"]
    },
    {
        id: "c8",
        name: "Shadow Peacoat",
        description: "Double-breasted wool blend coat with a high collar and decorative inner lining.",
        price: 320,
        image: "/assets/clothes-8.png",
        category: "Outerwear",
        sizes: ["M", "L", "XL"]
    },
    {
        id: "c9",
        name: "Performance Gym Shorts",
        description: "Lightweight, breathable athletic shorts designed for maximum mobility.",
        price: 45,
        image: "/assets/clothes-9.png",
        category: "Bottoms",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c10",
        name: "Onyx Turtleneck",
        description: "Slim-fit ribbed knit turtleneck, perfect for layering under blazers.",
        price: 125,
        image: "/assets/clothes-10.jpg",
        category: "Tops",
        sizes: ["S", "M", "L"]
    },
    {
        id: "c11",
        name: "Dusty Rose Oxford",
        description: "Classic button-down shirt in a soft rose hue, featuring a chest pocket and crisp collar.",
        price: 65,
        image: "/assets/clothes-11.jpeg",
        category: "Tops",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c12",
        name: "Midnight Linen Suit",
        description: "Two-piece textured navy suit crafted from breathable linen for formal summer occasions.",
        price: 380,
        image: "/assets/clothes-12.jpeg",
        category: "Suits",
        sizes: ["38R", "40R", "42R", "44R"]
    },
    {
        id: "c13",
        name: "Royal Navy Polo",
        description: "Essential pique cotton polo shirt featuring the iconic red embroidered logo.",
        price: 85,
        image: "/assets/clothes-12.webp",
        category: "Tops",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: "c14",
        name: "Evergreen Expedition Parka",
        description: "Heavyweight winter parka with a faux-fur trimmed hood and multiple utility pockets.",
        price: 260,
        image: "/assets/clothes-15.jpeg",
        category: "Outerwear",
        sizes: ["M", "L", "XL", "XXL"]
    },
    {
        id: "c15",
        name: "Obsidian Chinos",
        description: "Tailored slim-fit chinos in a deep black finish, perfect for versatile daily wear.",
        price: 90,
        image: "/assets/clothes-17.jpeg",
        category: "Bottoms",
        sizes: ["30", "32", "34", "36"]
    },
    {
        id: "c16",
        name: "Charcoal Double-Breasted Vest",
        description: "Sophisticated formal waistcoat with a six-button front, paired here with a navy base.",
        price: 110,
        image: "/assets/clothes-18.jpeg",
        category: "Suits",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c17",
        name: "Essential V-Neck Cardigan",
        description: "Lightweight black knit cardigan with a classic button-through front and ribbed cuffs.",
        price: 95,
        image: "/assets/clothes-19.jpeg",
        category: "Tops",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c18",
        name: "Grey Plaid Blazer",
        description: "Modern sports coat featuring a subtle check pattern and dual-button closure.",
        price: 215,
        image: "/assets/clothes-20.jpeg",
        category: "Outerwear",
        sizes: ["38R", "40R", "42R", "44R"]
    },
    {
        id: "c19",
        name: "Yellow Pullover Hoodie",
        description: "Heavyweight cotton blend hoodie offering a relaxed silhouette.",
        price: 120,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
        category: "Outerwear",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c20",
        name: "Emerald Wrap Dress",
        description: "Elegant midi-length wrap dress in a deep emerald green.",
        price: 165,
        image: "https://images.unsplash.com/photo-1620059551460-e8810c9d9d20?auto=format&fit=crop&q=80",
        category: "Dresses",
        sizes: ["S", "M", "L"]
    },
    {
        id: "c21",
        name: "Crimson Structured Dress",
        description: "Bold structural crimson dress designed for statement appearances.",
        price: 185,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80",
        category: "Dresses",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "c22",
        name: "Blue Denim Jacket",
        description: "Classic light wash denim jacket with silver hardware.",
        price: 140,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
        category: "Outerwear",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c23",
        name: "Beige Ribbed Turtleneck",
        description: "Cozy oversized turtleneck crafted from ethical wool blends.",
        price: 85,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
        category: "Tops",
        sizes: ["S", "M", "L"]
    },
    {
        id: "c24",
        name: "Patterned Silk Shirt",
        description: "Retro-inspired geometric patterned shirt in pure silk.",
        price: 210,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80",
        category: "Tops",
        sizes: ["M", "L", "XL"]
    },
    {
        id: "c25",
        name: "Long Sleeve Black Top",
        description: "Form-fitting essential black crewneck long sleeve.",
        price: 75,
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80",
        category: "Tops",
        sizes: ["S", "M", "L"]
    },
    {
        id: "c26",
        name: "Satin Pink Blouse",
        description: "A gorgeous pastel pink blouse made from premium satin.",
        price: 115,
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80",
        category: "Tops",
        sizes: ["XS", "S", "M"]
    },
    {
        id: "c27",
        name: "White Turtleneck Sweater",
        description: "Crisp white fine-knit turtleneck for layering.",
        price: 90,
        image: "https://images.unsplash.com/photo-1582533561751-0bfab4cb3e05?auto=format&fit=crop&q=80",
        category: "Tops",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c28",
        name: "Orange Knit Beanie",
        description: "Chunky knit vibrant orange beanie to keep out the cold.",
        price: 45,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["OS"]
    },
    {
        id: "c29",
        name: "Tailored Rust Trousers",
        description: "High-waisted rust pants featuring a wide, relaxed leg.",
        price: 135,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
        category: "Bottoms",
        sizes: ["28", "30", "32", "34"]
    },
    {
        id: "c30",
        name: "Boxy White Tee",
        description: "Heavyweight premium cotton t-shirt built to last.",
        price: 45,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
        category: "Tops",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: "c31",
        name: "Navy Track Jacket",
        description: "Vintage styling with modern moisture-wicking fabric.",
        price: 155,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
        category: "Outerwear",
        sizes: ["S", "M", "L"]
    },
    {
        id: "c32",
        name: "Camel Trench Coat",
        description: "A staple outerwear piece suitable for transitional weather.",
        price: 345,
        image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80",
        category: "Outerwear",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c33",
        name: "Light Grey Cardigan",
        description: "Soft blended knit open-front cardigan perfect for lounging.",
        price: 85,
        image: "https://images.unsplash.com/photo-1620012253295-c15bc3e65909?auto=format&fit=crop&q=80",
        category: "Tops",
        sizes: ["S", "M", "L"]
    },
    {
        id: "c34",
        name: "Slim Fit Black Jeans",
        description: "Pitch black denim with minimal stretch to hold their shape.",
        price: 110,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80",
        category: "Bottoms",
        sizes: ["30", "32", "34", "36"]
    },
    {
        id: "c35",
        name: "Cream Casual Blouse",
        description: "Lightweight and airy blouse ideal for business casual.",
        price: 95,
        image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&q=80",
        category: "Tops",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: "c36",
        name: "Olive Cargo Pants",
        description: "Utilitarian olive cargo pants with reinforced stitching.",
        price: 145,
        image: "/assets/clothes-2.png",
        category: "Bottoms",
        sizes: ["30", "32", "34", "36"]
    },
    {
        id: "c37",
        name: "Charcoal Beanie",
        description: "Classic rib-knit beanie made from soft merino wool.",
        price: 55,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80",
        category: "Accessories",
        sizes: ["OS"]
    },
    {
        id: "c38",
        name: "Midnight Silk Pajamas",
        description: "Luxurious pure silk sleepwear set for maximum comfort.",
        price: 220,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80",
        category: "Sleepwear",
        sizes: ["S", "M", "L", "XL"]
    }
];