import { Icon } from "@/components/icons/Icon";
import { CLINIC } from "@/constants/clinic";
import { cn } from "@/lib/cn";

export function SocialLinks({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const links = CLINIC.socials.filter((s) => s.href);
  if (links.length === 0) return null;

  return (
    <ul className={cn("m-0 flex list-none gap-2 p-0", className)} aria-label="Social media">
      {links.map((social) => (
        <li key={social.platform}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full transition-[background-color,color,transform] duration-250 hover:-translate-y-0.5 hover:bg-brand hover:text-white",
              tone === "light" ? "bg-tint text-brand-dark" : "bg-white/8 text-night-text",
            )}
          >
            <Icon name={social.platform} size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
