import { About } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { Hero } from "@/components/sections/hero/Hero";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <ContactSection />
    </>
  );
}
