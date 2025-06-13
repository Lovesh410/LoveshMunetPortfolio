import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Data Scientist', 'Management Professional', 'Business Analyst', 'Data Analytics Expert'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent animate-fade-in">
          Lovesh Munet
        </h1>
        
        <div className="h-16 mb-6">
          <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-light">
            <span className="border-r-2 border-purple-600 animate-pulse pr-2">
              {displayText}
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Leading high-impact data analysis projects with machine learning expertise, 
          delivering actionable insights that drive strategic decision-making.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href="mailto:loveshmunet01@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 text-gray-800 dark:text-gray-200"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">loveshmunet01@gmail.com</span>
          </a>
          <a 
            href="tel:+919928024077"
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 text-gray-800 dark:text-gray-200"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+91-9928024077</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
          
          <button className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 dark:text-gray-200 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="#"
            className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
          </a>
          <a 
            href="#"
            className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;