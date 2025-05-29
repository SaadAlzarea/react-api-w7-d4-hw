import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
//pages
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Characters from "../pages/Characters";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "char", element: <Characters /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
