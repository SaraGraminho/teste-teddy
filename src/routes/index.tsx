import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home, SignIn } from "../pages";

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
    path: "/user/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/auth/sign-in" />,
  },
]);
