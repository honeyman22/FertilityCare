import Image from "next/image";import React from "react";
const DoctorCard = ({
  name,
  title,
  imgSrc,
  qualifications,
  //   experience,
  highlights,
}: {
  name: string;
  title: string;
  imgSrc: string;
  qualifications: string[];
  //   experience: string;
  highlights: string[];
}) => {
  return (
    <div className="bg-primary-50 rounded-xl p-8 border border-primary-100 hover:border-primary-300 transition-colors">
      <div className="text-center mb-6">
        <Image
          src={imgSrc}
          alt={`Photo of ${name}`}
          className="w-40 h-40 rounded-full object-cover object-top mx-auto mb-4 border-4 border-white"
          width={160}
          height={160}
        />
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-primary-600 font-medium">{title}</p>
      </div>

      <ul className="space-y-2 text-gray-600 mb-6">
        {qualifications.map((qualification, index) => (
          <li key={index + 2} className="flex items-center">
            <i className="fas fa-graduation-cap text-primary-600 mr-2"></i>
            <span>{qualification}</span>
          </li>
        ))}
        {highlights.map((highlight, index) => (
          <li key={index + 2} className="flex items-center">
            <i className="fas fa-star text-primary-600 mr-2"></i>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <a
        href="#appointment_booking"
        className="block text-center text-primary-600 hover:text-primary-700 font-semibold"
      >
        Book Appointment
      </a>
    </div>
  );
};

export default DoctorCard;
