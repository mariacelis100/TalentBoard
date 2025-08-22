
'use client';

import { useState } from 'react';

export default function PublishJobForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Información básica del empleo
    jobTitle: '',
    department: '',
    employmentType: '',
    workLocation: '',
    remoteOption: '',
    
    // Descripción del puesto
    jobDescription: '',
    responsibilities: '',
    requirements: '',
    preferredQualifications: '',
    
    // Compensación y beneficios
    salaryType: '',
    salaryMin: '',
    salaryMax: '',
    currency: 'EUR',
    additionalBenefits: [] as string[],
    
    // Detalles de aplicación
    applicationDeadline: '',
    startDate: '',
    numberOfPositions: '1',
    urgencyLevel: 'normal',
    
    // Habilidades requeridas
    requiredSkills: [] as string[],
    experienceLevel: '',
    educationLevel: '',
    languageRequirements: [] as string[],
    
    // Información adicional
    companyDescription: '',
    whyJoinUs: '',
    applicationInstructions: '',
    contactEmail: '',
    interviewProcess: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Datos simulados de la empresa logueada
  const companyInfo = {
    name: 'TechCorp Innovation',
    logo: 'https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20clean%20blue%20and%20white%20design%2C%20professional%20corporate%20branding%2C%20minimalist%20style&width=200&height=200&seq=company-logo-001&orientation=squarish',
    industry: 'Tecnología',
    size: '201-500 empleados',
    location: 'Madrid, España'
  };

  const steps = [
    { id: 0, title: 'Información Básica', icon: 'ri-information-line' },
    { id: 1, title: 'Descripción del Puesto', icon: 'ri-file-text-line' },
    { id: 2, title: 'Compensación', icon: 'ri-money-euro-circle-line' },
    { id: 3, title: 'Requisitos', icon: 'ri-user-star-line' },
    { id: 4, title: 'Detalles de Aplicación', icon: 'ri-calendar-check-line' },
    { id: 5, title: 'Información Adicional', icon: 'ri-add-circle-line' }
  ];

  const employmentTypes = [
    'Tiempo Completo', 'Medio Tiempo', 'Temporal', 'Prácticas', 
    'Freelance', 'Consultoría', 'Por Proyectos'
  ];

  const workLocations = [
    'Oficina', 'Remoto', 'Híbrido', 'Campo', 'Múltiples ubicaciones'
  ];

  const experienceLevels = [
    'Sin experiencia', 'Junior (1-2 años)', 'Intermedio (3-5 años)', 
    'Senior (5+ años)', 'Ejecutivo/Directivo'
  ];

  const educationLevels = [
    'Sin requisitos específicos', 'Bachillerato', 'Técnico/Tecnológico',
    'Universitario', 'Posgrado', 'Doctorado'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Baja - Proceso estándar' },
    { value: 'normal', label: 'Normal - Llenar en 2-4 semanas' },
    { value: 'high', label: 'Alta - Llenar en 1-2 semanas' },
    { value: 'urgent', label: 'Urgente - Llenar inmediatamente' }
  ];

  const commonSkills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'AWS', 'Docker',
    'Project Management', 'Agile', 'Scrum', 'Marketing Digital', 'SEO',
    'Photoshop', 'Figma', 'Excel', 'PowerBI', 'Salesforce', 'SAP'
  ];

  const commonBenefits = [
    'Seguro médico premium', 'Vacaciones adicionales', 'Horario flexible',
    'Trabajo remoto', 'Capacitación y desarrollo', 'Gimnasio corporativo',
    'Comida gratis', 'Transporte corporativo', 'Bonos por desempeño',
    'Stock options', 'Días de salud mental', 'Descuentos corporativos'
  ];

  const languages = [
    'Español (nativo)', 'Inglés (básico)', 'Inglés (intermedio)', 
    'Inglés (avanzado)', 'Francés', 'Alemán', 'Portugués', 'Italiano'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field: string, item: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).includes(item)
        ? (prev[field as keyof typeof prev] as string[]).filter(i => i !== item)
        : [...(prev[field as keyof typeof prev] as string[]), item]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-teal-800 mb-4">Información Básica del Empleo</h3>
            
            <div className="bg-stone-50 p-4 rounded-lg mb-6">
              <div className="flex items-center space-x-3">
                <img src={companyInfo.logo} alt="Company Logo" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <h4 className="font-semibold text-stone-800">{companyInfo.name}</h4>
                  <p className="text-sm text-stone-600">{companyInfo.industry} • {companyInfo.size}</p>
                  <p className="text-sm text-stone-600">{companyInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Título del Puesto *
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                  placeholder="ej. Desarrollador Full Stack Senior"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Departamento
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                  placeholder="ej. Tecnología, Marketing, Ventas"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Tipo de Empleo *
                </label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={(e) => handleInputChange('employmentType', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm pr-8"
                  required
                >
                  <option value="">Selecciona el tipo</option>
                  {employmentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Modalidad de Trabajo *
                </label>
                <select
                  name="workLocation"
                  value={formData.workLocation}
                  onChange={(e) => handleInputChange('workLocation', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm pr-8"
                  required
                >
                  <option value="">Selecciona modalidad</option>
                  {workLocations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Flexibilidad Remota
              </label>
              <textarea
                name="remoteOption"
                value={formData.remoteOption}
                onChange={(e) => handleInputChange('remoteOption', e.target.value)}
                rows={3}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm resize-none"
                placeholder="Detalla las opciones de trabajo remoto o híbrido disponibles..."
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.remoteOption.length}/500 caracteres
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-teal-800 mb-4">Descripción del Puesto</h3>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Descripción General del Trabajo *
              </label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={(e) => handleInputChange('jobDescription', e.target.value)}
                rows={5}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm resize-none"
                placeholder="Describe de qué se trata este puesto de trabajo, el contexto del equipo y cómo contribuye a la empresa..."
                required
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.jobDescription.length}/500 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Responsabilidades Principales *
              </label>
              <textarea
                name="responsibilities"
                value={formData.responsibilities}
                onChange={(e) => handleInputChange('responsibilities', e.target.value)}
                rows={5}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm resize-none"
                placeholder="Lista las principales responsabilidades y tareas que realizará la persona en este puesto..."
                required
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.responsibilities.length}/500 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Requisitos Obligatorios *
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                rows={4}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm resize-none"
                placeholder="Lista los requisitos mínimos indispensables para aplicar a este puesto..."
                required
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.requirements.length}/500 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Cualificaciones Preferidas
              </label>
              <textarea
                name="preferredQualifications"
                value={formData.preferredQualifications}
                onChange={(e) => handleInputChange('preferredQualifications', e.target.value)}
                rows={3}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm resize-none"
                placeholder="Lista las cualificaciones que serían ideales pero no indispensables..."
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.preferredQualifications.length}/500 caracteres
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-teal-800 mb-4">Compensación y Beneficios</h3>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Tipo de Salario *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['Rango salarial', 'Salario fijo', 'A convenir'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer p-3 border border-stone-200 rounded-lg hover:bg-stone-50">
                    <input
                      type="radio"
                      name="salaryType"
                      value={type}
                      checked={formData.salaryType === type}
                      onChange={(e) => handleInputChange('salaryType', e.target.value)}
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-stone-300"
                    />
                    <span className="text-sm text-stone-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {formData.salaryType === 'Rango salarial' && (
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Salario Mínimo
                  </label>
                  <input
                    type="number"
                    name="salaryMin"
                    value={formData.salaryMin}
                    onChange={(e) => handleInputChange('salaryMin', e.target.value)}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    placeholder="30000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Salario Máximo
                  </label>
                  <input
                    type="number"
                    name="salaryMax"
                    value={formData.salaryMax}
                    onChange={(e) => handleInputChange('salaryMax', e.target.value)}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    placeholder="50000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Moneda
                  </label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm pr-8"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
              </div>
            )}

            {formData.salaryType === 'Salario fijo' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Salario Anual
                  </label>
                  <input
                    type="number"
                    name="salaryMin"
                    value={formData.salaryMin}
                    onChange={(e) => handleInputChange('salaryMin', e.target.value)}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    placeholder="40000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Moneda
                  </label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm pr-8"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">
                Beneficios Adicionales
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {commonBenefits.map((benefit) => (
                  <label key={benefit} className="flex items-center space-x-2 cursor-pointer p-3 border border-stone-200 rounded-lg hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={formData.additionalBenefits.includes(benefit)}
                      onChange={() => handleArrayToggle('additionalBenefits', benefit)}
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-stone-300 rounded"
                    />
                    <span className="text-sm text-stone-700">{benefit}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-teal-800 mb-4">Requisitos y Habilidades</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Nivel de Experiencia *
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm pr-8"
                  required
                >
                  <option value="">Selecciona el nivel</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Nivel Educativo
                </label>
                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={(e) => handleInputChange('educationLevel', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm pr-8"
                >
                  <option value="">Selecciona el nivel</option>
                  {educationLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">
                Habilidades Técnicas Requeridas
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {commonSkills.map((skill) => (
                  <label key={skill} className="flex items-center space-x-2 cursor-pointer p-3 border border-stone-200 rounded-lg hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={formData.requiredSkills.includes(skill)}
                      onChange={() => handleArrayToggle('requiredSkills', skill)}
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-stone-300 rounded"
                    />
                    <span className="text-sm text-stone-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">
                Idiomas Requeridos
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {languages.map((language) => (
                  <label key={language} className="flex items-center space-x-2 cursor-pointer p-3 border border-stone-200 rounded-lg hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={formData.languageRequirements.includes(language)}
                      onChange={() => handleArrayToggle('languageRequirements', language)}
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-stone-300 rounded"
                    />
                    <span className="text-sm text-stone-700">{language}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-teal-800 mb-4">Detalles de Aplicación</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Fecha Límite de Aplicación
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  value={formData.applicationDeadline}
                  onChange={(e) => handleInputChange('applicationDeadline', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Fecha de Inicio Propuesta
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Número de Posiciones *
                </label>
                <input
                  type="number"
                  name="numberOfPositions"
                  value={formData.numberOfPositions}
                  onChange={(e) => handleInputChange('numberOfPositions', e.target.value)}
                  min="1"
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Nivel de Urgencia *
                </label>
                <select
                  name="urgencyLevel"
                  value={formData.urgencyLevel}
                  onChange={(e) => handleInputChange('urgencyLevel', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm pr-8"
                  required
                >
                  {urgencyLevels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Email de Contacto para Aplicaciones *
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                placeholder="rrhh@empresa.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Instrucciones de Aplicación
              </label>
              <textarea
                name="applicationInstructions"
                value={formData.applicationInstructions}
                onChange={(e) => handleInputChange('applicationInstructions', e.target.value)}
                rows={4}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm resize-none"
                placeholder="Instrucciones específicas sobre cómo aplicar, documentos requeridos, etc..."
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.applicationInstructions.length}/500 caracteres
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-teal-800 mb-4">Información Adicional</h3>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Descripción de la Empresa para esta Oferta
              </label>
              <textarea
                name="companyDescription"
                value={formData.companyDescription}
                onChange={(e) => handleInputChange('companyDescription', e.target.value)}
                rows={4}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm resize-none"
                placeholder="Descripción específica de la empresa en el contexto de esta oferta..."
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.companyDescription.length}/500 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                ¿Por qué unirse a nosotros?
              </label>
              <textarea
                name="whyJoinUs"
                value={formData.whyJoinUs}
                onChange={(e) => handleInputChange('whyJoinUs', e.target.value)}
                rows={4}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm resize-none"
                placeholder="Qué hace especial trabajar en tu empresa, oportunidades de crecimiento, cultura, etc..."
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.whyJoinUs.length}/500 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Proceso de Entrevista
              </label>
              <textarea
                name="interviewProcess"
                value={formData.interviewProcess}
                onChange={(e) => handleInputChange('interviewProcess', e.target.value)}
                rows={4}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm resize-none"
                placeholder="Describe el proceso de entrevista: cuántas rondas, qué tipo de evaluaciones, tiempo estimado..."
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.interviewProcess.length}/500 caracteres
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Publicar Nueva Oferta de Empleo</h2>
          <span className="text-teal-100 text-sm">
            Paso {currentStep + 1} de {steps.length}
          </span>
        </div>
        <div className="mt-3 bg-teal-400/30 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Steps Navigation */}
      <div className="px-6 py-4 border-b border-stone-200">
        <div className="flex items-center justify-between overflow-x-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                index === currentStep
                  ? 'bg-teal-100 text-teal-700'
                  : index < currentStep
                  ? 'text-green-600'
                  : 'text-stone-400'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div className={`w-6 h-6 flex items-center justify-center ${
                index < currentStep ? 'text-green-600' : ''
              }`}>
                {index < currentStep ? (
                  <i className="ri-check-line"></i>
                ) : (
                  <i className={step.icon}></i>
                )}
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form id="publish-job-form" onSubmit={handleSubmit} className="p-6">
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-200">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-6 py-2 border border-stone-300 text-stone-600 rounded-lg hover:bg-stone-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap"
          >
            Anterior
          </button>

          <div className="flex space-x-3">
            <button
              type="button"
              className="px-6 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Guardar Borrador
            </button>
            
            {currentStep === steps.length - 1 ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? 'Publicando...' : 'Publicar Oferta'}
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-200 text-green-800 px-6 py-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center space-x-2">
            <i className="ri-check-circle-fill text-green-600"></i>
            <span className="font-medium">¡Oferta publicada exitosamente!</span>
          </div>
          <p className="text-sm mt-1">Tu oferta de empleo ya está disponible para candidatos.</p>
        </div>
      )}
    </div>
  );
}
