import React from 'react';
import { Link } from 'react-router-dom';
import bgVideo from "./assets/bg-video.mp4";

import { FaGlobe, FaMobileAlt, FaPalette } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <section className="min-h-screen flex items-center relative pt-16 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs mb-6 text-gray-800">
            PREMIUM DIGITAL STUDIO
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-white">
              Turn Your Ideas Into<br />
              <span className="text-[#F59E0B]">Exceptional Digital Experiences</span>
            </h1>

            <p className="text-base text-white/90 mb-8">
              We craft beautiful websites, powerful applications, and effective marketing strategies that help businesses grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold px-7 py-3 rounded-2xl transition-all"
              >
                See Our Projects →
              </Link>

              <Link
                to="/contact"
                className="border border-white/80 hover:bg-white hover:text-black text-white font-semibold px-7 py-3 rounded-2xl transition-all"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== TRUST BAR ====================== */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#F59E0B]">50+</div>
            <div className="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#F59E0B]">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#F59E0B]">24h</div>
            <div className="text-sm text-gray-600">Average Response</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#F59E0B]">∞</div>
            <div className="text-sm text-gray-600">Creativity</div>
          </div>
        </div>
      </div>

      {/* ====================== SERVICES TEASER (Improved) ====================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
            <p className="text-gray-600 mt-3">What we do best</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-white border border-gray-100 hover:border-[#F59E0B] rounded-3xl p-8 transition-all hover:shadow-lg group">
              <div className="text-[#F59E0B] mb-6">
                <FaGlobe className="text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-4">Modern, fast and responsive websites.</p>
              <p className="text-amber-600 text-sm font-medium">React • Next.js • WordPress</p>
            </div>

            {/* App Development */}
            <div className="bg-white border border-gray-100 hover:border-[#F59E0B] rounded-3xl p-8 transition-all hover:shadow-lg group">
              <div className="text-[#F59E0B] mb-6">
                <FaMobileAlt className="text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">App Development</h3>
              <p className="text-gray-600 mb-4">Cross-platform mobile applications.</p>
              <p className="text-amber-600 text-sm font-medium">Flutter • React Native</p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white border border-gray-100 hover:border-[#F59E0B] rounded-3xl p-8 transition-all hover:shadow-lg group">
              <div className="text-[#F59E0B] mb-6">
                <FaPalette className="text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Beautiful and user-friendly interfaces.</p>
              <p className="text-amber-600 text-sm font-medium">Figma • Canva</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-[#F59E0B] font-medium hover:underline text-lg"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== CTA SECTION ====================== */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-gray-400 mb-8 text-lg">Let's discuss your project and bring your vision to life.</p>
          <Link
            to="/contact"
            className="inline-block bg-[#F59E0B] text-black font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-amber-400 transition-all"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;