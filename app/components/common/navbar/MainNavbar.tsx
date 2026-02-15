import NavbarItem from "./NavbarItem";

const MainNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] py-3 bg-background/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4">
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavbarItem text="Home" route="#home" />
          <NavbarItem text="Journey" route="#my-journey" />
          <NavbarItem text="Projects" route="#projects" />
          <a
            href="mailto:ianvexler@gmail.com"
            className="ml-2 sm:ml-3 px-4 py-2 rounded-full text-sm font-medium text-background bg-gradient-to-br from-accent to-accent-light shadow-[0_2px_12px_rgba(232,185,35,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,185,35,0.4)] active:translate-y-0 no-underline"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default MainNavbar;
