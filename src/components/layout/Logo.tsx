import { Icon } from "@/components/icons/Icon";
import { siteConfig } from "@/config/site.config";
import { CLINIC } from "@/constants/clinic";
import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "light" | "dark";
  /** Footer shows the wordmark title only. */
  compact?: boolean;
  ariaLabel?: string;
};

export function Logo({ tone = "light", compact = false, ariaLabel }: LogoProps) {
  const { title, subtitle } = CLINIC.wordmark[siteConfig.heroVariant];

  return (
    <a
      href="#home"
      aria-label={ariaLabel ?? `${title} — home`}
      className={cn(
        "flex flex-none items-center gap-2.5 no-underline",
        tone === "light" ? "text-ink hover:text-ink" : "text-white hover:text-white",
      )}
    >
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-xl bg-brand text-white",
          compact ? "size-10" : "size-[38px]",
        )}
      >
        <Icon name="tooth" size={22} />
      </span>
      {compact ? (
        <span className="text-xl font-extrabold tracking-[-0.02em]">{title}</span>
      ) : (
        <span className="flex flex-col leading-[1.05]">
          <span className="text-[17px] font-extrabold tracking-[-0.02em] whitespace-nowrap">{title}</span>
          <span className="mt-1 text-[11px] font-bold tracking-[0.08em] text-muted uppercase">{subtitle}</span>
        </span>
      )}
    </a>
  );
}
