import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";

const SuccessStories = () => {
  return (
    <section id="success_stories" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read inspiring stories from families who achieved their dreams with
            our help.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index + 6}
              className="bg-white rounded-xl p-8 border border-primary-100"
            >
              <div className="text-center mb-6">
                <Image
                  src={story.image}
                  alt={story.alt}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-4 border-4 border-primary-100"
                />
                <div className="flex justify-center items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i + 4} className="text-primary-600" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {story.title}
                </h3>
                <p className="text-primary-600 font-medium">{story.subTitle}</p>
              </div>
              <p className="text-gray-600 text-center mb-6">
                &quot;{story.testimonial}&quot;
              </p>
              <div className="flex justify-center gap-4">
                <span className="text-sm text-gray-500">
                  Treatment: {story.treatment}
                </span>
                <span className="text-sm text-gray-500">
                  Duration: {story.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index + 5}
              className="bg-white p-6 rounded-xl border border-primary-100 text-center"
            >
              <h4 className="text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16  text-center w-full flex items-center justify-center">
          <Link
            href="#appointment_booking "
            className="flex gap-4 items-center"
          >
            <p className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors">
              Start Your Success Story
              <FaArrowRight />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

const successStories = [
  {
    image: "/couple/one.jpg",
    alt: "Sarah and John",
    title: "Sarah & John's Journey",
    subTitle: "IVF Success",
    testimonial:
      "After 3 years of trying, we finally welcomed our twin girls. The team's support and expertise made all the difference in our journey.",
    treatment: "IVF",
    duration: "8 months",
  },
  {
    image: "/couple/two.jpg",
    alt: "Maria and David",
    title: "Maria & David's Story",
    subTitle: "Genetic Screening Success",
    testimonial:
      "The genetic screening program helped us overcome our previous challenges. We're now blessed with a healthy baby boy.",
    treatment: "PGT-A",
    duration: "6 months",
  },
  {
    image: "/couple/three.jpg",
    alt: "Emily and Michael",
    title: "Emily & Michael's Journey",
    subTitle: "Egg Freezing Success",
    testimonial:
      "Freezing my eggs gave me peace of mind to focus on my career. Years later, we now have our beautiful daughter.",
    treatment: "Egg Freezing",
    duration: "12 months",
  },
];

const stats = [
  { value: "92%", label: "IVF Success Rate" },
  { value: "1000+", label: "Babies Born" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "15+", label: "Years Experience" },
];

export default SuccessStories;
