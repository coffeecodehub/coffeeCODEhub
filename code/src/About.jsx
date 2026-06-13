import React from "react";

const About = () => {
  return (
       <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl"></div>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Top Small Label */}
        <p className="text-[#010101] text-sm tracking-widest uppercase mb-6 font-semibold">
          About Us
        </p>

        {/* Big Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
          We build digital products that feel{" "}
          <span className="text-[#F59E0B]">premium</span>, perform fast,
          and help brands grow.
        </h1>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-[#F59E0B] mt-10"></div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 mt-16 items-start">

          {/* LEFT */}
          <div className="space-y-6 text-[17px] text-gray-600 leading-relaxed">
            <p>
              CoffeeCodeHub is a modern digital studio focused on delivering
              high-end websites, mobile apps, and brand experiences.
            </p>

            <p>
              We combine clean design, strong development, and smart strategy
              to create products that don’t just look good — they work.
            </p>

            <p>
              Our goal is simple: build digital experiences that make your brand
              stand out in a competitive market.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">

            {[
              { num: "50+", label: "Projects Delivered" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "5+", label: "Technologies Used" },
              { num: "24/7", label: "Support Available" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition"
              >
                <h3 className="text-3xl font-bold text-[#F59E0B]">
                  {item.num}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;