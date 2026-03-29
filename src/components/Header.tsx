"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './Button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Nossos Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    // { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed w-full z-50 bg-rm-black/95 backdrop-blur-sm border-b border-rm-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#inicio" className="flex items-center gap-2">
              <Image src="/images/LogoRM.png" alt="Rodrigues Mansur Logo" width={160} height={48} className="h-12 w-auto object-contain" priority />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-rm-cream/80 hover:text-rm-gold transition-colors font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex">
            <Button variant="primary" className="!px-6 !py-2 text-sm">
              Falar com um Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-rm-cream hover:text-rm-gold p-2 transition-colors focus:outline-none"
              aria-label="Alternar menu mobile"
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-rm-black/95 backdrop-blur-md border-b border-rm-gold/20 shadow-2xl">
          <div className="px-4 py-8 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-rm-cream hover:text-rm-gold transition-colors font-medium text-lg text-center block py-3 border-b border-rm-cream/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 flex justify-center">
              <Button variant="primary" className="!px-8 !py-4 w-full">
                Falar com um Especialista
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
