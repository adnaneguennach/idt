import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import SplitFeature from "@/components/SplitFeature";
import OurCompany from "@/components/OurCompany";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main>
        <Hero />
        <Process />
        <SplitFeature />
        <OurCompany />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
