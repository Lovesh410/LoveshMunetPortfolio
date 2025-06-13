import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "loveshmunet01@gmail.com",
      link: "mailto:loveshmunet01@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9928024077",
      link: "tel:+919928024077",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, Karnataka",
      link: "#",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub", 
      url: "#",
      color: "hover:text-gray-700 dark:hover:text-gray-300"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to turn data into insights? Let's discuss how we can work together to drive your business forward through data science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-purple-600" />
                Let's Connect
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about data science and analytics. Whether you're looking for a data scientist, need consultation, or want to explore potential partnerships, I'd love to hear from you.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-white/20 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{info.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Resume Download */}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "Transforming data into actionable insights that drive strategic decisions and business growth."
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Lovesh Munet. All rights reserved. | Analytics & Management Professional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;