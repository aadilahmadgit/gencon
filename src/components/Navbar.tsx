'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        {/* Logo */}
       <h1>GenCon</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-bold">

          <li className="hover:text-gray-300 transition">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-gray-300 transition">
            <Link href="/about">About</Link>
          </li>

          <li className="hover:text-gray-300 transition">
            <Link href="/blog">Blog</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-gray-300 transition">
              Services ▾
            </button>

            {isDropdownOpen && (
              <ul className="absolute top-6 left-0 bg-gray-700 text-white shadow-lg rounded-lg p-3 space-y-2 w-48">
                <li><Link href="/ac-repair" className="hover:text-gray-300 block">HVAC Systems</Link></li>
                <li><Link href="/electronics-repair" className="hover:text-gray-300 block">Electro Mechanical</Link></li>
                <li><Link href="/working" className="hover:text-gray-300 block">MEP</Link></li>
                <li><Link href="/working" className="hover:text-gray-300 block">Renewable Energy</Link></li>
                <li><Link href="/working" className="hover:text-gray-300 block">Home Appliances</Link></li>
              </ul>
            )}
          </li>

          <li className="hover:text-gray-300 transition">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

      
     {/* Social Icons */}
<div className="hidden md:flex space-x-4">

  <a 
    href="https://facebook.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faFacebook} className="text-lg hover:text-gray-300 cursor-pointer" />
  </a>

  <a 
    href="https://twitter.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faTwitter} className="text-lg hover:text-gray-300 cursor-pointer" />
  </a>

  <a 
    href="https://instagram.com/Genconuae2026" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faInstagram} className="text-lg hover:text-gray-300 cursor-pointer" />
  </a>

</div>>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsDropdownOpen(false); // reset dropdown
          }}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 font-bold flex flex-col space-y-3">

          <Link href="/" className="block py-2 hover:text-gray-300">Home</Link>
          <Link href="/about" className="block py-2 hover:text-gray-300">About</Link>
          <Link href="/blog" className="block py-2 hover:text-gray-300">Blog</Link>

          {/* Mobile Dropdown */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-left py-2"
          >
            Services ▾
          </button>

          {isDropdownOpen && (
            <div className="pl-4 space-y-2 font-medium flex flex-col">
              <Link href="/ac-repair" className="block hover:text-gray-300">AC Repair</Link>
              <Link href="/electronics-repair" className="block hover:text-gray-300">Electronics Repair</Link>
              <Link href="/working" className="block hover:text-gray-300">AC Servicing</Link>
              <Link href="/working" className="block hover:text-gray-300">Fridge Repair</Link>
              <Link href="/working" className="block hover:text-gray-300">Washing Machine</Link>
            </div>
          )}

          <Link href="/contact" className="block py-2 hover:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}
