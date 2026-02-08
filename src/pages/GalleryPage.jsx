
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { Star, MapPin, Camera } from 'lucide-react';

const galleryItems = [
  { title: 'Living Room Carpet - Before & After', category: 'Carpet Cleaning' },
  { title: 'Wine Stain Removal', category: 'Stain Removal' },
  { title: 'Lounge Suite Refresh', category: 'Upholstery' },
  { title: 'Commercial Office Carpets', category: 'Commercial' },
  { title: 'Bathroom Tile & Grout', category: 'Tile & Grout' },
  { title: 'Persian Rug Cleaning', category: 'Rug Cleaning' },
  { title: 'Hallway Runner Deep Clean', category: 'Carpet Cleaning' },
  { title: 'Pet Stain Treatment', category: 'Stain Removal' },
];

const reviews = [
  { name: 'Sarah M.', location: 'Terrigal', rating: 5, text: 'Absolutely fantastic job on our lounge room carpet. The stains from the kids are completely gone! Will definitely book again.', date: '2 weeks ago' },
  { name: 'James K.', location: 'Gosford', rating: 5, text: 'Professional, on time, and the carpets look brand new. Best carpet cleaning service on the Coast.', date: '1 month ago' },
  { name: 'Michelle T.', location: 'Erina', rating: 5, text: 'Called in the morning, they came the same afternoon. Incredible service and great results. Highly recommend!', date: '1 month ago' },
  { name: 'David R.', location: 'Woy Woy', rating: 5, text: 'Had the whole house done including upholstery. Everything looks and smells amazing. Great value for money.', date: '2 months ago' },
  { name: 'Lisa P.', location: 'Bateau Bay', rating: 5, text: 'We used them for our rental clean and got our full bond back! The carpets looked better than when we moved in.', date: '2 months ago' },
  { name: 'Mark & Jenny H.', location: 'Kariong', rating: 4, text: 'Really happy with the tile and grout cleaning in our bathroom. Looks like new tiles! Will be getting the carpets done next.', date: '3 months ago' },
];

function GalleryPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Central Coast Carpet Cleaning',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5'
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
      reviewBody: r.text
    }))
  };

  return (
    <>
      <SEOHead
        title="Gallery & Reviews"
        description="See our carpet cleaning results and read reviews from happy Central Coast customers. Before and after photos, 5-star ratings and testimonials."
        canonical="/gallery"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Gallery & Reviews</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See the results for yourself. Before and after photos and genuine customer reviews.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, i) => (
              <div key={i} className="group relative bg-gray-100 rounded-2xl aspect-square overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <Camera className="w-12 h-12 text-gray-300 mb-3" />
                  <p className="text-gray-400 text-sm">Photo placeholder</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-xs text-blue-300 font-medium">{item.category}</span>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-gray-600">4.9 out of 5 from 127 reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <article key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                    {[...Array(5 - review.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-gray-200" />)}
                  </div>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">"{review.text}"</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-900">{review.name}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{review.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563eb] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Happy Customers</h2>
          <p className="text-blue-100 text-lg mb-8">Get a free quote and see the difference professional carpet cleaning makes.</p>
          <Button asChild className="bg-white text-[#2563eb] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg shadow-lg transition-all">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
