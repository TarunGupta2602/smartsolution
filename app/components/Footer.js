"use client";
import Link from "next/link";
import Head from "next/head";

export default function Footer() {
  return (
    
    <footer className="bg-gray-900 text-white py-10">
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              At Geeksoft, we provide top-tier office solutions to enhance productivity, streamline workflows, 
              and improve document management. Our expertise includes copier and printer sales, document scanning, 
              and on-site maintenance to ensure seamless business operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              Email: 
              <a href="mailto:info@geeksoft.org" className="text-blue-500 hover:underline ml-1">
                info@geeksoft.org
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              Phone:  
              <a href="tel:+17867538470" className="text-blue-500 hover:underline ml-1">
                +1-786-753-8470
              </a>
            </p>

           
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GeekSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
