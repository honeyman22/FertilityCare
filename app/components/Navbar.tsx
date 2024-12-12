"use client";
import { useState, useEffect } from "react";

import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu if window resizes beyond 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-heading font-bold text-primary-600">
              FertilityCare
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#our_expertise"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Our Expertise
            </a>
            <a
              href="#treatment_options"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Treatments
            </a>
            <a
              href="#doctor_profiles"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Our Doctors
            </a>
            <a
              href="#success_stories"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#appointment_booking"
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <IoMenu /> : <IoClose />}
            </button>
          </div>
        </div>

        {isOpen && (
          <button
            className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a
                href="#our_expertise"
                className="block py-2 text-gray-600 hover:text-primary-600"
              >
                Our Expertise
              </a>
              <a
                href="#treatment_options"
                className="block py-2 text-gray-600 hover:text-primary-600"
              >
                Treatments
              </a>
              <a
                href="#doctor_profiles"
                className="block py-2 text-gray-600 hover:text-primary-600"
              >
                Our Doctors
              </a>
              <a
                href="#success_stories"
                className="block py-2 text-gray-600 hover:text-primary-600"
              >
                Success Stories
              </a>
              <a
                href="#appointment_booking"
                className="block py-2 text-primary-600 font-semibold"
              >
                Book Appointment
              </a>
            </div>
          </button>
        )}
      </nav>
    </div>
  );
}
