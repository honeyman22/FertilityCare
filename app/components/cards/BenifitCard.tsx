export const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div
    className="bg-white p-6 rounded-xl border gap-3
   flex flex-col items-center border-primary-100 text-center"
  >
    {icon}
    <h4 className="font-bold text-gray-900 ">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);
