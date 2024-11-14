import React from 'react';
import BikeCard from '../components/BikeCard';

const bikes = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80',
    title: 'Trek Émonda SL 6',
    price: 2499,
    condition: 'Like New',
    location: 'San Francisco, CA',
    year: 2022
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?auto=format&fit=crop&q=80',
    title: 'Specialized Stumpjumper',
    price: 3299,
    condition: 'Excellent',
    location: 'Denver, CO',
    year: 2023
  },
  // Add more bikes here
];

export default function BikeListing() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Available Bikes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bikes.map((bike) => (
            <BikeCard key={bike.id} {...bike} />
          ))}
        </div>
      </div>
    </div>
  );
}