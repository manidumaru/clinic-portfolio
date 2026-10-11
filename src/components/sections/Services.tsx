import { ServiceGrid } from "@/components/sections/services/ServiceGrid";
import { Blob } from "@/components/ui/Blob";
import { Container } from "@/components/ui/Container";
import { SectionHeading, SectionLead } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/constants/services";

export function Services() {
  const { intro, items, cta, disclaimer } = SERVICES;

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden py-[clamp(72px,9vw,128px)]"
    >
      <Blob className="top-[120px] -right-60 size-[480px] animate-drift-slower bg-[#E1EFEF] blur-[80px]" />
      <Container className="relative flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading intro={intro} titleId="services-title" hideLead />
          <SectionLead className="max-w-[400px]">{intro.lead}</SectionLead>
        </div>

        <ServiceGrid items={items} cta={cta} />

        <p className="m-0 text-[13px] text-subtle">{disclaimer}</p>
      </Container>
    </section>
  );
}
