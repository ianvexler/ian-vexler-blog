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
    <div className="rounded-2xl overflow-hidden bg-card-bg border border-white/[0.06] transition-all duration-300 hover:border-white/10 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-5/12">
          <div className="flex items-center p-4 md:p-5 h-full bg-black/20">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full aspect-[4/3]">
              {images.length > 0 ? (
                images.slice(0, 3).map((img, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl overflow-hidden ${
                      idx === 0 ? "col-span-1 row-span-2" : ""
                    }`}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`${title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover block"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/[0.03]">
                        <i className="bi bi-image text-white/50 text-2xl" />
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-white/[0.03]">
                    <i className="bi bi-image text-white/50 text-2xl" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 p-4 md:p-6">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>

          <p className="text-white/50 mb-6" style={{ lineHeight: 1.7 }}>
            {description}
          </p>

          {highlights.length > 0 && (
            <ul className="list-disc pl-5 mb-6 [&_li]:marker:text-accent space-y-2">
              {highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="text-white/75 text-[0.95rem]"
                >
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
                  className="px-2 py-1 text-xs font-normal rounded text-white/60 bg-white/[0.06]"
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
                className="inline-flex items-center px-4 py-2 rounded-lg text-white/70 bg-white/[0.04] border border-white/10 no-underline transition-all duration-300 hover:text-white hover:bg-accent/10 hover:border-accent/30"
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
                className="inline-flex items-center px-4 py-2 rounded-lg text-white/70 bg-white/[0.04] border border-white/10 no-underline transition-all duration-300 hover:text-white hover:bg-accent/10 hover:border-accent/30"
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
