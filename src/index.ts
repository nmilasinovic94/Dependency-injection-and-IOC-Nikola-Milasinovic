import { createIoCContainer } from './ioc';

import type { User, ApiConfig } from './types';

const renderUsers = async (ioc: ReturnType<typeof createIoCContainer>) => {
  const usersService = ioc.resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = (config: { api: ApiConfig }) => {
  // The IoC container wires up config, Logger, HTTP and Users automatically.
  const ioc = createIoCContainer(config.api);

  const logger = ioc.resolve('logger');
  logger.info('Page is loaded.');

  renderUsers(ioc);
};

window.onload = (event: Event) => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  app(config);
};
