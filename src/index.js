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
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Cart } from "./pages/Cart";
import { Favourites } from "./pages/Favourite";

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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "oops",
        element: <NoToken />,
      },
      {
        path: "favourites",
        element: <Favourites />
      }
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
