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
        <img
          src="/Supercool_logo-removebg-preview.png"
          alt="Logo"
          className="w-24 md:w-28 object-contain"
        />

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
                <li><Link href="/ac-repair" className="hover:text-gray-300 block">AC Repair</Link></li>
                <li><Link href="/electronics-repair" className="hover:text-gray-300 block">Electronics Repair</Link></li>
                <li><Link href="/working" className="hover:text-gray-300 block">AC Servicing</Link></li>
                <li><Link href="/working" className="hover:text-gray-300 block">Fridge Repair</Link></li>
                <li><Link href="/working" className="hover:text-gray-300 block">Washing Machine</Link></li>
              </ul>
            )}
          </li>

          <li className="hover:text-gray-300 transition">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <FontAwesomeIcon icon={faFacebook} className="text-lg hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} className="text-lg hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} className="text-lg hover:text-gray-300 cursor-pointer" />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3 font-bold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>

          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-left"
          >
            Services ▾
          </button>

          {isDropdownOpen && (
            <div className="pl-4 space-y-2 font-medium">
              <Link href="/ac-repair" className="block">AC Repair</Link>
              <Link href="/electronics-repair" className="block">Electronics Repair</Link>
              <Link href="/working" className="block">AC Servicing</Link>
              <Link href="/working" className="block">Fridge Repair</Link>
              <Link href="/working" className="block">Washing Machine</Link>
            </div>
          )}

          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
