import { readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

import { put } from "@vercel/blob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const outputPath = path.join(repoRoot, "src", "content", "project-media-urls.json");
const envFilePath = path.join(repoRoot, ".env.local");

if (typeof process.loadEnvFile === "function") {
  process.loadEnvFile(envFilePath);
}

const uploadEntries = [
  { slug: "ai-dev-simulation", localAssetPath: "AI 实践作品/AI开发模拟.mp4" },
  { slug: "gameplay-flow-demo", localAssetPath: "AI 实践作品/玩法流程demo演示.mp4" },
  { slug: "faction-ai-demo", localAssetPath: "AI 实践作品/势力 AI demo 演示.mp4" },
  { slug: "hades-system-breakdown", localAssetPath: "AI 实践作品/哈迪斯系统拆解.xmind" },
  { slug: "character-codex-demo", localAssetPath: "AI 实践作品/人物图鉴系统demo.mp4" },
  { slug: "faction-map-demo", localAssetPath: "AI 实践作品/势力地图演示.mp4" },
  { slug: "timeline-codex", localAssetPath: "AI 实践作品/大事年表图鉴.mp4" },
];

const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

if (!blobToken) {
  console.error("Missing BLOB_READ_WRITE_TOKEN in environment.");
  console.error("Add it to .env.local after linking the project in Vercel.");
  process.exit(1);
}

const uploadedUrls = {};

for (const entry of uploadEntries) {
  const absolutePath = path.join(repoRoot, entry.localAssetPath);
  const fileName = path.basename(entry.localAssetPath);
  const blobPath = `projects/${entry.slug}/${fileName}`;
  const fileStat = await stat(absolutePath);
  const body = await readFile(absolutePath);

  console.log(`Uploading ${entry.slug} -> ${blobPath}`);

  const result = await put(blobPath, body, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: getContentType(fileName),
    multipart: fileStat.size >= 50 * 1024 * 1024,
    token: blobToken,
  });

  uploadedUrls[entry.slug] = result.url;
  console.log(`Uploaded ${entry.slug}: ${result.url}`);
}

await writeFile(`${outputPath}`, `${JSON.stringify(uploadedUrls, null, 2)}\n`, "utf8");

console.log("");
console.log(`Updated ${path.relative(repoRoot, outputPath)} with ${Object.keys(uploadedUrls).length} Blob URLs.`);

function getContentType(fileName) {
  const extension = path.extname(fileName).toLowerCase();

  switch (extension) {
    case ".mp4":
      return "video/mp4";
    case ".xmind":
      return "application/octet-stream";
    default:
      return "application/octet-stream";
  }
}
