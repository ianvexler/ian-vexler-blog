import { useState } from "react";
import { Modal, Badge } from "react-bootstrap";
import { ProjectData } from "~/data/projects";

interface ProjectModalProps {
  project: ProjectData | null;
  show: boolean;
  onHide: () => void;
}

const ProjectModal = ({ project, show, onHide }: ProjectModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return null;
  }

  const hasImages = project.images.length > 0;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Modal 
      show={show} 
      onHide={() => { onHide(); setActiveIndex(0); }} 
      centered 
      size="xl"
      className="project-modal"
    >
      <Modal.Header closeButton className="border-0 px-4 pt-4 pb-3">
        <Modal.Title className="fs-3 fw-semibold">{project.title}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="px-4 pb-4 pt-2">
        <div className="row g-4">
          {/* Image Carousel */}
          {hasImages && (
            <div className="col-lg-5">
              <div className="modal-carousel rounded-3 overflow-hidden">
                <div className="carousel-main rounded-3 overflow-hidden">
                  {project.images[activeIndex] ? (
                    <img 
                      src={project.images[activeIndex]} 
                      alt={`${project.title} screenshot ${activeIndex + 1}`} 
                      className="w-100 h-100 object-fit-cover d-block" 
                    />
                  ) : (
                    <div className="carousel-placeholder w-100 h-100 d-flex align-items-center justify-content-center">
                      <i className="bi bi-image text-white-50 fs-1" />
                    </div>
                  )}
                </div>

                {project.images.length > 1 && (
                  <>
                    <button className="carousel-nav carousel-prev d-flex align-items-center justify-content-center rounded-circle" onClick={handlePrev}>
                      <i className="bi bi-chevron-left" />
                    </button>
                    <button className="carousel-nav carousel-next d-flex align-items-center justify-content-center rounded-circle" onClick={handleNext}>
                      <i className="bi bi-chevron-right" />
                    </button>

                    <div className="carousel-dots d-flex gap-1">
                      {project.images.map((_, idx) => (
                        <button 
                          key={idx}
                          className={`carousel-dot rounded-circle ${idx === activeIndex ? 'active' : ''}`}
                          onClick={() => setActiveIndex(idx)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Content */}
          <div className={hasImages ? "col-lg-7" : "col-12"}>
            <p className="text-white-75 mb-4" style={{ lineHeight: 1.8 }}>
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-4">
                <h6 className="text-white-50 text-uppercase mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                  Highlights
                </h6>
                <ul className="project-highlights ps-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="mb-2 text-white-75">{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.tags && project.tags.length > 0 && (
              <div className="d-flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="project-tag px-2 py-1 fw-normal rounded-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <div className="d-flex gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link d-inline-flex align-items-center px-3 py-2 rounded-2 text-decoration-none">
                  <i className="bi bi-box-arrow-up-right me-2" />
                  View Project
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link d-inline-flex align-items-center px-3 py-2 rounded-2 text-decoration-none">
                  <i className="bi bi-github me-2" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
