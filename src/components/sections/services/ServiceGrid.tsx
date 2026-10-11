"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { Icon } from "@/components/icons/Icon";
import { IconBadge } from "@/components/ui/IconBadge";
import { arrowNudge, cardHover } from "@/components/ui/styles";
import { cn } from "@/lib/cn";
import type { Service } from "@/types/content";

type ServiceGridProps = {
  items: Service[];
  cta: { title: string; label: string; href: string };
};

type Rect = { x: number; y: number; width: number; height: number };

const ease = "cubic-bezier(.2,.7,.2,1)";

const activeText = "transition-colors duration-350 group-data-[active=true]/svc:text-white";

const badgeActive =
  "transition-[transform,background-color,color] duration-350 ease-[cubic-bezier(.2,.7,.2,1)] group-data-[active=true]/svc:-translate-y-0.5 group-data-[active=true]/svc:-rotate-6 group-data-[active=true]/svc:bg-white/14 group-data-[active=true]/svc:text-white";

/**
 * Service cards with a single brand-coloured highlight that glides to whichever card is hovered.
 * Cards stay unpositioned so the absolutely-positioned panel paints over their backgrounds
 * but under their (z-10) content.
 */
export function ServiceGrid({ items, cta }: ServiceGridProps) {
  const [active, setActive] = useState<number | null>(null);
  // `glide` is false when the panel appears from hidden, so it fades in on the card rather than sliding from its last spot.
  const [panel, setPanel] = useState<{ rect: Rect; glide: boolean } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const activeRef = useRef<number | null>(null);
  const shownRef = useRef(false);

  const measure = useCallback((glide: boolean) => {
    const card = activeRef.current === null ? null : cardRefs.current[activeRef.current];
    if (!card) return;
    const rect = { x: card.offsetLeft, y: card.offsetTop, width: card.offsetWidth, height: card.offsetHeight };
    setPanel((prev) =>
      prev &&
      prev.rect.x === rect.x &&
      prev.rect.y === rect.y &&
      prev.rect.width === rect.width &&
      prev.rect.height === rect.height
        ? prev
        : { rect, glide },
    );
  }, []);

  useLayoutEffect(() => {
    activeRef.current = active;
    if (active === null) {
      shownRef.current = false;
      return;
    }
    measure(shownRef.current);
    shownRef.current = true;
  }, [active, measure]);

  // Keep the panel aligned across breakpoint and content-size changes.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const observer = new ResizeObserver(() => measure(false));
    observer.observe(grid);
    return () => observer.disconnect();
  }, [measure]);

  const rect = panel?.rect;
  const panelStyle: CSSProperties = {
    opacity: active !== null && rect ? 1 : 0,
    transform: rect ? `translate(${rect.x}px, ${rect.y}px)` : undefined,
    width: rect?.width,
    height: rect?.height,
    transitionProperty: panel?.glide ? "transform, width, height, opacity" : "opacity",
    transitionDuration: "450ms",
    transitionTimingFunction: ease,
  };

  return (
    <div
      ref={gridRef}
      className="relative isolate grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1"
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setActive(null);
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 overflow-hidden rounded-3xl bg-brand shadow-[0_22px_44px_-24px_rgba(22,40,43,.28)]"
        style={panelStyle}
      >
        <div className="absolute -top-[90px] -right-[70px] size-[260px] rounded-full border border-white/18" />
        <div className="absolute -top-[50px] -right-[30px] size-[180px] rounded-full border border-white/14" />
      </div>

      {items.map((service, i) => {
        const tinted = service.tone === "tinted";
        return (
          <article
            key={service.title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            data-active={active === i}
            onPointerEnter={() => setActive(i)}
            className={cn("group/svc rounded-3xl border border-line p-7", tinted ? "bg-surface" : "bg-white")}
          >
            <div className="relative z-10 flex flex-col gap-4">
              <IconBadge
                icon={service.icon}
                variant={tinted ? "outline" : "tint"}
                className={cn(badgeActive, tinted && "border-0")}
              />
              <h3 className={cn(activeText, "m-0 text-[19px] font-extrabold")}>{service.title}</h3>
              <p
                className={cn(
                  "m-0 text-[15px] leading-[1.6] text-muted transition-colors duration-350",
                  "group-data-[active=true]/svc:text-[#E4F1F2]",
                )}
              >
                {service.text}
              </p>
            </div>
          </article>
        );
      })}

      <a
        href={cta.href}
        onPointerEnter={() => setActive(null)}
        className={cn(
          cardHover,
          "col-span-2 flex flex-col justify-between gap-4 rounded-3xl border border-dashed border-[#A9CDD1] bg-tint p-7 text-ink no-underline hover:text-ink max-[640px]:col-span-1",
        )}
      >
        <span className="text-[19px] leading-[1.3] font-extrabold">{cta.title}</span>
        <span className="inline-flex items-center gap-2 text-[15px] font-bold text-brand-dark">
          {cta.label}
          <Icon name="arrowRight" size={18} strokeWidth={2} className={arrowNudge} />
        </span>
      </a>
    </div>
  );
}
