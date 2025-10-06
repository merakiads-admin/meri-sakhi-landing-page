import React from 'react';
import { Button } from './ui/button';
import { Phone, Heart, MessageCircle, Calendar, Shield } from 'lucide-react';
import { heroData } from '../mock';

const MeriSakhi = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${heroData.meriSakhiPhone}`;
  };

  const features = [
    {
      icon: Heart,
      title: "Emotional Support",
      description: "Someone who understands what you're going through and is always there to listen"
    },
    {
      icon: Calendar,
      title: "Appointment Coordination",
      description: "We schedule and remind you of all consultations, tests, and procedures"
    },
    {
      icon: MessageCircle,
      title: "24/7 Availability",
      description: "Questions at 2 AM? Concerns before a procedure? We're just a call away"
    },
    {
      icon: Shield,
      title: "Advocacy & Guidance",
      description: "We ensure you get the best care and help you understand every step"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Heart className="w-5 h-5 mr-2" fill="currentColor" />
            <span className="font-semibold">Our Signature Service</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Meri Sakhi - Your Personal IVF Companion
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            IVF can feel overwhelming and lonely. That's why every woman at Shecare360 gets a dedicated Meri Sakhi - your personal guide, confidant, and advocate throughout your fertility journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <IconComponent className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/30">
            <p className="text-2xl font-semibold mb-6">
              "With Meri Sakhi, you're never alone in your IVF journey"
            </p>
            <Button 
              onClick={handleCallClick}
              size="lg"
              className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Connect with Meri Sakhi: {heroData.meriSakhiPhone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeriSakhi;