import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/constants/contact";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { MapCard } from "./MapCard";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-surface py-[clamp(72px,9vw,128px)]">
      <Container className="flex flex-col gap-12">
        <SectionHeading intro={CONTACT.intro} titleId="contact-title" />
        <div className="flex flex-wrap items-stretch gap-8">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
            <ContactInfo />
            <MapCard />
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
