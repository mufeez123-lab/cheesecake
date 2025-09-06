import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden "
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/back.png')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/90 via-white/80 to-amber-50/80"></div>

      {/* Decorative Floating Image Above Content */}
      <motion.img
        src="/images/paperr.png"
        alt="Decorative Cheesecake"
       className="absolute top-20 right-30 md:top-40 md:right-48 md:mt-28 md:mr-32 lg:mt-28 lg:mr-32    lg:top-40 lg:right-48
            w-52  sm:w-48 md:w-80 lg:w-[600px] 
            object-contain"

        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative text-center lg:text-left py-10"
          >
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-900 mb-6 leading-tight font-dancing mt-20">
                <motion.span
                  initial={{ opacity: 0, textShadow: "0px 0px 0px #facc15" }}
                  animate={{
                    opacity: 1,
                    textShadow: "0px 0px 20px #facc15",
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  Gooey Basque{" "}
                  <span className="text-yellow-500">Cheesecake</span>
                </motion.span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 font-playfair font-medium mb-8">
                Sweet, cheesy, and perfectly crispy
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-dancing bg-gradient-to-r from-yellow-400 to-amber-500 text-black  px-10 py-4 mx-20   rounded-full shadow-lg hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 text-lg font-semibold"
                >
                  View Menu
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Side Decorative Circles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute top-20 right-8 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute bottom-6 -left-20 w-32 h-32 bg-amber-300 rounded-full opacity-15 animate-bounce delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
