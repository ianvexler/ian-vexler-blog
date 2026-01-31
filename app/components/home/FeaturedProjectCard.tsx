import { Badge } from "react-bootstrap";

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
  github
}: FeaturedProjectCardProps) => {
  return (
    <div className="featured-card rounded-4 overflow-hidden">
      <div className="row g-0">
        {/* Images */}
        <div className="col-lg-5">
          <div className="project-images d-flex align-items-center p-3 p-md-4 h-100">
            <div className="image-grid">
              {images.length > 0 ? (
                images.slice(0, 3).map((img, idx) => (
                  <div key={idx} className={`image-slot image-${idx + 1} rounded-2 overflow-hidden`}>
                    {img ? (
                      <img src={img} alt={`${title} screenshot ${idx + 1}`} className="w-100 h-100 object-fit-cover d-block" />
                    ) : (
                      <div className="image-placeholder w-100 h-100 d-flex align-items-center justify-content-center">
                        <i className="bi bi-image text-white-50 fs-4" />
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="image-slot image-1 rounded-2 overflow-hidden">
                  <div className="image-placeholder w-100 h-100 d-flex align-items-center justify-content-center">
                    <i className="bi bi-image text-white-50 fs-4" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="col-lg-7">
          <div className="p-4 p-md-5">
            <h3 className="fs-4 fw-semibold mb-3">{title}</h3>
            
            <p className="text-white-50 mb-4" style={{ lineHeight: 1.7 }}>
              {description}
            </p>

            {highlights.length > 0 && (
              <ul className="project-highlights ps-3 mb-4">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="mb-2 text-white-75" style={{ fontSize: '0.95rem' }}>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            {tags.length > 0 && (
              <div className="d-flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <Badge key={tag} className="project-tag px-2 py-1 fw-normal rounded-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <div className="d-flex gap-3">
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link d-inline-flex align-items-center px-3 py-2 rounded-2 text-decoration-none">
                  <i className="bi bi-box-arrow-up-right me-2" />
                  View Project
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="project-link d-inline-flex align-items-center px-3 py-2 rounded-2 text-decoration-none">
                  <i className="bi bi-github me-2" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
