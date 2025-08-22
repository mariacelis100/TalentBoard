'use client';

import { useState } from 'react';

interface Candidate {
  id: number;
  name: string;
  title: string;
  experience: string;
  location: string;
  skills: string[];
  salary: string;
  availability: string;
  image: string;
  rating: number;
  verified: boolean;
}

export default function CandidatesList() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const candidates: Candidate[] = [
    {
      id: 1,
      name: "María González",
      title: "Senior Full Stack Developer",
      experience: "6 años",
      location: "Santiago, Chile",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      salary: "$2,800,000 - $3,200,000",
      availability: "Disponible inmediatamente",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20software%20developer%20portrait%20with%20confident%20smile%20in%20modern%20office%20setting%20wearing%20business%20casual%20attire%20with%20turquoise%20background%20elements&width=300&height=300&seq=candidate-1&orientation=squarish",
      rating: 4.9,
      verified: true
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      title: "Data Scientist & ML Engineer",
      experience: "4 años",
      location: "Valparaíso, Chile",
      skills: ["Python", "TensorFlow", "SQL", "Docker"],
      salary: "$2,400,000 - $2,800,000",
      availability: "Disponible en 2 semanas",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20data%20scientist%20portrait%20with%20analytical%20expression%20in%20tech%20office%20environment%20wearing%20smart%20casual%20clothing%20with%20teal%20background%20accents&width=300&height=300&seq=candidate-2&orientation=squarish",
      rating: 4.8,
      verified: true
    },
    {
      id: 3,
      name: "Ana Martínez",
      title: "UX/UI Designer",
      experience: "5 años",
      location: "Remoto",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      salary: "$1,800,000 - $2,200,000",
      availability: "Disponible inmediatamente",
      image: "https://readdy.ai/api/search-image?query=Creative%20female%20UX%20designer%20portrait%20with%20artistic%20flair%20in%20modern%20design%20studio%20wearing%20stylish%20creative%20outfit%20with%20turquoise%20design%20elements&width=300&height=300&seq=candidate-3&orientation=squarish",
      rating: 4.7,
      verified: false
    },
    {
      id: 4,
      name: "Luis Hernández",
      title: "DevOps Engineer",
      experience: "7 años",
      location: "Concepción, Chile",
      skills: ["Kubernetes", "AWS", "Jenkins", "Terraform"],
      salary: "$3,000,000 - $3,500,000",
      availability: "Disponible en 1 mes",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20DevOps%20engineer%20portrait%20with%20technical%20expertise%20in%20server%20room%20environment%20wearing%20casual%20tech%20attire%20with%20cyan%20technological%20background&width=300&height=300&seq=candidate-4&orientation=squarish",
      rating: 4.9,
      verified: true
    },
    {
      id: 5,
      name: "Sofía Morales",
      title: "Mobile App Developer",
      experience: "3 años",
      location: "Santiago, Chile",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      salary: "$2,200,000 - $2,600,000",
      availability: "Disponible inmediatamente",
      image: "https://readdy.ai/api/search-image?query=Young%20professional%20female%20mobile%20developer%20portrait%20with%20innovative%20spirit%20in%20startup%20office%20wearing%20modern%20casual%20tech%20clothing%20with%20teal%20mobile%20interface%20elements&width=300&height=300&seq=candidate-5&orientation=squarish",
      rating: 4.6,
      verified: true
    },
    {
      id: 6,
      name: "Diego Fernández",
      title: "Cybersecurity Specialist",
      experience: "8 años",
      location: "Santiago, Chile",
      skills: ["Penetration Testing", "CISSP", "Ethical Hacking", "Security Audit"],
      salary: "$3,200,000 - $3,800,000",
      availability: "Disponible en 3 semanas",
      image: "https://readdy.ai/api/search-image?query=Experienced%20male%20cybersecurity%20expert%20portrait%20with%20serious%20professional%20demeanor%20in%20high%20tech%20security%20center%20wearing%20business%20attire%20with%20turquoise%20security%20interface%20elements&width=300&height=300&seq=candidate-6&orientation=squarish",
      rating: 4.8,
      verified: true
    }
  ];

  const toggleFavorite = (candidateId: number) => {
    setFavorites(prev => 
      prev.includes(candidateId)
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-teal-800">
          {candidates.length} Candidatos Encontrados
        </h2>
        <div className="flex items-center space-x-4">
          <span className="text-stone-600">Ordenar por:</span>
          <select className="border border-stone-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-8">
            <option>Relevancia</option>
            <option>Experiencia</option>
            <option>Salario</option>
            <option>Disponibilidad</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-20 h-20 rounded-full object-cover object-top"
              />
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold text-stone-900">{candidate.name}</h3>
                      {candidate.verified && (
                        <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center">
                          <i className="ri-check-line text-white text-xs"></i>
                        </div>
                      )}
                    </div>
                    <p className="text-teal-700 font-semibold">{candidate.title}</p>
                    <div className="flex items-center space-x-4 text-stone-600 text-sm mt-1">
                      <span className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        {candidate.experience}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-map-pin-line mr-1"></i>
                        {candidate.location}
                      </span>
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 mr-1"></i>
                        <span>{candidate.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleFavorite(candidate.id)}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer"
                  >
                    <i className={`${favorites.includes(candidate.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-stone-400'} text-lg`}></i>
                  </button>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {candidate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-stone-600">
                      <p className="font-semibold text-stone-800">{candidate.salary}</p>
                      <p>{candidate.availability}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap">
                        Ver Perfil
                      </button>
                      <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                        Contactar
                      </button>
                    </div>
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