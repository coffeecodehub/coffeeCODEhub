import React from 'react';
import { useParams, Link } from 'react-router-dom';
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";
import pic5 from "./assets/pic5.png";
import pic6 from "./assets/pic6.png";

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    1: {
      title: "Library Management System",
      category: "C++",
      desc: "A comprehensive console-based library management system with book issuance, returns, fine calculation, and user management.",
      tech: "C++ • File Handling • OOP",
      image: pic1,
      liveDemo: "https://www.scribd.com/doc/146646891/li-ma-sy"
    },
    2: {
      title: "Smart Home Management",
      category: "Java",
      desc: "IoT simulation system for controlling and monitoring smart home appliances in real-time.",
      tech: "Java • OOP • Multithreading",
      image: pic2,
      liveDemo: "https://tech.yahoo.com/home/articles/5-dead-smart-home-gadgets-154700142.html"
    },
    3: {
      title: "E-Commerce Platform",
      category: "HTML, CSS, JavaScript",
      desc: "Full-featured online shopping website with product browsing, cart, and checkout simulation.",
      tech: "HTML • CSS • JavaScript",
      image: pic3,
      liveDemo: "https://myapp-sable-sigma.vercel.app/"
    },
    4: {
      title: "Fitness Tracker App",
      category: "React",
      desc: "Modern fitness application with workout logging, progress tracking, and goal setting.",
      tech: "React • Tailwind CSS",
      image: pic4,
      liveDemo: "https://fittrack-demo-react.netlify.app"
    },
    5: {
      title: "Educational Platform",
      category: "WordPress",
      desc: "Complete Learning Management System with courses, quizzes, and student dashboard.",
      tech: "WordPress • Elementor",
      image: pic5,
      liveDemo: "https://singhacademy.com/"
    },
    6: {
      title: "ML Prediction Model",
      category: "Python",
      desc: "Machine Learning project for data analysis and predictive modeling (In Progress).",
      tech: "Python • Scikit-learn • Pandas",
      image: pic6,
      liveDemo: "https://ml-prediction-demo.streamlit.app"
    }
  };

  const project = projects[id] || projects[1];

  return (
    <div className="pt-16 pb-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-8">
        
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium"
        >
          ← Back to Projects
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-80 object-cover" 
          />
        </div>

        <div className="mt-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-5">{project.title}</h1>
            <p className="text-gray-700 leading-relaxed text-[15.5px]">
              {project.desc}
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="bg-white border border-gray-100 rounded-3xl p-7 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Tech Stack</h3>
              <p className="font-mono text-amber-700 text-sm">{project.tech}</p>

              <div className="mt-8">
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center bg-[#F59E0B] hover:bg-amber-400 text-black py-3.5 rounded-2xl font-semibold transition-all"
                >
                  View Live Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;