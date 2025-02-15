//import { useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-xl font-bold text-goldenrod">PGH Consultancy</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#services" className="text-gray-600 hover:text-blue-600">Why Us</Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-900">How We Do</Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">Case Studies</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
