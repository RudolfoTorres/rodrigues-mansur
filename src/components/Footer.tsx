import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-rm-black border-t border-rm-gold/20 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo Area */}
          <div className="flex items-center">
            <Image src="/images/rm-logo-square.png" alt="Rodrigues Mansur Logo" width={160} height={48} className="h-14 w-auto object-contain" />
            <span className="ml-3 text-sm text-rm-cream/60 font-body">
              Assessoria Administrativa
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm text-rm-cream/80 font-body">
            <Link href="#inicio" className="hover:text-rm-gold transition">Início</Link>
            <Link href="#servicos" className="hover:text-rm-gold transition">Serviços</Link>
            <Link href="#sobre" className="hover:text-rm-gold transition">Sobre</Link>
            <Link href="#contato" className="hover:text-rm-gold transition">Contato</Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-rm-cream/10 text-center">
          <p className="text-xs text-rm-cream/40 px-4">
            Rodrigues Mansur Assessoria Administrativa © {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
