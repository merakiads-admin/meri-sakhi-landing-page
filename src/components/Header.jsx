import React from 'react';
import { Button } from './ui/button';
import { Phone, Mail } from 'lucide-react';
import { heroData } from '../mock';

const Header = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${heroData.meriSakhiPhone}`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://shecare360.in/wp-content/uploads/2025/01/She-Care-LOGO-e1741247028880.png" 
              alt="Shecare360 Logo" 
              className="h-12 md:h-14"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#why-choose" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Why Choose Us
            </a>
            <a href="#process" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Our Process
            </a>
            <a href="#meri-sakhi" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Meri Sakhi
            </a>
            <a href="#faq" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleCallClick}
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;