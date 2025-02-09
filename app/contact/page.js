"use client";
import { useState } from "react";
import Head from "next/head";

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
        <meta
          name="description"
          content="Get in touch with GEEKSOFT Solutions for any inquiries or support. We are here to help with your document technology needs."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us - GEEKSOFT Solutions" />
        <meta
          property="og:description"
          content="Get in touch with GEEKSOFT Solutions for any inquiries or support. We are here to help with your document technology needs."
        />
        <meta
          property="og:image"
          content="https://www.geeksoft.com/images/contact-banner.jpg"
        />
        <meta property="og:url" content="https://www.geeksoft.com/contact" />
        <meta name="twitter:title" content="Contact Us - GEEKSOFT Solutions" />
        <meta
          name="twitter:description"
          content="Get in touch with GEEKSOFT Solutions for any inquiries or support. We are here to help with your document technology needs."
        />
        <meta
          name="twitter:image"
          content="https://www.geeksoft.com/images/contact-banner.jpg"
        />
          
      </Head>
             
      <section className="w-full py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-gray-600 mt-2">
            Have questions? We’d love to hear from you!
          </p>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {success && <p className="text-center mt-4 text-green-600">{success}</p>}
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Contact Information
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Feel free to reach out to us via email or phone. We are here to help
              you!
            </p>
            <div className="space-y-4">
  <p className="flex items-center text-lg text-gray-700">
    📍 <a href="https://maps.google.com/?q=123+Tech+Street,+New+York,+NY+10001" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline">
      123 Tech Street, New York, NY 10001
    </a>
  </p>
  <p className="flex items-center text-lg text-gray-700">
    📧 <a href="mailto:info@geeksoft.org" className="ml-2 text-blue-600 hover:underline">
      info@geeksoft.org
    </a>
  </p>
  <p className="flex items-center text-lg text-gray-700">
    📞 <a href="tel:+17867538470" className="ml-2 text-blue-600 hover:underline">
      +1-786-753-8470
    </a>
  </p>
</div>

          </div>
        </div>
      </section>
    </>
  );
}
