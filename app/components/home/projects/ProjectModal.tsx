import classNames from "classnames";
import { useState } from "react";
import Modal from "~/components/common/Modal";
import { ProjectData } from "~/data/projects";

interface ProjectModalProps {
  project: ProjectData | null;
  show: boolean;
  onHide: () => void;
}

const isVideo = (src: string) => {
  return src.match(/\.(mp4|webm|ogg)$/i) !== null;
};

const ProjectModal = ({ project, show, onHide }: ProjectModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return null;
  }

  const hasMedia = project.images.length > 0;

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const currentMedia = project.images[activeIndex];

  return (
    <Modal
      show={show}
      onHide={() => {
        onHide();
        setActiveIndex(0);
      }}
      title={project.title}
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {hasMedia && (
          <div className="lg:w-5/12 flex flex-col items-center">
            <div className="w-full rounded-lg overflow-hidden aspect-[4/3] bg-surface-alt">
              {currentMedia ? (
                isVideo(currentMedia) ? (
                  <video
                    src={currentMedia}
                    controls
                    className="w-full h-full object-contain block"
                    style={{ backgroundColor: "#21262d" }}
                  />
                ) : (
                  <img
                    src={currentMedia}
                    alt={`${project.title} screenshot ${activeIndex + 1}`}
                    className="w-full h-full object-contain block"
                  />
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface-alt">
                  <i className="bi bi-image text-text-muted text-4xl" />
                </div>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-3 w-full">
                <button
                  type="button"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-surface-alt text-text border border-border transition-colors hover:bg-surface-alt/80 hover:border-accent/50"
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  <i className="bi bi-chevron-left" />
                </button>
                <div className="flex gap-1.5">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={classNames(
                        "w-2 h-2 rounded-full border-none cursor-pointer transition-colors",
                        idx === activeIndex ? "bg-accent" : "bg-text/30 hover:bg-text/50"
                      )}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-surface-alt text-text border border-border transition-colors hover:bg-surface-alt/80 hover:border-accent/50"
                  onClick={handleNext}
                  aria-label="Next"
                >
                  <i className="bi bi-chevron-right" />
                </button>
              </div>
            )}
          </div>
        )}

        <div className={hasMedia ? "lg:w-7/12" : "w-full"}>
          <p className="text-text-muted text-sm mb-6 leading-relaxed">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h6 className="text-text-muted uppercase mb-2 text-xs tracking-wider font-medium">
                Highlights
              </h6>
              <ul className="list-disc pl-4 [&_li]:marker:text-accent space-y-1.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-text-muted text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-normal rounded text-text-muted bg-surface-alt border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm text-text-muted bg-surface-alt border border-border no-underline transition-colors duration-200 hover:text-accent hover:border-accent/40"
              >
                <i className="bi bi-box-arrow-up-right mr-2" />
                View Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm text-text-muted bg-surface-alt border border-border no-underline transition-colors duration-200 hover:text-accent hover:border-accent/40"
              >
                <i className="bi bi-github mr-2" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
