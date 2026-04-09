type BilibiliEmbedPlayerProps = {
  bvid: string;
  title: string;
};

export function BilibiliEmbedPlayer({
  bvid,
  title,
}: BilibiliEmbedPlayerProps) {
  const src = `https://player.bilibili.com/player.html?bvid=${encodeURIComponent(bvid)}&p=1&poster=1&autoplay=0&danmaku=0`;

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[var(--line-soft)] bg-[rgba(8,8,12,0.92)]">
      <div className="aspect-video w-full">
        <iframe
          allow="autoplay; fullscreen"
          className="h-full w-full border-0"
          scrolling="no"
          src={src}
          title={title}
        />
      </div>
    </div>
  );
}
