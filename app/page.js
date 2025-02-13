"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


export default function HomePage() {
  return (
    <>
    <Head>
        <title>GeekSoft Solutions Group - Office Equipment and Document Management</title>
        <meta name="description" content="GeekSoft Solutions Group offers certified copiers, printers, and document management solutions. Get the best service for your business needs." />
        <meta name="keywords" content="copiers, printers, document management, office equipment, maintenance, service" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="GeekSoft Solutions Group - Office Equipment and Document Management" />
        <meta property="og:description" content="Certified copiers, printers, and document management solutions to streamline your office." />
        <meta property="og:image" content="https://your-image-url-here.com/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GeekSoft Solutions Group - Office Equipment and Document Management" />
        <meta name="twitter:description" content="Certified copiers, printers, and document management solutions to streamline your office." />
        <meta name="twitter:image" content="https://your-image-url-here.com/twitter-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
             
      </Head>
      
    <div>

{/* Hero Section */}
<section className="w-full min-h-[55vh] bg-gradient-to-r from-blue-900 to-blue-600 flex items-center py-10">
  <motion.div 
    className="flex flex-col-reverse md:flex-row justify-between w-full px-6 md:px-12 lg:px-24 gap-6 md:gap-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Left Side: Text and Button */}
    <motion.div 
      className="text-white flex flex-col justify-center w-full md:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.2 
      }}
    >
      <motion.h2 
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wide"
        animate={{ 
          scale: [1, 1.02, 1],
          transition: { 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" 
          }
        }}
      >
        Smart Solutions to Empower Your Business
      </motion.h2>
      <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
        From <strong>website & mobile app development</strong> to <strong>SEO, office printers, and document solutions</strong>,  
        GEEKSOFT <strong>helps businesses grow smarter & work more efficiently.</strong> Get tailored digital and office solutions at affordable prices.
      </p>
      <motion.button 
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 15px rgba(255,255,255,0.5)" 
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow-500 py-3 px-6 text-gray-900 text-lg font-semibold rounded-lg transition-all ease-in-out"
      >
        <a href="/services">Explore Services</a> 
      </motion.button>
    </motion.div>

    {/* Right Side: Image */}
    <motion.div 
      className="w-full md:w-1/2 flex justify-center"
      initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }}
    >
      <img
        src="https://geeksoftconsulting.com/wp-content/uploads/2023/08/cb1.png"
        alt="Business Solutions"
        className="w-full max-w-md h-[300px] sm:h-[400px] md:h-[450px] lg:h-full object-cover rounded-lg shadow-lg"
      />
    </motion.div>
  </motion.div>
</section>


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
              "GeekSoft Solutions offers expert SEO services to boost your website's ranking and drive organic traffic. We specialize in keyword optimization, on-page & technical SEO, content marketing, local SEO, and high-quality link building. Our team ensures faster site performance, better visibility, and increased conversions with data-driven strategies. Stay ahead of the competition — optimize your website with us today! 🚀",
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Animated Image */}
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/2 h-96 object-cover"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
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
     
    <section className="w-full py-16 bg-blue-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Expertise",
              description:
                "Our team is made up of industry experts who have mastered the latest in document technology and solutions.",
            },
            {
              title: "Experience",
              description:
                "We've refined our processes to offer the best in customer service and technology.",
            },
            {
              title: "Reliability",
              description:
                "Our solutions provide consistent performance and reliability, ensuring your business runs smoothly.",
            },
            {
              title: "Customer-Centric",
              description:
                "We prioritize our customers' needs and offer customized solutions for unique business requirements.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.img
                src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_1280.png"
                alt="Tick"
                className="w-12 h-12 mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section
  className="w-full py-16 bg-gray-50"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Left Side: Image */}
    <motion.div
      className="w-full md:w-1/2"
      initial={{ opacity: 0, x: -50, rotateY: 30 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 1,
        ease: "easeOut"
      }}
    >
      <motion.img
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.5 }
        }}
        className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
        src="https://imageio.forbes.com/specials-images/imageserve/66e99bc027c808411e5f615a/Business-team-working-on-computers-in-modern-office-space-/960x0.jpg?format=jpg&width=960"
        alt="Office Efficiency"
      />
    </motion.div>

    {/* Right Side: Text and Contact Us Button */}
    <motion.div
      className="w-full md:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 1,
        delay: 0.3,
        ease: "easeOut"
      }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Transforming Your Office Efficiency with Expert Solutions
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
        At <span className="font-semibold text-blue-600">GeekSoft Solutions</span>, we are your trusted partner in digital transformation and office efficiency. Whether you're looking to establish a strong online presence, boost business growth with cutting-edge mobile apps, or streamline office operations with reliable equipment, we've got you covered.
        <br />
        <br />
        Our expert team specializes in <span className="font-semibold">next-generation website development, high-performance mobile applications, and SEO strategies</span> that drive real results. We also provide top-tier office solutions, including <span className="font-semibold">advanced document management systems, high-quality printers, and seamless digital integrations</span>, ensuring your business operates with maximum efficiency.
        <br />
        <br />
        With a customer-first approach, we tailor our services to meet your unique needs, offering <span className="font-semibold">cost-effective solutions, fast turnaround times, and dedicated support</span> to help you stay ahead of the competition.
      </p>

      <div className="flex justify-center md:justify-start">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-blue-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all ease-in-out">
            Contact Us
          </button>
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>

    </div>
    </>
  );
}
