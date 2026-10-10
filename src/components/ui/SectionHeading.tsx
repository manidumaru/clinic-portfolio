import type { ReactNode } from "react";
import type { SectionIntro } from "@/types/content";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  intro: SectionIntro;
  titleId: string;
  align?: "start" | "center";
  className?: string;
  titleClassName?: string;
  /** Render the lead outside, e.g. in a split header. */
  hideLead?: boolean;
};

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("text-[13px] font-extrabold tracking-[0.14em] text-brand uppercase", className)}>
      {children}
    </span>
  );
}

export function SectionTitle({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <h2
      id={id}
      className={cn("m-0 text-[clamp(36px,4.2vw,54px)] leading-[1.05] font-extrabold tracking-[-0.035em]", className)}
    >
      {children}
    </h2>
  );
}

export function SectionLead({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("m-0 text-[17px] leading-[1.65] text-muted", className)}>{children}</p>;
}

export function SectionHeading({
  intro,
  titleId,
  align = "start",
  className,
  titleClassName,
  hideLead,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "max-w-[640px]",
        className,
      )}
    >
      <Eyebrow>{intro.eyebrow}</Eyebrow>
      <SectionTitle id={titleId} className={titleClassName}>
        {intro.title}
      </SectionTitle>
      {intro.lead && !hideLead && (
        <SectionLead className={align === "center" ? "max-w-[560px]" : undefined}>{intro.lead}</SectionLead>
      )}
    </div>
  );
}
