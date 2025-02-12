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
  title: "GeekSoft - Leading Tech Solutions | Web & App Development",
  description: "GeekSoft provides cutting-edge software solutions, web & app development, and digital marketing strategies to grow your business.",
  keywords: "web development, mobile apps, digital marketing, SEO, software solutions, e-commerce, branding, cloud solutions, GeekSoft",
  author: "GeekSoft",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "GeekSoft - Web & App Development Experts",
    description: "Transform your digital presence with GeekSoft's cutting-edge web, app, and software development solutions.",
    url: "https://geeksoft.org",
    type: "website",
    image: "https://geeksoft.org/og-image.jpg",
    siteName: "GeekSoft",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@geeksoft",
    title: "GeekSoft - Web & App Development",
    description: "Leading provider of innovative software solutions for businesses worldwide.",
    image: "https://geeksoft.org/twitter-image.jpg",
  },
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content="#0a66c2" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter Meta Tags for Sharing */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Structured Data (Schema.org) for Better SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GeekSoft",
            "url": "https://geeksoft.org",
            "logo": "https://geeksoft.org/logo.png",
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
            ]
          })
        }} />

        {/* Canonical Link to Avoid Duplicate Content */}
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
