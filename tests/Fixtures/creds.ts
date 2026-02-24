import { test as base } from '@playwright/test';

type Creds = { username: string; password: string };

export const test = base.extend<{ creds: Creds }>({
  creds: async ({}, use) => {
    const username = 'standard_user';
    const password = 'secret_sauce';
    if (!username || !password) throw new Error('Missing USERNAME or PASSWORD');
    await use({ username, password });
  },
});

export { expect } from '@playwright/test';