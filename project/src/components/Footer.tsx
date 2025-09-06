import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 md:py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        
        {/* Grid responsive */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <img 
              src="/images/logo.png" 
              alt="Cheese Cake World Logo" 
              className="w-16 h-16 md:w-24 md:h-24 mx-auto md:mx-0 object-contain rounded-full shadow-md invert mb-3"
            />
        
            
            {/* Social Media */}
            <div className="flex justify-center md:justify-start space-x-2">
              <a href="#" className="bg-yellow-400 p-1.5 rounded-full hover:bg-yellow-500 transition-colors">
                <Instagram className="w-4 h-4 text-black" />
              </a>
              <a href="#" className="bg-yellow-400 p-1.5 rounded-full hover:bg-yellow-500 transition-colors">
                <Facebook className="w-4 h-4 text-black" />
              </a>
              <a href="#" className="bg-yellow-400 p-1.5 rounded-full hover:bg-yellow-500 transition-colors">
                <Twitter className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 text-yellow-400">Quick Links</h4>
            <ul className="space-y-1 text-xs md:text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Services</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-yellow-400">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 text-yellow-400">Services</h4>
            <ul className="space-y-1 text-xs md:text-sm">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Fresh Cheese cake</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Catering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Custom Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Party Platters</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 text-yellow-400">Contact Info</h4>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">123 Food District, City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">(555) 123-Cheese cake</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">info@Cheesecakeworld.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 md:mt-10 pt-4 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 Gooey Bascue Cheese cake. All rights reserved. Made with ❤️ 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
