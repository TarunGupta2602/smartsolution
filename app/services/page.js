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
              "Get a web development website built with Next.js and React.js for just $50 in 3 weeks! 🚀 It features a sleek, responsive design, smooth animations, a 'Why Choose Us' section, SEO optimization, and an easy contact form. Perfect for freelancers or agencies looking to boost their online presence! 💻🔥",
            buttonColor: "bg-green-600 hover:bg-green-700",
          },
          {
            title: "Mobile App Development",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*OHa3qt2O1mrfeBjQ",
            description:
              "Get a mobile app development website built  for just $50 in 3 weeks! 🚀 Showcase your expertise in React Native with a sleek, responsive design, smooth animations, and SEO optimization. Ideal for agencies and freelancers to attract clients and grow their business! 📱🔥",
            buttonColor: "bg-blue-600 hover:bg-blue-700",
          },
          {
            title: "SEO Services",
            image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/new-frs-image-dmca-to-advanced-seo.jpg",
            description:
              "GeekSoft Solutions offers expert SEO services to boost your website’s ranking and drive organic traffic. We specialize in keyword optimization, on-page & technical SEO, content marketing, local SEO, and high-quality link building. Our team ensures faster site performance, better visibility, and increased conversions with data-driven strategies. Stay ahead of the competition — optimize your website with us today! 🚀",
            buttonColor: "bg-orange-600 hover:bg-orange-700",
          },
          {
            title: "Copier & Printer Services",
            image: "https://www.shutterstock.com/image-photo/photocopy-copier-photocopier-machine-office-600nw-2472645575.jpg",
            description:
              "GeekSoft Solutions provides top-tier copier and printer services to ensure seamless office operations. We offer high-quality printers, copiers, maintenance, and repair services for businesses of all sizes. Our solutions include cost-effective leasing, fast troubleshooting, and efficient document management** to enhance productivity. Upgrade your office with reliable printing solutions today! 🖨️",
            buttonColor: "bg-yellow-400 hover:bg-yellow-500",
          },
          {
            title: "Document Scanning Services",
            image: "https://media.istockphoto.com/id/157618089/photo/using-copier.jpg?s=612x612&w=0&k=20&c=PbC2x9x7CIA5qWKA3pD2aE4w8Hx92mK_0EVyXKeeR5s=",
            description:
              "GeekSoft Solutions offers fast and reliable document scanning services to help businesses go paperless. We provide high-quality digital conversions, OCR (Optical Character Recognition) for searchable documents, and secure cloud storage solutions. Streamline your workflow with our efficient, cost-effective, and eco-friendly scanning services today! 📄✨",
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
