import { Navigate, createBrowserRouter } from "react-router-dom";
import { Companies, Home, Partiners, SignIn, UserOutlet } from "../pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="/auth/sign-in" />,
  },
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
  {
    path: "/user",
    element: <UserOutlet />,
    children: [
      {
        path: "/user/home",
        element: <Home />,
      },
      {
        path: "/user/companies",
        element: <Companies />,
      },
      {
        path: "/user/partners",
        element: <Partiners />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/auth/sign-in" />,
  },
]);
