import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const NavButton = ({ href, label, isActive }) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full lg:w-auto justify-between shadow-none font-normal hover:bg-accent hover:text-accent-foreground border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-accent-foreground focus:bg-accent transition",
        isActive ? "bg-accent text-accent-foreground" : "bg-white",
      )}
    >
      <Link to={href}>{label}</Link>
    </Button>
  );
};
