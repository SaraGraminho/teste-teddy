export type GetPartnersResponse = {
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
  createdAt: string;
  id: string;
}[];

export type PutPartner = {
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
};

export type PostPartner = {
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
};
