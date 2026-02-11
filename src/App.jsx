import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/contact';
import Blogs from './pages/blogs';
import Blog from './pages/blog';
import Gallery from './pages/gallery';
import Loader from './pages/loader';
import NotFoundPage from './pages/notfound';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  

  useEffect(() => {
    // Only show loader on initial load (when accessing the site for the first time)
    // const isInitialLoad = sessionStorage.getItem('hasVisited') === null;
    
    if (location.pathname === '/') {
      // Show loader for 5 seconds only on initial site visit
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 5000);
      
      return () => clearTimeout(timer);
    } else {
      // Already visited before, don't show loader
      setIsLoading(false);
    }
  }, []);

  // Show loader only on initial load
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}