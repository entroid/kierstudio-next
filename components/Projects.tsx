// Hybrid SSR Component for Projects section
import { en } from "@/translations";
import { ProjectsAnimated } from "./projects/ProjectsAnimated";
import { ProjectsContent } from "./projects/ProjectsContent";

const defaultProjects = en.projects;

// Static project data for SSR (SEO-critical content)
const projectsData = [
  {
    id: 1,
    title: "HOLY Beer Hotel",
    category: "Hostel - Website",
    year: "2025",
    description: "We redesigned the Holy Beer Hotel landing page to elevate its digital presence and drive higher conversions.",
    services: ["Website Design", "UX/UI", "Strategy"],
    image: "/projects/holy-mock.png",
  },
  {
    id: 3,
    title: "MRAI FLEET",
    category: "SaaS Platform, Mobile App",
    year: "2023",
    description: "The MRAI Fleet SaaS platform and mobile app needed a new design to enhance user experience and streamline operations.",
    services: ["SaaS Platform", "Mobile App", "UX/UI", "Product Design"],
    image: "/projects/mrai/mrai-mock.jpg",
  },
  {
    id: 4,
    title: "Barrivell",
    category: "Ecommerce, Website",
    year: "2024",
    description: "We redesigned the Barrivell ecommerce website to enhance user experience and streamline operations.",
    services: ["Ecommerce Setup & Launch", "Website Design", "Strategy"],
    image: "/projects/barriv/barri-mock.jpg",
  },
  {
    id: 2,
    title: "TEAMIE.",
    category: "Team Communication - Website",
    year: "2024",
    description: "We designed and developed the Teamie. landing page to support the launch of this new team collaboration startup.",
    services: ["Visual Identity", "Website", "Blog CMS"],
    image: "/projects/teamie/01-mock.jpg",
  },
];

export function Projects() {
  return (
    <>
      <noscript>
        <ProjectsContent
          tag={defaultProjects.tag}
          title={defaultProjects.title}
          subtitle={defaultProjects.subtitle}
          viewProject={defaultProjects.viewProject}
          projects={projectsData}
        />
      </noscript>
      <ProjectsAnimated />
    </>
  );
}
