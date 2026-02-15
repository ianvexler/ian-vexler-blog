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
      <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-background border-2 border-white/40 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_8px_rgba(232,185,35,0.4)]" />
      <div className="p-4 pl-5 bg-card-bg border border-white/[0.06] rounded-xl transition-all duration-300 group-hover:bg-card-bg-hover group-hover:border-white/10">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
          <div>
            <h4 className="text-lg font-semibold mb-1">{title}</h4>
            {subtitle && (
              <p className="text-sm text-white/50 mb-0">{subtitle}</p>
            )}
          </div>
          {date && (
            <span className="text-xs text-white/40 bg-white/[0.05] py-1 px-3 rounded-full">
              {date}
            </span>
          )}
        </div>
        <div className="text-[0.95rem] leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
