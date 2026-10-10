import { Icon } from "@/components/icons/Icon";
import { AssetImage } from "@/components/ui/AssetImage";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { HERO } from "@/constants/hero";
import { cn } from "@/lib/cn";

const avatarColors = ["bg-brand", "bg-brand-soft", "bg-brand-dark"];
const floatCard =
  "absolute flex items-center gap-3 rounded-[20px] border border-[#E6EEEF] shadow-[0_24px_48px_-24px_rgba(22,40,43,.35)] static:animate-none";

/** Photo column shared by both hero variants: photo, backing shape and the two floating cards. */
export function HeroMedia({ heightClass }: { heightClass: string }) {
  const { photo, photoPlaceholder, trustCard, teamCard } = HERO.main;

  return (
    <div className="relative min-w-0 flex-[1_1_440px] pb-6 pl-6">
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-[70%] w-[62%] rounded-[36px] bg-tint" />

      <div
        className={cn(
          "relative animate-reveal overflow-hidden rounded-[32px] border border-[#C7DFE1] bg-[#D6E8E9] static:animate-none",
          heightClass,
        )}
      >
        {photo ? (
          <AssetImage asset={photo} sizes="(max-width: 980px) 100vw, 560px" preload />
        ) : (
          <ImagePlaceholder {...photoPlaceholder} />
        )}
      </div>

      <div className={cn(floatCard, "top-[14%] -left-2 animate-float bg-white py-3.5 pr-[18px] pl-3.5")}>
        <span className="inline-flex size-[42px] items-center justify-center rounded-[14px] bg-brand text-white">
          <Icon name="shieldCheck" strokeWidth={1.9} />
        </span>
        <span className="flex flex-col leading-[1.3]">
          <span className="text-[15px] font-extrabold">{trustCard.title}</span>
          <span className="text-[13px] text-muted">{trustCard.text}</span>
        </span>
      </div>

      <div
        className={cn(floatCard, "right-[18px] bottom-[52px] animate-float-slow rounded-[18px] bg-white/94 px-4 py-3")}
      >
        <span className="flex">
          {teamCard.initials.map((initials, i) => (
            <span
              key={initials}
              className={cn(
                "inline-flex size-[34px] items-center justify-center rounded-full border-2 border-white text-xs font-extrabold text-white",
                avatarColors[i % avatarColors.length],
                i > 0 && "-ml-2.5",
              )}
            >
              {initials}
            </span>
          ))}
        </span>
        <span className="text-sm leading-[1.3] font-bold">
          {teamCard.title}
          <br />
          <span className="font-medium text-muted">{teamCard.text}</span>
        </span>
      </div>
    </div>
  );
}
