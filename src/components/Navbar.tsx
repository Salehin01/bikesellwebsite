import React from 'react';
import { Bike, Search, ShoppingCart, User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bike className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">BikeMarket</span>
          </Link>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search bikes..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/sell" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Sell Your Bike
            </Link>
            <Link to="/favorites" className="text-gray-600 hover:text-blue-600">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-blue-600">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}