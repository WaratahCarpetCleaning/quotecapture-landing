import React from 'react';
import EmailCaptureForm from '@/components/EmailCaptureForm';

function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#2563eb] to-[#1e40af]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Turn Visitors Into Customers?
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join 200+ service businesses using SparkQuote to capture leads and grow their revenue. Start free — no credit card required.
        </p>
        <div className="flex justify-center">
          <EmailCaptureForm source="cta" variant="dark" />
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
