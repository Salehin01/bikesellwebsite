import React from 'react';
import { Settings, Package, Heart, LogOut } from 'lucide-react';

export default function Profile() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-600">Member since 2023</p>
              </div>
              
              <nav className="space-y-2">
                <button className="w-full flex items-center space-x-2 px-4 py-2 text-left rounded-lg hover:bg-gray-50">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
                <button className="w-full flex items-center space-x-2 px-4 py-2 text-left rounded-lg hover:bg-gray-50">
                  <Package className="h-5 w-5" />
                  <span>My Listings</span>
                </button>
                <button className="w-full flex items-center space-x-2 px-4 py-2 text-left rounded-lg hover:bg-gray-50">
                  <Heart className="h-5 w-5" />
                  <span>Favorites</span>
                </button>
                <button className="w-full flex items-center space-x-2 px-4 py-2 text-left text-red-600 rounded-lg hover:bg-red-50">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold mb-4">My Listings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Add bike listings here */}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {/* Add activity items here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}