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
    <div className="flex flex-col rounded-xl overflow-hidden h-full bg-surface-alt border border-border transition-all duration-200 hover:border-accent/30 hover:shadow-lg hover:shadow-black/20 group">
      <div className="h-35 overflow-hidden bg-surface">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface">
            <i className="bi bi-image text-text-muted text-2xl" />
          </div>
        )}
      </div>

      <div className="flex-grow flex flex-col p-5">
        <h4 className="text-base font-semibold text-text mb-2 group-hover:text-accent transition-colors">{title}</h4>

        <p className="text-text-muted text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-normal rounded text-text-muted bg-surface border border-border"
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
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-text-muted bg-surface border border-border no-underline transition-colors duration-200 hover:text-accent hover:border-accent/50"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="bi bi-box-arrow-up-right" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-text-muted bg-surface border border-border no-underline transition-colors duration-200 hover:text-accent hover:border-accent/50"
              onClick={(e) => e.stopPropagation()}
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
