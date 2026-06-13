import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPhoneCall, FiMail, FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [],
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "WordPress Website",
    "React Website",
    "Mobile App",
    "UI/UX Design",
    "Logo Design",
    "Video Editing",
    "Social Media Marketing",
    "Branding & Strategy",
    "SEO Optimization",
    "Graphic Design",
  ];

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", services: [], message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Backend se connect nahi ho raha. Backend chal raha hai?");
    }

    setLoading(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          
          {/* LEFT SIDE */}
          <div className="relative z-10">
            <p className="text-[#050505] font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </p>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              Let’s Create
              <br />
              <span className="text-[#F59E0B]">Something Amazing</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              We build modern websites, apps, and digital experiences that help brands grow faster.
            </p>

            {/* Contact Cards */}
            <div className="mt-12 space-y-5">
              <a href="https://wa.me/923114909975" className="group flex items-center justify-between bg-white border border-gray-100 hover:border-[#F59E0B]/40 p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] text-2xl">
                    <FiPhoneCall />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <h3 className="text-xl font-bold text-gray-900">+92 311 4909975</h3>
                  </div>
                </div>
                <FiArrowUpRight className="text-2xl text-gray-400 group-hover:text-[#F59E0B] transition-all" />
              </a>

              <a href="mailto:coffeecodehub@gmail.com" className="group flex items-center justify-between bg-white border border-gray-100 hover:border-[#F59E0B]/40 p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] text-2xl">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <h3 className="text-xl font-bold text-gray-900">coffeecodehub@gmail.com</h3>
                  </div>
                </div>
                <FiArrowUpRight className="text-2xl text-gray-400 group-hover:text-[#F59E0B] transition-all" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none focus:border-[#F59E0B] focus:bg-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none focus:border-[#F59E0B] focus:bg-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-3">Select Services</label>
              <div className="grid grid-cols-2 gap-3">
                {servicesList.map((service, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3 cursor-pointer hover:border-[#F59E0B] hover:bg-amber-50 transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-4 h-4 accent-[#F59E0B]"
                    />
                    <span className="text-sm text-gray-700 font-medium">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Project Details</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows="5"
                className="mt-2 w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none resize-none focus:border-[#F59E0B] focus:bg-white"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full rounded-2xl bg-[#F59E0B] py-3.5 text-base font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-600 text-center font-medium">
                ✅ Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;