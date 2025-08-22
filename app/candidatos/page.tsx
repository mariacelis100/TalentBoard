'use client';

import CandidatesHero from './CandidatesHero';
import CandidatesFilters from './CandidatesFilters';
import CandidatesList from './CandidatesList';

export default function CandidatesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <CandidatesHero />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <CandidatesFilters />
          </aside>
          
          <section className="lg:col-span-3">
            <CandidatesList />
          </section>
        </div>
      </main>
    </div>
  );
}