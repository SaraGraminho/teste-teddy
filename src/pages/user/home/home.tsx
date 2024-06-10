import { storage } from "../../../utils";

export const Home = () => {
  const userName =
    storage.session.get(storage.enum.User) ??
    storage.local.get(storage.enum.User);

  return (
    <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
      <h1 className="text-2xl font-semibold">Olá, {userName}!</h1>
    </div>
  );
};
