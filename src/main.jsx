import { createRoot } from "react-dom/client";
import "./index.css";
import QueryProviders from "./providers/query-provider";
// import StoreProvider from "./providers/store-provider";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes";

createRoot(document.getElementById("root")).render(
  // <StoreProvider>
    <QueryProviders>
    <RouterProvider router={router} />
    </QueryProviders>
  ,
);

{/* </StoreProvider> */}