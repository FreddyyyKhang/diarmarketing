
import React from 'react';
import { ArrowLeft, Landmark, Heart, Zap, ShieldCheck, Users } from 'lucide-react';

const History: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-4xl w-full bg-[#0a0f1a]/80 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden relative">
        
        {/* Subtle top light effect */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>
        
        <div className="p-8 md:p-16 lg:p-20 flex flex-col">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="self-start flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-12 font-semibold tracking-widest text-[10px] md:text-xs uppercase group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Home
          </a>

          <div className="flex flex-col items-center">
            <Landmark size={48} className="text-[#C5A059] mb-8 animate-pulse" />
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white tracking-[0.2em] uppercase mb-4">
                Our <span className="text-[#C5A059]">Story</span>
              </h2>
              <p className="text-[#F1D592] font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase font-bold opacity-80">
                Energy, Integrity, and the "Rumb"
              </p>
            </div>

            <div className="space-y-12 text-slate-300 font-light leading-relaxed text-sm md:text-lg">
              <p className="text-center italic text-white/80 border-l-2 border-[#C5A059] pl-6 py-2 bg-white/5 rounded-r-xl">
                Diar Marketing wasn’t born in a corporate boardroom; it was born from a desire to do things differently.
              </p>

              <section className="group">
                <h3 className="text-[#F1D592] font-cinzel font-bold text-xl tracking-widest uppercase mb-4 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#C5A059]/50"></div>
                  The Early Hustle
                </h3>
                <p className="text-justify">
                  Our founder started where the best marketers do: in the trenches of high-stakes sales and agency life. While the results spoke for themselves—hitting targets and driving growth—there was a constant hurdle: being the youngest person in the room. In an industry that often confuses age with expertise, our founder was frequently overlooked, despite having the drive and the data to back it up.
                </p>
              </section>

              <section className="group">
                <h3 className="text-[#F1D592] font-cinzel font-bold text-xl tracking-widest uppercase mb-4 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#C5A059]/50"></div>
                  The Turning Point
                </h3>
                <p className="text-justify">
                  Working inside traditional agencies revealed a frustrating truth. We saw clients—small business owners and entrepreneurs—paying premium prices for services that didn't deliver real value. We saw "overpriced" becoming the industry standard and "personal connection" becoming a relic of the past.
                </p>
                <p className="mt-4 font-semibold text-white tracking-wide">
                  We knew there was a better way.
                </p>
              </section>

              <section className="group bg-white/5 p-8 rounded-[2rem] border border-white/5 shadow-inner">
                <h3 className="text-[#F1D592] font-cinzel font-bold text-xl tracking-widest uppercase mb-6 text-center">
                  A New Standard for Marketing
                </h3>
                <p className="text-justify mb-8">
                  Diar Marketing was founded on the belief that you shouldn't have to choose between high-quality results and a fair price. We decided to stop building someone else's vision and start building a company that puts people first.
                </p>
                <p className="mb-8 font-medium text-white/90">We didn't just want to be another agency; we wanted to be a partner. A place where:</p>
                
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="mt-1 shrink-0 text-[#C5A059]"><ShieldCheck size={20} /></div>
                    <p><span className="text-white font-bold uppercase tracking-widest text-xs block mb-1">Fairness is the Foundation</span> No hidden fees, no overpricing—just honest work for an honest price.</p>
                  </div>
                  <div className="flex gap-5">
                    <div className="mt-1 shrink-0 text-[#C5A059]"><Zap size={20} /></div>
                    <p><span className="text-white font-bold uppercase tracking-widest text-xs block mb-1">Energy is Infectious</span> We call it the "rumb"—that unmistakable rhythm and vibration of a project that is moving in the right direction.</p>
                  </div>
                  <div className="flex gap-5">
                    <div className="mt-1 shrink-0 text-[#C5A059]"><Users size={20} /></div>
                    <p><span className="text-white font-bold uppercase tracking-widest text-xs block mb-1">Everyone is Welcome</span> We treat our clients like family. Whether you are a startup or an established brand, you’ll feel the energy the moment you step into our world.</p>
                  </div>
                </div>
              </section>

              <div className="pt-10 flex flex-col items-center text-center">
                <Heart size={32} className="text-[#C5A059]/50 mb-6" />
                <p className="text-xl md:text-2xl font-cinzel text-white italic max-w-2xl leading-relaxed">
                  "Diar Marketing isn't just about the bottom line. It’s about the soul of the business. It’s about making a difference in a market that has forgotten how to be human."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
