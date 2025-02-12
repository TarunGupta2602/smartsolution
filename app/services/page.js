"use client";
import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div>
      {/* Adding Metadata for SEO */}
      <Head>
      <title>Copier, Web & App Development Services | GEEKSOFT Solutions Group</title>
        <meta name="description" content="Explore copier & printer sales, web development, mobile app development, and document scanning services with GEEKSOFT Solutions Group. Get expert help to improve your business efficiency." />
        <meta name="keywords" content="copier sales, printer sales, copier service, printer repair, document scanning services, web development, mobile app development, Next.js, React Native" />
        <meta name="author" content="GEEKSOFT Solutions Group" />
        <meta property="og:title" content="Copier, Web & App Development Services | GEEKSOFT Solutions Group" />
        <meta property="og:description" content="Explore copier & printer sales, service calls, web and mobile app development, and document scanning services with GEEKSOFT Solutions Group." />
        <meta property="og:image" content="https://www.shutterstock.com/image-photo/photocopy-copier-photocopier-machine-office-600nw-2472645575.jpg" />
        <meta property="og:url" content="http://www.gzb.ae/services" />
        <meta name="robots" content="index, follow" />
          
      </Head>
      <section className="w-full py-16 bg-gray-100">
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Which service are you looking for?
        </h2>
      </div>

      {/* Services Cards */}
      <div className="container mx-auto px-6 space-y-12">
        {[
          {
            title: "Website Development",
            image: "https://images.ctfassets.net/fo9twyrwpveg/1KTYUHtDJTlsFDEWbLAFhj/c383a7286ebc9cef72646241a8c6ed34/What_is_the_Next.js_image_component_and_why_should_I_use_it_.png?fm=webp&w=3840&q=100",
            description:
              "At GEEKSOFT Solutions, we build fast, SEO-friendly websites using the latest Next.js technology...",
            buttonColor: "bg-green-600 hover:bg-green-700",
          },
          {
            title: "Mobile App Development",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*OHa3qt2O1mrfeBjQ",
            description:
              "At GEEKSOFT Solutions, we create high-performance, cross-platform mobile apps using the latest React Native & Expo technologies...",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
          },
          {
            title: "SEO Services",
            image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/new-frs-image-dmca-to-advanced-seo.jpg",
            description:
              "At GEEKSOFT Solutions, we offer expert SEO services to boost your website’s ranking using the latest strategies...",
            buttonColor: "bg-orange-600 hover:bg-orange-700",
          },
          {
            title: "Copier & Printer Sales",
            image: "https://www.shutterstock.com/image-photo/photocopy-copier-photocopier-machine-office-600nw-2472645575.jpg",
            description:
              "Experience the best in document technology with GEEKSOFT Solutions Group's range of Konica Minolta BizHub copiers and printers...",
            buttonColor: "bg-yellow-600 hover:bg-yellow-700",
          },
          {
            title: "Copier & Printer Service Calls",
            image: "https://media.istockphoto.com/id/1230215260/photo/man-copying-car-key-with-key-copy-machine.jpg?s=612x612&w=0&k=20&c=6cZW4bA4iyEDHK0FudKW8A4mRhRzz04kIghaRGMetnI=",
            description:
              "When Copier and Printer Service issues threaten your business's productivity, GEEKSOFT Solutions Group is here to help...",
            buttonColor: "bg-red-600 hover:bg-red-700",
          },
          {
            title: "Document Scanning Services",
            image: "https://media.istockphoto.com/id/157618089/photo/using-copier.jpg?s=612x612&w=0&k=20&c=PbC2x9x7CIA5qWKA3pD2aE4w8Hx92mK_0EVyXKeeR5s=",
            description:
              "Transform your office with GEEKSOFT Solutions Group's Document Scanning service...",
            buttonColor: "bg-green-600 hover:bg-green-700",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Animated Image */}
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/2 h-96 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="w-full md:w-1/2 p-8 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="/contact">
                <motion.button
                  className={`${service.buttonColor} text-white py-3 px-6 text-lg font-semibold rounded-xl transition-all`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Service
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default page
