"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Footer Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              At GeekSoft, we deliver cutting-edge office solutions designed to
              boost productivity, optimize workflows, and simplify document
              management. From high-quality printer sales to advanced document
              scanning and reliable on-site maintenance, we ensure your business
              runs smoothly and efficiently.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Home", "Services", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-white">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              Email:{" "}
              <motion.a
                href="mailto:faisalcool90@gmail.com"
                className="text-blue-500 hover:underline ml-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                faisalcool90@gmail.com
              </motion.a>
            </p>
            <p className="text-gray-400 text-sm">
              Phone:{" "}
              <motion.a
                href="tel:+919718845433"
                className="text-blue-500 hover:underline ml-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                +91-97188-45433
              </motion.a>
            </p>
            <p className="text-gray-400 text-sm">
              Address:{" "}
              <span className="ml-1">
                G-803 Ajnara GenX, Crossings Republik, Ghaziabad, Uttar Pradesh 201016
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700 mt-10 pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GeekSoft. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
