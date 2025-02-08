"use client";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Head Tag for Meta Information & Google Ads Tracking */}
      

      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                GeekSoft
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-blue-600 transition" onClick={toggleMobileMenu}>Home</Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition" onClick={toggleMobileMenu}>About</Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-600 transition" onClick={toggleMobileMenu}>Services</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition" onClick={toggleMobileMenu}>Contact</Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
