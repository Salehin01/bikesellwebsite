import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, MapPin, User } from 'lucide-react';

export default function BikeDetail() {
  const { id } = useParams();

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80"
              alt="Bike"
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80" alt="Thumbnail" className="rounded cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80" alt="Thumbnail" className="rounded cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?auto=format&fit=crop&q=80" alt="Thumbnail" className="rounded cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1624589457465-7faf40438dba?auto=format&fit=crop&q=80" alt="Thumbnail" className="rounded cursor-pointer" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Trek Émonda SL 6</h1>
              <p className="text-3xl font-bold text-blue-600">$2,499</p>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Contact Seller
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="h-6 w-6" />
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="h-6 w-6" />
              </button>
            </div>

            <div className="border-t border-b py-4 space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">Listed by John Doe</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Condition</p>
                  <p className="font-semibold">Like New</p>
                </div>
                <div>
                  <p className="text-gray-600">Year</p>
                  <p className="font-semibold">2022</p>
                </div>
                <div>
                  <p className="text-gray-600">Frame Size</p>
                  <p className="font-semibold">56cm</p>
                </div>
                <div>
                  <p className="text-gray-600">Frame Material</p>
                  <p className="font-semibold">Carbon Fiber</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">
                This Trek Émonda SL 6 is in excellent condition and has been well maintained. 
                Features include Shimano Ultegra components, carbon wheels, and hydraulic disc brakes. 
                Perfect for both racing and endurance riding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}