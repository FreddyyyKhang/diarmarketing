
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "Diar Marketing transformed our online presence beyond expectations! Their attention to detail is unmatched. We saw an immediate impact on our brand perception and engagement metrics.",
    stars: 5,
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Founder, GreenEdge",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    quote: "Our sales increased by 35% in just six months. Professional, creative, and highly recommended for growth. They tailored every campaign to our specific audience needs.",
    stars: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Director, LuxeLiving",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    quote: "Highly recommended for luxury brands. They understand the nuances of high-end marketing perfectly. The aesthetic sensibility they brought to our channels was exactly what we needed.",
    stars: 5,
  },
  {
    id: 4,
    name: "David Vark",
    role: "CTO, InnovateX",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    quote: "The strategic approach they take is refreshing. Data-driven and result-oriented from day one. I've worked with many agencies, but Diar stands out for technical proficiency.",
    stars: 5,
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsExpanded(false);
  }, [activeIndex]);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const itemWidth = windowWidth < 640 ? windowWidth * 0.7 : Math.min(windowWidth * 0.4, 300);

  return (
    <div className="bg-[#0a0f1a]/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/5 p-6 md:p-8 flex flex-col h-full relative overflow-hidden min-h-[550px]">
      <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-center tracking-[0.25em] mb-12 text-white uppercase">
        What Our Clients Say
      </h2>

      <div className="flex-grow relative flex items-center justify-center overflow-visible">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-0 md:px-2 z-30 pointer-events-none">
          <button 
            onClick={prev}
            className="p-3 bg-black/60 hover:bg-black/80 rounded-full transition-all pointer-events-auto backdrop-blur-md border border-white/10 group shadow-2xl"
          >
            <ChevronLeft className="w-6 h-6 text-white/80 group-hover:text-[#F1D592]" />
          </button>
          <button 
            onClick={next}
            className="p-3 bg-black/60 hover:bg-black/80 rounded-full transition-all pointer-events-auto backdrop-blur-md border border-white/10 group shadow-2xl"
          >
            <ChevronRight className="w-6 h-6 text-white/80 group-hover:text-[#F1D592]" />
          </button>
        </div>

        <div className="w-full flex justify-center items-center overflow-visible">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ 
              transform: `translateX(calc(50% - ${activeIndex * itemWidth + (itemWidth / 2)}px))` 
            }}
          >
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div 
                  key={t.id}
                  style={{ width: `${itemWidth}px` }}
                  className={`flex-shrink-0 flex flex-col items-center px-4 transition-all duration-700 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-[0.75] opacity-25 grayscale'
                  }`}
                >
                  <div className="relative mb-6">
                    <div className={`absolute -inset-4 rounded-full blur-2xl transition-opacity duration-700 ${isActive ? 'bg-[#F1D592] opacity-40' : 'opacity-0'}`}></div>
                    <div className={`relative p-1 rounded-full border-2 transition-colors duration-700 ${isActive ? 'border-[#C5A059]' : 'border-white/10'}`}>
                      <img 
                        src={t.image} 
                        alt={t.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-2xl"
                      />
                    </div>
                    {isActive && (
                      <div className="absolute -right-1 -bottom-1 bg-[#F1D592] rounded-full p-2.5 shadow-xl border-2 border-[#0a0f1a]">
                        <Quote size={14} className="text-[#0a0f1a] fill-current" />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 md:w-5 h-5 ${isActive ? 'fill-[#F1D592] text-[#F1D592]' : 'fill-white/5 text-white/5'}`} />
                    ))}
                  </div>

                  <div className={`text-center w-full transition-all duration-700 ${isActive ? 'translate-y-0' : 'translate-y-8'}`}>
                    <h4 className={`font-cinzel font-bold text-base md:text-xl tracking-widest uppercase ${isActive ? 'text-white' : 'text-white/20'}`}>
                      {t.name}
                    </h4>
                    <p className={`text-[10px] md:text-[11px] uppercase tracking-[0.25em] mt-1 mb-6 font-bold ${isActive ? 'text-[#C5A059]' : 'text-white/10'}`}>
                      {t.role}
                    </p>
                    
                    <div className="relative max-w-[240px] mx-auto min-h-[120px]">
                      <div 
                        className={`text-xs md:text-[13px] italic leading-relaxed text-slate-300 transition-all duration-500 overflow-y-auto custom-testimonial-scrollbar pr-2 ${
                          isActive ? (isExpanded ? 'max-h-48 opacity-100' : 'max-h-16 opacity-100') : 'max-h-0 opacity-0'
                        }`}
                      >
                        "{t.quote}"
                      </div>
                      
                      {isActive && !isExpanded && (
                        <div className="h-8 -mt-8 bg-gradient-to-t from-[#0a0f1a] to-transparent pointer-events-none"></div>
                      )}

                      {isActive && (
                        <div className="mt-8 flex justify-center">
                          <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group inline-flex items-center gap-2.5 text-[12px] md:text-[13px] text-[#C5A059] hover:text-[#F1D592] font-black tracking-[0.3em] uppercase transition-all"
                          >
                            <span className="border-b-2 border-transparent group-hover:border-[#F1D592] pb-1">
                              {isExpanded ? 'SEE LESS' : 'SEE MORE'}
                            </span>
                            {isExpanded ? 
                              <ChevronUp size={18} className="stroke-[3]" /> : 
                              <ChevronDown size={18} className="stroke-[3] transition-transform group-hover:translate-y-1" />
                            }
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 flex flex-col items-center">
        <div className="flex gap-4 mb-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === idx ? 'bg-[#F1D592] w-12' : 'bg-white/10 w-4 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .custom-testimonial-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-testimonial-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-testimonial-scrollbar::-webkit-scrollbar-thumb { background: rgba(197, 160, 89, 0.4); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default Testimonials;