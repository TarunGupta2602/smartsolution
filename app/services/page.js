import React from 'react'
import Head from 'next/head'

const page = () => {
  return (
    <div>
      {/* Adding Metadata for SEO */}
      <Head>
        <title>Copier & Printer Sales and Services | GEEKSOFT Solutions Group</title>
        <meta name="description" content="Explore copier & printer sales, service calls, and document scanning services with GEEKSOFT Solutions Group. Get expert help to improve your office productivity." />
        <meta name="keywords" content="copier sales, printer sales, copier service, printer repair, document scanning services" />
        <meta name="author" content="GEEKSOFT Solutions Group" />
        <meta property="og:title" content="Copier & Printer Sales and Services | GEEKSOFT Solutions Group" />
        <meta property="og:description" content="Explore copier & printer sales, service calls, and document scanning services with GEEKSOFT Solutions Group." />
        <meta property="og:image" content="https://www.shutterstock.com/image-photo/photocopy-copier-photocopier-machine-office-600nw-2472645575.jpg" />
        <meta property="og:url" content="http://www.gzb.ae/copier-printer-services" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* New Section: Copier & Printer Sales */}
      <section className="w-full py-16 bg-gray-100">
        {/* Heading: Which service are you looking for? */}
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Which service are you looking for?
          </h2>
        </div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://www.shutterstock.com/image-photo/photocopy-copier-photocopier-machine-office-600nw-2472645575.jpg"
              alt="Copiers & Printers"
              className="w-full h-full object-cover rounded-lg shadow-lg "
            />
          </div>

          {/* Right Side: Text and Buttons */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Copier & Printer Sales
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
              Experience the best in document technology with GEEKSOFT Solutions Group's range of Konica Minolta BizHub copiers and printers. Whether you're looking to buy, lease, or rent, we provide comprehensive solutions that include full service and maintenance, ensuring your business enjoys maximum uptime.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="/contact">
                <button className="bg-green-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-green-700 transition-all ease-in-out transform hover:scale-105">
                  Get Service
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Copier & Printer Service Calls */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 mt-14">
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1230215260/photo/man-copying-car-key-with-key-copy-machine.jpg?s=612x612&w=0&k=20&c=6cZW4bA4iyEDHK0FudKW8A4mRhRzz04kIghaRGMetnI="
              alt="Copier & Printer Service Call"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Copier & Printer Service Calls
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
              When Copier and Printer Service issues threaten your business's productivity, GEEKSOFT Solutions Group is here to help. Our expert Onsite service ensures your equipment is quickly repaired or maintained, reducing downtime and keeping your operations smooth.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="/contact">
                <button className="bg-green-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-green-700 transition-all ease-in-out transform hover:scale-105">
                  Get Service
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Document Scanning Services */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 mt-14">
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/157618089/photo/using-copier.jpg?s=612x612&w=0&k=20&c=PbC2x9x7CIA5qWKA3pD2aE4w8Hx92mK_0EVyXKeeR5s="
              alt="Document Scanning Service"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Document Scanning Services
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
              Transform your office with GEEKSOFT Solutions Group's Document Scanning service. By converting paper files into digital formats, we help businesses unlock new levels of efficiency, freeing up valuable office space and ensuring documents are easily accessible and shareable, even remotely.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="/contact">
                <button className="bg-green-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-green-700 transition-all ease-in-out transform hover:scale-105">
                  Get Service
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
