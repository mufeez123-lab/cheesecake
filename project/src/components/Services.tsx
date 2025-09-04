import React from 'react';
import { Truck, Users, Clock, Star, ChefHat, Gift } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Fresh Daily Kunafa",
      description: "Handcrafted kunafa made fresh every day using traditional recipes and premium ingredients."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Home Delivery",
      description: "Fast and reliable delivery service to bring hot, fresh kunafa directly to your doorstep."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Catering Services",
      description: "Perfect for weddings, parties, and corporate events. We cater to groups of any size."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Custom Orders",
      description: "Special occasion kunafa with personalized decorations and custom flavors."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pre-Orders",
      description: "Reserve your favorite kunafa in advance to ensure availability during peak times."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Varieties",
      description: "Exclusive kunafa varieties with premium nuts, cream, and artisanal toppings."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montez text-white mb-4">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From traditional recipes to modern convenience, we offer everything you need for the perfect kunafa experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
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