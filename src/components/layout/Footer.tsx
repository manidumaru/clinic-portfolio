import { SocialLinks } from "@/components/ui/SocialLinks";
import { Container } from "@/components/ui/Container";
import { CLINIC } from "@/constants/clinic";
import { FOOTER } from "@/constants/footer";
import { NAV_ITEMS } from "@/constants/navigation";
import { Logo } from "./Logo";

const footLink = "text-night-muted no-underline transition-colors duration-200 hover:text-white";
const columnTitle = "mb-1 text-xs font-extrabold tracking-[0.12em] text-white uppercase";

export function Footer() {
  return (
    <footer className="bg-night pt-[clamp(56px,7vw,88px)] pb-8 text-night-text">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex max-w-[400px] flex-[1_1_320px] flex-col gap-[18px]">
            <Logo tone="dark" compact ariaLabel={`${CLINIC.name} — back to top`} />
            <p className="m-0 text-[15px] font-bold text-night-accent">{CLINIC.tagline}</p>
            <p className="m-0 text-[15px] leading-[1.65] text-night-muted">{FOOTER.blurb}</p>
            <SocialLinks tone="dark" className="mt-1 gap-2.5" />
          </div>

          <nav aria-label="Footer" className="flex flex-[0_1_180px] flex-col gap-3">
            <span className={columnTitle}>{FOOTER.exploreTitle}</span>
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={footLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-[0_1_300px] flex-col gap-3">
            <span className={columnTitle}>{FOOTER.contactTitle}</span>
            <span className="leading-normal text-night-muted">{CLINIC.location.full}</span>
            {CLINIC.phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className={footLink}>
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${CLINIC.email}`} className={`${footLink} wrap-anywhere`}>
              {CLINIC.email}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-7 text-sm text-night-faint">
          <span>{FOOTER.bottomLeft}</span>
          <span>{FOOTER.copyright}</span>
        </div>
      </Container>
    </footer>
  );
}
