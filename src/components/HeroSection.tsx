import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center text-white overflow-hidden font-yorkten-slab">
      <Image
        src="/banner.jpg" // Replace with your actual image path
        layout="fill"
        objectFit="cover"
        alt="Background"
        priority
      />
      <div className="relative z-[1] w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 flex-1">
          <div className="md:col-span-1 mr-auto">
            <p className='text-[#676767] text-lg sm:text-xl mb-4 text-center sm:text-left'>
              Transforme sua conexão em uma experiência extraordinária.
            </p>
          </div>
          <div className="md:col-span-1" />
          <div className="flex flex-col gap-2 ml-0 sm:ml-auto items-center md:items-start">
            <div>
              <p className="text-3xl sm:text-4xl text-center md:text-left items-center md:items-start text-[#676767]">
                INTERNET ULTRA<br/> 
                <span className="font-black text-4xl sm:text-5xl bg-gradient-to-r from-[#32572D] to-[#7DBB5D] bg-clip-text text-transparent">
                  XPAND
                </span>
              </p>
              <Link href="https://wa.me/559591312670" passHref>
                <button className="w-full text-lg sm:text-xl bg-custom-gradient text-white py-3 sm:py-4 px-6 rounded-2xl font-bold shadow-lg hover:opacity-90 transition-opacity duration-300 mt-4 sm:mt-6">
                  Assinar agora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;