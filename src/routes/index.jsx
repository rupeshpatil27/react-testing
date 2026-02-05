import { createBrowserRouter } from "react-router";
import App from "@/App";

import SignInPage from "@/pages/sign-in";
import SignUpPage from "@/pages/sign-up";
import HomePage from "@/pages/home";
import ProductPage from "@/pages/admin/product";
import ProductsPage from "@/pages/products";
import { ProtectedRoute } from "@/utils/protected-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "sign-up/*",
        element: <SignUpPage />,
      },
      {
        path: "sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "admin",
        children: [
          {
            path: "product",
            element: (
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);
