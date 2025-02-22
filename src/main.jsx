import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Route regarding future flag
const router = createBrowserRouter(
  [
    {
      path : "/*",
      element : <App />,
    },
  ],
  {
    future : {
      v7_startTransition: true, 
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
