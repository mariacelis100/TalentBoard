
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <i className="ri-briefcase-fill text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
              TalentBoard
            </span>
          </Link>

          {/* Navegación Principal - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/empleos" className="nav-link">
              Empleos
            </Link>
            <Link href="/empresas" className="nav-link">
              Empresas
            </Link>
            <Link href="/candidatos" className="nav-link">
              Candidatos
            </Link>
            <Link href="/contacto" className="nav-link">
              Contacto
            </Link>
          </nav>

          {/* Acciones - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/iniciar-sesion" className="nav-link">
              Iniciar Sesión
            </Link>
            <Link href="/registro" className="btn-primary">
              Registrarse
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-stone-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-stone-700`}></i>
          </button>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 py-6 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <Link href="/empleos" className="mobile-nav-link">
                <i className="ri-briefcase-line mr-3"></i>
                Empleos
              </Link>
              <Link href="/empresas" className="mobile-nav-link">
                <i className="ri-building-line mr-3"></i>
                Empresas
              </Link>
              <Link href="/candidatos" className="mobile-nav-link">
                <i className="ri-user-line mr-3"></i>
                Candidatos
              </Link>
              <Link href="/contacto" className="mobile-nav-link">
                <i className="ri-mail-line mr-3"></i>
                Contacto
              </Link>
              
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <Link href="/iniciar-sesion" className="mobile-nav-link">
                  <i className="ri-login-box-line mr-3"></i>
                  Iniciar Sesión
                </Link>
                <Link href="/registro" className="btn-primary w-full text-center">
                  Registrarse
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          @apply text-stone-700 hover:text-amber-800 transition-all duration-200 font-medium relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #f59e0b, #d97706);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-nav-link {
          @apply flex items-center text-stone-700 hover:text-amber-800 transition-colors py-2 px-4 rounded-lg hover:bg-stone-50;
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
