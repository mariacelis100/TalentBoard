
'use client';

import CreateProfileForm from './CreateProfileForm';

export default function CreateProfilePage() {
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">
              Completa tu perfil profesional
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Crea un perfil atractivo que destaque tus habilidades y experiencia para conectar con las mejores oportunidades laborales.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200">
            <div className="p-8">
              <CreateProfileForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
