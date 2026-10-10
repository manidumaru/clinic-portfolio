import { useId } from "react";
import { Icon } from "@/components/icons/Icon";

type ImagePlaceholderProps = {
  label: string;
  caption: string;
  pattern?: "dots" | "lines";
};

/** The design's labelled stand-in, shown until a real photo is added to ASSETS. */
export function ImagePlaceholder({ label, caption, pattern = "dots" }: ImagePlaceholderProps) {
  const patternId = useId();

  return (
    <div role="img" aria-label={`Placeholder for ${label.toLowerCase()}: ${caption}`} className="absolute inset-0">
      <svg aria-hidden="true" width="100%" height="100%" className="absolute inset-0">
        <defs>
          {pattern === "dots" ? (
            <pattern id={patternId} width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="#297984" opacity="0.18" />
            </pattern>
          ) : (
            <pattern id={patternId} width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <path d="M0 0v28" stroke="#297984" strokeWidth="1" opacity="0.12" />
            </pattern>
          )}
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 text-brand">
        <Icon name="image" size={pattern === "dots" ? 64 : 56} strokeWidth={1.2} />
        <span className="text-[13px] font-bold tracking-[0.08em] text-brand-dark uppercase">{label}</span>
        <span className="max-w-[260px] text-center text-sm leading-normal text-[#2F5559]">{caption}</span>
      </div>
    </div>
  );
}
