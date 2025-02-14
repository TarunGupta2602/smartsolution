"use client";
import Head from "next/head";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - GeekSoft Solutions Group</title>
        <meta name="description" content="Learn about GeekSoft Solutions Group, a leader in document management and office technology solutions, with over 30 years of expertise." />
      </Head>

      <div className="w-full">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="w-full bg-blue-600 py-16 text-white text-center"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold">About GeekSoft Solutions Group</h1>
            <p className="mt-4 text-lg">
              Empowering businesses with cutting-edge document management and office technology solutions.
            </p>
          </div>
        </motion.section>

        {/* Company Mission */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="container mx-auto px-6 py-16 text-center md:text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="mt-4 text-gray-600 text-lg">
                At GeekSoft Solutions Group, our mission is to revolutionize office efficiency through innovative document technology and expert solutions.
              </p>
            </div>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
              alt="Office Efficiency"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </motion.section>

        {/* Expertise Highlights */}
        <motion.section 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="w-full bg-gray-100 py-16"
        >
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {["Expertise & Experience", "Innovative Solutions", "Customer Satisfaction", "Reliable Support"].map((title, index) => (
              <motion.div 
                key={index} 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white shadow-lg p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600">
                  {index === 0 && "With some years in the industry, we bring unparalleled knowledge and expertise to our clients."}
                  {index === 1 && "We leverage cutting-edge technology to streamline document management and office efficiency."}
                  {index === 2 && "Our client-focused approach ensures tailored solutions that meet unique business needs."}
                  {index === 3 && "We provide 24/7 reliable support, ensuring your operations run smoothly without downtime."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="w-full py-16 text-center"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch with Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to optimize your office workflow? Contact GeekSoft Solutions Group today.
            </p>
            <a href="/contact">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-6 bg-blue-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Contact Us
              </motion.button>
            </a>
          </div>
        </motion.section>
      </div>
    </>
  );
}
