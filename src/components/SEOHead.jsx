
import React from 'react';
import { Helmet } from 'react-helmet';

function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/og-image.jpg',
  schema
}) {
  const siteName = 'Central Coast Carpet Cleaning';
  const baseUrl = 'https://centralcoastcarpetcleaning.com';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': baseUrl,
    name: siteName,
    description: 'Professional carpet cleaning services on the Central Coast, NSW. Steam cleaning, stain removal, upholstery cleaning and more.',
    url: baseUrl,
    telephone: '0412 345 678',
    email: 'info@centralcoastcarpetcleaning.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Gosford',
      addressRegion: 'NSW',
      postalCode: '2250',
      addressCountry: 'AU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.4251,
      longitude: 151.3412
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -33.4251,
        longitude: 151.3412
      },
      geoRadius: '50000'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5'
    },
    priceRange: '$$'
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="AU-NSW" />
      <meta name="geo.placename" content="Central Coast" />
      <meta name="geo.position" content="-33.4251;151.3412" />
      <meta name="ICBM" content="-33.4251, 151.3412" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}

export default SEOHead;
