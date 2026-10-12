import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

import type { ApiConfig } from '../types';

// Using a generic type lets the container type-check which resources
// can be registered and resolved.
export type IoCResources = {
  config: ApiConfig;
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
};

export const createIoCContainer = () => {
  const ioc = new IoCContainer<IoCResources>();

  // Class resources. Their dependencies are declared via the static
  // `$inject` property on each class and resolved lazily on `resolve`,
  // so `config` can be registered later, once it is available.
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);

  return ioc;
};
