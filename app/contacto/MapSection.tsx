'use client';

export default function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Visítanos en nuestra oficina principal cerca del Obelisco de Barquisimeto
          </p>
        </div>

        <div className="bg-stone-100 rounded-xl overflow-hidden shadow-sm border border-stone-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1234567890123!2d-69.344222!3d10.067778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8767e7e7e7e7e7%3A0x7e7e7e7e7e7e7e7e!2sObelisco%20de%20Barquisimeto!5e0!3m2!1ses!2sve!4v1718040000000!5m2!1ses!2sve"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de TalentBoard - Obelisco de Barquisimeto"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-amber-800 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Dirección
            </h3>
            <p className="text-stone-600">
              Av. Venezuela con Av. Libertador<br />
              Cerca del Obelisco<br />
              Barquisimeto, Venezuela
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-subway-line text-amber-800 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Transporte Público
            </h3>
            <p className="text-stone-600">
              Bus: Líneas 1, 2, 3, 4<br />
              Taxi: Disponible 24/7
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-car-line text-amber-800 text-2xl"></i>
            </div>
            <h3 className="font-semibold text-stone-800 mb-2">
              Parking
            </h3>
            <p className="text-stone-600">
              Estacionamiento público<br />
              disponible en la zona
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}