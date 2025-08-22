'use client';

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
          Contáctanos
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo 
          y te responderemos lo antes posible.
        </p>
      </div>
    </section>
  );
}