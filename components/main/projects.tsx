import Link from "next/link";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="flex flex-col items-center w-full px-10 py-20">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          My Projects
        </h1>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            href={`/projects/${project.slug}`}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mt-8">
        <Link
          href="/projects"
          className="text-sm md:text-base text-white/80 hover:text-white underline underline-offset-4"
        >
          See All
        </Link>
      </div>
    </section>
  );
};
