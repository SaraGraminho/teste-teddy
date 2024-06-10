import { Button } from "../../../components";
import { openModalById } from "../../../utils";
import { ModalNewPartner } from "./components";

export const Partners = () => {
  return (
    <>
      <div className="container mx-auto py-4 justify-between flex items-center">
        <h1 className="font-semibold text-2xl">Parceiros</h1>
        <Button
          type="button"
          variant="success"
          onClick={() => openModalById(`new-partner`)}
        >
          Novo parceiro
        </Button>
      </div>

      <ModalNewPartner />
    </>
  );
};
