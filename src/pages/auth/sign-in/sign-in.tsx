import { Button, Input } from "../../../components";
import { useState } from "react";
import { storage } from "../../../utils";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [stillConnected, setStillConnected] = useState(false);
  console.log(stillConnected);

  const onSubmit = () => {
    if (!user || !password) return alert("Preencha todos os campos.");

    if (stillConnected) {
      storage.local.set(storage.enum.User, user);
    } else {
      storage.session.set(storage.enum.User, user);
    }

    navigate("/user/home");
  };

  return (
    <main className="bg-primary h-screen flex justify-center items-center">
      <div className="bg-white w-[360px] rounded-md p-4 flex flex-col gap-4">
        <h1 className="font-bold text-2xl justify-center flex">LOGIN</h1>

        <Input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuário"
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />

        <label className="label cursor-pointer">
          <span className="label-text">Manter conectado</span>
          <input
            type="checkbox"
            onChange={(e) => setStillConnected(e.target.checked)}
            defaultChecked={stillConnected}
            className="checkbox checkbox-primary"
          />
        </label>

        <Button size="full" onClick={onSubmit} variant="primary">
          Acessar
        </Button>
      </div>
    </main>
  );
};
