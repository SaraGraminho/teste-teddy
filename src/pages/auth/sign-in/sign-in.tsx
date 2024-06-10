import { Button, Input } from "../../../components";
import { useState } from "react";
import { storage } from "../../../utils";

export const SignIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (!user || !password) return alert("Preencha todos os campos.");
    storage.session.set(storage.enum.User, user);
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

        <Button size="full" onClick={onSubmit} variant="primary">
          Acessar
        </Button>
      </div>
    </main>
  );
};
