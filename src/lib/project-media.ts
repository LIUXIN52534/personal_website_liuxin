import path from "node:path";

import projectMediaUrls from "@/content/project-media-urls.json";
import type { ProjectDetailEntry } from "@/content/types";

type ProjectMediaKind = "video" | "xmind" | "unknown";

export type ProjectMediaInfo = {
  extension: string;
  fileName: string;
  kind: ProjectMediaKind;
  mimeType: string;
  src: string;
  source: "remote-url" | "local-api";
};

export function getProjectMediaInfo(project: ProjectDetailEntry): ProjectMediaInfo | null {
  const remoteUrl = getRemoteMediaUrl(project.slug);
  const fileReference = project.localAssetPath ?? remoteUrl;

  if (!fileReference) {
    return null;
  }

  const fileName = getFileName(fileReference);
  const extension = path.extname(fileName).toLowerCase();

  return {
    extension,
    fileName,
    kind: getMediaKind(extension),
    mimeType: getMimeType(extension),
    src: remoteUrl ?? `/api/project-media/${project.slug}`,
    source: remoteUrl ? "remote-url" : "local-api",
  };
}

function getFileName(fileReference: string) {
  if (/^https?:\/\//i.test(fileReference)) {
    try {
      return path.posix.basename(new URL(fileReference).pathname);
    } catch {
      return fileReference;
    }
  }

  return path.basename(fileReference);
}

function getRemoteMediaUrl(slug: string) {
  const value = projectMediaUrls[slug as keyof typeof projectMediaUrls];
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function getMediaKind(extension: string): ProjectMediaKind {
  if (extension === ".mp4") {
    return "video";
  }

  if (extension === ".xmind") {
    return "xmind";
  }

  return "unknown";
}

function getMimeType(extension: string) {
  switch (extension) {
    case ".mp4":
      return "video/mp4";
    case ".xmind":
      return "application/octet-stream";
    default:
      return "application/octet-stream";
  }
}
