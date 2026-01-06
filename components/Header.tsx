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

  return (
    <header className={`flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-12 bg-black/30 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50 transition-transform duration-700 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <a href="#home" onClick={(e) => handleNavigation(e, '#home')} className="flex flex-col items-center md:items-start group cursor-pointer antialiased">
        <h1 
          className="text-3xl md:text-4xl font-cinzel font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#F1D592] to-[#C5A059] leading-normal pb-1 transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ 
            textShadow: '0 0 20px rgba(197, 160, 89, 0.2), 0 2px 10px rgba(0,0,0,0.5)',
            WebkitBackgroundClip: 'text'
          }}
        >
          DÍAR
        </h1>
        <span className="text-xs font-cinzel tracking-[0.4em] text-[#C5A059] -mt-2">MARKETING</span>
      </a>
     
      <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
        {['HOME', 'ABOUT US', 'SERVICES', 'ANNOUNCEMENT', 'CONTACT US'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            onClick={(e) => handleNavigation(e, `#${item.toLowerCase().replace(' ', '-')}`)}
            className="text-sm md:text-base font-semibold tracking-wider text-white hover:text-[#F1D592] transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
