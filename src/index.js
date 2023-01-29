import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.scss";
import "./styles/global.scss";
import "./styles/common.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./views/Layout";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
