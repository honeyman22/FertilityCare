import React from "react";
import {
  FaAsterisk,
  FaDna,
  FaHeart,
  FaLongArrowAltRight,
  FaMars,
  FaMicroscope,
  FaUserMd,
} from "react-icons/fa";
export default function OurExpertise() {
  const expertiseData = [
    {
      icon: <FaDna size={40} />,
      title: "IVF Treatment",
      description:
        "Advanced in-vitro fertilization techniques with high success rates and personalized protocols.",
      features: [
        "Latest IVF Technology",
        "Experienced Embryologists",
        "Customized Protocols",
      ],
    },
    {
      icon: <FaMicroscope size={40} />,
      title: "Genetic Testing",
      description:
        "Comprehensive genetic screening to ensure healthy embryo development and successful pregnancy.",
      features: ["PGT-A Testing", "Carrier Screening", "Genetic Counseling"],
    },
    {
      icon: <FaAsterisk size={40} />,
      title: "Fertility Preservation",
      description:
        "Advanced egg and embryo freezing options to preserve your fertility for the future.",
      features: ["Egg Freezing", "Embryo Banking", "Long-term Storage"],
    },
    {
      icon: <FaMars size={40} />,
      title: "Male Infertility",
      description:
        "Specialized treatments and advanced solutions for male fertility challenges.",
      features: ["Sperm Analysis", "ICSI Treatment", "Hormone Therapy"],
    },
    {
      icon: <FaUserMd size={40} />,
      title: "Reproductive Surgery",
      description:
        "Minimally invasive surgical procedures to address reproductive health issues.",
      features: ["Laparoscopy", "Hysteroscopy", "Fibroid Removal"],
    },
    {
      icon: <FaHeart size={40} />,
      title: "Donor Programs",
      description:
        "Comprehensive donor egg, sperm, and embryo programs with thorough screening processes.",
      features: ["Egg Donation", "Sperm Donation", "Embryo Donation"],
    },
  ];

  return (
    <section id="our_expertise" className="py-24 mt-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Our Areas of Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive fertility treatments with state-of-the-art
            technology and personalized care to help you achieve your dream of
            parenthood.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={index + 3}
              icon={item.icon}
              title={item.title}
              description={item.description}
              features={item.features}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="#appointment_booking"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Schedule a Consultation
            <FaLongArrowAltRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({
  icon,
  title,
  description,
  features,
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}>) {
  return (
    <div className="bg-primary-50 rounded-xl p-8 border border-primary-100 hover:border-primary-300 transition-colors">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600">
        {features.map((feature, index) => (
          <li key={index + 4} className="flex items-center">
            <i className="fas fa-check text-primary-600 mr-2"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
