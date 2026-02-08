
import React from 'react';
import { Helmet } from 'react-helmet';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      description: 'Perfect for small businesses just getting started.',
      features: [
        '1 Website Widget',
        'Up to 50 quotes per month',
        'Basic customization',
        'Email notifications',
        'Community support',
      ],
      cta: 'Start for Free',
      variant: 'outline',
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Everything you need to grow your service business.',
      features: [
        '3 Website Widgets',
        'Unlimited quotes',
        'Advanced customization',
        'Priority email support',
        'Remove ServiceBot branding',
        'Zapier integration',
      ],
      cta: 'Start Free Trial',
      variant: 'default',
      popular: true,
    },
    {
      name: 'Business',
      price: '$79',
      period: '/month',
      description: 'For larger teams needing advanced controls.',
      features: [
        'Unlimited Widgets',
        'Unlimited quotes',
        'Team management',
        'API Access',
        'Dedicated success manager',
        'Custom domain',
        'Advanced analytics',
      ],
      cta: 'Contact Sales',
      variant: 'outline',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - ServiceBot</title>
        <meta
          name="description"
          content="Simple, transparent pricing for service businesses. Start for free and scale as you grow."
        />
      </Helmet>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#2563eb]">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Pricing that grows with you
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the perfect plan for your business. No hidden fees. Cancel anytime.
            </p>
          </div>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 xl:p-10 transition-all duration-300 hover:shadow-xl ${
                  tier.popular
                    ? 'ring-2 ring-[#2563eb] shadow-lg scale-105 lg:scale-110 z-10 bg-white'
                    : 'ring-1 ring-gray-200 bg-gray-50/50 hover:bg-white'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-[#2563eb] px-3 py-1 text-center text-sm font-semibold text-white shadow-sm">
                    Most Popular
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.name}
                      className={`text-lg font-semibold leading-8 ${
                        tier.popular ? 'text-[#2563eb]' : 'text-gray-900'
                      }`}
                    >
                      {tier.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                    {tier.period && (
                      <span className="text-sm font-semibold leading-6 text-gray-600">{tier.period}</span>
                    )}
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check className="h-6 w-5 flex-none text-[#2563eb]" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <a href="https://servicebot-saas-mvp.vercel.app" target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full ${
                        tier.popular
                          ? 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-sm'
                          : 'bg-white text-[#111827] ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                      }`}
                      size="lg"
                    >
                      {tier.cta}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPage;
