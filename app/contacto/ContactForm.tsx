'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    tipo: 'candidato',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (formData.mensaje.length > 500) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          tipo: 'candidato',
          asunto: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
      <h2 className="text-2xl font-bold text-stone-800 mb-6">
        Envíanos un Mensaje
      </h2>

      <form id="contacto-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Nombre Completo *
            </label>
            <input
              type="text"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              placeholder="+34 600 000 000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Empresa
            </label>
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              placeholder="Nombre de tu empresa"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Tipo de Consulta *
          </label>
          <div className="relative">
            <select
              name="tipo"
              required
              value={formData.tipo}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-8 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent appearance-none"
            >
              <option value="candidato">Soy Candidato</option>
              <option value="empresa">Soy Empresa</option>
              <option value="reclutador">Soy Reclutador</option>
              <option value="otro">Otro</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center pointer-events-none">
              <i className="ri-arrow-down-s-line text-stone-400"></i>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Asunto *
          </label>
          <input
            type="text"
            name="asunto"
            required
            value={formData.asunto}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
            placeholder="¿En qué podemos ayudarte?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Mensaje *
          </label>
          <textarea
            name="mensaje"
            required
            rows={6}
            maxLength={500}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent resize-none"
            placeholder="Cuéntanos más detalles sobre tu consulta..."
          ></textarea>
          <div className="text-sm text-stone-500 mt-1">
            {formData.mensaje.length}/500 caracteres
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || formData.mensaje.length > 500}
          className="w-full bg-amber-800 text-white py-3 px-6 rounded-lg hover:bg-amber-900 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            ¡Mensaje enviado correctamente! Te responderemos pronto.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            {formData.mensaje.length > 500 
              ? 'El mensaje no puede exceder los 500 caracteres.' 
              : 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
          </div>
        )}
      </form>
    </div>
  );
}