export type Props = {
  partner: {
    name: string;
    description: string;
    repositoryGit: string;
    urlDoc: string;
    createdAt: string;
    id: string;
  };
  refetch: () => void;
};
