export type PostPartner = {
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
};

export type Props = {
  refetch: () => void;
};
