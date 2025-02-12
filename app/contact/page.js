"use client";
import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send message. Try again.");
      }
    } catch (error) {
      setSuccess("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Contact Us - GEEKSOFT Solutions</title>
      </Head>
      
      <motion.section 
        className="w-full py-16 bg-gray-100"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Have questions? We’d love to hear from you!
          </motion.p>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
          <motion.div 
            className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus={{ scale: 1.05 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 font-semibold rounded-lg hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
            {success && <motion.p className="text-center mt-4 text-green-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{success}</motion.p>}
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Contact Information</h3>
            <p className="text-lg text-gray-600 mb-4">Feel free to reach out to us via email or phone. We are here to help you!</p>
            <motion.div className="space-y-4">
              <motion.p className="flex items-center text-lg text-gray-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                📍 <a href="https://maps.google.com/?q=Hapur,+India" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline">Hapur, India</a>
              </motion.p>
              <motion.p className="flex items-center text-lg text-gray-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                📧 <a href="mailto:tarun.gupta2606@gmail.com" className="ml-2 text-blue-600 hover:underline">tarun.gupta2606@gmail.com</a>
              </motion.p>
              <motion.p className="flex items-center text-lg text-gray-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                📞 <a href="tel:+917456096455" className="ml-2 text-blue-600 hover:underline">+91-74560-96455</a>
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
