import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import BikeCard from '../components/BikeCard';

const featuredBikes = [
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
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80',
    title: 'Cannondale SuperSix',
    price: 1899,
    condition: 'Good',
    location: 'Austin, TX',
    year: 2021
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1624589457465-7faf40438dba?auto=format&fit=crop&q=80',
    title: 'RadPower RadCity',
    price: 1499,
    condition: 'Excellent',
    location: 'Seattle, WA',
    year: 2023
  }
];

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Bikes</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold">
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBikes.map((bike) => (
              <BikeCard key={bike.id} {...bike} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Bike?</h2>
          <p className="text-xl mb-8 text-blue-100">
            List your bike in minutes and reach thousands of potential buyers
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            Start Selling
          </button>
        </div>
      </section>
    </div>
  );
}