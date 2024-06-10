import { local } from './local';
import { session } from './session';
import { StorageEnum } from './types';

export const storage = {
  local: {
    get: local.get,
    set: local.set,
    remove: local.remove,
    clean: local.clear,
  },
  session: {
    get: session.get,
    set: session.set,
    remove: session.remove,
    clean: session.clear,
  },
  enum: StorageEnum,
};
