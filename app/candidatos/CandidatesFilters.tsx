'use client';

import { useState } from 'react';

export default function CandidatesFilters() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const skills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'Java', 'Angular', 
    'Vue.js', 'PHP', 'C#', 'Ruby', 'Go', 'TypeScript'
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
      <h3 className="text-lg font-semibold text-teal-800 mb-4">Filtrar Candidatos</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Experiencia
          </label>
          <select 
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-8"
          >
            <option value="">Todos los niveles</option>
            <option value="junior">Junior (0-2 años)</option>
            <option value="mid">Semi Senior (2-5 años)</option>
            <option value="senior">Senior (5+ años)</option>
            <option value="lead">Lead/Manager</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Ubicación
          </label>
          <select 
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-8"
          >
            <option value="">Todas las ubicaciones</option>
            <option value="remoto">Trabajo Remoto</option>
            <option value="santiago">Santiago</option>
            <option value="valparaiso">Valparaíso</option>
            <option value="concepcion">Concepción</option>
            <option value="antofagasta">Antofagasta</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">
            Habilidades
          </label>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-2 rounded-full text-sm transition-colors cursor-pointer whitespace-nowrap ${
                  selectedSkills.includes(skill)
                    ? 'bg-teal-600 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-teal-100'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
}