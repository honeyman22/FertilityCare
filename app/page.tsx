import AppointmentBooking from "./components/AppointmentBooking";
import ContactLocations from "./components/ContactSection";
import DoctorProfiles from "./components/DoctorProfiles";
import FAQSection from "./components/FaqSection";
import FloatingStats from "./components/FloatingStats";
import HeroSection from "./components/HeoSection";
import InsuranceFinancing from "./components/InsuranceFinancing";
import OurExpertise from "./components/OurExpertise";
import PatientResources from "./components/PatientResources";
import SuccessStories from "./components/SucessStories";
import TreatmentOptions from "./components/TreatmentSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="py-20">
        <FloatingStats />
      </div>
      <OurExpertise />
      <TreatmentOptions />
      <DoctorProfiles />
      <SuccessStories />
      <AppointmentBooking />
      <PatientResources />
      <InsuranceFinancing />
      <FAQSection />
      <ContactLocations />
    </div>
  );
}
