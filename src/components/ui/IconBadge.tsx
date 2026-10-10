import { Icon, type IconName } from "@/components/icons/Icon";
import { cn } from "@/lib/cn";

type IconBadgeProps = {
  icon: IconName;
  /** "tint": teal-tinted square; "outline": white square with border; "solid": brand fill; "round": tinted circle. */
  variant?: "tint" | "outline" | "solid" | "round";
  size?: number;
  iconSize?: number;
  className?: string;
};

const variants = {
  tint: "rounded-[14px] bg-tint text-brand",
  outline: "rounded-[14px] border border-[#DCE9EA] bg-white text-brand",
  solid: "rounded-[14px] bg-brand text-white",
  round: "rounded-full bg-tint text-brand",
};

export function IconBadge({ icon, variant = "tint", size = 48, iconSize = 22, className }: IconBadgeProps) {
  return (
    <span
      className={cn("inline-flex flex-none items-center justify-center", variants[variant], className)}
      style={{ width: size, height: size }}
    >
      <Icon name={icon} size={iconSize} />
    </span>
  );
}
