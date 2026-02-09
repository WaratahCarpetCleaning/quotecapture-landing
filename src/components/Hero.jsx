import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin } from 'lucide-react';
import TrustBar from '@/components/TrustBar';

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-[32px] leading-tight sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Turn Website Visitors Into Booked Jobs
              </h1>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Add an instant quote widget to your website in 60 seconds. Customers get real-time pricing. You get qualified leads delivered to your inbox.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild
                className="w-full sm:w-auto bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <a href="https://servicebot-saas-mvp.vercel.app" target="_blank" rel="noopener noreferrer">Start Free</a>
              </Button>
            </div>
          </div>

          {/* Right side - Widget Mockup */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-full flex justify-center lg:block">
              {/* Chat Bubble Button */}
              <div className="absolute -bottom-4 -right-4 lg:bottom-0 lg:right-0 bg-[#2563eb] rounded-full p-3 sm:p-4 shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-200 z-10">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Chat Window */}
              <div className="bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl overflow-hidden w-full max-w-[340px] sm:max-w-[380px] transform hover:scale-[1.02] transition-transform duration-300 mx-auto">
                {/* Header */}
                <div className="bg-[#2563eb] text-white px-5 py-4 sm:px-6 flex items-center justify-between">
                  <span className="font-semibold text-base sm:text-lg">Instant Quote</span>
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>

                {/* Chat Body */}
                <div className="p-4 sm:p-6 space-y-4 bg-gray-50 min-h-[350px] sm:min-h-[400px]">
                  {/* Bot Message */}
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 sm:px-4 sm:py-3 shadow-sm max-w-[85%]">
                      <p className="text-gray-800 text-sm">
                        Hi! I can help you get an instant quote. Let's start with your postcode.
                      </p>
                    </div>
                  </div>

                  {/* Postcode Input Step */}
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 sm:px-4 sm:py-3 shadow-sm w-full max-w-[85%]">
                      <p className="text-gray-800 text-sm mb-2 sm:mb-3">Enter your postcode:</p>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="e.g., 2000"
                          readOnly
                          className="w-full pl-9 sm:pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none text-gray-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 sm:px-4 sm:py-3 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustBar />
      </div>
    </section>
  );
}

export default Hero;
