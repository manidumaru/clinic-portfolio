import { Icon } from "@/components/icons/Icon";
import { AssetImage } from "@/components/ui/AssetImage";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import { ABOUT } from "@/constants/about";

export function About() {
  const { intro, photo, photoPlaceholder, quote, pillars } = ABOUT;

  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface py-[clamp(72px,9vw,128px)]">
      <Container className="flex flex-wrap items-center gap-[clamp(40px,7vw,96px)]">
        <div className="relative min-w-0 flex-[1_1_460px]">
          <div className="relative h-[clamp(380px,40vw,540px)] overflow-hidden rounded-[32px] border border-[#CDE0E1] bg-[#DCEAEA]">
            {photo ? (
              <AssetImage asset={photo} sizes="(max-width: 980px) 100vw, 560px" />
            ) : (
              <ImagePlaceholder {...photoPlaceholder} pattern="lines" />
            )}
          </div>
          <div className="absolute right-[clamp(-24px,-2vw,-8px)] -bottom-7 w-60 rounded-3xl bg-brand p-[22px] text-white shadow-[0_30px_60px_-30px_rgba(31,95,104,.7)]">
            <Icon name="tooth" size={28} strokeWidth={1.7} />
            <p className="mt-3.5 mb-0 text-[17px] leading-[1.4] font-bold">{quote}</p>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-[22px]">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <SectionTitle id="about-title">{intro.title}</SectionTitle>
          <p className="m-0 max-w-[540px] text-lg leading-[1.7] text-muted">{intro.lead}</p>

          <ul className="m-0 mt-2.5 flex list-none flex-col gap-1 p-0">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="flex items-start gap-[18px] border-t border-[#E1EAEA] py-[18px] last:border-b"
              >
                <IconBadge icon={pillar.icon} variant="outline" />
                <div>
                  <h3 className="m-0 text-lg font-extrabold">{pillar.title}</h3>
                  <p className="mt-1.5 mb-0 text-[15px] leading-[1.6] text-muted">{pillar.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
