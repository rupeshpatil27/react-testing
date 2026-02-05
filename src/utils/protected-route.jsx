import { useAuth } from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";
import { Navigate, useLocation } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded)
    return (
      <div className="h-125 w-full flex items-center justify-center">
        <Loader2 className="size-6 text-slate-300 animate-spin" />
      </div>
    );

  if (!isSignedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};
