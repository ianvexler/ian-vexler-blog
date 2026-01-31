import classNames from "classnames";
import { HTMLAttributes, PropsWithChildren } from "react";

interface ExperienceCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  date?: string;
}

const ExperienceCard = ({ 
  title, 
  subtitle, 
  date, 
  children, 
  className, 
  ...rest 
}: PropsWithChildren<ExperienceCardProps>) => {
  return (
    <div 
      className={classNames("timeline-item", className)}
      {...rest}
    >
      <div className="timeline-dot" />
      <div className="timeline-content">
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
          <div>
            <h4 className="timeline-title mb-1">{title}</h4>
            {subtitle && <p className="timeline-subtitle mb-0">{subtitle}</p>}
          </div>
          {date && <span className="timeline-date">{date}</span>}
        </div>
        <div className="timeline-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
