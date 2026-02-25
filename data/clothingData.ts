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
        image: "/assets/clothes-7.jpg",
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
    }
];