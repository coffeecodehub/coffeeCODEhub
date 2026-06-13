import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import ProjectDetail from './ProjectDetail';
import ScrollToTop from './ScrollToTop'; 
import Feedback from './Feedback';        // ← New Import

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        
        <Navbar />

        <main className="flex-1">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/feedback" element={<Feedback />} />   {/* ← New Route */}
          </Routes>
        </main>

        <Footer />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923114909975"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[100] bg-[#25D366] hover:bg-[#20ba5c] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
          title="Chat on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            fill="white" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.522-.075-.15-.669-1.612-.917-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 1.78.466 3.448 1.28 4.89L2 22l5.17-1.36c1.4.77 2.99 1.2 4.83 1.2 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18c-1.4 0-2.75-.36-3.92-1.02L3.5 20.5l1.52-4.43c-.58-1.12-.9-2.35-.9-3.67 0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;