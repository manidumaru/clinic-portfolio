import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-bold no-underline transition-[transform,box-shadow,background-color,color] duration-250 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-80";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark hover:text-white hover:shadow-[0_14px_28px_-12px_rgba(41,121,132,.6)]",
  ghost: "border border-line-strong bg-white text-ink hover:bg-tint hover:text-brand-dark",
};

const sizes: Record<Size, string> = {
  sm: "h-11 px-5 text-[15px]",
  md: "h-12 px-6 text-base",
  lg: "h-[54px] px-[26px] text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = ComponentProps<"a"> & { variant?: Variant; size?: Size };

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonClasses({ variant, size, className })} {...props} />;
}
