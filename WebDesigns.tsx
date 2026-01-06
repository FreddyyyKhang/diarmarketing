
import React from 'react';
import { ArrowLeft, Layout, CheckCircle2 } from 'lucide-react';

const WebDesigns: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-5xl w-full bg-[#1a2333]/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
              className="flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-8 font-semibold tracking-widest text-xs uppercase"
            >
              <ArrowLeft size={16} /> Back to Home
            </a>
            
            <div className="mb-6 flex items-center gap-3">
              <div className="p-3 bg-[#C5A059]/10 rounded-xl border border-[#C5A059]/20">
                <Layout className="text-[#F1D592]" size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-white tracking-widest uppercase">
                Web Designs
              </h2>
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base font-light mb-10">
              <p>
                We offer professional web design services for businesses. Our focus is on creating engaging and user-friendly websites that reflect our clients' identity and goals.
              </p>
              <p>
                Using modern technologies and a creative approach, We help companies strengthen their online presence and successfully establish their brand.
              </p>
            </div>

            {/* Redesigned Investment Card */}
            <div className="bg-[#1e2736] rounded-[2rem] p-8 md:p-10 border border-white/5 shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#C5A059] font-bold block mb-2 opacity-80">
                  INVESTMENT
                </span>
                <div className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[40px] font-cinzel font-bold text-[#F1D592] mb-8 leading-tight drop-shadow-sm whitespace-nowrap">
                  1000€ / 1000$
                </div>
                
                <div className="h-[1px] bg-white/10 w-full mb-6"></div>
                
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.4em] text-slate-500 font-bold">TIMEFRAME</span>
                  <span className="text-white text-sm font-bold uppercase tracking-widest">1 MONTH</span>
                </div>
              </div>
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            </div>

            <button className="mt-8 w-full py-5 bg-[#b59358] hover:bg-[#c5a059] text-[#0a0f1a] font-bold tracking-[0.3em] rounded-2xl transition-all shadow-xl active:scale-[0.98] uppercase text-sm md:text-base">
              Start Your Project
            </button>
          </div>

          {/* Right: Visual & Features */}
          <div className="relative bg-[#111827]/50 flex items-center justify-center p-8 lg:p-16">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 w-full max-w-sm space-y-8">
              {[
                'Responsive Design', 
                'Custom Branding', 
                'SEO Optimized', 
                'Fast Performance'
              ].map(item => (
                <div key={item} className="flex items-center gap-5 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#F1D592]/40 flex items-center justify-center bg-[#F1D592]/5 group-hover:bg-[#F1D592]/10 transition-colors">
                    <CheckCircle2 size={18} className="text-[#F1D592]" />
                  </div>
                  <span className="text-white/90 font-semibold tracking-wider text-base md:text-lg lg:text-xl">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesigns;
