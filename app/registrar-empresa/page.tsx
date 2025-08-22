
'use client';

import CompanyRegistrationForm from './CompanyRegistrationForm';

export default function RegisterCompanyPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">
              Registra tu Empresa
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Únete a nuestra plataforma de reclutamiento y encuentra los mejores talentos para tu empresa. 
              Completa tu perfil empresarial y comienza a publicar ofertas de trabajo.
            </p>
          </div>
          
          <CompanyRegistrationForm />
        </div>
      </main>
    </div>
  );
}
