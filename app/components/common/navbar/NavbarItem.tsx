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
      className={`relative py-2 px-4 no-underline transition-colors duration-300 ${
        isActive
          ? "text-white [&_.underline]:scale-x-100 [&_.underline]:bg-accent [&_.underline]:w-6"
          : "text-white/70 hover:text-white [&:hover_.underline]:scale-x-100"
      }`}
    >
      <span className="relative z-10">{text}</span>
      <span className="underline absolute bottom-[0.3rem] left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full scale-x-0 origin-center transition-transform duration-300 ease-out" />
    </a>
  );
};

export default NavbarItem;
