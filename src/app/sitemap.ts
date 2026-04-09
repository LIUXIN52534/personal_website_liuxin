import type { MetadataRoute } from "next";

import { getAllProjects } from "@/content/projects";
import { siteOrigin } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/work",
    "/about",
    "/contact",
    "/en",
    "/en/work",
    "/en/about",
    "/en/contact",
  ];

  const projectRoutes = getAllProjects().flatMap((project) => [`/work/${project.slug}`, `/en/work/${project.slug}`]);

  return [...staticRoutes, ...projectRoutes].map((pathname) => ({
    url: new URL(pathname, siteOrigin).toString(),
    lastModified: new Date(),
  }));
}
