import { storage } from "../../../utils";

export const Home = () => {
  return <h1>{storage.session.get(storage.enum.User)}</h1>;
};
