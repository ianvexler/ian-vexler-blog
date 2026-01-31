import { useEffect, useState } from "react";

interface NavItemProps {
  text: string;
  route: string;
}

const NavbarItem = ({ text, route }: NavItemProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(route);
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsActive(rect.top <= 150 && rect.bottom >= 150);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [route]);

  const handleClick = (e: React.MouseEvent) => {
    if (route === '#home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={route} 
      onClick={handleClick}
      className={`nav-item position-relative text-decoration-none ${isActive ? 'active' : ''}`}
    >
      <span className="position-relative z-1">{text}</span>
      <span className="underline" />
    </a>
  );
};

export default NavbarItem;
