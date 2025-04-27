import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes";

createRoot(document.getElementById("root")).render(
<StrictMode>
<RouterProvider router={router}/>
</StrictMode>
);

// import { createBrowserRouter, RouterProvider } from "react-router";

// import React from "react";
// import ReactDOM from "react-dom/client";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello World</div>,
//   },
// ]);

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
