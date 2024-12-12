import { FaEnvelope } from "react-icons/fa";import React from "react";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const AppointmentBooking = () => {
  const minDate = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment_booking" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take the first step towards your fertility journey. Book a
            consultation with our expert team.
          </p>
        </div>

        {/* Appointment Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 border border-primary-100">
            <form className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Appointment Preferences */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="appointment_date"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="appointment_date"
                    name="appointment_date"
                    required
                    min={minDate}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="appointment_time"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Time *
                  </label>
                  <select
                    id="appointment_time"
                    name="appointment_time"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Treatment Type */}
              <div>
                <label
                  htmlFor="treatment_type"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Interested Treatment *
                </label>
                <select
                  id="treatment_type"
                  name="treatment_type"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                >
                  <option value="">Select treatment type</option>
                  <option value="ivf">IVF Treatment</option>
                  <option value="genetic_testing">Genetic Testing</option>
                  <option value="egg_freezing">Egg Freezing</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaPhone className="fas fa-phone text-2xl text-primary-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <Link href={"tel:+15551234567"}>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope className="fas fa-envelope text-2xl text-primary-600 mb-4" />

              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <Link href={"mailto:contact@fertilitycare.com"}>
                <p className="text-gray-600">contact@fertilitycare.com</p>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <FaLocationDot className="fas fa-location-dot text-2xl text-primary-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <Link href={"https://www.google.com/maps"}>
                <p className="text-gray-600">
                  123 Fertility Lane, Medical District, NY 10001
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
