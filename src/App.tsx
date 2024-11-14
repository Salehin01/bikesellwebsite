import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BikeListing from './pages/BikeListing';
import BikeDetail from './pages/BikeDetail';
import SellBike from './pages/SellBike';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<BikeListing />} />
          <Route path="/bikes/:id" element={<BikeDetail />} />
          <Route path="/sell" element={<SellBike />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;