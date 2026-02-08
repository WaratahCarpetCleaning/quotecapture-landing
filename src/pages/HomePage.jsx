
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>ServiceBot - Turn Website Visitors Into Booked Jobs</title>
        <meta 
          name="description" 
          content="Add an instant quote widget to your website in 60 seconds. Customers get real-time pricing. You get qualified leads delivered to your inbox." 
        />
      </Helmet>
      <Hero />
    </>
  );
}

export default HomePage;
