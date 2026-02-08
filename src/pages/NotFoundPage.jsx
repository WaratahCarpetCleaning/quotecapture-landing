
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Central Coast Carpet Cleaning homepage."
        canonical="/404"
      />
      <section className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl sm:text-8xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">Sorry, the page you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 rounded-lg transition-all">
              <Link to="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3 rounded-lg transition-all">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
