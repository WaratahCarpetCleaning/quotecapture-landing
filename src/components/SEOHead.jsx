import React from 'react';
import { Helmet } from 'react-helmet';

function SEOHead() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'QuoteCapture',
    description: 'Instant quote widget for service businesses. Add to your website in 60 seconds. Customers get real-time pricing. You get qualified leads.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free',
        price: '0',
        priceCurrency: 'AUD',
        description: 'Configure your widget, preview, and manage leads.',
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '49',
        priceCurrency: 'AUD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '49',
          priceCurrency: 'AUD',
          billingDuration: 'P1M',
        },
        description: 'Embed widget on your website and capture leads.',
      },
    ],
  };

  return (
    <Helmet>
      <title>QuoteCapture — Instant Quote Widget for Service Businesses</title>
      <meta
        name="description"
        content="Add an instant quote widget to your website in 60 seconds. Customers get real-time pricing. You get qualified leads."
      />
      <meta property="og:title" content="QuoteCapture — Instant Quote Widget for Service Businesses" />
      <meta
        property="og:description"
        content="Add an instant quote widget to your website in 60 seconds. Customers get real-time pricing. You get qualified leads."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_AU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="QuoteCapture — Instant Quote Widget for Service Businesses" />
      <meta
        name="twitter:description"
        content="Add an instant quote widget to your website in 60 seconds. Customers get real-time pricing. You get qualified leads."
      />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export default SEOHead;
