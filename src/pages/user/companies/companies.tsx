/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { Button } from "../../../components";
import { getCompanies } from "../../../services";
import { openModalById } from "../../../utils";
import { ModalNewCompany } from "./components";
import { CompanyCard } from "./components/company-card";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Companies = () => {
  const itemsPerPage = 16;
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ["get-companies"],
    queryFn: () => getCompanies(),
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page") || "") || 1;
    setCurrentPage(page);
  }, [location.search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((data?.length as any) / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}`);
  };

  const copyPageToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copiado para a área de transferência.");
  };

  return !isLoading && !isRefetching && data ? (
    <>
      <div className="container mx-auto py-4 justify-between flex items-center">
        <h1 className="font-semibold text-2xl">Empresas</h1>

        <div className="flex gap-4">
          <Button
            onClick={copyPageToClipboard}
            type="button"
            variant="primary-outline"
          >
            Compartilhar
          </Button>

          <Button
            type="button"
            variant="success"
            onClick={() => openModalById(`new-company`)}
          >
            Nova empresa
          </Button>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-4 gap-4 pb-4">
        {currentData?.map((company) => (
          <CompanyCard key={company.id} company={company} refetch={refetch} />
        ))}
      </div>

      <div className="container mx-auto flex items-center justify-end gap-4 pb-4">
        <p>
          Página {currentPage} de {totalPages}
        </p>

        <Button
          size={"small"}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Anterior
        </Button>

        <Button
          size={"small"}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Próximo
        </Button>
      </div>

      <ModalNewCompany refetch={refetch} />
    </>
  ) : (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <span className="loading loading-spinner loading-lg text-primary" />
    </div>
  );
};
