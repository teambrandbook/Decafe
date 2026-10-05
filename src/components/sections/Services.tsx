import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Quality Check",
    description: "Web development refers to the tasks of developing websites for hosting via intranet or internet.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"/>
      </svg>
    ),
  },
  {
    title: "Opens 24/7",
    description: "Web design require many different skills and disciplines in the production and maintenance of websites.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 7V3h10v4"/><path d="M10 11v2"/><path d="M14 11v2"/>
      </svg>
    ),
  },
  {
    title: "Free Parking",
    description: "Web design require many different skills and disciplines in the production and maintenance of websites.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
      </svg>
    ),
  },
  {
    title: "Food Meets Style",
    description: "Web development refers to the tasks of developing websites for hosting via intranet or internet.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-5a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4v5"/><path d="M19 16h2a2 2 0 0 0 2-2 3 3 0 0 0-3-3 2 2 0 0 0-2-2 3 3 0 0 0-6 0 2 2 0 0 0-2 2 3 3 0 0 0-3 3 2 2 0 0 0 2 2h2"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative pt-32 pb-56 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-2xl flex flex-col items-center">
          <span className="inline-block bg-[#fcfaf3] text-[#c99f5e] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-black mb-6">
            Customers Services
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            The time has come to bring those ideas and plans to life. This is where we really begin to visualize.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full mb-24">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto text-center relative z-20">
          <div className="w-16 border-t-[1.5px] border-[#dbb374] mb-8"></div>
          <p className="text-gray-400 text-xs md:text-sm tracking-wide">
            * Dear guests, you are welcomed to dine with us at Foxe restaurant. Have a pleasant dining experience.
          </p>
        </div>
      </div>

      {/* Bottom Arch / Curve transitioning to next dark section */}
      <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden leading-none z-10 text-[#151515]">
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
    </section>
  );
}
