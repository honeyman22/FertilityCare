import Link from "next/link";
import React from "react";
import { FaInfoCircle, FaQuestionCircle } from "react-icons/fa";
const TreatmentOptions = () => {
  const treatmentPackages = [
    {
      title: "Basic IVF",
      price: "$8,500",
      icon: "fas fa-flask",
      features: [
        "Initial consultation and fertility assessment",
        "Ovarian stimulation medications",
        "Egg retrieval procedure",
        "Embryo culture and transfer",
      ],
    },
    {
      title: "Advanced IVF",
      price: "$12,500",
      icon: "fas fa-star",
      features: [
        "All Basic IVF package features",
        "ICSI procedure if required",
        "Assisted hatching",
        "Blastocyst culture",
        "Time-lapse embryo monitoring",
      ],
      isPopular: true,
      isHighlighted: true,
    },
    {
      title: "Comprehensive",
      price: "$16,500",
      icon: "fas fa-crown",
      features: [
        "All Advanced IVF package features",
        "Genetic testing (PGT-A)",
        "Embryo freezing for 1 year",
        "Priority scheduling",
        "Dedicated fertility coordinator",
      ],
    },
  ];

  return (
    <section id="treatment_options" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Treatment Options & Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Personalized fertility treatment plans designed to meet your unique
            needs and circumstances.
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentPackages.map((packageData, index) => (
            <TreatmentCard key={index + 5} {...packageData} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            All packages include comprehensive care and support throughout your
            fertility journey. Insurance coverage may vary. Contact us for
            detailed information about coverage and financing options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#insurance_financing"
              className="text-primary-600 hover:text-primary-700 flex items-center gap-2 font-semibold"
            >
              <FaInfoCircle />
              Insurance & Financing
            </Link>
            <Link
              href="#faq"
              className="text-primary-600 hover:text-primary-700 flex items-center gap-2 font-semibold"
            >
              <FaQuestionCircle />
              Frequently Asked Questions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const TreatmentCard = ({
  title,
  price,
  features,
  isHighlighted,
  isPopular,
  icon,
}: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  icon: string;
  isHighlighted?: boolean;
}) => {
  return (
    <div
      className={`bg-white rounded-xl p-8 border 
        ${
          isHighlighted
            ? "border-2 border-primary-600 transform hover:-translate-y-1 transition-transform duration-300"
            : "border border-primary-100"
        }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          {isPopular && (
            <span className="bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
          )}
          <h3 className="text-2xl font-bold text-gray-900 mt-3">{title}</h3>
          <p className="text-primary-600 font-semibold mt-2">
            Starting from {price}
          </p>
        </div>
        <span className="text-primary-600 text-3xl">
          <i className={icon} aria-hidden="true"></i>
        </span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index + 6} className="flex items-start">
            <i
              className="fas fa-check-circle text-primary-600 mt-1 mr-3"
              aria-hidden="true"
            ></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#appointment_booking"
        className="block text-center bg-primary-600 text-white py-3 px-6 rounded-full hover:bg-primary-700 transition-colors"
        aria-label={`Book Consultation for ${title} package`}
      >
        Book Consultation
      </a>
    </div>
  );
};

export default TreatmentOptions;
