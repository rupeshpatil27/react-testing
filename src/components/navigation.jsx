import { useState } from "react";
import { useMedia } from "react-use";
import { useLocation, useNavigate } from "react-router";
import { NavButton } from "./nav-button";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMedia("(max-width:1024px)", false);

  const onClick = (href) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={location.pathname === route.href}
        />
      ))}
    </nav>
  );
};
