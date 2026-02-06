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
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Loader2, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

export const Header = () => {
  const { user } = useUser();

  const totalItems = useSelector((state) =>
    state?.cart?.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <header className="border-b w-full p-4 flex justify-between items-center bg-white sticky top-0 z-50">
      <div className="w-full flex items-center justify-between">
        <div className="flex lg:gap-x-16 items-center">
          <HeaderLogo />
          <Navigation />
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative cursor-pointer">
            <ShoppingCart className="size-6 text-slate-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold rounded-full size-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Language</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-accent-400" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <Button>
                <Link to="/sign-in">Login</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <p>Hello, {user?.firstName}!</p>
              <UserButton />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};
