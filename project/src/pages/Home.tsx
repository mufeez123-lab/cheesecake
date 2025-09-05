import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Menu from "../components/Menu";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
    <Header/>
      <Hero />
      <Services />
      <Menu />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
