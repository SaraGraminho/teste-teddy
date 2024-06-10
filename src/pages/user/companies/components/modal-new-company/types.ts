export type PostCompany = {
  companyName: string;
  collaboratorsCount: number;
  isActive: boolean;
};

export type Props = {
  refetch: () => void;
};
