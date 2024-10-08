import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Mail } from 'lucide-react';
import { LinkedIn } from './Linkedin';
import { Behance } from './Behance';

const Navbar: React.FC = () => {


  return (

      <nav className="fixed top-0 left-0 w-full flex items-center justify-center gap-32 px-6 py-4 bg-transparent text-white z-20">
          <Image src="/logo.png" alt="Emil Lantz Logo" width={150} height={300} />
          <div className='flex items-center gap-12'>
            <a href="#inicio" aria-label="Início">INÍCIO</a>
            <a href="#planos" aria-label="Planos">PLANOS</a>
            <a href="#planos" aria-label="Planos">CONTATO</a>
            <a href="#planos" aria-label="Planos">2ª VIA BOLETO</a>
          </div>
          
          <button className="bg-custom-gradient text-white py-2 px-4 rounded-lg font-bold shadow-lg hover:opacity-90 transition-opacity duration-300">
            Área do cliente
          </button>
      </nav>
  );
};

export default Navbar;
