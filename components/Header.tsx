import React from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'HOME', href: '/' },
  // FIX: Changed href from '../app/productpage.tsx' to the correct route path '/products'
  { name: 'PRODUCTS', href: '/products' },
  { name: 'CUSTOMIZE', href: '/customize' },
  { name: 'WHY TYVEK?', href: '/why-tyvek' },
  { name: 'CONTACT', href: '/contact' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-[#1A1A2E]/95 shadow-lg backdrop-blur-sm">
      {/* Logo as Link to Home */}
      <Link href="/" className="text-3xl font-extrabold text-[#00D1FF] tracking-wider transition hover:text-[#FF4560]">
        Tyvek.lk
      </Link>
      
      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex space-x-6 font-semibold">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            className="text-white hover:text-[#FF4560] transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      
      {/* Pulsating CTA Button */}
      <Link href="/customize">
        <button 
          className="bg-[#FFD700] text-[#1A1A2E] py-2 px-5 rounded font-bold transition duration-300 hover:scale-[1.05] animate-pulse-gold shadow-md"
        >
          DESIGN YOURS NOW
        </button>
      </Link>

      {/* Placeholder for Mobile Menu Icon (You can implement the toggle logic later) */}
      <button className="md:hidden text-white text-2xl">☰</button>
    </header>
  );
};

export default Header;