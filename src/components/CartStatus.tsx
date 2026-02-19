'use client';
import { useCart } from "@/store/useCart";
import Link from 'next/link'
export default function CartStatus() {
    const items = useCart((state) => state.items);
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    if (totalItems === 0) return null;
    return (
    <Link href="/checkout">
        <div className="fixed  bottom-8 right-8 bg-orange-600 text-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-2xl px-6 py-2  items-center gap-4 animate-bounce">
           
            <span className="text-sm font-medium text-white">{totalItems} items in your bowl</span>
        </div>
    </Link>
    );
}