import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#151515] pt-32 pb-20 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col items-start">
            {/* Logo */}
            <Link href="/" className="relative w-32 h-32 hover:opacity-80 transition-opacity mb-4">
              <Image src="/images/decafe-logo.png" alt="DCafe Logo" fill sizes="128px" className="object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Dear guests, you are welcomed to dine with us at Foxe restaurant. Have a pleasant dining experience.
            </p>
            {/* Signature */}
            <div className="relative w-40 h-12 mt-2">
              <Image 
                src="/images/sign.png" 
                alt="Signature" 
                fill 
                sizes="160px"
                className="object-contain object-left opacity-80" 
              />
            </div>
          </div>

          {/* Column 2: Address */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-8">Address</h4>
            <p className="text-gray-400 text-sm mb-4">+971 56 105 6260</p>
            <a href="mailto:customers@foxeresto.net" className="text-[#dbb374] text-sm mb-6 hover:underline">
              customers@foxeresto.net
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Shop No: 1 AL Diyafa Residences<br />
              Satwa, Dubai, UAE
            </p>
          </div>

          {/* Column 3: Hours */}
          <div className="flex flex-col w-full">
            <h4 className="text-white font-bold text-lg mb-8">Hours of opening</h4>
            <ul className="flex flex-col gap-3 w-full">
              {[
                { day: "Monday", time: "10:00 - 22:00" },
                { day: "Tuesday", time: "10:00 - 22:00" },
                { day: "Wednesday", time: "10:00 - 22:00" },
                { day: "Thursday", time: "10:00 - 22:00" },
                { day: "Friday", time: "09:00 - 02:30" },
                { day: "Saturday", time: "09:00 - 02:30" },
                { day: "Sunday", time: "Closed" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center w-full text-gray-400 text-sm">
                  <span className="w-24 shrink-0">{item.day}</span>
                  <div className="flex-grow border-b border-gray-600 border-dotted mx-4 opacity-50 relative top-[-4px]"></div>
                  <span className="shrink-0">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Instagram */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold text-lg mb-8">Instagram</h4>
            {/* Instagram feed placeholder */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div key={i} className="w-full aspect-square bg-gray-800 rounded-sm"></div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8 gap-6">
          
          {/* Socials */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Google">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>

          {/* Credits */}
          <div className="text-gray-500 text-xs text-center">
            Font by <a href="#" className="text-[#dbb374] hover:underline">flaticon.com</a> Under CC: <a href="#" className="text-[#dbb374] hover:underline">smashicons</a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-xs text-right">
            © 2026 D'cafe. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
