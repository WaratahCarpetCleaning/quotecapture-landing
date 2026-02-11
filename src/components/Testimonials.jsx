import React from 'react';
import { Star, Quote } from 'lucide-react';

const stats = [
  { value: '200+', label: 'Businesses' },
  { value: '50,000+', label: 'Quotes Generated' },
  { value: '35%', label: 'More Leads' },
  { value: '60sec', label: 'Setup Time' },
];

const testimonials = [
  {
    name: 'James Mitchell',
    role: 'Owner',
    business: 'CleanRite Carpet Care',
    location: 'Sydney, NSW',
    rating: 5,
    quote:
      "We added SparkQuote on a Friday afternoon and had 3 new leads by Monday morning. Customers love getting an instant price — it's cut our quoting time in half.",
  },
  {
    name: 'Sarah Chen',
    role: 'Director',
    business: 'GreenEdge Landscaping',
    location: 'Melbourne, VIC',
    rating: 5,
    quote:
      "Before SparkQuote, we'd lose visitors who didn't want to call for a quote. Now they fill in a few details and get a price instantly. Our conversion rate jumped 40%.",
  },
  {
    name: 'David Okonkwo',
    role: 'Manager',
    business: 'ShieldPest Solutions',
    location: 'Brisbane, QLD',
    rating: 5,
    quote:
      'The widget pays for itself every month. We get qualified leads with job details already filled in, so our team spends less time on the phone and more time on jobs.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }, (_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Service Businesses Across Australia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See why hundreds of trades and service businesses choose SparkQuote to capture more leads.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16 bg-blue-50 rounded-2xl p-6 sm:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2563eb]">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#2563eb]/20 absolute top-6 right-6" />
              <StarRating rating={t.rating} />
              <p className="mt-4 text-gray-700 leading-relaxed flex-1">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-600">
                  {t.role}, {t.business}
                </div>
                <div className="text-sm text-gray-500">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
