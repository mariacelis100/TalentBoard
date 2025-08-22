'use client';

export default function Stats() {
  const stats = [
    { number: '15,000+', label: 'Empleos Activos' },
    { number: '8,500+', label: 'Empresas Registradas' },
    { number: '120,000+', label: 'Candidatos Activos' },
    { number: '95%', label: 'Tasa de Éxito' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-2">
                {stat.number}
              </div>
              <div className="text-stone-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}