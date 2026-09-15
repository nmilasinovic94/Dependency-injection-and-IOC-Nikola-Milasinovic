import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;

  // Dependencies injected by the IoC container, in this order.
  static $inject = ['http', 'config'];

  constructor(http: HTTP, apiConfig: ApiConfig) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
