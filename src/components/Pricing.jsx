import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Get started and configure your widget.',
    features: [
      'Unlimited service setup',
      'Real-time quote calculation',
      'Customisable branding & colours',
      'Email notifications',
      'Lead management dashboard',
      'Live preview mode',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'Go live and start capturing leads on your website.',
    features: [
      'Everything in Free',
      'Embed code access',
      'Deploy widget to your website',
      'Full lead generation',
      'Priority support',
    ],
    cta: 'Start Free',
    highlighted: true,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start for free. Upgrade when you're ready to go live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-[#2563eb] text-white ring-4 ring-blue-200 shadow-xl scale-[1.02]'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.highlighted ? 'text-blue-200' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-blue-200' : 'text-[#2563eb]'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button asChild
                className={`w-full py-3 font-semibold rounded-lg text-base ${
                  plan.highlighted
                    ? 'bg-white text-[#2563eb] hover:bg-blue-50'
                    : 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]'
                }`}
              >
                <a href="https://servicebot-saas-mvp.vercel.app" target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
