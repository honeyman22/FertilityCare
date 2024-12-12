"use client";
import Link from "next/link";
import {
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    {
      icon: <FaFacebook />,
    },
    {
      icon: <FaTwitter />,
    },
    {
      icon: <FaInstagram />,
    },
    {
      icon: <FaLinkedin />,
    },
  ];
  const quickLinks = [
    { href: "#our_expertise", text: "Our Expertise" },
    { href: "#treatment_options", text: "Treatments" },
    { href: "#doctor_profiles", text: "Our Doctors" },
    { href: "#success_stories", text: "Success Stories" },
    { href: "#appointment_booking", text: "Book Appointment" },
  ];
  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Accessibility",
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary-400 mb-6">
              FertilityCare
            </h3>
            <p className="text-gray-400 mb-6">
              Helping families achieve their dreams with advanced fertility
              treatments and compassionate care.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <Link
                  key={index + 6}
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {icon.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index + 6}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary-400 mt-1 mr-3"></i>
                <span className="text-gray-400">
                  123 Fertility Lane
                  <br />
                  Medical District
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary-400 mr-3"></i>
                <Link
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  +1 (555) 123-4567
                </Link>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary-400 mr-3"></i>
                <Link
                  href="mailto:contact@fertilitycare.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  contact@fertilitycare.com
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates and news about fertility treatments.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-primary-400"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 FertilityCare. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legalLinks.map((item, index) => (
                <Link
                  key={index + 8}
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-primary-600 text-white p-4 rounded-full hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
