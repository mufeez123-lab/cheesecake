import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-amber-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-center">
          
          {/* Left Image → Top Left */}
          <div
            className="flex items-start justify-center lg:justify-start"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src="/images/cheese1.png"
              alt="Cheese cake Left"
              className="w-28 sm:w-40 md:w-52 lg:w-64 object-contain"
              style={{ transform: "rotate(26deg)" }}
            />
          </div>

          {/* Center Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-4 md:mb-6">
              About <span className="text-yellow-400">Us</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-montez max-w-2xl mx-auto lg:mx-0">
              For over two decades,{" "}
              <span className="text-yellow-400">Cheese Cake </span>
              has been the premier destination for authentic Middle Eastern
              Cheese cake. Our master chefs use time-honored recipes passed
              down through generations, combining traditional techniques with
              the finest ingredients to create the perfect Cheese cake
              experience.
            </p>
          </div>

          {/* Right Image → Bottom Right */}
          <div
            className="flex items-end justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              src="/images/cheese2.png"
              alt="Cheese cake Right"
              className="w-28 sm:w-40 md:w-52 lg:w-64 object-contain"
              style={{ transform: "rotate(-26deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
