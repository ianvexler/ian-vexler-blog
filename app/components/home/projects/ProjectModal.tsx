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
          <div className="lg:w-5/12">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black/30">
              {currentMedia ? (
                isVideo(currentMedia) ? (
                  <video
                    src={currentMedia}
                    controls
                    className="w-full h-full object-contain block"
                    style={{ backgroundColor: "#000" }}
                  />
                ) : (
                  <img
                    src={currentMedia}
                    alt={`${project.title} screenshot ${activeIndex + 1}`}
                    className="w-full h-full object-contain block"
                  />
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/[0.03]">
                  <i className="bi bi-image text-white/50 text-4xl" />
                </div>
              )}

              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2 left-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white transition-all duration-200 hover:bg-black/70 hover:border-white/20 z-10"
                    onClick={handlePrev}
                  >
                    <i className="bi bi-chevron-left" />
                  </button>
                  <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white transition-all duration-200 hover:bg-black/70 hover:border-white/20 z-10"
                    onClick={handleNext}
                  >
                    <i className="bi bi-chevron-right" />
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all duration-200 ${
                          idx === activeIndex
                            ? "bg-white scale-125"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(idx)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div className={hasMedia ? "lg:w-7/12" : "w-full"}>
          <p className="text-white/75 mb-6" style={{ lineHeight: 1.8 }}>
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h6 className="text-white/50 uppercase mb-3 text-xs tracking-widest">
                Highlights
              </h6>
              <ul className="list-disc pl-5 [&_li]:marker:text-accent space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-white/75">
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
                  className="px-2 py-1 text-xs font-normal rounded text-white/60 bg-white/[0.06]"
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
                className="inline-flex items-center px-4 py-2 rounded-lg text-white/70 bg-white/[0.04] border border-white/10 no-underline transition-all duration-300 hover:text-white hover:bg-accent/10 hover:border-accent/30"
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
                className="inline-flex items-center px-4 py-2 rounded-lg text-white/70 bg-white/[0.04] border border-white/10 no-underline transition-all duration-300 hover:text-white hover:bg-accent/10 hover:border-accent/30"
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
