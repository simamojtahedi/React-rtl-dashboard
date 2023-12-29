import Home from "../pages/home";
import Customers from "../pages/customers";
import Products from "../pages/products";
import Profile from "../pages/profile";

export const mainRoutes = [
  { pathName: "/", element: <Home /> },
  { pathName: "/profile", element: <Profile /> },
  { pathName: "/products", element: <Products /> },
  { pathName: "/customers", element: <Customers /> },
];
