'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-800 to-amber-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20office%20environment%20with%20diverse%20business%20team%20collaborating%2C%20warm%20golden%20hour%20lighting%2C%20professional%20recruitment%20and%20hiring%20atmosphere%2C%20contemporary%20workspace%20design%2C%20teamwork%20and%20success%20concept%2C%20warm%20color%20palette&width=1200&height=400&seq=cta-bg-001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para el Siguiente Paso?
          </h2>
          <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
            Únete a miles de profesionales que ya han encontrado su trabajo ideal
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/registro" 
                  className="bg-white text-amber-800 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap">
              Crear Cuenta Gratis
            </Link>
            <Link href="/empleos" 
                  className="text-white font-semibold hover:text-amber-200 transition-colors cursor-pointer whitespace-nowrap">
              Explorar Empleos →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}