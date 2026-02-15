import cvFile from "~/assets/files/Ian Vexler Galarza - CV.pdf";

const QuickLinks = () => {
  const links = [
    {
      icon: "bi-github",
      label: "GitHub",
      href: "https://github.com/ianvexler",
      external: true,
    },
    {
      icon: "bi-linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ian-vexler-73b9291b5/",
      external: true,
    },
    {
      icon: "bi-envelope",
      label: "Email",
      href: "mailto:ianvexler@gmail.com",
      external: false,
    },
    {
      icon: "bi-file-earmark-text",
      label: "CV",
      href: cvFile,
      external: true,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-text-muted bg-surface border border-border transition-colors duration-200 hover:text-accent hover:border-accent/50 [&_i]:text-base"
        >
          <i className={`bi ${link.icon}`} />
          <span className="hidden sm:inline">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
