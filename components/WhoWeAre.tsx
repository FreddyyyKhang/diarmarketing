
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#1a2333]/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/5 p-8 flex flex-col h-full">
      <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-center tracking-[0.2em] mb-10 text-white uppercase">
        Who We Are
      </h2>
      
      <div className="flex flex-col items-center gap-10">
        <div className="w-full">
          <div className="relative group overflow-hidden rounded-xl aspect-video shadow-2xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
              alt="Marketing Team" 
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
        
        <div className="w-full flex flex-col">
          <div 
            className={`transition-all duration-700 ease-in-out overflow-y-auto custom-scrollbar text-[13px] md:text-sm leading-relaxed text-slate-300 font-light text-justify pr-3 ${
              isExpanded ? 'max-h-[400px]' : 'max-h-32'
            }`}
          >
            <p>
              Diar Marketing is a premier digital agency dedicated to elevating brands in the modern landscape. We blend artistic vision with data-driven strategy to create impactful campaigns that resonate globally.
            </p>
            <p className="mt-4">
              With 5 years of experience, our specialists excel in social media management, premium brand identity, and performance marketing. We build partnerships that foster long-term growth and market dominance.
            </p>
            <p className="mt-4">
              Our approach is rooted in meticulous research and creative excellence. Every pixel we place and every word we write is calculated to drive engagement and conversion.
            </p>
          </div>

          {!isExpanded && (
            <div className="h-10 -mt-10 bg-gradient-to-t from-[#1a2333] to-transparent pointer-events-none"></div>
          )}

          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2.5 text-[12px] md:text-[13px] text-[#C5A059] hover:text-[#F1D592] font-black tracking-[0.3em] uppercase transition-all"
            >
              <span className="border-b-2 border-transparent group-hover:border-[#F1D592] pb-1">
                {isExpanded ? 'SEE LESS' : 'SEE MORE'}
              </span>
              {isExpanded ? (
                <ChevronUp size={18} className="stroke-[3]" />
              ) : (
                <ChevronDown size={18} className="stroke-[3] transition-transform group-hover:translate-y-1" />
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(197, 160, 89, 0.3); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default WhoWeAre;
