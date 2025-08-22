
'use client';

import { useState } from 'react';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  profileImage: null | File;
}

interface ProfessionalInfo {
  title: string;
  experience: string;
  salary: string;
  availability: string;
  workMode: string;
}

interface Language {
  name: string;
  level: string;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
  description: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface Portfolio {
  website: string;
  linkedin: string;
  github: string;
}

interface AdditionalInfo {
  summary: string;
  achievements: string;
}

interface FormData {
  personalInfo: PersonalInfo;
  professionalInfo: ProfessionalInfo;
  skills: string[];
  languages: Language[];
  education: Education[];
  experience: Experience[];
  portfolio: Portfolio;
  additionalInfo: AdditionalInfo;
}

export default function CreateProfileForm() {
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      profileImage: null
    },
    professionalInfo: {
      title: '',
      experience: '',
      salary: '',
      availability: '',
      workMode: ''
    },
    skills: [],
    languages: [],
    education: [],
    experience: [],
    portfolio: {
      website: '',
      linkedin: '',
      github: ''
    },
    additionalInfo: {
      summary: '',
      achievements: ''
    }
  });

  const [currentSection, setCurrentSection] = useState('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sections = [
    { id: 'personal', title: 'Información Personal', icon: 'ri-user-line' },
    { id: 'professional', title: 'Información Profesional', icon: 'ri-briefcase-line' },
    { id: 'skills', title: 'Habilidades', icon: 'ri-tools-line' },
    { id: 'education', title: 'Educación', icon: 'ri-graduation-cap-line' },
    { id: 'experience', title: 'Experiencia', icon: 'ri-time-line' },
    { id: 'portfolio', title: 'Portafolio', icon: 'ri-links-line' },
    { id: 'additional', title: 'Información Adicional', icon: 'ri-file-text-line' }
  ];

  const availableSkills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'Java', 'Angular', 'Vue.js', 
    'PHP', 'C#', 'Ruby', 'Go', 'TypeScript', 'Docker', 'Kubernetes', 'AWS',
    'HTML/CSS', 'SQL', 'MongoDB', 'PostgreSQL', 'Git', 'Figma', 'Adobe XD'
  ];

  const languages = [
    { name: 'Español', levels: ['Nativo', 'Avanzado', 'Intermedio', 'Básico'] },
    { name: 'Inglés', levels: ['Nativo', 'Avanzado', 'Intermedio', 'Básico'] },
    { name: 'Francés', levels: ['Nativo', 'Avanzado', 'Intermedio', 'Básico'] },
    { name: 'Alemán', levels: ['Nativo', 'Avanzado', 'Intermedio', 'Básico'] },
    { name: 'Portugués', levels: ['Nativo', 'Avanzado', 'Intermedio', 'Básico'] }
  ];

  const handleInputChange = (section: keyof FormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleLanguageChange = (language: string, level: string) => {
    setFormData(prev => {
      const existingLanguages = prev.languages.filter(l => l.name !== language);
      return {
        ...prev,
        languages: level ? [...existingLanguages, { name: language, level }] : existingLanguages
      };
    });
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { institution: '', degree: '', year: '', description: '' }]
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', position: '', duration: '', description: '' }]
    }));
  };

  const updateExperience = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (index: number) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Nombre *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.personalInfo.firstName}
            onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Apellido *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.personalInfo.lastName}
            onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.personalInfo.email}
            onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.personalInfo.phone}
            onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Ubicación *
        </label>
        <select
          name="location"
          value={formData.personalInfo.location}
          onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
          className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-8"
          required
        >
          <option value="">Selecciona tu ubicación</option>
          <option value="santiago">Santiago</option>
          <option value="valparaiso">Valparaíso</option>
          <option value="concepcion">Concepción</option>
          <option value="antofagasta">Antofagasta</option>
          <option value="temuco">Temuco</option>
          <option value="iquique">Iquique</option>
          <option value="remoto">Trabajo Remoto</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Foto de Perfil
        </label>
        <div className="border-2 border-dashed border-stone-300 rounded-lg p-6 text-center">
          <i className="ri-camera-line text-3xl text-stone-400 mb-2"></i>
          <p className="text-stone-600 mb-2">Arrastra una imagen o haz clic para seleccionar</p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="profileImage"
          />
          <label htmlFor="profileImage" className="cursor-pointer bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap">
            Seleccionar Archivo
          </label>
          <p className="text-xs text-stone-500 mt-2">Formato: JPG, PNG. Tamaño máximo: 5MB</p>
        </div>
      </div>
    </div>
  );

  const renderProfessionalInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Título Profesional *
        </label>
        <input
          type="text"
          name="title"
          value={formData.professionalInfo.title}
          onChange={(e) => handleInputChange('professionalInfo', 'title', e.target.value)}
          placeholder="ej. Senior Full Stack Developer"
          className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Años de Experiencia *
          </label>
          <select
            name="experience"
            value={formData.professionalInfo.experience}
            onChange={(e) => handleInputChange('professionalInfo', 'experience', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-8"
            required
          >
            <option value="">Selecciona tu experiencia</option>
            <option value="0-1">0-1 años</option>
            <option value="1-2">1-2 años</option>
            <option value="2-5">2-5 años</option>
            <option value="5-10">5-10 años</option>
            <option value="10+">10+ años</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Modalidad de Trabajo
          </label>
          <select
            name="workMode"
            value={formData.professionalInfo.workMode}
            onChange={(e) => handleInputChange('professionalInfo', 'workMode', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-8"
          >
            <option value="">Selecciona modalidad</option>
            <option value="presencial">Presencial</option>
            <option value="remoto">Remoto</option>
            <option value="hibrido">Híbrido</option>
            <option value="cualquiera">Cualquiera</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Pretensión Salarial (CLP)
          </label>
          <select
            name="salary"
            value={formData.professionalInfo.salary}
            onChange={(e) => handleInputChange('professionalInfo', 'salary', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-8"
          >
            <option value="">Selecciona rango salarial</option>
            <option value="500000-800000">$500,000 - $800,000</option>
            <option value="800000-1200000">$800,000 - $1,200,000</option>
            <option value="1200000-1800000">$1,200,000 - $1,800,000</option>
            <option value="1800000-2500000">$1,800,000 - $2,500,000</option>
            <option value="2500000-3500000">$2,500,000 - $3,500,000</option>
            <option value="3500000+">$3,500,000+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Disponibilidad
          </label>
          <select
            name="availability"
            value={formData.professionalInfo.availability}
            onChange={(e) => handleInputChange('professionalInfo', 'availability', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-8"
          >
            <option value="">Selecciona disponibilidad</option>
            <option value="inmediata">Inmediata</option>
            <option value="1-semana">1 semana</option>
            <option value="2-semanas">2 semanas</option>
            <option value="1-mes">1 mes</option>
            <option value="2-meses">2 meses</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-stone-800 mb-4">Habilidades Técnicas</h3>
        <p className="text-stone-600 mb-4">Selecciona las habilidades que dominas</p>
        <div className="flex flex-wrap gap-3">
          {availableSkills.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => handleSkillToggle(skill)}
              className={`px-4 py-2 rounded-full border transition-colors cursor-pointer whitespace-nowrap ${
                formData.skills.includes(skill)
                  ? 'bg-teal-600 text-white border-teal-600'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-teal-300'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-stone-800 mb-4">Idiomas</h3>
        <div className="space-y-4">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center justify-between p-4 border border-stone-200 rounded-lg">
              <span className="font-medium text-stone-700">{lang.name}</span>
              <select
                value={formData.languages.find(l => l.name === lang.name)?.level || ''}
                onChange={(e) => handleLanguageChange(lang.name, e.target.value)}
                className="border border-stone-300 rounded px-3 py-1 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-8"
              >
                <option value="">Nivel</option>
                {lang.levels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-stone-800">Educación</h3>
        <button
          type="button"
          onClick={addEducation}
          className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 cursor-pointer whitespace-nowrap"
        >
          <i className="ri-add-line"></i>
          <span>Agregar Educación</span>
        </button>
      </div>

      {formData.education.length === 0 && (
        <div className="text-center py-8 text-stone-500">
          <i className="ri-graduation-cap-line text-3xl mb-2"></i>
          <p>No has agregado información educativa aún</p>
        </div>
      )}

      {formData.education.map((edu, index) => (
        <div key={index} className="border border-stone-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-stone-800">Educación #{index + 1}</h4>
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
            >
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Institución
              </label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Título/Carrera
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Año de Graduación
            </label>
            <input
              type="text"
              value={edu.year}
              onChange={(e) => updateEducation(index, 'year', e.target.value)}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Descripción
            </label>
            <textarea
              value={edu.description}
              onChange={(e) => updateEducation(index, 'description', e.target.value)}
              maxLength={500}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 h-24 resize-none"
            />
            <p className="text-xs text-stone-500 mt-1">{edu.description.length}/500 caracteres</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-stone-800">Experiencia Laboral</h3>
        <button
          type="button"
          onClick={addExperience}
          className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 cursor-pointer whitespace-nowrap"
        >
          <i className="ri-add-line"></i>
          <span>Agregar Experiencia</span>
        </button>
      </div>

      {formData.experience.length === 0 && (
        <div className="text-center py-8 text-stone-500">
          <i className="ri-briefcase-line text-3xl mb-2"></i>
          <p>No has agregado experiencia laboral aún</p>
        </div>
      )}

      {formData.experience.map((exp, index) => (
        <div key={index} className="border border-stone-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-stone-800">Experiencia #{index + 1}</h4>
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
            >
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Empresa
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Cargo
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Duración
            </label>
            <input
              type="text"
              value={exp.duration}
              onChange={(e) => updateExperience(index, 'duration', e.target.value)}
              placeholder="ej. Enero 2020 - Presente"
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Descripción de Responsabilidades
            </label>
            <textarea
              value={exp.description}
              onChange={(e) => updateExperience(index, 'description', e.target.value)}
              maxLength={500}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 h-32 resize-none"
            />
            <p className="text-xs text-stone-500 mt-1">{exp.description.length}/500 caracteres</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPortfolio = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-stone-800 mb-4">Enlaces de Portafolio</h3>
        <p className="text-stone-600 mb-6">Comparte tus perfiles profesionales y proyectos</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Sitio Web Personal
          </label>
          <input
            type="url"
            name="website"
            value={formData.portfolio.website}
            onChange={(e) => handleInputChange('portfolio', 'website', e.target.value)}
            placeholder="https://tu-sitio-web.com"
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            LinkedIn
          </label>
          <input
            type="url"
            name="linkedin"
            value={formData.portfolio.linkedin}
            onChange={(e) => handleInputChange('portfolio', 'linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/tu-perfil"
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            GitHub
          </label>
          <input
            type="url"
            name="github"
            value={formData.portfolio.github}
            onChange={(e) => handleInputChange('portfolio', 'github', e.target.value)}
            placeholder="https://github.com/tu-usuario"
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <i className="ri-information-line text-teal-600 mt-1"></i>
          <div>
            <h4 className="font-semibold text-teal-800 mb-1">Consejos para tu portafolio</h4>
            <ul className="text-sm text-teal-700 space-y-1">
              <li>• Mantén tus perfiles actualizados</li>
              <li>• Incluye proyectos relevantes en GitHub</li>
              <li>• Optimiza tu perfil de LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdditionalInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Resumen Profesional
        </label>
        <textarea
          name="summary"
          value={formData.additionalInfo.summary}
          onChange={(e) => handleInputChange('additionalInfo', 'summary', e.target.value)}
          maxLength={500}
          placeholder="Describe brevemente tu experiencia, objetivos profesionales y lo que te hace único como candidato..."
          className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 h-32 resize-none"
        />
        <p className="text-xs text-stone-500 mt-1">{formData.additionalInfo.summary.length}/500 caracteres</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Logros y Reconocimientos
        </label>
        <textarea
          name="achievements"
          value={formData.additionalInfo.achievements}
          onChange={(e) => handleInputChange('additionalInfo', 'achievements', e.target.value)}
          maxLength={500}
          placeholder="Menciona premios, certificaciones, proyectos destacados o logros importantes..."
          className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 h-32 resize-none"
        />
        <p className="text-xs text-stone-500 mt-1">{formData.additionalInfo.achievements.length}/500 caracteres</p>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'personal': return renderPersonalInfo();
      case 'professional': return renderProfessionalInfo();
      case 'skills': return renderSkills();
      case 'education': return renderEducation();
      case 'experience': return renderExperience();
      case 'portfolio': return renderPortfolio();
      case 'additional': return renderAdditionalInfo();
      default: return renderPersonalInfo();
    }
  };

  return (
    <form id="candidate-profile-form" onSubmit={handleSubmit} className="space-y-8">
      {/* Navigation */}
      <div className="border-b border-stone-200 pb-4">
        <nav className="flex space-x-1 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setCurrentSection(section.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                currentSection === section.id
                  ? 'bg-teal-600 text-white'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <i className={`${section.icon} text-sm`}></i>
              <span className="text-sm font-medium">{section.title}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Current Section Content */}
      <div className="min-h-[400px]">
        {renderSection()}
      </div>

      {/* Submit Status */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <i className="ri-check-line text-green-600"></i>
            <div>
              <h4 className="font-semibold text-green-800">¡Perfil creado exitosamente!</h4>
              <p className="text-green-700">Tu perfil ha sido guardado y ya está disponible para reclutadores.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <i className="ri-error-warning-line text-red-600"></i>
            <div>
              <h4 className="font-semibold text-red-800">Error al crear el perfil</h4>
              <p className="text-red-700">Por favor, revisa la información e intenta nuevamente.</p>
            </div>
          </div>
        </div>
      )}

      {/* Form Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-stone-200">
        <div className="text-sm text-stone-500">
          Los campos marcados con * son obligatorios
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors cursor-pointer whitespace-nowrap"
          >
            Guardar Borrador
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              isSubmitting
                ? 'bg-stone-400 text-white cursor-not-allowed'
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <i className="ri-loader-line animate-spin"></i>
                <span>Creando Perfil...</span>
              </span>
            ) : (
              'Crear Perfil'
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
