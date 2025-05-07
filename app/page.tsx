import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div className="bg-gray-100">
      <Hero />
      <Services/>
      <AboutUs/>
      <ContactUs/>
    </div>
  );
}
