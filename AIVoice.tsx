
import React from 'react';
import { ArrowLeft, Mic2, PhoneIncoming, Clock, Zap } from 'lucide-react';

const AIVoice: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-4xl w-full bg-gradient-to-br from-[#1a2333] to-[#0a0f1a] backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-10 font-semibold tracking-widest text-xs uppercase"
          >
            <ArrowLeft size={16} /> Back to Home
          </a>

          <div className="flex flex-col md:flex-row gap-12">
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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

            <div className="w-full md:w-80 flex flex-col gap-6">
              <div className="p-6 md:p-8 bg-black/40 rounded-3xl border border-[#C5A059]/20 flex flex-col items-center text-center shadow-inner">
                <span className="text-[9px] md:text-[10px] text-[#C5A059] tracking-[0.4em] font-black uppercase mb-3">Package Price</span>
                <div className="text-[22px] sm:text-[26px] md:text-[30px] font-cinzel font-bold text-white mb-6 whitespace-nowrap">
                  1500€ / 1500$
                </div>
                <button className="w-full py-4 bg-[#C5A059] hover:bg-[#F1D592] text-[#0a0f1a] font-black tracking-[0.2em] rounded-xl transition-all uppercase text-xs">
                  Inquire Now
                </button>
              </div>
              
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                <p className="text-[9px] text-slate-400 tracking-widest leading-relaxed uppercase font-bold">
                  Service timeframe: <span className="text-[#F1D592]">1 Month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVoice;
