/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import dayjs from 'dayjs';

/* eslint-disable class-methods-use-this */
class DatabaseProvider {
  isRefreshing = false;

  providerName = 'prototype';

  lastRefreshTime: dayjs.Dayjs;

  async connect(): Promise<any> {
    throw new Error('Not Implemented');
  }

  async findAllUsers(): Promise<any> {
    throw new Error('Not Implemented');
  }

  async loadUser(username: string): Promise<any> {
    throw new Error('Not Implemented');
  }

  async addUser(username: string): Promise<any> {
    throw new Error('Not Implemented');
  }

  async removeUser(username: string): Promise<any> {
    throw new Error('Not Implemented');
  }

  async removeAllUsers(): Promise<any> {
    throw new Error('Not Implemented');
  }
}

export default DatabaseProvider;
