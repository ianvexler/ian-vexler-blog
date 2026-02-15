interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  github?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags = [],
  link,
  github,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden h-full bg-card-bg border border-white/[0.06] transition-all duration-300 hover:border-white/10 hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] group">
      <div className="h-40 overflow-hidden bg-black/20">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/[0.03]">
            <i className="bi bi-image text-white/50 text-2xl" />
          </div>
        )}
      </div>

      <div className="flex-grow flex flex-col p-4 md:p-5">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>

        <p
          className="text-white/50 mb-4 flex-grow text-sm"
          style={{ lineHeight: 1.6 }}
        >
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-normal rounded text-white/60 bg-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-auto">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-white/60 bg-white/[0.04] border border-white/[0.08] no-underline transition-all duration-300 hover:text-white hover:bg-accent/10 hover:border-accent/30"
            >
              <i className="bi bi-box-arrow-up-right" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-white/60 bg-white/[0.04] border border-white/[0.08] no-underline transition-all duration-300 hover:text-white hover:bg-accent/10 hover:border-accent/30"
            >
              <i className="bi bi-github" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
