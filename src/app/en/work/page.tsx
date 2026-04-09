import { ProjectList } from "@/components/site/ProjectList";
import { getAllProjects } from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  locale: "en",
  pathname: "/work",
  title: "Work",
  description: "A full browseable archive of recent work and other public cases.",
});

export default function WorkPage() {
  return <ProjectList locale="en" projects={getAllProjects()} />;
}
