'use client';

import { useState } from 'react';

export default function JobsHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="bg-white shadow-sm border-b border-stone-200 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-stone-800 mb-2">
            Encuentra tu Próximo Empleo
          </h1>
          <p className="text-stone-600 mb-8">
            Explora más de 15,000 oportunidades laborales
          </p>

          <div className="bg-stone-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-search-line text-stone-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  placeholder="Título del puesto, palabras clave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent text-sm"
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-stone-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  placeholder="Ciudad, región..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent text-sm"
                />
              </div>
              
              <button className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors font-semibold cursor-pointer whitespace-nowrap">
                Buscar Empleos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}