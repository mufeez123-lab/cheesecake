import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Mangalore, Karnataka", "India"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["63625144956"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["mufizmalar@gmail.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Thu: 10AM-10PM", "Fri-Sat: 10AM-11PM", "Sunday: 11AM-9PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold font-playfair text-gray-900 mb-4 md:mt-10 lg:mt-10">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montez">
            Ready to experience the best <span className="text-yellow-500">Cheese Cake</span> in town?  
            Contact us for <span className="font-semibold">orders, catering,</span> or any questions.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center text-black mb-4 mx-auto shadow-md">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 font-playfair">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default Contact;
