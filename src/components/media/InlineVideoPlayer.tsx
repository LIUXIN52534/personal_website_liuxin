type InlineVideoPlayerProps = {
  src: string;
  title: string;
};

export function InlineVideoPlayer({ src, title }: InlineVideoPlayerProps) {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[var(--line-soft)] bg-[rgba(8,8,12,0.92)]">
      <video
        className="aspect-video h-auto w-full bg-black"
        controls
        playsInline
        preload="metadata"
        src={src}
      >
        {title}
      </video>
    </div>
  );
}
