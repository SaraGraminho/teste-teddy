import type * as T from "./types";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { deletePartner } from "../../../../../services";
import { toast } from "react-toastify";
import { ModalEditPartner } from "../modal-edit-partner";
import { openModalById } from "../../../../../utils";

export const PartnerCard = ({ partner, refetch }: T.Props) => {
  const { mutate } = useMutation({
    mutationKey: ["delete-partner"],
    mutationFn: () => deletePartner(partner.id),
    onSuccess: () => {
      toast.success("Parceiro deletado com sucesso.");
      refetch();
    },
    onError: () => {
      toast.error("Erro ao deletar o parceiro.");
    },
  });

  return (
    <>
      <div className="rounded-lg border relative">
        <div className="flex flex-col gap-1 p-4">
          <FaPen
            onClick={() => openModalById(`edit-partner-${partner.id}`)}
            className="absolute cursor-pointer right-10 text-xs"
          />

          <FaTrashAlt
            onClick={() => mutate()}
            className="absolute cursor-pointer right-4 text-xs text-red-600"
          />

          <p className="truncate text-sm pr-12" title={partner.name}>
            <span className="font-bold">Nome do parceiro:</span> {partner.name}
          </p>

          <p className="truncate text-sm" title={partner.description}>
            <span className="font-bold">Descrição:</span> {partner.description}
          </p>

          <p className="truncate text-sm" title={partner.repositoryGit}>
            <span className="font-bold">Repositório do Git:</span>{" "}
            {partner.repositoryGit}
          </p>

          <p className="truncate text-sm" title={partner.urlDoc}>
            <span className="font-bold">URL do documento:</span>{" "}
            {partner.urlDoc}
          </p>

          <p className="truncate text-sm" title={partner.createdAt}>
            <span className="font-bold">Criado em:</span> {partner.createdAt}
          </p>
        </div>
      </div>

      <ModalEditPartner refetch={refetch} partner={partner} key={partner.id} />
    </>
  );
};
