
import React from 'react';
import { MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const mapUrl = "https://maps.app.goo.gl/bXpiqLMHYQ257aNJ9";

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] px-6 py-12 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* About Us Column */}
        <div>
          <h3 className="text-xl font-cinzel font-bold text-white mb-4 relative inline-block">
            ABOUT US
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C5A059]"></span>
          </h3>
          <ul className="space-y-3 mt-6">
            {[
              { name: 'Home', path: '#home' },
              { name: 'About Us', path: '#board' },
              { name: 'Privacy Policy', path: '#privacy' },
              { name: 'Terms & Conditions', path: '#terms' },
              { name: 'Contact Us', path: '#contact-us' }
            ].map((link) => (
              <li key={link.name}>
                <a 
                  href={link.path} 
                  onClick={(e) => handleNavigation(e, link.path)}
                  className="text-slate-400 hover:text-[#F1D592] text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Column */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-cinzel font-bold text-white mb-4 relative inline-block">
            LOCATION
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C5A059]"></span>
          </h3>
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 w-full h-32 bg-slate-800/20 rounded-xl flex flex-col items-center justify-center text-[#C5A059] group border border-white/5 transition-all hover:bg-slate-800/40 hover:border-[#C5A059]/40 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
            <MapPin size={24} className="mb-2 transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Open In Maps</span>
          </a>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-xl font-cinzel font-bold text-white mb-4 relative inline-block">
            CONTACT
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C5A059]"></span>
          </h3>
          <div className="mt-6 space-y-2">
            <p className="text-slate-400 text-sm">diarmarketing12@gmail.com</p>
            <p className="text-slate-400 text-sm">+49 176 6310 1609</p>
            <a 
              href="#contact-us" 
              onClick={(e) => handleNavigation(e, '#contact-us')}
              className="text-[#C5A059] hover:text-[#F1D592] text-xs font-bold tracking-widest uppercase mt-2 block transition-colors"
            >
              Reach Out Directly &rarr;
            </a>
          </div>
        </div>

        {/* Payment Icons Column */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex flex-wrap justify-end gap-2 mb-4">
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
               <span className="text-[#1434CB] font-bold text-[10px] italic">VISA</span>
            </div>
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
               <div className="flex -space-x-1">
                 <div className="w-3 h-3 rounded-full bg-[#EB001B]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#F79E1B] opacity-80"></div>
               </div>
            </div>
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
               <span className="text-[#016FD0] font-bold text-[10px]">AMEX</span>
            </div>
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
               <span className="text-[#0070BA] font-bold text-[10px]">Pay</span><span className="text-[#003087] font-bold text-[10px]">Pal</span>
            </div>
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
               <span className="text-black font-bold text-[10px]">Apple Pay</span>
            </div>
            <div className="bg-white rounded px-2 py-1 flex items-center justify-center">
               <span className="text-slate-600 font-bold text-[10px]">G Pay</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-600 mt-2">© 2026 Diar Marketing Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
