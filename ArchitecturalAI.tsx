
import React from 'react';
import { ArrowLeft, Cpu, Package, Sparkles } from 'lucide-react';

const ArchitecturalAI: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-4xl w-full bg-[#0a0f1a]/80 backdrop-blur-xl rounded-[3rem] border border-[#C5A059]/30 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Cpu size={240} className="text-[#F1D592]" />
        </div>

        <div className="p-8 md:p-16 flex flex-col items-center text-center">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="self-start flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-12 font-semibold tracking-widest text-[10px] md:text-xs uppercase group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Home
          </a>

          <div className="flex flex-col items-center gap-4 mb-4">
             <div className="inline-block px-4 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-[#F1D592] text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase">
              The Ultimate Master Suite
            </div>
            <div className="flex items-center gap-2 text-[#F1D592] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] py-1.5 px-4 bg-[#C5A059]/10 rounded-lg">
                <Sparkles size={14} className="animate-pulse" /> 1 week free trial
              </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white tracking-[0.2em] uppercase mb-8 leading-tight">
            Architectural AI <br/><span className="text-[#F1D592]">Automations</span>
          </h2>

          <div className="max-w-2xl space-y-8 mb-12">
            <div className="p-6 bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-2xl flex flex-col md:flex-row items-center gap-6 text-left shadow-inner">
              <Package size={40} className="text-[#C5A059] shrink-0" />
              <div>
                <h4 className="text-white font-cinzel font-bold tracking-widest uppercase text-sm mb-1">Unified Intelligence Package</h4>
                <p className="text-slate-400 text-xs md:text-sm font-light">
                  A comprehensive master-package combining our <span className="text-[#F1D592] font-semibold">Web Designs</span> and <span className="text-[#F1D592] font-semibold">AI Voice Receptionists & Cognitive Management</span> into one seamless, powerful architectural suite.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg mx-auto mb-12">
            {/* Investment Card - Single line pricing on mobile */}
            <div className="bg-[#121826] rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col items-center">
              <div className="relative z-10 w-full flex flex-col items-center">
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-5 opacity-80">
                  MASTER PACKAGE PRICE
                </span>
                
                <div className="text-[22px] min-[375px]:text-[28px] sm:text-[48px] md:text-[56px] font-cinzel font-bold text-white mb-10 leading-tight text-center drop-shadow-lg tracking-wider whitespace-nowrap">
                  2500€ / 2500$
                </div>
                
                <div className="w-full h-[1px] bg-white/5 mb-10"></div>
                
                <div className="mb-12">
                  <div className="px-10 py-2.5 md:px-12 md:py-3 rounded-full border border-[#C5A059]/40 bg-transparent flex items-center justify-center">
                    <span className="text-[11px] md:text-[14px] uppercase tracking-[0.3em] text-[#C5A059] font-black whitespace-nowrap">
                      BILLED MONTHLY
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between w-full px-2">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-slate-500 font-bold">TIMEFRAME</span>
                  <span className="text-white text-xs md:text-lg font-bold uppercase tracking-widest">1 MONTH</span>
                </div>
              </div>
              
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
            </div>
          </div>

          <button className="px-12 py-5 bg-white text-[#0a0f1a] hover:bg-[#F1D592] font-black tracking-[0.4em] rounded-full transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] active:scale-95 uppercase text-[10px] md:text-xs">
            Begin Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalAI;
