import React from 'react';
import { ivfProcess } from '../mock';
import { CheckCircle } from 'lucide-react';

const IVFProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Make IVF Easy for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, transparent process designed with you in mind - from the first call to holding your baby
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {ivfProcess.map((step, index) => (
              <div 
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-rose-500"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < ivfProcess.length - 1 && (
                  <div className="hidden md:block absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-px h-8 bg-gradient-to-b from-rose-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl border-2 border-rose-200">
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">The Result?</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A stress-free, well-supported IVF journey where you're never alone. Our holistic approach combines medical excellence with emotional support, nutritional guidance, and wellness practices - giving you the best chance at success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IVFProcess;