import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LandingPage from '@/pages/LandingPage';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-20">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">Page not found.</p>
      <a
        href="/"
        className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Back to Home
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
