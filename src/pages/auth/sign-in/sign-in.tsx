import { Button } from "../../../components";

export const SignIn = () => {
  return (
    <main className="bg-primary h-screen flex justify-center items-center">
      <div className="bg-white w-[360px] h-96 rounded-md">
        <h1>Faça o seu login</h1>
        <form>
          <Button size="full" type="submit" variant="primary">
            Acessar
          </Button>
        </form>
      </div>
    </main>
  );
};
