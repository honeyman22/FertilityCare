import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export const OptionCard = ({
  icon,
  title,
  description,
  items,
  linkText,
  linkHref,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  linkText: string;
  linkHref: string;
}) => (
  <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
    <div className="text-primary-600 mb-6">
      <i className={`${icon} text-4xl`} aria-hidden="true"></i>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>

    <h4 className="font-bold text-gray-900 mb-3">Available Options:</h4>
    <ul className="space-y-3 mb-6">
      {items.map((item, index) => (
        <li key={index + 4} className="flex items-center text-gray-600">
          <i
            className="fas fa-check text-primary-600 mr-3"
            aria-hidden="true"
          ></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <Link href={linkHref}>
      <p className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
        {linkText}
        <FaArrowRight className="ml-2" />
      </p>
    </Link>
  </div>
);
