import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  UNSAFE_decodeViaTurboStream,
} from "react-router-dom";

import Layout from "./Layout.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
