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
      className="py-20 relative bg-amber-200 overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/path-to-gooey-pattern.png')`, // replace with your pattern
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montez mb-4 md:mt-10 lg:mt-10">
            <span className="text-gray-900">Our</span>{" "}
            <span className="text-yellow-800 drop-shadow-md">Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From traditional recipes to modern convenience, we offer everything you need for the perfect Cheese cake experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-black mb-6 group-hover:bg-yellow-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
