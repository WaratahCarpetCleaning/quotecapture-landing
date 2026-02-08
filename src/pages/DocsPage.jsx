
import React from 'react';
import { Helmet } from 'react-helmet';
import { Book, Code, Terminal, HelpCircle } from 'lucide-react';

function DocsPage() {
  return (
    <>
      <Helmet>
        <title>Documentation - ServiceBot</title>
        <meta
          name="description"
          content="Complete documentation for ServiceBot. Learn how to install, configure, and customize your quote widget."
        />
      </Helmet>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-[#2563eb]">Documentation</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to get started with ServiceBot
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Clear, concise guides to help you get your quote widget up and running in minutes.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[250px_1fr]">
              {/* Sidebar Navigation */}
              <nav className="hidden lg:block sticky top-32 self-start">
                <ul className="space-y-4 text-sm font-medium text-gray-600">
                  <li><a href="#getting-started" className="block text-[#2563eb] hover:text-[#1d4ed8]">Getting Started</a></li>
                  <li><a href="#installation" className="block hover:text-gray-900">Installation</a></li>
                  <li><a href="#configuration" className="block hover:text-gray-900">Configuration</a></li>
                  <li><a href="#api" className="block hover:text-gray-900">API Reference</a></li>
                  <li><a href="#faq" className="block hover:text-gray-900">FAQ</a></li>
                </ul>
              </nav>

              {/* Main Content */}
              <div className="space-y-16">
                
                {/* Getting Started Section */}
                <section id="getting-started" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Book className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Getting Started</h2>
                  </div>
                  <div className="prose prose-blue max-w-none text-gray-600">
                    <p className="mb-4">
                      ServiceBot is designed to be the easiest way to add instant quoting capabilities to your service business website. Whether you run a cleaning company, landscaping business, or moving service, ServiceBot helps you capture leads 24/7.
                    </p>
                    <p>
                      To get started, you'll need to create an account and configure your first service type. Once configured, you'll receive a unique snippet of code to add to your site.
                    </p>
                  </div>
                </section>

                {/* Installation Section */}
                <section id="installation" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Terminal className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Installation</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Copy and paste the following code snippet into the <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-gray-800">&lt;head&gt;</code> tag of your website HTML.
                    </p>
                    <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                      <code className="text-sm font-mono text-blue-300">
                        &lt;script&gt;<br/>
                        &nbsp;&nbsp;window.ServiceBotConfig = &#123; apiKey: 'YOUR_API_KEY' &#125;;<br/>
                        &lt;/script&gt;<br/>
                        &lt;script src="https://cdn.servicebot.com/widget.js" async&gt;&lt;/script&gt;
                      </code>
                    </div>
                    <p className="text-sm text-gray-500 italic">
                      Note: Replace 'YOUR_API_KEY' with the key found in your dashboard settings.
                    </p>
                  </div>
                </section>

                {/* Configuration Section */}
                <section id="configuration" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Code className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Configuration</h2>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
                    <h3 className="font-semibold text-gray-900">Customizing Appearance</h3>
                    <p className="text-gray-600 text-sm">
                      You can customize the primary color, position, and greeting message of your widget directly from the dashboard. Changes are applied instantly without needing to update the code on your website.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 ml-2">
                      <li><strong>Primary Color:</strong> Matches your brand identity.</li>
                      <li><strong>Position:</strong> Bottom-right (default) or bottom-left.</li>
                      <li><strong>Greeting:</strong> The first message users see.</li>
                    </ul>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <HelpCircle className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Does it work on mobile?</h3>
                      <p className="text-gray-600 text-sm">Yes, the ServiceBot widget is fully responsive and optimized for mobile devices.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Can I connect to my CRM?</h3>
                      <p className="text-gray-600 text-sm">Absolutely. We offer native integrations with HubSpot, Salesforce, and Pipedrive, plus Zapier support for thousands of other apps.</p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocsPage;
