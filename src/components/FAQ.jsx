import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'How does QuoteCapture work?',
    answer: 'QuoteCapture is a chat-style widget that sits on your website. When a visitor clicks it, they enter their postcode, select services, choose a preferred date, and get an instant quote. Their contact details are captured and sent to you via email and your dashboard.',
  },
  {
    question: 'What industries is this for?',
    answer: 'QuoteCapture works for any service business that provides quotes — carpet cleaners, plumbers, electricians, landscapers, painters, removalists, pool cleaners, pest control, and more. If you offer services with configurable pricing, QuoteCapture is built for you.',
  },
  {
    question: 'How do I embed the widget on my website?',
    answer: 'Once you subscribe to the Pro plan, you get a single script tag to copy. Paste it before the closing </body> tag on your website. The widget will appear automatically. It works with any website — WordPress, Squarespace, Wix, custom HTML, or any other platform.',
  },
  {
    question: 'Do I need technical skills to set it up?',
    answer: 'No. The dashboard lets you configure everything — services, pricing, branding, notifications — without writing any code. The embed step is just a copy-paste of one line.',
  },
  {
    question: 'What does the free plan include?',
    answer: 'The free plan lets you fully configure your widget, set up services and pricing, customise your branding, and preview the widget. You can also view leads in the dashboard. To embed the widget on your live website, you need the Pro plan at $49/month.',
  },
  {
    question: 'Can I customise the widget to match my brand?',
    answer: 'Yes. You can set your company name and choose a brand colour that applies to the entire widget — header, buttons, and accents. The widget is designed to blend in with any website.',
  },
  {
    question: 'How do I get notified about new leads?',
    answer: 'You receive an email notification every time a customer completes a quote. The customer also gets an automatic confirmation email. All leads appear in your dashboard with full details.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about QuoteCapture.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base font-medium text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
