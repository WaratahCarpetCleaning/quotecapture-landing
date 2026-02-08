
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const toolsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsToolsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) {
        setIsToolsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

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
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Central Coast Carpet Cleaning</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className={getLinkClasses('/')}>Home</Link>
            <Link to="/services" className={getLinkClasses('/services')}>Services</Link>
            <Link to="/about" className={getLinkClasses('/about')}>About</Link>
            <Link to="/contact" className={getLinkClasses('/contact')}>Contact</Link>
            <Link to="/gallery" className={getLinkClasses('/gallery')}>Gallery</Link>

            {/* Tools Dropdown */}
            <div className="relative" ref={toolsRef}>
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className={cn(
                  "flex items-center gap-1 transition-colors font-medium text-sm lg:text-base",
                  isActive('/tools/quotecapture')
                    ? "text-[#2563eb] font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Tools
                <ChevronDown className={cn("w-4 h-4 transition-transform", isToolsOpen && "rotate-180")} />
              </button>
              {isToolsOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  <Link
                    to="/tools/quotecapture"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#2563eb] transition-colors"
                  >
                    QuoteCapture
                  </Link>
                </div>
              )}
            </div>

            {/* Phone */}
            <a href="tel:0412345678" className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              <Phone className="w-4 h-4" />
              0412 345 678
            </a>

            {/* CTA */}
            <Button asChild className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center z-50 relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 top-0 z-40 bg-white md:hidden pt-20 px-6 pb-6 shadow-xl animate-in slide-in-from-top-10 duration-200">
              <div className="flex flex-col space-y-6 h-full overflow-y-auto">
                <Link to="/" className={getMobileLinkClasses('/')}>Home</Link>
                <Link to="/services" className={getMobileLinkClasses('/services')}>Services</Link>
                <Link to="/about" className={getMobileLinkClasses('/about')}>About</Link>
                <Link to="/contact" className={getMobileLinkClasses('/contact')}>Contact</Link>
                <Link to="/gallery" className={getMobileLinkClasses('/gallery')}>Gallery</Link>

                {/* Mobile Tools Section */}
                <div className="border-b border-gray-100 pb-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tools</p>
                  <Link to="/tools/quotecapture" className={getMobileLinkClasses('/tools/quotecapture')}>
                    QuoteCapture
                  </Link>
                </div>

                {/* Phone */}
                <a href="tel:0412345678" className="flex items-center gap-2 text-lg font-medium text-gray-800 py-2">
                  <Phone className="w-5 h-5 text-[#2563eb]" />
                  0412 345 678
                </a>

                <div className="pt-4">
                  <Button asChild className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-6 text-lg rounded-lg shadow-sm">
                    <Link to="/contact">Get a Free Quote</Link>
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
