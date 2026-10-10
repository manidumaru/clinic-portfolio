import { AssetImage } from "@/components/ui/AssetImage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM } from "@/constants/team";
import type { TeamMember } from "@/types/content";
import { cn } from "@/lib/cn";

export function Team() {
  const { intro, members, isSample, sampleBadge } = TEAM;

  return (
    <section id="team" aria-labelledby="team-title" className="bg-surface py-[clamp(72px,9vw,128px)]">
      <Container className="flex flex-col gap-12">
        <SectionHeading intro={intro} titleId="team-title" align="center" titleClassName="max-w-[720px]" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {members.map((member, i) => (
            <MemberCard
              key={member.name}
              member={member}
              badge={isSample ? sampleBadge : undefined}
              shade={i % 2 === 0 ? "bg-[#D6E8E9]" : "bg-[#E2EEEE]"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function MemberCard({ member, badge, shade }: { member: TeamMember; badge?: string; shade: string }) {
  const zoom = "transition-transform duration-600 ease-[cubic-bezier(.2,.7,.2,1)] group-hover/member:scale-105";

  return (
    <article className="group/member flex flex-col gap-[18px]">
      <div className={cn("relative aspect-4/5 overflow-hidden rounded-[26px]", shade)}>
        {member.photo ? (
          <AssetImage
            asset={member.photo}
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 300px"
            className={zoom}
          />
        ) : (
          <div
            role="img"
            aria-label={`Portrait placeholder for ${member.name}`}
            className={cn("absolute inset-0 flex items-center justify-center", zoom)}
          >
            <span className="text-[64px] font-extrabold tracking-[-0.04em] text-brand opacity-55">
              {member.initials}
            </span>
          </div>
        )}
        {badge && (
          <span className="absolute top-3.5 left-3.5 rounded-full bg-white/90 px-2.5 py-1.5 text-[11px] font-extrabold tracking-[0.06em] text-brand-dark uppercase">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1.5 px-1">
        <h3 className="m-0 text-xl font-extrabold">{member.name}</h3>
        <span className="text-sm font-bold text-brand">{member.role}</span>
        <p className="mt-1 mb-0 text-[15px] leading-[1.55] text-muted">{member.bio}</p>
      </div>
    </article>
  );
}
