"use client";import React from "react";
import Link from "next/link";
import {
  FaHospital,
  FaBuilding,
  FaHospitalUser,
  FaEnvelope,
  FaComments,
  FaAmbulance,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { ContactMethodCard } from "./cards/ContactMethodCard";
import { LocationCard } from "./cards/LocationCard";

const ContactLocations = () => {
  return (
    <section id="contact_locations" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Contact & Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Multiple convenient locations to serve you better. Contact us today
            to start your fertility journey.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Center */}
          <LocationCard
            Icon={FaHospital}
            title="Main Fertility Center"
            address="123 Fertility Lane, Medical District, New York, NY 10001"
            phone="+1 (555) 123-4567"
            hours="Mon-Fri: 8AM-6PM"
          />

          {/* Downtown Clinic */}
          <LocationCard
            Icon={FaBuilding}
            title="Downtown Clinic"
            address="456 Downtown Plaza, Suite 200, New York, NY 10002"
            phone="+1 (555) 123-4568"
            hours="Mon-Sat: 9AM-5PM"
          />

          {/* Uptown Location */}
          <LocationCard
            Icon={FaHospitalUser}
            title="Uptown Location"
            address="789 Uptown Avenue, Medical Tower, Floor 5, New York, NY 10003"
            phone="+1 (555) 123-4569"
            hours="Tue-Sat: 8AM-4PM"
          />
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ContactMethodCard
            Icon={FaEnvelope}
            title="Email Us"
            contactInfo="contact@fertilitycare.com"
            href="mailto:contact@fertilitycare.com"
          />
          <ContactMethodCard
            Icon={FaComments}
            title="Live Chat"
            contactInfo="Available Mon-Fri 9AM-5PM EST"
          />
          <ContactMethodCard
            Icon={FaPhone}
            title="24/7 Support"
            contactInfo="1-800-123-4567"
            href="tel:+18001234567"
          />
        </div>

        {/* Emergency Contact */}
        <div className="bg-white rounded-xl p-8 border border-primary-100 mb-16">
          <div className="text-center">
            <FaAmbulance className="text-4xl text-primary-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Emergency Contact
            </h3>
            <p className="text-gray-600 mb-6">
              For urgent medical concerns outside of regular business hours,
              please call our 24/7 emergency line:
            </p>
            <Link
              href="tel:+18009119999"
              className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              1-800-911-9999
            </Link>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-white rounded-xl p-8 border border-primary-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h3>
            <div className="space-y-6">
              <InputField label="Name" id="quick_name" type="text" />
              <InputField label="Email" id="quick_email" type="email" />
              <InputField label="Message" id="quick_message" type="textarea" />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const InputField = ({
  label,
  id,
  type,
}: {
  label: string;
  id: string;
  type: string;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={id}
        rows={4}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
      />
    )}
  </div>
);

export default ContactLocations;
