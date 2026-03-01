import Hero from "@/components/Hero";
import StrategicFocusAreas from "@/components/StrategicFocusAreas";
import SdgGrid from "@/components/SdgGrid";
import ImpactDashboard from "@/components/ImpactDashboard";
import BentoActivities from "@/components/BentoActivities";
import CarbonCalculator from "@/components/CarbonCalculator";
import EventsCalendar from "@/components/EventsCalendar";
import PhotoGallery from "@/components/PhotoGallery";
import FAQ from "@/components/FAQ";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{overflowX: "hidden"}} className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <StrategicFocusAreas />
      <SdgGrid />
      <ImpactDashboard />
      <BentoActivities />
      <CarbonCalculator />
      <EventsCalendar />
      <PhotoGallery />
      <FAQ />
      <ContactLocation />
      <Footer />
    </main>
  );
}
