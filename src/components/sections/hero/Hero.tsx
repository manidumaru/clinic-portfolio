import { Blob } from "@/components/ui/Blob";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";
import { HeroMain } from "./HeroMain";
import { HeroThirtyTwo } from "./HeroThirtyTwo";

const variants = { main: HeroMain, thirtyTwo: HeroThirtyTwo };

export function Hero() {
  const Variant = variants[siteConfig.heroVariant];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-[clamp(48px,7vw,96px)] pb-[clamp(64px,8vw,120px)]"
    >
      <Blob className="-top-[200px] -right-[120px] size-[560px] animate-drift bg-[#CFE6E8] opacity-75 blur-[80px]" />
      <Blob className="-bottom-[180px] -left-[140px] size-[420px] animate-drift-slow bg-[#E3F0EF] opacity-90 blur-[70px]" />
      <Container className="relative flex flex-wrap items-center gap-[clamp(40px,6vw,80px)]">
        <Variant />
      </Container>
    </section>
  );
}
