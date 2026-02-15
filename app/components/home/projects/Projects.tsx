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
    <section id="projects" className="py-12 bg-white/[0.01] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center">Projects</h2>

        {featuredProjects.length > 0 && (
          <div className="mb-12 space-y-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
