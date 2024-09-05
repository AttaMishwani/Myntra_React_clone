import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import "./index.css";
import Bags from "./routes/Bags";
import Home from "./routes/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import myntraStore from "./store/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: postLoader*/ },
      {
        path: "/bags",
        element: <Bags />,
        // action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
