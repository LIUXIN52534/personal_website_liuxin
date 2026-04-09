"use client";

import { useEffect, useRef, useState } from "react";

import { XMindEmbedViewer } from "xmind-embed-viewer";

type XMindViewerProps = {
  locale: "zh" | "en";
  sourceUrl: string;
};

export function XMindViewer({ locale, sourceUrl }: XMindViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<XMindEmbedViewer | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadMap() {
      if (!containerRef.current) {
        return;
      }

      setError(null);
      setReady(false);
      containerRef.current.innerHTML = "";

      const viewer = new XMindEmbedViewer({
        el: containerRef.current,
        styles: {
          width: "100%",
          height: "100%",
        },
      });

      viewerRef.current = viewer;
      viewer.addEventListener("map-ready", () => {
        if (!cancelled) {
          setReady(true);
        }
      });

      try {
        const response = await fetch(sourceUrl);

        if (!response.ok) {
          throw new Error("Unable to fetch XMind file.");
        }

        const file = await response.arrayBuffer();

        if (cancelled) {
          return;
        }

        viewer.load(file);
      } catch (loadError) {
        if (!cancelled) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Failed to load the XMind file.",
          );
        }
      }
    }

    loadMap();

    return () => {
      cancelled = true;
      viewerRef.current = null;
    };
  }, [sourceUrl]);

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[var(--line-soft)] bg-[rgba(8,8,12,0.92)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line-soft)] px-4 py-3">
        <div className="space-y-1">
          <p className="mono-label">
            {locale === "zh" ? "XMind 浏览器" : "XMind viewer"}
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            {error
              ? error
              : ready
                ? locale === "zh"
                  ? "已载入思维导图，可继续缩放或打开原文件。"
                  : "Mind map loaded. You can zoom or open the original file."
                : locale === "zh"
                  ? "正在加载 XMind 文件…"
                  : "Loading XMind file..."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            className="button-secondary min-h-0 px-4 py-2 text-xs"
            onClick={() => viewerRef.current?.setFitMap()}
            type="button"
          >
            {locale === "zh" ? "适配视图" : "Fit map"}
          </button>
          <button
            className="button-secondary min-h-0 px-4 py-2 text-xs"
            onClick={() => viewerRef.current?.setZoomScale(100)}
            type="button"
          >
            100%
          </button>
          <a
            className="button-secondary min-h-0 px-4 py-2 text-xs"
            href={sourceUrl}
            rel="noreferrer"
            target="_blank"
          >
            {locale === "zh" ? "打开原文件" : "Open source"}
          </a>
        </div>
      </div>

      <div className="aspect-[16/10] min-h-[420px] w-full">
        <div className="h-full w-full" ref={containerRef} />
      </div>
    </div>
  );
}
