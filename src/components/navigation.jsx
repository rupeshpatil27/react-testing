import { Menu } from "lucide-react";
import { useState } from "react";
import { useMedia } from "react-use";
import { useLocation, useNavigate } from "react-router";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

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
  {
    href: "/admin/product",
    label: "Admin",
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

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-accent border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-black focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-y-2 pt-6 mt-5">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={
                  route.href === location.pathname ? "secondary" : "ghost"
                }
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

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
