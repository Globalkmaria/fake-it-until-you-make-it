import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.scss";
import "./styles/global.scss";
import "./styles/common.scss";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./views/Layout/Layout";
import { ErrorPage } from "./views/ErrorPage/ErrorPage";
import { Home } from "./views/Home/Home";
import { Cards } from "./views/Cards/Cards";

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
      {
        path: "/cards",
        element: <Cards />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
