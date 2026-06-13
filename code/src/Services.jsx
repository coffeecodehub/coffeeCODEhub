import React from 'react';
import { FaGlobe, FaMobileAlt, FaPalette, FaBullhorn, FaVideo, FaRocket } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaGlobe className="text-4xl" />, title: "Web Development", desc: "Modern, fast and responsive websites.", tech: "React • Next.js • WordPress" },
    { icon: <FaMobileAlt className="text-4xl" />, title: "App Development", desc: "Cross-platform mobile applications.", tech: "Flutter • React Native" },
    { icon: <FaPalette className="text-4xl" />, title: "UI/UX-Graphic Design", desc: "Beautiful and user-friendly interfaces.", tech: "Figma • Canva" },
    { icon: <FaBullhorn className="text-4xl" />, title: "Social Media Marketing", desc: "Strategic marketing to grow your brand.", tech: "Meta Ads • Content" },
    { icon: <FaVideo className="text-4xl" />, title: "Video Editing", desc: "Professional videos & motion graphics.", tech: "Premiere Pro" },
    { icon: <FaRocket className="text-4xl" />, title: "Branding & Strategy & SEO", desc: "Complete brand identity solutions.", tech: "Strategy & Design" },
  ];

  return (
    <section className="min-h-screen pt-16 bg-gray-50">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
  <div className="h-80 w-80 rounded-full bg-[#F59E0B]/10 blur-3xl"></div>
</div>
    <div className="pt-16 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3  text-gray-900">Our Services</h1>
          <p className="text-gray-600">End-to-end digital solutions for your business</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="bg-white border border-gray-100 hover:border-amber-200 rounded-3xl p-7 transition-all hover:shadow-md"
            >
              <div className="text-[#F59E0B] mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-[15px] mb-5 leading-relaxed">{service.desc}</p>
              <div className="text-xs font-mono text-amber-600">{service.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;