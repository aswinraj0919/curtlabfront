import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/contact';
import Curtains from './pages/Curtains';
import Blinds from './pages/Blinds';
import Blogs from './pages/blogs';
import Blog from './pages/blog';
import Gallery from './pages/gallery';
import NotFoundPage from './pages/notfound';

// import UnderMaintenance from './pages/underMaintenance'
import './App.css';

export default function App() {
  return (
      <Router>
      <Routes>
        {/* <Route path="/" element={<UnderMaintenance />} /> */}
         <Route path="/" element={<Home />} />
         <Route path="/products" element={<Products />} />
         <Route path="/products/curtains" element={<Curtains />} />
         <Route path="/products/blinds" element={<Blinds />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/blogs" element={<Blogs />} />
         <Route path="/blogs/blog" element={<Blog />} />
         <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
