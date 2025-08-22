'use client';

import LoginForm from './LoginForm';

export default function IniciarSesionPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-stone-800 mb-4">
              Inicia Sesión
            </h1>
            <p className="text-xl text-stone-600">
              Accede a tu cuenta y continúa tu búsqueda de oportunidades
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}