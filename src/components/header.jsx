import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="border-b p-4 flex justify-between items-center bg-white sticky top-0 z-50">
      <div className="w-full flex items-center justify-between">
        <div className="flex lg:gap-x-16 items-center">
          <HeaderLogo />
          <Navigation />
        </div>

        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Language</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost">Login</Button>
          <Button>Logout</Button>
        </div>
      </div>
    </header>
  );
};
