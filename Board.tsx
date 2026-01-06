
import React, { useState } from 'react';
import { ArrowLeft, Medal, GraduationCap, Briefcase, Linkedin, Mail, User, ExternalLink } from 'lucide-react';

const Board: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  // User-provided portrait URL
  const portraitUrl = "https://i.postimg.cc/hjw7nxfL/Whats-App-Image-2026-01-06-at-17-36-29.jpg";
  const linkedinUrl = "https://www.linkedin.com/in/daniel-rul-42821337a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";

  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-6xl w-full bg-[#0a0f1a]/90 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden relative">
        
        {/* Subtle top light effect */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>
        
        <div className="p-8 md:p-14 lg:p-16 flex flex-col">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="self-start flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-12 font-semibold tracking-widest text-[10px] md:text-xs uppercase group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Home
          </a>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
            {/* Portrait Section - Adaptive to Content */}
            <div className="relative group shrink-0 w-full lg:w-auto max-w-sm">
              {/* Glow Behind Image */}
              <div className="absolute -inset-6 bg-[#C5A059]/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#111827] flex items-center justify-center min-h-[300px]">
                {!imageError ? (
                  <img 
                    src={portraitUrl} 
                    alt="Daniel Rul - Founder & CEO" 
                    className="w-full h-auto max-h-[700px] object-contain transition-all duration-700 group-hover:scale-[1.03] block"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-20 text-center bg-gradient-to-b from-[#1a2333] to-[#0a0f1a] w-full aspect-[3/4]">
                    <div className="w-24 h-24 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center mb-4">
                      <User size={48} className="text-[#C5A059]" />
                    </div>
                    <span className="text-white/40 font-cinzel text-xs tracking-widest uppercase">Image Unavailable</span>
                  </div>
                )}
                
                {/* Elegant Inner Gradient shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Premium Gold Badge - Pinned to bottom right of the frame */}
              <div className="absolute -bottom-4 -right-4 p-5 bg-[#C5A059] rounded-2xl shadow-[0_15px_40px_rgba(197,160,89,0.5)] border border-white/20 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                <Medal size={30} className="text-[#0a0f1a]" />
              </div>
            </div>

            {/* Biography & Credentials */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-6">
              <div className="inline-block px-5 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#F1D592] text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase mb-8">
                Executive Leadership
              </div>
              
              <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-white tracking-[0.05em] uppercase mb-3">
                Daniel <span className="text-[#C5A059]">Rul</span>
              </h2>
              <p className="text-[#F1D592] font-cinzel text-base md:text-lg tracking-[0.4em] uppercase mb-12 font-bold opacity-90">
                Founder & Chief Executive Officer
              </p>

              <div className="space-y-12 w-full max-w-xl">
                {/* Education Block */}
                <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 group/item">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-[#C5A059] shrink-0 transition-all group-hover/item:border-[#C5A059]/60 group-hover/item:bg-[#C5A059]/10">
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <h4 className="text-white/40 font-bold tracking-[0.25em] text-[10px] uppercase mb-2">Academic Foundation</h4>
                    <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed">
                      Holds a comprehensive <span className="text-white font-semibold">Master's Degree in Marketing and Engineering</span>, offering a balanced approach to technical logic and market psychology.
                    </p>
                  </div>
                </div>

                {/* Experience Block */}
                <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 group/item">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-[#C5A059] shrink-0 transition-all group-hover/item:border-[#C5A059]/60 group-hover/item:bg-[#C5A059]/10">
                    <Briefcase size={26} />
                  </div>
                  <div>
                    <h4 className="text-white/40 font-bold tracking-[0.25em] text-[10px] uppercase mb-2">Market Authority</h4>
                    <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed">
                      An expert in <span className="text-white font-semibold">Sales and Marketing</span>, Daniel leads Diar Marketing with a focus on high-conversion strategies and elite client relationship management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-16 flex flex-col sm:flex-row gap-5 w-full justify-center lg:justify-start">
                <a 
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center px-10 py-5 bg-[#C5A059] hover:bg-[#F1D592] text-[#0a0f1a] rounded-2xl transition-all shadow-[0_10px_30px_rgba(197,160,89,0.3)] active:scale-95 group relative overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Linkedin size={20} className="transition-transform group-hover:scale-110" /> 
                    <span className="font-black tracking-[0.3em] uppercase text-[11px]">Connect on LinkedIn</span>
                    <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[7px] font-black tracking-[0.2em] mt-1 opacity-60 group-hover:opacity-100 uppercase transition-opacity">Click to visit profile</span>
                </a>
                
                <a 
                  href="#contact-us"
                  onClick={(e) => { e.preventDefault(); window.location.hash = '#contact-us'; }}
                  className="flex items-center justify-center gap-3 px-10 py-5 border border-white/10 hover:bg-white/5 text-white font-black tracking-[0.3em] rounded-2xl transition-all uppercase text-[11px] backdrop-blur-sm group"
                >
                  <Mail size={18} /> 
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
