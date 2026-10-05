"use client";

import MenuItem from "@/components/ui/MenuItem";
import { useState } from "react";

const categories = ["BREAKFAST", "LUNCH", "DESSERT", "DRINKS"];

const menuItems = [
  {
    id: 1,
    name: "Waffle Brunch",
    description: "French Toast / Bacon / Strawberries",
    price: "3.00$",
    image: "/images/menus/waffle.jpg",
    category: "BREAKFAST"
  },
  {
    id: 2,
    name: "Farmhouse Omelette",
    description: "Sauteed Potatoes / Bacon / Grilled Onions",
    price: "4.30$",
    image: "/images/menus/farmhouse-omlette.jpg",
    category: "BREAKFAST"
  },
  {
    id: 3,
    name: "Chef's Omelette",
    description: "Avocado / Mushrooms / Green Onion / Tomato",
    price: "5.50$",
    image: "/images/menus/chefs-omelette.jpg",
    category: "BREAKFAST"
  },
  {
    id: 4,
    name: "Waffles Benedict",
    description: "Strawberries / Pecans / Chantilly Cream",
    price: "4.00$",
    image: "/images/menus/benedict.jpg",
    category: "BREAKFAST"
  },
  {
    id: 5,
    name: "Belgian Waffle",
    description: "Maple Butter / Syrup",
    price: "15.50$",
    image: "/images/menus/belgian.jpg",
    category: "BREAKFAST"
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("BREAKFAST");

  // In a real app, we would filter by category. 
  // For this design demo, we'll just show the same items to demonstrate the layout.
  const filteredItems = menuItems;

  return (
    <section id="menu" className="py-32 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl flex flex-col items-center">
          <span className="inline-block bg-[#fcfaf3] text-[#c99f5e] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Our Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-black mb-6">
            DCafe Menu
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            The time has come to bring those ideas and plans to life. This is where we really begin to visualize.
          </p>
        </div>

        {/* Categories / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16 text-xs md:text-sm font-bold tracking-widest text-[#c99f5e] uppercase">
          {categories.map((cat, index) => (
            <div key={cat} className="flex items-center gap-4 md:gap-6">
              <button 
                onClick={() => setActiveCategory(cat)}
                className={`transition-colors hover:text-black ${activeCategory === cat ? 'text-black' : ''}`}
              >
                {cat}
              </button>
              {index < categories.length - 1 && (
                <span className="text-[#c99f5e] select-none">~</span>
              )}
            </div>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="w-full flex flex-col items-center">
          {filteredItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
