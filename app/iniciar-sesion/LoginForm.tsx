'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    captcha: '',
    honeypot: '' // Campo oculto para detectar bots
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState<{question: string, answer: number}>({
    question: '',
    answer: 0
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

  // Generar captcha al cargar el componente
  useState(() => {
    generateCaptcha();
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
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
        if (key !== 'honeypot') {
          formBody.append(key, value.toString());
        }
      });

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Aquí podrías redirigir al usuario
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1500);
      } else {
        setSubmitStatus('error');
        generateCaptcha(); // Generar nuevo captcha en caso de error
      }
    } catch (error) {
      setSubmitStatus('error');
      generateCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-cyan-800 mb-2">
          Iniciar Sesión
        </h2>
        <p className="text-stone-600">
          Accede a tu cuenta para continuar
        </p>
      </div>

      <form id="login-form" onSubmit={handleSubmit} className="space-y-6">
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
            autoComplete="username"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Contraseña *
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                errors.password ? 'border-red-500' : 'border-stone-300'
              }`}
              placeholder="Tu contraseña"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
              </div>
            </button>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Captcha */}
        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Verificación de Seguridad *
          </label>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <p className="text-stone-600 mb-2">{captchaQuestion.question}</p>
              <input
                type="number"
                name="captcha"
                value={formData.captcha}
                onChange={handleInputChange}
                className={`w-20 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                  errors.captcha ? 'border-red-500' : 'border-stone-300'
                }`}
                placeholder="?"
              />
            </div>
            <button
              type="button"
              onClick={generateCaptcha}
              className="px-3 py-2 text-cyan-600 hover:text-cyan-700 cursor-pointer whitespace-nowrap"
              title="Generar nueva pregunta"
            >
              <i className="ri-refresh-line text-lg"></i>
            </button>
          </div>
          {errors.captcha && (
            <p className="text-red-600 text-sm mt-1">{errors.captcha}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="w-4 h-4 text-cyan-600 focus:ring-cyan-500 border-stone-300 rounded"
            />
            <span className="text-sm text-stone-600">Recordarme</span>
          </label>
          
          <a 
            href="/recuperar-password" 
            className="text-sm text-cyan-600 hover:text-cyan-700 underline"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
        >
          {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <i className="ri-check-circle-fill text-green-600"></i>
              <span className="font-medium">¡Sesión iniciada correctamente!</span>
            </div>
            <p className="text-sm mt-1">Redirigiendo...</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <i className="ri-error-warning-fill text-red-600"></i>
              <span className="font-medium">Error al iniciar sesión</span>
            </div>
            <p className="text-sm mt-1">Verifica tus credenciales e inténtalo de nuevo.</p>
          </div>
        )}

        <div className="text-center pt-4 border-t border-stone-200">
          <p className="text-stone-600">
            ¿No tienes cuenta? {' '}
            <a href="/registro" className="text-cyan-600 hover:text-cyan-700 font-medium">
              Regístrate aquí
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}