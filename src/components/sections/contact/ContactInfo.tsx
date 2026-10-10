import { IconBadge } from "@/components/ui/IconBadge";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { tile } from "@/components/ui/styles";
import { CLINIC } from "@/constants/clinic";
import { CONTACT } from "@/constants/contact";
import { cn } from "@/lib/cn";

const label = "text-xs font-bold tracking-[0.06em] text-muted uppercase";
const value = "text-base font-bold text-ink no-underline hover:text-brand-dark";

export function ContactInfo() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        <div className={cn(tile, "flex gap-3.5")}>
          <IconBadge icon="pin" size={44} iconSize={20} className="rounded-xl" />
          <div className="flex flex-col gap-1">
            <span className={label}>{CONTACT.labels.address}</span>
            <span className="text-base leading-[1.4] font-bold">{CLINIC.location.full}</span>
          </div>
        </div>
        <div className={cn(tile, "flex gap-3.5")}>
          <IconBadge icon="phone" size={44} iconSize={20} className="rounded-xl" />
          <div className="flex flex-col gap-1">
            <span className={label}>{CONTACT.labels.phone}</span>
            {CLINIC.phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className={cn(value, "py-0.5")}>
                {phone.display}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={cn(tile, "flex flex-wrap items-center justify-between gap-3.5")}>
        <div className="flex min-w-0 gap-3.5">
          <IconBadge icon="mail" size={44} iconSize={20} className="rounded-xl" />
          <div className="flex min-w-0 flex-col gap-1">
            <span className={label}>{CONTACT.labels.email}</span>
            <a href={`mailto:${CLINIC.email}`} className={cn(value, "wrap-anywhere")}>
              {CLINIC.email}
            </a>
          </div>
        </div>
        <SocialLinks />
      </div>
    </>
  );
}
