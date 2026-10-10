import type { ReactNode } from "react";
import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { arrowNudge } from "@/components/ui/styles";
import { IconBadge } from "@/components/ui/IconBadge";
import { CLINIC, PRIMARY_PHONE } from "@/constants/clinic";
import { HERO } from "@/constants/hero";

const rise = "animate-rise static:animate-none";

/** Text column shared by both hero variants; only the headline differs. */
export function HeroIntro({ headline, gap = "gap-[26px]" }: { headline: ReactNode; gap?: string }) {
  const hero = HERO.main;

  return (
    <div className={`flex min-w-0 flex-[1_1_480px] flex-col items-start ${gap}`}>
      <span
        className={`${rise} inline-flex items-center gap-2.5 rounded-full border border-[#DCE9EA] bg-white py-2 pr-3.5 pl-2.5 text-[13px] font-bold text-brand-dark shadow-[0_6px_18px_-12px_rgba(22,40,43,.25)]`}
      >
        <span className="size-2 rounded-full bg-brand shadow-[0_0_0_4px_rgba(41,121,132,.15)]" />
        {hero.badge}
      </span>

      {headline}

      <p
        className={`${rise} m-0 text-[clamp(20px,2vw,26px)] font-semibold tracking-[-0.01em] text-ink-soft [animation-delay:.2s]`}
      >
        {hero.subtitle}
      </p>
      <p className={`${rise} m-0 max-w-[460px] text-lg leading-[1.65] text-muted [animation-delay:.2s]`}>{hero.body}</p>

      <div className={`${rise} mt-1.5 flex flex-wrap gap-3 [animation-delay:.3s]`}>
        <ButtonLink href={hero.primaryCta.href} size="lg">
          {hero.primaryCta.label}
          <Icon name="arrowRight" size={18} strokeWidth={2} className={arrowNudge} />
        </ButtonLink>
        <ButtonLink href={hero.secondaryCta.href} variant="ghost" size="lg" className="px-6">
          {hero.secondaryCta.label}
        </ButtonLink>
      </div>

      <div
        className={`${rise} mt-[18px] flex w-full max-w-[520px] flex-wrap items-center gap-x-7 gap-y-3.5 border-t border-[#E4ECEC] pt-[26px] [animation-delay:.42s]`}
      >
        <a
          href={`tel:${PRIMARY_PHONE.tel}`}
          className="inline-flex items-center gap-3 text-ink no-underline hover:text-ink"
        >
          <IconBadge icon="phone" variant="round" size={44} iconSize={20} />
          <ContactLine label={hero.callLabel} value={PRIMARY_PHONE.display} />
        </a>
        <span className="inline-flex items-center gap-3">
          <IconBadge icon="pin" variant="round" size={44} iconSize={20} />
          <ContactLine label={hero.visitLabel} value={CLINIC.location.short} />
        </span>
      </div>
    </div>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <span className="flex flex-col leading-[1.3]">
      <span className="text-xs font-semibold tracking-[0.06em] text-muted uppercase">{label}</span>
      <span className="text-base font-bold">{value}</span>
    </span>
  );
}
