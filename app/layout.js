import { Geist, Geist_Mono } from "next/font/google";
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
  title: "GeekSoft - Leading Tech Solutions",
  description: "GeekSoft provides cutting-edge tech solutions, web development, and digital marketing strategies to boost your business.",
  keywords: "web development, mobile apps, digital marketing, software solutions, GeekSoft",
  author: "GeekSoft",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "GeekSoft - Web & App Development",
    description: "Transform your digital presence with GeekSoft's top-notch software solutions.",
    url: "https://geeksoft.com",
    type: "website",
    image: "https://geeksoft.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@geeksoft",
    title: "GeekSoft - Web & App Development",
    description: "Leading software solutions provider for web and mobile applications.",
    image: "https://geeksoft.com/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="GeekSoft" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metadata.openGraph.image} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        <link rel="canonical" href="https://geeksoft.com" />
        <title>{metadata.title}</title>
          {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGR47GLP');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        {/* Google Tag Manager (noscript) - Before Body Tag */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGR47GLP"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
        </iframe>
      </noscript>
      </body>
    </html>
  );
}
