import type { ReactNode, SVGProps } from "react";
import { ICONS, type IconName } from "./icons";

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  size?: number;
};

/** Decorative icon; give the surrounding control an accessible name. */
export function Icon({ name, size = 20, strokeWidth = 1.8, ...props }: IconProps) {
  const icon: { filled?: boolean; body: ReactNode } = ICONS[name];
  const paint = icon.filled
    ? { fill: "currentColor" }
    : {
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
      };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...paint} {...props}>
      {icon.body}
    </svg>
  );
}

export type { IconName };
