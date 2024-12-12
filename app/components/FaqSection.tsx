"use client";import { useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaHeadset,
} from "react-icons/fa";

const FAQSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selected, setSelected] = useState<any>(null);

  const toggleAccordion = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about fertility treatments and our
            services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index + 4} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full p-6 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <p className="text-lg font-semibold text-gray-900">
                  {item.question}
                </p>
                {selected === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div
                className={`p-6 bg-white border border-primary-100 rounded-lg mt-2 transition-all duration-200 ${
                  selected === index ? "opacity-100 max-h-96" : "hidden"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#appointment_booking">
              <p className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors">
                Schedule a Consultation
                <FaArrowRight className="ml-2" />
              </p>
            </Link>
            <Link href="#">
              <p className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-50 transition-colors">
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

const faqData = [
  {
    question: "What is IVF and how does it work?",
    answer:
      "IVF (In Vitro Fertilization) is a fertility treatment where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The resulting embryos are then transferred to the uterus. The process typically takes 2-3 weeks per cycle.",
  },
  {
    question: "What are the success rates for IVF treatment?",
    answer:
      "Success rates vary depending on various factors including age, fertility diagnosis, and lifestyle factors. Our clinic maintains a success rate of over 60% for women under 35, which is above the national average.",
  },
  {
    question: "How long does the IVF process take?",
    answer:
      "A typical IVF cycle takes about 2-3 weeks from the start of medication to the embryo transfer. However, the complete process, including initial consultation and testing, may take 6-8 weeks.",
  },
  {
    question: "What is the cost of fertility treatment?",
    answer:
      "Treatment costs vary based on the specific procedures needed. We offer transparent pricing and various financing options. Many insurance plans provide coverage for fertility treatments. Contact our financial counselors for detailed information.",
  },
  {
    question: "What support services do you offer?",
    answer:
      "We provide comprehensive support including counseling services, support groups, nutritional guidance, and stress management programs. Our team is dedicated to supporting you throughout your fertility journey.",
  },
];

export default FAQSection;
