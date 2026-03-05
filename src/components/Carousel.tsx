'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { img: '/ac1.png', title: 'Welcome to GenCon', button: 'Blog' },
    { img: '/ac6.jpg', title: 'Stay Cool with Us', button: 'Get Started' },
    { img: '/ac2.jpg', title: 'Cooling Solutions Simplified', button: 'Contact Us' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-screen h-screen overflow-hidden" id="home">
      <div className="flex transition-transform duration-2000 ease-in-out h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img src={slide.img} className="w-full h-full object-cover blur-sm" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
              <h1 className="text-5xl font-bold mb-4 text-center">{slide.title}</h1>
              {slide.button === 'Blog' ? (
                <Link href="/blog" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium inline-block">
                  {slide.button}
                </Link>
              ) : (
                <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium inline-block">
                  {slide.button}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70">
        ‹
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70">
        ›
      </button>
    </div>
  );
}