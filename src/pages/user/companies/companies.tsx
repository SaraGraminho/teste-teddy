import { Button } from "../../../components";
import { openModalById } from "../../../utils";
import { ModalNewCompany } from "./components";

export const Companies = () => {
  return (
    <>
      <div className="container mx-auto py-4 justify-between flex items-center">
        <h1 className="font-semibold text-2xl">Empresas</h1>
        <Button
          type="button"
          variant="success"
          onClick={() => openModalById(`new-company`)}
        >
          Nova empresa
        </Button>
      </div>

      <ModalNewCompany />
    </>
  );
};
