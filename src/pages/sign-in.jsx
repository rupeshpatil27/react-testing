import React from "react";
import { ClerkLoading, SignIn } from "@clerk/clerk-react";
import { Loader2, ShoppingBag } from "lucide-react";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 lg:p-12">
      <div className="mb-10 flex flex-col items-center gap-2 md:hidden">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
          <ShoppingBag size={28} />
        </div>
        <h2 className="text-2xl font-bold text-blue-700">FinTrack AI</h2>
      </div>

      <div className="w-full max-w-md flex flex-col items-center justify-center">
        <div className="mb-8 space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Sign In
          </h2>
          <p className="text-slate-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        <ClerkLoading>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Loader2 className="h-10 w-10 animate-spin text-blue-700" />
            <p className="text-sm text-slate-500 animate-pulse">
              Securing connection...
            </p>
          </div>
        </ClerkLoading>

        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-none border-none p-0 bg-transparent",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              formButtonPrimary:
                "bg-blue-700 hover:bg-blue-800 text-sm normal-case py-3 shadow-md transition-all",
              socialButtonsBlockButton:
                "border-slate-200 hover:bg-slate-50 text-slate-600 font-medium transition-all",
              footerActionLink:
                "text-blue-700 hover:text-blue-800 font-semibold",
              formFieldInput:
                "rounded-lg border-slate-200 focus:border-blue-700 focus:ring-blue-700",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
