import React from "react";
import Link from "next/link";
import { ResourceCard } from "./cards/ResourceCard";
import {
  FaBookMedical,
  FaClipboard,
  FaHandHoldingHeart,
  FaHeadset,
  FaPills,
  FaWallet,
} from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";

const PatientResources = () => {
  return (
    <section id="patient_resources" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Patient Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about your fertility journey, all in one
            place.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Educational Materials */}
          <ResourceCard
            icon={<FaBookMedical size={40} />}
            title="Educational Materials"
            links={[
              { label: "Understanding IVF Process Guide", href: "#" },
              { label: "Fertility Treatment Options Overview", href: "#" },
              { label: "Preparing for Your First Consultation", href: "#" },
            ]}
          />

          {/* Patient Forms */}
          <ResourceCard
            icon={<FaClipboard size={40} />}
            title="Patient Forms"
            links={[
              { label: "New Patient Registration Form", href: "#" },
              { label: "Medical History Questionnaire", href: "#" },
              { label: "Insurance Information Form", href: "#" },
            ]}
          />

          {/* Insurance & Financial */}
          <ResourceCard
            icon={<FaWallet size={40} />}
            title="Insurance & Financial"
            links={[
              { label: "Insurance Coverage Guide", href: "#" },
              { label: "Financing Options", href: "#" },
              { label: "Cost & Payment Information", href: "#" },
            ]}
          />

          {/* Support Services */}
          <ResourceCard
            icon={<FaHandHoldingHeart size={40} />}
            title="Support Services"
            links={[
              { label: "Support Group Schedule", href: "#" },
              { label: "Counseling Services", href: "#" },
              { label: "Online Community Forum", href: "#" },
            ]}
          />

          {/* FAQs */}
          <ResourceCard
            icon={<FaCircleQuestion size={40} />}
            title="Frequently Asked Questions"
            links={[
              { label: "Treatment Process FAQs", href: "#" },
              { label: "Insurance & Payment FAQs", href: "#" },
              { label: "General Care FAQs", href: "#" },
            ]}
          />

          {/* Medication Information */}
          <ResourceCard
            icon={<FaPills size={40} />}
            title="Medication Information"
            links={[
              { label: "Medication Guidelines", href: "#" },
              { label: "Administration Schedule", href: "#" },
              { label: "Side Effects Information", href: "#" },
            ]}
          />
        </div>

        {/* Additional Resources CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Can&apos;t find what you&apos;re looking for? Our team is here to
            help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#appointment_booking">
              <p className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors">
                Contact Support
                <FaHeadset className="ml-2" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientResources;
