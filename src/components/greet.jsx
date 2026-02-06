import { Loader2 } from "lucide-react";
import { Link } from "react-router";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";

export const Greet = () => {
  const { user } = useUser();
  return (
    <>
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
    </>
  );
};
