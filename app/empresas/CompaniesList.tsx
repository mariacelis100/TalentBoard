'use client';

import { useState } from 'react';

interface Company {
  id: number;
  name: string;
  industry: string;
  size: string;
  location: string;
  openJobs: number;
  description: string;
  benefits: string[];
  rating: number;
  founded: string;
  website: string;
  logo: string;
  featured: boolean;
}

export default function CompaniesList() {
  const [following, setFollowing] = useState<number[]>([]);

  const companies: Company[] = [
    {
      id: 1,
      name: "TechCorp Solutions",
      industry: "Tecnología",
      size: "Grande (500+ empleados)",
      location: "Santiago, Chile",
      openJobs: 12,
      description: "Líder en desarrollo de software empresarial con más de 10 años de experiencia en el mercado latinoamericano.",
      benefits: ["Trabajo Remoto", "Seguro Médico", "Capacitaciones", "Horario Flexible"],
      rating: 4.8,
      founded: "2010",
      website: "techcorp.cl",
      logo: "https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20with%20clean%20geometric%20design%20featuring%20turquoise%20and%20cyan%20colors%20professional%20corporate%20branding%20for%20software%20development%20company&width=200&height=200&seq=company-logo-1&orientation=squarish",
      featured: true
    },
    {
      id: 2,
      name: "InnovateBank",
      industry: "Finanzas",
      size: "Grande (1000+ empleados)",
      location: "Santiago, Chile",
      openJobs: 8,
      description: "Banco digital innovador que está transformando la industria financiera con tecnología de vanguardia.",
      benefits: ["Bonos", "Seguro Médico", "Gimnasio", "Stock Options"],
      rating: 4.6,
      founded: "2015",
      website: "innovatebank.cl",
      logo: "https://readdy.ai/api/search-image?query=Professional%20financial%20institution%20logo%20with%20sophisticated%20design%20incorporating%20teal%20and%20cyan%20elements%20representing%20trust%20and%20innovation%20in%20banking%20sector&width=200&height=200&seq=company-logo-2&orientation=squarish",
      featured: true
    },
    {
      id: 3,
      name: "HealthTech Labs",
      industry: "Salud",
      size: "Mediana (200 empleados)",
      location: "Valparaíso, Chile",
      openJobs: 15,
      description: "Startup de salud digital enfocada en desarrollar soluciones tecnológicas para mejorar la atención médica.",
      benefits: ["Trabajo Remoto", "Vacaciones Extra", "Capacitaciones", "Horario Flexible"],
      rating: 4.9,
      founded: "2018",
      website: "healthtechlabs.cl",
      logo: "https://readdy.ai/api/search-image?query=Healthcare%20technology%20company%20logo%20with%20medical%20cross%20and%20digital%20elements%20using%20turquoise%20color%20palette%20representing%20innovation%20in%20health%20sector&width=200&height=200&seq=company-logo-3&orientation=squarish",
      featured: false
    },
    {
      id: 4,
      name: "EduPlus Academy",
      industry: "Educación",
      size: "Mediana (150 empleados)",
      location: "Concepción, Chile",
      openJobs: 6,
      description: "Plataforma educativa online líder en América Latina, especializada en cursos de tecnología y desarrollo profesional.",
      benefits: ["Capacitaciones", "Horario Flexible", "Trabajo Remoto", "Descuentos Educativos"],
      rating: 4.7,
      founded: "2016",
      website: "eduplus.cl",
      logo: "https://readdy.ai/api/search-image?query=Educational%20technology%20company%20logo%20with%20graduation%20cap%20and%20book%20elements%20featuring%20cyan%20and%20teal%20colors%20symbolizing%20learning%20and%20growth&width=200&height=200&seq=company-logo-4&orientation=squarish",
      featured: false
    },
    {
      id: 5,
      name: "GreenEnergy Co",
      industry: "Energía",
      size: "Grande (800 empleados)",
      location: "Antofagasta, Chile",
      openJobs: 20,
      description: "Empresa líder en energías renovables, desarrollando proyectos solares y eólicos a gran escala en Chile.",
      benefits: ["Seguro Médico", "Bonos", "Gimnasio", "Transporte"],
      rating: 4.5,
      founded: "2012",
      website: "greenenergy.cl",
      logo: "https://readdy.ai/api/search-image?query=Renewable%20energy%20company%20logo%20with%20solar%20panel%20and%20wind%20turbine%20elements%20using%20turquoise%20and%20green%20colors%20representing%20sustainable%20energy%20solutions&width=200&height=200&seq=company-logo-5&orientation=squarish",
      featured: true
    },
    {
      id: 6,
      name: "DataMind Analytics",
      industry: "Consultoría",
      size: "Pequeña (80 empleados)",
      location: "Santiago, Chile",
      openJobs: 10,
      description: "Consultora especializada en análisis de datos y business intelligence para empresas de diversos sectores.",
      benefits: ["Trabajo Remoto", "Capacitaciones", "Horario Flexible", "Proyectos Internacionales"],
      rating: 4.8,
      founded: "2019",
      website: "datamind.cl",
      logo: "https://readdy.ai/api/search-image?query=Data%20analytics%20consulting%20company%20logo%20with%20graph%20charts%20and%20analytical%20elements%20featuring%20cyan%20and%20turquoise%20gradient%20representing%20data%20intelligence&width=200&height=200&seq=company-logo-6&orientation=squarish",
      featured: false
    }
  ];

  const toggleFollow = (companyId: number) => {
    setFollowing(prev => 
      prev.includes(companyId)
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-cyan-800">
          {companies.length} Empresas Encontradas
        </h2>
        <div className="flex items-center space-x-4">
          <span className="text-stone-600">Ordenar por:</span>
          <select className="border border-stone-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 pr-8">
            <option>Relevancia</option>
            <option>Nombre</option>
            <option>Empleos Disponibles</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {companies.map((company) => (
          <div key={company.id} className={`bg-white rounded-lg shadow-sm border ${company.featured ? 'border-cyan-200 ring-1 ring-cyan-100' : 'border-stone-200'} p-6 hover:shadow-md transition-shadow`}>
            {company.featured && (
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
                Empresa Destacada
              </div>
            )}
            
            <div className="flex items-start space-x-4">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-16 h-16 rounded-lg object-cover object-top"
              />
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{company.name}</h3>
                    <p className="text-cyan-700 font-semibold">{company.industry}</p>
                    <div className="flex items-center space-x-4 text-stone-600 text-sm mt-1">
                      <span className="flex items-center">
                        <i className="ri-building-line mr-1"></i>
                        {company.size}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-map-pin-line mr-1"></i>
                        {company.location}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-briefcase-line mr-1"></i>
                        {company.openJobs} empleos
                      </span>
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 mr-1"></i>
                        <span>{company.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleFollow(company.id)}
                    className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      following.includes(company.id)
                        ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                        : 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50'
                    }`}
                  >
                    {following.includes(company.id) ? 'Siguiendo' : 'Seguir'}
                  </button>
                </div>

                <p className="text-stone-600 mt-3 mb-4">{company.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {company.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-stone-600">
                    <span>Fundada en {company.founded}</span>
                    <span className="flex items-center">
                      <i className="ri-global-line mr-1"></i>
                      {company.website}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors cursor-pointer whitespace-nowrap">
                      Ver Perfil
                    </button>
                    <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors cursor-pointer whitespace-nowrap">
                      Ver Empleos ({company.openJobs})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}