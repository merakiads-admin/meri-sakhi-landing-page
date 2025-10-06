import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { heroData } from '../mock';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    window.location.href = `tel:${heroData.meriSakhiPhone}`;
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsDismissed(true);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5">
      <div className="relative">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg z-10"
        >
          <X className="w-4 h-4" />
        </button>
        
        <button
          onClick={handleCallClick}
          className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 group"
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <Phone className="w-6 h-6" />
          </div>
          <div className="text-left">
            <div className="text-xs font-medium opacity-90">Call Meri Sakhi</div>
            <div className="text-sm font-bold">{heroData.meriSakhiPhone}</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;