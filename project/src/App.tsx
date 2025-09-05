import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Initialize AOS animations globally
    AOS.init({
      duration: 800,
      once: true, // Animations repeat every time element enters viewport
    });

    return () => clearTimeout(timer);
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-lg bg-transparent z-50">
        <div className="text-center flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-100 w-60 md:h-100 md:w-120 lg:h-100 lg:w-120"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
            />
          </div>
         
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header can go here if you have one */}

      {/* Page Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer can go here */}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
