import { createBrowserRouter } from "react-router";
import App from "./App";
import Details from "./components/Details";
import OrderCard from "./components/OrderCard";
import Products from "./components/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path: "/details",
    element: <Details></Details>,
  },
  {
    path: "/ordernow",
    element: <OrderCard></OrderCard>,
  },
]);

export default router;
