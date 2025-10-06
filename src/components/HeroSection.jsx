import React from 'react';
import { Button } from './ui/button';
import { Phone, Heart } from 'lucide-react';
import { heroData } from '../mock';
import LeadForm from './LeadForm';

const HeroSection = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${heroData.meriSakhiPhone}`;
  };

  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <Heart className="w-4 h-4 text-rose-600 mr-2" fill="currentColor" />
              <span className="text-sm font-medium text-gray-700">Trusted by 3,500+ Families</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {heroData.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {heroData.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleCallClick}
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Meri Sakhi Now
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg font-semibold"
              >
                Book Free Consultation
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-rose-600">3,500+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600">4.6★</div>
                <div className="text-sm text-gray-600">Patient Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div id="form-section" className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;