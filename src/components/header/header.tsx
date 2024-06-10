import { storage } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    storage.local.clean();
    storage.session.clean();
    navigate("/auth/sign-in");
  };

  return (
    <header className="bg-primary text-white h-16 w-full p-4">
      <div className="container mx-auto flex flex-row items-center">
        <h1 className="text-xl font-bold">Teste Teddy</h1>

        <nav className="ml-auto flex flex-row">
          <ul className="flex gap-4">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="/user/companies">Empresas</a>
            </li>
            <li>
              <a href="/user/partners">Parceiros</a>
            </li>
            <li>
              <button onClick={logout}>Sair</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
