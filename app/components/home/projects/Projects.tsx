import { useState } from "react";
import { featuredProjects, otherProjects, ProjectData } from "~/data/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="projects-title mb-5 text-center">Projects</h2>
        
        {featuredProjects.length > 0 && (
          <div className="featured-projects mb-5">
            {featuredProjects.map((project, idx) => (
              <div key={idx} onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                <FeaturedProjectCard {...project} />
              </div>
            ))}
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="projects-grid">
            {otherProjects.map((project, idx) => (
              <div key={idx} onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.images[0]}
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
