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
        <Head>
        <title>About Us - GeekSoft Solutions Group</title>
        <meta name="description" content="Learn about GeekSoft Solutions Group, a leader in document management and office technology solutions, with over 30 years of expertise." />
        <meta name="keywords" content="GeekSoft Solutions Group, document management, office technology, workflow solutions, business efficiency" />
        <meta name="author" content="GeekSoft Solutions Group" />
        <link rel="canonical" href="https://yourwebsite.com/about" />

        {/* Open Graph Meta Tags (for Facebook & LinkedIn) */}
        <meta property="og:title" content="About Us - GeekSoft Solutions Group" />
        <meta property="og:description" content="GeekSoft Solutions Group empowers businesses with advanced document management and office technology solutions." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - GeekSoft Solutions Group" />
        <meta name="twitter:description" content="GeekSoft Solutions Group helps businesses improve efficiency through innovative document technology solutions." />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

        {/* Structured Data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GeekSoft Solutions Group",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "description": "GeekSoft Solutions Group specializes in document management and office technology solutions to optimize business workflows.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-123-4567",
              "contactType": "customer service",
              "areaServed": "Global",
              "availableLanguage": "English"
            }
          })}

        
      </Head>
      
      

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
