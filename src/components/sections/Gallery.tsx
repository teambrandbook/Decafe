import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  "/images/hero/hero-section.jpg",
  "/images/gallery/gal-2.jpg",
  "/images/gallery/gal-3.jpg",
  "/images/gallery/gal-4.jpg",
  "/images/gallery/gal-5.jpg",
  "/images/menus/farmhouse-omlette.jpg",
  "/images/gallery/gal-7.jpg",
  "/images/menus/benedict.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 bg-dark flex flex-col items-center">
      
      {/* Image Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-16">
        {galleryImages.map((src, index) => (
          <div key={index} className="relative w-full aspect-square overflow-hidden group cursor-pointer">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Optional overlay effect on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* Action Button */}
      <Link 
        href="#menu"
        className="bg-white text-dark px-8 py-3.5 rounded-sm font-bold text-xs tracking-[0.2em] uppercase transition-transform hover:scale-105 shadow-md"
      >
        Explore the Menu
      </Link>
      
    </section>
  );
}
