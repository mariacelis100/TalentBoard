'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-800 rounded-lg flex items-center justify-center">
                <i className="ri-briefcase-fill text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold" style={{fontFamily: "Pacifico, serif"}}>
                TalentBoard
              </span>
            </div>
            <p className="text-stone-300 mb-4">
              Conectamos el mejor talento con las mejores oportunidades laborales.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-facebook-fill text-xl text-stone-300 hover:text-white transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-twitter-fill text-xl text-stone-300 hover:text-white transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-linkedin-fill text-xl text-stone-300 hover:text-white transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
                <i className="ri-instagram-fill text-xl text-stone-300 hover:text-white transition-colors"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Para Candidatos</h4>
            <ul className="space-y-2">
              <li><Link href="/empleos" className="text-stone-300 hover:text-white transition-colors cursor-pointer">Buscar Empleos</Link></li>
              <li><Link href="/candidatos/perfil" className="text-stone-300 hover:text-white transition-colors cursor-pointer">Crear Perfil</Link></li>
              <li><Link href="/candidatos/alertas" className="text-stone-300 hover:text-white transition-colors cursor-pointer">Alertas de Empleo</Link></li>
              <li><Link href="/consejos" className="text-stone-300 hover:text-white transition-colors cursor-pointer">Consejos de Carrera</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Para Empresas</h4>
            <ul className="space-y-2">
              <li><Link href="/empresas/publicar" className="text-stone-300 hover:text-white transition-colors cursor-pointer">Publicar Empleo</Link></li>
              <li><Link href="/empresas/buscar" className="text-stone-300 hover:text-white transition-colors cursor-pointer">Buscar Candidatos</Link></li>
              <li><Link href="/empresas/planes" className="text-stone-300 hover:text-white transition-colors cursor-pointer">Planes de Reclutamiento</Link></li>
              <li><Link href="/empresas/recursos" className="text-stone-300 hover:text-white transition-colors cursor-pointer">Recursos HR</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line text-stone-300"></i>
                </div>
                <span className="text-stone-300">info@talentboard.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-stone-300"></i>
                </div>
                <span className="text-stone-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-map-pin-line text-stone-300"></i>
                </div>
                <span className="text-stone-300">Nueva York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center">
          <p className="text-stone-300">
            © 2024 TalentBoard. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}