import Image from 'next/image';
import React from 'react';

interface Feature {
  title: string;
  details: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Assistência técnica especializada",
    details: "Oferecemos suporte técnico especializado, sem custos adicionais",
    icon: "assist.png"
  },
  {
    title: "Ultravelocidade",
    details: "Nossos planos são fibra óptica. Aproveite uma navegação veloz e estável ",
    icon: "desempenho.png"
  },
  {
    title: "Conectividade",
    details: "Além de uma conexão eficiente, oferecemos entretenimento por meio de canais digitais e streamings",
    icon: "wifi.png"
  }
];

interface FeatureCardProps extends Feature {}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, details, icon }) => (
  <div className="flex bg-white text-black rounded-lg shadow-2xl p-6 gap-4 items-center transition-transform duration-300 hover:scale-105">
    <Image src={`/icons/${icon}`} alt={title} width={64} height={64} className="mb-4 opacity-50" />
    <div>
      <h3 className="text-xl font-bold mb-2 text-[#676767]">{title}</h3>
      <p className="text-[#676767]">{details}</p>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className='mb-20'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div> 
    </section>
  );
};

export default AboutSection;