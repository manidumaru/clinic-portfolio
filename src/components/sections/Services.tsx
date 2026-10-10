import { Icon } from "@/components/icons/Icon";
import { Blob } from "@/components/ui/Blob";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading, SectionLead } from "@/components/ui/SectionHeading";
import { arrowNudge, cardHover } from "@/components/ui/styles";
import { SERVICES } from "@/constants/services";
import { cn } from "@/lib/cn";

const iconTilt =
  "transition-transform duration-350 ease-[cubic-bezier(.2,.7,.2,1)] group-hover/card:-translate-y-0.5 group-hover/card:-rotate-6";

export function Services() {
  const { intro, featured, items, cta, disclaimer } = SERVICES;

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

        <div className="grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
          <article
            className={cn(
              cardHover,
              "relative col-span-2 flex min-h-[260px] flex-col justify-between gap-7 overflow-hidden rounded-[28px] border border-brand bg-brand p-8 text-white max-[640px]:col-span-1",
            )}
          >
            <div
              aria-hidden="true"
              className="absolute -top-[90px] -right-[70px] size-[260px] rounded-full border border-white/18"
            />
            <div
              aria-hidden="true"
              className="absolute -top-[50px] -right-[30px] size-[180px] rounded-full border border-white/14"
            />
            <span
              className={cn(iconTilt, "inline-flex size-[52px] items-center justify-center rounded-2xl bg-white/14")}
            >
              <Icon name={featured.icon} size={26} strokeWidth={1.7} />
            </span>
            <div className="relative flex flex-col gap-2.5">
              <span className="text-xs font-extrabold tracking-[0.12em] text-[#CDE7E9] uppercase">
                {featured.kicker}
              </span>
              <h3 className="m-0 text-[30px] font-extrabold tracking-[-0.02em]">{featured.title}</h3>
              <p className="m-0 max-w-[420px] text-base leading-[1.6] text-[#E4F1F2]">{featured.text}</p>
            </div>
          </article>

          {items.map((service) => {
            const tinted = "tone" in service && service.tone === "tinted";
            return (
              <article
                key={service.title}
                className={cn(
                  cardHover,
                  "flex flex-col gap-4 rounded-3xl border border-line p-7",
                  tinted ? "bg-surface" : "bg-white",
                )}
              >
                <IconBadge
                  icon={service.icon}
                  variant={tinted ? "outline" : "tint"}
                  className={cn(iconTilt, tinted && "border-0")}
                />
                <h3 className="m-0 text-[19px] font-extrabold">{service.title}</h3>
                <p className="m-0 text-[15px] leading-[1.6] text-muted">{service.text}</p>
              </article>
            );
          })}

          <a
            href={cta.href}
            className={cn(
              cardHover,
              "flex flex-col justify-between gap-4 rounded-3xl border border-dashed border-[#A9CDD1] bg-tint p-7 text-ink no-underline hover:text-ink max-[1100px]:col-span-2 max-[640px]:col-span-1",
            )}
          >
            <span className="text-[19px] leading-[1.3] font-extrabold">{cta.title}</span>
            <span className="inline-flex items-center gap-2 text-[15px] font-bold text-brand-dark">
              {cta.label}
              <Icon name="arrowRight" size={18} strokeWidth={2} className={arrowNudge} />
            </span>
          </a>
        </div>

        <p className="m-0 text-[13px] text-subtle">{disclaimer}</p>
      </Container>
    </section>
  );
}
