'use client';

import Hero from './home/Hero';
import FeaturedJobs from './home/FeaturedJobs';
import JobCategories from './home/JobCategories';
import Stats from './home/Stats';
import Testimonials from './home/Testimonials';
import CTASection from './home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <main>
        <Hero />
        <Stats />
        <FeaturedJobs />
        <JobCategories />
        <Testimonials />
        <CTASection />
      </main>
    </div>
  );
}