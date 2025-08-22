'use client';

import { useState, useEffect } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    accountType: '',
    acceptTerms: false,
    captcha: '',
    honeypot: '' // Campo oculto para detectar bots
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captchaQuestion, setCaptchaQuestion] = useState<{question: string, answer: number}>({
    question: '¿Cuánto es 2 + 2?',
    answer: 4
  });

  // Generar pregunta matemática simple para captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let question = '';
    let answer = 0;
    
    if (operation === '+') {
      question = `¿Cuánto es ${num1} + ${num2}?`;
      answer = num1 + num2;
    } else {
      question = `¿Cuánto es ${num1} - ${num2}?`;
      answer = num1 - num2;
    }
    
    setCaptchaQuestion({ question, answer });
  };

  // Generar captcha solo en el cliente después del montaje
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validar email
    if (!formData.email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    // Validar contraseña
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    // Validar confirmación de contraseña
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    // Validar nombre completo
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es obligatorio';
    }

    // Validar tipo de cuenta
    if (!formData.accountType) {
      newErrors.accountType = 'Selecciona el tipo de cuenta';
    }

    // Validar términos
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
    }

    // Validar captcha
    if (!formData.captcha) {
      newErrors.captcha = 'Responde la pregunta de seguridad';
    } else if (parseInt(formData.captcha) !== captchaQuestion.answer) {
      newErrors.captcha = 'Respuesta incorrecta';
    }

    // Detectar bot (honeypot)
    if (formData.honeypot) {
      newErrors.honeypot = 'Solicitud detectada como spam';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'honeypot' && key !== 'confirmPassword') {
          formBody.append(key, value.toString());
        }
      });

      const response = await fetch('/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          fullName: '',
          accountType: '',
          acceptTerms: false,
          captcha: '',
          honeypot: ''
        });
        generateCaptcha(); // Generar nuevo captcha
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-cyan-800 mb-2">
          Crear Cuenta
        </h2>
        <p className="text-stone-600">
          Únete a nuestra plataforma de empleo
        </p>
      </div>

      <form id="registration-form" onSubmit={handleSubmit} className="space-y-6">
        {/* Campo honeypot oculto para detectar bots */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleInputChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Nombre Completo *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
              errors.fullName ? 'border-red-500' : 'border-stone-300'
            }`}
            placeholder="Tu nombre completo"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
              errors.email ? 'border-red-500' : 'border-stone-300'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Tipo de Cuenta *
          </label>
          <div className="relative">
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 pr-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 appearance-none ${
                errors.accountType ? 'border-red-500' : 'border-stone-300'
              }`}
            >
              <option value="">Selecciona el tipo de cuenta</option>
              <option value="CANDIDATE">Candidato - Busco trabajo</option>
              <option value="COMPANY">Empresa - Publico empleos</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="ri-arrow-down-s-line text-stone-400"></i>
            </div>
          </div>
          {errors.accountType && (
            <p className="text-red-600 text-sm mt-1">{errors.accountType}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Contraseña *
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
              errors.password ? 'border-red-500' : 'border-stone-300'
            }`}
            placeholder="Mínimo 8 caracteres"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Confirmar Contraseña *
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
              errors.confirmPassword ? 'border-red-500' : 'border-stone-300'
            }`}
            placeholder="Repite tu contraseña"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="bg-stone-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Verificación de Seguridad *
          </label>
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <p className="text-stone-600 mb-2">
                {captchaQuestion.question}
              </p>
              <input
                type="number"
                name="captcha"
                value={formData.captcha}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                  errors.captcha ? 'border-red-500' : 'border-stone-300'
                }`}
                placeholder="Tu respuesta"
              />
            </div>
            <button
              type="button"
              onClick={generateCaptcha}
              className="px-4 py-3 bg-stone-200 text-stone-700 rounded-lg hover:bg-stone-300 transition-colors"
              title="Generar nueva pregunta"
            >
              <i className="ri-refresh-line text-lg"></i>
            </button>
          </div>
          {errors.captcha && (
            <p className="text-red-600 text-sm mt-1">{errors.captcha}</p>
          )}
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleInputChange}
            className="mt-1 h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-stone-300 rounded"
          />
          <div className="flex-1">
            <label className="text-sm text-stone-700">
              Acepto los{' '}
              <a href="#" className="text-cyan-600 hover:text-cyan-700 underline">
                términos y condiciones
              </a>{' '}
              y la{' '}
              <a href="#" className="text-cyan-600 hover:text-cyan-700 underline">
                política de privacidad
              </a>
            </label>
            {errors.acceptTerms && (
              <p className="text-red-600 text-sm mt-1">{errors.acceptTerms}</p>
            )}
          </div>
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            <p className="text-sm">
              <i className="ri-check-line mr-2"></i>
              ¡Cuenta creada exitosamente! Revisa tu email para confirmar tu cuenta.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            <p className="text-sm">
              <i className="ri-error-warning-line mr-2"></i>
              Error al crear la cuenta. Por favor, intenta nuevamente.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <i className="ri-loader-4-line animate-spin mr-2"></i>
              Creando cuenta...
            </span>
          ) : (
            'Crear Cuenta'
          )}
        </button>

        <div className="text-center">
          <p className="text-stone-600">
            ¿Ya tienes una cuenta?{' '}
            <a href="/iniciar-sesion" className="text-cyan-600 hover:text-cyan-700 font-medium">
              Inicia sesión
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}