import { Icon } from "@/components/icons/Icon";
import { cn } from "@/lib/cn";

export function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div role="img" aria-label={`Rated ${rating} out of 5`} className={cn("flex gap-[3px]", className)}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name={i < rating ? "star" : "starOutline"} size={18} strokeWidth={1.6} />
      ))}
    </div>
  );
}
