import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[100vh] flex items-center justify-center py-32 bg-dark">
      {/* Background Image Overlay Container */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/hero/hero-section.jpg"
          alt="DCafe Hero Background"
          fill
          priority
          className="object-cover"
        />
        {/* 90% Green Opacity Overlay */}
        <div className="absolute inset-0 bg-[#09241FD9] opacity-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-glitten text-5xl md:text-6xl lg:text-7xl text-white mb-3 drop-shadow-lg">
          Welcome To DCafe
        </h1>
        
        <p className="text-white text-[10px] md:text-xs tracking-[0.3em] font-lato-bold mb-6 uppercase">
          &bull; Cafe &bull; Billiards &bull;
        </p>

        <p className="text-white text-base md:text-lg max-w-xl mx-auto mb-8 drop-shadow-md font-raleway">
          Planning a visit? Call us to reserve your table and enjoy your dining experience.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full font-lato-bold scale-90 md:scale-95">
          <a href="tel:+97142298388" className="flex items-center gap-3 bg-white text-dark px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-lg w-full md:w-auto justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v2"/><path d="M4 18h16"/><path d="M18.8 14c-.6-1.5-1.5-3.3-2.8-4.5A7.5 7.5 0 0 0 12 7a7.5 7.5 0 0 0-4 2.5C6.7 10.7 5.8 12.5 5.2 14c-.4.9-1.2 1.6-2.2 2H21c-1-.4-1.8-1.1-2.2-2z"/>
            </svg>
            +971 42298388
          </a>
          
          <span className="text-white font-bold tracking-widest text-sm uppercase hidden md:inline-block font-raleway">CALL TO RESERVE</span>

          <a href="https://wa.me/971561056260" className="flex items-center gap-3 bg-white text-dark px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-lg w-full md:w-auto justify-center font-lato-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              <path d="M16.5 14.5c0-1.5-1-2-1.5-2-.5 0-1.5 1-2 1.5-.5.5-2-1.5-3-2.5s-3-2.5-2.5-3c.5-.5 1.5-1.5 1.5-2 0-.5-.5-1.5-2-1.5-1.5 0-2 1-2 1.5 0 1.5 1.5 4 4 6.5s5 4 6.5 4c.5 0 1.5-.5 1.5-2z"/>
            </svg>
            +971 561056260
          </a>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-none z-10 text-white">
        <svg
          className="relative block w-full h-[30px] sm:h-[50px] md:h-[80px] lg:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L100,120 A 1602 1602 0 0 1 1100 120 L1200,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      
      {/* Pagination Dots */}
      <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        <div className="w-2 h-2 rounded-full bg-gray-400 transition-colors"></div>
        <div className="w-2 h-2 rounded-full bg-gold transition-colors"></div>
      </div>
    </section>
  );
}
