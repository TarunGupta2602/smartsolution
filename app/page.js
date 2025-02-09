import Head from "next/head";

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
      <section className="w-full h-[55vh] bg-red-500 flex items-center">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full px-6 md:px-12 lg:px-24">
          {/* Left Side: Text and Button */}
          <div className="text-white flex flex-col justify-center w-full md:w-1/2 md:ml-12 mb-12 md:mb-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 leading-tight">
              Streamline Your Office With
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 tracking-wide leading-snug">
              New & Certified Pre-Owned <br /> Copiers, Printers & Document <br /> Management Solutions
            </p>
           <a href="/services"><button className="bg-blue-600 w-48 py-3 px-6 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all ease-in-out transform hover:scale-105">
              Select Your Service
            </button></a> 
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <img
              src="https://media.istockphoto.com/id/2149925427/photo/close-up-hand-of-businesswoman-press-start-copy-button-on-photocopier.jpg?s=2048x2048&w=is&k=20&c=nytcqyIT7D5u91iIJRkEj-LsawhD7m4jHkoCahQAr28="
              alt="Office Equipment"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
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
             
             <a href="/contact"><button className="bg-green-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-green-700 transition-all ease-in-out transform hover:scale-105">
                Get Service
              </button></a> 
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1230215260/photo/man-copying-car-key-with-key-copy-machine.jpg?s=612x612&w=0&k=20&c=6cZW4bA4iyEDHK0FudKW8A4mRhRzz04kIghaRGMetnI="
              alt="Copiers & Printers"
              className="w-full h-full object-cover rounded-lg shadow-lg mt-14"
            />
          </div>

          {/* Right Side: Text and Buttons */}
          <div className="w-full md:w-1/2 text-center md:text-left"><br/>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Copier & Printer Service Calls
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
            When Copier and Printer Service issues threaten your business's productivity, GEEKSOFT Solutions Group is here to help. Our expert Onsite service ensures your equipment is quickly repaired or maintained, reducing downtime and keeping your operations smooth.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
            
             <a href="/conatct"><button className="bg-green-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-green-700 transition-all ease-in-out transform hover:scale-105">
                Get Service
              </button></a> 
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/157618089/photo/using-copier.jpg?s=612x612&w=0&k=20&c=PbC2x9x7CIA5qWKA3pD2aE4w8Hx92mK_0EVyXKeeR5s="
              alt="Copiers & Printers"
              className="w-full h-full object-cover rounded-lg shadow-lg mt-14"
            />
          </div>

          {/* Right Side: Text and Buttons */}

          <div className="w-full md:w-1/2 text-center md:text-left"><br/>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Document Scanning Services
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
            Transform your office with GEEKSOFT Solutions Group's Document Scanning service. By converting paper files into digital formats, we help businesses unlock new levels of efficiency, freeing up valuable office space and ensuring documents are easily accessible and shareable, even remotely.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
              
             <a href="/contact"> <button className="bg-green-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-green-700 transition-all ease-in-out transform hover:scale-105">
                Get Service
              </button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-blue-100">
  <div className="container mx-auto px-6 text-center">
    

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Column 1 */}
      <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_1280.png"
          alt="Tick"
          className="w-12 h-12 mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Expertise</h3>
        <p className="text-gray-600">
          Our team is made up of industry experts who have mastered the latest in document technology and solutions.
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_1280.png"
          alt="Tick"
          className="w-12 h-12 mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Experience</h3>
        <p className="text-gray-600">
          With 30 years of industry experience, we’ve refined our processes to offer the best in customer service and technology.
        </p>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_1280.png"
          alt="Tick"
          className="w-12 h-12 mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
        <p className="text-gray-600">
          Our solutions are designed to provide consistent performance and reliability, ensuring your business runs smoothly.
        </p>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_1280.png"
          alt="Tick"
          className="w-12 h-12 mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer-Centric</h3>
        <p className="text-gray-600">
          We prioritize our customers’ needs and offer customized solutions to fit their unique business requirements.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="w-full py-16 bg-gray-50">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Left Side: Image */}
    <div className="w-full md:w-1/2">
      <img
        src="https://imageio.forbes.com/specials-images/imageserve/66e99bc027c808411e5f615a/Business-team-working-on-computers-in-modern-office-space-/960x0.jpg?format=jpg&width=960"
        alt="Office Efficiency"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Right Side: Text and Contact Us Button */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Transforming Your Office Efficiency with Expert Solutions
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
        At GeekSoft Solutions Group, we understand the critical role that efficient document management and reliable office equipment play in the success of your business. With our comprehensive suite of services, we empower businesses to overcome the challenges of downtime, high operational costs, and document disorganization. Our expertly tailored solutions ensure that your copiers, printers, and documents work seamlessly to support your team's productivity and collaboration. By converting cumbersome paper files into accessible digital formats, providing cost-effective and reliable equipment solutions, and offering unparalleled onsite maintenance, we transform your office into a streamlined, efficient environment. This transformation allows you to focus on what truly matters—growing your business and serving your clients.
        <br />
        <br />
        With GeekSoft Solutions Group, experience the peace of mind that comes from having a partner dedicated to ensuring your operations are always running smoothly.
      </p>
      <div className="flex justify-center md:justify-start">
        <a href="/contact"><button className="bg-blue-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all ease-in-out transform hover:scale-105">
          Contact Us
        </button></a>
      </div>
    </div>
  </div>
</section>

    </div>
    </>
  );
}
