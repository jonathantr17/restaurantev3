"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const RestaurantNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'historia', label: 'Historia' },
    { id: 'menu', label: 'Menú' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-2xl md:text-3xl font-bold">
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-[#D94F2A]' : 'text-white'
              }`}>
                Sabores
              </span>
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-[#8AA34B]' : 'text-[#D94F2A]'
              }`}>
                Ecuador
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-[#D94F2A] ${
                  isScrolled ? 'text-[#2C2C2C]' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('pedido')}
              className="bg-[#D94F2A] hover:bg-[#B8421F] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Pedir Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-[#2C2C2C]' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-[#2C2C2C]' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-[#2C2C2C]' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-2 text-[#2C2C2C] hover:text-[#D94F2A] font-medium transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="px-6">
              <Button 
                onClick={() => scrollToSection('pedido')}
                className="w-full bg-[#D94F2A] hover:bg-[#B8421F] text-white py-2 rounded-lg font-semibold"
              >
                Pedir Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RestaurantNavigation;
