import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
        <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 shadow-xl">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-white/30'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed top-6 left-6 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          ) : (
            <Menu className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          )}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-xl p-4 min-w-[200px]">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-800 dark:text-gray-200 hover:bg-white/30'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;