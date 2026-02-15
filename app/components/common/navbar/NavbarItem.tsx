import classNames from "classnames";
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
        setIsActive(rect.top <= 120 && rect.bottom >= 120);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [route]);

  const handleClick = (e: React.MouseEvent) => {
    if (route === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <a
      href={route}
      onClick={handleClick}
      className={classNames(
        "relative py-2 px-4 text-sm no-underline transition-colors duration-200",
        isActive ? "text-accent font-medium" : "text-text-muted hover:text-text"
      )}
    >
      {text}
    </a>
  );
};

export default NavbarItem;
