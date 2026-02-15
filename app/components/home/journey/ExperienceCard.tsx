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
      className={classNames("group relative", className)}
      {...rest}
    >
      <div className="absolute -left-8 top-2.5 w-3 h-3 rounded-full bg-surface border-2 border-accent/60 transition-colors duration-200 group-hover:border-accent group-hover:bg-accent/20" />
      <div className="py-3 pl-1">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
          <div>
            <h4 className="text-base font-semibold text-text mb-0.5">{title}</h4>
            {subtitle && (
              <p className="text-sm text-text-muted mb-0">{subtitle}</p>
            )}
          </div>
          {date && (
            <span className="text-xs text-text-muted tabular-nums">
              {date}
            </span>
          )}
        </div>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
