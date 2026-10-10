import { cn } from "@/lib/cn";

/** Soft, slowly drifting background glow. Position and colour come from `className`. */
export function Blob({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full static:animate-none", className)}
    />
  );
}
