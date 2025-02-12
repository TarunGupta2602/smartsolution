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
  title: "GeekSoft - Web & Mobile App Development | SEO & IT Solutions",
  description: "GeekSoft offers top-tier web development, mobile app solutions, SEO services, IT support, printing, and documentation services to help businesses thrive online.",
  keywords: "web development, mobile app development, SEO services, software solutions, IT support, digital marketing, e-commerce, branding, cloud solutions, printing services, documentation services, GeekSoft",
  author: "GeekSoft",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "GeekSoft - Web & Mobile App Development | SEO & IT Solutions",
    description: "Get cutting-edge software solutions from GeekSoft, including web & mobile app development, SEO, and IT services.",
    url: "https://geeksoft.org",
    type: "website",
    image: "https://geeksoft.org/og-image.jpg",
    siteName: "GeekSoft",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@geeksoft",
    title: "GeekSoft - Web & Mobile App Development Experts",
    description: "Leading provider of web, app, and IT solutions to boost your online presence.",
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
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />

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
            "name": "GeekSoft",
            "url": "https://geeksoft.org",
            "logo": "https://geeksoft.org/logo.png",
            "description": "GeekSoft specializes in web development, mobile apps, SEO, IT solutions, printing, and documentation services.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-74560-96455",
              "contactType": "customer service",
              "areaServed": "Worldwide",
              "availableLanguage": ["English", "Hindi"]
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
