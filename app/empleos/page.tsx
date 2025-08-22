
'use client';

import JobFilters from './JobFilters';
import JobsHeader from './JobsHeader';
import JobsList from './JobsList';

export default function EmpleosPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <JobsHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <JobFilters />
          </aside>
          <main className="lg:col-span-3">
            <JobsList />
          </main>
        </div>
      </div>
    </div>
  );
}
