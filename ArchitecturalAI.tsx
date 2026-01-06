
import React from 'react';
import { ArrowLeft, Cpu } from 'lucide-react';

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

          <div className="mb-4 inline-block px-4 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-[#F1D592] text-[10px] font-bold tracking-[0.4em] uppercase">
            Next Generation Systems
          </div>
          
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white tracking-[0.2em] uppercase mb-8 leading-tight">
            Architectural AI <br/><span className="text-[#F1D592]">Automations</span>
          </h2>

          <div className="max-w-2xl space-y-8">
            <h3 className="text-xl md:text-2xl font-cinzel text-[#F1D592] italic tracking-widest">
              "The New Era of Sovereignty"
            </h3>

            <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-lg font-light">
              <p>
                In the modern marketplace, time is the only currency that cannot be minted. Yet, most businesses remain shackled by the manual—losing leads to missed calls and drowning in the noise of daily operations.
              </p>
              <p className="font-semibold text-white">
                Diar Marketing provides the keys to your digital kingdom. We specialize in Architectural AI Automations that don’t just save time; they claim it.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-8 w-full justify-center max-w-md mx-auto">
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 w-full text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-black block mb-2">Strategic Package</span>
              <div className="text-[24px] sm:text-[32px] md:text-[38px] font-cinzel font-bold text-white whitespace-nowrap">
                1500€ / 1500$
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Timeframe</span>
                <span className="text-[#F1D592] text-xs font-bold uppercase tracking-widest">1 Month</span>
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
