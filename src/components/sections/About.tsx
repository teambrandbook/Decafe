import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start max-w-xl">
          {/* Label */}
          <span className="inline-block bg-[#fcfaf3] text-[#c99f5e] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Our Story
          </span>
          
          {/* Title */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl leading-tight text-black mb-6">
            A joyous eatery inspired by the culture of italian cuisine
          </h2>
          
          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
            The time has come to bring those ideas and plans to life. This is where we really begin to visualize your napkin sketches and make them into beautiful pixels. Now that your brand is all dressed up and ready to party.
          </p>
          
          {/* Author Block */}
          <div className="flex items-center gap-4 mt-2">
            <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-sm">
              <Image 
                src="/images/about/chef.jpg" 
                alt="Benaissa Ghrib"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-black font-bold text-lg">Benaissa Ghrib</span>
              <span className="text-gray-400 text-sm">Master Chef</span>
            </div>
          </div>
        </div>

        {/* Right Grid (Masonry effect) */}
        <div className="grid grid-cols-2 gap-2 md:gap-2">
          {/* Column 1 */}
          <div className="flex flex-col gap-2 md:gap-2">
            <div className="relative w-full aspect-[3/4] rounded-0 overflow-hidden shadow-sm">
              <Image 
                src="/images/about/story-1.jpg" 
                alt="Wine glasses"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-0 overflow-hidden shadow-sm">
              <Image 
                src="/images/about/story-2.jpg" 
                alt="Pasta dish"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Column 2 - Staggered */}
          <div className="flex flex-col gap-4 md:gap-2 mt-16 md:mt-24">
            <div className="relative w-full aspect-[4/3] rounded-0 overflow-hidden shadow-sm">
              <Image 
                src="/images/about/story-3.jpg" 
                alt="Salad dish"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative w-full aspect-[3/4] rounded-0 overflow-hidden shadow-sm">
              <Image 
                src="/images/about/story-4.jpg" 
                alt="Dining table"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
