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
        name: "Rose Gold Executive",
        description: "Premium tailored fit piece with intricate rose gold accents.",
        price: 350,
        image: "/assets/rose-gold-exec.png",
        category: "Outerwear",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "c2",
        name: "Obsidian Long Coat",
        description: "Deep black, breathable wool coat for the late night.",
        price: 450,
        image: "/assets/obsidian-coat.png",
        category: "Outerwear",
        sizes: ["M", "L", "XL"]
    },
    {
        id: "c3",
        name: "Silk Dress Shirt",
        description: "The Breathe Rule implemented into a shirt: soft, wide-spaced threads.",
        price: 180,
        image: "/assets/silk-shirt.png",
        category: "Tops",
        sizes: ["S", "M", "L"]
    }
];
