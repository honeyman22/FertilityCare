export default function FloatingStats() {  const stats = [
    { value: "95%", label: "Success Rate" },
    { value: "15+", label: "Years Experience" },
    { value: "10k+", label: "Happy Families" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative -bottom-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index + 4} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ value, label }: Readonly<{ value: string; label: string }>) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
      <p className="text-4xl font-extrabold text-primary-600 mb-2">{value}</p>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}
