import React from 'react';

const categories = [
  { name: 'Road Bikes', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80' },
  { name: 'Mountain Bikes', image: 'https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?auto=format&fit=crop&q=80' },
  { name: 'Electric Bikes', image: 'https://images.unsplash.com/photo-1624589457465-7faf40438dba?auto=format&fit=crop&q=80' },
  { name: 'Hybrid Bikes', image: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&q=80' },
];

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="text-white text-xl font-semibold p-6">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}