"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './Button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#inicio' },
    { name: 'QUEM SOMOS', href: '#sobre' },
    { name: 'SOLUÇÕES', href: '#servicos' },
    { name: 'CONTATO', href: '#contato' },
  ];

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
            <Button
              variant="primary"
              className="!bg-rm-navy !text-rm-white hover:!bg-rm-navy-dark !px-6 !py-3 text-xs font-semibold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow font-heading"
            >
              Fale com um Especialista
            </Button>
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
              <Button
                variant="primary"
                className="!bg-rm-navy !text-rm-white !px-6 !py-3 w-full text-xs font-semibold uppercase tracking-wider rounded-md font-heading"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fale com um Especialista
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}