import { Icon } from "@/components/icons/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { arrowNudge } from "@/components/ui/styles";
import { CLINIC } from "@/constants/clinic";
import { CONTACT } from "@/constants/contact";

/** Embedded map once `CLINIC.mapEmbedUrl` is set; the design's illustrated placeholder until then. */
export function MapCard() {
  const { map } = CONTACT;

  return (
    <div className="relative min-h-[280px] flex-auto overflow-hidden rounded-3xl border border-[#D3E3E4] bg-[#E3EEEE]">
      {CLINIC.mapEmbedUrl ? (
        <iframe
          src={CLINIC.mapEmbedUrl}
          title={map.embedTitle}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <>
          <svg aria-hidden="true" width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0v40" fill="none" stroke="#297984" strokeWidth="1" opacity="0.12" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#map-grid)" />
            <path
              d="M-20 190 C 120 150, 220 260, 380 200 S 640 120, 900 170"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="14"
              opacity="0.9"
            />
            <path
              d="M260 -20 C 240 120, 300 220, 280 420"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
              opacity="0.8"
            />
          </svg>
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-full text-brand">
            <Icon name="pinFilled" size={44} />
          </div>
        </>
      )}

      <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-[18px] bg-white/95 py-3.5 pr-3.5 pl-[18px] shadow-[0_16px_32px_-20px_rgba(22,40,43,.35)]">
        {CLINIC.mapEmbedUrl ? (
          <span className="text-[15px] font-extrabold">{CLINIC.location.full}</span>
        ) : (
          <span className="flex flex-col leading-[1.35]">
            <span className="text-[15px] font-extrabold">{map.title}</span>
            <span className="text-[13px] text-muted">{map.caption}</span>
          </span>
        )}
        <ButtonLink
          href={CLINIC.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="gap-2 px-[18px]"
        >
          {map.directionsLabel}
          <Icon name="arrowUpRight" size={16} strokeWidth={2} className={arrowNudge} />
        </ButtonLink>
      </div>
    </div>
  );
}
