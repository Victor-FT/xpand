import React from 'react';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PlansSection from '../components/Plans';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import TestSection from '@/components/TestSection';
import SupportSection from '@/components/SupportSection';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="w-full flex items-center justify-center py-8 translate-y-[-75px]">
        <div className='shadow-xl rounded-2xl text-white py-3 sm:py-4 px-6 sm:px-8 lg:px-12 xl:px-16 font-bold text-center bg-white'>
          <div className='text-black flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-gradient-to-r from-[#32572D] to-[#7DBB5D] bg-clip-text text-transparent'>
            <p className='bg-gradient-to-r from-[#32572D] to-[#7DBB5D] bg-clip-text text-transparent' >WIFI<br/>TURBO</p>
            <p className='bg-gradient-to-r from-[#32572D] to-[#7DBB5D] bg-clip-text text-transparent'>+</p>
            <p className='bg-gradient-to-r from-[#32572D] to-[#7DBB5D] bg-clip-text text-transparent'>SUPORTE<br/>PREMIUM</p>
            <p className='bg-gradient-to-r from-[#32572D] to-[#7DBB5D] bg-clip-text text-transparent'>+</p>
            <p className='bg-gradient-to-r from-[#32572D] to-[#7DBB5D] bg-clip-text text-transparent'>FIBRA<br/>TV E STREAMINGS</p>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>  
        <AboutSection />
      </div>
      <div className='w-full flex justify-center'>  
        <PlansSection />
      </div>
      <div className='w-full flex justify-center'>
        <PortfolioSection />
      </div>
      <div className='w-full flex justify-center'>
        <TestimonialsSection />
      </div>
      <div className='w-full flex justify-center'>
        <TestSection />
      </div>
      <SupportSection/>
      <Footer />
    </div>
  );
};

export default Home;
