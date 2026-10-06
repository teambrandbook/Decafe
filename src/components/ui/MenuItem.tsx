import Image from "next/image";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="flex items-start gap-3 md:gap-6 w-full max-w-3xl mx-auto mb-6 group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 shadow-sm">
        <Image
          src={image}
          alt={name}
          fill
          sizes="64px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center pt-1 md:pt-2 min-w-0">
        <div className="flex items-baseline w-full gap-2 md:gap-4">
          <h4 className="font-bold text-black text-base md:text-lg whitespace-nowrap group-hover:text-gold transition-colors">
            {name}
          </h4>
          
          {/* Connecting Line */}
          <div className="flex-grow border-b border-gray-200 relative -top-1.5 md:-top-2"></div>
          
          <span className="font-bold text-black text-base md:text-lg whitespace-nowrap">
            {price}
          </span>
        </div>
        
        <p className="text-gray-400 text-xs md:text-sm mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}
