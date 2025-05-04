'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className={`font-playfair text-2xl font-bold ${
          isScrolled ? 'text-primary' : 'text-white'
        }`}>
          Palm Beach Golf Pro
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className={`hidden md:flex gap-8 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
          <Link href="/" className="font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="#services" className="font-medium hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="#about" className="font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#testimonials" className="font-medium hover:text-accent transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="font-medium hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden animate-fade-in">
            <div className="container-custom flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-800 font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#services" 
                className="text-gray-800 font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#about" 
                className="text-gray-800 font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#testimonials" 
                className="text-gray-800 font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-800 font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}