import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailView } from "@/components/site/ProjectDetailView";
import { getAllProjects, getProjectBySlug } from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createPageMetadata({
    locale: "zh",
    pathname: `/work/${slug}`,
    title: project.titleZh,
    description: project.summaryZh,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView locale="zh" project={project} />;
}
