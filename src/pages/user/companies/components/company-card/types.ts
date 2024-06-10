export type Props = {
  company: {
    companyName: string;
    collaboratorsCount: number;
    isActive: boolean;
    createdAt: string;
    id: string;
  };
  refetch: () => void;
};
