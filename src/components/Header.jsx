
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path) => cn(
    "transition-colors font-medium text-sm lg:text-base",
    isActive(path) 
      ? "text-[#2563eb] font-semibold" 
      : "text-gray-600 hover:text-gray-900"
  );

  const getMobileLinkClasses = (path) => cn(
    "font-medium text-lg py-2 border-b border-gray-100",
    isActive(path)
      ? "text-[#2563eb] font-semibold"
      : "text-gray-800 hover:text-[#2563eb]"
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50 relative">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">ServiceBot</span>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features" 
              className={getLinkClasses('/features')}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={getLinkClasses('/pricing')}
            >
              Pricing
            </Link>
            <Link 
              to="/docs" 
              className={getLinkClasses('/docs')}
            >
              Docs
            </Link>
            <Link 
              to="/contact" 
              className={getLinkClasses('/contact')}
            >
              Contact
            </Link>
            <Button asChild
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <a href="https://servicebot-saas-mvp.vercel.app" target="_blank" rel="noopener noreferrer">Start Free</a>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center z-50 relative">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 top-0 z-40 bg-white md:hidden pt-20 px-6 pb-6 shadow-xl animate-in slide-in-from-top-10 duration-200">
              <div className="flex flex-col space-y-6 h-full">
                <Link 
                  to="/features" 
                  className={getMobileLinkClasses('/features')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  to="/pricing" 
                  className={getMobileLinkClasses('/pricing')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  to="/docs" 
                  className={getMobileLinkClasses('/docs')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Docs
                </Link>
                <Link 
                  to="/contact" 
                  className={getMobileLinkClasses('/contact')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4">
                  <Button asChild
                    className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-6 text-lg rounded-lg shadow-sm"
                  >
                    <a href="https://servicebot-saas-mvp.vercel.app" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Start Free</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
