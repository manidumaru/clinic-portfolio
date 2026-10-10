import { HERO } from "@/constants/hero";
import { HeroIntro } from "./HeroIntro";
import { HeroMedia } from "./HeroMedia";

export function HeroThirtyTwo() {
  const { title } = HERO.thirtyTwo;

  return (
    <>
      <HeroIntro
        gap="gap-6"
        headline={
          <h1
            id="hero-title"
            className="m-0 flex animate-rise flex-col text-[clamp(44px,6.2vw,88px)] leading-[0.98] font-extrabold tracking-[-0.045em] [animation-delay:.1s] static:animate-none"
          >
            <span>{title.line1}</span>
            <span className="whitespace-nowrap text-brand">{title.line2}</span>
            <span className="flex items-center gap-[0.28em]">
              {title.line3}
              <span
                aria-hidden="true"
                className="inline-flex h-[0.62em] flex-none items-center justify-center rounded-full border-2 border-[#BFDCDE] px-[0.26em] text-[0.32em] font-extrabold tracking-[0.02em] text-brand"
              >
                {title.pill}
              </span>
            </span>
          </h1>
        }
      />
      <HeroMedia heightClass="h-[clamp(440px,46vw,620px)]" />
    </>
  );
}
