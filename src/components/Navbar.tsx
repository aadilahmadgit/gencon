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
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div>
          <img
            src="/Supercool_logo-removebg-preview.png"
            alt="GenCon Logo"
            className="w-28 md:w-36 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold items-center">
          <li className="hover:text-blue-400 transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-400 transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-blue-400 transition">
            <Link href="/blog">Blog</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-blue-400 transition">
              Services ▾
            </button>

            {isDropdownOpen && (
              <ul className="absolute top-8 left-0 bg-gray-800 rounded-xl shadow-xl p-4 space-y-2 w-52">
                <li><Link href="/ac-repair" className="hover:text-blue-400 block">AC Repair</Link></li>
                <li><Link href="/electronics-repair" className="hover:text-blue-400 block">Electronics Repair</Link></li>
                <li><Link href="/working" className="hover:text-blue-400 block">AC Servicing</Link></li>
                <li><Link href="/working" className="hover:text-blue-400 block">Fridge Repair</Link></li>
                <li><Link href="/working" className="hover:text-blue-400 block">Washing Machine</Link></li>
              </ul>
            )}
          </li>

          <li className="hover:text-blue-400 transition">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-500 transition cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-400 transition cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500 transition cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-6 space-y-4">
          <Link href="/" className="block hover:text-blue-400">Home</Link>
          <Link href="/about" className="block hover:text-blue-400">About</Link>
          <Link href="/blog" className="block hover:text-blue-400">Blog</Link>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left hover:text-blue-400"
            >
              Services ▾
            </button>

            {isDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/ac-repair" className="block hover:text-blue-400">AC Repair</Link>
                <Link href="/electronics-repair" className="block hover:text-blue-400">Electronics Repair</Link>
                <Link href="/working" className="block hover:text-blue-400">AC Servicing</Link>
                <Link href="/working" className="block hover:text-blue-400">Fridge Repair</Link>
                <Link href="/working" className="block hover:text-blue-400">Washing Machine</Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="block hover:text-blue-400">Contact</Link>

          {/* Social Icons (Mobile) */}
          <div className="flex space-x-4 pt-4">
            <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </div>
        </div>
      )}
    </nav>
  );
}
