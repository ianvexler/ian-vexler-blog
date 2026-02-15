import NavbarItem from "./NavbarItem";

const MainNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] py-3 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-center px-4">
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavbarItem text="Home" route="#home" />
          <NavbarItem text="Journey" route="#my-journey" />
          <NavbarItem text="Projects" route="#projects" />
          <NavbarItem text="Contact" route="#contact" />
          <a
            href="mailto:ianvexler@gmail.com"
            className="ml-2 sm:ml-4 px-4 py-2 rounded-lg text-sm font-medium text-background bg-accent transition-colors duration-200 hover:bg-accent-muted no-underline"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default MainNavbar;
