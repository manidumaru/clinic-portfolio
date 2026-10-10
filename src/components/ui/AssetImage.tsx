import Image from "next/image";
import type { Asset } from "@/constants/assets";
import { cn } from "@/lib/cn";

type AssetImageProps = {
  asset: Asset;
  sizes: string;
  preload?: boolean;
  className?: string;
};

/** Fills its (relatively positioned) parent with an image from the ASSETS registry. */
export function AssetImage({ asset, sizes, preload, className }: AssetImageProps) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      sizes={sizes}
      preload={preload}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
    />
  );
}
