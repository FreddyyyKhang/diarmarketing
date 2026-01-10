import React from 'react';
import { ArrowLeft, Layout, CheckCircle2, Sparkles } from 'lucide-react';

const WebDesigns: React.FC = () => {
  const stripeUrl = "https://buy.stripe.com/8x28wPcfoc336Nn8lpdZ604";

  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-5xl w-full bg-[#1a2333]/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
              className="self-start flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-8 font-semibold tracking-widest text-xs uppercase group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Home
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
              <div className="space-y-3 self-start">
                <div className="flex items-center gap-2 text-[#F1D592] text-[11px] font-black uppercase tracking-[0.2em] py-2 px-3 bg-[#C5A059]/10 rounded-lg">
                  <Sparkles size={14} className="animate-pulse" /> 7 days money back policy
                </div>
                <p className="text-[10px] text-slate-500 font-medium tracking-wide italic">
                  100% money-back guarantee if you are not completely satisfied.
                </p>
              </div>
            </div>

            {/* Investment Card - Optimized for single-line mobile pricing */}
            <div className="bg-[#121826] rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col items-center">
              <div className="relative z-10 w-full flex flex-col items-center">
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-4 opacity-80 text-center">
                  PACKAGE PRICE
                </span>
                
                <div className="text-[22px] min-[375px]:text-[26px] sm:text-[40px] md:text-[48px] font-cinzel font-bold text-white mb-8 leading-tight text-center drop-shadow-lg whitespace-nowrap tracking-tight">
                  1500€ / 1500$
                </div>
                
                <div className="w-full h-[1px] bg-white/5 mb-8"></div>
                
                <div className="mb-10">
                  <div className="px-8 py-2 md:px-10 md:py-2.5 rounded-full border border-[#C5A059]/40 bg-transparent">
                    <span className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-[#C5A059] font-black whitespace-nowrap">
                      Billed Monthly
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between w-full px-2">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-slate-500 font-bold">TIMEFRAME</span>
                  <span className="text-white text-xs md:text-base font-bold uppercase tracking-widest">1 MONTH</span>
                </div>
              </div>
              
              {/* Subtle aesthetic glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
            </div>

            <a 
              href={stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-full py-5 bg-[#C5A059] hover:bg-[#F1D592] text-[#0a0f1a] font-black tracking-[0.3em] rounded-2xl transition-all shadow-xl active:scale-[0.98] uppercase text-sm flex items-center justify-center"
            >
              Get Started
            </a>
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
