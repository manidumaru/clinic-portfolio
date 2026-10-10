import { Icon } from "@/components/icons/Icon";
import { Blob } from "@/components/ui/Blob";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { cardHover } from "@/components/ui/styles";
import { TESTIMONIALS } from "@/constants/testimonials";
import type { Testimonial } from "@/types/content";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const { intro, items, isSample, sampleNotice } = TESTIMONIALS;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-[clamp(72px,9vw,128px)]">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] bg-tint-2 px-[clamp(20px,5vw,64px)] py-[clamp(40px,6vw,80px)]">
          <Blob className="-top-[120px] -left-[120px] size-[380px] animate-drift bg-[#D3E7E8] blur-[70px]" />
          <div className="relative flex flex-col gap-14">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading intro={intro} titleId="testimonials-title" className="max-w-[620px]" />
              {isSample && (
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-[#A9CDD1] bg-white px-3.5 py-2 text-[13px] font-bold text-brand-dark">
                  {sampleNotice}
                </span>
              )}
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-6 pt-6">
              {items.map((item) => (
                <TestimonialCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const highlight = item.highlight ?? false;

  return (
    <figure
      className={cn(
        cardHover,
        "m-0 flex flex-col gap-5 rounded-[26px] border",
        highlight
          ? "relative -translate-y-6 border-brand bg-brand px-8 py-9 text-white shadow-[0_30px_60px_-32px_rgba(31,95,104,.7)] hover:-translate-y-7 max-[980px]:translate-y-0 max-[980px]:hover:-translate-y-1"
          : "border-[#E1ECEC] bg-white p-8",
      )}
    >
      {highlight && <Icon name="quote" size={40} className="opacity-35" />}
      <StarRating rating={item.rating} className={highlight ? "text-star-light" : "text-star"} />
      <blockquote
        className={cn(
          "m-0",
          highlight ? "text-xl leading-[1.55] font-semibold" : "text-[17px] leading-[1.65] text-ink-soft",
        )}
      >
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <span
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full text-[15px] font-extrabold",
            highlight ? "bg-white/16 text-white" : "bg-tint text-brand-dark",
          )}
        >
          {item.initials}
        </span>
        <span className="flex flex-col leading-[1.35]">
          <span className="text-[15px] font-extrabold">{item.name}</span>
          <span className={cn("text-[13px]", highlight ? "text-[#CDE7E9]" : "text-subtle")}>{item.caption}</span>
        </span>
      </figcaption>
    </figure>
  );
}
