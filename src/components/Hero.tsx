import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Ride at the Best Price
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover a wide selection of quality second-hand and branded bikes. 
              Buy or sell with confidence in our trusted marketplace.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                Browse Bikes
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition flex items-center gap-2">
                Sell Your Bike <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80"
              alt="Featured Bike"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}