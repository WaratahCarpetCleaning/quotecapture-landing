
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">Central Coast Carpet Cleaning</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional carpet cleaning services for homes and businesses across the Central Coast, NSW. Eco-friendly, fully insured, and trusted by hundreds of local families.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Carpet Steam Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Upholstery Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Stain Removal
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tile & Grout Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Commercial Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gallery & Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link to="/tools/quotecapture" className="text-gray-400 hover:text-white transition-colors text-sm">
                  QuoteCapture Tool
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0412345678" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  0412 345 678
                </a>
              </li>
              <li>
                <a href="mailto:info@centralcoastcarpetcleaning.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@centralcoastcarpetcleaning.com
                </a>
              </li>
              <li>
                <address className="flex items-start gap-2 text-gray-400 text-sm not-italic">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Central Coast, NSW 2250
                </address>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div>
                    Mon-Fri: 7am-6pm<br />
                    Sat: 8am-2pm<br />
                    Sun: Closed
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Central Coast Carpet Cleaning. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 md:p-0"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 md:p-0"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
