import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">K</span>
              </div>
              <h3 className="text-2xl font-bold">Kunafa World</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Bringing you the most authentic and delicious kunafa experience since 1999.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Twitter className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-yellow-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Fresh Kunafa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Catering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Custom Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Party Platters</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-400">123 Food District, City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-400">(555) 123-KUNAFA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-400">info@kunafaworld.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Kunafa World. All rights reserved. Made with ❤️ for kunafa lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;