import axios from "axios";
import type * as T from "./types";

export const getCompanies = async () => {
  const { data } = await axios.get<T.GetCompaniesResponse>(
    "https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies"
  );
  return data;
};

export const deleteCompany = async (id: string) => {
  const { data } = await axios.delete(
    `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`
  );
  return data;
};
