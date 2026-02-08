
import React from 'react';
import SEOHead from '@/components/SEOHead';
import Hero from '@/components/Hero';

function QuoteCapturePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'QuoteCapture',
    applicationCategory: 'BusinessApplication',
    description: 'Instant quote widget for service businesses. Add to your website in 60 seconds.',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD',
      description: 'Free plan available'
    }
  };

  return (
    <>
      <SEOHead
        title="QuoteCapture - Instant Quotes for Service Businesses"
        description="Add an instant quote widget to your website in 60 seconds. Customers get real-time pricing. You get qualified leads delivered to your inbox."
        canonical="/tools/quotecapture"
        schema={schema}
      />
      <Hero />
    </>
  );
}

export default QuoteCapturePage;
