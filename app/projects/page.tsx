import type { Metadata } from "next"

import ProjectsPage from "@/components/site/pages/ProjectsPage"

export const metadata: Metadata = {
  title: "پروژه‌ها | معیارگران جهان",
  description:
    "مروری بر تیپ پروژه‌ها و همکاری‌های معیارگران جهان در حوزه آزمایشگاه، استاندارد، آموزش و پشتیبانی تولید.",
}

export default function ProjectsRoute() {
  return <ProjectsPage />
}
