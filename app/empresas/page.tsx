
'use client';

import CompaniesHero from './CompaniesHero';
import CompaniesFilters from './CompaniesFilters';
import CompaniesList from './CompaniesList';
import Link from 'next/link';

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <CompaniesHero />
      
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-stone-800">Empresas Destacadas</h2>
            <div className="flex items-center space-x-3">
              <Link href="/publicar-empleo" 
                    className="btn-secondary flex items-center space-x-2">
                <i className="ri-briefcase-2-line"></i>
                <span>Publicar Empleo</span>
              </Link>
              <Link href="/registrar-empresa" 
                    className="btn-outline flex items-center space-x-2">
                <i className="ri-building-2-line"></i>
                <span>Registrar Empresa</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <CompaniesFilters />
            </aside>
            <section className="lg:col-span-3">
              <CompaniesList />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
