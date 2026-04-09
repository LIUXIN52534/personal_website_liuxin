import { ProjectList } from "@/components/site/ProjectList";
import { getAllProjects } from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  locale: "zh",
  pathname: "/work",
  title: "作品",
  description: "近期作品与其他公开作品的完整入口。",
});

export default function WorkPage() {
  return <ProjectList locale="zh" projects={getAllProjects()} />;
}
