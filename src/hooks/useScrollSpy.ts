"use client";

import { useEffect, useState } from "react";

/** Returns the id of the section currently under the sticky header. */
export function useScrollSpy(ids: readonly string[], headerOffset = 72) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting);
        const current = ids.find((id) => visible.get(id));
        if (current) setActive(current);
      },
      // A thin band just below the header: whichever section crosses it is active.
      { rootMargin: `-${headerOffset}px 0px -70% 0px` },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, headerOffset]);

  return active;
}
