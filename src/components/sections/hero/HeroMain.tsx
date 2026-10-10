import { HERO } from "@/constants/hero";
import { HeroIntro } from "./HeroIntro";
import { HeroMedia } from "./HeroMedia";

export function HeroMain() {
  const { title } = HERO.main;

  return (
    <>
      <HeroIntro
        headline={
          <h1
            id="hero-title"
            className="m-0 animate-rise text-[clamp(52px,7.4vw,104px)] leading-[0.95] font-extrabold tracking-[-0.045em] [animation-delay:.1s] static:animate-none"
          >
            {title.line1}
            <br />
            <span className="text-brand">{title.line2}</span>
          </h1>
        }
      />
      <HeroMedia heightClass="h-[clamp(420px,46vw,600px)]" />
    </>
  );
}
