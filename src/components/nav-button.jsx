import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const NavButton = ({ href, label, isActive }) => {
  return (
    <Button asChild size="sm" variant="outline" className={cn("w-full lg:w-auto justify-between font-normal hover:bg-accent hover:text-accent-foreground border-none outline-none bg-white transition",isActive ? "bg-accent text-accent-foreground" :"bg-transparent")}>
      <Link to={href}>{label}</Link>
    </Button>
  );
};