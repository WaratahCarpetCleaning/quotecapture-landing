import React from 'react';

function WidgetDemo() {
  return (
    <section id="demo" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is exactly what your customers will see. Try it out — enter a postcode, pick a service, and get a quote.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                </div>
                <span className="text-white/80 text-sm font-medium ml-2">yourwebsite.com.au</span>
              </div>
            </div>

            <div className="relative bg-gray-100 min-h-[600px] sm:min-h-[700px]">
              {/* Simulated page content behind widget */}
              <div className="p-8 sm:p-12 space-y-6 opacity-40">
                <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                <div className="h-32 bg-gray-200 rounded w-full mt-8"></div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="h-24 bg-gray-200 rounded"></div>
                  <div className="h-24 bg-gray-200 rounded"></div>
                  <div className="h-24 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Embedded widget iframe */}
              <div className="absolute bottom-4 right-4 w-[360px] sm:w-[400px] h-[550px] sm:h-[620px] z-10">
                <iframe
                  src="https://servicebot-saas-mvp.vercel.app/widget-demo"
                  title="QuoteCapture Widget Demo"
                  className="w-full h-full border-0 rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            The widget floats on your website and captures leads 24/7 — even while you sleep.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WidgetDemo;
