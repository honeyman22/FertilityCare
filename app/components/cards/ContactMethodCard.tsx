import Link from "next/link";
export const ContactMethodCard = ({
  Icon,
  title,
  contactInfo,
  href,
}: {
  Icon: React.ElementType;
  title: string;
  contactInfo: string;
  href?: string;
}) => (
  <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-primary-100">
    <Icon className="text-3xl text-primary-600 mb-4" />
    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
    {href ? (
      <Link
        href={href}
        className="text-gray-600 hover:text-primary-600 transition-colors"
      >
        {contactInfo}
      </Link>
    ) : (
      <p className="text-gray-600">{contactInfo}</p>
    )}
  </div>
);
