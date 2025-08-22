'use client';

import PublishJobForm from './PublishJobForm';

export default function PublishJobPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">
              Publicar Nueva Oferta de Empleo
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Encuentra el talento perfecto para tu empresa. Completa los detalles de la posición 
              y comienza a recibir aplicaciones de candidatos calificados.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mt-8 p-6 bg-white rounded-lg shadow-sm border border-stone-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-user-search-line text-amber-600 text-xl"></i>
                </div>
                <p className="text-sm text-stone-600">Alcanza miles<br/>de candidatos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-filter-3-line text-cyan-600 text-xl"></i>
                </div>
                <p className="text-sm text-stone-600">Filtros avanzados<br/>de selección</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-time-line text-emerald-600 text-xl"></i>
                </div>
                <p className="text-sm text-stone-600">Proceso de<br/>contratación rápido</p>
              </div>
            </div>
          </div>
          
          <PublishJobForm />
        </div>
      </main>
    </div>
  );
}