import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Your Journey to Parenthood Begins Here
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Expert fertility care with personalized treatment plans and
              compassionate support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#appointment_booking"
                className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="#our_expertise"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/herosection.jpg"
              alt="Happy family"
              height={800}
              width={1920}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
