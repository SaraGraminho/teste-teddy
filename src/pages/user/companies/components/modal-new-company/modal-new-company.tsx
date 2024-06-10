import { useMutation } from "@tanstack/react-query";
import { Modal, Button, Input } from "../../../../../components";
import { postCompany } from "../../../../../services";
import { closeModalById } from "../../../../../utils";
import { useState } from "react";
import type * as T from "./types";
import { toast } from "react-toastify";

export const ModalNewCompany = ({ refetch }: T.Props) => {
  const [companyName, setCompanyName] = useState("");
  const [collaboratorsNumber, setCollaboratorsNumber] = useState("");
  const [companyStatus, setCompanyStatus] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: ["post-company"],
    mutationFn: (data: T.PostCompany) => postCompany(data),
    onSuccess: () => {
      toast.success("Empresa criada com sucesso.");
      refetch();
      closeModalById("new-company");
    },
    onError: () => {
      toast.error("Erro ao criar a empresa.");
    },
  });

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

    mutate({
      collaboratorsCount: Number(collaboratorsNumber),
      companyName,
      isActive: companyStatus,
    });
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
      </div>
    </Modal>
  );
};
