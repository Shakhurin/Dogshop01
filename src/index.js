import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { User } from "./pages/User";
import { Products } from "./pages/Products";
import { AboutProduct } from "./pages/AboutProduct";
import { NoToken } from "./pages/NoToken";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:idOfProduct",
        element: <AboutProduct />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "favourite",
        element: <div>Избранное же, ну</div>,
      },
      {
        path: "cart",
        element: <div>Корзина... Ну типа</div>,
      },
      {
        path: "oops",
        element: <NoToken />,
      },
    ],
  },
]);

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
