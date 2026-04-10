import Hero from "../components/Hero";
import GlobalNetworkSection from "../components/GlobalNetworkSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ProductSection from "../components/ProductSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalNetworkSection />
      <ProductSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />

    </>
  );
}
