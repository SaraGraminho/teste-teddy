import { Modal, Button, Input } from "../../../../../components";
import { closeModalById } from "../../../../../utils";

export const ModalNewCompanies = () => {
  const handleConfirm = () => {
    alert("Fnção para criar uma nova empresa");
  };

  return (
    <Modal title="Nova empresa" id={`new-companies`}>
      <div className="flex w-auto flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Input
            label="Nome da empresa:"
            type="text"
            placeholder="Digite o nome da empresa"
          />

          <Input
            label="Quantidade de colaboradores:"
            type="number"
            placeholder="Digite a quantidade de colaboradores"
          />

          <label className="label cursor-pointer">
            <span className="label-text">A empresa está ativa?</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary"
            />
          </label>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            variant="primary-outline"
            onClick={() => closeModalById(`new-companies`)}
          >
            Cancelar
          </Button>

          <Button type="button" variant="primary" onClick={handleConfirm}>
            Confirmar
          </Button>
        </div>
      </div>
    </Modal>
  );
};
