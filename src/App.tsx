import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import LegacyPreloader from './components/LegacyPreloader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Fallback component while a route loads
const LoaderFallback = () => (
  <div className="flex justify-center items-center h-full min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <LegacyPreloader />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<LoaderFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
