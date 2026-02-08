import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import ClerkAuthProviders from "./providers/clerk-provider";
import QueryProviders from "./providers/query-provider";
import StoreProvider from "./providers/store-provider";
import "./index.css";

import { router } from "./routes";

createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <StrictMode>
      <ClerkAuthProviders>
        <QueryProviders>
          <RouterProvider router={router} />
        </QueryProviders>
      </ClerkAuthProviders>
    </StrictMode>
  </StoreProvider>,
);
