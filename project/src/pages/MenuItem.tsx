import React from 'react';
import { useParams } from 'react-router-dom';

interface MenuItem {
  id:number
  name: string;
  price: string;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,  // Added id
    name: "Classic Cheese Cheese cake",
    price: "₹120.99",
    description: "Traditional Cheese cake with creamy cheese filling and crispy shredded pastry",
    image: "/images/cheese1.png"
  },
  {
    id: 2,  // Added id
    name: "Nutty Delight Cheese cake",
    price: "₹150.99",
    description: "Premium Cheese cake topped with mixed nuts, pistachios, and almonds",
    image: "/images/cheese3.png"
  },
  {
    id: 3,  // Added id
    name: "Cream Dream Cheese cake",
    price: "₹140.99",
    description: "Rich and creamy Cheese cake with vanilla custard and fresh cream",
    image: "/images/cheese2.png"
  },
  {
    id: 4,  // Added id
    name: "Chocolate Fusion Cheese cake",
    price: "₹160.99",
    description: "Modern twist with chocolate chips and cocoa-infused cream",
    image: "/images/kunafaremove.png"
  },
  {
    id: 5,  // Added id
    name: "Royal Saffron Cheese cake",
    price: "₹190.99",
    description: "Luxurious Cheese cake infused with saffron and topped with gold flakes",
    image: "/images/honey.png"
  },
  {
    id: 6,  // Added id
    name: "Party Platter Special",
    price: "₹499.99",
    description: "Large family-size Cheese cake perfect for celebrations and gatherings",
    image: "/images/cheese3.png"
  }
];

const MenuItem = () => {
  // Get the menu item ID from the URL parameters
  const { itemId } = useParams<{ itemId: string }>();

  // Find the menu item based on the itemId
  const menuItem = menuItems[parseInt(itemId)];

  if (!menuItem) {
    return <div>Item not found</div>;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montez mb-4">
            <span className="text-gray-900">{menuItem.name}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-playfair">
            {menuItem.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden">
            <img
              src={menuItem.image}
              alt={menuItem.name}
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Details</h3>
            <p className="text-xl text-gray-800 font-dancing mb-6">
              Price: <span className="text-yellow-600">{menuItem.price}</span>
            </p>
            <p className="text-xl text-gray-800 mb-6">{menuItem.description}</p>

            <button className="w-full bg-amber-800 text-white py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
