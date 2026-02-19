'use client'
import {useCart} from "@/store/useCart"
import { MenuItem } from "@/data/menu";

interface FoodCardProps {
  item: MenuItem;
}

export default function FoodCard({ item }: FoodCardProps) {
    const addItem = useCart((state) => state.addItem);

    const handleAddToCart = () => {
        addItem(item);
    };
  return (
    <article className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-52 sm:h-60">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 bg-gradient-to-r from-rose-500 to-pink-400 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
          ${item.price}
        </span>
        <span className="absolute bottom-3 left-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-md">
          {item.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-2 max-h-14 overflow-hidden">
          {item.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium py-2 px-3 rounded-lg shadow hover:scale-105 transition transform">
            Add to Bowl
          </button>

          <button
            aria-label="favorite"
            className="p-2 rounded-lg bg-white border border-gray-100 shadow-sm hover:bg-gray-50"
          >
            <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657 3.172 11.83a4 4 0 010-5.657z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}