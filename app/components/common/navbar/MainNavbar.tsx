import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavbarItem from "./NavbarItem";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-navbar position-fixed top-0 start-0 end-0 py-3 ${scrolled ? 'scrolled' : ''}`}>
      <Container className="d-flex align-items-center justify-content-center px-4">
        <nav className="d-flex align-items-center gap-1 gap-sm-2">
          <NavbarItem text="Home" route="#home" />
          <NavbarItem text="Journey" route="#my-journey" />
          <NavbarItem text="Projects" route="#projects" />
          <a href="mailto:contact@example.com" className="navbar-cta ms-2 ms-sm-3 px-3 py-2 rounded-pill text-decoration-none fw-medium">
            Let's Talk
          </a>
        </nav>
      </Container>
    </header>
  );
};

export default MainNavbar;
