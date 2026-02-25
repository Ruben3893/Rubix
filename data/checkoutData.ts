import { ClothingItem } from "./clothingData";

export interface CheckoutStep {
    id: number;
    label: string;
    description: string;
}

export interface Order {
    orderId: string;
    items: any[];
    totalAmount: number;
    shippingAddress: {
        fullName: string;
        addressLine: string;
        city: string;
        zipCode: string;
    };
    paymentMethod: "Credit Card" | "PayPal" | "Stripe";
    status: "Pending" | "Processing" | "Shipped";
}

export const checkoutSteps: CheckoutStep[] = [
    { id: 1, label: "Shipping", description: "Where should we send your gear?" },
    { id: 2, label: "Payment", description: "Securely process your transaction." },
    { id: 3, label: "Review", description: "One last look before it's yours." },
    { id: 4, label: "Confirmation", description: "All set! Your order is on the way." }
];

export const calculateTotal = (cartItems: any[], taxRate: number = 0.08): number => {
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
    const tax = subtotal * taxRate;
    return Number((subtotal + tax).toFixed(2));
};
