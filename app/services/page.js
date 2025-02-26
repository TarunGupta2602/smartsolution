"use client";
import React, { useState, useRef } from 'react';
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaCheck, FaInfoCircle, FaTimes, FaClock, FaDollarSign, FaStar } from 'react-icons/fa';
import { useInView } from 'framer-motion';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "Website Development",
      icon: "🌐",
      image: "https://images.ctfassets.net/fo9twyrwpveg/1KTYUHtDJTlsFDEWbLAFhj/c383a7286ebc9cef72646241a8c6ed34/What_is_the_Next.js_image_component_and_why_should_I_use_it_.png?fm=webp&w=3840&q=100",
      description: "Transform your online presence with our cutting-edge web development services. Get a professional website at an affordable price!",
      longDescription: "Our expert team specializes in creating modern, responsive websites using Next.js and React. We focus on performance, SEO, and user experience to help your business succeed online.",
      features: [
        "Custom Design & Development",
        "Responsive Mobile-First Approach",
        "SEO Optimization",
        "Fast Loading Speed",
        "Modern UI/UX Design",
        "Contact Form Integration",
        "Social Media Integration",
        "Analytics Setup"
      ],
      pricing: [
        { 
          plan: "Basic", 
          price: "$49", 
          duration: "2 weeks", 
          features: [
            "5 Pages",
            "Basic SEO",
            "Mobile Responsive",
            "Contact Form",
            "Social Media Links",
            "3 Months Support"
          ]
        },
        { 
          plan: "Professional", 
          price: "$99", 
          duration: "3 weeks", 
          features: [
            "10 Pages",
            "Advanced SEO",
            "Custom Design",
            "Blog Setup",
            "Speed Optimization",
            "6 Months Support"
          ]
        },
        { 
          plan: "Enterprise", 
          price: "$199", 
          duration: "4 weeks", 
          features: [
            "Unlimited Pages",
            "E-commerce Setup",
            "Custom Features",
            "Priority Support",
            "Content Management",
            "1 Year Support"
          ]
        }
      ],
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      rating: 4.9,
      reviews: 127
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*OHa3qt2O1mrfeBjQ",
      description: "Create powerful mobile applications for iOS and Android platforms at competitive prices.",
      longDescription: "Our mobile app development team creates stunning cross-platform applications that work seamlessly on both iOS and Android.",
      features: [
        "Cross-Platform Development",
        "Native Performance",
        "Push Notifications",
        "Offline Support",
        "App Store Optimization",
        "Regular Updates",
        "Analytics Integration",
        "User Authentication"
      ],
      pricing: [
        { 
          plan: "Basic", 
          price: "$49", 
          duration: "4 weeks", 
          features: [
            "Single Platform (iOS/Android)",
            "Basic Features",
            "Standard UI",
            "App Store Setup",
            "Basic Analytics",
            "3 Months Support"
          ]
        },
        { 
          plan: "Professional", 
          price: "$99", 
          duration: "6 weeks", 
          features: [
            "Both Platforms (iOS & Android)",
            "Advanced Features",
            "Custom Design",
            "Push Notifications",
            "Advanced Analytics",
            "6 Months Support"
          ]
        },
        { 
          plan: "Enterprise", 
          price: "$199", 
          duration: "8 weeks", 
          features: [
            "Both Platforms + Web App",
            "Premium Features",
            "Premium Design",
            "Admin Dashboard",
            "API Integration",
            "1 Year Support"
          ]
        }
      ],
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      rating: 4.8,
      reviews: 93
    },
    {
      title: "SEO Services",
      icon: "🎯",
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/new-frs-image-dmca-to-advanced-seo.jpg",
      description: "Boost your website's ranking and drive organic traffic with our expert SEO services.",
      longDescription: "Our comprehensive SEO services help improve your website's visibility in search engines, driving more qualified traffic to your business.",
      features: [
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Content Strategy",
        "Link Building",
        "Technical SEO",
        "Local SEO",
        "Monthly Reporting",
        "Competitor Analysis"
      ],
      pricing: [
        { 
          plan: "Basic", 
          price: "$49", 
          duration: "Monthly", 
          features: [
            "5 Keywords",
            "Basic Optimization",
            "Monthly Report",
            "Email Support",
            "Local SEO",
            "Basic Analytics"
          ]
        },
        { 
          plan: "Professional", 
          price: "$99", 
          duration: "Monthly", 
          features: [
            "15 Keywords",
            "Advanced Optimization",
            "Weekly Reports",
            "Priority Support",
            "Content Strategy",
            "Competitor Analysis"
          ]
        },
        { 
          plan: "Enterprise", 
          price: "$199", 
          duration: "Monthly", 
          features: [
            "30+ Keywords",
            "Full Optimization",
            "Custom Reports",
            "24/7 Support",
            "Link Building",
            "E-commerce SEO"
          ]
        }
      ],
      buttonColor: "bg-green-600 hover:bg-green-700",
      rating: 4.7,
      reviews: 89
    },
    {
      title: "Copier & Printer Services",
      icon: "🖨️",
      image: "https://www.shutterstock.com/image-photo/photocopy-copier-photocopier-machine-office-600nw-2472645575.jpg",
      description: "Professional copier and printer services for businesses of all sizes.",
      longDescription: "We provide comprehensive copier and printer solutions including sales, leasing, maintenance, and repairs.",
      features: [
        "Equipment Sales & Leasing",
        "Maintenance & Repairs",
        "Supplies & Parts",
        "Network Integration",
        "Print Management",
        "Cost Analysis",
        "24/7 Support",
        "Preventive Maintenance"
      ],
      pricing: [
        { plan: "Basic", price: "$199", duration: "Monthly", features: ["Basic Maintenance", "Toner Supply", "Phone Support", "Response in 24h"] },
        { plan: "Professional", price: "$399", duration: "Monthly", features: ["Full Maintenance", "All Supplies", "Priority Support", "Response in 4h"] },
        { plan: "Enterprise", price: "$799", duration: "Monthly", features: ["Complete Coverage", "Unlimited Supplies", "24/7 Support", "Response in 2h"] }
      ],
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      rating: 4.8,
      reviews: 156
    },
  ];

  const ServiceCard = ({ service, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <motion.div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Service Header */}
          <div className="relative h-64">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
              flex items-end p-6 text-white">
              <div>
                <span className="text-5xl mb-4">{service.icon}</span>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                {service.rating && (
                  <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-400" />
                    <span className="ml-1">{service.rating}</span>
                    <span className="ml-2 text-sm">({service.reviews} reviews)</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Service Content */}
          <div className="p-6">
            <p className="text-gray-600 mb-6">{service.description}</p>

            {/* Pricing Cards with Error Handling */}
            {service.pricing && service.pricing.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {service.pricing.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    className={`rounded-xl p-6 transition-all duration-300 cursor-pointer
                      ${selectedPlan === idx 
                        ? 'bg-blue-50 border-2 border-blue-500 shadow-lg' 
                        : 'bg-gray-50 border-2 border-transparent hover:border-blue-200'}`}
                    onClick={() => setSelectedPlan(idx)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.plan}</h4>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-gray-500 ml-2">/ {plan.duration}</span>
                    </div>
                    {plan.features && (
                      <ul className="space-y-2">
                        {plan.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center text-sm text-gray-600">
                            <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Expanded Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100 pt-6"
                >
                  <p className="text-gray-600 mb-6">{service.longDescription}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${service.buttonColor} text-white py-3 px-6 rounded-xl 
                  font-semibold flex items-center justify-center gap-2 shadow-lg`}
              >
                Get Started
                <FaArrowRight />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-gray-100 text-gray-800 py-3 px-6 rounded-xl 
                  font-semibold flex items-center justify-center gap-2"
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
                {isExpanded ? <FaTimes /> : <FaInfoCircle />}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="text-center text-white max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Business with Our Services
            </h1>
            <p className="text-xl opacity-90">
              Discover our comprehensive range of solutions designed to help your business grow and succeed.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl text-black font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Our Services?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Team", icon: "👨‍💻", description: "Skilled professionals with years of experience" },
              { title: "Affordable Pricing", icon: "💰", description: "Competitive rates without compromising quality" },
              { title: "24/7 Support", icon: "🔧", description: "Round-the-clock assistance for your needs" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl text-gray-600 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Get in touch with us today and let's discuss your project</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg"
          >
            Schedule a Free Consultation
          </motion.a>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal content here */}
              <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
              {/* Add more detailed information about the service */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ServicesPage
