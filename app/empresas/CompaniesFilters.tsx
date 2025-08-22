'use client';

import { useState } from 'react';

export default function CompaniesFilters() {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);

  const industries = [
    'Tecnología', 'Finanzas', 'Salud', 'Educación', 'Retail', 
    'Manufactura', 'Consultoría', 'Marketing', 'Energía', 'Telecomunicaciones'
  ];

  const benefits = [
    'Trabajo Remoto', 'Seguro Médico', 'Gimnasio', 'Capacitaciones',
    'Horario Flexible', 'Vacaciones Extra', 'Bonos', 'Stock Options'
  ];

  const toggleBenefit = (benefit: string) => {
    setSelectedBenefits(prev => 
      prev.includes(benefit) 
        ? prev.filter(b => b !== benefit)
        : [...prev, benefit]
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
      <h3 className="text-lg font-semibold text-cyan-800 mb-4">Filtrar Empresas</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Industria
          </label>
          <select 
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 pr-8"
          >
            <option value="">Todas las industrias</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Tamaño de Empresa
          </label>
          <select 
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 pr-8"
          >
            <option value="">Todos los tamaños</option>
            <option value="startup">Startup (1-50)</option>
            <option value="small">Pequeña (51-200)</option>
            <option value="medium">Mediana (201-1000)</option>
            <option value="large">Grande (1000+)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Ubicación
          </label>
          <select 
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 pr-8"
          >
            <option value="">Todas las ubicaciones</option>
            <option value="santiago">Santiago</option>
            <option value="valparaiso">Valparaíso</option>
            <option value="concepcion">Concepción</option>
            <option value="antofagasta">Antofagasta</option>
            <option value="internacional">Internacional</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">
            Beneficios
          </label>
          <div className="space-y-2">
            {benefits.map((benefit) => (
              <label key={benefit} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBenefits.includes(benefit)}
                  onChange={() => toggleBenefit(benefit)}
                  className="mr-2 w-4 h-4 text-cyan-600 focus:ring-cyan-500 border-stone-300 rounded"
                />
                <span className="text-sm text-stone-700">{benefit}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-colors cursor-pointer whitespace-nowrap">
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
}