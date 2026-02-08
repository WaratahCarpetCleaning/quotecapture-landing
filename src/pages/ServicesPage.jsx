
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { Sparkles, Sofa, Droplets, Grid3X3, Building2, Scroll, Phone, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Carpet Steam Cleaning',
    desc: 'Our hot water extraction method penetrates deep into carpet fibres, removing dirt, dust mites, allergens and bacteria. Suitable for all carpet types including wool, nylon and polyester.',
    features: ['Deep hot water extraction', 'Removes allergens & bacteria', 'Fast drying time', 'Safe for all carpet types'],
  },
  {
    icon: Sofa,
    title: 'Upholstery Cleaning',
    desc: 'Revive your sofas, armchairs and fabric furniture. We use specialised upholstery cleaning solutions that are tough on stains but gentle on your furniture fabrics.',
    features: ['Sofas & armchairs', 'Dining chairs', 'Fabric & microfibre', 'Odour removal'],
  },
  {
    icon: Droplets,
    title: 'Stain Removal',
    desc: 'From red wine and coffee to pet accidents and ink, our specialised stain removal treatments can tackle even the most stubborn marks on your carpets and upholstery.',
    features: ['Wine & coffee stains', 'Pet stain & odour removal', 'Ink & dye stains', 'Grease & oil marks'],
  },
  {
    icon: Scroll,
    title: 'Rug Cleaning',
    desc: 'Delicate rugs need expert care. We clean all types of rugs including Persian, Oriental, silk and hand-knotted rugs using appropriate methods for each material.',
    features: ['Persian & Oriental rugs', 'Silk & delicate rugs', 'Hand-knotted rugs', 'Pick-up & delivery available'],
  },
  {
    icon: Grid3X3,
    title: 'Tile & Grout Cleaning',
    desc: 'Restore your tiled floors, bathrooms and kitchens to their original brightness. Our high-pressure cleaning removes years of built-up grime from tiles and grout lines.',
    features: ['Kitchen & bathroom tiles', 'Grout line restoration', 'High-pressure cleaning', 'Seal & protect options'],
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    desc: 'Keep your workplace clean and professional with our commercial carpet cleaning service. We work after hours to minimise disruption to your business operations.',
    features: ['Offices & retail spaces', 'After-hours service', 'Regular maintenance plans', 'Strata & body corporate'],
  },
];

function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Carpet Cleaning',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Central Coast Carpet Cleaning',
      telephone: '0412 345 678',
      areaServed: {
        '@type': 'Place',
        name: 'Central Coast, NSW, Australia'
      }
    },
    areaServed: {
      '@type': 'Place',
      name: 'Central Coast, NSW, Australia'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Carpet Cleaning Services',
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.desc
        },
        position: i + 1
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Services"
        description="Professional carpet cleaning services on the Central Coast. Steam cleaning, upholstery, stain removal, rug cleaning, tile & grout, and commercial cleaning."
        canonical="/services"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional cleaning solutions for every surface in your home or business.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article key={service.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <service.icon className="w-12 h-12 text-[#2563eb] mb-5" />
                <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563eb] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Quote?</h2>
          <p className="text-blue-100 text-lg mb-8">Get in touch for a free, no-obligation quote on any of our services.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#2563eb] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg shadow-lg transition-all">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] font-semibold px-8 py-6 text-lg rounded-lg transition-all">
              <a href="tel:0412345678">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
