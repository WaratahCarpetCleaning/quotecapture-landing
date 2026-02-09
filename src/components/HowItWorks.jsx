import React from 'react';
import { UserPlus, Settings, Code } from 'lucide-react';

const STEPS = [
  {
    icon: UserPlus,
    title: 'Sign Up Free',
    description: 'Create your account in seconds. No credit card required.',
  },
  {
    icon: Settings,
    title: 'Configure Services & Pricing',
    description: 'Add your services, set rates, customise your brand colours, and set your notification email.',
  },
  {
    icon: Code,
    title: 'Embed Widget on Your Site',
    description: 'Copy a single script tag and paste it into your website. Your widget goes live instantly.',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get up and running in three simple steps. No technical skills required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <step.icon className="w-8 h-8 text-[#2563eb]" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#2563eb] text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
