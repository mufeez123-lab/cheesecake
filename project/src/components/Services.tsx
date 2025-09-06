import React from 'react';
import { Truck, Users, Clock, Star, ChefHat, Gift } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Fresh Daily Cheese cake",
      description: "Handcrafted Cheese cake made fresh every day using traditional recipes and premium ingredients."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Home Delivery",
      description: "Fast and reliable delivery service to bring hot, fresh Cheese cake directly to your doorstep."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Catering Services",
      description: "Perfect for weddings, parties, and corporate events. We cater to groups of any size."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Custom Orders",
      description: "Special occasion Cheese cake with personalized decorations and custom flavors."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pre-Orders",
      description: "Reserve your favorite Cheese cake in advance to ensure availability during peak times."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Varieties",
      description: "Exclusive Cheese cake varieties with premium nuts, cream, and artisanal toppings."
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 relative  overflow-hidden"
    >
      {/* Background Pattern bg-amber-200 */}
      <div 
        className="absolute bg-cover   inset-0 opacity-30"
        style={{
          backgroundImage: `url('/images/back.jpg')`, // replace with your pattern
          backgroundRepeat: 'repeat',
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/80 to-amber-600/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montez mb-4 mt-20">
            <span className="text-gray-900">Our</span>{" "}
            <span className="md:text-yellow-800 lg:text-yellow-200 text-gray-900 drop-shadow-md">Services</span>
          </h2>
          <p className="text-lg text-gray-100 font-playfair x-w-3xl mx-auto">
        From classic recipes to modern twists, we provide everything for the perfect cheesecake experience
          </p>
        </div>

        {/* Services Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center w-full">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-blur max-w-sm w-full  rounded-xl p-6 shadow-md justify-center items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group mx-auto"
      data-aos="fade-up"
      data-aos-delay={index * 50}
      data-aos-duration="800"
    >
      <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center text-gray-300 mb-6 group-hover:bg-orange-800 transition-colors ">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-black mb-4 font-playfair">{service.title}</h3>
      {/* <p className="text-gray-600 leading-relaxed">{service.description}</p> */}
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Services;
