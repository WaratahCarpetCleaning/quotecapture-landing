
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { Shield, Leaf, Clock, Award, Users, Heart } from 'lucide-react';

const values = [
  { icon: Award, title: 'Quality', desc: 'We use the best equipment and products in the industry, delivering results that exceed expectations every time.' },
  { icon: Clock, title: 'Reliability', desc: 'We show up on time, every time. You can count on us to be there when we say we will.' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'Our cleaning solutions are non-toxic and biodegradable, safe for your family, pets and the environment.' },
  { icon: Shield, title: 'Trust', desc: 'Fully insured and police-checked. We treat your home with the same care and respect as our own.' },
  { icon: Users, title: 'Community', desc: 'Locally owned and operated. We\'re proud members of the Central Coast community.' },
  { icon: Heart, title: 'Care', desc: 'We genuinely care about delivering the best result for every customer, every time.' },
];

function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Central Coast Carpet Cleaning is a locally owned and operated carpet cleaning business serving the Central Coast, NSW. Learn about our story, values and team."
        canonical="/about"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Locally owned. Professionally operated. Trusted by hundreds of Central Coast families.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Central Coast Carpet Cleaning was founded with a simple mission: to provide the highest quality carpet cleaning service on the Central Coast at a fair price. What started as a one-person operation has grown into one of the most trusted cleaning businesses in the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With years of experience in the cleaning industry, we've built our reputation on delivering exceptional results, using eco-friendly products, and treating every home and business with the utmost respect and care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're proud to be locally owned and operated, serving our neighbours across the Central Coast from Gosford to Wyong and everywhere in between. Our team is fully trained, insured and committed to making your carpets look and feel like new.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">These are the principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  <value.icon className="w-7 h-7 text-[#2563eb]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our experienced team is dedicated to delivering the best results for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Team Member', role: 'Owner / Operator' },
              { name: 'Team Member', role: 'Senior Technician' },
              { name: 'Team Member', role: 'Technician' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563eb] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">Contact us today for a free quote and experience the Central Coast Carpet Cleaning difference.</p>
          <Button asChild className="bg-white text-[#2563eb] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg shadow-lg transition-all">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
