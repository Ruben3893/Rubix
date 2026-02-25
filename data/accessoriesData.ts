// Recreated accessoriesData.ts based on previous conversations.
export interface Accessory {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const accessoriesData: Accessory[] = [
  {
    id: "a1",
    name: "Orbit Key Organizer",
    description: "Keep your keys perfectly organized and silent.",
    price: 45,
    image: "/assets/orbit-key.png",
    category: "EDC"
  },
  {
    id: "a2",
    name: "Architectural Cuff",
    description: "Minimalist titanium cuff bracelet.",
    price: 120,
    image: "/assets/architectural-cuff.png",
    category: "Jewelry"
  },
  {
    id: "a3",
    name: "Signet Ring",
    description: "Matte black tungsten signet ring.",
    price: 95,
    image: "/assets/signet-ring.png",
    category: "Jewelry"
  }
];
