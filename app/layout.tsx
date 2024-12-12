import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact & Locations | Fertility Care Center",
  description:
    "Find multiple convenient Fertility Care Center locations near you. Contact us today to begin your fertility journey with expert care.",
  openGraph: {
    title: "Contact & Locations | Fertility Care Center",
    description:
      "Discover convenient Fertility Care Center locations near you. Contact us today to schedule an appointment with our expert fertility specialists.",
    url: "https://www.fertilitycare.com/contact-locations",
    images: [
      {
        url: "/herosection.jpg",
        width: 1200,
        height: 630,
        alt: "Fertility Care Center Main Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Locations | Fertility Care Center",
    description:
      "Discover convenient Fertility Care Center locations near you. Contact us today to schedule an appointment with our expert fertility specialists.",
    images: [
      {
        url: "/herosection.jpg",
        width: 1200,
        height: 630,
        alt: "Fertility Care Center Main Clinic",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Main Fertility Care Center",
              image: "https://www.fertilitycare.com/images/clinic1.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Fertility Lane",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
              },
              telephone: "+1 (555) 123-4567",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.712776",
                longitude: "-74.005974",
              },
              url: "https://www.fertilitycare.com/contact-locations",
              sameAs: [
                "https://www.facebook.com/fertilitycare",
                "https://www.twitter.com/fertilitycare",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
