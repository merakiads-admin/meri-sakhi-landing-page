import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { heroData } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://shecare360.in/wp-content/uploads/2025/01/She-Care-LOGO-e1741247028880.png" 
              alt="Shecare360 Logo" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering women through their fertility journey with expert guidance, compassionate care, and holistic support. You deserve all the care you need.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/officialSheCare360" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/officialshecare360/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://shecare360.in/about-us/" className="text-gray-400 hover:text-rose-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://shecare360.in/experts/" className="text-gray-400 hover:text-rose-500 transition-colors">
                  Our Experts
                </a>
              </li>
              <li>
                <a href="https://shecare360.in/meri-sakhi/" className="text-gray-400 hover:text-rose-500 transition-colors">
                  Meri Sakhi Service
                </a>
              </li>
              <li>
                <a href="https://shecare360.in/#treatments" className="text-gray-400 hover:text-rose-500 transition-colors">
                  Treatments
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Meri Sakhi Helpline</p>
                  <a href={`tel:${heroData.meriSakhiPhone}`} className="text-gray-300 hover:text-rose-500">
                    {heroData.meriSakhiPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@shecare360.in" className="text-gray-300 hover:text-rose-500">
                    info@shecare360.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    B03/276, Shivalik Vihar<br />
                    Near PGI, Chandigarh<br />
                    Mohali, India 160103
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Shecare360. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="https://shecare360.in/privacy-policy/" className="text-gray-400 hover:text-rose-500 transition-colors">
                Privacy Policy
              </a>
              <a href="https://shecare360.in/terms-conditions/" className="text-gray-400 hover:text-rose-500 transition-colors">
                Terms & Conditions
              </a>
              <a href="https://shecare360.in/refund-policy/" className="text-gray-400 hover:text-rose-500 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;