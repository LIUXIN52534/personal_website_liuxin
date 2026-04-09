import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";

import { getProjectBySlug } from "@/content/projects";
import { getProjectMediaInfo } from "@/lib/project-media";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

const VIDEO_CHUNK_SIZE = 2 * 1024 * 1024;

export async function GET(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const project = getProjectBySlug(slug);

  if (!project?.localAssetPath) {
    return new Response("Media not found.", { status: 404 });
  }

  const media = getProjectMediaInfo(project);

  if (!media) {
    return new Response("Media not found.", { status: 404 });
  }

  const absolutePath = path.join(process.cwd(), "AI 实践作品", path.basename(project.localAssetPath));
  let fileStat;

  try {
    fileStat = await stat(absolutePath);
  } catch {
    return new Response("Media not found.", { status: 404 });
  }

  const rangeHeader = request.headers.get("range");

  if (media.kind === "video" && rangeHeader) {
    const parsedRange = parseRange(rangeHeader, fileStat.size);

    if (!parsedRange) {
      return new Response("Requested range not satisfiable.", {
        status: 416,
        headers: {
          "Content-Range": `bytes */${fileStat.size}`,
        },
      });
    }

    const { start, end } = parsedRange;
    const videoStream = createReadStream(absolutePath, { start, end });

    return new Response(Readable.toWeb(videoStream) as ReadableStream, {
      status: 206,
      headers: {
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": String(end - start + 1),
        "Content-Range": `bytes ${start}-${end}/${fileStat.size}`,
        "Content-Type": media.mimeType,
      },
    });
  }

  const fileStream = createReadStream(absolutePath);

  return new Response(Readable.toWeb(fileStream) as ReadableStream, {
    headers: {
      "Accept-Ranges": media.kind === "video" ? "bytes" : "none",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(media.fileName)}`,
      "Content-Length": String(fileStat.size),
      "Content-Type": media.mimeType,
    },
  });
}

function parseRange(rangeHeader: string, totalSize: number) {
  const match = /bytes=(\d*)-(\d*)/.exec(rangeHeader);

  if (!match) {
    return null;
  }

  const rawStart = match[1];
  const rawEnd = match[2];
  const start = rawStart ? Number(rawStart) : 0;

  if (Number.isNaN(start) || start >= totalSize) {
    return null;
  }

  const requestedEnd = rawEnd ? Number(rawEnd) : start + VIDEO_CHUNK_SIZE - 1;
  const end = Math.min(
    Number.isNaN(requestedEnd) ? start + VIDEO_CHUNK_SIZE - 1 : requestedEnd,
    totalSize - 1,
  );

  if (end < start) {
    return null;
  }

  return { start, end };
}
