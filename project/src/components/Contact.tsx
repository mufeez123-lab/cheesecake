import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Middle Eastern Quarter", "Downtown Food District", "City, State 12345"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["(555) 123-KUNAFA", "(555) 123-5862", "For orders & inquiries"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["orders@kunafaworld.com", "catering@kunafaworld.com", "info@kunafaworld.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Thu: 10AM-10PM", "Fri-Sat: 10AM-11PM", "Sunday: 11AM-9PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montez text-gray-900 mb-4">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-playfair">
            Ready to experience the best kunafa in town? Contact us for orders, catering, or any questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-black mb-4 mx-auto">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send us a Message</h3>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all">
                <option>General Inquiry</option>
                <option>Catering Request</option>
                <option>Custom Order</option>
                <option>Feedback</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="Tell us about your kunafa needs..."
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-lg hover:bg-yellow-500 transition-colors font-semibold text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;