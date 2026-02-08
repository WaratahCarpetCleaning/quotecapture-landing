
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { Phone, Star, Shield, Leaf, Clock, MapPin, CheckCircle, Sparkles, Droplets, Sofa, Grid3X3 } from 'lucide-react';

const services = [
  { icon: Sparkles, title: 'Carpet Steam Cleaning', desc: 'Deep hot water extraction to remove dirt, allergens and bacteria from your carpets.' },
  { icon: Sofa, title: 'Upholstery Cleaning', desc: 'Refresh your sofas, chairs and fabric furniture with professional cleaning.' },
  { icon: Droplets, title: 'Stain Removal', desc: 'Stubborn stains? Our specialised treatments tackle wine, coffee, pet stains and more.' },
  { icon: Grid3X3, title: 'Tile & Grout Cleaning', desc: 'Restore your tiles and grout lines to their original clean, bright finish.' },
];

const reasons = [
  { icon: Shield, title: 'Fully Insured', desc: 'Complete peace of mind with full public liability insurance coverage.' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'Safe, non-toxic cleaning solutions that are gentle on your family and pets.' },
  { icon: Clock, title: 'Same-Day Service', desc: 'Need it done today? We offer same-day bookings subject to availability.' },
  { icon: Star, title: '5-Star Rated', desc: 'Over 127 five-star reviews from happy Central Coast customers.' },
];

const suburbs = [
  'Gosford', 'Terrigal', 'Erina', 'Wyoming', 'Kariong', 'Woy Woy',
  'Umina Beach', 'Ettalong Beach', 'Avoca Beach', 'Copacabana',
  'Bateau Bay', 'Long Jetty', 'The Entrance', 'Tuggerah', 'Wyong',
  'Toukley', 'Lake Haven', 'San Remo', 'Budgewoi', 'Killarney Vale',
];

const testimonials = [
  { name: 'Sarah M.', location: 'Terrigal', rating: 5, text: 'Absolutely fantastic job on our lounge room carpet. The stains from the kids are completely gone! Will definitely book again.' },
  { name: 'James K.', location: 'Gosford', rating: 5, text: 'Professional, on time, and the carpets look brand new. Best carpet cleaning service on the Coast.' },
  { name: 'Michelle T.', location: 'Erina', rating: 5, text: 'Called in the morning, they came the same afternoon. Incredible service and great results. Highly recommend!' },
];

function HomePage() {
  return (
    <>
      <SEOHead
        title="Central Coast Carpet Cleaning"
        description="Professional carpet cleaning services on the Central Coast, NSW. Steam cleaning, stain removal, upholstery cleaning. Call 0412 345 678 for a free quote."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Professional Carpet Cleaning on the{' '}
              <span className="text-[#2563eb]">Central Coast</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Trusted by hundreds of local families. We use eco-friendly, deep-steam cleaning to make your carpets look and feel like new.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button asChild className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all">
                <a href="tel:0412345678">
                  <Phone className="w-5 h-5 mr-2" />
                  0412 345 678
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Free Quotes</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Same-Day Service</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> 100% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From residential carpets to commercial spaces, we have the expertise and equipment to handle any cleaning job.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service) => (
              <Link to="/services" key={service.title} className="group bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
                <service.icon className="w-10 h-10 text-[#2563eb] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We're the Central Coast's most trusted carpet cleaning team for a reason.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  <reason.icon className="w-7 h-7 text-[#2563eb]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-gray-600">4.9 out of 5 from 127 reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <article key={t.name} className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{t.location}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all">
              <Link to="/gallery">See More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Proudly servicing the entire Central Coast region from Gosford to Wyong and everywhere in between.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {suburbs.map((suburb) => (
              <span key={suburb} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#2563eb] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready for Cleaner Carpets?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Get a free, no-obligation quote today. We'll have your carpets looking like new in no time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#2563eb] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg shadow-lg transition-all">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] font-semibold px-8 py-6 text-lg rounded-lg transition-all">
              <a href="tel:0412345678">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
