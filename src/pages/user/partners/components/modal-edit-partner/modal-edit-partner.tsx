/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { Modal, Button, Input } from "../../../../../components";
import { putPartner } from "../../../../../services";
import { closeModalById } from "../../../../../utils";
import { useState } from "react";
import type * as T from "./types";
import { toast } from "react-toastify";

export const ModalEditPartner = ({ refetch, partner }: T.Props) => {
  const [partnerName, setPartnerName] = useState(partner.name);
  const [description, setDescription] = useState(partner.description);
  const [repositoryGit, setRepositoryGit] = useState(partner.repositoryGit);
  const [urlDoc, setUrlDoc] = useState(partner.urlDoc);

  const { mutate, isPending } = useMutation({
    mutationKey: ["put-partner"],
    mutationFn: (data: T.PutPartner) => putPartner(partner.id, data),
    onSuccess: () => {
      toast.success("Parceiro editado com sucesso.");
      refetch();
      closeModalById(`edit-partner-${partner.id}`);
    },
    onError: () => {
      toast.error("Erro ao editar o parceiro.");
    },
  });

  const cleanDataAndCloseModal = () => {
    setPartnerName(partner.name);
    setDescription(partner.description);
    setRepositoryGit(partner.repositoryGit);
    setUrlDoc(partner.urlDoc);
    closeModalById(`edit-partner-${partner.id}`);
  };

  const onSubmit = () => {
    if (!partnerName || !description || !repositoryGit || !urlDoc) {
      return alert("Preencha todos os campos.");
    }

    mutate({ name: partnerName, description, repositoryGit, urlDoc });
  };

  return (
    <Modal title="Editar parceiro" id={`edit-partner-${partner.id}`}>
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Digite a descrição"
          />
        </div>

        <Input
          label="Repositório do Git:"
          value={repositoryGit}
          onChange={(e) => setRepositoryGit(e.target.value)}
          type="text"
          placeholder="Digite o repositório do Git"
        />

        <Input
          label="URL do documento:"
          value={urlDoc}
          onChange={(e) => setUrlDoc(e.target.value)}
          type="text"
          placeholder="Digite a URL do documento"
        />
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button
          type="button"
          variant="primary-outline"
          onClick={cleanDataAndCloseModal}
          disabled={isPending}
        >
          Cancelar
        </Button>

        <Button
          isLoading={isPending}
          disabled={isPending}
          type="button"
          variant="primary"
          onClick={onSubmit}
        >
          Confirmar
        </Button>
      </div>
    </Modal>
  );
};
