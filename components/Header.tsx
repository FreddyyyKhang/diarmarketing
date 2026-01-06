import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Web Designs', path: '#web-designs' },
    { name: 'Architectural AI Automations', path: '#architectural-ai-automations' },
    { name: 'AI Voice Receptionists & Cognitive Management', path: '#ai-voice-receptionists-cognitive-management' }
  ];

  const aboutUsLinks = [
    { name: 'Board', path: '#board' },
    { name: 'History', path: '#history' },
    { name: 'Location', path: '#location' }
  ];

  return (
    <header className={`flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-12 bg-black/30 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50 transition-transform duration-700 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <a href="#home" onClick={(e) => handleNavigation(e, '#home')} className="flex flex-col items-center md:items-start group cursor-pointer antialiased">
        <h1 
          className="text-3xl md:text-4xl font-cinzel font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#F1D592] to-[#C5A059] leading-normal pb-1 transition-all duration-300"
          style={{ 
            textShadow: '0 2px 15px rgba(197, 160, 89, 0.1)',
            WebkitBackgroundClip: 'text'
          }}
        >
          DÍAR
        </h1>
        <span className="text-[10px] font-cinzel tracking-[0.5em] text-[#C5A059]/80 -mt-2">MARKETING</span>
      </a>
     
      <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
        {['HOME', 'ABOUT US', 'SERVICES', 'ANNOUNCEMENT', 'CONTACT US'].map((item) => {
          const isDropdown = item === 'SERVICES' || item === 'ABOUT US';
          const dropdownLinks = item === 'SERVICES' ? services : aboutUsLinks;

          if (isDropdown) {
            return (
              <div key={item} className="relative group flex items-center">
                <button className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-white/80 hover:text-[#F1D592] transition-colors flex items-center gap-1 uppercase">
                  {item}
                  <svg className="w-3 h-3 opacity-40 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                  <div className="bg-[#0a0f1a]/95 backdrop-blur-xl border border-white/10 rounded-xl py-2 shadow-2xl">
                    {dropdownLinks.map((link) => (
                      <a key={link.name} href={link.path} onClick={(e) => handleNavigation(e, link.path)} className="block px-6 py-3 text-[10px] font-bold tracking-widest text-slate-400 hover:text-[#F1D592] hover:bg-white/5 transition-all uppercase border-l-2 border-transparent hover:border-[#C5A059]">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={(e) => handleNavigation(e, item === 'HOME' ? '#home' : `#${item.toLowerCase().replace(' ', '-')}`)} className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-white/80 hover:text-[#F1D592] transition-colors uppercase">
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
