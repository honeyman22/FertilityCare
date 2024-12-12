import Link from "next/link";
import {
  FaArrowRight,
  FaCalculator,
  FaCommentDollar,
  FaFileContract,
} from "react-icons/fa";
import { BenefitCard } from "./cards/BenifitCard";
import { FaHandHoldingDollar, FaPhone, FaShieldHeart } from "react-icons/fa6";
import { OptionCard } from "./cards/OptionCard";
const InsuranceFinancing = () => {
  return (
    <section id="insurance_financing" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Insurance & Financing Options
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with most major insurance providers and offer flexible
            financing options to make your fertility journey more accessible.
          </p>
        </div>

        {/* Insurance and Financing Options */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <OptionCard
            icon={<FaShieldHeart size={40} />}
            title="Insurance Coverage"
            description="We accept most major insurance plans and will work with your provider to maximize your benefits."
            items={[
              "Blue Cross Blue Shield",
              "Aetna",
              "UnitedHealthcare",
              "Cigna",
              "Humana",
            ]}
            linkText="Verify Your Coverage"
            linkHref="#appointment_booking"
          />

          <OptionCard
            icon={<FaHandHoldingDollar size={40} />}
            title="Financing Options"
            description="We offer various financing solutions to help make your treatment more affordable."
            items={[
              "0% Interest Payment Plans",
              "Flexible Monthly Installments",
              "Medical Credit Cards",
              "Income-Based Programs",
              "Fertility Grants",
            ]}
            linkText="Explore Financing Options"
            linkHref="#appointment_booking"
          />
        </div>

        {/* Financial Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <BenefitCard
            icon={<FaCalculator size={40} />}
            title="Cost Calculator"
            description="Estimate your treatment costs and explore payment options"
          />
          <BenefitCard
            icon={<FaFileContract size={40} />}
            title="Insurance Verification"
            description="Quick verification of your insurance coverage"
          />
          <BenefitCard
            icon={<FaCommentDollar size={40} />}
            title="Financial Counseling"
            description="Free consultation with our financial advisors"
          />
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-primary-50 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Understanding Your Options?
          </h3>
          <p className="text-gray-600 mb-8">
            Our financial counselors are here to help you navigate insurance
            coverage and financing options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#appointment_booking">
              <p className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors">
                Schedule a Financial Consultation
                <FaArrowRight className="ml-2" />
              </p>
            </Link>
            <Link
              href="tel:+1-555-123-4567"
              className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-50 transition-colors"
              aria-label="Call Us Now"
            >
              <FaPhone className="mr-2" />
              Call Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceFinancing;
