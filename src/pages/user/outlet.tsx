import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { useEffect } from "react";
import { storage } from "../../utils";

export const UserOutlet = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const localUser = storage.local.get(storage.enum.User);
    const sessionUser = storage.session.get(storage.enum.User);
    if (!localUser && !sessionUser) navigate("/auth/sign-in");
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
