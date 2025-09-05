import React from 'react';
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
  className="absolute inset-1  bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/back.png')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
></div>


      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/80 to-white/70"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative text-center lg:text-left py-10">
            {/* Background Image (only for mobile) */}
            <div className="absolute inset-0 bg-[url('/images/paperr.png')] bg-cover bg-center opacity-40 sm:hidden"></div>

            <div className="relative z-10">
             <h1
  className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight font-dancing"
>
<motion.span
  initial={{ opacity: 0, textShadow: "0px 0px 0px #facc15" }}
  animate={{ opacity: 1, textShadow: "0px 0px 20px #facc15" }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
>
  Gooey Basque <span className="text-yellow-500">Cheesecake</span>
</motion.span>


</h1>
              <p className="text-xl md:text-2xl text-gray-700 font-playfair font-medium mb-8">
                Sweet, cheesy, and perfectly crispy
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start md:-ml-20 lg:-ml-20">
                <button className="font-dancing bg-black items-center text-white py-4 mx-20 md:px-8 md:py-4 lg:px-8 lg:py-4 rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 text-lg font-semibold shadow-lg">
                  View Menu
                </button>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/paperr.png"
                alt="Delicious Kunafa"
                className="hidden md:block w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-8 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce duration-10000"></div>
            <div className="absolute bottom-6 -left-20 w-32 h-32 bg-yellow-300 rounded-full opacity-15 animate-bounce duration-1000 delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
