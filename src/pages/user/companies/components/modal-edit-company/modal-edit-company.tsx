/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { Modal, Button, Input } from "../../../../../components";
import { putCompany } from "../../../../../services";
import { closeModalById } from "../../../../../utils";
import { useState } from "react";
import type * as T from "./types";
import { toast } from "react-toastify";

export const ModalEditCompany = ({ refetch, company }: T.Props) => {
  const [companyName, setCompanyName] = useState(company.companyName);
  const [collaboratorsNumber, setCollaboratorsNumber] = useState(
    company.collaboratorsCount
  );
  const [companyStatus, setCompanyStatus] = useState(company.isActive);

  const { mutate, isPending } = useMutation({
    mutationKey: ["put-company"],
    mutationFn: (data: T.PutCompany) => putCompany(company.id, data),
    onSuccess: () => {
      toast.success("Empresa editada com sucesso.");
      refetch();
      closeModalById(`edit-company-${company.id}`);
    },
    onError: () => {
      toast.error("Erro ao editar a empresa.");
    },
  });

  const cleanDataAndCloseModal = () => {
    setCompanyName(company.companyName);
    setCollaboratorsNumber(company.collaboratorsCount);
    setCompanyStatus(company.isActive);
    closeModalById(`edit-company-${company.id}`);
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
    <Modal title="Editar empresa" id={`edit-company-${company.id}`}>
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
            onChange={(e) => setCollaboratorsNumber(e.target.value as any)}
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
