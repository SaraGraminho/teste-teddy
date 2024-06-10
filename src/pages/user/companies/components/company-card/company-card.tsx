import { format } from "date-fns";
import type * as T from "./types";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { deleteCompany } from "../../../../../services";
import { toast } from "react-toastify";

export const CompanyCard = ({ company, refetch }: T.Props) => {
  const { mutate } = useMutation({
    mutationKey: ["delete-company"],
    mutationFn: () => deleteCompany(company.id),
    onSuccess: () => {
      toast.success("Empresa deletada com sucesso.");
      refetch();
    },
    onError: () => {
      toast.error("Erro ao deletar a empresa.");
    },
  });

  return (
    <div className="rounded-lg border relative">
      <div className="flex flex-col gap-1 p-4">
        <FaPen className="absolute cursor-pointer right-10 text-xs" />

        <FaTrashAlt
          onClick={() => mutate()}
          className="absolute cursor-pointer right-4 text-xs text-red-600"
        />

        <p className="truncate text-sm pr-12" title={company.companyName}>
          <span className="font-bold">Nome da empresa:</span>{" "}
          {company.companyName}
        </p>

        <p
          className="truncate text-sm"
          title={company.collaboratorsCount.toString()}
        >
          <span className="font-bold">Colaboradores:</span>{" "}
          {company.collaboratorsCount}
        </p>

        <p
          className="truncate text-sm"
          title={company.isActive ? "Sim" : "Não"}
        >
          <span className="font-bold">Empresa está ativa?</span>{" "}
          {company.isActive ? "Sim" : "Não"}
        </p>

        <p className="truncate text-sm" title={company.createdAt}>
          <span className="font-bold">Criado em:</span>{" "}
          {format(company.createdAt, "dd/MM/yyyy")}
        </p>
      </div>
    </div>
  );
};
