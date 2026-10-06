import Image from "next/image";

interface DishCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function DishCard({ name, price, description, image }: DishCardProps) {
  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-square bg-white mb-6 overflow-hidden shadow-lg">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Text Content */}
      <h3 className="text-white font-sans font-bold text-xl mb-2">{name}</h3>
      <span className="text-gold font-sans font-bold text-lg mb-4 block">{price}</span>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}
