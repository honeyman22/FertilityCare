import Link from "next/link";import { ReactNode } from "react";
import { FaFilePdf } from "react-icons/fa";
export const ResourceCard = ({
  icon,
  title,
  links,
}: {
  icon: ReactNode;
  title: string;
  links: { href: string; label: string }[];
}) => {
  return (
    <div className="bg-white rounded-xl p-8 border border-primary-100">
      <div className="text-primary-600 mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index + 6}>
            <Link href={link.href}>
              <p className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                <FaFilePdf className="mr-3 text-primary-600" />
                <span>{link.label}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
