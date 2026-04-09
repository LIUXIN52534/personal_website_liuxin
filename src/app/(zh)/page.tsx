import { HomePlaceholder } from "@/components/site/HomePlaceholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  locale: "zh",
  pathname: "/",
  title: "刘鑫｜首页",
  description:
    "刘鑫的双语个人网站首页，围绕玩法策划、技术策划与 AI 驱动互动系统实践，呈现带有故障感与信号漂移的海报式首屏。",
});

export default function HomePage() {
  return <HomePlaceholder locale="zh" />;
}
