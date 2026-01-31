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
      label: "Resume",
      href: "/resume.pdf",
      external: true,
    },
  ];

  return (
    <div className="socials d-flex justify-content-center flex-wrap gap-2 gap-md-3 px-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="social-btn d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill text-decoration-none"
        >
          <i className={`bi ${link.icon}`} />
          <span className="d-none d-sm-inline">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default QuickLinks;
