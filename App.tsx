
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroCards from './components/HeroCards';
import Footer from './components/Footer';
import WebDesigns from './WebDesigns';
import ArchitecturalAI from './ArchitecturalAI';
import AIVoice from './AIVoice';
import Board from './Board';
import History from './History';
import Location from './Location';
import Announcement from './Announcement';
import ContactUs from './ContactUs';

const LoadingScreen: React.FC = () => (
  <div className="fixed inset-0 z-[100] bg-[#0a0f1a] flex flex-col items-center justify-center transition-opacity duration-500">
    <div className="relative flex flex-col items-center">
      <div className="flex flex-col items-center animate-pulse antialiased">
        <h1 className="text-4xl md:text-5xl font-cinzel font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#F1D592] to-[#C5A059] leading-normal pb-1">
          DÍAR
        </h1>
        <span className="text-xs md:text-sm font-cinzel tracking-[0.5em] text-[#C5A059] -mt-2">
          MARKETING
        </span>
      </div>
      <div className="w-48 h-[1px] bg-white/10 mt-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F1D592] to-transparent w-full animate-[loading_1.5s_infinite]"></div>
      </div>
    </div>
    <style>{`
      @keyframes loading {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}</style>
  </div>
);

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash || '#home';
      
      // Start loading transition
      setIsTransitioning(true);
      
      // Artificial delay for cinematic effect and to ensure clean mount
      setTimeout(() => {
        setCurrentPath(newPath);
        window.scrollTo(0, 0);
        
        // End loading transition
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      }, 800);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#web-designs':
        return <WebDesigns />;
      case '#architectural-ai-automations':
        return <ArchitecturalAI />;
      case '#ai-voice-receptionists-cognitive-management':
        return <AIVoice />;
      case '#board':
        return <Board />;
      case '#history':
        return <History />;
      case '#location':
        return <Location />;
      case '#announcement':
        return <Announcement />;
      case '#contact-us':
        return <ContactUs />;
      default:
        return (
          <main className="flex-grow flex items-center justify-center px-4 md:px-10 lg:px-20 py-10">
            <HeroCards />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0f1a] to-[#111827]">
      {/* Background Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      
      {isTransitioning && <LoadingScreen />}

      <div className={`relative z-10 flex flex-col min-h-screen transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <div className="flex-grow flex flex-col">
          {renderContent()}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
