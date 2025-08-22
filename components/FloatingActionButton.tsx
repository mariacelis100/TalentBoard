'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FloatingActionButtonProps {
  actions?: Array<{
    label: string;
    icon: string;
    href: string;
    color?: string;
  }>;
  mainAction?: {
    label: string;
    icon: string;
    href: string;
  };
}

export default function FloatingActionButton({ 
  actions = [],
  mainAction 
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultActions = [
    {
      label: 'Publicar Empleo',
      icon: 'ri-add-line',
      href: '/publicar-empleo',
      color: 'bg-amber-600 hover:bg-amber-700'
    },
    {
      label: 'Crear Perfil',
      icon: 'ri-user-add-line',
      href: '/crear-perfil',
      color: 'bg-cyan-600 hover:bg-cyan-700'
    },
    {
      label: 'Registrar Empresa',
      icon: 'ri-building-line',
      href: '/registrar-empresa',
      color: 'bg-emerald-600 hover:bg-emerald-700'
    }
  ];

  const finalActions = actions.length > 0 ? actions : defaultActions;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botones de acción */}
      <div className={`space-y-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {finalActions.map((action, index) => (
          <Link
            key={action.label}
            href={action.href}
            className={`
              block w-14 h-14 ${action.color || 'bg-stone-600 hover:bg-stone-700'} 
              rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
              flex items-center justify-center text-white transform hover:scale-110
              animate-bounce-in
            `}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setIsOpen(false)}
          >
            <i className={`${action.icon} text-xl`}></i>
            <span className="absolute right-16 bg-stone-800 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {action.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 
          rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 
          flex items-center justify-center text-white transform hover:scale-110
          ${isOpen ? 'rotate-45' : 'rotate-0'}
        `}
        aria-label="Acciones rápidas"
      >
        <i className={`${isOpen ? 'ri-close-line' : 'ri-add-line'} text-2xl`}></i>
      </button>

      {/* Overlay para cerrar */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// Componente de botón flotante simple
export function SimpleFloatingButton({ 
  href, 
  icon, 
  label, 
  color = 'bg-amber-600 hover:bg-amber-700' 
}: {
  href: string;
  icon: string;
  label: string;
  color?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Link
      href={href}
      className={`
        fixed bottom-6 right-6 z-50 w-16 h-16 ${color} 
        rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 
        flex items-center justify-center text-white transform hover:scale-110
        group animate-bounce-in
      `}
      aria-label={label}
    >
      <i className={`${icon} text-2xl`}></i>
      
      {/* Tooltip */}
      <div className="absolute right-20 bg-stone-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {label}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-stone-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </Link>
  );
}
