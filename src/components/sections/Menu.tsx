"use client";

import MenuItem from "@/components/ui/MenuItem";
import { useState } from "react";
import ScrollReveal, { StaggerReveal, RevealItem } from "@/components/ui/ScrollReveal";

const categories = ["BREAKFAST", "LUNCH", "DESSERT", "DRINKS"];

const menuItems = [
  // BREAKFAST
  {
    id: 1,
    name: "Vegetable Sandwich",
    description: "Fresh vegetables and herbs",
    price: "4.50$",
    image: "/images/menus/waffle.jpg",
    category: "BREAKFAST"
  },
  {
    id: 2,
    name: "Chicken Mayonnaise",
    description: "Tender chicken with creamy mayonnaise",
    price: "5.50$",
    image: "/images/menus/farmhouse-omlette.jpg",
    category: "BREAKFAST"
  },
  {
    id: 3,
    name: "Cheese Egg Sandwich",
    description: "Melted cheese and fresh eggs",
    price: "4.00$",
    image: "/images/menus/chefs-omelette.jpg",
    category: "BREAKFAST"
  },
  {
    id: 4,
    name: "Peanut Banana",
    description: "Peanut butter and sliced banana toast",
    price: "3.50$",
    image: "/images/menus/benedict.jpg",
    category: "BREAKFAST"
  },
  {
    id: 5,
    name: "Egg Boiled",
    description: "Perfectly soft boiled eggs",
    price: "2.00$",
    image: "/images/menus/belgian.jpg",
    category: "BREAKFAST"
  },
  // DRINKS
  {
    id: 6,
    name: "Saffron Tea",
    description: "Refreshing and warm saffron infused tea",
    price: "2.50$",
    image: "/images/menucard/saffron-tea.png",
    category: "DRINKS"
  },
  {
    id: 7,
    name: "Mango",
    description: "Freshly squeezed mango juice",
    price: "3.50$",
    image: "/images/menucard/mango.png",
    category: "DRINKS"
  },
  {
    id: 8,
    name: "Khaltha",
    description: "Special mixed drink",
    price: "4.00$",
    image: "/images/menucard/khaltha.png",
    category: "DRINKS"
  },
  {
    id: 9,
    name: "Strawberry + Milk",
    description: "Fresh strawberry milkshake",
    price: "3.50$",
    image: "/images/menucard/strawbeery.png",
    category: "DRINKS"
  },
  {
    id: 10,
    name: "Pistachio Avocado",
    description: "Creamy avocado with crushed pistachios",
    price: "4.50$",
    image: "/images/menucard/avacoda.png",
    category: "DRINKS"
  },
  // LUNCH
  {
    id: 11,
    name: "Zinker Burger + Avocado Juice",
    description: "Delicious zinker burger meal",
    price: "12.00$",
    image: "/images/menucard/ziker-avacoda.png",
    category: "LUNCH"
  },
  {
    id: 12,
    name: "Vegetable Club + Fresh Veg. Crispy Bread + Veg. Burger + Cola",
    description: "Complete vegetarian combo",
    price: "15.00$",
    image: "/images/menucard/combo.png",
    category: "LUNCH"
  },
  {
    id: 13,
    name: "Chicken Burger",
    description: "Classic chicken burger",
    price: "8.00$",
    image: "/images/menucard/chicken-burger.png",
    category: "LUNCH"
  },
  {
    id: 14,
    name: "Zinger Sub",
    description: "Spicy zinger sub sandwich",
    price: "9.50$",
    image: "/images/menucard/zinger-sub.png",
    category: "LUNCH"
  },
  {
    id: 15,
    name: "Shawarma",
    description: "Traditional shawarma wrap",
    price: "6.00$",
    image: "/images/menucard/shawarma.png",
    category: "LUNCH"
  },
  // DESSERT
  {
    id: 16,
    name: "Razal Special",
    description: "Made With Fresh Berries",
    price: "7.00$",
    image: "/images/menucard/Razal Special.png",
    category: "DESSERT"
  },
  {
    id: 17,
    name: "Lotus Ice Cream",
    description: "Creamy lotus biscoff ice cream",
    price: "5.50$",
    image: "/images/menucard/Lotus-Ice-Cream.png",
    category: "DESSERT"
  },
  {
    id: 18,
    name: "Fruit Salad With Ice Cream",
    description: "Fresh fruits with vanilla ice cream",
    price: "6.50$",
    image: "/images/menucard/fruit-salad-icecream.png",
    category: "DESSERT"
  },
  {
    id: 19,
    name: "Fruits Salad With Caramel Ice Cream",
    description: "Fresh fruits with caramel drizzle",
    price: "7.00$",
    image: "/images/menucard/Fruits-Salad-With-Caramel-Ice-Cream.png",
    category: "DESSERT"
  },
  {
    id: 20,
    name: "Mango Cream",
    description: "Rich and creamy mango dessert",
    price: "5.00$",
    image: "/images/menucard/mango-icecream.png",
    category: "DESSERT"
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("BREAKFAST");

  // Filter items based on active category
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 bg-white">
      <ScrollReveal className="max-w-7xl mx-auto flex flex-col items-center">
        
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
        <StaggerReveal key={activeCategory} className="w-full flex flex-col items-center">
          {filteredItems.map((item) => (
            <RevealItem key={item.id} className="w-full flex flex-col items-center">
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            </RevealItem>
          ))}
        </StaggerReveal>

        {/* Download Button */}
        <div className="mt-16 text-center">
          <a
            href="/files/menu.pdf"
            download="menu.pdf"
            className="bg-[#0b1c17] text-white px-8 py-4 rounded-sm font-bold text-xs tracking-[0.2em] uppercase transition-transform hover:scale-105 shadow-md inline-block"
          >
            DOWNLOAD MENU
          </a>
        </div>
        
      </ScrollReveal>
    </section>
  );
}
