import React from 'react';
import { Heart, Network, Users, DollarSign, Sparkles, Smile } from 'lucide-react';
import { whyChooseUs } from '../mock';

const iconMap = {
  Heart: Heart,
  Network: Network,
  Users: Users,
  DollarSign: DollarSign,
  Sparkles: Sparkles,
  Smile: Smile
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Shecare360 for Your IVF Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another clinic - we're your trusted partner in making your dream of parenthood come true
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-300"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <IconComponent className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;