import React from 'react';
import { Heart } from 'lucide-react';

interface BikeCardProps {
  image: string;
  title: string;
  price: number;
  condition: string;
  location: string;
  year: number;
}

export default function BikeCard({ image, title, price, condition, location, year }: BikeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-xl font-bold text-blue-600 mb-2">${price.toLocaleString()}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{condition}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{year}</span>
        </div>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
}