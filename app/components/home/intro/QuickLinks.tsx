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
    <div className="flex justify-center flex-wrap gap-2 md:gap-3 px-4 animate-fade-in-up [animation-delay:450ms] [animation-fill-mode:both]">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/60 bg-white/[0.04] border border-white/[0.08] no-underline transition-all duration-300 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] hover:-translate-y-0.5 active:translate-y-0 [&_i]:text-lg [&_i]:transition-transform [&:hover_i]:scale-110"
        >
          <i className={`bi ${link.icon}`} />
          <span className="hidden sm:inline">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
