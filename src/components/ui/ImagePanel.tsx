import { cn } from "@/lib/utils";

interface ImagePanelProps {
  title: string;
  aspectRatio?: string;
  overlayLabel?: string;
  className?: string;
  muted?: boolean;
}

export function ImagePanel({
  title,
  aspectRatio = "aspect-[16/9]",
  overlayLabel,
  className,
  muted = false,
}: ImagePanelProps) {
  return (
    <div
      aria-label={title}
      className={cn(
        "image-treatment relative overflow-hidden border border-border bg-surface",
        aspectRatio,
        muted && "opacity-90",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_45%,transparent_46%,transparent_100%)] opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(17,17,17,0.2)_100%)]" />
      <div className="absolute right-[14%] top-0 h-full w-px bg-white/40" />
      <div className="absolute right-[35%] top-0 h-full w-px bg-white/20" />
      <div className="absolute bottom-[22%] left-0 h-px w-full bg-white/20" />
      {overlayLabel ? (
        <div className="absolute left-3 top-3 border border-white/40 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.08em] text-white backdrop-blur-sm">
          {overlayLabel}
        </div>
      ) : null}
    </div>
  );
}
