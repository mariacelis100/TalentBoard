'use client';

import Link from 'next/link';

export default function JobCategories() {
  const categories = [
    {
      name: 'Tecnología',
      count: '2,845',
      icon: 'ri-code-line',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'Marketing',
      count: '1,234',
      icon: 'ri-megaphone-line',
      color: 'bg-green-100 text-green-800'
    },
    {
      name: 'Finanzas',
      count: '987',
      icon: 'ri-bar-chart-line',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      name: 'Diseño',
      count: '756',
      icon: 'ri-palette-line',
      color: 'bg-pink-100 text-pink-800'
    },
    {
      name: 'Ventas',
      count: '1,456',
      icon: 'ri-presentation-line',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      name: 'Recursos Humanos',
      count: '543',
      icon: 'ri-team-line',
      color: 'bg-teal-100 text-teal-800'
    },
    {
      name: 'Administración',
      count: '892',
      icon: 'ri-file-text-line',
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      name: 'Educación',
      count: '634',
      icon: 'ri-book-line',
      color: 'bg-red-100 text-red-800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Explora por Categorías
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Encuentra oportunidades en las áreas que más te interesan
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={`/empleos?categoria=${category.name.toLowerCase()}`}
                  className="group bg-stone-50 rounded-xl p-6 hover:bg-stone-100 transition-colors cursor-pointer">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`${category.icon} text-xl`}></i>
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">
                {category.name}
              </h3>
              <p className="text-stone-600 text-sm">
                {category.count} empleos
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/empleos" 
                className="text-amber-800 font-semibold hover:text-amber-900 transition-colors cursor-pointer whitespace-nowrap">
            Ver Todas las Categorías →
          </Link>
        </div>
      </div>
    </section>
  );
}