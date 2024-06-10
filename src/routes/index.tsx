import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home, SignIn, UserOutlet } from "../pages";

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
    ],
  },
  {
    path: "*",
    element: <Navigate to="/auth/sign-in" />,
  },
]);
