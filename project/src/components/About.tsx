import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Image → Top Left */}
          <div className="flex items-start justify-start">
           <img
  src="/images/honey.png"
  alt="Kunafa Left"
  className="w-64  h-30 object-contain rounded-2xl shadow-2xl "
  style={{ transform: "rotate(26deg)" }}
/>

          </div>

          {/* Center Content */}
          <div className="flex flex-col justify-center text-center lg:text-left ">
            <h2 className="text-4xl md:text-6xl text-center font-bold font-playfair text-white mb-6 mr-8">
              About <span className="text-yellow-400">Us</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed font-montez justify">
              For over two decades, <span className="text-yellow-400">Kunafa World </span> 
              has been the premier destination for authentic Middle Eastern kunafa. 
              Our master chefs use time-honored recipes passed down through generations, 
              combining traditional techniques with the finest ingredients to create 
              the perfect kunafa experience.
            </p>
          </div>

          {/* Right Image → Bottom Right */}
          <div className="flex items-end justify-end">
               <img
  src="/images/kunafaremove.png"
  alt="Kunafa Left"
  className="w-64 h-30 object-contain rounded-2xl shadow-2xl "
  style={{ transform: "rotate(-26deg)" }}
/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
