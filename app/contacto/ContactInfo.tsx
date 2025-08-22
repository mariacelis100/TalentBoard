'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      title: 'Email',
      value: 'info@talentboard.com',
      icon: 'ri-mail-line',
      description: 'Respuesta en 24 horas'
    },
    {
      title: 'Teléfono',
      value: '+34 91 123 4567',
      icon: 'ri-phone-line',
      description: 'Lun - Vie, 9:00 - 18:00'
    },
    {
      title: 'WhatsApp',
      value: '+34 600 123 456',
      icon: 'ri-whatsapp-line',
      description: 'Respuesta inmediata'
    },
    {
      title: 'Dirección',
      value: 'Calle Gran Vía, 28, Madrid',
      icon: 'ri-map-pin-line',
      description: 'Oficina principal'
    }
  ];

  const businessHours = [
    { day: 'Lunes - Viernes', hours: '9:00 - 18:00' },
    { day: 'Sábados', hours: '10:00 - 14:00' },
    { day: 'Domingos', hours: 'Cerrado' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
        <h3 className="text-xl font-bold text-stone-800 mb-6">
          Información de Contacto
        </h3>

        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`${method.icon} text-amber-800 text-xl`}></i>
              </div>
              <div>
                <h4 className="font-semibold text-stone-800">
                  {method.title}
                </h4>
                <p className="text-stone-600 mb-1">
                  {method.value}
                </p>
                <p className="text-sm text-stone-500">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
        <h3 className="text-xl font-bold text-stone-800 mb-6">
          Horarios de Atención
        </h3>

        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-stone-100 last:border-b-0">
              <span className="text-stone-700">
                {schedule.day}
              </span>
              <span className="font-medium text-stone-800">
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 rounded-xl border border-amber-200 p-8">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-amber-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="ri-information-line text-amber-800"></i>
          </div>
          <div>
            <h4 className="font-semibold text-amber-900 mb-2">
              ¿Necesitas ayuda inmediata?
            </h4>
            <p className="text-amber-800 text-sm mb-3">
              Para consultas urgentes, contáctanos por WhatsApp o teléfono. 
              Nuestro equipo estará encantado de ayudarte.
            </p>
            <div className="flex space-x-3">
              <button className="text-amber-800 hover:text-amber-900 font-medium text-sm cursor-pointer whitespace-nowrap">
                Llamar Ahora →
              </button>
              <button className="text-amber-800 hover:text-amber-900 font-medium text-sm cursor-pointer whitespace-nowrap">
                WhatsApp →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
        <h3 className="text-xl font-bold text-stone-800 mb-6">
          Síguenos en Redes Sociales
        </h3>

        <div className="flex space-x-4">
          <button className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
            <i className="ri-facebook-fill text-blue-600 text-xl"></i>
          </button>
          <button className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center hover:bg-sky-200 transition-colors cursor-pointer">
            <i className="ri-twitter-fill text-sky-600 text-xl"></i>
          </button>
          <button className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
            <i className="ri-linkedin-fill text-blue-700 text-xl"></i>
          </button>
          <button className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
            <i className="ri-instagram-fill text-pink-600 text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}