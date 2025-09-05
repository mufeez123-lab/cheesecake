import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      name: "Classic Cheese Cheese cake",
      price: "₹120.99",
      description: "Traditional Cheese cake with creamy cheese filling and crispy shredded pastry",
      image: "/images/cheese1.png"
    },
    {
      name: "Nutty Delight Cheese cake",
      price: "₹150.99",
      description: "Premium Cheese cake topped with mixed nuts, pistachios, and almonds",
      image: "/images/cheese3.png"
    },
    {
      name: "Cream Dream Cheese cake",
      price: "₹140.99",
      description: "Rich and creamy Cheese cake with vanilla custard and fresh cream",
      image: "/images/cheese2.png"
    },
    {
      name: "Chocolate Fusion Cheese cake",
      price: "₹160.99",
      description: "Modern twist with chocolate chips and cocoa-infused cream",
      image: "/images/kunafaremove.png"
    },
    {
      name: "Royal Saffron Cheese cake",
      price: "₹190.99",
      description: "Luxurious Cheese cake infused with saffron and topped with gold flakes",
      image: "/images/honey.png"
    },
    {
      name: "Party Platter Special",
      price: "₹499.99",
      description: "Large family-size Cheese cake perfect for celebrations and gatherings",
      image: "/images/cheese3.png"
    }
  ];

  return (
    <section id="menu" className="py-20 relative bg-gradient-to-br from-yellow-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 "
        style={{
          backgroundImage: `url('/path-to-gooey-pattern.png')`, // replace with your pattern
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montez mb-4">
            <span className="text-gray-900">Our</span>{" "}
            <span className="text-yellow-500 drop-shadow-md">Menu</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-playfair">
            Discover our signature Cheese cake varieties, each crafted with love and the finest ingredients
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-black"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-duration="800"
            >
              {/* Image + Price Badge */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-1 rounded-full font-bold shadow-md">
                  {item.price}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                
                <button className="w-full bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
