"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './Button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Substitua pelo número real do WhatsApp (com DDD e código do país 55)
  const whatsappNumber = "5522992434321";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista.`;

  const navLinks = [
    { name: 'HOME', href: '#inicio' },
    { name: 'QUEM SOMOS', href: '#sobre' },
    { name: 'SOLUÇÕES', href: '#servicos' },
    { name: 'CONTATO', href: '#contato' },
  ];

  {/* Ícone do WhatsApp em Dourado */ }
  const WhatsappIcon = () => (
    <svg
      className="w-4 h-4 fill-rm-gold shrink-0 transition-transform group-hover:scale-110"
      viewBox="0 0 24 24"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );

  return (
    <header className="fixed w-full z-50 bg-rm-white/95 backdrop-blur-md border-b border-rm-navy/10 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">

          {/* Logo Alinhado à Esquerda */}
          <div className="flex-shrink-0 flex items-center py-2">
            <Link href="#inicio" className="flex items-center gap-2 group">
              <Image
                src="/images/rm-logo-horizontal.png"
                alt="Rodrigues Mansur Logo"
                width={280}
                height={80}
                className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-102"
                priority
              />
            </Link>
          </div>

          {/* Navigation + CTA Alinhados à Direita */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-rm-navy hover:text-rm-gold transition-colors font-semibold text-xs tracking-wider uppercase font-heading"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                className="group !bg-rm-navy !text-rm-white hover:!bg-rm-navy-dark !px-6 !py-3 text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow font-heading flex items-center gap-2.5"
              >
                <WhatsappIcon />
                <span>Fale com um Especialista</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-rm-navy hover:text-rm-gold p-2 transition-colors focus:outline-none"
              aria-label="Alternar menu mobile"
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-rm-white/98 backdrop-blur-lg border-b border-rm-navy/10 shadow-xl">
          <div className="px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-rm-navy hover:text-rm-gold transition-colors font-semibold text-sm tracking-wider text-center block py-2.5 border-b border-rm-gray-light font-heading"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="primary"
                  className="group !bg-rm-navy !text-rm-white !px-6 !py-3 w-full text-xs font-semibold uppercase tracking-wider rounded-md font-heading flex items-center justify-center gap-2.5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <WhatsappIcon />
                  <span>Fale com um Especialista</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}