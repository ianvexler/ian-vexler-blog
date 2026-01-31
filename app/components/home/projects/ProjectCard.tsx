import { Badge } from "react-bootstrap";

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
  github
}: ProjectCardProps) => {
  return (
    <div className="project-card-small d-flex flex-column rounded-3 overflow-hidden h-100">
      <div className="small-card-image overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="small-card-img w-100 h-100 object-fit-cover d-block" />
        ) : (
          <div className="small-card-placeholder w-100 h-100 d-flex align-items-center justify-content-center">
            <i className="bi bi-image text-white-50 fs-3" />
          </div>
        )}
      </div>

      <div className="flex-grow-1 d-flex flex-column p-3 p-md-4">
        <h4 className="fs-5 fw-semibold mb-2">{title}</h4>
        
        <p className="text-white-50 mb-3 flex-grow-1" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
          {description}
        </p>

        {tags.length > 0 && (
          <div className="d-flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 4).map((tag) => (
              <Badge key={tag} className="project-tag px-2 py-1 fw-normal rounded-1">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="d-flex gap-2 mt-auto">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="small-card-link d-inline-flex align-items-center justify-content-center rounded-2 text-decoration-none">
              <i className="bi bi-box-arrow-up-right" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="small-card-link d-inline-flex align-items-center justify-content-center rounded-2 text-decoration-none">
              <i className="bi bi-github" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
