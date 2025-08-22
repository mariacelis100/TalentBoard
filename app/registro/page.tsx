'use client';

import RegistrationForm from './RegistrationForm';

export default function RegistroPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-800 mb-4">
              Únete a TalentBoard
            </h1>
            <p className="text-xl text-stone-600">
              Crea tu cuenta y comienza a conectar con las mejores oportunidades
            </p>
          </div>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}