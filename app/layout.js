import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GeekSoft India - Leading Software Development & IT Solutions Company",
  description: "GeekSoft India is a premier software development company specializing in custom web & mobile apps, enterprise solutions, SEO, and IT services. Get expert solutions at competitive prices.",
  keywords: "GeekSoft, GeekSoft India, software development company, web development, mobile app development, SEO services, IT solutions, software company in India, best software company, affordable web development",
  author: "GeekSoft",
  robots: "index, follow",
  openGraph: {
    title: "GeekSoft India - Leading Software Development Company",
    description: "Transform your business with GeekSoft's expert web development, mobile apps, and IT solutions. 100+ successful projects delivered across India.",
    url: "https://geeksoft.org",
    type: "website",
    image: "https://geeksoft.org/og-image-large.jpg",
    siteName: "GeekSoft India",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@geeksoft",
    title: "GeekSoft India - Top Software Development Company",
    description: "Trusted by 100+ businesses for web development, mobile apps & IT solutions. Contact us for free consultation.",
    image: "https://geeksoft.org/twitter-image.jpg",
  },
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content="#0a66c2" />

        {/* Additional SEO Meta Tags */}
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi, India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="subject" content="Software Development & IT Solutions" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GeekSoft India",
            "url": "https://geeksoft.org",
            "logo": "https://geeksoft.org/logo.png",
            "description": "GeekSoft India is a leading software development company providing comprehensive IT solutions including web development, mobile apps, SEO, and enterprise solutions.",
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Delhi",
              "addressRegion": "Delhi",
              "postalCode": "Your Postal Code",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-74560-96455",
              "contactType": "customer service",
              "areaServed": ["IN", "Worldwide"],
              "availableLanguage": ["English", "Hindi"]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "50"
            },
            "sameAs": [
              "https://www.facebook.com/geeksoft",
              "https://twitter.com/geeksoft",
              "https://www.linkedin.com/company/geeksoft",
              "https://www.instagram.com/geeksoft"
            ],
            "service": [
              {
                "@type": "Service",
                "name": "Web Development",
                "serviceType": "Website and Web Application Development"
              },
              {
                "@type": "Service",
                "name": "Mobile App Development",
                "serviceType": "iOS and Android App Development"
              },
              {
                "@type": "Service",
                "name": "SEO Services",
                "serviceType": "Search Engine Optimization"
              },
              {
                "@type": "Service",
                "name": "Printing & Documentation",
                "serviceType": "Printing, Document Preparation, and Editing Services"
              }
            ]
          })
        }} />

        {/* Local Business Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GeekSoft India",
            "image": "https://geeksoft.org/logo.png",
            "priceRange": "₹₹",
            "@id": "https://geeksoft.org",
            "url": "https://geeksoft.org",
            "telephone": "+91-74560-96455",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Delhi",
              "postalCode": "Your Postal Code",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          })
        }} />

        {/* Canonical Link */}
        <link rel="canonical" href="https://geeksoft.org" />

        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href={metadata.favicon} sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Title */}
        <title>{metadata.title}</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
