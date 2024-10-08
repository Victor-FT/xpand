import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {


  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center text-center text-white overflow-hidden font-yorkten-slab">
      <Image
        src="/banner.jpg" // Replace with your actual image path
        layout="fill"
        objectFit="cover"
        alt="Background"
      />
      <div className="relative z-[1] w-full grid grid-cols-3 max-w-[80vw]">
        <div>
          <p className='text-[#676767] text-xl mb-4'>Transforme sua conexão em uma experiência extraordinária.</p>
        </div>
        <div/>
        <div className="flex flex-col items-center gap-4 color-[#676767]">
          <div>
            
          <p className="text-5xl text-left text-[#676767]">INTERNET ULTRA<br/> 
          <span className="font-black text-5xl bg-gradient-to-r from-[#32572D] to-[#7DBB5D] bg-clip-text text-transparent">
            XPAND
          </span>
          </p>
          <br />
          <button className="w-full text-xl bg-custom-gradient text-white py-4 px-4 rounded-2xl font-bold shadow-lg hover:opacity-90 transition-opacity duration-300">
            Assinar agora
          </button>
          </div>
          
        </div>
        <div>
          
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;