import { FaClock } from "react-icons/fa";import { FaPhone } from "react-icons/fa6";

export const LocationCard = ({
  Icon,
  title,
  address,
  phone,
  hours,
}: {
  Icon: React.ElementType;
  title: string;
  address: string;
  phone: string;
  hours: string;
}) => (
  <div className="bg-white rounded-xl p-8 border border-primary-100">
    <div className="text-primary-600 mb-6">
      <Icon className="text-4xl" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <div className="space-y-4 text-gray-600">
      <p>{address}</p>
      <div className="flex items-center">
        <FaPhone className="text-primary-600 mr-3" />
        <a
          href={`tel:${phone}`}
          className="hover:text-primary-600 transition-colors"
        >
          {phone}
        </a>
      </div>
      <div className="flex items-center">
        <FaClock className="text-primary-600 mr-3" />
        <span>{hours}</span>
      </div>
    </div>
  </div>
);
