import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      name: "Classic Cheese Kunafa",
      price: "$12.99",
      description: "Traditional kunafa with creamy cheese filling and crispy shredded pastry",
      image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Nutty Delight Kunafa",
      price: "$15.99",
      description: "Premium kunafa topped with mixed nuts, pistachios, and almonds",
      image: "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Cream Dream Kunafa",
      price: "$14.99",
      description: "Rich and creamy kunafa with vanilla custard and fresh cream",
      image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Chocolate Fusion Kunafa",
      price: "$16.99",
      description: "Modern twist with chocolate chips and cocoa-infused cream",
      image: "https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Royal Saffron Kunafa",
      price: "$19.99",
      description: "Luxurious kunafa infused with saffron and topped with gold flakes",
      image: "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Party Platter Special",
      price: "$49.99",
      description: "Large family-size kunafa perfect for celebrations and gatherings",
      image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montez text-gray-900 mb-4">
            Our <span className="text-yellow-500">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-playfair">
            Discover our signature kunafa varieties, each crafted with love and the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
                  {item.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                
                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold">
                  Add to Cart
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