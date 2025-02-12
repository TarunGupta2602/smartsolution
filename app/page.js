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
<section className="w-full min-h-[55vh] bg-gradient-to-r from-blue-900 to-blue-600 flex items-center py-10">
  <div className="flex flex-col-reverse md:flex-row justify-between w-full px-6 md:px-12 lg:px-24 gap-6 md:gap-12">
    
    {/* Left Side: Text and Button */}
    <div className="text-white flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wide">
        Smart Solutions to Empower Your Business
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
        From <strong>website & mobile app development</strong> to <strong>SEO, office printers, and document solutions</strong>,  
        GEEKSOFT <strong>helps businesses grow smarter & work more efficiently.</strong> Get tailored digital and office solutions at affordable prices.
      </p>
      <a href="/services" className="mx-auto md:mx-0">
        <button className="bg-yellow-500 py-3 px-6 text-gray-900 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all ease-in-out transform hover:scale-105 self-start md:self-auto">
          Explore Services
        </button>
      </a> 
    </div>

    {/* Right Side: Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="https://geeksoftconsulting.com/wp-content/uploads/2023/08/cb1.png"
        alt="Business Solutions"
        className="w-full max-w-md h-[300px] sm:h-[400px] md:h-[450px] lg:h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

        {/* New Section: Services */}
        <section className="w-full py-16 bg-gray-100">
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Which service are you looking for?
          </h2>
        </div>
        
        {/* Services Cards */}
        <div className="container mx-auto px-6 space-y-12">
          {/* Service Card Component */}
          {[
            {
              title: "Website Development",
              image: "https://images.ctfassets.net/fo9twyrwpveg/1KTYUHtDJTlsFDEWbLAFhj/c383a7286ebc9cef72646241a8c6ed34/What_is_the_Next.js_image_component_and_why_should_I_use_it_.png?fm=webp&w=3840&q=100",
              description: "At GEEKSOFT Solutions, we build fast, SEO-friendly websites using the latest Next.js technology, ensuring a modern, fully responsive design for businesses, e-commerce, and portfolios. Our websites are optimized for speed, mobile-friendliness, and high Google rankings. Get a custom, high-performance website delivered within 3 weeks for just $50 (excluding domain & hosting). Plus, the first two projects are FREE! Ready to take your business online? Contact us today! 🚀",
              buttonColor: "bg-green-600 hover:bg-green-700"
            },
            {
              title: "Mobile App Development",
              image: "https://miro.medium.com/v2/resize:fit:1400/0*OHa3qt2O1mrfeBjQ",
              description: "At GEEKSOFT Solutions, we create high-performance, cross-platform mobile apps using the latest React Native & Expo technologies. Our apps are fast, user-friendly, and work seamlessly on both iOS and Android. Get your custom app developed **within 3 weeks for just $50, with the first two projects FREE! Ready to turn your idea into reality? Contact us today! 📱🚀",
              buttonColor: "bg-blue-600 hover:bg-blue-700"
            },
            {
              title: "SEO Services",
              image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/new-frs-image-dmca-to-advanced-seo.jpg",
              description: "At GEEKSOFT Solutions, we offer expert SEO services to boost your website’s ranking using the latest strategies in keyword optimization, technical SEO, and content marketing. Improve your online visibility, attract more organic traffic, and grow your business. Get started **for just $50**, with results-driven optimization delivered in 3 weeks! 🚀📈 Contact us today!",
              buttonColor: "bg-orange-600 hover:bg-orange-700"
            },
            {
              title: "Copier & Printer Sales",
              image: "https://www.shutterstock.com/image-photo/photocopy-copier-photocopier-machine-office-600nw-2472645575.jpg",
              description: " Experience the best in document technology with GEEKSOFT Solutions Group's range of Konica Minolta BizHub copiers and printers. Whether you're looking to buy, lease, or rent, we provide comprehensive solutions that include full service and maintenance, ensuring your business enjoys maximum uptime.",
              buttonColor: "bg-yellow-600 hover:bg-yellow-700"
            },
            {
              title: "Copier & Printer Service Calls",
              image: "https://media.istockphoto.com/id/1230215260/photo/man-copying-car-key-with-key-copy-machine.jpg?s=612x612&w=0&k=20&c=6cZW4bA4iyEDHK0FudKW8A4mRhRzz04kIghaRGMetnI=",
              description: " When Copier and Printer Service issues threaten your business's productivity, GEEKSOFT Solutions Group is here to help. Our expert Onsite service ensures your equipment is quickly repaired or maintained, reducing downtime and keeping your operations smooth.",
              buttonColor: "bg-red-600 hover:bg-red-700"
            },
            {
              title: "Document Scanning Services",
              image: "https://media.istockphoto.com/id/157618089/photo/using-copier.jpg?s=612x612&w=0&k=20&c=PbC2x9x7CIA5qWKA3pD2aE4w8Hx92mK_0EVyXKeeR5s=",
              description: " Transform your office with GEEKSOFT Solutions Group's Document Scanning service. By converting paper files into digital formats, we help businesses unlock new levels of efficiency, freeing up valuable office space and ensuring documents are easily accessible and shareable, even remotely.",
              buttonColor: "bg-green-600 hover:bg-green-700"
            }
          ].map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 h-96 object-cover"
              />
              <div className="w-full md:w-1/2 p-8 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="/contact">
                  <button className={`${service.buttonColor} text-white py-3 px-6 text-lg font-semibold rounded-xl transition-all`}>
                    Get Service
                  </button>
                </a>
              </div>
            </div>
          ))}
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
          We’ve refined our processes to offer the best in customer service and technology.
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
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
    Transforming Your Office Efficiency with Expert Solutions
  </h2>
  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
    At GeekSoft Solutions, we are your trusted partner in digital transformation and office efficiency. Whether you're looking to establish a strong online presence, boost business growth with cutting-edge mobile apps, or streamline office operations with reliable equipment, we’ve got you covered.

    Our expert team specializes in next-generation website development, high-performance mobile applications, and SEO strategies that drive real results. We also provide top-tier office solutions, including advanced document management systems, high-quality printers, and seamless digital integrations, ensuring your business operates with maximum efficiency and productivity.

    With a customer-first approach, we tailor our services to meet your unique needs, offering cost-effective solutions, fast turnaround times, and dedicated support to help you stay ahead of the competition. Whether you're a startup looking for an impactful online presence or an enterprise in need of scalable tech solutions, we are here to bring your vision to life.

    <br />
    With GeekSoft Solutions Group, experience the peace of mind that comes from having a partner dedicated to ensuring your operations are always running smoothly.
  </p>
  <div className="flex justify-center md:justify-start">
    <a href="/contact">
      <button className="bg-blue-600 text-white py-2 px-5 text-base font-semibold rounded-lg hover:bg-blue-700 transition-all ease-in-out transform hover:scale-105">
        Contact Us
      </button>
    </a>
  </div>
</div>

  </div>
</section>

    </div>
    </>
  );
}
