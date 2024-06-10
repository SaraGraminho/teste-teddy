import type * as T from "./types";

const PREFIX = "@app-teste-teddy";

const get = <T = string>(name: T.StorageEnum) => {
  const item = localStorage.getItem(`${PREFIX}:${name}`);
  return (item ? JSON.parse(item) : item) as T;
};

const set = <T = string>(name: T.StorageEnum, value: T) => {
  localStorage.setItem(`${PREFIX}:${name}`, JSON.stringify(value));
};

const remove = (name: T.StorageEnum) => {
  localStorage.removeItem(`${PREFIX}:${name}`);
};

const clear = () => {
  localStorage.clear();
};

export const local = { get, set, remove, clear };
