import { storage } from "../../../utils";

export const Home = () => {
  return (
    <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
      <h1 className="text-2xl font-semibold">
        Olá, {storage.session.get(storage.enum.User)}!
      </h1>
    </div>
  );
};
