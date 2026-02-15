import classNames from "classnames";

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  highlights?: string[];
  images: string[];
  tags?: string[];
  link?: string;
  github?: string;
}

const FeaturedProjectCard = ({
  title,
  description,
  highlights = [],
  images,
  tags = [],
  link,
  github,
}: FeaturedProjectCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden bg-surface-alt border border-border transition-all duration-200 hover:border-accent/30 hover:shadow-lg hover:shadow-black/20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-5/12">
          <div className="flex items-center p-4 md:p-5 h-full bg-surface">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full aspect-[4/3]">
              {images.length > 0 ? (
                images.slice(0, 3).map((img, idx) => (
                  <div
                    key={idx}
                    className={classNames("rounded-lg overflow-hidden", idx === 0 && "col-span-1 row-span-2")}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`${title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover block"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-surface-alt">
                        <i className="bi bi-image text-text-muted text-2xl" />
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-surface-alt">
                    <i className="bi bi-image text-text-muted text-2xl" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 p-5 md:p-6">
          <h3 className="text-lg font-semibold text-text mb-3">{title}</h3>

          <p className="text-text-muted text-sm mb-6 leading-relaxed">
            {description}
          </p>

          {highlights.length > 0 && (
            <ul className="list-disc pl-4 mb-6 [&_li]:marker:text-accent space-y-1.5 text-sm">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="text-text-muted">
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
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

          <div className="flex gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 rounded-lg text-sm text-text-muted bg-surface border border-border no-underline transition-colors duration-200 hover:text-accent hover:border-accent/50"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="bi bi-box-arrow-up-right mr-2" />
                View Project
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 rounded-lg text-sm text-text-muted bg-surface border border-border no-underline transition-colors duration-200 hover:text-accent hover:border-accent/50"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="bi bi-github mr-2" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
