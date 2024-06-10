import axios from "axios";
import type * as T from "./types";

export const getPartners = async () => {
  const { data } = await axios.get<T.GetPartnersResponse>(
    "https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners"
  );
  return data;
};

export const deletePartner = async (id: string) => {
  const { data } = await axios.delete(
    `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`
  );
  return data;
};

export const putPartner = async (id: string, partner: T.PutPartner) => {
  const { data } = await axios.put(
    `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`,
    partner
  );
  return data;
};

export const postPartner = async (partner: T.PostPartner) => {
  const { data } = await axios.post(
    "https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/",
    partner
  );
  return data;
};
