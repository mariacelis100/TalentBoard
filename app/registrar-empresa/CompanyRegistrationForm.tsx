
'use client';

import { useState } from 'react';

export default function CompanyRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Información Básica
    companyName: '',
    industry: '',
    companySize: '',
    foundedYear: '',
    website: '',
    logo: '',
    
    // Contacto
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactPosition: '',
    
    // Ubicación
    country: '',
    city: '',
    address: '',
    
    // Descripción
    description: '',
    mission: '',
    vision: '',
    values: '',
    
    // Beneficios
    benefits: [] as string[],
    
    // Cultura
    workEnvironment: '',
    teamSize: '',
    remotePolicy: '',
    
    // Social Media
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const steps = [
    { id: 0, title: 'Información Básica', icon: 'ri-building-line' },
    { id: 1, title: 'Contacto', icon: 'ri-contacts-line' },
    { id: 2, title: 'Ubicación', icon: 'ri-map-pin-line' },
    { id: 3, title: 'Descripción', icon: 'ri-file-text-line' },
    { id: 4, title: 'Beneficios', icon: 'ri-gift-line' },
    { id: 5, title: 'Cultura', icon: 'ri-team-line' },
    { id: 6, title: 'Redes Sociales', icon: 'ri-share-line' }
  ];

  const industries = [
    'Tecnología', 'Finanzas', 'Salud', 'Educación', 'Retail', 
    'Manufactura', 'Consultoría', 'Marketing', 'Energía', 'Telecomunicaciones',
    'Construcción', 'Turismo', 'Alimentaria', 'Farmacéutica', 'Automotriz'
  ];

  const companySizes = [
    '1-10 empleados', '11-50 empleados', '51-200 empleados', 
    '201-500 empleados', '501-1000 empleados', '1000+ empleados'
  ];

  const availableBenefits = [
    'Trabajo Remoto', 'Seguro Médico', 'Gimnasio', 'Capacitaciones',
    'Horario Flexible', 'Vacaciones Extra', 'Bonos', 'Stock Options',
    'Comida Gratis', 'Transporte', 'Guardería', 'Descuentos'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBenefitToggle = (benefit: string) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.includes(benefit)
        ? prev.benefits.filter(b => b !== benefit)
        : [...prev.benefits, benefit]
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
            <h3 className="text-lg font-semibold text-cyan-800 mb-4">Información Básica de la Empresa</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Industria *
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm pr-8"
                  required
                >
                  <option value="">Selecciona una industria</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Tamaño de la Empresa *
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm pr-8"
                  required
                >
                  <option value="">Selecciona el tamaño</option>
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Año de Fundación
                </label>
                <input
                  type="number"
                  name="foundedYear"
                  value={formData.foundedYear}
                  onChange={(e) => handleInputChange('foundedYear', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  min="1900"
                  max="2024"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Sitio Web
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                placeholder="https://www.empresa.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Logo de la Empresa
              </label>
              <input
                type="file"
                name="logo"
                accept="image/*"
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
              />
              <p className="text-xs text-stone-500 mt-1">Formatos soportados: JPG, PNG. Tamaño máximo: 2MB</p>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cyan-800 mb-4">Información de Contacto</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Nombre del Contacto *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Cargo del Contacto *
                </label>
                <input
                  type="text"
                  name="contactPosition"
                  value={formData.contactPosition}
                  onChange={(e) => handleInputChange('contactPosition', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  placeholder="ej. Gerente de RRHH"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Email Corporativo *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Teléfono de Contacto *
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  placeholder="+56 9 1234 5678"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cyan-800 mb-4">Ubicación de la Empresa</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  País *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Ciudad *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Dirección
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm resize-none"
                placeholder="Dirección completa de la oficina principal"
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.address.length}/500 caracteres
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cyan-800 mb-4">Descripción de la Empresa</h3>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Descripción General *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={5}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm resize-none"
                placeholder="Describe brevemente tu empresa, sus servicios y lo que la hace única..."
                required
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.description.length}/500 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Misión
              </label>
              <textarea
                name="mission"
                value={formData.mission}
                onChange={(e) => handleInputChange('mission', e.target.value)}
                rows={3}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm resize-none"
                placeholder="¿Cuál es la misión de tu empresa?"
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.mission.length}/500 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Visión
              </label>
              <textarea
                name="vision"
                value={formData.vision}
                onChange={(e) => handleInputChange('vision', e.target.value)}
                rows={3}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm resize-none"
                placeholder="¿Hacia dónde se dirige tu empresa?"
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.vision.length}/500 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Valores Corporativos
              </label>
              <textarea
                name="values"
                value={formData.values}
                onChange={(e) => handleInputChange('values', e.target.value)}
                rows={3}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm resize-none"
                placeholder="¿Cuáles son los valores que guían tu empresa?"
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.values.length}/500 caracteres
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cyan-800 mb-4">Beneficios y Ventajas</h3>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">
                Selecciona los beneficios que ofrece tu empresa
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableBenefits.map((benefit) => (
                  <label key={benefit} className="flex items-center space-x-2 cursor-pointer p-3 border border-stone-200 rounded-lg hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={formData.benefits.includes(benefit)}
                      onChange={() => handleBenefitToggle(benefit)}
                      className="w-4 h-4 text-cyan-600 focus:ring-cyan-500 border-stone-300 rounded"
                    />
                    <span className="text-sm text-stone-700">{benefit}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cyan-800 mb-4">Cultura Empresarial</h3>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Ambiente de Trabajo
              </label>
              <textarea
                name="workEnvironment"
                value={formData.workEnvironment}
                onChange={(e) => handleInputChange('workEnvironment', e.target.value)}
                rows={4}
                maxLength={500}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm resize-none"
                placeholder="Describe el ambiente de trabajo en tu empresa..."
              />
              <div className="text-xs text-stone-500 mt-1">
                {formData.workEnvironment.length}/500 caracteres
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Tamaño del Equipo Típico
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm pr-8"
                >
                  <option value="">Selecciona tamaño</option>
                  <option value="individual">Trabajo Individual</option>
                  <option value="small">Equipos Pequeños (2-5)</option>
                  <option value="medium">Equipos Medianos (6-15)</option>
                  <option value="large">Equipos Grandes (15+)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Política de Trabajo Remoto
                </label>
                <select
                  name="remotePolicy"
                  value={formData.remotePolicy}
                  onChange={(e) => handleInputChange('remotePolicy', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm pr-8"
                >
                  <option value="">Selecciona política</option>
                  <option value="onsite">100% Presencial</option>
                  <option value="hybrid">Híbrido</option>
                  <option value="remote">100% Remoto</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cyan-800 mb-4">Redes Sociales y Presencia Online</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  placeholder="https://linkedin.com/company/tu-empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Twitter
                </label>
                <input
                  type="url"
                  name="twitter"
                  value={formData.twitter}
                  onChange={(e) => handleInputChange('twitter', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  placeholder="https://twitter.com/tu-empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Facebook
                </label>
                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={(e) => handleInputChange('facebook', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  placeholder="https://facebook.com/tu-empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Instagram
                </label>
                <input
                  type="url"
                  name="instagram"
                  value={formData.instagram}
                  onChange={(e) => handleInputChange('instagram', e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm"
                  placeholder="https://instagram.com/tu-empresa"
                />
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
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Registro de Empresa</h2>
          <span className="text-cyan-100 text-sm">
            Paso {currentStep + 1} de {steps.length}
          </span>
        </div>
        <div className="mt-3 bg-cyan-400/30 rounded-full h-2">
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
                  ? 'bg-cyan-100 text-cyan-700'
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
      <form id="company-registration-form" onSubmit={handleSubmit} className="p-6">
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
              className="px-6 py-2 border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Guardar Borrador
            </button>
            
            {currentStep === steps.length - 1 ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? 'Enviando...' : 'Registrar Empresa'}
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors cursor-pointer whitespace-nowrap"
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
            <span className="font-medium">¡Registro enviado exitosamente!</span>
          </div>
          <p className="text-sm mt-1">Recibirás un correo de confirmación pronto.</p>
        </div>
      )}
    </div>
  );
}
