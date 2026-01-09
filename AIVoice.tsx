
import React from 'react';
import { ArrowLeft, Mic2, PhoneIncoming, Clock, Zap, Sparkles } from 'lucide-react';

const AIVoice: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-5xl w-full bg-gradient-to-br from-[#1a2333] to-[#0a0f1a] backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12 lg:p-16">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="self-start flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-10 font-semibold tracking-widest text-[10px] md:text-xs uppercase group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Home
          </a>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white tracking-[0.15em] uppercase mb-2 leading-tight">
                AI Voice Receptionists & <span className="text-[#C5A059]">Cognitive Management</span>
              </h2>
              <p className="text-[#F1D592] font-cinzel text-sm tracking-[0.2em] uppercase mb-8 font-bold">
                Elite Intelligence, Bespoke Solutions
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-[#C5A059] rounded-full"></div>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                    <strong className="text-white block mb-1 uppercase tracking-wider text-xs">The Voice of Authority</strong>
                    Our AI Voice Receptionists offer a flawless, 24/7 human-grade experience. Never again miss a high-value opportunity due to a busy signal.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-[#C5A059] rounded-full"></div>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                    <strong className="text-white block mb-1 uppercase tracking-wider text-xs">Cognitive Management</strong>
                    We integrate AI into your core operations, transforming chaotic management into a streamlined, self-evolving engine.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-[#F1D592]/10 rounded-xl border border-[#F1D592]/20 text-[#F1D592] text-[10px] font-black uppercase tracking-[0.2em]">
                <Sparkles size={14} className="animate-pulse" /> 1 week free trial
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Clock size={18}/>, title: '24/7 Availability' },
                  { icon: <PhoneIncoming size={18}/>, title: 'Smart Routing' },
                  { icon: <Mic2 size={18}/>, title: 'Natural Speech' },
                  { icon: <Zap size={18}/>, title: 'Self-Evolving' }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-[#F1D592]">{feature.icon}</span>
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-96 flex flex-col gap-8">
              {/* Investment Card - Mobile optimized pricing */}
              <div className="bg-[#050a14] rounded-[2.5rem] p-8 md:p-10 border border-white/5 shadow-inner flex flex-col items-center relative overflow-hidden">
                <div className="relative z-10 w-full flex flex-col items-center">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-black mb-4 opacity-80">Initial Investment</span>
                  
                  <div className="text-[20px] min-[375px]:text-[24px] md:text-[36px] font-cinzel font-bold text-white mb-8 leading-tight text-center drop-shadow-md whitespace-nowrap">
                    1500€ / 1500$
                  </div>
                  
                  <div className="w-full h-[1px] bg-white/5 mb-8"></div>
                  
                  <div className="mb-10">
                    <div className="px-8 py-2 md:py-2.5 rounded-full border border-[#C5A059]/40 bg-transparent">
                      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-black whitespace-nowrap">
                        Billed Monthly
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between w-full px-2">
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-slate-500 font-bold">TIMEFRAME</span>
                    <span className="text-white text-xs md:text-sm font-bold uppercase tracking-widest">1 MONTH</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-5 bg-[#C5A059] hover:bg-[#F1D592] text-[#0a0f1a] font-black tracking-[0.3em] rounded-2xl transition-all shadow-xl active:scale-[0.98] uppercase text-xs">
                Inquire & Start Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVoice;
