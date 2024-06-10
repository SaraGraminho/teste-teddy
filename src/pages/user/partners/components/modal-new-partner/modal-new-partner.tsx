import { Modal, Button, Input } from "../../../../../components";
import { closeModalById } from "../../../../../utils";
import { useState } from "react";

export const ModalNewPartner = () => {
  const [partnerName, setPartnerName] = useState("");
  const [partnerDescription, setPartnerDescription] = useState("");
  const [partnerRepository, setPartnerRepository] = useState("");
  const [partnerUrlDoc, setPartnerUrlDoc] = useState("");

  const cleanDataAndCloseModal = () => {
    setPartnerName("");
    setPartnerDescription("");
    setPartnerRepository("");
    setPartnerUrlDoc("");
    closeModalById(`new-partner`);
  };

  const onSubmit = () => {
    if (
      !partnerName ||
      !partnerDescription ||
      !partnerRepository ||
      !partnerUrlDoc
    ) {
      return alert("Preencha todos os campos.");
    }

    alert("Função para criar novo parceiro");
  };

  return (
    <Modal title="Novo Parceiro" id={`new-partner`}>
      <div className="flex w-auto flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Input
            label="Nome do parceiro:"
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
            type="text"
            placeholder="Digite o nome do parceiro"
          />

          <Input
            label="Descrição:"
            value={partnerDescription}
            onChange={(e) => setPartnerDescription(e.target.value)}
            type="text"
            placeholder="Digite uma descrição"
          />

          <Input
            label="Repositório do Git:"
            value={partnerRepository}
            onChange={(e) => setPartnerRepository(e.target.value)}
            type="text"
            placeholder="Digite o repositório do Git"
          />
          <Input
            label="URL do documento:"
            value={partnerUrlDoc}
            onChange={(e) => setPartnerUrlDoc(e.target.value)}
            type="text"
            placeholder="Digite a URL"
          />
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
