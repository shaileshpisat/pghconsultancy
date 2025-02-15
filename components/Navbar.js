//import { useState } from 'react';
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Navbar() {
  //const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-100 shadow-md' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-xl font-bold text-goldenrod">PGH Consultancy</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#services" className="text-gray-600 hover:text-goldenrod">Why Us</Link>
            <Link href="#services" className="text-gray-600 hover:text-goldenrod">How We Do</Link>
            <Link href="#services" className="text-gray-600 hover:text-goldenrod">Services</Link>
            <Link href="#about" className="text-gray-600 hover:text-goldenrod">Case Studies</Link>
            <Link href="#contact" className="text-gray-600 hover:text-goldenrod">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
