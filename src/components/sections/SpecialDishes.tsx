import DishCard from "@/components/ui/DishCard";
import Image from "next/image";

const dishes = [
  {
    id: 1,
    name: "Product Name Here",
    price: "$30.00",
    description: "Conveniently imailpact worldwide data aprovements a with holistic theme and improvements with there holistic",
    image: "/images/special/spl-1.jpg",
  },
  {
    id: 2,
    name: "Product Name Here",
    price: "$30.00",
    description: "Conveniently imailpact worldwide data aprovements a with holistic theme and improvements with there holistic",
    image: "/images/special/spl-2.jpg",
  },
  {
    id: 3,
    name: "Product Name Here",
    price: "$30.00",
    description: "Conveniently imailpact worldwide data aprovements a with holistic theme and improvements with there holistic",
    image: "/images/special/spl-3.jpg",
  },
];

export default function SpecialDishes() {
  return (          
    <section id="special" className="relative py-32 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 bg-dark overflow-hidden">
      {/* Background Image Overlay Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/special/spl-dish-bg.jpg"
          alt="Special Dishes Background"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#09241FD9] opacity-100" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold mb-6 drop-shadow-sm">
            Our Special Dishes
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Rapidiously plagiarize scalable manufactured products for realtime ramatically actualize open-source metrics through fully tested vortals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.description}
              image={dish.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
