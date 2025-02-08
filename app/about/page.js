import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About Us - GeekSoft Solutions Group</title>
        <meta name="description" content="Learn about GeekSoft Solutions Group, a leader in document management and office technology solutions, with over 30 years of expertise." />
        <meta name="keywords" content="GeekSoft Solutions Group, document management, office technology, workflow solutions, business efficiency" />
        <meta name="author" content="GeekSoft Solutions Group" />
        <link rel="canonical" href="https://yourwebsite.com/about" />

        {/* Open Graph Meta Tags (for Facebook & LinkedIn) */}
        <meta property="og:title" content="About Us - GeekSoft Solutions Group" />
        <meta property="og:description" content="GeekSoft Solutions Group empowers businesses with advanced document management and office technology solutions." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - GeekSoft Solutions Group" />
        <meta name="twitter:description" content="GeekSoft Solutions Group helps businesses improve efficiency through innovative document technology solutions." />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

        {/* Structured Data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GeekSoft Solutions Group",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "description": "GeekSoft Solutions Group specializes in document management and office technology solutions to optimize business workflows.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-123-4567",
              "contactType": "customer service",
              "areaServed": "Global",
              "availableLanguage": "English"
            }
          })}

        </script>
           {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGR47GLP');`
        }} />
        {/* End Google Tag Manager */}
      </Head>
 {/* Google Tag Manager (noscript) - Before Body Tag */}
 <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGR47GLP"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
        </iframe>
      </noscript>
      <div className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-blue-600 py-16 text-white text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold">About GeekSoft Solutions Group</h1>
            <p className="mt-4 text-lg">
              Empowering businesses with cutting-edge document management and office technology solutions.
            </p>
          </div>
        </section>

        {/* Company Mission */}
        <section className="container mx-auto px-6 py-16 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="mt-4 text-gray-600 text-lg">
                At GeekSoft Solutions Group, our mission is to revolutionize office efficiency through innovative document technology and expert solutions.
                With over 30 years of experience, we help businesses streamline workflows, reduce costs, and enhance productivity.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwb2ZmaWNlfGVufDB8fDB8fHww"
              alt="Office Efficiency"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Expertise Highlights */}
        <section className="w-full bg-gray-100 py-16">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {["Expertise & Experience", "Innovative Solutions", "Customer Satisfaction", "Reliable Support"].map((title, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600">
                  {index === 0 && "With over 30 years in the industry, we bring unparalleled knowledge and expertise to our clients."}
                  {index === 1 && "We leverage cutting-edge technology to streamline document management and office efficiency."}
                  {index === 2 && "Our client-focused approach ensures tailored solutions that meet unique business needs."}
                  {index === 3 && "We provide 24/7 reliable support, ensuring your operations run smoothly without downtime."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch with Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to optimize your office workflow? Contact GeekSoft Solutions Group today.
            </p>
            <a href="/contact">
              <button className="mt-6 bg-blue-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all">
                Contact Us
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
