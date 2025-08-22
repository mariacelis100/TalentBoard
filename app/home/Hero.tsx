'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() || location.trim()) {
      // Aquí se implementaría la lógica de búsqueda
      console.log('Buscando:', { searchTerm, location });
    }
  };

  return (
    <section className="relative gradient-primary py-24 overflow-hidden">
      {/* Fondo con patrón */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20business%20team%20collaboration%20in%20modern%20office%20environment%20with%20warm%20lighting%2C%20people%20working%20together%20on%20recruitment%20and%20hiring%20processes%2C%20diverse%20professionals%20in%20suits%20and%20business%20attire%2C%20modern%20office%20setting%20with%20natural%20light%2C%20professional%20atmosphere%2C%20warm%20brown%20and%20beige%20color%20palette%2C%20high-quality%20business%20photography%2C%20clean%20and%20organized%20workspace&width=1200&height=600&seq=hero-bg-001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-8 leading-tight">
            Encuentra el
            <span className="block bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent animate-pulse">
              Talento Perfecto
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-stone-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Conectamos a los mejores profesionales con las empresas más innovadoras. 
            Tu próxima gran oportunidad te está esperando.
          </p>

          {/* Formulario de Búsqueda */}
          <form onSubmit={handleSearch} className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto mb-16 transform hover:scale-[1.02] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Campo de búsqueda */}
              <div className="relative group">
                <div className="input-icon group-hover:text-amber-600 transition-colors">
                  <i className="ri-search-line text-lg"></i>
                </div>
                <input
                  type="text"
                  placeholder="¿Qué trabajo buscas?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field group-hover:border-amber-300 group-hover:ring-amber-300"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                )}
              </div>
              
              {/* Campo de ubicación */}
              <div className="relative group">
                <div className="input-icon group-hover:text-amber-600 transition-colors">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <input
                  type="text"
                  placeholder="Ciudad o ubicación"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input-field group-hover:border-amber-300 group-hover:ring-amber-300"
                />
                {location && (
                  <button
                    type="button"
                    onClick={() => setLocation('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                )}
              </div>
              
              {/* Botón de búsqueda */}
              <button
                type="submit"
                className="btn-primary text-lg py-4 hover:scale-105 transform transition-all duration-200"
              >
                <i className="ri-search-line mr-2"></i>
                Buscar Empleos
              </button>
            </div>
          </form>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link href="/empresas" 
                  className="btn-outline text-lg px-8 py-4 group">
              <i className="ri-building-line mr-2 group-hover:scale-110 transition-transform"></i>
              Soy Empresa
            </Link>
            <Link href="/candidatos" 
                  className="group text-stone-700 font-semibold text-lg hover:text-amber-800 transition-all duration-200 flex items-center">
              <span className="mr-2">Crear Perfil de Candidato</span>
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>

          {/* Estadísticas rápidas */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl font-bold text-amber-800 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-stone-600">Empresas Activas</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-amber-800 mb-2 group-hover:scale-110 transition-transform">
                2,500+
              </div>
              <div className="text-stone-600">Empleos Publicados</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-amber-800 mb-2 group-hover:scale-110 transition-transform">
                10,000+
              </div>
              <div className="text-stone-600">Candidatos Registrados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}