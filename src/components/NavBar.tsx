'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Emil Lantz Logo" width={150} height={300} />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#inicio" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">INÍCIO</Link>
              <Link href="#planos" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PLANOS</Link>
              <Link href="#Contato" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CONTATO</Link>
              <Link href="https://central.xpandtec.com.br/central_assinante_web/login" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">2ª VIA BOLETO</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="https://central.xpandtec.com.br/central_assinante_web/login" passHref>
              <button className="bg-custom-gradient text-white py-2 px-4 rounded-lg font-bold shadow-lg hover:opacity-90 transition-opacity duration-300">
                Área do cliente
              </button>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#inicio" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">INÍCIO</Link>
            <Link href="#planos" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">PLANOS</Link>
            <Link href="#Contato" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">CONTATO</Link>
            <Link href="https://central.xpandtec.com.br/central_assinante_web/login" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">2ª VIA BOLETO</Link>
            <Link href="https://central.xpandtec.com.br/central_assinante_web/login" passHref>
              <button className="w-full bg-custom-gradient text-white py-2 px-4 rounded-lg font-bold shadow-lg hover:opacity-90 transition-opacity duration-300 mt-4">
                Área do cliente
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;