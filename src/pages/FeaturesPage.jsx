
import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  MessageSquare, 
  Calculator, 
  Users, 
  Bell, 
  Palette, 
  Code 
} from 'lucide-react';

function FeaturesPage() {
  const features = [
    {
      name: 'Instant Quote Widget',
      description: 'Add a beautiful, mobile-friendly chat widget to your website that guides customers through a pricing flow automatically.',
      icon: MessageSquare,
    },
    {
      name: 'Multi-Service Pricing Engine',
      description: 'Configure complex pricing rules based on square footage, number of rooms, hours required, or any custom variable.',
      icon: Calculator,
    },
    {
      name: 'Lead Capture & Management',
      description: 'Never miss a potential customer. All quote requests are captured and organized in a simple dashboard.',
      icon: Users,
    },
    {
      name: 'Smart Notifications',
      description: 'Get instant email or SMS alerts when a new lead requests a quote, so you can follow up while they are still hot.',
      icon: Bell,
    },
    {
      name: 'Custom Branding',
      description: 'Make the widget your own. Customize colors, logos, and greeting messages to match your business identity perfectly.',
      icon: Palette,
    },
    {
      name: 'One-Line Embed Code',
      description: 'Installation is as simple as copying and pasting a single line of code. Works with WordPress, Wix, Squarespace, and more.',
      icon: Code,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Features - ServiceBot</title>
        <meta
          name="description"
          content="Discover how ServiceBot helps service businesses automate quotes and capture more leads."
        />
      </Helmet>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#2563eb]">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Convert Visitors Into Customers
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Built specifically for service-based businesses. Stop playing phone tag and start booking jobs automatically.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow duration-200">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <feature.icon className="h-6 w-6 text-[#2563eb]" aria-hidden="true" />
                  </div>
                  <div className="flex flex-auto flex-col">
                    <h3 className="text-xl font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesPage;
