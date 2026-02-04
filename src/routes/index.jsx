import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "@/pages/home";
import Products from "@/pages/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
