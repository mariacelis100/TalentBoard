'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Desarrolladora Frontend',
      company: 'TechStart',
      image: 'https://readdy.ai/api/search-image?query=Professional%20hispanic%20woman%20software%20developer%20in%20business%20attire%2C%20smiling%20confidently%2C%20modern%20office%20background%2C%20warm%20professional%20lighting%2C%20business%20portrait%20photography%2C%20clean%20and%20professional%20appearance%2C%20technology%20industry%20professional&width=150&height=150&seq=testimonial-001&orientation=squarish',
      content: 'TalentBoard me ayudó a encontrar el trabajo de mis sueños en solo 2 semanas. La plataforma es muy intuitiva y las ofertas son de alta calidad.'
    },
    {
      name: 'Carlos Ruiz',
      role: 'HR Manager',
      company: 'InnovaCorp',
      image: 'https://readdy.ai/api/search-image?query=Professional%20hispanic%20businessman%20HR%20manager%20in%20formal%20suit%2C%20confident%20smile%2C%20modern%20corporate%20office%20setting%2C%20professional%20business%20portrait%2C%20warm%20lighting%2C%20recruitment%20and%20human%20resources%20professional&width=150&height=150&seq=testimonial-002&orientation=squarish',
      content: 'Como empresa, hemos encontrado candidatos excepcionales a través de TalentBoard. Su sistema de filtrado nos ahorra muchísimo tiempo.'
    },
    {
      name: 'Ana Martínez',
      role: 'Marketing Specialist',
      company: 'CreativeAgency',
      image: 'https://readdy.ai/api/search-image?query=Professional%20young%20hispanic%20woman%20marketing%20specialist%2C%20business%20casual%20attire%2C%20bright%20modern%20office%2C%20confident%20professional%20pose%2C%20digital%20marketing%20professional%2C%20warm%20and%20approachable%20appearance&width=150&height=150&seq=testimonial-003&orientation=squarish',
      content: 'La experiencia de usuario es excelente. Pude crear mi perfil fácilmente y recibir ofertas relevantes desde el primer día.'
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Lo que Dicen Nuestros Usuarios
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Miles de profesionales y empresas confían en nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-stone-200">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-stone-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-stone-600 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-amber-800 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-stone-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}