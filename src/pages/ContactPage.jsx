
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: 'How long does carpet cleaning take?', a: 'Most residential jobs take between 1-3 hours depending on the size and condition of the carpets. We\'ll give you a time estimate when you book.' },
  { q: 'How long until my carpets are dry?', a: 'Carpets typically dry within 4-6 hours after steam cleaning. We recommend good ventilation to speed up the drying process.' },
  { q: 'Are your cleaning products safe for pets and children?', a: 'Yes! We use eco-friendly, non-toxic cleaning solutions that are completely safe for your family and pets.' },
  { q: 'Do I need to move my furniture before you arrive?', a: 'We can work around smaller items, but we ask that you move any valuables, breakables and smaller items off the floor. We can help move larger furniture pieces.' },
  { q: 'How often should I get my carpets professionally cleaned?', a: 'We recommend professional carpet cleaning every 12-18 months for most homes. Homes with pets, children or allergy sufferers may benefit from more frequent cleaning.' },
  { q: 'Do you offer a satisfaction guarantee?', a: 'Absolutely! If you\'re not happy with the results, we\'ll come back and re-clean the area at no extra charge.' },
];

function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Contact Central Coast Carpet Cleaning for a free quote. Call 0412 345 678 or fill out our online form. Serving Gosford, Terrigal, Erina, Woy Woy and surrounds."
        canonical="/contact"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get in touch for a free, no-obligation quote. We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-gray-900" placeholder="Your name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-gray-900" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-gray-900" placeholder="04XX XXX XXX" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-gray-900 bg-white">
                    <option value="">Select a service</option>
                    <option value="carpet-steam">Carpet Steam Cleaning</option>
                    <option value="upholstery">Upholstery Cleaning</option>
                    <option value="stain-removal">Stain Removal</option>
                    <option value="rug-cleaning">Rug Cleaning</option>
                    <option value="tile-grout">Tile & Grout Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-gray-900 resize-none" placeholder="Tell us about your cleaning needs..." />
                </div>
                <Button type="submit" className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Send Enquiry
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:0412345678" className="text-[#2563eb] hover:underline text-lg">0412 345 678</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@centralcoastcarpetcleaning.com" className="text-[#2563eb] hover:underline">info@centralcoastcarpetcleaning.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <address className="not-italic">
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Central Coast, NSW<br />Gosford to Wyong & surrounds</p>
                  </address>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 7:00am - 6:00pm<br />Sat: 8:00am - 2:00pm<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
