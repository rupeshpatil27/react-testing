import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import QueryProviders from "./providers/query-provider";
// import StoreProvider from "./providers/store-provider";

import { router } from "./routes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")).render(
  // <StoreProvider>
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryProviders>
        <RouterProvider router={router} />
      </QueryProviders>
    </ClerkProvider>
  </StrictMode>,
);

{
  /* </StoreProvider> */
}
