'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between">
      <div>
        <img src="/Supercool_logo-removebg-preview.png" alt="GenCon Logo" className="w-36 h-28 object-cover dark:invert m-2 ml-10" />
      </div>
      <ul className="flex space-x-3 items-center font-bold bg-gray-800 text-white mt-8 mb-8 p-3 shadow-xl rounded-xl pl-8 pr-8">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="cursor-pointer focus:outline-none">
            Services ▾
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-1 bg-gray-800 text-white shadow-lg rounded-lg p-3 space-y-2 w-44 z-50">
              <li><Link href="/ac-repair" className="block hover:text-blue-500">AC Repair</Link></li>
              <li><Link href="/electronics-repair" className="block hover:text-blue-500">Electronics Repair</Link></li>
            <li>
    <Link href="/working" className="block hover:text-blue-500">
      AC Servicing
    </Link>
  </li>

  <li>
    <Link href="/working" className="block hover:text-blue-500">
      Fridge Repair
    </Link>
  </li>

  <li>
    <Link href="/working" className="block hover:text-blue-500">
      Washing Machine
    </Link>
  </li>
            </ul>
          )}
        </li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="flex items-center space-x-2 p-2 mr-10">
        <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
        <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
        <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
      </div>
    </nav>
  );
}