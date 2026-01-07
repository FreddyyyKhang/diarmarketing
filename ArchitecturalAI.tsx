
import React from 'react';
import { ArrowLeft, Cpu, Package, Zap } from 'lucide-react';

const ArchitecturalAI: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-4xl w-full bg-[#0a0f1a]/80 backdrop-blur-xl rounded-3xl border border-[#C5A059]/30 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Cpu size={240} className="text-[#F1D592]" />
        </div>

        <div className="p-8 md:p-16 flex flex-col items-center text-center">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="self-start flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-12 font-semibold tracking-widest text-xs uppercase"
          >
            <ArrowLeft size={16} /> Back to Home
          </a>

          <div className="flex flex-col items-center gap-4 mb-4">
             <div className="inline-block px-4 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-[#F1D592] text-[10px] font-bold tracking-[0.4em] uppercase">
              The Ultimate Master Suite
            </div>
             <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[9px] text-[#C5A059] font-black uppercase tracking-widest">
               <Zap size={10} className="fill-[#C5A059]" /> 1 Week Free Trial
             </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white tracking-[0.2em] uppercase mb-8 leading-tight">
            Architectural AI <br/><span className="text-[#F1D592]">Automations</span>
          </h2>

          <div className="max-w-2xl space-y-8 mb-10">
            <div className="p-6 bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-2xl flex flex-col md:flex-row items-center gap-6">
              <Package size={40} className="text-[#C5A059] shrink-0" />
              <div className="text-left">
                <h4 className="text-white font-cinzel font-bold tracking-widest uppercase text-sm mb-1">Unified Intelligence Package</h4>
                <p className="text-slate-400 text-xs md:text-sm font-light">
                  A comprehensive master-package combining our <span className="text-[#F1D592] font-semibold">Web Designs</span> and <span className="text-[#F1D592] font-semibold">AI Voice Receptionists & Cognitive Management</span> into one seamless, powerful architectural suite.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-lg font-light">
              <p>
                In the modern marketplace, time is the only currency that cannot be minted. Yet, most businesses remain shackled by the manual—losing leads to missed calls and drowning in the noise of daily operations.
              </p>
              <p className="font-semibold text-white">
                Diar Marketing provides the keys to your digital kingdom. We specialize in Architectural AI Automations that don’t just save time; they claim it.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center gap-8 w-full justify-center max-w-md mx-auto">
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 w-full text-center shadow-inner group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-black block mb-2">Master Package Price</span>
              <div className="text-[24px] sm:text-[32px] md:text-[38px] font-cinzel font-bold text-white whitespace-nowrap mb-4 group-hover:scale-105 transition-transform duration-500">
                3000€ / 3000$
              </div>
              
              <div className="h-[1px] bg-white/5 w-full my-6"></div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Monthly Maintenance</span>
                  <span className="text-[#F1D592] text-sm font-bold tracking-widest">1000€ / 1000$</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Timeframe</span>
                  <span className="text-white text-xs font-bold uppercase tracking-widest">1 Month</span>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-12 px-12 py-5 bg-white text-[#0a0f1a] hover:bg-[#F1D592] font-black tracking-[0.3em] rounded-full transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95 uppercase text-xs">
            Reclaim Your Sovereignty
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalAI;
