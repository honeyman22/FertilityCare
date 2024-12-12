import React from "react";
import { FaChartLine, FaHeart } from "react-icons/fa";
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaHeart size={24} />,
      title: "Compassionate Care",
      description:
        "We understand your journey and provide supportive, personalized care every step of the way.",
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Proven Success",
      description:
        "Our team's expertise and advanced techniques result in consistently high success rates.",
    },
  ];

  return (
    <div className="bg-primary-100 rounded-xl p-8 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Why Choose Our Team?
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <div key={index + 4} className="flex flex-col gap-3  items-center">
            {reason.icon}
            <h4 className="font-bold text-gray-900 ">{reason.title}</h4>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
