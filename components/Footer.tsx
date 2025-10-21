import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Phone } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function Footer() {
  return (
    <footer className="relative bg-[#202124] text-gray-300">
      <WaveDivider className="text-[#202124] rotate-180 -mb-1" fill="#202124" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo/logo-sr-reformas.svg"
              alt="SR Reformas"
              width={160}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Transformando seu espaço, realizando seu sonho.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/srreformass"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Salvador, Bahia</li>
              <li>
                <a
                  href="tel:71987569792"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  (71) 98756-9792
                </a>
              </li>
              <li>
                <a
                  href="tel:71984836460"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  (71) 98483-6460
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@srreformas.com.br"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  contato@srreformas.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SR Reformas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
