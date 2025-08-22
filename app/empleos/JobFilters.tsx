'use client';

import { useState } from 'react';

export default function JobFilters() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  const jobTypes = [
    { value: 'full-time', label: 'Tiempo Completo', icon: 'ri-time-line', count: 45 },
    { value: 'part-time', label: 'Medio Tiempo', icon: 'ri-time-line', count: 23 },
    { value: 'freelance', label: 'Freelance', icon: 'ri-user-line', count: 18 },
    { value: 'internship', label: 'Prácticas', icon: 'ri-graduation-cap-line', count: 12 },
    { value: 'remote', label: 'Remoto', icon: 'ri-home-line', count: 67 },
    { value: 'hybrid', label: 'Híbrido', icon: 'ri-building-line', count: 34 }
  ];

  const categories = [
    { value: 'tech', label: 'Tecnología', icon: 'ri-computer-line', count: 89 },
    { value: 'marketing', label: 'Marketing', icon: 'ri-bullhorn-line', count: 56 },
    { value: 'finance', label: 'Finanzas', icon: 'ri-bank-card-line', count: 34 },
    { value: 'design', label: 'Diseño', icon: 'ri-palette-line', count: 42 },
    { value: 'sales', label: 'Ventas', icon: 'ri-customer-service-line', count: 28 },
    { value: 'hr', label: 'RRHH', icon: 'ri-team-line', count: 19 },
    { value: 'education', label: 'Educación', icon: 'ri-book-open-line', count: 15 }
  ];

  const experience = [
    { value: 'entry', label: 'Sin experiencia', icon: 'ri-user-add-line', count: 23 },
    { value: 'junior', label: '1-2 años', icon: 'ri-user-line', count: 45 },
    { value: 'mid', label: '3-5 años', icon: 'ri-user-star-line', count: 67 },
    { value: 'senior', label: '5+ años', icon: 'ri-user-heart-line', count: 89 },
    { value: 'lead', label: 'Senior', icon: 'ri-user-settings-line', count: 34 }
  ];

  const salary = [
    { value: '20-30k', label: '€20k - €30k', icon: 'ri-money-euro-circle-line', count: 23 },
    { value: '30-45k', label: '€30k - €45k', icon: 'ri-money-euro-circle-line', count: 45 },
    { value: '45-60k', label: '€45k - €60k', icon: 'ri-money-euro-circle-line', count: 67 },
    { value: '60k+', label: '€60k+', icon: 'ri-money-euro-circle-line', count: 89 }
  ];

  const renderFilterSection = (title: string, filters: any[], filterType: string) => (
    <div className="mb-8">
      <h4 className="font-semibold text-stone-800 mb-4 flex items-center">
        <i className="ri-filter-3-line mr-2 text-amber-600"></i>
        {title}
      </h4>
      <div className="space-y-3">
        {filters.map((filter) => (
          <label key={filter.value} className="flex items-center justify-between cursor-pointer group hover:bg-stone-50 p-2 rounded-lg transition-colors">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedFilters.includes(`${filterType}-${filter.value}`)}
                onChange={() => toggleFilter(`${filterType}-${filter.value}`)}
                className="w-4 h-4 text-amber-800 border-stone-300 rounded focus:ring-amber-800 focus:ring-2 transition-all"
              />
              <div className="ml-3 flex items-center">
                <i className={`${filter.icon} text-stone-500 mr-2 group-hover:text-amber-600 transition-colors`}></i>
                <span className="text-stone-700 group-hover:text-stone-900 transition-colors">{filter.label}</span>
              </div>
            </div>
            <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
              {filter.count}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-stone-800 mb-2">
            Filtrar Empleos
          </h3>
          <p className="text-stone-600 text-sm">
            Encuentra el trabajo perfecto para ti
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-stone-100 transition-colors"
        >
          <i className={`${isExpanded ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} text-xl text-stone-600`}></i>
        </button>
      </div>

      {/* Filtros activos */}
      {selectedFilters.length > 0 && (
        <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-amber-800">
              Filtros activos ({selectedFilters.length})
            </span>
            <button
              onClick={clearAllFilters}
              className="text-xs text-amber-600 hover:text-amber-800 transition-colors"
            >
              Limpiar todo
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map((filter) => (
              <span
                key={filter}
                className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium"
              >
                {filter.split('-')[1]}
                <button
                  onClick={() => toggleFilter(filter)}
                  className="ml-2 w-4 h-4 flex items-center justify-center hover:bg-amber-200 rounded-full transition-colors"
                >
                  <i className="ri-close-line text-xs"></i>
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Contenido de filtros */}
      <div className={`lg:block ${isExpanded ? 'block' : 'hidden'}`}>
        {renderFilterSection('Tipo de Empleo', jobTypes, 'type')}
        {renderFilterSection('Categoría', categories, 'category')}
        {renderFilterSection('Experiencia', experience, 'experience')}
        {renderFilterSection('Salario', salary, 'salary')}

        {/* Botón de limpiar */}
        <button 
          onClick={clearAllFilters}
          className="w-full btn-outline mt-8 group"
        >
          <i className="ri-refresh-line mr-2 group-hover:rotate-180 transition-transform duration-500"></i>
          Limpiar Filtros
        </button>

        {/* Información adicional */}
        <div className="mt-8 p-4 bg-stone-50 rounded-xl">
          <div className="flex items-center text-stone-600 text-sm">
            <i className="ri-information-line mr-2 text-amber-600"></i>
            <span>Los filtros se aplican en tiempo real</span>
          </div>
        </div>
      </div>
    </div>
  );
}