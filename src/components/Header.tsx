import Link from 'next/link';
import { Button } from './Button';

export function Header() {
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Nossos Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed w-full z-50 bg-rm-black/95 backdrop-blur-sm border-b border-rm-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#inicio" className="flex items-center gap-2">
              <span className="text-2xl font-bold font-heading text-rm-gold">RM</span>
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

          {/* CTA */}
          <div className="hidden md:flex">
            <Button variant="primary" className="!px-6 !py-2 text-sm">
              Falar com um Especialista
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
}
