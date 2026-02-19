'use client'
import {useState} from 'react'
import {MenuItem } from '@/data/menu';
import FoodCard from '@/components/FoodCard';
import { JOLLOF_MENU } from '@/data/menu';

export default function Home() {
   const [activeCategory, setActiveCategory ] = useState('All')
   const filteredMenu = activeCategory === 'All'? JOLLOF_MENU : JOLLOF_MENU.filter(item => item.category === activeCategory)
   const categories = ['All', 'main', 'side-dish', 'proteins', "drinks"]
  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-50 to-yellow-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Welcome to Food Hub</h1>
    
        <p className="text-center text-gray-700 mb-12 max-w-xl mx-auto">
          Discover delicious meals and order online for delivery or pickup. Browse our menu and enjoy your favorite dishes from the comfort of your home.
        </p>
       <section>
         <div className = "flex gap-3 mt-6 overflow-x-auto pb-2">
           {categories.map((cat) => (
            <button key={cat}
            onClick={()=> setActiveCategory(cat)}
            className= {`px-6 py-2 rounded-full whitespace-nowrap transistion ${activeCategory===cat ? 'bg-orange-600 text-white': 'bg-white text-gray-600 border'}`}>
              {cat}
            </button>
           ))}
         </div>
       </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Menu</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredMenu.map((item: MenuItem) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}