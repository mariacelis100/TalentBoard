'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FeaturedJobs() {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);

  const jobs = [
    {
      id: 1,
      title: 'Desarrollador Full Stack Senior',
      company: 'TechCorp',
      location: 'Madrid, España',
      salary: '€45,000 - €65,000',
      type: 'Tiempo Completo',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      posted: 'Hace 2 días',
      logo: '💻',
      urgency: 'high',
      companyLogo: '🏢'
    },
    {
      id: 2,
      title: 'Gerente de Marketing Digital',
      company: 'MarketPro',
      location: 'Barcelona, España',
      salary: '€40,000 - €55,000',
      type: 'Tiempo Completo',
      tags: ['SEO', 'SEM', 'Analytics'],
      posted: 'Hace 1 día',
      logo: '📈',
      urgency: 'medium',
      companyLogo: '🎯'
    },
    {
      id: 3,
      title: 'Diseñador UX/UI',
      company: 'CreativeStudio',
      location: 'Valencia, España',
      salary: '€35,000 - €50,000',
      type: 'Remoto',
      tags: ['Figma', 'Sketch', 'Prototyping'],
      posted: 'Hace 3 días',
      logo: '🎨',
      urgency: 'low',
      companyLogo: '✨'
    },
    {
      id: 4,
      title: 'Analista de Datos',
      company: 'DataInsights',
      location: 'Sevilla, España',
      salary: '€38,000 - €52,000',
      type: 'Híbrido',
      tags: ['Python', 'SQL', 'Tableau'],
      posted: 'Hace 1 día',
      logo: '📊',
      urgency: 'high',
      companyLogo: '🔍'
    },
    {
      id: 5,
      title: 'Especialista en Ciberseguridad',
      company: 'SecureTech',
      location: 'Bilbao, España',
      salary: '€50,000 - €70,000',
      type: 'Tiempo Completo',
      tags: ['Ethical Hacking', 'CISSP', 'Firewall'],
      posted: 'Hace 4 días',
      logo: '🔒',
      urgency: 'medium',
      companyLogo: '🛡️'
    },
    {
      id: 6,
      title: 'Project Manager',
      company: 'ProjectPro',
      location: 'Zaragoza, España',
      salary: '€42,000 - €58,000',
      type: 'Tiempo Completo',
      tags: ['Agile', 'Scrum', 'JIRA'],
      posted: 'Hace 2 días',
      logo: '📋',
      urgency: 'low',
      companyLogo: '📁'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'Urgente';
      case 'medium': return 'Activo';
      case 'low': return 'Disponible';
      default: return 'Activo';
    }
  };

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6">
            <i className="ri-star-fill text-2xl text-amber-600"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Empleos Destacados
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Descubre las mejores oportunidades laborales seleccionadas especialmente para ti
          </p>
        </div>

        {/* Grid de empleos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobs.map((job, index) => (
            <div 
              key={job.id} 
              className={`card-hover group relative overflow-hidden ${hoveredJob === job.id ? 'ring-2 ring-amber-200' : ''}`}
              onMouseEnter={() => setHoveredJob(job.id)}
              onMouseLeave={() => setHoveredJob(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Indicador de urgencia */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(job.urgency)}`}>
                {getUrgencyText(job.urgency)}
              </div>

              {/* Header del empleo */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 text-lg group-hover:text-amber-800 transition-colors leading-tight">
                      {job.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-stone-500 text-sm">{job.companyLogo}</span>
                      <p className="text-stone-600 font-medium">
                        {job.company}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Botón de favorito */}
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-50 transition-colors group/fav">
                  <i className="ri-heart-line text-xl text-stone-400 group-hover/fav:text-red-500 transition-colors"></i>
                </button>
              </div>

              {/* Información del empleo */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-stone-600 group-hover:text-stone-700 transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center mr-3 text-amber-600">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span className="text-sm font-medium">{job.location}</span>
                </div>
                <div className="flex items-center text-stone-600 group-hover:text-stone-700 transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center mr-3 text-amber-600">
                    <i className="ri-money-dollar-circle-line"></i>
                  </div>
                  <span className="text-sm font-medium">{job.salary}</span>
                </div>
                <div className="flex items-center text-stone-600 group-hover:text-stone-700 transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center mr-3 text-amber-600">
                    <i className="ri-time-line"></i>
                  </div>
                  <span className="text-sm font-medium">{job.type}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map((tag, index) => (
                  <span key={index} className="tag text-xs px-3 py-1.5 hover:bg-amber-200 transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <span className="text-sm text-stone-500 font-medium">
                  {job.posted}
                </span>
                <Link 
                  href={`/empleos/${job.id}`}
                  className="btn-primary text-sm px-6 py-2.5 group-hover:scale-105 transform transition-all duration-200"
                >
                  Ver Detalles
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>

              {/* Efecto de hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 to-amber-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/empleos" 
            className="btn-primary text-lg px-10 py-4 inline-flex items-center group hover:scale-105 transform transition-all duration-200"
          >
            <span>Ver Todos los Empleos</span>
            <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}