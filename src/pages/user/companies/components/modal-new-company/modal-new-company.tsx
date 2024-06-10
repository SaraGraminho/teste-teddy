import { Modal, Button, Input } from "../../../../../components";
import { closeModalById } from "../../../../../utils";
import { useState } from "react";

export const ModalNewCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [collaboratorsNumber, setCollaboratorsNumber] = useState("");
  const [companyStatus, setCompanyStatus] = useState(false);

  const cleanDataAndCloseModal = () => {
    setCompanyName("");
    setCollaboratorsNumber("");
    setCompanyStatus(false);
    closeModalById(`new-company`);
  };

  const onSubmit = () => {
    if (!companyName || Number(collaboratorsNumber) < 0) {
      return alert("Preencha todos os campos.");
    }

    alert("Função para criar uma nova empresa");
  };

  return (
    <Modal title="Nova empresa" id={`new-company`}>
      <div className="flex w-auto flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Input
            label="Nome da empresa:"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            type="text"
            placeholder="Digite o nome da empresa"
          />

          <Input
            label="Quantidade de colaboradores:"
            value={collaboratorsNumber}
            onChange={(e) => setCollaboratorsNumber(e.target.value)}
            type="number"
            placeholder="Digite a quantidade de colaboradores"
          />

          <label className="label cursor-pointer">
            <span className="label-text">A empresa está ativa?</span>
            <input
              type="checkbox"
              onChange={(e) => setCompanyStatus(e.target.checked)}
              defaultChecked={companyStatus}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            variant="primary-outline"
            onClick={cleanDataAndCloseModal}
          >
            Cancelar
          </Button>

          <Button type="button" variant="primary" onClick={onSubmit}>
            Confirmar
          </Button>
        </div>
      </div>
    </Modal>
  );
};
