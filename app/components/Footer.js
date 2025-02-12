"use client";
import Link from "next/link";
import Head from "next/head";

export default function Footer() {
  return (
    
    <footer className="bg-gray-900 text-white py-10">
       
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
            At GeekSoft, we deliver cutting-edge office solutions designed to boost productivity, optimize workflows, and simplify document management. From high-quality printer sales to advanced document scanning and reliable on-site maintenance, we ensure your business runs smoothly and efficiently. Let us help you eliminate downtime, reduce costs, and enhance your workplace operations ith our expert solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              Email: 
              <a href="mailto:tarun.gupta2606@gmail.com" className="text-blue-500 hover:underline ml-1">
  tarun.gupta2606@gmail.com
</a>

            </p>
            <p className="text-gray-400 text-sm">
              Phone:  
              <a href="tel:+74656096455" className="text-blue-500 hover:underline ml-1">
                +91-745-609-6455
              </a>
            </p>

           
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GeekSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
