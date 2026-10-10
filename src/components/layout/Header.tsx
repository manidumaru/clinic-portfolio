"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { NAV_CTA, NAV_ITEMS } from "@/constants/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/6 bg-white/86 backdrop-blur-[14px]">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-6 px-[clamp(20px,4vw,40px)]"
      >
        <Logo />

        <ul className="m-0 flex list-none items-center gap-7 p-0 max-[980px]:hidden">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative px-0.5 py-2.5 text-[15px] font-semibold text-ink-nav no-underline transition-colors duration-250 hover:text-brand-dark",
                    "after:absolute after:inset-x-0.5 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-sm after:bg-brand after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100",
                    isActive && "text-brand-dark after:scale-x-100",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <ButtonLink href={NAV_CTA.href} size="sm" className="max-[980px]:hidden">
          {NAV_CTA.label}
        </ButtonLink>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="hidden size-11 cursor-pointer items-center justify-center rounded-xl border border-[#DCE6E7] bg-white text-ink max-[980px]:inline-flex"
        >
          <Icon name={menuOpen ? "close" : "menu"} strokeWidth={2} />
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-[#E6EDEE] bg-white px-[clamp(20px,4vw,40px)] pt-3 pb-5 min-[981px]:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[#F0F4F4] px-1 py-3 text-[17px] font-semibold text-ink no-underline"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href={NAV_CTA.href} onClick={() => setMenuOpen(false)} className="mt-3">
            {NAV_CTA.label}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
