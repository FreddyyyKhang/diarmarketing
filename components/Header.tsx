
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      const threshold = 100; // Distance from top to force show the header

      // If near the top, always show the header
      if (currentScrollY <= threshold) {
        setIsVisible(true);
      } 
      // If scrolling down and past the threshold, hide the header
      else if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader, { passive: true });
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  // Manual navigation handler to ensure compatibility with environments like AI Studio
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
    
    // If already on the target path, manually scroll to top for a smooth experience
    if (window.location.hash === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    <header className={`flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-12 bg-black/30 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Interactive Logo - Directs to Home */}
      <a 
        href="#home" 
        onClick={(e) => handleNavigation(e, '#home')}
        className="flex flex-col items-center md:items-start mb-6 md:mb-0 group cursor-pointer antialiased"
      >
        <h1 
          className="text-3xl md:text-4xl font-cinzel font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#F1D592] to-[#C5A059] leading-normal pb-1 transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          DÍAR
        </h1>
        <span className="text-xs font-cinzel tracking-[0.4em] text-[#C5A059] -mt-2">
          MARKETING
        </span>
      </a>
     
      <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
        {['HOME', 'ABOUT US', 'SERVICES', 'ANNOUNCEMENT', 'CONTACT US'].map((item) => {
          // Shared Dropdown Rendering Logic
          const isDropdown = item === 'SERVICES' || item === 'ABOUT US';
          const dropdownLinks = item === 'SERVICES' ? services : aboutUsLinks;

          if (isDropdown) {
            return (
              <div key={item} className="relative group flex items-center">
                <button
                  className="text-sm md:text-base font-semibold tracking-wider text-white hover:text-[#F1D592] transition-colors duration-200 flex items-center gap-1"
                >
                  {item}
                  <svg 
                    className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Bar */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                  <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2">
                    {dropdownLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.path}
                        onClick={(e) => handleNavigation(e, link.path)}
                        className="block px-6 py-3 text-xs md:text-sm font-semibold text-slate-300 hover:text-[#F1D592] hover:bg-white/5 transition-all duration-200 border-l-2 border-transparent hover:border-[#C5A059]"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          const path = item === 'HOME' ? '#home' : `#${item.toLowerCase().replace(' ', '-')}`;

          return (
            <a
              key={item}
              href={path}
              onClick={(e) => handleNavigation(e, path)}
              className="text-sm md:text-base font-semibold tracking-wider text-white hover:text-[#F1D592] transition-colors duration-200"
            >
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
