
import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Send, Clock, Globe, ExternalLink } from 'lucide-react';

const ContactUs: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/daniel-rul-42821337a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
  const email = "diarmarketing12@gmail.com";
  const phone = "+49 176 6310 1609";

  return (
    <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-5xl w-full bg-[#0a0f1a]/80 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden relative">
        
        {/* Aesthetic Background Accents */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/5 blur-[120px] rounded-full"></div>
        
        <div className="p-8 md:p-14 lg:p-16 flex flex-col relative z-10">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }}
            className="self-start flex items-center gap-2 text-[#C5A059] hover:text-[#F1D592] transition-colors mb-12 font-semibold tracking-widest text-[10px] md:text-xs uppercase group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Home
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side: Text and Channels */}
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-[#F1D592] text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-6">
                Direct Communication
              </div>
              <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-white tracking-tight uppercase mb-6">
                Connect With <span className="text-[#C5A059]">Us</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed mb-12 max-w-md">
                Whether you're looking to revolutionize your digital presence or have questions about our cognitive AI systems, we are ready to listen.
              </p>

              <div className="space-y-6">
                {/* Email Channel - Informational Only */}
                <div className="flex items-center justify-between p-4 -mx-4 rounded-3xl border border-transparent">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-[#C5A059]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-white/40 font-bold tracking-[0.2em] text-[9px] uppercase mb-1">Electronic Mail</h4>
                      <p className="text-white font-medium text-sm md:text-base">{email}</p>
                    </div>
                  </div>
                </div>

                {/* Phone Channel - Informational Only */}
                <div className="flex items-center justify-between p-4 -mx-4 rounded-3xl border border-transparent">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-[#C5A059]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-white/40 font-bold tracking-[0.2em] text-[9px] uppercase mb-1">Direct Line</h4>
                      <p className="text-white font-medium text-sm md:text-base">{phone}</p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Channel - Clickable */}
                <a 
                  href={linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-4 -mx-4 rounded-3xl bg-[#C5A059]/5 hover:bg-[#C5A059]/10 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-300 group shadow-[0_10px_30px_rgba(197,160,89,0.05)]"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-[#C5A059]/10 rounded-2xl border border-[#C5A059]/30 text-[#C5A059] group-hover:scale-110 transition-all duration-300">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#C5A059] font-black tracking-[0.2em] text-[9px] uppercase mb-1 flex items-center gap-2">
                        Executive Profile 
                        <span className="px-2 py-0.5 rounded-full bg-[#C5A059] text-[#0a0f1a] text-[7px] font-black">CLICK TO VISIT</span>
                      </h4>
                      <p className="text-white font-bold text-sm md:text-lg group-hover:text-[#F1D592] transition-colors">Daniel Rul on LinkedIn</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 font-black text-[9px] tracking-widest uppercase">
                    Visit <ExternalLink size={16} />
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side: Additional Details & Location */}
            <div className="flex flex-col gap-8">
              <div className="bg-white/[0.03] rounded-[2.5rem] border border-white/5 p-8 md:p-10 flex flex-col justify-between h-full shadow-inner">
                <div className="space-y-10">
                  <div className="flex gap-5">
                    <MapPin className="text-[#C5A059] shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-cinzel font-bold text-sm tracking-widest uppercase mb-2">Office Headquarters</h4>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">
                        Mechernich, Germany<br />
                        Digital Operations Hub
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <Clock className="text-[#C5A059] shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-cinzel font-bold text-sm tracking-widest uppercase mb-2">Operational Hours</h4>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">
                        Monday – Friday: 09:00 - 18:00 CET<br />
                        24/7 Digital Support for Active Clients
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <Globe className="text-[#C5A059] shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-cinzel font-bold text-sm tracking-widest uppercase mb-2">Global Presence</h4>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">
                        Serving clients internationally with a focus on high-growth European and North American markets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                   <a 
                    href="#location" 
                    onClick={(e) => { e.preventDefault(); window.location.hash = '#location'; }}
                    className="w-full py-4 bg-[#C5A059] hover:bg-[#F1D592] text-[#0a0f1a] rounded-2xl font-black tracking-[0.3em] uppercase text-[10px] text-center transition-all flex items-center justify-center gap-2 group"
                   >
                     View Global Location <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
