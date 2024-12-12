import React from "react";import WhyChooseUs from "../components/WhyChooseUs";
import DoctorCard from "./cards/DoctorCard";

const DoctorProfiles = () => {
  const doctorData = [
    {
      name: "Dr. Sarah Johnson",
      title: "Medical Director, Reproductive Endocrinologist",
      imgSrc: "/doctor/doctorwomen.jpg",
      qualifications: [
        "MD from Harvard Medical School",
        "Board Certified in Reproductive Endocrinology",
      ],
      highlights: ["15+ Years Experience"],
    },
    {
      name: "Dr. Michael Chen",
      title: "Senior Fertility Specialist",
      imgSrc: "/doctor/doctorman.jpg",
      qualifications: [
        "MD from Stanford University",
        "Fellowship in Reproductive Medicine",
      ],
      highlights: ["12+ Years Experience"],
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Reproductive Surgeon",
      imgSrc: "/doctor/doctorgirl.jpg",
      qualifications: [
        "MD from Johns Hopkins University",
        "Specialized in Minimally Invasive Surgery",
      ],
      highlights: ["10+ Years Experience"],
    },
  ];

  return (
    <section id="doctor_profiles" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of highly qualified fertility specialists is dedicated to
            helping you achieve your dream of parenthood.
          </p>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorData.map((doctor, index) => (
            <DoctorCard key={index + 5} {...doctor} />
          ))}
        </div>

        {/* Why Choose Our Team Section */}
        <div className="mt-16 text-center">
          <WhyChooseUs />
        </div>
      </div>
    </section>
  );
};

export default DoctorProfiles;
