
import React from 'react';
import { ArrowLeft, MapPin, Mail, Phone, Globe, ExternalLink } from 'lucide-react';

const Location: React.FC = () => {
  const mapUrl = "https://maps.app.goo.gl/bXpiqLMHYQ257aNJ9";

  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-5xl w-full bg-[#1a2333]/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact Info */}
          <div className="p-8 md:p-16">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
              className="flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-12 font-semibold tracking-widest text-xs uppercase"
            >
              <ArrowLeft size={16} /> Back to Home
            </a>

            <h2 className="text-3xl font-cinzel font-bold text-white tracking-[0.2em] uppercase mb-8">
              Digital <span className="text-[#C5A059]">Presence</span>
            </h2>

            <div className="space-y-10">
              <div className="flex gap-5">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#F1D592]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-1">Headquarters</h4>
                  <p className="text-slate-400 text-sm font-light">Mechernich, Germany</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#F1D592]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-1">Electronic Mail</h4>
                  <p className="text-slate-400 text-sm font-light">diarmarketing12@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#F1D592]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-1">Direct Line</h4>
                  <p className="text-slate-400 text-sm font-light">+49 176 6310 1609</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#F1D592]">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-1">Availability</h4>
                  <p className="text-slate-400 text-sm font-light">24/7 Digital Operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Map */}
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-black flex items-center justify-center p-8 overflow-hidden grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700 group cursor-pointer"
          >
             <img 
               src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" 
               alt="Map Visual"
               className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-l from-[#1a2333]/80 via-transparent to-transparent"></div>
             
             {/* "Click to View" Label */}
             <div className="absolute top-8 right-8 flex items-center gap-2 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                <span className="text-[10px] font-black tracking-widest uppercase">View on Google Maps</span>
                <ExternalLink size={14} />
             </div>

             <div className="relative z-10 p-10 border-2 border-[#C5A059]/30 rounded-full animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform duration-500">
                <div className="p-4 bg-[#C5A059] rounded-full shadow-[0_0_50px_rgba(197,160,89,0.5)]">
                  <MapPin size={32} className="text-[#0a0f1a]" />
                </div>
             </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Location;
