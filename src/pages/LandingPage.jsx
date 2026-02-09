import React from 'react';
import SEOHead from '@/components/SEOHead';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

function LandingPage() {
  return (
    <>
      <SEOHead />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default LandingPage;
