
'use client';

import Link from 'next/link';

export default function CompaniesHero() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-50 to-teal-100 py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20buildings%20skyline%20with%20glass%20facades%20representing%20successful%20companies%20and%20business%20growth%20with%20turquoise%20and%20cyan%20architectural%20elements%20in%20professional%20setting&width=1200&height=600&seq=companies-hero&orientation=landscape)'
        }}
      ></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-800 mb-6">
            Descubre las Mejores Empresas
          </h1>
          <p className="text-xl text-cyan-700 mb-8 max-w-2xl mx-auto">
            Explora oportunidades en las empresas más innovadoras y exitosas. 
            Encuentra el lugar perfecto donde desarrollar tu carrera profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors cursor-pointer whitespace-nowrap">
              Explorar Empresas
            </button>
            <Link href="/registrar-empresa" className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors cursor-pointer whitespace-nowrap text-center">
              Registrar Empresa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
