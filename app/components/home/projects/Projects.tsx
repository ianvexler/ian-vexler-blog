import { useState } from "react";
import { featuredProjects, otherProjects, ProjectData } from "~/data/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  return (
    <section id="projects" className="py-20 md:py-28 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <div className="h-px w-12 bg-accent mb-4" />
          <h2 className="text-2xl font-serif text-text">Projects</h2>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-10 space-y-6">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <FeaturedProjectCard {...project} />
              </div>
            ))}
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {otherProjects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.cardImage}
                  tags={project.tags}
                  link={project.link}
                  github={project.github}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        show={selectedProject !== null}
        onHide={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
