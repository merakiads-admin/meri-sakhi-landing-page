import React from 'react';
import { Button } from './ui/button';
import { Phone, Calendar } from 'lucide-react';
import { heroData } from '../mock';
import LeadForm from './LeadForm';

const CTASection = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${heroData.meriSakhiPhone}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Ready to Start Your IVF Journey?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Don't wait another day. Every moment matters when it comes to your dream of parenthood. Connect with us now for a free, no-obligation consultation.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Call Meri Sakhi Helpline</h3>
                    <p className="text-gray-600">Speak to our care coordinator immediately</p>
                    <p className="text-2xl font-bold text-rose-600 mt-2">{heroData.meriSakhiPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Or Fill the Form</h3>
                    <p className="text-gray-600">We'll call you back within 24 hours to schedule your free consultation</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleCallClick}
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <LeadForm variant="compact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;