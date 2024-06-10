import { useQuery } from "@tanstack/react-query";
import { Button } from "../../../components";
import { openModalById } from "../../../utils";
import { ModalNewPartner, PartnerCard } from "./components";
import { getPartners } from "../../../services";

export const Partners = () => {
  const { data, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ["get-partners"],
    queryFn: () => getPartners(),
  });

  return !isLoading && !isRefetching && data ? (
    <>
      <div className="container mx-auto py-4 justify-between flex items-center">
        <h1 className="font-semibold text-2xl">Parceiros</h1>
        <Button
          type="button"
          variant="success"
          onClick={() => openModalById(`new-partner`)}
        >
          Novo parceiro
        </Button>
      </div>

      <div className="container mx-auto grid grid-cols-3 gap-4 pb-4">
        {data.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} refetch={refetch} />
        ))}
      </div>

      <ModalNewPartner refetch={refetch} />
    </>
  ) : (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <span className="loading loading-spinner loading-lg text-primary" />
    </div>
  );
};
