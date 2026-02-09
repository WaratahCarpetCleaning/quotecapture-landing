import React from 'react';
import {
  Calculator,
  MapPin,
  UserCheck,
  Mail,
  Palette,
  Smartphone,
  LayoutDashboard,
  Clock,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Calculator,
    title: 'Instant Quote Calculation',
    description: 'Customers get a real-time price based on the services they select and their quantities.',
  },
  {
    icon: MapPin,
    title: 'Postcode-Based Pricing',
    description: 'Set CBD surcharges and location-based pricing rules automatically.',
  },
  {
    icon: UserCheck,
    title: 'Lead Capture',
    description: 'Collect name, email, phone, and preferred date from every quote request.',
  },
  {
    icon: Mail,
    title: 'Email Notifications',
    description: 'Instant email alerts when a new lead comes in. Auto-confirmation sent to the customer.',
  },
  {
    icon: Palette,
    title: 'Customisable Branding',
    description: 'Match your brand colours and company name. The widget looks like part of your site.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Works on every device. The widget adapts to desktop, tablet, and mobile screens.',
  },
  {
    icon: LayoutDashboard,
    title: 'Lead Management Dashboard',
    description: 'View all your incoming quotes, customer details, and service selections in one place.',
  },
  {
    icon: Clock,
    title: '60-Second Embed Setup',
    description: 'Copy one script tag. Paste it on your site. Your quote widget is live.',
  },
];

function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Capture Leads
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete quoting and lead capture system that works while you're on the job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
