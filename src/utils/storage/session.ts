import type * as T from "./types";

const PREFIX = "@app-teste-teddy";

const get = <T = string>(name: T.StorageEnum) => {
  const item = sessionStorage.getItem(`${PREFIX}:${name}`);
  return (item ? JSON.parse(item) : item) as T;
};

const set = <T = string>(name: T.StorageEnum, value: T) => {
  sessionStorage.setItem(`${PREFIX}:${name}`, JSON.stringify(value));
};

const remove = (name: T.StorageEnum) => {
  sessionStorage.removeItem(`${PREFIX}:${name}`);
};

const clear = () => {
  sessionStorage.clear();
};

export const session = { get, set, remove, clear };
