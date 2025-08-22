'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function JobsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('fecha');

  const jobs = [
    {
      id: 1,
      title: 'Desarrollador Full Stack Senior',
      company: 'TechCorp Innovation',
      location: 'Madrid, España',
      salary: '€45,000 - €65,000',
      type: 'Tiempo Completo',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      posted: 'Hace 2 días',
      urgent: true,
      description: 'Buscamos un desarrollador senior con experiencia en tecnologías modernas para liderar proyectos de desarrollo web.'
    },
    {
      id: 2,
      title: 'Gerente de Marketing Digital',
      company: 'MarketPro Solutions',
      location: 'Barcelona, España',
      salary: '€40,000 - €55,000',
      type: 'Tiempo Completo',
      tags: ['SEO', 'SEM', 'Analytics', 'Social Media'],
      posted: 'Hace 1 día',
      urgent: false,
      description: 'Únete a nuestro equipo para desarrollar estrategias de marketing digital innovadoras.'
    },
    {
      id: 3,
      title: 'Diseñador UX/UI',
      company: 'CreativeStudio Plus',
      location: 'Valencia, España',
      salary: '€35,000 - €50,000',
      type: 'Remoto',
      tags: ['Figma', 'Sketch', 'Prototyping', 'Design Systems'],
      posted: 'Hace 3 días',
      urgent: false,
      description: 'Creamos experiencias digitales excepcionales. Buscamos un diseñador apasionado por la innovación.'
    },
    {
      id: 4,
      title: 'Analista de Datos Senior',
      company: 'DataInsights Corp',
      location: 'Sevilla, España',
      salary: '€38,000 - €52,000',
      type: 'Híbrido',
      tags: ['Python', 'SQL', 'Tableau', 'Machine Learning'],
      posted: 'Hace 1 día',
      urgent: true,
      description: 'Transforma datos en insights valiosos para nuestros clientes empresariales.'
    },
    {
      id: 5,
      title: 'Especialista en Ciberseguridad',
      company: 'SecureTech Systems',
      location: 'Bilbao, España',
      salary: '€50,000 - €70,000',
      type: 'Tiempo Completo',
      tags: ['Ethical Hacking', 'CISSP', 'Firewall', 'Penetration Testing'],
      posted: 'Hace 4 días',
      urgent: false,
      description: 'Protege la infraestructura digital de empresas líderes en el mercado.'
    },
    {
      id: 6,
      title: 'Project Manager Ágil',
      company: 'ProjectPro Enterprise',
      location: 'Zaragoza, España',
      salary: '€42,000 - €58,000',
      type: 'Tiempo Completo',
      tags: ['Agile', 'Scrum', 'JIRA', 'Kanban'],
      posted: 'Hace 2 días',
      urgent: false,
      description: 'Lidera equipos multidisciplinarios en proyectos de alta complejidad.'
    },
    {
      id: 7,
      title: 'Desarrollador Mobile (iOS/Android)',
      company: 'MobileTech Innovations',
      location: 'Granada, España',
      salary: '€40,000 - €60,000',
      type: 'Remoto',
      tags: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
      posted: 'Hace 3 días',
      urgent: true,
      description: 'Desarrolla aplicaciones móviles que impactan a millones de usuarios.'
    },
    {
      id: 8,
      title: 'Consultor SAP Senior',
      company: 'Enterprise Solutions Ltd',
      location: 'Málaga, España',
      salary: '€55,000 - €75,000',
      type: 'Híbrido',
      tags: ['SAP HANA', 'ABAP', 'Fiori', 'S/4HANA'],
      posted: 'Hace 5 días',
      urgent: false,
      description: 'Implementa soluciones SAP para grandes corporaciones internacionales.'
    }
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-stone-800">
            {jobs.length} empleos encontrados
          </h2>
          <p className="text-stone-600 text-sm">
            Mostrando resultados más relevantes
          </p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <span className="text-sm text-stone-600">Ordenar por:</span>
          <button 
            onClick={() => setSortBy('fecha')}
            className={`px-3 py-1 rounded-full text-sm cursor-pointer whitespace-nowrap ${
              sortBy === 'fecha' ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
            }`}
          >
            Fecha
          </button>
          <button 
            onClick={() => setSortBy('relevancia')}
            className={`px-3 py-1 rounded-full text-sm cursor-pointer whitespace-nowrap ${
              sortBy === 'relevancia' ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
            }`}
          >
            Relevancia
          </button>
          <button 
            onClick={() => setSortBy('salario')}
            className={`px-3 py-1 rounded-full text-sm cursor-pointer whitespace-nowrap ${
              sortBy === 'salario' ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
            }`}
          >
            Salario
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-semibold text-stone-800">
                    {job.title}
                  </h3>
                  {job.urgent && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                      Urgente
                    </span>
                  )}
                </div>
                <p className="text-amber-800 font-medium mb-2">
                  {job.company}
                </p>
                <p className="text-stone-600 mb-4">
                  {job.description}
                </p>
              </div>
              
              <button className="w-8 h-8 flex items-center justify-center cursor-pointer ml-4">
                <i className="ri-heart-line text-stone-400 hover:text-red-500 transition-colors"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center text-stone-600">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </div>
                {job.location}
              </div>
              <div className="flex items-center text-stone-600">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-money-dollar-circle-line"></i>
                </div>
                {job.salary}
              </div>
              <div className="flex items-center text-stone-600">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-time-line"></i>
                </div>
                {job.type}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-stone-500">
                Publicado {job.posted}
              </span>
              <div className="flex space-x-2">
                <button className="text-amber-800 hover:text-amber-900 px-4 py-2 rounded-lg border border-amber-800 hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap">
                  Guardar
                </button>
                <Link href={`/empleos/${job.id}`}
                      className="bg-amber-800 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors cursor-pointer whitespace-nowrap">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg cursor-pointer ${
                currentPage === page 
                  ? 'bg-amber-800 text-white' 
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}