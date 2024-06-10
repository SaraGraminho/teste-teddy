export type GetCompaniesResponse = {
  companyName: string;
  collaboratorsCount: number;
  isActive: boolean;
  createdAt: string;
  id: string;
}[];

export type PostCompany = {
  companyName: string;
  collaboratorsCount: number;
  isActive: boolean;
};

export type PutCompany = {
  companyName: string;
  collaboratorsCount: number;
  isActive: boolean;
};
