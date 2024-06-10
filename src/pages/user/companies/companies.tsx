import { useQuery } from "@tanstack/react-query";
import { Button } from "../../../components";
import { getCompanies } from "../../../services";
import { openModalById } from "../../../utils";
import { ModalNewCompany } from "./components";
import { CompanyCard } from "./components/company-card";

export const Companies = () => {
  const { data, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ["get-companies"],
    queryFn: () => getCompanies(),
  });

  return !isLoading && !isRefetching && data ? (
    <>
      <div className="container mx-auto py-4 justify-between flex items-center">
        <h1 className="font-semibold text-2xl">Empresas</h1>
        <Button
          type="button"
          variant="success"
          onClick={() => openModalById(`new-company`)}
        >
          Nova empresa
        </Button>
      </div>

      <div className="container mx-auto grid grid-cols-4 gap-4 pb-4">
        {data.map((company) => (
          <CompanyCard key={company.id} company={company} refetch={refetch} />
        ))}
      </div>

      <ModalNewCompany />
    </>
  ) : (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <span className="loading loading-spinner loading-lg text-primary" />
    </div>
  );
};
