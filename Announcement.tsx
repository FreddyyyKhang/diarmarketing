
import React from 'react';
import { ArrowLeft, Megaphone, BellOff, BellRing } from 'lucide-react';

const Announcement: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-4xl w-full bg-[#0a0f1a]/80 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden relative min-h-[500px] flex flex-col">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C5A059]/5 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
        
        <div className="p-8 md:p-16 lg:p-20 flex flex-col flex-grow relative z-10">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="self-start flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-12 font-semibold tracking-widest text-[10px] md:text-xs uppercase group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Home
          </a>

          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-[#C5A059]/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
              <div className="relative p-6 bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
                <BellOff size={48} className="text-[#C5A059] opacity-80" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white tracking-[0.2em] uppercase mb-6">
              Official <span className="text-[#C5A059]">Announcements</span>
            </h2>
            
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-8"></div>
            
            <p className="text-[#F1D592] font-cinzel text-lg md:text-xl tracking-[0.15em] mb-4 opacity-90">
              No announcement currently.
            </p>
            
            <p className="text-slate-400 font-light max-w-md leading-relaxed tracking-wide text-sm md:text-base">
              Our digital bulletin is currently empty. Please come back later or subscribe to our newsletter for real-time updates on Diar Marketing's evolution.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button 
                disabled
                className="px-8 py-3 border border-white/10 text-white/40 rounded-full font-bold tracking-widest text-[10px] uppercase cursor-not-allowed"
              >
                Archive Access
              </button>
              <button 
                onClick={() => window.location.hash = '#home'}
                className="px-8 py-3 bg-[#C5A059] hover:bg-[#F1D592] text-[#0a0f1a] rounded-full font-black tracking-widest text-[10px] uppercase transition-all shadow-[0_10px_30px_rgba(197,160,89,0.2)]"
              >
                Stay Notified
              </button>
            </div>
          </div>
        </div>
        
        {/* Subtle footer text */}
        <div className="p-8 text-center border-t border-white/5 bg-white/[0.02]">
           <span className="text-[10px] font-bold tracking-[0.4em] text-slate-600 uppercase">
             Last update: January 2026
           </span>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
