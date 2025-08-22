'use client';

export default function CandidatesHero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-cyan-100 py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20diverse%20team%20of%20talented%20candidates%20in%20modern%20office%20environment%20with%20warm%20turquoise%20and%20teal%20background%20colors%20showcasing%20collaboration%20and%20expertise%20in%20business%20setting&width=1200&height=600&seq=candidates-hero&orientation=landscape)'
        }}
      ></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Conecta con los Mejores Candidatos
          </h1>
          <p className="text-xl text-teal-700 mb-8 max-w-2xl mx-auto">
            Descubre talento excepcional que está listo para impulsar tu empresa hacia el éxito. 
            Nuestra plataforma conecta a los mejores profesionales con oportunidades únicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
              Explorar Candidatos
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap">
              Publicar Empleo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}